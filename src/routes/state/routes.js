import getAutomationServer from "../../net/getAutomationServer.js";
import send from "../../net/send/index.js";
import { updateState } from "../../state.js"

export default (method, params) => {
    if(method === "POST"){
        const automationUrl = getAutomationServer();
        const data = updateState(params);
        if(!data.error){
            send(automationUrl, data);
        }
    }
}