var GiftCode = require('../../../../Models/GiftCode');
var Helper = require('../../../../Helpers/Helpers');

module.exports = function(req, res) {
    const { body } = req || {}
    const { Data } = body || {}
    var { daily, menhgia, soluong, ngaythang } = Data || {};
    var voucher_codes = require('voucher-code-generator');
    menhgia = parseInt(menhgia);
    soluong = parseInt(soluong);
    var ngaythangSp = ngaythang.split('-');
    var nam = parseInt(ngaythangSp[0]);
    var thang = parseInt(ngaythangSp[1]);
    var ngay = parseInt(ngaythangSp[2]);
    console.log(ngay+'-'+thang+'-'+nam)
    var rawData = [];
    var code = voucher_codes.generate({
        length: 12,
        count: soluong,
        charset: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    });
    for (var i = 0; i < soluong; i++) {
        rawData.push({
            'code': code[i],
            'red': menhgia,
            'xu': 100000,
            'type': 'GC001',
            'date': new Date(),
            'todate': new Date(nam, thang-1, ngay),
            'forAgent': daily,
            'uid': null
        });
    }

    GiftCode.insertMany(rawData)
        .then(function(mongooseDocuments) {
            res.json({
                status: 200,
                success: true,
                data: {
                    message: `Xuất ${soluong} GiftCode Mệnh giá ${Helper._formatMoneyVND(menhgia)} ${daily ? `cho Đại lý ${daily}` : ''} thành công.`
                }
            })
        })
        .catch(function(err) {
            res.json({
                status: 200,
                success: false,
                data: {
                    message: 'Tạo GiftCode thất bại.'
                }
            })
        });
}
