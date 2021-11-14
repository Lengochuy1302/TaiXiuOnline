
let angrybird  = require('./bot_hu/angrybird');
let bigbabol   = require('./bot_hu/bigbabol');
let candy      = require('./bot_hu/candy');
let longlan    = require('./bot_hu/longlan');
let zeus    = require('./bot_hu/zeus');
let tamhung    = require('./bot_hu/tamhung');
let mini3cay   = require('./bot_hu/mini3cay');
let minipoker  = require('./bot_hu/minipoker');
let vqred      = require('./bot_hu/vqred');

module.exports = function(io, listBot){
/* 	setTimeout(() =>{
		angrybird(io, listBot);
		mini3cay(io, listBot);
		minipoker(io, listBot);
	}, 5000);
	setTimeout(() =>{
		bigbabol(io, listBot);
	}, 5000); */

	setTimeout(() =>{
		candy(io, listBot);
	}, 10000);

	setTimeout(() =>{
		candy(io, listBot);
	}, 15000);
	setTimeout(() =>{
		vqred(io, listBot);
	}, 20000);

	setTimeout(() =>{
		tamhung(io, listBot);
	}, 25000);
	setTimeout(() =>{
		zeus(io, listBot);
		listBot = null;
		io = null;
	}, 30000);
};
