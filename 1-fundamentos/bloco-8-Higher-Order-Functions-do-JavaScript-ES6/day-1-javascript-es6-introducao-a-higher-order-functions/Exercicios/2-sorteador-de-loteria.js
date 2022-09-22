const numberDrawn = () => {
    return Math.round(Math.random() * (5 - 1) + 1);
}

const SorteadorLoteria = (number) => {
    if (numberDrawn() === number) {
        return 'Parabéns você ganhou';
    }
    return 'Tente novamente';
}

console.log(SorteadorLoteria(3))