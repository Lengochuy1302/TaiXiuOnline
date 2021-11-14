var TamHungPercent = require('../../../../Models/TamHung/TamHung_percent');
var UserInfo = require('../../../../Models/UserInfo');
module.exports = function(req, res) {
    var { userAuth, body } = req || {};
    var { Data, Get } = body || {};
    var filter = {};
    if(Get === 1){
    TamHungPercent.find({},function(err,result){
     if(err){
      res.json({
          status: 200,
          success: false,
      });
     }else {
      res.json({
          status: 200,
          success: true,
          data: result
      });
     }
    });
   }else if(Get === 2) {
    TamHungPercent.updateOne({type:Data.type},
     {$set:{
      item0:Data.item0,
      item1:Data.item1,
      item2:Data.item2,
      item3:Data.item3,
      item4:Data.item4,
      item5:Data.item5,
      item6:Data.item6,
     }}
     ,function(err,result){
     if(err){
      res.json({
          status: 200,
          success: false,
      });
     }else {
      res.json({
          status: 200,
          success: true,
          data: {
              message: 'Update Thanh Cong'
          }
      });
     }
    });
   }else{
    res.json({
        status: 200,
        success: false,
    });
   }
};
