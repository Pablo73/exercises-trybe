//Exercicio 1
const a = 12 , b = 45, c = 89;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a & b);

//Exercicio 2
if(a > b){
    console.log(a);
}
else{console.log(b);
}

//Exercicio 3//
if(a > b && a > c){
    console.log(a)
}
else if(b > a && b > c){
    console.log(b);
}
else{console.log(c);
}
 //Exercicio 4

 let valor = -256;
if(valor > 0){
    console.log((-2 * valor) + valor)
}
else if(valor < 0){
    console.log(valor - (2 * valor))
}
else {console.log(0);
}

// Exercicip 5

const alfa = 45, beta = 45, gama = 91;

if(alfa >= 0 && beta >= 0 && gama >=0 && alfa + beta + gama === 180){
  console.log('true');
}
else if(alfa >= 0 && beta >= 0 && gama >=0 && alfa + beta + gama != 180){
    console.log('false');
}
else{console.log('erro');
}

//exercicio 6

const peca = 'CAVALO';


if(peca.toLowerCase() === 'rei'){
    console.log('O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.');
}
else if(peca.toLowerCase() === 'dama' || peca.toLowerCase() === 'rainha'){
    console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.')
}
else if(peca.toLowerCase() === 'bispo'){
    console.log('O bispo move-se ao longo da diagonal. Não pode pular outras peças.')
}
else if(peca.toLowerCase() === 'cavalo'){
    console.log('É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.')
}
else if(peca.toLowerCase() === 'torre'){
    console.log('A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.')
}
else if(peca.toLowerCase() === 'peão'){
    console.log('O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.')
}
else{console.log("Não éuma peça de xadres")
}

const pecaXadres = 'CAVALO';

switch (pecaXadres.toLowerCase()) {
    case 'rei':
        console.log('O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.');
        break;
    case 'dama':
         console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
        break;
    case 'rainha':
         console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
        break;
    case 'bispo':
         console.log('O bispo move-se ao longo da diagonal. Não pode pular outras peças.');
        break;
    case 'cavalo':
         console.log('É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.');
        break;
    case 'torre':
         console.log('A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.');
        break;
    case 'peão':
         console.log('O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.');
        break;
    default:
        console.log("Não éuma peça de xadres")
        break;
}

//Exercicio 7







//Exercicio 8

const a = 45;
const b = 875;
const c = 686;

if(a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
    console.log('True');
}
else {console.log ('False');}

//Exercicio 9

const d = 45;
const e = 875;
const f = 686;

if(d % 2 === 0 || e % 2 === 0 || f % 2 === 0){
    console.log('False');
}
else {console.log ('True');}

//Exercicio 10

const custoProduto = 10;
const vendaProduto = 20;
const valorCustoTotal = custoProduto + custoProduto * 0.2;
const lucro = vendaProduto - valorCustoTotal;

if(custoProduto > 0 && vendaProduto > 0){
    console.log(lucro);
}else{console.log('Erro valores negativos');
}






























