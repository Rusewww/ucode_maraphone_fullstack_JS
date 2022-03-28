export class HardWorker {
    name;
    age;
    salary;
    constructor(name, age, salary) {
        this.age = age;
        this.name = name;
        this.salary = salary;
    }
    static toObject() {
        return this;
    }
}

