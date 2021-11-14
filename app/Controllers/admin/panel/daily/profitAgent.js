var ChuyenRed = require('../../../../Models/ChuyenRed');
var DaiLy = require('../../../../Models/DaiLy');
var moment = require('moment');
module.exports = function(req, res) {
    const { body, userAuth } = req || {};
    const { Data } = body || {};
    const { fromDate, toDate } = Data || {};
    ChuyenRed.find({
        time: {
            $gte: new Date(fromDate),
            $lte: new Date(toDate)
        },
        $or: [{
            from: userAuth.nickname
        }, {
            to: userAuth.nickname
        }]
    }).exec(function(err, result) {
        if (result) {
            var totalFrom = 0;
            var totalTo = 0;
            result.map(function(rs, index) {
                if (rs && rs.from == userAuth.nickname) {
                    totalFrom += rs && rs.red ? rs.red : 0;
                } else if (rs && rs.to == userAuth.nickname) {
                    totalTo += rs && rs.red ? rs.red : 0;
                }
            });
            res.json({
                status: 200,
                success: true,
                data: {
                    totalFrom: totalFrom,
                    totalTo: totalTo,
                }
            });
        } else {
            res.json({
                status: 200,
                success: true,
                data: {
                    totalFrom: 0,
                    totalTo: 0,
                }
            });
        }
    });
};