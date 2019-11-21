/*
 * @Author: your name
 * @Date: 2019-11-19 22:18:55
 * @LastEditTime: 2019-11-19 23:01:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /web_security/app/batch.js
 */
(async () => {
    const query = require('./db')
    const encryptPassword = require('./password')

    let sql = `SELECT * FROM sec.user`

    const res = await query(sql)

    const saltDb = async record => {
        sql = `
            update sec.user
            set salt = ?,
            password = ?
            where username = ?
        `
        const salt = Math.random() * 999999 + '' + new Date().getTime()

        await query(sql, [salt, encryptPassword(salt, record.password), record.username])
    }
    res.forEach(v => saltDb(v))

})()