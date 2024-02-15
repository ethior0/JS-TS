// Atalhos dos métodos do objeto window 
// - window.alert()
// - window.confirm()
// - window.prompt()
// alert('Com a nossa mensagem.'); 
// confirm('Deseja realmente apagar?'); 
// prompt('Digite o seu nome:'); 

const num1 = prompt('Digite um número (1)');
const num2 = prompt('Digite um número (2)');
const res = Number(num1) + Number(num2);

alert(`O resultado foi ${res}`);
console.log(num1, num2, res);
