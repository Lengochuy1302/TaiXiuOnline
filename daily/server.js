var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var config = require('./config');
var compress = require('compression');
const fs = require('fs');
var _ = require('lodash');
const uuidv4 = require('uuid/v4')();
//read file and update version
var setting = {};
try {
    const rawSetting = fs.readFileSync(__dirname + '/settingVer.json');
    setting = JSON.parse(rawSetting);
} catch (err) {
    setting = {};
}
setting.version = uuidv4;
fs.writeFileSync(__dirname + '/settingVer.json', JSON.stringify(setting, null, 4));

app.use(compress({
    threshold: 0, //or whatever you want the lower threshold to be
    filter: function(req, res) {
        var ct = res.get('content-type')
        return true
    }
}));
var everyauth = require('everyauth');
everyauth.debug = true;
app.configure(function() {
    app.set('port', process.env.PORT || config.port);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('azure zomg'));
    app.use(express.session());
    app.use(everyauth.middleware(app));
    app.use(require('less-middleware')(path.join(__dirname, '/public')));
    app.use(express.static(path.join(__dirname, '/public')));
    app.use(express.static(__dirname + '/public'));
    app.use(app.router);
});
app.configure('development', function() {
    app.use(express.errorHandler());
});

require('./routes/init')(app);
var server = http.createServer(app);
server.listen(app.get('port'), function() {
    console.log("RED79 server listening on port " + app.get('port'));
});