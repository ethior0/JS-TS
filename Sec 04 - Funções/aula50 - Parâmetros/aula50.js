// *arguments* funciona apenas para funções
// declaradas com function
function funcao() {
  let total = 0;
  for (argumento of arguments) {
    total += argumento;
  }
  console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8);

// ###

function soma(a, b = 2, c = 4) { // 2º solução - valores padroes
  // b = b || 0; // 1º solução
  console.log(a + b + c);
}
soma(2, 20); // chamando sem enviar o parametro

// ###

function teste({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
teste({ nome: 'Luiz', sobrenome: 'Otávio', idade: 20 });

// ###

// em vez da utilização de array para números, 
// usamos o operador rest (precisa ser o último parametro)
const conta = (operador, acumulador, ...numeros) => {
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }
  console.log(acumulador);
};
// sem arguments para arrow function
// mas ainda tem o operador ...rest

conta('+', 0, 20, 30, 40, 50);
conta('-', 0, 20, 30, 40, 50);
conta('/', 150, 20, 30, 40, 50);
conta('*', 1, 20, 30, 40, 50);