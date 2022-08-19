const comida = 'pão na chapa';
const bebida = 'cafezinho';

if (bebida === 'cafezinho' && comida === 'pão na chapa') {
    console.log('Muito obrigado pela refeição :)');
} else {
    console.log('Acho que houve um engano com meu pedido');
}
const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

let pablo = true;
let paulo = true;
paulo = false;

console.log(pablo && paulo);

const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;

const currentHour = 3;
let messagem = '';
if (currentHour >= 22) {
    console.log(messagem = "Não deveríamos comer nada, é hora de dormir");
}
else if (currentHour >= 18 && currentHour < 22) {
    console.log(messagem = "Rango da noite, vamos jantar :D");
}
else if (currentHour >= 14 && currentHour < 18) {
    console.log(messagem = "Vamos fazer um bolo pro café da tarde?")
}
else if (currentHour > 11 && currentHour < 14) {
    console.log(messagem = "Hora do almoço!!!")
}
else if (currentHour > 4 && currentHour < 11) {
    console.log(messagem = "Hmmm, cheiro de café recém passado")
}
else {
    console.log(messagem = 'VAI DORMIR!!')
}

let weekDay = 'sabado';
if (weekDay === "segunda-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else if (weekDay === 'sabado' || weekDay === 'domingo') {
    console.log("FINALMENTE, descanso merecido UwU");
}

let num1 = 1
let num2 = 2
let resultado;

if (num1 > num2) {
    resultado = 'ok'
}

else (resultado = 'não');



resultado = num1 > num2 ? 'ok' : 'não';

console.log(resultado);