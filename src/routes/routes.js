import getParams from "../net/getParams.js";
import action from "./actions/routes.js";
import state from "./state/routes.js";

export default (ctx) => {

    const params = getParams(ctx);
    const path = ctx.request.path;
    const method = ctx.request.method;

    let res;

    switch(path){
        case "/state":
            res = state(method, params, ctx);
            break;
        case "/action":
            res = action(method, params, ctx);
            break;
        default:
            break;
    }

}