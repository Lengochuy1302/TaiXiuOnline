var UserInfo = require('../../../../Models/UserInfo');
module.exports = function(req, res) {
    var { userAuth } = req || {};
    console.log("userAuth", userAuth);
    UserInfo.findOne({
        id: userAuth.id
    }, function(err, result) {
        res.json({
            status: 200,
            success: true,
            data: result ? result.red : 0
        });
    });
};