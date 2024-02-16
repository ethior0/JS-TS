function saudacao(nome) {
  // console.log(`Olá ${nome}`)
  return `Olá ${nome}`;
}

// saudacao("Thiago");
// saudacao("Felipe");
const variavel = saudacao("Elenol")
console.log(variavel)

function soma(x, y) {
  const resultado = x + y;
  return resultado;
}

function soma2(x = 1, y = 1) { // valores padrões, caso nao haja parametro
  const resultado = x + y;
  return resultado;
}

console.log(soma()) // NaN -> undefined + undefined
console.log(soma2()) // 2 
console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));

const raiz = function (n) {
  return n ** 0.5;
};
console.log(raiz(9));

// arrow function
const raiz2 = n => n ** 0.5;
console.log(raiz2(9))

const potencia = (num, n) => {
  return num ** n;
}
console.log(potencia(4, 2))
