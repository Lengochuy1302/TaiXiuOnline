var mongoose = require('mongoose');
var Daily = mongoose.model('dailies');
var UserInfo = mongoose.model('UserInfo');
var validator = require('validator');

module.exports = function(req, res) {
    const { query, userAuth } = req || {};
    let { nickname } = query || {};
    nickname = nickname.toLowerCase();
    if (!validator.isLength(nickname, { min: 3, max: 17 })) {
        res.json({
            status: 200,
            success: false,
            data: {
                nickname: 'Nickname không hợp lệ.'
            }
        });
    } else {
        Promise.all([
                UserInfo.findOne({
                    name: nickname
                }),
                Daily.findOne({
                    nickname: nickname
                })
            ])
            .then(function(response) {
                var usInfo = response[0];
                var dl = response[1];
                if (!!usInfo) {
                    if (dl && dl.level == 1) {
                        res.json({
                            status: 200,
                            success: false,
                            data: {
                                nickname: 'Không được chuyển XU cho cấp 1 khác'
                            }
                        });
                    } else if (dl && dl.level == 2 && dl.createdBy != userAuth.nickname) {
                        res.json({
                            status: 200,
                            success: false,
                            data: {
                                nickname: 'Không được chuyển XU cho cấp 2 khác nhánh của bạn'
                            }
                        });
                    } else if (nickname == userAuth.nickname) {
                        res.json({
                            status: 200,
                            success: false,
                            data: {
                                nickname: 'Không được chuyển XU cho chính mình'
                            }
                        });
                    } else {
                        res.json({
                            status: 200,
                            success: true,
                            data: {
                                message: 'Nickname hợp lệ'
                            }
                        });
                    }
                } else {
                    res.json({
                        status: 200,
                        success: false,
                        data: {
                            nickname: 'Nickname không tồn tại'
                        }
                    });
                }
            });
    }
};
