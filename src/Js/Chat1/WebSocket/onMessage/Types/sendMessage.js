let StartFunc = ({ inObject }) => {
    let jVarLocalFromId = inObject.fromId;
    let jVarLocalDomSearch = document.querySelector(`section .card h6[data-uuid='${jVarLocalFromId}'`)
    console.log(jVarLocalDomSearch);
    if (jVarLocalDomSearch === null) {
        jFLocalAddCard({inMessage:inObject});
    }
    else{
        let jVarLocalClosestCard = jVarLocalDomSearch.closest(".card")
        jFLocalSendMessage({inMessage:inObject.Message, inHtmlCard:jVarLocalClosestCard});
    }
    
};

const jFLocalAddCard = ({ inMessage }) => {
    const template = document.querySelector("#chart");
    let jVarLocalChatContentId = document.querySelector('section');

    // Clone the new row and insert it into the table
    const clone = template.content.cloneNode(true);

    let h = clone.querySelector(".name .mb-0");

    console.log(`Hellasadsdo ${inMessage}`)

    console.log(`Hel Message ${inMessage.Message}`)

    h.innerText= inMessage.fromId || "KeshavSoft";
    h.dataset.uuid=inMessage.fromId || "KeshavSoft";

    // let b = clone.querySelector(".card-body .chat-content");
    // b.innerText= inMessage.Message ;
    // b.dataset.uuid=inMessage.Message;


    jVarLocalChatContentId.querySelector(".row").appendChild(clone);
};

const jFLocalSendMessage = ({ inMessage, inHtmlCard}) => {
    const template = document.querySelector("#SendMessageId");
    let jVarLocalinHtmlCard=inHtmlCard;
    console.log(jVarLocalinHtmlCard);
    // Clone the new row and insert it into the table
    const clone = template.content.cloneNode(true);

    let b = clone.querySelector(".chat-message");
    b.innerText= inMessage;


    jVarLocalinHtmlCard.querySelector(".chat-content").appendChild(clone);
};


export { StartFunc };