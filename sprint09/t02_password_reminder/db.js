const mysql = require("mysql2")
const fs = require('fs');
const bcrypt = require('bcrypt')
const {response} = require("express");
const saltRounds = 10
const configRead = fs.readFileSync('config.json');
const config = JSON.parse(configRead);

const connection = mysql.createConnection(config);

function db_query(user, res){
    const sql = 'INSERT INTO users SET ?'
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(saltRounds))

    connection.query(sql, user, function (e,rows){
        if (e) {
            return response.render('./views/registration', {
                errorMsg: e.message
            })
        }
        response.render('./views/profile', user)
    })
}

module.exports.db_query = db_query