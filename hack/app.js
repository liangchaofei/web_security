/*
 * @Author: your name
 * @Date: 2019-11-19 22:18:32
 * @LastEditTime: 2019-11-19 22:45:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /web_security/hack/app.js
 */
const koa = require('koa')
const chalk = require('chalk')

const log = contents => {
    console.log(chalk.red(contents))
}

// 模拟黑客网站
const app = new koa()
const static = require('koa-static')
app.use(static(__dirname+'/views'))


app.use(async (ctx,next) => {
    log('Hack...：' + ctx.url)
    await next()
})

module.exports = app;