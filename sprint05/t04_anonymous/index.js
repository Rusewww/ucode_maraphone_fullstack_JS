class mandarin{
    constructor(name, alias, affiliation) {
        this.name = name
        this.alias = alias
        this.affiliation = affiliation
    }
}

module.exports.getAnonymous = (name, alias, affiliation) =>{
    return new mandarin (name, alias, affiliation)
}
