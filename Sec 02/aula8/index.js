const nome = "Luiz Otávio";
const sobrenome = "Miranda";

const idade = 30;
const peso = 84;
const alturaEmM = 1.80;

let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / alturaEmM ** 2;
anoNascimento = 2024 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM.toFixed(2)} de altura e seu IMC é de ${indiceMassaCorporal.toFixed(2)}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);

