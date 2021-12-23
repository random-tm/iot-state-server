import QueryString from "query-string";
import action from "./actions/routes.js";
import state from "./state/routes.js";

export default (request, response) => {
    const params = QueryString.parse(request.querystring);
    const path = request.path;
    const method = request.method;

    let res;

    switch(path){
        case "/state":
            res = state(method, params, response);
            break;
        case "/actions":
            res = action(method, params);
            break;
        default:
            break;
    }

}