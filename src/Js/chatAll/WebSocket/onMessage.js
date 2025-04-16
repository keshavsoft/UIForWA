let StartFunc = (event) => {
    console.log("event : ", event.data);
    jFLocalSendMessage({ inMessage: JSON.parse(event.data)});
};

const jFLocalSendMessage = ({ inMessage }) => {
    const template = document.querySelector("#chart");
    let jVarLocalChatContentId = document.querySelector('section');

    // Clone the new row and insert it into the table
    const clone = template.content.cloneNode(true);

    let h = clone.querySelector(".name .mb-0");

    console.log(`Hellasadsdo ${inMessage}`)

    console.log(`Hello ${inMessage.fromId}`)

    h.innerText= inMessage.fromId || "KeshavSoft";


    jVarLocalChatContentId.querySelector(".row").appendChild(clone);
};

export { StartFunc };