/* IEEE 754-2008 -> padrão da precisao dos números em js
 * q em algum momento pode causar uma certa imprecisao em
 * pequenas contas
 */ 
let num1 = 10;
let num2 = 2.525125125;

console.log(num1.toString() + num2);
console.log(num1.toString(2)) // conversão pra binário
console.log(num1.toString(8)) // conversão pra octal
console.log(num1.toString(16)) // conversão pra hexadecimal

console.log(num2.toFixed(4))

console.log(Number.isInteger(num2)); // false