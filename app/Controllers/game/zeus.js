let spin  = require('./zeus/spin');
let bonus = require('./zeus/bonus');
let log   = require('./zeus/log');
let top   = require('./zeus/top');

module.exports = function(client, data){
	if (!!data.bonus) {
		bonus(client, data.bonus)
	}
	if (!!data.spin) {
		console.log(data.spin);
		spin(client, data.spin)
	}
	if (!!data.log) {
		log(client, data.log)
	}
	if (void 0 !== data.top) {
		top(client, data.top)
	}
};