const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const config = require('./config/config').get(process.env.NODE_ENV);

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);
/*models*/
const {User} = require('./models/user');
const {Book} = require('./models/books');

/* */
app.use(bodyParser.json());
app.use(cookieParser());

/*requests*/




const port = process.env.PORT || 9001;
app.listen(port, () => {
    console.log("Server rinning");
});