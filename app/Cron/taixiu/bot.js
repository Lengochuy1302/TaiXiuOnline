
let TXCuoc    = require('../../Models/TaiXiu_cuoc');
let TXCuocOne = require('../../Models/TaiXiu_one');
let TXChat = require('../../Models/TaiXiu_chat');

/**
 * Ngẫu nhiên cược
 * return {number}
*/
let random = function(){
	return (Math.random()*(5000000-3000000+1)+3000000)>>0;
};

/**
 * Cược
*/
// Tài Xỉu RED
let tx = function(bot, io){
	let cuoc   = random();
	cuoc = 3 * cuoc / 4;
	let select = !!((Math.random()*2)>>0);
	if (select) {
		io.taixiu.taixiu.red_tai        += cuoc;
		io.taixiu.taixiu.red_player_tai += 1;
	}else{
		io.taixiu.taixiu.red_xiu        += cuoc;
		io.taixiu.taixiu.red_player_xiu += 1;
	}
	TXCuocOne.create({uid:bot.id, phien:io.TaiXiu_phien, taixiu:true, select:select, red:true, bet:cuoc});
	TXCuoc.create({uid:bot.id, name:bot.name, phien:io.TaiXiu_phien, bet:cuoc, taixiu:true, select:select, red:true, time:new Date()});
	bot = null;
	io = null;
	cuoc   = null;
	select = null;
};

// Chẵn Lẻ RED
let cl = function(bot, io){
	let cuoc   = random();
	let select = !!((Math.random()*2)>>0);
	if (select) {
		io.taixiu.chanle.red_chan        += cuoc;
		io.taixiu.chanle.red_player_chan += 1;
	}else{
		io.taixiu.chanle.red_le        += cuoc;
		io.taixiu.chanle.red_player_le += 1;
	}
	TXCuocOne.create({uid:bot.id, phien:io.TaiXiu_phien, taixiu:false, select:select, red:true, bet:cuoc});
	TXCuoc.create({uid:bot.id, name:bot.name, phien:io.TaiXiu_phien, bet:cuoc, taixiu:false, select:select, red:true, time:new Date()});
	bot = null;
	io = null;
	cuoc   = null;
	select = null;
};
module.exports = {
	tx: tx,
	cl: cl,
}
