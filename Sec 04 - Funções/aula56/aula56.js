// Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome, 
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    fala(assunto = "nada") {
      return `${this.nome} está falando sobre ${assunto}.`
    },

    altura: a,
    peso: p,

    // Getter
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Thiago', 'Moreira', 1.80, 70);
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 42);
console.log(p1.fala("alguma coisa"));
// this.nome seria o equivalente a p1.nome
console.log(p1.nome);

// console.log(p1.imc());
// console.log(p2.imc());
console.log(p1.imc);
p1.nomeCompleto = 'Thiago Pog Moreira';
console.log(p1.nomeCompleto);
console.log(p1.nome, p1.sobrenome)