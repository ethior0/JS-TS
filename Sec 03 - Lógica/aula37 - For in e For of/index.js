//            0123
const nomes = ['Luiz', 'Otávio', 'Henrique'];

for (let i in nomes) {
  console.log(i, nomes[i]);
}

console.log("###");

for (let valor of nomes) {
  console.log(valor);
}

console.log("###");

nomes.forEach(function(el, indice, array) {
  console.log(el, indice, array);
});