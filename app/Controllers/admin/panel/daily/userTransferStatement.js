var ChuyenRed = require('../../../../Models/ChuyenRed');
var DaiLy = require('../../../../Models/DaiLy');
var Admin = require('../../../../Models/Admin');

module.exports = function(req, res) {
    var { userAuth, body } = req || {};
    var { Data } = body || {};
    var { fromDate, toDate } = Data || {};
    var filter = {};
    if (!!fromDate || !!toDate) {
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
    DaiLy.find({}, function(err, ag) {
        var arrAG = [];
        if (ag) {
            arrAG = ag.map(function(item, index) {
                return item.nickname;
            });
        }
        
        Admin.find({}, function(err, ad) {
            if (ad) {
                ad.map(function(item, index) {
                    arrAG.push(item.username);
                })
            }
            ChuyenRed.find(filter, function(err, result) {
                var final = { send: 0, receive: 0, fee: 0 }
                result.map(function(item, index) {
                    if (arrAG.indexOf(item.from) == -1) {
                        final.send += item.red;
                        final.receive += item.red_c;
                        final.fee += item.red - item.red_c;
                    }
                });
                res.json({
                    status: 200,
                    success: true,
                    data: final
                });
            });
        });
    });
};