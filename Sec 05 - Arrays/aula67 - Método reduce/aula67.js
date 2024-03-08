// Reduce -> reduzir um array a um único elemento
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor) {
  acumulador += valor;
  return acumulador;
}, 0);
console.log(total);

console.log("###");

const pessoas = [
	{nome: 'Luiz', idade: 62},
	{nome: 'Maria', idade: 23},
	{nome: 'Eduardo', idade: 55},
	{nome: 'Letícia', idade: 19},
	{nome: 'Rosana', idade: 32},
	{nome: 'Wallace', idade: 47}
];
const maisVelha = pessoas.reduce(function(acumulador, valor) {
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(maisVelha);