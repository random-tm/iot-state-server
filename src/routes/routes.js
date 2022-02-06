import QueryString from "query-string";
import action from "./actions/routes.js";
import state from "./state/routes.js";

export default (ctx) => {
    const params = ctx.request.body;
    const path = ctx.request.path;
    const method = ctx.request.method;

    let res;

    switch(path){
        case "/state":
            res = state(method, params, ctx);
            break;
        case "/actions":
            res = action(method, params, ctx);
            break;
        default:
            break;
    }

}