const express = require('express');
const session = require('express-session')
var app = express();
const path = require('path');

const port = 3030
const host = 'localhost'

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("www"));
app.set('view engine', 'ejs')


app.use(session({
    secret: "asfdasdfasfsadfasdfasdfadfs",
    secure: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 10 //duração de 10 dias da sessão
    },
    saveUninitialized: false
}));

//configurando server da página de login
app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, './views/login/index.html'));
    if (req.session.userid || req.query.userid) {
        console.log(req.query.userid)
        req.session.userid = req.query.userid
        if (req.query.userid != undefined)
            res.redirect(`/game?userid=${req.query.userid}`)
    }

});


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './views/home/index.html'));
});
//configuração do jogo
app.get('/game', function (req, res) {
    var username = "Nome do usuário" // linha de codigo para desenvolvimento (TEMPO)
    res.render('./game/index', { username: username })     // linha em local TEMPORÁRIO PARA FUNCIONAMENTO
    if (req.query.userid && req.query.userid != undefined && req.session.userid) {
        var username = req.query.userid
        req.session.userid = req.query.userid

        console.log(username)

    } else {
        // res.redirect('/login') //COMANDO DESATIVADO PARA DESENVOLVIMENTO
    }


});
app.get('/logout', function (req, res) {
    req.session.destroy(function () {
        res.send("Sessão finalizada!");
    });
});


//variaveis de integração




app.listen(port, function () {
    console.log(`Rodando em: http://${host}:${port}/`);
});

