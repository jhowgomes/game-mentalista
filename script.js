var numeroSecreto = parseInt(Math.random() * 11);
function Chutar() {
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "acertou";
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML =
            "Valor incorreto, insira um número de 0 a 10!";
    } else if (chute < numeroSecreto) {
        elementoResultado.innerHTML =
            "Errou! O número secreto é maior que " + chute;
    } else {
        elementoResultado.innerHTML =
            "Errou! O número secreto é menor que " + chute;
    }
}
