const Number = 2;
const BigInt = 12345678n;
const String = "interesno";
const Boolean = true;
const NULL = null;
let undef;
const Object = {"sad": "afsafs"};
const Char = Symbol('d');
const Function = function (){
    return "GayShit Infarct";
}

alert("Number = " + typeof Number + '\n' +
    "Bigint = " + typeof BigInt + '\n' +
    "String = " + typeof String + '\n'+
    "Boolean = " + typeof Boolean + '\n'+
    "NULL = " + typeof NULL + '\n'+
    "undef = " + typeof undef + '\n'+
    "Object = " + typeof Object + '\n'+
    "Char = " + typeof Char + '\n'+
    "Function = " + typeof Function + '\n');