const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'av Brasil',
    numero: 320
  }
};

// Atribuição via desestruturação
// Formas de se pegar os atributos
const { nome: n = '', sobrenome = ''} = pessoa;
console.log(n, sobrenome);

const { endereco: {rua, numero}, endereco, ...resto} = pessoa;
console.log(rua, numero, endereco, resto);