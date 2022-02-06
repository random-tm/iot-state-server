import getAutomationServer from "../../net/getAutomationServer.js"
import send from "../../net/send/index.js";
import { getState } from "../../state.js";

export default (method, params) => {
    if(method === "POST"){
        const automationUrl = getAutomationServer();
        const data = {
            ...params,
            ...{state: getState()},
            ...{action: true}
        }
        ctx.body = "State updated";
        send(automationUrl, data);
    }
}