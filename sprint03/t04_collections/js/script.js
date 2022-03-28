'use strict';

function menu(name) {
    let menu = new Map();
    menu.set('Big sushi set', 399);
    menu.set('Medium sushi set', 299);
    menu.set('Small sushi set', 199);
    menu.set('Big pizza', 199);
    menu.set('Medium pizza', 149);
    menu.set('Small pizza', 99);
    if (name === 'all') {
        let all = '';
        for (const item of menu)
            all = all.concat(item + ' uah\n');
        alert(all);
    } else {
        alert(menu.get(name) + ' uah');
    }
}

function guestList(name, state) {
    let guests = new Set();
    guests.add('abondar');
    guests.add('izozulia');
    guests.add('dshevchenk');
    guests.add('yzuravlov');
    guests.add('yklymenko');
    guests.add('opryludko');
    guests.add('mtsyhankov');
    guests.add('bdenin');
    guests.add('vmakarenko');
    guests.add('azeinzerya');
    guests.add('ipopova');


    if (state === 1) {
        let has = guests.has(name);
        if (has) {
            alert("You on the list");
        } else {
            alert("You don`t on the list");
        }
    }
    if (state === 2) {
        let has = guests.delete(name);
        if (has) {
            alert(name + ` - deleted!`);
        } else {
            alert(name + ` not on ist.`);
        }
    }
}

function bankVault(credits) {
    let bank = new WeakMap();

    const client1 = {
        id: 1,
        name: 'abondar',
        location: 'Ukraine'
    }
    const client2 = {
        id: 2,
        name: 'izozulia',
        location: 'Ukraine'
    }
    const client3 = {
        id: 3,
        name: 'mtsyhankov',
        location: 'France'
    }
    const client4 = {
        id: 4,
        name: 'ipopova',
        location: 'Japan'
    }

    bank.set(client1, 4123461251242124);
    bank.set(client2, 5723354351212512);
    bank.set(client3, 9854745634522445);
    bank.set(client4, 1234565432345432);

    if (bank.get(client1) === credits) {
        alert(`Deposit box of ${credits}:\n\n` + `CLIENT ID: ${client1.id}\n` + `CLIENT NAME: ${client1.name}\n` + `CLIENT LOCATION: ${client1.location}`);
    } else if (bank.get(client2) === credits) {
        alert(`Deposit box of ${credits}:\n\n` + `CLIENT ID: ${client2.id}\n` + `CLIENT NAME: ${client2.name}\n` + `CLIENT LOCATION: ${client2.location}`);
    } else if (bank.get(client3) === credits) {
        alert(`Deposit box of ${credits}:\n\n` + `CLIENT ID: ${client3.id}\n` + `CLIENT NAME: ${client3.name}\n` + `CLIENT LOCATION: ${client3.location}`);
    } else if (bank.get(client4) === credits) {
        alert(`Deposit box of ${credits}:\n\n` + `CLIENT ID: ${client4.id}\n` + `CLIENT NAME: ${client4.name}\n` + `CLIENT LOCATION: ${client4.location}`);
    } else if (bank.get(client5) === credits) {
        alert(`Deposit box of ${credits}:\n\n` + `CLIENT ID: ${client5.id}\n` + `CLIENT NAME: ${client5.name}\n` + `CLIENT LOCATION: ${client5.location}`);
    } else {
        alert(`Wrong credentials. Access denied.`)
    }
}

function coinCollection() {
    let coinCollection = new WeakSet();
    const coin_one = {
        value: 5,
        year: 2002
    }
    const coin_two = {
        value: 10,
        year: 2005
    }
    const coin_tree = {
        value: 25,
        year: 2008
    }
    const coin_four = {
        value: 50,
        year: 2010
    }
    const coin_five = {
        value: 1,
        year: 2018
    }
    coinCollection.add(coin_one, "5cent");
    coinCollection.add(coin_two, "20cent");
    coinCollection.add(coin_tree, "50cent");
    coinCollection.add(coin_four, "75cent");
    coinCollection.add(coin_five, "1$");
    alert(`coin1:\nvalue: ${coin_one.value}\nyear: ${coin_one.year}\n\n` + `coin2:\nvalue: ${coin_two.value}\nyear: ${coin_two.year}\n\n` + `coin3:\nvalue: ${coin_tree.value}\nyear: ${coin_tree.year}\n\n` + `coin4:\nvalue: ${coin_four.value}\nyear: ${coin_four.year}\n\n` + `coin5:\nvalue: ${coin_five.value}\nyear: ${coin_five.year}`);
}

let dish = "";
for (; dish === "" || dish === null;) {
    dish = prompt(`Testing Menu(Map) collection.\nType the name of dish or type 'all' to list all of the dishes`, `all`);
}
menu(dish);

let guest = "";
for (; !guest;) {
    guest = prompt(`Testsing guestList(Set) collection.\nPlease enter your name:`, ``);
}
guestList(guest, 1);
guest = prompt(`Testsing guestList(Set) collection.\nWho do you want to delete (leave empty if not):`, ``);
if (guest) {
    guestList(guest, 2);
}

let client = "";
while (!client) {
    client = prompt(`Testsing bankVault(WeakMap) collection.\nPlease client credentials:`, `4910258967483249`);
}
bankVault(+client);
alert(`Testsing coinCollection(WeakSet) collection.\nPress OK to see all the coins`);
coinCollection();