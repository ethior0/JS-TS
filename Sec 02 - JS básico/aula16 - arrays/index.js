//            012345678910
// const nome = 'Luiz Otávio';
// console.log(nome[10]);
//                0        1        2          3       4  
const alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo
alunos.push('Luiza')
alunos.push('Eduardo')

console.log(alunos instanceof Array);
console.log(typeof alunos)
console.log(alunos.slice(0, 3));
console.log(alunos.slice(0, -1));
console.log(alunos, alunos.length);

// alunos[alunos.length] = 'Luiza' // adiciona no fim
// alunos[alunos.length] = 'Luiza2'
// alunos[alunos.length] = 'Luiza3'

// alunos.push('Hello'); // adiciona no fim
// alunos.unshift('Pedrin'); // adiciona no começo (desencorajado pela performance)

// alunos.pop(); // remove do fim
// alunos.shift(); // remove do começo

// delete alunos[1]; // fica um "buraco"

// alunos[0] = 'Eduardo';
// alunos[3] = 'Luiza';

// console.log(alunos)
// console.log(alunos[2]);
