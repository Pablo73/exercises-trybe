const numberDrawn = () => {
    return Math.round(Math.random() * (5 - 1) + 1);
    return Math.ceil(Math.random() * 5);
}

const SorteadorLoteria = (number, fun) => {
    if (fun() === number) {
        return 'Parabéns você ganhou';
    }
    return 'Tente novamente';
}

console.log(SorteadorLoteria(3, numberDrawn))