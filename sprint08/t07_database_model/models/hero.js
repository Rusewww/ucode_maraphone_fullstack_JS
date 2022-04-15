const Model = require('../model.js')

module.exports = class Hero extends Model{
    constructor(name, description, class_role) {
        super(name, description, class_role);
    }
    find(id) {
        super.find(id);
    }

    save() {
        super.save();
    }

    delete(id) {
        super.delete(id);
    }
}