//server.js

require('dotenv').config();
var cors = require('cors');

let Telegram = require('node-telegram-bot-api');
let TelegramToken = '1359141283:AAEMQ-iws4XdsG0XiajuaCmBjkNKOTkfV_I';
// let TelegramToken = '1094426496:AAGdlkqAe9zjYkUhlgHK4F6DoS-fwU1fuvA';
//let TelegramToken = "1147607934:AAEsypTJsy_agatrnnmHlMNPvbNaBeB4zZM";

let TelegramBot = new Telegram(TelegramToken, { polling: true });
let express = require('express');
let app = express();
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));
let port = process.env.PORT || 80;
// port = 3000;
let expressWs = require('express-ws')(app);
let bodyParser = require('body-parser');
var morgan = require('morgan');

// Setting & Connect to the Database
let configDB = require('./config/database');
let mongoose = require('mongoose');
// mongoose.set('debug', true);

require('mongoose-long')(mongoose); // INT 64bit

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(configDB.url, configDB.options)
    .catch(function(error) {
        if (error)
            console.log('Connect to MongoDB failed', error);
        else
            console.log('Connect to MongoDB success');
    });

// kết nối tới database

// cấu hình tài khoản admin mặc định và các dữ liệu mặc định
require('./config/admin');
// đọc dữ liệu from
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));

app.set('view engine', 'ejs'); // chỉ định view engine là ejs
app.set('views', './views'); // chỉ định thư mục view

// Serve static html, js, css, and image files from the 'public' directory
app.use(express.static('public'));

// server socket
let redT = expressWs.getWss();
redT.telegram = TelegramBot;
global['redT'] = redT;
global['userOnline'] = 0;


require('./app/Helpers/socketUser')(redT); // Add function socket

require('./routerHttp')(app, redT); // load các routes HTTP
require('./routerHTTPV1')(app, redT);//load routes news
require('./routerSocket')(app, redT); // load các routes WebSocket

require('./app/Cron/taixiu')(redT); // Chạy game Tài Xỉu
require('./app/Cron/baucua')(redT); // Chạy game Bầu Cua
require('./config/Cron')();

require('./update')();

require('./app/Telegram/Telegram')(TelegramBot); // Telegram Bot

app.listen(port, function() {
    console.log("Server listen on port ", port);
});
