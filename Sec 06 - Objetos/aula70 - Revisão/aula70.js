// Não usa o new:
// '' "" `` - String literal
// [] - Array literal
// 14421 - Número literal

// Criando objeto literal
const pessoa = {
  nome: "Luiz",
  sobrenome: "Otávio"
};

const chave = 'nome';
console.log(pessoa.nome, pessoa.sobrenome);
console.log(pessoa[chave], pessoa["sobrenome"]);

// Criando objeto com construtor
const pessoa1 = new Object();
pessoa1.nome = "Luiz";
pessoa1.sobrenome = "Otávio";
pessoa1.idade = 30;
pessoa1.falarNome = function() {
  return `${this.nome} está falando...`;
};
pessoa1.getDataNascimento = function() {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

// delete pessoa1.nome;
console.log(pessoa1.falarNome(), pessoa1.getDataNascimento());

console.log("\nChaves:");
for (let chave in pessoa1) {
  console.log(chave, pessoa1[chave]);
}

// Factory function && Constructor function && Classes

function criaPessoa(nome, sobrenome) {
  return {
    nome, 
    sobrenome,

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    }
  }
}

const p1 = criaPessoa("Thiago", "Moreira");
console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome) {
  this.nome = nome; // Pessoa.nome
  this.sobrenome = sobrenome; // Pessoa.sobrenome

  Object.freeze(this); // travou o objeto - Não pode alterar os valores
}

// {} <- "this" referencia o objeto
const p2 = new Pessoa("Thigas", "Moreira");
console.log(p2.nome, p2.sobrenome);

p2.nome = "Felipe"; // Não funfa por causa do .freeze
console.log(p2.nome, p2.sobrenome);
