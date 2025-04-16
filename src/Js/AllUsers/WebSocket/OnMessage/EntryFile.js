import { StartFunc as CommonMessageAsJson } from "./MessageAsJson/EntryFile.js";

let StartFunc = (event) => {
    let LocalData = event.data;

    try {
        let LocalDataAsJson = JSON.parse(LocalData);

        CommonMessageAsJson({ inDataAsJson: LocalDataAsJson });

        return;
    } catch (error) {
    };
};

export { StartFunc };