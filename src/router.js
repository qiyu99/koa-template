const Router = require('koa-router');
const HomeController = require('./controller/home');
const router = new Router();

module.exports = (app) => {
    router.get('/', HomeController.index);
    router.post('/login', HomeController.login);

    app.use(router.routes()).use(router.allowedMethods());
}