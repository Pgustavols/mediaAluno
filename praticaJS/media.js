nomeAlunos = ["Paulo", "Pedro", "Felipe", "Maria", "Joana", "Joaquina"]
notasAlunos = [[10, 9, 10, 9], [8, 9, 7, 9], [9, 10, 6, 8], [10, 10, 10, 10], [9, 5, 6, 10], [9, 8, 10, 8]]

function calculaMedia(aluno){
    aluno =  aluno.charAt(0).toUpperCase() + aluno.substring(1);

    if (nomeAlunos.includes(aluno)){
        indexNotas = nomeAlunos.indexOf(aluno)

        soma = 0

        notasAlunos[indexNotas].forEach((nota) => {
            soma += nota
        })

        media = soma / notasAlunos[indexNotas].length    

        console.log(`A média de ${aluno} foi ${media}`)
    }

    else{
        console.log("O aluno não está cadastrado no sistema.")
    }

}

calculaMedia("paulo")

