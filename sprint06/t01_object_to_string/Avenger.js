class foo extends Function {
    constructor() {
        super('...args', 'return this.self.call(...args)');
        return this.self = this.bind(this)
    }
}

class Avenger extends foo {
    constructor({name, alias, gender, age, powers}) {
        super();
        this._name = name;
        this.alias = alias;
        this.gender = gender;
        this.age = age;
        this.powers = powers;
    }

    toString() {
        return `name: ${this._name}\n` +
            `gender: ${this.gender}\n` +
            `age: ${this.age}`
    }

    call() {
        return `${this.alias.toUpperCase()}\n + ${this.powers}\n`;
    }
}

module.exports = Avenger;