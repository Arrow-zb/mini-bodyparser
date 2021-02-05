const Koa = require("koa");
const Router = require('koa-router');
const serve = require('koa-static');

const { koaBodyparser } = require('../index');

const app = new Koa();
const router = new Router();

app.use(serve(__dirname + '/public'));
app.use(koaBodyparser());

router.post("/doLogin", ctx => {
  ctx.body = ctx.request.body;
});

app
  .use(router.routes())
  .use(router.allowedMethods());

const port = 6090;
app.listen(port, err => {
  if(err) throw err;
  console.log(`app start at ${port}`);
});
