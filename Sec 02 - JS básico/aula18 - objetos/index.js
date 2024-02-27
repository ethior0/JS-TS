const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;

const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = 55;

const pessoa1 = { // objeto literal
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25,

  falar() {
    console.log(`A minha idade atual é ${this.idade}`)
  },

  incrementaIdade() {
    this.idade++;
  }
};
console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade)
pessoa1.incrementaIdade();
pessoa1.falar();

function criaPessoa(nome, sobrenome, idade) { // factory
  return {       // OBJETO com os seguintes atributos
    nome,       // nome: nome,
    sobrenome, // sobrenome: sobrenome,
    idade     // idade: idade
  };
}

const pessoinha1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoinha2 = criaPessoa('Thiago', 'Moreira', 18);
const pessoinha3 = criaPessoa('Vinicius', 'Pog', 15);
const vetorTeste = [pessoinha1, pessoinha2, pessoinha3];
console.log(pessoinha1)
console.log(pessoinha2)
console.log(pessoinha3)

console.log(vetorTeste[0].nome);