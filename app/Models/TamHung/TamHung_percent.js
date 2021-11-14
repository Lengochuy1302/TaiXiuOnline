let mongoose = require('mongoose');

let Schema = new mongoose.Schema({
 type: {type: Number,  required: true},
	item0: {type: Number,  required: true},                   // Loại hũ (100, 1000, 10000)
	item1: {type: Number,  required: true},
 item2: {type: Number,  required: true},
 item3: {type: Number,  required: true},
 item4: {type: Number,  required: true},
 item5: {type: Number,  required: true},
 item6: {type: Number,  required: true},
});


module.exports = mongoose.model('tamhung_percents', Schema);
