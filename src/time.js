import getAutomationServer from "./net/getAutomationServer.js";
import send from "./net/send/index.js";
import { getState } from "./state.js";

export default () => {
    const interval = 1000 * 60;
    const automationUrl = getAutomationServer();
    setInterval(() => {
        const data = {
            state: getState(),
            time: new Date().getTime()
        };
        send(automationUrl, data);
    }, interval);
}