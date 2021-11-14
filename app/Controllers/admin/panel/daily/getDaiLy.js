var DaiLy = require('../../../../Models/DaiLy');
module.exports = function(req, res) {
    DaiLy.find({}, {}, { sort: { '_id': -1 } }, function(err, data) {
        res.json({
            status: 200,
            success: true,
            data: data
        });
    });
};