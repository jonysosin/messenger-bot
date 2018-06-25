const router = require('koa-route');
const mount = require('koa-mount');
const auth = require('koa-basic-auth');
const koa = require('koa');
const config = require('config');
const bodyparser = require('koa-bodyparser');
const controller = require('./src/controller');

let app = new koa();
app.use(bodyparser());

app.use(router.get("/api", () => {
    ctx.body = 'Hola'
}));

if (!module.parent) {
  app.listen(80);
  console.log("Listening on port 3131.");
}