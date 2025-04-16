// Create a SharedWorker Instance using the worker.js file. 
// You need this to be present in all JS files that want access to the socket
const worker = new SharedWorker("/worker.js");

// Create a unique identifier using the uuid lib. This will help us
// in identifying the tab from which a message was sent. And if a 
// response is sent from server for this tab, we can redirect it using
// this id.
const id = uuid.v4();

// Set initial web socket state to connecting. We'll modify this based
// on events.
let webSocketState = WebSocket.CONNECTING;
console.log(`Initializing the web worker for user: ${id}`);

// Connect to the shared worker
worker.port.start();

// Set an event listener that either sets state of the web socket
// Or handles data coming in for ONLY this tab.
worker.port.onmessage = event => {
    switch (event.data.type) {
        case "WSState":
            webSocketState = event.data.state;
            break;
        case "message":
            handleMessageFromPort(event.data);
            break;
    }
};

// Set up the broadcast channel to listen to web socket events.
// This is also similar to above handler. But the handler here is
// for events being broadcasted to all the tabs.
const broadcastChannel = new BroadcastChannel("WebSocketChannel");
broadcastChannel.addEventListener("message", event => {
    switch (event.data.type) {
        case "WSState":
            webSocketState = event.data.state;
            break;
        case "message":
            handleBroadcast(event.data);
            break;
    }
});

// Listen to broadcasts from server
function handleBroadcast(data) {
    console.log("This message is meant for everyone!");
    console.log(data);
}

// Handle event only meant for this tab
function handleMessageFromPort(data) {
    console.log(`This message is meant only for user with id: ${id}`);
    console.log(data);
}

// Use this method to send data to the server.
function postMessageToWSServer(input) {
    if (webSocketState === WebSocket.CONNECTING) {
        console.log("Still connecting to the server, try again later!");
    } else if (
        webSocketState === WebSocket.CLOSING ||
        webSocketState === WebSocket.CLOSED
    ) {
        console.log("Connection Closed!");
    } else {
        worker.port.postMessage({
            // Include the sender information as a uuid to get back the response
            from: id,
            data: input
        });
    }
}

// Sent a message to server after approx 2.5 sec. This will 
// give enough time to web socket connection to be created.
setTimeout(() => postMessageToWSServer("Initial message"), 2500);