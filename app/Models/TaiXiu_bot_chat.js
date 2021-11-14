
let mongoose      = require('mongoose');

let Schema = new mongoose.Schema({
	Content:  {type: String, required: true},
});

module.exports = mongoose.model('TaiXiu_bot_chat', Schema);
