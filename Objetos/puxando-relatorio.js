const cliente = {
  nome: "Andre",
  idade: 36,
  cpf: "12312312312",
  email: "email@email.com",
  fones: ["41998784411", "415774411223"],
  dependentes: [{
      nome: "Sara Silva",
      parentesco: "filha",
      dataNasc: "20/03/1990"
    },
    {
      nome: "Sonia Maria",
      parentesco: "filha",
      dataNasc: "20/03/1992"
    }
  ],
  saldo: 100,
  depositar: function(valor) {
    cliente.saldo += valor

  }
}

let relatorio = "";

for (let info in cliente) {
  if (typeof cliente[info] === "object" || typeof cliente[info] === "function") {
    continue
  } else {
    relatorio += `
    ${info}: ${cliente[info]}`

  }

}
console.log(relatorio);
