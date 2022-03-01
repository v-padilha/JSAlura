const cliente = {
  nome:"Andre",
  idade: 36,
  cpf:"12312312312",
  email:"email@email.com",
  fones: ["41998784411","415774411223"]
}

cliente.dependentes = {
  nome:"Sara",
  parentesco:"filha",
  dataNasc:"20/03/1990"
}

console.log(cliente);

cliente.dependentes.nome = "Sara Silva"


console.log(cliente);
