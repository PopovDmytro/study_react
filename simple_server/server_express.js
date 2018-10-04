const express = require('express');
const app = express();
const querystring = require('querystring');
const bodyParser = require('body-parser');
const fs = require('fs');

const urlcodeParser = bodyParser.urlencoded({extended: false}); // for querystring
const jsonParser = bodyParser.json(); // for json date

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/', (req, res, next) => {
    console.log('someone made a request for' + req.url);

    res.cookie('cookiename', 'cookievalue');

    next();
});

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <link rel="stylesheet" type="text/css" href="/css/style.css" />
            </head>
            <body>
                <h1>Test test</h1>
            </body>
        </html>
    `);
});

app.get('/user', (req, res) => {
    let HTML = fs.readFileSync(`${__dirname}/querystring.html`);
    res.send(`${HTML}`);
});

app.post('/enteruser', urlcodeParser, (req, res) => {
    const firstname = req.body.firstname;
    const lasttname = req.body.lastname;

    console.log(firstname);
    console.log(lasttname);
    res.send(200);
});

app.get('/user_post', (req, res) => {
    let HTML = fs.readFileSync(`${__dirname}/jsonpost.html`);
    res.send(`${HTML}`);
});

app.post('/enteruser_post', jsonParser, (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.get('/api/user', (req, res) => {
    res.send({
        name: 'John',
        car: ["Ford", "fiat"]
    });
});

app.get('/api/:user/:monkey', (req, res) => {
    let userName = req.params.user;
    let id = req.params.monkey;
    res.send(`<h1>The user id is ${id} and user name is ${userName}</h1>`);

});

app.get('/api/car', (req, res) => {
    let brand = req.query.brand;
    let year = req.query.year;

    res.send({
        brand,
        year
    });
});

const port = process.env.PORT || 9001;

app.listen(port);