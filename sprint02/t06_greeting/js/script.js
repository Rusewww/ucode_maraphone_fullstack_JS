let firstName
let lastName

firstName = String(prompt("Enter the first name"))
lastName = String(prompt("Enter the last name"))

if(firstName.match(/^[A-Za-z]*$/) && lastName.match(/^[A-Za-z]*$/)){

    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    alert(`Your name is ${firstName} ${lastName}`)
    console.log(`Your name is ${firstName} ${lastName}`)
} else {
    alert("Incorrect name!")
    console.log("Incorrect name!")
}

