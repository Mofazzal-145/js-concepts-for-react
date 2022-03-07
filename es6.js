
const numbers = [12, 55, 24, 89, 67];
const student = {
    name: 'Md. Mofazzal Hosain',
    age: 23,
    movies: ['king khan', 'mon bosana porar table a']
};
// 1. Template string
const about = `My name is ${student.name} age of ${student.age} has ${numbers[3]} also liked movies ${student.movies[1]}`; 
console.log(about);

// 2. arrow function

const getNine = () => 9;
const ninetyOne = num => num + 82;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// 3. spread operator

const newNumbers = [...numbers];

// create a new array from an older array and add an element

const currentNumbers = [...numbers, 23];
numbers.push(10);
numbers.push(10);
numbers.push(10);

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);






