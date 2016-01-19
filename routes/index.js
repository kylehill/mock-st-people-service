var express = require('express');
var router = express.Router();
var people = require("./people")
var _ = require("underscore")

/* GET home page. */
router.get('/guests', function(req, res, next) {
	res.json(_.shuffle(people))
});

module.exports = router;
