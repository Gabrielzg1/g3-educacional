const express = require('express');
const session = require('express-session')
var app = express();
const path = require('path');

const port = 3030
const host = 'localhost'

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("www"));


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
app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, './login/index.html'));
    if (req.session.userid) {
        res.redirect('/game')
    }

});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './home/index.html'));
});
//configuração do jogo
app.get('/game', function (req, res) {
    res.sendFile(path.join(__dirname, './game/index.html'));
    var teste = "entrou"
    if (req.session.userid) {
        console.log(teste)
        res.sendFile(__dirname, './game/index.html')

    } else {
        if (req.query.userid) {
            req.session.userid = req.query.userid
            console.log(teste + '1')
            res.sendFile(__dirname, './game/index.html')
        } else {
            console.log(teste + '2');
            res.redirect('/login')
        }
    }

});
app.get('/logout', function (req, res) {
    req.session.destroy(function () {
        res.send("Sessão finalizada!");
    });
});

app.listen(port, function () {
    console.log(`Rodando em: http://${host}:${port}/`);
});

