const timerText = document.querySelector("#timer");
const iniciarButton = document.querySelector("#iniciarButton");
const pausarButton = document.querySelector("#pausarButton");
const zerarButton = document.querySelector("#zerarButton");

let msTempo = 0;
let timer;

/* INICIAR */
const iniciarTempo = (e) => {
  clearInterval(timer);
  timer = setInterval(aumentarMs, 1000);
  console.log("Iniciou");
};

const aumentarMs = () => {
  msTempo += 1000;
  segundos = Math.trunc( (msTempo / 1000) % 60 ); // ms / 1000 (s)
  minutos = Math.trunc( (msTempo / 60000) % 60 );
  horas = Math.trunc( msTempo / 3600000 );

  console.log(msTempo);
  atualizarTempoText(horas, minutos, segundos);
}

/* PAUSAR */
const pausarTempo = (e) => {
  clearInterval(timer);
  console.log("Pausou");
}

/* ZERAR */
const zerarTempo = (e) => {
  pausarTempo();
  msTempo = 0;
  atualizarTempoText(0, 0, 0);
  console.log("Zerou");
}

/* ATUALIZAR TEMPO */
const atualizarTempoText = (h, m, s) => {
  timerText.innerHTML = `${zeroFormato(h)}:${zeroFormato(m)}:${zeroFormato(s)}`;
}

const zeroFormato = (tempo) => {
  return tempo < 10 ? `0${tempo}` : `${tempo}`;
}

iniciarButton.addEventListener("click", iniciarTempo);
pausarButton.addEventListener("click", pausarTempo);
zerarButton.addEventListener("click", zerarTempo);