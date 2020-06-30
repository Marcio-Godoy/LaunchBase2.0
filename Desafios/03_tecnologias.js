const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["Javascript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]

for (let usuario of usuarios) {
    console.log('${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}')
}

function checaSeUsuarioUsaCSS(usuario) {
    //Percorra o array de tecnologias do usuário até se encontrar se ele trabalha com CSS
    //SE encontrar, retorne true da função, caso contrário retorne false

    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') return true
    }

    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}