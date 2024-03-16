const cpf = "705.484.450-52";
const cpfLimpo = cpf.replace(/\D+/g, "");
const cpfArray = Array.from(cpfLimpo)

let total = 11;
let digito1 = 
cpfArray.filter( (v, i) => {
  return i < 9;
}).map( (v) => {
  total--;
  return v * total; 
}).reduce( (a, v) => {
  a += v;
  return a;
});

total = 12;
let digito2 =
cpfArray.filter( (v, i) => {
  return i < 10;
}).map( (v) => {
  total--;
  return v * total; 
}).reduce( (a, v) => {
  a += v;
  return a;
});

digito1 = 11 - (digito1 % 11);
digito2 = 11 - (digito2 % 11);
const newCpf = cpfLimpo.slice(0, -2) + digito1 + digito2;

console.log(cpfArray.join("") === newCpf);