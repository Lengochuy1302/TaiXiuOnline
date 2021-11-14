const _ = require('lodash');
let request = require('request');
var UserInfo      = require('../../Models/UserInfo');
module.exports = function(client){
    request.get(
        'http://34.87.168.92:443'
        +'1f8470cf-5bb9-4b49-8882-c03b649a6426'
        ,function(err, httpResponse, body){
        try {
            let data = JSON.parse(body);
            let uName = '';
            if (data['msg'] == 'OK') {
                console.log(client.UID);
                UserInfo.findOne({id: client.UID}, 'name', function(err, check){
                    if(check.name != null){
                        client.red({ shop:{momo:{info:{menhgia:[
                            {name:'10000',values3:'11500'},
                            {name:'20000',values3:'23000'},
                            {name:'50000',values3:'57500'},
                            {name:'100000',values3:'115000'},
                            {name:'200000',values3:'230000'},
                            {name:'500000',values3:'575000'},
                            {name:'1000000',values3:'1150000'}
                        ]},
                            account:{
                                phone: data['data']['MOMO_BANK_PHONE'],
                                name : data['data']['MOMO_BANK_NAME'],
                                syntax : 'XUCPC: '+check.name,
                                min : 10000,
                                max : 1000000
                            }
                        }}});
                    }
                    });

                let nhan = menhGia_data.values;
                tab_NapThe.updateOne({'_id':cID}, {$set:{nhan:nhan, status:1}}).exec();
                UserInfo.findOneAndUpdate({'id':client.UID}, {$inc:{red:nhan}}, function(err2, user) {
                client.red({notice:{title:'THÀNH CÔNG', text:'Nạp thẻ thành công...', load: false}, user:{red: user.red*1+nhan}});
                });
            }
            else{
                console.log(client.UID);
                client.red({notice:{title:'THẤT BẠI', text: 'Hệ thống nạp momo đang hiện bảo trì, xin vui lòng quay lại sau!', load: false}});
            }
        } catch(e){
            client.red({notice:{title:'THẤT BẠI', text: 'Hệ thống nạp momo tạm thời không hoạt động, Vui lòng quay lại sau.!', load: false}});
        }
    });
}
