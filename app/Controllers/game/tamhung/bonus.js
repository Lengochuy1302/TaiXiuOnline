
let HU                 = require('../../../Models/HU');

let tamhung_red   = require('../../../Models/TamHung/TamHung_red');
let tamhung_xu    = require('../../../Models/TamHung/TamHung_xu');
let tamhung_users = require('../../../Models/TamHung/TamHung_users');

let UserInfo           = require('../../../Models/UserInfo');

function onSelectBox(client, box){
	box = box>>0;
	if (void 0 !== client.tamhung &&
		client.tamhung.bonus !== null &&
		client.tamhung.bonusL > 0)
	{
		let index = box-1;
		if (void 0 !== client.tamhung.bonus[index]) {
			if (!client.tamhung.bonus[index].isOpen) {
				client.tamhung.bonusL -= 1;
				client.tamhung.bonus[index].isOpen = true;

				let bet = client.tamhung.bonus[index].bet;
				client.tamhung.bonusWin += bet;
				client.red({tamhung:{bonus:{bonus: client.tamhung.bonusL, box: index, bet: bet}}});
				if (!client.tamhung.bonusL) {
					let betWin = client.tamhung.bonusWin*client.tamhung.bonusX;

					let uInfo    = {};
					let gInfo    = {};
					let huUpdate = {};

					if (client.tamhung.red) {
						huUpdate.redWin = betWin;
						uInfo.red       = betWin;
						uInfo.redWin    = betWin;
						gInfo.win       = betWin;
						tamhung_red.updateOne({'_id': client.tamhung.id}, {$inc:{win:betWin}}).exec();
					}else{
						huUpdate.xuWin = betWin;
						uInfo.xu       = betWin;
						uInfo.xuWin    = betWin;
						gInfo.winXu    = betWin;

						let thuong = (betWin*0.039589)>>0;
						uInfo.red      = thuong;
						uInfo.thuong   = thuong;
						gInfo.thuong   = thuong;

						tamhung_xu.updateOne({'_id': client.tamhung.id}, {$inc:{win:betWin}}).exec();
					}

					client.tamhung.bonus    = null;
					client.tamhung.bonusWin = 0;
					client.tamhung.bonusX   = 0;

					UserInfo.findOneAndUpdate({id:client.UID}, {$inc:uInfo}, function(err, user){
						setTimeout(function(){
							if (client.tamhung.red) {
								client.red({tamhung:{bonus:{win: betWin}}, user:{red:user.red*1+betWin}});
							}else{
								client.red({tamhung:{bonus:{win: betWin}}, user:{xu:user.xu*1+betWin}});
							}
							client = null;
						}, 700);
					});
					HU.updateOne({game:'tamhung', type:client.tamhung.bet, red:client.tamhung.red}, {$inc:huUpdate}).exec();
					tamhung_users.updateOne({'uid':client.UID}, {$inc:gInfo}).exec();
				}else{
					client = null;
				}
			}
		}
	}
}

module.exports = function(client, data){
	if (void 0 !== data.box) {
		onSelectBox(client, data.box);
	}
};
