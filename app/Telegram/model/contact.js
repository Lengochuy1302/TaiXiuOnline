
let telegram = require('../../Models/Telegram');
let Phone    = require('../../Models/Phone');
let helpers  = require('../../Helpers/Helpers');

module.exports = function(bot, id, contact) {
	let phoneCrack = helpers.phoneCrack(contact);
	if (phoneCrack) {
					telegram.create({'form':id, 'phone':phoneCrack.phone}, function(err, cP){
						if (!!cP) {
							bot.sendMessage(id, 'Bạn đã thêm số điện thoại vào hệ thống vui lòng quay lại game chọn Telegram OTP và yêu cầu lấy OTP');
						}else{
							bot.sendMessage(id, 'Số điện thoại đã được hệ thống quản lý xin cảm ơn bạn', {parse_mode: 'markdown',reply_markup: {remove_keyboard: true}});
						}
					});
	}
}
