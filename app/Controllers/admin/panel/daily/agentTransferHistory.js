var ChuyenRed = require('../../../../Models/ChuyenRed');
module.exports = function(req, res) {
    var { userAuth, body } = req || {};
    var { Data } = body || {};
    ChuyenRed.countDocuments({
        $or: [
            { from: userAuth.nickname },
            { to: userAuth.nickname }
        ]
    }).exec(function(err, totals) {
        ChuyenRed.find({
            $or: [
                { from: userAuth.nickname },
                { to: userAuth.nickname }
            ]
        }, {}, { sort: { '_id': -1 }, limit: Data.limit, skip: Data.offset }, function(err, result) {
            res.json({
                status: 200,
                success: true,
                totals: totals,
                data: result
            });
        });
    });
};