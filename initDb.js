/*
 * @Author: your name
 * @Date: 2019-11-19 22:18:03
 * @LastEditTime: 2019-11-19 22:41:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /web_security/initDb.js
 */
(async () => {
    const query = require('./app/db')

    res = await query(`
        CREATE DATABASE IF NOT EXISTS sec
    `)

    console.log('mysql create database:', res)

    res = await query(`
        CREATE table IF NOT EXISTS sec.text (
            id int,
            text varchar(300),
            primary key(id)
        )
    `)

    console.log('mysql create table:', res)

    res = await query('select * from sec.text')
    console.log('mysql: ' , res)

    res = await query(`REPLACE INTO sec.text (id,text) VALUES (1, 'curry${new Date()}')`)
    console.log('mysql:', res)

    res = await query(`
            CREATE table IF NOT EXISTS sec.user (
                id int,
                username varchar(200),
                password varchar(200),
                salt varchar(200),
                primary key(id)
            )
    `)

    res = await query(`
            REPLACE INTO sec.user (id, username, password) VALUES(1, 'curry', '111111')
    `)
})()