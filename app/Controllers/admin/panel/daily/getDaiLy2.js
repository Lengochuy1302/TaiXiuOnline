var DaiLy = require('../../../../Models/DaiLy');
module.exports = function(req, res) {
    var { body, userAuth } = req || {};
    DaiLy.find({ createdBy: userAuth.nickname, rights: 11 }, {}, { sort: { '_id': -1 } }, function(err, data) {
        res.json({
            status: 200,
            success: true,
            data: data
        });
    });
};