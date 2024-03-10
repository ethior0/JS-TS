// defineProperty -> uma propriedade
// defineProperties -> várias propriedades

function Produto(nome, preco, estoque) {
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: true, // pode alterar valor
    configurable: true // configuravel - não permite apagar e nem reconfigurar
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: nome, // valor
      writable: true, // pode alterar valor
      configurable: true // configuravel - não permite apagar e nem reconfigurar
    },
    preco: {
      enumerable: true, // mostra a chave
      value: preco, // valor
      writable: true, // pode alterar valor
      configurable: true // configuravel - não permite apagar e nem reconfigurar
    }
  });
}

const p1 = new Produto("Camiseta", 20, 3);
p1.estoque = 100;
console.log(p1);

// console.log(Object.keys(p1))

for (let chave in p1) {
  console.log(chave);
}