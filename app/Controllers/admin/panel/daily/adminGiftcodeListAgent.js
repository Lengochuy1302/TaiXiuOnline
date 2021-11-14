var GiftCode = require('../../../../Models/GiftCode');
var moment = require('moment');
module.exports = function(req, res) {
    const { body, userAuth } = req || {};
    const { Data } = body || {};
    const { fromDate, toDate, daily } = Data || {};
    var filter = {

    };
    if (daily) {
        filter.forAgent = daily;
    } else {
        filter.forAgent = {
            $ne: void 0
        };
    }
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