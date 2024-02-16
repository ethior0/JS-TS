/*
Primitivos (imutáveis) - string, number, boolean, null, undefined (bigint, symbol)
*/

let nome = 'Luiz';
nome[0] = 'R'; // O valor é imutável
console.log(nome[0], nome);

let a = 'A'; 
let b = a; // Valores copiados
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

/*
Referência (mutável) - array, object, function
*/

let c = [1, 2, 3]
let d = c; // Apontam para o mesmo lugar na memória
console.log(c, d); // [1, 2, 3] - [1, 2, 3]
c.push(4);
console.log(c, d) // [1, 2, 3, 4] - [1, 2, 3, 4]
d.pop();
console.log(c, d); // [1, 2, 3] - [1, 2, 3]

let e = [...d]; // Copia como se fosse um tipo primitivo
e.push(4, 5);
console.log(e, d);

const pessoaA = {
  nome: "Thiago",
  sobrenome: "Moreira"
};

const pessoaB = pessoaA;
console.log(pessoaB);
pessoaA.nome = "Kleber";
console.log(pessoaB);

const pessoaC = {...pessoaA} // spread
pessoaA.nome = "Thigas";
console.log(pessoaA, pessoaC) // não alterou o valor de C
