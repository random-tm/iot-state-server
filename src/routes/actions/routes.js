import getAutomationServer from "../../net/getAutomationServer.js"
import getStateBackup from "../../net/getStateBackup.js";
import send from "../../net/send/index.js";
import { getState } from "../../state.js";

export default (method, params, ctx) => {
    if(method === "POST"){
        const automationUrl = getAutomationServer();
        const backupUrl = getStateBackup();
        const data = {
            ...params,
            ...{state: getState()},
            ...{action: true}
        }
        ctx.body = "State updated";
        send(automationUrl, data);
        send(backupUrl, data);
    }
}