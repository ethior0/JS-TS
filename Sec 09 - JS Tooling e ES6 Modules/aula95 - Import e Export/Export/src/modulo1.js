const nome = "Luiz";
const sobrenome = "Miranda";
const idade = 30;

export function soma(x, y) {
  return x + y;
}

// export { nome as nome2, sobrenome, idade, soma };

// export class Pessoa {
//   constructor(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//   }
// }

export { nome, sobrenome, idade };
export default (x, y) => x * y;
