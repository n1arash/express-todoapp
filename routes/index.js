var express = require('express');
var router = express.Router();
const Task = require('../models/Task');
/* GET home page. */


router.get('/', function (req, res, next) {
	Task.find({}, function (err, task) {
		if (err) throw err;
		// object of all the users
		res.render('index', {title: 'Todo App', text: task});
	});
});


router.post('/task', function (req, res, next) {
	var task = Task(req.body);
	task.save(function (err) {
		if (err) {
			throw err;
		}

	});
	res.redirect('/');
	next();
});
router.get('/task/delete/:id', function (req, res, next) {
	Task.findByIdAndRemove(req.params.id, function (err, task) {
		if (err) {
			throw err;
		}
		console.log(task);
	});
	res.redirect('/');
	next();
});
module.exports = router;
