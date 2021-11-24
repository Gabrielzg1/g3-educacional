//Geração de numeros aletorios de 1 a 10 para realização das randomicas opicoes 
function equacao() {
    var num = Math.random() * 10

    num = Math.floor(num);
    if (num <= 0) {
        num = 1;
    }
    console.log(num)
}