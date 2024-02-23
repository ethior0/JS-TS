// try {
//   console.log(a); // erro
//   console.log("Abri um arquivo");
//   console.log("Manipulei o arquivo e gerou erro");
//   console.log("Fechei o arquivo");
// } catch (e) {
//   console.log("Tratando o erro");
// } finally {
//   console.log("FINALLY: Eu sempre sou executado")
// }

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

try {
  const hora = retornaHora(11); // erro
  console.log(hora);
} catch(e) {
  console.log("Tratando o erro de forma amigável...");
} finally {
  console.log("Tenha um bom dia =D");
}