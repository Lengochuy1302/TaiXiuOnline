var NapThe = require('../../../../Models/NapThe');
var MuaThe = require('../../../../Models/MuaThe');
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
    Promise.all([
            NapThe.find(filter),
            MuaThe.find(filter)
        ])
        .then(function(response) {
            var obj = {
                nap: 0,
                mua: 0
            };
            var nap = response[0];
            var mua = response[1];
            if (nap) {
                nap.map(function(item, index) {
                    obj.nap += item.menhGia;
                });
            }
            if (mua) {
                mua.map(function(item, index) {
                    obj.mua += item.soLuong * item.Cost;
                });
            }
            res.json({
                status: 200,
                success: true,
                data: obj
            });
        }, function(err) {
            console.log('err', err);
            res.json({
                status: 200,
                success: false
            });
        });
};