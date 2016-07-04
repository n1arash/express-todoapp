'use strict';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = Schema({
	task: {type: String, required: true},
	created_at: Date,
	updated_at: Date
});


var Task = mongoose.model('Task', TaskSchema);

module.exports = Task;