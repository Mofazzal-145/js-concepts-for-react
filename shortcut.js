
// Truthy: 'mofu', 5, true, {}, []
// Falsy: '', 0, undefined, false, null

// 1. check truthy

let myVar = 6;
// check any truthy
if(myVar){
    myVar = myVar * 40;
}
else{
    myVar = 0;
}

// 2. check falsy

let myNum = 10;
// check negative or falsy anything
if(!myNum){

}
else{

}

// 3. 

const money = 55;
let food;
if(money > 100){
    food = 'bufa';
}
else{
    food = 'muri chanachur';
}

// ternary

let food1 = money > 100 ? 'bufa' : 'muri chanachur';
// console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'bear' : 'juice';
// console.log(drink);

// number to string conversion

const num = 34;
// console.log(num);
const numStr = num + '';
// console.log(numStr);

// string to number conversion

const sendInput = '43215325';
const getInput = + sendInput;
// console.log(getInput);

// function with condition

// const isFunction = false;
let isFunction = true;
const showFunction = () => console.log('showFunction');  
const hideFunction = () => console.log('hideFunction');
// isFunction ?  showFunction() : hideFunction ();

// ----------
// use && if the left side is true then right side will be executed
isFunction && showFunction();
// use || if the left side is false then right side will be executed
isFunction || hideFunction();

// toggle boolean
isFunction = !isFunction;
console.log(isFunction)

