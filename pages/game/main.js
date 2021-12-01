
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var WIDTH = 900;
var HEIGHT = 950;
var LimitWidth = WIDTH / 2;
var esquerda = true, direita = false;

var player = {
    lado: 100,
    color: "blue",
    x: 225,
    y: 750,
    velocidade: 10,

}
var keycode;

function limpa_tela() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}


document.addEventListener('keydown', function (e) {


    //left
    if (e.keyCode == 37) {
        player.x = 225;
        esquerda = true;
        direita = false;
    }

    //right
    else if (e.keyCode == 39) {
        player.x = 575;
        esquerda = false;
        direita = true;
    }

});
document.addEventListener('keyup', function (e) {
    switch (e.keyCode) {
        case 37: // left
        case 39: // right

            dx = 0;
            break;


    }


});
function Desenhar() {

    /*if (dx == -1)
        player.x -= player.velocidade;
    if (dx == 1)
        player.x += player.velocidade;



    if (player.x > WIDTH - player.lado) {
        player.x = WIDTH - player.lado;
    }


    if (player.x < 0)
        player.x = 0;

    */

    ctx.fillRect(player.x, player.y, player.lado, player.lado);
    ctx.fillStyle = player.color;

}
function GameOver() {

    var alternativa = true;
    if (alternativa) {
        if (player.x > LimitWidth)
            //alert("Game Over");
            console.log("GameOver");
    }
    else {
        if (player.x < LimitWidth)
            //alert("Game Over");
            console.log("GameOver");
    }
}
function Atualizar() {
    limpa_tela();
    Desenhar();
    GameOver();
}
setInterval(Atualizar, 1);


