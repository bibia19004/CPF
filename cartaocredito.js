function validarCartaoCredito(numero) {
    numero = numero.replace(/\D/g, '');
    if (numero.length < 13 || numero.length > 19) return false;

    let soma = 0;
    let alternar = false;

    for (let i = numero.length - 1; i >= 0; i--) {
        let digito = parseInt(numero[i]);
        if (alternar) {
            digito *= 2;
            if (digito > 9) digito -= 9;
        }
        soma += digito;
        alternar = !alternar;
    }

    return soma % 10 === 0;
}

let numeroCartao = "4111111111111111";
if (validarCartaoCredito(numeroCartao)) {
    console.log("Número de cartão válido");
} else {
    console.log("Número de cartão inválido");
}