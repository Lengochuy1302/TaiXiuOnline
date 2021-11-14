var ChuyenRed = require('../../../../Models/ChuyenRed');
var UserInfo = require('../../../../Models/UserInfo');
var tab_DaiLy = require('../../../../Models/DaiLy');
var OTP = require('../../../../Models/OTP');
var Phone = require('../../../../Models/Phone');

var validator = require('validator');
var Helper = require('../../../../Helpers/Helpers');

module.exports = function(req, res) {
    const { body, userAuth } = req || {}
    console.log('userAuth', userAuth);
    const { Data: data } = body || {};
    data.name = data.nickname;
    data.red = data.valueRed;
    if (!!data && !!data.name && !!data.desc) {
        if (!validator.isLength(data.name, { min: 3, max: 17 })) {
            res.json({
                status: 200,
                success: false,
                data: {
                    nickname: 'Nickname không hợp lệ.'
                }
            });
        } else {
            var red = data.red >> 0;
            var name = '' + data.name + '';

            if (validator.isEmpty(name) ||
                Math.abs(red) < 10000 ||
                name.length > 17 ||
                name.length < 3
            ) {
                res.json({
                    status: 200,
                    success: false,
                    data: {
                        message: 'Kiểm tra lại các thông tin.'
                    }
                });
            } else {

                name = name.toLowerCase();
                var active1 = tab_DaiLy.findOne({
                    $or: [
                        { nickname: name },
                        { nickname: userAuth.nickname }
                    ]
                }).exec();

                var active2 = UserInfo.findOne({ name: name }, 'id name red').exec();
                var active3 = UserInfo.findOne({ id: userAuth.id }, 'red').exec();
                Promise.all([active1, active2, active3])
                    .then(valuesCheck => {
                        var daily = valuesCheck[0];
                        var to = valuesCheck[1];
                        var user = valuesCheck[2];
                        if (!!to) {
                            if (to.id == userAuth.id) {
                                res.json({
                                    status: 200,
                                    success: false,
                                    data: {
                                        nickname: 'Bạn không thể chuyển cho chính mình.'
                                    }
                                });
                            } else {

                                var thanhTien = red;
                                var create = { 'from': userAuth.nickname, 'to': to.name, 'red': red, 'red_c': thanhTien, 'time': new Date(), message: data.desc };
                                if (void 0 !== data.message && !validator.isEmpty(data.message.trim())) {
                                    create = Object.assign(create, { message: data.message });
                                }
                                ChuyenRed.create(create, function() {
                                    res.json({
                                        status: 200,
                                        success: true,
                                        data: {
                                            message: red > 0 ? 'Cộng tiền thành công.' : 'Trừ tiền thành công.'
                                        }
                                    });
                                });
                                UserInfo.updateOne({ name: to.name }, { $inc: { red: thanhTien } }).exec();
                                if (void 0 !== redT.users[to.id]) {
                                    Promise.all(redT.users[to.id].map(function(obj) {
                                        obj.red({ notice: { title: 'CHUYỂN XU', text: `Bạn nhận được ` + Helper.numberWithCommas(thanhTien) + ' XU.' + '\n' + 'Từ Admin: ' + userAuth.nickname }, user: { red: to.red * 1 + thanhTien } });
                                    }));
                                }
                            }
                        } else {
                            res.json({
                                status: 200,
                                success: false,
                                data: {
                                    nickname: 'Người dùng không tồn tại.'
                                }
                            });
                        }
                    });
            }
        }
    }
}
