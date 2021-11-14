var ChuyenRed = require('../../../../Models/ChuyenRed');
var DaiLy = require('../../../../Models/DaiLy');
var moment = require('moment');
module.exports = function(req, res) {
    const { body, userAuth } = req || {};
    const { Data } = body || {};
    const { fromDate, toDate, daily } = Data || {};
    console.log('data', Data);
    var finalResult = [];
    var filter = {};
    if (!!daily && daily != '') {
        filter = {
            nickname: daily
        };
    }
    DaiLy.find(filter, function(err, dl) {
        if (dl) {
            var filterDaily = [];
            if (!!daily && daily != '') {
                filterDaily.push({
                    from: daily
                }, { to: daily });
            } else {
                dl.map(function(item, index) {
                    filterDaily.push({
                        from: item.nickname
                    }, {
                        to: item.nickname
                    });
                })
            }
            ChuyenRed.find({
                time: {
                    $gte: new Date(fromDate),
                    $lte: new Date(toDate)
                },
                $or: filterDaily
            }).exec(function(err, chuyenkhoan) {
                if (chuyenkhoan) {
                    dl.map(function(item, index) {
                        var totalFrom = 0;
                        var totalTo = 0;
                        chuyenkhoan.map(function(rs, index) {
                            if (rs && rs.from == item.nickname) {
                                totalFrom += rs && rs.red ? rs.red : 0;
                            } else if (rs && rs.to == item.nickname) {
                                totalTo += rs && rs.red ? rs.red : 0;
                            }
                        });
                        finalResult.push({
                            nickname: item.nickname,
                            totalFrom: totalFrom,
                            totalTo: totalTo
                        });
                    });

                    res.json({
                        status: 200,
                        success: true,
                        data: finalResult
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
        }
    });
};