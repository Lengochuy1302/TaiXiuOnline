var GiftCode = require('../../../../Models/GiftCode');
module.exports = function(req, res) {
    const  code  = req.query.code;
    console.log(code);
    if(code){
    GiftCode.deleteOne({code:code},function(err,result){
      if(err){
       res.json({
           status: 200,
           success: false,
           data: {
               message: 'Xoá thất bại'
           }
       });
      }else{
       res.json({
           status: 200,
           success: true,
           data: {
               message: 'Xoá thành công GiftCode'
           }
       });
      }
    })
   }else {
    res.json({
        status: 404,
        success: false,
        data: {
            message: 'Lỗi'
        }
    });
   }
};
