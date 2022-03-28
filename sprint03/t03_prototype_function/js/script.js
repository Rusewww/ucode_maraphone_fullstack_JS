String.prototype.removeDuplicates = function removeDuplicates() {
    let string = this.replace(/ +(?= )/,'');
    string = string.split(' ').filter((item, index, arr) => {
        return string.split(' ').indexOf(item) === index;
    }).join(' ');
    return string;
}