var DaiLy = require('../../../../Models/DaiLy');
var UserInfo = require('../../../../Models/UserInfo');
var Helper = require('../../../../Helpers/Helpers');
module.exports = function(req, res) {
    var { body, userAuth } = req || {};
    var { Data: data } = body || {};
    if (!!data.nickname) {
        var nickname = data.nickname;
        if (Helper.isEmpty(nickname)) {
            res.json({
                status: 200,
                success: false,
                data: {
                    nickname: 'Vui lòng nhập Nickname'
                }
            });
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
                                DaiLy.create({ 'nickname': nickname, createdBy: userAuth.nickname, rights: 11, createdDate: new Date() }, function(errC, dataC) {
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