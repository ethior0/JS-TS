// Escreva uma função que recebe um número e
// retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o próprio número
// Use a função com números de 0 a 100

const fizz = (x) => {
  let string = "";

  if (typeof x === 'number') {
    if (x % 3 === 0) string += "Fizz";
    if (x % 5 === 0) string += "Buzz";
    return string === "" ? x : string;
  } else {
    return x;
  }
}

console.log( fizz(0) );