function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString('pt-BR');
}

const timer = setInterval(function() { // executa infinitamente
  console.log(mostraHora());
}, 1000); // intervalo de tempo (milissegundos)

setTimeout(function() { // executa apenas 1 vez
  clearInterval(timer);
}, 10000); // intervalo de tempo (milissegundos)

setTimeout(function() {
  console.log("Mensagem a cada 5s")
}, 5000);