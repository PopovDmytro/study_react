const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
    res.json([
        {
            id: 1,
            username: 'Yourname'
        },
        {
            id: 2,
            username: 'Steve'
        }
    ]);
});


app.get('/api/cars', (req, res) => {
    res.json([
        {
            id: 1,
            brand: 'Ford'
        },
        {
            id: 2,
            brand: 'Toyuota'
        }
    ]);
});


const port = process.env.PORT || 9001;

app.listen(port);