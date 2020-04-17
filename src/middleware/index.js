/**
 * middleware/index.js 用来集中所有中间件
 */
const miRule = require('./mi-rule');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const staticFiles = require('koa-static');
const nunjucks = require('koa-nunjucks-2');

module.exports = (app) => {
    miRule({
        app,
        rules: [
            {
                folder: path.join(__dirname, '../controller'),
                name: 'controller'
            },
            {
                folder: path.join(__dirname, '../service'),
                name: 'service'
            }
        ]
    });

    app.use(staticFiles(path.resolve(__dirname, '../public')));
    app.use(nunjucks({
        ext: 'html',
        path: path.join(__dirname, '../views'),
        nunjucksConfig: {
            trimBlocks: true // 开启转义，防止Xss攻击
        }
    }));
    app.use(bodyParser());
}