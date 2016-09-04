/**
 * Created by Santhosh on 30-08-2016.
 */
var express = require('express');
var router = express.Router();
var validation = require('./validation');

router.post('/username', function (req, res, next) {
    //console.log(req.body);
    validation.username(req.body.username, function (err,result) {
        if(err) {
            var errStr = '';
            for(var x =0 ; x<err.length ; x++) errStr += err[x] + (x == err.length-1 ? "" : ", ")
            res.status(500).json({err:errStr});
        }
        else if(result) res.status(200).send({});
    })
});
router.post('/number', function (req, res, next) {
    //console.log(req.body);
    validation.number(req.body.mobileNumber, function (err,result) {
        if(err) {
            var errStr = '';
            for(var x =0 ; x<err.length ; x++) errStr += err[x] + (x == err.length-1 ? "" : ", ")
            res.status(500).json({err:errStr});
        }
        else if(result) res.status(200).send({});
    })
});
router.post('/email', function (req, res, next) {
    //console.log(req.body);
    validation.email(req.body.email, function (err,result) {
        if(err) {
            var errStr = '';
            for(var x =0 ; x<err.length ; x++) errStr += err[x] + (x == err.length-1 ? "" : ", ")
            res.status(500).json({err:errStr});
        }
        else if(result) res.status(200).send({});
    })
});
router.post('/password', function (req, res, next) {
    //console.log(req.body);
    validation.password(req.body.password, function (err,result) {
        if(err) {
            var errStr = '';
            for(var x =0 ; x<err.length ; x++) errStr += err[x] + (x == err.length-1 ? "" : ", ")
            res.status(500).json({err:errStr});
        }
        else if(result) res.status(200).send({});
    })
});
router.post('/solve', function (req, res, next) {
    res.send(req.body)
});

module.exports = router;