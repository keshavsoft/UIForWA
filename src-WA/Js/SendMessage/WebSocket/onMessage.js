import { StartFunc as sendMessage } from "./sendMessage.js";
const CommonRedirectUrl = "scanQr.html";

let StartFunc = (event) => {
    try {
        let jVarLocalParse = JSON.parse(event.data);
        console.log("jVarLocalParse : ", jVarLocalParse);
        switch (jVarLocalParse?.Type) {
            case "wAProfile":
                if ("res" in jVarLocalParse) {
                    wAProfile({ inData: jVarLocalParse.res });
                } else {
                    location.href = CommonRedirectUrl;
                };

                break;
            default:
                break;
        };
    } catch (error) {
        // StopWADone
        console.log("string : ", event.data);
        if (event.data === "StopWADone") {
            location.href = CommonRedirectUrl;
        };
    };
};

let jFLocalToInputUserNameId = (inValue) => {
    let jVarLocalHtmlId = 'UserNameId';
    let jVarLocalUserNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalUserNameId === null === false) {
        jVarLocalUserNameId.innerHTML = inValue;
    };
};

let jFLocalToInputMobileNumberId = (inValue) => {
    let jVarLocalHtmlId = 'MobileNumberId';
    let jVarLocalMobileNumberId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalMobileNumberId === null === false) {
        jVarLocalMobileNumberId.innerHTML = inValue;
    };
};

const wAProfile = ({ inData }) => {
    jFLocalToInputUserNameId(inData.pushname);
    jFLocalToInputMobileNumberId(inData.me.user);
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