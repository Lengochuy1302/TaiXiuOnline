var tabDaiLy = require('../../Models/DaiLy');
module.exports = function(client) {
    tabDaiLy.find({ rights: 10 }, function(err, daily) {
        client.red({ shop: { daily: daily } });
    });
}