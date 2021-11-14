var GiftCode = require('../../../../Models/GiftCode');
var moment = require('moment');
module.exports = function(req, res) {
    const { body, userAuth } = req || {};
    const { Data } = body || {};
    const { fromDate, toDate, trangthai, menhgia } = Data || {};
    console.log('trangthai', trangthai);
    var filter = {
        forAgent: void 0
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
    if (trangthai == 1) {
        filter.uid = {
            $ne: void 0
        };
    } else if (trangthai == 2) {
        filter.uid = void 0;
    }
    if (menhgia && menhgia != '') {
        filter.red = parseInt(menhgia)
    }
    console.log('filter', filter);
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