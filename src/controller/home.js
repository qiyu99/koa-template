const HomeService = require('../service/home');

module.exports = {
    index: async (ctx, next) => {
        ctx.response.body = '<h1>index page</h1>';
    },

    login: async (ctx, next) => {
        let {name, password} = ctx.request.body;
        let data = await HomeService.login(name, password);
        ctx.response.body = data;
    }
}