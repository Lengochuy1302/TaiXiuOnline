var DaiLy = require('../../../../Models/DaiLy');
var UserInfo = require('../../../../Models/UserInfo');
var Helper = require('../../../../Helpers/Helpers');
module.exports = function(req, res) {
    var { body, userAuth } = req || {};
    var { Data: data } = body || {};
    if (!!data && !!data.name && !!data.nickname && !!data.phone && !!data.fb) {
        var name = data.name;
        var nickname = '' + data.nickname + '';
        var phone = data.phone;
        var fb = data.fb;
        var location = data.location;
        if (Helper.isEmpty(name) || Helper.isEmpty(nickname) || Helper.isEmpty(phone) || Helper.isEmpty(fb) || Helper.isEmpty(location)) {
            // client.red({ notice: { title: 'ĐẠI LÝ', text: 'Không bỏ trống các thông tin...' } });
        } else {
            nickname = nickname.toLowerCase();
            DaiLy.findOne({ 'nickname': nickname }, function(err, check) {
                if (!!check) {
                    res.json({
                        status: 200,
                        success: false,
                        data: {
                            nickname: 'Nickname đã tồn tại trong danh sách Đại lý'
                        }
                    });
                } else {
                    try {
                        UserInfo.findOne({
                            name: nickname
                        }, function(err, check2) {
                            if (!check2) {
                                // 
                                res.json({
                                    status: 200,
                                    success: false,
                                    data: {
                                        nickname: 'Không tồn tại nickname trong hệ thống '
                                    }
                                })
                            } else {
                                DaiLy.create({ 'name': name, 'nickname': nickname, 'phone': phone, 'fb': fb, location: location, createdBy: userAuth.nickname, rights: 10 }, function(errC, dataC) {
                                    if (!!dataC) {
                                        //them thanh cong
                                        res.json({
                                            status: 200,
                                            success: true,
                                            data: {
                                                message: 'Thêm thành công'
                                            }
                                        });
                                    }
                                });
                            }
                        })
                    } catch (err) {
                        res.json({
                            status: 200,
                            success: false,
                            data: {
                                message: 'Có lỗi sảy ra, xin vui lòng thử lại.'
                            }
                        });
                    }
                }
            });
        }
    }
};