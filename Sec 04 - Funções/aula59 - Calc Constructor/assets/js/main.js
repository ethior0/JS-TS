function Calculadora() {
  const display = document.querySelector(".display");

  this.inicia = () => {
    this.cliqueBotoes();
    this.pressionaEnter();
  };

  this.pressionaEnter = () => {
    document.addEventListener('keypress', (e) => {
      if (e.key === "Enter") {
        this.realizaConta();
      }
    });
  },

  this.adicionaDisplay = (valor) => {
    display.value += valor;
    display.focus();
  };

  this.limpaDisplay = () => {
    display.value = "";
  };

  this.deletaNum = () => {
    display.value = display.value.slice(0, -1); // display.value.length - 1
  };

  this.realizaConta = () => {
    const conta = display.value;

    try {
      const resultado = eval(conta);

      if (!resultado) {
        alert("Conta Inválida");
        return;
      }

      this.trocaCorResultado('black', 600);
      display.value = resultado;
    } catch(e) {
      alert("Conta Inválida");
      return;
    }
  };

  this.cliqueBotoes = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) {
        this.trocaCorResultado('grey', 400);
        this.adicionaDisplay(el.innerText);
      }

      if (el.classList.contains("btn-clear")) {
        this.limpaDisplay();
      }

      if (el.classList.contains("btn-del")) {
        this.deletaNum();
      }

      if (el.classList.contains("btn-eq")) {
        this.realizaConta();
      }
    });
  }

  this.trocaCorResultado = (cor, peso) => {
    display.style.color = cor;
    display.style.fontWeigth = peso;
  }
}

const calculadora = new Calculadora();
calculadora.inicia();