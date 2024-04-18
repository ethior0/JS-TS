// const mod1 = require("./mod1");
// const falaNome = require("./mod1").falaNome;
// const { nome, sobrenome, falaNome } = require("./mod1"); // -> Desestruturação

// Teremos tudo que está dentro do objeto exports de module
// console.log(mod1.falaNome()); 
// console.log(falaNome()); 

// módulos padrões e instalados pelo npm nao requerem caminho
const path = require("path");
const axios = require("axios");
const { Pessoa } = require("./mod1");

const p1 = new Pessoa("Luiz");
console.log(p1);

axios("https://www.otaviomiranda.com.br/files/json/pessoas.json")
  .then(response => console.log(response.data))
  .catch(e => console.log(e));