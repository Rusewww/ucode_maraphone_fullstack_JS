const db = require('../db')
const Model = require('../model')

module.exports = class User extends Model{
    constructor(login,password, full_name, email) {
        super();
        this.login = login
        this.password = password
        this.full_name = full_name
        this.email = email
    }
    request(res){
        let user = {
            login: this.login,
            password: this.password,
            full_name: this.full_name,
            email: this.email
        }
        db.db_query(user, res)
    }
}