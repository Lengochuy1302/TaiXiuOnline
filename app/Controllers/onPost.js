
let User     = require('./User');

let TaiXiu   = require('./TaiXiu');
let Shop     = require('./Shop');
let GiftCode = require('./GiftCode');
let Game     = require('./Game');
let OTP      = require('./OTP');
let Event    = require('./event/index');
let SieuZon    = require('./event/sieuzon');
let message  = require('./Message');

module.exports = function(client, p){
	if (!!p) {
		console.log(p);
		if (!!p.signName){
			User.signName(client, p.signName);
		}

		if (!!p.user){
			User.onData(client, p.user);
		}

		if (!!p.taixiu){
			TaiXiu(client, p.taixiu);
		}

		if (!!p.shop){
			Shop(client, p.shop);
		}

		if (!!p.giftcode){
			GiftCode(client, p.giftcode);
		}

		if (!!p.g){
			Game(client, p.g);
		}

		if (!!p.scene && typeof p.scene === 'string'){
			client.scene = p.scene;
			User.next_scene(client);
		}

		if (!!p.otp){
			OTP(client, p.otp);
		}

		if (!!p.event){
			Event(client, p.event);
		}

		if (!!p.sieuzon){
			SieuZon(client);
		}

		if (!!p.message){
			message(client, p.message);
		}
	}
	client = null;
	p = null;
}
