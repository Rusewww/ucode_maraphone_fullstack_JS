class HardWorker {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }


    set age(value) {
        if (value < 0 || value > 100) {
            this._age = 50;
        } else {
            this._age = value;
        }
    }

    set salary(value) {
        if (value < 100 || value > 1000000) {
            this._salary = 1000;
        } else {
            this._salary = value;
        }
    }

    toObject() {
        return this
    }
}

