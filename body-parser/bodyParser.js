// 简易的使用原生 node 实现 bodyparser

module.exports = function() {
  return async function  bodyParser(req, res, next) {
    if(req.method.toLowerCase() === 'post' || req.method.toLowerCase() === 'put') {
      let result = await new Promise((resolve, reject) => {
        try {
          let result = "";
          req.on("data", chunk => {
            result += chunk;
          });
    
          req.on("end", () => {
            resolve(result);
          })
        } catch (error) {
          reject(error);
        }
      });
      req.body = result;
      next();
    }else {
      next();
    }
  }
}