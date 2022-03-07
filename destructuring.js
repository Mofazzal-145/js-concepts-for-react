
// 1. array destructuring

const numbers = [11, 56];

/* const x = numbers[0];
const y = numbers[1]; */

//const [x, y] = [11, 44];
const [x, y] = numbers;

// console.log(x, y);

function putNums(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

// const [first, second] = [33, 45];
const [first, second] = putNums (33, 45);

// console.log(putNums(12,44));

// no : 
const student = {
    name: 'Md. Mofazzal Hosain',
    age: 23,
    movies: ['king khan', 'mon bosana porar table a']
}

const [firstOnde, secondOne] = student.movies;
// console.log(firstOnde, secondOne);


// object destructuring

const { name, age } = { name: 'mofu', age: 23 };
const  {names, ages } = { id: 32, name: 'mofu',  salary: 4000, age: 23 };

const employee = {
    ide: 'VS code',
    designation: 'developer',
    machine: 'windows',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 77,
        weight: 83,
        address: 'shewrapara',
        drink: 'juice',
        watch: {
            color: 'blacke',
            price: 3000,
            brand: 'rolex'
        }
    }
}

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;

console.log( weight, address );
console.log(brand);