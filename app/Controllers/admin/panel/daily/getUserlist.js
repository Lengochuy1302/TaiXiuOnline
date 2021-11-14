var mongoose = require('mongoose');
var UserInfo = mongoose.model('UserInfo');
var Users = require('../../../../Models/Users');
var _ = require('lodash');
module.exports = function(req, res) {
    const { body } = req || {};
    const { Data } = body || {};
    const { nickname } = Data || {};
    var filter = {};
    if (!!nickname) {
        filter.name = nickname;
        filter.type = false;
    }
    var finalResult = [];
    UserInfo.countDocuments(filter).exec(function(err, totals) {
        UserInfo.find(filter, {}, { sort: { '_id': -1,'type':false }, limit: Data.limit, skip: Data.offset }, function(err, result) {
            if (result) {
                var arrFilter = result.map(function(item) {
                    return item.id;
                });
                Users.find({
                    _id: {
                        $in: arrFilter
                    }
                }, function(err, user) {
                    if (user) {
                        result.map(function(item, index) {
                            item = item._doc;
                            user.map(function(us, index) {
                            	if(us._id==item.id){
                            		item.ban_login = us.local.ban_login;
                            		item.userID = us._id;
                            	}                           
                                finalResult.push(item);
                            })
                        })
                    }
                    res.json({
                        status: 200,
                        success: true,
                        totals: totals,
                        data: _.uniq(finalResult, function(item) {
                            return finalResult.UID;
                        })
                    });
                });
            }
        });
    });
}