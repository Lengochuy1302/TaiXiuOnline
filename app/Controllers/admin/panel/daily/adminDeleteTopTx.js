var TaiXiu_user = require('../../../../Models/TaiXiu_user');

module.exports = function(req, res) {
    TaiXiu_user.updateMany({},{$set:{tLostRed:0,tRedPlay:0,tWinRed:0}},function(err,result){
     console.log(result);
     if(result.nModified > 0){
      res.json({
          status: 200,
          success: true,
          data: {
              message: 'Xoá top thành công'
          }
      });
     }else{
      res.json({
          status: 200,
          success: false,
          data: {
              message: 'Xoá top thất bại hoặc k có top'
          }
      });
     }
    })
}
