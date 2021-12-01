const express = require('express');
const session = require('express-session')
var app = express();

const port = 3030
const host = 'localhost'

/*app.use(express.urlencoded({ extended: false }));
app.use(express.json());*/
app.use(express.static("pages"));

/*app.use(session({
    secret: "asfdasdfasfsadfasdfasdfadfs",
    secure: false,
    resave: false,
    cookie: {
        maxAge: 0.5 * 60 * 60 * 24 * 365
    },
    saveUninitialized: false
}));*/

//configurando server da página de login
app.get('/login', function (req, res) {
    /*var username = false
    if (req.session.userid) {
        req.session.userid = req.query.userid;
    } else {
        username = req.query.userid
        console.log(username)

    }*/
});

app.get('/home', function (req, res) {

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

