
let users = require('./socketUsers');
let admin = require('./socketAdmin');
// Router Websocket

module.exports = function(app, redT) {
	app.ws('/ws', function(ws, req) {
		users(ws, redT);
	});
	app.ws('/wssocket', function(ws, req) {
		admin(ws, redT)
	});
};
