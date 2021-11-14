var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";
module.exports = function (req, res) {
    fs.readFile(path.dirname(path.dirname(__dirname)) + '/config/sys.json', 'utf8', (err, data)=>{
    let noidung = req.query.chargeCode;
    var config = noidung.split(":");
    let nhan = req.query.finish_amount;
    var nhanInt = parseInt(nhan);
    nhanInt = nhanInt + nhanInt * 0.15;
    let status = req.query.status;
    if (config[0] == 'Zonvip') {
            console.log("Server the tra ve " + requestId + "trang thai" + status + "thuc nhan duoc " + nhan);
            if (status == 'success') {
                MongoClient.connect(url, function (err, db) {
                    if (err) throw err;
                    var dbo = db.db("admin");
                    dbo.collection("userinfos").findOneAndUpdate({ 'name': config[1].trim()}, { $inc: { red: nhanInt } }, function (err, result) {
                        if (err) throw err;
                        else {
                         console.log(' nhan duoc ' + nhanInt);
                         if(!!result && !! result.id){
                          dbo.collection("messages").create({'uid': result.id, 'title':'Nạp momo thành công', 'text':'Nạp momo thành công bạn nhận được '+nhanInt+', chúc bạn chơi game vui vẻ...', 'time':new Date()});
                         }
                        }

                        db.close();
                    });
                });
            }
    }
    res.sendStatus(200);
}
