// String = text | Number = número

// const nome; precisa inicializar na declaração
const primeiroNumero = 14; // Number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado += 5;
console.log(typeof primeiroNumero + segundoNumero)

// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive - nomeCliente != nomecliente
// Não pode modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.