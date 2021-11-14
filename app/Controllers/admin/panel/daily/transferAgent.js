var ChuyenRed = require('../../../../Models/ChuyenRed');
var UserInfo = require('../../../../Models/UserInfo');
var tab_DaiLy = require('../../../../Models/DaiLy');
var OTP = require('../../../../Models/OTP');
var Phone = require('../../../../Models/Phone');

var validator = require('validator');
var Helper = require('../../../../Helpers/Helpers');
var nTmux = require('node-tmux');
var fs = require('fs');

module.exports = function(req, res) {

    const { body, userAuth } = req || {}
    const { Data: data } = body || {};
    data.name = data.nickname;
    data.red = data.valueRed;
    if (!!data && !!data.name && !!data.otp) {
        if (!validator.isLength(data.name, { min: 3, max: 17 })) {
            res.json({
                status: 200,
                success: false,
                data: {
                    nickname: 'Nickname không hợp lệ.'
                }
            });
        } else if (!validator.isLength(data.otp, { min: 4, max: 6 })) {
            res.json({
                status: 200,
                success: false,
                data: {
                    otp: 'Mã OTP không hợp lệ.'
                }
            });
        } else {
            var red = data.red >> 0;
            var name = '' + data.name + '';
            var otp = data.otp;

            if (validator.isEmpty(name) ||
                red < 10000 ||
                name.length > 17 ||
                name.length < 3 ||
                otp.length != 6) {
                res.json({
                    status: 200,
                    success: false,
                    data: {
                        message: 'Kiểm tra lại các thông tin.'
                    }
                });
            } else {
                Phone.findOne({ 'uid': userAuth.id }, {}, function(err, check) {
                    if (check) {
                        OTP.findOne({ 'uid': userAuth.id, 'phone': check.phone }, {}, { sort: { '_id': -1 } }, function(err, data_otp) {
                            if (data_otp && otp == data_otp.code) {
                                if (((new Date() - Date.parse(data_otp.date)) / 1000) > 180 || data_otp.active) {
                                    res.json({
                                        status: 200,
                                        success: false,
                                        data: {
                                            otp: 'Mã OTP đã hết hạn.'
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
                                                    if (user == null || (user.red - 10000 < red)) {
                                                        res.json({
                                                            status: 200,
                                                            success: false,
                                                            data: {
                                                                message: 'Số dư không khả dụng.'
                                                            }
                                                        });
                                                    } else {

                                                        var thanhTien = !!daily ? red : Helper.anPhanTram(red, 1, 2);
                                                        var create = { 'from': userAuth.nickname, 'to': to.name, 'red': red, 'red_c': thanhTien, 'time': new Date(), message: data.desc };
                                                        if (void 0 !== data.message && !validator.isEmpty(data.message.trim())) {
                                                            create = Object.assign(create, { message: data.message });
                                                        }
                                                        ChuyenRed.create(create);
                                                        UserInfo.updateOne({ name: to.name }, { $inc: { red: thanhTien } },function(err,result){
                                                         if(!!result){
                                                          if (void 0 !== redT.users[to.id]) {
                                                              Promise.all(redT.users[to.id].map(function(obj) {
                                                                  obj.red({ notice: { title: 'CHUYỂN XU', text: 'Bạn nhận được ' + Helper.numberWithCommas(thanhTien) + ' XU.' + '\n' + 'Từ người chơi: ' + userAuth.nickname }, user: { red: to.red * 1 + thanhTien } });
                                                              }));
                                                          }
                                                          UserInfo.findOneAndUpdate({ id: userAuth.id },{ $inc: { red: -red } },
                                                          function(err,result){
                                                           nTmux.tmux().then(tm => {
                                                              tm.writeInput("tele","dialog_list",true);
                                                              setTimeout(() => {
                                                              tm.writeInput("tele","msg "+userAuth.nickname+" "+"'",false);
                                                              setTimeout(() => {
                                                              tm.writeInput("tele","XU-So Du Thay Doi:",false);
                                                              setTimeout(() => {
                                                              tm.writeInput("tele",'\\n',false);
                                                              setTimeout(() => {
                                                              tm.writeInput("tele","GIAM: "+Helper.numberWithCommas(red)+" - So Du Cuoi "+Helper.numberWithCommas(result.red - red),false);
                                                              setTimeout(() => {
                                                              tm.writeInput("tele",'\\n',false);
                                                              setTimeout(() => {
                                                              tm.writeInput("tele","Ly Do: Chuyen XU Toi User : "+to.name,false);
                                                              setTimeout(() => {
                                                              tm.writeInput("tele",'\\n',false);
                                                              setTimeout(() => {
                                                               var time = new Date().toLocaleString("en-US", {timeZone: "Asia/Saigon"});
                                                                 time = new Date(time);
                                                              tm.writeInput("tele","Thoi Gian:"+time.toLocaleString()+"'",true);
                                                             },10);
                                                             },10);
                                                             },10);
                                                             },10);
                                                             },10);
                                                             },10);
                                                             },10);
                                                             },10);

                                                           }).catch(() => {
                                                           });
                                                          })
                                                          OTP.updateOne({ '_id': data_otp._id.toString() }, { $set: { 'active': true } }).exec();
                                                          res.json({
                                                              status: 200,
                                                              success: true,
                                                              data: {
                                                                  message: 'Giao dịch thành công.'
                                                              }
                                                          });
                                                         }
                                                         else {
                                                          console.log(err);
                                                         }
                                                        });
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
                                        })
                                }
                            } else {
                                res.json({
                                    status: 200,
                                    success: false,
                                    data: {
                                        otp: 'Mã OTP Không đúng.'
                                    }
                                });
                            }
                        });
                    } else {
                        res.json({
                            status: 200,
                            success: false,
                            data: {
                                message: 'Chức năng chỉ dành cho tài khoản đã kích hoạt.'
                            }
                        });
                    }
                });
            }
        }
    }
}
