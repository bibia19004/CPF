function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) return false;

    let calcularDigito = (base) => {
        let soma = 0;
        let multiplicador = base.length + 1;

        for (let i = 0; i < base.length; i++) {
            soma += parseInt(base[i]) * multiplicador--;
        }
        let resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    let primeiroDigito = calcularDigito(cpf.slice(0, 9));
    let segundoDigito = calcularDigito(cpf.slice(0, 9) + primeiroDigito);

    return cpf.endsWith(primeiroDigito.toString() + segundoDigito.toString());
}

console.log(validarCPF("13629684980"));