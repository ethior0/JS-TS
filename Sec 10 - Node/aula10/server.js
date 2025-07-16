const express = require("express");
const routes = require("./routes");
const path = require("path");

const app = express();

app.use(routes);

app.use(express.urlencoded({ extended: true }));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000")
});