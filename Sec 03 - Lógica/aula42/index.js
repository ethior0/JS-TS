// Escreva uma funlão chamada ePaisagem que
// recebe dois argumentos, largura e altura
// de uma imagem (number).
// Retorne true se a imagem estiver no modo
// paisagem.

const ePaisagem = (largura, altura) => {
  // return largura > altura ? true : false;
  return largura > altura;
}

console.log(ePaisagem(1200, 1100));