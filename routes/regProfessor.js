var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('regProfessor', { title: 'Hogwart\'s HeadMaster Database' });
});

module.exports = router;
