function relogio() {
  const timerText = document.querySelector("#timer");
  // const iniciarButton = document.querySelector("#iniciarButton");
  // const pausarButton = document.querySelector("#pausarButton");
  // const zerarButton = document.querySelector("#zerarButton");
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      timerText.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: 'GMT'
    });
  }

  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("iniciar")) {
      timerText.classList.remove("pausado");
      clearInterval(timer);
      iniciaRelogio();
    }
    if (el.classList.contains("pausar")) {
      timerText.classList.add("pausado");
      clearInterval(timer);
    }
    if (el.classList.contains("zerar")) {
      timerText.classList.remove("pausado");
      timerText.innerHTML = `00:00:00`;
      clearInterval(timer);
      segundos = 0;
    }
  });

  // iniciarButton.addEventListener("click", function(e) {
  //   timerText.classList.remove("pausado");
  //   clearInterval(timer);
  //   iniciaRelogio();
  // });

  // pausarButton.addEventListener("click", function(e) {
  //   timerText.classList.add("pausado");
  //   clearInterval(timer);
  // });

  // zerarButton.addEventListener("click", function(e) {
  //   clearInterval(timer);
  //   timerText.innerHTML = `00:00:00`;
  //   segundos = 0;
  // });
}

relogio();