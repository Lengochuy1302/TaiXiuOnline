var GiftCode = require('../../../../Models/GiftCode');
var UserInfo = require('../../../../Models/UserInfo');
var moment = require('moment');
module.exports = function(req, res) {
    const { body, userAuth } = req || {};
    const { Data } = body || {};
    const { code } = Data || {};
    GiftCode.findOne({ code: code }, function(err, result) {
        if (result && result.uid) {
            UserInfo.findOne({
                id: result.uid
            }, function(err, user) {
                var data = {
                    red: result.red,
                    code: result.code,
                    date: result.date,
                    todate: result.todate,
                    uid: result.uid,
                    nicknameUse: user.name,
                    timeUse: result.timeUse
                }
                result.nicknameUse = user.name;
                res.json({
                    status: 200,
                    success: true,
                    data: data
                });
            });
        } else {
            res.json({
                status: 200,
                success: true,
                data: result
            });
        }
    });
};