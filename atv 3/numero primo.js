function verificarPrimo(num) {
    if (num <= 1) {
        return "Não é primo";
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return "Não é primo";
        }
    }

    return "É primo";
}

let entrada = 7;

let resultado = verificarPrimo(entrada);
console.log("Saída:", resultado);