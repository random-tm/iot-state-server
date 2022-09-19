import internal from "../../internal.js";
import getAutomationServer from "../../net/getAutomationServer.js";
import getStateBackup from "../../net/getStateBackup.js";
import send from "../../net/send/index.js";
import { getStateFiltered, updateState } from "../../state.js"

export default (method, params, ctx) => {
    if(method === "POST"){
        const automationUrl = getAutomationServer();
        const backupUrl = getStateBackup();
        const data = updateState(params);
        if(data){
            if(!data.error){
                const safeAutomationState = internal(data);
                send(automationUrl, {state: safeAutomationState});
                send(backupUrl, {state: safeAutomationState});
            }
        }
        ctx.body = "OK"
    } else if(method === "GET"){
        const state = getStateFiltered(params);
        ctx.body = state;
    }
}