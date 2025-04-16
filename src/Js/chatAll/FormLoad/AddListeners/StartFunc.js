import { StartFunc as SendButtonId } from "./SendButtonId/EntryFile.js";
import { StartFunc as SendMessageInputId } from "./SendMessageInputId/EntryFile.js";

let StartFunc = () => {
    SendButtonId();
    SendMessageInputId();
};

export { StartFunc };