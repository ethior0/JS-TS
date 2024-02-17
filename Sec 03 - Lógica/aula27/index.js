//(condicao) ? 'valor para true' : 'valor para false';
const pontuacaoUsuario = 999;
console.log(pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Plebe rs');

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(corPadrao)