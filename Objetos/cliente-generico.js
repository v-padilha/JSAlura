function cliente(nome, cpf, email, saldo) {
  this.nome = nome
  this.cpf = cpf
  this.email = email
  this.saldo = saldo
  this.depositar = function(valor) {
    this.saldo += valor
  }

}

const andre = new cliente("Andre","07788852100", "joseandre@email.com", 100)

console.log(typeof(andre));
