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
    /*while (req.session.userid == undefined) {
        if (req.query.userid != undefined) {
            req.session.userid = req.query.userid

        }

    }*/

    if (req.session.userid) {
        req.session.userid = req.query.userid
        console.log('If: ' + req.query.userid)
        res.redirect('/game')
    } else {
        req.session.userid = req.query.userid
        console.log(req.session.userid)

    }


});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './home/index.html'));
});
//configuração do jogo
app.get('/game', function (req, res) {


    if (req.session.userid) {
        res.sendFile(path.join(__dirname, './game/index.html'));

    } else {
        if (req.query.userid) {
            req.session.userid = req.query.userid
            res.sendFile(path.join(__dirname, './game/index.html'));
        } else {
            // res.redirect('/login')
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

