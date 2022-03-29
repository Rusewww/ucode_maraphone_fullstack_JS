let {Avenger} = require("./Avenger.js")

class Team {
    constructor(id, avengers) {
        this.id = id
        this.avengers = avengers
    }

    clone() {
        let array = []
        this.avengers.forEach(element => {
            let copy = Object.assign({}, element)
            Object.setPrototypeOf(copy, Object.getPrototypeOf(element))
            array.push(copy)
        })
        return this.avengers = array
    }

    battle(damage) {
        for (let avenger of this.avengers) {
            avenger.hp -= damage.damage
        }
    }

    calculateLosses(clonedTeam) {
        let loses = 0;
        clonedTeam.forEach(avenger => {
            if (avenger.hp < 1) {
                loses += 1;
            }
        })
        if (loses === 0) {
            console.log("We haven't lost anyone in this battle!")
        } else {
            console.log(`In this battle we lost ${loses} Avengers.`)
        }
    }
}

module.exports = Team;