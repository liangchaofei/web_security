/*
 * @Author: your name
 * @Date: 2019-11-19 22:17:46
 * @LastEditTime: 2019-11-27 21:09:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /web_security/index.js
 */
const app = require('./app/app')
const hack = require('./hack/app')
const chalk = require('chalk')

app.listen(3000, () => {
    console.log('正常网站启动成功：' + 3000)
})

hack.listen(4000, () => {
    console.log(chalk.red('黑客网站启成功: '+ 4000))
})