var ChuyenRed = require('../../../../Models/ChuyenRed');
module.exports = function(req, res) {
    var { userAuth, body } = req || {};
    var { Data } = body || {};
    const { desc, id } = Data || {};
    ChuyenRed.findOne({ _id: id }, function(err, data) {
        if (!!data) {
            ChuyenRed.updateOne({ _id: id, }, { $set: { report: desc, reportTime: new Date() } }).exec();
            res.json({
                status: 200,
                success: true,
                data: {
                    message: 'Báo cáo giao dịch thành công'
                }
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