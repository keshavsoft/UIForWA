import { StartFunc as ColumnSendMessage } from "./ColumnSendMessage/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "SendMessage");

    ColumnSendMessage({ inFindColumn: LocalColumnOperateFine });
};

export { StartFunc };