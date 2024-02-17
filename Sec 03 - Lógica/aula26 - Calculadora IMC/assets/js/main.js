function meuEscopo() {
  const resultadoTexto = document.querySelector('.resultado');
  const form = document.querySelector('#formImc');
  const pesoInput = form.querySelector('#peso');
  const alturaInput = form.querySelector('#altura');

  function calcularImc(event) {
    event.preventDefault();
    let pesoValor, alturaValor;

    if (Number.isInteger( Number(pesoInput.value)) ) {
      pesoValor = Number(pesoInput.value);
      if (Number.isInteger( Number(alturaInput.value)) ) {
        alturaValor = Number(alturaInput.value);
        alturaValor /= 100;
      } else {
        console.log(alturaInput.value, typeof alturaInput.value)
        resultadoTexto.style.display = 'block';
        resultadoTexto.innerHTML = `Altura inválida!`;
      }
    } else {
      resultadoTexto.style.display = 'block';
      resultadoTexto.innerHTML = `Peso inválido!`;
    }

    if (pesoValor != undefined && alturaValor != undefined) {
      resultadoTexto.style.backgroundColor = '#aaa';
      const valorImc = pesoValor / (alturaValor * alturaValor);
      let resultadoImc;

      if (valorImc < 18.5) {
        resultadoImc = 'Abaixo do peso';
      } else if (valorImc >= 18.5 && valorImc <= 24.9) {
        resultadoImc = 'Peso normal';
      } else if (valorImc >= 25 && valorImc <= 29.9) {
        resultadoImc = 'Sobrepeso';
      } else if (valorImc >= 30 && valorImc <= 34.9) {
        resultadoImc = 'Obesidade grau 1';
      } else if (valorImc >= 35 && valorImc <= 39.9) {  
        resultadoImc = 'Obesidade grau 2';
      } else {
        resultadoImc = 'Obesidade grau 3';
      }

      resultadoTexto.innerHTML = `Seu IMC É ${valorImc.toFixed(2)} (${resultadoImc})`;
    }
  }

  form.addEventListener("submit", calcularImc);
}

meuEscopo();