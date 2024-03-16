// 705.484.450-52 070.987.720-03
/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o dígito for maior que 9, consderamos = 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)

705.484.450-52 === 705.484.450-52 (CPF válido)
*/

const cpf = "705.484.450-52";
const cpfForm = cpf.replace(/[.-]/g, "");
let cpfFormNoveDig = cpfForm.slice(0, -2);

// Primeiro dígito
let decimoDigito = 0;
for (let i = 10, j = 0; i >= 2; i--, j++) {
  const digito = Number(cpfFormNoveDig[j]);
  decimoDigito += i * digito;
}
decimoDigito = 11 - (decimoDigito % 11);
cpfFormNoveDig += decimoDigito;

// Segundo dígito
let decimoPrimDigito = 0;
for (let i = 11, j = 0; i >= 2; i--, j++) {
  const digito = Number(cpfFormNoveDig[j]);
  decimoPrimDigito += i * digito;
}
decimoPrimDigito = 11 - (decimoPrimDigito % 11)
cpfFormNoveDig += decimoPrimDigito;

// Print
console.log(cpfFormNoveDig);
console.log(cpfFormNoveDig === cpfForm ? "É válido!" : "Não é válido!");

