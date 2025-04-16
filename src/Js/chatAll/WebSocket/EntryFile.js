import { StartFunc as onOpen } from "./onOpen.js";
import { StartFunc as onMessage } from "./onMessage.js";

let jVarLocalHostName = window.location.host;
let jVarLocalUrlForWS;

if (location.protocol === "https:") {
    jVarLocalUrlForWS = "wss://" + jVarLocalHostName;
}
if (location.protocol === "http:") {
    jVarLocalUrlForWS = "ws://" + jVarLocalHostName;
};

let jFLocalEstablishWebSocket = () => {
    webSocket = new WebSocket(jVarLocalUrlForWS);

    webSocket.onopen = onOpen
    webSocket.onmessage = onMessage;

    webSocket.onclose = function (e) {
    };
};

document.addEventListener("DOMContentLoaded", function () {
    jFLocalEstablishWebSocket();
});