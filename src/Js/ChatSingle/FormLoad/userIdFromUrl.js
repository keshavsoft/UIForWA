const StartFunc = () => {
    let LocalUserUuid = getUrlQueryParams({ inGetKey: "inUserUuid" });
    console.log("LocalUserUuid : ", LocalUserUuid);
    jFLocalToInputNameId(LocalUserUuid);

    let jVarLocalDataToSend = {};
    jVarLocalDataToSend.Type = "checkUser";
    jVarLocalDataToSend.checkId = LocalUserUuid;
    jVarLocalDataToSend.Message = "hhhhhhhhhhhhhhh";

    webSocket.send(JSON.stringify(jVarLocalDataToSend));
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

let jFLocalToInputNameId = (inValue) => {
    let jVarLocalHtmlId = 'NameId';
    let jVarLocalNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalNameId === null === false) {
        jVarLocalNameId.innerHTML = inValue;
    };
};

export { StartFunc };
