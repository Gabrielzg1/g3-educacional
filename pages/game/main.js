var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var WIDTH = 1890
var HEIGHT = 930


var player = {
    lado: 100,
    color: "blue",
    x: 100,
    y: 100,
    velocidade: 10,
}

var dy, dx
var keycode



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

    if (dx == -1)
        player.x -= player.velocidade
    if (dx == 1)
        player.x += player.velocidade
    if (dy == 1)
        player.y += player.velocidade
    if (dy == -1)
        player.y -= player.velocidade


    if (player.x > 1890 - player.lado) {
        player.x = 1890 - player.lado
    }
    if (player.y > 930 - player.lado)
        player.y = 930 - player.lado

    if (player.x < 0)
        player.x = 0

    if (player.y < 0)
        player.y = 0


    ctx.fillRect(player.x, player.y, player.lado, player.lado)
    ctx.fillStyle = player.color

}
function Atualizar() {
    limpa_tela()
    Desenhar()

}


setInterval(Atualizar, 1);


