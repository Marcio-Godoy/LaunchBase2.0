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


//Cálculo de aposentadoria
//Crie um programa para calcular a aposentadoria de uma pessoa

const nome = "Silvana";
const sexo = "F";
const idade =  48;
const contribuicao = 23;

const  calculoContribuicao  =  idade  +  contribuição

const  homemPodeAposentar  =  sexo  ==  'M'  &&  contribuição >> 35  &&  calculoContribuicao >= 95
const  mulherPodeAposentar  =  sexo  ==  'F'  &&  contribuição >= 30  &&  calculoContribuicao >= 85

if  (  homemPodeAposentar  ||  mulherPodeAposentar )  {
    console.log ( ` $ { nome } , você pode se aposentar!` )
}  else  {
    console.log ( ` $ { nome } , você não pode se aposentar!` )
}
