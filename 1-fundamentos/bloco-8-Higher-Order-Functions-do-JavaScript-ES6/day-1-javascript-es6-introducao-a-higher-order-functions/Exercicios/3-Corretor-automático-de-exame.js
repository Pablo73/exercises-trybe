const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const correção = (RIGHT_ANSWERS, STUDENT_ANSWERS, func) => {
    let pontuação = 0;
    for (let index = 0; index < RIGHT_ANSWERS.length; index += 1){
        if (RIGHT_ANSWERS[index] === STUDENT_ANSWERS[index]) {
            pontuação += 1;
        }
        if (STUDENT_ANSWERS[index] === 'N.A') {
            pontuação = pontuação;
        }
        if (STUDENT_ANSWERS[index] !== 'N.A' && RIGHT_ANSWERS[index] !== STUDENT_ANSWERS[index]) {
            pontuação -= 0.5;
        }
    }
    return pontuação; 
}

console.log(correção(RIGHT_ANSWERS, STUDENT_ANSWERS));