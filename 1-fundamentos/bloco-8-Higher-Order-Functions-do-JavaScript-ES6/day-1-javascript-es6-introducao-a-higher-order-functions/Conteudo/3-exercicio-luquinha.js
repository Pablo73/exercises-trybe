
const funcaoQueSoma = (xablau, outroParametro) => xablau + outroParametro;

const funcaoQueMultiplicaDuasOperacoes = (operacao, segundaOperacao) => operacao(2, 3) * segundaOperacao(2, 3);

const resultado = funcaoQueMultiplicaDuasOperacoes(funcaoQueSoma, funcaoQueSoma);

console.log(resultado);