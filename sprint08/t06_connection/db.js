const mysql = require("mysql2")
const fs = require('fs');
const configRead = fs.readFileSync('config.json');
const config = JSON.parse(configRead);

const connection = mysql.createConnection(config);

connection.connect(function(err){
    if (err) {
        return console.error("Error: " + err.message);
    }
    else{
        console.log("Finally connected!");
    }
});

connection.end(function(err) {
    if (err) {
        return console.log("Error: " + err.message);
    }
    console.log("Connection closed.");
});