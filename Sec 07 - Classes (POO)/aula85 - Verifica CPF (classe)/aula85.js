class ValidaCpf {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, "")
    })
  }

  isSequencia() {
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    // não é da instância e sim da classe
    const digito1 = ValidaCpf.geraDigito(cpfSemDigitos);
    const digito2 = ValidaCpf.geraDigito(cpfSemDigitos + digito1);
    this.novoCPF = cpfSemDigitos + digito1 + digito2;
  }

  // Caso não haja "this" ele pode se tornar um método estático
  static geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for (let stringNumerica of cpfSemDigitos) {
      total += reverso * Number(stringNumerica);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : "0";
  }

  valida() {
    if(!this.cpfLimpo) return false;
    if(typeof this.cpfLimpo !== "string") return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;
    this.geraNovoCpf()
    
    return this.novoCPF === this.cpfLimpo;
  }
}

const cpf1 = new ValidaCpf("705.484.450-52");

if (cpf1.valida()) {
  console.log("Cpf válido");
} else {
  console.log("Cpf inválido");
}