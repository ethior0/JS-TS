/* CONSTRUTORES
const data = new Date() -> data atual pegada do sistema
const data = new Date(milisegundos)
const data = new Date(ano, mes)
const data = new Date(ano, mes, dia)
const data = new Date(ano, mes, dia, hr, min, s, ms)
const data = new Date('string') -> string que representa uma data
*/

const tresHoras = 60 * 60 * 3 * 1000; // 3 horas em milissegundos
//                   0ms +   3hr       
const data1 = new Date(0 + tresHoras); // 01/01/1970 Timestamp unix ou época unix (marco zero)
console.log(data1.toString());

const umDia = 60 * 60 * 24 * 1000; // 1 dia em milissegundos
//                     0ms +    3hr  +  1d
const data2 = new Date(0 + tresHoras + umDia);
console.log(data2.toString()); // 02/01/1970
//                    ano, mes, dia, horas, minutos, segundos, milissegundos
const data3 = new Date(2019, 3, 20, 15, 15, 27); // meses em js 0-11
console.log(data3.toLocaleString());
console.log(data3.toLocaleDateString());

const data4 = new Date('2019-04-20 20:20:59');
console.log('dia ' + data4.getDate());
console.log('mes ' + data4.getMonth()); // mes começa do 0
console.log('ano ' + data4.getFullYear());

console.log('hora ' + data4.getHours());
console.log('minuto ' + data4.getMinutes());
console.log('segundo ' + data4.getSeconds());
console.log('milissegundo ' + data4.getMilliseconds());

console.log('Dia semana ' + data4.getDay()); // 0 - domingo, 6 - sábado

console.log(Date.now()) // milissegundos da data atual

console.log(data4.toString());

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  // console.log(data);
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());

  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const datona = new Date();
console.log(formataData(datona));
