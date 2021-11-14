
var cuoc     = require('./baucua/cuoc');
var regOpen  = require('./baucua/regOpen');
var viewlogs = require('./baucua/viewlogs');
var tops     = require('./baucua/tops');
var CuocBauCua = [];
module.exports = function (client, data) {
	if (void 0 !== data.view) {
		client.gameEvent.viewBauCua = !!data.view;
	}
	if (!!data.regOpen) {
		regOpen(client);
	}
	if (!!data.cuoc) {
		if (CuocBauCua.length>10){
			CuocBauCua = []
			CuocBauCua.push([data.cuoc, new Date().getTime()])
			cuoc(client, CuocBauCua[CuocBauCua.length-1][0])
		}else {
			CuocBauCua.push([data.cuoc, new Date().getTime()])
			cuoc(client, CuocBauCua[CuocBauCua.length-1][0])
		}
		console.log(CuocBauCua[CuocBauCua.length-1][0])
		console.log(CuocBauCua.length)
	}
	if (void 0 !== data.tops) {
		tops(client, data.tops)
	}
	if (!!data.viewlogs) {
		viewlogs(client, data.viewlogs)
	}
};
