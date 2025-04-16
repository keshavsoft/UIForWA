import { StartFunc as sendMessage } from "./sendMessage.js";

let StartFunc = (event) => {
    // console.log("incoming message log : ", event.data);

    try {
        let jVarLocalParse = JSON.parse(event.data);
        console.log("jVarLocalParse : ", jVarLocalParse);
        switch (jVarLocalParse?.Type) {
            case "IsStudent":
                jFLocalShowForStudent();
                break;

            default:
                break;
        };
    } catch (error) {
        // console.log("eeeeeeeeeeeeeee log : ", event.data);
        jFLocalShowMessage({ inMessage: event.data });
    };

    // jFLocalShowMessage({ inMessage: event.data });
};

const jFLocalShowMessage = ({ inMessage }) => {
    const template = document.querySelector("#RecieveMessageId");
    let jVarLocalChatContentId = document.getElementById('ChatContentId');

    // Clone the new row and insert it into the table
    const clone = template.content.cloneNode(true);
    clone.querySelector(".chat-message").innerHTML = inMessage;

    jVarLocalChatContentId.appendChild(clone);
};

const jFLocalShowForStudent = () => {
    const template = document.querySelector("#RecieveMessageBoolId");
    let jVarLocalChatContentId = document.getElementById('ChatContentId');

    // Clone the new row and insert it into the table
    const clone = template.content.cloneNode(true);
    let jVarLocalIsStudentYesId = clone.getElementById("IsStudentYesId");

    if (jVarLocalIsStudentYesId === null === false) {
        jVarLocalIsStudentYesId.addEventListener("click", jFLocalButtonClickForYes);
    };

    let jVarLocalIsStudentNoId = clone.getElementById("IsStudentNoId");

    if (jVarLocalIsStudentNoId === null === false) {
        jVarLocalIsStudentNoId.addEventListener("click", jFLocalButtonClickForNo);
    };

    jVarLocalChatContentId.appendChild(clone);
};

const jFLocalButtonClickForYes = () => {
    // console.log("yes");
    sendMessage({ inDataToSend: "Yes", inDataType: false });
};

const jFLocalButtonClickForNo = () => {
    // console.log("noaaaaaaaaa00000000000000000");
    sendMessage({ inDataToSend: "No", inDataType: false });
};

export { StartFunc };