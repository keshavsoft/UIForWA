import { StartFunc as sendMessage } from "./Types/sendMessage.js";

let StartFunc = (event) => {
    let jVarLocalJsonObject = JSON.parse(event.data);
    console.log("types",jVarLocalJsonObject);

    switch (jVarLocalJsonObject.Type) {
        case "sendMessage":
            sendMessage({ inObject: jVarLocalJsonObject });

            // sendMessage{

            // }
            break;

        default:
            break;
    }
};

export { StartFunc };