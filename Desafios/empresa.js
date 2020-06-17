//Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:
//Nome: Rocketseat Cor: Roxo Foco: Programação Endereço: Rua: Rua Guilherme Gembala Número: 260

//Objetos

const usuario = {
    nome: "Marcio",
    empresa: {
        nome: "Rocketseat",
        cor: "Roxo",
        foco: "Programação",
        endereco: {
            rua: "Guilherme Gembala",
            numero: 260
        }
    }
}

console.log('A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}');

