var express = require('express');
var app = express();
const port = 8080
const host = 'localhost'

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/pages/home/index.html");
});
app.get('/game', function (req, res) {

    //res.sendFile(__dirname + "/pages/game/index.html");
});

app.listen(8080, function () {
    console.log(`rodando em  http://${host}:${port}`);
});