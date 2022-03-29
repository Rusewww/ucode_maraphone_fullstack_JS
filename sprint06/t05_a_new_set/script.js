const div = document.getElementById("result");
let result = [];

const form = document.getElementsByTagName('form');

form[0].addEventListener('submit', Result);

function clear(){
    document.getElementById("text").value = '';
}

function Result(element){
    let res = 'POST<br><br>Array<br>{<br>';
    element.preventDefault();
    [...form[0]].map(item => {
        if (item.name) {
            result.push([item.name, item.value]);
            res += `\t [${item.name}] => ${item.value}\n <br>`;
        }
    });
    res += '}<br>';
    document.querySelector('#result').innerHTML = res;
}