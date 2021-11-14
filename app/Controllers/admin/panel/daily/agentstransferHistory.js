var ChuyenRed = require('../../../../Models/ChuyenRed');
module.exports = function(req, res) {
    var { userAuth, body } = req || {};
    var { Data } = body || {};
    var { fromDate, toDate, daily } = Data || {};
    var filter = {};
    if (fromDate || toDate) {
        if (!!fromDate) {
            filter.time = {
                $gte: new Date(fromDate)
            }
        }
        if (!!toDate) {
            if (filter.time) {
                filter.time.$lte = new Date(toDate)
            } else {
                filter.time = {
                    $lte: new Date(toDate)
                }
            }
        }
    }
    if (daily) {
        filter.$or = [
            { from: daily },
            { to: daily }
        ];
    }

    ChuyenRed.countDocuments(filter).exec(function(err, totals) {
        ChuyenRed.find(filter, {}, { sort: { '_id': -1 }, limit: Data.limit, skip: Data.offset }, function(err, result) {
            res.json({
                status: 200,
                success: true,
                totals: totals,
                data: result
            });
        });
    });
};