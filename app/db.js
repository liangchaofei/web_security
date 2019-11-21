/*
 * @Author: your name
 * @Date: 2019-11-19 22:19:18
 * @LastEditTime: 2019-11-19 22:55:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /web_security/app/db.js
 */
const mysql = require('mysql')
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'mysql'
})

module.exports = function(sql, values){
    // 返回一个promise
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err,connection){
            if(err){
                reject(err)
            }else{
                connection.query(sql,values,(err,rowss) => {
                    if(err){
                        reject(err)
                    }else{
                        resolve(rowss)
                    }
                    // 结束会话
                    connection.release()
                })
            }
        })
    })
}