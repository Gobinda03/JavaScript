const myArray = [0, 1, 2, 3, true, "Hello", 4, 5];
const myArray2 = new Array(1, 2, 3, 4)

myArray2.push(5)
console.log(myArray2);

myArray2.pop()
console.log(myArray2);

myArray2.unshift(0)
console.log(myArray2);

myArray2.shift()
console.log(myArray2);

console.log(myArray.includes(9));
console.log(myArray.indexOf(3));

const newArray = myArray.join();
console.log(newArray); //string

console.log(typeof myArray);
console.log(typeof newArray);


console.log(myArray.slice(4, 6));
console.log(`After slice: ${myArray}`);


console.log(myArray.splice(4, 2));
console.log(`After Splice: ${myArray}`);



const uchiha = ['Madara', 'Obito', 'Itachi', 'Sasuke'];
const uzumaki = new Array('Kushina', 'Naruto', 'Boruto', 'Himawari');

// uzumaki.push(uchiha);
const ninja = uzumaki.concat(uchiha);
console.log(ninja);


const uchihaUzumaki = [...uchiha, ...uzumaki];
console.log(uchihaUzumaki);



let mixArray = [1, 2, 3, 4, [5, 6], [7, [8, 9]], 10];
console.log(mixArray.flat(3));



console.log(Array.isArray("Hello"));
console.log(Array.from("Hello"));

