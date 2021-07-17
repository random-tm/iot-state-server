import Koa from "koa";
import config from "./config/index.js";
import routes from "./routes/routes.js";
import pulse from "./time.js";

const app = new Koa();

app.use(async ctx => {
    ctx.body = 'State Change Recieved';
    routes(ctx.request, ctx.response);
});

app.listen(config.localport);

pulse();