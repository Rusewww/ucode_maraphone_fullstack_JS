module.exports = class StrFrequency{
    str;
    constructor(str1) {
        this.str = str1
    }
    letterFrequencies(letter){
        let res = {}
        this.str.toUpperCase()
            .split('')
            .filter(c => c.match(/[A-Z]/g))
            .forEach(i => res[i] = (res[i] || 0) +1)
        return res
    }
    wordFrequencies(word){
        let res = {};
        this.str.toUpperCase()
            .split(/[^A-Z]+/g)
            .filter(c => c !== '')
            .forEach(i => res[i] = (res[i] || 0) +1)
        return res
    }
    reverseString(){
        return this.str.split("").reverse().join("")
    }
}
