let StartFunc = ( {inRowData})=> {
    // console.log("SEND",inRowData);

    // webSocket.send("sent11")
    webSocket.send(JSON.stringify({Type:"sendMessage",toId:inRowData.id,Message:`Hello ${inRowData.Name}`}))
};

export { StartFunc };