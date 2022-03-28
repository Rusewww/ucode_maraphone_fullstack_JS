String.prototype.firstLetterCaps = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

module.exports.firstUpper = (str) => {
    if(str === null){
        return ""
    }
    str = str.toString()
    str = str.trim()
    str = str.toLowerCase()
    str = str.firstLetterCaps()
    return str
}