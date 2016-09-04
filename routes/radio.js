/**
 * Created by Santhosh on 31-08-2016.
 */
var express = require('express');
var router = express.Router();
var validation = require('./validation');

router.get('/', function (req,res) {
    res.render('radio.html');
});

module.exports = router