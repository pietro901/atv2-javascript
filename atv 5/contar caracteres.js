function contarCaracteres(str) {
    let contagem = {};
    

    for (let char of str) {
        if (contagem[char]) {
            contagem[char] += 1;
        } else {
            contagem[char] = 1;
        }
    }
    
    return contagem;
}

let entrada = "banana";

let resultado = contarCaracteres(entrada);
console.log("Saída:", resultado);
