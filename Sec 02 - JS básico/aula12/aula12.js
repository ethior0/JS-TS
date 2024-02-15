let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

console.log(varA, varB, varC);

let aux = varA;
varA = varB;
varB = varC;
varC = aux;

console.log(varA, varB, varC);
