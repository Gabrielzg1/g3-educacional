
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
    var certo = Math.random() * 3
    var errado;

    certo = Math.floor(certo);
    if (certo <= 0) {
        certo = 1;
    }
    if (certo == 1){
        errado = 2
    }
    if (certo == 2){
        errado = 1
    }

    console.log(certo);
    console.log(errado)
    return certo
    return errado
    
}

// !!!! certo 1 = ESQUERDO // certo 2 = DIREITO!!! // 
// Regra do tombo
// Integral simples(ex: integral x^n = (x^n+1)/n+1)
// Derivadas (teoremas, ex: f(x) = cosx -> f'(x) = -senx)