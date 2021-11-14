var ChuyenRed = require('../../../../Models/ChuyenRed');
var UserInfo = require('../../../../Models/UserInfo');
module.exports = function(req, res) {
    var { userAuth, body } = req || {};
    var { Data } = body || {};
    const { desc, id } = Data || {};
    ChuyenRed.findOne({ _id: id }, function(err, data) {
        if (!!data) {
            ChuyenRed.updateOne({ _id: id, }, { $set: { freeze: desc, freezeTime: new Date() } }).exec(function(err, result) {
                ChuyenRed.findOne({ _id: id }).exec(function(err, result) {
                    UserInfo.updateOne({ name: result.to }, { $inc: { red: -result.red_c } }).exec(function() {
                        res.json({
                            status: 200,
                            success: true,
                            data: {
                                message: 'Đóng băng giao dịch thành công'
                            }
                        });
                    });
                });
            });
        } else {
            res.json({
                status: 200,
                success: false,
                data: {
                    message: 'Giao dịch không tồn tại trong hệ thống'
                }
            })
        }
    })
};