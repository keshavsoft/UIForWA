let StartFunc = (event) => {
    webSocket.send("returnOnlineClients");
};

export { StartFunc };