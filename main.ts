//  Q No 24
// Test for equality and inequality in strings
let type1 : string = "Hello";
let type2 : string = "World";

console.log(type1 === type2); // false
console.log(type1 !== type2); // true

// Tests using the lower case function
let upperCase: string = "HELLO";
let lowerCase: string = "hello";

console.log(upperCase.toLowerCase() === lowerCase); // true

// Numerical tests involving equality and inequality,
// greater than and less than or equal to , and less than or equal to .

let number1 : number = 20;
let number2 : number = 30;

console.log(number1 === number2); // false
console.log(number1 !== number2); // true
console.log(number1 > number2); // false
console.log(number1 < number2);   // true
console.log(number1 >= number2); // false
console.log(number1 <= number2);  // true

// Tests using "and" and "or" operators
let a : number = 40;
let b : number = 50;
let c : number = 60;

console.log(a < b && c > a); // true
console.log(b > c || c < a); // false

// Test whether an item is in a array

let array1 : number[] = [1,2,3,4,5];
let anOtherItem : number = 8;

console.log(array1.indexOf(anOtherItem) !== -1); // true

// Test whether an item is not in a array
console.log(array1.indexOf(anOtherItem) === -1); // true














