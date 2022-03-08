// 1. json => stringify, parse

  const student = {
    name: 'Md. Mofazzal Hosain',
    age: 23,
    movies: ['king khan', 'mon bosana porar table a']
}

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// 2. fetch

/* fetch('url')
  .then(res => res.JSON())
  .then(data => console.log(data))
 */

// keys, values
  const keys = Object.keys(student);
  const values = Object.values(student);

// for
 const numbers = [12, 33, 54, 67, 77, 88, 89];
 numbers.forEach(num => console.log(num));
 numbers.map(num => num * 2);

 // for of array like object
 // loop on an object using for in

// add or remove from an array
const products = [
 {name: 'laptop', price: 50000, brand: 'asus', color: 'gray'},
 {name: 'mobile', price: 20000, brand: 'samsung', color: 'black'},
 {name: 'watch', price: 3000, brand: 'shawomi', color: 'green'},
 {name: 'headphone', price: 500, brand: 'htc', color: 'red'},
 {name: 'camera', price: 50000, brand: 'canon', color: 'black'}
    ];

const newProduct = { name: 'webcam', price: 500, brand: 'daraz '};

// copy products array and then add new product

const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone

const remaining = products.filter (product => product.name !== 'phone');
console.log(remaining);




