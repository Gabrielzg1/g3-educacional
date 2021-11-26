import caminho from './validação'
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var WIDTH = 1890;
var HEIGHT = 930;
var LimitWidth = WIDTH / 2;

var player = {
    lado: 100,
    color: "blue",
    x: 100,
    y: 750,
    velocidade: 10,

}

var dx;
var keycode;

function limpa_tela() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}


document.addEventListener('keydown', function (e) {


    //left
    if (e.keyCode == 37) {
        dx = -1;
    }

    //right
    else if (e.keyCode == 39) {

        dx = 1;
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

    if (dx == -1)
        player.x -= player.velocidade;
    if (dx == 1)
        player.x += player.velocidade;



    if (player.x > WIDTH - player.lado) {
        player.x = WIDTH - player.lado;
    }


    if (player.x < 0)
        player.x = 0;



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


