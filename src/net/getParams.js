import QueryString from "query-string";

export default (ctx) => {
    if(ctx.querystring == ""){
        const params = ctx.request.body;
        return params;
    } else {
        const rawParams = QueryString.parse(ctx.querystring);
        const paramsObj = rawParams.query;
        const paramsString = paramsObj.split("[")[1].split("]")[0];
        const params = Array.from(paramsString.split(","));
        return {query: params};
    }
}