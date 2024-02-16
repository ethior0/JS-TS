/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"
*/

// FALSY: false 0 '' "" `` null / undefined NaN
console.log('Luiz' && undefined && 'Maria'); // undefined

function falaOi() {
  return 'Oi';
}
const vaiExecutar = 0;
console.log(vaiExecutar && falaOi());

console.log(0 || false || null || 'Luiz Otávio' || true); // Luiz Otávio
console.log(0 || null || false || false || NaN); // NaN
