class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
  }
  depositar(valor) {
    this.saldo += valor
  }
  exibirSaldo() {
    console.log(this.saldo);
  }
}

class ClientePoup extends Cliente {
  constructor(nome, email, cpf, saldo, saldoPoup) {
    super(nome, email, cpf, saldo)
    this.saldoPoup = saldoPoup

  }
  depositarPoup(valor) {
    this.saldoPoup += valor
  }
}

const roberto = new ClientePoup("Roberto","email@email.com","12345678911",100,200)

console.log(roberto);
roberto.depositarPoup(30)
console.log(roberto);
