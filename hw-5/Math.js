let num = 5;
let str = ' 5 ';
let bool = true;

let addStrBool = str + bool;
let addStrNum = str + num;
let addNumBool = num + bool;

let multiplyStrBool = str * bool;
let multiplyStrNum = str * num;
let multiplyNumBool = num * bool;

let divideStrBool = str / bool;
let divideStrNum = str / num;
let divideNumBool = num / bool;

num = String(num);
num = Boolean(num);
num = Number(num);

str = Number(str);
str = Boolean(str);
str = String(str);

bool = String(bool);
bool = Number(bool);
bool = Boolean(bool);

console.log(addStrBool)
console.log (typeof addStrBool)
