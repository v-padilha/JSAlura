// medias 10,6.5,8,7.5

/*  let nota1 = 10;
  let nota2 = 6.5;
  let nota3 = 8;
  let nota4 = 7.5;

  let media = (nota1 + nota2 + nota3 + nota4)/4

  console.log(media);
*/

//const notas = [10, 6.5, 8, 7.5]

//let media = (notas[0], notas[1], notas[3])/notas.length

//console.log(media);

// const notas = [10, 6, 8]
// notas.push(7);
// console.log(notas);

//const nomes = [1,2,3,4,5,6]

// const sala1 = nomes.slice(0, nomes.length/2);
// const sala2 = nomes.slice(nomes.length/2);

// console.log(`Alunos da sala 1: ${sala1}`);
// console.log(`Alunos da sala 2: ${sala2}`);

//const listaDeChamada = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"]

//listaDeChamada.splice(1,2,"Rodrigo")

//console.log(`Lista de Chamada: ${listaDeChamada}`);


/*const alunos = ['Joao', 'Juliana', 'Caio', 'Ana']
const medias = [10,7,9,6]

let listaNotasDeAlunos = [alunos, medias]

const exibeNomeNota = (nomeDoAluno) => {
  if (listaNotasDeAlunos[0].includes(nomeDoAluno)) {
  let indice = listaNotasDeAlunos[0].indexOf(nomeDoAluno)
    return listaNotasDeAlunos[0][indice] + ', sua média é ' + listaNotasDeAlunos[1][indice];
  }
  else {
    return 'Aluno não está cadastrado';
  }
}

console.log(exibeNomeNota("Ana"));
*/

cont numeros = [100,200,300,400,500,600]

for (var i = 0; i < numeros.length; i++) {
  console.log(i, numeros[i])
}
