var GiftCode = require('../../../../Models/GiftCode');
var moment = require('moment');
const xl = require('excel4node');
var Helper = require('../../../../Helpers/Helpers');
module.exports = function(req, res) {
    const { query, userAuth } = req || {};
    const { fromDate, toDate, trangthai, menhgia } = query || {};
    console.log('fromDate', query);
    var filter = {
        forAgent: void 0
    };
    if (fromDate || toDate) {
        if (!!fromDate && fromDate != 'null') {
            filter.date = {
                $gte: new Date(fromDate)
            }
        }
        if (!!toDate && toDate != 'null') {
            if (filter.date) {
                filter.date.$lte = new Date(toDate)
            } else {
                filter.date = {
                    $lte: new Date(toDate)
                }
            }
        }
    }
    if (trangthai == 1) {
        filter.uid = {
            $ne: void 0
        };
    } else {
        filter.uid = void 0;
    }
    if (menhgia) {
        filter.red = parseInt(menhgia)
    }

    const createSheet = () => {

        return new Promise(resolve => {

            // setup workbook and sheet
            var wb = new xl.Workbook();
            var styleHeader = wb.createStyle({
                font: {
                    size: 20,
                },
                numberFormat: '$#,##0.;',
            });
            var styleColumn = wb.createStyle({
                font: {
                    size: 15,
                },
            });
            var ws = wb.addWorksheet('Sheet');

            // Add a title row

            ws.cell(1, 1)
                .string('STT')
                .style(styleHeader)

            ws.cell(1, 2)
                .string('Mã code')
                .style(styleHeader)

            ws.cell(1, 3)
                .string('Mệnh giá')
                .style(styleHeader)

            ws.cell(1, 4)
                .string('Ngày xuất')
                .style(styleHeader)

            ws.cell(1, 5)
                .string('Ngày hết hạn')
                .style(styleHeader)

            ws.cell(1, 6)
                .string('Tình trạng')
                .style(styleHeader)

            // add data from json
            GiftCode.find(filter, {}, { sort: { '_id': -1 } }, function(err, result) {
                result = result || [];
                result.map(function(item, index) {
                    let row = index + 2;
                    ws.cell(row, 1)
                        .number(index + 1)
                        .style(styleColumn)

                    ws.cell(row, 2)
                        .string(item.code)
                        .style(styleColumn)

                    ws.cell(row, 3)
                        .string(Helper._formatMoneyVND(item.red))
                        .style(styleColumn)

                    ws.cell(row, 4)
                        .string(moment(item.date).format("DD/MM/YYYY"))
                        .style(styleColumn)

                    ws.cell(row, 5)
                        .string(moment(item.todate).format("DD/MM/YYYY"))
                        .style(styleColumn)

                    ws.cell(row, 6)
                        .string(item.uid ? 'Đã sử dụng' : 'Chưa sử dụng')
                        .style(styleColumn)
                });
                resolve(wb)
            });



        })
    }

    createSheet().then(file => {
        file.write('GiftCode.xlsx', res);
    });
};