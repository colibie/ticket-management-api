var express = require('express');
var router = express.Router();
const auth = require("../controllers/auth");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* LOGIN user */
router.post('/login', auth.login);

/* SIGNUP user */
router.post('/signup', auth.signup);

module.exports = router;
