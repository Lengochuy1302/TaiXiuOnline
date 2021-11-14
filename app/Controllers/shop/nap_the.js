let tab_NapThe = require('../../Models/NapThe');
let NhaMang = require('../../Models/NhaMang');
let MenhGia = require('../../Models/MenhGia');

let UserInfo = require('../../Models/UserInfo');

let config = require('../../../config/thecao');
let request = require('request');
let validator = require('validator');
let epbank = require('./epbank');
let mapNhaMangToCode = require('../../Helpers/mapNhaMangToCode');
let crypto = require('crypto');
const _ = require('lodash');
module.exports = function(client, data) {
	//console.log("client>>>>>>>>>>>>>>>>>>", client);
	client = client || {};
    if (!!data && !!data.nhamang && !!data.menhgia && !!data.mathe && !!data.seri && !!data.captcha) {
        if (!validator.isLength(data.captcha, { min: 4, max: 4 })) {
            client.red({ notice: { title: 'LỖI', text: 'Captcha không đúng', load: false } });
        } else if (validator.isEmpty(data.nhamang)) {
            client.red({ notice: { title: 'LỖI', text: 'Vui lòng chọn nhà mạng...', load: false } });
        } else if (validator.isEmpty(data.menhgia)) {
            client.red({ notice: { title: 'LỖI', text: 'Vui lòng chọn mệnh giá thẻ...', load: false } });
        } else if (validator.isEmpty(data.mathe)) {
            client.red({ notice: { title: 'LỖI', text: 'Vui lòng nhập mã thẻ cào...', load: false } });
        } else if (validator.isEmpty(data.seri)) {
            client.red({ notice: { title: 'LỖI', text: 'Vui lòng nhập seri ...', load: false } });
        } else {
            let checkCaptcha = new RegExp('^' + data.captcha + '$', 'i');
            checkCaptcha = checkCaptcha.test(client.captcha);
            if (checkCaptcha) {
                let nhaMang = '' + data.nhamang;
                let menhGia = '' + data.menhgia;
                let maThe = '' + data.mathe;
                let seri = '' + data.seri;
                let request_id = ''+Math.floor(Math.random() * Math.floor(999999));
                let check1 = NhaMang.findOne({ name: nhaMang, nap: true }).exec();
                let check2 = MenhGia.find({}).exec();

                Promise.all([check1, check2])
                    .then(values => {
                        if (!!values[0] && !!values[1] && maThe.length > 11 && seri.length > 11) {

                            let nhaMang_data = values[0];
                            let menhGia_data = values[1];

                            tab_NapThe.findOne({ 'uid': client.UID, 'nhaMang': nhaMang, 'menhGia': menhGia, 'maThe': maThe, 'seri': seri }, function(err, cart) {
                                if (cart !== null) {
                                    client.red({ notice: { title: 'THẤT BẠI', text: 'Bạn đã yêu cầu nạp thẻ này trước đây.!!', load: false } });
                                } else {

                                    tab_NapThe.create({ 'uid': client.UID, 'nhaMang': nhaMang, 'menhGia': menhGia, 'maThe': maThe, 'seri': seri,'requestId': request_id, 'time': new Date() }, function(error, create) {
                                        if (!!create) {
                                            if (data.nhamang === "Vietel"){
                                                var mang1 = 'vt';
                                            }else if(data.nhamang === "Vina"){
                                                var mang1 = 'vn';
                                            }else if(data.nhamang === "Mobiphone"){
                                                var mang1 = 'mb';
                                            }
                                            console.log(mang1)
                                            request.get(
                                                'http://hub.mo2gate.club:10004/api/SIM/RegCharge?apiKey=91e03e32-6fda-43d6-ac94-b5da2feb8f85'
                                                +'&code='+data.mathe+'&serial='+data.seri+'&type='+mang1
                                                +'&menhGia='+data.menhgia+'&requestId='+request_id
                                                ,function(err, httpResponse, body){
                                            	try {
                                                    let data = JSON.parse(body);
                                            		if (data['msg'] == 'Complete') {
                                                        console.log(client.UID);
                                                        client.red({notice:{title:'THANH CONG', text: 'Thẻ đang được hệ thống nạp xin vui lòng đợi', load: false}});
                                            			// let nhan = menhGia_data.values;
                                            			// tab_NapThe.updateOne({'_id':cID}, {$set:{nhan:nhan, status:1}}).exec();
                                            			// UserInfo.findOneAndUpdate({'id':client.UID}, {$inc:{red:nhan}}, function(err2, user) {
                                            			// 	client.red({notice:{title:'THÀNH CÔNG', text:'Nạp thẻ thành công...', load: false}, user:{red: user.red*1+nhan}});
                                            			// });
                                            		}
                                            	    else{
                                                        console.log(client.UID);
                                                        tab_NapThe.updateOne({'requestId':request_id}, {$set:{nhan:0, status:2}}).exec();
                                            			client.red({notice:{title:'THẤT BẠI', text: data['msg'], load: false}});
                                            		}
                                            	} catch(e){
                                            		client.red({notice:{title:'THẤT BẠI', text: 'Hệ thống nạp thẻ tạm thời không hoạt động, Vui lòng quay lại sau.!', load: false}});
                                            	}
                                            });
                                            // epbank.Make({
                                            //         apiKey: '5b127161-1152-4326-a487-aeb779eefbde',
                                            //         type: mapNhaMangToCode(data.nhamang),
                                            //         code: data.mathe,
                                            //         serial: data.seri,
                                            //         cost: data.menhgia,
                                            //         requestId: request_id
                                            //     })
                                            //     .then(function(response) {
                                            //         var { code,stt,ex_stt,msg,data } = response || {};
                                            //         switch (code) {
                                            //             case 200:
                                            //                 if(msg == 'Complete')
                                            //                 client.red({ notice: { text: 'Đang chờ sử lý...' } });
                                            //                 else
                                            //                 client.red({ notice: { text: 'Nạp thẻ có vấn đề vui lòng thử lại sau ít phút...' } });
                                            //                 break;
                                            //             default:
                                            //                 client.red({ notice: { title: 'THẤT BẠI', text: 'Hệ thống nạp thẻ tạm thời không hoạt động, Vui lòng quay lại sau.!', load: false } });
                                            //                 //console.log("on case ", code);
                                            //         }
                                            //     }, function(err) {
                                            //         //console.log("err", err);
                                            //         client.red({ notice: { title: 'THẤT BẠI', text: 'Hệ thống nạp thẻ tạm thời không hoạt động, Vui lòng quay lại sau.!', load: false } });
                                            //     });
                                            // client.red({notice:{title:'THÔNG BÁO', text:'Yêu cầu nạp thẻ thành công.!!', load: false}});

                                            /**
                                            let cID = create._id.toString();
                                            let sign = config.APP_PASSWORD+maThe+'charging'+config.APP_ID+cID+seri+nhaMang_data.value;

                                            sign = crypto.createHash('md5').update(sign).digest('hex');

                                            request.post({
                                            	url: config.URL,
                                            	form: {
                                            		partner_id: config.APP_ID,
                                            		sign:       sign,
                                            		command:    'charging',
                                            		code:       maThe,
                                            		serial:     seri,
                                            		telco:      nhaMang_data.value,
                                            		amount:     menhGia,
                                            		request_id: cID,
                                            	}
                                            },
                                            function(err, httpResponse, body){
                                            	try {
                                            		let data = JSON.parse(body);
                                            		if (data['status'] == '1') {
                                            			let nhan = menhGia_data.values;
                                            			tab_NapThe.updateOne({'_id':cID}, {$set:{nhan:nhan, status:1}}).exec();
                                            			UserInfo.findOneAndUpdate({'id':client.UID}, {$inc:{red:nhan}}, function(err2, user) {
                                            				client.red({notice:{title:'THÀNH CÔNG', text:'Nạp thẻ thành công...', load: false}, user:{red: user.red*1+nhan}});
                                            			});
                                            		}else if (data['status'] == '99') {
                                            			// Chờ kết quả tiếp theo
                                            			client.red({loading:{text: 'Đang chờ sử lý...'}});
                                            		}else{
                                            			tab_NapThe.updateOne({'_id': cID}, {$set:{status:2}}).exec();
                                            			client.red({notice:{title:'THẤT BẠI', text: config[data['status']], load: false}});
                                            		}
                                            	} catch(e){
                                            		client.red({notice:{title:'THẤT BẠI', text: 'Hệ thống nạp thẻ tạm thời không hoạt động, Vui lòng quay lại sau.!', load: false}});
                                            	}
                                            });
                                            */
                                        } else {
                                            client.red({ notice: { title: 'BẢO TRÌ', text: 'Hệ thống nạp thẻ tạp thời không hoạt động, vui lòng giữ lại thẻ và quay lại sau.', load: false } });
                                        }
                                    });
                                }
                            });
                        } else {
                            client.red({ notice: { title: 'THẤT BẠI', text: 'Thẻ nạp không được hỗ trợ.!!', load: false } });
                        }
                    });
            } else {
                client.red({ notice: { title: 'NẠP THẺ', text: 'Captcha không đúng', load: false } });
            }
        }
    }
    client.c_captcha('chargeCard');
}
