// Função construtura -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)
// New cria um objeto vazio
function Pessoa(nome, sobrenome) {
  const ID = 123456;

  const metodoInterno = function() {
    console.log('Método Interno');
  };

  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log(this.nome + ' Método');
  };

}

const p1 = new Pessoa('Lozoaso', 'Otavasfas');
const p2 = new Pessoa('Kie', 'Les');
p1.metodo();
p2.metodo();