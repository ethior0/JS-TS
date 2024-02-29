// IIFE -> Immediately invoked function expression
(function() {
  const nome = 'Thiago';
  console.log(nome);
}) ();

const nome = 'Quqlquer coisxa';

(function(idade, peso, altura) {

  const sobrenome = 'Miranda';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Luiz'));
  }

  falaNome();
  console.log(idade, peso, altura);

}) (30, 80, 1.80);