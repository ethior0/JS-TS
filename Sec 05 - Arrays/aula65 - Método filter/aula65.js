// Filter -> return array com a mesma quantidade de elementos ou menos

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosFiltrados = numeros.filter(function(valor, indice, array) {
//   console.log(valor, indice, array);
//   return valor > 10;
// });

const numerosFiltrados = numeros.filter(valor => valor >= 0);
console.log(numerosFiltrados);

console.log("###");

const pessoas = [
	{nome: 'Luiz', idade: 62},
	{nome: 'Maria', idade: 23},
	{nome: 'Eduardo', idade: 55},
	{nome: 'Letícia', idade: 19},
	{nome: 'Rosana', idade: 32},
	{nome: 'Wallace', idade: 47}
];

const pessoasComNomeGrande = pessoas.filter( obj => obj.nome.length >= 7 );
const pessoasComMaisDeCinquentaAnos = pessoas.filter( obj => obj.idade > 50 );
const pessoasNomeTerminaComA = pessoas.filter( obj => obj.nome.toLowerCase().endsWith('a') );
console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDeCinquentaAnos);
console.log(pessoasNomeTerminaComA);