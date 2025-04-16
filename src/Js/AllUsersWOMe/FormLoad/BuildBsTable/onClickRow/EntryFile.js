import { StartFunc as StartFuncButtonClickFunc } from "./SendMessage/2-ButtonClickFunc.js";

const StartFunc = (row, $element, field) => {
    if (field === "SendMessage") {
        StartFuncButtonClickFunc({ inRowData: row });
    };
};
export { StartFunc };