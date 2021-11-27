const express = require('express');
const session = require('express-session')
var app = express();

const port = 3000
const host = 'localhost'

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("pages"));

app.get('/home', function (req, res) {

});

app.use(session({
    secret: "asfdasdfasfsadfasdfasdfadfs",
    secure: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365
    },
    saveUninitialized: false
}));

//configurando server da página de login
app.post('/login', function (req, res) {
    if (req.session.userid || req.body.passwd == "123456") {
        req.session.userid = req.body.userid;
        CarregarEmails(req, res);
    } else {
        res.send("Senha Inválida");
    }
});

app.get('/login', function (req, res) {
    if (req.session.userid) {
        CarregarEmails(req, res);
    } else {
        res.send("Usuário não está logado!");
    }
});


//configuração do jogo
app.get('/game', function (req, res) {


});

app.listen(port, function () {
    console.log(`Rodando em: http://${host}:${port}`);
});