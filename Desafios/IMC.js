//Desafio 01

// Cálculo de IMC
//Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

const nome = "Carlos";
const peso = 84;
const altura = 1.88;

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log('${nome}, Você está acima do peso');
}
else (imc < 29.9)
{
    console.log('${nome}, Você está acima do peso');
}