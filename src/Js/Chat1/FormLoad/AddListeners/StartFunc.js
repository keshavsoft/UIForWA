import { StartFunc as SendButtonId } from "./SendButtonId/EntryFile.js";
import { StartFunc as SendMessageInputId } from "./SendMessageInputId/EntryFile.js";
// import { StartFunc as IsStudentYesId } from "./IsStudentYesId/EntryFile.js";

let StartFunc = () => {
    SendButtonId();
    SendMessageInputId();
    // IsStudentYesId();
};

export { StartFunc };