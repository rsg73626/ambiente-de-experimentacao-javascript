
/*
FUNÇÕES AUXILIARES

function escreveNaTela(conteudo)

function criarEntradaDeTexto(nome, dica, conteudo)

function criarEntradaDeNumero(nome, dica, conteudo)

function criarEntradaBooleana(nome, selecionado)
*/

function meuCodigo() {
    criarEntradaDeTexto("Nome: ", "entre como seu nome")
    criarEntradaDeNumero("Nota 1: ", "entre com sua primeira nota");
    criarEntradaDeNumero("Nota 2: ", "entre com sua segunda nota");
    criarEntradaDeNumero("Nota 3: ", "entre com sua terceira nota");
    criarEntradaDeNumero("Nota 4: ", "entre com sua quarta nota");
    criarEntradaDeNumero("Peso da nota 1: ", "entre com o peso da nota 1", 1);
    criarEntradaDeNumero("Peso da nota 2: ", "entre com o peso da nota 2", 1);
    criarEntradaDeNumero("Peso da nota 3: ", "entre com o peso da nota 3", 1);
    criarEntradaDeNumero("Peso da nota 4: ", "entre com o peso da nota 4", 1);
    criarEntradaBooleana("Usar média ponderada", true);
}

function recebeEntradas(entradas) {
    const [nome, n1, n2, n3, n4, p1, p2, p3, p4, usarMediaPonderada] = entradas;
    let tipoDeMedia = "aritmética";
    let soma = n1 + n2 + n3 + n4;
    let divisor = 4
    if (usarMediaPonderada) {
        tipoDeMedia = "ponderada";
        soma = (n1 * p1) + (n2 * p2) + (n3 * p3) + (n4 * p4);
        divisor = p1 + p2 + p3 + p4;
    }
    const media = soma / divisor;
    escreveNaTela(`${nome}, sua média ${tipoDeMedia} é ${media}.`);
}