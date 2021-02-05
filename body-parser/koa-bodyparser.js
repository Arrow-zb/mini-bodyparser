// 简易的使用原生 node 实现 koa-bodyparser
// koa-bodyparser 中间件也就只有 100 多行
module.exports = function() {
  return async function  bodyParser(ctx, next) {
    if(ctx.method.toLowerCase() === 'post' || ctx.method.toLowerCase() === 'put') {
      let res = await new Promise((resolve, reject) => {
        try {
          let res = "";
          ctx.req.on("data", chunk => {
            res += chunk;
          });
    
          ctx.req.on("end", () => {
            resolve(res);
          })
        } catch (error) {
          reject(error);
        }
      });
      ctx.request.body = res;
    }
    await next();
  }
}