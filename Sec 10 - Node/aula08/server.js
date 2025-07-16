const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

// url params -> rotas
// query strings -> ?chave1=valor1&chave2=valor2
// http://facebook.com/profiles/12345?campanha=googleads&nome_campanha=seila

app.get("/", (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="nome">
  <button>Enviar</button>
  </form>
  `);
});

app.get("/testes/:idUsuarios?/:parametro?", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send("Oi");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`O que você me enviou foi: ${req.body.nome}`);
})

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000")
});

