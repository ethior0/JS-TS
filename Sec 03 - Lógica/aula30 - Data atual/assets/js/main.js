const section = document.querySelector('.container');
const dataAtual = new Date();

function dataAtualFormatada(data) {
  const diaSemana = getDiaSemana(dataAtual.getDay());
  const diaMes = dataAtual.getDate();
  const mesAtual = getNomeMes(dataAtual.getMonth());
  const anoAtual = dataAtual.getFullYear();
  const horaAtual = dataAtual.getHours() < 10 ? `0${dataAtual.getHours()}` : dataAtual.getHours();
  const minutoAtual = dataAtual.getMinutes() < 10 ? `0${dataAtual.getMinutes()}` : dataAtual.getMinutes();

  return `${diaSemana}, ${diaMes} de ${mesAtual} de ${anoAtual} ${horaAtual}:${minutoAtual}`;
}

function getDiaSemana(num) {
  switch (num) {
    case 0: return 'domingo';
    case 1: return 'segunda-feira';
    case 2: return 'terça-feira';
    case 3: return 'quarta-feira';
    case 4: return 'quinta-feira';
    case 5: return 'sexta-feira'
    case 6: return 'domingo';
    default: return '';
  }
}

function getNomeMes(num) {
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  return meses[num];
}

console.log(dataAtualFormatada(dataAtual));

const textoData = document.createElement('h1');
textoData.innerText = `${dataAtualFormatada(dataAtual)}`;

section.innerHTML = '';
section.appendChild(textoData);

