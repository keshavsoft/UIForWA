let StartFunc = () => {
    // GlobalWorker.port.postMessage("returnOnlineClients");
    webSocket.send("returnOnlineClientsWOMe");
};

export { StartFunc };