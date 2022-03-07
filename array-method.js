// 1. map

const products = [
    {name: 'laptop', price: 50000, brand: 'asus', color: 'gray'},
    {name: 'mobile', price: 20000, brand: 'samsung', color: 'black'},
    {name: 'watch', price: 3000, brand: 'shawomi', color: 'green'},
    {name: 'headphone', price: 500, brand: 'htc', color: 'red'},
    {name: 'camera', price: 50000, brand: 'canon', color: 'black'}
];

const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);

// no: 2 forEach

products.forEach(product => console.log(product));
products.forEach(product => console.log(product.price));

//
products.forEach(product => {
    // use as per your condition
});

// 3. filter

const cheap = products.filter(product => product.price <=5000);
// console.log(cheap);

// another one

const specificProduct = products.filter(product => product.name.includes('a'));
// console.log(specificProduct);


// 4. find

const special = products.find(product => product.name.includes('a'));
console.log(special);


