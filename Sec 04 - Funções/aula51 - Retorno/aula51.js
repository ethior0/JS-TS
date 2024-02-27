// return
// Retorna um valor
// Termina a função

function soma(a, b) {
  return a + b;
}

function soma2(a, b) {
  console.log(a + b);
}

console.log(typeof soma(5, 2));
console.log(typeof soma2(5, 2));

function criaPessoa(nome, sobrenome) {
  return {nome, sobrenome}; // objeto literal
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = {
  nome: 'João',
  sobrenome: 'Oliveira'
};

console.log(p1);
console.log(p2);

function falaFrase(comeco) {
  function falaResto(resto = "Mundo!") {
    return comeco + ' ' + resto;
  }

  return falaResto();
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo);

function criaMultiplicador(multiplicador) {
  
  return function (n) {
    return n * multiplicador;
  };
}

// retornei uma função
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);


console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));