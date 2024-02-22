// const nome = 'Luiz';
// let i = 0;

// while (i < nome.length) {
//   console.log(nome[i]);
//   i++;
// }

console.log("###While")

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

console.log("###Do While");

do {
  rand = random(min,max);
  console.log(rand);
} while (rand !== 10);

console.log(rand + " é igual a 10");