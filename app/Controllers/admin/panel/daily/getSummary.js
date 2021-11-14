var ChuyenRed = require('../../../../Models/ChuyenRed');
var DaiLy = require('../../../../Models/DaiLy');
var Users = require('../../../../Models/Users');
var MuaThe = require('../../../../Models/MuaThe');
var NapThe = require('../../../../Models/NapThe');
var Bank_history = require('../../../../Models/Bank/Bank_history');

var moment = require('moment');
module.exports = function(req, res) {
    Promise.all([
            Users.countDocuments({
                'local.regDate': {
                    $gte: new Date(moment().format('YYYY-MM-DD 00:00:00 Z')),
                    $lte: new Date(moment().format('YYYY-MM-DD 23:59:59 Z'))
                }
            }),
            Users.countDocuments({}),
            NapThe.find({
                time: {
                    $gte: new Date(moment().format('YYYY-MM-DD 00:00:00 Z')),
                    $lte: new Date(moment().format('YYYY-MM-DD 23:59:59 Z'))
                },
                status: 1
            }),
            MuaThe.find({
                time: {
                    $gte: new Date(moment().format('YYYY-MM-DD 00:00:00 Z')),
                    $lte: new Date(moment().format('YYYY-MM-DD 23:59:59 Z'))
                },
                status: 1
            }),
            Bank_history.find({
                time: {
                    $gte: new Date(moment().format('YYYY-MM-DD 00:00:00 Z')),
                    $lte: new Date(moment().format('YYYY-MM-DD 23:59:59 Z'))
                },
                type: 0,
                status: 1
            }),
            Bank_history.find({
                time: {
                    $gte: new Date(moment().format('YYYY-MM-DD 00:00:00 Z')),
                    $lte: new Date(moment().format('YYYY-MM-DD 23:59:59 Z'))
                },
                type: 1,
                status: 1
            }),
            DaiLy.find({ rights: 10 })
        ])
        .then(function(all) {
            var userNew = all[0];
            var userTotal = all[1];
            var userOnline = global['userOnline'];
            var depositCardData = all[2];
            var withdrawalCardData = all[3];
            var depositCard = 0;
            var withdrawalCard = 0;
            if (depositCardData) {
                depositCardData.map(function(item, index) {
                    depositCard += item.menhGia;
                });
            }
            if (withdrawalCardData) {
                withdrawalCardData.map(function(item, index) {
                    withdrawalCard += item.menhGia;
                });
            }
            var depositBankData = all[4];
            var withdrawalBankData = all[5];
            var depositBank = 0;
            var withdrawalBank = 0;
            if (depositBankData) {
                depositBankData.map(function(item, index) {
                    depositBank += item.money;
                });
            }
            if (withdrawalBankData) {
                withdrawalBankData.map(function(item, index) {
                    withdrawalBank += item.money;
                });
            }
            var dlList = all[6];
            var filterDL = [];
            if (dlList) {
                dlList.map(function(item, index) {
                    filterDL.push(item ? item.nickname : '');
                });
            }
            Promise.all([
                    ChuyenRed.find({
                        from: {
                            $in: filterDL
                        },
                        time: {
                            $gte: new Date(moment().format('YYYY-MM-DD 00:00:00 Z')),
                            $lte: new Date(moment().format('YYYY-MM-DD 23:59:59 Z'))
                        },
                    }),
                    ChuyenRed.find({
                        to: {
                            $in: filterDL
                        },
                        time: {
                            $gte: new Date(moment().format('YYYY-MM-DD 00:00:00 Z')),
                            $lte: new Date(moment().format('YYYY-MM-DD 23:59:59 Z'))
                        },
                    })
                ])
                .then(function(allDL) {
                    console.log("allDL", allDL);
                    var depositAgentData = allDL[0];
                    var withdrawalAgentData = allDL[1];
                    var depositAgent = 0;
                    var withdrawalAgent = 0;
                    if (depositAgentData) {
                        depositAgentData.map(function(item, index) {
                            depositAgent += item ? item.red : 0;
                        });
                    }
                    if (withdrawalAgentData) {
                        withdrawalAgentData.map(function(item, index) {
                            withdrawalAgent += item ? item.red : 0;
                        });
                    }
                    res.json({
                        status: 200,
                        success: true,
                        data: {
                            CCUNRU: {
                                userOnline: userOnline,
                                userNew: userNew,
                                total: userTotal
                            },
                            card: {
                                deposit: depositCard,
                                withdrawal: withdrawalCard,
                                profit: depositCard - withdrawalCard
                            },
                            bank: {
                                deposit: depositBank,
                                withdrawal: withdrawalBank,
                                profit: depositBank - withdrawalBank
                            },
                            agent: {
                                deposit: depositAgent,
                                withdrawal: withdrawalAgent,
                                profit: depositAgent - withdrawalAgent
                            }
                        }
                    })
                }, function(err) {
                    console.log("failed", err);
                    res.json({
                        status: 200,
                        success: false,
                    });
                });
        }, function(err) {
            console.log("failed", err);
            res.json({
                status: 200,
                success: false,
            });
        });
};