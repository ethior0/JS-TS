let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

// reatribuindo os valores por meio de um array
const letras = [b, c, a];
[a, b, c] = letras; 

console.log(a, b, c);

//               0  1  2  3  4  5  6  7  8 - indice
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const primeiroNumero = numeros[0];
// const segundoNumero = numeros[1];
// const terceiroNumero = numeros[2];

// Atribuição via desestruturação
// ou utilizar ... -> rest operator ou spread operator
//                                      operador rest ...
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
const[um, , tres, , cinco, , sete] = numeros;
console.log(primeiroNumero, segundoNumero, terceiroNumero, resto);
console.log(um, tres, cinco, sete);

//                 0          1          2
//              0  1  2    0  1  2    0  1  2
const nume = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [,,array3] = nume; 
console.log(array3); //  array [7, 8, 9]
console.log(array3[0]); // 7

const [[,,teste1], [,,teste2], [,,teste3]] = nume;
console.log(teste1, teste2, teste3); // 3, 6, 9