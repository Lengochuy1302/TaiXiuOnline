// const fileIndex = 'index';
const fileIndex = 'maintenance';
// var functions = require('../functions');

module.exports = function(app) {
    // app.get('/blog', function (req, res) {
    //     var fileIndex = 'blog'
    //     var objStatus = functions.checkStatusMaintaince();
    //     functions.resView(req, res, fileIndex, objStatus)
    // });
    // app.get('/getCode' , function(req, res){
    //     res.json(200)
    // })
    app.get('*', function(req, res) {
        res.render("index", { locals: { title: "AGENT", version: 1.0 } });
    });
}