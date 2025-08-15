const name = "User"
const id = 3
let address = new String(" Kolkata-56 ");


// console.log(name+id)
console.log(`Hello I am ${name}, and my ID is ${id}. I live in ${address}.`)


console.log(typeof name); //string
console.log(typeof address); //object

console.log(address.length);
console.log(address.toUpperCase());
console.log(address.charAt(4));
console.log(address.indexOf('o'));

const sub = address.substring(0, 8)
console.log(sub);

console.log(address.slice(2,8));

console.log(address.trim());
console.log(address.replace('-',' '));


console.log(address.split('-'));
