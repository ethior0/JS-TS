/*
Operadores Lógicos
&& -> AND -> E - Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO
*/

const expressaoAnd = true && true && true && true; // true
const expressaoOr = true || false || false || false; // true
console.log(expressaoOr) // true

const usuario = 'Luiz';
const senha = '123456';

//                   true                      false
const vaiLogar = usuario === 'Luiz' && senha === '12345';
console.log(vaiLogar); // false

console.log(!true); // false
console.log(!!true); // false -> true