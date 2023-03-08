const bmi = require('./bmi');
const readline = require('readline-sync');

const peso = readline.questionFloat('Para saber o seu IMC é necesssario saber o seu peso: ');
const altura = readline.questionFloat('e altura:  ');

const imc = bmi(peso, altura).toFixed(2);

console.log(imc);

if(+imc < 18.5) {
    console.log('Baixo peso')
};
if(+imc > 18.5 && +imc <= 24.9) {
    console.log('Peso normal')
};
if(+imc > 24.9 && +imc <= 29.9) {
    console.log('Excesso de peso')
};
if(+imc > 29.9 && +imc <= 35) {
    console.log('Obesidade')
};
if(+imc > 35) {
    console.log('Obesidade extrema')
};
