var express = require('express');
var app = express();
const port = 3000
const host = 'localhost'

app.use(express.static("pages"));

app.get('/home', function (req, res) {

});
app.get('/login', function (req, res) {

});
app.get('/game', function (req, res) {


});

app.listen(port, function () {
    console.log(`Rodando em: http://${host}:${port}`);
});