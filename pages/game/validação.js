
//Geração de numeros aletorios de 1 a 10 para realização das randomicas opicoes

function aleatorio() {
    var num = Math.random() * 10

    num = Math.floor(num);
    if (num <= 0) {
        num = 1;
    }
    return num
}
function camAleatorio() {
    var porta = Math.random() * 3

    porta = Math.floor(porta);
    if (porta <= 0) {
        porta = 1;
    }
    console.log(porta)
}

// Regra do tombo
// Integral simples(ex: integral x^n = (x^n+1)/n+1)
// Derivadas (teoremas, ex: f(x) = cosx -> f'(x) = -senx)