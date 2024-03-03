// Valor por referência
// Pode usar o construtor para Strings, Objetos, Funções, Números...
//                       0          1        2        3          4
const nomes = new Array('Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana');
const novo = [...nomes]; // copia usando spread
console.log(nomes.length);

// nomes[2] = "João";
// delete nomes[2]; // deleta o item, mas permanece os indices

novo.pop();
console.log(nomes);
console.log(novo);

// shift ()  - tira o primeiro
// unshift() - coloca no primeiro
// push ()   - coloca no final
// pop ()    - tira do final

const teste = nomes.slice(0, -3);
console.log(teste);

// tornando string em array
const string = 'Luiz Otávio Miranda';
console.log(string.split(" "));

// tornando array em string;
const array = ['Luiz', 'Otávio', 'Miranda'];
console.log(array.join(" "));