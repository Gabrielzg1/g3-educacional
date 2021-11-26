var express = require('express');
var app = express();
const port = 3000
const host = 'localhost'

app.use(express.static("pages"));

app.get('/home', function (req, res) {

});

//configurando server da página de login
app.get('/login', function (req, res) {
    //var nome = req.query.nome;

});
app.get('/getNome', function (req, res) {
    //res.send(nome);
});


//configuração do jogo
app.get('/game', function (req, res) {


});
app.get('/logout', function(req, res){

});

app.listen(port, function () {
    console.log(`Rodando em: http://${host}:${port}`);
});