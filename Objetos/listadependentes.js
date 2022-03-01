const cliente = {
  nome:"Andre",
  idade: 36,
  cpf:"12312312312",
  email:"email@email.com",
  fones: ["41998784411","415774411223"],
  dependentes: [{nome:"Sara Silva",
  parentesco:"filha",
  dataNasc:"20/03/1990"

}]
}

cliente.dependentes.push({
    nome: "Sonia Maria",
    parentesco: "filha",
    dataNasc: "20/03/1992"
})

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="20/03/1992")

console.log(filhaMaisNova[0].nome);
