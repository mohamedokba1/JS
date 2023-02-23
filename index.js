// console.log(10 == 10); // "Loose" equality, compare values only
// console.log(10 === 10); // "Strict" equality, compare values and type

// console.log(5 == '5'); // true , '5' coerced to 5 (Type coercion)
// console.log(5 === '5'); // false

// console.log(Number(false)); // 0
// console.log(Number(true)); // 1

let str = Number("Mohamed"); // type corecion
console.log(typeof str); // number
console.log(str); // NaN => not a number
// NaN not equal to any thing else even if it self (NaN == NaN) => false

console.log(null == null); //true
console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(null == ''); //false
console.log(null == 0); //false
console.log(null == []); //false

// We usually use strict equality to avoid ambigous bugs in our code  
