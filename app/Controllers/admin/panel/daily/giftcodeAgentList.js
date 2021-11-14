var GiftCode = require('../../../../Models/GiftCode');
var moment = require('moment');
module.exports = function(req, res) {
    const { body, userAuth } = req || {};
    const { Data } = body || {};
    const { fromDate, toDate, amount, status } = Data || {};
    var filter = {
        forAgent: userAuth.nickname
    };
    if (fromDate || toDate) {
        if (!!fromDate) {
            filter.date = {
                $gte: new Date(fromDate)
            }
        }
        if (!!toDate) {
            if (filter.date) {
                filter.date.$lte = new Date(toDate)
            } else {
                filter.date = {
                    $lte: new Date(toDate)
                }
            }
        }
    }
    if (parseInt(status) == 1) {
        filter.uid = {
            $ne: null
        }
    } else {
        filter.uid = null;
    }
    if (amount) {
        filter.red = parseInt(amount);
    }
    GiftCode.countDocuments(filter).exec(function(err, totals) {
        GiftCode.find(filter, {}, { sort: { '_id': -1 }, limit: Data.limit, skip: Data.offset }, function(err, result) {
            res.json({
                status: 200,
                success: true,
                totals: totals,
                data: result
            });
        });
    });
};