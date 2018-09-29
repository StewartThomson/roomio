let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let config = require('./config/');

require('dotenv').config();

let routes = require('./routes/index');

let app = express();

process.env.NODE_ENV = 'development';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    let allowedOrigins = ['https://stewartdev.ca', 'http://stewartdev.ca', 'http://localhost:4200', 'http://localhost:3000'];
    let origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/api', routes);
app.get('/coop/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/coop/index.html'));
});
app.get('/roomio/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/roomio/index.html'));
});


function initializeModels() {
    mongoose.connect(config.db, {useNewUrlParser: true}).then().catch(err => console.log('Mongodb failed to connect', {err: err}));
}

initializeModels();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;