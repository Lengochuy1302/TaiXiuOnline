var DaiLy = require('../../../../Models/DaiLy');
module.exports = function(req, res) {
    var { query } = req || {};
    var { id } = query || {};
    if (!!id) {
        DaiLy.findOne({ '_id': id }, function(err, data) {
            if (data) {
                var active = DaiLy.findOneAndRemove({ '_id': id }).exec();
                Promise.all([active])
                    .then(values => {
                        DaiLy.find({}, {}, { sort: { '_id': -1 } }, function(err, data) {
                            res.json({
                                status: 200,
                                success: true,
                                data: {
                                    message: 'Xoá thành công'
                                }
                            });
                        });
                    });
            } else {
                res.json({
                    status: 200,
                    success: false,
                    data: {
                        message: 'Đại lý không tồn tại'
                    }
                });
            }
        });
    }
};