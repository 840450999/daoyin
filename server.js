const Koa = require('koa');
const app = new Koa();
const static = require('koa-static')
app.use(static(__dirname))


app.listen(3000);