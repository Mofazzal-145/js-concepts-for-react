1. // how to declare a variable using let and const

const peopleName = 'Mofazzal';
let season = 'winter';
season = 'rainy';

// 2. conditions
// 6 basic conditions : >, <, ===, >=, <=, !==
// multiple conditions: &&, ||

if(peopleName === 'Mofazzal' || season === 'rainy' ){

}

else if ( peopleName === 'Mofazzal') {

}
else{

}

// 3. array declare
// index 
// length, push

const numbers = [12, 55, 24, 89, 67];
numbers [0] = 29;

// 4. for loop 
for (let i = 0; i < numbers.length; i ++){
    const number = numbers [i];
    console.log(number);
}

// 5. function
function multiply (num1, num2) {
    const result = num1 * num2;
    return result;
}

const output = multiply(23, 44);
console.log(output);

// 6. object 
// 3 ways to access property by name 
const student = {
    name: 'Md. Mofazzal Hosain',
    age: 23,
    movies: ['king khan', 'mon bosana porar table a']
}

const newVariable = 'age';

console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[newVariable]); // access via property name  in a variable

