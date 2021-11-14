const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var Admin = require('../../Models/Admin');
var Users = require('../../Models/Users');
var config = require('../../../config');
var UserInfo = require('../../Models/UserInfo');
var DaiLy = require('../../Models/DaiLy');
var OTP = require('../../Models/OTP');
var Phone    = require('../../Models/Phone');
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1127369467:AAE-36kXgGhmCDC9f7nKbHVSlq-hFhx1EAM';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

var secret = config.secret;
module.exports = function(req, res) {
    var Data = req.body.Data || {};
    var username = Data.username;
    username = username ? username.toLowerCase() : username;
    var password = Data.password;
    var errors = {};


    Promise.all([
            Admin.findOne({ 'username': username }),
            Users.findOne({ 'local.username': username })
        ])
        .then(response => {
                        //console.log("");
                        //console.log(response);
                        //console.log("");

            var admin = response[0];
            var user = response[1];

            if(admin == null && user == null) {
                errors.username = "Không tìm thấy tài khoản phù hợp";
                return res.json({
                    status: 201,
                    data: errors
                });
            }else {
                var lastInfo = admin ? admin : user.local;
            }


            if (lastInfo == false) {
                errors.username = "Tài khoản không tồn tại";
                return res.json({
                    status: 201,
                    data: errors
                });
            } else {



                if (admin) {

                        bcrypt.compare(password, lastInfo.password)
                            .then(isMatch => {
                                if (isMatch) {
                                    const payload = {
                                        id: lastInfo._id,
                                        name: admin.username,
                                        nickname: admin.username,
                                        rights: lastInfo.rights
                                    };
                                    jwt.sign(payload, secret, { expiresIn: 36000 * 24 },
                                        (err, token) => {
                                            if (err)
                                                res.json({
                                                    status: 500,
                                                    data: err
                                                })
                                            res.json({
                                                success: true,
                                                token: `${token}`,
                                                data: {
                                                    username: lastInfo.username,
                                                    rights: lastInfo.rights,
                                                    regDate: lastInfo.regDate,
                                                    nickname: lastInfo.username
                                                }
                                            });
                                        });
                                } else {
                                    errors.password = "Thông tin đăng nhập không chính xác";
                                    res.json({
                                        status: 400,
                                        data: errors
                                    })
                                }
                            })


                } else {

                        UserInfo.findOne({
                            id: user._id
                        }).then(function(userInfo) {
                            if (userInfo) {
                                DaiLy.findOne({
                                    nickname: userInfo.name
                                })
                                    .then(function(daili) {
                                        if (daili) {
                                            bcrypt.compare(password, lastInfo.password)
                                                .then(isMatch => {
                                                    if (isMatch) {
                                                        const payload = {
                                                            id: lastInfo._id,
                                                            name: lastInfo.username,
                                                            rights: daili.rights,
                                                            nickname: userInfo.name,
                                                            id: user._id
                                                        };
                                                        jwt.sign(payload, secret, { expiresIn: 36000 * 24 },
                                                            (err, token) => {
                                                                if (err)
                                                                    res.json({
                                                                        status: 500,
                                                                        data: err
                                                                    });
                                                                res.json({
                                                                    success: true,
                                                                    token: `${token}`,
                                                                    data: {
                                                                        username: lastInfo.username,
                                                                        regDate: lastInfo.regDate,
                                                                        rights: daili.rights,
                                                                        nickname: userInfo.name,
                                                                        id: user._id
                                                                    }
                                                                });
                                                            });
                                                    } else {
                                                        errors.password = "Thông tin đăng nhập không chính xác";
                                                        res.json({
                                                            status: 400,
                                                            data: errors
                                                        })
                                                    }
                                                });
                                        } else {
                                            errors.username = "Bạn không có quyền Truy cập";
                                            return res.json({
                                                status: 403,
                                                data: errors
                                            });
                                        }
                                    });
                            } else {
                                errors.username = "Tài khoản không tồn tại";
                                return res.json({
                                    status: 201,
                                    data: errors
                                });
                            }
                        })

                }
            }
        });
};
