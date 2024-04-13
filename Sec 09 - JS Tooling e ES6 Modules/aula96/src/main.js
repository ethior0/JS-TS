// Corrente de imports
// main.js -> GeraCPF.js -> ValidaCPF.js
import GeraCPF from "./modules/GeraCPF";

import "./assets/css/style.css";

(function() {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector(".cpf-gerado");
  cpfGerado.innerHTML = gera.geraNovoCpf();
})();