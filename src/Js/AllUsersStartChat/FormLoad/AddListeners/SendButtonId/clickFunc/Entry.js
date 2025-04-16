let StartFunc = () => {
    let jVarLocalSendMessage = {};
    jVarLocalSendMessage.Type = "sendMessage";
    jVarLocalSendMessage.Message = "11111111111";
    jVarLocalSendMessage.toId = "2d873b57-52cf-4b85-b759-6bb141413343";
    console.log("jVarLocalSendMessage : ", jVarLocalSendMessage);

    webSocket.send(JSON.stringify(jVarLocalSendMessage));
};

export { StartFunc };