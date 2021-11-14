var ChuyenRed = require('../../../../Models/ChuyenRed');
var DaiLy = require('../../../../Models/DaiLy');
var moment = require('moment');
module.exports = function(req, res) {
    const { body, userAuth } = req || {};
    const { Data } = body || {};
    const { fromDate, toDate } = Data || {};
    DaiLy.find({
            createdBy: userAuth.nickname,
            rights: 11
        })
        .exec(function(err, ag2) {
            var response = [];
            if (ag2) {
                var orQuery = [];
                ag2.map(function(item, index) {
                    orQuery.push({
                        from: item.nickname
                    });
                    orQuery.push({
                        to: item.nickname
                    });
                });
                ChuyenRed.find({
                    $or: orQuery,
                    time: {
                        $gte: new Date(fromDate),
                        $lte: new Date(toDate)
                    },
                    from: {
                        $ne: userAuth.nickname
                    }
                }).exec(function(err, result) {
                    ag2.map(function(item, index) {
                        var totalFrom = 0;
                        var totalTo = 0;
                        result.map(function(rs, index) {
                            if (rs && rs.from == item.nickname) {
                                totalFrom += rs && rs.red ? rs.red : 0;
                            } else if (rs && rs.to == item.nickname) {
                                totalTo += rs && rs.red ? rs.red : 0;
                            }
                        });
                        response.push({
                            totalFrom: totalFrom,
                            totalTo: totalTo,
                            fb: item.fb,
                            location: item.location,
                            rights: item.rights,
                            nickname: item.nickname,
                            id: item._id
                        });

                    });
                    res.json({
                        status: 200,
                        success: true,
                        data: response
                    });
                });
            } else {
                res.json({
                    status: 200,
                    success: true,
                    data: []
                });
            }
        });
};