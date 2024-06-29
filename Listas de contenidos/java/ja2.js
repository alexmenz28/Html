// forEach 
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => sum += num)

console.log(sum)

// map

const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

const products = [
  { id: 1, name: 'Mobile Phone', price: 500 },
  { id: 2, name: 'Laptop', price: 1500 },
  { id: 3, name: 'Smartwatch', price: 300 },
  { id: 4, name: 'Tablet', price: 700 }
];

// Usando map para obtener solo los nombres de los productos
const productNames = products.map(product => product.name);

console.log(productNames);
// ['Mobile Phone', 'Laptop', 'Smartwatch', 'Tablet']


// reduce

const suma = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(suma); 


// Usando reduce para calcular el precio total de todos los productos
const totalPrice = products.reduce((accumulator, product) => accumulator + product.price, 0);

console.log(totalPrice); // 3000


// every

// Usando every para verificar si todos los números son mayores que 0
const allPositive = numbers.every(num => num > 0);

console.log(allPositive); // true


const allExpensive = products.every(product => product.price > 100);

console.log(allExpensive); // true



// find
const primerNumeroMayorTres = numbers.find(num => num > 3);

console.log(primerNumeroMayorTres); // 4


  // Usando find para encontrar el primer producto con precio mayor que 500
  const expensiveProduct = products.find(product => product.price > 500);
  
  console.log(expensiveProduct);
  // { id: 2, name: 'Laptop', price: 1500 }


  //   findIndex 

// Usando findIndex para encontrar el índice del primer número mayor que 3
const nunmeroMayorQueTres = numbers.findIndex(num => num > 3);

console.log(nunmeroMayorQueTres); // 3


// Usando findIndex para encontrar el índice del primer producto con precio mayor que 500
const indexExpensiveProduct = products.findIndex(product => product.price > 500);
  
console.log(indexExpensiveProduct); // 1



// some
// Usando some para verificar si al menos un número es mayor que 3
const unNumeroMayorTres = numbers.some(num => num > 3);

console.log(unNumeroMayorTres); // true


// Usando some para verificar si al menos un producto tiene un precio mayor que 1000
const hasExpensiveProduct = products.some(product => product.price > 1000);
  
console.log(hasExpensiveProduct); // true



// short
// Usando sort para ordenar los números de forma ascendente
numbers.sort((a, b) => a - b);

console.log(numbers); // [1, 2, 3, 4, 5]


products.sort((a, b) => b.price - a.price);
  
console.log(products);

// filter:

const oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log(oddNumbers); // [1, 3, 5, 7, 9]


const expensiveProducts = products.filter(product => product.price > 500);
  
  console.log(expensiveProducts);


  // map: Se utiliza para transformar cada elemento de un array según una función dada, devolviendo un nuevo array con los resultados de estas transformaciones.

// reduce: Se utiliza para reducir (o transformar) un array en un solo valor aplicando una función a cada elemento, acumulando resultados.

// filter: Se utiliza para crear un nuevo array con todos los elementos que pasan una prueba (una función de prueba) especificada.

// find: Se utiliza para encontrar el primer elemento en un array que cumple con una condición determinada, devolviendo el elemento encontrado o undefined si no hay coincidencias.

// findIndex: Se utiliza para encontrar el índice del primer elemento en un array que cumple con una condición determinada, devolviendo el índice del elemento encontrado o -1 si no hay coincidencias.

// some: Se utiliza para verificar si al menos un elemento en un array cumple con una condición determinada, devolviendo true si al menos uno cumple o false si ninguno cumple.

// every: Se utiliza para verificar si todos los elementos en un array cumplen con una condición determinada, devolviendo true si todos cumplen o false si al menos uno no cumple.

// sort: Se utiliza para ordenar los elementos de un array según un criterio específico, modificando el array original.