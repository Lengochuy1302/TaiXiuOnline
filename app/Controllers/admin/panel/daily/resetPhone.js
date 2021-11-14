var UserInfo = require('../../../../Models/UserInfo');
var Phones = require('../../../../Models/Phone');
module.exports = function(req, res) {
    var { query } = req || {};
    var { id } = query || {};
    UserInfo.updateOne({id:id},{ $set: { 'email': '','cmt':'','otpFirst':false }}, function(err,result) {
     Phones.deleteOne({uid:id},function(err,result){
      if (!err) {
          res.json({
              status: 200,
              success: true
          });
      } else {
          res.json({
              status: 200,
              success: false
          });
      }
     })
    })
};
