var RequestService = require('../../Helpers/RequestService');
var epbankConfig = {
    urlSend: 'https://epbank.vn/Api/cardv2/insert',
    userkey: '50b2ae84e5125730ac64847443af3307',
    apitype: 1, //nap nhanh
};
var { urlSend, userkey, apitype } = epbankConfig || {};
module.exports = {
    Make: function(data) {
        return new Promise(function(resolve, reject) {
            if (data) {
                var { type, code, serial, cost } = data || {};
                var params = {
                    type: type,
                    cost: cost,
                    pin: code,
                    serial: serial,
                    userkey: userkey,
                    apitype: apitype
                };
                console.log('params', params);
                //set params for user
                RequestService.Post({
                        url: urlSend,
                        formData: params
                    })
                    .then(function(dataResponse) {
                        console.log('dataResponse on make', dataResponse);
                        resolve(dataResponse);
                    }, function(err) {
                        reject(400);
                    });
            } else {
                reject(400);
                console.log('PARAMS IS EMPTY');
            }
        });
    }
};