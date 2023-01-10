const express = require('express');
const router = express.Router();


module.exports = function(db){

router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/index', function(req, res, next) {
  res.render('index');
});

return router;
}
