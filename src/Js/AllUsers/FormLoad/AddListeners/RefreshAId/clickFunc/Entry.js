let StartFunc = () => {
    // GlobalWorker.port.postMessage("returnOnlineClients");
    webSocket.send("returnOnlineClients");
};

export { StartFunc };