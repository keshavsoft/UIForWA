import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as TimerFuncs } from "./TimerFuncs/EntryFile.js";

const StartFunc = () => {
    TimerFuncs();
    StartFuncAddListeners();
    geoFindMe();
};

function geoFindMe() {
    const status = document.querySelector("#status");

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        let jVarLocalLocation = {};
        jVarLocalLocation.Type = "myLocation";
        jVarLocalLocation.latitude = latitude;
        jVarLocalLocation.longitude = longitude;

        console.log("aaaaaaaa : ", latitude, longitude);
        webSocket.send(JSON.stringify(jVarLocalLocation));
    };

    function error() {
        console.log("aaaaaaaaeeeeee : ");
    }

    if (!navigator.geolocation) {
        console.log("Geolocation is not supported by your browser");
    } else {
        console.log("Locating…");
        navigator.geolocation.getCurrentPosition(success, error);
    }
};

export { StartFunc };
