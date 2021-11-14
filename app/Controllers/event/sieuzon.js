let UserInfo = require("../../Models/UserInfo");
let replaceNameStr = function(name){
  let nameReplace = name;
  let nameMiddle = nameReplace.length/2>>0;
  for(var i = nameMiddle-2; i< nameMiddle+2;i++){
   console.log(i);
   nameReplace = nameReplace.replaceAt(i,"*");
  }
  console.log(nameReplace);
  return nameReplace;
}
let hideAll = function(point){
  let pointR = point;
  for(var i = 0; i< pointR.length;i++){
   pointR = pointR.replaceAt(i,"*");
  }
  return pointR;
}
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
module.exports = function(client){
 console.log("---vaooooo"+client.UID);
  UserInfo.findOne({id: client.UID},'redPlay name',function(err,user){
     if(!!user){
       UserInfo.countDocuments({redPlay : {$gt : user.redPlay}},function(err,count){
        var data = new Object();
        data.sieuzon = new Object();
        data.sieuzon.user = new Object();
        data.sieuzon.user.UserRank = count+1;
        data.sieuzon.user.VipPoint = user.redPlay/1000000>>0;
        data.sieuzon.top = [];
        UserInfo.find().sort({redPlay:-1}).limit(20).then(result =>{
         if(!!result){
          result.forEach((item, i) => {
           if(i < 3){
           var topInfo = new Object();
           topInfo.Name = hideAll(item.name);
           topInfo.VipPoint = hideAll(String(item.redPlay/1000000>>0));
           data.sieuzon.top.push(topInfo);
          }else {
           var topInfo = new Object();
           topInfo.Name = item.name;
           topInfo.VipPoint = String(item.redPlay/1000000>>0);
           data.sieuzon.top.push(topInfo);
          }
          });
          console.log(data);
          client.red(data);
         }
        });
       });
     }
  });
}
