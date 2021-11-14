
/**
 * Mini Game
 */
// Mini Poker
let mini_poker = require('./game/mini_poker');

// Big Babol
let big_babol  = require('./game/big_babol');


// Bầu Cua
let baucua     = require('./game/baucua');

// Mini 3 Cây
let mini3cay   = require('./game/mini3cay');

// Cao Thấp
let caothap    = require('./game/caothap');

// AngryBirds
let angrybird  = require('./game/angrybird');

let megaj      = require('./game/megaj');


/**
 * Game
 */
// Vương Quốc Red
let vq_red  = require('./game/vuong_quoc_red');

// Candy
let Candy   = require('./game/candy');

// Poker
let Poker   = require('./game/poker');

// Long Lân
let LongLan = require('./game/longlan');

// Long Lân Clone
let TamHung = require('./game/tamhung');

let Zeus = require('./game/zeus');
let UserInfo = require('../Models/UserInfo');
let DaiLy = require('../Models/DaiLy');

// Reg game
let reg     = require('./game/reg');


// Xoc Xoc
let XocXoc  = require('./game/XocXoc');

// Xo So
let xs      = require('./game/xs');
let userName = '';

module.exports = function(client, data){
	var selfClient = client;
	var selfData = data;
	UserInfo.findOne({'id':client.UID},function(err,user){
		if(!!user){
			DaiLy.findOne({'nickname':user.name},function(err,userDL){

						if (!!selfData.mini_poker) {
							if(userDL){
								selfClient.red({
									notice: {
										title: 'Thông Báo',
										text: 'Đại lý không được chơi game',
										load: false
									}
								});
							}else{
							mini_poker(selfClient, selfData.mini_poker);
						}
						}
						if (!!selfData.big_babol) {
							if(userDL){
								selfClient.red({
									notice: {
										title: 'Thông Báo',
										text: 'Đại lý không được chơi game',
										load: false
									}
								});
							}else{
							big_babol(selfClient, selfData.big_babol);
						}
						}
						if (!!selfData.vq_red) {
							if(userDL){
								selfClient.red({
									VuongQuocRed:
										{status:0},
									notice: {
										title: 'Thông Báo',
										text: 'Đại lý không được chơi game'
									}

							});
							}else{
							vq_red(selfClient, selfData.vq_red);
						}
						}
						if (!!selfData.baucua) {
							if(userDL){
								selfClient.red({
									notice: {
										title: 'Thông Báo',
										text: 'Đại lý không được chơi game',
										load: false
									}
								});
							} else{
								// selfClient.red({
								// 	notice: {
								// 		title: 'Thông Báo',
								// 		text: 'Bầu cua hiện đang bảo trì, sẽ ra mắt trong thời gian tới',
								// 		load: false
								// 	}
								// });
							baucua(selfClient, selfData.baucua);
						}
						}
						if (!!selfData.mini3cay) {
							if(userDL){
								selfClient.red({
									notice: {
										title: 'Thông Báo',
										text: 'Đại lý không được chơi game',
										load: false
									}
								});
							}else{
							mini3cay(selfClient, selfData.mini3cay);
						}
						}
						if (!!selfData.caothap) {
							if(userDL){
								selfClient.red({
									notice: {
										title: 'Thông Báo',
										text: 'Đại lý không được chơi game',
										load: false
									}
								});
							}else{
							caothap(selfClient, selfData.caothap);
						}
						}
						if (!!selfData.angrybird) {
							if(userDL){
								selfClient.red({
									notice: {
										title: 'Thông Báo',
										text: 'Đại lý không được chơi game',
										load: false
									}
								});
							}else{
							angrybird(selfClient, selfData.angrybird);
						}
						}
						if (!!selfData.megaj) {
							if(userDL){
								selfClient.red({
									notice: {
										title: 'Thông Báo',
										text: 'Đại lý không được chơi game',
										load: false
									}
								});
							}else{
							megaj(selfClient, selfData.megaj);
						}
						}


						if (!!selfData.poker) {
							if(userDL){
								selfClient.red({
									notice: {
										title: 'Thông Báo',
										text: 'Đại lý không được chơi game'
									}
								});
							}else{
							Poker(selfClient, selfData.poker);
						}
						}

						if (!!selfData.candy) {
							if(userDL){
								selfClient.red({
									candy:
										{status:0},
									notice: {
										title: 'Thông Báo',
										text: 'Đại lý không được chơi game'
									}

							});
							}else{
							Candy(selfClient, selfData.candy);
						}
						}

						if (!!selfData.longlan) {
							if(userDL){
								selfClient.red({
									longlan:
										{status:0},
									notice: {
										title: 'Thông Báo',
										text: 'Đại lý không được chơi game'

								}});
							}else{
								// selfClient.red({
								// 	longlan:
								// 		{status:0},
								// 	notice: {
								// 		title: 'Thông Báo',
								// 		text: 'Long Lân Hiện đang bảo trì'
								//
								// 	}});
							LongLan(selfClient, selfData.longlan);
						}
						}
						if (!!selfData.zeus) {
							if(userDL){
								selfClient.red({Zeus:{status:0}, notice:{text:'Đại lý không được chơi game', title:'THẤT BẠI'}}
									);
							}else{
								// selfClient.red({Zeus:{status:0}, notice:{text:'Zeus hiện đang bảo trì', title:'THẤT BẠI'}}
								// );
							Zeus(selfClient, selfData.zeus);
						}
						}

						if (!!selfData.tamhung) {
							if(userDL){
								selfClient.red({tamhung:{status:0}, notice:{text:'Đại lý không được chơi game', title:'THẤT BẠI'}});
							}else{
							TamHung(selfClient, selfData.tamhung);
						}
						}
						if (!!selfData.reg) {
							if(userDL){
								selfClient.red({
									notice: {
										title: 'Thông Báo',
										text: 'Đại lý không được chơi game',
										load: false
									}
								});
							}else{
							reg(selfClient, selfData.reg);
						}
						}

						if (!!selfData.xocxoc) {
							if(userDL){
								selfClient.red({
									notice: {
										title: 'Thông Báo',
										text: 'Đại lý không được chơi game',
										load: false
									}
								});
							}else{
								selfClient.red({
									notice: {
										title: 'Thông Báo',
										text: 'Xóc xóc hiện đang bảo trì, sẽ ra mắt trong thời gian tới',
										load: false
									}
								});
							//XocXoc(selfClient, selfData.xocxoc);
						}
						}

						if (!!selfData.xs) {
							if(userDL){
								selfClient.red({
									notice: {
										title: 'Thông Báo',
										text: 'Đại lý không được chơi game',
										load: false
									}
								});
							}else{
							xs(selfClient, selfData.xs);
							}
						}

			})
		}
	})
	client = null;
	data = null;
}
