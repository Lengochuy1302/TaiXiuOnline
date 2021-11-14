var Admin = require('../../Models/Admin');

var validator = require('validator');
var Helper = require('../../Helpers/Helpers');
module.exports = function(req, res) {
    var { Data } = req.body || {};
    var { userAuth } = req || {};
    if (!!Data && !!Data.oldPass && !!Data.newPass && !!Data.confirmPass) {
        if (!validator.isLength(Data.oldPass, { min: 6, max: 32 })) {
            res.json({
                status: 200,
                success: false,
                data: {
                    oldPass: 'Độ dài mật khẩu từ 6 đến 32 ký tự !!'
                }
            });
        } else if (!validator.isLength(Data.newPass, { min: 6, max: 32 })) {
            res.json({
                status: 200,
                success: false,
                data: {
                    newPass: 'Độ dài mật khẩu từ 6 đến 32 ký tự !!'
                }
            });
        } else if (!validator.isLength(Data.confirmPass, { min: 6, max: 32 })) {
            res.json({
                status: 200,
                success: false,
                data: {
                    confirmPass: 'Độ dài mật khẩu từ 6 đến 32 ký tự !!'
                }
            });
        } else if (Data.oldPass == Data.newPass) {
            res.json({
                status: 200,
                success: false,
                data: {
                    newPass: 'Mật khẩu mới không được trùng với mật khẩu cũ.!!'
                }
            });
            client.red({ notice: { title: 'LỖI', text: '' } });
        } else if (Data.newPass != Data.confirmPass) {
            res.json({
                status: 200,
                success: false,
                data: {
                    confirmPass: 'Nhập lại mật khẩu không đúng!!'
                }
            });
        } else {
            Admin.findOne({ '_id': userAuth.id }, function(err, user) {
                if (user !== null) {
                    if (Helper.validPassword(Data.oldPass, user.password)) {
                        Admin.updateOne({ '_id': userAuth.id }, { $set: { 'password': Helper.generateHash(Data.newPass) } }).exec();
                        res.json({
                            status: 200,
                            success: true,
                            data: {
                                message: 'Đổi mật khẩu thành công.'
                            }
                        });
                    } else {
                        res.json({
                            status: 200,
                            success: false,
                            data: {
                                oldPass: 'Mật khẩu cũ không đúng.'
                            }
                        });
                    }
                }
            });
        }
    }
};