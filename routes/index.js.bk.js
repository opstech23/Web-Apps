var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Zimticket home page. */
router.get('/zt_home', function(req, res, next) {
  res.render('zt_home', { title: 'Zimticket!' });
});

/* GET userlist from the database */
router.get('/userlist', function(req, res) {
	var db = req.db;
	var collection = db.get('ztdev1_db');
	collection.find({},{},function(e,docs){
		res.render('users', {
			"users" : docs
		});
	});
});

module.exports = router;
