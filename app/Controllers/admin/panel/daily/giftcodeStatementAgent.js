var GiftCode = require('../../../../Models/GiftCode');
var moment = require('moment');
module.exports = function(req, res) {
    const { body, userAuth } = req || {};
    const { Data } = body || {};
    console.log(Data);
    const { fromDate, toDate } = Data || {};
    var filter = {
        forAgent: userAuth.nickname,
    };
    if (!!fromDate) {
        filter.date = {
            $gte: new Date(fromDate)
        };
    }
    if (!!toDate) {
        if (!!fromDate) {
            filter.date.$lte = new Date(toDate)
        } else {
            filter.date = {
                $lte: new Date(toDate)
            };
        }
    }
    GiftCode.find(filter)
        .exec(function(err, result) {
            var objFinal = {
                10000: {
                    totalUse: 0,
                    totalAvailable: 0,
                    totalMoneyUse: 0,
                    total: 0
                },
                20000: {
                    totalUse: 0,
                    totalAvailable: 0,
                    totalMoneyUse: 0,
                    total: 0
                },
                50000: {
                    totalUse: 0,
                    totalAvailable: 0,
                    totalMoneyUse: 0,
                    total: 0
                },
                100000: {
                    totalUse: 0,
                    totalAvailable: 0,
                    totalMoneyUse: 0,
                    total: 0
                },
                200000: {
                    totalUse: 0,
                    totalAvailable: 0,
                    totalMoneyUse: 0,
                    total: 0
                },
                500000: {
                    totalUse: 0,
                    totalAvailable: 0,
                    totalMoneyUse: 0,
                    total: 0
                },
                totalUse: 0,
                total: 0,
                totalMoneyUse: 0,
                totalAvailable: 0
            };
            if (result) {
                result.map((item, index) => {
                    objFinal[item.red].total++;
                    objFinal.total++;
                    if (item.uid) {
                        objFinal.totalUse++;
                        objFinal.totalMoneyUse += item.red;
                        objFinal[item.red].totalMoneyUse++;
                        objFinal[item.red].totalMoneyUse += item.red;
                    } else {
                        objFinal[item.red].totalAvailable++;
                        objFinal.totalAvailable++;
                    }
                });
            }
            res.json({
                status: 200,
                success: true,
                data: objFinal
            });
        })
}