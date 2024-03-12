/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(objeto, 'prop') -> writable, enumerable, configurable
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

// valores passado por referência
const produto = { nome: "Caneca", preco: 1.8 };
Object.freeze(produto);
const outraCoisa = produto;

// copia as keys do objeto usando spread 
const caneca = {
  ...produto,
  material: "porcelana"
};

produto.nome = "Thigas";
console.log(produto);
console.log(outraCoisa);
caneca.preco = 12.5;
console.log(caneca);

// copia as keys do objeto usando o método assign
const caneca2 = Object.assign({}, caneca, { material: "porcelana2"});
console.log(caneca2);

console.log(Object.keys(caneca2)); // -> pega apenas as chaves
console.log(Object.values(caneca2)); // -> pega apenas os valores
console.log(Object.entries(caneca2)) // -> pega as propriedades como um array

console.log(Object.getOwnPropertyDescriptor(caneca2, 'material'));