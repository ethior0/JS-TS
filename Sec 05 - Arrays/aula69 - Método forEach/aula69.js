// forEach -> apenas itera os valores, não filtra, não altera e nem reduz
const a1 = [10, 20, 30, 40];
let total = 0;

a1.forEach(valor => {
  total += valor;
});

console.log(total);