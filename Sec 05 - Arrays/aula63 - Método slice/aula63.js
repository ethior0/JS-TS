//                -5       -4      -3          -2        -1 
//                0        1       2           3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
console.log(nomes);

// nomes.splice(indice, delete, elem1, elem2, elem3);

// pop
const removidos = nomes.splice(-1, 1);
console.log("pop: " + removidos);

// adiciona no meio
const adicionar = nomes.splice(1, 0, 'Luiz');
console.log("adicionar no meio: " + nomes);

// shift
const shiftR = nomes.splice(0, 1);
console.log("shift: " + shiftR);

// push
const pushR = nomes.splice(nomes.length, 0, 'Push');
console.log("push: " + nomes);

// unshift
const unshiftR = nomes.splice(0, 0, 'Luiz', 'Otávio');
console.log("unshift: " + nomes);

console.log("###");
console.log(nomes);