# mini-bodyparser
基于原生 Node 实现以下两个模块
- body-parser
- koa-bodyparser
# 使用方式
express
```js
const path = require('path');
const express = require('express');
const { bodyParser } = require('../index');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser());

app.post("/doLogin", (req, res) => {
  res.end(req.body);
})

const port = 6090;
app.listen(port, err => {
  if(err) throw err;
  console.log(`app start at ${port}`);
});

```

koa
```js
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
```

# 测试
```bash
yarn 
# express
yarn sratr:bodyparser
# koa
yarn sratr:koa-bodyparser

# http://localhost:6090/login.html
# here for add data
# and the submit you can see the data you post 
```