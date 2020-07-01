// Criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem do cálculo da média

const alunosDaTurmaA = [
    {
        nome: "Maik",
        nota: 9.8
    },
    {
        nome: "Joaquim",
        nota: 3
    },
    {
        nome: "Antônio",
        nota: 5
    }
]

const alunosDaTurmaB = [
    {
        nome: "Oreia",
        nota: 7.0
    },
    {
        nome: "Marcio",
        nota: 9.5
    },
    {
        nome: "Jales",
        nota: 8.2
    },
    {
        nome: "Novo Aluno",
        nota: 4.5
    }
]

function calculaMedia(alunos) {
    let soma = 0;
    
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    if (media > 5)
        console.log('A média da turma ${turma} foi de ${media}, Parabéns turma!')
    else {
        console.log('A média da turma ${turma} foi de ${media}, Favor estudar!')
    }
}

enviaMensagem(media1, 'TurmaA')
enviaMensagem(media2, 'TurmaB')
