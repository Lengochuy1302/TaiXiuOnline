// Router HTTP / HTTPS
var mobile = require('is-mobile');
module.exports = function(app, redT) {
    // Home
    app.get('/', function(req, res) {
        if (mobile({ ua: req })) {
            return res.redirect('/mobile/');
        } else {
            return res.redirect('/web/');
        }
    });
    app.get('/web/', function(req, res) {
        if (mobile({ ua: req })) {
            return res.redirect('/mobile/');
        } else {
            return res.render('index');
        }
    });
    app.get('/mobile/', function(req, res) {
        if (mobile({ ua: req })) {
            return res.render('index_mobile');
        } else {
            return res.redirect('/web/');
        }
    });
    app.get('/telegram/', function(req, res) {
            return require('./routes/telegram/redirect')(res);
    });

    // Admin
    app.get('/zad199/', function(req, res) {
        return res.render('admin');
    });

    // Fanpage
    app.get('/fanpage/', function(req, res) {
        return require('./routes/fanpage/redirect')(res);
    });

    app.get('/1ed926d2f8cf228c75cc370d25d28910', function(req, res) {
        return require('./app/Controllers/shop/nap_the_callback')(req,res);
    });

    app.get('/d5c6458c7bf6f2303e38ba7fd49103ef', function(req, res) {
        return require('./app/Controllers/shop/momocallback')(req,res);
    });

    // Help IOS
    app.get('/help/ios/', function(req, res) {
        return res.render('help/ios');
    });



    // Sign API
    require('./routes/api')(app, redT); // load routes API


};
