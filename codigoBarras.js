function verificarEAN(codigo) {
    codigo = codigo.replace(/\D/g, '');
    if (codigo.length !== 13) return false;

    let soma = 0;
    for (let i = 0; i < 12; i++) {
        let multiplicador = (i % 2 === 0) ? 1 : 3;
        soma += parseInt(codigo[i]) * multiplicador;
    }

    let digitoVerificador = (10 - (soma % 10)) % 10;
    if (digitoVerificador !== parseInt(codigo[12])) return false;

    return {
        valido: true,
        pais: codigo.substring(0, 3),
        fabricante: codigo.substring(3, 7),
        produto: codigo.substring(7, 12),
        digitoVerificador: codigo[12]
    };
}

let codigoBarras = "7891234567895";
let resultado = verificarEAN(codigoBarras);
if (resultado) {
    console.log("Código EAN válido");
    console.log("País de origem:", resultado.pais);
    console.log("Código do fabricante:", resultado.fabricante);
    console.log("Código do produto:", resultado.produto);
    console.log("Dígito verificador:", resultado.digitoVerificador);
} else {
    console.log("Código EAN inválido");
}
