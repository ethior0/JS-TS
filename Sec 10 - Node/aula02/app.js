// Quando não for um arquivo .js -> colocar a extensão
const Cachorro = require("./Z/mod2");

const c1 = new Cachorro("Dog");
c1.latir();

// ./ <ir pra pasta da frente>
// ../ <voltar pra pasta de trás>

// Variáveis internas dentro do módulo - Caminho absoluto
console.log(__filename);
console.log(__dirname);

const path = require("path");
console.log(path.resolve(__dirname, "..", "..", "arquivos", "imagens"));



