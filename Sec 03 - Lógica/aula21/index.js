/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor)
=== igualdade estrita (valor e tipo) 
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/

// console.log(10 > 5);
const num1 = 10; // number
const num2 = '10'; // string
const comp = num1 == num2; // true
const comp2 = num1 === num2; // false
console.log(comp, comp2);