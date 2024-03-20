// Compondo um objeto com vários outros objetos -> Composição / Mixin
const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  }
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  }
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  }
};

const pessoaPrototype = {...falar, ...comer, ...beber};
// const pessoaPrototype = Object.assign({}, falar, comer, beber);

// Factory function
function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}

const p1 = criaPessoa("Thiago", "Moreira");
const p2 = criaPessoa("Maria", "Moreira");
console.log(p1);
console.log(p2);