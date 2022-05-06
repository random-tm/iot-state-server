import getAutomationServer from "../../net/getAutomationServer.js";
import send from "../../net/send/index.js";
import { getStateFiltered, updateState } from "../../state.js"

export default (method, params, ctx) => {
    if(method === "POST"){
        const automationUrl = getAutomationServer();
        const data = updateState(params);
        if(!data.error){
            send(automationUrl, {state: data});
        }
        ctx.body = "OK"
    } else if(method == "GET"){
        const state = getStateFiltered(params);
        ctx.body = state;
    }
}