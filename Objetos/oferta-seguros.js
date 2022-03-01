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

/*function ofereceSeguro(objeto) {
    const propsClientes = Object.keys(objeto);
    if (propsClientes.includes("dependentes")) {
      console.log(`Oferta de seguro de vida para ${objeto.nome}`);
    }
}*/

//ofereceSeguro(cliente)
const clienteJson = JSON.stringify(cliente)
console.log(cliente)
