const verdadeira = true;

// Let tem escopo de bloco {... bloco}
// Var só tem escopo de função

let nome = 'Luiz'; // criando
var nome2 = 'Luiz'; // criando

// let nome = 'Otávio'; // -> error
// var nome2 = 'Otávio'; // funciona
// console.log(nome, nome2);

if (verdadeira) {
  let nome = 'Otávio'; // criando
  var nome2 = 'Rogério' // redeclarando
//  console.log(nome, nome2);

  if (verdadeira) {
    var nome2 = 'Ronaldo'; // redeclarada
    let nome = 'Outra coisa'; // 'Outra coisa', 'Otávio', 'Luiz'
//    console.log(nome, nome2);
  }
}

console.log(nome, nome2);
function falaOi() {
  var sobrenome = 'Miranda';
  console.log(sobrenome)
}
falaOi();

console.log(sobrenome); // undefined
var sobrenome = 'Miranda';

console.log(sobrenome2); // error
let sobrenome = 'Miranda';