// For in -> lê os índices do array ou chaves do objeto;
const frutas = ['Uva', 'Pera', 'Maça', 'Banana'];

for (let indice in frutas) { // lê os índices do array
  console.log(frutas[indice]);
}

const pessoa = {
  nome: 'Carl',
  sobrenome: 'Edward',
  idade: 16
};

console.log(pessoa.nome);
console.log(pessoa['nome']);

for (let i in pessoa) {
  console.log(i, pessoa[i]);
}
