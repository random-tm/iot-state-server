import Koa from "koa";
import bodyParser from "koa-bodyparser";
import config from "./config/index.js";
import routes from "./routes/routes.js";
import pulse from "./time.js";

const app = new Koa();
app.use(bodyParser());

app.use(async ctx => {
    routes(ctx);
});

app.listen(config.localport);

pulse();