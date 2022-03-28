class Human {
    constructor(options) {
        this.firstName = options.firstName;
        this.lastName = options.lastName;
        this.gender = options.gender;
        this.age = options.age;
        this.calories = options.calories;
        this.img = options.img;
        this.hero = false;
    }

    sleepFor() {
        document.querySelector('#info').innerHTML = "I'm sleeping";
    }

    feed() {
        document.querySelector('#info').innerHTML = "Nom nom nom";
    }
}

class Superhero extends Human {
    fly() {
        document.querySelector('#info').innerHTML = `I'm flying`;
        setTimeout(() => {
            document.querySelector('#info').innerHTML = "Shazam!";
            document.querySelector('img').src = 'assets/images/dancing.gif';
        }, 10000);
    }

    fight() {
        document.querySelector('#info').innerHTML = "Khhhh-chh..." + "Bang-g-g-g... Evil is defeated!";
    }
}