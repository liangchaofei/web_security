/*
 * @Author: your name
 * @Date: 2019-11-19 22:18:48
 * @LastEditTime: 2019-11-19 23:25:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /web_security/app/app.js
 */
const koa = require('koa')
const app = new koa()

const  session = require('koa-session')
const bodyParser = require('koa-bodyparser')
app.use(bodyParser)
const router = require('koa-router')()
const views = require('koa-views')
const query = require('./db')
app.keys = ['some secret hurr'];
const CONFIG = {
    key: 'kaikeba:sess',
    /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    autoCommit: true,
    /** (boolean) automatically commit headers (default true) */
    overwrite: false,
    /** (boolean) can overwrite or not (default true) */
    httpOnly: false,
    /** (boolean) httpOnly or not (default true) */
    signed: false,
    /** (boolean) signed or not (default true) */
    rolling: false,
    /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false,
    /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};

app.use(session(CONFIG, app))
app.use(views(__dirname + '/views', {
    extension: 'ejs'
}))
