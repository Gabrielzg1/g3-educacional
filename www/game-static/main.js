function jogar() {
    ctx.drawImage(carro, xm, 700);
}

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

function comparar() {
    if (g == true) {
        if (resposta == true) {
            if (xm == 465 && Math.abs((450) - yback) < 20) {
                alert("opa");
                pontos = pontos + 10;
                document.getElementById("Pontos").innerHTML = pontos;
                limpatela();
                monitor();
                g = false;
            }
        }
        else {
            if (xm == 1235 && Math.abs((450) - yback) < 20) {
                alert("opa");
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


function gameover() {
    alert("Acabou!");
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