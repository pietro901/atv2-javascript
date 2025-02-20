function fibonacci(n) {
    let resultado = [0, 1];
    
    while (resultado[resultado.length - 1] + resultado[resultado.length - 2] <= n) {
        resultado.push(resultado[resultado.length - 1] + resultado[resultado.length - 2]);
    }
    
    return resultado;
}

let entrada = 10;

let sequencia = fibonacci(entrada);
console.log("Saída:", sequencia);