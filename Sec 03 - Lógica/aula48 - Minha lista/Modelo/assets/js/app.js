const inputTarefa = document.querySelector(".inputTarefa");
const btnTarefa = document.querySelector(".btnTarefa");
const tarefasDiv = document.querySelector(".tarefas");

function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criaLi () {
  const li = document.createElement("li");
  return li;
}

function criaBotaoApagar(lista) {
  const botaoApagar = document.createElement("button");
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "Apagar esta tarefa");
  botaoApagar.innerHTML = `<i class="ri-delete-bin-line"></i>`;

  lista.appendChild(botaoApagar);
}

function criaTarefa(inputTexto) {
  const li = criaLi();
  li.innerHTML = `${inputTexto} `;
  tarefasDiv.appendChild(li);
  criaBotaoApagar(li);

  limpaInput();
  salvarTarefas();
}

document.addEventListener("click", function(e) {
  if (e.target.classList.contains("apagar") || e.target.classList.contains("ri-delete-bin-line")) {
    const buttonElement = e.target.parentElement;

    if (e.target.classList.contains("ri-delete-bin-line")) { // Se for o ícone tira o pai do pai dele (li)
      buttonElement.parentElement.remove(); 
      salvarTarefas();
      return;
    }
    buttonElement.remove();  // Se for o botão tira o pai dele
    salvarTarefas();
  }
});

inputTarefa.addEventListener("keypress", function(e) {
  if (!inputTarefa.value) return;
  if (e.keyCode === 13) criaTarefa(inputTarefa.value);
});

btnTarefa.addEventListener("click", function(e) {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

function salvarTarefas() {
  const tarefas = tarefasDiv.querySelectorAll("li");
  const listaTarefas = [];

  for (let li of tarefas) {
    const textoLista = li.innerText;
    const nomeTarefa = textoLista.replace("Apagar", "").trim();
    listaTarefas.push(nomeTarefa);
  }

  const tarefasJSON = JSON.stringify(listaTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
}

function adicionarTarefasSalvas() {
  const tarefasSalvasJSON = localStorage.getItem("tarefas");
  const listaTarefasArray = JSON.parse(tarefasSalvasJSON);

  for (let nomeTarefa of listaTarefasArray) {
    criaTarefa(nomeTarefa);
  }
}

adicionarTarefasSalvas();