function submit(){
    const div = document.getElementById("Answer");
    if(document.getElementById("three").checked === true){
        div.innerText = 'Correct!';
    } else if (document.getElementById("one").checked === true || document.getElementById("two").checked === true){
        div.innerText = 'Shame on you! Go and watch Avengers!';
    } else {
        div.innerText = 'Make your choice!';
    }
}