//  Q No 24
// Test for equality and inequality in strings
var type1 = "Hello";
var type2 = "World";
console.log(type1 === type2); // false
console.log(type1 !== type2); // true
// Tests using the lower case function
var upperCase = "HELLO";
var lowerCase = "hello";
console.log(upperCase.toLowerCase() === lowerCase); // true
// Numerical tests involving equality and inequality,
// greater than and less than or equal to , and less than or equal to .
var number1 = 20;
var number2 = 30;
console.log(number1 === number2); // false
console.log(number1 !== number2); // true
console.log(number1 > number2); // false
console.log(number1 < number2); // true
console.log(number1 >= number2); // false
console.log(number1 <= number2); // true
// Tests using "and" and "or" operators
var a = 40;
var b = 50;
var c = 60;
console.log(a < b && c > a); // true
console.log(b > c || c < a); // false
// Test whether an item is in a array
var array1 = [1, 2, 3, 4, 5];
var anOtherItem = 8;
console.log(array1.indexOf(anOtherItem) !== -1); // true
// Test whether an item is not in a array
console.log(array1.indexOf(anOtherItem) === -1); // true
