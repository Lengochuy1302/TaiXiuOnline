var TXCuoc = require('../../../../Models/TaiXiu_cuoc');
var BauCuaCuoc = require('../../../../Models/BauCua/BauCua_cuoc');
var XocDiaCuoc = require('../../../../Models/XocXoc/XocXoc_cuoc');
var MinipokerRed = require('../../../../Models/miniPoker/miniPokerRed');
var Min3cayRed = require('../../../../Models/Mini3Cay/Mini3Cay_red');
var BigBabolRed = require('../../../../Models/BigBabol/BigBabol_red');
var AngryBirds = require('../../../../Models/AngryBirds/AngryBirds_red');
var VuongQuocRedRed = require('../../../../Models/VuongQuocRed/VuongQuocRed_red');
var CandyRed = require('../../../../Models/Candy/Candy_red');
var LongLanRed = require('../../../../Models/LongLan/LongLan_red');
var ZeusRed = require('../../../../Models/Zeus/Zeus_red');
var TamHungRed = require('../../../../Models/TamHung/TamHung_red');
var XoSoCuoc = require('../../../../Models/XoSo/mb/xsmb_cuoc');
var UserInfo = require('../../../../Models/UserInfo');
var _ = require('lodash');
module.exports = function(req, res) {
    var { userAuth, body } = req || {};
    var { Data } = body || {};
    var { fromDate, toDate } = Data || {};
    var filter = {};
    if (fromDate || toDate) {
        if (!!fromDate) {
            filter.time = {
                $gte: new Date(fromDate)
            }
        }
        if (!!toDate) {
            if (filter.time) {
                filter.time.$lte = new Date(toDate)
            } else {
                filter.time = {
                    $lte: new Date(toDate)
                }
            }
        }
    }
    UserInfo.find({ type: false }, function(err, us) {
        if (us) {
            us = us.map(function(item, index) {
                return item.name;
            });
            filter.name = { $in: us };
            var finalResult = [];
            var filterTX = _.clone(filter, true);
            filterTX.thanhtoan = true;
            filterTX.taixiu = true;
            filterTX.red = true;
            var filterBC = _.clone(filter, true);
            filterBC.thanhtoan = true;
            filterBC.red = true;
            var filterXocdia = _.clone(filter, true);
            filterXocdia.thanhtoan = true;
            filterXocdia.red = true;
            var filterXSMB = _.clone(filter, true);
            filterXSMB.thanhtoan = true;
            Promise.all([
                    BauCuaCuoc.find(filterBC),
                    TXCuoc.find(filterTX),
                    XocDiaCuoc.find(filterXocdia),
                    MinipokerRed.find(filter),
                    Min3cayRed.find(filter),
                    BigBabolRed.find(filter),
                    AngryBirds.find(filter),
                    VuongQuocRedRed.find(filter),
                    CandyRed.find(filter),
                    LongLanRed.find(filter),
                    XoSoCuoc.find(filterXSMB),
                    ZeusRed.find(filter),
                    TamHungRed.find(filter)
                ])
                .then(function(response) {

                    var resultBaucua = response[0];
                    var resultTaixiu = response[1];
                    var resultXocDia = response[2];
                    var resultMinipoker = response[3];
                    var resultMini3cay = response[4];
                    var resultBigbabol = response[5];
                    var resultAngrybirds = response[6];
                    var resultVQR = response[7];
                    var resultCandy = response[8];
                    var resultLonglan = response[9];
                    var resultXSMB = response[10];
                    var resultZeus = response[11];
                    var resultTamHung = response[12];
                    if (resultTaixiu) {
                        var obj = {
                            name: 'TÀI XỈU',
                            cuoc: 0,
                            tralai: 0,
                            thang: 0,
                            phe: 0
                        };
                        resultTaixiu.map(function(item, index) {
                            obj.cuoc += item.bet;
                            obj.tralai += item.tralai;
                            obj.thang += item.betwin;
                            obj.phe += ((item.betwin * 100) / 98) * 0.02;
                        });
                        finalResult.push(obj);
                    }
                    if (resultBaucua) {
                        var obj = {
                            name: 'BẦU CUA',
                            cuoc: 0,
                            tralai: 0,
                            thang: 0,
                            phe: 0
                        };
                        resultBaucua.map(function(item, index) {
                            var totalBet = item[0] + item[1] + item[2] + item[3] + item[4] + item[5];
                            obj.cuoc += totalBet;
                            obj.tralai += item.tralai;
                            obj.thang += item.betwin;
                            obj.phe += ((item.betwin * 100) / 98) * 0.02;
                        });
                        finalResult.push(obj);
                    }
                    if (resultXocDia) {
                        var obj = {
                            name: 'XÓC ĐĨA',
                            cuoc: 0,
                            tralai: 0,
                            thang: 0,
                            phe: 0
                        };
                        resultXocDia.map(function(item, index) {
                            var totalBet = item.chan + item.le + item.red3 + item.red4 + item.white3 + item.white4;
                            obj.cuoc += totalBet;
                            obj.tralai += item.tralai;
                            obj.thang += item.betwin;
                            obj.phe += ((item.betwin * 100) / 98) * 0.02;
                        });
                        finalResult.push(obj);
                    }
                    if (resultMinipoker) {
                        var obj = {
                            name: 'MINIPOKER',
                            cuoc: 0,
                            tralai: 0,
                            thang: 0,
                            phe: 0
                        };
                        resultMinipoker.map(function(item, index) {
                            obj.cuoc += item.bet;
                            obj.tralai += item.tralai;
                            obj.thang += item.win;
                            obj.phe += 0;
                        });
                        finalResult.push(obj);
                    }
                    if (resultMini3cay) {
                        var obj = {
                            name: 'MINI 3 CÂY',
                            cuoc: 0,
                            tralai: 0,
                            thang: 0,
                            phe: 0
                        };
                        resultMini3cay.map(function(item, index) {
                            obj.cuoc += item.bet;
                            obj.tralai += item.tralai;
                            obj.thang += item.win;
                            obj.phe += 0;
                        });
                        finalResult.push(obj);
                    }
                    if (resultBigbabol) {
                        var obj = {
                            name: 'BIGBABOL',
                            cuoc: 0,
                            tralai: 0,
                            thang: 0,
                            phe: 0
                        };
                        resultBigbabol.map(function(item, index) {
                            obj.cuoc += item.bet * item.line;
                            obj.tralai += item.tralai;
                            obj.thang += item.win;
                            obj.phe += 0;
                        });
                        finalResult.push(obj);
                    }
                    if (resultAngrybirds) {
                        var obj = {
                            name: 'ANGRYBIRDS',
                            cuoc: 0,
                            tralai: 0,
                            thang: 0,
                            phe: 0
                        };
                        resultAngrybirds.map(function(item, index) {
                            obj.cuoc += item.bet;
                            obj.tralai += item.tralai;
                            obj.thang += item.win;
                            obj.phe += 0;
                        });
                        finalResult.push(obj);
                    }
                    if (resultVQR) {
                        var obj = {
                            name: 'Kho Báu',
                            cuoc: 0,
                            tralai: 0,
                            thang: 0,
                            phe: 0
                        };
                        resultVQR.map(function(item, index) {
                            obj.cuoc += item.bet * item.line;
                            obj.tralai += item.tralai;
                            obj.thang += item.win;
                            obj.phe += 0;
                        });
                        finalResult.push(obj);
                    }

                    if (resultCandy) {
                        var obj = {
                            name: 'CANDY',
                            cuoc: 0,
                            tralai: 0,
                            thang: 0,
                            phe: 0
                        };
                        resultCandy.map(function(item, index) {
                            obj.cuoc += item.bet * item.line;
                            obj.tralai += item.tralai;
                            obj.thang += item.win;
                            obj.phe += 0;
                        });
                        finalResult.push(obj);
                    }

                    if (resultLonglan) {
                        var obj = {
                            name: 'LONG LÂN',
                            cuoc: 0,
                            tralai: 0,
                            thang: 0,
                            phe: 0
                        };
                        resultLonglan.map(function(item, index) {
                            obj.cuoc += item.bet * item.line;
                            obj.tralai += item.tralai;
                            obj.thang += item.win;
                            obj.phe += 0;
                        });
                        finalResult.push(obj);
                    }

                    if (resultXSMB) {
                        var obj = {
                            name: 'XỔ SỐ',
                            cuoc: 0,
                            tralai: 0,
                            thang: 0,
                            phe: 0
                        };
                        resultXSMB.map(function(item, index) {
                            obj.cuoc += parseInt(item.cuoc);
                            obj.tralai += 0;
                            obj.thang += parseInt(item.win);
                            obj.phe += 0;
                        });
                        finalResult.push(obj);
                    }
                    if (resultZeus) {
                        var obj = {
                            name: 'Zeus',
                            cuoc: 0,
                            tralai: 0,
                            thang: 0,
                            phe: 0
                        };
                        resultZeus.map(function(item, index) {
                            obj.cuoc += item.bet * item.line;
                            obj.tralai += item.tralai;
                            obj.thang += item.win;
                            obj.phe += 0;
                        });
                        finalResult.push(obj);
                    }

                    if (resultTamHung) {
                        var obj = {
                            name: 'Tam Hùng',
                            cuoc: 0,
                            tralai: 0,
                            thang: 0,
                            phe: 0
                        };
                        resultTamHung.map(function(item, index) {
                            obj.cuoc += item.bet * item.line;
                            obj.tralai += item.tralai;
                            obj.thang += item.win;
                            obj.phe += 0;
                        });
                        finalResult.push(obj);
                    }


                    res.json({
                        status: 200,
                        success: true,
                        data: finalResult
                    });
                }, function(err) {
                    res.json({
                        status: 200,
                        success: false,
                        data: finalResult
                    });
                });
        }
    });
}