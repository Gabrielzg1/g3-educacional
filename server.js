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
        maxAge: 0.5 * 60 * 60 * 24 * 365
    },
    saveUninitialized: false
}));

//configurando server da página de login
app.post('/login', function (req, res) {
    if (req.session.userid) {
        req.session.userid = req.body.userid;

    }
});

app.get('/logged', function (req, res) {
    if (req.session.userid) {
        res.send("conectou")
    } else {
        res.send("Usuário não está logado!");
    }
});

//configuração do jogo
app.get('/game', function (req, res) {


});
app.get('/logout', function (req, res) {
    req.session.destroy(function () {
        res.send("Sessão finalizada!");
    });
});

app.listen(port, function () {
    console.log(`Rodando em: http://${host}:${port}/home`);
});