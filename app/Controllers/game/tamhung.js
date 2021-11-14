let spin  = require('./tamhung/spin');
let bonus = require('./tamhung/bonus');
let log   = require('./tamhung/log');
let top   = require('./tamhung/top');

module.exports = function(client, data){
	if (!!data.bonus) {
		bonus(client, data.bonus)
	}
	if (!!data.spin) {
		console.log("TamHung Spin" + data.spin);
		spin(client, data.spin)
	}
	if (!!data.log) {
		log(client, data.log)
	}
	if (void 0 !== data.top) {
		top(client, data.top)
	}
};