var express = require('express');
var app = express();
const port = 3000
const host = 'localhost'

app.use(express.static("pages"));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/pages/home/index.html");
});
app.get('/game', function (req, res) {

    //res.sendFile(__dirname + "/pages/game/index.html");
});

app.listen(port, function () {
    console.log(`rodando em  http://${host}:${port}`);
});