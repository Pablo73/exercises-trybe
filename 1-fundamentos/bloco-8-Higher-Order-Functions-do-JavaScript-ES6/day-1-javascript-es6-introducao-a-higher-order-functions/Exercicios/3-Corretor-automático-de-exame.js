const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const correcao = (maca, banana) => {
    let pontuacao = 0;
    for (let index = 0; index < maca.length; index += 1){
        if (maca[index] === banana[index]) {
            pontuacao += 1;
        }
        if (banana[index] === 'N.A') {
            pontuacao = pontuacao;
        }
        if (banana[index] !== 'N.A' && maca[index] !== banana[index]) {
            pontuacao -= 0.5;
        }
    }
    return pontuacao; 
}


const pontuacao = (gabarito, aluno, pontos) => {
   return pontos(gabarito, aluno);
};

console.log(pontuacao(RIGHT_ANSWERS, STUDENT_ANSWERS, correcao ));