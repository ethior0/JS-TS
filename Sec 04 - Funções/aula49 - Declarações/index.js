// Declaração de função (Function hoisting)
// Permitea chamada da função antes da inicialziação dela
falaOi();
function falaOi() {
  console.log("Oie");
}

// First-class objects (Objetos de primeira classe)
// Pode tratar funções como dados
// Function expression
const souUmDado = function() {
  console.log("Sou um dado.");
};
souUmDado();

function executaFuncao(funcao) {
  console.log("Vou executar sua função abaixo");
  funcao();
}
executaFuncao(souUmDado); // função sendo tratata como dado

// Arrow function
const funcaoArrow = () => {
  console.log("Sou uma arrow function");
}
funcaoArrow();

// Dentro de um objeto
const obj = {
  falar() {
    console.log("Estou falando...");
  }
}
obj.falar();
