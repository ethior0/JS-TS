const elementos = [
  {tag: 'p', texto: 'Isso é um parágrafo'}, // 0
  {tag: 'div', texto: 'Isso é uma div'}, // 1
  {tag: 'footer', texto: 'Isso é um footer'}, // 2
  {tag: 'section', texto: 'Isso é uma section'} // 3
];

const section = document.querySelector('.container');
const div = document.createElement('div');
div.style.backgroundColor = '#f2f2f2';

for (let i = 0; i < elementos.length; i++) {
  const { tag, texto } = elementos[i];
  const elem = document.createElement(tag);
  elem.innerText = texto;
  div.appendChild(elem);
}

let textoCriado = document.createTextNode('Olá');
section.appendChild(textoCriado);

section.appendChild(div);