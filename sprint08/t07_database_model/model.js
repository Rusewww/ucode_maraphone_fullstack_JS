const db = require('./db.js')

module.exports = class Model {
    constructor(name,description,class_role) {
        this.name = name
        this.description = description
        this.class_role = class_role
    }
    find(id){
        db.connect();
        db.query('SELECT * FROM heroes WHERE id=?', id, function (err, rows, fields) {
            if(err){
                console.log(`Hero wasn't found!`)
                throw err
            }
            console.log(`id: ${rows[0].id}\n` +
            `Name: ${rows[0].name}\n` +
            `Race: ${rows[0].description}\n` +
            `Class: ${rows[0].class_role}\n`)
        })
    }

    save(){
        db.connect()
        let out = {
            name: this.name,
            description: this.description,
            class_role: this.class_role
        }
        db.query('INSERT INTO heroes SET id=?', out, function(err, rows, fields) {
        })
        console.log('Hero successfully saved!')
    }
    delete(id) {
        let sql = 'DELETE FROM heroes WHERE id = ?'
        db.connect(function(err) {
            if (err) throw err
            db.query(sql, id, function (err, result) {
                if (err) throw err
                console.log('Successful delete hero')
            })
        })
    }
}