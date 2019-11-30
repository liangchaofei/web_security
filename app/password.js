/*
 * @Author: your name
 * @Date: 2019-11-19 22:19:31
 * @LastEditTime: 2019-11-26 23:49:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /web_security/app/password.js
 */
const crypto = require('crypto')
const hash = (type, str) => crypto.createHash(type).update(str).digest('hex')
const md5 = str => hash('md5',str)
const sha1 = str => hash('sha1',str)
const encryptPassword = (salt, password) => md5(salt + 'abced@#4@%#$7' + password)
const psw = '111111'
console.log('md5', md5(psw))
console.log('sha1', sha1(psw))
console.log('encryptPassword', encryptPassword('23',psw))
module.exports = encryptPassword

