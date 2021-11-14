let tab_NapThe = require('../../Models/NapThe');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";
module.exports = function (req, res) {
    //fs.readFile(path.dirname(path.dirname(__dirname)) + '/config/sys.json', 'utf8', (err, data)=>{
    let nhan = req.query.menhGiaThuc;
    var nhanInt = parseInt(nhan);
    nhanInt = nhanInt + nhanInt * 0.1;
    let status = req.query.status;
    let requestId = req.query.requestId;
    let clientUID = '';
    console.log("Server the tra ve " + requestId + "trang thai" + status + "thuc nhan duoc " + nhan);
    if (status == 'success') {
        tab_NapThe.updateOne({ 'requestId': requestId }, { $set: { nhan: nhanInt, status: 1 } }).exec();
        tab_NapThe.findOne({ 'requestId': requestId }, function (err, result) {
            if (err) throw err;
            if (result != null) {
                console.log(result.uid);
                clientUID = result.uid;
            }
        });
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("admin");
            dbo.collection("userinfos").findOneAndUpdate({'id':clientUID}, {$inc:{red:nhanInt}},function(err,result){
                if(err) throw err;
                console.log(' nhan duoc '+ nhanInt);
                db.close();
            });
          });
    }
    else {
        tab_NapThe.updateOne({ 'requestId': requestId }, { $set: { nhan: 0, status: 2 } }).exec();
    }
    res.sendStatus(200);
}