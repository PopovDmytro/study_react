const express = require('express');
const app = express();
const querystring = require('querystring');

app.get('/', (req, res) => {
    res.send(`<h1>Test test</h1>`);
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