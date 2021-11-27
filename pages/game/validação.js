
//Geração de numeros aletorios de 1 a 10 para realização das randomicas opicoes

function aleatorio() {
    var num = Math.random() * 10

    num = Math.floor(num);
    if (num <= 0) {
        num = 1;
    }
    return num
}


function caminho(){
    var caminho1;
    let i = Math.floor(Math.random() * 2)
    if (i == 2){
        i = 1
    }
    var caminho0 = [true, false]
    if(caminho0[i] == true){
        caminho1 = false
    } else
        caminho1 = true
    console.log(caminho0[i])
    console.log(caminho1)
    
    


}

// !!!! certo 1 = ESQUERDO // certo 2 = DIREITO!!! // 
// Regra do tombo
// Integral simples(ex: integral x^n = (x^n+1)/n+1)
// Derivadas (teoremas, ex: f(x) = cosx -> f'(x) = -senx)