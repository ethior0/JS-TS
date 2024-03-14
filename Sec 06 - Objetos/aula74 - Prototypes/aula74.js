// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // this.nomeCompleto = () => "ORIGINAL: " + this.nome + " " + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__;

Pessoa.prototype.nomeCompleto = function() {
  return this.nome + " " + this.sobrenome;
};

// instancia
const pessoa1 = new Pessoa("Thiago", "M."); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa("Maria", "M."); // <- Pessoa = Função construtora
const data = new Date(); // <- Date = Função construtora

console.dir(pessoa1);
console.dir(data);

// pessoa1 --> Pessoa.prototype --> Object.prototype