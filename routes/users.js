/**
 * Created by Santhosh on 04-09-2016.
 */

var express = require('express');
var router = express.Router();

router.get('/:id', function (req,res) {
    res.render('errorUser.html');
});

module.exports = router;