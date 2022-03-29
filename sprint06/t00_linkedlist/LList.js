let LLData = require('./LLData');

class LList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addFromArray(arrayOfData) {
        arrayOfData.forEach(element => this.add(element))
    }

    filter(callback) {
        return [...this].filter(callback);
    }

    add(value) {
        let node = new LLData(value);
        if (this.length === 0)
            this.head = node;
        else {
            let q = this.head;
            while(q.next)
                q = q.next;
            q.next = new LLData(value);
        }
        this.length++;
    }
    remove(value) {
        if (this.head.data === value) {
            this.head = this.head.next;
            this.length--;
            return true;
        } else
            for (let q = this.head; q.next; q = q.next)
                if (q.next.data === value) {
                    q.next = q.next.next;
                    this.length--;
                    return true;
                }
        return false;
    }
    contains(value) {
        for (let q = this.head; q; q = q.next)
            if (q.data === value)
                return true;
        return false;
    }
    [Symbol.iterator] = function() {
        let current = this.head;
        return {
            next() {
                if (current) {
                    let value = current.data;
                    current = current.next;
                    return {value: value, done: false};
                }
                return {done: true};
            }
        };
    };
    clear() {
        this.head = null;
    }
    count() {
        return this.length;
    }
    log() {
        let res = '';
        for (let q = this.head; q; q = q.next) {
            res += q.data;
            if (q.next)
                res += ', ';
        }
        console.log(res);
    }
}

module.exports.LList = LList