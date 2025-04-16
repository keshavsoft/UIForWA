let StartFunc = (event) => {
    console.log("event : ", event.data);
    jFLocalSendMessage({ inMessage: event.data });
};

const jFLocalSendMessage = ({ inMessage }) => {
    const template = document.querySelector("#RecieveMessageId");
    let jVarLocalChatContentId = document.getElementById('ChatContentId');

    // Clone the new row and insert it into the table
    const clone = template.content.cloneNode(true);
    clone.querySelector(".chat-message").innerHTML = inMessage;

    jVarLocalChatContentId.appendChild(clone);
};

export { StartFunc };