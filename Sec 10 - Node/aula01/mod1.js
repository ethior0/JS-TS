// const nome = "Luiz";
// const sobrenome = "Miranda";

// const falaNome = () => nome + " "  + sobrenome;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = "O que eu quiser exportar";

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa;

// exportando os módulos, reescrevendo o module.exports
// module.exports = {
//   nome, sobrenome, Pessoa
// }