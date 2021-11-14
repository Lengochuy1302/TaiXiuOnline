var GiftCode = require('../../../../Models/GiftCode');
var ChuyenRed = require('../../../../Models/ChuyenRed');
var NapThe = require('../../../../Models/NapThe');
var Bank_history = require('../../../../Models/Bank/Bank_history');
var UserInfo = require('../../../../Models/UserInfo');
var _ = require('lodash');
module.exports = function(req, res) {
    var { body } = req || {};
    var { Data } = body || {};
    var { nickname } = Data || {};
    UserInfo.findOne({ name: nickname }, function(err, us) {
        if (us) {
            Promise.all([
                    GiftCode.find({ uid: us.id }),
                    ChuyenRed.find({ to: nickname }),
                    NapThe.find({ uid: us.id }),
                    Bank_history.find({ uid: us.id })
                ])
                .then(function(response) {
                    var finalResult = [];
                    var gc = response[0];
                    var cr = response[1];
                    var nt = response[2];
                    var bh = response[3];
                    var total = 0;
                    if (gc) {
                        gc.map(function(item, index) {
                            finalResult.push({
                                type: 'GiftCode',
                                source: `Mã code: ${item.code}`,
                                value: item.red,
                                time: item.time
                            });
                            total += parseInt(item.red);
                        });
                    }
                    if (cr) {
                        cr.map(function(item, index) {
                            finalResult.push({
                                type: 'Chuyển Khoản',
                                source: `Nhận từ: ${item.from}, Trạng thái: ${item.report ? 'Báo Cáo' : item.freeze ? 'Đóng Băng' : 'Thành Công'}`,
                                value: item.red,
                                time: item.time
                            });
                            total += parseInt(item.red);
                        });
                    }
                    if (nt) {
                        nt.map(function(item, index) {
                            finalResult.push({
                                type: 'Nạp Thẻ',
                                source: `Mã Thẻ: ${item.maThe} Serial: ${item.seri}, Trạng Thái: ${item.status==1 ? 'Thành Công' : item.status ==0 ? 'Đang Chờ' : 'Thất Bại'}`,
                                value: item.menhGia,
                                time: item.time
                            });
                            total += parseInt(item.menhGia);
                        });

                    }
                    if (bh) {
                        bh.map(function(item, index) {
                            finalResult.push({
                                type: 'Ngân Hàng',
                                source: item.type == 1 ? `Rút tiền qua ${item.bank} STK: ${item.number} Tên: ${item.name}, Trạng Thái: ${item.status==1 ? 'Thành Công' : item.status ==0 ? 'Đang Chờ' : 'Thất Bại'}` : `Nạp tiền qua ${item.hinhthuc == 1 ? 'Internet Banking' : item.hinhthuc ==2 ? 'ATM' : 'Quầy'}, Trạng Thái: ${item.status==1 ? 'Thành Công' : item.status ==0 ? 'Đang Chờ' : 'Thất Bại'}`,
                                value: item.money,
                                time: item.time
                            });
                            total += parseInt(item.money);
                        })
                    }
                    res.json({
                        status: 200,
                        success: true,
                        data: _.sortBy(finalResult, 'time').reverse(),
                        total: total
                    })
                }, function(err) {
                    console.log('err', err);
                    res.json({
                        status: 200,
                        success: false
                    })
                })
        } else {
            res.json({
                status: 200,
                success: false
            })
        }
    })
};