let StartFunc = (event) => {
    let jVarLocalStatusId = document.getElementById('StatusId');
    jVarLocalStatusId.classList.remove("bg-warning");
    jVarLocalStatusId.classList.add("bg-success");
    webSocket.send("k1");
};

export { StartFunc };