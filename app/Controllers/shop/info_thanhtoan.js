var NhaMang = require('../../Models/NhaMang');
var MenhGia = require('../../Models/MenhGia');
var _ = require('lodash');
module.exports = function(client, nap = false) {
    var find = null;
    var sort = null;
    if (!!nap) {
        find = { nap: true };
        sort = { values: 1 };
    } else {
        find = { mua: true };
        sort = { values: 1 };
    }
    var active1 = NhaMang.find(find).exec();
    var active2 = MenhGia.find(find).sort(sort).exec();

    Promise.all([active1, active2])
        .then(function(values) {
            var napData = values[1];
            // if (!!nap) {
                // napData.map(function(item, index) {
                //     if (napData[index].values_nap)
                //         napData[index].values = napData[index].values_nap;
                // });
            // }
            var data = { nhamang: values[0], menhgia: napData };
            if (!!nap) {
                client.red({ shop: { nap_red: { info: data } } });
            } else {
                client.red({ shop: { mua_the_nap: { info: data } } });
            }
        })
};
