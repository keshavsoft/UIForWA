let StartFunc = ({ inDataAsJson }) => {
    let LocalDataAsJson = inDataAsJson;

    if ("Type" in LocalDataAsJson) {
        if (LocalDataAsJson.Type === "returnOnlineClientsWOMe") {
            var $table = $('#table');

            $table.bootstrapTable("load", LocalDataAsJson.res);
        };
    };
};

export { StartFunc };