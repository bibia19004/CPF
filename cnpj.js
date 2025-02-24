function gerarCNPJ() {
    let aleatorio = () => Math.floor(Math.random() * 9);
    let base = Array.from({ length: 8 }, aleatorio).join('') + "0001";

    let calcularDigito = (base) => {
        let pesos = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let soma = 0;

        for (let i = 0; i < base.length; i++) {
            soma += parseInt(base[i]) * pesos[i + (pesos.length - base.length)];
        }
        let resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    let primeiroDigito = calcularDigito(base);
    let segundoDigito = calcularDigito(base + primeiroDigito);

    return base + primeiroDigito.toString() + segundoDigito.toString();
}

console.log(gerarCNPJ()); 