function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  let estoquePrivado = estoque;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    // value: estoque, // não precisa. por conta do getter
    // writable: true, // tambem nao faz sentido, por conta do setter
    configurable: true,
    get: function() {
      return estoquePrivado;
    },
    set: function(valor) {
      if (typeof valor !== 'number') {
        console.log("Not a Number");
      }
      estoquePrivado = valor;
    }
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

p1.estoque = 'Teste';
p1.estoque = 500;
console.log(p1.estoque);

function criaProduto(nome) {

  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      nome = valor;
    }
  };
}

const p2 = criaProduto("Camiseta");
console.log(p2);
