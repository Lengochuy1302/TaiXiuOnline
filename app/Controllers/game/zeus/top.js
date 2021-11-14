
var Zeus_red = require('../../../Models/Zeus/Zeus_red');
var Zeus_xu  = require('../../../Models/Zeus/Zeus_xu');

var UserInfo  = require('../../../Models/UserInfo');

module.exports = function(client, data){
	var red    = !!data;   // Loại tiền (Red: true, Xu: false)
	if (red) {
		Zeus_red.find({type:{$gte:1}}, 'name win bet time type', {sort:{'_id':-1}, limit: 100}, function(err, result) {
			Promise.all(result.map(function(obj){
				obj = obj._doc;
				delete obj.__v;
				delete obj._id;
				return obj;
			}))
			.then(function(arrayOfResults) {
				client.red({Zeus:{top:arrayOfResults}});
			})
		});
	}else{
		Zeus_xu.find({type:{$gte:1}}, 'name win bet time type', {sort:{'_id':-1}, limit: 100}, function(err, result) {
			Promise.all(result.map(function(obj){
				obj = obj._doc;
				delete obj.__v;
				delete obj._id;
				return obj;
			}))
			.then(function(arrayOfResults) {
				client.red({Zeus:{top:arrayOfResults}});
			})
		});
	}
};
