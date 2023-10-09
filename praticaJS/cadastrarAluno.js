alunoPrimeiraSerie = []
alunosSegundaSerie = []
alunosTerceiraSerie = []

alunosDoEnsinoMedio = [alunoPrimeiraSerie, alunosSegundaSerie, alunosTerceiraSerie]

function adicionaAluno(nome, serie){
    serie -= 1
    if (serie >= 0 && serie < alunosDoEnsinoMedio.length){
        alunosDoEnsinoMedio[serie].push(nome)
    }
    else{
        console.log("Só é possível inserir alunos na 1ª, 2ª ou 3ª Série do Ensino Médio.")
    }
}

function removerAluno(nome, serie){
    serie -= 1
    if (alunosDoEnsinoMedio[serie].includes(nome)){
        indexDoNome = alunosDoEnsinoMedio[serie].indexOf(nome)
        alunosDoEnsinoMedio[serie].splice(indexDoNome, 1)
    }
    else{
        console.log(`O(A) aluno(a) ${nome} não existe nesta lista.`)
    }
}

function mostraListaAlunos(serie = alunosDoEnsinoMedio){
    console.log(serie)
}

adicionaAluno("Paulo",3);
adicionaAluno("Kaio", 3);
adicionaAluno("Maria", 3);

adicionaAluno("Marcelo", 2);
adicionaAluno("João", 2);

adicionaAluno("Fabiana", 1);
adicionaAluno("Joana", 1);

removerAluno("Paulo", 3);

adicionaAluno("Samuel", 3);

mostraListaAlunos(alunosTerceiraSerie);
