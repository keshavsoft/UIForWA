import { StartFunc as CommonMessageAsJson } from "./MessageAsJson/EntryFile.js";
// import { StartFunc as CommonMessageAsString } from "./MessageAsString/EntryFile.js";

let StartFunc = (event) => {
    let LocalData = event.data;

    try {
        let LocalDataAsJson = JSON.parse(LocalData);

        CommonMessageAsJson({ inDataAsJson: LocalDataAsJson });

        return;
    } catch (error) {
    };

    // CommonMessageAsString({ inDataAsString: LocalData.toString(), inws, inClients });
};

export { StartFunc };