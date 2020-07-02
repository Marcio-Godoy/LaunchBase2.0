//Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
//Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

// Vetores e Objetos

const programador = {
    nome: "Carlos",
    idade: 32,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'C#', especialidade: 'Desktop' },
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade`)
