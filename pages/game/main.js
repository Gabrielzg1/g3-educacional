var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var WIDTH = 1890
var HEIGHT = 930

var player = {
    x: 945,
    y: 465,
    color: 'blue'

}
var dy, dx
var keycode

var velocidade = 10

function limpa_tela() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}


document.addEventListener('keydown', function (e) {


    //left
    if (e.keyCode == 37) {
        dx = -1;
    }
    //top
    else if (e.keyCode == 38) {

        dy = -1;
    }
    //right
    else if (e.keyCode == 39) {

        dx = 1;
    }
    //bottom
    else if (e.keyCode == 40) {

        dy = 1;
    }
});
document.addEventListener('keyup', function (e) {
    switch (e.keyCode) {
        case 37: // left
        case 39: // right

            dx = 0;
            break;

        case 38: // up
        case 40: // down

            dy = 0;
            break;
    }


});
function Desenhar() {
    ctx.fillRect(player.x, player.y, 100, 100)
    ctx.fillStyle = player.color
    console.log(dx)

    if (dx == -1)
        player.x -= velocidade
    if (dx == 1)
        player.x += velocidade
    if (dy == 1)
        player.y += velocidade
    if (dy == -1)
        player.y -= velocidade


    if (x == 1890 + 100) {
        player.x = 0
    }
    if (y == 1030) {
        player.y = 0
    }
    if (x == -100) {
        player.x = 1790
    }
    if (y == -100) {
        player.y = 830
    }




}
function Atualizar() {
    limpa_tela()
    Desenhar()

}


setInterval(Atualizar, 1);


