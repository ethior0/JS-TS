//               01234567
let umaString = "Um texto";

console.log(umaString[0]); // U
console.log(umaString.charAt(1)); // m

console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia. hehe.');
console.log(`${umaString} em um lindo dia. hehe.`);

console.log(umaString.lastIndexOf('o')); // 7
console.log(umaString.lastIndexOf('o', 3)); // -1
console.log(umaString.indexOf('Um')); // 0
console.log(umaString.indexOf('o', 3)); // 7
/**
 * indexOf() x search() 
 * diferentemente do indexOf, o método search
 * aceita expressões regulares
 */
console.log(umaString.search(/[a-z]/)); 
console.log(umaString.match(/[a-z]/g));

let outraString = "O rato roeu a roupa do Miguel de roma.";
console.log(outraString.replace(/[Or]/gi, '#'));

console.log(outraString.length)
// outraString.length - 5, outraString.length -1
console.log(outraString.slice(-5, -1));
// OU
console.log(outraString.substring(outraString.length - 5, outraString.length - 1));

console.log(outraString.split(' ', 3))
console.log(outraString.toUpperCase())
console.log(outraString.toLowerCase())