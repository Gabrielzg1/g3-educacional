var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");
var cenario = document.getElementById("cenario");
var carro = document.getElementById("carrinho");
var placaa = document.getElementById("placaa");
var placab = document.getElementById("placab");
var monit = document.getElementById("monitorf");
var rec = document.getElementById("rec");
var int = document.getElementById("int");
var x = document.getElementById("x");
var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n3 = document.getElementById("n3");
var n4 = document.getElementById("n4");
var n5 = document.getElementById("n5");
var n6 = document.getElementById("n6");
var n7 = document.getElementById("n7");
var n8 = document.getElementById("n8");
var n9 = document.getElementById("n9");
var n10 = document.getElementById("n10");
var n12 = document.getElementById("n12");
var n16 = document.getElementById("n16");
var sum = document.getElementById("sum");
var sub = document.getElementById("sub");
var der = document.getElementById("der");
var fra = document.getElementById("fra");
var cmais = document.getElementById("c+");
var back = document.getElementById("back");
var xm = 465;
var yback = 0;
var i = 0;
var tecla;
var teclar = "";
var nivel = 0;
var pontos = 0;
var math = 0;
var quest = false;
var timer = 0;
var grau = 0;
var sinal = [];
var numeros = [];
var exp = [];
var numerosr = [];
var expr = [];
var sinalr = [];
var teste = true;
var frac = [];
var numeroe = [];
var fracp = false;
var resposta;
var quest_on = true;
var esquerda = true, direita = false;
var count = true;
var g = true;


monitor();

function Atualizar() {
    background();
    jogar();
    comparar();
    if (nivel == 20) {
        gameover();
    }
}

setInterval(Atualizar, 1);

function background() {
    yback = yback + 0.5;
    if (yback == 930) {
        yback = 0;
    }
    if (yback == 800) {
        g = true;
    }
    ctx.clearRect(0, 0, 1890, 930);
    ctx.drawImage(back, 0, yback);
    ctx.drawImage(back, 0, yback - 930);
}

function gameover() {
    alert("Acabou!");
}

function monitorOn() {
    ctx2.drawImage(monit, 0, 0);
}

function jogar() {
    ctx.drawImage(carro, xm, 700);
}

function comparar() {
    if (g == true) {
        if (resposta == true) {
            if (xm == 465 && Math.abs((450) - yback) < 20) {
                pontos = pontos + 10;
                document.getElementById("Pontos").innerHTML = pontos;
                limpatela();
                monitor();
                g = false;
            }
        }
        else {
            if (xm == 1235 && Math.abs((450) - yback) < 20) {
                pontos = pontos + 10;
                document.getElementById("Pontos").innerHTML = pontos;
                limpatela();
                monitor();
                g = false;
            }
        }
    }
    console.log(pontos);
}

document.addEventListener('keydown', function (e) {


    //left
    if (e.keyCode == 37) {
        xm = 465;
        esquerda = true;
        direita = false;
    }

    //right
    else if (e.keyCode == 39) {
        xm = 1235;
        esquerda = false;
        direita = true;
    }

});

function projetajogo() {

    math = Math.random() * 10; // avaliar o tipo de questao
    if (math <= 5) {
        quest = true; // questao = integral;
    }
    else {
        quest = false; // questao = derivada;
    }

    math = Math.random() * 7.5; // avaliar o grau do polinomio
    if (math <= 2.5) {
        grau = 1;
    }
    else if (math > 2.5 && math <= 5) {
        grau = 2;
    }
    else if (math > 5 && math <= 7.5) {
        grau = 3;
    }

    //Separa os operadores + e - dentro de um polinomio
    for (i = 1; i < grau; i++) {
        math = Math.floor(Math.random() * 10);
        if (math % 2 == 0) {
            sinal.push('+');
        }
        else {
            sinal.push('-');
        }
    }

    //Separa os numeros (de 0|n incluso| a 5)
    for (i = 0; i < grau; i++) {
        math = Math.floor(Math.random() * 5);
        if (math == 0) {
            math = 1;
        }
        numeros.push(math);
    }

    //Aloca os expoentes
    for (i = grau; i > 0; i--) {
        exp.push(i);
    }

}

function oqresolve() {
    //
    if (quest == true) {
        resolveint();
    }
    else {
        resolvedev();
    }
}

function resolveint() {

    for (i = 0; i < grau; i++) {
        numerosr[i] = numeros[i];
        frac[i] = exp[i] + 1;
        expr[i] = exp[i] + 1;
    }
    for (i = 0; i < sinal.length; i++) {
        sinalr[i] = sinal[i];
    }
    sinalr.push('+C');
    fracp = true;


}

function resolvedev() {

    for (i = 0; i <= grau; i++) {
        if (grau == 1) {
            numerosr[i] = numeros[i] * exp[i];
            break;
        }
        numerosr[i] = numeros[i] * exp[i];
    }
    for (i = 0; i < grau; i++) {
        expr[i] = exp[i] - 1;
    }
    expr.pop();

    if (grau != 1) {
        numerosr.pop();
    }

    for (i = 0; i <= sinal.length; i++) {
        sinalr[i] = sinal[i];
    }

    fracp = false;
    sinalr.pop();


}

function imprimequest() {
    imprime_eq();
    imprime_opcs();
    quest_on == false;
}

function imprime_eq() {
    // Imprime o Preset da Operação (Integral ou Derivada)
    if (quest == true) {
        ctx2.drawImage(int, 400, 36);
    }
    else {
        ctx2.drawImage(der, 400, 36);
    }

    // Grau 1 - Pronto
    if (grau == 1) {
        if (grau == 1 && numeros[0] == 1) {
            ctx2.drawImage(x, 670, 80);
        }
        else if (grau == 1 && numeros[0] != 1) {
            ctx2.drawImage(x, 700, 80);
            if (numeros[0] == 2) {
                ctx2.drawImage(n2, 670, 80);
            }
            else if (numeros[0] == 3) {
                ctx2.drawImage(n3, 670, 80);
            }
            else if (numeros[0] == 4) {
                ctx2.drawImage(n4, 670, 80);
            }
            else if (numeros[0] == 3) {
                ctx2.drawImage(n5, 670, 80);
            }
        }
    }

    // Grau 2
    if (grau == 2) {
        if (grau == 2 && numeros[0] == 1) {
            ctx2.drawImage(x, 670, 80);
            ctx2.drawImage(n2, 695, 50);
            if (sinal[0] == "+") {
                ctx2.drawImage(sum, 720, 80);
            }
            else {
                ctx2.drawImage(sub, 720, 80);
            }
        }
        else if (grau == 2 && numeros[0] != 1) {
            ctx2.drawImage(x, 700, 80);
            ctx2.drawImage(n2, 725, 50);
            if (sinal[0] == "+") {
                ctx2.drawImage(sum, 750, 80);
            }
            else if (sinal[0] == "-") {
                ctx2.drawImage(sub, 750, 80);
            }
            if (numeros[0] == 2) {
                ctx2.drawImage(n2, 670, 80);
            }
            else if (numeros[0] == 3) {
                ctx2.drawImage(n3, 670, 80);
            }
            else if (numeros[0] == 4) {
                ctx2.drawImage(n4, 670, 80);
            }
            else if (numeros[0] == 3) {
                ctx2.drawImage(n5, 670, 80);
            }
        }
        if (grau == 2 && numeros[1] == 1 && numeros[0] != 1) {
            ctx2.drawImage(x, 790, 80);
        }
        else if (grau == 2 && numeros[1] == 1 && numeros[0] == 1) {
            ctx2.drawImage(x, 750, 80);
        }
        else if (grau == 2 && numeros[1] != 1) {
            ctx2.drawImage(x, 810, 80);
            if (numeros[1] == 2) {
                ctx2.drawImage(n2, 790, 80);
            }
            else if (numeros[1] == 3) {
                ctx2.drawImage(n3, 790, 80);
            }
            else if (numeros[1] == 4) {
                ctx2.drawImage(n4, 790, 80);
            }
            else if (numeros[1] == 3) {
                ctx2.drawImage(n5, 790, 80);
            }
        }
    }

    // Grau 3
    if (grau == 3) {
        //Coef 1 é 1
        if (numeros[0] == 1) {
            ctx2.drawImage(x, 670, 80);
            ctx2.drawImage(n3, 695, 50);
            if (sinal[0] == "+") {
                ctx2.drawImage(sum, 720, 80);
            }
            else {
                ctx2.drawImage(sub, 720, 80);
            }
        }
        //Coef 1 é diferente de 1
        else if (numeros[0] != 1) {
            ctx2.drawImage(x, 700, 80);
            ctx2.drawImage(n3, 725, 50);
            if (sinal[0] == "+") {
                ctx2.drawImage(sum, 750, 80);
            }
            else if (sinal[0] == "-") {
                ctx2.drawImage(sub, 750, 80);
            }
            if (numeros[0] == 2) {
                ctx2.drawImage(n2, 670, 80);
            }
            else if (numeros[0] == 3) {
                ctx2.drawImage(n3, 670, 80);
            }
            else if (numeros[0] == 4) {
                ctx2.drawImage(n4, 670, 80);
            }
            else if (numeros[0] == 3) {
                ctx2.drawImage(n5, 670, 80);
            }
        }
        //Coef 2 é 1 e Coef 1 é diferente de 1
        if (numeros[1] == 1 && numeros[0] != 1) {
            ctx2.drawImage(x, 790, 80);
            ctx2.drawImage(n2, 815, 50);
        }
        //Coef 2 é 1 e Coef 1 é 1
        else if (numeros[1] == 1 && numeros[0] == 1) {
            ctx2.drawImage(x, 750, 80);
            ctx2.drawImage(n2, 775, 50);
        }
        //Coef 2 é diferente de 1
        else if (numeros[1] != 1) {
            ctx2.drawImage(x, 810, 80);
            ctx2.drawImage(n2, 835, 50);
            if (numeros[1] == 2) {
                ctx2.drawImage(n2, 790, 80);
            }
            else if (numeros[1] == 3) {
                ctx2.drawImage(n3, 790, 80);
            }
            else if (numeros[1] == 4) {
                ctx2.drawImage(n4, 790, 80);
            }
            else if (numeros[1] == 3) {
                ctx2.drawImage(n5, 790, 80);
            }
        }
        if (sinal[1] == "+" && numeros[1] == 1) {
            ctx2.drawImage(sum, 830, 80);
        }
        else if (sinal[1] == "+" && numeros[1] != 1) {
            ctx2.drawImage(sum, 865, 80);
        }
        else if (sinal[1] == "-" && numeros[1] == 1) {
            ctx2.drawImage(sub, 830, 80);
        }
        else if (sinal[1] == "-" && numeros[1] != 1) {
            ctx2.drawImage(sub, 865, 80);
        }
        //Ultimo Coeficiente
        if (numeros[2] == 1 && numeros[1] == 1) {
            ctx2.drawImage(x, 860, 80);
        }
        else if (numeros[2] == 1 && numeros[1] != 1) {
            ctx2.drawImage(x, 895, 80);
        }
        if (numeros[2] != 1) {
            ctx2.drawImage(x, 915, 80);
            if (numeros[2] == 2) {
                ctx2.drawImage(n2, 895, 80);
            }
            else if (numeros[2] == 3) {
                ctx2.drawImage(n3, 895, 80);
            }
            else if (numeros[2] == 4) {
                ctx2.drawImage(n4, 895, 80);
            }
            else if (numeros[2] == 3) {
                ctx2.drawImage(n5, 895, 80);
            }
        }
    }
}

function imprime_opcs() {
    AouB();
    // Resposta True => Resposta Correta em A
    if (resposta == true) {
        // Quest True => Integral || Certa em A Errada em B
        if (quest == true) {
            integral_certaemA();
        }
        // Derivada || Certa em A e Errada em B
        else {
            derivada_certaemA();
        }
    }


    // Parte B
    else {
        // Quest True => Integral || Errada em A e Certa em B
        if (quest == true) {
            integral_certaemB();
        }
        // Derivada
        else {
            derivada_certaemB();
        }
    }
}

function criaerro() {
    if (quest == true) {
        erraint();
    }
    else {
        erradev();
    }
}

function erraint() {

    //Erro Numérico
    let z = numerosr.length;

    for (z; z > 0; z--) {
        numeroe[z - 1] = Math.floor(Math.random() * 5);
        if (numeroe[z - 1] == numerosr[z - 1] || numeroe[z - 1] == 0) {
            numeroe[z - 1] = Math.floor(Math.random() * 5);
            if (numeroe[z - 1] == numerosr[z - 1] || numeroe[z - 1] == 0) {
                numeroe[z - 1] = Math.floor(Math.random() * 5);
                if (numeroe[z - 1] == numerosr[z - 1] || numeroe[z - 1] == 0) {
                    numeroe[z - 1] = Math.floor(Math.random() * 5);
                }
            }
        }
    }

}

function erradev() {

    //Erro Numérico
    let z = numerosr.length;

    for (z; z > 0; z--) {
        numeroe[z - 1] = Math.floor(Math.random() * 5);
        if (numeroe[z - 1] == numerosr[z - 1] || numeroe[z - 1] == 0) {
            numeroe[z - 1] = Math.floor(Math.random() * 5);
            if (numeroe[z - 1] == numerosr[z - 1] || numeroe[z - 1] == 0) {
                numeroe[z - 1] = Math.floor(Math.random() * 5);
                if (numeroe[z - 1] == numerosr[z - 1] || numeroe[z - 1] == 0) {
                    numeroe[z - 1] = Math.floor(Math.random() * 5);
                }
            }
        }
    }

}

function AouB() {
    // Qual vai estar certo? A ou B
    if (Math.random() * 10 < 5) {
        resposta = true; // A
    }
    else {
        resposta = false; // B
    }
}

function integral_certaemA() {
    // Primeiro Grau
    if (grau == 1) {
        //Coeficientes
        ctx2.drawImage(x, 490, 160);
        if (numerosr[0] == 1) {
            ctx2.drawImage(n1, 455, 160);
        }
        else if (numerosr[0] == 2) {
            ctx2.drawImage(n2, 455, 160);
        }
        else if (numerosr[0] == 3) {
            ctx2.drawImage(n3, 455, 160);
        }
        else if (numerosr[0] == 4) {
            ctx2.drawImage(n4, 455, 160);
        }
        else if (numerosr[0] == 5) {
            ctx2.drawImage(n5, 455, 160);
        }
        //Expoentes
        if (expr[0] == 1) {
            ctx2.drawImage(n1, 515, 130);
        }
        else if (expr[0] == 2) {
            ctx2.drawImage(n2, 515, 130);
        }
        else if (expr[0] == 3) {
            ctx2.drawImage(n3, 515, 130);
        }
        else if (expr[0] == 4) {
            ctx2.drawImage(n4, 515, 130);
        }
        else if (expr[0] == 5) {
            ctx2.drawImage(n5, 515, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 480, 185);
        // Frações
        if (frac[0] == 1) {
            ctx2.drawImage(n1, 480, 210);
        }
        else if (frac[0] == 2) {
            ctx2.drawImage(n2, 480, 210);
        }
        else if (frac[0] == 3) {
            ctx2.drawImage(n3, 480, 210);
        }
        else if (frac[0] == 4) {
            ctx2.drawImage(n4, 480, 210);
        }
        else if (frac[0] == 5) {
            ctx2.drawImage(n5, 480, 210);
        }
        //Sinal
        if (sinalr[0] == "+") {
            ctx2.drawImage(sum, 535, 160);
        }
        else if (sinalr[0] == "-") {
            ctx2.drawImage(sub, 535, 160);
        }
        else {
            ctx2.drawImage(cmais, 535, 160);
        }
    }
    // Grau 2
    if (grau == 2) {
        //Primeiro Coeficiente
        ctx2.drawImage(x, 490, 160);
        if (numerosr[0] == 1) {
            ctx2.drawImage(n1, 455, 160);
        }
        else if (numerosr[0] == 2) {
            ctx2.drawImage(n2, 455, 160);
        }
        else if (numerosr[0] == 3) {
            ctx2.drawImage(n3, 455, 160);
        }
        else if (numerosr[0] == 4) {
            ctx2.drawImage(n4, 455, 160);
        }
        else if (numerosr[0] == 5) {
            ctx2.drawImage(n5, 455, 160);
        }
        //Expoentes
        if (expr[0] == 1) {
            ctx2.drawImage(n1, 515, 130);
        }
        else if (expr[0] == 2) {
            ctx2.drawImage(n2, 515, 130);
        }
        else if (expr[0] == 3) {
            ctx2.drawImage(n3, 515, 130);
        }
        else if (expr[0] == 4) {
            ctx2.drawImage(n4, 515, 130);
        }
        else if (expr[0] == 5) {
            ctx2.drawImage(n5, 515, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 480, 185);
        // Frações
        if (frac[0] == 1) {
            ctx2.drawImage(n1, 480, 210);
        }
        else if (frac[0] == 2) {
            ctx2.drawImage(n2, 480, 210);
        }
        else if (frac[0] == 3) {
            ctx2.drawImage(n3, 480, 210);
        }
        else if (frac[0] == 4) {
            ctx2.drawImage(n4, 480, 210);
        }
        else if (frac[0] == 5) {
            ctx2.drawImage(n5, 480, 210);
        }
        //Sinal
        if (sinalr[0] == "+") {
            ctx2.drawImage(sum, 535, 160);
        }
        else if (sinalr[0] == "-") {
            ctx2.drawImage(sub, 535, 160);
        }
        else {
            ctx2.drawImage(cmais, 535, 160);
        }
        //Segundo Coeficiente
        ctx2.drawImage(x, 600, 160);
        if (numerosr[1] == 1) {
            ctx2.drawImage(n1, 570, 160);
        }
        else if (numerosr[1] == 2) {
            ctx2.drawImage(n2, 570, 160);
        }
        else if (numerosr[1] == 3) {
            ctx2.drawImage(n3, 570, 160);
        }
        else if (numerosr[1] == 4) {
            ctx2.drawImage(n4, 570, 160);
        }
        else if (numerosr[1] == 5) {
            ctx2.drawImage(n5, 570, 160);
        }
        //Expoentes
        if (expr[1] == 1) {
            ctx2.drawImage(n1, 625, 130);
        }
        else if (expr[1] == 2) {
            ctx2.drawImage(n2, 625, 130);
        }
        else if (expr[1] == 3) {
            ctx2.drawImage(n3, 625, 130);
        }
        else if (expr[1] == 4) {
            ctx2.drawImage(n4, 625, 130);
        }
        else if (expr[1] == 5) {
            ctx2.drawImage(n5, 625, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 590, 185);
        // Frações
        if (frac[1] == 1) {
            ctx2.drawImage(n1, 590, 210);
        }
        else if (frac[1] == 2) {
            ctx2.drawImage(n2, 590, 210);
        }
        else if (frac[1] == 3) {
            ctx2.drawImage(n3, 590, 210);
        }
        else if (frac[1] == 4) {
            ctx2.drawImage(n4, 590, 210);
        }
        else if (frac[1] == 5) {
            ctx2.drawImage(n5, 590, 210);
        }
        //Sinal
        if (sinalr[1] == "+") {
            ctx2.drawImage(sum, 645, 160);
        }
        else if (sinalr[1] == "-") {
            ctx2.drawImage(sub, 645, 160);
        }
        else {
            ctx2.drawImage(cmais, 645, 160);
        }
    }
    // Grau 3
    if (grau == 3) {
        //Primeiro Coeficiente
        ctx2.drawImage(x, 490, 160);
        if (numerosr[0] == 1) {
            ctx2.drawImage(n1, 455, 160);
        }
        else if (numerosr[0] == 2) {
            ctx2.drawImage(n2, 455, 160);
        }
        else if (numerosr[0] == 3) {
            ctx2.drawImage(n3, 455, 160);
        }
        else if (numerosr[0] == 4) {
            ctx2.drawImage(n4, 455, 160);
        }
        else if (numerosr[0] == 5) {
            ctx2.drawImage(n5, 455, 160);
        }
        //Expoentes
        if (expr[0] == 1) {
            ctx2.drawImage(n1, 515, 130);
        }
        else if (expr[0] == 2) {
            ctx2.drawImage(n2, 515, 130);
        }
        else if (expr[0] == 3) {
            ctx2.drawImage(n3, 515, 130);
        }
        else if (expr[0] == 4) {
            ctx2.drawImage(n4, 515, 130);
        }
        else if (expr[0] == 5) {
            ctx2.drawImage(n5, 515, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 480, 185);
        // Frações
        if (frac[0] == 1) {
            ctx2.drawImage(n1, 480, 210);
        }
        else if (frac[0] == 2) {
            ctx2.drawImage(n2, 480, 210);
        }
        else if (frac[0] == 3) {
            ctx2.drawImage(n3, 480, 210);
        }
        else if (frac[0] == 4) {
            ctx2.drawImage(n4, 480, 210);
        }
        else if (frac[0] == 5) {
            ctx2.drawImage(n5, 480, 210);
        }
        //Sinal
        if (sinalr[0] == "+") {
            ctx2.drawImage(sum, 535, 160);
        }
        else if (sinalr[0] == "-") {
            ctx2.drawImage(sub, 535, 160);
        }
        else {
            ctx2.drawImage(cmais, 535, 160);
        }
        //Segundo Coeficiente
        ctx2.drawImage(x, 600, 160);
        if (numerosr[1] == 1) {
            ctx2.drawImage(n1, 570, 160);
        }
        else if (numerosr[1] == 2) {
            ctx2.drawImage(n2, 570, 160);
        }
        else if (numerosr[1] == 3) {
            ctx2.drawImage(n3, 570, 160);
        }
        else if (numerosr[1] == 4) {
            ctx2.drawImage(n4, 570, 160);
        }
        else if (numerosr[1] == 5) {
            ctx2.drawImage(n5, 570, 160);
        }
        //Expoentes
        if (expr[1] == 1) {
            ctx2.drawImage(n1, 625, 130);
        }
        else if (expr[1] == 2) {
            ctx2.drawImage(n2, 625, 130);
        }
        else if (expr[1] == 3) {
            ctx2.drawImage(n3, 625, 130);
        }
        else if (expr[1] == 4) {
            ctx2.drawImage(n4, 625, 130);
        }
        else if (expr[1] == 5) {
            ctx2.drawImage(n5, 625, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 590, 185);
        // Frações
        if (frac[1] == 1) {
            ctx2.drawImage(n1, 590, 210);
        }
        else if (frac[1] == 2) {
            ctx2.drawImage(n2, 590, 210);
        }
        else if (frac[1] == 3) {
            ctx2.drawImage(n3, 590, 210);
        }
        else if (frac[1] == 4) {
            ctx2.drawImage(n4, 590, 210);
        }
        else if (frac[1] == 5) {
            ctx2.drawImage(n5, 590, 210);
        }
        //Sinal
        if (sinalr[1] == "+") {
            ctx2.drawImage(sum, 645, 160);
        }
        else if (sinalr[1] == "-") {
            ctx2.drawImage(sub, 645, 160);
        }
        else {
            ctx2.drawImage(cmais, 645, 160);
        }
        //Terceiro Coeficiente
        ctx2.drawImage(x, 705, 160);
        if (numerosr[2] == 1) {
            ctx2.drawImage(n1, 675, 160);
        }
        else if (numerosr[2] == 2) {
            ctx2.drawImage(n2, 675, 160);
        }
        else if (numerosr[2] == 3) {
            ctx2.drawImage(n3, 675, 160);
        }
        else if (numerosr[2] == 4) {
            ctx2.drawImage(n4, 675, 160);
        }
        else if (numerosr[2] == 5) {
            ctx2.drawImage(n5, 675, 160);
        }
        //Expoentes
        if (expr[2] == 1) {
            ctx2.drawImage(n1, 725, 130);
        }
        else if (expr[2] == 2) {
            ctx2.drawImage(n2, 725, 130);
        }
        else if (expr[2] == 3) {
            ctx2.drawImage(n3, 725, 130);
        }
        else if (expr[2] == 4) {
            ctx2.drawImage(n4, 725, 130);
        }
        else if (expr[2] == 5) {
            ctx2.drawImage(n5, 725, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 685, 185);
        // Frações
        if (frac[2] == 1) {
            ctx2.drawImage(n1, 685, 210);
        }
        else if (frac[2] == 2) {
            ctx2.drawImage(n2, 685, 210);
        }
        else if (frac[2] == 3) {
            ctx2.drawImage(n3, 685, 210);
        }
        else if (frac[2] == 4) {
            ctx2.drawImage(n4, 685, 210);
        }
        else if (frac[2] == 5) {
            ctx2.drawImage(n5, 685, 210);
        }
        //Sinal
        if (sinalr[2] == "+") {
            ctx2.drawImage(sum, 745, 160);
        }
        else if (sinalr[2] == "-") {
            ctx2.drawImage(sub, 745, 160);
        }
        else {
            ctx2.drawImage(cmais, 745, 160);
        }
    }
    // Resposta Errada | Integral Errada em B
    // Primeiro Grau
    if (grau == 1) {
        //Coeficientes
        ctx2.drawImage(x, 1190, 160);
        if (numeroe[0] == 1) {
            ctx2.drawImage(n1, 1155, 160);
        }
        else if (numeroe[0] == 2) {
            ctx2.drawImage(n2, 1155, 160);
        }
        else if (numeroe[0] == 3) {
            ctx2.drawImage(n3, 1155, 160);
        }
        else if (numeroe[0] == 4) {
            ctx2.drawImage(n4, 1155, 160);
        }
        else if (numeroe[0] == 5) {
            ctx2.drawImage(n5, 1155, 160);
        }
        //Expoentes
        if (expr[0] == 1) {
            ctx2.drawImage(n1, 1215, 130);
        }
        else if (expr[0] == 2) {
            ctx2.drawImage(n2, 1215, 130);
        }
        else if (expr[0] == 3) {
            ctx2.drawImage(n3, 1215, 130);
        }
        else if (expr[0] == 4) {
            ctx2.drawImage(n4, 1215, 130);
        }
        else if (expr[0] == 5) {
            ctx2.drawImage(n5, 1215, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 1180, 185);
        // Frações
        if (frac[0] == 1) {
            ctx2.drawImage(n1, 1180, 210);
        }
        else if (frac[0] == 2) {
            ctx2.drawImage(n2, 1180, 210);
        }
        else if (frac[0] == 3) {
            ctx2.drawImage(n3, 1180, 210);
        }
        else if (frac[0] == 4) {
            ctx2.drawImage(n4, 1180, 210);
        }
        else if (frac[0] == 5) {
            ctx2.drawImage(n5, 1180, 210);
        }
        //Sinal
        if (sinalr[0] == "+") {
            ctx2.drawImage(sum, 1235, 160);
        }
        else if (sinalr[0] == "-") {
            ctx2.drawImage(sub, 1235, 160);
        }
        else {
            ctx2.drawImage(cmais, 1235, 160);
        }
    }
    // Grau 2
    if (grau == 2) {
        //Primeiro Coeficiente
        ctx2.drawImage(x, 1190, 160);
        if (numeroe[0] == 1) {
            ctx2.drawImage(n1, 1155, 160);
        }
        else if (numeroe[0] == 2) {
            ctx2.drawImage(n2, 1155, 160);
        }
        else if (numeroe[0] == 3) {
            ctx2.drawImage(n3, 1155, 160);
        }
        else if (numeroe[0] == 4) {
            ctx2.drawImage(n4, 1155, 160);
        }
        else if (numeroe[0] == 5) {
            ctx2.drawImage(n5, 1155, 160);
        }
        //Expoentes
        if (expr[0] == 1) {
            ctx2.drawImage(n1, 1215, 130);
        }
        else if (expr[0] == 2) {
            ctx2.drawImage(n2, 1215, 130);
        }
        else if (expr[0] == 3) {
            ctx2.drawImage(n3, 1215, 130);
        }
        else if (expr[0] == 4) {
            ctx2.drawImage(n4, 1215, 130);
        }
        else if (expr[0] == 5) {
            ctx2.drawImage(n5, 1215, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 1180, 185);
        // Frações
        if (frac[0] == 1) {
            ctx2.drawImage(n1, 1180, 210);
        }
        else if (frac[0] == 2) {
            ctx2.drawImage(n2, 1180, 210);
        }
        else if (frac[0] == 3) {
            ctx2.drawImage(n3, 1180, 210);
        }
        else if (frac[0] == 4) {
            ctx2.drawImage(n4, 1180, 210);
        }
        else if (frac[0] == 5) {
            ctx2.drawImage(n5, 1180, 210);
        }
        //Sinal
        if (sinalr[0] == "+") {
            ctx2.drawImage(sum, 1235, 160);
        }
        else if (sinalr[0] == "-") {
            ctx2.drawImage(sub, 1235, 160);
        }
        else {
            ctx2.drawImage(cmais, 1235, 160);
        }
        //Segundo Coeficiente
        ctx2.drawImage(x, 1300, 160);
        if (numeroe[1] == 1) {
            ctx2.drawImage(n1, 1270, 160);
        }
        else if (numeroe[1] == 2) {
            ctx2.drawImage(n2, 1270, 160);
        }
        else if (numeroe[1] == 3) {
            ctx2.drawImage(n3, 1270, 160);
        }
        else if (numeroe[1] == 4) {
            ctx2.drawImage(n4, 1270, 160);
        }
        else if (numeroe[1] == 5) {
            ctx2.drawImage(n5, 1270, 160);
        }
        //Expoentes
        if (expr[1] == 1) {
            ctx2.drawImage(n1, 1325, 130);
        }
        else if (expr[1] == 2) {
            ctx2.drawImage(n2, 1325, 130);
        }
        else if (expr[1] == 3) {
            ctx2.drawImage(n3, 1325, 130);
        }
        else if (expr[1] == 4) {
            ctx2.drawImage(n4, 1325, 130);
        }
        else if (expr[1] == 5) {
            ctx2.drawImage(n5, 1325, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 1290, 185);
        // Frações
        if (frac[1] == 1) {
            ctx2.drawImage(n1, 1290, 210);
        }
        else if (frac[1] == 2) {
            ctx2.drawImage(n2, 1290, 210);
        }
        else if (frac[1] == 3) {
            ctx2.drawImage(n3, 1290, 210);
        }
        else if (frac[1] == 4) {
            ctx2.drawImage(n4, 1290, 210);
        }
        else if (frac[1] == 5) {
            ctx2.drawImage(n5, 1290, 210);
        }
        //Sinal
        if (sinalr[1] == "+") {
            ctx2.drawImage(sum, 1345, 160);
        }
        else if (sinalr[1] == "-") {
            ctx2.drawImage(sub, 1345, 160);
        }
        else {
            ctx2.drawImage(cmais, 1345, 160);
        }
    }
    // Grau 3
    if (grau == 3) {
        //Primeiro Coeficiente
        ctx2.drawImage(x, 1190, 160);
        if (numeroe[0] == 1) {
            ctx2.drawImage(n1, 1155, 160);
        }
        else if (numeroe[0] == 2) {
            ctx2.drawImage(n2, 1155, 160);
        }
        else if (numeroe[0] == 3) {
            ctx2.drawImage(n3, 1155, 160);
        }
        else if (numeroe[0] == 4) {
            ctx2.drawImage(n4, 1155, 160);
        }
        else if (numeroe[0] == 5) {
            ctx2.drawImage(n5, 1155, 160);
        }
        //Expoentes
        if (expr[0] == 1) {
            ctx2.drawImage(n1, 1215, 130);
        }
        else if (expr[0] == 2) {
            ctx2.drawImage(n2, 1215, 130);
        }
        else if (expr[0] == 3) {
            ctx2.drawImage(n3, 1215, 130);
        }
        else if (expr[0] == 4) {
            ctx2.drawImage(n4, 1215, 130);
        }
        else if (expr[0] == 5) {
            ctx2.drawImage(n5, 1215, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 1180, 185);
        // Frações
        if (frac[0] == 1) {
            ctx2.drawImage(n1, 1180, 210);
        }
        else if (frac[0] == 2) {
            ctx2.drawImage(n2, 1180, 210);
        }
        else if (frac[0] == 3) {
            ctx2.drawImage(n3, 1180, 210);
        }
        else if (frac[0] == 4) {
            ctx2.drawImage(n4, 1180, 210);
        }
        else if (frac[0] == 5) {
            ctx2.drawImage(n5, 1180, 210);
        }
        //Sinal
        if (sinalr[0] == "+") {
            ctx2.drawImage(sum, 1235, 160);
        }
        else if (sinalr[0] == "-") {
            ctx2.drawImage(sub, 1235, 160);
        }
        else {
            ctx2.drawImage(cmais, 1235, 160);
        }
        //Segundo Coeficiente
        ctx2.drawImage(x, 1300, 160);
        if (numeroe[1] == 1) {
            ctx2.drawImage(n1, 1270, 160);
        }
        else if (numeroe[1] == 2) {
            ctx2.drawImage(n2, 1270, 160);
        }
        else if (numeroe[1] == 3) {
            ctx2.drawImage(n3, 1270, 160);
        }
        else if (numeroe[1] == 4) {
            ctx2.drawImage(n4, 1270, 160);
        }
        else if (numeroe[1] == 5) {
            ctx2.drawImage(n5, 1270, 160);
        }
        //Expoentes
        if (expr[1] == 1) {
            ctx2.drawImage(n1, 1325, 130);
        }
        else if (expr[1] == 2) {
            ctx2.drawImage(n2, 1325, 130);
        }
        else if (expr[1] == 3) {
            ctx2.drawImage(n3, 1325, 130);
        }
        else if (expr[1] == 4) {
            ctx2.drawImage(n4, 1325, 130);
        }
        else if (expr[1] == 5) {
            ctx2.drawImage(n5, 1325, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 1290, 185);
        // Frações
        if (frac[1] == 1) {
            ctx2.drawImage(n1, 1290, 210);
        }
        else if (frac[1] == 2) {
            ctx2.drawImage(n2, 1290, 210);
        }
        else if (frac[1] == 3) {
            ctx2.drawImage(n3, 1290, 210);
        }
        else if (frac[1] == 4) {
            ctx2.drawImage(n4, 1290, 210);
        }
        else if (frac[1] == 5) {
            ctx2.drawImage(n5, 1290, 210);
        }
        //Sinal
        if (sinalr[1] == "+") {
            ctx2.drawImage(sum, 1345, 160);
        }
        else if (sinalr[1] == "-") {
            ctx2.drawImage(sub, 1345, 160);
        }
        else {
            ctx2.drawImage(cmais, 1345, 160);
        }
        //Terceiro Coeficiente
        ctx2.drawImage(x, 1405, 160);
        if (numerosr[2] == 1) {
            ctx2.drawImage(n1, 1375, 160);
        }
        else if (numerosr[2] == 2) {
            ctx2.drawImage(n2, 1375, 160);
        }
        else if (numerosr[2] == 3) {
            ctx2.drawImage(n3, 1375, 160);
        }
        else if (numerosr[2] == 4) {
            ctx2.drawImage(n4, 1375, 160);
        }
        else if (numerosr[2] == 5) {
            ctx2.drawImage(n5, 1375, 160);
        }
        //Expoentes
        if (expr[2] == 1) {
            ctx2.drawImage(n1, 1425, 130);
        }
        else if (expr[2] == 2) {
            ctx2.drawImage(n2, 1425, 130);
        }
        else if (expr[2] == 3) {
            ctx2.drawImage(n3, 1425, 130);
        }
        else if (expr[2] == 4) {
            ctx2.drawImage(n4, 1425, 130);
        }
        else if (expr[2] == 5) {
            ctx2.drawImage(n5, 1425, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 1385, 185);
        // Frações
        if (frac[2] == 1) {
            ctx2.drawImage(n1, 1385, 210);
        }
        else if (frac[2] == 2) {
            ctx2.drawImage(n2, 1385, 210);
        }
        else if (frac[2] == 3) {
            ctx2.drawImage(n3, 1385, 210);
        }
        else if (frac[2] == 4) {
            ctx2.drawImage(n4, 1385, 210);
        }
        else if (frac[2] == 5) {
            ctx2.drawImage(n5, 1385, 210);
        }
        //Sinal
        if (sinalr[2] == "+") {
            ctx2.drawImage(sum, 1445, 160);
        }
        else if (sinalr[2] == "-") {
            ctx2.drawImage(sub, 1445, 160);
        }
        else {
            ctx2.drawImage(cmais, 1445, 160);
        }
    }
}

function derivada_certaemA() {
    // Primeiro Grau
    if (grau == 1) {
        if (numerosr[0] == 1) {
            ctx2.drawImage(n1, 490, 180);
        }
        else if (numerosr[0] == 2) {
            ctx2.drawImage(n2, 490, 180);
        }
        else if (numerosr[0] == 3) {
            ctx2.drawImage(n3, 490, 180);
        }
        else if (numerosr[0] == 4) {
            ctx2.drawImage(n4, 490, 180);
        }
        else if (numerosr[0] == 5) {
            ctx2.drawImage(n5, 490, 180);
        }
    }
    //Segundo Grau
    else if (grau == 2) {
        ctx2.drawImage(x, 510, 180);
        if (numerosr[0] == 1) {
            ctx2.drawImage(n1, 480, 180);
        }
        else if (numerosr[0] == 2) {
            ctx2.drawImage(n2, 480, 180);
        }
        else if (numerosr[0] == 3) {
            ctx2.drawImage(n3, 480, 180);
        }
        else if (numerosr[0] == 4) {
            ctx2.drawImage(n4, 480, 180);
        }
        else if (numerosr[0] == 5) {
            ctx2.drawImage(n5, 480, 180);
        }
        else if (numerosr[0] == 6) {
            ctx2.drawImage(n6, 480, 180);
        }
        else if (numerosr[0] == 7) {
            ctx2.drawImage(n7, 480, 180);
        }
        else if (numerosr[0] == 8) {
            ctx2.drawImage(n8, 480, 180);
        }
        else if (numerosr[0] == 9) {
            ctx2.drawImage(n9, 480, 180);
        }
        else if (numerosr[0] == 10) {
            ctx2.drawImage(n10, 480, 180);
        }
        //Sinal
        if (sinalr[0] == "+") {
            ctx2.drawImage(sum, 545, 180);
        }
        else {
            ctx2.drawImage(sub, 545, 180);
        }
        //Segundo coeficiente (x^0)
        if (numerosr[1] == 1) {
            ctx2.drawImage(n1, 590, 180);
        }
        else if (numerosr[1] == 2) {
            ctx2.drawImage(n2, 590, 180);
        }
        else if (numerosr[1] == 3) {
            ctx2.drawImage(n3, 590, 180);
        }
        else if (numerosr[1] == 4) {
            ctx2.drawImage(n4, 590, 180);
        }
        else if (numerosr[1] == 5) {
            ctx2.drawImage(n5, 590, 180);
        }
        else if (numerosr[1] == 6) {
            ctx2.drawImage(n6, 590, 180);
        }
        else if (numerosr[1] == 7) {
            ctx2.drawImage(n7, 590, 180);
        }
        else if (numerosr[1] == 8) {
            ctx2.drawImage(n8, 590, 180);
        }
        else if (numerosr[1] == 9) {
            ctx2.drawImage(n9, 590, 180);
        }
        else if (numerosr[1] == 10) {
            ctx2.drawImage(n10, 590, 180);
        }
    }
    // Terceiro Grau
    else if (grau == 3) {
        ctx2.drawImage(x, 510, 180);
        ctx2.drawImage(n2, 535, 150);
        if (numerosr[0] == 1) {
            ctx2.drawImage(n1, 480, 180);
        }
        else if (numerosr[0] == 2) {
            ctx2.drawImage(n2, 480, 180);
        }
        else if (numerosr[0] == 3) {
            ctx2.drawImage(n3, 480, 180);
        }
        else if (numerosr[0] == 4) {
            ctx2.drawImage(n4, 480, 180);
        }
        else if (numerosr[0] == 5) {
            ctx2.drawImage(n5, 480, 180);
        }
        else if (numerosr[0] == 6) {
            ctx2.drawImage(n6, 480, 180);
        }
        else if (numerosr[0] == 7) {
            ctx2.drawImage(n7, 480, 180);
        }
        else if (numerosr[0] == 8) {
            ctx2.drawImage(n8, 480, 180);
        }
        else if (numerosr[0] == 9) {
            ctx2.drawImage(n9, 480, 180);
        }
        else if (numerosr[0] == 10) {
            ctx2.drawImage(n10, 480, 180);
        }
        else if (numerosr[0] == 12) {
            ctx2.drawImage(n12, 1180, 180);
        }
        //Sinal
        if (sinalr[0] == "+") {
            ctx2.drawImage(sum, 570, 180);
        }
        else {
            ctx2.drawImage(sub, 570, 180);
        }
        //Segundo coeficiente (x^1)
        if (numerosr[1] == 1) {
            ctx2.drawImage(n1, 610, 180);
        }
        else if (numerosr[1] == 2) {
            ctx2.drawImage(n2, 610, 180);
        }
        else if (numerosr[1] == 3) {
            ctx2.drawImage(n3, 610, 180);
        }
        else if (numerosr[1] == 4) {
            ctx2.drawImage(n4, 610, 180);
        }
        else if (numerosr[1] == 5) {
            ctx2.drawImage(n5, 610, 180);
        }
        else if (numerosr[1] == 6) {
            ctx2.drawImage(n6, 610, 180);
        }
        else if (numerosr[1] == 7) {
            ctx2.drawImage(n7, 610, 180);
        }
        else if (numerosr[1] == 8) {
            ctx2.drawImage(n8, 610, 180);
        }
        else if (numerosr[1] == 9) {
            ctx2.drawImage(n9, 610, 180);
        }
        else if (numerosr[1] == 10) {
            ctx2.drawImage(n10, 610, 180);
        }
        ctx2.drawImage(x, 640, 180);
        //Sinal 2
        if (sinalr[1] == "+") {
            ctx2.drawImage(sum, 680, 180);
        }
        else {
            ctx2.drawImage(sub, 680, 180);
        }
        //Terceiro coeficiente (x^0)
        if (numerosr[2] == 1) {
            ctx2.drawImage(n1, 720, 180);
        }
        else if (numerosr[2] == 2) {
            ctx2.drawImage(n2, 720, 180);
        }
        else if (numerosr[2] == 3) {
            ctx2.drawImage(n3, 720, 180);
        }
        else if (numerosr[2] == 4) {
            ctx2.drawImage(n4, 720, 180);
        }
        else if (numerosr[2] == 5) {
            ctx2.drawImage(n5, 720, 180);
        }
        else if (numerosr[2] == 6) {
            ctx2.drawImage(n6, 720, 180);
        }
        else if (numerosr[2] == 7) {
            ctx2.drawImage(n7, 720, 180);
        }
        else if (numerosr[2] == 8) {
            ctx2.drawImage(n8, 720, 180);
        }
        else if (numerosr[2] == 9) {
            ctx2.drawImage(n9, 720, 180);
        }
        else if (numerosr[2] == 10) {
            ctx2.drawImage(n10, 720, 180);
        }
    }
    // Resposta Errada | Derivada Errada em B
    // Primeiro Grau
    if (grau == 1) {
        if (numeroe[0] == 1) {
            ctx2.drawImage(n1, 1190, 180);
        }
        else if (numeroe[0] == 2) {
            ctx2.drawImage(n2, 1190, 180);
        }
        else if (numeroe[0] == 3) {
            ctx2.drawImage(n3, 1190, 180);
        }
        else if (numeroe[0] == 4) {
            ctx2.drawImage(n4, 1190, 180);
        }
        else if (numeroe[0] == 5) {
            ctx2.drawImage(n5, 1190, 180);
        }
    }
    //Segundo Grau
    else if (grau == 2) {
        ctx2.drawImage(x, 1210, 180);
        if (numeroe[0] == 1) {
            ctx2.drawImage(n1, 1180, 180);
        }
        else if (numeroe[0] == 2) {
            ctx2.drawImage(n2, 1180, 180);
        }
        else if (numeroe[0] == 3) {
            ctx2.drawImage(n3, 1180, 180);
        }
        else if (numeroe[0] == 4) {
            ctx2.drawImage(n4, 1180, 180);
        }
        else if (numeroe[0] == 5) {
            ctx2.drawImage(n5, 1180, 180);
        }
        else if (numeroe[0] == 6) {
            ctx2.drawImage(n6, 1180, 180);
        }
        else if (numeroe[0] == 7) {
            ctx2.drawImage(n7, 1180, 180);
        }
        else if (numeroe[0] == 8) {
            ctx2.drawImage(n8, 1180, 180);
        }
        else if (numeroe[0] == 9) {
            ctx2.drawImage(n9, 1180, 180);
        }
        else if (numeroe[0] == 10) {
            ctx2.drawImage(n10, 1180, 180);
        }
        //Sinal
        if (sinalr[0] == "+") {
            ctx2.drawImage(sum, 1245, 180);
        }
        else {
            ctx2.drawImage(sub, 1245, 180);
        }
        //Segundo coeficiente (x^0)
        if (numeroe[1] == 1) {
            ctx2.drawImage(n1, 1290, 180);
        }
        else if (numeroe[1] == 2) {
            ctx2.drawImage(n2, 1290, 180);
        }
        else if (numeroe[1] == 3) {
            ctx2.drawImage(n3, 1290, 180);
        }
        else if (numeroe[1] == 4) {
            ctx2.drawImage(n4, 1290, 180);
        }
        else if (numeroe[1] == 5) {
            ctx2.drawImage(n5, 1290, 180);
        }
        else if (numeroe[1] == 6) {
            ctx2.drawImage(n6, 1290, 180);
        }
        else if (numeroe[1] == 7) {
            ctx2.drawImage(n7, 1290, 180);
        }
        else if (numeroe[1] == 8) {
            ctx2.drawImage(n8, 1290, 180);
        }
        else if (numeroe[1] == 9) {
            ctx2.drawImage(n9, 1290, 180);
        }
        else if (numeroe[1] == 10) {
            ctx2.drawImage(n10, 1290, 180);
        }
    }
    // Terceiro Grau
    else if (grau == 3) {
        ctx2.drawImage(x, 1210, 180);
        ctx2.drawImage(n2, 1235, 150);
        if (numeroe[0] == 1) {
            ctx2.drawImage(n1, 1180, 180);
        }
        else if (numeroe[0] == 2) {
            ctx2.drawImage(n2, 1180, 180);
        }
        else if (numeroe[0] == 3) {
            ctx2.drawImage(n3, 1180, 180);
        }
        else if (numeroe[0] == 4) {
            ctx2.drawImage(n4, 1180, 180);
        }
        else if (numeroe[0] == 5) {
            ctx2.drawImage(n5, 1180, 180);
        }
        else if (numeroe[0] == 6) {
            ctx2.drawImage(n6, 1180, 180);
        }
        else if (numeroe[0] == 7) {
            ctx2.drawImage(n7, 1180, 180);
        }
        else if (numeroe[0] == 8) {
            ctx2.drawImage(n8, 1180, 180);
        }
        else if (numeroe[0] == 9) {
            ctx2.drawImage(n9, 1180, 180);
        }
        else if (numeroe[0] == 10) {
            ctx2.drawImage(n10, 1180, 180);
        }
        //Sinal
        if (sinalr[0] == "+") {
            ctx2.drawImage(sum, 1270, 180);
        }
        else {
            ctx2.drawImage(sub, 1270, 180);
        }
        //Segundo coeficiente (x^1)
        if (numeroe[1] == 1) {
            ctx2.drawImage(n1, 1310, 180);
        }
        else if (numeroe[1] == 2) {
            ctx2.drawImage(n2, 1310, 180);
        }
        else if (numeroe[1] == 3) {
            ctx2.drawImage(n3, 1310, 180);
        }
        else if (numeroe[1] == 4) {
            ctx2.drawImage(n4, 1310, 180);
        }
        else if (numeroe[1] == 5) {
            ctx2.drawImage(n5, 1310, 180);
        }
        else if (numeroe[1] == 6) {
            ctx2.drawImage(n6, 1310, 180);
        }
        else if (numeroe[1] == 7) {
            ctx2.drawImage(n7, 1310, 180);
        }
        else if (numeroe[1] == 8) {
            ctx2.drawImage(n8, 1310, 180);
        }
        else if (numeroe[1] == 9) {
            ctx2.drawImage(n9, 1310, 180);
        }
        else if (numeroe[1] == 10) {
            ctx2.drawImage(n10, 1310, 180);
        }
        ctx2.drawImage(x, 1340, 180);
        //Sinal 2
        if (sinalr[1] == "+") {
            ctx2.drawImage(sum, 1380, 180);
        }
        else {
            ctx2.drawImage(sub, 1380, 180);
        }
        //Terceiro coeficiente (x^0)
        if (numeroe[2] == 1) {
            ctx2.drawImage(n1, 1420, 180);
        }
        else if (numeroe[2] == 2) {
            ctx2.drawImage(n2, 1420, 180);
        }
        else if (numeroe[2] == 3) {
            ctx2.drawImage(n3, 1420, 180);
        }
        else if (numeroe[2] == 4) {
            ctx2.drawImage(n4, 1420, 180);
        }
        else if (numeroe[2] == 5) {
            ctx2.drawImage(n5, 1420, 180);
        }
        else if (numeroe[2] == 6) {
            ctx2.drawImage(n6, 1420, 180);
        }
        else if (numeroe[2] == 7) {
            ctx2.drawImage(n7, 1420, 180);
        }
        else if (numeroe[2] == 8) {
            ctx2.drawImage(n8, 1420, 180);
        }
        else if (numeroe[2] == 9) {
            ctx2.drawImage(n9, 1420, 180);
        }
        else if (numeroe[2] == 10) {
            ctx2.drawImage(n10, 1420, 180);
        }
    }
}

function integral_certaemB() {
    // Primeiro Grau
    if (grau == 1) {
        //Coeficientes
        ctx2.drawImage(x, 1190, 160);
        if (numerosr[0] == 1) {
            ctx2.drawImage(n1, 1155, 160);
        }
        else if (numerosr[0] == 2) {
            ctx2.drawImage(n2, 1155, 160);
        }
        else if (numerosr[0] == 3) {
            ctx2.drawImage(n3, 1155, 160);
        }
        else if (numerosr[0] == 4) {
            ctx2.drawImage(n4, 1155, 160);
        }
        else if (numerosr[0] == 5) {
            ctx2.drawImage(n5, 1155, 160);
        }
        //Expoentes
        if (expr[0] == 1) {
            ctx2.drawImage(n1, 1215, 130);
        }
        else if (expr[0] == 2) {
            ctx2.drawImage(n2, 1215, 130);
        }
        else if (expr[0] == 3) {
            ctx2.drawImage(n3, 1215, 130);
        }
        else if (expr[0] == 4) {
            ctx2.drawImage(n4, 1215, 130);
        }
        else if (expr[0] == 5) {
            ctx2.drawImage(n5, 1215, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 1180, 185);
        // Frações
        if (frac[0] == 1) {
            ctx2.drawImage(n1, 1180, 210);
        }
        else if (frac[0] == 2) {
            ctx2.drawImage(n2, 1180, 210);
        }
        else if (frac[0] == 3) {
            ctx2.drawImage(n3, 1180, 210);
        }
        else if (frac[0] == 4) {
            ctx2.drawImage(n4, 1180, 210);
        }
        else if (frac[0] == 5) {
            ctx2.drawImage(n5, 1180, 210);
        }
        //Sinal
        if (sinalr[0] == "+") {
            ctx2.drawImage(sum, 1235, 160);
        }
        else if (sinalr[0] == "-") {
            ctx2.drawImage(sub, 1235, 160);
        }
        else {
            ctx2.drawImage(cmais, 1235, 160);
        }
    }
    // Grau 2
    if (grau == 2) {
        //Primeiro Coeficiente
        ctx2.drawImage(x, 1190, 160);
        if (numerosr[0] == 1) {
            ctx2.drawImage(n1, 1155, 160);
        }
        else if (numerosr[0] == 2) {
            ctx2.drawImage(n2, 1155, 160);
        }
        else if (numerosr[0] == 3) {
            ctx2.drawImage(n3, 1155, 160);
        }
        else if (numerosr[0] == 4) {
            ctx2.drawImage(n4, 1155, 160);
        }
        else if (numerosr[0] == 5) {
            ctx2.drawImage(n5, 1155, 160);
        }
        //Expoentes
        if (expr[0] == 1) {
            ctx2.drawImage(n1, 1215, 130);
        }
        else if (expr[0] == 2) {
            ctx2.drawImage(n2, 1215, 130);
        }
        else if (expr[0] == 3) {
            ctx2.drawImage(n3, 1215, 130);
        }
        else if (expr[0] == 4) {
            ctx2.drawImage(n4, 1215, 130);
        }
        else if (expr[0] == 5) {
            ctx2.drawImage(n5, 1215, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 1180, 185);
        // Frações
        if (frac[0] == 1) {
            ctx2.drawImage(n1, 1180, 210);
        }
        else if (frac[0] == 2) {
            ctx2.drawImage(n2, 1180, 210);
        }
        else if (frac[0] == 3) {
            ctx2.drawImage(n3, 1180, 210);
        }
        else if (frac[0] == 4) {
            ctx2.drawImage(n4, 1180, 210);
        }
        else if (frac[0] == 5) {
            ctx2.drawImage(n5, 1180, 210);
        }
        //Sinal
        if (sinalr[0] == "+") {
            ctx2.drawImage(sum, 1235, 160);
        }
        else if (sinalr[0] == "-") {
            ctx2.drawImage(sub, 1235, 160);
        }
        else {
            ctx2.drawImage(cmais, 1235, 160);
        }
        //Segundo Coeficiente
        ctx2.drawImage(x, 1300, 160);
        if (numerosr[1] == 1) {
            ctx2.drawImage(n1, 1270, 160);
        }
        else if (numerosr[1] == 2) {
            ctx2.drawImage(n2, 1270, 160);
        }
        else if (numerosr[1] == 3) {
            ctx2.drawImage(n3, 1270, 160);
        }
        else if (numerosr[1] == 4) {
            ctx2.drawImage(n4, 1270, 160);
        }
        else if (numerosr[1] == 5) {
            ctx2.drawImage(n5, 1270, 160);
        }
        //Expoentes
        if (expr[1] == 1) {
            ctx2.drawImage(n1, 1325, 130);
        }
        else if (expr[1] == 2) {
            ctx2.drawImage(n2, 1325, 130);
        }
        else if (expr[1] == 3) {
            ctx2.drawImage(n3, 1325, 130);
        }
        else if (expr[1] == 4) {
            ctx2.drawImage(n4, 1325, 130);
        }
        else if (expr[1] == 5) {
            ctx2.drawImage(n5, 1325, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 1290, 185);
        // Frações
        if (frac[1] == 1) {
            ctx2.drawImage(n1, 1290, 210);
        }
        else if (frac[1] == 2) {
            ctx2.drawImage(n2, 1290, 210);
        }
        else if (frac[1] == 3) {
            ctx2.drawImage(n3, 1290, 210);
        }
        else if (frac[1] == 4) {
            ctx2.drawImage(n4, 1290, 210);
        }
        else if (frac[1] == 5) {
            ctx2.drawImage(n5, 1290, 210);
        }
        //Sinal
        if (sinalr[1] == "+") {
            ctx2.drawImage(sum, 1345, 160);
        }
        else if (sinalr[1] == "-") {
            ctx2.drawImage(sub, 1345, 160);
        }
        else {
            ctx2.drawImage(cmais, 1345, 160);
        }
    }
    // Grau 3
    if (grau == 3) {
        //Primeiro Coeficiente
        ctx2.drawImage(x, 1190, 160);
        if (numerosr[0] == 1) {
            ctx2.drawImage(n1, 1155, 160);
        }
        else if (numerosr[0] == 2) {
            ctx2.drawImage(n2, 1155, 160);
        }
        else if (numerosr[0] == 3) {
            ctx2.drawImage(n3, 1155, 160);
        }
        else if (numerosr[0] == 4) {
            ctx2.drawImage(n4, 1155, 160);
        }
        else if (numerosr[0] == 5) {
            ctx2.drawImage(n5, 1155, 160);
        }
        //Expoentes
        if (expr[0] == 1) {
            ctx2.drawImage(n1, 1215, 130);
        }
        else if (expr[0] == 2) {
            ctx2.drawImage(n2, 1215, 130);
        }
        else if (expr[0] == 3) {
            ctx2.drawImage(n3, 1215, 130);
        }
        else if (expr[0] == 4) {
            ctx2.drawImage(n4, 1215, 130);
        }
        else if (expr[0] == 5) {
            ctx2.drawImage(n5, 1215, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 1180, 185);
        // Frações
        if (frac[0] == 1) {
            ctx2.drawImage(n1, 1180, 210);
        }
        else if (frac[0] == 2) {
            ctx2.drawImage(n2, 1180, 210);
        }
        else if (frac[0] == 3) {
            ctx2.drawImage(n3, 1180, 210);
        }
        else if (frac[0] == 4) {
            ctx2.drawImage(n4, 1180, 210);
        }
        else if (frac[0] == 5) {
            ctx2.drawImage(n5, 1180, 210);
        }
        //Sinal
        if (sinalr[0] == "+") {
            ctx2.drawImage(sum, 1235, 160);
        }
        else if (sinalr[0] == "-") {
            ctx2.drawImage(sub, 1235, 160);
        }
        else {
            ctx2.drawImage(cmais, 1235, 160);
        }
        //Segundo Coeficiente
        ctx2.drawImage(x, 1300, 160);
        if (numerosr[1] == 1) {
            ctx2.drawImage(n1, 1270, 160);
        }
        else if (numerosr[1] == 2) {
            ctx2.drawImage(n2, 1270, 160);
        }
        else if (numerosr[1] == 3) {
            ctx2.drawImage(n3, 1270, 160);
        }
        else if (numerosr[1] == 4) {
            ctx2.drawImage(n4, 1270, 160);
        }
        else if (numerosr[1] == 5) {
            ctx2.drawImage(n5, 1270, 160);
        }
        //Expoentes
        if (expr[1] == 1) {
            ctx2.drawImage(n1, 1325, 130);
        }
        else if (expr[1] == 2) {
            ctx2.drawImage(n2, 1325, 130);
        }
        else if (expr[1] == 3) {
            ctx2.drawImage(n3, 1325, 130);
        }
        else if (expr[1] == 4) {
            ctx2.drawImage(n4, 1325, 130);
        }
        else if (expr[1] == 5) {
            ctx2.drawImage(n5, 1325, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 1290, 185);
        // Frações
        if (frac[1] == 1) {
            ctx2.drawImage(n1, 1290, 210);
        }
        else if (frac[1] == 2) {
            ctx2.drawImage(n2, 1290, 210);
        }
        else if (frac[1] == 3) {
            ctx2.drawImage(n3, 1290, 210);
        }
        else if (frac[1] == 4) {
            ctx2.drawImage(n4, 1290, 210);
        }
        else if (frac[1] == 5) {
            ctx2.drawImage(n5, 1290, 210);
        }
        //Sinal
        if (sinalr[1] == "+") {
            ctx2.drawImage(sum, 1345, 160);
        }
        else if (sinalr[1] == "-") {
            ctx2.drawImage(sub, 1345, 160);
        }
        else {
            ctx2.drawImage(cmais, 1345, 160);
        }
        //Terceiro Coeficiente
        ctx2.drawImage(x, 1405, 160);
        if (numerosr[2] == 1) {
            ctx2.drawImage(n1, 1375, 160);
        }
        else if (numerosr[2] == 2) {
            ctx2.drawImage(n2, 1375, 160);
        }
        else if (numerosr[2] == 3) {
            ctx2.drawImage(n3, 1375, 160);
        }
        else if (numerosr[2] == 4) {
            ctx2.drawImage(n4, 1375, 160);
        }
        else if (numerosr[2] == 5) {
            ctx2.drawImage(n5, 1375, 160);
        }
        //Expoentes
        if (expr[2] == 1) {
            ctx2.drawImage(n1, 1425, 130);
        }
        else if (expr[2] == 2) {
            ctx2.drawImage(n2, 1425, 130);
        }
        else if (expr[2] == 3) {
            ctx2.drawImage(n3, 1425, 130);
        }
        else if (expr[2] == 4) {
            ctx2.drawImage(n4, 1425, 130);
        }
        else if (expr[2] == 5) {
            ctx2.drawImage(n5, 1425, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 1385, 185);
        // Frações
        if (frac[2] == 1) {
            ctx2.drawImage(n1, 1385, 210);
        }
        else if (frac[2] == 2) {
            ctx2.drawImage(n2, 1385, 210);
        }
        else if (frac[2] == 3) {
            ctx2.drawImage(n3, 1385, 210);
        }
        else if (frac[2] == 4) {
            ctx2.drawImage(n4, 1385, 210);
        }
        else if (frac[2] == 5) {
            ctx2.drawImage(n5, 1385, 210);
        }
        //Sinal
        if (sinalr[2] == "+") {
            ctx2.drawImage(sum, 1445, 160);
        }
        else if (sinalr[2] == "-") {
            ctx2.drawImage(sub, 1445, 160);
        }
        else {
            ctx2.drawImage(cmais, 1445, 160);
        }
    }
    //Resposta Errada | Integral Errada em A
    // Primeiro Grau
    if (grau == 1) {
        //Coeficientes
        ctx2.drawImage(x, 490, 160);
        if (numeroe[0] == 1) {
            ctx2.drawImage(n1, 455, 160);
        }
        else if (numeroe[0] == 2) {
            ctx2.drawImage(n2, 455, 160);
        }
        else if (numeroe[0] == 3) {
            ctx2.drawImage(n3, 455, 160);
        }
        else if (numeroe[0] == 4) {
            ctx2.drawImage(n4, 455, 160);
        }
        else if (numeroe[0] == 5) {
            ctx2.drawImage(n5, 455, 160);
        }
        //Expoentes
        if (expr[0] == 1) {
            ctx2.drawImage(n1, 515, 130);
        }
        else if (expr[0] == 2) {
            ctx2.drawImage(n2, 515, 130);
        }
        else if (expr[0] == 3) {
            ctx2.drawImage(n3, 515, 130);
        }
        else if (expr[0] == 4) {
            ctx2.drawImage(n4, 515, 130);
        }
        else if (expr[0] == 5) {
            ctx2.drawImage(n5, 515, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 480, 185);
        // Frações
        if (frac[0] == 1) {
            ctx2.drawImage(n1, 480, 210);
        }
        else if (frac[0] == 2) {
            ctx2.drawImage(n2, 480, 210);
        }
        else if (frac[0] == 3) {
            ctx2.drawImage(n3, 480, 210);
        }
        else if (frac[0] == 4) {
            ctx2.drawImage(n4, 480, 210);
        }
        else if (frac[0] == 5) {
            ctx2.drawImage(n5, 480, 210);
        }
        //Sinal
        if (sinalr[0] == "+") {
            ctx2.drawImage(sum, 535, 160);
        }
        else if (sinalr[0] == "-") {
            ctx2.drawImage(sub, 535, 160);
        }
        else {
            ctx2.drawImage(cmais, 535, 160);
        }
    }
    // Grau 2
    if (grau == 2) {
        //Primeiro Coeficiente
        ctx2.drawImage(x, 490, 160);
        if (numeroe[0] == 1) {
            ctx2.drawImage(n1, 455, 160);
        }
        else if (numeroe[0] == 2) {
            ctx2.drawImage(n2, 455, 160);
        }
        else if (numeroe[0] == 3) {
            ctx2.drawImage(n3, 455, 160);
        }
        else if (numeroe[0] == 4) {
            ctx2.drawImage(n4, 455, 160);
        }
        else if (numeroe[0] == 5) {
            ctx2.drawImage(n5, 455, 160);
        }
        //Expoentes
        if (expr[0] == 1) {
            ctx2.drawImage(n1, 515, 130);
        }
        else if (expr[0] == 2) {
            ctx2.drawImage(n2, 515, 130);
        }
        else if (expr[0] == 3) {
            ctx2.drawImage(n3, 515, 130);
        }
        else if (expr[0] == 4) {
            ctx2.drawImage(n4, 515, 130);
        }
        else if (expr[0] == 5) {
            ctx2.drawImage(n5, 515, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 480, 185);
        // Frações
        if (frac[0] == 1) {
            ctx2.drawImage(n1, 480, 210);
        }
        else if (frac[0] == 2) {
            ctx2.drawImage(n2, 480, 210);
        }
        else if (frac[0] == 3) {
            ctx2.drawImage(n3, 480, 210);
        }
        else if (frac[0] == 4) {
            ctx2.drawImage(n4, 480, 210);
        }
        else if (frac[0] == 5) {
            ctx2.drawImage(n5, 480, 210);
        }
        //Sinal
        if (sinalr[0] == "+") {
            ctx2.drawImage(sum, 535, 160);
        }
        else if (sinalr[0] == "-") {
            ctx2.drawImage(sub, 535, 160);
        }
        else {
            ctx2.drawImage(cmais, 535, 160);
        }
        //Segundo Coeficiente
        ctx2.drawImage(x, 600, 160);
        if (numeroe[1] == 1) {
            ctx2.drawImage(n1, 570, 160);
        }
        else if (numeroe[1] == 2) {
            ctx2.drawImage(n2, 570, 160);
        }
        else if (numeroe[1] == 3) {
            ctx2.drawImage(n3, 570, 160);
        }
        else if (numeroe[1] == 4) {
            ctx2.drawImage(n4, 570, 160);
        }
        else if (numeroe[1] == 5) {
            ctx2.drawImage(n5, 570, 160);
        }
        //Expoentes
        if (expr[1] == 1) {
            ctx2.drawImage(n1, 625, 130);
        }
        else if (expr[1] == 2) {
            ctx2.drawImage(n2, 625, 130);
        }
        else if (expr[1] == 3) {
            ctx2.drawImage(n3, 625, 130);
        }
        else if (expr[1] == 4) {
            ctx2.drawImage(n4, 625, 130);
        }
        else if (expr[1] == 5) {
            ctx2.drawImage(n5, 625, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 590, 185);
        // Frações
        if (frac[1] == 1) {
            ctx2.drawImage(n1, 590, 210);
        }
        else if (frac[1] == 2) {
            ctx2.drawImage(n2, 590, 210);
        }
        else if (frac[1] == 3) {
            ctx2.drawImage(n3, 590, 210);
        }
        else if (frac[1] == 4) {
            ctx2.drawImage(n4, 590, 210);
        }
        else if (frac[1] == 5) {
            ctx2.drawImage(n5, 590, 210);
        }
        //Sinal
        if (sinalr[1] == "+") {
            ctx2.drawImage(sum, 645, 160);
        }
        else if (sinalr[1] == "-") {
            ctx2.drawImage(sub, 645, 160);
        }
        else {
            ctx2.drawImage(cmais, 645, 160);
        }
    }
    // Grau 3
    if (grau == 3) {
        //Primeiro Coeficiente
        ctx2.drawImage(x, 490, 160);
        if (numeroe[0] == 1) {
            ctx2.drawImage(n1, 455, 160);
        }
        else if (numeroe[0] == 2) {
            ctx2.drawImage(n2, 455, 160);
        }
        else if (numeroe[0] == 3) {
            ctx2.drawImage(n3, 455, 160);
        }
        else if (numeroe[0] == 4) {
            ctx2.drawImage(n4, 455, 160);
        }
        else if (numeroe[0] == 5) {
            ctx2.drawImage(n5, 455, 160);
        }
        //Expoentes
        if (expr[0] == 1) {
            ctx2.drawImage(n1, 515, 130);
        }
        else if (expr[0] == 2) {
            ctx2.drawImage(n2, 515, 130);
        }
        else if (expr[0] == 3) {
            ctx2.drawImage(n3, 515, 130);
        }
        else if (expr[0] == 4) {
            ctx2.drawImage(n4, 515, 130);
        }
        else if (expr[0] == 5) {
            ctx2.drawImage(n5, 515, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 480, 185);
        // Frações
        if (frac[0] == 1) {
            ctx2.drawImage(n1, 480, 210);
        }
        else if (frac[0] == 2) {
            ctx2.drawImage(n2, 480, 210);
        }
        else if (frac[0] == 3) {
            ctx2.drawImage(n3, 480, 210);
        }
        else if (frac[0] == 4) {
            ctx2.drawImage(n4, 480, 210);
        }
        else if (frac[0] == 5) {
            ctx2.drawImage(n5, 480, 210);
        }
        //Sinal
        if (sinalr[0] == "+") {
            ctx2.drawImage(sum, 535, 160);
        }
        else if (sinalr[0] == "-") {
            ctx2.drawImage(sub, 535, 160);
        }
        else {
            ctx2.drawImage(cmais, 535, 160);
        }
        //Segundo Coeficiente
        ctx2.drawImage(x, 600, 160);
        if (numeroe[1] == 1) {
            ctx2.drawImage(n1, 570, 160);
        }
        else if (numeroe[1] == 2) {
            ctx2.drawImage(n2, 570, 160);
        }
        else if (numeroe[1] == 3) {
            ctx2.drawImage(n3, 570, 160);
        }
        else if (numeroe[1] == 4) {
            ctx2.drawImage(n4, 570, 160);
        }
        else if (numeroe[1] == 5) {
            ctx2.drawImage(n5, 570, 160);
        }
        //Expoentes
        if (expr[1] == 1) {
            ctx2.drawImage(n1, 625, 130);
        }
        else if (expr[1] == 2) {
            ctx2.drawImage(n2, 625, 130);
        }
        else if (expr[1] == 3) {
            ctx2.drawImage(n3, 625, 130);
        }
        else if (expr[1] == 4) {
            ctx2.drawImage(n4, 625, 130);
        }
        else if (expr[1] == 5) {
            ctx2.drawImage(n5, 625, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 590, 185);
        // Frações
        if (frac[1] == 1) {
            ctx2.drawImage(n1, 590, 210);
        }
        else if (frac[1] == 2) {
            ctx2.drawImage(n2, 590, 210);
        }
        else if (frac[1] == 3) {
            ctx2.drawImage(n3, 590, 210);
        }
        else if (frac[1] == 4) {
            ctx2.drawImage(n4, 590, 210);
        }
        else if (frac[1] == 5) {
            ctx2.drawImage(n5, 590, 210);
        }
        //Sinal
        if (sinalr[1] == "+") {
            ctx2.drawImage(sum, 645, 160);
        }
        else if (sinalr[1] == "-") {
            ctx2.drawImage(sub, 645, 160);
        }
        else {
            ctx2.drawImage(cmais, 645, 160);
        }
        //Terceiro Coeficiente
        ctx2.drawImage(x, 705, 160);
        if (numeroe[2] == 1) {
            ctx2.drawImage(n1, 675, 160);
        }
        else if (numeroe[2] == 2) {
            ctx2.drawImage(n2, 675, 160);
        }
        else if (numeroe[2] == 3) {
            ctx2.drawImage(n3, 675, 160);
        }
        else if (numeroe[2] == 4) {
            ctx2.drawImage(n4, 675, 160);
        }
        else if (numeroe[2] == 5) {
            ctx2.drawImage(n5, 675, 160);
        }
        //Expoentes
        if (expr[2] == 1) {
            ctx2.drawImage(n1, 725, 130);
        }
        else if (expr[2] == 2) {
            ctx2.drawImage(n2, 725, 130);
        }
        else if (expr[2] == 3) {
            ctx2.drawImage(n3, 725, 130);
        }
        else if (expr[2] == 4) {
            ctx2.drawImage(n4, 725, 130);
        }
        else if (expr[2] == 5) {
            ctx2.drawImage(n5, 725, 130);
        }
        //Barra Fração
        ctx2.drawImage(fra, 685, 185);
        // Frações
        if (frac[2] == 1) {
            ctx2.drawImage(n1, 685, 210);
        }
        else if (frac[2] == 2) {
            ctx2.drawImage(n2, 685, 210);
        }
        else if (frac[2] == 3) {
            ctx2.drawImage(n3, 685, 210);
        }
        else if (frac[2] == 4) {
            ctx2.drawImage(n4, 685, 210);
        }
        else if (frac[2] == 5) {
            ctx2.drawImage(n5, 685, 210);
        }
        //Sinal
        if (sinalr[2] == "+") {
            ctx2.drawImage(sum, 745, 160);
        }
        else if (sinalr[2] == "-") {
            ctx2.drawImage(sub, 745, 160);
        }
        else {
            ctx2.drawImage(cmais, 745, 160);
        }
    }
}

function derivada_certaemB() {
    // Primeiro Grau
    if (grau == 1) {
        if (numerosr[0] == 1) {
            ctx2.drawImage(n1, 1190, 180);
        }
        else if (numerosr[0] == 2) {
            ctx2.drawImage(n2, 1190, 180);
        }
        else if (numerosr[0] == 3) {
            ctx2.drawImage(n3, 1190, 180);
        }
        else if (numerosr[0] == 4) {
            ctx2.drawImage(n4, 1190, 180);
        }
        else if (numerosr[0] == 5) {
            ctx2.drawImage(n5, 1190, 180);
        }
    }
    //Segundo Grau
    else if (grau == 2) {
        ctx2.drawImage(x, 1210, 180);
        if (numerosr[0] == 1) {
            ctx2.drawImage(n1, 1180, 180);
        }
        else if (numerosr[0] == 2) {
            ctx2.drawImage(n2, 1180, 180);
        }
        else if (numerosr[0] == 3) {
            ctx2.drawImage(n3, 1180, 180);
        }
        else if (numerosr[0] == 4) {
            ctx2.drawImage(n4, 1180, 180);
        }
        else if (numerosr[0] == 5) {
            ctx2.drawImage(n5, 1180, 180);
        }
        else if (numerosr[0] == 6) {
            ctx2.drawImage(n6, 1180, 180);
        }
        else if (numerosr[0] == 7) {
            ctx2.drawImage(n7, 1180, 180);
        }
        else if (numerosr[0] == 8) {
            ctx2.drawImage(n8, 1180, 180);
        }
        else if (numerosr[0] == 9) {
            ctx2.drawImage(n9, 1180, 180);
        }
        else if (numerosr[0] == 10) {
            ctx2.drawImage(n10, 1180, 180);
        }
        //Sinal
        if (sinalr[0] == "+") {
            ctx2.drawImage(sum, 1245, 180);
        }
        else {
            ctx2.drawImage(sub, 1245, 180);
        }
        //Segundo coeficiente (x^0)
        if (numerosr[1] == 1) {
            ctx2.drawImage(n1, 1290, 180);
        }
        else if (numerosr[1] == 2) {
            ctx2.drawImage(n2, 1290, 180);
        }
        else if (numerosr[1] == 3) {
            ctx2.drawImage(n3, 1290, 180);
        }
        else if (numerosr[1] == 4) {
            ctx2.drawImage(n4, 1290, 180);
        }
        else if (numerosr[1] == 5) {
            ctx2.drawImage(n5, 1290, 180);
        }
        else if (numerosr[1] == 6) {
            ctx2.drawImage(n6, 1290, 180);
        }
        else if (numerosr[1] == 7) {
            ctx2.drawImage(n7, 1290, 180);
        }
        else if (numerosr[1] == 8) {
            ctx2.drawImage(n8, 1290, 180);
        }
        else if (numerosr[1] == 9) {
            ctx2.drawImage(n9, 1290, 180);
        }
        else if (numerosr[1] == 10) {
            ctx2.drawImage(n10, 1290, 180);
        }
    }
    // Terceiro Grau
    else if (grau == 3) {
        ctx2.drawImage(x, 1210, 180);
        ctx2.drawImage(n2, 1235, 150);
        if (numerosr[0] == 1) {
            ctx2.drawImage(n1, 1180, 180);
        }
        else if (numerosr[0] == 2) {
            ctx2.drawImage(n2, 1180, 180);
        }
        else if (numerosr[0] == 3) {
            ctx2.drawImage(n3, 1180, 180);
        }
        else if (numerosr[0] == 4) {
            ctx2.drawImage(n4, 1180, 180);
        }
        else if (numerosr[0] == 5) {
            ctx2.drawImage(n5, 1180, 180);
        }
        else if (numerosr[0] == 6) {
            ctx2.drawImage(n6, 1180, 180);
        }
        else if (numerosr[0] == 7) {
            ctx2.drawImage(n7, 1180, 180);
        }
        else if (numerosr[0] == 8) {
            ctx2.drawImage(n8, 1180, 180);
        }
        else if (numerosr[0] == 9) {
            ctx2.drawImage(n9, 1180, 180);
        }
        else if (numerosr[0] == 10) {
            ctx2.drawImage(n10, 1180, 180);
        }
        else if (numerosr[0] == 12) {
            ctx2.drawImage(n12, 1180, 180);
        }
        //Sinal
        if (sinalr[0] == "+") {
            ctx2.drawImage(sum, 1270, 180);
        }
        else {
            ctx2.drawImage(sub, 1270, 180);
        }
        //Segundo coeficiente (x^1)
        if (numerosr[1] == 1) {
            ctx2.drawImage(n1, 1310, 180);
        }
        else if (numerosr[1] == 2) {
            ctx2.drawImage(n2, 1310, 180);
        }
        else if (numerosr[1] == 3) {
            ctx2.drawImage(n3, 1310, 180);
        }
        else if (numerosr[1] == 4) {
            ctx2.drawImage(n4, 1310, 180);
        }
        else if (numerosr[1] == 5) {
            ctx2.drawImage(n5, 1310, 180);
        }
        else if (numerosr[1] == 6) {
            ctx2.drawImage(n6, 1310, 180);
        }
        else if (numerosr[1] == 7) {
            ctx2.drawImage(n7, 1310, 180);
        }
        else if (numerosr[1] == 8) {
            ctx2.drawImage(n8, 1310, 180);
        }
        else if (numerosr[1] == 9) {
            ctx2.drawImage(n9, 1310, 180);
        }
        else if (numerosr[1] == 10) {
            ctx2.drawImage(n10, 1310, 180);
        }
        ctx2.drawImage(x, 1340, 180);
        //Sinal 2
        if (sinalr[1] == "+") {
            ctx2.drawImage(sum, 1380, 180);
        }
        else {
            ctx2.drawImage(sub, 1380, 180);
        }
        //Terceiro coeficiente (x^0)
        if (numerosr[2] == 1) {
            ctx2.drawImage(n1, 1420, 180);
        }
        else if (numerosr[2] == 2) {
            ctx2.drawImage(n2, 1420, 180);
        }
        else if (numerosr[2] == 3) {
            ctx2.drawImage(n3, 1420, 180);
        }
        else if (numerosr[2] == 4) {
            ctx2.drawImage(n4, 1420, 180);
        }
        else if (numerosr[2] == 5) {
            ctx2.drawImage(n5, 1420, 180);
        }
        else if (numerosr[2] == 6) {
            ctx2.drawImage(n6, 1420, 180);
        }
        else if (numerosr[2] == 7) {
            ctx2.drawImage(n7, 1420, 180);
        }
        else if (numerosr[2] == 8) {
            ctx2.drawImage(n8, 1420, 180);
        }
        else if (numerosr[2] == 9) {
            ctx2.drawImage(n9, 1420, 180);
        }
        else if (numerosr[2] == 10) {
            ctx2.drawImage(n10, 1420, 180);
        }
    }
    // Derivada Errada em A = 
    // Primeiro Grau
    if (grau == 1) {
        if (numeroe[0] == 1) {
            ctx2.drawImage(n1, 490, 180);
        }
        else if (numeroe[0] == 2) {
            ctx2.drawImage(n2, 490, 180);
        }
        else if (numeroe[0] == 3) {
            ctx2.drawImage(n3, 490, 180);
        }
        else if (numeroe[0] == 4) {
            ctx2.drawImage(n4, 490, 180);
        }
        else if (numeroe[0] == 5) {
            ctx2.drawImage(n5, 490, 180);
        }
    }
    //Segundo Grau
    else if (grau == 2) {
        ctx2.drawImage(x, 510, 180);
        if (numeroe[0] == 1) {
            ctx2.drawImage(n1, 480, 180);
        }
        else if (numeroe[0] == 2) {
            ctx2.drawImage(n2, 480, 180);
        }
        else if (numeroe[0] == 3) {
            ctx2.drawImage(n3, 480, 180);
        }
        else if (numeroe[0] == 4) {
            ctx2.drawImage(n4, 480, 180);
        }
        else if (numeroe[0] == 5) {
            ctx2.drawImage(n5, 480, 180);
        }
        else if (numeroe[0] == 6) {
            ctx2.drawImage(n6, 480, 180);
        }
        else if (numeroe[0] == 7) {
            ctx2.drawImage(n7, 480, 180);
        }
        else if (numeroe[0] == 8) {
            ctx2.drawImage(n8, 480, 180);
        }
        else if (numeroe[0] == 9) {
            ctx2.drawImage(n9, 480, 180);
        }
        else if (numeroe[0] == 10) {
            ctx2.drawImage(n10, 480, 180);
        }
        //Sinal
        if (sinalr[0] == "+") {
            ctx2.drawImage(sum, 545, 180);
        }
        else {
            ctx2.drawImage(sub, 545, 180);
        }
        //Segundo coeficiente (x^0)
        if (numeroe[1] == 1) {
            ctx2.drawImage(n1, 590, 180);
        }
        else if (numeroe[1] == 2) {
            ctx2.drawImage(n2, 590, 180);
        }
        else if (numeroe[1] == 3) {
            ctx2.drawImage(n3, 590, 180);
        }
        else if (numeroe[1] == 4) {
            ctx2.drawImage(n4, 590, 180);
        }
        else if (numeroe[1] == 5) {
            ctx2.drawImage(n5, 590, 180);
        }
        else if (numeroe[1] == 6) {
            ctx2.drawImage(n6, 590, 180);
        }
        else if (numeroe[1] == 7) {
            ctx2.drawImage(n7, 590, 180);
        }
        else if (numeroe[1] == 8) {
            ctx2.drawImage(n8, 590, 180);
        }
        else if (numeroe[1] == 9) {
            ctx2.drawImage(n9, 590, 180);
        }
        else if (numeroe[1] == 10) {
            ctx2.drawImage(n10, 590, 180);
        }
    }
    // Terceiro Grau
    else if (grau == 3) {
        ctx2.drawImage(x, 510, 180);
        ctx2.drawImage(n2, 535, 150);
        if (numeroe[0] == 1) {
            ctx2.drawImage(n1, 480, 180);
        }
        else if (numeroe[0] == 2) {
            ctx2.drawImage(n2, 480, 180);
        }
        else if (numeroe[0] == 3) {
            ctx2.drawImage(n3, 480, 180);
        }
        else if (numeroe[0] == 4) {
            ctx2.drawImage(n4, 480, 180);
        }
        else if (numeroe[0] == 5) {
            ctx2.drawImage(n5, 480, 180);
        }
        else if (numeroe[0] == 6) {
            ctx2.drawImage(n6, 480, 180);
        }
        else if (numeroe[0] == 7) {
            ctx2.drawImage(n7, 480, 180);
        }
        else if (numeroe[0] == 8) {
            ctx2.drawImage(n8, 480, 180);
        }
        else if (numeroe[0] == 9) {
            ctx2.drawImage(n9, 480, 180);
        }
        else if (numeroe[0] == 10) {
            ctx2.drawImage(n10, 480, 180);
        }
        //Sinal
        if (sinalr[0] == "+") {
            ctx2.drawImage(sum, 570, 180);
        }
        else {
            ctx2.drawImage(sub, 570, 180);
        }
        //Segundo coeficiente (x^1)
        if (numeroe[1] == 1) {
            ctx2.drawImage(n1, 610, 180);
        }
        else if (numeroe[1] == 2) {
            ctx2.drawImage(n2, 610, 180);
        }
        else if (numeroe[1] == 3) {
            ctx2.drawImage(n3, 610, 180);
        }
        else if (numeroe[1] == 4) {
            ctx2.drawImage(n4, 610, 180);
        }
        else if (numeroe[1] == 5) {
            ctx2.drawImage(n5, 610, 180);
        }
        else if (numeroe[1] == 6) {
            ctx2.drawImage(n6, 610, 180);
        }
        else if (numeroe[1] == 7) {
            ctx2.drawImage(n7, 610, 180);
        }
        else if (numeroe[1] == 8) {
            ctx2.drawImage(n8, 610, 180);
        }
        else if (numeroe[1] == 9) {
            ctx2.drawImage(n9, 610, 180);
        }
        else if (numeroe[1] == 10) {
            ctx2.drawImage(n10, 610, 180);
        }
        ctx2.drawImage(x, 640, 180);
        //Sinal 2
        if (sinalr[1] == "+") {
            ctx2.drawImage(sum, 680, 180);
        }
        else {
            ctx2.drawImage(sub, 680, 180);
        }
        //Terceiro coeficiente (x^0)
        if (numeroe[2] == 1) {
            ctx2.drawImage(n1, 720, 180);
        }
        else if (numeroe[2] == 2) {
            ctx2.drawImage(n2, 720, 180);
        }
        else if (numeroe[2] == 3) {
            ctx2.drawImage(n3, 720, 180);
        }
        else if (numeroe[2] == 4) {
            ctx2.drawImage(n4, 720, 180);
        }
        else if (numeroe[2] == 5) {
            ctx2.drawImage(n5, 720, 180);
        }
        else if (numeroe[2] == 6) {
            ctx2.drawImage(n6, 720, 180);
        }
        else if (numeroe[2] == 7) {
            ctx2.drawImage(n7, 720, 180);
        }
        else if (numeroe[2] == 8) {
            ctx2.drawImage(n8, 720, 180);
        }
        else if (numeroe[2] == 9) {
            ctx2.drawImage(n9, 720, 180);
        }
        else if (numeroe[2] == 10) {
            ctx2.drawImage(n10, 720, 180);
        }
    }
}

function limpatela() {
    ctx2.clearRect(0, 0, 1890, 300);
}

function monitor() {
    monitorOn();

    projetajogo();

    oqresolve();

    criaerro();

    imprimequest();

    nivel++;

    // Limpar variáveis:

    numeros = [];
    exp = [];
    frac = [];
    numerosr = [];
    numeroe = [];
    expr = [];
    sinalr = [];
    sinal = [];

}