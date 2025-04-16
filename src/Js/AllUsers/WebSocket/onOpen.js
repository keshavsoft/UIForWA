let StartFunc = (event) => {
    webSocket.send("returnOnlineClientsWOMe");
};

export { StartFunc };