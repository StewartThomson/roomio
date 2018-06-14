var express = require('express');
var router = express.Router();
var base = process.env.PWD;
var path = require('path');

router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
});

module.exports = router;