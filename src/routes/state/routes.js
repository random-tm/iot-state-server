import getAutomationServer from "../../net/getAutomationServer.js";
import send from "../../net/send/index.js";
import { getStateFiltered, updateState } from "../../state.js"

export default (method, params, response) => {
    if(method === "POST"){
        const automationUrl = getAutomationServer();
        const data = updateState(params);
        if(!data.error){
            send(automationUrl, data);
        }
        response.send("OK")
    } else if(method == "GET"){
        const state = getStateFiltered(params);
        response.send(state);
    }
}