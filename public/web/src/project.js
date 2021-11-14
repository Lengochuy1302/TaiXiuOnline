window.__require = function t(e, i, n) {
    function o(s, a) {
        if (!i[s]) {
            if (!e[s]) {
                var h = s.split("/");
                if (h = h[h.length - 1],
                !e[h]) {
                    var r = "function" == typeof __require && __require;
                    if (!a && r)
                        return r(h, !0);
                    if (c)
                        return c(h, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                s = h
            }
            var u = i[s] = {
                exports: {}
            };
            e[s][0].call(u.exports, function(t) {
                return o(e[s][1][t] || t)
            }, u, u.exports, t, e, i, n)
        }
        return i[s].exports
    }
    for (var c = "function" == typeof __require && __require, s = 0; s < n.length; s++)
        o(n[s]);
    return o
}({
    AngryBird_history_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "cb9e5TUbrlHrp4F0Oa21Pvd", "AngryBird_history_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                time: cc.Label,
                phien: cc.Label,
                cuoc: cc.Label,
                win: cc.Label
            }
        }),
        cc._RF.pop()
    }
    , {}],
    AngryBird_history: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "0f89dKGp89FS4A0zk0h6nwz", "AngryBird_history");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                page: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0
            },
            onLoad: function() {
                var t = this
                  , e = cc.instantiate(this.page);
                e.y = -275,
                this.node.addChild(e),
                this.page = e.getComponent("Pagination"),
                this.page.init(this),
                Promise.all(this.content.children.map(function(t) {
                    return t.getComponent("AngryBird_history_item")
                })).then(function(e) {
                    t.content = e
                })
            },
            onEnable: function() {
                this.get_data()
            },
            onDisable: function() {},
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                cc.RedT.send({
                    g: {
                        angrybird: {
                            log: {
                                red: this.red,
                                page: t
                            }
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                this.page.onSet(t.page, t.kmess, t.total),
                Promise.all(this.content.map(function(e, i) {
                    var o = t.data[i];
                    void 0 !== o ? (e.node.active = !0,
                    e.time.string = n.getStringDateByTime(o.time),
                    e.phien.string = o.id,
                    e.cuoc.string = n.numberWithCommas(o.bet),
                    e.win.string = n.numberWithCommas(o.win)) : e.node.active = !1
                }))
            },
            reset: function() {
                Promise.all(this.content.map(function(t) {
                    t.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    AngryBird_top: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "35ab39NsE9AhaEAoAbzTFqx", "AngryBird_top");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                item: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                cc.RedT.send({
                    g: {
                        angrybird: {
                            top: this.red
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                this.content.removeAllChildren();
                var e = this;
                Promise.all(t.map(function(t, i) {
                    var o = cc.instantiate(e.item)
                      , c = o.getComponent("VQRed_history_item");
                    c.time.string = n.getStringDateByTime(t.time),
                    c.phien.string = t.name,
                    c.cuoc.string = n.numberWithCommas(t.bet),
                    c.line.string = n.numberWithCommas(t.win),
                    c.win.string = 2 == t.type ? "N\u1ed5 H\u0169" : "Th\u1eafng l\u1edbn",
                    o.children[0].active = !(1 & i),
                    e.content.addChild(o)
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    "AngryBirds-itemR": [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "778daCpzslOUbNzvpIkVWDh", "AngryBirds-itemR"),
        cc.Class({
            extends: cc.Component,
            properties: {
                icon: cc.Sprite
            },
            init: function(t) {
                this.RedT = t
            },
            random: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , e = ~~(4 * Math.random());
                return this.setIcon(e),
                t && (this.data = e),
                e
            },
            setIcon: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.icon.spriteFrame = 0 == t ? this.RedT.icons[0] : this.RedT.iconsX[t - 1],
                e && (this.data = t)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "AngryBirds-item": [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "efa70M1TdBLHa9pSAAOj37L", "AngryBirds-item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                icon: cc.Sprite
            },
            init: function(t) {
                this.RedT = t
            },
            random: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , e = ~~(6 * Math.random());
                return this.setIcon(e),
                t && (this.data = e),
                e
            },
            setIcon: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.icon.spriteFrame = this.RedT.icons[t],
                e && (this.data = t)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    AngryBirds_reelsL: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "254d4+O0EJLmrFqrwJc7Bsf", "AngryBirds_reelsL"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            init: function(t) {
                var e = this;
                this.RedT = t,
                this.icons = [];
                var i = this;
                Promise.all([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function(t, e) {
                    var n = cc.instantiate(i.RedT.iconLPrefab);
                    return i.node.addChild(n),
                    (n = n.getComponent("AngryBirds-item")).init(i.RedT),
                    e > 2 && e < 14 && n.random(),
                    n
                })).then(function(t) {
                    e.icons = t,
                    e.icons[19].setIcon(e.icons[2].random(!0)),
                    e.icons[18].setIcon(e.icons[1].random(!0)),
                    e.icons[17].setIcon(e.icons[0].random(!0))
                })
            },
            copy: function() {
                this.icons[19].setIcon(this.icons[2].data),
                this.icons[18].setIcon(this.icons[1].data),
                this.icons[17].setIcon(this.icons[0].data),
                this.node.y = 0
            },
            spin: function(t) {
                this.node.stopAllActions();
                var e = cc.moveTo(1.1, cc.v2(this.node.x, -(this.node.height - 225.84))).easing(cc.easeInOut(3))
                  , i = cc.callFunc(function() {
                    this.copy()
                }, this);
                this.node.runAction(cc.sequence(cc.delayTime(.1 * t), e, i))
            },
            stop: function() {
                this.node.stopAllActions(),
                this.copy()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    AngryBirds_reelsR: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "77651BdeG5Cw5a2bw3wvZf0", "AngryBirds_reelsR"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            init: function(t) {
                var e = this;
                this.RedT = t,
                this.icons = [];
                var i = this;
                Promise.all([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function(t, e) {
                    var n = cc.instantiate(i.RedT.iconRPrefab);
                    return i.node.addChild(n),
                    (n = n.getComponent("AngryBirds-itemR")).init(i.RedT),
                    e > 2 && e < 14 && n.random(),
                    n
                })).then(function(t) {
                    e.icons = t,
                    e.icons[22].setIcon(e.icons[2].random(!0)),
                    e.icons[21].setIcon(e.icons[1].random(!0)),
                    e.icons[20].setIcon(e.icons[0].random(!0))
                })
            },
            copy: function() {
                this.icons[22].setIcon(this.icons[2].data),
                this.icons[21].setIcon(this.icons[1].data),
                this.icons[20].setIcon(this.icons[0].data),
                this.node.y = 0
            },
            spin: function(t) {
                this.node.stopAllActions();
                var e = cc.moveTo(1.5, cc.v2(this.node.x, -(this.node.height - 189))).easing(cc.easeInOut(3))
                  , i = cc.callFunc(function() {
                    this.copy(),
                    4 === t && this.RedT.hieuUng()
                }, this);
                this.node.runAction(cc.sequence(cc.delayTime(.15 * t), e, i))
            },
            stop: function() {
                this.node.stopAllActions(),
                this.copy()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    AngryBirds: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "30b8fKriZRPeqMEQoyRprQy", "AngryBirds");
        var n = t("Helper")
          , o = t("AngryBirds_reelsL")
          , c = t("AngryBirds_reelsR");
        cc.Class({
            extends: cc.Component,
            properties: {
                main: {
                    default: null,
                    type: cc.Node
                },
                background: cc.Node,
                line: cc.Node,
                reelsL: {
                    default: [],
                    type: o
                },
                reelsR: {
                    default: [],
                    type: c
                },
                icons: {
                    default: [],
                    type: cc.SpriteFrame
                },
                iconsX: {
                    default: [],
                    type: cc.SpriteFrame
                },
                iconLPrefab: cc.Prefab,
                iconRPrefab: cc.Prefab,
                buttonSpin: cc.Node,
                buttonAuto: cc.Node,
                buttonStop: cc.Node,
                buttonCoint: cc.Node,
                nodeRed: cc.Node,
                nodeXu: cc.Node,
                bet: cc.Node,
                notice: cc.Node,
                prefabNotice: cc.Prefab,
                hu: cc.Label,
                cuoc: "",
                isAuto: !1,
                isSpin: !1,
                red: !0,
                btnScaleIn: {
                    default: null,
                    type: cc.Node
                },
                btnScaleOut: {
                    default: null,
                    type: cc.Node
                }
            },
            init: function(t) {
                this.RedT = t,
                cc.RedT.setting.angrybird = cc.RedT.setting.angrybird || {},
                "true" == localStorage.getItem("angrybird") && (this.node.active = !0),
                void 0 !== cc.RedT.setting.angrybird.position && (this.node.position = cc.RedT.setting.angrybird.position),
                void 0 !== cc.RedT.setting.angrybird.bet && cc.RedT.setting.angrybird.bet != this.cuoc && this.intChangerBet(),
                void 0 !== cc.RedT.setting.angrybird.red && this.red != cc.RedT.setting.angrybird.red && this.changerCoint(),
                void 0 !== cc.RedT.setting.angrybird.isAuto && (this.isAuto,
                cc.RedT.setting.angrybird.isAuto)
            },
            onLoad: function() {
                var t = this;
                this.ttOffset = null,
                Promise.all(this.reelsL.map(function(e) {
                    e.init(t)
                })),
                Promise.all(this.reelsR.map(function(e) {
                    e.init(t)
                }))
            },
            onEnable: function() {
                this.onGetHu(),
                this.background.on(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.background.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.background.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.background.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.background.on(cc.Node.EventType.MOUSE_ENTER, this.setTop, this)
            },
            onDisable: function() {
                this.background.off(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.background.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.background.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.background.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.background.off(cc.Node.EventType.MOUSE_ENTER, this.setTop, this),
                this.onCloseGame()
            },
            eventStart: function(t) {
                this.setTop(),
                this.ttOffset = cc.v2(t.touch.getLocationX() - this.node.position.x, t.touch.getLocationY() - this.node.position.y)
            },
            eventMove: function(t) {
                this.node.position = cc.v2(t.touch.getLocationX() - this.ttOffset.x, t.touch.getLocationY() - this.ttOffset.y)
            },
            eventEnd: function() {
                cc.RedT.setting.angrybird.position = this.node.position
            },
            setTop: function() {
                this.node.parent.insertChild(this.node)
            },
            openGame: function() {
                cc.RedT.audio.playClick(),
                cc.RedT.IS_LOGIN ? (this.node.active = !0,
                localStorage.setItem("angrybird", !0),
                this.setTop()) : cc.RedT.inGame.dialog.showSignIn()
            },
            closeGame: function() {
                this.node.active = !1,
                localStorage.setItem("angrybird", !1)
            },
            changerCoint: function() {
                this.red = cc.RedT.setting.angrybird.red = !this.red,
                this.nodeRed.active = !this.nodeRed.active,
                this.nodeXu.active = !this.nodeXu.active,
                this.onGetHu()
            },
            intChangerBet: function() {
                var t = this;
                Promise.all(this.bet.children.map(function(e) {
                    e.name == cc.RedT.setting.angrybird.bet ? (t.cuoc = e.name,
                    e.children[0].active = !0,
                    e.pauseSystemEvents()) : (e.children[0].active = !1,
                    e.resumeSystemEvents())
                }))
            },
            changerBet: function(t, e) {
                this.cuoc = cc.RedT.setting.angrybird.bet = e;
                var i = t.target;
                Promise.all(this.bet.children.map(function(t) {
                    t == i ? (t.children[0].active = !0,
                    t.pauseSystemEvents()) : (t.children[0].active = !1,
                    t.resumeSystemEvents())
                })),
                this.onGetHu()
            },
            autoSpin: function() {
                var t = this;
                Promise.all([0, 1, 2, 3, 4].map(function(e) {
                    e < 3 ? t.reelsL[e].spin(e) : t.reelsR[e - 3].spin(e)
                }))
            },
            onSpin: function() {
                this.buttonSpin.pauseSystemEvents(),
                this.buttonCoint.pauseSystemEvents(),
                Promise.all(this.bet.children.map(function(t) {
                    t.pauseSystemEvents()
                }))
            },
            offSpin: function() {
                this.isSpin = this.buttonStop.active = this.isAuto = !1,
                this.buttonAuto.color = cc.color(155, 155, 155),
                this.buttonAuto.active = this.buttonSpin.active = !0,
                this.buttonSpin.resumeSystemEvents(),
                this.buttonCoint.resumeSystemEvents(),
                Promise.all(this.bet.children.map(function(t) {
                    t.children[0].active || t.resumeSystemEvents()
                }))
            },
            onClickSpin: function() {
                this.isSpin || (this.isSpin = !0,
                this.onSpin(),
                this.onGetSpin())
            },
            onClickAuto: function() {
                this.isAuto = cc.RedT.setting.angrybird.isAuto = !this.isAuto,
                this.buttonAuto.color = this.isAuto ? cc.Color.WHITE : cc.color(155, 155, 155),
                this.buttonStop.active = !!this.isSpin && !!this.isAuto,
                this.buttonAuto.active = !this.buttonStop.active,
                this.buttonSpin.active = !this.isSpin
            },
            onClickStop: function() {
                this.onClickAuto(),
                this.buttonStop.active = !1
            },
            onGetInfo: function() {
                cc.RedT.send({
                    g: {
                        angrybird: {
                            info: {
                                cuoc: this.cuoc,
                                red: this.red
                            }
                        }
                    }
                })
            },
            onGetSpin: function() {
                cc.RedT.send({
                    g: {
                        angrybird: {
                            spin: {
                                cuoc: this.cuoc,
                                red: this.red
                            }
                        }
                    }
                })
            },
            onCloseGame: function() {
                this.isSpin = !1,
                Promise.all(this.reelsL.map(function(t) {
                    t.stop()
                })),
                Promise.all(this.reelsR.map(function(t) {
                    t.stop()
                })),
                this.offSpin()
            },
            addNotice: function(t) {
                var e = cc.instantiate(this.prefabNotice);
                e.getComponent("mini_warning").text.string = t,
                this.notice.addChild(e)
            },
            onData: function(t) {
                var e = this
                  , i = this;
                void 0 !== t.status && (1 === t.status ? (this.notice.removeAllChildren(),
                this.win = t.win,
                this.nohu = t.nohu,
                this.isBigWin = t.isBigWin,
                this.buttonStop.active = !!this.isAuto,
                this.buttonAuto.active = this.buttonSpin.active = !this.buttonStop.active,
                Promise.all(t.celR.map(function(t, e) {
                    Promise.all(t.map(function(t, n) {
                        i.reelsR[e].icons[n].setIcon(t, !0)
                    }))
                })),
                Promise.all(t.cel.map(function(t, e) {
                    return Promise.all(t.map(function(t, n) {
                        i.reelsL[e].icons[n].setIcon(t, !0)
                    })).then(function(t) {
                        return t
                    })
                })).then(function(t) {
                    e.autoSpin()
                })) : this.offSpin()),
                void 0 !== t.line_win && (this.line_win = t.line_win),
                void 0 !== t.log && this.RedT.Dialog.AngryBird_history.onData(t.log),
                void 0 !== t.top && this.RedT.Dialog.AngryBird_top.onData(t.top),
                void 0 !== t.notice && this.addNotice(t.notice)
            },
            copy: function() {
                Promise.all(this.reelsL.map(function(t) {
                    void 0 !== t.icons && void 0 !== t.icons[16] && void 0 !== t.icons[16].setIcon && (t.icons[16].setIcon(t.icons[2].data),
                    t.icons[15].setIcon(t.icons[1].data),
                    t.icons[14].setIcon(t.icons[0].data))
                })),
                Promise.all(this.reelsR.map(function(t) {
                    void 0 !== t.icons && void 0 !== t.icons[16] && void 0 !== t.icons[16].setIcon && (t.icons[16].setIcon(t.icons[2].data),
                    t.icons[15].setIcon(t.icons[1].data),
                    t.icons[14].setIcon(t.icons[0].data))
                }))
            },
            random: function() {
                Promise.all(this.reelsL.map(function(t) {
                    Promise.all(t.icons.map(function(t, e) {
                        e > 2 && e < 14 && t.random()
                    }))
                })),
                Promise.all(this.reelsR.map(function(t) {
                    Promise.all(t.icons.map(function(t, e) {
                        e > 2 && e < 14 && t.random()
                    }))
                }))
            },
            onGetHu: function() {
                var t = this;
                if (void 0 !== cc.RedT.setting.topHu.data && this.node.active) {
                    var e = this;
                    Promise.all(cc.RedT.setting.topHu.data.arb.filter(function(t) {
                        return t.type == e.cuoc && t.red == e.red
                    })).then(function(e) {
                        var i = n.getOnlyNumberInString(t.hu.string)
                          , o = e[0].bet;
                        i - o != 0 && n.numberTo(t.hu, i, o, 1500, !0)
                    })
                }
            },
            hieuUng: function() {
                if (this.nohu) {
                    this.nohu = !1,
                    1 == this.isAuto && this.onClickStop();
                    var t = cc.instantiate(this.RedT.PrefabNoHu)
                      , e = (t = t.getComponent(cc.Animation)).node.children[6].getComponent(cc.Label);
                    this.RedT.nodeEfect.addChild(t.node),
                    t.on("play", function() {
                        var i = cc.callFunc(function() {
                            cc.RedT.audio.playEf("winHu"),
                            n.numberTo(e, 0, this.win, 1e3, !0)
                        }, this);
                        t.node.runAction(cc.sequence(cc.delayTime(.25), i))
                    }, this),
                    t.on("finished", function() {
                        t.node.destroy(),
                        this.win = 0,
                        this.hieuUng()
                    }, this),
                    t.play()
                } else if (!this.nohu && this.isBigWin) {
                    this.isBigWin = !1;
                    var i = cc.instantiate(this.RedT.prefabBigWin);
                    (i = i.getComponent(cc.Animation)).on("finished", function() {
                        i.node.destroy(),
                        this.isAuto ? this.onGetSpin() : this.offSpin()
                    }, this),
                    i.node.bet = this.win,
                    i.node.red = this.red,
                    i.node.position = cc.v2(0, 98),
                    this.notice.addChild(i.node),
                    this.win = 0,
                    this.isAuto || this.offSpin()
                } else if (!this.isBigWin && this.win > 0) {
                    var o = new cc.Node;
                    o.addComponent(cc.Label),
                    o = o.getComponent(cc.Label),
                    n.numberTo(o, 0, this.win, 600, !0),
                    o.font = this.red ? cc.RedT.util.fontCong : cc.RedT.util.fontTru,
                    o.lineHeight = 130,
                    o.fontSize = 25,
                    o.node.position = cc.v2(0, 98),
                    o.node.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
                        o.node.destroy(),
                        this.hieuUng(),
                        this.offLineWin()
                    }, this))),
                    this.notice.addChild(o.node),
                    this.win = 0,
                    this.onLineWin()
                } else
                    this.isAuto ? this.timeOut = setTimeout(function() {
                        this.onGetSpin()
                    }
                    .bind(this), 300) : this.offSpin()
            },
            onLineWin: function() {
                var t = this;
                Promise.all(this.line_win.map(function(e) {
                    t.line.children[e.line - 1].active = !0
                }))
            },
            offLineWin: function() {
                Promise.all(this.line.children.map(function(t) {
                    t.active = !1
                }))
            },
            zoom: function(t) {
                1.2 == this.main.getScale() ? (this.main.setScale(.8, .8),
                this.btnScaleIn.active = !0,
                this.btnScaleOut.active = !1) : (this.main.setScale(1.2, 1.2),
                this.btnScaleIn.active = !1,
                this.btnScaleOut.active = !0)
            }
        }),
        cc._RF.pop()
    }
    , {
        AngryBirds_reelsL: "AngryBirds_reelsL",
        AngryBirds_reelsR: "AngryBirds_reelsR",
        Helper: "Helper"
    }],
    Bank: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "e83d55pg19B9a0JKV75kU4f", "Bank"),
        cc.Class({
            extends: cc.Component,
            properties: {
                header: cc.Node,
                nap: cc.Node,
                rut: cc.Node
            },
            init: function() {
                var t = this;
                this.nap = this.nap.getComponent("bankNap"),
                this.rut = this.rut.getComponent("bankRut"),
                this.rut.init(),
                this.body = [this.nap, this.rut],
                Promise.all(this.header.children.map(function(t) {
                    return t.getComponent("itemContentMenu")
                })).then(function(e) {
                    t.header = e
                })
            },
            onSelectHead: function(t, e) {
                Promise.all(this.header.map(function(t) {
                    t.node.name == e ? t.select() : t.unselect()
                })),
                Promise.all(this.body.map(function(t) {
                    t.node.name == e ? t.node.active = !0 : t.node.active = !1
                }))
            },
            onData: function(t) {
                t.list && this.nap.onData(t.list)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    BaoMatGame: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "52a86OUw8tI17le2VUwkbZa", "BaoMatGame"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    BaoMatTaiKhoan: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "dd2668dqpdKMbNtz9sjjHi2", "BaoMatTaiKhoan"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    BaoMat: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "ec1292CT1ZJL5oAGF36VfTW", "BaoMat");
        var n = t("DangKyOTP")
          , o = t("DoiMatKhau")
          , c = t("BaoMatGame")
          , s = t("BaoMatTaiKhoan");
        cc.Class({
            extends: cc.Component,
            properties: {
                header: {
                    default: null,
                    type: cc.Node
                },
                DangKyOTP: n,
                DoiMatKhau: o,
                BaoMatGame: c,
                BaoMatTaiKhoan: s
            },
            init: function() {
                var t = this;
                this.body = [this.DangKyOTP.node, this.DoiMatKhau.node, this.BaoMatGame.node, this.BaoMatTaiKhoan.node],
                Promise.all(this.header.children.map(function(t) {
                    return t.getComponent("itemContentMenu")
                })).then(function(e) {
                    t.header = e
                })
            },
            onSelectHead: function(t, e) {
                Promise.all(this.header.map(function(t) {
                    t.node.name == e ? t.select() : t.unselect()
                })),
                Promise.all(this.body.map(function(t) {
                    t.name == e ? t.active = !0 : t.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        BaoMatGame: "BaoMatGame",
        BaoMatTaiKhoan: "BaoMatTaiKhoan",
        DangKyOTP: "DangKyOTP",
        DoiMatKhau: "DoiMatKhau"
    }],
    BaseControll: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "19011C1h3JPzKZi+tiWEqax", "BaseControll"),
        e.exports = {
            IS_LOGIN: !1,
            IS_SOUND: !0,
            isConnected: !1,
            audio: null,
            _socket: null,
            user: {},
            prefab: {},
            setting: {},
            util: {},
            connect: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/"
                  , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                this.isConnected || (this._socket = new WebSocket("ws" + (n ? "s" : "") + "://" + t + (i ? ":" + i : "") + e),
                this._socket.onopen = this._onSocketConnect,
                this._socket.onclose = this._onSocketDisconnect,
                this._socket.onmessage = this._onSocketData,
                this._socket.onerror = this._onSocketError,
                this.isConnected = !0)
            },
            disconnect: function() {
                this.isConnected = !1,
                this._socket.close()
            },
            send: function(t) {
                try {
                    this._socket.send(this._encodeMessage(t))
                } catch (t) {
                    this.inGame.loading.active = !1,
                    this.inGame.notice.show({
                        title: "TH\xd4NG B\xc1O",
                        text: "KH\xd4NG th\u1ec3 k\u1ebft n\u1ed1i t\u1edbi m\xe1y ch\u1ee7..."
                    })
                }
            },
            _decodeMessage: function(t) {
                return JSON.parse(t)
            },
            _encodeMessage: function(t) {
                return JSON.stringify(t)
            },
            _onSocketConnect: function() {
                cc.RedT.isConnected = !0
            },
            _onSocketDisconnect: function() {
                cc.RedT.isConnected = !1,
                cc.RedT.IS_LOGIN ? cc.RedT.inGame.signOut() : cc.RedT.inGame.dialog.onCloseDialog(),
                cc.RedT.reconnect()
            },
            _onSocketData: function(t) {
                var e = t.data;
                e = cc.RedT._decodeMessage(e),
                cc.RedT.inGame.onData(e)
            },
            _onSocketError: function(t) {},
            reconnect: function() {
                this.connect("127.0.0.1", "/ws")
            },
            init: function() {
                this.initPrototype()
            },
            initPrototype: function() {
                String.format || (String.format = function(t) {
                    var e = Array.prototype.slice.call(arguments, 1);
                    return t.replace(/{(\d+)}/g, function(t, i) {
                        return void 0 !== e[i] ? e[i] : t
                    })
                }
                )
            },
            setAutoLogin: function(t) {
                localStorage.setItem("AUTO_LOGIN", t)
            },
            isAutoLogin: function() {
                return "true" == localStorage.getItem("AUTO_LOGIN")
            },
            setSoundGame: function(t) {
                localStorage.setItem("SOUND_GAME", t)
            },
            isSoundGame: function() {
                return "true" == localStorage.getItem("SOUND_GAME")
            },
            setSoundBackground: function(t) {
                localStorage.setItem("SOUND_BACKGROUND", t)
            },
            isSoundBackground: function() {
                return "true" == localStorage.getItem("SOUND_BACKGROUND")
            },
            userData: function(t) {
                void 0 !== t.name && (this.user.name = t.name),
                void 0 !== t.red && (this.user.red = t.red),
                void 0 !== t.xu && (this.user.xu = t.xu),
                void 0 !== t.ketSat && (this.user.ketSat = t.ketSat),
                void 0 !== t.UID && (this.user.UID = t.UID),
                void 0 !== t.phone && (this.user.phone = t.phone),
                void 0 !== t.email && (this.user.email = t.email),
                void 0 !== t.joinedOn && (this.user.joinedOn = t.joinedOn),
                void 0 !== t.security && (this.user.security = t.security),
                void 0 !== t.level && (this.user.level = t.level),
                void 0 !== t.vipHT && (this.user.vipHT = t.vipHT),
                void 0 !== t.vipNext && (this.user.vipNext = t.vipNext)
            }
        },
        cc._RF.pop()
    }
    , {}],
    BauCua_LichSu: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "4b4f6CxJKNB7ada2j1ouX/g", "BauCua_LichSu");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                page: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0
            },
            init: function(t) {
                this.RedT = t
            },
            onLoad: function() {
                var t = this;
                this.page = cc.instantiate(this.page),
                this.page.y = -307,
                this.node.addChild(this.page),
                this.page = this.page.getComponent("Pagination"),
                Promise.all(this.content.children.map(function(t) {
                    return t.getComponent("BauCua_ls_item")
                })).then(function(e) {
                    t.content = e
                }),
                this.page.init(this)
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                cc.RedT.send({
                    g: {
                        baucua: {
                            viewlogs: {
                                red: this.red,
                                page: t
                            }
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                var e = this;
                this.page.onSet(t.page, t.kmess, t.total),
                Promise.all(this.content.map(function(i, o) {
                    var c = t.data[o];
                    void 0 !== c ? (i.node.active = !0,
                    i.time.string = n.getStringDateByTime(c.time),
                    i.phien.string = c.phien,
                    i.thang.string = n.numberWithCommas(c.betwin),
                    Promise.all(i.kq.map(function(t, i) {
                        t.spriteFrame = e.RedT.iconMini[c.kq[i]]
                    })),
                    Promise.all(i.datLabel.map(function(t, e) {
                        c[e] > 0 ? (t.node.parent.active = !0,
                        t.string = n.nFormatter(c[e], 1)) : t.node.parent.active = !1
                    }))) : i.node.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    BauCua_linhVat: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "bb46bQsB6lOkIXs9oBGBiCh", "BauCua_linhVat");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                xLabel: cc.Label,
                totall: cc.Label,
                me: cc.Label,
                nodeMe: cc.Node,
                nodeSelect: cc.Node
            },
            meCuoc: function(t) {
                t ? (this.nodeMe.active = !0,
                this.me.string = n.nFormatter(t, 1)) : this.nodeMe.active = !1
            },
            totallCuoc: function(t) {
                this.totall.string = t ? n.nFormatter(t, 1) : 0
            },
            Select: function(t) {
                this.nodeSelect.active = !0,
                t > 1 ? (this.xLabel.node.active = !0,
                this.xLabel.string = "x" + t) : this.xLabel.node.active = !1
            },
            unSelect: function() {
                this.nodeSelect.active = this.xLabel.node.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    BauCua_logMini: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "058c1CPbRxHYZ8b7k46swQK", "BauCua_logMini"),
        cc.Class({
            extends: cc.Component,
            properties: {
                icon: {
                    default: [],
                    type: cc.Sprite
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    BauCua_ls_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "34cf8eBwhVF04H8tSWu0eiE", "BauCua_ls_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                time: cc.Label,
                phien: cc.Label,
                thang: cc.Label,
                kq: {
                    default: [],
                    type: cc.Sprite
                },
                datLabel: {
                    default: [],
                    type: cc.Label
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    BauCua_top_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "d2407aqkttNVKBLKz6pUcVF", "BauCua_top_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                stt: cc.Label,
                nick: cc.Label,
                win: cc.Label
            }
        }),
        cc._RF.pop()
    }
    , {}],
    BauCua_top: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "6692a+IWv5GELCMBYie/TgO", "BauCua_top");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                item: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0
            },
            init: function(t) {
                this.RedT = t
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                cc.RedT.send({
                    g: {
                        baucua: {
                            tops: this.red
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                this.content.removeAllChildren();
                var e = this;
                Promise.all(t.map(function(t, i) {
                    var o = cc.instantiate(e.item)
                      , c = o.getComponent("BauCua_top_item");
                    c.stt.string = i + 1,
                    c.nick.string = t.name,
                    c.win.string = n.numberWithCommas(t.bet),
                    o.children[0].active = !(1 & i),
                    e.content.addChild(o)
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    BauCua: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "913f0/duAtI8acXyToc0QnK", "BauCua");
        var n = t("Helper")
          , o = t("BauCua_linhVat");
        cc.Class({
            extends: cc.Component,
            properties: {
                background: cc.Node,
                linhVat: {
                    default: [],
                    type: o
                },
                iconMini: {
                    default: [],
                    type: cc.SpriteFrame
                },
                iconLV: {
                    default: [],
                    type: cc.SpriteFrame
                },
                dices: {
                    default: [],
                    type: cc.Sprite
                },
                logHuou: cc.Label,
                logBau: cc.Label,
                logGa: cc.Label,
                logCa: cc.Label,
                logCua: cc.Label,
                logTom: cc.Label,
                titleTime: cc.Label,
                labelTime: cc.Label,
                labelHu: cc.Label,
                Animation: cc.Animation,
                bet: cc.Node,
                nodeRed: cc.Node,
                nodeXu: cc.Node,
                logs: cc.Node,
                prefabLogs: cc.Prefab,
                notice: cc.Node,
                prefabNotice: cc.Prefab,
                cuoc: "",
                red: !0
            },
            init: function(t) {
                this.RedT = t,
                this.Top = t.Dialog.BauCua_top,
                this.LichSu = t.Dialog.BauCua_LichSu,
                cc.RedT.setting.baucua = cc.RedT.setting.baucua || {
                    regOpen: !1,
                    data: {
                        meXuBau: 0,
                        meXuCa: 0,
                        meXuCua: 0,
                        meXuGa: 0,
                        meXuHuou: 0,
                        meXuTom: 0,
                        meRedBau: 0,
                        meRedCa: 0,
                        meRedCua: 0,
                        meRedGa: 0,
                        meRedHuou: 0,
                        meRedTom: 0,
                        redBau: 0,
                        redCa: 0,
                        redCua: 0,
                        redGa: 0,
                        redHuou: 0,
                        redTom: 0,
                        xuBau: 0,
                        xuCa: 0,
                        xuCua: 0,
                        xuGa: 0,
                        xuHuou: 0,
                        xuTom: 0
                    },
                    logLV: {},
                    red: !0,
                    bet: "100"
                },
                "true" == localStorage.getItem("bauCua") && (this.node.active = !0),
                void 0 !== cc.RedT.setting.baucua.position && (this.node.position = cc.RedT.setting.baucua.position),
                void 0 !== cc.RedT.setting.baucua.time_remain && (cc.RedT.setting.baucua.time_remain++,
                this.nextRealTime()),
                cc.RedT.IS_LOGIN && (this.logLVHandling(cc.RedT.setting.baucua.logLV),
                this.DataHandling(cc.RedT.setting.baucua.data),
                this.red != cc.RedT.setting.baucua.red && this.changerCoint(),
                void 0 !== cc.RedT.setting.baucua.logLV && this.logLVHandling(cc.RedT.setting.baucua.logLV),
                void 0 !== cc.RedT.setting.baucua.logs && this.addLogs(),
                this.intChangerBet()),
                this.Animation.on("finished", this.AnimationFinish, this)
            },
            onLoad: function() {
                this.ttOffset = null
            },
            onEnable: function() {
                this.regEvent(!0),
                this.background.on(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.background.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.background.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.background.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.background.on(cc.Node.EventType.MOUSE_ENTER, this.setTop, this)
            },
            onDisable: function() {
                this.regEvent(!1),
                this.background.off(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.background.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.background.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.background.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.background.off(cc.Node.EventType.MOUSE_ENTER, this.setTop, this)
            },
            regEvent: function(t) {
                cc.RedT.send({
                    g: {
                        baucua: cc.RedT.setting.baucua.regOpen ? {
                            view: t
                        } : {
                            view: t,
                            regOpen: !0
                        }
                    }
                })
            },
            eventStart: function(t) {
                this.setTop(),
                this.ttOffset = cc.v2(t.touch.getLocationX() - this.node.position.x, t.touch.getLocationY() - this.node.position.y)
            },
            eventMove: function(t) {
                this.node.position = cc.v2(t.touch.getLocationX() - this.ttOffset.x, t.touch.getLocationY() - this.ttOffset.y)
            },
            eventEnd: function() {
                cc.RedT.setting.baucua.position = this.node.position
            },
            openGame: function() {
                cc.RedT.audio.playClick(),
                cc.RedT.IS_LOGIN ? (this.node.active = !0,
                localStorage.setItem("bauCua", !0),
                this.setTop()) : cc.RedT.inGame.dialog.showSignIn()
            },
            closeGame: function() {
                cc.RedT.audio.playUnClick(),
                this.node.active = !1,
                localStorage.setItem("bauCua", !1)
            },
            setTop: function() {
                this.node.parent.insertChild(this.node)
            },
            changerCoint: function() {
                this.red = !this.red,
                this.nodeRed.active = !this.nodeRed.active,
                this.nodeXu.active = !this.nodeXu.active,
                cc.RedT.setting.baucua.regOpen && this.DataHandling(cc.RedT.setting.baucua.data),
                cc.RedT.setting.baucua.red = this.red
            },
            intChangerBet: function() {
                var t = this;
                Promise.all(this.bet.children.map(function(e) {
                    e.name == cc.RedT.setting.baucua.bet ? (t.cuoc = e.name,
                    e.children[0].active = !0,
                    e.pauseSystemEvents()) : (e.children[0].active = !1,
                    e.resumeSystemEvents())
                }))
            },
            changerBet: function(t, e) {
                this.cuoc = e;
                var i = t.target;
                Promise.all(this.bet.children.map(function(t) {
                    t == i ? (t.children[0].active = !0,
                    t.pauseSystemEvents()) : (t.children[0].active = !1,
                    t.resumeSystemEvents())
                })),
                cc.RedT.setting.baucua.bet = i.name
            },
            AnimationFinish: function() {
                this.addLogs();
                for (var t = cc.RedT.setting.baucua.logs[0], e = {}, i = 0; i < 3; i++) {
                    var n = t[i];
                    cc.RedT.setting.baucua.logLV[n] += 1,
                    void 0 === e[n] ? e[n] = 1 : e[n] += 1
                }
                for (var o = 0; o < 6; o++)
                    void 0 !== e[o] && this.linhVat[o].Select(e[o]);
                this.logLVHandling(cc.RedT.setting.baucua.logLV)
            },
            datCuoc: function(t, e) {
                this.cuoc < 100 ? this.addNotice("Vui l\xf2ng ch\u1ecdn m\u1ee9c c\u01b0\u1ee3c...") : cc.RedT.send({
                    g: {
                        baucua: {
                            cuoc: {
                                cuoc: this.cuoc,
                                red: this.red,
                                linhVat: e
                            }
                        }
                    }
                })
            },
            addNotice: function(t) {
                var e = cc.instantiate(this.prefabNotice);
                e.getComponent("mini_warning").text.string = t,
                this.notice.addChild(e)
            },
            setDice: function(t) {
                var e = this;
                Promise.all(t.map(function(t, i) {
                    e.dices[i].spriteFrame = e.iconLV[t]
                }))
            },
            addLogs: function() {
                var t = this;
                this.logs.removeAllChildren(),
                Promise.all(cc.RedT.setting.baucua.logs.map(function(e, i) {
                    var n = cc.instantiate(t.prefabLogs)
                      , o = n.getComponent("BauCua_logMini");
                    Promise.all(o.icon.map(function(i, n) {
                        i.spriteFrame = t.iconMini[e[n]]
                    })),
                    0 == i && (n.children[0].children[0].active = !0,
                    n.children[1].children[0].active = !0,
                    n.children[2].children[0].active = !0),
                    t.logs.addChild(n)
                }))
            },
            onData: function(t) {
                if (void 0 !== t.data) {
                    Object.assign(cc.RedT.setting.baucua.data, t.data);
                    this.DataHandling(t.data)
                }
                void 0 !== t.logLV && (Object.assign(cc.RedT.setting.baucua.logLV, t.logLV),
                this.logLVHandling(t.logLV)),
                void 0 !== t.status && this.status(t.status),
                void 0 !== t.logs && (cc.RedT.setting.baucua.logs = t.logs,
                this.addLogs()),
                void 0 !== t.tops && this.Top.onData(t.tops),
                void 0 !== t.viewlogs && this.LichSu.onData(t.viewlogs),
                void 0 !== t.regOpen && (cc.RedT.setting.baucua.regOpen = !0),
                void 0 !== t.time_remain && (cc.RedT.setting.baucua.time_remain = t.time_remain,
                this.playTime()),
                void 0 !== t.finish && (cc.RedT.setting.baucua.regOpen && (this.unSelect(),
                void 0 !== this.timeInterval && clearInterval(this.timeInterval),
                cc.RedT.setting.baucua.logs.unshift([t.finish.dices[0], t.finish.dices[1], t.finish.dices[2]]),
                cc.RedT.setting.baucua.logs.length > 15 && cc.RedT.setting.baucua.logs.pop(),
                this.setDice(t.finish.dices),
                this.Animation.node.active = !0,
                this.Animation.play()),
                cc.RedT.setting.baucua.time_remain = 72,
                this.playTime()),
                void 0 !== t.notice && this.addNotice(t.notice)
            },
            playTime: function() {
                void 0 !== this.timeInterval && clearInterval(this.timeInterval),
                this.timeInterval = setInterval(function() {
                    if (cc.RedT.setting.baucua.time_remain > 61) {
                        var t = n.numberPad(cc.RedT.setting.baucua.time_remain - 62, 2);
                        this.labelTime.node.color = cc.Color.RED,
                        this.labelTime.string = t,
                        this.titleTime.string = "Xem phi\xean",
                        cc.RedT.setting.baucua.time_remain < 66 && (this.Animation.node.active = !1)
                    } else if (this.Animation.node.active = !1,
                    cc.RedT.setting.baucua.regOpen && 61 == cc.RedT.setting.baucua.time_remain && this.resetData(),
                    this.titleTime.string = "\u0110\u1eb7t c\u01b0\u1ee3c",
                    cc.RedT.setting.baucua.time_remain > 0) {
                        var e = n.numberPad(cc.RedT.setting.baucua.time_remain - 1, 2);
                        this.labelTime.string = e,
                        this.labelTime.node.color = cc.Color.WHITE
                    } else
                        clearInterval(this.timeInterval);
                    cc.RedT.setting.baucua.time_remain--
                }
                .bind(this), 1e3)
            },
            nextRealTime: function() {
                if (cc.RedT.setting.baucua.time_remain > 61) {
                    var t = n.numberPad(cc.RedT.setting.baucua.time_remain - 62, 2);
                    this.labelTime.node.color = cc.Color.RED,
                    this.labelTime.string = n.numberPad(t, 2),
                    this.titleTime.string = "Xem phi\xean"
                } else if (this.titleTime.string = "\u0110\u1eb7t c\u01b0\u1ee3c",
                cc.RedT.setting.baucua.time_remain > 0) {
                    t = n.numberPad(cc.RedT.setting.baucua.time_remain - 1, 2);
                    this.labelTime.string = t,
                    this.labelTime.node.color = cc.Color.WHITE
                }
            },
            logLVHandling: function(t) {
                this.logHuou.string = n.numberWithCommas(t[0]),
                this.logBau.string = n.numberWithCommas(t[1]),
                this.logGa.string = n.numberWithCommas(t[2]),
                this.logCa.string = n.numberWithCommas(t[3]),
                this.logCua.string = n.numberWithCommas(t[4]),
                this.logTom.string = n.numberWithCommas(t[5])
            },
            DataHandling: function(t) {
                this.red ? (void 0 !== t.redHuou && this.linhVat[0].totallCuoc(t.redHuou),
                void 0 !== t.redBau && this.linhVat[1].totallCuoc(t.redBau),
                void 0 !== t.redGa && this.linhVat[2].totallCuoc(t.redGa),
                void 0 !== t.redCa && this.linhVat[3].totallCuoc(t.redCa),
                void 0 !== t.redCua && this.linhVat[4].totallCuoc(t.redCua),
                void 0 !== t.redTom && this.linhVat[5].totallCuoc(t.redTom),
                void 0 !== t.meRedHuou && this.linhVat[0].meCuoc(t.meRedHuou),
                void 0 !== t.meRedBau && this.linhVat[1].meCuoc(t.meRedBau),
                void 0 !== t.meRedGa && this.linhVat[2].meCuoc(t.meRedGa),
                void 0 !== t.meRedCa && this.linhVat[3].meCuoc(t.meRedCa),
                void 0 !== t.meRedCua && this.linhVat[4].meCuoc(t.meRedCua),
                void 0 !== t.meRedTom && this.linhVat[5].meCuoc(t.meRedTom)) : (void 0 !== t.xuHuou && this.linhVat[0].totallCuoc(t.xuHuou),
                void 0 !== t.xuBau && this.linhVat[1].totallCuoc(t.xuBau),
                void 0 !== t.xuGa && this.linhVat[2].totallCuoc(t.xuGa),
                void 0 !== t.xuCa && this.linhVat[3].totallCuoc(t.xuCa),
                void 0 !== t.xuCua && this.linhVat[4].totallCuoc(t.xuCua),
                void 0 !== t.xuTom && this.linhVat[5].totallCuoc(t.xuTom),
                void 0 !== t.meXuHuou && this.linhVat[0].meCuoc(t.meXuHuou),
                void 0 !== t.meXuBau && this.linhVat[1].meCuoc(t.meXuBau),
                void 0 !== t.meXuGa && this.linhVat[2].meCuoc(t.meXuGa),
                void 0 !== t.meXuCa && this.linhVat[3].meCuoc(t.meXuCa),
                void 0 !== t.meXuCua && this.linhVat[4].meCuoc(t.meXuCua),
                void 0 !== t.meXuTom && this.linhVat[5].meCuoc(t.meXuTom))
            },
            unSelect: function() {
                Promise.all(this.linhVat.map(function(t) {
                    t.unSelect()
                }))
            },
            resetData: function() {
                var t = this
                  , e = Object.keys(cc.RedT.setting.baucua.data);
                Promise.all(e.map(function(t) {
                    return cc.RedT.setting.baucua.data[t] = 0
                })).then(function(e) {
                    t.DataHandling(cc.RedT.setting.baucua.data)
                }),
                this.unSelect()
            },
            newGame: function() {
                cc.RedT.setting.baucua.regOpen = !1,
                void 0 !== this.timeInterval && clearInterval(this.timeInterval)
            },
            status: function(t) {
                setTimeout(function() {
                    var e = new cc.Node;
                    if (e.addComponent(cc.Label),
                    (e = e.getComponent(cc.Label)).string = (t.win ? "+" : "-") + n.numberWithCommas(t.bet),
                    e.font = t.win ? cc.RedT.util.fontCong : cc.RedT.util.fontTru,
                    e.lineHeight = 130,
                    e.fontSize = 30,
                    e.node.position = cc.v2(0, 90),
                    this.notice.addChild(e.node),
                    e.node.runAction(cc.sequence(cc.moveTo(3.5, cc.v2(0, 200)), cc.callFunc(function() {
                        this.node.destroy()
                    }, e))),
                    t.win && cc.RedT.send({
                        user: {
                            updateCoint: !0
                        }
                    }),
                    void 0 !== t.thuong && t.thuong > 0) {
                        var i = new cc.Node;
                        i.addComponent(cc.Label),
                        (i = i.getComponent(cc.Label)).string = "+" + n.numberWithCommas(t.thuong),
                        i.font = cc.RedT.util.fontEffect,
                        i.lineHeight = 90,
                        i.fontSize = 14,
                        this.notice.addChild(i.node),
                        i.node.runAction(cc.sequence(cc.moveTo(3, cc.v2(0, 100)), cc.callFunc(function() {
                            this.node.destroy()
                        }, i)))
                    }
                }
                .bind(this), 2e3)
            }
        }),
        cc._RF.pop()
    }
    , {
        BauCua_linhVat: "BauCua_linhVat",
        Helper: "Helper"
    }],
    BigBabol_LichSu: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "9bdbaumrolLQrir/GNZ3N0S", "BigBabol_LichSu");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                page: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0
            },
            onLoad: function() {
                var t = this
                  , e = cc.instantiate(this.page);
                e.y = -275,
                this.node.addChild(e),
                this.page = e.getComponent("Pagination"),
                Promise.all(this.content.children.map(function(t) {
                    return Promise.all(t.children.map(function(t, e) {
                        return t.getComponent(cc.Label)
                    })).then(function(t) {
                        return t
                    })
                })).then(function(e) {
                    t.content2 = e
                }),
                this.page.init(this)
            },
            onEnable: function() {
                this.get_data()
            },
            onDisable: function() {},
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                cc.RedT.send({
                    g: {
                        big_babol: {
                            log: {
                                red: this.red,
                                page: t
                            }
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                var e = this;
                this.page.onSet(t.page, t.kmess, t.total),
                Promise.all(this.content2.map(function(i, o) {
                    var c = t.data[o];
                    if (void 0 !== c) {
                        e.content.children[o].active = !0,
                        i[0].string = n.getStringDateByTime(c.time),
                        i[1].string = c.id,
                        i[2].string = n.numberWithCommas(c.bet),
                        i[3].string = c.kq + " D\xf2ng",
                        i[4].string = n.numberWithCommas(c.win);
                        var s = i[2].node;
                        e.red ? (s.color = s.color.fromHEX("#FFF500"),
                        i[4].node.color = s.color) : (s.color = s.color.fromHEX("#FFFFFF"),
                        i[4].node.color = s.color)
                    } else
                        e.content.children[o].active = !1
                }))
            },
            reset: function() {
                Promise.all(this.content.children.map(function(t) {
                    t.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    BigBabol_Top: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "9d3a8Q9MRxEvadcBkolfb4n", "BigBabol_Top");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                item: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                cc.RedT.send({
                    g: {
                        big_babol: {
                            top: this.red
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                this.content.removeAllChildren();
                var e = this;
                Promise.all(t.map(function(t, i) {
                    var o = cc.instantiate(e.item)
                      , c = o.getComponent("VQRed_history_item");
                    c.time.string = n.getStringDateByTime(t.time),
                    c.phien.string = t.name,
                    c.cuoc.string = n.numberWithCommas(t.bet),
                    c.line.string = n.numberWithCommas(t.win),
                    c.win.string = 2 == t.type ? "N\u1ed5 H\u0169" : "Th\u1eafng l\u1edbn",
                    o.children[0].active = !(1 & i),
                    e.content.addChild(o)
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    BigBabol_line: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "29fd5Plb1tBC5FqFQowYBnJ", "BigBabol_line"),
        cc.Class({
            extends: cc.Component,
            properties: {
                background: cc.Node,
                nodeLine: cc.Node,
                mainLine: cc.Node
            },
            init: function(t) {
                this.RedT = t,
                this.mainLineInit(void 0 !== cc.RedT.setting.big_babol.line)
            },
            onEnable: function() {
                this.background.on(cc.Node.EventType.MOUSE_ENTER, this.RedT.setTop, this.RedT)
            },
            onDisable: function() {
                this.background.off(cc.Node.EventType.MOUSE_ENTER, this.RedT.setTop, this.RedT)
            },
            toggle: function() {
                this.node.active && cc.RedT.setting.big_babol.line.length < 1 ? this.RedT.addNotice("Ch\u1ecdn \xedt nh\u1ea5t 1 d\xf2ng") : this.node.active = !this.node.active
            },
            select: function(t) {
                var e = t.target;
                e.children[1].active ? (e.children[1].active = !1,
                e.children[0].active = !0) : (e.children[1].active = !0,
                e.children[0].active = !1),
                this.check()
            },
            check: function() {
                var t = this
                  , e = this;
                Promise.all(this.nodeLine.children.map(function(t, i) {
                    return t.children[1].active ? (e.mainLine[i].onSet(),
                    i + 1) : void e.mainLine[i].offSet()
                })).then(function(e) {
                    Promise.all(e.filter(function(t) {
                        return void 0 !== t
                    })).then(function(e) {
                        cc.RedT.setting.big_babol.line = e,
                        t.RedT.labelLine.string = e.length
                    })
                })
            },
            selectChan: function() {
                var t = this
                  , e = this;
                Promise.all(this.nodeLine.children.map(function(t, i) {
                    var n = i + 1;
                    if (!(n % 2))
                        return t.children[0].active = !1,
                        t.children[1].active = !0,
                        e.mainLine[i].onSet(),
                        n;
                    t.children[0].active = !0,
                    t.children[1].active = !1,
                    e.mainLine[i].offSet()
                })).then(function(e) {
                    Promise.all(e.filter(function(t) {
                        return void 0 !== t
                    })).then(function(e) {
                        cc.RedT.setting.big_babol.line = e,
                        t.RedT.labelLine.string = e.length
                    })
                })
            },
            selectLe: function() {
                var t = this
                  , e = this;
                Promise.all(this.nodeLine.children.map(function(t, i) {
                    var n = i + 1;
                    if (n % 2)
                        return t.children[0].active = !1,
                        t.children[1].active = !0,
                        e.mainLine[i].onSet(),
                        n;
                    t.children[0].active = !0,
                    t.children[1].active = !1,
                    e.mainLine[i].offSet()
                })).then(function(e) {
                    Promise.all(e.filter(function(t) {
                        return void 0 !== t
                    })).then(function(e) {
                        cc.RedT.setting.big_babol.line = e,
                        t.RedT.labelLine.string = e.length
                    })
                })
            },
            selectAll: function(t, e) {
                var i = this
                  , n = this;
                Promise.all(this.nodeLine.children.map(function(t, i) {
                    var n = "1" == e;
                    return t.children[0].active = !n,
                    t.children[1].active = n,
                    n ? i + 1 : void 0
                })).then(function(t) {
                    Promise.all(t.filter(function(t, e) {
                        var i = void 0 !== t;
                        return i ? n.mainLine[e].onSet() : n.mainLine[e].offSet(),
                        i
                    })).then(function(t) {
                        cc.RedT.setting.big_babol.line = t,
                        i.RedT.labelLine.string = t.length
                    })
                })
            },
            mainLineInit: function(t) {
                var e = this
                  , i = this;
                Promise.all(this.mainLine.children.map(function(t) {
                    return t.getComponent("BigBabol_main_line").init(i.RedT)
                })).then(function(n) {
                    e.mainLine = n,
                    t ? (e.RedT.labelLine.string = cc.RedT.setting.big_babol.line.length,
                    Promise.all(e.nodeLine.children.map(function(t, e) {
                        cc.RedT.setting.big_babol.line.filter(function(e) {
                            return e == t.name
                        }).length ? (t.children[0].active = !1,
                        t.children[1].active = !0,
                        i.mainLine[e].onSet()) : (t.children[0].active = !0,
                        t.children[1].active = !1,
                        i.mainLine[e].offSet())
                    }))) : e.selectAll(null, "1")
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    BigBabol_main_line: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "df8c85uzp9M6rkEtOxa9TjC", "BigBabol_main_line"),
        cc.Class({
            extends: cc.Component,
            init: function(t) {
                return this.RedT = t,
                this
            },
            onEnable: function() {
                this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onhover, this),
                this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this)
            },
            onDisable: function() {
                this.node.off(cc.Node.EventType.MOUSE_ENTER, this.onhover, this),
                this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this)
            },
            onhover: function() {
                this.defColor = this.node.color,
                this.node.children[1].active = !0,
                this.node.color = this.node.color.fromHEX(this.RedT.onColor)
            },
            offhover: function() {
                this.node.color = this.defColor,
                this.node.children[1].active = !1
            },
            onSet: function() {
                this.node.color = this.node.color.fromHEX(this.RedT.onColor)
            },
            offSet: function() {
                this.node.color = this.node.color.fromHEX(this.RedT.offColor)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    BigBabol_reel_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "9394bXHjwdMpZC0cTOy8c/e", "BigBabol_reel_item"),
        cc.Class({
            extends: cc.Component,
            init: function(t) {
                this.RedT = t
            },
            onLoad: function() {
                this.icon = this.node.children[0].getComponent(cc.Sprite)
            },
            stop: function() {
                Promise.all(this.node.children.map(function(t) {
                    var e = t.getComponents(cc.Animation);
                    Promise.all(e.map(function(e) {
                        t.removeComponent(e)
                    }))
                }))
            },
            random: function() {
                var t = ~~(6 * Math.random());
                return this.setIcon(t),
                t
            },
            setIcon: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                t < 4 ? (this.node.children[0].active = !0,
                this.icon.spriteFrame = this.RedT.icons[t],
                this.node.children[1].active = this.node.children[2].active = !1) : 4 == t ? (this.node.children[1].active = !0,
                this.node.children[0].active = this.node.children[2].active = !1) : 5 == t && (this.node.children[2].active = !0,
                this.node.children[0].active = this.node.children[1].active = !1),
                e && (this.data = t)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    BigBabol_reel: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "3c486/mpTFEsoXHhkW8UDhO", "BigBabol_reel"),
        cc.Class({
            extends: cc.Component,
            init: function(t) {
                var e = this;
                this.RedT = t,
                this.icons = [];
                var i = this;
                Promise.all([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function(t, e) {
                    var n = cc.instantiate(i.RedT.iconPrefab);
                    return i.node.addChild(n),
                    (n = n.getComponent("BigBabol_reel_item")).init(i.RedT),
                    e > 2 && e < 23 && (n.stop(),
                    n.random()),
                    n
                })).then(function(t) {
                    e.icons = t,
                    e.icons[25].setIcon(e.icons[2].random()),
                    e.icons[24].setIcon(e.icons[1].random()),
                    e.icons[23].setIcon(e.icons[0].random())
                })
            },
            spin: function(t) {
                this.node.stopAllActions();
                var e = cc.moveTo(1, cc.v2(this.node.x, -(this.node.height - 260))).easing(cc.easeInOut(2))
                  , i = cc.callFunc(function() {
                    this.node.y = 0,
                    this.RedT.random()
                }, this)
                  , n = cc.callFunc(function() {
                    0 === t && this.RedT.copy(),
                    this.node.y = 0
                }, this);
                if (2 === t) {
                    var o = cc.callFunc(function() {
                        this.RedT.hieuUng()
                    }, this);
                    this.node.runAction(cc.sequence(cc.delayTime(.1 * t), e, i, o))
                } else
                    this.node.runAction(cc.sequence(cc.delayTime(.1 * t), e, n))
            },
            stop: function() {
                this.node.stopAllActions(),
                this.RedT.copy(),
                this.node.y = 0
            }
        }),
        cc._RF.pop()
    }
    , {}],
    BigBabol: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "6bd8dCJ5kJAlrYTElDCPCSm", "BigBabol");
        var n = t("Helper")
          , o = t("BigBabol_reel")
          , c = t("BigBabol_line");
        cc.Class({
            extends: cc.Component,
            properties: {
                main: {
                    default: null,
                    type: cc.Node
                },
                background: cc.Node,
                line: c,
                labelLine: cc.Label,
                reels: {
                    default: [],
                    type: o
                },
                icons: {
                    default: [],
                    type: cc.SpriteFrame
                },
                iconPrefab: {
                    default: null,
                    type: cc.Prefab
                },
                buttonLine: cc.Node,
                buttonSpin: cc.Node,
                buttonAuto: cc.Node,
                buttonStop: cc.Node,
                buttonCoint: cc.Node,
                nodeRed: {
                    default: null,
                    type: cc.Node
                },
                nodeXu: {
                    default: null,
                    type: cc.Node
                },
                font: {
                    default: null,
                    type: cc.BitmapFont
                },
                bet: {
                    default: null,
                    type: cc.Node
                },
                notice: {
                    default: null,
                    type: cc.Node
                },
                prefabNotice: {
                    default: null,
                    type: cc.Prefab
                },
                phien: cc.Label,
                hu: cc.Label,
                cuoc: "",
                onColor: "",
                offColor: "",
                isAuto: !1,
                isSpeed: !1,
                isSpin: !1,
                red: !0,
                btnScaleIn: {
                    default: null,
                    type: cc.Node
                },
                btnScaleOut: {
                    default: null,
                    type: cc.Node
                }
            },
            init: function(t) {
                this.RedT = t,
                cc.RedT.setting.big_babol = cc.RedT.setting.big_babol || {},
                "true" == localStorage.getItem("big_babol") && (this.node.active = !0),
                void 0 !== cc.RedT.setting.big_babol.position && (this.node.position = cc.RedT.setting.big_babol.position),
                void 0 !== cc.RedT.setting.big_babol.bet && cc.RedT.setting.big_babol.bet != this.cuoc && this.intChangerBet(),
                void 0 !== cc.RedT.setting.big_babol.red && this.red != cc.RedT.setting.big_babol.red && this.changerCoint(),
                void 0 !== cc.RedT.setting.big_babol.isAuto && this.isAuto != cc.RedT.setting.big_babol.isAuto && this.onClickAuto()
            },
            onLoad: function() {
                var t = this;
                this.ttOffset = null,
                this.line.init(this),
                Promise.all(this.reels.map(function(e) {
                    e.init(t)
                }))
            },
            onEnable: function() {
                this.onGetHu(),
                this.background.on(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.background.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.background.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.background.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.background.on(cc.Node.EventType.MOUSE_ENTER, this.setTop, this)
            },
            onDisable: function() {
                this.background.off(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.background.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.background.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.background.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.background.off(cc.Node.EventType.MOUSE_ENTER, this.setTop, this),
                this.onCloseGame()
            },
            eventStart: function(t) {
                this.setTop(),
                this.ttOffset = cc.v2(t.touch.getLocationX() - this.node.position.x, t.touch.getLocationY() - this.node.position.y)
            },
            eventMove: function(t) {
                this.node.position = cc.v2(t.touch.getLocationX() - this.ttOffset.x, t.touch.getLocationY() - this.ttOffset.y)
            },
            eventEnd: function() {
                cc.RedT.setting.big_babol.position = this.node.position
            },
            setTop: function() {
                this.node.parent.insertChild(this.node)
            },
            openGame: function() {
                cc.RedT.audio.playClick(),
                cc.RedT.IS_LOGIN ? (this.node.active = !0,
                localStorage.setItem("big_babol", !0),
                this.setTop()) : cc.RedT.inGame.dialog.showSignIn()
            },
            closeGame: function() {
                cc.RedT.audio.playUnClick(),
                this.node.active = !1,
                localStorage.setItem("big_babol", !1)
            },
            autoSpin: function() {
                Promise.all(this.reels.map(function(t, e) {
                    t.spin(e)
                }))
            },
            onSpin: function() {
                this.buttonLine.pauseSystemEvents(),
                this.buttonSpin.pauseSystemEvents(),
                this.buttonCoint.pauseSystemEvents(),
                this.line.node.active = !1,
                Promise.all(this.bet.children.map(function(t) {
                    t.pauseSystemEvents()
                }))
            },
            offSpin: function() {
                this.isSpin = this.buttonStop.active = this.isAuto = !1,
                this.buttonAuto.color = cc.color(155, 155, 155),
                this.buttonAuto.active = !0,
                this.buttonLine.resumeSystemEvents(),
                this.buttonSpin.resumeSystemEvents(),
                this.buttonCoint.resumeSystemEvents(),
                Promise.all(this.bet.children.map(function(t) {
                    t.children[0].active || t.resumeSystemEvents()
                }))
            },
            onClickSpin: function() {
                cc.RedT.setting.big_babol.line.length < 1 ? this.addNotice("Ch\u1ecdn \xedt nh\u1ea5t 1 d\xf2ng") : this.isSpin || (this.isSpin = !0,
                this.onSpin(),
                this.onGetSpin())
            },
            onClickAuto: function() {
                this.isAuto = cc.RedT.setting.big_babol.isAuto = !this.isAuto,
                this.buttonAuto.color = this.isAuto ? cc.Color.WHITE : cc.color(155, 155, 155),
                this.buttonStop.active = !!this.isSpin && !!this.isAuto,
                this.buttonAuto.active = !this.buttonStop.active
            },
            onClickStop: function() {
                this.onClickAuto(),
                this.buttonStop.active = !1
            },
            changerCoint: function() {
                this.red = cc.RedT.setting.big_babol.red = !this.red,
                this.nodeRed.active = !this.nodeRed.active,
                this.nodeXu.active = !this.nodeXu.active,
                this.onGetHu()
            },
            intChangerBet: function() {
                var t = this;
                Promise.all(this.bet.children.map(function(e) {
                    e.name == cc.RedT.setting.big_babol.bet ? (t.cuoc = e.name,
                    e.children[0].active = !0,
                    e.pauseSystemEvents()) : (e.children[0].active = !1,
                    e.resumeSystemEvents())
                }))
            },
            changerBet: function(t, e) {
                this.cuoc = cc.RedT.setting.big_babol.bet = e;
                var i = t.target;
                Promise.all(this.bet.children.map(function(t) {
                    t == i ? (t.children[0].active = !0,
                    t.pauseSystemEvents()) : (t.children[0].active = !1,
                    t.resumeSystemEvents())
                })),
                this.onGetHu()
            },
            onGetInfo: function() {
                cc.RedT.send({
                    g: {
                        big_babol: {
                            info: {
                                cuoc: this.cuoc,
                                red: this.red
                            }
                        }
                    }
                })
            },
            onGetSpin: function() {
                cc.RedT.send({
                    g: {
                        big_babol: {
                            spin: {
                                cuoc: this.cuoc,
                                red: this.red,
                                line: cc.RedT.setting.big_babol.line
                            }
                        }
                    }
                })
            },
            onCloseGame: function() {
                this.isSpin = !1,
                Promise.all(this.reels.map(function(t) {
                    t.stop()
                })),
                this.offSpin()
            },
            addNotice: function(t) {
                var e = cc.instantiate(this.prefabNotice);
                e.getComponent("mini_warning").text.string = t,
                this.notice.addChild(e)
            },
            onData: function(t) {
                var e = this;
                void 0 !== t.status && (1 === t.status ? (this.notice.removeAllChildren(),
                this.win = t.win,
                this.nohu = t.nohu,
                this.isBigWin = t.isBigWin,
                this.buttonStop.active = !!this.isAuto,
                this.buttonAuto.active = !this.buttonStop.active,
                Promise.all(t.cel.map(function(t, i) {
                    Promise.all(t.map(function(t, n) {
                        e.reels[i].icons[n].setIcon(t, !0)
                    }))
                })),
                this.autoSpin()) : this.offSpin()),
                void 0 !== t.line_win && (this.line_win = t.line_win),
                void 0 !== t.phien && (this.phien.string = t.phien),
                void 0 !== t.log && this.RedT.Dialog.BigBabol_LichSu.onData(t.log),
                void 0 !== t.top && this.RedT.Dialog.BigBabol_Top.onData(t.top),
                void 0 !== t.notice && this.addNotice(t.notice)
            },
            copy: function() {
                Promise.all(this.reels.map(function(t) {
                    void 0 !== t.icons && void 0 !== t.icons[25] && void 0 !== t.icons[25].setIcon && (t.icons[25].setIcon(t.icons[2].data),
                    t.icons[24].setIcon(t.icons[1].data),
                    t.icons[23].setIcon(t.icons[0].data))
                }))
            },
            hieuUng: function() {
                if (this.nohu) {
                    this.nohu = !1,
                    1 == this.isAuto && this.onClickStop();
                    var t = cc.instantiate(this.RedT.PrefabNoHu)
                      , e = (t = t.getComponent(cc.Animation)).node.children[6].getComponent(cc.Label);
                    this.RedT.nodeEfect.addChild(t.node),
                    t.on("play", function() {
                        var i = cc.callFunc(function() {
                            cc.RedT.audio.playEf("winHu"),
                            n.numberTo(e, 0, this.win, 1e3, !0)
                        }, this);
                        t.node.runAction(cc.sequence(cc.delayTime(.25), i))
                    }, this),
                    t.on("finished", function() {
                        t.node.destroy(),
                        this.win = 0,
                        this.hieuUng()
                    }, this),
                    t.play()
                } else if (!this.nohu && this.isBigWin) {
                    this.isBigWin = !1;
                    var i = cc.instantiate(this.RedT.prefabBigWin);
                    (i = i.getComponent(cc.Animation)).on("finished", function() {
                        i.node.destroy(),
                        this.isAuto ? this.onGetSpin() : this.offSpin()
                    }, this),
                    i.node.bet = this.win,
                    i.node.red = this.red,
                    i.node.position = cc.v2(0, 140),
                    this.notice.addChild(i.node),
                    this.win = 0,
                    this.isAuto || this.offSpin()
                } else if (!this.isBigWin && this.win > 0) {
                    var o = new cc.Node;
                    o.addComponent(cc.Label),
                    o = o.getComponent(cc.Label),
                    n.numberTo(o, 0, this.win, 600, !0),
                    o.font = this.red ? cc.RedT.util.fontCong : cc.RedT.util.fontTru,
                    o.lineHeight = 130,
                    o.fontSize = 25,
                    o.node.position = cc.v2(-6, 140),
                    o.node.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
                        o.node.destroy(),
                        this.hieuUng(),
                        this.offLineWin()
                    }, this))),
                    this.notice.addChild(o.node),
                    this.win = 0,
                    this.onLineWin()
                } else
                    this.isAuto ? this.timeOut = setTimeout(function() {
                        this.onGetSpin()
                    }
                    .bind(this), 300) : this.offSpin()
            },
            onLineWin: function() {
                var t = this;
                Promise.all(this.line_win.map(function(e) {
                    var i = t.line.mainLine[e.line - 1];
                    i.onhover(),
                    i.node.pauseSystemEvents()
                }))
            },
            offLineWin: function() {
                var t = this;
                Promise.all(this.line_win.map(function(e) {
                    var i = t.line.mainLine[e.line - 1];
                    i.offhover(),
                    i.node.resumeSystemEvents()
                }))
            },
            random: function() {
                Promise.all(this.reels.map(function(t) {
                    Promise.all(t.icons.map(function(t, e) {
                        e > 2 && e < 23 && t.random()
                    }))
                }))
            },
            onGetHu: function() {
                var t = this;
                if (void 0 !== cc.RedT.setting.topHu.data && this.node.active) {
                    var e = this;
                    Promise.all(cc.RedT.setting.topHu.data.big_babol.filter(function(t) {
                        return t.type == e.cuoc && t.red == e.red
                    })).then(function(e) {
                        var i = n.getOnlyNumberInString(t.hu.string)
                          , o = e[0].bet;
                        i - o != 0 && n.numberTo(t.hu, i, o, 2e3, !0)
                    })
                }
            },
            zoom: function(t) {
                1.2 == this.main.getScale() ? (this.main.setScale(.8, .8),
                this.btnScaleIn.active = !0,
                this.btnScaleOut.active = !1) : (this.main.setScale(1.2, 1.2),
                this.btnScaleIn.active = !1,
                this.btnScaleOut.active = !0)
            }
        }),
        cc._RF.pop()
    }
    , {
        BigBabol_line: "BigBabol_line",
        BigBabol_reel: "BigBabol_reel",
        Helper: "Helper"
    }],
    BrowserUtil: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "3144b0EOb5M+JRv7V+30M1S", "BrowserUtil"),
        e.exports = {
            showCursorText: function() {
                this.isCursorAuto() || this.setCursor("text")
            },
            showCursorPointer: function() {
                this.isCursorAuto() || this.setCursor("pointer")
            },
            showCursorMove: function() {
                this.isCursorAuto() || this.setCursor("move")
            },
            showCursorAuto: function() {
                this.isCursorAuto() || this.setCursor("auto")
            },
            showCursorShoot: function() {
                cc.sys.isBrowser && (document.getElementById("GameDiv").style.cursor = "url('cursors/cursor-shot.png') 5 2, auto")
            },
            showCursorAutoForce: function() {
                cc.sys.isBrowser && this.setCursor("auto")
            },
            isCursorAuto: function() {
                return !!cc.sys.isBrowser && "auto" === document.getElementById("GameDiv").style.cursor
            },
            setCursor: function(t) {
                cc.sys.isBrowser && (document.body.style.cursor = t)
            },
            showTooltip: function(t) {
                cc.sys.isBrowser && (document.body.title = t)
            },
            focusGame: function() {
                cc.sys.isBrowser && document.getElementsByTagName("canvas")[0].focus()
            },
            getHTMLElementByEditBox: function(t) {
                return t._impl._elem
            },
            checkEditBoxFocus: function(t) {
                return t.isFocused()
            },
            focusEditBox: function(t) {
                t._impl._elem.focus(),
                t.focus()
            },
            unFocusEditBox: function(t) {},
            inputAddEvent: function(t, e, i) {
                t._impl._elem.addEventListener(e, i)
            },
            inputRemoveEvent: function(t, e, i) {
                t._impl._elem.removeEventListener(e, i)
            },
            readOnlyEditBox: function(t) {
                t.readOnly = !0
            }
        },
        cc._RF.pop()
    }
    , {}],
    CaNhan: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "47772lCqUBB4owyBQc/Yrdt", "CaNhan");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                avatar: cc.Sprite,
                UID: {
                    default: null,
                    type: cc.Label
                },
                username: {
                    default: null,
                    type: cc.Label
                },
                phone: {
                    default: null,
                    type: cc.Label
                },
                email: {
                    default: null,
                    type: cc.Label
                },
                joinedOn: {
                    default: null,
                    type: cc.Label
                },
                cmt: cc.Label,
                nodeRank: cc.Node,
                nodeNhan: cc.Node,
                vipLevel: cc.Label,
                vipTong: cc.Label,
                vipHien: cc.Label,
                vipTiep: cc.Label
            },
            onEnable: function() {
                this.getLevel()
            },
            getLevel: function() {
                cc.RedT.send({
                    user: {
                        getLevel: !0
                    }
                })
            },
            level: function(t) {
                cc.RedT.userData(t);
                var e = this;
                cc.RedT.user.vipHT = t.vipHT - t.vipPre,
                cc.RedT.user.vipNext = t.vipNext - t.vipPre,
                cc.RedT.inGame.header.level(t.level),
                cc.RedT.inGame.header.updateEXP(cc.RedT.user.vipHT, cc.RedT.user.vipNext),
                this.vipLevel.string = "VIP" + t.level,
                this.vipTong.string = n.numberWithCommas(t.vipTL),
                this.vipHien.string = n.numberWithCommas(t.vipHT),
                this.vipTiep.string = n.numberWithCommas(t.vipNext),
                Promise.all(this.nodeRank.children.map(function(i, n) {
                    i.name <= t.level ? (i.color = i.color.fromHEX("#FFFFFF"),
                    i.name == t.level ? e.nodeNhan.children[n].children[3].active = !0 : e.nodeNhan.children[n].children[3].active = !1) : (i.color = i.color.fromHEX("#5F5F5F"),
                    e.nodeNhan.children[n].children[3].active = !1)
                }))
            },
            onNhanThuong: function() {
                cc.RedT.send({
                    user: {
                        nhanthuong: !0
                    }
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    Candy_bonus_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "d4e35v/kElGdrvv9FRszHdd", "Candy_bonus_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                item: cc.Sprite,
                text: cc.Label
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Candy_dialog: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "09680O6Rg9HML88fBtJFvh9", "Candy_dialog");
        var n = t("Candy_history")
          , o = t("Candy_top");
        cc.Class({
            extends: cc.Component,
            properties: {
                history: n,
                top: o,
                help: cc.Node
            },
            init: function() {
                this.actionShow = cc.spawn(cc.scaleTo(.5, 1).easing(cc.easeBackOut(2.5)), cc.fadeTo(.5, 255)),
                this.objShow = null,
                this.objTmp = null
            },
            onClickBack: function() {
                cc.RedT.audio.playUnClick(),
                this.onBack()
            },
            onBack: function() {
                null != this.objShow ? void 0 == this.objShow.previous || null == this.objShow.previous ? (this.objShow.active = !1,
                this.node.active = !1,
                this.objShow = null) : (this.objTmp = this.objShow,
                this.objShow = this.objShow.previous,
                this.objTmp.previous = null,
                this.objTmp.active = !1,
                this.objShow.active = !0,
                this.objTmp = null) : this.node.active = !1
            },
            onClosePrevious: function(t) {
                void 0 !== t.previous && null !== t.previous && (this.onClosePrevious(t.previous),
                delete t.previous),
                t.active = !1
            },
            onCloseDialog: function() {
                null != this.objShow ? void 0 == this.objShow.previous || null == this.objShow.previous ? (this.objShow.active = this.node.active = !1,
                this.objShow = null) : (this.onClosePrevious(this.objShow.previous),
                this.objShow.active = this.node.active = !1,
                delete this.objShow.previous,
                this.objShow = null) : this.node.active = !1
            },
            resetSizeDialog: function(t) {
                t.stopAllActions(),
                t.scale = .5,
                t.opacity = 0
            },
            showHistory: function() {
                this.node.active = this.history.node.active = !0,
                this.objShow = this.history.node
            },
            showTop: function() {
                this.node.active = this.top.node.active = !0,
                this.objShow = this.top.node
            },
            showHelp: function() {
                this.node.active = this.help.active = !0,
                this.objShow = this.help
            }
        }),
        cc._RF.pop()
    }
    , {
        Candy_history: "Candy_history",
        Candy_top: "Candy_top"
    }],
    Candy_history: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "17e0aDFKYhBNoHw5YygdT+w", "Candy_history");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                page: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0
            },
            onLoad: function() {
                var t = this
                  , e = cc.instantiate(this.page);
                e.y = -278,
                this.node.addChild(e),
                this.page = e.getComponent("Pagination"),
                Promise.all(this.content.children.map(function(t) {
                    return t.getComponent("VQRed_history_item")
                })).then(function(e) {
                    t.content = e
                }),
                this.page.init(this)
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                cc.RedT.send({
                    g: {
                        candy: {
                            log: {
                                red: this.red,
                                page: t
                            }
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                this.page.onSet(t.page, t.kmess, t.total),
                Promise.all(this.content.map(function(e, i) {
                    var o = t.data[i];
                    void 0 !== o ? (e.node.active = !0,
                    e.time.string = n.getStringDateByTime(o.time),
                    e.phien.string = o.id,
                    e.cuoc.string = n.numberWithCommas(o.bet),
                    e.line.string = o.kq + " D\xf2ng",
                    e.win.string = n.numberWithCommas(o.win)) : e.node.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    Candy_iLine: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "ca5891XEyBMXooOmHi4eVGy", "Candy_iLine"),
        cc.Class({
            extends: cc.Component,
            properties: {
                line: cc.Node,
                ef: !1
            },
            onEnable: function() {
                this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onShow, this),
                this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onHidden, this)
            },
            onDisable: function() {
                this.node.off(cc.Node.EventType.MOUSE_ENTER, this.onShow, this),
                this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.onHidden, this)
            },
            onShow: function() {
                this.line.active = !0
            },
            onHidden: function() {
                !this.ef && (this.line.active = !1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Candy_line: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "6e0c4Ag8FpJQ6D5qWtj+OkS", "Candy_line");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                lines: cc.Node,
                mainLines: cc.Node
            },
            init: function(t) {
                var e = this;
                this.RedT = t;
                Promise.all(this.mainLines.children.map(function(t) {
                    return t.getComponent("Candy_iLine")
                })).then(function(t) {
                    e.mainLines = t
                }),
                this.selectAll(null, "1")
            },
            onOpen: function() {
                cc.RedT.audio.playClick(),
                this.node.active = !0
            },
            onClose: function() {
                cc.RedT.audio.playUnClick(),
                this.node.active && this.data.length < 1 ? this.RedT.notice.show({
                    title: "C\u1ea2NH B\xc1O",
                    text: "Ch\u1ecdn \xedt nh\u1ea5t 1 d\xf2ng"
                }) : this.node.active = !1
            },
            select: function(t) {
                var e = t.target;
                e.children[0].active ? (e.children[0].active = !1,
                e.children[1].active = !0) : (e.children[0].active = !0,
                e.children[1].active = !1),
                this.check()
            },
            check: function() {
                var t = this;
                Promise.all(this.lines.children.map(function(t, e) {
                    return t.children[1].active ? e + 1 : void 0
                })).then(function(e) {
                    Promise.all(e.filter(function(t) {
                        return void 0 !== t
                    })).then(function(e) {
                        t.data = e,
                        t.RedT.labelLine.string = e.length,
                        t.RedT.tong.string = n.numberWithCommas(e.length * n.getOnlyNumberInString(t.RedT.bet.string))
                    })
                })
            },
            selectChan: function() {
                var t = this;
                Promise.all(this.lines.children.map(function(t, e) {
                    var i = e + 1;
                    if (!(i % 2))
                        return t.children[0].active = !1,
                        t.children[1].active = !0,
                        i;
                    t.children[0].active = !0,
                    t.children[1].active = !1
                })).then(function(e) {
                    Promise.all(e.filter(function(t) {
                        return void 0 !== t
                    })).then(function(e) {
                        t.data = e,
                        t.RedT.labelLine.string = e.length,
                        t.RedT.tong.string = n.numberWithCommas(e.length * n.getOnlyNumberInString(t.RedT.bet.string))
                    })
                })
            },
            selectLe: function() {
                var t = this;
                Promise.all(this.lines.children.map(function(t, e) {
                    var i = e + 1;
                    if (i % 2)
                        return t.children[0].active = !1,
                        t.children[1].active = !0,
                        i;
                    t.children[0].active = !0,
                    t.children[1].active = !1
                })).then(function(e) {
                    Promise.all(e.filter(function(t) {
                        return void 0 !== t
                    })).then(function(e) {
                        t.data = e,
                        t.RedT.labelLine.string = e.length,
                        t.RedT.tong.string = n.numberWithCommas(e.length * n.getOnlyNumberInString(t.RedT.bet.string))
                    })
                })
            },
            selectAll: function(t, e) {
                var i = this;
                Promise.all(this.lines.children.map(function(t, i) {
                    var n = "1" == e;
                    return t.children[1].active = n,
                    t.children[0].active = !n,
                    n ? i + 1 : void 0
                })).then(function(t) {
                    Promise.all(t.filter(function(t, e) {
                        return void 0 !== t
                    })).then(function(t) {
                        i.data = t,
                        i.RedT.labelLine.string = t.length,
                        i.RedT.tong.string = n.numberWithCommas(t.length * n.getOnlyNumberInString(i.RedT.bet.string))
                    })
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    Candy_playBonus: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "6f5fd6x7T5GNJOs0sePV0JY", "Candy_playBonus");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                numberBonus: cc.Label,
                listBox: cc.Node,
                notice: cc.Node,
                numberWin: cc.Label,
                icons: {
                    default: [],
                    type: cc.SpriteFrame
                }
            },
            init: function(t) {
                var e = this;
                this.RedT = t,
                Promise.all(this.listBox.children.map(function(t) {
                    return t.getComponent("Candy_bonus_item")
                })).then(function(t) {
                    e.listBox = t
                })
            },
            onPlay: function() {
                this.reset(),
                this.node.active = !0,
                this.numberBonus.string = 10
            },
            onClickBox: function(t) {
                this.numberBonus.string && (cc.RedT.audio.playClick(),
                this.onSend(t.target.name))
            },
            closeNotice: function() {
                this.notice.active = this.node.active = !1,
                this.RedT.hieuUng()
            },
            onData: function(t) {
                void 0 !== t.box && (this.listBox[t.box].text.string = n.numberWithCommas(t.bet),
                this.numberBonus.string = t.bonus);
                void 0 !== t.win && (this.notice.active = !0,
                this.numberWin.string = n.numberWithCommas(t.win),
                this.RedT.vuathang.string = n.numberWithCommas(1 * n.getOnlyNumberInString(this.RedT.vuathang.string) + t.win))
            },
            onSend: function(t) {
                cc.RedT.send({
                    g: {
                        candy: {
                            bonus: {
                                box: t
                            }
                        }
                    }
                })
            },
            reset: function() {
                var t = this;
                Promise.all(this.listBox.map(function(e) {
                    var i = 5 * Math.random() >> 0;
                    e.item.spriteFrame = t.icons[i],
                    e.text.string = ""
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    Candy_reel: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "4ac84jBjYBJiZpTkOu4E3j8", "Candy_reel"),
        cc.Class({
            extends: cc.Component,
            init: function(t) {
                var e = this;
                this.RedT = t,
                this.icons = [];
                var i = this
                  , n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                Promise.all(n.map(function(t, e) {
                    var o = cc.instantiate(i.RedT.icon);
                    return i.node.addChild(o),
                    (o = o.getComponent("candy_reel_item")).init(i.RedT),
                    e > 2 && e < n.length - 3 && o.random(),
                    o
                })).then(function(t) {
                    e.icons = t,
                    e.icons[e.icons.length - 1].setIcon(e.icons[4].random()),
                    e.icons[e.icons.length - 2].setIcon(e.icons[3].random()),
                    e.icons[e.icons.length - 3].setIcon(e.icons[2].random()),
                    e.icons[e.icons.length - 4].setIcon(e.icons[1].random()),
                    e.icons[e.icons.length - 5].setIcon(e.icons[0].random())
                })
            },
            spin: function(t) {
                this.node.stopAllActions();
                var e = cc.moveTo(1, cc.v2(this.node.x, -(this.node.height - 408))).easing(cc.easeInOut(3))
                  , i = cc.callFunc(function() {
                    0 === t && this.RedT.copy(),
                    this.node.y = 0
                }, this);
                if (4 === t) {
                    var n = cc.callFunc(function() {
                        this.RedT.EF_vuathang(),
                        this.node.y = 0,
                        this.RedT.random(),
                        this.RedT.hieuUng()
                    }, this);
                    this.node.runAction(cc.sequence(cc.delayTime(.1 * t), e, n))
                } else
                    this.node.runAction(cc.sequence(cc.delayTime(.1 * t), e, i))
            },
            stop: function() {
                this.node.stopAllActions(),
                this.RedT.copy(),
                this.node.y = 0
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Candy_top: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "9972eRTCvJEwony+DM8Ery0", "Candy_top");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                item: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                cc.RedT.send({
                    g: {
                        candy: {
                            top: this.red
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                this.content.removeAllChildren();
                var e = this;
                Promise.all(t.map(function(t, i) {
                    var o = cc.instantiate(e.item)
                      , c = o.getComponent("VQRed_history_item");
                    c.time.string = n.getStringDateByTime(t.time),
                    c.phien.string = t.name,
                    c.cuoc.string = n.numberWithCommas(t.bet),
                    c.line.string = n.numberWithCommas(t.win),
                    c.win.string = 2 == t.type ? "N\u1ed5 H\u0169" : "Th\u1eafng l\u1edbn",
                    o.children[0].active = !(1 & i),
                    e.content.addChild(o)
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    Candy: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "51097oLSzpFtZ9xj7eGzl0G", "Candy");
        var n = t("Helper")
          , o = t("Candy_reel")
          , c = t("Candy_line")
          , s = t("Candy_playBonus")
          , a = t("Notice")
          , h = t("Candy_dialog");
        cc.Class({
            extends: cc.Component,
            properties: {
                gameBonus: s,
                redhat: cc.Node,
                reels: {
                    default: [],
                    type: o
                },
                icon: cc.Prefab,
                icons: {
                    default: [],
                    type: cc.SpriteFrame
                },
                FrameAuto: {
                    default: [],
                    type: cc.SpriteFrame
                },
                betString: {
                    default: [],
                    type: cc.String
                },
                nodeRed: cc.Node,
                nodeXu: cc.Node,
                nodeNotice: cc.Node,
                prefabNotice: cc.Prefab,
                MiniPanel: cc.Prefab,
                loading: cc.Node,
                notice: a,
                dialog: h,
                Line: c,
                hu: cc.Label,
                taikhoan: cc.Label,
                tong: cc.Label,
                vuathang: cc.Label,
                labelLine: cc.Label,
                bet: cc.Label,
                freeLabel: cc.Label,
                BigWin: cc.Animation,
                BigWin_Label: cc.Label,
                NoHu_close: cc.Node,
                NoHu: cc.Animation,
                NoHu_Label: cc.Label,
                EF_Bonus: cc.Animation,
                EF_Free: cc.Animation,
                buttonCoint: cc.Node,
                buttonLine: cc.Node,
                buttonSpin: cc.Node,
                nodeChangerBetL: cc.Node,
                nodeChangerBetR: cc.Node,
                buttonAuto: cc.Sprite,
                isAuto: !1,
                isSpin: !1,
                isFreeSpin: !1,
                red: !0,
                betSelect: 0
            },
            onLoad: function() {
                cc.RedT.inGame = this;
                var t = cc.instantiate(this.MiniPanel);
                cc.RedT.MiniPanel = t.getComponent("MiniPanel"),
                this.redhat.insertChild(t);
                var e = this;
                this.Line.init(this),
                this.gameBonus.init(this),
                this.BigWin.on("finished", this.BigWinFinish, this),
                this.BigWin.on("play", this.BigWinPlay, this),
                this.NoHu.on("finished", this.NoHuFinish, this),
                this.NoHu.on("play", this.NoHuPlay, this),
                this.EF_Bonus.on("finished", this.EF_BonusFinish, this),
                this.EF_Free.on("finished", this.EF_FreeFinish, this),
                Promise.all(this.reels.map(function(t) {
                    t.init(e)
                })),
                cc.RedT.send({
                    scene: "candy"
                }),
                this.taikhoan.string = n.numberWithCommas(cc.RedT.user.red),
                this.speed = 400,
                cc.RedT.isSoundBackground()
            },
            BigWinPlay: function() {
                var t = cc.callFunc(function() {
                    cc.RedT.audio.playEf("megaWin"),
                    n.numberTo(this.BigWin_Label, 0, this.H_win, 2e3, !0)
                }, this);
                this.BigWin.node.runAction(cc.sequence(cc.delayTime(.3), t))
            },
            BigWinFinish: function() {
                this.isBigWin = !1,
                this.BigWin.node.active = !1,
                this.BigWin_Label.string = "",
                this.showLineWin(!1),
                this.hieuUng()
            },
            NoHuPlay: function() {
                this.NoHu_Label.string = "";
                var t = cc.callFunc(function() {
                    cc.RedT.audio.playEf("jackpot"),
                    n.numberTo(this.NoHu_Label, 0, this.H_win, 2e3, !0)
                }, this);
                this.NoHu.node.runAction(cc.sequence(cc.delayTime(.3), t))
            },
            NoHuFinish: function() {
                this.isNoHu = !1,
                this.NoHu_close.active = !0,
                this.isAuto && this.onAuto(),
                this.showLineWin(!1),
                this.hieuUng()
            },
            NoHuClose: function() {
                this.NoHu.node.active = this.NoHu_close.active = !1
            },
            EF_BonusFinish: function() {
                this.isBonus = !1,
                this.EF_Bonus.node.active = !1,
                this.gameBonus.onPlay(),
                this.showLineWin(!1)
            },
            EF_FreeFinish: function() {
                this.isFree = !1,
                this.EF_Free.node.active = !1,
                this.showLineWin(!1),
                this.hieuUng()
            },
            onData: function(t) {
                void 0 !== t.user && (this.userData(t.user),
                cc.RedT.userData(t.user)),
                void 0 !== t.candy && this.Candy(t.candy),
                void 0 !== t.mini && cc.RedT.MiniPanel.onData(t.mini),
                void 0 !== t.TopHu && cc.RedT.MiniPanel.TopHu.onData(t.TopHu),
                void 0 !== t.taixiu && cc.RedT.MiniPanel.TaiXiu.TX_Main.onData(t.taixiu)
            },
            userData: function(t) {
                this.red ? this.taikhoan.string = n.numberWithCommas(t.red) : this.taikhoan.string = n.numberWithCommas(t.xu)
            },
            Candy: function(t) {
                var e = this;
                void 0 !== t.status && (1 === t.status ? (Promise.all(t.cel.map(function(t, i) {
                    Promise.all(t.map(function(t, n) {
                        e.reels[i].icons[n].setIcon(t, !0)
                    }))
                })),
                this.runReels(),
                this.H_line_win = t.line_win,
                this.H_win = t.win,
                this.H_free = t.free,
                this.isBonus = t.isBonus,
                this.isNoHu = t.isNoHu,
                this.isBigWin = t.isBigWin,
                this.isFree = t.isFree,
                this.isFreeSpin = !!t.free) : this.resetSpin()),
                t.bonus && this.gameBonus.onData(t.bonus),
                t.log && this.dialog.history.onData(t.log),
                t.top && this.dialog.top.onData(t.top),
                t.notice && this.addNotice(t.notice)
            },
            EF_vuathang: function() {
                this.showLineWin(!0),
                this.vuathang.string = n.numberWithCommas(this.H_win),
                this.buttonSpin.active = !this.H_free,
                this.freeLabel.string = "Free: " + this.H_free,
                this.freeLabel.node.active = !!this.H_free
            },
            onLineWin: function(t) {
                var e = this;
                Promise.all(this.H_line_win.map(function(i) {
                    var n = e.Line.mainLines[i.line - 1];
                    t ? (n.ef = !0,
                    n.onShow()) : (n.ef = !1,
                    n.onHidden())
                }))
            },
            showLineWin: function(t) {
                this.onLineWin(t),
                t || this.isNoHu || this.isBigWin || this.isAuto || this.isFreeSpin || (this.eflineN = 0,
                this.efLineWin())
            },
            efLineWin: function(t) {
                if (this.H_line_win.length) {
                    this.node.stopAllActions();
                    void 0 === this.H_line_win[this.eflineN] && (this.eflineN = 0),
                    this.efOneLineWin(this.eflineN, !0);
                    var e = cc.callFunc(function() {
                        this.efOneLineWin(this.eflineN, !1),
                        this.eflineN += 1,
                        this.efLineWin()
                    }, this);
                    this.node.runAction(cc.sequence(cc.delayTime(1.5), e))
                }
            },
            efOneLineWin: function(t, e) {
                t = this.H_line_win[this.eflineN].line;
                var i = this.Line.mainLines[t - 1];
                e ? (i.ef = !0,
                i.onShow()) : (i.ef = !1,
                i.onHidden())
            },
            hieuUng: function() {
                if (this.isBigWin && !this.isNoHu)
                    this.BigWin.node.active = !0,
                    this.BigWin.play();
                else if (this.isNoHu)
                    this.NoHu.node.active = !0,
                    this.NoHu.play();
                else if (this.isBonus)
                    this.EF_Bonus.node.active = !0,
                    this.EF_Bonus.play(),
                    cc.RedT.audio.playEf("bonus");
                else if (this.isFree)
                    this.EF_Free.node.active = !0,
                    this.EF_Free.play();
                else if (this.H_win > 0) {
                    var t = new cc.Node;
                    t.addComponent(cc.Label),
                    (t = t.getComponent(cc.Label)).string = "+" + n.numberWithCommas(this.H_win),
                    t.font = cc.RedT.util.fontCong,
                    t.lineHeight = 130,
                    t.fontSize = 25,
                    t.node.position = cc.v2(0, 21),
                    this.nodeNotice.addChild(t.node),
                    t.node.runAction(cc.sequence(cc.moveTo(1.2, cc.v2(0, 105)), cc.callFunc(function() {
                        this.speed = 0,
                        t.node.destroy(),
                        this.hieuUng(),
                        this.showLineWin(!1)
                    }, this))),
                    this.H_win = 0
                } else
                    this.isAuto || this.isFreeSpin ? this.timeOut = setTimeout(function() {
                        this.onAutoSpin(),
                        this.speed = 400
                    }
                    .bind(this), this.speed) : this.resetSpin()
            },
            onChangerBetR: function() {
                cc.RedT.audio.playClick(),
                this.betSelect++,
                this.betSelect > 2 && (this.betSelect = 0),
                this.bet.string = this.betString[this.betSelect],
                this.tong.string = n.numberWithCommas(this.Line.data.length * n.getOnlyNumberInString(this.bet.string)),
                this.onGetHu()
            },
            onChangerBetL: function() {
                cc.RedT.audio.playClick(),
                this.betSelect--,
                this.betSelect < 0 && (this.betSelect = 2),
                this.bet.string = this.betString[this.betSelect],
                this.tong.string = n.numberWithCommas(this.Line.data.length * n.getOnlyNumberInString(this.bet.string)),
                this.onGetHu()
            },
            changerCoint: function() {
                this.red = !this.red,
                this.nodeRed.active = !this.nodeRed.active,
                this.nodeXu.active = !this.nodeXu.active,
                this.userData(cc.RedT.user),
                this.onGetHu()
            },
            onClickAuto: function() {
                cc.RedT.audio.playClick(),
                this.onAuto()
            },
            onAuto: function() {
                this.isAuto = !this.isAuto,
                this.isAuto ? this.buttonAuto.spriteFrame = this.FrameAuto[1] : this.buttonAuto.spriteFrame = this.FrameAuto[0]
            },
            onClickSpin: function() {
                this.onSpin()
            },
            onAutoSpin: function() {
                this.onGetSpin()
            },
            onSpin: function() {
                this.Line.data.length < 1 ? this.addNotice("Ch\u1ecdn \xedt nh\u1ea5t 1 d\xf2ng") : this.isSpin || (this.node.stopAllActions(),
                void 0 !== this.eflineN && void 0 !== this.H_line_win && this.H_line_win.length && this.efOneLineWin(this.eflineN, !1),
                this.eflineO = this.eflineN = 0,
                this.isSpin = !0,
                this.setSpin(),
                this.onGetSpin())
            },
            setSpin: function() {
                this.buttonLine.pauseSystemEvents(),
                this.buttonSpin.pauseSystemEvents(),
                this.buttonCoint.pauseSystemEvents(),
                this.nodeChangerBetL.pauseSystemEvents(),
                this.nodeChangerBetR.pauseSystemEvents()
            },
            resetSpin: function() {
                this.isAuto && this.onAuto(),
                this.isSpin = !1,
                this.buttonLine.resumeSystemEvents(),
                this.buttonSpin.resumeSystemEvents(),
                this.buttonCoint.resumeSystemEvents(),
                this.nodeChangerBetL.resumeSystemEvents(),
                this.nodeChangerBetR.resumeSystemEvents()
            },
            runReels: function() {
                Promise.all(this.reels.map(function(t, e) {
                    t.spin(e)
                }))
            },
            copy: function() {
                Promise.all(this.reels.map(function(t) {
                    t.icons[t.icons.length - 1].setIcon(t.icons[2].data),
                    t.icons[t.icons.length - 2].setIcon(t.icons[1].data),
                    t.icons[t.icons.length - 3].setIcon(t.icons[0].data)
                }))
            },
            random: function() {
                Promise.all(this.reels.map(function(t) {
                    Promise.all(t.icons.map(function(e, i) {
                        i > 2 && i < t.icons.length - 3 && e.random()
                    }))
                }))
            },
            onGetSpin: function() {
                cc.RedT.send({
                    g: {
                        candy: {
                            spin: {
                                cuoc: n.getOnlyNumberInString(this.bet.string),
                                red: this.red,
                                line: this.Line.data
                            }
                        }
                    }
                })
            },
            addNotice: function(t) {
                var e = cc.instantiate(this.prefabNotice);
                e.getComponent("mini_warning").text.string = t,
                this.nodeNotice.addChild(e)
            },
            backGame: function() {
                this.loading.active = !0,
                void 0 !== this.timeOut && clearTimeout(this.timeOut),
                cc.director.loadScene("MainGame")
            },
            signOut: function() {
                cc.director.loadScene("MainGame", function() {
                    cc.RedT.inGame.signOut()
                })
            },
            onGetHu: function() {
                var t = this;
                if (void 0 !== cc.RedT.setting.topHu.data) {
                    var e = this
                      , i = n.getOnlyNumberInString(e.bet.string);
                    Promise.all(cc.RedT.setting.topHu.data.candy.filter(function(t) {
                        return t.type == i && t.red == e.red
                    })).then(function(e) {
                        var i = n.getOnlyNumberInString(t.hu.string)
                          , o = e[0].bet;
                        i - o != 0 && n.numberTo(t.hu, i, o, 2e3, !0)
                    })
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        Candy_dialog: "Candy_dialog",
        Candy_line: "Candy_line",
        Candy_playBonus: "Candy_playBonus",
        Candy_reel: "Candy_reel",
        Helper: "Helper",
        Notice: "Notice"
    }],
    CaoThap_history_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "4816cEGzJ1O1riIu0aE1iNT", "CaoThap_history_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                time: cc.Label,
                phien: cc.Label,
                cuoc: cc.Label,
                buoc: cc.Label,
                card1: cc.Sprite,
                select: cc.Node,
                card2: cc.Sprite,
                win: cc.Label
            }
        }),
        cc._RF.pop()
    }
    , {}],
    CaoThap_history: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "025c7+UqBFBWKVKH56kQUN5", "CaoThap_history");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                page: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0
            },
            init: function(t) {
                this.RedT = t
            },
            onLoad: function() {
                var t = this;
                this.page = cc.instantiate(this.page),
                this.page.y = -307,
                this.node.addChild(this.page),
                this.page = this.page.getComponent("Pagination"),
                Promise.all(this.content.children.map(function(t) {
                    return t.getComponent("CaoThap_history_item")
                })).then(function(e) {
                    t.content = e
                }),
                this.page.init(this)
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                cc.RedT.send({
                    g: {
                        caothap: {
                            history: {
                                red: this.red,
                                page: t
                            }
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                this.page.onSet(t.page, t.kmess, t.total),
                Promise.all(this.content.map(function(e, i) {
                    var o = t.data[i];
                    void 0 !== o ? (e.node.active = !0,
                    e.time.string = n.getStringDateByTime(o.time),
                    e.phien.string = o.id,
                    e.buoc.string = o.buoc,
                    e.cuoc.string = n.numberWithCommas(o.cuoc),
                    e.win.string = n.numberWithCommas(o.bet),
                    e.card1.spriteFrame = cc.RedT.util.card.getCard(o.card1.card, o.card1.type),
                    o.chon ? (e.select.active = !0,
                    2 == o.chon ? e.select.scaleY = -1 : e.select.scaleY = 1) : e.select.active = !1,
                    void 0 !== o.card2 && void 0 !== o.card2.card ? (e.card2.node.active = !0,
                    e.card2.spriteFrame = cc.RedT.util.card.getCard(o.card2.card, o.card2.type)) : e.card2.node.active = !1) : e.node.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    CaoThap_reels: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "858b3VPVxxI44+/QaauFb0O", "CaoThap_reels"),
        cc.Class({
            extends: cc.Component,
            init: function(t) {
                var e = this;
                this.RedT = t,
                this.card = [];
                var i = this;
                Promise.all([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function(t, e) {
                    var n = cc.instantiate(i.RedT.cardf);
                    return n.width = 113,
                    n.height = 161,
                    i.node.addChild(n),
                    n.getComponent(cc.Sprite)
                })).then(function(t) {
                    e.card = t,
                    e.random(!0)
                })
            },
            random: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                Promise.all(this.card.map(function(e, i) {
                    t ? e.spriteFrame = 12 == i ? cc.RedT.util.card.cardB1 : cc.RedT.util.card.random() : 0 !== i && 12 !== i && (e.spriteFrame = cc.RedT.util.card.random())
                }))
            },
            spin: function() {
                this.node.stopAllActions();
                var t = cc.moveTo(1, cc.v2(0, -(this.node.height - 161))).easing(cc.easeInOut(3))
                  , e = cc.callFunc(function() {
                    this.card[12].spriteFrame = this.card[0].spriteFrame,
                    this.node.y = 0
                }, this)
                  , i = cc.callFunc(function() {
                    this.RedT.resumeGame(),
                    this.RedT.addMainLog()
                }, this);
                this.node.runAction(cc.sequence(t, e, cc.delayTime(.1), i))
            },
            stop: function() {
                this.node.stopAllActions(),
                this.node.y = 0
            }
        }),
        cc._RF.pop()
    }
    , {}],
    CaoThap_top_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "75624vu325ApKFOyOEfLajG", "CaoThap_top_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                time: cc.Label,
                nick: cc.Label,
                cuoc: cc.Label,
                win: cc.Label,
                nohu: cc.Label
            }
        }),
        cc._RF.pop()
    }
    , {}],
    CaoThap_top: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "4ae1dSPK8VEcrHS1zJqrH8e", "CaoThap_top");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                item: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0
            },
            init: function(t) {
                this.RedT = t
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                cc.RedT.send({
                    g: {
                        caothap: {
                            tops: this.red
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                this.content.removeAllChildren();
                var e = this;
                Promise.all(t.map(function(t, i) {
                    var o = cc.instantiate(e.item)
                      , c = o.getComponent("CaoThap_top_item");
                    c.time.string = n.getStringDateByTime(t.time),
                    c.nick.string = t.name,
                    c.cuoc.string = n.numberWithCommas(t.goc),
                    c.win.string = n.numberWithCommas(t.bet),
                    c.nohu.string = t.a ? "N\u1ed5 H\u0169" : "Th\u1eafng l\u1edbn",
                    o.children[0].active = !(1 & i),
                    e.content.addChild(o)
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    CaoThap: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "300c3HqhRtJh4EmEiBIJq7G", "CaoThap");
        var n = t("Helper")
          , o = t("CaoThap_reels");
        cc.Class({
            extends: cc.Component,
            properties: {
                main: {
                    default: null,
                    type: cc.Node
                },
                background: cc.Node,
                logs: cc.Node,
                reels: o,
                listA: {
                    default: [],
                    type: cc.Sprite
                },
                buttonPlay: cc.Node,
                buttonCoint: cc.Node,
                buttonAnNon: cc.Node,
                buttonCao: cc.Node,
                buttonThap: cc.Node,
                bet: cc.Node,
                nodeRed: cc.Node,
                nodeXu: cc.Node,
                notice: cc.Node,
                prefabNotice: cc.Prefab,
                cardf: cc.Prefab,
                cuoc: "",
                hu: cc.Label,
                time: cc.Label,
                win: cc.Label,
                winUp: cc.Label,
                winDown: cc.Label,
                isPlay: !1,
                red: !0,
                btnScaleIn: {
                    default: null,
                    type: cc.Node
                },
                btnScaleOut: {
                    default: null,
                    type: cc.Node
                }
            },
            init: function(t) {
                this.RedT = t,
                this.LichSu = t.Dialog.CaoThap_history,
                this.Top = t.Dialog.CaoThap_top,
                cc.RedT.setting.caothap = cc.RedT.setting.caothap || {
                    bet: "1000",
                    logs: []
                },
                "true" == localStorage.getItem("caothap") && (this.node.active = !0),
                void 0 !== cc.RedT.setting.caothap.position && (this.node.position = cc.RedT.setting.caothap.position),
                void 0 !== cc.RedT.setting.caothap.cuoc && cc.RedT.setting.caothap.cuoc != this.cuoc && this.intChangerBet(),
                void 0 !== cc.RedT.setting.caothap.red && this.red != cc.RedT.setting.caothap.red && this.changerCoint()
            },
            onLoad: function() {
                this.reels.init(this),
                cc.RedT.setting.caothap.isPlay && !this.isPlay && (this.isPlay = !0,
                this.onPlay(),
                this.resumeGame(),
                cc.RedT.setting.caothap.time_remain++,
                this.playTime(),
                setTimeout(function() {
                    this.reels.card[this.reels.card.length - 1].spriteFrame = cc.RedT.util.card.getCard(cc.RedT.setting.caothap.card.card, cc.RedT.setting.caothap.card.type),
                    this.reMainLog()
                }
                .bind(this), 100))
            },
            onEnable: function() {
                this.onGetHu(),
                this.background.on(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.background.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.background.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.background.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.background.on(cc.Node.EventType.MOUSE_ENTER, this.setTop, this),
                !cc.RedT.setting.caothap.connect && this.reconnect()
            },
            onDisable: function() {
                this.background.off(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.background.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.background.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.background.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.background.off(cc.Node.EventType.MOUSE_ENTER, this.setTop, this)
            },
            eventStart: function(t) {
                this.setTop(),
                this.ttOffset = cc.v2(t.touch.getLocationX() - this.node.position.x, t.touch.getLocationY() - this.node.position.y)
            },
            eventMove: function(t) {
                this.node.position = cc.v2(t.touch.getLocationX() - this.ttOffset.x, t.touch.getLocationY() - this.ttOffset.y)
            },
            eventEnd: function() {
                cc.RedT.setting.caothap.position = this.node.position
            },
            openGame: function() {
                cc.RedT.audio.playClick(),
                cc.RedT.IS_LOGIN ? (this.node.active = !0,
                localStorage.setItem("caothap", !0),
                this.setTop()) : cc.RedT.inGame.dialog.showSignIn()
            },
            closeGame: function() {
                cc.RedT.audio.playUnClick(),
                this.node.active = !1,
                localStorage.setItem("caothap", !1)
            },
            setTop: function() {
                this.node.parent.insertChild(this.node)
            },
            changerCoint: function() {
                this.isPlay ? this.buttonCoint.pauseSystemEvents() : (this.red = cc.RedT.setting.caothap.red = !this.red,
                this.nodeRed.active = !this.nodeRed.active,
                this.nodeXu.active = !this.nodeXu.active,
                this.onGetHu())
            },
            intChangerBet: function() {
                var t = this;
                Promise.all(this.bet.children.map(function(e) {
                    e.name == cc.RedT.setting.caothap.cuoc ? (t.cuoc = e.name,
                    e.children[0].active = !0,
                    e.pauseSystemEvents()) : (e.children[0].active = !1,
                    e.resumeSystemEvents())
                }))
            },
            changerBet: function(t, e) {
                if (this.isPlay)
                    Promise.all(this.bet.children.map(function(t) {
                        t.pauseSystemEvents()
                    }));
                else {
                    var i = t.target;
                    this.cuoc = cc.RedT.setting.caothap.cuoc = i.name,
                    Promise.all(this.bet.children.map(function(t) {
                        t == i ? (t.children[0].active = !0,
                        t.pauseSystemEvents()) : (t.children[0].active = !1,
                        t.resumeSystemEvents())
                    })),
                    this.onGetHu()
                }
            },
            addNotice: function(t) {
                var e = cc.instantiate(this.prefabNotice);
                e.getComponent("mini_warning").text.string = t,
                this.notice.addChild(e)
            },
            EF_Play: function() {
                this.reels.random(),
                this.reels.spin()
            },
            onPlay: function() {
                this.buttonPlay.active = !1,
                this.buttonCoint.pauseSystemEvents(),
                Promise.all(this.bet.children.map(function(t) {
                    t.pauseSystemEvents()
                }))
            },
            offPlay: function() {
                this.isPlay = cc.RedT.setting.caothap.isPlay = !1,
                this.buttonPlay.active = !0,
                this.buttonCoint.resumeSystemEvents(),
                Promise.all(this.bet.children.map(function(t) {
                    t.children[0].active || t.resumeSystemEvents()
                })),
                this.buttonAnNon.color = cc.color(155, 155, 155),
                this.buttonAnNon.pauseSystemEvents(),
                this.buttonCao.color = cc.color(155, 155, 155),
                this.buttonCao.pauseSystemEvents(),
                this.buttonThap.color = cc.color(155, 155, 155),
                this.buttonThap.pauseSystemEvents(),
                void 0 !== this.timeInterval && clearInterval(this.timeInterval)
            },
            onS1: function() {
                this.buttonAnNon.pauseSystemEvents(),
                this.buttonCao.pauseSystemEvents(),
                this.buttonThap.pauseSystemEvents()
            },
            onClickPlay: function() {
                this.isPlay || (this.isPlay = cc.RedT.setting.caothap.isPlay = !0,
                this.sendPlay(),
                this.onPlay(),
                this.reSetPhien())
            },
            onData: function(t) {
                void 0 !== t.status && (1 === t.status ? (cc.RedT.setting.caothap.time_remain = 120,
                cc.RedT.setting.caothap.win = t.win,
                cc.RedT.setting.caothap.card = t.card,
                cc.RedT.setting.caothap.a = t.a,
                cc.RedT.setting.caothap.bet = t.bet,
                cc.RedT.setting.caothap.click = t.click,
                cc.RedT.setting.caothap.winUp = t.winUp,
                cc.RedT.setting.caothap.winDown = t.winDown,
                cc.RedT.setting.caothap.logs.push(t.card),
                void 0 !== t.nohu && (this.nohu = t.nohu),
                this.reels.card[0].spriteFrame = cc.RedT.util.card.getCard(t.card.card, t.card.type),
                this.EF_Play(),
                this.playTime()) : this.offPlay()),
                void 0 !== t.annon && this.annon(t.annon),
                void 0 !== t.reconnect && this.connect(t.reconnect),
                void 0 !== t.isAnNon && this.eAnNon(t.isAnNon),
                void 0 !== t.down && this.eThapChanger(t.down),
                void 0 !== t.up && this.eCaoChanger(t.up),
                void 0 !== t.history && this.LichSu.onData(t.history),
                void 0 !== t.tops && this.Top.onData(t.tops),
                void 0 !== t.notice && this.addNotice(t.notice)
            },
            playTime: function() {
                void 0 !== this.timeInterval && clearInterval(this.timeInterval),
                this.timeInterval = setInterval(function() {
                    cc.RedT.setting.caothap.time_remain > 0 ? this.time.string = n.numberToTime(cc.RedT.setting.caothap.time_remain) : clearInterval(this.timeInterval),
                    cc.RedT.setting.caothap.time_remain--
                }
                .bind(this), 1e3)
            },
            sendPlay: function() {
                cc.RedT.send({
                    g: {
                        caothap: {
                            play: {
                                newGame: {
                                    cuoc: this.cuoc,
                                    red: this.red
                                }
                            }
                        }
                    }
                })
            },
            selectGame: function(t, e) {
                this.onS1(),
                this.isPlay && cc.RedT.send({
                    g: {
                        caothap: {
                            play: {
                                select: "1" == e
                            }
                        }
                    }
                })
            },
            onAnNon: function(t) {
                this.isPlay && cc.RedT.send({
                    g: {
                        caothap: {
                            play: {
                                annon: !0
                            }
                        }
                    }
                })
            },
            reconnect: function() {
                cc.RedT.setting.caothap.connect = !0,
                cc.RedT.send({
                    g: {
                        caothap: {
                            play: {
                                reconnect: !0
                            }
                        }
                    }
                })
            },
            connect: function(t) {
                this.onPlay(),
                t.red != this.red && this.changerCoint(),
                this.cuoc != t.cuoc && (this.cuoc = cc.RedT.setting.caothap.cuoc = t.cuoc,
                this.intChangerBet()),
                this.isPlay = cc.RedT.setting.caothap.isPlay = !0,
                cc.RedT.setting.caothap.time_remain = t.time_remain,
                cc.RedT.setting.caothap.win = !0,
                cc.RedT.setting.caothap.card = t.card,
                cc.RedT.setting.caothap.a = t.a,
                cc.RedT.setting.caothap.bet = t.bet,
                cc.RedT.setting.caothap.click = t.click,
                cc.RedT.setting.caothap.winUp = t.winUp,
                cc.RedT.setting.caothap.winDown = t.winDown,
                Promise.all(this.listA.map(function(t, e) {
                    void 0 !== cc.RedT.setting.caothap.a[e] ? (t.node.active = !0,
                    t.spriteFrame = cc.RedT.util.card.getCard(cc.RedT.setting.caothap.a[e].card, cc.RedT.setting.caothap.a[e].type)) : t.node.active = !1
                })),
                setTimeout(function() {
                    this.reels.card[this.reels.card.length - 1].spriteFrame = cc.RedT.util.card.getCard(cc.RedT.setting.caothap.card.card, cc.RedT.setting.caothap.card.type)
                }
                .bind(this), 10),
                this.playTime(),
                this.win.string = n.numberWithCommas(t.bet),
                this.winUp.string = t.winUp > 0 ? n.numberWithCommas(t.winUp) : "",
                this.winDown.string = t.winDown > 0 ? n.numberWithCommas(t.winDown) : "",
                this.clickInGame()
            },
            resumeGame: function() {
                if (this.win.string = n.numberWithCommas(cc.RedT.setting.caothap.bet),
                this.winUp.string = cc.RedT.setting.caothap.winUp > 0 ? n.numberWithCommas(cc.RedT.setting.caothap.winUp) : "",
                this.winDown.string = cc.RedT.setting.caothap.winDown > 0 ? n.numberWithCommas(cc.RedT.setting.caothap.winDown) : "",
                this.clickInGame(),
                Promise.all(this.listA.map(function(t, e) {
                    void 0 !== cc.RedT.setting.caothap.a[e] ? (t.node.active = !0,
                    t.spriteFrame = cc.RedT.util.card.getCard(cc.RedT.setting.caothap.a[e].card, cc.RedT.setting.caothap.a[e].type)) : t.node.active = !1
                })),
                cc.RedT.setting.caothap.win) {
                    if (this.nohu) {
                        var t = cc.instantiate(this.RedT.PrefabNoHu)
                          , e = (t = t.getComponent(cc.Animation)).node.children[6].getComponent(cc.Label);
                        this.RedT.nodeEfect.addChild(t.node),
                        t.on("play", function() {
                            var i = cc.callFunc(function() {
                                cc.RedT.audio.playEf("winHu"),
                                n.numberTo(e, 0, this.nohu, 1e3, !0)
                            }, this);
                            t.node.runAction(cc.sequence(cc.delayTime(.25), i))
                        }, this),
                        t.on("finished", function() {
                            this.nohu = !1,
                            this.offPlay(),
                            t.node.destroy(),
                            cc.RedT.setting.caothap.win = 0
                        }, this),
                        t.play()
                    }
                } else
                    this.offPlay(),
                    this.addNotice("B\u1ea1n thua!! Ch\xfac b\u1ea1n may m\u1eafn l\u1ea7n sau.")
            },
            addMainLog: function() {
                var t = cc.instantiate(this.cardf);
                t.width = 32.77,
                t.height = 46.69,
                this.logs.addChild(t),
                (t = t.getComponent(cc.Sprite)).spriteFrame = cc.RedT.util.card.getCard(cc.RedT.setting.caothap.card.card, cc.RedT.setting.caothap.card.type)
            },
            reMainLog: function() {
                var t = this;
                Promise.all(cc.RedT.setting.caothap.logs.map(function(e) {
                    var i = cc.instantiate(t.cardf);
                    i.width = 32.77,
                    i.height = 46.69,
                    t.logs.addChild(i),
                    (i = i.getComponent(cc.Sprite)).spriteFrame = cc.RedT.util.card.getCard(e.card, e.type)
                }))
            },
            annon: function(t) {
                clearInterval(this.timeInterval);
                var e = new cc.Node;
                e.addComponent(cc.Label),
                (e = e.getComponent(cc.Label)).string = "+" + n.numberWithCommas(t),
                e.font = this.red ? cc.RedT.util.fontCong : cc.RedT.util.fontTru,
                e.lineHeight = 130,
                e.fontSize = 20,
                e.node.position = cc.v2(0, 10),
                this.notice.addChild(e.node),
                e.node.runAction(cc.sequence(cc.moveTo(3.5, cc.v2(0, 125)), cc.callFunc(function() {
                    this.node.destroy()
                }, e)))
            },
            clickInGame: function() {
                this.eAnNon(cc.RedT.setting.caothap.click.isAnNon),
                this.eCaoChanger(cc.RedT.setting.caothap.click.up),
                this.eThapChanger(cc.RedT.setting.caothap.click.down)
            },
            eAnNon: function(t) {
                t ? (this.buttonAnNon.resumeSystemEvents(),
                this.buttonAnNon.color = cc.Color.WHITE) : (this.buttonAnNon.color = cc.color(155, 155, 155),
                this.buttonAnNon.pauseSystemEvents())
            },
            eCaoChanger: function(t) {
                t ? (this.buttonCao.color = cc.Color.WHITE,
                this.buttonCao.resumeSystemEvents()) : (this.buttonCao.color = cc.color(155, 155, 155),
                this.buttonCao.pauseSystemEvents())
            },
            eThapChanger: function(t) {
                t ? (this.buttonThap.color = cc.Color.WHITE,
                this.buttonThap.resumeSystemEvents()) : (this.buttonThap.color = cc.color(155, 155, 155),
                this.buttonThap.pauseSystemEvents())
            },
            reSetPhien: function() {
                this.logs.removeAllChildren(),
                cc.RedT.setting.caothap.logs = []
            },
            newGame: function() {
                this.offPlay(),
                this.reels.stop(),
                cc.RedT.setting.caothap.connect = !1,
                this.reSetPhien()
            },
            onGetHu: function() {
                var t = this;
                if (void 0 !== cc.RedT.setting.topHu.data && this.node.active) {
                    var e = this;
                    Promise.all(cc.RedT.setting.topHu.data.caothap.filter(function(t) {
                        return t.type == e.cuoc && t.red == e.red
                    })).then(function(e) {
                        var i = n.getOnlyNumberInString(t.hu.string)
                          , o = e[0].bet;
                        i - o != 0 && n.numberTo(t.hu, i, o, 2e3, !0)
                    })
                }
            },
            zoom: function(t) {
                1.2 == this.main.getScale() ? (this.main.setScale(.8, .8),
                this.btnScaleIn.active = !0,
                this.btnScaleOut.active = !1) : (this.main.setScale(1.2, 1.2),
                this.btnScaleIn.active = !1,
                this.btnScaleOut.active = !0)
            }
        }),
        cc._RF.pop()
    }
    , {
        CaoThap_reels: "CaoThap_reels",
        Helper: "Helper"
    }],
    Card: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "550c9nAtbJCb6ippMUD/2+b", "Card"),
        cc.Class({
            extends: cc.Component,
            properties: {
                card1: {
                    default: [],
                    type: cc.SpriteFrame
                },
                card2: {
                    default: [],
                    type: cc.SpriteFrame
                },
                card3: {
                    default: [],
                    type: cc.SpriteFrame
                },
                card4: {
                    default: [],
                    type: cc.SpriteFrame
                },
                card5: {
                    default: [],
                    type: cc.SpriteFrame
                },
                card6: {
                    default: [],
                    type: cc.SpriteFrame
                },
                card7: {
                    default: [],
                    type: cc.SpriteFrame
                },
                card8: {
                    default: [],
                    type: cc.SpriteFrame
                },
                card9: {
                    default: [],
                    type: cc.SpriteFrame
                },
                card10: {
                    default: [],
                    type: cc.SpriteFrame
                },
                card11: {
                    default: [],
                    type: cc.SpriteFrame
                },
                card12: {
                    default: [],
                    type: cc.SpriteFrame
                },
                card13: {
                    default: [],
                    type: cc.SpriteFrame
                },
                cardB1: {
                    default: null,
                    type: cc.SpriteFrame
                },
                cardB2: {
                    default: null,
                    type: cc.SpriteFrame
                },
                red: !1
            },
            init: function() {
                var t = this
                  , e = this;
                this.card = [[], [], [], [], [], [], [], [], [], [], [], [], []],
                Promise.all(this.card.map(function(t, i) {
                    return 0 === i ? e.card1 : 1 === i ? e.card2 : 2 === i ? e.card3 : 3 === i ? e.card4 : 4 === i ? e.card5 : 5 === i ? e.card6 : 6 === i ? e.card7 : 7 === i ? e.card8 : 8 === i ? e.card9 : 9 === i ? e.card10 : 10 === i ? e.card11 : 11 === i ? e.card12 : 12 === i ? e.card13 : void 0
                })).then(function(e) {
                    t.card = e
                })
            },
            config: function() {
                void 0 === cc.RedT.util.card && (cc.RedT.util.card = this,
                this.red || (this.red = !0,
                this.init()))
            },
            getCard: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return this.card[t][e]
            },
            random: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 13;
                return this.card[~~(Math.random() * t)][~~(4 * Math.random())]
            }
        }),
        cc._RF.pop()
    }
    , {}],
    CheckOut: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "3988dLBD7VPLowq6ozkuvOs", "CheckOut"),
        cc.Class({
            extends: cc.Sprite,
            properties: {
                nut: {
                    default: null,
                    type: cc.Sprite
                },
                NutOn: {
                    default: null,
                    type: cc.SpriteFrame
                },
                NutOff: {
                    default: null,
                    type: cc.SpriteFrame
                },
                BgOn: {
                    default: null,
                    type: cc.SpriteFrame
                },
                BgOff: {
                    default: null,
                    type: cc.SpriteFrame
                },
                isChecked: !1
            },
            onLoad: function() {
                var t = this;
                this.actionOn = cc.sequence(cc.moveTo(.1, cc.v2(30, 0)), cc.callFunc(function() {
                    t.spriteFrame = t.BgOn,
                    t.nut.spriteFrame = t.NutOn
                })),
                this.actionOff = cc.sequence(cc.moveTo(.1, cc.v2(-30, 0)), cc.callFunc(function() {
                    t.spriteFrame = t.BgOff,
                    t.nut.spriteFrame = t.NutOff
                })),
                this.OnUpdate()
            },
            OnChangerClick: function() {
                this.isChecked = !this.isChecked,
                this.OnUpdate()
            },
            OnUpdate: function() {
                this.isChecked ? (this.nut.node.stopAllActions(),
                this.nut.node.runAction(this.actionOn)) : (this.nut.node.stopAllActions(),
                this.nut.node.runAction(this.actionOff))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    ChuyenRed_daily: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "c1af2XufuNBepY7+fdeCQxa", "ChuyenRed_daily"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bg: {
                    default: null,
                    type: cc.Node
                },
                STT: {
                    default: null,
                    type: cc.Label
                },
                DaiLy: {
                    default: null,
                    type: cc.Label
                },
                NICKNAME: {
                    default: null,
                    type: cc.Label
                },
                Phone: {
                    default: null,
                    type: cc.Label
                },
                Location: {
                    default: null,
                    type: cc.Label
                },
                FB: ""
            },
            init: function(t, e, i) {
                this.controll = t,
                this.STT.string = i + 1,
                this.DaiLy.string = e.name,
                this.NICKNAME.string = e.nickname,
                this.Phone.string = e.phone,
                this.Location.string = e.location,
                this.FB = "" + e.fb
            },
            onChuyenClick: function() {
                cc.RedT.audio.playClick(),
                this.controll.selectDaiLy(this)
            },
            onFBClick: function() {
                cc.sys.openURL(this.FB)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    ChuyenRed: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "45856xdHLFHNqyaZPpjF/pA", "ChuyenRed");
        var n = t("BrowserUtil")
          , o = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                header: {
                    default: null,
                    type: cc.Node
                },
                body: {
                    default: null,
                    type: cc.Node
                },
                nickname: {
                    default: null,
                    type: cc.EditBox
                },
                renickname: {
                    default: null,
                    type: cc.EditBox
                },
                red: {
                    default: null,
                    type: cc.EditBox
                },
                messenger: {
                    default: null,
                    type: cc.EditBox
                },
                otp: {
                    default: null,
                    type: cc.EditBox
                },
                rednhan: {
                    default: null,
                    type: cc.Label
                },
                scrollview: {
                    default: null,
                    type: cc.ScrollView
                },
                prefabDaiLy: {
                    default: null,
                    type: cc.Prefab
                },
                checkDaiLy: {
                    default: [],
                    type: cc.Node
                },
                typeOTP: ""
            },
            init: function() {
                var t = this;
                this.isdaily = !1,
                this.meDaily = !1,
                this.daily_list = [];
                var e = this;
                this.isLoaded = !1,
                this.editboxs = [this.nickname, this.renickname, this.red, this.messenger, this.otp],
                this.keyHandle = function(t) {
                    return t.keyCode === cc.macro.KEY.tab ? (e.isTop() && e.changeNextFocusEditBox(),
                    t.preventDefault && t.preventDefault(),
                    !1) : t.keyCode === cc.macro.KEY.enter ? (n.focusGame(),
                    e.onChuyenClick(),
                    t.preventDefault && t.preventDefault(),
                    !1) : void 0
                }
                ,
                Promise.all(this.header.children.map(function(t) {
                    return t.getComponent("itemContentMenu")
                })).then(function(e) {
                    t.header = e
                })
            },
            onEnable: function() {
                this.reCheckMeDL(),
                cc.sys.isBrowser && this.addEvent(),
                Promise.all(this.checkDaiLy.map(function(t) {
                    t.active = !1
                })),
                this.isLoaded || cc.RedT.send({
                    shop: {
                        get_daily: !0
                    }
                })
            },
            onDisable: function() {
                cc.sys.isBrowser && this.removeEvent(),
                this.clean(),
                Promise.all(this.checkDaiLy.map(function(t) {
                    t.active = !1
                }))
            },
            addEvent: function() {
                for (var t in cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).addEventListener("keydown", this.keyHandle, !1)
            },
            removeEvent: function() {
                for (var t in this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).removeEventListener("keydown", this.keyHandle, !1);
                cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
            },
            onKeyDown: function(t) {
                switch (t.keyCode) {
                case cc.macro.KEY.tab:
                    this.isTop() && this.changeNextFocusEditBox();
                    break;
                case cc.macro.KEY.enter:
                    this.isTop() && this.onChuyenClick()
                }
            },
            changeNextFocusEditBox: function() {
                for (var t = !1, e = 0, i = this.editboxs.length; e < i; e++)
                    if (n.checkEditBoxFocus(this.editboxs[e])) {
                        n.focusEditBox(this.editboxs[e]),
                        t = !0;
                        break
                    }
                !t && 0 < this.editboxs.length && n.focusEditBox(this.editboxs[0])
            },
            isTop: function() {
                return !cc.RedT.inGame.notice.node.active && !cc.RedT.inGame.loading.active
            },
            clean: function() {
                this.nickname.string = this.renickname.string = this.red.string = this.messenger.string = this.rednhan.string = "",
                Promise.all(this.daily_list.map(function(t) {
                    t.bg.active = !1
                }))
            },
            onChuyenClick: function() {
                var t = null;
                if (o.isEmpty(this.nickname.string) || o.isEmpty(this.renickname.string) || o.isEmpty(this.red.string) ? t = "Ki\u1ec3m tra l\u1ea1i c\xe1c th\xf4ng tin..." : o.isEmpty(this.nickname.string) || o.isEmpty(this.renickname.string) ? t = "T\xean nh\xe2n v\u1eadt kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng" : this.nickname.string != this.renickname.string ? t = "T\xean nh\xe2n v\u1eadt kh\xf4ng kh\u1edbp.!!" : o.getOnlyNumberInString(this.red.string) < 1e4 ? t = "S\u1ed1 ti\u1ec1n chuy\u1ec3n t\u1ed1i thi\u1ec3u l\xe0 10.000 Red." : o.isEmpty(this.otp.string) && (t = "Vui l\xf2ng nh\u1eadp m\xe3 OTP."),
                t)
                    cc.RedT.inGame.notice.show({
                        title: "CHUY\u1ec2N HEC",
                        text: t
                    });
                else {
                    var e = {
                        name: this.nickname.string,
                        red: o.getOnlyNumberInString(this.red.string),
                        otp: this.otp.string
                    };
                    o.isEmpty(this.messenger.string.trim()) || (e = Object.assign(e, {
                        message: this.messenger.string
                    })),
                    cc.RedT.send({
                        shop: {
                            chuyen_red: e
                        }
                    })
                }
            },
            onSelectHead: function(t, e) {
                Promise.all(this.header.map(function(t) {
                    t.node.name == e ? t.select() : t.unselect()
                })),
                Promise.all(this.body.children.map(function(t) {
                    t.name == e ? t.active = !0 : t.active = !1
                }))
            },
            onDaiLy: function(t) {
                var e = this;
                if (t.length) {
                    var i = this;
                    i.scrollview.content.removeAllChildren(),
                    this.clean();
                    var n = new RegExp("^" + cc.RedT.user.name + "$","i");
                    this.suffleDaiLy(t),
                    Promise.all(t.map(function(t, e) {
                        !i.meDaily && (i.meDaily = n.test(t.nickname));
                        var o = cc.instantiate(i.prefabDaiLy)
                          , c = o.getComponent("ChuyenRed_daily");
                        return c.init(i, t, e),
                        i.scrollview.content.addChild(o),
                        c
                    })).then(function(t) {
                        e.daily_list = t
                    })
                }
            },
            suffleDaiLy: function(t) {
                for (var e, i, n = t.length; 0 !== n; )
                    i = Math.floor(Math.random() * n),
                    e = t[n -= 1],
                    t[n] = t[i],
                    t[i] = e;
                return t
            },
            reCheckMeDL: function() {
                if (this.meDaily = !1,
                this.daily_list.length) {
                    var t = this
                      , e = new RegExp("^" + cc.RedT.user.name + "$","i");
                    Promise.all(this.daily_list.map(function(i) {
                        !t.meDaily && (t.meDaily = e.test(i.NICKNAME.string))
                    }))
                }
            },
            onData: function(t) {
                void 0 === t.daily || this.isLoaded || (this.isLoaded = !0,
                this.onDaiLy(t.daily))
            },
            selectDaiLy: function(t) {
                var e = this;
                Promise.all(this.checkDaiLy.map(function(t) {
                    t.active = !0
                })),
                Promise.all(this.daily_list.map(function(i) {
                    i == t ? (e.isdaily = !0,
                    i.bg.active = !0,
                    e.nickname.string = e.renickname.string = i.NICKNAME.string,
                    e.onChangerRed(0, !0)) : i.bg.active = !1
                }))
            },
            onChangerNick: function(t) {
                if (this.isdaily = !1,
                Promise.all(this.checkDaiLy.map(function(t) {
                    t.active = !1
                })),
                this.daily_list.length > 0) {
                    var e = this;
                    Promise.all(this.daily_list.map(function(i) {
                        new RegExp("^" + t + "$","i").test(i.NICKNAME.string) ? (Promise.all(e.checkDaiLy.map(function(t) {
                            t.active = !0
                        })),
                        e.isdaily = !0,
                        i.bg.active = !0) : i.bg.active = !1
                    }))
                }
                this.onChangerRed(0, !0)
            },
            onChangerRed: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? this.red.string : t,
                t = o.numberWithCommas(o.getOnlyNumberInString(t)),
                this.red.string = 0 == t ? "" : t,
                this.meDaily)
                    this.rednhan.string = t;
                else {
                    var e = o.getOnlyNumberInString(t);
                    this.rednhan.string = o.numberWithCommas(Math.floor(e - 2 * e / 100))
                }
            },
            onClickOTP: function() {
                cc.RedT.send({
                    otp: {
                        type: this.typeOTP
                    }
                })
            },
            changerTypeOTP: function(t) {
                this.typeOTP = t.node.name
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil",
        Helper: "Helper"
    }],
    CoTrang_bonus_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "0023dJWKJFJOZXuKmK/mqIT", "CoTrang_bonus_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                open: cc.Node,
                close: cc.Node,
                text: cc.Label
            }
        }),
        cc._RF.pop()
    }
    , {}],
    CoTrang_dialog: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "88434zB0LpByrbi+FeJkV/o", "CoTrang_dialog");
        var n = t("CoTrang_history")
          , o = t("CoTrang_top");
        cc.Class({
            extends: cc.Component,
            properties: {
                history: n,
                top: o,
                help: cc.Node
            },
            init: function() {
                this.actionShow = cc.spawn(cc.scaleTo(.5, 1).easing(cc.easeBackOut(2.5)), cc.fadeTo(.5, 255)),
                this.objShow = null,
                this.objTmp = null
            },
            onClickBack: function() {
                cc.RedT.audio.playUnClick(),
                this.onBack()
            },
            onBack: function() {
                null != this.objShow ? void 0 == this.objShow.previous || null == this.objShow.previous ? (this.objShow.active = !1,
                this.node.active = !1,
                this.objShow = null) : (this.objTmp = this.objShow,
                this.objShow = this.objShow.previous,
                this.objTmp.previous = null,
                this.objTmp.active = !1,
                this.objShow.active = !0,
                this.objTmp = null) : this.node.active = !1
            },
            onClosePrevious: function(t) {
                void 0 !== t.previous && null !== t.previous && (this.onClosePrevious(t.previous),
                delete t.previous),
                t.active = !1
            },
            onCloseDialog: function() {
                null != this.objShow ? void 0 == this.objShow.previous || null == this.objShow.previous ? (this.objShow.active = this.node.active = !1,
                this.objShow = null) : (this.onClosePrevious(this.objShow.previous),
                this.objShow.active = this.node.active = !1,
                delete this.objShow.previous,
                this.objShow = null) : this.node.active = !1
            },
            resetSizeDialog: function(t) {
                t.stopAllActions(),
                t.scale = .5,
                t.opacity = 0
            },
            showHistory: function() {
                this.node.active = this.history.node.active = !0,
                this.objShow = this.history.node
            },
            showTop: function() {
                this.node.active = this.top.node.active = !0,
                this.objShow = this.top.node
            },
            showHelp: function() {
                this.node.active = this.help.active = !0,
                this.objShow = this.help
            }
        }),
        cc._RF.pop()
    }
    , {
        CoTrang_history: "CoTrang_history",
        CoTrang_top: "CoTrang_top"
    }],
    CoTrang_history: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "89676Zx8oRO4KIzkpkCy5Hq", "CoTrang_history");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                page: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0
            },
            onLoad: function() {
                var t = this
                  , e = cc.instantiate(this.page);
                e.y = -232,
                this.node.addChild(e),
                this.page = e.getComponent("Pagination"),
                Promise.all(this.content.children.map(function(t) {
                    return t.getComponent("VQRed_history_item")
                })).then(function(e) {
                    t.content = e
                }),
                this.page.init(this)
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                cc.RedT.send({
                    g: {
                        longlan: {
                            log: {
                                red: this.red,
                                page: t
                            }
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                this.page.onSet(t.page, t.kmess, t.total),
                Promise.all(this.content.map(function(e, i) {
                    var o = t.data[i];
                    void 0 !== o ? (e.node.active = !0,
                    e.time.string = n.getStringDateByTime(o.time),
                    e.phien.string = o.id,
                    e.cuoc.string = n.numberWithCommas(o.bet),
                    e.win.string = o.line + " D\xf2ng",
                    e.line.string = n.numberWithCommas(o.win)) : e.node.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    CoTrang_iline: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "846ba+ck/5Ez62leZJ7v614", "CoTrang_iline"),
        cc.Class({
            extends: cc.Component,
            properties: {
                line: cc.Node,
                ef: !1
            },
            onEnable: function() {
                this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onShow, this),
                this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onHidden, this)
            },
            onDisable: function() {
                this.node.off(cc.Node.EventType.MOUSE_ENTER, this.onShow, this),
                this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.onHidden, this)
            },
            onShow: function() {
                this.line.active = !0
            },
            onHidden: function() {
                !this.ef && (this.line.active = !1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    CoTrang_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "fcb34krtXlN66KnmT4HIAyT", "CoTrang_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                icon: cc.Sprite,
                free: cc.Node,
                bonus: cc.Node,
                hu: cc.Node,
                wind: cc.Node
            },
            init: function(t) {
                this.RedT = t
            },
            random: function() {
                var t = 11 * Math.random() >> 0;
                return this.setIcon(t),
                t
            },
            setIcon: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                10 == t ? (this.wind.active = !0,
                this.icon.node.active = this.free.active = this.bonus.active = this.hu.active = !1) : 9 == t ? (this.hu.active = !0,
                this.icon.node.active = this.free.active = this.bonus.active = this.wind.active = !1) : 8 == t ? (this.bonus.active = !0,
                this.icon.node.active = this.free.active = this.wind.active = this.hu.active = !1) : 7 == t ? (this.free.active = !0,
                this.icon.node.active = this.wind.active = this.bonus.active = this.hu.active = !1) : (this.icon.node.active = !0,
                this.icon.spriteFrame = this.RedT.icons[t],
                this.free.active = this.wind.active = this.bonus.active = this.hu.active = !1),
                e && (this.data = t)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    CoTrang_lines: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "f0cc25QW1BBlrdxfkZq24z5", "CoTrang_lines");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                lines: cc.Node,
                mainLines: cc.Node
            },
            init: function(t) {
                var e = this;
                this.RedT = t;
                Promise.all(this.mainLines.children.map(function(t) {
                    return t.getComponent("CoTrang_iline")
                })).then(function(t) {
                    e.mainLines = t
                }),
                this.selectAll(null, "1")
            },
            onOpen: function() {
                this.node.active = !0
            },
            onClose: function() {
                this.RedT.playClick(),
                this.node.active && this.data.length < 1 ? this.RedT.notice.show({
                    title: "C\u1ea2NH B\xc1O",
                    text: "Ch\u1ecdn \xedt nh\u1ea5t 1 d\xf2ng"
                }) : this.node.active = !1
            },
            select: function(t) {
                this.RedT.playClick();
                var e = t.target;
                e.color._val != cc.Color.WHITE._val ? e.color = cc.Color.WHITE : e.color = e.color.fromHEX("#8A8A8A"),
                this.check()
            },
            check: function() {
                var t = this;
                Promise.all(this.lines.children.map(function(t, e) {
                    return t.color._val == cc.Color.WHITE._val ? e + 1 : void 0
                })).then(function(e) {
                    Promise.all(e.filter(function(t) {
                        return void 0 !== t
                    })).then(function(e) {
                        t.data = e,
                        t.RedT.labelLine.string = e.length,
                        t.RedT.tong.string = n.numberWithCommas(e.length * n.getOnlyNumberInString(t.RedT.bet.string))
                    })
                })
            },
            selectChan: function() {
                var t = this;
                Promise.all(this.lines.children.map(function(t, e) {
                    var i = e + 1;
                    if (!(i % 2))
                        return t.color = cc.Color.WHITE,
                        i;
                    t.color = t.color.fromHEX("#8A8A8A")
                })).then(function(e) {
                    Promise.all(e.filter(function(t) {
                        return void 0 !== t
                    })).then(function(e) {
                        t.data = e,
                        t.RedT.labelLine.string = e.length,
                        t.RedT.tong.string = n.numberWithCommas(e.length * n.getOnlyNumberInString(t.RedT.bet.string))
                    })
                })
            },
            selectLe: function() {
                var t = this;
                Promise.all(this.lines.children.map(function(t, e) {
                    var i = e + 1;
                    if (i % 2)
                        return t.color = cc.Color.WHITE,
                        i;
                    t.color = t.color.fromHEX("#8A8A8A")
                })).then(function(e) {
                    Promise.all(e.filter(function(t) {
                        return void 0 !== t
                    })).then(function(e) {
                        t.data = e,
                        t.RedT.labelLine.string = e.length,
                        t.RedT.tong.string = n.numberWithCommas(e.length * n.getOnlyNumberInString(t.RedT.bet.string))
                    })
                })
            },
            selectAll: function(t, e) {
                var i = this;
                Promise.all(this.lines.children.map(function(t, i) {
                    var n = "1" == e;
                    return t.color = n ? cc.Color.WHITE : t.color.fromHEX("#8A8A8A"),
                    n ? i + 1 : void 0
                })).then(function(t) {
                    Promise.all(t.filter(function(t, e) {
                        return void 0 !== t
                    })).then(function(t) {
                        i.data = t,
                        i.RedT.labelLine.string = t.length,
                        i.RedT.tong.string = n.numberWithCommas(t.length * n.getOnlyNumberInString(i.RedT.bet.string))
                    })
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    CoTrang_playBonus: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "9c69cVyCZJIH59jXRxl6d7F", "CoTrang_playBonus");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                numberBonus: cc.Label,
                listBox: cc.Node,
                notice: cc.Node,
                numberWin: cc.Label,
                icons: {
                    default: [],
                    type: cc.SpriteFrame
                }
            },
            init: function(t) {
                var e = this;
                this.RedT = t,
                Promise.all(this.listBox.children.map(function(t) {
                    return t.getComponent("CoTrang_bonus_item")
                })).then(function(t) {
                    e.listBox = t
                })
            },
            onPlay: function(t) {
                this.reset(),
                this.node.active = !0,
                this.numberBonus.string = t
            },
            onClickBox: function(t) {
                this.numberBonus.string && (this.RedT.playClick(),
                this.onSend(t.target.name))
            },
            closeNotice: function() {
                this.notice.active = this.node.active = !1,
                this.RedT.hieuUng()
            },
            onData: function(t) {
                if (void 0 !== t.box) {
                    var e = this.listBox[t.box];
                    e.open.active = !0,
                    e.close.active = !1,
                    e.text.string = n.numberWithCommas(t.bet),
                    this.numberBonus.string = t.bonus
                }
                void 0 !== t.win && (this.notice.active = !0,
                this.numberWin.string = n.numberWithCommas(t.win),
                this.RedT.vuathang.string = n.numberWithCommas(1 * n.getOnlyNumberInString(this.RedT.vuathang.string) + t.win))
            },
            onSend: function(t) {
                cc.RedT.send({
                    g: {
                        longlan: {
                            bonus: {
                                box: t
                            }
                        }
                    }
                })
            },
            reset: function() {
                Promise.all(this.listBox.map(function(t) {
                    t.open.active = !1,
                    t.close.active = !0,
                    t.text.string = ""
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    CoTrang_reel: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "46703d92yxJ94jTBiM3fuuV", "CoTrang_reel"),
        cc.Class({
            extends: cc.Component,
            init: function(t) {
                var e = this;
                this.RedT = t,
                this.icons = [];
                var i = this
                  , n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                Promise.all(n.map(function(t, e) {
                    var o = cc.instantiate(i.RedT.icon);
                    return i.node.addChild(o),
                    (o = o.getComponent("CoTrang_item")).init(i.RedT),
                    e > 2 && e < n.length - 3 && o.random(),
                    o
                })).then(function(t) {
                    e.icons = t,
                    e.icons[e.icons.length - 1].setIcon(e.icons[4].random()),
                    e.icons[e.icons.length - 2].setIcon(e.icons[3].random()),
                    e.icons[e.icons.length - 3].setIcon(e.icons[2].random()),
                    e.icons[e.icons.length - 4].setIcon(e.icons[1].random()),
                    e.icons[e.icons.length - 5].setIcon(e.icons[0].random())
                })
            },
            spin: function(t) {
                this.node.stopAllActions();
                var e = cc.moveTo(1, cc.v2(this.node.x, -(this.node.height - 396))).easing(cc.easeInOut(3))
                  , i = cc.callFunc(function() {
                    0 === t && this.RedT.copy(),
                    this.node.y = 0
                }, this);
                if (4 === t) {
                    var n = cc.callFunc(function() {
                        this.RedT.EF_vuathang(),
                        this.node.y = 0,
                        this.RedT.random(),
                        this.RedT.hieuUng()
                    }, this);
                    this.node.runAction(cc.sequence(cc.delayTime(.1 * t), e, n))
                } else
                    this.node.runAction(cc.sequence(cc.delayTime(.1 * t), e, i))
            },
            stop: function() {
                this.node.stopAllActions(),
                this.RedT.copy(),
                this.node.y = 0
            }
        }),
        cc._RF.pop()
    }
    , {}],
    CoTrang_top: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "c630b0qZgVLe76291zEptTX", "CoTrang_top");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                item: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                cc.RedT.send({
                    g: {
                        longlan: {
                            top: this.red
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                this.content.removeAllChildren();
                var e = this;
                Promise.all(t.map(function(t, i) {
                    var o = cc.instantiate(e.item)
                      , c = o.getComponent("VQRed_history_item");
                    c.time.string = n.getStringDateByTime(t.time),
                    c.phien.string = t.name,
                    c.cuoc.string = n.numberWithCommas(t.bet),
                    c.line.string = n.numberWithCommas(t.win),
                    c.win.string = 2 == t.type ? "N\u1ed5 H\u0169" : "Th\u1eafng l\u1edbn",
                    o.children[0].active = !(1 & i),
                    e.content.addChild(o)
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    CoTrang: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "d4343ucEwlPPaNvLP9L/Oj8", "CoTrang");
        var n = t("Helper")
          , o = t("CoTrang_reel")
          , c = t("CoTrang_lines")
          , s = t("CoTrang_playBonus")
          , a = t("Notice")
          , h = t("CoTrang_dialog");
        cc.Class({
            extends: cc.Component,
            properties: {
                gameBonus: s,
                audioBG: cc.AudioSource,
                audioClickSpin: {
                    default: null,
                    type: cc.AudioClip
                },
                audioClick: {
                    default: null,
                    type: cc.AudioClip
                },
                audioWin: {
                    default: null,
                    type: cc.AudioClip
                },
                audioBigWin: {
                    default: null,
                    type: cc.AudioClip
                },
                audioJackpot: {
                    default: null,
                    type: cc.AudioClip
                },
                redhat: cc.Node,
                reels: {
                    default: [],
                    type: o
                },
                icon: cc.Prefab,
                icons: {
                    default: [],
                    type: cc.SpriteFrame
                },
                betString: {
                    default: [],
                    type: cc.String
                },
                audioIcons: {
                    default: [],
                    type: cc.SpriteFrame
                },
                audioIcon: cc.Sprite,
                nodeRed: cc.Node,
                nodeXu: cc.Node,
                nodeNotice: cc.Node,
                prefabNotice: cc.Prefab,
                MiniPanel: cc.Prefab,
                loading: cc.Node,
                notice: a,
                dialog: h,
                Line: c,
                hu: cc.Label,
                taikhoan: cc.Label,
                tong: cc.Label,
                vuathang: cc.Label,
                labelLine: cc.Label,
                bet: cc.Label,
                freeLabel: cc.Label,
                phien: cc.Label,
                BigWin: cc.Animation,
                BigWin_Label: cc.Label,
                NoHu_close: cc.Node,
                NoHu: cc.Animation,
                NoHu_Label: cc.Label,
                EF_Bonus: cc.Animation,
                EF_Free: cc.Animation,
                buttonCoint: cc.Node,
                buttonLine: cc.Node,
                buttonSpin: cc.Node,
                buttonBet: cc.Node,
                buttonAuto: cc.Node,
                isAuto: !1,
                isSpin: !1,
                isFreeSpin: !1,
                red: !0,
                betSelect: 0
            },
            onLoad: function() {
                cc.RedT.inGame = this;
                var t = cc.instantiate(this.MiniPanel);
                cc.RedT.MiniPanel = t.getComponent("MiniPanel"),
                this.redhat.insertChild(t);
                var e = this;
                this.Line.init(this),
                this.BigWin.on("finished", this.BigWinFinish, this),
                this.BigWin.on("play", this.BigWinPlay, this),
                this.EF_Free.on("finished", this.EF_FreeFinish, this),
                this.NoHu.on("play", this.NoHuPlay, this),
                this.EF_Bonus.on("finished", this.EF_BonusFinish, this),
                this.gameBonus.init(this),
                this.dialog.init(),
                Promise.all(this.reels.map(function(t) {
                    t.init(e)
                })),
                cc.RedT.send({
                    scene: "longlan"
                }),
                this.taikhoan.string = n.numberWithCommas(cc.RedT.user.red),
                this.speed = 400,
                cc.RedT.isSoundBackground() ? (this.playMusic(),
                this.audioIcon.spriteFrame = this.audioIcons[1]) : this.audioIcon.spriteFrame = this.audioIcons[0]
            },
            _playSFX: function(t) {
                cc.RedT.IS_SOUND && cc.audioEngine.playEffect(t, !1)
            },
            playClick: function() {
                this._playSFX(this.audioClick)
            },
            BigWinPlay: function() {
                var t = cc.callFunc(function() {
                    this._playSFX(this.audioBigWin),
                    n.numberTo(this.BigWin_Label, 0, this.H_win, 2e3, !0)
                }, this);
                this.BigWin.node.runAction(cc.sequence(cc.delayTime(.3), t))
            },
            BigWinFinish: function() {
                this.isBigWin = !1,
                this.BigWin.node.active = !1,
                this.BigWin_Label.string = "",
                this.showLineWin(!1),
                this.hieuUng()
            },
            NoHuPlay: function() {
                this.NoHu_Label.string = "";
                var t = cc.callFunc(function() {
                    this._playSFX(this.audioJackpot),
                    n.numberTo(this.NoHu_Label, 0, this.H_win, 2e3, !0)
                }, this);
                this.NoHu.node.runAction(cc.sequence(cc.delayTime(.3), t));
                var e = cc.callFunc(function() {
                    this.NoHu_close.active = !0
                }, this);
                this.NoHu.node.runAction(cc.sequence(cc.delayTime(4), e))
            },
            NoHuFinish: function() {
                this.isNoHu = !1,
                this.isAuto && this.onAuto(),
                this.showLineWin(!1),
                this.hieuUng()
            },
            NoHuClose: function() {
                this.NoHu.node.active = this.NoHu_close.active = !1,
                this.NoHuFinish()
            },
            EF_BonusFinish: function() {
                this.EF_Bonus.node.active = !1,
                this.gameBonus.onPlay(this.isBonus),
                this.isBonus = 0,
                this.showLineWin(!1)
            },
            EF_FreeFinish: function() {
                this.isFree = !1,
                this.EF_Free.node.active = !1,
                this.showLineWin(!1),
                this.hieuUng()
            },
            onData: function(t) {
                void 0 !== t.user && (this.userData(t.user),
                cc.RedT.userData(t.user)),
                void 0 !== t.longlan && this.LongLan(t.longlan),
                void 0 !== t.mini && cc.RedT.MiniPanel.onData(t.mini),
                void 0 !== t.TopHu && cc.RedT.MiniPanel.TopHu.onData(t.TopHu),
                void 0 !== t.taixiu && cc.RedT.MiniPanel.TaiXiu.TX_Main.onData(t.taixiu)
            },
            userData: function(t) {
                this.red ? this.taikhoan.string = n.numberWithCommas(t.red) : this.taikhoan.string = n.numberWithCommas(t.xu)
            },
            LongLan: function(t) {
                var e = this;
                void 0 !== t.status && (1 === t.status ? (Promise.all(t.cel.map(function(t, i) {
                    Promise.all(t.map(function(t, n) {
                        e.reels[i].icons[n].setIcon(t, !0)
                    }))
                })),
                this.runReels(),
                this.H_line_win = t.line_win,
                this.H_win = t.win,
                this.H_free = t.free,
                this.isBonus = t.isBonus,
                this.isNoHu = t.isNoHu,
                this.isBigWin = t.isBigWin,
                this.isFree = t.isFree,
                this.isFreeSpin = !!t.free) : this.resetSpin()),
                t.phien && (this.phien.string = "#" + t.phien),
                t.bonus && this.gameBonus.onData(t.bonus),
                t.log && this.dialog.history.onData(t.log),
                t.top && this.dialog.top.onData(t.top),
                t.notice && this.addNotice(t.notice)
            },
            EF_vuathang: function() {
                this.showLineWin(!0),
                this.vuathang.string = n.numberWithCommas(this.H_win),
                this.buttonSpin.active = !this.H_free,
                this.freeLabel.string = "Free: " + this.H_free,
                this.freeLabel.node.active = !!this.H_free
            },
            onLineWin: function(t) {
                var e = this;
                Promise.all(this.H_line_win.map(function(i) {
                    var n = e.Line.mainLines[i.line - 1];
                    t ? (n.ef = !0,
                    n.onShow()) : (n.ef = !1,
                    n.onHidden())
                }))
            },
            showLineWin: function(t) {
                this.onLineWin(t),
                t || this.isNoHu || this.isBigWin || this.isAuto || this.isFreeSpin || (this.eflineN = 0,
                this.efLineWin())
            },
            efLineWin: function(t) {
                if (this.H_line_win.length) {
                    this.node.stopAllActions();
                    void 0 === this.H_line_win[this.eflineN] && (this.eflineN = 0),
                    this.efOneLineWin(this.eflineN, !0);
                    var e = cc.callFunc(function() {
                        this.efOneLineWin(this.eflineN, !1),
                        this.eflineN += 1,
                        this.efLineWin()
                    }, this);
                    this.node.runAction(cc.sequence(cc.delayTime(1.5), e))
                }
            },
            efOneLineWin: function(t, e) {
                t = this.H_line_win[this.eflineN].line;
                var i = this.Line.mainLines[t - 1];
                e ? (i.ef = !0,
                i.onShow()) : (i.ef = !1,
                i.onHidden())
            },
            hieuUng: function() {
                if (this.isBigWin && !this.isNoHu)
                    this.BigWin.node.active = !0,
                    this.BigWin.play(),
                    this.oldBigWin = !0;
                else if (this.isNoHu)
                    this.NoHu.node.active = !0,
                    this.NoHu.play();
                else if (this.isBonus)
                    this.EF_Bonus.node.active = !0,
                    this.EF_Bonus.play(),
                    cc.RedT.audio.playEf("bonus");
                else if (this.isFree)
                    this.EF_Free.node.active = !0,
                    this.EF_Free.play();
                else if (this.H_win > 0) {
                    var t = new cc.Node;
                    t.addComponent(cc.Label),
                    (t = t.getComponent(cc.Label)).string = "+" + n.numberWithCommas(this.H_win),
                    t.font = cc.RedT.util.fontCong,
                    t.lineHeight = 130,
                    t.fontSize = 25,
                    t.node.position = cc.v2(0, 21),
                    this.nodeNotice.addChild(t.node),
                    !this.oldBigWin && this._playSFX(this.audioWin),
                    t.node.runAction(cc.sequence(cc.moveTo(1.2, cc.v2(0, 105)), cc.callFunc(function() {
                        this.speed = 0,
                        t.node.destroy(),
                        this.hieuUng(),
                        this.showLineWin(!1)
                    }, this))),
                    this.H_win = 0,
                    this.oldBigWin = !1
                } else
                    this.isAuto || this.isFreeSpin ? this.timeOut = setTimeout(function() {
                        this.onAutoSpin(),
                        this.speed = 400
                    }
                    .bind(this), this.speed) : this.resetSpin()
            },
            onChangerBet: function() {
                this._playSFX(this.audioClick),
                this.betSelect++,
                this.betSelect > 2 && (this.betSelect = 0),
                this.bet.string = this.betString[this.betSelect],
                this.tong.string = n.numberWithCommas(this.Line.data.length * n.getOnlyNumberInString(this.bet.string)),
                this.onGetHu()
            },
            changerCoint: function() {
                this.red = !this.red,
                this.nodeRed.active = !this.nodeRed.active,
                this.nodeXu.active = !this.nodeXu.active,
                this.userData(cc.RedT.user),
                this.onGetHu()
            },
            onClickAuto: function() {
                this._playSFX(this.audioClick),
                this.onAuto()
            },
            onAuto: function() {
                this.isAuto = !this.isAuto,
                this.isAuto ? this.buttonAuto.color = cc.Color.WHITE : this.buttonAuto.color = this.buttonAuto.color.fromHEX("#8A8A8A")
            },
            onClickSpin: function() {
                this.onSpin()
            },
            onAutoSpin: function() {
                this._playSFX(this.audioClickSpin),
                this.onGetSpin()
            },
            onSpin: function() {
                this.Line.data.length < 1 ? this.addNotice("Ch\u1ecdn \xedt nh\u1ea5t 1 d\xf2ng") : this.isSpin || (this._playSFX(this.audioClickSpin),
                this.node.stopAllActions(),
                void 0 !== this.eflineN && void 0 !== this.H_line_win && this.H_line_win.length && this.efOneLineWin(this.eflineN, !1),
                this.eflineO = this.eflineN = 0,
                this.isSpin = !0,
                this.setSpin(),
                this.onGetSpin())
            },
            setSpin: function() {
                this.buttonLine.pauseSystemEvents(),
                this.buttonSpin.pauseSystemEvents(),
                this.buttonCoint.pauseSystemEvents(),
                this.buttonBet.pauseSystemEvents()
            },
            resetSpin: function() {
                this.isAuto && this.onAuto(),
                this.isSpin = !1,
                this.buttonLine.resumeSystemEvents(),
                this.buttonSpin.resumeSystemEvents(),
                this.buttonCoint.resumeSystemEvents(),
                this.buttonBet.resumeSystemEvents()
            },
            runReels: function() {
                Promise.all(this.reels.map(function(t, e) {
                    t.spin(e)
                }))
            },
            copy: function() {
                Promise.all(this.reels.map(function(t) {
                    t.icons[t.icons.length - 1].setIcon(t.icons[2].data),
                    t.icons[t.icons.length - 2].setIcon(t.icons[1].data),
                    t.icons[t.icons.length - 3].setIcon(t.icons[0].data)
                }))
            },
            random: function() {
                Promise.all(this.reels.map(function(t) {
                    Promise.all(t.icons.map(function(e, i) {
                        i > 2 && i < t.icons.length - 3 && e.random()
                    }))
                }))
            },
            onGetSpin: function() {
                cc.RedT.send({
                    g: {
                        longlan: {
                            spin: {
                                cuoc: n.getOnlyNumberInString(this.bet.string),
                                red: this.red,
                                line: this.Line.data
                            }
                        }
                    }
                })
            },
            addNotice: function(t) {
                var e = cc.instantiate(this.prefabNotice);
                e.getComponent("mini_warning").text.string = t,
                this.nodeNotice.addChild(e)
            },
            backGame: function() {
                this.loading.active = !0,
                void 0 !== this.timeOut && clearTimeout(this.timeOut),
                cc.director.loadScene("MainGame")
            },
            signOut: function() {
                cc.director.loadScene("MainGame", function() {
                    cc.RedT.inGame.signOut()
                })
            },
            onGetHu: function() {
                var t = this;
                if (void 0 !== cc.RedT.setting.topHu.data) {
                    var e = this
                      , i = n.getOnlyNumberInString(e.bet.string);
                    Promise.all(cc.RedT.setting.topHu.data.long.filter(function(t) {
                        return t.type == i && t.red == e.red
                    })).then(function(e) {
                        var i = n.getOnlyNumberInString(t.hu.string)
                          , o = e[0].bet;
                        i - o != 0 && n.numberTo(t.hu, i, o, 2e3, !0)
                    })
                }
            },
            playMusic: function() {
                this.audioBG.play()
            },
            pauseMusic: function() {
                this.audioBG.pause()
            },
            onSetAudio: function() {
                cc.RedT.isSoundBackground() ? (cc.RedT.setSoundBackground(!1),
                this.pauseMusic(),
                cc.RedT.IS_SOUND = !1,
                cc.RedT.setSoundGame(!1),
                this.audioIcon.spriteFrame = this.audioIcons[0]) : (cc.RedT.setSoundBackground(!0),
                this.playMusic(),
                cc.RedT.IS_SOUND = !0,
                cc.RedT.setSoundGame(!0),
                this.audioIcon.spriteFrame = this.audioIcons[1])
            }
        }),
        cc._RF.pop()
    }
    , {
        CoTrang_dialog: "CoTrang_dialog",
        CoTrang_lines: "CoTrang_lines",
        CoTrang_playBonus: "CoTrang_playBonus",
        CoTrang_reel: "CoTrang_reel",
        Helper: "Helper",
        Notice: "Notice"
    }],
    Config: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "05c18T81bpMJoySqeB29I5A", "Config"),
        e.exports = {
            HOST: "http://127.0.0.1:8080",
            SOCKET: "ws://127.0.0.1:8080"
        },
        cc._RF.pop()
    }
    , {}],
    1: [function(t, e, i) {
        var n = {
            utf8: {
                stringToBytes: function(t) {
                    return n.bin.stringToBytes(unescape(encodeURIComponent(t)))
                },
                bytesToString: function(t) {
                    return decodeURIComponent(escape(n.bin.bytesToString(t)))
                }
            },
            bin: {
                stringToBytes: function(t) {
                    for (var e = [], i = 0; i < t.length; i++)
                        e.push(255 & t.charCodeAt(i));
                    return e
                },
                bytesToString: function(t) {
                    for (var e = [], i = 0; i < t.length; i++)
                        e.push(String.fromCharCode(t[i]));
                    return e.join("")
                }
            }
        };
        e.exports = n
    }
    , {}],
    2: [function(t, e, i) {
        (function() {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
              , i = {
                rotl: function(t, e) {
                    return t << e | t >>> 32 - e
                },
                rotr: function(t, e) {
                    return t << 32 - e | t >>> e
                },
                endian: function(t) {
                    if (t.constructor == Number)
                        return 16711935 & i.rotl(t, 8) | 4278255360 & i.rotl(t, 24);
                    for (var e = 0; e < t.length; e++)
                        t[e] = i.endian(t[e]);
                    return t
                },
                randomBytes: function(t) {
                    for (var e = []; t > 0; t--)
                        e.push(Math.floor(256 * Math.random()));
                    return e
                },
                bytesToWords: function(t) {
                    for (var e = [], i = 0, n = 0; i < t.length; i++,
                    n += 8)
                        e[n >>> 5] |= t[i] << 24 - n % 32;
                    return e
                },
                wordsToBytes: function(t) {
                    for (var e = [], i = 0; i < 32 * t.length; i += 8)
                        e.push(t[i >>> 5] >>> 24 - i % 32 & 255);
                    return e
                },
                bytesToHex: function(t) {
                    for (var e = [], i = 0; i < t.length; i++)
                        e.push((t[i] >>> 4).toString(16)),
                        e.push((15 & t[i]).toString(16));
                    return e.join("")
                },
                hexToBytes: function(t) {
                    for (var e = [], i = 0; i < t.length; i += 2)
                        e.push(parseInt(t.substr(i, 2), 16));
                    return e
                },
                bytesToBase64: function(e) {
                    for (var i = [], n = 0; n < e.length; n += 3)
                        for (var o = e[n] << 16 | e[n + 1] << 8 | e[n + 2], c = 0; c < 4; c++)
                            8 * n + 6 * c <= 8 * e.length ? i.push(t.charAt(o >>> 6 * (3 - c) & 63)) : i.push("=");
                    return i.join("")
                },
                base64ToBytes: function(e) {
                    e = e.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var i = [], n = 0, o = 0; n < e.length; o = ++n % 4)
                        0 != o && i.push((t.indexOf(e.charAt(n - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | t.indexOf(e.charAt(n)) >>> 6 - 2 * o);
                    return i
                }
            };
            e.exports = i
        }
        )()
    }
    , {}],
    3: [function(t, e, i) {
        function n(t) {
            return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        }
        function o(t) {
            return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0))
        }
        e.exports = function(t) {
            return null != t && (n(t) || o(t) || !!t._isBuffer)
        }
    }
    , {}],
    DEvent: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "84193OGZrdD/YtGX/ttIqDX", "DEvent");
        var n = t("EventTaiXiu")
          , o = t("EventAngrybird")
          , c = t("EventBigBabol")
          , s = t("EventMiniPoker")
          //, a = t("EventHaiLoc");
        cc.Class({
            extends: cc.Component,
            properties: {
                menu: cc.Node,
                content: cc.Node,
                eventAngrybird: o,
                eventBigBabol: c,
                eventMiniPoker: s,
                eventTaiXiu: n,
                //eventHaiLoc: a
            },
            selectEvent: function(t) {
                Promise.all(this.menu.children.map(function(e) {
                    e.name == t.target.name ? (e.children[0].active = !0,
                    e.children[1].active = !1) : (e.children[0].active = !1,
                    e.children[1].active = !0)
                })),
                Promise.all(this.content.children.map(function(e) {
                    e.name == t.target.name ? e.active = !0 : e.active = !1
                }))
            },
            onData: function(t) {
                t.taixiu && this.eventTaiXiu.onData(t.taixiu)
                //t.hailoc && this.eventHaiLoc.onData(t.hailoc)
            },
            onHU: function(t) {
                this.eventMiniPoker.onData(t.mini_poker),
                this.eventAngrybird.onData(t.arb),
                this.eventBigBabol.onData(t.big_babol)
            }
        }),
        cc._RF.pop()
    }
    , {
        EventAngrybird: "EventAngrybird",
        EventBigBabol: "EventBigBabol",
        //EventHaiLoc: "EventHaiLoc",
        EventMiniPoker: "EventMiniPoker",
        EventTaiXiu: "EventTaiXiu"
    }],
    DangKyOTP: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "6aa41Wg701MCq0Vmi5zwJ+1", "DangKyOTP");
        var n = t("BrowserUtil")
          , o = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                phone: {
                    default: null,
                    type: cc.EditBox
                },
                email: {
                    default: null,
                    type: cc.EditBox
                },
                cmt: {
                    default: null,
                    type: cc.EditBox
                },
                otp: {
                    default: null,
                    type: cc.EditBox
                },
                nodeReg: cc.Node,
                nodeInfo: cc.Node,
                labelPhone: cc.Label,
                labelEmail: cc.Label,
                labelCMT: cc.Label
            },
            onLoad: function() {
                var t = this;
                this.editboxs = [this.phone, this.email, this.cmt, this.otp],
                this.keyHandle = function(e) {
                    return e.keyCode === cc.macro.KEY.tab ? (t.changeNextFocusEditBox(),
                    e.preventDefault && e.preventDefault(),
                    !1) : e.keyCode === cc.macro.KEY.enter ? (n.focusGame(),
                    t.onRegClick(),
                    e.preventDefault && e.preventDefault(),
                    !1) : void 0
                }
            },
            onEnable: function() {
                cc.sys.isBrowser && this.nodeReg.active && this.addEvent()
            },
            onDisable: function() {
                cc.sys.isBrowser && this.nodeReg.active && this.removeEvent(),
                this.clear()
            },
            addEvent: function() {
                for (var t in cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).addEventListener("keydown", this.keyHandle, !1)
            },
            removeEvent: function() {
                for (var t in cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).removeEventListener("keydown", this.keyHandle, !1)
            },
            onKeyDown: function(t) {
                switch (t.keyCode) {
                case cc.macro.KEY.tab:
                    this.isTop() && this.changeNextFocusEditBox();
                    break;
                case cc.macro.KEY.enter:
                    this.isTop() && this.onRegClick()
                }
            },
            changeNextFocusEditBox: function() {
                for (var t = !1, e = 0, i = this.editboxs.length; e < i; e++)
                    if (n.checkEditBoxFocus(this.editboxs[e])) {
                        n.focusEditBox(this.editboxs[e]),
                        t = !0;
                        break
                    }
                !t && 0 < this.editboxs.length && n.focusEditBox(this.editboxs[0])
            },
            isTop: function() {
                return !cc.RedT.inGame.notice.node.active && !cc.RedT.inGame.loading.active
            },
            onOTPClick: function() {
                o.checkPhoneValid(this.phone.string) ? cc.RedT.send({
                    user: {
                        security: {
                            sendOTP: this.phone.string
                        }
                    }
                }) : cc.RedT.inGame.notice.show({
                    title: "L\u1ed6I!",
                    text: "S\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xf4ng h\u1ee3p l\u1ec7."
                })
            },
            onRegClick: function() {
                !o.checkPhoneValid(this.phone.string) || !o.validateEmail(this.email.string) || o.isEmpty(this.cmt.string) || o.isEmpty(this.otp.string) || 6 != this.otp.string.length || this.cmt.string.length < 9 || this.cmt.string.length > 12 ? cc.RedT.inGame.notice.show({
                    title: "L\u1ed6I!",
                    text: "B\u1ea1n nh\u1eadp kh\xf4ng \u0111\xfang th\xf4ng tin"
                }) : cc.RedT.send({
                    user: {
                        security: {
                            regOTP: {
                                phone: this.phone.string,
                                email: this.email.string,
                                cmt: this.cmt.string,
                                otp: this.otp.string
                            }
                        }
                    }
                })
            },
            clear: function() {
                this.phone.string = this.email.string = this.cmt.string = this.otp.string = ""
            },
            statusOTP: function(t) {
                this.nodeReg.active = !t,
                this.nodeInfo.active = t
            },
            telegram: function() {
                cc.sys.openURL("https://telegram.me/HAVIPBot")
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil",
        Helper: "Helper"
    }],
    Dialog: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "25e93DvojpK6Idfq683yfCg", "Dialog");
        var n = t("SignIn")
          , o = t("SignUp")
          , c = t("ForGotPass")
          , s = t("SignName")
          , a = t("Shop")
          , h = t("Profile")
          , r = t("Settings")
          , u = t("TheCao")
          , d = t("GiftCode")
          , l = t("DEvent")
          , p = t("PokerNap")
          , g = t("iMessage");
        cc.Class({
            extends: cc.Component,
            properties: {
                bgShow: cc.Node,
                signIn: n,
                signUp: o,
                ForGotPass: c,
                signName: s,
                shop: a,
                profile: h,
                the_cao: u,
                settings: r,
                GiftCode: d,
                DEvent: l,
                PokerNap: p,
                iMessage: g
            },
            init: function() {
                this.actionShow = cc.spawn(cc.scaleTo(.5, 1).easing(cc.easeBackOut(2.5)), cc.fadeTo(.5, 255)),
                this.objShow = null,
                this.objTmp = null,
                this.shop.init(),
                this.profile.init(),
                this.the_cao.init(),
                this.bgShow.active = !1
            },
            onClickBack: function() {
                cc.RedT.audio.playUnClick(),
                this.onBack()
            },
            onBack: function() {
                this.bgShow.active = !1,
                null != this.objShow ? void 0 == this.objShow.previous || null == this.objShow.previous ? (this.objShow.active = !1,
                this.node.active = !1,
                this.objShow = null) : (this.objTmp = this.objShow,
                this.objShow = this.objShow.previous,
                this.objTmp.previous = null,
                this.objTmp.active = !1,
                this.objShow.active = !0,
                this.objTmp = null) : this.node.active = !1
            },
            onClosePrevious: function(t) {
                this.bgShow.active = !1,
                void 0 !== t.previous && null !== t.previous && (this.onClosePrevious(t.previous),
                delete t.previous),
                t.active = !1
            },
            onCloseDialog: function() {
                this.bgShow.active = !1,
                null != this.objShow ? void 0 == this.objShow.previous || null == this.objShow.previous ? (this.objShow.active = this.node.active = !1,
                this.objShow = null) : (this.onClosePrevious(this.objShow.previous),
                this.objShow.active = this.node.active = !1,
                delete this.objShow.previous,
                this.objShow = null) : this.node.active = !1
            },
            resetSizeDialog: function(t) {
                t.stopAllActions(),
                t.scale = .5,
                t.opacity = 0
            },
            showSignIn: function() {
                this.bgShow.active = !0,
                this.node.active = this.signIn.node.active = !0,
                this.objShow = this.signIn.node
            },
            showSignUp: function() {
                this.bgShow.active = !0,
                this.node.active = this.signUp.node.active = !0,
                this.objShow = this.signUp.node
            },
            showForGotPass: function() {
                this.bgShow.active = !0,
                this.objShow.active = !1,
                this.ForGotPass.node.previous = this.objShow,
                this.node.active = this.ForGotPass.node.active = !0,
                this.objShow = this.ForGotPass.node
            },
            showSignName: function() {
                this.bgShow.active = !0,
                this.node.active = this.signName.node.active = !0,
                this.signUp.node.active = this.signIn.node.active = !1,
                this.objShow = this.signName.node
            },
            showShop: function(t, e) {
                cc.RedT.IS_LOGIN ? (this.node.active = this.shop.node.active = !0,
                this.objShow = this.shop.node,
                this.shop.superView(e)) : this.showSignIn()
            },
            showProfile: function(t, e) {
                this.node.active = this.profile.node.active = !0,
                this.objShow = this.profile.node,
                this.profile.superView(e)
            },
            showSetting: function(t) {
                this.bgShow.active = !0,
                this.node.active = this.settings.node.active = !0,
                this.objShow = this.settings.node
            },
            showGiftCode: function(t) {
                this.bgShow.active = !0,
                cc.RedT.IS_LOGIN ? (this.node.active = this.GiftCode.node.active = !0,
                this.objShow = this.GiftCode.node) : this.showSignIn()
            },
            showDEvent: function(t) {
                this.bgShow.active = !0,
                cc.RedT.IS_LOGIN ? (this.node.active = this.DEvent.node.active = !0,
                this.objShow = this.DEvent.node) : this.showSignIn()
            },
            showPokerNap: function(t) {
                this.bgShow.active = !0,
                this.node.active = this.PokerNap.node.active = !0,
                this.objShow = this.PokerNap.node,
                this.PokerNap.init(t)
            },
            showiMessage: function(t) {
                this.bgShow.active = !0,
                this.node.active = this.iMessage.node.active = !0,
                this.objShow = this.iMessage.node
            },
            showVQMM: function(t) {
                this.bgShow.active = !0,
                cc.RedT.IS_LOGIN ? cc.RedT.inGame.notice.show({
                    title: "VQMM",
                    text: "Ch\u1ee9c n\u0103ng s\u1eafp ra m\u1eaft..."
                }) : this.showSignIn()
            }
        }),
        cc._RF.pop()
    }
    , {
        DEvent: "DEvent",
        ForGotPass: "ForGotPass",
        GiftCode: "GiftCode",
        PokerNap: "PokerNap",
        Profile: "Profile",
        Settings: "Settings",
        Shop: "Shop",
        SignIn: "SignIn",
        SignName: "SignName",
        SignUp: "SignUp",
        TheCao: "TheCao",
        iMessage: "iMessage"
    }],
    DisableClick: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "a0680bUBBRNNZFsRV8g5DR/", "DisableClick"),
        cc.Class({
            extends: cc.Component,
            onEnable: function() {
                this.node.on("touchstart", function(t) {
                    t.stopPropagation()
                }),
                this.node.on("touchend", function(t) {
                    t.stopPropagation()
                })
            },
            onDisable: function() {
                this.node.off("touchstart", function(t) {
                    t.stopPropagation()
                }),
                this.node.off("touchend", function(t) {
                    t.stopPropagation()
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    DoiMatKhau: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "99ffdd9WihFhpmOaK8H6Qen", "DoiMatKhau");
        var n = t("BrowserUtil");
        t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                OldPassword: {
                    default: null,
                    type: cc.EditBox
                },
                NewPassword: {
                    default: null,
                    type: cc.EditBox
                },
                ReNewPassword: {
                    default: null,
                    type: cc.EditBox
                }
            },
            onLoad: function() {
                var t = this;
                this.editboxs = [this.OldPassword, this.NewPassword, this.ReNewPassword],
                this.keyHandle = function(e) {
                    return e.keyCode === cc.macro.KEY.tab ? (t.changeNextFocusEditBox(),
                    e.preventDefault && e.preventDefault(),
                    !1) : e.keyCode === cc.macro.KEY.enter ? (n.focusGame(),
                    t.onChangerClick(),
                    e.preventDefault && e.preventDefault(),
                    !1) : void 0
                }
            },
            onEnable: function() {
                cc.sys.isBrowser && this.addEvent()
            },
            onDisable: function() {
                cc.sys.isBrowser && this.removeEvent(),
                this.clear()
            },
            addEvent: function() {
                for (var t in cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).addEventListener("keydown", this.keyHandle, !1)
            },
            removeEvent: function() {
                for (var t in cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).removeEventListener("keydown", this.keyHandle, !1)
            },
            onKeyDown: function(t) {
                switch (t.keyCode) {
                case cc.macro.KEY.tab:
                    this.isTop() && this.changeNextFocusEditBox();
                    break;
                case cc.macro.KEY.enter:
                    this.isTop() && this.onChangerClick()
                }
            },
            changeNextFocusEditBox: function() {
                for (var t = !1, e = 0, i = this.editboxs.length; e < i; e++)
                    if (n.checkEditBoxFocus(this.editboxs[e])) {
                        n.focusEditBox(this.editboxs[e]),
                        t = !0;
                        break
                    }
                !t && 0 < this.editboxs.length && n.focusEditBox(this.editboxs[0])
            },
            isTop: function() {
                return !cc.RedT.inGame.notice.node.active && !cc.RedT.inGame.loading.active
            },
            onChangerClick: function() {
                this.OldPassword.string.length < 6 || this.OldPassword.string.length > 32 || this.NewPassword.string.length < 6 || this.NewPassword.string.length > 32 || this.ReNewPassword.string.length < 6 || this.ReNewPassword.string.length > 32 ? cc.RedT.inGame.notice.show({
                    title: "L\u1ed6I",
                    text: "M\u1eadt kh\u1ea9u t\u1eeb 6 \u0111\u1ebfn 32 k\xfd t\u1ef1.\n\nH\xe3y ki\u1ec3m tra l\u1ea1i c\xe1c th\xf4ng tin."
                }) : this.OldPassword.string == this.NewPassword.string ? cc.RedT.inGame.notice.show({
                    title: "L\u1ed6I",
                    text: "M\u1eadt kh\u1ea9u m\u1edbi kh\xf4ng tr\xf9ng v\u1edbi m\u1eadt kh\u1ea9u c\u0169."
                }) : this.NewPassword.string != this.ReNewPassword.string ? cc.RedT.inGame.notice.show({
                    title: "L\u1ed6I",
                    text: "Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u m\u1edbi kh\xf4ng kh\u1edbp."
                }) : (cc.RedT.inGame.loading.active = !0,
                cc.RedT.send({
                    user: {
                        doi_pass: {
                            passOld: this.OldPassword.string,
                            passNew: this.NewPassword.string,
                            passNew2: this.ReNewPassword.string
                        }
                    }
                }))
            },
            clear: function() {
                this.OldPassword.string = this.NewPassword.string = this.ReNewPassword.string = ""
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil",
        Helper: "Helper"
    }],
    EF_NoHu: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "69875aVuIhMXIrGxl2Od9Bs", "EF_NoHu"),
        cc.Class({
            extends: cc.Component,
            properties: {
                close: cc.Node
            },
            onCloseClick: function() {
                this.node.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {}],
    EventAngrybird: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "3da1fygKJVLg6AhCJ4o8/B/", "EventAngrybird"),
        cc.Class({
            extends: cc.Component,
            properties: {
                text100: cc.Label,
                text1000: cc.Label,
                text10000: cc.Label
            },
            onData: function(t) {
                var e = t.filter(function(t) {
                    return 100 == t.type && 1 == t.red
                });
                this.text100.string = "* X" + e[0].x + " h\u0169 ph\xf2ng 100, (sau " + e[0].toX + " h\u0169, " + e[0].balans + " h\u0169 \u0111\u01b0\u1ee3c X" + e[0].x + ")";
                var i = t.filter(function(t) {
                    return 1e3 == t.type && 1 == t.red
                });
                this.text1000.string = "* X" + i[0].x + " h\u0169 ph\xf2ng 1.000, (sau " + i[0].toX + " h\u0169, " + i[0].balans + " h\u0169 \u0111\u01b0\u1ee3c X" + i[0].x + ")";
                var n = t.filter(function(t) {
                    return 1e4 == t.type && 1 == t.red
                });
                this.text10000.string = "* X" + n[0].x + " h\u0169 ph\xf2ng 10.000, (sau " + n[0].toX + " h\u0169, " + n[0].balans + " h\u0169 \u0111\u01b0\u1ee3c X" + n[0].x + ")"
            }
        }),
        cc._RF.pop()
    }
    , {}],
    EventBigBabol: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "9cc99A4PaNHspACLK1eSt4Y", "EventBigBabol"),
        cc.Class({
            extends: cc.Component,
            properties: {
                text100: cc.Label,
                text1000: cc.Label,
                text10000: cc.Label
            },
            onData: function(t) {
                var e = t.filter(function(t) {
                    return 100 == t.type && 1 == t.red
                });
                this.text100.string = "* X" + e[0].x + " h\u0169 ph\xf2ng 100, (sau " + e[0].toX + " h\u0169, " + e[0].balans + " h\u0169 \u0111\u01b0\u1ee3c X" + e[0].x + ")";
                var i = t.filter(function(t) {
                    return 1e3 == t.type && 1 == t.red
                });
                this.text1000.string = "* X" + i[0].x + " h\u0169 ph\xf2ng 1.000, (sau " + i[0].toX + " h\u0169, " + i[0].balans + " h\u0169 \u0111\u01b0\u1ee3c X" + i[0].x + ")";
                var n = t.filter(function(t) {
                    return 1e4 == t.type && 1 == t.red
                });
                this.text10000.string = "* X" + n[0].x + " h\u0169 ph\xf2ng 10.000, (sau " + n[0].toX + " h\u0169, " + n[0].balans + " h\u0169 \u0111\u01b0\u1ee3c X" + n[0].x + ")"
            }
        }),
        cc._RF.pop()
    }
    , {}],
    /**EventHaiLoc_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "bbe16UyJcJKiqahkKfbg1bY", "EventHaiLoc_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                top: cc.Label,
                users: cc.Label,
                diem: cc.Label,
                gift: cc.Label
            }
        }),
        cc._RF.pop()
    }
    , {}],
    EventHaiLoc: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "9cbc5lp0/pFlbzY/Vs2p1rp", "EventHaiLoc");
        t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                menu: cc.Node,
                content: cc.Node,
                item: cc.Prefab,
                itemHT: cc.Prefab,
                contentNowLeft: cc.Node
            },
            onLoad: function() {},
            selectEvent: function(t) {
                "top" == t.target.name && this.onGetTop(),
                Promise.all(this.menu.children.map(function(e) {
                    e.name == t.target.name ? (e.children[0].active = !0,
                    e.children[1].color = cc.Color.BLACK) : (e.children[0].active = !1,
                    e.children[1].color = cc.Color.WHITE)
                })),
                Promise.all(this.content.children.map(function(e) {
                    e.name == t.target.name ? e.active = !0 : e.active = !1
                }))
            },
            onGetTop: function() {
                cc.RedT.send({
                    sieuzon: !0
                })
            },
            onData: function(t) {
                t && this.hailoc(t)
            },
            hailoc: function(t) {
                this.contentNowLeft.removeAllChildren();
                var e = this;
                Promise.all(t.top.map(function(t, i) {
                    var n;
                    (n = (n = cc.instantiate(e.item)).getComponent("EventHaiLoc_item")).top.string = i + 1,
                    n.users.string = t.Name,
                    n.diem.string = t.VipPoint,
                    0 == i || 1 == i || 2 == i ? n.gift.string = "" : 3 == i ? n.gift.string = "12.000.000 HEC" : 4 == i ? n.gift.string = "6.000.000 HEC" : i >= 5 && i <= 6 ? n.gift.string = "3.000.000 HEC" : i >= 7 && i <= 9 && (n.gift.string = "1.000.000 HEC"),
                    30,
                    n.node.children[0].active = !(1 & i),
                    e.contentNowLeft.addChild(n.node)
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],*/
    EventMiniPoker: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "7cc57Khr6xN25cbkkD7jvU8", "EventMiniPoker"),
        cc.Class({
            extends: cc.Component,
            properties: {
                text100: cc.Label,
                text1000: cc.Label,
                text10000: cc.Label
            },
            onData: function(t) {
                var e = t.filter(function(t) {
                    return 100 == t.type && 1 == t.red
                });
                this.text100.string = "* X" + e[0].x + " h\u0169 ph\xf2ng 100, (sau " + e[0].toX + " h\u0169, " + e[0].balans + " h\u0169 \u0111\u01b0\u1ee3c X" + e[0].x + ")";
                var i = t.filter(function(t) {
                    return 1e3 == t.type && 1 == t.red
                });
                this.text1000.string = "* X" + i[0].x + " h\u0169 ph\xf2ng 1.000, (sau " + i[0].toX + " h\u0169, " + i[0].balans + " h\u0169 \u0111\u01b0\u1ee3c X" + i[0].x + ")";
                var n = t.filter(function(t) {
                    return 1e4 == t.type && 1 == t.red
                });
                this.text10000.string = "* X" + n[0].x + " h\u0169 ph\xf2ng 10.000, (sau " + n[0].toX + " h\u0169, " + n[0].balans + " h\u0169 \u0111\u01b0\u1ee3c X" + n[0].x + ")"
            }
        }),
        cc._RF.pop()
    }
    , {}],
    EventTaiXiu_item1: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "8a412lmXzBE46Wx0zh9McYz", "EventTaiXiu_item1"),
        cc.Class({
            extends: cc.Component,
            properties: {
                top: cc.Label,
                users: cc.Label,
                day: cc.Label,
                gift: cc.Label
            }
        }),
        cc._RF.pop()
    }
    , {}],
    EventTaiXiu_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "776e2WuPddPI5Z1l8EHRach", "EventTaiXiu_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                top: cc.Label,
                users: cc.Label,
                day: cc.Label,
                gift: cc.Label
            }
        }),
        cc._RF.pop()
    }
    , {}],
    EventTaiXiu: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "e29efzOFZlKPa4AV0cVt6FW", "EventTaiXiu");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                menu: cc.Node,
                content: cc.Node,
                item: cc.Prefab,
                itemHT: cc.Prefab,
                contentNowLeft: cc.Node,
                contentNowRight: cc.Node,
                contentHQLeft: cc.Node,
                contentHQRight: cc.Node,
                LabelDate: cc.Label,
                LabelDateMore: cc.Label,
                nodeDateMore: cc.Node,
                dataOld: !1
            },
            onLoad: function() {
                this.dateTop = new Date,
                this.dateTop.setDate(this.dateTop.getDate() - 1);
                var t = this.dateTop.getDate() + "/" + n.numberPad(this.dateTop.getMonth() + 1, 2) + "/" + this.dateTop.getFullYear();
                this.LabelDate.string = this.LabelDateMore.string = t
            },
            selectEvent: function(t) {
                this.nodeDateMore.active = !1,
                "top" == t.target.name ? this.onGetTop() : "homqua" == t.target.name && this.onGetHomQua(),
                Promise.all(this.menu.children.map(function(e) {
                    e.name == t.target.name ? (e.children[0].active = !0,
                    e.children[1].color = cc.Color.BLACK) : (e.children[0].active = !1,
                    e.children[1].color = cc.Color.WHITE)
                })),
                Promise.all(this.content.children.map(function(e) {
                    e.name == t.target.name ? e.active = !0 : e.active = !1
                }))
            },
            onGetTop: function() {
                cc.RedT.send({
                    event: {
                        taixiu: {
                            getTop: !0
                        }
                    }
                })
            },
            onGetHomQua: function() {
                !this.dataOld && cc.RedT.send({
                    event: {
                        taixiu: {
                            getTopHQ: this.LabelDate.string
                        }
                    }
                })
            },
            dateToggle: function() {
                this.nodeDateMore.active = !this.nodeDateMore.active
            },
            datePlus: function() {
                var t = t = new Date(this.dateTop);
                t.setDate(t.getDate() + 2),
                new Date > t && (this.dateTop.setDate(this.dateTop.getDate() + 1),
                this.LabelDateMore.string = n.numberPad(this.dateTop.getDate(), 2) + "/" + n.numberPad(this.dateTop.getMonth() + 1, 2) + "/" + this.dateTop.getFullYear())
            },
            dateMinus: function() {
                this.dateTop.setDate(this.dateTop.getDate() - 1),
                this.LabelDateMore.string = n.numberPad(this.dateTop.getDate(), 2) + "/" + n.numberPad(this.dateTop.getMonth() + 1, 2) + "/" + this.dateTop.getFullYear()
            },
            dateView: function() {
                this.LabelDateMore.string != this.LabelDate.string && (this.dataOld = !1,
                this.LabelDate.string = this.LabelDateMore.string,
                this.onGetHomQua()),
                this.nodeDateMore.active = !1
            },
            onData: function(t) {
                t.topHT && this.topHT(t.topHT),
                t.topHQ && (this.dataOld = !0,
                this.topHQ(t.topHQ))
            },
            topHT: function(t) {
                this.contentNowLeft.removeAllChildren(),
                this.contentNowRight.removeAllChildren();
                var e = this;
                Promise.all(t.win.map(function(t, i) {
                    var n;
                    (n = (n = cc.instantiate(e.itemHT)).getComponent("EventTaiXiu_item")).top.string = i + 1,
                    n.users.string = t.name,
                    n.day.string = t.top,
                    n.top.node.position = cc.v2(-210, 0),
                    n.users.node.position = cc.v2(-90, 0),
                    n.day.node.position = cc.v2(150, 0),
                    n.node.children[0].active = !(1 & i),
                    e.contentNowLeft.addChild(n.node)
                })),
                Promise.all(t.lost.map(function(t, i) {
                    var n;
                    (n = (n = cc.instantiate(e.itemHT)).getComponent("EventTaiXiu_item")).top.string = i + 1,
                    n.users.string = t.name,
                    n.day.string = t.top,
                    n.top.node.position = cc.v2(-200, 0),
                    n.users.node.position = cc.v2(-70, 0),
                    n.day.node.position = cc.v2(150, 0),
                    n.node.children[0].active = !(1 & i),
                    e.contentNowRight.addChild(n.node)
                }))
            },
            topHQ: function(t) {
                this.contentHQLeft.removeAllChildren(),
                this.contentHQRight.removeAllChildren();
                var e = this;
                Promise.all(t.win.map(function(t, i) {
                    var o;
                    (o = (o = cc.instantiate(e.item)).getComponent("EventTaiXiu_item")).top.string = t.top,
                    o.users.string = t.name,
                    o.day.string = t.line,
                    o.gift.string = n.numberWithCommas(t.reward),
                    o.top.node.position = cc.v2(-200, 0),
                    o.users.node.position = cc.v2(-90, 0),
                    o.day.node.position = cc.v2(65, 0),
                    o.gift.node.position = cc.v2(170, 0),
                    o.node.children[0].active = !(1 & i),
                    e.contentHQLeft.addChild(o.node)
                })),
                Promise.all(t.lost.map(function(t, i) {
                    var o;
                    (o = (o = cc.instantiate(e.item)).getComponent("EventTaiXiu_item")).top.string = t.top,
                    o.users.string = t.name,
                    o.day.string = t.line,
                    o.gift.string = n.numberWithCommas(t.reward),
                    o.top.node.position = cc.v2(-200, 0),
                    o.users.node.position = cc.v2(-90, 0),
                    o.day.node.position = cc.v2(65, 0),
                    o.gift.node.position = cc.v2(170, 0),
                    o.node.children[0].active = !(1 & i),
                    e.contentHQRight.addChild(o.node)
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    ForGotPass: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "71d268vawpEd7jT7rX6zxb6", "ForGotPass");
        var n = t("BrowserUtil");
        t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                username: {
                    default: null,
                    type: cc.EditBox
                },
                newpass: {
                    default: null,
                    type: cc.EditBox
                },
                renewpass: {
                    default: null,
                    type: cc.EditBox
                },
                otp: {
                    default: null,
                    type: cc.EditBox
                },
                captcha: {
                    default: null,
                    type: cc.EditBox
                },
                capchaSprite: cc.Sprite
            },
            onLoad: function() {
                var t = this;
                this.editboxs = [this.username, this.newpass, this.renewpass, this.otp, this.captcha],
                this.keyHandle = function(e) {
                    return e.keyCode === cc.macro.KEY.tab ? (t.changeNextFocusEditBox(),
                    e.preventDefault && e.preventDefault(),
                    !1) : e.keyCode === cc.macro.KEY.enter ? (n.focusGame(),
                    t.onForGotClick(),
                    e.preventDefault && e.preventDefault(),
                    !1) : e.keyCode === cc.macro.KEY.escape ? (cc.RedT.inGame.dialog.onClickBack(),
                    e.preventDefault && e.preventDefault(),
                    !1) : void 0
                }
            },
            onEnable: function() {
                cc.sys.isBrowser && this.addEvent(),
                this.node.runAction(cc.RedT.inGame.dialog.actionShow),
                this.reCaptcha()
            },
            onDisable: function() {
                cc.sys.isBrowser && this.removeEvent(),
                this.clean(),
                cc.RedT.inGame.dialog.resetSizeDialog(this.node)
            },
            addEvent: function() {
                for (var t in cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).addEventListener("keydown", this.keyHandle, !1)
            },
            removeEvent: function() {
                for (var t in this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).removeEventListener("keydown", this.keyHandle, !1);
                cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
            },
            onKeyDown: function(t) {
                switch (t.keyCode) {
                case cc.macro.KEY.escape:
                    this.isTop() && cc.RedT.inGame.dialog.onClickBack();
                    break;
                case cc.macro.KEY.tab:
                    this.isTop() && this.changeNextFocusEditBox();
                    break;
                case cc.macro.KEY.enter:
                    this.isTop() && this.onForGotClick()
                }
            },
            changeNextFocusEditBox: function() {
                for (var t = !1, e = 0, i = this.editboxs.length; e < i; e++)
                    if (n.checkEditBoxFocus(this.editboxs[e])) {
                        n.focusEditBox(this.editboxs[e]),
                        t = !0;
                        break
                    }
                !t && 0 < this.editboxs.length && n.focusEditBox(this.editboxs[0])
            },
            isTop: function() {
                return !cc.RedT.inGame.notice.node.active && !cc.RedT.inGame.loading.active
            },
            clean: function() {
                this.username.string = this.newpass.string = this.renewpass.string = this.otp.string = this.captcha.string = ""
            },
            onForGotClick: function() {
                this.username.string.length < 3 || this.username.string.length > 32 ? cc.RedT.inGame.notice.show({
                    title: "L\u1ed6I",
                    text: "Vui l\xf2ng nh\u1eadp ch\xednh x\xe1c t\xean t\xe0i kho\u1ea3n..."
                }) : null === this.username.string.match(new RegExp("^[a-zA-Z0-9]+$")) ? cc.RedT.inGame.notice.show({
                    title: "L\u1ed6I",
                    text: "T\xean t\xe0i kho\u1ea3n ch\u1ec9 g\u1ed3m Ch\u1eef v\xe0 S\u1ed1!"
                }) : this.newpass.string.length < 6 || this.newpass.string.length > 32 ? cc.RedT.inGame.notice.show({
                    title: "L\u1ed6I",
                    text: "\u0110\u1ed9 d\xe0i m\u1eadt kh\u1ea9u t\u1ed1i thi\u1ec3u 6-32 k\xed t\u1ef1..."
                }) : this.newpass.string.length != this.renewpass.string.length ? cc.RedT.inGame.notice.show({
                    title: "L\u1ed6I",
                    text: "Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u kh\xf4ng \u0111\xfang..."
                }) : 4 != this.otp.string.length ? cc.RedT.inGame.notice.show({
                    title: "L\u1ed6I",
                    text: "M\xe3 OTP kh\xf4ng h\u1ee3p l\u1ec7..."
                }) : 4 != this.captcha.string.length ? cc.RedT.inGame.notice.show({
                    title: "L\u1ed6I",
                    text: "Captcha kh\xf4ng \u0111\xfang."
                }) : cc.RedT.send({
                    forgotpass: {
                        iforgot: {
                            name: this.username.string,
                            pass: this.newpass.string,
                            otp: this.otp.string,
                            captcha: this.captcha.string
                        }
                    }
                })
            },
            initCaptcha: function(t) {
                var e = this
                  , i = new Image;
                i.src = t,
                i.width = 150,
                i.height = 50,
                setTimeout(function() {
                    var t = new cc.Texture2D;
                    t.initWithElement(i),
                    t.handleLoadedTexture();
                    var n = new cc.SpriteFrame(t);
                    e.capchaSprite.spriteFrame = n
                }, 10)
            },
            reCaptcha: function() {
                cc.RedT.send({
                    captcha: "forgotpass"
                })
            },
            onClickOTP: function() {
                this.username.string.trim();
                this.username.string.length < 3 || this.username.string.length > 32 ? cc.RedT.inGame.notice.show({
                    title: "L\u1ed6I",
                    text: "Vui l\xf2ng nh\u1eadp ch\xednh x\xe1c t\xean t\xe0i kho\u1ea3n..."
                }) : cc.RedT.send({
                    forgotpass: {
                        sendOTP: this.username.string
                    }
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil",
        Helper: "Helper"
    }],
    GiftCode: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "ffeb6RH/gdFxI6pq25qidEr", "GiftCode");
        var n = t("BrowserUtil");
        cc.Class({
            extends: cc.Component,
            properties: {
                giftcode: {
                    default: null,
                    type: cc.EditBox
                },
                captcha: {
                    default: null,
                    type: cc.EditBox
                },
                capchaSprite: cc.Sprite
            },
            onLoad: function() {
                var t = this;
                this.editboxs = [this.giftcode, this.captcha],
                this.keyHandle = function(e) {
                    return e.keyCode === cc.macro.KEY.tab ? (t.changeNextFocusEditBox(),
                    e.preventDefault && e.preventDefault(),
                    !1) : e.keyCode === cc.macro.KEY.enter ? (n.focusGame(),
                    t.onSendClick(),
                    e.preventDefault && e.preventDefault(),
                    !1) : e.keyCode === cc.macro.KEY.escape ? (cc.RedT.inGame.dialog.onClickBack(),
                    e.preventDefault && e.preventDefault(),
                    !1) : void 0
                }
            },
            onEnable: function() {
                cc.sys.isBrowser && this.addEvent(),
                this.node.runAction(cc.RedT.inGame.dialog.actionShow),
                this.reCaptcha()
            },
            onDisable: function() {
                cc.sys.isBrowser && this.removeEvent(),
                this.clean(),
                cc.RedT.inGame.dialog.resetSizeDialog(this.node)
            },
            addEvent: function() {
                for (var t in cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).addEventListener("keydown", this.keyHandle, !1)
            },
            removeEvent: function() {
                for (var t in this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).removeEventListener("keydown", this.keyHandle, !1);
                cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
            },
            onKeyDown: function(t) {
                switch (t.keyCode) {
                case cc.macro.KEY.escape:
                    this.isTop() && cc.RedT.inGame.dialog.onClickBack();
                    break;
                case cc.macro.KEY.tab:
                    this.isTop() && this.changeNextFocusEditBox();
                    break;
                case cc.macro.KEY.enter:
                    this.isTop() && this.onSendClick()
                }
            },
            changeNextFocusEditBox: function() {
                for (var t = !1, e = 0, i = this.editboxs.length; e < i; e++)
                    if (n.checkEditBoxFocus(this.editboxs[e])) {
                        n.focusEditBox(this.editboxs[e]),
                        t = !0;
                        break
                    }
                !t && 0 < this.editboxs.length && n.focusEditBox(this.editboxs[0])
            },
            isTop: function() {
                return !cc.RedT.inGame.notice.node.active && !cc.RedT.inGame.loading.active
            },
            clean: function() {
                this.giftcode.string = this.captcha.string = ""
            },
            onSendClick: function() {
                var t = null;
                this.giftcode.string.length > 32 || this.giftcode.string.length < 3 ? t = "M\xe3 Giftcode kh\xf4ng h\u1ee3p l\u1ec7..." : this.captcha.string.length < 4 && (t = "Vui l\xf2ng nh\u1eadp Captcha."),
                t ? cc.RedT.inGame.notice.show({
                    title: "GIFT CODE",
                    text: t
                }) : cc.RedT.send({
                    giftcode: {
                        code: this.giftcode.string,
                        captcha: this.captcha.string
                    }
                })
            },
            initCaptcha: function(t) {
                var e = this
                  , i = new Image;
                i.src = t,
                i.width = 150,
                i.height = 50,
                setTimeout(function() {
                    var t = new cc.Texture2D;
                    t.initWithElement(i),
                    t.handleLoadedTexture();
                    var n = new cc.SpriteFrame(t);
                    e.capchaSprite.spriteFrame = n
                }, 10)
            },
            reCaptcha: function() {
                cc.RedT.send({
                    captcha: "giftcode"
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil"
    }],
    Header: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "53591NaLdpJxoW9GVWXh0FR", "Header"),
        cc.Class({
            extends: cc.Component,
            properties: {
                avatar: cc.Sprite,
                nodeUsers: {
                    default: null,
                    type: cc.Node
                },
                nodeGuest: {
                    default: null,
                    type: cc.Node
                },
                exp: {
                    default: null,
                    type: cc.Node
                },
                userName: {
                    default: null,
                    type: cc.Label
                },
                vip: cc.Label,
                userRed: {
                    default: null,
                    type: cc.Label
                },
                userXu: {
                    default: null,
                    type: cc.Label
                },
                maskFull: 0
            },
            onLoad: function() {
                cc.RedT.IS_LOGIN ? this.isSignIn() : this.isSignOut()
            },
            isSignIn: function() {
                this.nodeUsers.active = !0,
                this.nodeGuest.active = !1
            },
            isSignOut: function() {
                this.userName.string = this.userRed.string = this.userXu.string = "",
                this.nodeUsers.active = !1,
                this.nodeGuest.active = !0
            },
            level: function(t) {
                this.vip.string = "VIP" + t
            },
            updateEXP: function(t, e) {
                this.exp.width = t / e * this.maskFull
            },
            reset: function() {
                this.level(cc.RedT.user.level),
                this.updateEXP(cc.RedT.user.vipHT, cc.RedT.user.vipNext)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Helper: [function(t, e, i) {
        "use strict";
        function n(t) {
            if (t) {
                var e = (t = parseInt(t)).toString().split(".");
                return e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, "."),
                e.join(".")
            }
            return "0"
        }
        cc._RF.push(e, "ea8443jZShFSboJocQ6Ztdo", "Helper"),
        e.exports = {
            checkPhoneValid: function(t) {
                return /^[\+]?(?:[(][0-9]{1,3}[)]|(?:84|0))[0-9]{7,10}$/im.test(t)
            },
            nFormatter: function(t, e) {
                for (var i = [{
                    value: 1e18,
                    symbol: "E"
                }, {
                    value: 1e15,
                    symbol: "P"
                }, {
                    value: 1e12,
                    symbol: "T"
                }, {
                    value: 1e9,
                    symbol: "G"
                }, {
                    value: 1e6,
                    symbol: "M"
                }, {
                    value: 1e3,
                    symbol: "k"
                }], n = /\.0+$|(\.[0-9]*[1-9])0+$/, o = 0; o < i.length; o++)
                    if (t >= i[o].value)
                        return (t / i[o].value).toFixed(e).replace(n, "$1") + i[o].symbol;
                return t.toFixed(e).replace(n, "$1")
            },
            numberWithCommas: n,
            isEmpty: function(t) {
                return !t || 0 === t.length
            },
            getOnlyNumberInString: function(t) {
                var e = t.match(/\d+/g);
                return e ? e.join("") : ""
            },
            numberPad: function(t, e) {
                for (var i = "" + t; i.length < e; )
                    i = "0" + i;
                return i
            },
            inputNumber: function(t) {
                var e = !1;
                t.addEventListener("keydown", function(t) {
                    16 === t.keyCode && (t.preventDefault(),
                    e = !0)
                }),
                t.addEventListener("keyup", function(t) {
                    16 === t.keyCode && (t.preventDefault(),
                    e = !1)
                }),
                t.addEventListener("keydown", function(t) {
                    !e && (t.keyCode >= 48 && t.keyCode <= 57 || t.keyCode >= 96 && t.keyCode <= 105 || t.keyCode >= 37 && t.keyCode <= 40 || 107 === t.keyCode || 109 === t.keyCode || 189 === t.keyCode || 8 === t.keyCode || 13 === t.keyCode) || t.preventDefault()
                })
            },
            anPhanTram: function(t, e, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? v1 : t;
                return t * e - Math.ceil(n * i / 100)
            },
            numberTo: function(t, e, i, o) {
                var c = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                clearInterval(t.timer);
                var s = i - e
                  , a = Math.abs(Math.floor(o / s));
                a = Math.max(a, 50);
                var h = (new Date).getTime() + o;
                t.timer = setInterval(function() {
                    if (t.node) {
                        var e = (new Date).getTime()
                          , a = Math.max((h - e) / o, 0)
                          , r = i - a * s >> 0;
                        t.string = c ? n(r) : r,
                        r == i && clearInterval(t.timer)
                    } else
                        clearInterval(t.timer)
                }, a)
            },
            getStringDateByTime: function(t) {
                var e = new Date(t)
                  , i = e.getHours()
                  , n = e.getMinutes()
                  , o = e.getDate()
                  , c = e.getMonth() + 1;
                return i < 10 && (i = "0" + i),
                n < 10 && (n = "0" + n),
                o < 10 && (o = "0" + o),
                c < 10 && (c = "0" + c),
                i + ":" + n + " " + o + "/" + c + "/" + e.getFullYear()
            },
            getStringHourByTime: function(t) {
                var e = new Date(t)
                  , i = e.getHours()
                  , n = e.getMinutes()
                  , o = e.getSeconds();
                return i < 10 && (i = "0" + i),
                n < 10 && (n = "0" + n),
                o < 10 && (o = "0" + o),
                i + ":" + n + ":" + o
            },
            numberToTime: function(t) {
                t < 0 && (t = 0),
                t = parseInt(t);
                var e = parseInt(t / 60)
                  , i = t % 60;
                return e < 10 && (e = "0" + e),
                i < 10 && (i = "0" + i),
                e + ":" + i
            },
            validateEmail: function(t) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)
            },
            addZero10: function(t) {
                return t < 10 && (t = "0" + t),
                t
            }
        },
        cc._RF.pop()
    }
    , {}],
    KetSat: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b4e75BUyTlCYKT+0A4g+bCK", "KetSat");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                header: {
                    default: null,
                    type: cc.Node
                },
                body: {
                    default: null,
                    type: cc.Node
                },
                redHT: {
                    default: null,
                    type: cc.Label
                },
                redKet: {
                    default: null,
                    type: cc.Label
                },
                buttonALL: {
                    default: null,
                    type: cc.Label
                },
                buttonAc: {
                    default: null,
                    type: cc.Label
                },
                inputGui: {
                    default: null,
                    type: cc.EditBox
                },
                inputRut: {
                    default: null,
                    type: cc.EditBox
                },
                inputOTP: {
                    default: null,
                    type: cc.EditBox
                },
                isGui: !0,
                typeOTP: ""
            },
            init: function() {
                var t = this;
                Promise.all(this.header.children.map(function(t) {
                    return t.getComponent("itemContentMenu")
                })).then(function(e) {
                    t.header = e
                })
            },
            onSelectHead: function(t, e) {
                Promise.all(this.header.map(function(t) {
                    t.node.name == e ? t.select() : t.unselect()
                })),
                Promise.all(this.body.children.map(function(t) {
                    t.name == e ? t.active = !0 : t.active = !1
                })),
                this.clear(),
                this.body.children[0].active ? (this.isGui = !0,
                this.buttonALL.string = "G\u1eecI TO\xc0N B\u1ed8",
                this.buttonAc.string = "G\u1eecI") : (this.isGui = !1,
                this.buttonALL.string = "R\xdaT TO\xc0N B\u1ed8",
                this.buttonAc.string = "R\xdaT")
            },
            onClickHuy: function() {
                this.clear()
            },
            onClickAC: function() {
                var t = {};
                if (this.isGui) {
                    if (t.gui = n.getOnlyNumberInString(this.inputGui.string),
                    t.gui < 1e4)
                        return void cc.RedT.inGame.notice.show({
                            title: "G\u1eecI MEC",
                            text: "S\u1ed1 ti\u1ec1n g\u1eedi ph\u1ea3i l\u1edbn h\u01a1n 10.000"
                        })
                } else if (t.rut = {
                    red: n.getOnlyNumberInString(this.inputRut.string),
                    otp: this.inputOTP.string
                },
                t.rut < 1e4)
                    return void cc.RedT.inGame.notice.show({
                        title: "R\xdaT MEC",
                        text: "S\u1ed1 ti\u1ec1n r\xfat ph\u1ea3i l\u1edbn h\u01a1n 10.000"
                    });
                cc.RedT.send({
                    user: {
                        ket_sat: t
                    }
                })
            },
            onClickALL: function() {
                this.isGui ? this.inputGui.string = n.numberWithCommas(cc.RedT.user.red) : this.inputRut.string = this.redKet.string
            },
            onClickAdd: function(t, e) {
                this.isGui ? this.inputGui.string = n.numberWithCommas(1 * n.getOnlyNumberInString(this.inputGui.string) + 1 * e) : this.inputRut.string = n.numberWithCommas(1 * n.getOnlyNumberInString(this.inputRut.string) + 1 * e)
            },
            onChangerInput: function(t) {
                t = n.numberWithCommas(n.getOnlyNumberInString(t)),
                this.isGui ? this.inputGui.string = "0" == t ? "" : t : this.inputRut.string = "0" == t ? "" : t
            },
            clear: function() {
                this.inputGui.string = this.inputRut.string = this.inputOTP.string = ""
            },
            changerTypeOTP: function(t) {
                this.typeOTP = t.node.name
            },
            onClickOTP: function() {
                cc.RedT.send({
                    otp: {
                        type: this.typeOTP
                    }
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    LichSuBank_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "907c0wFO7lM9YafdKBVYX1S", "LichSuBank_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                GD: {
                    default: null,
                    type: cc.Label
                },
                time: {
                    default: null,
                    type: cc.Label
                },
                bank: {
                    default: null,
                    type: cc.Label
                },
                act: {
                    default: null,
                    type: cc.Label
                },
                money: {
                    default: null,
                    type: cc.Label
                },
                info: {
                    default: null,
                    type: cc.Label
                },
                status: {
                    default: null,
                    type: cc.Label
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    LichSuBank: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "cfe16ZuJ1pCdIWy4Ytc2scR", "LichSuBank");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                content: cc.Node
            },
            onLoad: function() {
                var t = this;
                Promise.all(this.content.children.map(function(t) {
                    return t.getComponent("LichSuBank_item")
                })).then(function(e) {
                    t.content = e
                })
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                cc.RedT.send({
                    user: {
                        history: {
                            bank: {
                                page: t
                            }
                        }
                    }
                })
            },
            onData: function(t) {
                Promise.all(this.content.map(function(e, i) {
                    var o = t[i];
                    void 0 !== o ? (e.node.active = !0,
                    e.GD.string = o.GD ? o.GD : "",
                    e.time.string = n.getStringDateByTime(o.time),
                    e.bank.string = o.bank.toUpperCase(),
                    e.act.string = 0 == o.type ? "N\u1ea0P" : "R\xdaT",
                    e.money.string = n.numberWithCommas(o.money),
                    e.money.node.color = 0 == o.type ? cc.color(0, 255, 31, 255) : cc.color(255, 0, 0, 255),
                    e.info.string = o.info ? o.info : "",
                    e.status.string = 0 == o.status ? "Ch\u1edd Duy\u1ec7t" : 1 == o.status ? "Th\xe0nh C\xf4ng" : 2 == o.status ? "Th\u1ea5t b\u1ea1i" : "",
                    e.status.node.color = 0 == o.status ? cc.color(45, 171, 255, 255) : 1 == o.status ? cc.color(0, 255, 71, 255) : 2 == o.status ? cc.color(255, 0, 0, 255) : cc.color(45, 171, 255, 255)) : e.node.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    LichSuChuyen_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "cefe2VTU9FJuZ3eLrltioL8", "LichSuChuyen_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                GD: {
                    default: null,
                    type: cc.Label
                },
                Time: {
                    default: null,
                    type: cc.Label
                },
                uFrom: {
                    default: null,
                    type: cc.Label
                },
                uTo: {
                    default: null,
                    type: cc.Label
                },
                Chuyen: {
                    default: null,
                    type: cc.Label
                },
                Nhan: {
                    default: null,
                    type: cc.Label
                },
                nodeMesenger: {
                    default: null,
                    type: cc.Node
                }
            },
            onShowMesenger: function() {
                cc.RedT.inGame.notice.show({
                    title: "L\u1edcI NH\u1eaeN",
                    text: this.mesenger
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    LichSuChuyen: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "943527q5XpHKJiZmmGFO1UX", "LichSuChuyen");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                content: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                var t = this;
                Promise.all(this.content.children.map(function(t) {
                    return t.getComponent("LichSuChuyen_item")
                })).then(function(e) {
                    t.content = e
                })
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                cc.RedT.send({
                    user: {
                        history: {
                            chuyen_red: {
                                page: t
                            }
                        }
                    }
                })
            },
            onData: function(t) {
                Promise.all(this.content.map(function(e, i) {
                    var o = t[i];
                    void 0 !== o ? (e.node.active = !0,
                    e.GD.string = o.id ? o.id : "",
                    e.Time.string = n.getStringDateByTime(o.time),
                    e.uFrom.string = o.from,
                    e.uTo.string = o.to,
                    e.Chuyen.string = n.numberWithCommas(o.red),
                    e.Nhan.string = n.numberWithCommas(o.red_c),
                    void 0 !== o.message ? (e.nodeMesenger.active = !0,
                    e.mesenger = o.message) : (e.nodeMesenger.active = !1,
                    e.mesenger = null)) : e.node.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    LichSuMuaXu: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b2292sqRptHdJi8HS34a///", "LichSuMuaXu");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                content: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                var t = this;
                Promise.all(this.content.children.map(function(t) {
                    return t.getComponent("LichSuNap_item")
                })).then(function(e) {
                    t.content = e
                })
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                cc.RedT.send({
                    user: {
                        history: {
                            mua_xu: {
                                page: t
                            }
                        }
                    }
                })
            },
            onData: function(t) {
                Promise.all(this.content.map(function(e, i) {
                    var o = t[i];
                    void 0 !== o ? (e.node.active = !0,
                    e.GD.string = o.id ? o.id : "",
                    e.Time.string = n.getStringDateByTime(o.time),
                    e.NhaMang.string = n.numberWithCommas(o.red),
                    e.MenhGia.string = n.numberWithCommas(o.xu)) : e.node.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    LichSuNapMomo_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "488f1uGfK5Hx75p0Wy3cCWs", "LichSuNapMomo_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                GD: {
                    default: null,
                    type: cc.Label
                },
                Time: {
                    default: null,
                    type: cc.Label
                },
                Nap: {
                    default: null,
                    type: cc.Label
                },
                Nhan: {
                    default: null,
                    type: cc.Label
                },
                ChargeCode: {
                    default: null,
                    type: cc.Label
                },
                Status: {
                    default: null,
                    type: cc.Label
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    LichSuNapMomo: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "301ffClS8ZE/qxX0RHoNzVb", "LichSuNapMomo");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                content: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                var t = this;
                Promise.all(this.content.children.map(function(t) {
                    return t.getComponent("LichSuNapMomo_item")
                })).then(function(e) {
                    t.content = e
                })
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                cc.RedT.send({
                    user: {
                        history: {
                            nap_red_momo: {
                                page: t
                            }
                        }
                    }
                })
            },
            onData: function(t) {
                Promise.all(this.content.map(function(e, i) {
                    var o = t[i];
                    void 0 !== o ? (e.node.active = !0,
                    e.GD.string = o.GD,
                    e.Time.string = n.getStringDateByTime(o.time),
                    e.Nap.string = n.numberWithCommas(o.nap),
                    e.Nhan.string = n.numberWithCommas(o.nhan),
                    e.ChargeCode.string = o.chargeCode,
                    e.Status.string = 0 == o.status ? "\u0110ang Ch\u1edd" : 1 == o.status ? "Th\xe0nh C\xf4ng" : 2 == o.status ? "Th\u1ea5t B\u1ea1i" : "",
                    e.Status.node.color = 0 == o.status ? cc.color(45, 171, 255, 255) : 1 == o.status ? cc.color(0, 255, 71, 255) : 2 == o.status ? cc.color(255, 0, 0, 255) : cc.color(45, 171, 255, 255)) : e.node.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    LichSuNap_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "d2bc727HRVCxpX4Pq1ee9Tu", "LichSuNap_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                GD: {
                    default: null,
                    type: cc.Label
                },
                Time: {
                    default: null,
                    type: cc.Label
                },
                NhaMang: {
                    default: null,
                    type: cc.Label
                },
                MenhGia: {
                    default: null,
                    type: cc.Label
                },
                Nhan: {
                    default: null,
                    type: cc.Label
                },
                Seri: {
                    default: null,
                    type: cc.Label
                },
                Status: {
                    default: null,
                    type: cc.Label
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    LichSuNap: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b3ba05EetBCV4Zd4FnrDzNm", "LichSuNap");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                content: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                var t = this;
                Promise.all(this.content.children.map(function(t) {
                    return t.getComponent("LichSuNap_item")
                })).then(function(e) {
                    t.content = e
                })
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                cc.RedT.send({
                    user: {
                        history: {
                            nap_red: {
                                page: t
                            }
                        }
                    }
                })
            },
            onData: function(t) {
                Promise.all(this.content.map(function(e, i) {
                    var o = t[i];
                    void 0 !== o ? (e.node.active = !0,
                    e.GD.string = o.GD,
                    e.Time.string = n.getStringDateByTime(o.time),
                    e.NhaMang.string = o.nhaMang,
                    e.MenhGia.string = n.numberWithCommas(o.menhGia),
                    e.Nhan.string = n.numberWithCommas(o.nhan),
                    e.Seri.string = o.seri,
                    e.Status.string = 0 == o.status ? "Ch\u1edd Duy\u1ec7t" : 1 == o.status ? "Th\xe0nh C\xf4ng" : 2 == o.status ? "Th\u1ebb Sai" : "",
                    e.Status.node.color = 0 == o.status ? cc.color(45, 171, 255, 255) : 1 == o.status ? cc.color(0, 255, 71, 255) : 2 == o.status ? cc.color(255, 0, 0, 255) : cc.color(45, 171, 255, 255)) : e.node.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    LichSuRut_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "f9622W0MQ9AOJN08zkYjgg8", "LichSuRut_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                GD: {
                    default: null,
                    type: cc.Label
                },
                Time: {
                    default: null,
                    type: cc.Label
                },
                NhaMang: {
                    default: null,
                    type: cc.Label
                },
                MenhGia: {
                    default: null,
                    type: cc.Label
                },
                SoLuong: {
                    default: null,
                    type: cc.Label
                },
                Cost: {
                    default: null,
                    type: cc.Label
                },
                Status: {
                    default: null,
                    type: cc.Label
                }
            },
            onInfoClick: function() {
                this.info && (cc.RedT.inGame.dialog.profile.LichSu.lichSuRut.isView = !0,
                cc.RedT.inGame.dialog.the_cao.getData(this.idT),
                cc.RedT.audio.playClick())
            }
        }),
        cc._RF.pop()
    }
    , {}],
    LichSuRut: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "725d0Pb9ORLDYbFhFG7zANv", "LichSuRut");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                content: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                var t = this;
                this.isView = !1,
                Promise.all(this.content.children.map(function(t) {
                    return t.getComponent("LichSuRut_item")
                })).then(function(e) {
                    t.content = e
                })
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                !this.isView && cc.RedT.send({
                    user: {
                        history: {
                            mua_the: {
                                page: t
                            }
                        }
                    }
                }),
                this.isView = !1
            },
            onData: function(t) {
                Promise.all(this.content.map(function(e, i) {
                    var o = t[i];
                    void 0 !== o ? (e.node.active = !0,
                    e.GD.string = o.GD,
                    e.Time.string = n.getStringDateByTime(o.time),
                    e.NhaMang.string = o.nhaMang,
                    e.MenhGia.string = n.numberWithCommas(o.menhGia),
                    e.SoLuong.string = o.soLuong,
                    e.Cost.string = n.numberWithCommas(o.Cost),
                    e.Status.string = 0 == o.status ? "Ch\u1edd Duy\u1ec7t" : 1 == o.status ? "Th\xe0nh C\xf4ng" : 2 == o.status ? "B\u1ecb Hu\u1ef7" : "",
                    e.Status.node.color = 0 == o.status ? cc.color(45, 171, 255, 255) : 1 == o.status ? cc.color(0, 255, 71, 255) : 2 == o.status ? cc.color(255, 0, 0, 255) : cc.color(45, 171, 255, 255),
                    1 == o.status ? (e.idT = o._id,
                    e.info = !0) : (e.idT = null,
                    e.info = !1)) : e.node.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    LichSu: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "450a2pZkQ5Gvb6kVjtcW8zA", "LichSu"),
        cc.Class({
            extends: cc.Component,
            properties: {
                header: cc.Node,
                pagination: cc.Node,
                lichSuNapMomo: cc.Node,
                lichSuNap: cc.Node,
                lichSuRut: cc.Node,
                lichSuMuaXu: cc.Node,
                lichSuChuyen: cc.Node,
                lichSuBank: cc.Node
            },
            onLoad: function() {
                var t = this;
                this.history = "LichSuNap",
                this.lichSuNapMomo = this.lichSuNapMomo.getComponent("LichSuNapMomo"),
                this.lichSuNap = this.lichSuNap.getComponent("LichSuNap"),
                this.lichSuRut = this.lichSuRut.getComponent("LichSuRut"),
                this.lichSuMuaXu = this.lichSuMuaXu.getComponent("LichSuMuaXu"),
                this.lichSuChuyen = this.lichSuChuyen.getComponent("LichSuChuyen"),
                this.lichSuBank = this.lichSuBank.getComponent("LichSuBank"),
                this.body = [this.lichSuNapMomo.node, this.lichSuNap.node, this.lichSuRut.node, this.lichSuMuaXu.node, this.lichSuChuyen.node, this.lichSuBank.node],
                this.pagination = this.pagination.getComponent("Pagination"),
                this.pagination.init(this),
                Promise.all(this.header.children.map(function(t) {
                    return t.getComponent("itemContentMenu")
                })).then(function(e) {
                    t.header = e
                })
            },
            onSelectHead: function(t, e) {
                this.history = e,
                Promise.all(this.header.map(function(t) {
                    t.node.name == e ? t.select() : t.unselect()
                })),
                Promise.all(this.body.map(function(t) {
                    t.name == e ? t.active = !0 : t.active = !1
                }))
            },
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                switch (this.history) {
                case "LichSuNap":
                    this.lichSuNap.get_data(t);
                    break;
                case "LichSuNapMomo":
                    this.lichSuNapMomo.get_data(t);
                    break;
                case "LichSuRut":
                    this.lichSuRut.get_data(t);
                    break;
                case "LichSuMuaXu":
                    this.lichSuMuaXu.get_data(t);
                    break;
                case "LichSuChuyen":
                case "LichSuBank":
                    this.lichSuChuyen.get_data(t)
                }
            },
            onData: function(t) {
                this.pagination.onSet(t.page, t.kmess, t.total),
                void 0 !== t.nap_red && this.lichSuNap.onData(t.nap_red),
                void 0 !== t.nap_red_momo && this.lichSuNapMomo.onData(t.nap_red_momo),
                void 0 !== t.mua_the && this.lichSuRut.onData(t.mua_the),
                void 0 !== t.mua_xu && this.lichSuMuaXu.onData(t.mua_xu),
                void 0 !== t.chuyen_red && this.lichSuChuyen.onData(t.chuyen_red),
                void 0 !== t.bank && this.lichSuBank.onData(t.bank)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    MainAudio: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "738b2QcBnhOn7bLV2UFI4l9", "MainAudio"),
        cc.Class({
            extends: cc.Component,
            properties: {
                audioClick: {
                    default: null,
                    type: cc.AudioClip
                },
                audioClick2: {
                    default: null,
                    type: cc.AudioClip
                },
                thongbao_jackpot: {
                    default: null,
                    type: cc.AudioClip
                },
                jackpot: {
                    default: null,
                    type: cc.AudioClip
                },
                bigWin: {
                    default: null,
                    type: cc.AudioClip
                },
                moneywin: {
                    default: null,
                    type: cc.AudioClip
                },
                bonus: {
                    default: null,
                    type: cc.AudioClip
                },
                megaWin: {
                    default: null,
                    type: cc.AudioClip
                },
                winHu: {
                    default: null,
                    type: cc.AudioClip
                },
                audioSour: {
                    default: null,
                    type: cc.AudioSource
                }
            },
            _playSFX: function(t) {
                cc.RedT.IS_SOUND && (this.audioSour.Clip = t,
                this.audioSour.play())
            },
            playClick: function() {
                this._playSFX(this.audioClick)
            },
            playUnClick: function() {
                this._playSFX(this.audioClick2)
            },
            playNoticeJackP: function() {
                this._playSFX(this.thongbao_jackpot)
            },
            playEf: function(t) {
                this._playSFX(this[t])
            }
        }),
        cc._RF.pop()
    }
    , {}],
    MainGame1: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "96e7902rOlIv4H0dC059/q1", "MainGame1");
        var n = t("Helper")
          , o = t("BaseControll")
          , c = t("Header")
          , s = t("Dialog")
          , a = t("PushNohu")
          , h = t("NewsContents")
          , r = t("bgLoading")
          , u = t("MenuRoom")
          , d = t("Notice");
        cc.Class({
            extends: cc.Component,
            properties: {
                MenuRoom: u,
                PrefabT: {
                    default: [],
                    type: cc.Prefab
                },
                header: c,
                news: cc.Node,
                newsContents: h,
                bgLoading: r,
                iconVQRed: cc.Node,
                iconCandy: cc.Node,
                iconLongLan: cc.Node,
                iconTaiXiu: cc.Node,
                iconMegaJ: cc.Node,
                redhat: cc.Node,
                dialog: s,
                loading: cc.Node,
                notice: d,
                ThongBaoNoHu: a,
                audioBG: cc.AudioSource,
                url: cc.String,
                appApk: cc.String
            },
            onLoad: function() {
                document.cookie = "redT=1702;path=/",
                void 0 === cc.RedT && (cc.RedT = o,
                cc.RedT.init(),
                cc.RedT.audio = this.PrefabT[0].data.getComponent("MainAudio")),
                cc.RedT.reconnect(),
                this.dialog.init(),
                this.newsContents.init(this),
                cc.RedT.inGame = this;
                var t = cc.instantiate(this.PrefabT[1]);
                cc.RedT.MiniPanel = t.getComponent("MiniPanel"),
                this.redhat.insertChild(t),
                this.iconCandy = this.iconCandy.getComponent("iconGameHu"),
                this.iconVQRed = this.iconVQRed.getComponent("iconGameHu"),
                this.iconLongLan = this.iconLongLan.getComponent("iconGameHu"),
                this.iconMegaJ = this.iconMegaJ.getComponent("iconGameHu"),
                this.iconTaiXiu = this.iconTaiXiu.getComponent("iconGameTaiXiu"),
                cc.RedT.IS_LOGIN ? (cc.RedT.send({
                    scene: "home"
                }),
                this.header.reset(),
                this.header.userName.string = cc.RedT.user.name,
                this.dialog.profile.CaNhan.username.string = cc.RedT.user.name,
                this.header.userRed.string = this.dialog.profile.KetSat.redHT.string = n.numberWithCommas(cc.RedT.user.red),
                this.header.userXu.string = n.numberWithCommas(cc.RedT.user.xu),
                this.dialog.profile.KetSat.redKet.string = n.numberWithCommas(cc.RedT.user.ketSat),
                this.dialog.profile.CaNhan.UID.string = cc.RedT.user.UID,
                this.dialog.profile.CaNhan.phone.string = cc.RedT.user.phone,
                this.dialog.profile.CaNhan.email.string = cc.RedT.user.email,
                this.dialog.profile.CaNhan.joinedOn.string = n.getStringDateByTime(cc.RedT.user.joinedOn)) : this.dialog.settings.setMusic(),
                (null == localStorage.getItem("SOUND_BACKGROUND") || cc.RedT.isSoundBackground()) && (cc.RedT.setSoundBackground(!0),
                this.playMusic())
            },
            auth: function(t) {
                this.loading.active = !0,
                null == cc.RedT._socket || 1 != cc.RedT._socket.readyState ? setTimeout(function() {
                    cc.RedT.send(t)
                }, 300) : cc.RedT.send(t)
            },
            unAuthorized: function(t) {
                this.loading.active = !1,
                void 0 !== t.message ? this.notice.show({
                    title: "\u0110\u0102NG K\xdd",
                    text: "C\xf3 l\u1ed7i s\u1ea3y ra, xin vui l\xf2ng th\u1eed l\u1ea1i..."
                }) : this.notice.show(t)
            },
            Authorized: function(t) {
                this.loading.active = !1,
                t ? this.signIn() : this.dialog.showSignName()
            },
            onData: function(t) {
                void 0 !== t.unauth && this.unAuthorized(t.unauth),
                void 0 !== t.Authorized && this.Authorized(t.Authorized),
                void 0 !== t.user && (this.dataUser(t.user),
                cc.RedT.userData(t.user)),
                void 0 !== t.mini && cc.RedT.MiniPanel.onData(t.mini),
                void 0 !== t.TopHu && (cc.RedT.MiniPanel.TopHu.onData(t.TopHu),
                this.dialog.DEvent.onHU(t.TopHu)),
                void 0 !== t.taixiu && cc.RedT.MiniPanel.TaiXiu.TX_Main.onData(t.taixiu),
                void 0 !== t.shop && this.dialog.shop.onData(t.shop),
                void 0 !== t.profile && this.dialog.profile.onData(t.profile),
                void 0 !== t.notice && this.notice.show(t.notice),
                void 0 !== t.news && this.newsContents.onData(t.news),
                void 0 !== t.captcha && this.captcha(t.captcha),
                void 0 !== t.pushnohu && this.ThongBaoNoHu.onData(t.pushnohu),
                void 0 !== t.loading && this.bgLoading.onData(t.loading),
                void 0 !== t.event && this.dialog.DEvent.onData(t.event),
                t.toGame && this.MenuRoom.onData(t.toGame),
                t.message && this.dialog.iMessage.onData(t.message)
            },
            captcha: function(t) {
                switch (t.name) {
                case "signUp":
                    this.dialog.signUp.initCaptcha(t.data);
                    break;
                case "giftcode":
                    this.dialog.GiftCode.initCaptcha(t.data);
                    break;
                case "forgotpass":
                    this.dialog.ForGotPass.initCaptcha(t.data);
                    break;
                case "chargeCard":
                    this.dialog.shop.NapRed.initCaptcha(t.data);
                    break;
                case "withdrawXu":
                    this.dialog.shop.TieuRed.MuaXu.initCaptcha(t.data)
                }
            },
            dataUser: function(t) {
                void 0 !== t.name && (this.header.userName.string = t.name,
                this.dialog.profile.CaNhan.username.string = t.name),
                void 0 !== t.red && (this.header.userRed.string = this.dialog.profile.KetSat.redHT.string = n.numberWithCommas(t.red)),
                void 0 !== t.xu && (this.header.userXu.string = n.numberWithCommas(t.xu)),
                void 0 !== t.ketSat && (this.dialog.profile.KetSat.redKet.string = n.numberWithCommas(t.ketSat)),
                void 0 !== t.UID && (this.dialog.profile.CaNhan.UID.string = t.UID),
                void 0 !== t.phone && (this.dialog.profile.CaNhan.phone.string = t.phone,
                this.dialog.profile.BaoMat.DangKyOTP.statusOTP(!n.isEmpty(t.phone)),
                n.isEmpty(t.phone) || (this.dialog.profile.BaoMat.DangKyOTP.labelPhone.string = t.phone)),
                void 0 !== t.email && (this.dialog.profile.CaNhan.email.string = t.email,
                n.isEmpty(t.email) || (this.dialog.profile.BaoMat.DangKyOTP.labelEmail.string = t.email)),
                void 0 !== t.cmt && (this.dialog.profile.CaNhan.cmt.string = t.cmt,
                n.isEmpty(t.cmt) || (this.dialog.profile.BaoMat.DangKyOTP.labelCMT.string = t.cmt)),
                void 0 !== t.joinedOn && (this.dialog.profile.CaNhan.joinedOn.string = n.getStringDateByTime(t.joinedOn)),
                void 0 !== t.level && (this.header.level(t.level),
                this.header.updateEXP(t.vipHT, t.vipNext))
            },
            signOut: function() {
                cc.RedT.user = {},
                cc.RedT.IS_LOGIN = !1,
                this.AllReset()
            },
            signIn: function() {
                cc.RedT.IS_LOGIN = !0,
                this.header.isSignIn(),
                this.dialog.onBack(),
                cc.RedT.MiniPanel.signIn()
            },
            AllReset: function() {
                this.loading.active = !1,
                this.newsContents.reset(),
                this.header.isSignOut(),
                this.dialog.onCloseDialog(),
                this.MenuRoom.onBack(),
                cc.RedT.MiniPanel.newGame(),
                this.dialog.iMessage.reset()
            },
            onGetTaiXiu: function(t, e) {
                var i = n.getOnlyNumberInString(this.iconTaiXiu.tai.string)
                  , o = n.getOnlyNumberInString(this.iconTaiXiu.xiu.string);
                i - t != 0 && n.numberTo(this.iconTaiXiu.tai, i, t, 1e3, !0),
                o - e != 0 && n.numberTo(this.iconTaiXiu.xiu, o, e, 1e3, !0)
            },
            onGetHu: function() {
                var t = this;
                if (void 0 !== cc.RedT.setting.topHu.data) {
                    Promise.all(cc.RedT.setting.topHu.data.vq_red.filter(function(t) {
                        return 1 == t.red
                    })).then(function(e) {
                        var i = e.filter(function(t) {
                            return 100 == t.type
                        })
                          , o = e.filter(function(t) {
                            return 1e3 == t.type
                        })
                          , c = e.filter(function(t) {
                            return 1e4 == t.type
                        })
                          , s = n.getOnlyNumberInString(t.iconVQRed.hu100.string)
                          , a = n.getOnlyNumberInString(t.iconVQRed.hu1k.string)
                          , h = n.getOnlyNumberInString(t.iconVQRed.hu10k.string);
                        s - i[0].bet != 0 && n.numberTo(t.iconVQRed.hu100, n.getOnlyNumberInString(t.iconVQRed.hu100.string), i[0].bet, 4900, !0),
                        a - o[0].bet != 0 && n.numberTo(t.iconVQRed.hu1k, n.getOnlyNumberInString(t.iconVQRed.hu1k.string), o[0].bet, 4900, !0),
                        h - c[0].bet != 0 && n.numberTo(t.iconVQRed.hu10k, n.getOnlyNumberInString(t.iconVQRed.hu10k.string), c[0].bet, 4900, !0)
                    }),
                    Promise.all(cc.RedT.setting.topHu.data.candy.filter(function(t) {
                        return 1 == t.red
                    })).then(function(e) {
                        var i = e.filter(function(t) {
                            return 100 == t.type
                        })
                          , o = e.filter(function(t) {
                            return 1e3 == t.type
                        })
                          , c = e.filter(function(t) {
                            return 1e4 == t.type
                        })
                          , s = n.getOnlyNumberInString(t.iconCandy.hu100.string)
                          , a = n.getOnlyNumberInString(t.iconCandy.hu1k.string)
                          , h = n.getOnlyNumberInString(t.iconCandy.hu10k.string);
                        s - i[0].bet != 0 && n.numberTo(t.iconCandy.hu100, n.getOnlyNumberInString(t.iconCandy.hu100.string), i[0].bet, 4900, !0),
                        a - o[0].bet != 0 && n.numberTo(t.iconCandy.hu1k, n.getOnlyNumberInString(t.iconCandy.hu1k.string), o[0].bet, 4900, !0),
                        h - c[0].bet != 0 && n.numberTo(t.iconCandy.hu10k, n.getOnlyNumberInString(t.iconCandy.hu10k.string), c[0].bet, 4900, !0)
                    }),
                    Promise.all(cc.RedT.setting.topHu.data.long.filter(function(t) {
                        return 1 == t.red
                    })).then(function(e) {
                        var i = e.filter(function(t) {
                            return 100 == t.type
                        })
                          , o = e.filter(function(t) {
                            return 1e3 == t.type
                        })
                          , c = e.filter(function(t) {
                            return 1e4 == t.type
                        })
                          , s = n.getOnlyNumberInString(t.iconLongLan.hu100.string)
                          , a = n.getOnlyNumberInString(t.iconLongLan.hu1k.string)
                          , h = n.getOnlyNumberInString(t.iconLongLan.hu10k.string);
                        s - i[0].bet != 0 && n.numberTo(t.iconLongLan.hu100, n.getOnlyNumberInString(t.iconLongLan.hu100.string), i[0].bet, 4900, !0),
                        a - o[0].bet != 0 && n.numberTo(t.iconLongLan.hu1k, n.getOnlyNumberInString(t.iconLongLan.hu1k.string), o[0].bet, 4900, !0),
                        h - c[0].bet != 0 && n.numberTo(t.iconLongLan.hu10k, n.getOnlyNumberInString(t.iconLongLan.hu10k.string), c[0].bet, 4900, !0)
                    })
                }
            },
            playMusic: function() {
                this.audioBG.play()
            },
            pauseMusic: function() {
                this.audioBG.pause()
            },
            resumeMusic: function() {},
            audioClick: function() {
                cc.RedT.audio.playClick()
            },
            audioUnClick: function() {
                cc.RedT.audio.playUnClick()
            },
            fanpage: function() {
                cc.sys.openURL(this.url + "/fanpage/")
            },
            ios: function() {
                cc.sys.openURL(this.url + "/help/ios")
            },
            android: function() {
                cc.sys.openURL(this.url + "/download/" + this.appApk)
            },
            telegram: function() {
                cc.sys.openURL(this.url + "/telegram/")
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseControll: "BaseControll",
        Dialog: "Dialog",
        Header: "Header",
        Helper: "Helper",
        MenuRoom: "MenuRoom",
        NewsContents: "NewsContents",
        Notice: "Notice",
        PushNohu: "PushNohu",
        bgLoading: "bgLoading"
    }],
    MainGame: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "280c3rsZJJKnZ9RqbALVwtK", "MainGame");
        var n = t("Helper")
          , o = (t("md5"),
        t("BaseControll"))
          , a = t("Header")
          , h = t("Dialog")
          , u = t("PushNohu")
          , d = t("NewsContents")
          , l = t("bgLoading")
          , p = t("MenuRoom")
          , g = t("Notice")
          , m = t("landingSuKien")
          , f = cc.Class({
            extends: cc.Component,
            statics: {
                scope: null
            },
            properties: {
                MenuRoom: p,
                PrefabT: {
                    default: [],
                    type: cc.Prefab
                },
                header: a,
                news: cc.Node,
                newsContents: d,
                bgLoading: l,
                iconVQRed: cc.Node,
                iconCandy: cc.Node,
                iconLongLan: cc.Node,
                iconZeus: cc.Node,
                iconTamHung: cc.Node,
                iconTaiXiu: cc.Node,
                iconMegaJ: cc.Node,
                redhat: cc.Node,
                dialog: h,
                loading: cc.Node,
                notice: g,
                ThongBaoNoHu: u,
                SuKienLanding: m,
                audioBG: cc.AudioSource,
                url: cc.String,
                appApk: cc.String,
                arr_sound_bg: {
                    default: [],
                    type: [cc.AudioClip]
                }
            },
            arr_Time_Sound: null,
            timeout_Play_Sound: null,
            onLoad: function() {
                if (f.scope = this,
                this.arr_Time_Sound = [330, 280, 250, 300, 220],
                document.cookie = "redT=1702;path=/",
                void 0 === cc.RedT && (cc.RedT = o,
                cc.RedT.init()),
                null == cc.RedT.audio) {
                    var t = cc.instantiate(this.PrefabT[0]);
                    cc.game.addPersistRootNode(t),
                    cc.RedT.audio = t.getComponent("MainAudio")
                }
                cc.RedT.reconnect(),
                this.dialog.init(),
                this.SuKienLanding.init(),
                this.newsContents.init(this),
                cc.RedT.inGame = this;
                var e = cc.instantiate(this.PrefabT[1]);
                cc.RedT.MiniPanel = e.getComponent("MiniPanel"),
                this.redhat.insertChild(e),
                this.iconCandy = this.iconCandy.getComponent("iconGameHu"),
                this.iconVQRed = this.iconVQRed.getComponent("iconGameHu"),
                this.iconLongLan = this.iconLongLan.getComponent("iconGameHu"),
                this.iconZeus = this.iconZeus.getComponent("iconGameHu"),
                this.iconTamHung = this.iconTamHung.getComponent("iconGameHu"),
                this.iconMegaJ = this.iconMegaJ.getComponent("iconGameHu"),
                this.iconTaiXiu = this.iconTaiXiu.getComponent("iconGameTaiXiu"),
                cc.RedT.IS_LOGIN ? (cc.RedT.send({
                    scene: "home"
                }),
                this.header.reset(),
                this.header.userName.string = cc.RedT.user.name,
                this.dialog.profile.CaNhan.username.string = cc.RedT.user.name,
                this.header.userRed.string = this.dialog.profile.KetSat.redHT.string = n.numberWithCommas(cc.RedT.user.red),
                this.header.userXu.string = n.numberWithCommas(cc.RedT.user.xu),
                this.dialog.profile.KetSat.redKet.string = n.numberWithCommas(cc.RedT.user.ketSat),
                this.dialog.profile.CaNhan.UID.string = cc.RedT.user.UID,
                this.dialog.profile.CaNhan.phone.string = cc.RedT.user.phone,
                this.dialog.profile.CaNhan.email.string = cc.RedT.user.email,
                this.dialog.profile.CaNhan.joinedOn.string = n.getStringDateByTime(cc.RedT.user.joinedOn)) : this.dialog.settings.setMusic(),
                (null == localStorage.getItem("SOUND_BACKGROUND") || cc.RedT.isSoundBackground()) && (cc.log("000000000"),
                cc.RedT.setSoundBackground(!0),
                this.playMusic()),
                cc.sys.isBrowser ? "undefined" == typeof FB ? (cc.log("Load FB SDK"),
                this.loadFacebookSDK()) : cc.log("FB SDK exist") : cc.log("isMobile")
            },
            playSoundBG: function() {
                var t = f.scope.randomBetween(0, 4);
                clearTimeout(f.scope.timeout_Play_Sound),
                f.scope.timeout_Play_Sound = setTimeout(function() {
                    f.scope.playSoundBG()
                }, 1e3 * f.scope.arr_Time_Sound[t])
            },
            auth: function(t) {
                this.loading.active = !0,
                null == cc.RedT._socket || 1 != cc.RedT._socket.readyState ? setTimeout(function() {
                    cc.RedT.send(t)
                }, 300) : cc.RedT.send(t)
            },
            unAuthorized: function(t) {
                this.loading.active = !1,
                void 0 !== t.message ? this.notice.show({
                    title: "\u0110\u0102NG K\xdd",
                    text: "C\xf3 l\u1ed7i s\u1ea3y ra, xin vui l\xf2ng th\u1eed l\u1ea1i..."
                }) : this.notice.show(t)
            },
            Authorized: function(t) {
                this.loading.active = !1,
                t ? this.signIn() : this.dialog.showSignName()
            },
            onData: function(t) {
                void 0 !== t.unauth && this.unAuthorized(t.unauth),
                void 0 !== t.Authorized && this.Authorized(t.Authorized),
                void 0 !== t.user && (this.dataUser(t.user),
                cc.RedT.userData(t.user)),
                void 0 !== t.mini && cc.RedT.MiniPanel.onData(t.mini),
                void 0 !== t.TopHu && (cc.RedT.MiniPanel.TopHu.onData(t.TopHu),
                this.dialog.DEvent.onHU(t.TopHu)),
                void 0 !== t.taixiu && cc.RedT.MiniPanel.TaiXiu.TX_Main.onData(t.taixiu),
                void 0 !== t.shop && this.dialog.shop.onData(t.shop),
                void 0 !== t.profile && this.dialog.profile.onData(t.profile),
                void 0 !== t.notice && this.notice.show(t.notice),
                void 0 !== t.news && this.newsContents.onData(t.news),
                void 0 !== t.captcha && this.captcha(t.captcha),
                void 0 !== t.pushnohu && this.ThongBaoNoHu.onData(t.pushnohu),
                void 0 !== t.loading && this.bgLoading.onData(t.loading),
                void 0 !== t.event && this.dialog.DEvent.onData(t.event),
                t.toGame && this.MenuRoom.onData(t.toGame),
                t.message && this.dialog.iMessage.onData(t.message)
            },
            captcha: function(t) {
                switch (t.name) {
                case "signUp":
                    this.dialog.signUp.initCaptcha(t.data);
                    break;
                case "giftcode":
                    this.dialog.GiftCode.initCaptcha(t.data);
                    break;
                case "forgotpass":
                    this.dialog.ForGotPass.initCaptcha(t.data);
                    break;
                case "chargeCard":
                    this.dialog.shop.NapRed.initCaptcha(t.data);
                    break;
                case "withdrawXu":
                    this.dialog.shop.TieuRed.MuaXu.initCaptcha(t.data)
                }
            },
            dataUser: function(t) {
                var e = this;
                if (void 0 !== t.name && (this.header.userName.string = t.name,
                this.dialog.profile.CaNhan.username.string = t.name),
                void 0 !== t.red)
                    if (cc.RedT.setting.taixiu.isNan) {
                        var i = cc.sequence(cc.delayTime(15), cc.callFunc(function() {
                            e.header.userRed.string = e.dialog.profile.KetSat.redHT.string = n.numberWithCommas(t.red)
                        }));
                        this.node.runAction(i)
                    } else
                        this.header.userRed.string = this.dialog.profile.KetSat.redHT.string = n.numberWithCommas(t.red);
                void 0 !== t.xu && (this.header.userXu.string = n.numberWithCommas(t.xu)),
                void 0 !== t.ketSat && (this.dialog.profile.KetSat.redKet.string = n.numberWithCommas(t.ketSat)),
                void 0 !== t.UID && (this.dialog.profile.CaNhan.UID.string = t.UID),
                void 0 !== t.phone && (this.dialog.profile.CaNhan.phone.string = t.phone,
                this.dialog.profile.BaoMat.DangKyOTP.statusOTP(!n.isEmpty(t.phone)),
                n.isEmpty(t.phone) || (this.dialog.profile.BaoMat.DangKyOTP.labelPhone.string = t.phone,
                cc.sys.localStorage.setItem("infoRed8", JSON.stringify(t)))),
                void 0 !== t.email && (this.dialog.profile.CaNhan.email.string = t.email,
                n.isEmpty(t.email) || (this.dialog.profile.BaoMat.DangKyOTP.labelEmail.string = t.email)),
                void 0 !== t.cmt && (this.dialog.profile.CaNhan.cmt.string = t.cmt,
                n.isEmpty(t.cmt) || (this.dialog.profile.BaoMat.DangKyOTP.labelCMT.string = t.cmt)),
                void 0 !== t.joinedOn && (this.dialog.profile.CaNhan.joinedOn.string = n.getStringDateByTime(t.joinedOn)),
                void 0 !== t.level && (this.header.level(t.level),
                this.header.updateEXP(t.vipHT, t.vipNext))
            },
            signOut: function() {
                cc.RedT.user = {},
                cc.RedT.IS_LOGIN = !1,
                this.AllReset(),
                cc.sys.localStorage.removeItem("infoRed8")
            },
            signIn: function() {
                cc.RedT.IS_LOGIN = !0,
                this.header.isSignIn(),
                this.dialog.onBack(),
                cc.RedT.MiniPanel.signIn()
            },
            AllReset: function() {
                this.loading.active = !1,
                this.newsContents.reset(),
                this.header.isSignOut(),
                this.dialog.onCloseDialog(),
                this.MenuRoom.onBack(),
                cc.RedT.MiniPanel.newGame(),
                this.dialog.iMessage.reset()
            },
            onGetTaiXiu: function(t, e) {},
            onGetHu: function() {
                var t = this;
                if (void 0 !== cc.RedT.setting.topHu.data) {
                    Promise.all(cc.RedT.setting.topHu.data.vq_red.filter(function(t) {
                        return 1 == t.red
                    })).then(function(e) {
                        var i = e.filter(function(t) {
                            return 100 == t.type
                        })
                          , o = e.filter(function(t) {
                            return 1e3 == t.type
                        })
                          , c = e.filter(function(t) {
                            return 1e4 == t.type
                        })
                          , s = n.getOnlyNumberInString(t.iconVQRed.hu100.string)
                          , a = n.getOnlyNumberInString(t.iconVQRed.hu1k.string)
                          , h = n.getOnlyNumberInString(t.iconVQRed.hu10k.string);
                        s - i[0].bet != 0 && n.numberTo(t.iconVQRed.hu100, n.getOnlyNumberInString(t.iconVQRed.hu100.string), i[0].bet, 4900, !0),
                        a - o[0].bet != 0 && n.numberTo(t.iconVQRed.hu1k, n.getOnlyNumberInString(t.iconVQRed.hu1k.string), o[0].bet, 4900, !0),
                        h - c[0].bet != 0 && n.numberTo(t.iconVQRed.hu10k, n.getOnlyNumberInString(t.iconVQRed.hu10k.string), c[0].bet, 4900, !0)
                    }),
                    Promise.all(cc.RedT.setting.topHu.data.candy.filter(function(t) {
                        return 1 == t.red
                    })).then(function(e) {
                        var i = e.filter(function(t) {
                            return 100 == t.type
                        })
                          , o = e.filter(function(t) {
                            return 1e3 == t.type
                        })
                          , c = e.filter(function(t) {
                            return 1e4 == t.type
                        })
                          , s = n.getOnlyNumberInString(t.iconCandy.hu100.string)
                          , a = n.getOnlyNumberInString(t.iconCandy.hu1k.string)
                          , h = n.getOnlyNumberInString(t.iconCandy.hu10k.string);
                        s - i[0].bet != 0 && n.numberTo(t.iconCandy.hu100, n.getOnlyNumberInString(t.iconCandy.hu100.string), i[0].bet, 4900, !0),
                        a - o[0].bet != 0 && n.numberTo(t.iconCandy.hu1k, n.getOnlyNumberInString(t.iconCandy.hu1k.string), o[0].bet, 4900, !0),
                        h - c[0].bet != 0 && n.numberTo(t.iconCandy.hu10k, n.getOnlyNumberInString(t.iconCandy.hu10k.string), c[0].bet, 4900, !0)
                    }),
                    Promise.all(cc.RedT.setting.topHu.data.tamhung.filter(function(t) {
                        return 1 == t.red
                    })).then(function(e) {
                        var i = e.filter(function(t) {
                            return 100 == t.type
                        })
                          , o = e.filter(function(t) {
                            return 1e3 == t.type
                        })
                          , c = e.filter(function(t) {
                            return 1e4 == t.type
                        })
                          , s = n.getOnlyNumberInString(t.iconTamHung.hu100.string)
                          , a = n.getOnlyNumberInString(t.iconTamHung.hu1k.string)
                          , h = n.getOnlyNumberInString(t.iconTamHung.hu10k.string);
                        s - i[0].bet != 0 && n.numberTo(t.iconTamHung.hu100, n.getOnlyNumberInString(t.iconTamHung.hu100.string), i[0].bet, 4900, !0),
                        a - o[0].bet != 0 && n.numberTo(t.iconTamHung.hu1k, n.getOnlyNumberInString(t.iconTamHung.hu1k.string), o[0].bet, 4900, !0),
                        h - c[0].bet != 0 && n.numberTo(t.iconTamHung.hu10k, n.getOnlyNumberInString(t.iconTamHung.hu10k.string), c[0].bet, 4900, !0)
                    }),
                    Promise.all(cc.RedT.setting.topHu.data.zeus.filter(function(t) {
                        return 1 == t.red
                    })).then(function(e) {
                        var i = e.filter(function(t) {
                            return 100 == t.type
                        })
                          , o = e.filter(function(t) {
                            return 1e3 == t.type
                        })
                          , c = e.filter(function(t) {
                            return 1e4 == t.type
                        })
                          , s = n.getOnlyNumberInString(t.iconZeus.hu100.string)
                          , a = n.getOnlyNumberInString(t.iconZeus.hu1k.string)
                          , h = n.getOnlyNumberInString(t.iconZeus.hu10k.string);
                        s - i[0].bet != 0 && n.numberTo(t.iconZeus.hu100, n.getOnlyNumberInString(t.iconZeus.hu100.string), i[0].bet, 4900, !0),
                        a - o[0].bet != 0 && n.numberTo(t.iconZeus.hu1k, n.getOnlyNumberInString(t.iconZeus.hu1k.string), o[0].bet, 4900, !0),
                        h - c[0].bet != 0 && n.numberTo(t.iconZeus.hu10k, n.getOnlyNumberInString(t.iconZeus.hu10k.string), c[0].bet, 4900, !0)
                    }),
                    Promise.all(cc.RedT.setting.topHu.data.long.filter(function(t) {
                        return 1 == t.red
                    })).then(function(e) {
                        var i = e.filter(function(t) {
                            return 100 == t.type
                        })
                          , o = e.filter(function(t) {
                            return 1e3 == t.type
                        })
                          , c = e.filter(function(t) {
                            return 1e4 == t.type
                        })
                          , s = n.getOnlyNumberInString(t.iconLongLan.hu100.string)
                          , a = n.getOnlyNumberInString(t.iconLongLan.hu1k.string)
                          , h = n.getOnlyNumberInString(t.iconLongLan.hu10k.string);
                        s - i[0].bet != 0 && n.numberTo(t.iconLongLan.hu100, n.getOnlyNumberInString(t.iconLongLan.hu100.string), i[0].bet, 4900, !0),
                        a - o[0].bet != 0 && n.numberTo(t.iconLongLan.hu1k, n.getOnlyNumberInString(t.iconLongLan.hu1k.string), o[0].bet, 4900, !0),
                        h - c[0].bet != 0 && n.numberTo(t.iconLongLan.hu10k, n.getOnlyNumberInString(t.iconLongLan.hu10k.string), c[0].bet, 4900, !0)
                    })
                }
            },
            playMusic: function() {
                this.playSoundBG()
            },
            pauseMusic: function() {
                cc.audioEngine.stopAll(),
                clearTimeout(f.scope.timeout_Play_Sound)
            },
            resumeMusic: function() {},
            audioClick: function() {
                null != cc.RedT.audio ? (console.log("not Null --- here"),
                cc.RedT.audio.playClick()) : console.log("null --- here")
            },
            audioUnClick: function() {
                cc.RedT.audio ? (console.log("not Null --- here"),
                cc.RedT.audio.playUnClick()) : console.log("null --- here")
            },
            fanpage: function() {
                cc.sys.openURL("https://www.facebook.com/Conggamebaiuytinhangdauvietnam")
            },
            ios: function() {
                cc.sys.openURL("https://mecvip.club/help/ios")
            },
            android: function() {
                cc.sys.openURL("https://mecvip/download/" + this.appApk)
            },
            telegram: function() {
                cc.sys.openURL("https://telegram.me/HAVIPBot")
            },
            hotro: function() {
                cc.sys.openURL("https://www.tidio.com/talk/rv5zls5ofxtb95kxafjzgg5bz9aadlnx")
            },
            checkLoginFacebook: function() {
                if (cc.sys.isBrowser && FB) {
                    var t = this;
                    t.loading.active = !0,
                    !isInitFB && FB && FB.init({
                        appId: "1979927462336372",
                        autoLogAppEvents: !0,
                        xfbml: !0,
                        cookie: !0,
                        version: "v3.1"
                    }),
                    FB.getLoginStatus(function(e) {
                        if ("connected" === e.status) {
                            var i = e.authResponse.userID
                              , n = s.LOGIN_FACEBOOK_TYPE
                              , o = e.authResponse.accessToken;
                            t.loginSocial(i, "", n, o)
                        } else
                            t.setAutoLogin(!1),
                            t.loading.active = !1
                    })
                }
            },
            loginFacebook: function() {
                FB.login(function(t) {
                    if (self.loading.active = !1,
                    "connected" === t.status) {
                        cc.log("login  : connected");
                        var e = t.authResponse.userID
                          , i = s.LOGIN_FACEBOOK_TYPE
                          , n = t.authResponse.accessToken;
                        self.loginSocial(e, "", i, n)
                    } else
                        cc.log("Not sigin"),
                        self.setAutoLogin(!1)
                }, {
                    scope: "public_profile,email"
                })
            },
            loginSocial: function(t, e, i, n, o) {
                var s = this
                  , a = {
                    social_id: t,
                    email: e,
                    social_type: i,
                    access_token: n,
                    register_code: this.getRegisterCode(),
                    mkt_code: this.getMarketingCode(),
                    device_id: this.getDeviceID(),
                    fid: this.getFID()
                };
                o && (a.otp = o),
                this.api.registerSocial(a, function(o) {
                    0 === o.data.login_status ? (s.OTPLogin.setLoginFacebook(t, e, i, n),
                    s.OTPLogin.clear(),
                    s.hideProcessingNode(),
                    s.GameCenterUI.showOtpLoginFormNode()) : (s.setAutoLogin(!0),
                    s.setAccountType(!0),
                    s.initDataAndConnectSFS(o.data),
                    s.GameCenterUI.hideOtpLoginFormNode(),
                    o.data.user.is_new && c.addTrackCompleteRegistration())
                }, function(t) {
                    s.setAutoLogin(!1),
                    s.deProcessingNode(),
                    s.showDialogMessage(r.LOGIN_TITLE, t.msg)
                })
            },
            loadFacebookSDK: function() {
                if (cc.sys.isBrowser) {
                    cc.log("isBrowser");
                    var t = !0
                      , e = setInterval(function() {
                        if (cc.log("setInterval   "),
                        !t)
                            return cc.log("clearInterval"),
                            void clearInterval(e);
                        document.getElementById("fb-root") && (t = !1,
                        FB.init({
                            appId: "308158023154919",
                            cookie: !0,
                            xfbml: !0,
                            version: "v3.2"
                        }))
                    }, 500);
                    (function(t, e, i) {
                        var n, o = t.getElementsByTagName(e)[0];
                        t.getElementById(i) || ((n = t.createElement(e)).id = i,
                        n.src = "https://connect.facebook.net/vi_VN/sdk.js",
                        o.parentNode.insertBefore(n, o))
                    }
                    )(document, "script", "facebook-jssdk")
                } else
                    cc.log("isMobile")
            },
            randomBetween: function(t, e) {
                return Math.floor(Math.random() * (e - t + 1) + t)
            }
        });
        cc._RF.pop()
    }
    , {
        BaseControll: "BaseControll",
        Dialog: "Dialog",
        Header: "Header",
        Helper: "Helper",
        MenuRoom: "MenuRoom",
        NewsContents: "NewsContents",
        Notice: "Notice",
        PushNohu: "PushNohu",
        bgLoading: "bgLoading",
        landingSuKien: "landingSuKien",
        md5: "md5"
    }],
    MegaJ_history_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "cc1fbcAjLFCzL2OcJdQHlRw", "MegaJ_history_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bg: cc.Node,
                time: cc.Label,
                game: cc.Label,
                kq: cc.Label,
                thuong: cc.Label
            }
        }),
        cc._RF.pop()
    }
    , {}],
    MegaJ_history: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "194c9e0ilRN5ZlVuR1vy/q3", "MegaJ_history");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                page: cc.Prefab,
                header: cc.Node,
                body: cc.Node,
                quay: cc.Node,
                nhanve: cc.Node,
                select: ""
            },
            init: function(t) {
                this.RedT = t
            },
            onLoad: function() {
                var t = this;
                this.page = cc.instantiate(this.page),
                this.page.y = -300.91,
                this.node.addChild(this.page),
                this.page = this.page.getComponent("Pagination"),
                Promise.all(this.quay.children.map(function(t) {
                    return t.getComponent("MegaJ_history_item")
                })).then(function(e) {
                    t.quay = e
                }),
                Promise.all(this.nhanve.children.map(function(t) {
                    return t.getComponent("MegaJ_top_item")
                })).then(function(e) {
                    t.nhanve = e
                }),
                this.page.init(this)
            },
            headSelect: function(t) {
                this.select = t.target.name,
                this.header.children.forEach(function(t) {
                    t.name === this.select ? (t.children[0].active = !1,
                    t.children[1].active = !0,
                    t.pauseSystemEvents()) : (t.children[0].active = !0,
                    t.children[1].active = !1,
                    t.resumeSystemEvents())
                }
                .bind(this)),
                this.body.children.forEach(function(t) {
                    t.name === this.select ? t.active = !0 : t.active = !1
                }
                .bind(this)),
                this.get_data()
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                if (!this.RedT.isSpin) {
                    var e = {};
                    e[this.select] = t,
                    cc.RedT.send({
                        g: {
                            megaj: {
                                history: e
                            }
                        }
                    })
                }
            },
            onData: function(t) {
                console.log(t),
                t.quay && this.quayData(t.quay),
                t.nhanve && this.nhanveData(t.nhanve)
            },
            quayData: function(t) {
                this.page.onSet(t.page, t.kmess, t.total),
                this.quay.forEach(function(e, i) {
                    var o = t.data[i];
                    void 0 !== o ? (e.node.active = !0,
                    e.bg.active = i % 2,
                    e.time.string = n.getStringDateByTime(o.time),
                    e.game.string = 100 === o.room ? "Thanh \u0111\u1ed3ng" : 100 === o.room ? "B\u1ea1ch kim" : "Ho\xe0ng kim",
                    e.kq.string = 5 === o.kq ? "Th\xeam l\u01b0\u1ee3t" : 7 === o.kq ? "50%" : n.numberWithCommas(o.win),
                    e.thuong.string = n.numberWithCommas(o.win)) : e.node.active = !1
                }
                .bind(this))
            },
            nhanveData: function(t) {
                this.page.onSet(t.page, t.kmess, t.total),
                this.nhanve.forEach(function(e, i) {
                    var o = t.data[i];
                    if (void 0 !== o) {
                        e.node.active = !0,
                        e.bg.active = i % 2,
                        e.time.string = n.getStringDateByTime(o.time),
                        e.game.string = this.nameGame(o.to),
                        e.room.string = 100 === o.room ? "Thanh \u0111\u1ed3ng" : 100 === o.room ? "B\u1ea1ch kim" : "Ho\xe0ng kim",
                        e.sl.string = o.sl,
                        e.status.string = o.status ? "\u0110\xe3 nh\u1eadn" : "Ch\u01b0a nh\u1eadn";
                        var c = e.status.node;
                        o.status ? c.color = c.color.fromHEX("#47FF00") : c.color = c.color.fromHEX("#FF9900")
                    } else
                        e.node.active = !1
                }
                .bind(this))
            },
            nameGame: function(t) {
                switch (t) {
                case 100:
                    return "Angrybird";
                case 101:
                    return "BigBabol";
                case 102:
                    return "Candy";
                case 103:
                    return "Long L\xe2n";
                case 104:
                    return "Mini 3C\xe2y";
                case 105:
                    return "Kho B\xe1u";
                case 106:
                    return "Mini Poker"
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    MegaJ_top_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "3b8a4fxQdpHfbWILbYJDY0a", "MegaJ_top_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bg: cc.Node,
                time: cc.Label,
                game: cc.Label,
                room: cc.Label,
                sl: cc.Label,
                status: cc.Label
            }
        }),
        cc._RF.pop()
    }
    , {}],
    MegaJ_top: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "d12d5B1O+1B0Lp+cj0QY7BT", "MegaJ_top");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                page: cc.Prefab,
                content: cc.Node
            },
            init: function(t) {
                this.RedT = t
            },
            onLoad: function() {
                var t = this;
                this.page = cc.instantiate(this.page),
                this.page.y = -267.605,
                this.node.addChild(this.page),
                this.page = this.page.getComponent("Pagination"),
                Promise.all(this.content.children.map(function(t) {
                    return t.getComponent("MegaJ_history_item")
                })).then(function(e) {
                    t.content = e
                }),
                this.page.init(this)
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                this.RedT.isSpin || cc.RedT.send({
                    g: {
                        megaj: {
                            top: t
                        }
                    }
                })
            },
            onData: function(t) {
                this.page.onSet(t.page, t.kmess, t.total),
                this.content.forEach(function(e, i) {
                    var o = t.data[i];
                    void 0 !== o ? (e.node.active = !0,
                    e.bg.active = i % 2,
                    e.time.string = n.getStringDateByTime(o.time),
                    e.game.string = o.name,
                    e.kq.string = 100 === o.room ? "Thanh \u0111\u1ed3ng" : 100 === o.room ? "B\u1ea1ch kim" : "Ho\xe0ng kim",
                    e.thuong.string = n.numberWithCommas(o.win)) : e.node.active = !1
                }
                .bind(this))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    MegaJackpot: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "4a89726nBRKG4Pdyq0ZfjR6", "MegaJackpot");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                background: sp.Skeleton,
                bg_move: cc.Node,
                menuGame: cc.Node,
                bgVQ: cc.Node,
                imgVQ: cc.Sprite,
                vqthanhdong: cc.SpriteFrame,
                vqbachkim: cc.SpriteFrame,
                vqhoangkim: cc.SpriteFrame,
                hu: cc.Label,
                luot: cc.Label,
                notice: cc.Node,
                noticePrefab: cc.Prefab,
                spinNode: cc.Node,
                spinSprite: cc.Sprite,
                spinOn: cc.SpriteFrame,
                spinOff: cc.SpriteFrame,
                isSpin: !1
            },
            init: function(t) {
                this.RedT = t,
                cc.RedT.setting.MegaJackpot = cc.RedT.setting.MegaJackpot || {
                    users: {
                        100: 0,
                        1000: 0,
                        10000: 0
                    }
                },
                this.game = 100,
                this.bgAnim = {
                    100: "thanhdong",
                    1000: "bachkim",
                    10000: "hoangkim"
                },
                "true" == localStorage.getItem("MegaJackpot") && (this.node.active = !0),
                void 0 !== cc.RedT.setting.MegaJackpot.game ? cc.RedT.setting.MegaJackpot.game !== this.game && this.changerGame(null, cc.RedT.setting.MegaJackpot.game) : cc.RedT.setting.MegaJackpot.game = this.game = "100",
                void 0 !== cc.RedT.setting.MegaJackpot.position && (this.node.position = cc.RedT.setting.MegaJackpot.position)
            },
            onLoad: function() {
                this.RedT.Dialog.MegaJ_history.init(this),
                this.RedT.Dialog.MegaJ_top.init(this)
            },
            onEnable: function() {
                this.onGetHu(),
                this.regUpdate(),
                this.bg_move.on(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.bg_move.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.bg_move.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.bg_move.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.bg_move.on(cc.Node.EventType.MOUSE_ENTER, this.setTop, this)
            },
            onDisable: function() {
                this.bg_move.off(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.bg_move.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.bg_move.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.bg_move.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.bg_move.off(cc.Node.EventType.MOUSE_ENTER, this.setTop, this)
            },
            eventStart: function(t) {
                this.setTop(),
                this.ttOffset = cc.v2(t.touch.getLocationX() - this.node.position.x, t.touch.getLocationY() - this.node.position.y)
            },
            eventMove: function(t) {
                this.node.position = cc.v2(t.touch.getLocationX() - this.ttOffset.x, t.touch.getLocationY() - this.ttOffset.y)
            },
            eventEnd: function() {
                cc.RedT.setting.MegaJackpot.position = this.node.position
            },
            setTop: function() {
                this.node.parent.insertChild(this.node)
            },
            changerGame: function(t, e) {
                cc.RedT.setting.MegaJackpot.game = this.game = e,
                this.bgAnim[e] && (this.background.setAnimation(0, this.bgAnim[e], !0),
                this.imgVQ.spriteFrame = this["vq" + this.bgAnim[e]]),
                this.luot.string = cc.RedT.setting.MegaJackpot.users[e] + " L\u01b0\u1ee3t",
                this.menuGame.children.forEach(function(t) {
                    t.name === e ? (t.pauseSystemEvents(),
                    t.children[0].active = !1,
                    t.children[1].active = !0) : (t.resumeSystemEvents(),
                    t.children[0].active = !0,
                    t.children[1].active = !1)
                }),
                this.onGetHu()
            },
            openGame: function() {
                cc.RedT.audio.playClick(),
                cc.RedT.IS_LOGIN ? (this.node.active = !0,
                localStorage.setItem("MegaJackpot", !0),
                this.setTop()) : cc.RedT.inGame.dialog.showSignIn()
            },
            closeGame: function() {
                this.node.active = !1,
                localStorage.setItem("MegaJackpot", !1)
            },
            spin: function() {
                this.spinNode.pauseSystemEvents(),
                this.spinSprite.spriteFrame = this.spinOff,
                this.isSpin || cc.RedT.send({
                    g: {
                        megaj: {
                            spin: this.game
                        }
                    }
                })
            },
            onData: function(t) {
                t.status && this.updateStatus(t.status),
                t.notice && this.addNotice(t.notice),
                t.info && this.info(t.info),
                t.history && this.RedT.Dialog.MegaJ_history.onData(t.history),
                t.top && this.RedT.Dialog.MegaJ_top.onData(t.top)
            },
            info: function(t) {
                cc.RedT.setting.MegaJackpot.users[100] = t[100],
                cc.RedT.setting.MegaJackpot.users[1e3] = t[1e3],
                cc.RedT.setting.MegaJackpot.users[1e4] = t[1e4],
                this.luot.string = t[this.game] + " L\u01b0\u1ee3t"
            },
            updateStatus: function(t) {
                if (!0 === t.status) {
                    this.isSpin = !0,
                    this.oldData = t;
                    var e = cc.rotateTo(10, -(2520 + t.data.position)).easing(cc.easeQuinticActionOut())
                      , i = cc.rotateTo(10, -(2520 + t.data.position)).easing(cc.easeQuinticActionOut())
                      , n = cc.callFunc(function() {
                        this.bgVQ.angle = -this.oldData.data.position,
                        this.imgVQ.node.angle = -this.oldData.data.position,
                        this.isSpin = !1,
                        this.spinNode.resumeSystemEvents(),
                        this.spinSprite.spriteFrame = this.spinOn,
                        this.bgVQ.stopAllActions(),
                        this.imgVQ.node.stopAllActions(),
                        this.updateKQ()
                    }, this);
                    this.bgVQ.runAction(e),
                    this.imgVQ.node.runAction(cc.sequence(i, n))
                } else
                    this.isSpin = !1,
                    this.spinNode.resumeSystemEvents(),
                    this.spinSprite.spriteFrame = this.spinOn
            },
            updateKQ: function() {
                if (5 === this.oldData.kq)
                    ;
                else if (12 === this.oldData.kq)
                    ;
                else {
                    var t = new cc.Node;
                    t.addComponent(cc.Label),
                    (t = t.getComponent(cc.Label)).string = n.numberWithCommas(this.oldData.data.thuong),
                    t.font = cc.RedT.util.fontCong,
                    t.lineHeight = 130,
                    t.fontSize = 20,
                    t.node.position = cc.v2(0, 30),
                    this.notice.addChild(t.node),
                    t.node.runAction(cc.sequence(cc.moveTo(2.5, cc.v2(0, 150)), cc.callFunc(function() {
                        t.node.destroy()
                    }, this)))
                }
            },
            regUpdate: function() {
                cc.RedT.send({
                    g: {
                        megaj: {
                            update: !0
                        }
                    }
                })
            },
            addNotice: function(t) {
                var e = cc.instantiate(this.noticePrefab);
                e.getComponent("mini_warning").text.string = t,
                this.notice.addChild(e)
            },
            onGetHu: function() {
                if (void 0 !== cc.RedT.setting.topHu.data && this.node.active) {
                    var t = this
                      , e = cc.RedT.setting.topHu.data.megaj.filter(function(e) {
                        return e.type == t.game
                    })
                      , i = n.getOnlyNumberInString(this.hu.string)
                      , o = e[0].bet;
                    i - o != 0 && n.numberTo(this.hu, i, o, 2e3, !0)
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    MenuRoom: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b4e69eoVuxHQo0om02/ZxFC", "MenuRoom"),
        cc.Class({
            extends: cc.Component,
            properties: {
                menu: cc.Node,
                head: cc.Node,
                rooms: {
                    default: [],
                    type: cc.Sprite
                },
                table1: {
                    default: [],
                    type: cc.SpriteFrame
                },
                table2: {
                    default: [],
                    type: cc.SpriteFrame
                },
                title: cc.Label,
                red: !0
            },
            onBack: function() {
                this.menu.active = !0,
                this.node.active = !1
            },
            selectCoint: function(t, e) {
                "red" == e ? (this.red = !0,
                this.changerRoom(!0)) : (this.red = !1,
                this.changerRoom(!1)),
                Promise.all(this.head.children.map(function(t) {
                    t.name == e ? (t.children[0].active = !0,
                    t.children[1].color = cc.Color.BLACK) : (t.children[0].active = !1,
                    t.children[1].color = cc.Color.WHITE)
                }))
            },
            openGame: function(t) {
                this.game = t,
                this.title.string = t.title,
                this.selectCoint(null, "red"),
                this.menu.active = !1,
                this.node.active = !0
            },
            changerRoom: function(t) {
                var e = this;
                this.game.table2 ? t ? Promise.all(this.rooms.map(function(t, i) {
                    t.spriteFrame = i < 4 ? e.table2[3] : i < 8 ? e.table2[4] : e.table2[5]
                })) : Promise.all(this.rooms.map(function(t, i) {
                    t.spriteFrame = i < 4 ? e.table2[0] : i < 8 ? e.table2[1] : e.table2[2]
                })) : t ? Promise.all(this.rooms.map(function(t, i) {
                    t.spriteFrame = i < 4 ? e.table1[3] : i < 8 ? e.table1[4] : e.table1[5]
                })) : Promise.all(this.rooms.map(function(t, i) {
                    t.spriteFrame = i < 4 ? e.table1[0] : i < 8 ? e.table1[1] : e.table1[2]
                }))
            },
            onClickRoom: function(t) {
                this.bet = t.target.name,
                cc.RedT.audio.playClick(),
                "poker" == this.game.game && cc.RedT.inGame.dialog.showPokerNap(this)
            },
            onData: function(t) {
                cc.director.loadScene(t)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Menu: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "1763c2/MDpCQ4oC+FaHXfWh", "Menu"),
        cc.Class({
            extends: cc.Component,
            properties: {
                header: cc.Node,
                games: cc.Node,
                adsContent: cc.PageView,
                adsTimeNext: 0
            },
            onLoad: function() {
                this.setTimeAds(),
                this.node._onPreDestroy = function() {
                    clearTimeout(this.adsTime)
                }
                .bind(this)
            },
            onEnable: function() {
                this.adsContent.content.on(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.adsContent.content.on(cc.Node.EventType.TOUCH_END, this.setTimeAds, this),
                this.adsContent.content.on(cc.Node.EventType.TOUCH_CANCEL, this.setTimeAds, this),
                this.adsContent.content.on(cc.Node.EventType.MOUSE_ENTER, this.eventStart, this),
                this.adsContent.content.on(cc.Node.EventType.MOUSE_LEAVE, this.setTimeAds, this),
                this.onHeadSelect(null, "all")
            },
            onDisable: function() {
                this.adsContent.content.off(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.adsContent.content.off(cc.Node.EventType.TOUCH_END, this.setTimeAds, this),
                this.adsContent.content.off(cc.Node.EventType.TOUCH_CANCEL, this.setTimeAds, this),
                this.adsContent.content.off(cc.Node.EventType.MOUSE_ENTER, this.eventStart, this),
                this.adsContent.content.off(cc.Node.EventType.MOUSE_LEAVE, this.setTimeAds, this)
            },
            nextAds: function() {
                this.adsContent._curPageIdx == this.adsContent._pages.length - 1 ? this.adsContent.scrollToPage(0, 1.5) : this.adsContent.scrollToPage(this.adsContent._curPageIdx + 1, .85),
                this.setTimeAds()
            },
            eventStart: function() {
                clearTimeout(this.adsTime)
            },
            setTimeAds: function() {
                this.eventStart(),
                this.adsTime = setTimeout(function() {
                    this.nextAds()
                }
                .bind(this), 1e3 * this.adsTimeNext)
            },
            onHeadSelect: function(t, e) {
                for (var i = 0; i < 5; i++)
                    this.header.children[i].children[1].active = !1;
                switch (e) {
                case "all":
                    for (var n = 0; n < this.games.childrenCount; n++) {
                        ((h = this.games.children[n].getComponent("iconGame")).slot || h.mini || h.bai || h.khac) && (this.games.children[n].active = !0)
                    }
                    this.header.children[0].children[1].active = !0;
                    break;
                case "mini":
                    for (var o = 0; o < this.games.childrenCount; o++) {
                        (h = this.games.children[o].getComponent("iconGame")).mini ? this.games.children[o].active = !0 : this.games.children[o].active = !1
                    }
                    this.header.children[1].children[1].active = !0;
                    break;
                case "bai":
                    for (var c = 0; c < this.games.childrenCount; c++) {
                        (h = this.games.children[c].getComponent("iconGame")).bai ? this.games.children[c].active = !0 : this.games.children[c].active = !1
                    }
                    this.header.children[2].children[1].active = !0;
                    break;
                case "slot":
                    for (var s = 0; s < this.games.childrenCount; s++) {
                        (h = this.games.children[s].getComponent("iconGame")).slot ? this.games.children[s].active = !0 : this.games.children[s].active = !1
                    }
                    this.header.children[3].children[1].active = !0;
                    break;
                case "khac":
                    for (var a = 0; a < this.games.childrenCount; a++) {
                        var h;
                        (h = this.games.children[a].getComponent("iconGame")).khac ? this.games.children[a].active = !0 : this.games.children[a].active = !1
                    }
                    this.header.children[4].children[1].active = !0
                }
            },
            openMiniGame: function(t, e) {
                cc.RedT.MiniPanel[e].openGame()
            },
            regGame: function(t, e) {
                cc.RedT.audio.playClick(),
                cc.RedT.IS_LOGIN ? (cc.RedT.inGame.loading.active = !0,
                cc.RedT.send({
                    g: {
                        reg: e
                    }
                })) : cc.RedT.inGame.dialog.showSignIn()
            },
            openGame: function(t, e) {
                cc.RedT.audio.playClick(),
                cc.RedT.IS_LOGIN ? (cc.RedT.inGame.loading.active = !0,
                cc.director.loadScene(e)) : cc.RedT.inGame.dialog.showSignIn()
            },
            openTXCL: function(t, e) {
                cc.RedT.MiniPanel.TaiXiu.openGame(null, e)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Message: [function(t, e, i) {
        "use strict";
        var n;
        function o(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i,
            t
        }
        cc._RF.push(e, "e0268JjkIdLKJIvm3DyUhb2", "Message");
        var c = (o(n = {
            TITLE_SUCCESS: "Th\xe0nh c\xf4ng",
            TITLE_FAILED: "L\u1ed7i",
            TIME_OUT_LOADING: "C\xf3 l\u1ed7i trong qu\xe1 tr\xecnh th\u1ef1c hi\u1ec7n, vui l\xf2ng th\u1eed l\u1ea1i",
            CONNECT_SFS_ERROR: "Kh\xf4ng th\u1ec3 k\u1ebft n\u1ed1i t\u1edbi Server",
            MISSING_INFO: "Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 c\xe1c th\xf4ng tin",
            SUCCESS: "Th\xe0nh c\xf4ng",
            FAILURE: "Th\u1ea5t b\u1ea1i",
            VERSION: "Phi\xean b\u1ea3n: {0}",
            CONTACT: "{0}",
            OTP_FIRST_ACCOUNT: "K\xedch ho\u1ea1t s\u1ed1 \u0111i\u1ec7n tho\u1ea1i b\u1ea3o m\u1eadt \u0111\u1ec3 b\u1ea3o v\u1ec7 t\xe0i kho\u1ea3n b\u1ea1n nh\xe9!",
            OTP_ACTIVE_ACCOUNT: "Vui l\xf2ng so\u1ea1n tin <color=yellow>{0}</color> g\u1eedi <color=yellow>{1}</color> \u0111\u1ec3 k\xedch ho\u1ea1t OTP",
            OTP_FORGET_PASSWORD: "B\u01b0\u1edbc 1: So\u1ea1n tin <color=yellow>{0}</color> g\u1eedi <color=yellow>{1}</color> \u0111\u1ec3 l\u1ea5y m\xe3 x\xe1c th\u1ef1c",
            LOGIN_TITLE: "\u0110\u0103ng nh\u1eadp",
            LOGIN_MISSING_USERNAME: "Thi\u1ebfu th\xf4ng tin t\xe0i kho\u1ea3n",
            LOGIN_MISSING_PASSWORD: "Thi\u1ebfu th\xf4ng tin m\u1eadt kh\u1ea9u",
            LOGIN_MISSING_CAPTCHA: "Thi\u1ebfu th\xf4ng tin m\xe3 x\xe1c nh\u1eadn",
            LOGIN_SECURITY_SMS: "\u0110\u1ec3 \u0111\u0103ng k\xfd b\u1ea3o m\u1eadt \u0111\u0103ng nh\u1eadp vui l\xf2ng so\u1ea1n tin <color=yellow>{0}</color> g\u1eedi <color=yellow>{1}</color>\n\u0110\u1ec3 h\u1ee7y b\u1ea3o m\u1eadt \u0111\u0103ng nh\u1eadp vui l\xf2ng so\u1ea1n tin <color=yellow>{2}</color> g\u1eedi <color=yellow>{3}</color>",
            LOGIN_SECURITY_SMS_2: "So\u1ea1n tin <color=yellow>{0}</color> g\u1eedi <color=yellow>{1}</color> \u0111\u1ec3 l\u1ea5y m\xe3 OTP",
            SECURITY_GAME: "Qu\u1ea3n l\xfd game",
            TIME_LOGIN: "B\u1ea1n \u0111\xe3 \u0111\u0103ng nh\u1eadp qu\xe1 nhi\u1ec1u\nVui l\xf2ng th\u1eed l\u1ea1i sau \xedt ph\xfat",
            REGISTER_TITLE: "\u0110\u0103ng k\xfd",
            REGISTER_MISSING_USERNAME: "Vui l\xf2ng nh\u1eadp t\xean t\xe0i kho\u1ea3n",
            REGISTER_MISSING_PASSWORD: "Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u",
            REGISTER_MISSING_REPASSWORD: "Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u x\xe1c nh\u1eadn",
            REGISTER_REPASSWORD_NOT_CORRECT: "Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u ch\u01b0a ch\xednh x\xe1c. Vui l\xf2ng th\u1eed l\u1ea1i",
            REGISTER_NOT_AGREE_TERM: "Vui l\xf2ng x\xe1c nh\u1eadn l\u1ea1i c\xe1c \u0111i\u1ec1u kho\u1ea3n s\u1eed d\u1ee5ng",
            FORGET_PASSWORD_TITLE: "Qu\xean m\u1eadt kh\u1ea9u",
            FORGET_PASSWORD_MISSING_USERNAME_EMAIL: "Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 t\xean t\xe0i kho\u1ea3n v\xe0 Email",
            FORGET_PASSWORD_NOT_SUPPORT_FORGET_PASSWORD_BY_PHONE: "Ch\xfang t\xf4i hi\u1ec7n ch\u01b0a h\u1ed7 tr\u1ee3 l\u1ea5y l\u1ea1i m\u1eadt kh\u1ea9u b\u1eb1ng s\u1ed1 \u0111i\u1ec7n tho\u1ea1i",
            FORGET_PASSWORD_SUCCESS: "G\u1eedi email th\xe0nh c\xf4ng. Vui l\xf2ng ki\u1ec3m tra email \u0111\u1ec3 l\u1ea5y th\xf4ng tin v\u1ec1 m\u1eadt kh\u1ea9u m\u1edbi",
            FORGET_PASSWORD_RE_PASSWORD_NOT_CORRECT: "M\u1eadt kh\u1ea9u x\xe1c nh\u1eadn kh\xf4ng ch\xednh x\xe1c",
            CHANGE_PASSWORD_TITLE: "\u0110\u1ed5i m\u1eadt kh\u1ea9u",
            CHANGE_PASSWORD_RE_PASSWORD_NOT_CORRECT: "M\u1eadt kh\u1ea9u x\xe1c nh\u1eadn kh\xf4ng ch\xednh x\xe1c",
            CHANGE_PASSWORD_GET_OTP: "B\u1ea1n vui l\xf2ng s\u1eed d\u1ee5ng OTP Telegram \u0111\u1ec3 nh\u1eadn OTP ho\u1eb7c li\xean h\u1ec7 v\u1edbi QTV \u0111\u1ec3 bi\u1ebft th\xeam th\xf4ng tin",
            SET_NICKNAME_TITLE: "T\u1ea1o nh\xe2n v\u1eadt",
            SET_NICKNAME_NICKNAME_NOT_EMPTY: "T\xean nh\u1eadn v\u1eadt kh\xf4ng \u0111\u01b0\u1ee3c tr\u1ed1ng",
            OTP_NOT_EMPTY: "M\xe3 OTP kh\xf4ng \u0111\u01b0\u1ee3c ph\xe9p tr\u1ed1ng",
            NICKNAME_DIFFERENT_USERNAME: "T\xean nh\xe2n v\u1eadt kh\xf4ng \u0111\u01b0\u1ee3c tr\xf9ng v\u1edbi t\xe0i kho\u1ea3n",
            OTP_LOGIN_TITLE: "B\u1ea3o m\u1eadt \u0111\u0103ng nh\u1eadp",
            REGISTER_GIFTCODE_WELCOME: "Xin ch\xe0o <color=yellow>{0}</color>",
            UPDATE_DIAMOND: "B\u1ea1n \u0111\u01b0\u1ee3c t\u1eb7ng KIM C\u01af\u01a0NG. Xem ngay t\u1ea1i S\u1ef0 KI\u1ec6N L\xcaN \u0110\u1edcI SI\xcaU XE",
            LOGOUT_TITLE: "\u0110\u0103ng xu\u1ea5t",
            UPDATE_INFO: "C\u1eadp nh\u1eadt th\xf4ng tin c\xe1 nh\xe2n",
            UPDATE_AVATAR_TITLE: "\u0110\u1ed5i avatar",
            UPDATE_PASSWORD_TITLE: "\u0110\u1ed5i m\u1eadt kh\u1ea9u",
            FORMAT_PHONE_NOT_CORRECT: "\u0110\u1ecbnh d\u1ea1ng s\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xf4ng ch\xednh x\xe1c",
            FORMAT_DOB_NOT_CORRECT: "\u0110\u1ecbnh d\u1ea1ng ng\xe0y sinh kh\xf4ng ch\xednh x\xe1c",
            FORMAT_EMAIL_NOT_CORRECT: "\u0110\u1ecbnh d\u1ea1ng Email kh\xf4ng ch\xednh x\xe1c",
            INFO_DOB: "{0}/{1}/{2}",
            PLAYER_INFO_TITLE: "Th\xf4ng tin ng\u01b0\u1eddi ch\u01a1i",
            MAIL_TITLE: "H\xf2m th\u01b0",
            MAIL_DETAIL_TITLE: "Ngu\u1eddi g\u1eedi: {0} - Th\u1eddi gian: {1}",
            MAIL_NOTIFICATION: "B\u1ea1n c\xf3 tin nh\u1eafn m\u1edbi",
            RECHARGE_MONEY_SUCCESS: "B\u1ea1n \u0111\xe3 n\u1ea1p th\xe0nh c\xf4ng {0} {1}",
            RECHARGE_MONEY_TITLE: "N\u1ea1p th\u1ebb",
            RECHARGE_MONEY_HISTORY_NAME: "N\u1ea1p th\u1ebb {0}",
            RECHARGE_MONEY_HISTORY_NOTE: "Code: {0} - Seri: {1}",
            NUMBER_MONEY_LARGER_ZERO: "S\u1ed1 KAY ph\u1ea3i > 0",
            RECHARGE_GOLD_SUCCESS: "\u0110\u1ed5i th\xe0nh c\xf4ng",
            RECHARGE_GOLD_TITLE: "\u0110\u1ed5i Xu",
            RECHARGE_GOLD_HISTORY_NAME: "\u0110\u1ed5i Xu",
            RECHARGE_GOLD_HISTORY_NOTE: "S\u1ed1 Xu nh\u1eadn \u0111\u01b0\u1ee3c: {0}",
            RECHARGE_SMS_NOTE: "<color=#A17E1A><i>N\u1ea1p {0} nh\u1eadn ngay {1} KAY</i></c>",
            RECHARGE_SMS_MSG: "So\u1ea1n <color=yellow>{0}</color> g\u1eedi <color=green>{1}</color>",
            RECHARGE_SMS_TENDANGNHAP: "tendangnhap",
            RECHARGE_SMS_HISTORY_NAME: "N\u1ea1p SMS",
            RECHARGE_BANKING_TITLE: "N\u1ea1p Banking",
            AWARD_TITLE: "\u0110\u1ed5i th\u01b0\u1edfng",
            AWARD_DESCRIBE: "\u0110\u1ed5i th\u1ebb {0}",
            NUMBER_CARDS_LARGER_ZERO: "S\u1ed1 l\u01b0\u1ee3ng th\u1ebb ph\u1ea3i > 0",
            TRANSFER_TITLE: "Chuy\u1ec3n kho\u1ea3n",
            VALUE_LARGER_ZERO: "S\u1ed1 KAY ph\u1ea3i > 0",
            RE_NICKNAME_NOT_CORRECT: "X\xe1c nh\u1eadn nickname kh\xf4ng ch\xednh x\xe1c",
            TRANSFER_LOCKED: "Ch\u1ee9c n\u0103ng chuy\u1ec3n kho\u1ea3n \u0111ang t\u1ea1m kh\xf3a",
            TRANSFER_OTP: "So\u1ea1n tin <color=yellow>{0}</color> g\u1eedi <color=yellow>{1}</color>",
            SAFE_TITLE: "K\xe9t s\u1eaft",
            SAFE_NOT_ACTIVE_PHONE: "Vui l\xf2ng b\u1ea3o m\u1eadt t\xe0i kho\u1ea3n b\u1eb1ng S\u1ed1 \u0111i\u1ec7n tho\u1ea1i \u0111\u1ec3 r\xfat ti\u1ec1n",
            SAFE_GET_OTP: "So\u1ea1n tin: <color = #F0FF40>{0}</color> g\u1eedi <color = #F0FF40>{1}</color> \u0111\u1ec3 l\u1ea5y m\xe3 x\xe1c th\u1ef1c",
            HISTORY_TITLE: "L\u1ecbch s\u1eed",
            TOP_TITLE: "B\u1ea3ng x\u1ebfp h\u1ea1ng",
            GIFTCODE_TITLE: "Gift Code",
            GIFTCODE_NOT_ACTIVE: "Vui l\xf2ng b\u1ea3o m\u1eadt \u0111\u1ec3 s\u1eed d\u1ee5ng Gift Code",
            CAPCHA_NOT_CORRECT: "M\xe3 x\xe1c nh\u1eadn kh\xf4ng ch\xednh x\xe1c",
            CHAT_MESSAGE: "<color=4bcaee><b>{0}: </b></color>{1}",
            CHAT_VIP_MESSAGE: "<color=4bcaee><b>{0}: </b></color>{1}",
            CHAT_MESSAGE_FAIL: "<color=red><i>{0}</i></color>",
            CHAT_GAME_MESSAGE: "<color=fecb6e><b>{0}: </b></color>{1}",
            CHAT_TAI_XIU_MESSAGE: "<color=04fd4a><b>{0}: </b></color>{1}",
            CHAT_TAI_XIU_VIP_MESSAGE: "<color=04fd4a><b>{0}: </b></color>{1}",
            CHAT_SLOT_2_MESSAGE: "<color=#DE9100><b>{0}: </b></color><color=#C3C2C3>{1}</color>",
            TAIXIU_YOU_ONLE_BET_A_DOOR: "B\u1ea1n ch\u1ec9 \u0111\u01b0\u1ee3c \u0111\u1eb7t m\u1ed9t c\u1eeda",
            JOIN_ROOM_TITLE: "Ch\u1ecdn ph\xf2ng",
            NOT_ENOUGH_MONEY_TO_JOIN_GAME: "B\u1ea1n c\u1ea7n t\u1ed1i thi\u1ec3u {0} {1} \u0111\u1ec3 tham gia ch\u01a1i game",
            NOT_ENOUGH_MONEY_TO_STAY_GAME: "B\u1ea1n c\u1ea7n {0} {1} \u0111\u1ec3 ti\u1ebfp t\u1ee5c ch\u01a1i game!",
            JOIN_ROOM_ERROR: "Ph\xf2ng ch\u01a1i hi\u1ec7n t\u1ea1i \u0111ang b\u1ecb kh\xf3a",
            INTIVE_TITLE: "M\u1eddi b\u1ea1n",
            NOTIFICATION_TITLE: "Th\xf4ng b\xe1o",
            MONEY: "KAY",
            GOLD: "XU",
            VIETTEL: "Vietel",
            MOBIFONE: "Mobifone",
            VINAPHONE: "Vinaphone",
            GATE: "Gate",
            TOP_UP_ITEM_VALUE: "Th\u1ebb {0}",
            CHARGE_CARD_ITEM_VALUE: "{0}\u0110",
            TAI_XIU: "T\xe0i X\u1ec9u",
            MINI_POKER: "Mini Poker",
            MINI_BACAY: "Mini Ba C\xe2y",
            DIAMOND: "Zombies",
            BAU_CUA: "B\u1ea7u Cua",
            LUCK_WHEEL: "V\xf2ng Quay May M\u1eafn",
            TREN_DUOI: "Tr\xean D\u01b0\u1edbi",
            DIAMOND_2: "Big Babol",
            SLOT4: "V\u01b0\u01a1ng Qu\u1ed1c KAY",
            BOM: "Thi\xean H\xe0",
            INVITE_MESSAGE: "Ng\u01b0\u1eddi ch\u01a1i <color=green>{0}</color> m\u1eddi b\u1ea1n v\xe0o game <color=green>{1}</color>\nM\u1ee9c c\u01b0\u1ee3c: <color=yellow>{2} {3}</color>",
            GAME_DESCRIBE_TABLE_NAME: "{0} - B\xe0n {1} - Phi\xean ch\u01a1i {2}",
            GAME_DESCRIBE_TABLE_BET: "M\u1ee9c c\u01b0\u1ee3c: {0} {1}",
            REQUEST_LEFT_ROOM: "\u0110\u0103ng k\xfd r\u1eddi b\xe0n th\xe0nh c\xf4ng",
            IGNORE_REQUEST_LEFT_ROOM: "H\u1ee7y r\u1eddi b\xe0n th\xe0nh c\xf4ng",
            BACAY_WIN_ALL: "B\u1eaeT C\u1ea2 L\xc0NG",
            BACAY_LOSE_ALL: "PH\xc1T L\u01af\u01a0NG",
            BACAY_BET_PRIVATE_BUTTON: "\u0110\xc1NH BI\xcaN T\u1ea4T C\u1ea2 ({0})",
            MAU_BINH_BINH_LUNG_NOT_COMPLETE: "Binh l\u1ee7ng kh\xf4ng th\u1ec3 ho\xe0n th\xe0nh",
            MAU_BINH_KHONG_HOP_LE: "KH\xd4NG H\u1ee2P L\u1ec6",
            MAU_BINH_THUNG_PHA_SANH_LON: "TH\xd9NG PH\xc1 S\u1ea2NH \u0110\u1ea0I",
            MAU_BINH_THUNG_PHA_SANH: "TH\xd9NG PH\xc1 S\u1ea2NH",
            MAU_BINH_TU_QUY: "T\u1ee8 QU\xdd",
            MAU_BINH_CU_LU: "C\xd9 L\u0168",
            MAU_BINH_THUNG: "TH\xd9NG",
            MAU_BINH_SANH_DAI: "S\u1ea2NH \u0110\u1ea0I",
            MAU_BINH_SANH_NHI: "S\u1ea2NH NH\u1eca",
            MAU_BINH_SANH_THUONG: "S\u1ea2NH",
            MAU_BINH_SAM: "S\xc1M",
            MAU_BINH_THU: "TH\xda",
            MAU_BINH_DOI: "\u0110\xd4I",
            MAU_BINH_MAU_THAU: "M\u1eacU TH\u1ea6U",
            MAU_BINH_COMPLETED: "HO\xc0N TH\xc0NH",
            MAU_BINH_RONG_CUON: "R\u1ed2NG CU\u1ed0N",
            MAU_BINH_SANH_RONG: "S\u1ea2NH R\u1ed2NG",
            MAU_BINH_MUOI_BA_LA_CUNG_MAU: "\u0110\u1ed2NG HOA",
            MAU_BINH_NAM_DOI_MOT_SAM: "N\u0102M \u0110\xd4I M\u1ed8T S\xc1M",
            MAU_BINH_LUC_PHE_BON: "L\u1ee4C PH\xc9 B\xd4N",
            MAU_BINH_BA_THUNG_TAI_BA_CHI: "BA TH\xd9NG BA CHI",
            MAU_BINH_BA_SANH_TAI_BA_CHI: "BA S\u1ea2NH BA CHI",
            MAU_BINH_THUNG_PHA_SANH_CHI_DAU: "TH\xd9NG PH\xc1 S\u1ea2NH CHI \u0110\u1ea6U",
            MAU_BINH_TU_QUY_CHI_DAU: "T\u1ee8 QU\xdd CHI \u0110\u1ea6U",
            MAU_BINH_THUNG_PHA_SANH_CHI_GIUA: "TH\xd9NG PH\xc1 S\u1ea2NH CHI GI\u1eeeA",
            MAU_BINH_TU_QUY_CHI_GIUA: "T\u1ee8 QU\xdd CHI GI\u1eeeA",
            MAU_BINH_CU_LU_CHI_GIUA: "C\xd9 L\u0168 CHI GI\u1eeeA",
            MAU_BINH_SAM_CHI_CUOI: "S\xc1M CHI CU\u1ed0I",
            MAU_BINH_BINH_LUNG: "BINH L\u1ee6NG",
            MAU_BINH_SAP_BA_CHI: "S\u1eacP BA CHI",
            MAU_BINH_THANG_BA_CHI: "TH\u1eaeNG BA CHI",
            MAU_BINH_CHI_TYPE: "{0} . {1}",
            TLMN_IGNORE_TURN: "B\u1ece L\u01af\u1ee2T",
            TLMN_BA_DOI_THONG: "BA \u0110\xd4I TH\xd4NG",
            TLMN_BON_DOI_THONG: "B\u1ed0N \u0110\xd4I TH\xd4NG",
            TLMN_MOT_TU_QUY: "T\u1ee8 QU\xdd",
            TLMN_CONG: "C\xd3NG",
            TLMN_THOI_HAI: "TH\u1ed0I HAI",
            TLMN_THOI_BA_DOI_THONG: "TH\u1ed0I BA \u0110\xd4I TH\xd4NG",
            TLMN_THOI_TU_QUY: "TH\u1ed0I T\u1ee8 QU\xdd",
            TLMN_THOI_BON_DOI_THONG: "TH\u1ed0I B\u1ed0N \u0110\xd4I TH\xd4NG",
            TLMN_SANH_RONG: "S\u1ea2NH R\u1ed2NG",
            TLMN_SAU_DOI_THONG: "S\xc1U \u0110\xd4I TH\xd4NG",
            TLMN_BON_BO_BA: "B\u1ed0N B\u1ed8 BA",
            TLMN_HAI_BO_TU_QUY: "HAI B\u1ed8 T\u1ee8 QU\xdd",
            TLMN_MUOI_HAI_CON_DONG_CHAT: "\u0110\u1ed2NG HOA",
            TLMN_NAM_DOI_THONG: "N\u0102M \u0110\xd4I TH\xd4NG",
            TLMN_TU_HAI: "T\u1ee8 QU\xdd HAI",
            TLMN_SAU_DOI: "S\xc1U \u0110\xd4I",
            TLMN_CHAN_KET_BA_BICH: "CH\u1eb6N K\u1ebeT BA B\xcdCH",
            TLMN_KET_BA_BICH: "K\u1ebeT BA B\xcdCH",
            SAM_BAO_MOT: "B\xc1O 1",
            SAM_THANG_BAO_MOT: "TH\u1eaeNG B\xc1O 1",
            SAM_THUA_BAO_MOT: "THUA B\xc1O 1",
            SAM_IGNORE_TURN: "B\u1ece L\u01af\u1ee2T",
            SAM_XIN_SAM: "XIN S\xc2M",
            SAM_CONG: "C\xd3NG",
            SAM_THOI_HAI: "TH\u1ed0I HAI",
            SAM_THUA_SAM: "THUA S\xc2M",
            SAM_THANG_SAM: "TH\u1eaeNG S\xc2M",
            POKER_CHECK: "XEM",
            POKER_FOLD: "B\u1ece B\xc0I",
            POKER_ALL_IN: "ALL IN",
            POKER_RAISE: "T\u1ed0",
            POKER_CALL: "THEO",
            POKER_THUNG_PHA_SANH_LON: "TH\xd9NG PH\xc1 S\u1ea2NH \u0110\u1ea0I",
            POKER_THUNG_PHA_SANH: "TH\xd9NG PH\xc1 S\u1ea2NH",
            POKER_TU_QUY: "T\u1ee8 QU\xdd",
            POKER_CU_LU: "C\xd9 L\u0168",
            POKER_THUNG: "TH\xd9NG",
            POKER_SANH_DAI: "S\u1ea2NH \u0110\u1ea0I",
            POKER_SANH_NHI: "S\u1ea2NH NH\u1eca",
            POKER_SANH_THUONG: "S\u1ea2NH",
            POKER_SAM: "S\xc1M",
            POKER_THU: "TH\xda",
            POKER_DOI: "\u0110\xd4I",
            POKER_BAI_CAO: "B\xc0I CAO",
            LIENG_CHECK: "XEM",
            LIENG_FOLD: "B\u1ece B\xc0I",
            LIENG_ALL_IN: "ALL IN",
            LIENG_RAISE: "T\u1ed0",
            LIENG_CALL: "THEO",
            LIENG_SAP: "S\xc1P",
            LIENG_LIENG: "LI\xcaNG",
            LIENG_BO_DOI: "B\u1ed8 \u0110\u1ed8I",
            LIENG_BET_TEXT: "{0} ({1})",
            XOC_DIA_REGISTER_FORM_MESSAGE_HOME: "C\xe1i",
            XOC_DIA_REGISTER_FORM_MESSAGE_WAITING: "\u0110ang ch\u1edd",
            XOC_DIA_REGISTER_FORM_MESSAGE_IGNORE: "Ngh\u1ec9 l\xe0m c\xe1i",
            XOC_DIA_START_REGISTER_HOST: "B\u1eaft \u0111\u1ea7u \u0111\u0103ng k\xfd l\xe0m host",
            XOC_DIA_WAIT_NEXT_GAME: "Ch\u1edd \u0111\u1ec3 b\u1eaft \u0111\u1ea7u v\xe1n ch\u01a1i m\u1edbi",
            XOC_DIA_START_BET: "Vui l\xf2ng \u0111\u1eb7t c\u01b0\u1ee3c",
            XOC_DIA_BUY_SELL_DOOR: "Th\u1eddi gian mua b\xe1n c\u1eeda",
            XOC_DIA_NOT_TIME_TO_BET: "Kh\xf4ng ph\u1ea3i th\u1eddi gian \u0111\u1ec3 \u0111\u1eb7t c\u1eeda",
            XOC_DIA_NOT_SELECT_CHIP: "B\u1ea1n ch\u01b0a ch\u1ecdn ti\u1ec1n c\u01b0\u1ee3c",
            XOC_DIA_BALANCE_DOOR: "C\xe2n c\u1eeda",
            XOC_DIA_RESULT: "V\xe1n ch\u01a1i k\u1ebft th\xfac",
            XOC_DIA_NOT_BET_NO_HOST: "Kh\xf4ng th\u1ec3 \u0111\u1eb7t c\u1eeda n\xe0y khi kh\xf4ng c\xf3 C\xe1i",
            XOC_DIA_HOST_NOT_BET: "C\xe1i kh\xf4ng th\u1ec3 \u0111\u1eb7t",
            XOC_DIA_ID: "#{0}",
            PHOM_SELECT_ONE_CARD: "B\u1ea1n ch\u01b0a ch\u1ecdn b\xe0i",
            PHOM_PLEASE_BOC_BAI: "B\u1ea1n ch\u01b0a b\u1ed1c b\xe0i",
            PHOM_PLEASE_SELECT_CARDS_HA: "Vui l\xf2ng ch\u1ecdn ph\u1ecfm c\u1ea7n h\u1ea1",
            PHOM_AN_CHOT: "\u0102N CH\u1ed0T",
            PHOM_BI_AN_CHOT: "B\u1eca \u0102N CH\u1ed0T",
            PHOM_U: "\xd9",
            PHOM_U_KHAN: "\xd9 KHAN",
            PHOM_U_TRON: "\xd9 TR\xd2N",
            PHOM_U_DEN: "\xd9 \u0110\u1ec0N",
            PHOM_DEN: "\u0110\u1ec0N L\xc0NG",
            PHOM_NHAT: "NH\u1ea4T",
            PHOM_NHI: "NH\xcc",
            PHOM_BA: "BA",
            PHOM_BET: "B\xc9T",
            PHOM_MOM: "M\xd3M",
            PHOM_SCORE: "{0} \u0110I\u1ec2M",
            XITO_CHECK: "XEM",
            XITO_FOLD: "B\u1ece B\xc0I",
            XITO_ALL_IN: "ALL IN",
            XITO_RAISE: "T\u1ed0",
            XITO_CALL: "THEO",
            XITO_THUNG_PHA_SANH: "TH\xd9NG PH\xc1 S\u1ea2NH",
            XITO_TU_QUY: "T\u1ee8 QU\xdd",
            XITO_CU_LU: "C\xd9 L\u0168",
            XITO_THUNG: "TH\xd9NG",
            XITO_SANH: "S\u1ea2NH",
            XITO_SAM: "S\xc1M",
            XITO_THU: "TH\xda",
            XITO_DOI: "\u0110\xd4I",
            XITO_BAI_CAO: "B\xc0I CAO",
            SLOT_NOT_CHANGE_BET: "Tr\u1ea1ng th\xe1i hi\u1ec7n t\u1ea1i kh\xf4ng th\u1ec3 thay \u0111\u1ed5i m\u1ee9c c\u01b0\u1ee3c",
            SLOT_NOT_AUTO_SPIN: "Tr\u1ea1ng th\xe1i hi\u1ec7n t\u1ea1i kh\xf4ng th\u1ec3 t\u1ef1 \u0111\u1ed9ng quay",
            SLOT_NOT_TEST: "Tr\u1ea1ng th\xe1i hi\u1ec7n t\u1ea1i kh\xf4ng th\u1ec3 ch\u01a1i th\u1eed",
            SLOT_BONUS_GAME_FINISH: "Ch\xfac m\u1eebng b\u1ea1n nh\u1eadn \u0111\u01b0\u1ee3c <color=yellow>{0} KAY </color>",
            SLOT_CANCEL_BACK: "Vui l\xf2ng \u0111\u1ee3i v\xf2ng ch\u01a1i k\u1ebft th\xfac",
            SLOT_NOT_CHANGE_SELECT_LINE: "Tr\u1ea1ng th\xe1i hi\u1ec7n t\u1ea1i kh\xf4ng th\u1ec3 ch\u1ecdn d\xf2ng c\u01b0\u1ee3c",
            PLAYING_NOT_CHANGE_BET: "Ch\u1edd h\u1ebft l\u01b0\u1ee3t \u0111\u1ec3 \u0111\u1ed5i c\u1eeda \u0111\u1eb7t",
            PLAYING_NOT_CHANGE_MONEY_TYPE: "Ch\u1edd h\u1ebft l\u01b0\u1ee3t \u0111\u1ec3 \u0111\u1ed5i lo\u1ea1i ti\u1ec1n",
            AUTO_SPIN_NOT_CHANGE_BET: "\u0110ang t\u1ef1 \u0111\u1ed9ng quay kh\xf4ng \u0111\u01b0\u1ee3c thay \u0111\u1ed5i c\u1eeda \u0111\u1eb7t",
            AUTO_SPIN_NOT_CHANGE_MONEY_TYPE: "\u0110ang t\u1ef1 \u0111\u1ed9ng quay kh\xf4ng \u0111\u01b0\u1ee3c thay \u0111\u1ed5i lo\u1ea1i ti\u1ec1n",
            SPIN_TOO_FAST: "Quay qu\xe1 nhanh",
            GAME_STOP_SPIN: "Vui l\xf2ng ch\u1edd v\xf2ng quay k\u1ebft th\xfac",
            MINIGAME_ID: "#{0}",
            TAIXIU_HISTORIES_DETAIL: "Phi\xean ch\u01a1i {0} - {1}",
            TAIXIU_BALANCE_DOOR: "Tr\u1ea3 ti\u1ec1n c\xe2n c\u1eeda",
            TAIXIU_YOU_NOT_BET: "Vui l\xf2ng nh\u1eadp ti\u1ec1n c\u01b0\u1ee3c",
            TAIXIU_CHAIN_WIN: "Chu\u1ed7i th\u1eafng: {0}",
            TAIXIU_CHAIN_LOSE: "Chu\u1ed7i thua: {0}",
            TRENDUOI_CLICK_PLAY: "B\u1ea5m v\xe0o PLAY \u0111\u1ec3 b\u1eaft \u0111\u1ea7u ch\u01a1i",
            TRENDUOI_STOP_SPINING: "Vui l\xf2ng ch\u1edd v\xf2ng quay k\u1ebft th\xfac",
            TRENDUOI_FINISH: "K\u1ebft th\xfac",
            TRENDUOI_LOSE: "B\u1ea1n \u0111\xe3 thua. Ch\xfac b\u1ea1n may m\u1eafn l\u1ea7n sau",
            BAU_CUA_NEXT_TURN: "L\u01b0\u1ee3t ti\u1ebfp theo",
            BAU_CUA_BET: "\u0110\u1eb7t c\u01b0\u1ee3c",
            BAU_CUA_TOP_WEEK_TITLE: "Top tu\u1ea7n"
        }, "TAIXIU_CHAIN_WIN", "Hi\u1ec7n t\u1ea1i: {0}"),
        o(n, "TAIXIU_CHAIN_LOSE", "Hi\u1ec7n t\u1ea1i: {0}"),
        o(n, "TAIXIU_CHAIN", "S\u1ef1 ki\u1ec7n \u0111ua d\xe2y t\xe0i x\u1ec9u"),
        o(n, "TAIXIU_CURRENT_CHAIN_WIN", "D\xe0i nh\u1ea5t: {0}"),
        o(n, "TAIXIU_CURRENT_CHAIN_LOSE", "D\xe0i nh\u1ea5t: {0}"),
        o(n, "DRAGON_TIGER_CHAIN_WIN", "D\xe0i nh\u1ea5t: {0}"),
        o(n, "DRAGON_TIGER_CHAIN_LOSE", "D\xe0i nh\u1ea5t: {0}"),
        o(n, "DRAGON_TIGER_CURRENT_CHAIN_WIN", "Hi\u1ec7n t\u1ea1i: {0}"),
        o(n, "DRAGON_TIGER_CURRENT_CHAIN_LOSE", "Hi\u1ec7n t\u1ea1i: {0}"),
        o(n, "DRAGON_TIGER_CHAIN", "S\u1ef1 ki\u1ec7n \u0111ua d\xe2y long h\u1ed5"),
        o(n, "DRAGON_TIGER_NO_BET_SELECTED", "Vui l\xf2ng ch\u1ecdn m\u1ee9c c\u01b0\u1ee3c"),
        o(n, "MINI_GAME_RANK_TITLE", "B\u1ea2NG X\u1ebeP H\u1ea0NG"),
        o(n, "MINI_GAME_RANK_TITLE_TAI_XIU", "B\u1ea2NG X\u1ebeP H\u1ea0NG T\xc0I X\u1ec8U"),
        o(n, "MINI_GAME_RANK_TITLE_CHAN_LE", "B\u1ea2NG X\u1ebeP H\u1ea0NG CH\u1eb4N L\u1eba"),
        o(n, "DIAMOND_NO_LINE_SELECTED", "B\u1ea1n ch\u01b0a ch\u1ecdn d\xf2ng \u0111\u1eb7t c\u01b0\u1ee3c"),
        o(n, "PIRATE_NO_LINE_SELECTED", "B\u1ea1n ch\u01b0a ch\u1ecdn d\xf2ng \u0111\u1eb7t c\u01b0\u1ee3c"),
        o(n, "LUCKY_WHEEL_IS_SPINING", "Vui l\xf2ng ch\u1edd v\xf2ng quay k\u1ebft th\xfac"),
        o(n, "LUCKY_WHEEL_CONGRATULATION", "Ch\xfac m\u1eebng b\u1ea1n nh\u1eadn \u0111\u01b0\u1ee3c ph\u1ea7n th\u01b0\u1edfng t\u1eeb V\xf2ng Quay May M\u1eafn"),
        o(n, "FIREFISH_MIN_BET", "MIN = {0} {1}"),
        o(n, "FIREFISH_FISHED", "Ng\u01b0\u1eddi ch\u01a1i <color=#FA3030>{0}</color> v\u1eeba gi\u1ebft ch\u1ebft <color=#56EA00>{1}</color> nh\u1eadn \u0111\u01b0\u1ee3c <color=#FAFF1A>{2}</color> {3}"),
        o(n, "FORGET_PASSWORD_NOTIFICATION", "Vui l\xf2ng li\xean h\u1ec7 v\u1edbi BQT qua Fanpage ho\u1eb7c Hotline: 097 171 4012 \u0111\u1ec3 \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 ngay b\u1ea1n nh\xe9!"),
        o(n, "SLOT_NOT_CHANGE_SPIN", "Vui l\xf2ng \u0111\u1ee3i v\xf2ng ch\u01a1i k\u1ebft th\xfac"),
        o(n, "SLOT2_NOT_SELECT_LINE", "Vui l\xf2ng ch\u1ecdn d\xf2ng c\u01b0\u1ee3c."),
        o(n, "SLOT2_AUTOSPIN_NOT_CHANGE", "\u0110ang \u1edf ch\u1ebf \u0111\u1ed9 quay t\u1ef1 \u0111\u1ed9ng. B\u1ea1n kh\xf4ng th\u1ec3 th\u1ef1c hi\u1ec7n thao th\xe1c n\xe0y"),
        o(n, "SLOT2_RANK_1", "Ch\xfac m\u1eebng <color = #F7A200>{0}</color> \u0111\xe3 d\xe0nh \u0111\u01b0\u1ee3c H\u0169 <color = #F7A200>{1}</color> KAY v\xe0o l\xfac {2}"),
        o(n, "SLOT2_RANK_2", "TK <color = #F7A200>{0}</color> th\u1eafng <color = #F7A200>{1}</color> KAY {2} tr\u01b0\u1edbc"),
        o(n, "SLOT2_HISTORY", "B\u1ea1n ch\u01a1i ph\xf2ng {0} v\xe0 nh\u1eadn \u0111\u01b0\u1ee3c <color = #F7A200>{1}</color> {2} tr\u01b0\u1edbc"),
        o(n, "SLOT2_NOT_PLAY", "Vui l\xf2ng \u0111\u1ee3i v\xf2ng quay k\u1ebft th\xfac"),
        o(n, "SLOT3_NOT_SELECT_LINE", "Vui l\xf2ng ch\u1ecdn d\xf2ng c\u01b0\u1ee3c."),
        o(n, "SLOT3_AUTOSPIN_NOT_CHANGE", "\u0110ang \u1edf ch\u1ebf \u0111\u1ed9 quay t\u1ef1 \u0111\u1ed9ng. B\u1ea1n kh\xf4ng th\u1ec3 th\u1ef1c hi\u1ec7n thao th\xe1c n\xe0y"),
        o(n, "SLOT3_RANK_1", "Ch\xfac m\u1eebng <color = #F7A200>{0}</color> \u0111\xe3 d\xe0nh \u0111\u01b0\u1ee3c h\u0169 <color = #F7A200>{1}</color> KAY v\xe0o l\xfac {2}"),
        o(n, "SLOT3_RANK_2", "TK <color = #F7A200>{0}</color> th\u1eafng <color = #F7A200>{1}</color> KAY {2} tr\u01b0\u1edbc"),
        o(n, "SLOT3_HISTORY", "B\u1ea1n ch\u01a1i ph\xf2ng {0} v\xe0 nh\u1eadn \u0111\u01b0\u1ee3c <color = #F7A200>{1}</color> {2} tr\u01b0\u1edbc"),
        o(n, "MESSAGE_FORBIDDEN", ["napkay"]),
        o(n, "SPLASH_GET_GET_DATA", "\u0110ang l\u1ea5y d\u1eef li\u1ec7u game ..."),
        o(n, "SPLASH_GET_CONFIG_FAILED", "L\u1ea5y d\u1eef li\u1ec7u th\u1ea5t b\u1ea1i"),
        o(n, "HOT_UPDATE_CHECKING_VERSION", "\u0110ang ki\u1ec3m tra phi\xean b\u1ea3n ..."),
        o(n, "HOT_UPDATE_RETRY", "Th\u1eed l\u1ea1i ..."),
        o(n, "HOT_UPDATE_NOT_FOUND", "Kh\xf4ng t\xecm th\u1ea5y Hot Update ..."),
        o(n, "HOT_UPDATE_DOWNLOAD_MANIFEST_FAILED", "T\u1ea3i manifest th\u1ea5t b\u1ea1i ..."),
        o(n, "HOT_UPDATE_ALREADY_UP_TO_DATE", "Phi\xean b\u1ea3n m\u1edbi nh\u1ea5t ..."),
        o(n, "HOT_UPDATE_FOUND_UPDATE", "T\xecm th\u1ea5y phi\xean b\u1ea3n c\u1eadp nh\u1eadt ..."),
        o(n, "HOT_UPDATE_UPDATING", "\u0110ang c\u1eadp nh\u1eadt ..."),
        o(n, "LOTTERY_NOT_NUMBER", "Vui l\xf2ng ch\u1ecdn s\u1ed1"),
        o(n, "LOTTERY_NOT_BET", "Vui l\xf2ng ch\u1ecdn m\u1ee9c c\u01b0\u1ee3c"),
        o(n, "LOTTERY_SELECT_LO", "Ch\u1ecdn 1 s\u1ed1 b\u1ea5t k\u1ef3. B\u1ea1n s\u1ebd th\u1eafng c\u01b0\u1ee3c khi s\u1ed1 \u0111\xf3 c\xf3 trong b\u1ea3ng k\u1ebft qu\u1ea3"),
        o(n, "LOTTERY_SELECT_DE", "Ch\u1ecdn 1 s\u1ed1 b\u1ea5t k\u1ef3. B\u1ea1n s\u1ebd th\u1eafng c\u01b0\u1ee3c khi s\u1ed1 \u0111\xf3 v\u1ec1 v\xe0o gi\u1ea3i \u0111\u1eb7c bi\u1ec7t ( gi\u1ea3i cu\u1ed1i c\xf9ng)"),
        o(n, "LOTTERY_SELECT_CHAN", "C\u01b0\u1ee3c t\u1ea5t c\u1ea3 c\xe1c s\u1ed1 ch\u1eb5n. B\u1ea1n s\u1ebd th\u1eafng c\u01b0\u1ee3c khi k\u1ebft qu\u1ea3 v\u1ec1 c\xf3 \xedt nh\u1ea5t 14 s\u1ed1 ch\u1eb5n"),
        o(n, "LOTTERY_SELECT_LE", "C\u01b0\u1ee3c t\u1ea5t c\u1ea3 c\xe1c s\u1ed1 l\u1ebb. B\u1ea1n s\u1ebd th\u1eafng c\u01b0\u1ee3c khi k\u1ebft qu\u1ea3 v\u1ec1 c\xf3 \xedt nh\u1ea5t 14 s\u1ed1 l\u1ebb"),
        o(n, "LOTTERY_SELECT_DAU", "Ch\u1ecdn d\xe3y s\u1ed1 b\u1eaft \u0111\u1ea7u b\u1eb1ng s\u1ed1 b\u1ea1n ch\u1ecdn. B\u1ea1n s\u1ebd th\u1eafng c\u01b0\u1ee3c khi c\xf3 c\xe1c k\u1ebft qu\u1ea3 b\u1eaft \u0111\u1ea7u b\u1eb1ng s\u1ed1 b\u1ea1n \u0111\xe3 ch\u1ecdn"),
        o(n, "LOTTERY_SELECT_DUOI", "Ch\u1ecdn d\xe3y s\u1ed1 k\u1ebft th\xfac b\u1eb1ng s\u1ed1 b\u1ea1n ch\u1ecdn. B\u1ea1n s\u1ebd th\u1eafng c\u01b0\u1ee3c khi c\xf3 c\xe1c k\u1ebft qu\u1ea3 k\u1ebft th\xfac b\u1eb1ng s\u1ed1 b\u1ea1n \u0111\xe3 ch\u1ecdn"),
        o(n, "LOTTERY_SELECT_TRANG", " Ch\u1ecdn t\xe2t c\u1ea3 c\xe1c s\u1ed1 trong \xf4 tr\u1eafng. B\u1ea1n s\u1ebd th\u1eafng khi k\u1ebft qu\u1ea3 v\u1ec1 \xedt nh\u1ea5t c\xf3 14 s\u1ed1 trong \xf4 tr\u1eafng"),
        o(n, "LOTTERY_SELECT_DO", "Ch\u1ecdn t\xe2t c\u1ea3 c\xe1c s\u1ed1 trong \xf4 \u0111\u1ecf. B\u1ea1n s\u1ebd th\u1eafng khi k\u1ebft qu\u1ea3 v\u1ec1 \xedt nh\u1ea5t c\xf3 14 s\u1ed1 trong \xf4 \u0111\u1ecf"),
        o(n, "LOTTERY_SELECT_XIEN_2", "Ch\u1ecdn 2 s\u1ed1 b\u1ea5t k\u1ef3. B\u1ea1n s\u1ebd th\u1eafng c\u01b0\u1ee3c khi c\u1ea3 2 s\u1ed1 \u0111\xf3 c\xf3 trong b\u1ea3ng k\u1ebft qu\u1ea3"),
        o(n, "LOTTERY_SELECT_XIEN_3", "Ch\u1ecdn 3 s\u1ed1 b\u1ea5t k\u1ef3. B\u1ea1n s\u1ebd th\u1eafng c\u01b0\u1ee3c khi c\u1ea3 3 s\u1ed1 \u0111\xf3 c\xf3 trong b\u1ea3ng k\u1ebft qu\u1ea3"),
        o(n, "LOTTERY_SELECT_XIEN_4", "Ch\u1ecdn 4 s\u1ed1 b\u1ea5t k\u1ef3. B\u1ea1n s\u1ebd th\u1eafng c\u01b0\u1ee3c khi c\u1ea3 4 s\u1ed1 \u0111\xf3 c\xf3 trong b\u1ea3ng k\u1ebft qu\u1ea3"),
        o(n, "LOTTERY_SELECT_HU", "Ch\u1ecdn 10 s\u1ed1 b\u1ea5t k\u1ef3. B\u1ea1n s\u1ebd th\u1eafng 50% h\u0169 khi k\u1ebft qu\u1ea3 v\u1ec1 kh\xf4ng c\xf3 10 s\u1ed1 \u0111\xe3 ch\u1ecdn (l\xf4 tr\u01b0\u1ee3t), ph\xed c\u01b0\u1ee3c 10k"),
        o(n, "LOTTERY_SELECT_REBETS", "C\u01b0\u1ee3c l\u1ea1i to\xe0n b\u1ed9 th\xf4ng tin \u0111\u1eb7t c\u1ee7a b\u1ea1n phi\xean ch\u01a1i tr\u01b0\u1edbc"),
        o(n, "LOTTERY_FIRST_BETS_NOT_SELECT", "Phi\xean tr\u01b0\u1edbc b\u1ea1n ch\u01b0a c\u01b0\u1ee3c g\xec"),
        o(n, "LOTTERY_BETS_NOT_FORMAT", "S\u1ed1 l\u01b0\u1ee3ng s\u1ed1 kh\xf4ng \u0111\xfang v\u1edbi ki\u1ec3u c\u01b0\u1ee3c"),
        o(n, "LOTTERY_NOT_CHANGE_BET", "Vui l\xf2ng \u0111\u1eb7t c\u01b0\u1ee3c song ho\u1eb7c \u0111\u1eb7t c\u01b0\u1ee3c l\u1ea1i"),
        o(n, "LOTTERY_NOT_START", "V\xf2ng quay m\u1edbi ch\u01b0a \u0111\u01b0\u1ee3c b\u1eaft \u0111\u1ea7u"),
        o(n, "LOTTERY_SELECT_TYPE", "Vui l\xf2ng ch\u1ecdn ki\u1ec3u c\u01b0\u1ee3c"),
        o(n, "LOTTERY_BET_DE", "<b>\u0110\u1ec1</b>: {0} - ({1})"),
        o(n, "LOTTERY_BET_LO", "<b>L\xf4</b>: {0} - ({1})"),
        o(n, "LOTTERY_BET_XIEN_2", "<b>Xi\xean 2</b>: {0} - ({1})"),
        o(n, "LOTTERY_BET_XIEN_3", "<b>Xi\xean 3</b>: {0} - ({1})"),
        o(n, "LOTTERY_BET_XIEN_4", "<b>Xi\xean 4</b>: {0} - ({1})"),
        o(n, "LOTTERY_BET_CHAN", "<b>Ch\u1eb5n</b>: ({0})"),
        o(n, "LOTTERY_BET_LE", "<b>L\u1ebb</b>: ({0})"),
        o(n, "LOTTERY_BET_DAU", "<b>\u0110\u1ea7u</b>: {0} - ({1})"),
        o(n, "LOTTERY_BET_DUOI", "<b>\u0110u\xf4i</b>: {0} - ({1})"),
        o(n, "LOTTERY_BET_DO", "<b>\u0110\u1ecf</b>: ({0})"),
        o(n, "LOTTERY_BET_TRANG", "<b>Tr\u1eafng</b>: ({0})"),
        o(n, "LOTTERY_BET_HU", "<b>H\u0169</b>: {0} - ({1})"),
        o(n, "LOTTERY_BET_DE_2", "<b>\u0110\u1ec1</b>: {0} - ({1})"),
        o(n, "LOTTERY_BET_HU_2", "<b>H\u0169</b>: {0} - ({1})"),
        o(n, "LOTTERY_CHAT", " <color = #FCC63C>Ch\xfac m\u1eebng t\xe0i kho\u1ea3n {0} \u0111\xe3 th\u1eafng {1} ({2})</color>"),
        n);
        e.exports = c,
        cc._RF.pop()
    }
    , {}],
    MienBac_dauduoi: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "83b23eeLdtMUbFVBt1RFVz6", "MienBac_dauduoi");
        var n = t("Helper")
          , o = t("BrowserUtil");
        cc.Class({
            extends: cc.Component,
            properties: {
                node_select: cc.Node,
                item_select: cc.Prefab,
                soCuoc: cc.Label,
                soDiem: cc.Label,
                tongTien: cc.Label,
                inputSoDiem: cc.EditBox,
                max: 10,
                countSelect: 0,
                giaDiem: 22e3,
                diemToiDa: 1e6,
                game: ""
            },
            onLoad: function() {
                for (var t = [], e = 0; e < 10; e++) {
                    var i = cc.instantiate(this.item_select);
                    (i = i.getComponent("XoSo_select_item")).init(this),
                    i.text.string = n.addZero10(e),
                    this.node_select.addChild(i.node),
                    t[e] = i
                }
                this.node_select = t,
                t = null
            },
            onEnable: function() {
                cc.sys.isBrowser && o.inputAddEvent(this.inputSoDiem, "input", this.onUpdateDiem.bind(this))
            },
            onDisable: function() {
                cc.sys.isBrowser && o.inputRemoveEvent(this.inputSoDiem, "input", this.onUpdateDiem.bind(this))
            },
            refresh: function() {
                var t = "";
                this.node_select.forEach(function(e) {
                    e.select && (t += e.text.string + ", ")
                }),
                this.soCuoc.string = t,
                this.updateTien()
            },
            refreshH: function(t) {
                !0 === t.select ? this.countSelect++ : this.countSelect--,
                this.countSelect > this.max && (t.onChanger(),
                this.countSelect = this.max,
                cc.RedT.inGame.addNotice("1 V\xe9 c\u01b0\u1ee3c t\u1ed1i \u0111a " + this.max + " S\u1ed1...")),
                this.countSelect < 0 && (this.countSelect = 0),
                this.refresh()
            },
            onChangerDiem: function() {
                var t = n.numberWithCommas(n.getOnlyNumberInString(this.inputSoDiem.string));
                this.inputSoDiem.string = "0" == t ? "" : t
            },
            onUpdateDiem: function(t) {
                var e = n.numberWithCommas(n.getOnlyNumberInString(t.target.value));
                e = "0" === e ? "" : e,
                1 * n.getOnlyNumberInString(e) > this.diemToiDa && (e = n.numberWithCommas(this.diemToiDa),
                cc.RedT.inGame.addNotice("T\u1ed1i \u0111a " + e + " \u0111i\u1ec3m cho m\u1ed7i V\xe9.")),
                t.target.value = e,
                this.soDiem.string = e || "0",
                this.inputSoDiem.string = e,
                this.updateTien()
            },
            updateTien: function() {
                var t = 1 * n.getOnlyNumberInString(this.soDiem.string);
                this.tongTien.string = n.numberWithCommas(t * this.giaDiem * this.countSelect)
            },
            onClickHuy: function() {
                this.soCuoc.string = "",
                this.soDiem.string = "0",
                this.tongTien.string = "0",
                this.inputSoDiem.string = "",
                this.countSelect = 0,
                this.node_select.forEach(function(t) {
                    t.select && t.onChanger()
                })
            },
            onClickCuoc: function() {
                if (n.isEmpty(this.soCuoc.string))
                    cc.RedT.inGame.addNotice("Vui l\xf2ng ch\u1ecdn s\u1ed1 mu\u1ed1n c\u01b0\u1ee3c..");
                else if ("0" === this.soDiem.string)
                    cc.RedT.inGame.addNotice("Vui l\xf2ng nh\u1eadp \u0111i\u1ec3m c\u01b0\u1ee3c..");
                else {
                    var t = {};
                    t[this.game] = {
                        so: this.soCuoc.string,
                        diem: n.getOnlyNumberInString(this.soDiem.string)
                    },
                    cc.RedT.send({
                        g: {
                            xs: {
                                mb: t
                            }
                        }
                    })
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil",
        Helper: "Helper"
    }],
    MienBac_lo2so: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "1c435paInNIALLfQ5bJgz3H", "MienBac_lo2so");
        var n = t("Helper")
          , o = t("BrowserUtil");
        cc.Class({
            extends: cc.Component,
            properties: {
                node_select: cc.Node,
                item_select: cc.Prefab,
                soCuoc: cc.Label,
                soDiem: cc.Label,
                tongTien: cc.Label,
                inputSoDiem: cc.EditBox,
                max: 10,
                countSelect: 0,
                giaDiem: 22e3,
                diemToiDa: 1e6,
                game: ""
            },
            onLoad: function() {
                for (var t = [], e = 0; e < 100; e++) {
                    var i = cc.instantiate(this.item_select);
                    (i = i.getComponent("XoSo_select_item")).init(this),
                    i.text.string = n.addZero10(e),
                    this.node_select.addChild(i.node),
                    t[e] = i
                }
                this.node_select = t,
                t = null
            },
            onEnable: function() {
                cc.sys.isBrowser && o.inputAddEvent(this.inputSoDiem, "input", this.onUpdateDiem.bind(this))
            },
            onDisable: function() {
                cc.sys.isBrowser && o.inputRemoveEvent(this.inputSoDiem, "input", this.onUpdateDiem.bind(this))
            },
            refresh: function() {
                var t = "";
                this.node_select.forEach(function(e) {
                    e.select && (t += e.text.string + ", ")
                }),
                this.soCuoc.string = t,
                this.updateTien()
            },
            refreshH: function(t) {
                !0 === t.select ? this.countSelect++ : this.countSelect--,
                this.countSelect > this.max && (t.onChanger(),
                this.countSelect = this.max,
                cc.RedT.inGame.addNotice("1 V\xe9 c\u01b0\u1ee3c t\u1ed1i \u0111a " + this.max + " S\u1ed1...")),
                this.countSelect < 0 && (this.countSelect = 0),
                this.refresh()
            },
            onChangerDiem: function() {
                var t = n.numberWithCommas(n.getOnlyNumberInString(this.inputSoDiem.string));
                this.inputSoDiem.string = "0" == t ? "" : t
            },
            onUpdateDiem: function(t) {
                var e = n.numberWithCommas(n.getOnlyNumberInString(t.target.value));
                e = "0" === e ? "" : e,
                1 * n.getOnlyNumberInString(e) > this.diemToiDa && (e = n.numberWithCommas(this.diemToiDa),
                cc.RedT.inGame.addNotice("T\u1ed1i \u0111a " + e + " \u0111i\u1ec3m cho m\u1ed7i V\xe9.")),
                t.target.value = e,
                this.soDiem.string = e || "0",
                this.inputSoDiem.string = e,
                this.updateTien()
            },
            updateTien: function() {
                var t = 1 * n.getOnlyNumberInString(this.soDiem.string);
                this.tongTien.string = n.numberWithCommas(t * this.giaDiem * this.countSelect)
            },
            onClickHuy: function() {
                this.soCuoc.string = "",
                this.soDiem.string = "0",
                this.tongTien.string = "0",
                this.inputSoDiem.string = "",
                this.countSelect = 0,
                this.node_select.forEach(function(t) {
                    t.select && t.onChanger()
                })
            },
            onClickCuoc: function() {
                if (n.isEmpty(this.soCuoc.string))
                    cc.RedT.inGame.addNotice("Vui l\xf2ng ch\u1ecdn s\u1ed1 mu\u1ed1n c\u01b0\u1ee3c..");
                else if ("0" === this.soDiem.string)
                    cc.RedT.inGame.addNotice("Vui l\xf2ng nh\u1eadp \u0111i\u1ec3m c\u01b0\u1ee3c..");
                else {
                    var t = {};
                    t[this.game] = {
                        so: this.soCuoc.string,
                        diem: n.getOnlyNumberInString(this.soDiem.string)
                    },
                    cc.RedT.send({
                        g: {
                            xs: {
                                mb: t
                            }
                        }
                    })
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil",
        Helper: "Helper"
    }],
    MienBac_lo3so: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "fe72b1SkeFD94urjeOCVDYz", "MienBac_lo3so");
        var n = t("Helper")
          , o = t("BrowserUtil");
        cc.Class({
            extends: cc.Component,
            properties: {
                head_select: cc.Node,
                node_select: cc.Node,
                item_select: cc.Prefab,
                soCuoc: cc.Label,
                soDiem: cc.Label,
                tongTien: cc.Label,
                inputSoDiem: cc.EditBox,
                max: 8,
                countSelect: 0,
                giaDiem: 22e3,
                diemToiDa: 1e6,
                game: "",
                head: "100"
            },
            onLoad: function() {
                for (var t = [], e = 0; e < 100; e++) {
                    var i = cc.instantiate(this.item_select);
                    (i = i.getComponent("XoSo_select_item")).init(this),
                    i.text.string = n.numberPad(e, 3),
                    this.node_select.addChild(i.node),
                    t[e] = i
                }
                this.node_select = t,
                t = null
            },
            onEnable: function() {
                cc.sys.isBrowser && o.inputAddEvent(this.inputSoDiem, "input", this.onUpdateDiem.bind(this))
            },
            onDisable: function() {
                cc.sys.isBrowser && o.inputRemoveEvent(this.inputSoDiem, "input", this.onUpdateDiem.bind(this))
            },
            onSelectH: function(t) {
                var e = this
                  , i = t.target.name
                  , o = i >> 0;
                this.head = i,
                this.head_select.children.forEach(function(t) {
                    t.name === i ? (t.pauseSystemEvents(),
                    t.opacity = 255) : (t.resumeSystemEvents(),
                    t.opacity = 99)
                });
                for (var c = 0; c < 100; c++)
                    this.node_select[c].text.string = n.numberPad(c + o, 3);
                e.node_select.forEach(function(t) {
                    t.selectOff()
                }),
                this.head_select.children.forEach(function(t) {
                    void 0 !== t.data && t.data.length > 0 && t.data.forEach(function(t) {
                        e.node_select.forEach(function(e) {
                            e.text.string === t && e.selectOn()
                        })
                    })
                })
            },
            refresh: function() {
                var t = this
                  , e = []
                  , i = "";
                this.node_select.forEach(function(t) {
                    t.select && e.push(t.text.string)
                }),
                this.head_select.children.forEach(function(n) {
                    n.name === t.head && (n.data = e),
                    void 0 !== n.data && n.data.length > 0 && (i += n.data.join(", ") + ", ")
                }),
                this.soCuoc.string = i,
                this.updateTien()
            },
            refreshH: function(t) {
                !0 === t.select ? this.countSelect++ : this.countSelect--,
                this.countSelect > this.max && (t.onChanger(),
                this.countSelect = this.max,
                cc.RedT.inGame.addNotice("1 V\xe9 c\u01b0\u1ee3c t\u1ed1i \u0111a " + this.max + " S\u1ed1...")),
                this.countSelect < 0 && (this.countSelect = 0),
                this.refresh()
            },
            onChangerDiem: function() {
                var t = n.numberWithCommas(n.getOnlyNumberInString(this.inputSoDiem.string));
                this.inputSoDiem.string = "0" == t ? "" : t
            },
            onUpdateDiem: function(t) {
                var e = n.numberWithCommas(n.getOnlyNumberInString(t.target.value));
                e = "0" === e ? "" : e,
                1 * n.getOnlyNumberInString(e) > this.diemToiDa && (e = n.numberWithCommas(this.diemToiDa),
                cc.RedT.inGame.addNotice("T\u1ed1i \u0111a " + e + " \u0111i\u1ec3m cho m\u1ed7i V\xe9.")),
                t.target.value = e,
                this.soDiem.string = e || "0",
                this.inputSoDiem.string = e,
                this.updateTien()
            },
            updateTien: function() {
                var t = 1 * n.getOnlyNumberInString(this.soDiem.string);
                this.tongTien.string = n.numberWithCommas(t * this.giaDiem * this.countSelect)
            },
            onClickHuy: function() {
                this.soCuoc.string = "",
                this.soDiem.string = "0",
                this.tongTien.string = "0",
                this.inputSoDiem.string = "",
                this.countSelect = 0,
                this.node_select.forEach(function(t) {
                    t.select && t.onChanger()
                }),
                this.head_select.children.forEach(function(t) {
                    t.data = []
                })
            },
            onClickCuoc: function() {
                if (n.isEmpty(this.soCuoc.string))
                    cc.RedT.inGame.addNotice("Vui l\xf2ng ch\u1ecdn s\u1ed1 mu\u1ed1n c\u01b0\u1ee3c..");
                else if ("0" === this.soDiem.string)
                    cc.RedT.inGame.addNotice("Vui l\xf2ng nh\u1eadp \u0111i\u1ec3m c\u01b0\u1ee3c..");
                else {
                    var t = {};
                    t[this.game] = {
                        so: this.soCuoc.string,
                        diem: n.getOnlyNumberInString(this.soDiem.string)
                    },
                    cc.RedT.send({
                        g: {
                            xs: {
                                mb: t
                            }
                        }
                    })
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil",
        Helper: "Helper"
    }],
    MienBac_lo4so: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "85972+toCZJjYJwO7NbxkcA", "MienBac_lo4so");
        var n = t("Helper")
          , o = t("BrowserUtil");
        cc.Class({
            extends: cc.Component,
            properties: {
                inputSo: cc.EditBox,
                soCuoc: cc.Label,
                soDiem: cc.Label,
                tongTien: cc.Label,
                inputSoDiem: cc.EditBox,
                max: 10,
                countSelect: 0,
                giaDiem: 22e3,
                diemToiDa: 1e6,
                game: ""
            },
            onEnable: function() {
                cc.sys.isBrowser && o.inputAddEvent(this.inputSoDiem, "input", this.onUpdateDiem.bind(this))
            },
            onDisable: function() {
                cc.sys.isBrowser && o.inputRemoveEvent(this.inputSoDiem, "input", this.onUpdateDiem.bind(this))
            },
            onClickChon: function() {
                var t = this.inputSo.string;
                if (t.length > 4) {
                    var e = [];
                    t.split(" ").forEach(function(t) {
                        t.split(",").forEach(function(t) {
                            t.split(".").forEach(function(t) {
                                t.split(";").forEach(function(t) {
                                    var i = t.split(":");
                                    e = e.concat(i)
                                })
                            })
                        })
                    }),
                    e.forEach(function(t, i) {
                        e[i] = t.trim()
                    });
                    var i = {};
                    (e = e.filter(function(t) {
                        return 4 === t.length && 4 === (t = n.getOnlyNumberInString(t)).length
                    })).forEach(function(t) {
                        void 0 === i[t] && (i[t] = t)
                    }),
                    (e = Object.values(i)).length > 0 ? e.length > this.max ? cc.RedT.inGame.addNotice("1 V\xe9 c\u01b0\u1ee3c t\u1ed1i \u0111a " + this.max + " s\u1ed1 ch\u1ecdn...") : (this.countSelect = e.length,
                    this.soCuoc.string = e.join(", "),
                    this.updateTien()) : (this.countSelect = 0,
                    cc.RedT.inGame.addNotice("S\u1ed1 ch\u1ecdn kh\xf4ng h\u1ee3p l\u1ec7."))
                } else
                    4 === (t = n.getOnlyNumberInString(t)).length ? (this.countSelect = 1,
                    this.soCuoc.string = t,
                    this.updateTien()) : (this.countSelect = 0,
                    cc.RedT.inGame.addNotice("S\u1ed1 ch\u1ecdn kh\xf4ng h\u1ee3p l\u1ec7."))
            },
            onChangerDiem: function() {
                var t = n.numberWithCommas(n.getOnlyNumberInString(this.inputSoDiem.string));
                this.inputSoDiem.string = "0" == t ? "" : t
            },
            onUpdateDiem: function(t) {
                var e = n.numberWithCommas(n.getOnlyNumberInString(t.target.value));
                e = "0" === e ? "" : e,
                1 * n.getOnlyNumberInString(e) > this.diemToiDa && (e = n.numberWithCommas(this.diemToiDa),
                cc.RedT.inGame.addNotice("T\u1ed1i \u0111a " + e + " \u0111i\u1ec3m cho m\u1ed7i V\xe9.")),
                t.target.value = e,
                this.soDiem.string = e || "0",
                this.inputSoDiem.string = e,
                this.updateTien()
            },
            updateTien: function() {
                var t = 1 * n.getOnlyNumberInString(this.soDiem.string);
                this.tongTien.string = n.numberWithCommas(t * this.giaDiem * this.countSelect)
            },
            onClickHuy: function() {
                this.soCuoc.string = "",
                this.soDiem.string = "0",
                this.tongTien.string = "0",
                this.inputSoDiem.string = "",
                this.countSelect = 0
            },
            onClickCuoc: function() {
                if (n.isEmpty(this.soCuoc.string))
                    cc.RedT.inGame.addNotice("Vui l\xf2ng ch\u1ecdn s\u1ed1 mu\u1ed1n c\u01b0\u1ee3c..");
                else if ("0" === this.soDiem.string)
                    cc.RedT.inGame.addNotice("Vui l\xf2ng nh\u1eadp \u0111i\u1ec3m c\u01b0\u1ee3c..");
                else {
                    var t = {};
                    t[this.game] = {
                        so: this.soCuoc.string,
                        diem: n.getOnlyNumberInString(this.soDiem.string)
                    },
                    cc.RedT.send({
                        g: {
                            xs: {
                                mb: t
                            }
                        }
                    })
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil",
        Helper: "Helper"
    }],
    MienBac_lo: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "95087LD6J9FGZx4jUkDcl1V", "MienBac_lo"),
        cc.Class({
            extends: cc.Component,
            properties: {
                header: cc.Node,
                body: cc.Node
            },
            onLoad: function() {},
            onSelectType: function(t) {
                var e = t.target.name;
                this.header.children.forEach(function(t) {
                    t.name === e ? (t.pauseSystemEvents(),
                    t.opacity = 255) : (t.resumeSystemEvents(),
                    t.opacity = 99)
                }),
                this.body.children.forEach(function(t) {
                    t.name === e ? t.active = !0 : t.active = !1
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    MienBac_loxien: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "939fbzgGFhCHInPOAJ2Nm9g", "MienBac_loxien");
        var n = t("Helper")
          , o = t("BrowserUtil");
        cc.Class({
            extends: cc.Component,
            properties: {
                node_select: cc.Node,
                item_select: cc.Prefab,
                soCuoc: cc.Label,
                soDiem: cc.Label,
                tongTien: cc.Label,
                inputSoDiem: cc.EditBox,
                max: 10,
                countSelect: 0,
                giaDiem: 22e3,
                diemToiDa: 1e6,
                game: ""
            },
            onLoad: function() {
                for (var t = [], e = 0; e < 100; e++) {
                    var i = cc.instantiate(this.item_select);
                    (i = i.getComponent("XoSo_select_item")).init(this),
                    i.text.string = n.addZero10(e),
                    this.node_select.addChild(i.node),
                    t[e] = i
                }
                this.node_select = t,
                t = null
            },
            onEnable: function() {
                cc.sys.isBrowser && o.inputAddEvent(this.inputSoDiem, "input", this.onUpdateDiem.bind(this))
            },
            onDisable: function() {
                cc.sys.isBrowser && o.inputRemoveEvent(this.inputSoDiem, "input", this.onUpdateDiem.bind(this))
            },
            refresh: function() {
                var t = "";
                this.node_select.forEach(function(e) {
                    e.select && (t += e.text.string + ", ")
                }),
                this.soCuoc.string = t,
                this.updateTien()
            },
            refreshH: function(t) {
                !0 === t.select ? this.countSelect++ : this.countSelect--,
                this.countSelect > this.max && (t.onChanger(),
                this.countSelect = this.max,
                cc.RedT.inGame.addNotice("1 V\xe9 c\u01b0\u1ee3c t\u1ed1i \u0111a " + this.max + " S\u1ed1...")),
                this.countSelect < 0 && (this.countSelect = 0),
                this.refresh()
            },
            onChangerDiem: function() {
                var t = n.numberWithCommas(n.getOnlyNumberInString(this.inputSoDiem.string));
                this.inputSoDiem.string = "0" == t ? "" : t
            },
            onUpdateDiem: function(t) {
                var e = n.numberWithCommas(n.getOnlyNumberInString(t.target.value));
                e = "0" === e ? "" : e,
                1 * n.getOnlyNumberInString(e) > this.diemToiDa && (e = n.numberWithCommas(this.diemToiDa),
                cc.RedT.inGame.addNotice("T\u1ed1i \u0111a " + e + " \u0111i\u1ec3m cho m\u1ed7i V\xe9.")),
                t.target.value = e,
                this.soDiem.string = e || "0",
                this.inputSoDiem.string = e,
                this.updateTien()
            },
            updateTien: function() {
                var t = 0;
                this.countSelect === this.max && (t = 1);
                var e = 1 * n.getOnlyNumberInString(this.soDiem.string);
                this.tongTien.string = n.numberWithCommas(e * this.giaDiem * t)
            },
            onClickHuy: function() {
                this.soCuoc.string = "",
                this.soDiem.string = "0",
                this.tongTien.string = "0",
                this.inputSoDiem.string = "",
                this.countSelect = 0,
                this.node_select.forEach(function(t) {
                    t.select && t.onChanger()
                })
            },
            onClickCuoc: function() {
                if (this.countSelect !== this.max)
                    cc.RedT.inGame.addNotice("Vui l\xf2ng ch\u1ecdn \u0111\u1ee7 " + this.max + " s\u1ed1 mu\u1ed1n c\u01b0\u1ee3c...");
                else if ("0" === this.soDiem.string)
                    cc.RedT.inGame.addNotice("Vui l\xf2ng nh\u1eadp \u0111i\u1ec3m c\u01b0\u1ee3c..");
                else {
                    var t = {};
                    t[this.game] = {
                        so: this.soCuoc.string,
                        diem: n.getOnlyNumberInString(this.soDiem.string)
                    },
                    cc.RedT.send({
                        g: {
                            xs: {
                                mb: t
                            }
                        }
                    })
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil",
        Helper: "Helper"
    }],
    Mini3Cay_history: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "1e051nPL7JFfrzu7siEPQ+Q", "Mini3Cay_history");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                page: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0
            },
            init: function(t) {
                this.RedT = t
            },
            onLoad: function() {
                var t = this;
                this.page = cc.instantiate(this.page),
                this.page.y = -307,
                this.node.addChild(this.page),
                this.page = this.page.getComponent("Pagination"),
                Promise.all(this.content.children.map(function(t) {
                    return t.getComponent("Mini3Cay_ihistory")
                })).then(function(e) {
                    t.content = e
                }),
                this.page.init(this)
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                cc.RedT.send({
                    g: {
                        mini3cay: {
                            logs: {
                                red: this.red,
                                page: t
                            }
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                this.page.onSet(t.page, t.kmess, t.total),
                Promise.all(this.content.map(function(e, i) {
                    var o = t.data[i];
                    void 0 !== o ? (e.node.active = !0,
                    e.time.string = n.getStringDateByTime(o.time),
                    e.phien.string = o.id,
                    e.cuoc.string = n.numberWithCommas(o.bet),
                    e.win.string = n.numberWithCommas(o.win),
                    Promise.all(e.kq.map(function(t, e) {
                        t.spriteFrame = cc.RedT.util.card.getCard(o.kq[e].card, o.kq[e].type)
                    }))) : e.node.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    Mini3Cay_ihistory: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "d4891jUjldP9bIGVML2EuXS", "Mini3Cay_ihistory"),
        cc.Class({
            extends: cc.Component,
            properties: {
                time: cc.Label,
                phien: cc.Label,
                cuoc: cc.Label,
                kq: {
                    default: [],
                    type: cc.Sprite
                },
                win: cc.Label
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Mini3Cay_reel: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "8defcIVF4lEJoEox0Os2KJA", "Mini3Cay_reel"),
        cc.Class({
            extends: cc.Component,
            init: function(t) {
                var e = this;
                this.RedT = t,
                this.card = [];
                var i = this;
                Promise.all([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function(t, e) {
                    var n = cc.instantiate(i.RedT.cardf);
                    return n.width = 73.45,
                    n.height = 104.65,
                    i.node.addChild(n),
                    n.getComponent(cc.Sprite)
                })).then(function(t) {
                    e.card = t,
                    e.random(!0)
                })
            },
            random: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                Promise.all(this.card.map(function(e, i) {
                    t ? e.spriteFrame = cc.RedT.util.card.random(9) : 0 !== i && 20 !== i && (e.spriteFrame = cc.RedT.util.card.random(9))
                }))
            },
            spin: function(t) {
                this.node.stopAllActions();
                var e = cc.moveTo(this.RedT.speed(), cc.v2(this.node.x, -(this.node.height - 104.65))).easing(cc.easeInOut(3))
                  , i = cc.callFunc(function() {
                    this.card[20].spriteFrame = this.card[0].spriteFrame,
                    this.node.y = 0
                }, this);
                if (2 === t) {
                    cc.callFunc(function() {
                        this.RedT.isAuto ? this.RedT.sendSpin() : this.RedT.offSpin()
                    }, this);
                    var n = cc.callFunc(function() {
                        this.RedT.hieuUng()
                    }, this);
                    this.node.runAction(cc.sequence(cc.delayTime(.1 * t), e, i, cc.delayTime(.1), n))
                } else
                    this.node.runAction(cc.sequence(cc.delayTime(.1 * t), e, i))
            },
            stop: function() {
                this.node.stopAllActions(),
                void 0 !== this.card && void 0 !== this.card[20] && void 0 !== this.card[20].spriteFrame && (this.card[20].spriteFrame = this.card[0].spriteFrame),
                this.node.y = 0
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Mini3Cay_top: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "2c6da1F/j5K0YtLq6E2eBDu", "Mini3Cay_top");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                item: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0
            },
            init: function(t) {
                this.RedT = t
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                cc.RedT.send({
                    g: {
                        mini3cay: {
                            tops: this.red
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                this.content.removeAllChildren();
                var e = this;
                Promise.all(t.map(function(t, i) {
                    var o = cc.instantiate(e.item)
                      , c = o.getComponent("Mini3Cay_ihistory");
                    c.time.string = n.getStringDateByTime(t.time),
                    c.phien.string = t.name,
                    c.cuoc.string = n.numberWithCommas(t.bet),
                    c.win.string = n.numberWithCommas(t.win),
                    Promise.all(c.kq.map(function(e, i) {
                        e.spriteFrame = cc.RedT.util.card.getCard(t.kq[i].card, t.kq[i].type)
                    })),
                    o.children[0].active = !(1 & i),
                    e.content.addChild(o)
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    Mini3Cay: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "13a60eyHkJAyIXkNqrmxLrv", "Mini3Cay");
        var n = t("Helper")
          , o = t("Mini3Cay_reel");
        cc.Class({
            extends: cc.Component,
            properties: {
                main: {
                    default: null,
                    type: cc.Node
                },
                background: cc.Node,
                buttonCoint: cc.Node,
                buttonSpin: cc.Node,
                buttonAuto: cc.Node,
                buttonSpeed: cc.Node,
                buttonStop: cc.Node,
                buttonAutoDot: cc.Node,
                buttonSpeedDot: cc.Node,
                reels: {
                    default: [],
                    type: o
                },
                bet: cc.Node,
                nodeRed: cc.Node,
                nodeXu: cc.Node,
                notice: cc.Node,
                prefabNotice: cc.Prefab,
                cardf: cc.Prefab,
                cuoc: "",
                hu: cc.Label,
                isAuto: !1,
                isSpeed: !1,
                isSpin: !1,
                red: !0,
                btnScaleIn: {
                    default: null,
                    type: cc.Node
                },
                btnScaleOut: {
                    default: null,
                    type: cc.Node
                }
            },
            init: function(t) {
                this.RedT = t,
                this.LichSu = t.Dialog.Mini3Cay_history,
                this.Top = t.Dialog.Mini3Cay_top,
                cc.RedT.setting.mini3cay = cc.RedT.setting.mini3cay || {},
                "true" == localStorage.getItem("mini3cay") && (this.node.active = !0),
                void 0 !== cc.RedT.setting.mini3cay.position && (this.node.position = cc.RedT.setting.mini3cay.position),
                void 0 !== cc.RedT.setting.mini3cay.bet && cc.RedT.setting.mini3cay.bet != this.cuoc && this.intChangerBet(),
                void 0 !== cc.RedT.setting.mini3cay.red && this.red != cc.RedT.setting.mini3cay.red && this.changerCoint(),
                void 0 !== cc.RedT.setting.mini3cay.isSpeed && this.isSpeed != cc.RedT.setting.mini3cay.isSpeed && this.onClickSpeed(),
                void 0 !== cc.RedT.setting.mini3cay.isAuto && this.isAuto != cc.RedT.setting.mini3cay.isAuto && this.onClickAuto()
            },
            onLoad: function() {
                this.ttOffset = null;
                var t = this;
                Promise.all(this.reels.map(function(e) {
                    e.init(t)
                }))
            },
            onEnable: function() {
                this.onGetHu(),
                this.background.on(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.background.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.background.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.background.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.background.on(cc.Node.EventType.MOUSE_ENTER, this.setTop, this)
            },
            onDisable: function() {
                this.background.off(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.background.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.background.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.background.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.background.off(cc.Node.EventType.MOUSE_ENTER, this.setTop, this),
                this.onCloseGame()
            },
            eventStart: function(t) {
                this.setTop(),
                this.ttOffset = cc.v2(t.touch.getLocationX() - this.node.position.x, t.touch.getLocationY() - this.node.position.y)
            },
            eventMove: function(t) {
                this.node.position = cc.v2(t.touch.getLocationX() - this.ttOffset.x, t.touch.getLocationY() - this.ttOffset.y)
            },
            eventEnd: function() {
                cc.RedT.setting.mini3cay.position = this.node.position
            },
            openGame: function() {
                this.playClick(),
                cc.RedT.IS_LOGIN ? (this.node.active = !0,
                localStorage.setItem("mini3cay", !0),
                this.setTop()) : cc.RedT.inGame.dialog.showSignIn()
            },
            closeGame: function() {
                cc.RedT.audio.playUnClick(),
                this.node.active = !1,
                localStorage.setItem("mini3cay", !1)
            },
            setTop: function() {
                this.node.parent.insertChild(this.node)
            },
            changerCoint: function() {
                this.red = cc.RedT.setting.mini3cay.red = !this.red,
                this.nodeRed.active = !this.nodeRed.active,
                this.nodeXu.active = !this.nodeXu.active,
                this.onGetHu()
            },
            intChangerBet: function() {
                var t = this;
                Promise.all(this.bet.children.map(function(e) {
                    e.name == cc.RedT.setting.mini3cay.bet ? (t.cuoc = e.name,
                    e.children[0].active = !0,
                    e.pauseSystemEvents()) : (e.children[0].active = !1,
                    e.resumeSystemEvents())
                }))
            },
            changerBet: function(t, e) {
                this.cuoc = cc.RedT.setting.mini3cay.bet = e;
                var i = t.target;
                Promise.all(this.bet.children.map(function(t) {
                    t == i ? (t.children[0].active = !0,
                    t.pauseSystemEvents()) : (t.children[0].active = !1,
                    t.resumeSystemEvents())
                })),
                this.onGetHu()
            },
            playClick: function() {
                cc.RedT.audio.playClick()
            },
            onClickSpeed: function() {
                this.isSpeed = cc.RedT.setting.mini3cay.isSpeed = !this.isSpeed,
                this.buttonSpeedDot.active = !this.buttonSpeedDot.active,
                this.buttonSpeed.color = this.isSpeed ? cc.Color.WHITE : this.buttonSpeed.color.fromHEX("#A0A0A0")
            },
            onClickAuto: function() {
                this.isAuto = cc.RedT.setting.mini3cay.isAuto = !this.isAuto,
                this.buttonAutoDot.active = !this.buttonAutoDot.active,
                this.buttonAuto.color = this.isAuto ? cc.Color.WHITE : this.buttonAuto.color.fromHEX("#A0A0A0"),
                this.buttonStop.active = !!this.isSpin && !!this.isAuto
            },
            onClickStop: function() {
                this.onClickAuto(),
                this.buttonStop.active = !1
            },
            onClickSpin: function() {
                this.isSpin || (this.isSpin = !0,
                this.onSpin(),
                this.sendSpin())
            },
            sendSpin: function() {
                cc.RedT.send({
                    g: {
                        mini3cay: {
                            spin: {
                                cuoc: this.cuoc,
                                red: this.red
                            }
                        }
                    }
                })
            },
            random: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                Promise.all(this.reels.map(function(e) {
                    e.random(t)
                }))
            },
            autoSpin: function() {
                this.random(),
                Promise.all(this.reels.map(function(t, e) {
                    t.spin(e)
                }))
            },
            onSpin: function() {
                this.buttonSpin.pauseSystemEvents(),
                this.buttonCoint.pauseSystemEvents(),
                Promise.all(this.bet.children.map(function(t) {
                    t.pauseSystemEvents()
                }))
            },
            offSpin: function() {
                this.isSpin = this.buttonStop.active = !1,
                this.buttonSpin.resumeSystemEvents(),
                this.buttonCoint.resumeSystemEvents(),
                Promise.all(this.bet.children.map(function(t) {
                    t.children[0].active || t.resumeSystemEvents()
                }))
            },
            addNotice: function(t) {
                var e = cc.instantiate(this.prefabNotice);
                e.getComponent("mini_warning").text.string = t,
                this.notice.addChild(e)
            },
            onCloseGame: function() {
                this.isSpin = !1,
                Promise.all(this.reels.map(function(t) {
                    t.stop()
                })),
                this.offSpin(),
                void 0 !== this.timeOut && clearTimeout(this.timeOut)
            },
            onData: function(t) {
                var e = this;
                void 0 !== t.status && (1 === t.status ? (this.buttonStop.active = !!this.isAuto,
                void 0 !== t.win && t.win > 0 ? (this.win = t.win,
                this.winC = t.code,
                this.winT = t.text) : this.win = 0,
                Promise.all(t.card.map(function(t, i) {
                    e.reels[i].card[0].spriteFrame = cc.RedT.util.card.getCard(t.card, t.type)
                })),
                this.autoSpin()) : this.offSpin()),
                void 0 !== t.logs && this.LichSu.onData(t.logs),
                void 0 !== t.tops && this.Top.onData(t.tops),
                void 0 !== t.notice && this.addNotice(t.notice)
            },
            hieuUng: function() {
                if (void 0 !== this.win && this.win > 0)
                    if (6 == this.winC) {
                        this.winC = 0,
                        1 == this.isAuto && this.onClickStop();
                        var t = cc.instantiate(this.RedT.PrefabNoHu)
                          , e = (t = t.getComponent(cc.Animation)).node.children[6].getComponent(cc.Label);
                        this.RedT.nodeEfect.addChild(t.node),
                        t.on("play", function() {
                            var i = cc.callFunc(function() {
                                cc.RedT.audio.playEf("winHu"),
                                n.numberTo(e, 0, this.win, 1e3, !0),
                                this.win = 0
                            }, this);
                            t.node.runAction(cc.sequence(cc.delayTime(.25), i))
                        }, this),
                        t.on("finished", function() {
                            t.node.destroy(),
                            this.hieuUng()
                        }, this),
                        t.play()
                    } else if (5 == this.winC || 4 == this.winC) {
                        var i = cc.instantiate(this.RedT.prefabBigWin);
                        (i = i.getComponent(cc.Animation)).on("finished", function() {
                            i.node.destroy(),
                            this.hieuUng()
                        }, this),
                        i.node.bet = this.win,
                        i.node.red = this.red,
                        i.node.position = cc.v2(0, 70),
                        this.notice.addChild(i.node),
                        this.win = 0 == this.winC
                    } else {
                        var o = new cc.Node;
                        o.addComponent(cc.Label),
                        (o = o.getComponent(cc.Label)).string = "+" + n.numberWithCommas(this.win),
                        o.font = cc.RedT.util.fontCong,
                        o.lineHeight = 130,
                        o.fontSize = 23,
                        o.node.position = cc.v2(0, 37),
                        this.notice.addChild(o.node),
                        o.node.runAction(cc.sequence(cc.moveTo(this.isSpeed ? 2 : 3.5, cc.v2(0, 100)), cc.callFunc(function() {
                            o.node.destroy(),
                            this.hieuUng()
                        }, this))),
                        this.addNotice(this.winT),
                        this.win = 0
                    }
                else
                    this.isAuto ? this.timeOut = setTimeout(function() {
                        this.sendSpin()
                    }
                    .bind(this), this.isSpeed ? 250 : 1e3) : this.offSpin()
            },
            onGetHu: function() {
                var t = this;
                if (this.node.active && void 0 !== cc.RedT.setting.topHu.data) {
                    var e = this;
                    Promise.all(cc.RedT.setting.topHu.data.mini3cay.filter(function(t) {
                        return t.type == e.cuoc && t.red == e.red
                    })).then(function(e) {
                        var i = n.getOnlyNumberInString(t.hu.string)
                          , o = e[0].bet;
                        i - o != 0 && n.numberTo(t.hu, i, o, 2e3, !0)
                    })
                }
            },
            speed: function() {
                return this.isSpeed ? 1.2 : 2.5
            },
            zoom: function(t) {
                1.2 == this.main.getScale() ? (this.main.setScale(.8, .8),
                this.btnScaleIn.active = !0,
                this.btnScaleOut.active = !1) : (this.main.setScale(1.2, 1.2),
                this.btnScaleIn.active = !1,
                this.btnScaleOut.active = !0)
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper",
        Mini3Cay_reel: "Mini3Cay_reel"
    }],
    MiniDialog: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "3492eBS2vhBuLOdLyde5NgL", "MiniDialog");
        var n = t("TaiXiuLichSuPhien")
          , o = t("TaiXiuLichSu")
          , c = t("MiniPoker_LichSu")
          , s = t("MiniPoker_Top")
          , a = t("BigBabol_LichSu")
          , h = t("BigBabol_Top")
          , r = t("BauCua_LichSu")
          , u = t("BauCua_top")
          , d = t("Mini3Cay_history")
          , l = t("Mini3Cay_top")
          , p = t("CaoThap_history")
          , g = t("CaoThap_top")
          , m = t("AngryBird_history")
          , f = t("AngryBird_top")
          , v = t("dialogHuongDan")
          , T = t("MegaJ_history")
          , b = t("MegaJ_top")
          , _ = t("DEvent");
        cc.Class({
            extends: cc.Component,
            properties: {
                TaiXiuLichSuPhien: n,
                TaiXiuLichSu: o,
                MiniPoker_LichSu: c,
                MiniPoker_Top: s,
                BigBabol_LichSu: a,
                BigBabol_Top: h,
                BauCua_LichSu: r,
                BauCua_top: u,
                Mini3Cay_history: d,
                Mini3Cay_top: l,
                CaoThap_history: p,
                CaoThap_top: g,
                AngryBird_history: m,
                AngryBird_top: f,
                MegaJ_history: T,
                MegaJ_top: b,
                Event: _,
                HuongDan: v
            },
            init: function(t) {
                this.objShow = null,
                this.objTmp = null,
                this.TaiXiuLichSuPhien.init(t.TaiXiu),
                this.BauCua_LichSu.init(t.BauCua),
                this.HuongDan.init()
            },
            onClickBack: function() {
                cc.RedT.audio.playUnClick(),
                this.onBack()
            },
            onBack: function() {
                null != this.objShow ? void 0 == this.objShow.previous || null == this.objShow.previous ? (this.objShow.active = !1,
                this.node.active = !1,
                this.objShow = null) : (this.objTmp = this.objShow,
                this.objShow = this.objShow.previous,
                this.objTmp.previous = null,
                this.objTmp.active = !1,
                this.objShow.active = !0,
                this.objTmp = null) : this.node.active = !1
            },
            onClosePrevious: function(t) {
                void 0 !== t.previous && null !== t.previous && (this.onClosePrevious(t.previous),
                t.previous = null),
                t.active = !1
            },
            onCloseDialog: function() {
                null != this.objShow ? void 0 == this.objShow.previous || null == this.objShow.previous ? (this.objShow.active = this.node.active = !1,
                this.objShow = null) : (this.onClosePrevious(this.objShow.previous),
                this.objShow.active = this.node.active = !1,
                this.objShow.previous = null,
                this.objShow = null) : this.node.active = !1
            },
            showEvent: function() {
                this.node.active = this.Event.node.active = !0,
                this.objShow = this.Event.node
            },
            showTaiXiuLichSuPhien: function() {
                this.node.active = this.TaiXiuLichSuPhien.node.active = !0,
                this.objShow = this.TaiXiuLichSuPhien.node
            },
            showTaiXiuLichSu: function() {
                this.node.active = this.TaiXiuLichSu.node.active = !0,
                this.objShow = this.TaiXiuLichSu.node
            },
            showMiniPokerLichSu: function() {
                this.node.active = this.MiniPoker_LichSu.node.active = !0,
                this.objShow = this.MiniPoker_LichSu.node
            },
            showMiniPokerTop: function() {
                this.node.active = this.MiniPoker_Top.node.active = !0,
                this.objShow = this.MiniPoker_Top.node
            },
            showBigBabolLichSu: function() {
                this.node.active = this.BigBabol_LichSu.node.active = !0,
                this.objShow = this.BigBabol_LichSu.node
            },
            showBigBabolTop: function() {
                this.node.active = this.BigBabol_Top.node.active = !0,
                this.objShow = this.BigBabol_Top.node
            },
            showBauCuaLichSu: function() {
                this.node.active = this.BauCua_LichSu.node.active = !0,
                this.objShow = this.BauCua_LichSu.node
            },
            showBauCuaTop: function() {
                this.node.active = this.BauCua_top.node.active = !0,
                this.objShow = this.BauCua_top.node
            },
            showMini3Cay_history: function() {
                this.node.active = this.Mini3Cay_history.node.active = !0,
                this.objShow = this.Mini3Cay_history.node
            },
            showMini3Cay_top: function() {
                this.node.active = this.Mini3Cay_top.node.active = !0,
                this.objShow = this.Mini3Cay_top.node
            },
            showCaoThap_history: function() {
                this.node.active = this.CaoThap_history.node.active = !0,
                this.objShow = this.CaoThap_history.node
            },
            showCaoThap_top: function() {
                this.node.active = this.CaoThap_top.node.active = !0,
                this.objShow = this.CaoThap_top.node
            },
            showAngryBird_history: function() {
                this.node.active = this.AngryBird_history.node.active = !0,
                this.objShow = this.AngryBird_history.node
            },
            showAngryBird_top: function() {
                this.node.active = this.AngryBird_top.node.active = !0,
                this.objShow = this.AngryBird_top.node
            },
            showMegaJ_history: function() {
                this.node.active = this.MegaJ_history.node.active = !0,
                this.objShow = this.MegaJ_history.node
            },
            showMegaJ_top: function() {
                this.node.active = this.MegaJ_top.node.active = !0,
                this.objShow = this.MegaJ_top.node
            },
            showHuongDan: function(t, e) {
                this.node.active = this.HuongDan.node.active = !0,
                this.objShow = this.HuongDan.node,
                this.HuongDan.select(e)
            }
        }),
        cc._RF.pop()
    }
    , {
        AngryBird_history: "AngryBird_history",
        AngryBird_top: "AngryBird_top",
        BauCua_LichSu: "BauCua_LichSu",
        BauCua_top: "BauCua_top",
        BigBabol_LichSu: "BigBabol_LichSu",
        BigBabol_Top: "BigBabol_Top",
        CaoThap_history: "CaoThap_history",
        CaoThap_top: "CaoThap_top",
        DEvent: "DEvent",
        MegaJ_history: "MegaJ_history",
        MegaJ_top: "MegaJ_top",
        Mini3Cay_history: "Mini3Cay_history",
        Mini3Cay_top: "Mini3Cay_top",
        MiniPoker_LichSu: "MiniPoker_LichSu",
        MiniPoker_Top: "MiniPoker_Top",
        TaiXiuLichSu: "TaiXiuLichSu",
        TaiXiuLichSuPhien: "TaiXiuLichSuPhien",
        dialogHuongDan: "dialogHuongDan"
    }],
    MiniPanel: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "ccccah+dOlLRKuFndZetoIH", "MiniPanel");
        var n = t("TaiXiu")
          , o = t("MiniPoker")
          , c = t("BigBabol")
          , s = t("BauCua")
          , a = t("Mini3Cay")
          , h = t("CaoThap")
          , r = t("AngryBirds")
          , u = t("popupTopHu")
          , d = t("MiniDialog")
          , l = t("MegaJackpot");
        cc.Class({
            extends: cc.Component,
            properties: {
                minigame: {
                    default: null,
                    type: cc.Node
                },
                Dialog: d,
                TaiXiu: n,
                MiniPoker: o,
                BigBabol: c,
                BauCua: s,
                BaCay: a,
                CaoThap: h,
                AngryBirds: r,
                MegaJackpot: l,
                TopHu: u,
                bgLight: cc.Node,
                spriteLight: cc.Sprite,
                onLight: cc.SpriteFrame,
                offLight: cc.SpriteFrame,
                nodeEfect: cc.Node,
                PrefabNoHu: cc.Prefab,
                prefabBigWin: cc.Prefab,
                light: !0
            },
            onLoad: function() {
                void 0 === cc.RedT.setting.light && (cc.RedT.setting.light = !0);
                var t = this;
                this.node._onPreDestroy = function() {
                    t.onDestroy()
                }
                ,
                this.Dialog.init(this),
                this.TaiXiu.init(this),
                this.MiniPoker.init(this),
                this.BigBabol.init(this),
                this.BauCua.init(this),
                this.BaCay.init(this),
                this.CaoThap.init(this),
                this.AngryBirds.init(this),
                this.MegaJackpot.init(this),
                this.TopHu.init(this),
                cc.RedT.IS_LOGIN && this.signIn(),
                cc.RedT.setting.light != this.light && this.LightChanger()
            },
            LightChanger: function() {
                this.light = cc.RedT.setting.light = !this.light,
                this.light ? (this.bgLight.active = !1,
                this.spriteLight.spriteFrame = this.offLight) : (this.bgLight.active = !0,
                this.spriteLight.spriteFrame = this.onLight)
            },
            signIn: function() {
                this.minigame.active = !0,
                this.TaiXiu.signIn()
            },
            newGame: function() {
                this.minigame.active = !1,
                this.Dialog.onCloseDialog(),
                this.TaiXiu.newGame(),
                this.BauCua.newGame(),
                this.CaoThap.newGame()
            },
            onData: function(t) {
                void 0 !== t.poker && this.MiniPoker.onData(t.poker),
                void 0 !== t.big_babol && this.BigBabol.onData(t.big_babol),
                void 0 !== t.baucua && this.BauCua.onData(t.baucua),
                void 0 !== t.bacay && this.BaCay.onData(t.bacay),
                void 0 !== t.caothap && this.CaoThap.onData(t.caothap),
                void 0 !== t.arb && this.AngryBirds.onData(t.arb),
                void 0 !== t.megaj && this.MegaJackpot.onData(t.megaj)
            },
            onDestroy: function() {
                clearInterval(this.TaiXiu.TX_Main.timeInterval),
                clearInterval(this.BauCua.timeInterval),
                void 0 !== this.CaoThap.timeInterval && clearInterval(this.CaoThap.timeInterval)
            },
            playClick: function() {
                cc.RedT.audio.playClick()
            },
            playUnClick: function() {
                cc.RedT.audio.playUnClick()
            }
        }),
        cc._RF.pop()
    }
    , {
        AngryBirds: "AngryBirds",
        BauCua: "BauCua",
        BigBabol: "BigBabol",
        CaoThap: "CaoThap",
        MegaJackpot: "MegaJackpot",
        Mini3Cay: "Mini3Cay",
        MiniDialog: "MiniDialog",
        MiniPoker: "MiniPoker",
        TaiXiu: "TaiXiu",
        popupTopHu: "popupTopHu"
    }],
    MiniPoker_LichSu: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "a12b3BIWQdNzY/UVnylxq9K", "MiniPoker_LichSu");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                page: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0,
                isLoad: !1
            },
            onLoad: function() {
                var t = this
                  , e = cc.instantiate(this.page);
                e.y = -275,
                this.node.addChild(e),
                this.page = e.getComponent("Pagination"),
                Promise.all(this.content.children.map(function(t) {
                    return Promise.all(t.children.map(function(t, e) {
                        return 3 === e ? Promise.all(t.children.map(function(t) {
                            return t.getComponent(cc.Sprite)
                        })) : t.getComponent(cc.Label)
                    })).then(function(t) {
                        return t
                    })
                })).then(function(e) {
                    t.content2 = e
                }),
                this.page.init(this)
            },
            onEnable: function() {
                !this.isLoad && this.get_data()
            },
            onDisable: function() {},
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                this.isLoad = !0,
                cc.RedT.send({
                    g: {
                        mini_poker: {
                            log: {
                                red: this.red,
                                page: t
                            }
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                var e = this;
                this.page.onSet(t.page, t.kmess, t.total),
                Promise.all(this.content2.map(function(i, o) {
                    var c = t.data[o];
                    void 0 !== c ? (e.content.children[o].active = !0,
                    i[0].string = n.getStringDateByTime(c.time),
                    i[1].string = c.id,
                    i[2].string = n.numberWithCommas(c.bet),
                    Promise.all(i[3].map(function(t, e) {
                        t.spriteFrame = cc.RedT.util.card.getCard(c.kq[e].card, c.kq[e].type)
                    })),
                    i[4].string = n.numberWithCommas(c.win)) : e.content.children[o].active = !1
                }))
            },
            reset: function() {
                this.isLoad = !1,
                Promise.all(this.content.children.map(function(t) {
                    t.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    MiniPoker_Top: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "f83d50BGs1JUopU47jiZRpB", "MiniPoker_Top");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                item: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                cc.RedT.send({
                    g: {
                        mini_poker: {
                            top: this.red
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                this.content.removeAllChildren();
                var e = this;
                Promise.all(t.map(function(t, i) {
                    var o = cc.instantiate(e.item)
                      , c = o.getComponent("VQRed_history_item");
                    c.time.string = n.getStringDateByTime(t.time),
                    c.phien.string = t.name,
                    c.cuoc.string = n.numberWithCommas(t.bet),
                    c.line.string = n.numberWithCommas(t.win),
                    c.win.string = 9 == t.type ? "N\u1ed5 H\u0169" : "Th\u1eafng l\u1edbn",
                    o.children[0].active = !(1 & i),
                    e.content.addChild(o)
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    MiniPoker_reel: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "9effbtyV3ZM8bEtkGsDTJkG", "MiniPoker_reel"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            init: function(t) {
                var e = this;
                this.RedT = t,
                this.card = [];
                var i = this;
                Promise.all([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function(t, e) {
                    var n = cc.instantiate(i.RedT.cardf);
                    return i.node.addChild(n),
                    n = n.getComponent(cc.Sprite)
                })).then(function(t) {
                    e.card = t,
                    e.random(!0)
                })
            },
            random: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                Promise.all(this.card.map(function(e, i) {
                    t ? e.spriteFrame = cc.RedT.util.card.random() : 0 !== i && 25 !== i && (e.spriteFrame = cc.RedT.util.card.random())
                }))
            },
            spin: function(t) {
                this.node.stopAllActions();
                var e = t
                  , i = cc.moveTo(this.RedT.speed(), cc.v2(this.node.x, -(this.node.height - 93.3))).easing(cc.easeInOut(3))
                  , n = cc.callFunc(function() {
                    this.card[25].spriteFrame = this.card[0].spriteFrame,
                    this.node.y = 0
                }, this);
                if (4 === e) {
                    var o = cc.callFunc(function() {
                        this.RedT.hieuUng()
                    }, this);
                    this.node.runAction(cc.sequence(cc.delayTime(.1 * e), i, n, o))
                } else
                    this.node.runAction(cc.sequence(cc.delayTime(.1 * e), i, n))
            },
            stop: function() {
                this.node.stopAllActions(),
                void 0 !== this.card && void 0 !== this.card[25] && void 0 !== this.card[25].spriteFrame && (this.card[25].spriteFrame = this.card[0].spriteFrame),
                this.node.y = 0
            }
        }),
        cc._RF.pop()
    }
    , {}],
    MiniPoker: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "ef909PNu9FNDqFtdNzEnAw5", "MiniPoker");
        var n = t("Helper")
          , o = t("MiniPoker_reel");
        cc.Class({
            extends: cc.Component,
            properties: {
                main: {
                    default: null,
                    type: cc.Node
                },
                background: cc.Node,
                buttonSpin: cc.Node,
                buttonAuto: cc.Node,
                buttonSpeed: cc.Node,
                buttonStop: cc.Node,
                buttonAutoDot: cc.Node,
                buttonSpeedDot: cc.Node,
                reels: {
                    default: [],
                    type: o
                },
                buttonCoint: cc.Node,
                nodeRed: {
                    default: null,
                    type: cc.Node
                },
                font: {
                    default: null,
                    type: cc.BitmapFont
                },
                nodeXu: {
                    default: null,
                    type: cc.Node
                },
                bet: {
                    default: null,
                    type: cc.Node
                },
                notice: {
                    default: null,
                    type: cc.Node
                },
                card: cc.Prefab,
                cardf: cc.Prefab,
                prefabNotice: {
                    default: null,
                    type: cc.Prefab
                },
                phien: cc.Label,
                hu: cc.Label,
                cuoc: "",
                isAuto: !1,
                isSpeed: !1,
                isSpin: !1,
                red: !0,
                btnScaleIn: {
                    default: null,
                    type: cc.Node
                },
                btnScaleOut: {
                    default: null,
                    type: cc.Node
                }
            },
            init: function(t) {
                this.RedT = t,
                this.Top = t.Dialog.MiniPoker_Top,
                this.LichSu = t.Dialog.MiniPoker_LichSu,
                cc.RedT.setting.minipoker = cc.RedT.setting.minipoker || {},
                this.card.data.getComponent("Card").config(),
                "true" == localStorage.getItem("minipoker") && (this.node.active = !0),
                void 0 === cc.RedT.util.fontEffect && (cc.RedT.util.fontEffect = this.font),
                void 0 !== cc.RedT.setting.minipoker.position && (this.node.position = cc.RedT.setting.minipoker.position),
                void 0 !== cc.RedT.setting.minipoker.bet && cc.RedT.setting.minipoker.bet != this.cuoc && this.intChangerBet(),
                void 0 !== cc.RedT.setting.minipoker.red && this.red != cc.RedT.setting.minipoker.red && this.changerCoint(),
                void 0 !== cc.RedT.setting.minipoker.isSpeed && this.isSpeed != cc.RedT.setting.minipoker.isSpeed && this.onClickSpeed(),
                void 0 !== cc.RedT.setting.minipoker.isAuto && this.isAuto != cc.RedT.setting.minipoker.isAuto && this.onClickAuto()
            },
            onLoad: function() {
                var t = this;
                this.data = null,
                this.ttOffset = null,
                Promise.all(this.reels.map(function(e) {
                    e.init(t)
                }))
            },
            onEnable: function() {
                this.onGetHu(),
                this.background.on(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.background.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.background.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.background.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.background.on(cc.Node.EventType.MOUSE_ENTER, this.setTop, this)
            },
            onDisable: function() {
                this.background.off(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.background.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.background.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.background.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.background.off(cc.Node.EventType.MOUSE_ENTER, this.setTop, this),
                this.onCloseGame()
            },
            eventStart: function(t) {
                this.setTop(),
                this.ttOffset = cc.v2(t.touch.getLocationX() - this.node.position.x, t.touch.getLocationY() - this.node.position.y)
            },
            eventMove: function(t) {
                this.node.position = cc.v2(t.touch.getLocationX() - this.ttOffset.x, t.touch.getLocationY() - this.ttOffset.y)
            },
            eventEnd: function() {
                cc.RedT.setting.minipoker.position = this.node.position
            },
            openGame: function() {
                cc.RedT.audio.playClick(),
                cc.RedT.IS_LOGIN ? (this.node.active = !0,
                localStorage.setItem("minipoker", !0),
                this.setTop()) : cc.RedT.inGame.dialog.showSignIn()
            },
            closeGame: function() {
                cc.RedT.audio.playUnClick(),
                this.node.active = !1,
                localStorage.setItem("minipoker", !1)
            },
            random: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                Promise.all(this.reels.map(function(e) {
                    e.random(t)
                }))
            },
            autoSpin: function() {
                this.random(),
                Promise.all(this.reels.map(function(t, e) {
                    t.spin(e)
                }))
            },
            onSpin: function() {
                this.buttonSpin.pauseSystemEvents(),
                this.buttonCoint.pauseSystemEvents(),
                Promise.all(this.bet.children.map(function(t) {
                    t.pauseSystemEvents()
                }))
            },
            offSpin: function() {
                this.isSpin = !1,
                this.buttonStop.active = !!this.isSpin && !!this.isAuto,
                this.buttonSpin.resumeSystemEvents(),
                this.buttonCoint.resumeSystemEvents(),
                Promise.all(this.bet.children.map(function(t) {
                    t.children[0].active || t.resumeSystemEvents()
                }))
            },
            spin: function(t) {
                this.isSpin || (this.isSpin = !0,
                this.onSpin(),
                this.onGetSpin())
            },
            onClickSpeed: function() {
                this.isSpeed = cc.RedT.setting.minipoker.isSpeed = !this.isSpeed,
                this.buttonSpeedDot.active = !this.buttonSpeedDot.active,
                this.buttonSpeed.color = this.isSpeed ? cc.Color.WHITE : cc.color(206, 206, 206)
            },
            onClickAuto: function() {
                this.isAuto = cc.RedT.setting.minipoker.isAuto = !this.isAuto,
                this.buttonAutoDot.active = !this.buttonAutoDot.active,
                this.buttonAuto.color = this.isAuto ? cc.Color.WHITE : cc.color(206, 206, 206),
                this.buttonStop.active = !!this.isSpin && !!this.isAuto
            },
            onClickStop: function() {
                this.onClickAuto(),
                this.buttonStop.active = !1
            },
            changerCoint: function() {
                this.red = cc.RedT.setting.minipoker.red = !this.red,
                this.nodeRed.active = !this.nodeRed.active,
                this.nodeXu.active = !this.nodeXu.active,
                this.onGetHu()
            },
            intChangerBet: function() {
                var t = this;
                Promise.all(this.bet.children.map(function(e) {
                    e.name == cc.RedT.setting.minipoker.bet ? (t.cuoc = e.name,
                    e.children[0].active = !0,
                    e.pauseSystemEvents()) : (e.children[0].active = !1,
                    e.resumeSystemEvents())
                }))
            },
            changerBet: function(t, e) {
                this.cuoc = cc.RedT.setting.minipoker.bet = e;
                var i = t.target;
                Promise.all(this.bet.children.map(function(t) {
                    t == i ? (t.children[0].active = !0,
                    t.pauseSystemEvents()) : (t.children[0].active = !1,
                    t.resumeSystemEvents())
                })),
                this.onGetHu()
            },
            speed: function() {
                return this.isSpeed ? 1.2 : 2.5
            },
            onData: function(t) {
                var e = this;
                void 0 !== t.status && (1 === t.status ? (this.buttonStop.active = !!this.isAuto,
                this.win = t.win,
                this.winT = t.text,
                this.winC = t.code,
                this.winTg = void 0 !== t.thuong ? t.thuong : 0,
                Promise.all(t.card.map(function(t, i) {
                    e.reels[i].card[0].spriteFrame = cc.RedT.util.card.getCard(t.card, t.type)
                })),
                this.autoSpin()) : this.offSpin()),
                void 0 !== t.phien && (this.phien.string = "#" + t.phien),
                void 0 !== t.log && this.LichSu.onData(t.log),
                void 0 !== t.top && this.Top.onData(t.top),
                void 0 !== t.notice && this.addNotice(t.notice)
            },
            addNotice: function(t) {
                var e = cc.instantiate(this.prefabNotice);
                e.getComponent("mini_warning").text.string = t,
                this.notice.addChild(e)
            },
            setTop: function() {
                this.node.parent.insertChild(this.node)
            },
            hieuUng: function() {
                if (this.winC && this.winC > 0) {
                    if (9 == this.winC) {
                        1 == this.isAuto && this.onClickStop();
                        var t = cc.instantiate(this.RedT.PrefabNoHu)
                          , e = (t = t.getComponent(cc.Animation)).node.children[6].getComponent(cc.Label);
                        this.RedT.nodeEfect.addChild(t.node),
                        t.on("play", function() {
                            var i = cc.callFunc(function() {
                                cc.RedT.audio.playEf("winHu"),
                                n.numberTo(e, 0, this.win, 1e3, !0)
                            }, this);
                            t.node.runAction(cc.sequence(cc.delayTime(.25), i))
                        }, this),
                        t.on("finished", function() {
                            t.node.destroy(),
                            this.hieuUng()
                        }, this),
                        t.play()
                    } else if (8 == this.winC || 7 == this.winC) {
                        var i = cc.instantiate(this.RedT.prefabBigWin);
                        (i = i.getComponent(cc.Animation)).on("finished", function() {
                            i.node.destroy(),
                            this.hieuUng()
                        }, this),
                        i.node.bet = this.win,
                        i.node.red = this.red,
                        i.node.position = cc.v2(0, 80),
                        this.notice.addChild(i.node),
                        this.win = 0
                    } else {
                        var o = new cc.Node;
                        o.addComponent(cc.Label),
                        (o = o.getComponent(cc.Label)).string = "+" + n.numberWithCommas(this.win),
                        o.font = this.red ? cc.RedT.util.fontCong : cc.RedT.util.fontTru,
                        o.lineHeight = 130,
                        o.fontSize = 20,
                        this.notice.addChild(o.node),
                        o.node.runAction(cc.sequence(cc.moveTo(this.isSpeed ? 2 : 3.5, cc.v2(0, 140)), cc.callFunc(function() {
                            o.node.destroy(),
                            this.hieuUng()
                        }, this))),
                        this.addNotice(this.winT)
                    }
                    if (this.winTg > 0) {
                        var c = new cc.Node;
                        c.addComponent(cc.Label),
                        (c = c.getComponent(cc.Label)).string = n.numberWithCommas(this.winTg),
                        c.font = cc.RedT.util.fontCong,
                        c.lineHeight = 130,
                        c.fontSize = 23,
                        c.node.position = cc.v2(0, -28),
                        this.notice.addChild(c.node),
                        c.node.runAction(cc.sequence(cc.moveTo(this.isSpeed ? 2 : 3.5, cc.v2(0, 112)), cc.callFunc(function() {
                            this.node.destroy()
                        }, c)))
                    }
                    this.winC = 0
                } else
                    this.isAuto ? this.timeOut = setTimeout(function() {
                        this.onGetSpin()
                    }
                    .bind(this), this.isSpeed ? 250 : 1e3) : this.offSpin()
            },
            onGetHu: function() {
                var t = this;
                if (this.node.active && void 0 !== cc.RedT.setting.topHu.data) {
                    var e = this;
                    Promise.all(cc.RedT.setting.topHu.data.mini_poker.filter(function(t) {
                        return t.type == e.cuoc && t.red == e.red
                    })).then(function(e) {
                        var i = n.getOnlyNumberInString(t.hu.string)
                          , o = e[0].bet;
                        i - o != 0 && n.numberTo(t.hu, i, o, 2e3, !0)
                    })
                }
            },
            onGetSpin: function() {
                cc.RedT.send({
                    g: {
                        mini_poker: {
                            spin: {
                                cuoc: this.cuoc,
                                red: this.red
                            }
                        }
                    }
                })
            },
            onCloseGame: function() {
                this.isSpin = !1,
                Promise.all(this.reels.map(function(t) {
                    t.stop()
                })),
                this.offSpin(),
                void 0 !== this.timeOut && clearTimeout(this.timeOut)
            },
            zoom: function(t) {
                1.2 == this.main.getScale() ? (this.main.setScale(.8, .8),
                this.btnScaleIn.active = !0,
                this.btnScaleOut.active = !1) : (this.main.setScale(1.2, 1.2),
                this.btnScaleIn.active = !1,
                this.btnScaleOut.active = !0)
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper",
        MiniPoker_reel: "MiniPoker_reel"
    }],
    MomoController: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "63feciFoIZFGaTpyzCfnnar", "MomoController");
        t("BrowserUtil");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                phoneLabel: cc.Label,
                nameLabel: cc.Label,
                syntaxLabel: cc.Label,
                descLabel: cc.Label,
                noteLabel: cc.Label,
                inputTien: cc.EditBox
            },
            start: function() {},
            init: function() {
                this.isLoading = !0
            },
            onEnable: function() {
                this.isLoading && cc.RedT.send({
                    shop: {
                        info_momo: !0
                    }
                })
            },
            onData: function(t) {
                var e = t.phoneNum
                  , i = t.code
                  , n = t.amount;
                this.phoneLabel.string = e,
                this.nameLabel.string = i,
                this.syntaxLabel.string = n
            },
            onCoppySyntax: function() {
                var t = document.createElement("textarea");
                t.value = this.nameLabel.string,
                document.body.appendChild(t),
                t.select(),
                document.execCommand("copy"),
                document.body.removeChild(t)
            },
            onCoppyPhoneNum: function() {
                var t = document.createElement("textarea");
                t.value = this.phoneLabel.string,
                document.body.appendChild(t),
                t.select(),
                document.execCommand("copy"),
                document.body.removeChild(t)
            },
            onClickNap: function() {
                if (n.getOnlyNumberInString(this.inputTien.string) >> 0 < 1e4)
                    cc.RedT.inGame.notice.show({
                        title: "N\u1ea0P MEC",
                        text: "N\u1ea1p t\u1ed1i thi\u1ec3u 10.000, t\u1ed1i \u0111a 1.000.000.000"
                    });
                else {
                    var t = {
                        money: n.getOnlyNumberInString(this.inputTien.string)
                    };
                    t = {
                        shop: {
                            bank: {
                                momo: t
                            }
                        }
                    },
                    cc.RedT.send(t)
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil",
        Helper: "Helper"
    }],
    NapRed_itemOne: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "3bf1do9lYJMTYqfuawCCr7t", "NapRed_itemOne"),
        cc.Class({
            extends: cc.Component,
            properties: {
                background: {
                    default: null,
                    type: cc.Node
                },
                text: {
                    default: null,
                    type: cc.Label
                }
            },
            init: function(t, e, i) {
                this.controll = t,
                this.local_arg = e,
                this.local_text = i
            },
            onClickChanger: function() {
                cc.RedT.audio.playClick();
                var t = this;
                this.controll[this.local_text].string = this.text.string,
                Promise.all(this.controll[this.local_arg].map(function(e) {
                    e == t ? e.onSelect() : e.unSelect()
                })),
                this.controll.backT && this.controll.backT(this.data)
            },
            onSelect: function() {
                this.background.active = !0,
                this.node.pauseSystemEvents()
            },
            unSelect: function() {
                this.background.active = !1,
                this.node.resumeSystemEvents()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    NapRed_itemTT: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "692acli1tBGMJGB7Xh9IFJc", "NapRed_itemTT"),
        cc.Class({
            extends: cc.Component,
            properties: {
                menhgia: {
                    default: null,
                    type: cc.Label
                },
                red: {
                    default: null,
                    type: cc.Label
                }
            },
            init: function(t, e) {
                this.menhgia.string = t,
                this.red.string = e
            }
        }),
        cc._RF.pop()
    }
    , {}],
    NapRed: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "41eebjrhpBCuYVy5G92Kdy9", "NapRed");
        var n = t("BrowserUtil")
          , o = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                header: {
                    default: null,
                    type: cc.Node
                },
                body: {
                    default: null,
                    type: cc.Node
                },
                NhanhMang: {
                    default: null,
                    type: cc.Label
                },
                MenhGia: {
                    default: null,
                    type: cc.Label
                },
                SoThe: {
                    default: null,
                    type: cc.EditBox
                },
                SoSeri: {
                    default: null,
                    type: cc.EditBox
                },
                moreNhaMang: {
                    default: null,
                    type: cc.Node
                },
                moreMenhGia: {
                    default: null,
                    type: cc.Node
                },
                scrollviewNhaMang: {
                    default: null,
                    type: cc.ScrollView
                },
                scrollviewMenhGia: {
                    default: null,
                    type: cc.ScrollView
                },
                bangGia: {
                    default: null,
                    type: cc.ScrollView
                },
                prefabLeft: {
                    default: null,
                    type: cc.Prefab
                },
                prefabRight: {
                    default: null,
                    type: cc.Prefab
                },
                captcha: {
                    default: null,
                    type: cc.EditBox
                },
                capchaSprite: cc.Sprite
            },
            init: function() {
                var t = this
                  , e = this;
                this.isLoaded = !1,
                this.editboxs = [this.SoThe, this.SoSeri, this.captcha],
                this.keyHandle = function(t) {
                    return t.keyCode === cc.macro.KEY.tab ? (e.isTop() && e.changeNextFocusEditBox(),
                    t.preventDefault && t.preventDefault(),
                    !1) : t.keyCode === cc.macro.KEY.enter ? (n.focusGame(),
                    e.onNapClick(),
                    t.preventDefault && t.preventDefault(),
                    !1) : void 0
                }
                ,
                Promise.all(this.header.children.map(function(t) {
                    return t.getComponent("itemContentMenu")
                })).then(function(e) {
                    t.header = e
                })
            },
            onEnable: function() {
                cc.sys.isBrowser && this.addEvent(),
                this.reCaptcha(),
                this.isLoaded || cc.RedT.send({
                    shop: {
                        info_nap: !0
                    }
                })
            },
            onDisable: function() {
                this.moreNhaMang.active = this.moreMenhGia.active = !1,
                cc.sys.isBrowser && this.removeEvent(),
                this.clean()
            },
            addEvent: function() {
                for (var t in cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).addEventListener("keydown", this.keyHandle, !1)
            },
            removeEvent: function() {
                for (var t in this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).removeEventListener("keydown", this.keyHandle, !1);
                cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
            },
            onKeyDown: function(t) {
                switch (t.keyCode) {
                case cc.macro.KEY.tab:
                    this.isTop() && this.changeNextFocusEditBox();
                    break;
                case cc.macro.KEY.enter:
                    this.isTop() && this.onNapClick()
                }
            },
            changeNextFocusEditBox: function() {
                for (var t = !1, e = 0, i = this.editboxs.length; e < i; e++)
                    if (n.checkEditBoxFocus(this.editboxs[e])) {
                        n.focusEditBox(this.editboxs[e]),
                        t = !0;
                        break
                    }
                !t && 0 < this.editboxs.length && n.focusEditBox(this.editboxs[0])
            },
            isTop: function() {
                return !(this.moreNhaMang.active || this.moreMenhGia.active || cc.RedT.inGame.notice.node.active || cc.RedT.inGame.loading.active)
            },
            clean: function() {
                this.SoThe.string = this.SoSeri.string = this.captcha.string = ""
            },
            onNapClick: function() {
                this.SoThe.string.length < 11 || this.SoSeri.string.length < 11 ? cc.RedT.inGame.notice.show({
                    title: "N\u1ea0P MEC",
                    text: "Th\xf4ng Tin kh\xf4ng h\u1ee3p l\u1ec7..."
                }) : o.isEmpty(this.captcha.string) ? cc.RedT.inGame.notice.show({
                    title: "N\u1ea0P MEC",
                    text: "Vui l\xf2ng nh\u1eadp ch\xednh x\xe1c m\xe3 x\xe1c nh\u1eadn."
                }) : (cc.RedT.inGame.bgLoading.onData({
                    active: !0,
                    text: "\u0110ang g\u1eedi d\u1eef li\u1ec7u..."
                }),
                cc.RedT.send({
                    shop: {
                        nap_the: {
                            nhamang: this.NhanhMang.string,
                            menhgia: o.getOnlyNumberInString(this.MenhGia.string),
                            mathe: this.SoThe.string,
                            seri: this.SoSeri.string,
                            captcha: this.captcha.string
                        }
                    }
                }))
            },
            onSelectHead: function(t, e) {
                Promise.all(this.header.map(function(t) {
                    t.node.name == e ? t.select() : t.unselect()
                })),
                Promise.all(this.body.children.map(function(t) {
                    t.name == e ? t.active = !0 : t.active = !1
                }))
            },
            toggleMoreNhaMang: function() {
                this.moreNhaMang.active = !this.moreNhaMang.active,
                this.moreMenhGia.active = !1
            },
            toggleMoreMenhGia: function() {
                this.moreMenhGia.active = !this.moreMenhGia.active
            },
            infoSet: function(t, e, i) {
                var n = this
                  , c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                  , s = this;
                t.length > 0 && Promise.all(t.map(function(t, n) {
                    var a = cc.instantiate(s.prefabLeft)
                      , h = a.getComponent("NapRed_itemOne");
                    if (h.init(s, e, i),
                    c)
                        0 == n && (h.background.active = !0,
                        s.NhanhMang.string = t.name),
                        h.text.string = t.name,
                        s.scrollviewNhaMang.content.addChild(a);
                    else {
                        var r = o.numberWithCommas(t.name)
                          , u = o.numberWithCommas(t.values);
                        0 == n && (h.background.active = !0,
                        s.MenhGia.string = r),
                        h.text.string = r,
                        s.scrollviewMenhGia.content.addChild(a);
                        var d = cc.instantiate(s.prefabRight);
                        d.getComponent("NapRed_itemTT").init(r, u),
                        s.bangGia.content.addChild(d)
                    }
                    return h
                })).then(function(t) {
                    n[e] = t
                })
            },
            onData: function(t) {
                void 0 === t.info || this.isLoaded || (this.isLoaded = !0,
                void 0 !== t.info.nhamang && this.infoSet(t.info.nhamang, "nhamangList", "NhanhMang", !0),
                void 0 !== t.info.menhgia && this.infoSet(t.info.menhgia, "menhgiaList", "MenhGia"))
            },
            initCaptcha: function(t) {
                var e = this
                  , i = new Image;
                i.src = t,
                i.width = 150,
                i.height = 50,
                setTimeout(function() {
                    var t = new cc.Texture2D;
                    t.initWithElement(i),
                    t.handleLoadedTexture();
                    var n = new cc.SpriteFrame(t);
                    e.capchaSprite.spriteFrame = n
                }, 10)
            },
            reCaptcha: function() {
                cc.RedT.send({
                    captcha: "chargeCard"
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil",
        Helper: "Helper"
    }],
    NewsContents: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "359e3FxWmpPGarLjvZuJIkS", "NewsContents");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                prefabItem: cc.Prefab
            },
            init: function(t) {
                this.RedT = t
            },
            update: function(t) {
                this.node.position = cc.v2(this.node.position.x - 160 * t, 0),
                -this.node.width > this.node.position.x && this.reset()
            },
            setNews: function() {
                this.node.active = !0,
                this.node.position = cc.v2(this.RedT.node.width + 200, 0)
            },
            reset: function() {
                this.node.removeAllChildren(),
                this.node.active = !1
            },
            onData: function(t) {
                void 0 !== t.a && this.NewsAddArray(t.a),
                void 0 !== t.t && this.NewsAddText(t.t)
            },
            NewsAddArray: function(t) {
                var e = this
                  , i = this;
                Promise.all(t.map(function(t) {
                    var e = cc.instantiate(i.prefabItem);
                    return (e = e.getComponent("NewsItem")).users.string = t.users,
                    e.bet.string = n.numberWithCommas(t.bet),
                    e.game.string = t.game,
                    i.node.addChild(e.node),
                    e
                })).then(function(t) {
                    e.node.active || e.setNews()
                })
            },
            NewsAddText: function(t) {
                var e = cc.instantiate(this.prefabItem);
                e = e.getComponent("NewsItem"),
                t.status && (e.status.node.active = !0,
                1 == t.status ? (e.status.string = "(N\u1ed5 H\u0169)",
                e.win.string = "n\u1ed5 h\u0169") : e.status.string = "(Th\u1eafng L\u1edbn)"),
                e.users.string = t.users,
                e.bet.string = n.numberWithCommas(t.bet),
                e.game.string = t.game,
                this.node.addChild(e.node),
                this.node.active || this.setNews()
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    NewsItem: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "ed1c0NxAXlNI4ktSR1Kq45Q", "NewsItem"),
        cc.Class({
            extends: cc.Component,
            properties: {
                status: cc.Label,
                users: cc.Label,
                win: cc.Label,
                bet: cc.Label,
                game: cc.Label
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Notice: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "55b77gHOPlJAY+OiMpR3w95", "Notice"),
        cc.Class({
            extends: cc.Component,
            properties: {
                nodeButton: {
                    default: null,
                    type: cc.Node
                },
                title: {
                    default: null,
                    type: cc.Label
                },
                text: {
                    default: null,
                    type: cc.Label
                },
                button: {
                    default: null,
                    type: cc.Label
                }
            },
            onDisable: function() {
                this.clean()
            },
            show: function(t) {
                this.node.active = !0,
                void 0 !== t.load && (cc.RedT.inGame.loading.active = !1),
                void 0 !== t.title && (this.title.string = t.title),
                void 0 !== t.text && (this.text.string = t.text),
                void 0 !== t.button ? (this.text.node.y = 8,
                this.type = t.button.type,
                this.button.string = t.button.text,
                this.nodeButton.active = !0) : (this.nodeButton.active = !1,
                this.text.node.y = -14)
            },
            close: function() {
                cc.RedT.audio.playUnClick(),
                this.node.active = !1
            },
            onClickButton: function() {
                switch (cc.RedT.audio.playClick(),
                this.type) {
                case "sign_out":
                    cc.RedT._socket.close(),
                    this.node.active = !1;
                    break;
                case "reg_otp":
                    this.node.active = !1,
                    null != cc.RedT.inGame.dialog.objShow && (cc.RedT.inGame.dialog.profile.node.previous = cc.RedT.inGame.dialog.objShow,
                    cc.RedT.inGame.dialog.objShow.active = !1),
                    cc.RedT.inGame.dialog.showProfile(null, "BaoMat"),
                    cc.RedT.inGame.dialog.profile.BaoMat.onSelectHead(null, "DangKyOTP")
                }
            },
            clean: function() {
                this.title.string = this.text.string = this.button.string = ""
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Pagination_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "7edb4K7i4tECqx8snl3/cVz", "Pagination_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bg: cc.Node,
                bg_select: cc.Node,
                number: cc.Label
            },
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    Pagination: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "a2298FO/xFF7KY+FwgkX4E6", "Pagination"),
        cc.Class({
            extends: cc.Component,
            properties: {
                nodeFirst: cc.Node,
                nodePrevious: cc.Node,
                nodePage1: cc.Node,
                nodePage2: cc.Node,
                nodePage3: cc.Node,
                nodePage4: cc.Node,
                nodePage5: cc.Node,
                nodeNext: cc.Node,
                nodeLast: cc.Node,
                page: 1,
                kmess: 10,
                totall: 0
            },
            init: function(t) {
                this.controll = t,
                this.objSelect = null,
                this.nodePage1 = this.nodePage1.getComponent("Pagination_item"),
                this.nodePage2 = this.nodePage2.getComponent("Pagination_item"),
                this.nodePage3 = this.nodePage3.getComponent("Pagination_item"),
                this.nodePage4 = this.nodePage4.getComponent("Pagination_item"),
                this.nodePage5 = this.nodePage5.getComponent("Pagination_item"),
                this.arrO = [this.nodePage1, this.nodePage2, this.nodePage3, this.nodePage4, this.nodePage5]
            },
            select: function(t) {
                t.number.string = this.page,
                t.number.node.color = cc.Color.BLACK,
                t.bg.active = !1,
                t.bg_select.active = !0,
                this.objSelect = t,
                t.node.pauseSystemEvents()
            },
            unSelect: function(t, e) {
                t.number.string = e,
                t.number.node.color = cc.Color.WHITE,
                t.bg.active = !0,
                t.bg_select.active = !1,
                t.node.page = e,
                t.node.resumeSystemEvents()
            },
            onSet: function(t, e, i) {
                var n = this
                  , o = this;
                this.page = t,
                this.kmess = e,
                this.totall = i,
                this.totalPage = Math.ceil(this.totall / this.kmess),
                this.pageRed = this.totalPage - this.page,
                i > 0 ? (this.node.active = !0,
                Promise.all(this.arrO.map(function(t, e) {
                    return o.totalPage > 4 ? t.node.active = !0 : e < o.totalPage ? t.node.active = !0 : t.node.active = !1,
                    o.page > 2 ? o.nodeFirst.active = !0 : o.nodeFirst.active = !1,
                    o.pageRed > 1 ? o.nodeLast.active = !0 : o.nodeLast.active = !1,
                    o.page > 1 ? o.nodePrevious.active = !0 : o.nodePrevious.active = !1,
                    o.pageRed > 0 ? o.nodeNext.active = !0 : o.nodeNext.active = !1,
                    0 == e && 1 == o.page ? o.select(t) : 1 == e && 2 == o.page ? o.select(t) : 2 == e && (3 == o.page || o.totalPage > 5 && 1 !== o.page && 2 !== o.page && o.totalPage - 2 >= o.page) ? o.select(t) : 3 == e && (4 == o.totalPage && 4 == o.page || o.totalPage > 4 && o.totalPage - 1 == o.page) ? o.select(t) : 4 == e && o.totalPage > 4 && o.page == o.totalPage ? o.select(t) : void 0
                })).then(function(t) {
                    Promise.all(n.arrO.map(function(t, e) {
                        t !== o.objSelect && (0 == e ? "page2" == o.objSelect.node.name ? o.unSelect(t, o.objSelect.number.string - 1) : "page3" == o.objSelect.node.name ? o.unSelect(t, o.objSelect.number.string - 2) : "page4" == o.objSelect.node.name ? o.unSelect(t, o.objSelect.number.string - 3) : "page5" == o.objSelect.node.name && o.unSelect(t, o.objSelect.number.string - 4) : 1 == e ? "page1" == o.objSelect.node.name ? o.unSelect(t, 1 * o.objSelect.number.string + 1) : "page3" == o.objSelect.node.name ? o.unSelect(t, o.objSelect.number.string - 1) : "page4" == o.objSelect.node.name ? o.unSelect(t, o.objSelect.number.string - 2) : "page5" == o.objSelect.node.name && o.unSelect(t, o.objSelect.number.string - 3) : 2 == e ? "page1" == o.objSelect.node.name ? o.unSelect(t, 1 * o.objSelect.number.string + 2) : "page2" == o.objSelect.node.name ? o.unSelect(t, 1 * o.objSelect.number.string + 1) : "page4" == o.objSelect.node.name ? o.unSelect(t, o.objSelect.number.string - 1) : "page5" == o.objSelect.node.name && o.unSelect(t, o.objSelect.number.string - 2) : 3 == e ? "page1" == o.objSelect.node.name ? o.unSelect(t, 1 * o.objSelect.number.string + 3) : "page2" == o.objSelect.node.name ? o.unSelect(t, 1 * o.objSelect.number.string + 2) : "page3" == o.objSelect.node.name ? o.unSelect(t, 1 * o.objSelect.number.string + 1) : "page5" == o.objSelect.node.name && o.unSelect(t, o.objSelect.number.string - 1) : 4 == e && ("page1" == o.objSelect.node.name ? o.unSelect(t, 1 * o.objSelect.number.string + 4) : "page2" == o.objSelect.node.name ? o.unSelect(t, 1 * o.objSelect.number.string + 3) : "page3" == o.objSelect.node.name ? o.unSelect(t, 1 * o.objSelect.number.string + 2) : "page4" == o.objSelect.node.name && o.unSelect(t, 1 * o.objSelect.number.string + 1)))
                    }))
                })) : this.node.active = !1
            },
            onClickFirst: function() {
                this.controll.get_data(),
                cc.RedT.audio.playClick()
            },
            onClickPrevious: function() {
                var t = this.objSelect.number.string - 1;
                t > 0 && this.controll.get_data(t),
                cc.RedT.audio.playClick()
            },
            onClickPage: function(t) {
                this.controll.get_data(t.target.page),
                cc.RedT.audio.playClick()
            },
            onClickNext: function() {
                var t = 1 * this.objSelect.number.string + 1;
                t <= Math.ceil(this.totall / this.kmess) && this.controll.get_data(t),
                cc.RedT.audio.playClick()
            },
            onClickLast: function() {
                this.controll.get_data(Math.ceil(this.totall / this.kmess)),
                cc.RedT.audio.playClick()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    PokerNap: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "24228zvZANA9qgncMTCgU85", "PokerNap");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                touch: cc.Node,
                mask: cc.Node,
                toggle: cc.Toggle,
                labelBet: cc.Label,
                labelMin: cc.Label,
                labelMax: cc.Label,
                min: "",
                max: ""
            },
            init: function(t) {
                this.RedT = t,
                this.betMin = t.bet * this.min,
                this.betMax = t.bet * this.max,
                this.h = this.betMin < 1e6 ? 1e3 : 1e6,
                this.labelMin.string = this.labelBet.string = n.numberWithCommas(this.betMin),
                this.labelMax.string = n.numberWithCommas(this.betMax),
                this.betMin = this.betMin / this.h,
                this.betMax = this.betMax / this.h,
                this.toggle.isChecked = !0
            },
            onEnable: function() {
                this.node.runAction(cc.RedT.inGame.dialog.actionShow),
                this.touch.on(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.touch.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.touch.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.touch.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this)
            },
            onDisable: function() {
                cc.RedT.inGame.dialog.resetSizeDialog(this.node),
                this.touch.off(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.touch.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.touch.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.touch.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.mask.width = 0,
                this.touch.position = cc.v2(0, 0)
            },
            eventStart: function(t) {
                this.touch.runAction(cc.scaleTo(.1, .7)),
                this.offsetX = {
                    localX: t.touch.getLocationX(),
                    x: this.touch.position.x
                }
            },
            eventMove: function(t) {
                var e = t.touch.getLocationX() - this.offsetX.localX + this.offsetX.x;
                e < 0 ? e = 0 : e > 401 && (e = 401),
                this.mask.width = e,
                this.touch.position = cc.v2(e, 0);
                var i = e / 401 * (this.betMax - this.betMin) + this.betMin >> 0;
                this.labelBet.string = n.numberWithCommas(i * this.h)
            },
            eventEnd: function() {
                this.touch.runAction(cc.scaleTo(.1, .6))
            },
            onOkClick: function() {
                cc.RedT.inGame.loading.active = !0,
                cc.RedT.send({
                    g: {
                        poker: {
                            reg: {
                                room: this.RedT.bet,
                                red: this.RedT.red,
                                balans: n.getOnlyNumberInString(this.labelBet.string),
                                auto: this.toggle.isChecked
                            }
                        }
                    }
                })
            },
            onCancelClick: function() {
                cc.RedT.inGame.dialog.onClickBack()
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    Poker_Player: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "02e31t62CZAeZeJI+3SSL8m", "Poker_Player");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                nickname: cc.Label,
                balans: cc.Label,
                bet: cc.Label,
                card: cc.Node,
                Progress: cc.ProgressBar,
                Avatar: cc.Sprite
            },
            setInfo: function(t) {
                t ? (this.node.active = !0,
                t.balans && (this.balans.string = n.numberWithCommas(t.balans)),
                t.name && (this.nickname.string = t.name),
                t.progress && this.startProgress(t.progress)) : this.node.active = !1
            },
            startProgress: function(t) {
                this.Progress.progress = 0,
                this.progressTime = t
            },
            update: function(t) {
                this.progressTime && (this.Progress.progress = this.Progress.progress + t / this.progressTime,
                this.Progress.progress >= 1 && (this.Progress.progress = 0,
                this.progressTime = 0))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    Poker_dialog: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "ff8180Y5bJMV7hg9Nv7NLw0", "Poker_dialog"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    Poker: [function(t, e, i) {
        "use strict";
        function n(t) {
            return a(t) || s(t) || c(t) || o()
        }
        function o() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function c(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return h(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === i && t.constructor && (i = t.constructor.name),
                "Map" === i || "Set" === i ? Array.from(i) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? h(t, e) : void 0
            }
        }
        function s(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t)
        }
        function a(t) {
            if (Array.isArray(t))
                return h(t)
        }
        function h(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        cc._RF.push(e, "33055XFpShOdKT1xWNnrtNQ", "Poker");
        var r = t("Helper")
          , u = t("Notice")
          , d = t("Poker_Player")
          , l = t("Poker_dialog");
        cc.Class({
            extends: cc.Component,
            properties: {
                nodeNotice: cc.Node,
                prefabNotice: {
                    default: null,
                    type: cc.Prefab
                },
                MiniPanel: cc.Prefab,
                loading: cc.Node,
                redhat: cc.Node,
                notice: u,
                dialog: l,
                player: {
                    default: [],
                    type: d
                },
                labelRoom: cc.Label,
                labelBet: cc.Label,
                roomCard: cc.Node
            },
            onLoad: function() {
                cc.RedT.inGame = this;
                var t = cc.instantiate(this.MiniPanel);
                cc.RedT.MiniPanel = t.getComponent("MiniPanel"),
                this.redhat.insertChild(t),
                cc.RedT.send({
                    scene: "poker",
                    g: {
                        poker: {
                            ingame: !0
                        }
                    }
                })
            },
            onData: function(t) {
                console.log(t),
                t.meMap && (this.meMap = t.meMap),
                t.mini && cc.RedT.MiniPanel.onData(t.mini),
                t.TopHu && cc.RedT.MiniPanel.TopHu.onData(t.TopHu),
                t.taixiu && cc.RedT.MiniPanel.TaiXiu.TX_Main.onData(t.taixiu),
                t.infoGhe && this.infoGhe(t.infoGhe),
                t.infoRoom && this.infoRoom(t.infoRoom),
                t.ingame && this.ingame(t.ingame),
                t.outgame && this.outgame(t.outgame),
                t.game && this.game(t.game)
            },
            gameStart: function(t) {
                var e = this;
                Promise.all(t.map(function(t) {
                    e.player[t.ghe].setInfo(t.data)
                }))
            },
            game: function(t) {
                t.start && this.gameStart(t.start)
            },
            infoGhe: function(t) {
                var e = this
                  , i = this
                  , o = {}
                  , c = [];
                if (1 != this.meMap) {
                    var s = this.meMap - 1;
                    c = [].concat(n(t.slice(s)), n(t.slice(0, s)))
                } else
                    c = t;
                Promise.all(c.map(function(t, e) {
                    var n = i.player[e];
                    o[t.ghe] = n,
                    n.setInfo(t.data)
                })).then(function(t) {
                    e.player = o
                })
            },
            infoRoom: function(t) {
                this.labelRoom.string = t.id,
                this.labelBet.string = r.numberWithCommas(t.game) + (t.red,
                " XU")
            },
            ingame: function(t) {
                this.player[t.ghe].setInfo(t.data)
            },
            outgame: function(t) {
                this.player[t].setInfo(null)
            },
            backGame: function() {
                cc.RedT.send({
                    g: {
                        poker: {
                            outgame: !0
                        }
                    }
                }),
                this.loading.active = !0,
                void 0 !== this.timeOut && clearTimeout(this.timeOut),
                cc.director.loadScene("MainGame")
            },
            signOut: function() {
                cc.director.loadScene("MainGame", function() {
                    cc.RedT.inGame.signOut()
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper",
        Notice: "Notice",
        Poker_Player: "Poker_Player",
        Poker_dialog: "Poker_dialog"
    }],
    Profile: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "d8d00YWIWBCb7SVNiYpGTax", "Profile"),
        cc.Class({
            extends: cc.Component,
            properties: {
                header: cc.Node,
                CaNhan: cc.Node,
                KetSat: cc.Node,
                LichSu: cc.Node,
                BaoMat: cc.Node
            },
            init: function() {
                var t = this;
                this.CaNhan = this.CaNhan.getComponent("CaNhan"),
                this.KetSat = this.KetSat.getComponent("KetSat"),
                this.LichSu = this.LichSu.getComponent("LichSu"),
                this.BaoMat = this.BaoMat.getComponent("BaoMat"),
                this.KetSat.init(),
                this.BaoMat.init(),
                this.body = [this.CaNhan, this.KetSat, this.LichSu, this.BaoMat],
                Promise.all(this.header.children.map(function(t) {
                    return t.getComponent("itemHeadMenu")
                })).then(function(e) {
                    t.header = e
                })
            },
            onEnable: function() {
                cc.RedT.inGame.header.node.active = !1
            },
            onDisable: function() {
                cc.RedT.inGame.header.node.active = !0
            },
            onSelectHead: function(t, e) {
                Promise.all(this.header.map(function(t) {
                    t.node.name == e ? t.select() : t.unselect()
                })),
                Promise.all(this.body.map(function(t) {
                    t.node.name == e ? t.node.active = !0 : t.node.active = !1
                }))
            },
            superView: function(t) {
                "CaNhan" == t ? this.onSelectHead(null, "CaNhan") : "KetSat" == t ? this.onSelectHead(null, "KetSat") : "LichSu" == t ? this.onSelectHead(null, "LichSu") : "BaoMat" == t && this.onSelectHead(null, "BaoMat")
            },
            onData: function(t) {
                void 0 !== t.history && this.LichSu.onData(t.history),
                void 0 !== t.the_cao && cc.RedT.inGame.dialog.the_cao.onData(t.the_cao),
                void 0 !== t.level && this.CaNhan.level(t.level)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    PushNohu: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "0faf5dS7zpEdoBIck7+SPhQ", "PushNohu");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                prefab: cc.Prefab,
                isPush: !1
            },
            onLoad: function() {
                this.list = []
            },
            pushNotice: function() {
                if (this.list.length > 0) {
                    this.isPush = !0;
                    var t = this.list[0];
                    this.addNotice(t),
                    this.list.splice(0, 1)
                } else
                    this.isPush = !1
            },
            onData: function(t) {
                this.isPush ? this.list.push(t) : this.addNotice(t),
                this.isPush = !0,
                this.addNews(t)
            },
            addNotice: function(t) {
                var e;
                (e = (e = cc.instantiate(this.prefab)).getComponent("ThongBaoNoHu")).title.string = t.title,
                e.users.string = t.name,
                e.bet.string = n.numberWithCommas(t.bet),
                e.init(this),
                this.node.addChild(e.node)
            },
            addNews: function(t) {
                cc.RedT.inGame.newsContents.NewsAddText({
                    users: t.name,
                    bet: t.bet,
                    game: t.title,
                    status: 1
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    Settings: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "75587hPL3NPGadq3k5zgG80", "Settings");
        var n = t("CheckOut");
        cc.Class({
            extends: cc.Component,
            properties: {
                bgShow: cc.Node,
                NhacNen: n,
                NhacGame: n
            },
            onLoad: function() {
                cc.RedT.isSoundBackground() || this.NhacNen.OnChangerClick(),
                cc.RedT.isSoundGame() || this.NhacGame.OnChangerClick()
            },
            onEnable: function() {
                this.node.runAction(cc.RedT.inGame.dialog.actionShow)
            },
            onDisable: function() {
                cc.RedT.inGame.dialog.resetSizeDialog(this.node)
            },
            setMusic: function() {
                null == localStorage.getItem("SOUND_GAME") ? cc.RedT.setSoundGame(!0) : cc.RedT.isSoundGame() ? cc.RedT.IS_SOUND = !0 : cc.RedT.IS_SOUND = !1
            },
            OnChangerNhacNen: function() {
                cc.RedT.setSoundBackground(this.NhacNen.isChecked),
                this.NhacNen.isChecked ? cc.RedT.inGame.playMusic() : cc.RedT.inGame.pauseMusic()
            },
            OnChangerNhacGame: function() {
                cc.RedT.setSoundGame(this.NhacGame.isChecked),
                this.NhacGame.isChecked ? cc.RedT.IS_SOUND = !0 : cc.RedT.IS_SOUND = !1
            },
            OnSignOutClick: function() {
                cc.RedT.inGame.notice.show({
                    title: "\u0110\u0102NG XU\u1ea4T",
                    text: "X\xe1c nh\u1eadn h\xe0nh \u0111\u1ed9ng.\nH\xe0nh \u0111\u1ed9ng th\u1ef1c hi\u1ec7n \u0111\u0103ng xu\u1ea5t kh\u1ecfi t\xe0i kho\u1ea3n n\xe0y?",
                    button: {
                        type: "sign_out",
                        text: "\u0110\u0102NG XU\u1ea4T"
                    }
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        CheckOut: "CheckOut"
    }],
    Shop: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "7c3a2CceMBL14CXynIjq7O1", "Shop");
        var n = t("Bank");
        cc.Class({
            extends: cc.Component,
            properties: {
                header: {
                    default: null,
                    type: cc.Node
                },
                NapRed: {
                    default: null,
                    type: cc.Node
                },
                TieuRed: {
                    default: null,
                    type: cc.Node
                },
                ChuyenRed: {
                    default: null,
                    type: cc.Node
                },
                Momo: {
                    default: null,
                    type: cc.Node
                },
                Bank: n
            },
            init: function() {
                var t = this;
                this.NapRed = this.NapRed.getComponent("NapRed"),
                this.TieuRed = this.TieuRed.getComponent("TieuRed"),
                this.ChuyenRed = this.ChuyenRed.getComponent("ChuyenRed"),
                this.Momo = this.Momo.getComponent("MomoController"),
                this.NapRed.init(),
                this.TieuRed.init(),
                this.ChuyenRed.init(),
                this.Bank.init(),
                this.Momo.init(),
                this.body = [this.NapRed, this.TieuRed, this.ChuyenRed, this.Momo, this.Bank],
                Promise.all(this.header.children.map(function(t) {
                    return t.getComponent("itemHeadMenu")
                })).then(function(e) {
                    t.header = e
                })
            },
            onEnable: function() {
                cc.RedT.inGame.header.node.active = !1
            },
            onDisable: function() {
                cc.RedT.inGame.header.node.active = !0
            },
            onSelectHead: function(t, e) {
                Promise.all(this.header.map(function(t) {
                    t.node.name == e ? t.select() : t.unselect()
                })),
                Promise.all(this.body.map(function(t) {
                    t.node.name == e ? t.node.active = !0 : t.node.active = !1
                }))
            },
            superView: function(t) {
                "NapRed" == t || "ThongTinNapRed" == t || "QuyDinhNapRed" == t ? (this.onSelectHead(null, "NapRed"),
                "NapRed" != t && this.NapRed.onSelectHead(null, t)) : "TieuRed" == t || "MuaXu" == t || "MuaTheNap" == t ? (this.onSelectHead(null, "TieuRed"),
                "TieuRed" != t && this.TieuRed.onSelectHead(null, t)) : "ChuyenRed" == t ? (this.onSelectHead(null, "ChuyenRed"),
                this.ChuyenRed.onSelectHead(null, "ChuyenRed_DaiLy")) : "Momo" == t && (this.onSelectHead(null, "Momo"),
                this.Momo.onSelectHead(null, "Momo"))
            },
            onData: function(t) {
                void 0 !== t.nap_red && this.NapRed.onData(t.nap_red),
                void 0 !== t.mua_the_nap && this.TieuRed.MuaTheCao.onData(t.mua_the_nap),
                void 0 !== t.chuyen_red && this.ChuyenRed.onData(t.chuyen_red),
                t.bank && this.Bank.onData(t.bank),
                void 0 !== t.daily && this.ChuyenRed.onDaiLy(t.daily),
                void 0 !== t.momo && this.Momo.onData(t.momo),
                void 0 !== t.bank.momoInfo && this.Momo.onData(t.bank.momoInfo)
            }
        }),
        cc._RF.pop()
    }
    , {
        Bank: "Bank"
    }],
    SignIn: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "1c678NmitZCp6ybtgqTKrnQ", "SignIn");
        var n = t("BrowserUtil")
          , o = t("md5");
        cc.Class({
            extends: cc.Component,
            properties: {
                username: {
                    default: null,
                    type: cc.EditBox
                },
                password: {
                    default: null,
                    type: cc.EditBox
                },
                checkboxOn: cc.Node,
                checkboxOff: cc.Node
            },
            onLoad: function() {
                var t = this;
                this.editboxs = [this.username, this.password],
                this.editboxs_i = 0,
                this.keyHandle = function(e) {
                    return e.keyCode === cc.macro.KEY.tab ? (t.changeNextFocusEditBox(),
                    e.preventDefault && e.preventDefault(),
                    !1) : e.keyCode === cc.macro.KEY.enter ? (n.focusGame(),
                    t.onLoginClick(),
                    e.preventDefault && e.preventDefault(),
                    !1) : e.keyCode === cc.macro.KEY.escape ? (cc.RedT.inGame.dialog.onClickBack(),
                    e.preventDefault && e.preventDefault(),
                    !1) : void 0
                }
                ;
                var e = localStorage.getItem("username")
                  , i = localStorage.getItem("password");
                e && i && (this.username.string = e,
                this.password.string = i,
                this.checkboxOn.active = !0,
                this.checkboxOff.active = !1)
            },
            onEnable: function() {
                cc.sys.isBrowser && this.addEvent(),
                this.node.runAction(cc.RedT.inGame.dialog.actionShow)
            },
            onDisable: function() {
                cc.sys.isBrowser && this.removeEvent(),
                this.clean(),
                cc.RedT.inGame.dialog.resetSizeDialog(this.node)
            },
            addEvent: function() {
                for (var t in cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).addEventListener("keydown", this.keyHandle, !1)
            },
            removeEvent: function() {
                for (var t in this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).removeEventListener("keydown", this.keyHandle, !1);
                cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
            },
            onKeyDown: function(t) {
                switch (t.keyCode) {
                case cc.macro.KEY.escape:
                    this.isTop() && cc.RedT.inGame.dialog.onClickBack();
                    break;
                case cc.macro.KEY.tab:
                    this.isTop() && this.changeNextFocusEditBox();
                    break;
                case cc.macro.KEY.enter:
                    this.isTop() && this.onLoginClick()
                }
            },
            toPassword: function() {
                5 == this.password.inputFlag && (this.password.inputFlag = 0)
            },
            toNormal: function() {
                0 == this.password.inputFlag && (this.password.inputFlag = 5)
            },
            changeNextFocusEditBox: function() {
                for (var t = !1, e = 0, i = this.editboxs.length; e < i; e++)
                    if (n.checkEditBoxFocus(this.editboxs[e])) {
                        n.focusEditBox(this.editboxs[e]),
                        t = !0;
                        break
                    }
                !t && 0 < this.editboxs.length && n.focusEditBox(this.editboxs[0])
            },
            isTop: function() {
                return !cc.RedT.inGame.notice.node.active && !cc.RedT.inGame.loading.active
            },
            clean: function() {
                this.username.string = this.password.string = ""
            },
            onLoginClick: function() {
                var t = null;
                if (this.username.string.length > 32 || this.username.string.length < 3 || null === this.username.string.match(new RegExp("^[a-zA-Z0-9]+$")) ? t = "T\xean t\xe0i kho\u1ea3n kh\xf4ng \u0111\xfang!!" : (this.password.string.length > 32 || this.password.string.length < 6) && (t = "M\u1eadt kh\u1ea9u kh\xf4ng \u0111\xfang!!"),
                t)
                    cc.RedT.inGame.notice.show({
                        title: "\u0110\u0102NG NH\u1eacP",
                        text: t
                    });
                else {
                    var e = o(this.username.string + this.password.string + "e3ba2316d84b5da2d3587299a27403fe");
                    this.checkboxOn.active ? (localStorage.setItem("username", this.username.string),
                    localStorage.setItem("password", this.password.string)) : (localStorage.removeItem("username"),
                    localStorage.removeItem("password")),
                    cc.RedT.inGame.auth({
                        authentication: {
                            username: this.username.string,
                            password: this.password.string,
                            api_key: e
                        }
                    })
                }
            },
            rememberMe: function() {
                this.checkboxOn.active ? (this.checkboxOff.active = !0,
                this.checkboxOn.active = !1) : (this.checkboxOff.active = !1,
                this.checkboxOn.active = !0)
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil",
        md5: "md5"
    }],
    SignName: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "428fapqUBNMxZBikn0+ylYv", "SignName");
        var n = t("BrowserUtil");
        cc.Class({
            extends: cc.Component,
            properties: {
                username: {
                    default: null,
                    type: cc.EditBox
                }
            },
            onLoad: function() {
                var t = this;
                this.keyHandle = function(e) {
                    return e.keyCode === cc.macro.KEY.tab ? (t.changeNextFocusEditBox(),
                    e.preventDefault && e.preventDefault(),
                    !1) : e.keyCode === cc.macro.KEY.enter ? (n.focusGame(),
                    t.onSignNameClick(),
                    e.preventDefault && e.preventDefault(),
                    !1) : void 0
                }
            },
            onEnable: function() {
                cc.sys.isBrowser && this.addEvent(),
                this.node.runAction(cc.RedT.inGame.dialog.actionShow)
            },
            onDisable: function() {
                cc.sys.isBrowser && this.removeEvent(),
                this.clean(),
                cc.RedT.inGame.dialog.resetSizeDialog(this.node)
            },
            addEvent: function() {
                cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                n.getHTMLElementByEditBox(this.username).addEventListener("keydown", this.keyHandle, !1)
            },
            removeEvent: function() {
                n.getHTMLElementByEditBox(this.username).removeEventListener("keydown", this.keyHandle, !1),
                cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
            },
            onKeyDown: function(t) {
                switch (t.keyCode) {
                case cc.macro.KEY.tab:
                    this.isTop() && this.changeNextFocusEditBox();
                    break;
                case cc.macro.KEY.enter:
                    this.isTop() && this.onSignNameClick()
                }
            },
            changeNextFocusEditBox: function() {
                n.focusEditBox(this.username)
            },
            isTop: function() {
                return !cc.RedT.inGame.notice.node.active && !cc.RedT.inGame.loading.active
            },
            clean: function() {
                this.username.string = ""
            },
            onSignNameClick: function() {
                this.username.string.length > 14 || this.username.string.length < 3 || null === this.username.string.match(new RegExp("^[a-zA-Z0-9]+$")) ? cc.RedT.inGame.notice.show({
                    title: "T\xcaN NH\xc2N V\u1eacT",
                    text: "T\xean Nh\xe2n v\u1eadt t\u1eeb 3 \u0111\u1ebfn 14 k\xfd t\u1ef1 v\xe0 kh\xf4ng ch\u1ee9a k\xfd t\u1ef1 \u0111\u1eb7c bi\u1ec7t!!"
                }) : cc.RedT.send({
                    signName: this.username.string
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil"
    }],
    SignOut: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "1d01bAfcztH8oV27UvkQBVe", "SignOut"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    SignUp: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "0dcbdkfFWFJo7s1gZAEcYsa", "SignUp");
        var n = t("BrowserUtil");
        cc.Class({
            extends: cc.Component,
            properties: {
                username: {
                    default: null,
                    type: cc.EditBox
                },
                password: {
                    default: null,
                    type: cc.EditBox
                },
                repassword: {
                    default: null,
                    type: cc.EditBox
                },
                captcha: {
                    default: null,
                    type: cc.EditBox
                },
                capchaSprite: cc.Sprite
            },
            onLoad: function() {
                var t = this;
                this.editboxs = [this.username, this.password, this.repassword, this.captcha],
                this.keyHandle = function(e) {
                    return e.keyCode === cc.macro.KEY.tab ? (t.changeNextFocusEditBox(),
                    e.preventDefault && e.preventDefault(),
                    !1) : e.keyCode === cc.macro.KEY.enter ? (n.focusGame(),
                    t.onSignUpClick(),
                    e.preventDefault && e.preventDefault(),
                    !1) : e.keyCode === cc.macro.KEY.escape ? (cc.RedT.inGame.dialog.onClickBack(),
                    e.preventDefault && e.preventDefault(),
                    !1) : void 0
                }
            },
            onEnable: function() {
                cc.sys.isBrowser && this.addEvent(),
                this.node.runAction(cc.RedT.inGame.dialog.actionShow),
                this.reCaptcha()
            },
            onDisable: function() {
                cc.sys.isBrowser && this.removeEvent(),
                this.clean(),
                cc.RedT.inGame.dialog.resetSizeDialog(this.node)
            },
            addEvent: function() {
                for (var t in cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).addEventListener("keydown", this.keyHandle, !1)
            },
            removeEvent: function() {
                for (var t in this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).removeEventListener("keydown", this.keyHandle, !1);
                cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
            },
            onKeyDown: function(t) {
                switch (t.keyCode) {
                case cc.macro.KEY.escape:
                    this.isTop() && cc.RedT.inGame.dialog.onClickBack();
                    break;
                case cc.macro.KEY.tab:
                    this.isTop() && this.changeNextFocusEditBox();
                    break;
                case cc.macro.KEY.enter:
                    this.isTop() && this.onSignUpClick()
                }
            },
            changeNextFocusEditBox: function() {
                for (var t = !1, e = 0, i = this.editboxs.length; e < i; e++)
                    if (n.checkEditBoxFocus(this.editboxs[e])) {
                        n.focusEditBox(this.editboxs[e]),
                        t = !0;
                        break
                    }
                !t && 0 < this.editboxs.length && n.focusEditBox(this.editboxs[0])
            },
            isTop: function() {
                return !cc.RedT.inGame.notice.node.active && !cc.RedT.inGame.loading.active
            },
            clean: function() {
                this.username.string = this.password.string = this.repassword.string = this.captcha.string = ""
            },
            onSignUpClick: function() {
                var t = null;
                this.username.string.length > 32 || this.username.string.length < 3 ? t = "\u0110\u1ed9 d\xe0i T\xean t\xe0i kho\u1ea3n 3 - 32 k\xfd t\u1ef1!!" : this.password.string.length > 32 || this.password.string.length < 6 ? t = "\u0110\u1ed9 d\xe0i m\u1eadt kh\u1ea9u 6 - 32 k\xfd t\u1ef1!!" : this.password.string !== this.repassword.string ? t = "X\xe1c nh\u1eadn m\u1eadt kh\u1ea9u kh\xf4ng kh\u1edbp!" : this.captcha.string.length < 4 ? t = "Vui l\xf2ng nh\u1eadp Captcha." : this.username.string == this.password.string ? t = "T\xe0i kho\u1ea3n kh\xf4ng \u0111\u01b0\u1ee3c tr\xf9ng v\u1edbi m\u1eadt kh\u1ea9u!!" : null === this.username.string.match(new RegExp("^[a-zA-Z0-9]+$")) && (t = "T\xean ch\u1ec9 g\u1ed3m Ch\u1eef v\xe0 S\u1ed1!"),
                t ? cc.RedT.inGame.notice.show({
                    title: "\u0110\u0102NG K\xdd",
                    text: t
                }) : cc.RedT.inGame.auth({
                    authentication: {
                        username: this.username.string,
                        password: this.password.string,
                        register: !0,
                        captcha: this.captcha.string
                    }
                })
            },
            initCaptcha: function(t) {
                var e = this
                  , i = new Image;
                i.src = t,
                i.width = 150,
                i.height = 50,
                setTimeout(function() {
                    var t = new cc.Texture2D;
                    t.initWithElement(i),
                    t.handleLoadedTexture();
                    var n = new cc.SpriteFrame(t);
                    e.capchaSprite.spriteFrame = n
                }, 10)
            },
            reCaptcha: function() {
                cc.RedT.send({
                    captcha: "signUp"
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil"
    }],
    Splash: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "75b79AEMXNJqYRJtb538JJ4", "Splash"),
        cc.Class({
            extends: cc.Component,
            properties: {
                messageLabel: cc.Label,
                manifestUrl: {
                    default: null,
                    type: cc.Asset
                },
                retryButtonNode: cc.Node,
                updateProgressBar: cc.Node,
                star: cc.Node,
                _am: null,
                _updating: !1,
                _canRetry: !1,
                _storagePath: ""
            },
            onLoad: function() {
                this.isLoadScene = !1,
                this.isLoadConfig = !1,
                this.initOneSign(),
                cc.sys.isBrowser ? this.loadAssets() : (this.initHotUpdate(),
                this.checkUpdate())
            },
            initOneSign: function() {
                this.checkPlugin() && (sdkbox.PluginOneSignal.init(),
                sdkbox.PluginOneSignal.setListener({
                    onSendTag: function(t, e, i) {},
                    onGetTags: function(t) {},
                    onIdsAvailable: function(t, e) {},
                    onPostNotification: function(t, e) {},
                    onNotification: function(t, e, i) {}
                }))
            },
            checkPlugin: function() {
                return "undefined" == typeof sdkbox ? (console.log("sdkbox is undefined"),
                !1) : void 0 !== sdkbox.PluginOneSignal || (console.log("sdkbox.PluginFacebook is undefined"),
                !1)
            },
            loadAssets: function() {
                this.updateProgress(0),
                this.messageLabel.string = "\u0110ang l\u1ea5y d\u1eef li\u1ec7u game ...",
                setTimeout(function() {
                    this.loadScene()
                }
                .bind(this), 100)
            },
            loadScene: function() {
                cc.director.preloadScene("MainGame", this.onProgress.bind(this), this.onLoaded.bind(this))
            },
            onProgress: function(t, e) {
                var i = t / e * 838 >> 0;
                this.updateProgress(i)
            },
            onLoaded: function(t, e) {
                cc.director.loadScene("MainGame")
            },
            onDestroy: function() {
                this._updateListener && (this._am.setEventCallback(null),
                this._updateListener = null)
            },
            initHotUpdate: function() {
                this.updateProgress(0),
                this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "redvip-remote-asset",
                this._am = new jsb.AssetsManager("",this._storagePath,this.versionCompareHandle),
                this._am.setVerifyCallback(function(t, e) {
                    return e.compressed,
                    !0
                }
                .bind(this)),
                cc.sys.os === cc.sys.OS_ANDROID && this._am.setMaxConcurrentTask(2)
            },
            checkUpdate: function() {
                this._updating ? this.messageLabel.string = "\u0110ang ki\u1ec3m tra phi\xean b\u1ea3n ..." : (this._am.getState() === jsb.AssetsManager.State.UNINITED && this._am.loadLocalManifest(this.manifestUrl.nativeUrl),
                this._am.setEventCallback(this.checkCb.bind(this)),
                this._am.checkUpdate(),
                this._updating = !0)
            },
            hotUpdate: function() {
                this._am && !this._updating && (this._am.setEventCallback(this.updateCb.bind(this)),
                this._am.getState() === jsb.AssetsManager.State.UNINITED && this._am.loadLocalManifest(this.manifestUrl.nativeUrl),
                this._failCount = 0,
                this._am.update(),
                this._updating = !0)
            },
            retry: function() {
                !this._updating && this._canRetry && (this.retryButtonNode.active = !1,
                this._canRetry = !1,
                this.messageLabel.string = "Th\u1eed l\u1ea1i ...",
                this._am.downloadFailedAssets())
            },
            checkCb: function(t) {
                var e = !1
                  , i = !1;
                switch (t.getEventCode()) {
                case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                    this.messageLabel.string = "Kh\xf4ng t\xecm th\u1ea5y Hot Update ...";
                    break;
                case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                    this.messageLabel.string = "T\u1ea3i manifest th\u1ea5t b\u1ea1i ...";
                    break;
                case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                    this.updateProgress(838),
                    this.messageLabel.string = "Phi\xean b\u1ea3n m\u1edbi nh\u1ea5t ...",
                    e = !0;
                    break;
                case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                    this.messageLabel.string = "T\xecm th\u1ea5y phi\xean b\u1ea3n c\u1eadp nh\u1eadt ...",
                    this.updateProgress(0),
                    i = !0;
                    break;
                default:
                    return
                }
                this._am.setEventCallback(null),
                this._checkListener = null,
                this._updating = !1,
                e && this.loadAssets(),
                i && this.hotUpdate()
            },
            updateCb: function(t) {
                var e = !1
                  , i = !1;
                switch (t.getEventCode()) {
                case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                    this.messageLabel.string = "Kh\xf4ng t\xecm th\u1ea5y Hot Update ...",
                    i = !0;
                    break;
                case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                    var n = 838 * t.getPercent();
                    this.updateProgress(n),
                    this.messageLabel.string = "\u0110ang c\u1eadp nh\u1eadt ...";
                    break;
                case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                    this.messageLabel.string = "T\u1ea3i manifest th\u1ea5t b\u1ea1i ...",
                    i = !0;
                    break;
                case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                    this.updateProgress(838),
                    this.messageLabel.string = "Phi\xean b\u1ea3n m\u1edbi nh\u1ea5t ...",
                    i = !0;
                    break;
                case jsb.EventAssetsManager.UPDATE_FINISHED:
                    this.messageLabel.string = "C\u1eadp nh\u1eadt th\xe0nh c\xf4ng",
                    e = !0;
                    break;
                case jsb.EventAssetsManager.UPDATE_FAILED:
                    this.messageLabel.string = "C\u1eadp nh\u1eadt th\u1ea5t b\u1ea1i",
                    this.retryButtonNode.active = !0,
                    this._updating = !1,
                    this._canRetry = !0;
                    break;
                case jsb.EventAssetsManager.ERROR_UPDATING:
                    this.messageLabel.string = "C\u1eadp nh\u1eadt th\u1ea5t b\u1ea1i";
                    break;
                case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                    this.messageLabel.string = t.getMessage()
                }
                if (i && (this._am.setEventCallback(null),
                this._updateListener = null,
                this._updating = !1),
                e) {
                    this._am.setEventCallback(null),
                    this._updateListener = null;
                    var o = jsb.fileUtils.getSearchPaths()
                      , c = this._am.getLocalManifest().getSearchPaths();
                    Array.prototype.unshift.apply(o, c),
                    cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(o)),
                    jsb.fileUtils.setSearchPaths(o),
                    cc.audioEngine.stopAll(),
                    cc.game.restart()
                }
            },
            onRetryClick: function() {
                this.retry()
            },
            versionCompareHandle: function(t, e) {
                console.log("JS Custom Version Compare: version A is " + t + ", version B is " + e),
                console.log("JS Custom Version Compare: version A is " + t + ", version B is " + e);
                for (var i = t.split("."), n = e.split("."), o = 0; o < i.length; ++o) {
                    var c = parseInt(i[o])
                      , s = parseInt(n[o] || 0);
                    if (c !== s)
                        return c - s
                }
                return n.length > i.length ? -1 : 0
            },
            updateProgress: function(t) {
                this.updateProgressBar.width = t,
                this.star.position = cc.v2(t, 0)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    TaiXiuBoard_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "e6c11CHYW1PjZKvnSwp1SEF", "TaiXiuBoard_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                colorOn: "",
                colorOff: "",
                bgOn: {
                    default: null,
                    type: cc.SpriteFrame
                },
                bgOff: {
                    default: null,
                    type: cc.SpriteFrame
                },
                text: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function(t) {
                this.sprite = this.node.getComponent(cc.Sprite)
            },
            onEnable: function() {
                this.node.on(cc.Node.EventType.MOUSE_ENTER, this.eventOnENTER, this),
                this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.eventOnLEAVE, this)
            },
            onDisable: function() {
                this.node.off(cc.Node.EventType.MOUSE_ENTER, this.eventOnENTER, this),
                this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.eventOnLEAVE, this)
            },
            eventOnENTER: function() {
                this.text.color = this.text.color.fromHEX(this.colorOn),
                this.sprite.spriteFrame = this.bgOn
            },
            eventOnLEAVE: function() {
                this.text.color = this.text.color.fromHEX(this.colorOff),
                this.sprite.spriteFrame = this.bgOff
            }
        }),
        cc._RF.pop()
    }
    , {}],
    TaiXiuBoard: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "71423kGPWNLUrUcOrvZ688E", "TaiXiuBoard");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                textType: {
                    default: null,
                    type: cc.Label
                },
                nodeChonTien: {
                    default: null,
                    type: cc.Node
                },
                nodeChonSo: {
                    default: null,
                    type: cc.Node
                },
                bgSo: {
                    default: null,
                    type: cc.Node
                },
                bg: {
                    default: null,
                    type: cc.Node
                },
                btnSelect: {
                    default: null,
                    type: cc.Node
                },
                btnHuy: {
                    default: null,
                    type: cc.Node
                },
                btnOK: {
                    default: null,
                    type: cc.Node
                },
                btnSelectSo: {
                    default: null,
                    type: cc.Node
                },
                btnHuySo: {
                    default: null,
                    type: cc.Node
                },
                btnOKSo: {
                    default: null,
                    type: cc.Node
                }
            },
            init: function(t) {
                this.RedT = t
            },
            ChonTienClick: function(t, e) {
                this.RedT.input.string = n.numberWithCommas(1 * n.getOnlyNumberInString(this.RedT.input.string) + 1 * e)
            },
            ChonSoClick: function(t, e) {
                this.RedT.input.string = n.numberWithCommas(n.getOnlyNumberInString(this.RedT.input.string + e))
            },
            onBackClick: function() {
                var t = n.getOnlyNumberInString(this.RedT.input.string);
                this.RedT.input.string = n.numberWithCommas(t.slice(0, t.length - 1))
            },
            onCleanClick: function() {
                this.RedT.input.string = ""
            },
            onAllClick: function() {
                this.RedT.input.string = n.numberWithCommas(this.RedT.red ? cc.RedT.user.red : cc.RedT.user.xu)
            },
            onChangerTypeClick: function() {
                this.nodeChonTien.active ? (this.nodeChonTien.active = !1,
                this.nodeChonSo.active = !0,
                this.bg.active = !1,
                this.btnOK.active = !1,
                this.btnHuy.active = !1,
                this.btnSelect.active = !1,
                this.bgSo.active = !0,
                this.btnOKSo.active = !0,
                this.btnHuySo.active = !0,
                this.btnSelectSo.active = !0) : (this.nodeChonSo.active = !1,
                this.nodeChonTien.active = !0,
                this.bg.active = !0,
                this.btnOK.active = !0,
                this.btnHuy.active = !0,
                this.btnSelect.active = !0,
                this.bgSo.active = !1,
                this.btnOKSo.active = !1,
                this.btnHuySo.active = !1,
                this.btnSelectSo.active = !1)
            },
            onCuocClick: function() {},
            onCloseClick: function() {
                this.node.active = !1,
                this.RedT.input.string = this.RedT.RedT.board ? "" : "\u0110\u1eb6T C\u1eecA"
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    TaiXiuChat: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "e4b59QQx49GyaeME6czSwsj", "TaiXiuChat");
        var n = t("Helper")
          , o = t("BrowserUtil");
        cc.Class({
            extends: cc.Component,
            properties: {
                content: {
                    default: null,
                    type: cc.ScrollView
                },
                item: {
                    default: null,
                    type: cc.Prefab
                },
                input: {
                    default: null,
                    type: cc.EditBox
                },
                layout: {
                    default: null,
                    type: cc.Layout
                },
                isLoad: !1
            },
            init: function(t) {
                this.RedT = t,
                void 0 !== cc.RedT.setting.taixiu.chat_active && (this.node.active = cc.RedT.setting.taixiu.chat_active)
            },
            onLoad: function() {
                var t = this;
                this.keyHandle = function(e) {
                    return e.keyCode === cc.macro.KEY.tab ? (e.preventDefault && e.preventDefault(),
                    !1) : e.keyCode === cc.macro.KEY.enter ? (o.focusGame(),
                    t.onChatClick(),
                    e.preventDefault && e.preventDefault(),
                    !1) : void 0
                }
            },
            onEnable: function() {
                cc.sys.isBrowser && this.addEvent(),
                this.isLoad || this.getData()
            },
            onDisable: function() {
                cc.sys.isBrowser && this.removeEvent(),
                this.clean()
            },
            addEvent: function() {
                o.getHTMLElementByEditBox(this.input).addEventListener("keydown", this.keyHandle, !1)
            },
            removeEvent: function() {
                o.getHTMLElementByEditBox(this.input).removeEventListener("keydown", this.keyHandle, !1)
            },
            getData: function() {
                this.isLoad = !0,
                cc.RedT.send({
                    taixiu: {
                        getLogChat: !0
                    }
                })
            },
            message: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , i = cc.instantiate(this.item);
                i.getComponent(cc.Label).string = t.user + ": " + t.value,
                i.children[0].getComponent(cc.Label).string = t.user,
                this.content.content.addChild(i),
                e && this.layout.node.height > 300 && this.layout.node.height - this.layout.node.position.y - 134 < 70 && setTimeout(function() {
                    this.content.scrollToBottom(.1)
                }
                .bind(this), 100)
            },
            logs: function(t) {
                var e = this;
                if (t.length) {
                    var i = this;
                    Promise.all(t.map(function(t) {
                        return i.message(t)
                    })).then(function(t) {
                        setTimeout(function() {
                            this.content.scrollToBottom(.1)
                        }
                        .bind(e), 100)
                    })
                }
            },
            onData: function(t) {
                void 0 !== t.message && this.message(t.message, !0),
                void 0 !== t.logs && this.logs(t.logs)
            },
            onChatClick: function() {
                n.isEmpty(this.input.string) ? this.RedT.onData({
                    err: "Nh\u1eadp n\u1ed9i dung \u0111\u1ec3 chat..."
                }) : (cc.RedT.send({
                    taixiu: {
                        chat: this.input.string
                    }
                }),
                this.onData({
                    message: {
                        user: cc.RedT.user.name,
                        value: this.input.string
                    }
                }),
                this.clean(),
                this.input.focus())
            },
            toggle: function() {
                this.RedT.setTop(),
                cc.RedT.audio.playClick(),
                this.node.active = cc.RedT.setting.taixiu.chat_active = !this.node.active
            },
            clean: function() {
                this.input.string = ""
            },
            reset: function() {
                this.content.content.destroyAllChildren(),
                this.node.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil",
        Helper: "Helper"
    }],
    TaiXiuLichSuPhien_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "47ebeX3OGJIioJo+XYY5AW7", "TaiXiuLichSuPhien_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                time: {
                    default: null,
                    type: cc.Label
                },
                user: {
                    default: null,
                    type: cc.Label
                },
                cuoc: {
                    default: null,
                    type: cc.Label
                },
                tralai: {
                    default: null,
                    type: cc.Label
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    TaiXiuLichSuPhien: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "66490CKFvdK6JST1Zi6Whaj", "TaiXiuLichSuPhien");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                itemPrefab: {
                    default: null,
                    type: cc.Prefab
                },
                dice: {
                    default: [],
                    type: cc.Sprite
                },
                leftCuoc: {
                    default: null,
                    type: cc.Label
                },
                leftTraLai: {
                    default: null,
                    type: cc.Label
                },
                rightCuoc: {
                    default: null,
                    type: cc.Label
                },
                rightTraLai: {
                    default: null,
                    type: cc.Label
                },
                phien: {
                    default: null,
                    type: cc.Label
                },
                nodeTai: {
                    default: null,
                    type: cc.Node
                },
                nodeXiu: {
                    default: null,
                    type: cc.Node
                },
                nodeChan: {
                    default: null,
                    type: cc.Node
                },
                nodeLe: {
                    default: null,
                    type: cc.Node
                },
                scrollViewLeft: {
                    default: null,
                    type: cc.ScrollView
                },
                scrollViewRight: {
                    default: null,
                    type: cc.ScrollView
                },
                nodeNext: {
                    default: null,
                    type: cc.Node
                },
                nodePrevious: {
                    default: null,
                    type: cc.Node
                },
                labelGame: {
                    default: null,
                    type: cc.Label
                },
                nodeRED: {
                    default: null,
                    type: cc.Node
                },
                nodeXU: {
                    default: null,
                    type: cc.Node
                }
            },
            init: function(t) {
                this.RedT = t
            },
            onChangerGame: function() {
                this.labelGame.string = this.RedT.TX_Main.taixiu ? "Ch\u1eb5n L\u1ebb" : "T\xe0i X\u1ec9u",
                this.nodeTai.active = this.RedT.TX_Main.taixiu,
                this.nodeXiu.active = this.RedT.TX_Main.taixiu,
                this.nodeChan.active = !this.RedT.TX_Main.taixiu,
                this.nodeLe.active = !this.RedT.TX_Main.taixiu
            },
            onChangerCoint: function() {
                this.nodeRED.active = !this.nodeRED.active,
                this.nodeXU.active = !this.nodeXU.active
            },
            onChangerGameClick: function() {
                this.RedT.TX_Main.onChangerGame(),
                this.getPhien(this.isPhien)
            },
            onChangerCointClick: function() {
                this.RedT.TX_Main.onChangerRED(),
                this.getPhien(this.isPhien)
            },
            onGetPhienClick: function(t) {
                this.getPhien(t.target.phien)
            },
            getPhien: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                t && (cc.RedT.inGame.loading.active = !0,
                cc.RedT.send({
                    taixiu: {
                        get_phien: {
                            red: this.RedT.TX_Main.red,
                            taixiu: this.RedT.TX_Main.taixiu,
                            phien: t
                        }
                    }
                }))
            },
            onNextClick: function(t) {
                this.getPhien(this.isPhien + 1)
            },
            onPreviousClick: function(t) {
                this.getPhien(this.isPhien - 1)
            },
            onData: function(t) {
                var e = this;
                this.setNew(),
                cc.RedT.inGame.loading.active = !1,
                cc.RedT.MiniPanel.Dialog.showTaiXiuLichSuPhien(),
                this.leftCuoc.string = n.numberWithCommas(t.tong_L),
                this.rightCuoc.string = n.numberWithCommas(t.tong_R),
                this.leftTraLai.string = n.numberWithCommas(t.tong_tralai_L),
                this.rightTraLai.string = n.numberWithCommas(t.tong_tralai_R),
                this.phien.string = t.phien + "  -  " + n.getStringDateByTime(t.time),
                this.isPhien = t.phien;
                var i = t.dice[0] + t.dice[1] + t.dice[2]
                  , o = cc.RedT.setting.taixiu.logs[0].phien - t.phien;
                this.nodePrevious.active = !(o > 17),
                this.nodeNext.active = !(o < 1),
                Promise.all(this.dice.map(function(i, n) {
                    var o = t.dice[n];
                    i.spriteFrame = e.RedT.TX_Main.diceSF[o - 1]
                })),
                this.RedT.TX_Main.taixiu ? (this.nodeTai.color = i > 10 ? cc.Color.WHITE : this.nodeTai.color.fromHEX("#ACACAC"),
                this.nodeXiu.color = i > 10 ? this.nodeTai.color.fromHEX("#ACACAC") : cc.Color.WHITE,
                this.nodeTai.opacity = i > 10 ? 255 : 100,
                this.nodeXiu.opacity = i > 10 ? 100 : 255) : (this.nodeChan.color = i % 2 ? this.nodeChan.color.fromHEX("#ACACAC") : cc.Color.WHITE,
                this.nodeLe.color = i % 2 ? cc.Color.WHITE : this.nodeChan.color.fromHEX("#ACACAC"),
                this.nodeChan.opacity = i % 2 ? 100 : 255,
                this.nodeLe.opacity = i % 2 ? 255 : 100),
                Promise.all(t.dataL.map(function(t) {
                    var i = cc.instantiate(e.itemPrefab)
                      , o = i.getComponent("TaiXiuLichSuPhien_item");
                    o.time.string = n.getStringHourByTime(t.time),
                    o.user.string = t.name,
                    o.cuoc.string = n.numberWithCommas(t.bet),
                    o.tralai.string = n.numberWithCommas(t.tralai),
                    e.scrollViewLeft.content.addChild(i)
                })),
                Promise.all(t.dataR.map(function(t) {
                    var i = cc.instantiate(e.itemPrefab)
                      , o = i.getComponent("TaiXiuLichSuPhien_item");
                    o.time.string = n.getStringHourByTime(t.time),
                    o.user.string = t.name,
                    o.cuoc.string = n.numberWithCommas(t.bet),
                    o.tralai.string = n.numberWithCommas(t.tralai),
                    e.scrollViewRight.content.addChild(i)
                }))
            },
            setNew: function() {
                this.scrollViewLeft.content.destroyAllChildren(),
                this.scrollViewRight.content.destroyAllChildren()
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    TaiXiuLichSu_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "06a2bfDqLRFiorJC/4mw+4h", "TaiXiuLichSu_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                time: {
                    default: null,
                    type: cc.Label
                },
                phien: {
                    default: null,
                    type: cc.Label
                },
                dat: {
                    default: null,
                    type: cc.Label
                },
                ketqua: {
                    default: null,
                    type: cc.Label
                },
                cuoc: {
                    default: null,
                    type: cc.Label
                },
                donvi: {
                    default: null,
                    type: cc.Label
                },
                tralai: {
                    default: null,
                    type: cc.Label
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    TaiXiuLichSu: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "80da9UrNe9D45tJEXBxj5Wd", "TaiXiuLichSu");
        var n = t("Helper")
          , o = t("Pagination");
        cc.Class({
            extends: cc.Component,
            properties: {
                content: cc.Node,
                page: o
            },
            init: function(t) {
                this.RedT = t
            },
            onLoad: function() {
                var t = this;
                this.page.init(this),
                Promise.all(this.content.children.map(function(t) {
                    return t.getComponent("TaiXiuLichSu_item")
                })).then(function(e) {
                    t.content = e
                })
            },
            onEnable: function() {
                this.get_data()
            },
            onDisable: function() {},
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                cc.RedT.send({
                    taixiu: {
                        get_log: {
                            page: t
                        }
                    }
                })
            },
            onData: function(t) {
                this.page.onSet(t.page, t.kmess, t.total),
                Promise.all(this.content.map(function(e, i) {
                    var o = t.data[i];
                    if (void 0 !== o) {
                        e.node.active = !0;
                        var c = o.dice1 + o.dice2 + o.dice3;
                        e.time.string = n.getStringDateByTime(o.time),
                        e.phien.string = o.phien,
                        e.dat.string = o.taixiu ? o.select ? "T\xe0i" : "X\u1ec9u" : o.select ? "Ch\u1eb5n" : "L\u1ebb",
                        e.ketqua.string = o.dice1 + "-" + o.dice2 + "-" + o.dice3 + "  " + c,
                        e.cuoc.string = n.numberWithCommas(o.bet),
                        e.tralai.string = n.numberWithCommas(o.tralai),
                        e.donvi.string = n.numberWithCommas(o.betwin),
                        e.donvi.node.color = o.red ? cc.Color.YELLOW : e.donvi.node.color.fromHEX("#E2E2E2"),
                        e.time.node.color = o.win ? cc.Color.YELLOW : e.time.node.color.fromHEX("#E2E2E2"),
                        e.dat.node.color = o.win ? cc.Color.YELLOW : e.dat.node.color.fromHEX("#E2E2E2")
                    } else
                        e.node.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper",
        Pagination: "Pagination"
    }],
    TaiXiuMain_logTips: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "43178FyrtFOhKXVCK9EK0Dk", "TaiXiuMain_logTips"),
        cc.Class({
            extends: cc.Component,
            properties: {
                text: {
                    default: null,
                    type: cc.Label
                },
                tips: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                this.sprite = this.getComponent(cc.Sprite)
            },
            onEnable: function() {
                this.node.on(cc.Node.EventType.MOUSE_ENTER, this.eventOnENTER, this),
                this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.eventOnLEAVE, this)
            },
            onDisable: function() {
                this.node.off(cc.Node.EventType.MOUSE_ENTER, this.eventOnENTER, this),
                this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.eventOnLEAVE, this)
            },
            eventOnENTER: function() {
                this.tips.active = !0
            },
            eventOnLEAVE: function() {
                this.tips.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {}],
    TaiXiuMain: [function(t, e, i) {
        "use strict";
        function n(t) {
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (t = o(t))) {
                    var e = 0
                      , i = function() {};
                    return {
                        s: i,
                        n: function() {
                            return e >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[e++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var n, c, s = !0, a = !1;
            return {
                s: function() {
                    n = t[Symbol.iterator]()
                },
                n: function() {
                    var t = n.next();
                    return s = t.done,
                    t
                },
                e: function(t) {
                    a = !0,
                    c = t
                },
                f: function() {
                    try {
                        s || null == n.return || n.return()
                    } finally {
                        if (a)
                            throw c
                    }
                }
            }
        }
        function o(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return c(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === i && t.constructor && (i = t.constructor.name),
                "Map" === i || "Set" === i ? Array.from(i) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? c(t, e) : void 0
            }
        }
        function c(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        cc._RF.push(e, "a1f5dGzy/ZDl7mqfiHNadfE", "TaiXiuMain");
        var s = t("TaiXiuBoard")
          , a = t("TaiXiuChat")
          , h = t("BrowserUtil")
          , r = t("Helper")
          , u = t("TaiXiu_efScale");
        cc.Class({
            extends: cc.Component,
            properties: {
                main: {
                    default: null,
                    type: cc.Node
                },
                background: {
                    default: null,
                    type: cc.Node
                },
                inputL: cc.Node,
                inputR: cc.Node,
                inputLTxt: cc.Label,
                inputRTxt: cc.Label,
                inputLeft: {
                    default: null,
                    type: cc.EditBox
                },
                inputRight: {
                    default: null,
                    type: cc.EditBox
                },
                totalLeft: {
                    default: null,
                    type: cc.Label
                },
                totalRight: {
                    default: null,
                    type: cc.Label
                },
                myLeft: {
                    default: null,
                    type: cc.Label
                },
                myRight: {
                    default: null,
                    type: cc.Label
                },
                playerLeft: {
                    default: null,
                    type: cc.Label
                },
                playerRight: {
                    default: null,
                    type: cc.Label
                },
                nodeKetQua: {
                    default: null,
                    type: cc.Node
                },
                labelKetQua: {
                    default: null,
                    type: cc.Label
                },
                timeWait: {
                    default: null,
                    type: cc.Label
                },
                nodeTimeWait: {
                    default: null,
                    type: cc.Node
                },
                timeCuoc: {
                    default: null,
                    type: cc.Label
                },
                timePopup: {
                    default: null,
                    type: cc.Label
                },
                nodeChanLe: {
                    default: null,
                    type: cc.Node
                },
                nodeTaiXiu: {
                    default: null,
                    type: cc.Node
                },
                nodeTimePopup: {
                    default: null,
                    type: cc.Node
                },
                labelPhien: {
                    default: null,
                    type: cc.Label
                },
                diaNan: {
                    default: null,
                    type: cc.Node
                },
                //dangCanKeo: {
                    //default: null,
                    //type: cc.Node
                //},
                dangCuoc: {
                    default: null,
                    type: cc.Node
                },
                effectXoay: {
                    default: null,
                    type: cc.Node
                },
                dangCuocXiu: {
                    default: null,
                    type: cc.Node
                },
                dice: {
                    default: [],
                    type: cc.Sprite
                },
                diceSF: {
                    default: [],
                    type: cc.SpriteFrame
                },
                cointRED: {
                    default: null,
                    type: cc.Node
                },
                cointXU: {
                    default: null,
                    type: cc.Node
                },
                dotLogs: {
                    default: null,
                    type: cc.Node
                },
                gameCover: {
                    default: null,
                    type: cc.Label
                },
                diceAnimation: {
                    default: null,
                    type: cc.Animation
                },
                efTai: u,
                efXiu: u,
                efChan: u,
                efLe: u,
                frameNan: {
                    default: [],
                    type: cc.SpriteFrame
                },
                spriteNan: {
                    default: null,
                    type: cc.Sprite
                },
                dot_black: {
                    default: null,
                    type: cc.SpriteFrame
                },
                dot_white: {
                    default: null,
                    type: cc.SpriteFrame
                },
                dot_yellow: {
                    default: null,
                    type: cc.SpriteFrame
                },
                notice: {
                    default: null,
                    type: cc.Node
                },
                mini_warning: {
                    default: null,
                    type: cc.Prefab
                },
                fontCong: {
                    default: null,
                    type: cc.BitmapFont
                },
                fontTru: {
                    default: null,
                    type: cc.BitmapFont
                },
                WIN_HT: {
                    default: null,
                    type: cc.Label
                },
                WIN_DN: {
                    default: null,
                    type: cc.Label
                },
                LOST_HT: {
                    default: null,
                    type: cc.Label
                },
                LOST_DN: {
                    default: null,
                    type: cc.Label
                },
                TX_Chat: a,
                TX_Board: s,
                red: !0,
                taixiu: !0,
                btnScaleIn: {
                    default: null,
                    type: cc.Node
                },
                btnScaleOut: {
                    default: null,
                    type: cc.Node
                }
            },
            init: function(t) {
                var e = this;
                this.RedT = t,
                cc.RedT.setting.taixiu.data = cc.RedT.setting.taixiu.data || {
                    taixiu: {},
                    chanle: {},
                    du_day: {}
                },
                this.isNan = !1,
                void 0 === cc.RedT.util.fontCong && (cc.RedT.util.fontCong = this.fontCong,
                cc.RedT.util.fontTru = this.fontTru),
                void 0 === cc.RedT.setting.taixiu.red && (cc.RedT.setting.taixiu.red = this.red),
                void 0 === cc.RedT.setting.taixiu.taixiu && (cc.RedT.setting.taixiu.taixiu = this.taixiu),
                void 0 === cc.RedT.setting.taixiu.getLogs && (cc.RedT.setting.taixiu.getLogs = !1),
                void 0 === cc.RedT.setting.taixiu.isNan && (cc.RedT.setting.taixiu.isNan = !1),
                Promise.all(this.dotLogs.children.map(function(t) {
                    var e = t.getComponent(cc.Sprite);
                    return e.mod = t.getComponent("TaiXiuMain_logTips"),
                    e
                })).then(function(t) {
                    e.dotLogs = t
                }),
                this.onDiceAnimationFinish = function(t) {
                    this.setDice(!0),
                    this.isNan ? setTimeout(function() {
                        this.diaNan.active = !1,
                        this.nodeKetQua.active = !0,
                        this.diemSo > 10 ? this.efTai.play() : this.efXiu.play(),
                        this.diemSo % 2 ? this.efLe.play() : this.efChan.play()
                    }
                    .bind(this), 1e4) : (this.dataLogs(),
                    this.nodeKetQua.active = !0,
                    this.diemSo > 10 ? this.efTai.play() : this.efXiu.play(),
                    this.diemSo % 2 ? this.efLe.play() : this.efChan.play()),
                    this.diceAnimation.node.active = !1
                }
                ,
                cc.RedT.setting.taixiu.getLogs && (void 0 !== cc.RedT.setting.taixiu.position && (this.node.position = cc.RedT.setting.taixiu.position),
                void 0 !== cc.RedT.setting.taixiu.time_remain && (cc.RedT.setting.taixiu.time_remain++,
                this.nextRealTime()),
                this.reLoadGame())
            },
            onLoad: function() {
                var t = this;
                this.ttOffset = null,
                this.editboxs = [this.inputLeft, this.inputRight],
                this.TX_Board.init(this),
                this.TX_Chat.init(this),
                this.diaNan.getComponent("TaiXiu_DiaNan").init(this),
                this.keyHandle = function(e) {
                    return e.keyCode === cc.macro.KEY.tab ? (t.changeNextFocusEditBox(),
                    e.preventDefault && e.preventDefault(),
                    !1) : e.keyCode === cc.macro.KEY.enter ? (h.focusGame(),
                    t.onCuocClick(),
                    e.preventDefault && e.preventDefault(),
                    !1) : void 0
                }
                ,
                this.diceAnimation.on("finished", this.onDiceAnimationFinish, this),
                this.onCuocClick = function() {
                    var e = r.getOnlyNumberInString(t.input.string);
                    if (e = parseInt(e),
                    t.input.string = "",
                    t.TX_Board.node.active = !1,
                    isNaN(e) || e < 1e3) {
                        var i = cc.instantiate(t.mini_warning);
                        i.getComponent("mini_warning").text.string = "Ti\u1ec1n c\u01b0\u1ee3c ph\u1ea3i l\u1edbn h\u01a1n 1.000 " + (t.red ? "MEC" : "Xu"),
                        t.notice.addChild(i)
                    } else
                        cc.RedT.send({
                            taixiu: {
                                cuoc: {
                                    red: t.red,
                                    taixiu: t.taixiu,
                                    select: "left" == t.inputOld,
                                    bet: e
                                }
                            }
                        })
                }
                ,
                this.RedT.board && (this.inputL.active = this.inputR.active = !1,
                this.inputLeft.node.active = this.inputRight.node.active = !0)
            },
            onEnable: function() {
                this.background.on(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.background.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.background.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.background.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.background.on(cc.Node.EventType.MOUSE_ENTER, this.setTop, this),
                this.RedT.board && cc.sys.isBrowser && this.addEvent(),
                this.nodeTimePopup.active = !1,
                this.RedT.board && (h.inputAddEvent(this.inputLeft, "input", this.updateValue),
                h.inputAddEvent(this.inputRight, "input", this.updateValue))
            },
            onDisable: function() {
                this.background.off(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.background.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.background.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.background.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.background.off(cc.Node.EventType.MOUSE_ENTER, this.setTop, this),
                this.RedT.board && cc.sys.isBrowser && this.removeEvent(),
                this.clean(),
                cc.RedT.IS_LOGIN && (this.nodeTimePopup.active = !0),
                this.RedT.board && (h.inputRemoveEvent(this.inputLeft, "input", this.updateValue),
                h.inputRemoveEvent(this.inputRight, "input", this.updateValue))
            },
            updateValue: function(t) {
                var e = r.numberWithCommas(r.getOnlyNumberInString(this.value));
                this.value = "0" == e ? "" : e
            },
            addEvent: function() {
                for (var t in this.editboxs)
                    h.getHTMLElementByEditBox(this.editboxs[t]).addEventListener("keydown", this.keyHandle, !1)
            },
            removeEvent: function() {
                for (var t in this.editboxs)
                    h.getHTMLElementByEditBox(this.editboxs[t]).removeEventListener("keydown", this.keyHandle, !1)
            },
            changeNextFocusEditBox: function() {
                for (var t = !1, e = 0, i = this.editboxs.length; e < i; e++)
                    if (h.checkEditBoxFocus(this.editboxs[e])) {
                        h.focusEditBox(this.editboxs[e]),
                        t = !0;
                        break
                    }
                !t && 0 < this.editboxs.length && h.focusEditBox(this.editboxs[1])
            },
            clean: function() {
                this.inputLeft.string = this.inputRight.string = ""
            },
            initGame: function(t) {
                t != this.taixiu && this.onChangerGame()
            },
            onChangerGame: function() {
                cc.RedT.setting.taixiu.taixiu = this.taixiu = !this.taixiu,
                this.gameCover.string = this.taixiu ? "Ch\u1eb5n L\u1ebb" : "T\xe0i X\u1ec9u",
                this.nodeTaiXiu.active = this.taixiu,
                this.nodeChanLe.active = !this.taixiu,
                cc.RedT.setting.taixiu.getLogs && (this.dataLogs(),
                this.RedT.TX_ThongKe.onChangerGame(),
                this.RedT.TX_LichSuPhien.onChangerGame(),
                this.taixiu && this.onDataTaiXiu(cc.RedT.setting.taixiu.data.taixiu),
                !this.taixiu && this.onDataChanLe(cc.RedT.setting.taixiu.data.chanle),
                this.onDuDay(cc.RedT.setting.taixiu.data.du_day))
            },
            onChangerNan: function() {
                cc.RedT.setting.taixiu.isNan = this.isNan = !this.isNan,
                this.spriteNan.spriteFrame = this.isNan ? this.frameNan[1] : this.frameNan[0]
            },
            reLoadGame: function() {
                setTimeout(function() {
                    cc.RedT.setting.taixiu.red != this.red && this.onChangerRED(),
                    cc.RedT.setting.taixiu.taixiu != this.taixiu ? this.onChangerGame() : this.dataLogs(),
                    cc.RedT.setting.taixiu.isNan != this.isNan && this.onChangerNan(),
                    this.onDuDay(cc.RedT.setting.taixiu.data.du_day),
                    cc.RedT.setting.taixiu.taixiu ? this.onDataTaiXiu(cc.RedT.setting.taixiu.data.taixiu) : this.onDataChanLe(cc.RedT.setting.taixiu.data.chanle)
                }
                .bind(this), 50),
                this.setPhien()
            },
            onChangerRED: function() {
                cc.RedT.setting.taixiu.red = this.red = !this.red,
                this.cointRED.active = !this.cointRED.active,
                this.cointXU.active = !this.cointXU.active,
                this.totalLeft.node.color = this.totalRight.node.color = this.red ? this.totalRight.node.color.fromHEX("#FFEB0A") : this.totalRight.node.color.fromHEX("#FFFFFF"),
                this.RedT.TX_LichSuPhien.onChangerCoint(),
                this.taixiu && this.onDataTaiXiu(cc.RedT.setting.taixiu.data.taixiu),
                !this.taixiu && this.onDataChanLe(cc.RedT.setting.taixiu.data.chanle),
                this.onDuDay(cc.RedT.setting.taixiu.data.du_day)
            },
            eventStart: function(t) {
                this.setTop(),
                this.ttOffset = cc.v2(t.touch.getLocationX() - this.node.position.x, t.touch.getLocationY() - this.node.position.y)
            },
            eventMove: function(t) {
                this.node.position = cc.v2(t.touch.getLocationX() - this.ttOffset.x, t.touch.getLocationY() - this.ttOffset.y)
            },
            eventEnd: function() {
                cc.RedT.setting.taixiu.position = this.node.position
            },
            setTop: function() {
                this.node.parent.insertChild(this.node),
                this.RedT.setTop()
            },
            onSelectInput: function(t, e) {
                switch (this.TX_Board.node.active = !0,
                this.inputOld = e,
                e) {
                case "right":
                    this.input = this.RedT.board ? this.inputRight : this.inputRTxt;
                    break;
                case "left":
                    this.input = this.RedT.board ? this.inputLeft : this.inputLTxt
                }
            },
            onChangerInput: function() {
                var t = r.numberWithCommas(r.getOnlyNumberInString(this.input.string));
                this.input.string = "0" == t ? "" : t
            },
            setPhien: function() {
                var t = cc.RedT.setting.taixiu.logs[0].phien + 1;
                this.labelPhien.string = "#" + t
            },
            setDice: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  , i = this;
                Promise.all(this.dice.map(function(n, o) {
                    e && (n.spriteFrame = i.diceSF[cc.RedT.setting.taixiu.logs[0].dice[o] - 1]),
                    n.node.active = t
                }))
            },
            onData: function(t) {
                if (void 0 !== t.get_phien && this.RedT.TX_LichSuPhien.onData(t.get_phien),
                void 0 !== t.err) {
                    var e = cc.instantiate(this.mini_warning);
                    e.getComponent("mini_warning").text.string = t.err,
                    this.notice.addChild(e)
                }
                void 0 !== t.du_day && (Object.assign(cc.RedT.setting.taixiu.data.du_day, t.du_day),
                this.onDuDay(t.du_day)),
                void 0 !== t.taixiu && (Object.assign(cc.RedT.setting.taixiu.data.taixiu, t.taixiu),
                this.taixiu && this.onDataTaiXiu(t.taixiu)),
                void 0 !== t.chanle && (Object.assign(cc.RedT.setting.taixiu.data.chanle, t.chanle),
                !this.taixiu && this.onDataChanLe(t.chanle)),
                void 0 !== t.get_top && this.RedT.TX_Top.onData(t.get_top),
                void 0 !== t.chat && this.TX_Chat.onData(t.chat),
                void 0 !== t.status && this.status(t.status),
                //void 0 !== t.statusCanCau && this.statusCanCau(t.statusCanCau),
                //void 0 !== t.updatePlayerTX && this.updatePlayerTX(t.updatePlayerTX),
                //void 0 !== t.showCanCau && this.showCanCau(t.showCanCau),
                void 0 !== t.get_log && this.RedT.TX_LichSu.onData(t.get_log),
                void 0 !== t.logs && (cc.RedT.setting.taixiu.logs = t.logs,
                this.dataLogs(),
                this.setPhien(),
                cc.RedT.setting.taixiu.time_remain > 60 && (this.setDice(!0),
                this.nodeTimeWait.active = !0,
                this.timeCuoc.node.active = !1),
                cc.RedT.setting.taixiu.getLogs = !0),
                void 0 !== t.time_remain && (cc.RedT.setting.taixiu.time_remain = t.time_remain,
                this.playTime()),
                void 0 !== t.finish && (cc.RedT.setting.taixiu.getLogs && (void 0 !== this.timeInterval && clearInterval(this.timeInterval),
                cc.RedT.setting.taixiu.logs.unshift({
                    dice: [t.finish.dices[0], t.finish.dices[1], t.finish.dices[2]],
                    phien: t.finish.phien
                }),
                cc.RedT.setting.taixiu.logs.length > 120 && cc.RedT.setting.taixiu.logs.pop(),
                this.diemSo = t.finish.dices[0] + t.finish.dices[1] + t.finish.dices[2],
                this.labelKetQua.string = this.diemSo,
                this.isNan ? (this.diaNan.active = !0,
                this.diaNan.position = cc.v2(0, 0),
                this.spriteNan.node.active = !1,
                this.onDiceAnimationFinish()) : (this.diceAnimation.node.active = !0,
                this.node.activeInHierarchy ? this.diceAnimation.play() : this.onDiceAnimationFinish()),
                this.nodeTimeWait.active = !0,
                this.timeCuoc.node.active = !1),
                cc.RedT.setting.taixiu.time_remain = 77,
                this.playTime())
            },
            efStop: function() {
                this.efTai.stop(),
                this.efXiu.stop(),
                this.efLe.stop(),
                this.efChan.stop()
            },
            playTime: function() {
                void 0 !== this.timeInterval && clearInterval(this.timeInterval),
                this.timeInterval = setInterval(function() {
                    if (cc.RedT.setting.taixiu.time_remain > 61) {
                        var t = r.numberPad(cc.RedT.setting.taixiu.time_remain - 62, 2);
                        this.timePopup.node.active && (this.timePopup.string = t) && (this.timePopup.node.color = cc.color(255, 255, 255, 255)),
                        this.timeWait.string = "00:" + r.numberPad(t, 2),
                        cc.RedT.setting.taixiu.time_remain < 72 && (this.efStop(),
                        this.nodeKetQua.active = !1,
                        this.isNan && (this.diaNan.active = !1))
                    } else if (this.dice[0].node.active && (this.setDice(!1, !1),
                    this.reset()),
                    this.efStop(),
                    this.nodeTimeWait.active = this.nodeKetQua.active = this.diaNan.active = !1,
                    cc.RedT.setting.taixiu.time_remain > 6 && (this.timeCuoc.node.active = this.spriteNan.node.active = !0),
                    cc.RedT.setting.taixiu.time_remain > 0) {
                        t = r.numberPad(cc.RedT.setting.taixiu.time_remain - 1, 2);
                        cc.RedT.setting.taixiu.getLogs && (this.timeCuoc.string = "00:" + t),
                        this.timePopup.node.active && (this.timePopup.string = t) && (this.timePopup.node.color = cc.color(255, 255, 255, 255)),
                        cc.RedT.setting.taixiu.time_remain <= 10 ? this.timeCuoc.node.color = cc.color(255, 69, 69, 255) : this.timeCuoc.node.color = cc.color(255, 220, 124, 255)
                    } else
                        clearInterval(this.timeInterval);
                    cc.RedT.setting.taixiu.time_remain--
                }
                .bind(this), 1e3)
            },
            nextRealTime: function() {
                if (cc.RedT.setting.taixiu.time_remain > 61) {
                    this.setDice(!0),
                    this.nodeTimeWait.active = !0,
                    this.timeCuoc.node.active = !1;
                    var t = r.numberPad(cc.RedT.setting.taixiu.time_remain - 62, 2);
                    this.timePopup.node.color = cc.color(255, 255, 255, 255),
                    this.timePopup.string = t,
                    this.timeWait.string = "00:" + r.numberPad(t, 2)
                } else if (this.nodeTimeWait.active = !1,
                this.timeCuoc.node.active = !0,
                cc.RedT.setting.taixiu.time_remain > 0) {
                    t = r.numberPad(cc.RedT.setting.taixiu.time_remain - 1, 2);
                    cc.RedT.setting.taixiu.getLogs && (this.timeCuoc.string = "00:" + t),
                    this.timePopup.node.color = cc.color(255, 255, 255, 255),
                    this.timePopup.string = t,
                    cc.RedT.setting.taixiu.time_remain <= 10 ? this.timeCuoc.node.color = cc.color(255, 69, 69, 255) : this.timeCuoc.node.color = cc.Color.WHITE
                }
            },
            onDataChanLe: function(t) {
                this.red ? (void 0 !== t.red_chan && (this.totalLeft.string = r.numberWithCommas(t.red_chan)),
                void 0 !== t.red_le && (this.totalRight.string = r.numberWithCommas(t.red_le)),
                void 0 !== t.red_me_chan && (this.myLeft.string = r.numberWithCommas(t.red_me_chan)),
                void 0 !== t.red_me_le && (this.myRight.string = r.numberWithCommas(t.red_me_le)),
                void 0 !== t.red_player_chan && (this.playerLeft.string = r.numberWithCommas(t.red_player_chan)),
                void 0 !== t.red_player_le && (this.playerRight.string = r.numberWithCommas(t.red_player_le))) : (void 0 !== t.xu_chan && (this.totalLeft.string = r.numberWithCommas(t.xu_chan)),
                void 0 !== t.xu_le && (this.totalRight.string = r.numberWithCommas(t.xu_le)),
                void 0 !== t.xu_me_chan && (this.myLeft.string = r.numberWithCommas(t.xu_me_chan)),
                void 0 !== t.xu_me_le && (this.myRight.string = r.numberWithCommas(t.xu_me_le)),
                void 0 !== t.xu_player_chan && (this.playerLeft.string = r.numberWithCommas(t.xu_player_chan)),
                void 0 !== t.xu_player_le && (this.playerRight.string = r.numberWithCommas(t.xu_player_le)))
            },
            onDataTaiXiu: function(t) {
                void 0 !== cc.RedT.inGame.onGetTaiXiu && cc.RedT.inGame.onGetTaiXiu(t.red_tai, t.red_xiu),
                this.red ? (t.red_me_tai > 0 && (this.dangCuoc.active = !0),
                t.red_me_xiu > 0 && (this.dangCuocXiu.active = !0),
                void 0 !== t.red_tai && (this.totalLeft.string = r.numberWithCommas(t.red_tai)),
                void 0 !== t.red_xiu && (this.totalRight.string = r.numberWithCommas(t.red_xiu)),
                void 0 !== t.red_me_tai && (this.myLeft.string = r.numberWithCommas(t.red_me_tai)),
                void 0 !== t.red_me_xiu && (this.myRight.string = r.numberWithCommas(t.red_me_xiu)),
                void 0 !== t.red_player_tai && (this.playerLeft.string = r.numberWithCommas(t.red_player_tai)),
                void 0 !== t.red_player_xiu && (this.playerRight.string = r.numberWithCommas(t.red_player_xiu))) : (void 0 !== t.xu_tai && (this.totalLeft.string = r.numberWithCommas(t.xu_tai)),
                void 0 !== t.xu_xiu && (this.totalRight.string = r.numberWithCommas(t.xu_xiu)),
                void 0 !== t.xu_me_tai && (this.myLeft.string = r.numberWithCommas(t.xu_me_tai)),
                void 0 !== t.xu_me_xiu && (this.myRight.string = r.numberWithCommas(t.xu_me_xiu)),
                void 0 !== t.xu_player_tai && (this.playerLeft.string = r.numberWithCommas(t.xu_player_tai)),
                void 0 !== t.xu_player_xiu && (this.playerRight.string = r.numberWithCommas(t.xu_player_xiu)))
            },
            onDuDay: function(t) {
                this.taixiu ? this.red ? (this.WIN_HT.string = t.tLineWinRedH,
                this.WIN_DN.string = t.tLineWinRed,
                this.LOST_HT.string = t.tLineLostRedH,
                this.LOST_DN.string = t.tLineLostRed) : (this.WIN_HT.string = t.tLineWinXuH,
                this.WIN_DN.string = t.tLineWinXu,
                this.LOST_HT.string = t.tLineLostXuH,
                this.LOST_DN.string = t.tLineLostXu) : this.red ? (this.WIN_HT.string = t.cLineWinRedH,
                this.WIN_DN.string = t.cLineWinRed,
                this.LOST_HT.string = t.cLineLostRedH,
                this.LOST_DN.string = t.cLineLostRed) : (this.WIN_HT.string = t.cLineWinXuH,
                this.WIN_DN.string = t.cLineWinXu,
                this.LOST_HT.string = t.cLineLostXuH,
                this.LOST_DN.string = t.cLineLostXu)
            },
            dataLogs: function() {
                if (cc.RedT.setting.taixiu.logs.length) {
                    var t = this;
                    Promise.all(this.dotLogs.map(function(e, i) {
                        var n = cc.RedT.setting.taixiu.logs[i];
                        if (void 0 !== n) {
                            var o = n.dice[0] + n.dice[1] + n.dice[2];
                            e.node.active = !0,
                            e.node.phien = n.phien,
                            e.mod.text.string = n.dice[0] + "-" + n.dice[1] + "-" + n.dice[2],
                            e.spriteFrame = t.taixiu ? o < 11 ? t.dot_white : t.dot_black : o % 2 ? t.dot_black : t.dot_yellow
                        } else
                            e.node.active = !1
                    }));
                    var e = []
                      , i = []
                      , o = []
                      , c = []
                      , s = -1
                      , a = []
                      , h = []
                      , r = 0
                      , u = 0
                      , d = cc.RedT.setting.taixiu.logs.slice(0, 19);
                    d.reverse();
                    new Promise(function(n, s) {
                        for (var a = 0; a < d.length; a++) {
                            if (void 0 !== d[a]) {
                                t.RedT.TX_ThongKe.lineAc(a, !0);
                                var h = d[a].dice[0]
                                  , r = d[a].dice[1]
                                  , u = d[a].dice[2]
                                  , l = h + r + u;
                                e[a] = {
                                    x: 28 * a,
                                    y: 28 * h - 28,
                                    dice: h
                                },
                                i[a] = {
                                    x: 28 * a,
                                    y: 28 * r - 28,
                                    dice: r
                                },
                                o[a] = {
                                    x: 28 * a,
                                    y: 28 * u - 28,
                                    dice: u
                                },
                                c[a] = {
                                    x: 27.7 * a,
                                    y: 9.233 * l - 27.7,
                                    tong: l
                                }
                            } else
                                t.RedT.TX_ThongKe.lineAc(a, !1)
                        }
                        t.RedT.TX_ThongKe.draw(t.RedT.TX_ThongKe.dice1_line, t.RedT.TX_ThongKe.dice1_dots, e),
                        t.RedT.TX_ThongKe.draw(t.RedT.TX_ThongKe.dice2_line, t.RedT.TX_ThongKe.dice2_dots, i),
                        t.RedT.TX_ThongKe.draw(t.RedT.TX_ThongKe.dice3_line, t.RedT.TX_ThongKe.dice3_dots, o),
                        t.RedT.TX_ThongKe.draw_Tong(t.RedT.TX_ThongKe.tong_line, c)
                    }
                    );
                    var l = Promise.all(this.RedT.TX_ThongKe.KetQuaDot.map(function(e, i) {
                        var n = cc.RedT.setting.taixiu.logs[i];
                        if (void 0 !== n) {
                            e.node.active = !0;
                            var o = n.dice[0] + n.dice[1] + n.dice[2];
                            return e.spriteFrame = t.taixiu ? o < 11 ? t.dot_white : t.dot_black : o % 2 ? t.dot_black : t.dot_yellow,
                            t.taixiu ? o > 10 ? 1 : 0 : o % 2 ? 0 : 1
                        }
                        return e.node.active = !1,
                        -1
                    }))
                      , p = new Promise(function(e, i) {
                        var o = cc.RedT.setting.taixiu.logs.slice();
                        o.reverse();
                        var c, r = n(o);
                        try {
                            for (r.s(); !(c = r.n()).done; ) {
                                var u = c.value
                                  , d = u.dice[0] + u.dice[1] + u.dice[2]
                                  , l = t.taixiu ? d > 10 ? 1 : 0 : d % 2 ? 0 : 1;
                                -1 === s && (s = l),
                                (l != s || h.length > 4) && (s = l,
                                a.push(h),
                                h = []),
                                l == s && h.push(d)
                            }
                        } catch (t) {
                            r.e(t)
                        } finally {
                            r.f()
                        }
                        a.push(h),
                        e(a)
                    }
                    );
                    Promise.all([l, p]).then(function(e) {
                        var i = e[1];
                        i.reverse(),
                        (i = i.slice(0, 20)).reverse(),
                        t.RedT.TX_ThongKe.KetQuaLeft.string = e[0].filter(function(t) {
                            return 1 == t
                        }).length,
                        t.RedT.TX_ThongKe.KetQuaRight.string = e[0].filter(function(t) {
                            return 0 == t
                        }).length,
                        Promise.all(t.RedT.TX_ThongKe.DiemSoCel.map(function(e, n) {
                            var o = i[n];
                            if (void 0 !== o)
                                return e.active = !0,
                                Promise.all(e.RedT.map(function(e, i) {
                                    var n = o[i];
                                    if (void 0 !== n) {
                                        var c = t.taixiu ? n > 10 : !(n % 2);
                                        r = c ? r + 1 : r,
                                        u = c ? u : u + 1,
                                        e.active = !0;
                                        var s = e.children[0].getComponent(cc.Sprite);
                                        null != s && (s.spriteFrame = (t.taixiu,
                                        c ? t.dot_black : t.dot_white),
                                        s.node.scaleX = .8,
                                        s.node.scaleY = .8);
                                        var a = e.children[1].getComponent(cc.Label);
                                        null != a && (a.string = n,
                                        a.node.color = t.taixiu ? c ? cc.Color.WHITE : cc.Color.BLACK : c ? cc.Color.BLACK : cc.Color.WHITE)
                                    } else
                                        e.active = !1
                                }));
                            e.active = !1
                        })).then(function(e) {
                            t.RedT.TX_ThongKe.DiemSoLeft.string = r,
                            t.RedT.TX_ThongKe.DiemSoRight.string = u
                        })
                    })
                }
            },
            reset: function() {
                this.setPhien(),
                this.isNan && this.dataLogs(),
                this.dangCuoc.active = !1,
                this.dangCuocXiu.active = !1,
                //this.dangCanKeo.active = !1,
                cc.RedT.setting.taixiu.data.chanle.red_chan = cc.RedT.setting.taixiu.data.chanle.red_le = cc.RedT.setting.taixiu.data.chanle.red_me_chan = cc.RedT.setting.taixiu.data.chanle.red_me_le = cc.RedT.setting.taixiu.data.chanle.red_player_chan = cc.RedT.setting.taixiu.data.chanle.red_player_le = cc.RedT.setting.taixiu.data.chanle.xu_chan = cc.RedT.setting.taixiu.data.chanle.xu_le = cc.RedT.setting.taixiu.data.chanle.xu_me_chan = cc.RedT.setting.taixiu.data.chanle.xu_me_le = cc.RedT.setting.taixiu.data.chanle.xu_player_chan = cc.RedT.setting.taixiu.data.chanle.xu_player_le = cc.RedT.setting.taixiu.data.taixiu.red_me_tai = cc.RedT.setting.taixiu.data.taixiu.red_me_xiu = cc.RedT.setting.taixiu.data.taixiu.red_player_tai = cc.RedT.setting.taixiu.data.taixiu.red_player_xiu = cc.RedT.setting.taixiu.data.taixiu.red_tai = cc.RedT.setting.taixiu.data.taixiu.red_xiu = cc.RedT.setting.taixiu.data.taixiu.xu_me_tai = cc.RedT.setting.taixiu.data.taixiu.xu_me_xiu = cc.RedT.setting.taixiu.data.taixiu.xu_player_tai = cc.RedT.setting.taixiu.data.taixiu.xu_player_xiu = cc.RedT.setting.taixiu.data.taixiu.xu_tai = cc.RedT.setting.taixiu.data.taixiu.xu_xiu = this.totalLeft.string = this.totalRight.string = this.myLeft.string = this.myRight.string = this.playerLeft.string = this.playerRight.string = 0
            },
            setDefautl: function() {
                cc.RedT.setting.taixiu.getLogs = this.nodeTimePopup.active = !1,
                void 0 !== this.timeInterval && clearInterval(this.timeInterval),
                this.TX_Chat.reset()
            },
            status: function(t) {
                setTimeout(function() {
                    if (!this.isNan && t.totalwin > 0) {
                        var e = new cc.Node;
                        e.addComponent(cc.Label),
                        (e = e.getComponent(cc.Label)).string = "+" + r.numberWithCommas(t.totalwin),
                        e.font = this.fontCong,
                        e.lineHeight = 130,
                        e.fontSize = 22,
                        e.node.position = cc.v2(t.select ? -252 : 252, -50),
                        this.notice.addChild(e.node),
                        e.node.runAction(cc.sequence(cc.moveTo(3, cc.v2(t.select ? -252 : 252, 130)), cc.callFunc(function() {
                            this.node.destroy()
                        }, e)))
                    }
                    cc.RedT.send({
                        taixiu: {
                            get_new: !0
                        }
                    })
                }
                .bind(this), 2e3)
            },
            /*statusCanCau: function(t) {
                if (void 0 !== t.tralai && t.tralai > 0) {
                    var e = new cc.Node;
                    e.addComponent(cc.Label),
                    (e = e.getComponent(cc.Label)).string = "+" + r.numberWithCommas(t.tralai),
                    e.font = this.fontCong,
                    e.lineHeight = 130,
                    e.fontSize = 22,
                    e.node.position = cc.v2(t.select ? -252 : 252, -50),
                    this.notice.addChild(e.node),
                    e.node.runAction(cc.sequence(cc.moveTo(3, cc.v2(t.select ? -252 : 252, 130)), cc.callFunc(function() {
                        this.node.destroy()
                    }, e))),
                    t.isLechTai ? void 0 !== t.totalMeRed && (this.myLeft.string = r.numberWithCommas(r.getOnlyNumberInString(this.myLeft.string) - t.tralai)) : void 0 !== t.totalMeRed && (this.myRight.string = r.numberWithCommas(r.getOnlyNumberInString(this.myRight.string) - t.tralai))
                }
            },
            updatePlayerTX: function(t) {
                t.isLechTai ? (this.playerLeft.string = r.numberWithCommas(t.totalPlayerAfterBack),
                this.totalRight.string = r.numberWithCommas(t.totalRed),
                this.totalLeft.string = r.numberWithCommas(t.totalRed)) : (this.playerRight.string = r.numberWithCommas(t.totalPlayerAfterBack),
                this.totalLeft.string = r.numberWithCommas(t.totalRed),
                this.totalRight.string = r.numberWithCommas(t.totalRed))
            },
            showCanCau: function(t) {
                //this.dangCanKeo.active = !0,
                this.timeCuoc.node.active = !1
            },*/
            zoom: function(t) {
                1.2 == this.main.getScale() ? (this.main.setScale(1, 1),
                this.btnScaleIn.active = !0,
                this.btnScaleOut.active = !1) : (this.main.setScale(1.2, 1.2),
                this.btnScaleIn.active = !1,
                this.btnScaleOut.active = !0)
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil",
        Helper: "Helper",
        TaiXiuBoard: "TaiXiuBoard",
        TaiXiuChat: "TaiXiuChat",
        TaiXiu_efScale: "TaiXiu_efScale"
    }],
    TaiXiuThongKe: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "44a1auDXjdMUYNeCt2i6vXW", "TaiXiuThongKe"),
        cc.Class({
            extends: cc.Component,
            properties: {
                background: {
                    default: null,
                    type: cc.Node
                },
                header: {
                    default: null,
                    type: cc.Node
                },
                body: {
                    default: null,
                    type: cc.Node
                },
                nodeTaiXiu: {
                    default: null,
                    type: cc.Node
                },
                nodeChanLe: {
                    default: null,
                    type: cc.Node
                },
                KetQuaLeft: {
                    default: null,
                    type: cc.Label
                },
                KetQuaRight: {
                    default: null,
                    type: cc.Label
                },
                KetQuaDot: {
                    default: null,
                    type: cc.Node
                },
                DiemSoCel: {
                    default: null,
                    type: cc.Node
                },
                DiemSoLeft: {
                    default: null,
                    type: cc.Label
                },
                DiemSoRight: {
                    default: null,
                    type: cc.Label
                },
                node1: {
                    default: null,
                    type: cc.Node
                },
                node2: {
                    default: null,
                    type: cc.Node
                },
                dice1_line: {
                    default: null,
                    type: cc.Graphics
                },
                dice2_line: {
                    default: null,
                    type: cc.Graphics
                },
                dice3_line: {
                    default: null,
                    type: cc.Graphics
                },
                tong_line: {
                    default: null,
                    type: cc.Graphics
                },
                dice1_dot: {
                    default: null,
                    type: cc.Node
                },
                dice2_dot: {
                    default: null,
                    type: cc.Node
                },
                dice3_dot: {
                    default: null,
                    type: cc.Node
                },
                tong_dot: {
                    default: null,
                    type: cc.Node
                },
                line_dotT: {
                    default: null,
                    type: cc.Node
                },
                line_dot1: {
                    default: null,
                    type: cc.Node
                },
                line_dot2: {
                    default: null,
                    type: cc.Node
                },
                line_dot3: {
                    default: null,
                    type: cc.Node
                }
            },
            init: function(t) {
                var e = this;
                this.RedT = t,
                void 0 !== cc.RedT.setting.taixiu.tk_position && (this.node.position = cc.RedT.setting.taixiu.tk_position),
                void 0 !== cc.RedT.setting.taixiu.tk_active && (this.node.active = cc.RedT.setting.taixiu.tk_active),
                Promise.all(this.KetQuaDot.children.map(function(t) {
                    return t.getComponent(cc.Sprite)
                })).then(function(t) {
                    e.KetQuaDot = t
                }),
                Promise.all(this.DiemSoCel.children.map(function(t) {
                    return t.RedT = Promise.all(t.children.map(function(t) {
                        return t.text = t.children[0].getComponent(cc.Label),
                        t
                    })),
                    t.RedT.then(function(e) {
                        t.RedT = e
                    }),
                    t
                })).then(function(t) {
                    e.DiemSoCel = t
                }),
                Promise.all(this.dice1_dot.children.map(function(t) {
                    return t.text = t.children[0].getComponent(cc.Label),
                    t
                })).then(function(t) {
                    e.dice1_dots = t
                }),
                Promise.all(this.dice2_dot.children.map(function(t) {
                    return t.text = t.children[0].getComponent(cc.Label),
                    t
                })).then(function(t) {
                    e.dice2_dots = t
                }),
                Promise.all(this.dice3_dot.children.map(function(t) {
                    return t.text = t.children[0].getComponent(cc.Label),
                    t
                })).then(function(t) {
                    e.dice3_dots = t
                }),
                Promise.all(this.tong_dot.children.map(function(t) {
                    return t.text = t.children[0].getComponent(cc.Label),
                    t
                })).then(function(t) {
                    e.tong_dots = t
                })
            },
            onLoad: function() {
                var t = this;
                this.ttOffset = null,
                Promise.all(this.header.children.map(function(t) {
                    return t.getComponent("itemContentMenu")
                })).then(function(e) {
                    t.header = e
                })
            },
            onEnable: function() {
                this.background.on(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.background.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.background.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.background.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.background.on(cc.Node.EventType.MOUSE_ENTER, this.setTop, this)
            },
            onDisable: function() {
                this.background.off(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.background.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.background.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.background.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.background.off(cc.Node.EventType.MOUSE_ENTER, this.setTop, this)
            },
            onChangerGame: function() {
                this.nodeTaiXiu.active = !this.nodeTaiXiu.active,
                this.nodeChanLe.active = !this.nodeChanLe.active
            },
            eventStart: function(t) {
                this.setTop(),
                this.ttOffset = cc.v2(t.touch.getLocationX() - this.node.position.x, t.touch.getLocationY() - this.node.position.y)
            },
            eventMove: function(t) {
                this.node.position = cc.v2(t.touch.getLocationX() - this.ttOffset.x, t.touch.getLocationY() - this.ttOffset.y)
            },
            eventEnd: function() {
                cc.RedT.setting.taixiu.tk_position = this.node.position
            },
            setTop: function() {
                this.node.parent.insertChild(this.node),
                this.RedT.setTop()
            },
            onSelectHeader: function(t, e) {
                Promise.all(this.header.map(function(t) {
                    t.node.name == e ? t.select() : t.unselect()
                })),
                Promise.all(this.body.children.map(function(t) {
                    t.name == e ? t.active = !0 : t.active = !1
                }))
            },
            onToggleClick: function() {
                cc.RedT.audio.playClick(),
                this.setTop(),
                this.node.active = cc.RedT.setting.taixiu.tk_active = !this.node.active
            },
            onChangerClick: function() {
                this.node1.active = !this.node1.active,
                this.node2.active = !this.node2.active
            },
            draw: function(t, e, i) {
                t.clear();
                for (var n = i.length, o = 0; o < n; o++) {
                    var c = e[o]
                      , s = i[o];
                    c.text.string = s.dice,
                    c.position = cc.v2(c.position.x, s.y),
                    0 === o ? t.moveTo(s.x, s.y) : t.lineTo(s.x, s.y)
                }
                t.stroke()
            },
            draw_Tong: function(t, e) {
                t.clear();
                for (var i = 0, n = e.length; i < n; i++) {
                    var o = e[i]
                      , c = this.tong_dots[i];
                    0 === i ? t.moveTo(o.x, o.y) : t.lineTo(o.x, o.y),
                    c.text.string = o.tong,
                    c.text.node.color = this.RedT.TX_Main.taixiu ? o.tong > 10 ? cc.Color.WHITE : cc.Color.BLACK : o.tong % 2 ? cc.Color.WHITE : cc.Color.BLACK,
                    c.position = cc.v2(c.position.x, o.y),
                    c.color = this.RedT.TX_Main.taixiu ? o.tong > 10 ? cc.Color.BLACK : cc.Color.WHITE : o.tong % 2 ? cc.Color.BLACK : cc.Color.YELLOW
                }
                t.stroke()
            },
            lineAc: function(t, e) {
                this.dice1_dots[t].active = e,
                this.dice2_dots[t].active = e,
                this.dice3_dots[t].active = e,
                this.tong_dots[t].active = e
            },
            showLineTong: function() {
                cc.RedT.audio.playClick(),
                this.tong_dot.active = !this.tong_dot.active,
                this.tong_line.node.active = !this.tong_line.node.active,
                this.line_dotT.active = !this.line_dotT.active
            },
            showLineDice1: function() {
                cc.RedT.audio.playClick(),
                this.dice1_dot.active = !this.dice1_dot.active,
                this.dice1_line.node.active = !this.dice1_line.node.active,
                this.line_dot1.active = !this.line_dot1.active
            },
            showLineDice2: function() {
                cc.RedT.audio.playClick(),
                this.dice2_dot.active = !this.dice2_dot.active,
                this.dice2_line.node.active = !this.dice2_line.node.active,
                this.line_dot2.active = !this.line_dot2.active
            },
            showLineDice3: function() {
                cc.RedT.audio.playClick(),
                this.dice3_dot.active = !this.dice3_dot.active,
                this.dice3_line.node.active = !this.dice3_line.node.active,
                this.line_dot3.active = !this.line_dot3.active
            }
        }),
        cc._RF.pop()
    }
    , {}],
    TaiXiuTop: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "5c979o56KBFA7IxEoBHBpgJ", "TaiXiuTop");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                background: {
                    default: null,
                    type: cc.Node
                },
                scrollview: {
                    default: null,
                    type: cc.ScrollView
                },
                item: {
                    default: null,
                    type: cc.Prefab
                },
                title: {
                    default: null,
                    type: cc.Label
                },
                game: {
                    default: null,
                    type: cc.Label
                },
                cRed: {
                    default: null,
                    type: cc.Node
                },
                cXu: {
                    default: null,
                    type: cc.Node
                }
            },
            init: function(t) {
                this.RedT = t,
                void 0 !== cc.RedT.setting.taixiu.top_position && (this.node.position = cc.RedT.setting.taixiu.top_position),
                void 0 !== cc.RedT.setting.taixiu.top_active && (this.node.active = cc.RedT.setting.taixiu.top_active)
            },
            onLoad: function() {
                this.ttOffset = null,
                this.taixiu = this.red = !0
            },
            onEnable: function() {
                this.background.on(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.background.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.background.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.background.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.background.on(cc.Node.EventType.MOUSE_ENTER, this.setTop, this),
                this.get_data()
            },
            onDisable: function() {
                this.background.off(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.background.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.background.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.background.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.background.off(cc.Node.EventType.MOUSE_ENTER, this.setTop, this)
            },
            eventStart: function(t) {
                this.setTop(),
                this.ttOffset = cc.v2(t.touch.getLocationX() - this.node.position.x, t.touch.getLocationY() - this.node.position.y)
            },
            eventMove: function(t) {
                this.node.position = cc.v2(t.touch.getLocationX() - this.ttOffset.x, t.touch.getLocationY() - this.ttOffset.y)
            },
            eventEnd: function() {
                cc.RedT.setting.taixiu.top_position = this.node.position
            },
            setTop: function() {
                this.node.parent.insertChild(this.node),
                this.RedT.setTop()
            },
            toggle: function() {
                this.setTop(),
                cc.RedT.audio.playClick(),
                this.node.active = cc.RedT.setting.taixiu.top_active = !this.node.active
            },
            onChangerGame: function() {
                this.taixiu = !this.taixiu,
                this.game.string = this.taixiu ? "Ch\u1eb5n L\u1ebb" : "T\xe0i X\u1ec9u",
                this.title.string = this.taixiu ? "TOP T\xc0I X\u1ec8U" : "TOP CH\u1eb4N L\u1eba",
                this.get_data()
            },
            onChangerRed: function() {
                this.red = !this.red,
                this.cRed.active = !this.cRed.active,
                this.cXu.active = !this.cXu.active,
                this.get_data()
            },
            get_data: function() {
                cc.RedT.send({
                    taixiu: {
                        get_top: {
                            red: this.red,
                            taixiu: this.taixiu
                        }
                    }
                })
            },
            onData: function(t) {
                this.scrollview.content.destroyAllChildren();
                var e = this;
                Promise.all(t.map(function(t, i) {
                    var o = cc.instantiate(e.item)
                      , c = o.getComponent("TaiXiuLichSu_item");
                    c.time.string = i + 1,
                    c.phien.string = t.name,
                    c.dat.string = n.numberWithCommas(t.bet),
                    c.node.children[0].active = i % 2,
                    e.scrollview.content.addChild(o)
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    /*TaiXiu_CanKeo: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "49343BWGbpJ659ZD5pIgFsV", "TaiXiu_CanKeo"),
        cc.Class({
            extends: cc.Component,
            init: function(t) {
                this.RedT = t
            },
            onLoad: function() {
                this.ttOffset = null
            },
            onEnable: function() {},
            onDisable: function() {},
            eventStart: function(t) {
                this.setTop(),
                this.ttOffset = cc.v2(t.touch.getLocationX() - this.node.position.x, t.touch.getLocationY() - this.node.position.y)
            },
            eventMove: function(t) {
                this.node.position = cc.v2(t.touch.getLocationX() - this.ttOffset.x, t.touch.getLocationY() - this.ttOffset.y)
            },
            eventEnd: function() {},
            setTop: function() {
                this.RedT.setTop()
            }
        }),
        cc._RF.pop()
    }
    , {}],*/
    TaiXiu_DiaNan: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "48692rupkxLUqFjhMjk6S43", "TaiXiu_DiaNan"),
        cc.Class({
            extends: cc.Component,
            init: function(t) {
                this.RedT = t
            },
            onLoad: function() {
                this.ttOffset = null
            },
            onEnable: function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.node.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.node.on(cc.Node.EventType.MOUSE_ENTER, this.setTop, this)
            },
            onDisable: function() {
                this.node.off(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.node.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.node.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.node.off(cc.Node.EventType.MOUSE_ENTER, this.setTop, this)
            },
            eventStart: function(t) {
                this.setTop(),
                this.ttOffset = cc.v2(t.touch.getLocationX() - this.node.position.x, t.touch.getLocationY() - this.node.position.y)
            },
            eventMove: function(t) {
                this.node.position = cc.v2(t.touch.getLocationX() - this.ttOffset.x, t.touch.getLocationY() - this.ttOffset.y)
            },
            eventEnd: function() {},
            setTop: function() {
                this.RedT.setTop()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    TaiXiu_efScale: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "1dcc4TRp5REZa8M+IY8ljzM", "TaiXiu_efScale"),
        cc.Class({
            extends: cc.Component,
            play: function() {
                this.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.15, .85), cc.scaleTo(.15, 1.15))))
            },
            stop: function() {
                this.node.stopAllActions(),
                this.node.scale = 1
            }
        }),
        cc._RF.pop()
    }
    , {}],
    TaiXiu: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "72234cg0ORLl7lPDSiermrl", "TaiXiu");
        var n = t("TaiXiuMain")
          , o = t("TaiXiuThongKe")
          , c = t("TaiXiuTop");
        cc.Class({
            extends: cc.Component,
            properties: {
                TX_Main: n,
                TX_ThongKe: o,
                TX_Top: c,
                board: !0
            },
            init: function(t) {
                cc.RedT.setting.taixiu = cc.RedT.setting.taixiu || {
                    getLogs: !1
                },
                this.TX_LichSu = t.Dialog.TaiXiuLichSu,
                this.TX_LichSuPhien = t.Dialog.TaiXiuLichSuPhien,
                this.TX_Main.init(this),
                this.TX_ThongKe.init(this),
                this.TX_Top.init(this),
                "true" == localStorage.getItem("taixiu") && (this.node.active = !0)
            },
            onEnable: function() {
                this.regEvent(!0)
            },
            onDisable: function() {
                this.regEvent(!1)
            },
            regEvent: function(t) {
                cc.RedT.send({
                    taixiu: cc.RedT.setting.taixiu.getLogs ? {
                        view: t
                    } : {
                        view: t,
                        getLogs: !0
                    }
                })
            },
            setTop: function() {
                this.node.parent.insertChild(this.node)
            },
            openGame: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "1";
                cc.RedT.audio.playClick(),
                cc.RedT.IS_LOGIN ? (this.TX_Main.initGame("1" == e),
                this.node.active = !0,
                localStorage.setItem("taixiu", !0),
                this.setTop()) : cc.RedT.inGame.dialog.showSignIn()
            },
            closeGame: function() {
                cc.RedT.audio.playUnClick(),
                this.node.active = this.TX_Top.node.active = this.TX_ThongKe.node.active = this.TX_Main.TX_Board.node.active = !1,
                localStorage.setItem("taixiu", !1)
            },
            newGame: function() {
                this.TX_ThongKe.node.active = this.TX_Main.TX_Board.node.active = !1,
                this.TX_Main.setDefautl()
            },
            signIn: function() {
                !this.node.active && (this.TX_Main.nodeTimePopup.active = !0)
            }
        }),
        cc._RF.pop()
    }
    , {
        TaiXiuMain: "TaiXiuMain",
        TaiXiuThongKe: "TaiXiuThongKe",
        TaiXiuTop: "TaiXiuTop"
    }],
    TamHung_bonus_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "41d44OoMtBBS5sseW0BdC7f", "TamHung_bonus_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                open: cc.Node,
                close: cc.Node,
                text: cc.Label
            }
        }),
        cc._RF.pop()
    }
    , {}],
    TamHung_dialog: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "3242ahGu+xMooMKVtORzcRm", "TamHung_dialog");
        var n = t("TamHung_history")
          , o = t("TamHung_top");
        cc.Class({
            extends: cc.Component,
            properties: {
                history: n,
                top: o
            },
            init: function() {
                this.actionShow = cc.spawn(cc.scaleTo(.5, 1).easing(cc.easeBackOut(2.5)), cc.fadeTo(.5, 255)),
                this.objShow = null,
                this.objTmp = null
            },
            onClickBack: function() {
                cc.RedT.audio.playUnClick(),
                this.onBack()
            },
            onBack: function() {
                null != this.objShow ? void 0 == this.objShow.previous || null == this.objShow.previous ? (this.objShow.active = !1,
                this.node.active = !1,
                this.objShow = null) : (this.objTmp = this.objShow,
                this.objShow = this.objShow.previous,
                this.objTmp.previous = null,
                this.objTmp.active = !1,
                this.objShow.active = !0,
                this.objTmp = null) : this.node.active = !1
            },
            onClosePrevious: function(t) {
                void 0 !== t.previous && null !== t.previous && (this.onClosePrevious(t.previous),
                delete t.previous),
                t.active = !1
            },
            onCloseDialog: function() {
                null != this.objShow ? void 0 == this.objShow.previous || null == this.objShow.previous ? (this.objShow.active = this.node.active = !1,
                this.objShow = null) : (this.onClosePrevious(this.objShow.previous),
                this.objShow.active = this.node.active = !1,
                delete this.objShow.previous,
                this.objShow = null) : this.node.active = !1
            },
            resetSizeDialog: function(t) {
                t.stopAllActions(),
                t.scale = .5,
                t.opacity = 0
            },
            showHistory: function() {
                this.history.node.previous = this.objShow,
                this.node.active = this.history.node.active = !0,
                this.objShow = this.history.node
            },
            showTop: function() {
                this.node.active = this.top.node.active = !0,
                this.objShow = this.top.node
            }
        }),
        cc._RF.pop()
    }
    , {
        TamHung_history: "TamHung_history",
        TamHung_top: "TamHung_top"
    }],
    TamHung_history: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "54c92+ps1BERo+D70OiEi9L", "TamHung_history");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                page: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0
            },
            onLoad: function() {
                var t = this
                  , e = cc.instantiate(this.page);
                e.y = -315,
                this.node.addChild(e),
                this.page = e.getComponent("Pagination"),
                Promise.all(this.content.children.map(function(t) {
                    return t.getComponent("VQRed_history_item")
                })).then(function(e) {
                    t.content = e
                }),
                this.page.init(this)
            },
            onEnable: function() {
                this.get_data()
            },
            onDisable: function() {},
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                cc.RedT.send({
                    g: {
                        tamhung: {
                            log: {
                                red: this.red,
                                page: t
                            }
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                this.page.onSet(t.page, t.kmess, t.total),
                Promise.all(this.content.map(function(e, i) {
                    var o = t.data[i];
                    void 0 !== o ? (e.node.active = !0,
                    e.time.string = n.getStringDateByTime(o.time),
                    e.phien.string = o.id,
                    e.cuoc.string = n.numberWithCommas(o.bet),
                    e.line.string = o.kq + " D\xf2ng",
                    e.win.string = n.numberWithCommas(o.win)) : e.node.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    TamHung_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "993b8dz2upHU5/8IOAHCPS2", "TamHung_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                icons: {
                    default: [],
                    type: cc.Prefab
                }
            },
            init: function(t) {
                this.RedT = t
            },
            random: function() {
                var t = 7 * Math.random() >> 0;
                return this.setIcon(t),
                t
            },
            setIcon: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.node.removeAllChildren();
                var i = cc.instantiate(this.icons[t]);
                this.node.addChild(i),
                e && (this.data = t)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    TamHung_lines: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "6ee12zYBipMUILNCNzZtku/", "TamHung_lines");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                nodeEfLine: cc.Node,
                nodeLine: cc.Node,
                mainLine: cc.Node
            },
            init: function(t) {
                var e = this;
                this.lines = {
                    1: [1, 1, 1, 1, 1],
                    2: [0, 0, 0, 0, 0],
                    3: [2, 2, 2, 2, 2],
                    4: [1, 1, 0, 1, 1],
                    5: [1, 1, 2, 1, 1],
                    6: [0, 0, 1, 0, 0],
                    7: [2, 2, 1, 2, 2],
                    8: [0, 2, 0, 2, 0],
                    9: [2, 0, 2, 0, 2],
                    10: [1, 0, 2, 0, 1],
                    11: [2, 1, 0, 1, 2],
                    12: [0, 1, 2, 1, 0],
                    13: [1, 2, 1, 0, 1],
                    14: [1, 0, 1, 2, 1],
                    15: [2, 1, 1, 1, 2],
                    16: [0, 1, 1, 1, 0],
                    17: [1, 2, 2, 2, 1],
                    18: [1, 0, 0, 0, 1],
                    19: [2, 2, 1, 0, 0],
                    20: [0, 0, 1, 2, 2]
                },
                this.RedT = t;
                var i = this;
                Promise.all(this.mainLine.children.map(function(t) {
                    return t.getComponent("TamHung_main_line").init(i.RedT)
                })).then(function(t) {
                    e.mainLine = t
                }),
                this.selectAll(null, "1")
            },
            onOpen: function() {
                cc.RedT.audio.playClick(),
                this.node.active = !0
            },
            onClose: function() {
                cc.RedT.audio.playUnClick(),
                this.node.active && this.data.length < 1 ? this.RedT.addNotice("Ch\u1ecdn \xedt nh\u1ea5t 1 d\xf2ng") : this.node.active = !1
            },
            select: function(t) {
                var e = t.target;
                e.children[0].active ? (e.children[0].active = !1,
                e.children[1].active = !0) : (e.children[0].active = !0,
                e.children[1].active = !1),
                this.check()
            },
            check: function() {
                var t = this;
                Promise.all(this.nodeLine.children.map(function(t, e) {
                    return t.children[0].active ? e + 1 : void 0
                })).then(function(e) {
                    Promise.all(e.filter(function(t) {
                        return void 0 !== t
                    })).then(function(e) {
                        t.data = e,
                        t.RedT.labelLine.string = e.length,
                        t.RedT.tong.string = n.numberWithCommas(e.length * n.getOnlyNumberInString(t.RedT.bet.string))
                    })
                })
            },
            selectChan: function() {
                var t = this;
                Promise.all(this.nodeLine.children.map(function(t, e) {
                    var i = e + 1;
                    if (!(i % 2))
                        return t.children[0].active = !1,
                        t.children[1].active = !0,
                        i;
                    t.children[0].active = !0,
                    t.children[1].active = !1
                })).then(function(e) {
                    Promise.all(e.filter(function(t) {
                        return void 0 !== t
                    })).then(function(e) {
                        t.data = e,
                        t.RedT.labelLine.string = e.length,
                        t.RedT.tong.string = n.numberWithCommas(e.length * n.getOnlyNumberInString(t.RedT.bet.string))
                    })
                })
            },
            selectLe: function() {
                var t = this;
                Promise.all(this.nodeLine.children.map(function(t, e) {
                    var i = e + 1;
                    if (i % 2)
                        return t.children[0].active = !1,
                        t.children[1].active = !0,
                        i;
                    t.children[0].active = !0,
                    t.children[1].active = !1
                })).then(function(e) {
                    Promise.all(e.filter(function(t) {
                        return void 0 !== t
                    })).then(function(e) {
                        t.data = e,
                        t.RedT.labelLine.string = e.length,
                        t.RedT.tong.string = n.numberWithCommas(e.length * n.getOnlyNumberInString(t.RedT.bet.string))
                    })
                })
            },
            selectAll: function(t, e) {
                var i = this;
                Promise.all(this.nodeLine.children.map(function(t, i) {
                    var n = "1" == e;
                    return t.children[0].active = n,
                    t.children[1].active = !n,
                    n ? i + 1 : void 0
                })).then(function(t) {
                    Promise.all(t.filter(function(t, e) {
                        return void 0 !== t
                    })).then(function(t) {
                        i.data = t,
                        i.RedT.labelLine.string = t.length,
                        i.RedT.tong.string = n.numberWithCommas(t.length * n.getOnlyNumberInString(i.RedT.bet.string))
                    })
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    TamHung_main_line: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "e41fbzeEnxFFZpTHsY5k5xb", "TamHung_main_line"),
        cc.Class({
            extends: cc.Component,
            init: function(t) {
                return this.RedT = t,
                this
            },
            onEnable: function() {
                this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onhover, this),
                this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this)
            },
            onDisable: function() {
                this.node.off(cc.Node.EventType.MOUSE_ENTER, this.onhover, this),
                this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this)
            },
            onhover: function() {
                this.node.children[0].active = !0
            },
            offhover: function() {
                this.node.children[0].active = !1
            },
            onEf: function() {
                this.onhover(),
                this.node.pauseSystemEvents()
            },
            offEf: function() {
                this.offhover(),
                this.node.resumeSystemEvents()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    TamHung_playBonus: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "ca093vAwc9M0LAnWEKrgD4c", "TamHung_playBonus");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                numberBonus: cc.Label,
                listBox: cc.Node,
                notice: cc.Node,
                numberWin: cc.Label
            },
            init: function(t) {
                this.RedT = t
            },
            onPlay: function() {
                this.reset(),
                this.node.active = !0,
                this.numberBonus.string = 10
            },
            onClickBox: function(t, e) {
                this.numberBonus.string && (cc.RedT.audio.playClick(),
                this.onSend(e))
            },
            closeNotice: function() {
                this.notice.active = this.node.active = !1,
                this.RedT.hieuUng()
            },
            onData: function(t) {
                if (void 0 !== t.box) {
                    var e = this.listBox.children[t.box];
                    e.children[0].active = !1,
                    e.children[1].active = e.children[2].active = !0,
                    e.children[2].getComponent(cc.Label).string = n.numberWithCommas(t.bet),
                    this.numberBonus.string = t.bonus
                }
                void 0 !== t.win && (this.notice.active = !0,
                this.numberWin.string = n.numberWithCommas(t.win),
                this.RedT.vuathang.string = n.numberWithCommas(1 * n.getOnlyNumberInString(this.RedT.vuathang.string) + t.win))
            },
            onSend: function(t) {
                cc.RedT.send({
                    g: {
                        tamhung: {
                            bonus: {
                                box: t
                            }
                        }
                    }
                })
            },
            reset: function() {
                Promise.all(this.listBox.children.map(function(t) {
                    t.children[0].active = !0,
                    t.children[1].active = t.children[2].active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    TamHung_reel: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "e545fq3Rq1E3pVmCCgjeR9n", "TamHung_reel"),
        cc.Class({
            extends: cc.Component,
            init: function(t) {
                var e = this;
                this.RedT = t,
                this.icons = [];
                var i = this;
                Promise.all([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function(t, e) {
                    var n = cc.instantiate(i.RedT.iconPrefab);
                    return i.node.addChild(n),
                    (n = n.getComponent("TamHung_item")).init(i.RedT),
                    n
                })).then(function(t) {
                    e.icons = t,
                    e.icons[e.icons.length - 1].setIcon(e.icons[4].random()),
                    e.icons[e.icons.length - 2].setIcon(e.icons[3].random()),
                    e.icons[e.icons.length - 3].setIcon(e.icons[2].random()),
                    e.icons[e.icons.length - 4].setIcon(e.icons[1].random()),
                    e.icons[e.icons.length - 5].setIcon(e.icons[0].random())
                })
            },
            spin: function(t, e) {
                this.node.stopAllActions();
                var i = cc.moveTo(e, cc.v2(this.node.x, -(this.node.height - 382))).easing(cc.easeInOut(3))
                  , n = cc.callFunc(function() {
                    0 === t && this.RedT.copy(),
                    this.node.y = 0
                }, this);
                if (4 === t) {
                    var o = cc.callFunc(function() {
                        this.RedT.EF_vuathang(),
                        this.node.y = 0,
                        this.RedT.random(),
                        this.RedT.hieuUng()
                    }, this);
                    this.node.runAction(cc.sequence(cc.delayTime(.1 * t), i, o))
                } else
                    this.node.runAction(cc.sequence(cc.delayTime(.1 * t), i, n))
            },
            stop: function() {
                this.node.stopAllActions(),
                this.RedT.copy(),
                this.node.y = 0
            }
        }),
        cc._RF.pop()
    }
    , {}],
    TamHung_top: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "73648OCxmJKR6YBgnOzKRZa", "TamHung_top");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                item: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                cc.RedT.send({
                    g: {
                        tamhung: {
                            top: this.red
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                this.content.removeAllChildren();
                var e = this;
                Promise.all(t.map(function(t, i) {
                    var o = cc.instantiate(e.item)
                      , c = o.getComponent("VQRed_history_item");
                    c.time.string = n.getStringDateByTime(t.time),
                    c.phien.string = t.name,
                    c.cuoc.string = n.numberWithCommas(t.bet),
                    c.line.string = n.numberWithCommas(t.win),
                    c.win.string = 2 == t.type ? "N\u1ed5 H\u0169" : "Th\u1eafng l\u1edbn",
                    o.children[0].active = !(1 & i),
                    e.content.addChild(o)
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    TamHung: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "183b7PV7kZCjKs6uIxokVn0", "TamHung");
        var n = t("Helper")
          , o = t("TamHung_reel")
          , c = t("TamHung_lines")
          , s = t("TamHung_playBonus")
          , a = t("Notice")
          , h = t("TamHung_dialog");
        cc.Class({
            extends: cc.Component,
            properties: {
                gameBonus: s,
                audioBG: cc.AudioSource,
                audioClick: cc.AudioSource,
                redhat: {
                    default: null,
                    type: cc.Node
                },
                reels: {
                    default: [],
                    type: o
                },
                icons: {
                    default: [],
                    type: cc.SpriteFrame
                },
                iconAudios: {
                    default: [],
                    type: cc.SpriteFrame
                },
                betString: {
                    default: [],
                    type: cc.String
                },
                iconPrefab: {
                    default: null,
                    type: cc.Prefab
                },
                BigWin: cc.Animation,
                BigWin_Label: cc.Label,
                NoHu: cc.Animation,
                NoHu_Label: cc.Label,
                EF_Bonus: cc.Animation,
                EF_Free: cc.Animation,
                buttonCoint: cc.Node,
                buttonLine: cc.Node,
                buttonSpin: cc.Node,
                buttonSpinSpeed: cc.Node,
                buttonFree: cc.Node,
                freeLabel: cc.Label,
                buttonAuto: cc.Node,
                buttonStop: cc.Node,
                buttonAudio: cc.Sprite,
                nodeRed: {
                    default: null,
                    type: cc.Node
                },
                nodeXu: {
                    default: null,
                    type: cc.Node
                },
                bet: {
                    default: null,
                    type: cc.Label
                },
                nodeNotice: {
                    default: null,
                    type: cc.Node
                },
                prefabNotice: {
                    default: null,
                    type: cc.Prefab
                },
                MiniPanel: cc.Prefab,
                loading: {
                    default: null,
                    type: cc.Node
                },
                notice: a,
                dialog: h,
                Line: c,
                hu: cc.Label,
                taikhoan: cc.Label,
                tong: cc.Label,
                vuathang: cc.Label,
                labelLine: cc.Label,
                bangThuong: cc.Node,
                efline: cc.Node,
                isAuto: !1,
                isSpin: !1,
                isFreeSpin: !1,
                isAudio: !1,
                red: !0,
                isSpeed: !1,
                isForceSpeed: !1,
                chonCuoc: cc.Node,
                game: cc.Node,
                hu100: cc.Label,
                hu1000: cc.Label,
                hu10000: cc.Label,
                fontThang: cc.Font,
                betSelect: 0
            },
            onLoad: function() {
                cc.RedT.inGame = this;
                var t = cc.instantiate(this.MiniPanel);
                cc.RedT.MiniPanel = t.getComponent("MiniPanel"),
                this.redhat.insertChild(t),
                this.BigWin.on("finished", this.BigWinFinish, this),
                this.BigWin.on("play", this.BigWinPlay, this),
                this.NoHu.on("finished", this.NoHuFinish, this),
                this.NoHu.on("play", this.NoHuPlay, this),
                this.EF_Bonus.on("finished", this.EF_BonusFinish, this),
                this.EF_Free.on("finished", this.EF_FreeFinish, this);
                var e = this;
                this.gameBonus.init(this),
                this.Line.init(this),
                this.dialog.init(),
                this.isAudio = !0,
                Promise.all(this.reels.map(function(t) {
                    t.init(e)
                })),
                cc.RedT.send({
                    scene: "tamhung"
                }),
                this.taikhoan.string = n.numberWithCommas(cc.RedT.user.red),
                this.speed = 400,
                this.onGetAllHu(),
                this.chonCuoc.active = !0,
                this.game.active = !1,
                this.resetSpin(),
                cc.RedT.isSoundBackground() && (cc.RedT.setSoundBackground(!0),
                this.playMusic())
            },
            OnChangerNhacNen: function() {
                this.isAudio ? (this.audioBG.volume = 0,
                this.audioClick.volume = 0,
                this.buttonAudio.spriteFrame = this.iconAudios[1],
                this.isAudio = !1) : (this.audioBG.volume = 1,
                this.audioClick.volume = 1,
                this.buttonAudio.spriteFrame = this.iconAudios[0],
                this.isAudio = !0)
            },
            BigWinPlay: function() {
                var t = cc.callFunc(function() {
                    cc.RedT.audio.playEf("megaWin"),
                    n.numberTo(this.BigWin_Label, 0, this.H_win, 2e3, !0)
                }, this);
                this.BigWin.node.runAction(cc.sequence(cc.delayTime(.3), t))
            },
            BigWinFinish: function() {
                this.isBigWin = !1,
                this.BigWin.node.active = !1,
                this.BigWin_Label.string = "",
                this.showLineWin(!1),
                this.hieuUng()
            },
            NoHuPlay: function() {
                var t = cc.callFunc(function() {
                    cc.RedT.audio.playEf("jackpot"),
                    n.numberTo(this.NoHu_Label, 0, this.H_win, 2e3, !0)
                }, this);
                this.NoHu.node.runAction(cc.sequence(cc.delayTime(.3), t))
            },
            NoHuFinish: function() {
                this.isNoHu = !1,
                this.NoHu.node.active = !1,
                this.NoHu_Label.string = "",
                this.isAuto && this.onAuto(),
                this.showLineWin(!1),
                this.hieuUng()
            },
            EF_BonusFinish: function() {
                this.isBonus = !1,
                this.EF_Bonus.node.active = !1,
                this.gameBonus.onPlay(),
                this.showLineWin(!1)
            },
            EF_FreeFinish: function() {
                this.isFree = !1,
                this.EF_Free.node.active = !1,
                this.showLineWin(!1),
                this.hieuUng()
            },
            EF_vuathang: function() {
                this.showLineWin(!0),
                this.vuathang.string = n.numberWithCommas(this.H_win),
                this.buttonFree.active = !!this.H_free,
                this.buttonSpin.active = !this.H_free,
                this.buttonSpinSpeed.active = !this.H_free,
                this.freeLabel.string = this.H_free
            },
            onChangerBet: function(t, e) {
                cc.RedT.IS_SOUND && this.audioClick.play(),
                this.bet.string = e,
                this.tong.string = n.numberWithCommas(this.Line.data.length * n.getOnlyNumberInString(this.bet.string)),
                this.game.active = !0,
                this.chonCuoc.active = !1,
                this.resetSpin(),
                this.onStop(),
                this.onGetHu()
            },
            onSelectBet: function() {
                this.game.active = !1,
                this.chonCuoc.active = !0,
                this.onGetAllHu(),
                this.onGetHu()
            },
            changerCoint: function() {
                this.red = !this.red,
                this.nodeRed.active = !this.nodeRed.active,
                this.nodeXu.active = !this.nodeXu.active,
                this.userData(cc.RedT.user),
                this.onGetHu()
            },
            onClickSpin: function() {
                cc.RedT.IS_SOUND && this.audioClick.play(),
                this.isSpeed = !1,
                this.onSpin()
            },
            onClickSpinSpeed: function() {
                cc.RedT.IS_SOUND && this.audioClick.play(),
                this.isSpeed = !0,
                this.isAuto && (this.isForceSpeed = !0),
                this.onSpin()
            },
            onAutoSpin: function() {
                cc.RedT.IS_SOUND && this.audioClick.play(),
                this.onGetSpin()
            },
            onClickAuto: function() {
                cc.RedT.audio.playClick(),
                this.onAuto()
            },
            onClickStop: function() {
                cc.RedT.audio.playClick(),
                this.onStop()
            },
            onSpin: function() {
                this.Line.data.length < 1 ? this.addNotice("Ch\u1ecdn \xedt nh\u1ea5t 1 d\xf2ng") : (this.setSpin(),
                this.isSpin || (this.node.stopAllActions(),
                void 0 !== this.eflineN && void 0 !== this.H_line_win && this.H_line_win.length && this.efOneLineWin(this.eflineN, !1),
                this.eflineO = this.eflineN = 0,
                this.isSpin = !0,
                this.onGetSpin()))
            },
            onAuto: function() {
                this.isAuto = !this.isAuto,
                this.buttonAuto.color = this.isAuto ? cc.Color.WHITE : cc.color(200, 200, 200),
                this.buttonStop.active = this.isSpin
            },
            onStop: function() {
                this.isAuto = this.buttonStop.active = !1,
                this.buttonAuto.active = !0,
                this.isForceSpeed = !1,
                this.buttonAuto.color = cc.color(200, 200, 200)
            },
            setSpin: function() {
                this.buttonLine.pauseSystemEvents(),
                this.buttonSpin.pauseSystemEvents(),
                this.buttonSpinSpeed.pauseSystemEvents(),
                this.buttonCoint.pauseSystemEvents()
            },
            resetSpin: function() {
                this.isAuto && this.onAuto(),
                this.isForceSpeed = !1,
                this.isSpeed = !1,
                this.isSpin = this.buttonStop.active = !1,
                this.buttonAuto.active = !0,
                this.buttonLine.resumeSystemEvents(),
                this.buttonSpin.resumeSystemEvents(),
                this.buttonSpinSpeed.resumeSystemEvents(),
                this.buttonCoint.resumeSystemEvents()
            },
            runReels: function(t) {
                var e = this;
                Promise.all(this.reels.map(function(i, n) {
                    t || e.isForceSpeed ? i.spin(n, .25) : i.spin(n, 1)
                })),
                e.isSpeed = !1
            },
            copy: function() {
                Promise.all(this.reels.map(function(t) {
                    t.icons[t.icons.length - 1].setIcon(t.icons[2].data),
                    t.icons[t.icons.length - 2].setIcon(t.icons[1].data),
                    t.icons[t.icons.length - 3].setIcon(t.icons[0].data)
                }))
            },
            random: function() {
                Promise.all(this.reels.map(function(t) {
                    Promise.all(t.icons.map(function(e, i) {
                        i > 2 && i < t.icons.length - 3 && e.random()
                    }))
                }))
            },
            onLineWin: function(t) {
                var e = this;
                Promise.all(this.H_line_win.map(function(i) {
                    Promise.all(e.Line.lines[i.line].map(function(i, n) {
                        e.efline.children[n].children[i].active = t
                    }));
                    var n = e.Line.mainLine[i.line - 1];
                    t ? (n.onhover(),
                    n.node.pauseSystemEvents()) : (n.offhover(),
                    n.node.resumeSystemEvents())
                }))
            },
            showLineWin: function(t) {
                this.onLineWin(t),
                t || this.isNoHu || this.isBigWin || this.isAuto || this.isFreeSpin || (this.eflineN = 0,
                this.efLineWin())
            },
            efLineWin: function(t) {
                if (this.H_line_win.length) {
                    this.node.stopAllActions();
                    void 0 === this.H_line_win[this.eflineN] && (this.eflineN = 0),
                    this.efOneLineWin(this.eflineN, !0);
                    var e = cc.callFunc(function() {
                        this.efOneLineWin(this.eflineN, !1),
                        this.eflineN += 1,
                        this.efLineWin()
                    }, this);
                    this.node.runAction(cc.sequence(cc.delayTime(1.5), e))
                }
            },
            efOneLineWin: function(t, e) {
                var i = this;
                t = this.H_line_win[this.eflineN].line,
                Promise.all(this.Line.lines[t].map(function(t, n) {
                    i.efline.children[n].children[t].active = e
                }));
                var n = this.Line.mainLine[t - 1];
                e ? (n.onhover(),
                n.node.pauseSystemEvents()) : (n.offhover(),
                n.node.resumeSystemEvents())
            },
            hieuUng: function() {
                if (this.isBigWin && !this.isNoHu)
                    this.BigWin.node.active = !0,
                    this.BigWin.play();
                else if (this.isNoHu)
                    this.NoHu.node.active = !0,
                    this.NoHu.play();
                else if (this.isBonus)
                    this.EF_Bonus.node.active = !0,
                    this.EF_Bonus.play(),
                    cc.RedT.audio.playEf("bonus");
                else if (this.isFree)
                    this.EF_Free.node.active = !0,
                    this.EF_Free.play();
                else if (this.H_win > 0) {
                    if (this.game.active) {
                        var t = new cc.Node;
                        t.addComponent(cc.Label),
                        (t = t.getComponent(cc.Label)).string = "+" + n.numberWithCommas(this.H_win),
                        t.font = this.fontThang,
                        t.lineHeight = 130,
                        t.fontSize = 25,
                        t.node.position = cc.v2(0, 21),
                        this.nodeNotice.addChild(t.node),
                        t.node.runAction(cc.sequence(cc.moveTo(1.2, cc.v2(0, 105)), cc.callFunc(function() {
                            this.speed = 0,
                            t.node.destroy(),
                            this.hieuUng(),
                            this.showLineWin(!1)
                        }, this)))
                    }
                    this.H_win = 0
                } else
                    this.isAuto || this.isFreeSpin ? this.timeOut = setTimeout(function() {
                        this.onAutoSpin(),
                        this.speed = 400
                    }
                    .bind(this), this.speed) : this.resetSpin()
            },
            onData: function(t) {
                void 0 !== t.user && (this.userData(t.user),
                cc.RedT.userData(t.user)),
                void 0 !== t.tamhung && this.TamHung(t.tamhung),
                void 0 !== t.mini && cc.RedT.MiniPanel.onData(t.mini),
                void 0 !== t.TopHu && cc.RedT.MiniPanel.TopHu.onData(t.TopHu),
                void 0 !== t.taixiu && cc.RedT.MiniPanel.TaiXiu.TX_Main.onData(t.taixiu)
            },
            userData: function(t) {
                this.red ? this.taikhoan.string = n.numberWithCommas(t.red) : this.taikhoan.string = n.numberWithCommas(t.xu)
            },
            TamHung: function(t) {
                var e = this;
                void 0 !== t.status && (1 === t.status ? (this.buttonStop.active = !!this.isAuto,
                this.buttonAuto.active = !this.buttonStop.active,
                Promise.all(t.cel.map(function(t, i) {
                    Promise.all(t.map(function(t, n) {
                        e.reels[i].icons[n].setIcon(t, !0)
                    }))
                })),
                this.runReels(this.isSpeed),
                this.H_line_win = t.line_win,
                this.H_win = t.win,
                this.H_free = t.free,
                this.isBonus = t.isBonus,
                this.isNoHu = t.isNoHu,
                this.isBigWin = t.isBigWin,
                this.isFree = t.isFree,
                this.isFreeSpin = !!t.free) : this.resetSpin()),
                void 0 !== t.bonus && this.gameBonus.onData(t.bonus),
                void 0 !== t.log && this.dialog.history.onData(t.log),
                void 0 !== t.top && this.dialog.top.onData(t.top),
                void 0 !== t.notice && this.addNotice(t.notice)
            },
            onGetSpin: function() {
                cc.RedT.send({
                    g: {
                        tamhung: {
                            spin: {
                                cuoc: n.getOnlyNumberInString(this.bet.string),
                                red: this.red,
                                line: this.Line.data
                            }
                        }
                    }
                })
            },
            addNotice: function(t) {
                var e = cc.instantiate(this.prefabNotice);
                e.getComponent("mini_warning").text.string = t,
                this.nodeNotice.addChild(e)
            },
            backGame: function() {
                this.loading.active = !0,
                void 0 !== this.timeOut && clearTimeout(this.timeOut),
                cc.director.loadScene("MainGame")
            },
            signOut: function() {
                cc.director.loadScene("MainGame", function() {
                    cc.RedT.inGame.signOut()
                })
            },
            onGetHu: function() {
                var t = this;
                if (void 0 !== cc.RedT.setting.topHu.data) {
                    var e = this
                      , i = n.getOnlyNumberInString(e.bet.string);
                    Promise.all(cc.RedT.setting.topHu.data.tamhung.filter(function(t) {
                        return t.type == i && t.red == e.red
                    })).then(function(e) {
                        var i = n.getOnlyNumberInString(t.hu.string)
                          , o = e[0].bet;
                        i - o != 0 && n.numberTo(t.hu, i, o, 2e3, !0)
                    })
                }
            },
            onGetAllHu: function() {
                var t = this;
                if (void 0 !== cc.RedT.setting.topHu.data) {
                    n.getOnlyNumberInString(this.bet.string);
                    Promise.all(cc.RedT.setting.topHu.data.tamhung.filter(function(t) {
                        return 1 == t.red
                    })).then(function(e) {
                        var i = e.filter(function(t) {
                            return 100 == t.type
                        })
                          , o = e.filter(function(t) {
                            return 1e3 == t.type
                        })
                          , c = e.filter(function(t) {
                            return 1e4 == t.type
                        })
                          , s = n.getOnlyNumberInString(t.hu100.string)
                          , a = n.getOnlyNumberInString(t.hu1000.string)
                          , h = n.getOnlyNumberInString(t.hu10000.string);
                        s - i[0].bet != 0 && n.numberTo(t.hu100, n.getOnlyNumberInString(t.hu100.string), i[0].bet, 4900, !0),
                        a - o[0].bet != 0 && n.numberTo(t.hu1000, n.getOnlyNumberInString(t.hu1000.string), o[0].bet, 4900, !0),
                        h - c[0].bet != 0 && n.numberTo(t.hu10000, n.getOnlyNumberInString(t.hu10000.string), c[0].bet, 4900, !0)
                    })
                }
            },
            BangThuongToggle: function() {
                cc.RedT.audio.playClick(),
                this.bangThuong.active = !this.bangThuong.active
            },
            playMusic: function() {
                this.audioBG.play()
            },
            pauseMusic: function() {
                this.audioBG.pause()
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper",
        Notice: "Notice",
        TamHung_dialog: "TamHung_dialog",
        TamHung_lines: "TamHung_lines",
        TamHung_playBonus: "TamHung_playBonus",
        TamHung_reel: "TamHung_reel"
    }],
    TheCao_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "6bcb3yYhadCDJYjR6a7bVNL", "TheCao_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                NhaMang: {
                    default: null,
                    type: cc.Label
                },
                MenhGia: {
                    default: null,
                    type: cc.Label
                },
                SoThe: {
                    default: null,
                    type: cc.Label
                },
                Seri: {
                    default: null,
                    type: cc.Label
                },
                HetHan: {
                    default: null,
                    type: cc.Label
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    TheCao: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "676e1K7f8tL+pOgcGRRKm5C", "TheCao");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {},
            init: function() {
                var t = this;
                Promise.all(this.node.children.map(function(t) {
                    return t.getComponent("TheCao_item")
                })).then(function(e) {
                    t.TheCao = e
                })
            },
            onEnable: function() {
                this.node.runAction(cc.RedT.inGame.dialog.actionShow)
            },
            onDisable: function() {
                cc.RedT.inGame.dialog.resetSizeDialog(this.node)
            },
            onData: function(t) {
                this.setData(t),
                cc.RedT.inGame.loading.active = !1,
                cc.RedT.inGame.dialog.objShow && (cc.RedT.inGame.dialog.objShow.active = !1,
                this.node.previous = cc.RedT.inGame.dialog.objShow),
                this.node.active = cc.RedT.inGame.dialog.node.active = !0,
                cc.RedT.inGame.dialog.objShow = this.node
            },
            getData: function(t) {
                cc.RedT.inGame.loading.active = !0,
                cc.RedT.send({
                    user: {
                        history: {
                            the_cao: t
                        }
                    }
                })
            },
            setData: function(t) {
                Promise.all(this.TheCao.map(function(e, i) {
                    var o = t[i];
                    void 0 !== o ? (e.node.active = !0,
                    e.NhaMang.string = o.nhaMang,
                    e.MenhGia.string = n.numberWithCommas(o.menhGia),
                    e.SoThe.string = o.maThe,
                    e.Seri.string = o.seri,
                    e.HetHan.string = o.time) : e.node.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    ThongBaoNoHu: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "2032a+ToBpAt7K48nuzmY5R", "ThongBaoNoHu");
        t("ThongBaoNoHu");
        cc.Class({
            extends: cc.Component,
            properties: {
                animation: cc.Animation,
                title: cc.Label,
                users: cc.Label,
                bet: cc.Label
            },
            init: function(t) {
                this.RedT = t
            },
            onLoad: function() {
                this.node.y = -133,
                this.node.runAction(cc.sequence(cc.moveTo(2, cc.v2(0, 77)), cc.callFunc(function() {
                    this.animation.play(),
                    cc.RedT.audio.playNoticeJackP()
                }, this), cc.delayTime(7), cc.callFunc(function() {
                    this.RedT.pushNotice(),
                    this.node.destroy()
                }, this)))
            }
        }),
        cc._RF.pop()
    }
    , {
        ThongBaoNoHu: "ThongBaoNoHu"
    }],
    TieuRed: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "00244bdHdZHHoauw7/tgQlF", "TieuRed"),
        cc.Class({
            extends: cc.Component,
            properties: {
                header: {
                    default: null,
                    type: cc.Node
                },
                MuaXu: {
                    default: null,
                    type: cc.Node
                },
                MuaTheCao: {
                    default: null,
                    type: cc.Node
                }
            },
            init: function() {
                var t = this;
                this.MuaXu = this.MuaXu.getComponent("shopMuaXu"),
                this.MuaTheCao = this.MuaTheCao.getComponent("shopMuaTheCao"),
                this.MuaTheCao.init(),
                this.body = [this.MuaXu, this.MuaTheCao],
                Promise.all(this.header.children.map(function(t) {
                    return t.getComponent("itemContentMenu")
                })).then(function(e) {
                    t.header = e
                })
            },
            onSelectHead: function(t, e) {
                Promise.all(this.header.map(function(t) {
                    t.node.name == e ? t.select() : t.unselect()
                })),
                Promise.all(this.body.map(function(t) {
                    t.node.name == e ? t.node.active = !0 : t.node.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    VQRed_dialog: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "bbbb3PXVVZETqpYijqFqO6r", "VQRed_dialog");
        var n = t("VQRed_history")
          , o = t("VQRed_top")
          , c = t("VQRed_setting");
        cc.Class({
            extends: cc.Component,
            properties: {
                history: n,
                top: o,
                setting: c
            },
            init: function() {
                this.actionShow = cc.spawn(cc.scaleTo(.5, 1).easing(cc.easeBackOut(2.5)), cc.fadeTo(.5, 255)),
                this.objShow = null,
                this.objTmp = null
            },
            onClickBack: function() {
                cc.RedT.audio.playUnClick(),
                this.onBack()
            },
            onBack: function() {
                null != this.objShow ? void 0 == this.objShow.previous || null == this.objShow.previous ? (this.objShow.active = !1,
                this.node.active = !1,
                this.objShow = null) : (this.objTmp = this.objShow,
                this.objShow = this.objShow.previous,
                this.objTmp.previous = null,
                this.objTmp.active = !1,
                this.objShow.active = !0,
                this.objTmp = null) : this.node.active = !1
            },
            onClosePrevious: function(t) {
                void 0 !== t.previous && null !== t.previous && (this.onClosePrevious(t.previous),
                delete t.previous),
                t.active = !1
            },
            onCloseDialog: function() {
                null != this.objShow ? void 0 == this.objShow.previous || null == this.objShow.previous ? (this.objShow.active = this.node.active = !1,
                this.objShow = null) : (this.onClosePrevious(this.objShow.previous),
                this.objShow.active = this.node.active = !1,
                delete this.objShow.previous,
                this.objShow = null) : this.node.active = !1
            },
            resetSizeDialog: function(t) {
                t.stopAllActions(),
                t.scale = .5,
                t.opacity = 0
            },
            showHistory: function() {
                this.objShow.active = !1,
                this.history.node.previous = this.objShow,
                this.node.active = this.history.node.active = !0,
                this.objShow = this.history.node
            },
            showTop: function() {
                this.node.active = this.top.node.active = !0,
                this.objShow = this.top.node
            },
            showSetting: function() {
                this.node.active = this.setting.node.active = !0,
                this.objShow = this.setting.node
            }
        }),
        cc._RF.pop()
    }
    , {
        VQRed_history: "VQRed_history",
        VQRed_setting: "VQRed_setting",
        VQRed_top: "VQRed_top"
    }],
    VQRed_history_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "95d5aIW7xZHfKL9yYH2NHME", "VQRed_history_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                time: cc.Label,
                phien: cc.Label,
                cuoc: cc.Label,
                line: cc.Label,
                win: cc.Label
            }
        }),
        cc._RF.pop()
    }
    , {}],
    VQRed_history: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "66e9cqNtPFCw6Q48VfYKZ/M", "VQRed_history");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                page: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0
            },
            onLoad: function() {
                var t = this
                  , e = cc.instantiate(this.page);
                e.y = -315,
                this.node.addChild(e),
                this.page = e.getComponent("Pagination"),
                Promise.all(this.content.children.map(function(t) {
                    return t.getComponent("VQRed_history_item")
                })).then(function(e) {
                    t.content = e
                }),
                this.page.init(this)
            },
            onEnable: function() {
                this.get_data()
            },
            onDisable: function() {},
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                cc.RedT.send({
                    g: {
                        vq_red: {
                            log: {
                                red: this.red,
                                page: t
                            }
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                this.page.onSet(t.page, t.kmess, t.total),
                Promise.all(this.content.map(function(e, i) {
                    var o = t.data[i];
                    void 0 !== o ? (e.node.active = !0,
                    e.time.string = n.getStringDateByTime(o.time),
                    e.phien.string = o.id,
                    e.cuoc.string = n.numberWithCommas(o.bet),
                    e.line.string = o.kq + " D\xf2ng",
                    e.win.string = n.numberWithCommas(o.win)) : e.node.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    VQRed_main_line: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "3a5fblcwjpEZ7XEnO1IJ3kk", "VQRed_main_line"),
        cc.Class({
            extends: cc.Component,
            init: function(t) {
                return this.RedT = t,
                this
            },
            onEnable: function() {
                this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onhover, this),
                this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this)
            },
            onDisable: function() {
                this.node.off(cc.Node.EventType.MOUSE_ENTER, this.onhover, this),
                this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this)
            },
            onhover: function() {
                this.node.children[1].active = !0,
                this.defColor = this.node.children[0].children[1].color,
                this.node.children[0].children[0].active = !0,
                this.node.children[0].children[1].color = this.node.color.fromHEX(this.RedT.onColor)
            },
            offhover: function() {
                this.node.children[1].active = !1,
                this.node.children[0].children[0].active = !1,
                this.node.children[0].children[1].color = this.defColor
            },
            onEf: function() {
                this.onhover(),
                this.node.pauseSystemEvents()
            },
            offEf: function() {
                this.offhover(),
                this.node.resumeSystemEvents()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    VQRed_setting: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "3d99bnmP4tPiIMEZDUmt8Ls", "VQRed_setting");
        var n = t("CheckOut");
        cc.Class({
            extends: cc.Component,
            properties: {
                NhacNen: n,
                NhacGame: n
            },
            onLoad: function() {
                cc.RedT.isSoundBackground() || this.NhacNen.OnChangerClick(),
                cc.RedT.isSoundGame() || this.NhacGame.OnChangerClick()
            },
            onEnable: function() {
                this.node.runAction(cc.RedT.inGame.dialog.actionShow)
            },
            onDisable: function() {
                cc.RedT.inGame.dialog.resetSizeDialog(this.node)
            },
            OnChangerNhacNen: function() {
                cc.RedT.setSoundBackground(this.NhacNen.isChecked),
                this.NhacNen.isChecked ? cc.RedT.inGame.playMusic() : cc.RedT.inGame.pauseMusic()
            },
            OnChangerNhacGame: function() {
                cc.RedT.setSoundGame(this.NhacGame.isChecked),
                this.NhacGame.isChecked ? cc.RedT.IS_SOUND = !0 : cc.RedT.IS_SOUND = !1
            }
        }),
        cc._RF.pop()
    }
    , {
        CheckOut: "CheckOut"
    }],
    VQRed_top: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "f06e8UHmbpN76XdRUrDkJvM", "VQRed_top");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                item: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                cc.RedT.send({
                    g: {
                        vq_red: {
                            top: this.red
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                this.content.removeAllChildren();
                var e = this;
                Promise.all(t.map(function(t, i) {
                    var o = cc.instantiate(e.item)
                      , c = o.getComponent("VQRed_history_item");
                    c.time.string = n.getStringDateByTime(t.time),
                    c.phien.string = t.name,
                    c.cuoc.string = n.numberWithCommas(t.bet),
                    c.line.string = n.numberWithCommas(t.win),
                    c.win.string = 2 == t.type ? "N\u1ed5 H\u0169" : "Th\u1eafng l\u1edbn",
                    o.children[0].active = !(1 & i),
                    e.content.addChild(o)
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    VuongQuocRed_bigWin: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "ff622y7T/JKaZl38DVd0WTJ", "VuongQuocRed_bigWin"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    VuongQuocRed_items: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "aab4d3N+XxIp75z3i5xXpS8", "VuongQuocRed_items"),
        cc.Class({
            extends: cc.Component,
            properties: {
                icon: {
                    default: null,
                    type: cc.Sprite
                }
            },
            init: function(t) {
                this.RedT = t
            },
            stop: function() {
                Promise.all(this.node.children.map(function(t) {
                    var e = t.getComponents(cc.Animation);
                    Promise.all(e.map(function(e) {
                        t.removeComponent(e)
                    }))
                }))
            },
            random: function() {
                var t = ~~(7 * Math.random());
                return this.setIcon(t),
                t
            },
            setIcon: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                4 == t ? (this.node.children[1].active = !0,
                this.node.children[0].active = this.node.children[2].active = !1) : 6 == t ? (this.node.children[2].active = !0,
                this.node.children[0].active = this.node.children[1].active = !1) : (this.node.children[0].active = !0,
                this.node.children[1].active = this.node.children[2].active = !1,
                this.icon.spriteFrame = 5 == t ? this.RedT.icons[t - 1] : this.RedT.icons[t]),
                e && (this.data = t)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    VuongQuocRed_line: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "70127RbBKFG06+Pa5WThYLM", "VuongQuocRed_line");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                nodeEfLine: cc.Node,
                nodeLine: cc.Node,
                mainLine: cc.Node
            },
            init: function(t) {
                var e = this;
                this.lines = {
                    1: [1, 1, 1, 1, 1],
                    2: [0, 0, 0, 0, 0],
                    3: [2, 2, 2, 2, 2],
                    4: [1, 1, 0, 1, 1],
                    5: [1, 1, 2, 1, 1],
                    6: [0, 0, 1, 0, 0],
                    7: [2, 2, 1, 2, 2],
                    8: [0, 2, 0, 2, 0],
                    9: [2, 0, 2, 0, 2],
                    10: [1, 0, 2, 0, 1],
                    11: [2, 1, 0, 1, 2],
                    12: [0, 1, 2, 1, 0],
                    13: [1, 2, 1, 0, 1],
                    14: [1, 0, 1, 2, 1],
                    15: [2, 1, 1, 1, 2],
                    16: [0, 1, 1, 1, 0],
                    17: [1, 2, 2, 2, 1],
                    18: [1, 0, 0, 0, 1],
                    19: [2, 2, 1, 0, 0],
                    20: [0, 0, 1, 2, 2]
                },
                this.RedT = t;
                var i = this;
                Promise.all(this.mainLine.children.map(function(t) {
                    return t.getComponent("VQRed_main_line").init(i.RedT)
                })).then(function(t) {
                    e.mainLine = t
                }),
                this.selectAll(null, "1")
            },
            onOpen: function() {
                cc.RedT.audio.playClick(),
                this.node.active = !0
            },
            onClose: function() {
                cc.RedT.audio.playUnClick(),
                this.node.active && this.data.length < 1 ? this.RedT.addNotice("Ch\u1ecdn \xedt nh\u1ea5t 1 d\xf2ng") : this.node.active = !1
            },
            select: function(t) {
                var e = t.target;
                e.children[0].active ? (e.children[0].active = !1,
                e.children[1].active = !0) : (e.children[0].active = !0,
                e.children[1].active = !1),
                this.check()
            },
            check: function() {
                var t = this;
                Promise.all(this.nodeLine.children.map(function(t, e) {
                    return t.children[0].active ? e + 1 : void 0
                })).then(function(e) {
                    Promise.all(e.filter(function(t) {
                        return void 0 !== t
                    })).then(function(e) {
                        t.data = e,
                        t.RedT.labelLine.string = e.length,
                        t.RedT.tong.string = n.numberWithCommas(e.length * n.getOnlyNumberInString(t.RedT.bet.string))
                    })
                })
            },
            selectChan: function() {
                var t = this;
                Promise.all(this.nodeLine.children.map(function(t, e) {
                    var i = e + 1;
                    if (!(i % 2))
                        return t.children[0].active = !1,
                        t.children[1].active = !0,
                        i;
                    t.children[0].active = !0,
                    t.children[1].active = !1
                })).then(function(e) {
                    Promise.all(e.filter(function(t) {
                        return void 0 !== t
                    })).then(function(e) {
                        t.data = e,
                        t.RedT.labelLine.string = e.length,
                        t.RedT.tong.string = n.numberWithCommas(e.length * n.getOnlyNumberInString(t.RedT.bet.string))
                    })
                })
            },
            selectLe: function() {
                var t = this;
                Promise.all(this.nodeLine.children.map(function(t, e) {
                    var i = e + 1;
                    if (i % 2)
                        return t.children[0].active = !1,
                        t.children[1].active = !0,
                        i;
                    t.children[0].active = !0,
                    t.children[1].active = !1
                })).then(function(e) {
                    Promise.all(e.filter(function(t) {
                        return void 0 !== t
                    })).then(function(e) {
                        t.data = e,
                        t.RedT.labelLine.string = e.length,
                        t.RedT.tong.string = n.numberWithCommas(e.length * n.getOnlyNumberInString(t.RedT.bet.string))
                    })
                })
            },
            selectAll: function(t, e) {
                var i = this;
                Promise.all(this.nodeLine.children.map(function(t, i) {
                    var n = "1" == e;
                    return t.children[0].active = n,
                    t.children[1].active = !n,
                    n ? i + 1 : void 0
                })).then(function(t) {
                    Promise.all(t.filter(function(t, e) {
                        return void 0 !== t
                    })).then(function(t) {
                        i.data = t,
                        i.RedT.labelLine.string = t.length,
                        i.RedT.tong.string = n.numberWithCommas(t.length * n.getOnlyNumberInString(i.RedT.bet.string))
                    })
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    VuongQuocRed_playBonus: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "f4a82MExGBOZIu6dvi480mF", "VuongQuocRed_playBonus");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                numberBonus: cc.Label,
                listBox: cc.Node,
                notice: cc.Node,
                numberWin: cc.Label
            },
            init: function(t) {
                this.RedT = t
            },
            onPlay: function() {
                this.reset(),
                this.node.active = !0,
                this.numberBonus.string = 10
            },
            onClickBox: function(t, e) {
                this.numberBonus.string && (cc.RedT.audio.playClick(),
                this.onSend(e))
            },
            closeNotice: function() {
                this.notice.active = this.node.active = !1,
                this.RedT.hieuUng()
            },
            onData: function(t) {
                if (void 0 !== t.box) {
                    var e = this.listBox.children[t.box];
                    e.children[0].active = !1,
                    e.children[1].active = e.children[2].active = !0,
                    e.children[2].getComponent(cc.Label).string = n.numberWithCommas(t.bet),
                    this.numberBonus.string = t.bonus
                }
                void 0 !== t.win && (this.notice.active = !0,
                this.numberWin.string = n.numberWithCommas(t.win),
                this.RedT.vuathang.string = n.numberWithCommas(1 * n.getOnlyNumberInString(this.RedT.vuathang.string) + t.win))
            },
            onSend: function(t) {
                cc.RedT.send({
                    g: {
                        vq_red: {
                            bonus: {
                                box: t
                            }
                        }
                    }
                })
            },
            reset: function() {
                Promise.all(this.listBox.children.map(function(t) {
                    t.children[0].active = !0,
                    t.children[1].active = t.children[2].active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    VuongQuocRed_reel: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "d81dcoZgsNLupexKbEe58JH", "VuongQuocRed_reel"),
        cc.Class({
            extends: cc.Component,
            init: function(t) {
                var e = this;
                this.RedT = t,
                this.icons = [];
                var i = this
                  , n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                Promise.all(n.map(function(t, e) {
                    var o = cc.instantiate(i.RedT.iconPrefab);
                    return i.node.addChild(o),
                    (o = o.getComponent("VuongQuocRed_items")).init(i.RedT),
                    e > 2 && e < n.length - 3 && (o.stop(),
                    o.random()),
                    o
                })).then(function(t) {
                    e.icons = t,
                    e.icons[e.icons.length - 1].setIcon(e.icons[4].random()),
                    e.icons[e.icons.length - 2].setIcon(e.icons[3].random()),
                    e.icons[e.icons.length - 3].setIcon(e.icons[2].random()),
                    e.icons[e.icons.length - 4].setIcon(e.icons[1].random()),
                    e.icons[e.icons.length - 5].setIcon(e.icons[0].random())
                })
            },
            spin: function(t) {
                this.node.stopAllActions();
                var e = cc.moveTo(1, cc.v2(this.node.x, -(this.node.height - 418))).easing(cc.easeInOut(3))
                  , i = cc.callFunc(function() {
                    0 === t && this.RedT.copy(),
                    this.node.y = 0
                }, this);
                if (4 === t) {
                    var n = cc.callFunc(function() {
                        this.RedT.EF_vuathang(),
                        this.node.y = 0,
                        this.RedT.random(),
                        this.RedT.hieuUng()
                    }, this);
                    this.node.runAction(cc.sequence(cc.delayTime(.1 * t), e, n))
                } else
                    this.node.runAction(cc.sequence(cc.delayTime(.1 * t), e, i))
            },
            stop: function() {
                this.node.stopAllActions(),
                this.RedT.copy(),
                this.node.y = 0
            }
        }),
        cc._RF.pop()
    }
    , {}],
    VuongQuocRed: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "23064kjFttJ5pk+vT43QFXz", "VuongQuocRed");
        var n = t("Helper")
          , o = t("VuongQuocRed_reel")
          , c = t("VuongQuocRed_line")
          , s = t("VuongQuocRed_playBonus")
          , a = t("Notice")
          , h = t("VQRed_dialog");
        cc.Class({
            extends: cc.Component,
            properties: {
                gameBonus: s,
                audioBG: cc.AudioSource,
                audioClick: cc.AudioSource,
                redhat: {
                    default: null,
                    type: cc.Node
                },
                reels: {
                    default: [],
                    type: o
                },
                icons: {
                    default: [],
                    type: cc.SpriteFrame
                },
                betString: {
                    default: [],
                    type: cc.String
                },
                iconPrefab: {
                    default: null,
                    type: cc.Prefab
                },
                BigWin: cc.Animation,
                BigWin_Label: cc.Label,
                NoHu: cc.Animation,
                NoHu_Label: cc.Label,
                EF_Bonus: cc.Animation,
                EF_Free: cc.Animation,
                buttonCoint: cc.Node,
                buttonLine: cc.Node,
                buttonSpin: cc.Node,
                buttonFree: cc.Node,
                freeLabel: cc.Label,
                buttonAuto: cc.Node,
                buttonStop: cc.Node,
                nodeChangerBetL: cc.Node,
                nodeChangerBetR: cc.Node,
                nodeRed: {
                    default: null,
                    type: cc.Node
                },
                nodeXu: {
                    default: null,
                    type: cc.Node
                },
                bet: {
                    default: null,
                    type: cc.Label
                },
                betL: {
                    default: null,
                    type: cc.Node
                },
                betR: {
                    default: null,
                    type: cc.Node
                },
                nodeNotice: {
                    default: null,
                    type: cc.Node
                },
                prefabNotice: {
                    default: null,
                    type: cc.Prefab
                },
                MiniPanel: cc.Prefab,
                loading: {
                    default: null,
                    type: cc.Node
                },
                notice: a,
                dialog: h,
                Line: c,
                hu: cc.Label,
                taikhoan: cc.Label,
                tong: cc.Label,
                vuathang: cc.Label,
                labelLine: cc.Label,
                bangThuong: cc.Node,
                efline: cc.Node,
                onColor: "",
                offColor: "",
                isAuto: !1,
                isSpin: !1,
                isFreeSpin: !1,
                red: !0,
                betSelect: 0
            },
            onLoad: function() {
                cc.RedT.inGame = this;
                var t = cc.instantiate(this.MiniPanel);
                cc.RedT.MiniPanel = t.getComponent("MiniPanel"),
                this.redhat.insertChild(t),
                this.BigWin.on("finished", this.BigWinFinish, this),
                this.BigWin.on("play", this.BigWinPlay, this),
                this.NoHu.on("finished", this.NoHuFinish, this),
                this.NoHu.on("play", this.NoHuPlay, this),
                this.EF_Bonus.on("finished", this.EF_BonusFinish, this),
                this.EF_Free.on("finished", this.EF_FreeFinish, this);
                var e = this;
                this.gameBonus.init(this),
                this.Line.init(this),
                this.dialog.init(),
                Promise.all(this.reels.map(function(t) {
                    t.init(e)
                })),
                cc.RedT.send({
                    scene: "vq_red"
                }),
                this.taikhoan.string = n.numberWithCommas(cc.RedT.user.red),
                this.speed = 400,
                cc.RedT.isSoundBackground() && (cc.RedT.setSoundBackground(!0),
                this.playMusic())
            },
            BigWinPlay: function() {
                var t = cc.callFunc(function() {
                    cc.RedT.audio.playEf("megaWin"),
                    n.numberTo(this.BigWin_Label, 0, this.H_win, 2e3, !0)
                }, this);
                this.BigWin.node.runAction(cc.sequence(cc.delayTime(.3), t))
            },
            BigWinFinish: function() {
                this.isBigWin = !1,
                this.BigWin.node.active = !1,
                this.BigWin_Label.string = "",
                this.showLineWin(!1),
                this.hieuUng()
            },
            NoHuPlay: function() {
                var t = cc.callFunc(function() {
                    cc.RedT.audio.playEf("jackpot"),
                    n.numberTo(this.NoHu_Label, 0, this.H_win, 2e3, !0)
                }, this);
                this.NoHu.node.runAction(cc.sequence(cc.delayTime(.3), t))
            },
            NoHuFinish: function() {
                this.isNoHu = !1,
                this.NoHu.node.active = !1,
                this.NoHu_Label.string = "",
                this.isAuto && this.onAuto(),
                this.showLineWin(!1),
                this.hieuUng()
            },
            EF_BonusFinish: function() {
                this.isBonus = !1,
                this.EF_Bonus.node.active = !1,
                this.gameBonus.onPlay(),
                this.showLineWin(!1)
            },
            EF_FreeFinish: function() {
                this.isFree = !1,
                this.EF_Free.node.active = !1,
                this.showLineWin(!1),
                this.hieuUng()
            },
            EF_vuathang: function() {
                this.showLineWin(!0),
                this.vuathang.string = n.numberWithCommas(this.H_win),
                this.buttonFree.active = !!this.H_free,
                this.buttonSpin.active = !this.H_free,
                this.freeLabel.string = this.H_free
            },
            onChangerBetR: function() {
                cc.RedT.audio.playClick(),
                this.betSelect++,
                this.betSelect > 2 && (this.betSelect = 0),
                this.bet.string = this.betString[this.betSelect],
                this.tong.string = n.numberWithCommas(this.Line.data.length * n.getOnlyNumberInString(this.bet.string)),
                this.onGetHu()
            },
            onChangerBetL: function() {
                cc.RedT.audio.playClick(),
                this.betSelect--,
                this.betSelect < 0 && (this.betSelect = 2),
                this.bet.string = this.betString[this.betSelect],
                this.tong.string = n.numberWithCommas(this.Line.data.length * n.getOnlyNumberInString(this.bet.string)),
                this.onGetHu()
            },
            changerCoint: function() {
                this.red = !this.red,
                this.nodeRed.active = !this.nodeRed.active,
                this.nodeXu.active = !this.nodeXu.active,
                this.userData(cc.RedT.user),
                this.onGetHu()
            },
            onClickSpin: function() {
                cc.RedT.IS_SOUND && this.audioClick.play(),
                this.onSpin()
            },
            onAutoSpin: function() {
                cc.RedT.IS_SOUND && this.audioClick.play(),
                this.onGetSpin()
            },
            onClickAuto: function() {
                cc.RedT.audio.playClick(),
                this.onAuto()
            },
            onClickStop: function() {
                cc.RedT.audio.playClick(),
                this.onStop()
            },
            onSpin: function() {
                this.Line.data.length < 1 ? this.addNotice("Ch\u1ecdn \xedt nh\u1ea5t 1 d\xf2ng") : (this.setSpin(),
                this.isSpin || (this.node.stopAllActions(),
                void 0 !== this.eflineN && void 0 !== this.H_line_win && this.H_line_win.length && this.efOneLineWin(this.eflineN, !1),
                this.eflineO = this.eflineN = 0,
                this.isSpin = !0,
                this.onGetSpin()))
            },
            onAuto: function() {
                this.isAuto = !this.isAuto,
                this.buttonAuto.color = this.isAuto ? cc.Color.WHITE : cc.color(200, 200, 200),
                this.buttonStop.active = this.isSpin
            },
            onStop: function() {
                this.isAuto = this.buttonStop.active = !1,
                this.buttonAuto.active = !0,
                this.buttonAuto.color = cc.color(200, 200, 200)
            },
            setSpin: function() {
                this.buttonLine.pauseSystemEvents(),
                this.buttonSpin.pauseSystemEvents(),
                this.buttonCoint.pauseSystemEvents(),
                this.nodeChangerBetL.pauseSystemEvents(),
                this.nodeChangerBetR.pauseSystemEvents()
            },
            resetSpin: function() {
                this.isAuto && this.onAuto(),
                this.isSpin = this.buttonStop.active = !1,
                this.buttonAuto.active = !0,
                this.buttonLine.resumeSystemEvents(),
                this.buttonSpin.resumeSystemEvents(),
                this.buttonCoint.resumeSystemEvents(),
                this.nodeChangerBetL.resumeSystemEvents(),
                this.nodeChangerBetR.resumeSystemEvents()
            },
            runReels: function() {
                Promise.all(this.reels.map(function(t, e) {
                    t.spin(e)
                }))
            },
            copy: function() {
                Promise.all(this.reels.map(function(t) {
                    t.icons[t.icons.length - 1].setIcon(t.icons[2].data),
                    t.icons[t.icons.length - 2].setIcon(t.icons[1].data),
                    t.icons[t.icons.length - 3].setIcon(t.icons[0].data)
                }))
            },
            random: function() {
                Promise.all(this.reels.map(function(t) {
                    Promise.all(t.icons.map(function(e, i) {
                        i > 2 && i < t.icons.length - 3 && e.random()
                    }))
                }))
            },
            onLineWin: function(t) {
                var e = this;
                Promise.all(this.H_line_win.map(function(i) {
                    Promise.all(e.Line.lines[i.line].map(function(i, n) {
                        e.efline.children[n].children[i].active = t
                    }));
                    var n = e.Line.mainLine[i.line - 1];
                    t ? (n.onhover(),
                    n.node.pauseSystemEvents()) : (n.offhover(),
                    n.node.resumeSystemEvents())
                }))
            },
            showLineWin: function(t) {
                this.onLineWin(t),
                t || this.isNoHu || this.isBigWin || this.isAuto || this.isFreeSpin || (this.eflineN = 0,
                this.efLineWin())
            },
            efLineWin: function(t) {
                if (this.H_line_win.length) {
                    this.node.stopAllActions();
                    void 0 === this.H_line_win[this.eflineN] && (this.eflineN = 0),
                    this.efOneLineWin(this.eflineN, !0);
                    var e = cc.callFunc(function() {
                        this.efOneLineWin(this.eflineN, !1),
                        this.eflineN += 1,
                        this.efLineWin()
                    }, this);
                    this.node.runAction(cc.sequence(cc.delayTime(1.5), e))
                }
            },
            efOneLineWin: function(t, e) {
                var i = this;
                t = this.H_line_win[this.eflineN].line,
                Promise.all(this.Line.lines[t].map(function(t, n) {
                    i.efline.children[n].children[t].active = e
                }));
                var n = this.Line.mainLine[t - 1];
                e ? (n.onhover(),
                n.node.pauseSystemEvents()) : (n.offhover(),
                n.node.resumeSystemEvents())
            },
            hieuUng: function() {
                if (this.isBigWin && !this.isNoHu)
                    this.BigWin.node.active = !0,
                    this.BigWin.play();
                else if (this.isNoHu)
                    this.NoHu.node.active = !0,
                    this.NoHu.play();
                else if (this.isBonus)
                    this.EF_Bonus.node.active = !0,
                    this.EF_Bonus.play(),
                    cc.RedT.audio.playEf("bonus");
                else if (this.isFree)
                    this.EF_Free.node.active = !0,
                    this.EF_Free.play();
                else if (this.H_win > 0) {
                    var t = new cc.Node;
                    t.addComponent(cc.Label),
                    (t = t.getComponent(cc.Label)).string = "+" + n.numberWithCommas(this.H_win),
                    t.font = cc.RedT.util.fontCong,
                    t.lineHeight = 130,
                    t.fontSize = 25,
                    t.node.position = cc.v2(0, 21),
                    this.nodeNotice.addChild(t.node),
                    t.node.runAction(cc.sequence(cc.moveTo(1.2, cc.v2(0, 105)), cc.callFunc(function() {
                        this.speed = 0,
                        t.node.destroy(),
                        this.hieuUng(),
                        this.showLineWin(!1)
                    }, this))),
                    this.H_win = 0
                } else
                    this.isAuto || this.isFreeSpin ? this.timeOut = setTimeout(function() {
                        this.onAutoSpin(),
                        this.speed = 400
                    }
                    .bind(this), this.speed) : this.resetSpin()
            },
            onData: function(t) {
                void 0 !== t.user && (this.userData(t.user),
                cc.RedT.userData(t.user)),
                void 0 !== t.VuongQuocRed && this.VuongQuocRed(t.VuongQuocRed),
                void 0 !== t.mini && cc.RedT.MiniPanel.onData(t.mini),
                void 0 !== t.TopHu && cc.RedT.MiniPanel.TopHu.onData(t.TopHu),
                void 0 !== t.taixiu && cc.RedT.MiniPanel.TaiXiu.TX_Main.onData(t.taixiu)
            },
            userData: function(t) {
                this.red ? this.taikhoan.string = n.numberWithCommas(t.red) : this.taikhoan.string = n.numberWithCommas(t.xu)
            },
            VuongQuocRed: function(t) {
                var e = this;
                void 0 !== t.status && (1 === t.status ? (this.buttonStop.active = !!this.isAuto,
                this.buttonAuto.active = !this.buttonStop.active,
                Promise.all(t.cel.map(function(t, i) {
                    Promise.all(t.map(function(t, n) {
                        e.reels[i].icons[n].setIcon(t, !0)
                    }))
                })),
                this.runReels(),
                this.H_line_win = t.line_win,
                this.H_win = t.win,
                this.H_free = t.free,
                this.isBonus = t.isBonus,
                this.isNoHu = t.isNoHu,
                this.isBigWin = t.isBigWin,
                this.isFree = t.isFree,
                this.isFreeSpin = !!t.free) : this.resetSpin()),
                void 0 !== t.bonus && this.gameBonus.onData(t.bonus),
                void 0 !== t.log && this.dialog.history.onData(t.log),
                void 0 !== t.top && this.dialog.top.onData(t.top),
                void 0 !== t.notice && this.addNotice(t.notice)
            },
            onGetSpin: function() {
                cc.RedT.send({
                    g: {
                        vq_red: {
                            spin: {
                                cuoc: n.getOnlyNumberInString(this.bet.string),
                                red: this.red,
                                line: this.Line.data
                            }
                        }
                    }
                })
            },
            addNotice: function(t) {
                var e = cc.instantiate(this.prefabNotice);
                e.getComponent("mini_warning").text.string = t,
                this.nodeNotice.addChild(e)
            },
            backGame: function() {
                this.loading.active = !0,
                void 0 !== this.timeOut && clearTimeout(this.timeOut),
                cc.director.loadScene("MainGame")
            },
            signOut: function() {
                cc.director.loadScene("MainGame", function() {
                    cc.RedT.inGame.signOut()
                })
            },
            onGetHu: function() {
                var t = this;
                if (void 0 !== cc.RedT.setting.topHu.data) {
                    var e = this
                      , i = n.getOnlyNumberInString(e.bet.string);
                    Promise.all(cc.RedT.setting.topHu.data.vq_red.filter(function(t) {
                        return t.type == i && t.red == e.red
                    })).then(function(e) {
                        var i = n.getOnlyNumberInString(t.hu.string)
                          , o = e[0].bet;
                        i - o != 0 && n.numberTo(t.hu, i, o, 2e3, !0)
                    })
                }
            },
            BangThuongToggle: function() {
                cc.RedT.audio.playClick(),
                this.bangThuong.active = !this.bangThuong.active
            },
            playMusic: function() {
                this.audioBG.play()
            },
            pauseMusic: function() {
                this.audioBG.pause()
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper",
        Notice: "Notice",
        VQRed_dialog: "VQRed_dialog",
        VuongQuocRed_line: "VuongQuocRed_line",
        VuongQuocRed_playBonus: "VuongQuocRed_playBonus",
        VuongQuocRed_reel: "VuongQuocRed_reel"
    }],
    XoSo_History: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "6525embjElLuYUiOmITMU6B", "XoSo_History");
        var n = t("XoSo_MBHistory");
        cc.Class({
            extends: cc.Component,
            properties: {
                MienBac: n
            },
            onData: function(t) {
                void 0 !== t.mb && (console.log(t.mb),
                this.MienBac.onData(t.mb))
            }
        }),
        cc._RF.pop()
    }
    , {
        XoSo_MBHistory: "XoSo_MBHistory"
    }],
    XoSo_KetQua: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "05eacVPi8xBKbT1lt1xSw6v", "XoSo_KetQua");
        var n = t("kq_xsmb");
        cc.Class({
            extends: cc.Component,
            properties: {
                MienBac: n
            },
            onData: function(t) {
                void 0 !== t.mb && this.MienBac.onData(t.mb)
            }
        }),
        cc._RF.pop()
    }
    , {
        kq_xsmb: "kq_xsmb"
    }],
    XoSo_MBHistory_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "ac3343HcChC0o2BYBlNuPKt", "XoSo_MBHistory_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bg: cc.Node,
                time: cc.Label,
                loai: cc.Label,
                so: cc.Label,
                diem: cc.Label,
                cuoc: cc.Label,
                win: cc.Label,
                status: cc.Label
            }
        }),
        cc._RF.pop()
    }
    , {}],
    XoSo_MBHistory: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "06a9fZAyFBBtKSyOPZt3z5t", "XoSo_MBHistory");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                page: cc.Prefab,
                content: cc.Node
            },
            onLoad: function() {
                var t = this
                  , e = cc.instantiate(this.page);
                e.y = -324,
                this.node.addChild(e),
                this.page = e.getComponent("Pagination"),
                this.page.init(this),
                Promise.all(this.content.children.map(function(t) {
                    return t.getComponent("XoSo_MBHistory_item")
                })).then(function(e) {
                    t.content = e
                }),
                this.get_data()
            },
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                cc.RedT.send({
                    g: {
                        xs: {
                            mb: {
                                history: t
                            }
                        }
                    }
                })
            },
            onData: function(t) {
                var e = this;
                this.page.onSet(t.page, t.kmess, t.total),
                this.content.forEach(function(i, o) {
                    var c = t.data[o];
                    void 0 !== c ? (i.node.active = !0,
                    i.bg.active = o % 2,
                    i.time.string = n.getStringDateByTime(c.time),
                    i.loai.string = e.getLoai(c.type),
                    i.so.string = c.so.join(", "),
                    i.diem.string = n.numberWithCommas(c.diem),
                    i.cuoc.string = n.numberWithCommas(c.cuoc),
                    i.win.string = n.numberWithCommas(c.win),
                    i.status.string = c.thanhtoan ? "\u0110\xe3 S\u1ed5" : "Ch\u1edd S\u1ed5",
                    i.status.node.color = c.thanhtoan ? cc.color(0, 255, 0, 255) : cc.color(255, 214, 0, 255)) : i.node.active = !1
                })
            },
            getLoai: function(t) {
                switch (t) {
                case "lo2":
                    return "L\xf4 2 S\u1ed1";
                case "lo21k":
                    return "L\xf4 2 S\u1ed1 1k";
                case "lo3":
                    return "L\xf4 3 S\u1ed1";
                case "lo4":
                    return "L\xf4 4 S\u1ed1";
                case "xien2":
                    return "Xi\xean 2";
                case "xien3":
                    return "Xi\xean 3";
                case "xien4":
                    return "Xi\xean 4";
                case "de":
                    return "\u0110\u1ec1";
                case "daude":
                    return "\u0110\u1ea7u \u0110\u1ec1";
                case "degiai7":
                    return "\u0110\u1ec1 Gi\u1ea3i 7";
                case "degiai1":
                    return "\u0110\u1ec1 Gi\u1ea3i Nh\u1ea5t";
                case "3cang":
                    return "3 C\xe0ng";
                case "4cang":
                    return "4 C\xe0ng";
                case "dau":
                    return "\u0110\u1ea7u";
                case "duoi":
                    return "\u0110u\xf4i";
                case "truot4":
                    return "Tr\u01b0\u1ee3t 4";
                case "truot8":
                    return "Tr\u01b0\u1ee3t 8";
                case "truot10":
                    return "Tr\u01b0\u1ee3t 10"
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    XoSo_Main_Main: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "e57d5GbJYdPJaTehdXI/JqM", "XoSo_Main_Main");
        var n = t("Helper").numberPad;
        cc.Class({
            extends: cc.Component,
            properties: {
                time_mb: cc.Label
            },
            update: function(t) {
                var e = new Date;
                e.setHours(18, 0, 0, 0, 0);
                var i = (e = e.getTime()) - (new Date).getTime()
                  , o = Math.floor(i % 864e5 / 36e5)
                  , c = Math.floor(i % 36e5 / 6e4)
                  , s = Math.floor(i % 6e4 / 1e3);
                this.time_mb.string = i < 0 ? "" : n(o, 2) + ":" + n(c, 2) + ":" + n(s, 2)
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    XoSo_Main: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "949d6KzSglCXrlqSMpvyQvX", "XoSo_Main");
        var n = t("XoSo_History")
          , o = t("XoSo_KetQua");
        cc.Class({
            extends: cc.Component,
            properties: {
                right: cc.Node,
                History: n,
                KetQua: o
            },
            init: function(t) {
                this.RedT = t
            },
            showMain: function() {
                this.right.children.forEach(function(t) {
                    "Main" === t.name ? t.active = !0 : t.active = !1
                })
            },
            onHistoryClick: function(t, e) {
                this.RedT.position = "History",
                this.right.children.forEach(function(t) {
                    "History" === t.name ? (t.active = !0,
                    t.children.forEach(function(t) {
                        t.name === e ? t.active = !0 : t.active = !1
                    })) : t.active = !1
                })
            },
            onKetQuaClick: function(t, e) {
                this.RedT.position = "KetQua",
                this.right.children.forEach(function(t) {
                    "KetQua" === t.name ? (t.active = !0,
                    t.children.forEach(function(t) {
                        t.name === e ? t.active = !0 : t.active = !1
                    })) : t.active = !1
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        XoSo_History: "XoSo_History",
        XoSo_KetQua: "XoSo_KetQua"
    }],
    XoSo_MienBac: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "479d04nY+1D8at8J2cAuNJP", "XoSo_MienBac"),
        cc.Class({
            extends: cc.Component,
            properties: {
                header: cc.Node,
                body: cc.Node
            },
            onSelectType: function(t) {
                var e = t.target.name;
                this.header.children.forEach(function(t) {
                    t.name === e ? (t.pauseSystemEvents(),
                    t.opacity = 255) : (t.resumeSystemEvents(),
                    t.opacity = 99)
                }),
                this.body.children.forEach(function(t) {
                    t.name === e ? t.active = !0 : t.active = !1
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    XoSo_select_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "61675TPqG5KgLFHTaCss4/w", "XoSo_select_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                nodeOn: cc.Node,
                nodeOff: cc.Node,
                text: cc.Label,
                select: !1
            },
            init: function(t) {
                this.RedT = t
            },
            onChanger: function() {
                this.select = !this.select,
                this.nodeOn.active = this.select,
                this.nodeOff.active = !this.select
            },
            onClickSelect: function() {
                this.onChanger(),
                this.RedT.refreshH(this)
            },
            selectOn: function() {
                this.select = !0,
                this.nodeOn.active = !0,
                this.nodeOff.active = !1
            },
            selectOff: function() {
                this.select = !1,
                this.nodeOn.active = !1,
                this.nodeOff.active = !0
            }
        }),
        cc._RF.pop()
    }
    , {}],
    XoSo: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "69933PZVIFBOZhrxWlp0GLT", "XoSo");
        var n = t("Helper")
          , o = t("Notice")
          , c = t("XoSo_Main");
        cc.Class({
            extends: cc.Component,
            properties: {
                redhat: cc.Node,
                balans: cc.Label,
                username: cc.Label,
                today: cc.Label,
                nodeNotice: cc.Node,
                prefabNotice: cc.Prefab,
                MiniPanel: cc.Prefab,
                loading: cc.Node,
                notice: o,
                XoSo_Main: c,
                games: cc.Node,
                position: ""
            },
            onLoad: function() {
                cc.RedT.inGame = this;
                var t = cc.instantiate(this.MiniPanel);
                cc.RedT.MiniPanel = t.getComponent("MiniPanel"),
                this.redhat.insertChild(t),
                cc.RedT.send({
                    scene: "xo_so"
                }),
                this.username.string = cc.RedT.user.name,
                this.balans.string = n.numberWithCommas(cc.RedT.user.red),
                this.XoSo_Main.init(this)
            },
            onData: function(t) {
                console.log(t),
                void 0 !== t.user && (this.userData(t.user),
                cc.RedT.userData(t.user)),
                void 0 !== t.XoSo && this.XoSo(t.XoSo),
                void 0 !== t.mini && cc.RedT.MiniPanel.onData(t.mini),
                void 0 !== t.TopHu && cc.RedT.MiniPanel.TopHu.onData(t.TopHu),
                void 0 !== t.taixiu && cc.RedT.MiniPanel.TaiXiu.TX_Main.onData(t.taixiu),
                void 0 !== t.notice && this.notice.show(t.notice)
            },
            XoSo: function(t) {
                void 0 !== t.notice && this.addNotice(t.notice),
                void 0 !== t.history && this.XoSo_Main.History.onData(t.history),
                void 0 !== t.kq && this.XoSo_Main.KetQua.onData(t.kq)
            },
            userData: function(t) {
                this.balans.string = n.numberWithCommas(t.red)
            },
            addNotice: function(t) {
                var e = cc.instantiate(this.prefabNotice);
                e.getComponent("mini_warning").text.string = t,
                this.nodeNotice.addChild(e)
            },
            backGame: function() {
                switch (this.position) {
                case "Main":
                    this.loading.active = !0,
                    void 0 !== this.timeOut && clearTimeout(this.timeOut),
                    cc.director.loadScene("MainGame");
                    break;
                case "MienBac":
                    this.onSelectDat(null, "Main");
                    break;
                case "History":
                case "KetQua":
                    this.XoSo_Main.showMain(),
                    this.onSelectDat(null, "Main")
                }
            },
            signOut: function() {
                cc.director.loadScene("MainGame", function() {
                    cc.RedT.inGame.signOut()
                })
            },
            update: function() {
                var t = new Date;
                this.today.string = this.day(t.getDay()) + " " + n.addZero10(t.getDate()) + "/" + n.addZero10(t.getMonth() + 1) + "/" + t.getFullYear() + " " + n.addZero10(t.getHours()) + ":" + n.addZero10(t.getMinutes()) + ":" + n.addZero10(t.getSeconds())
            },
            day: function(t) {
                var e = new Array(7);
                return e[0] = "CN",
                e[1] = "T2",
                e[2] = "T3",
                e[3] = "T4",
                e[4] = "T5",
                e[5] = "T6",
                e[6] = "T7",
                e[t]
            },
            onSelectDat: function(t, e) {
                this.position = e,
                this.games.children.forEach(function(t) {
                    t.name === e ? t.active = !0 : t.active = !1
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper",
        Notice: "Notice",
        XoSo_Main: "XoSo_Main"
    }],
    XocXoc_dialog: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "c4aaeEmL4tMTYKZKZDHN9hV", "XocXoc_dialog");
        var n = t("XocXoc_history")
          , o = t("XocXoc_top");
        cc.Class({
            extends: cc.Component,
            properties: {
                history: n,
                top: o
            },
            init: function() {
                this.actionShow = cc.spawn(cc.scaleTo(.5, 1).easing(cc.easeBackOut(2.5)), cc.fadeTo(.5, 255)),
                this.objShow = null,
                this.objTmp = null
            },
            onClickBack: function() {
                cc.RedT.audio.playUnClick(),
                this.onBack()
            },
            onBack: function() {
                null != this.objShow ? void 0 == this.objShow.previous || null == this.objShow.previous ? (this.objShow.active = !1,
                this.node.active = !1,
                this.objShow = null) : (this.objTmp = this.objShow,
                this.objShow = this.objShow.previous,
                this.objTmp.previous = null,
                this.objTmp.active = !1,
                this.objShow.active = !0,
                this.objTmp = null) : this.node.active = !1
            },
            onClosePrevious: function(t) {
                void 0 !== t.previous && null !== t.previous && (this.onClosePrevious(t.previous),
                delete t.previous),
                t.active = !1
            },
            onCloseDialog: function() {
                null != this.objShow ? void 0 == this.objShow.previous || null == this.objShow.previous ? (this.objShow.active = this.node.active = !1,
                this.objShow = null) : (this.onClosePrevious(this.objShow.previous),
                this.objShow.active = this.node.active = !1,
                delete this.objShow.previous,
                this.objShow = null) : this.node.active = !1
            },
            resetSizeDialog: function(t) {
                t.stopAllActions(),
                t.scale = .5,
                t.opacity = 0
            },
            showHistory: function() {
                this.node.active = this.history.node.active = !0,
                this.objShow = this.history.node
            },
            showTop: function() {
                this.node.active = this.top.node.active = !0,
                this.objShow = this.top.node
            }
        }),
        cc._RF.pop()
    }
    , {
        XocXoc_history: "XocXoc_history",
        XocXoc_top: "XocXoc_top"
    }],
    XocXoc_history_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "281e41bbTJA6rvy6BRfTh1a", "XocXoc_history_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bg: cc.Node,
                time: cc.Label,
                phien: cc.Label,
                kqSprite: cc.Sprite,
                kqLabel: cc.Label,
                chan: cc.Label,
                le: cc.Label,
                red3: cc.Label,
                red4: cc.Label,
                white3: cc.Label,
                white4: cc.Label,
                win: cc.Label
            }
        }),
        cc._RF.pop()
    }
    , {}],
    XocXoc_history: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "358d0RyfQlNvKbc/4deKLy1", "XocXoc_history");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                page: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                iconRed: cc.SpriteFrame,
                iconWhite: cc.SpriteFrame,
                red: !0
            },
            onLoad: function() {
                var t = this
                  , e = cc.instantiate(this.page);
                e.y = -263,
                this.node.addChild(e),
                this.page = e.getComponent("Pagination"),
                Promise.all(this.content.children.map(function(t) {
                    return t.getComponent("XocXoc_history_item")
                })).then(function(e) {
                    t.content = e
                }),
                this.page.init(this)
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                cc.RedT.send({
                    g: {
                        xocxoc: {
                            log: {
                                red: this.red,
                                page: t
                            }
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                var e = this;
                this.page.onSet(t.page, t.kmess, t.total),
                Promise.all(this.content.map(function(i, o) {
                    var c = t.data[o];
                    if (void 0 !== c) {
                        i.node.active = !0,
                        i.bg.active = o % 2,
                        i.time.string = n.getStringDateByTime(c.time),
                        i.phien.string = c.phien;
                        var s = 0;
                        c.kq.forEach(function(t) {
                            t && s++
                        }),
                        i.kqSprite.spriteFrame = 0 === s ? e.iconRed : s % 2 ? e.iconRed : e.iconWhite,
                        i.kqLabel.string = 0 === s ? 4 : s,
                        i.chan.string = n.numberWithCommas(c.chan),
                        i.le.string = n.numberWithCommas(c.le),
                        i.red3.string = n.numberWithCommas(c.red3),
                        i.red4.string = n.numberWithCommas(c.red4),
                        i.white3.string = n.numberWithCommas(c.white3),
                        i.white4.string = n.numberWithCommas(c.white4),
                        i.win.string = n.numberWithCommas(c.betwin),
                        s % 2 ? (i.le.node.color = cc.Color.YELLOW,
                        i.chan.node.color = cc.Color.WHITE) : (i.chan.node.color = cc.Color.YELLOW,
                        i.le.node.color = cc.Color.WHITE),
                        i.white4.node.color = 0 === s ? cc.Color.YELLOW : cc.Color.WHITE,
                        i.white3.node.color = 1 === s ? cc.Color.YELLOW : cc.Color.WHITE,
                        i.red3.node.color = 3 === s ? cc.Color.YELLOW : cc.Color.WHITE,
                        i.red4.node.color = 4 === s ? cc.Color.YELLOW : cc.Color.WHITE
                    } else
                        i.node.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    XocXoc_top: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b5de3R6mw5PGbEgZCU2QLsG", "XocXoc_top"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    XocXoc: [function(t, e, i) {
        "use strict";
        function n(t, e) {
            return h(t) || a(t, e) || c(t, e) || o()
        }
        function o() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function c(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return s(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === i && t.constructor && (i = t.constructor.name),
                "Map" === i || "Set" === i ? Array.from(i) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? s(t, e) : void 0
            }
        }
        function s(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        function a(t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                var i = []
                  , n = !0
                  , o = !1
                  , c = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value),
                    !e || i.length !== e); n = !0)
                        ;
                } catch (t) {
                    o = !0,
                    c = t
                } finally {
                    try {
                        n || null == a.return || a.return()
                    } finally {
                        if (o)
                            throw c
                    }
                }
                return i
            }
        }
        function h(t) {
            if (Array.isArray(t))
                return t
        }
        cc._RF.push(e, "24723lmj75OaaA5CAEsELDw", "XocXoc");
        var r = t("Helper")
          , u = t("Notice")
          , d = t("XocXoc_dialog");
        cc.Class({
            extends: cc.Component,
            properties: {
                audioMoBat: cc.AudioSource,
                audioSingleChip: cc.AudioSource,
                audioMultiChip: cc.AudioSource,
                audioXocDia: cc.AudioSource,
                audioMultiChip2: cc.AudioSource,
                audioMultiChip3: cc.AudioSource,
                audioMultiChip4: cc.AudioSource,
                audioMultiChip5: cc.AudioSource,
                box_chan: cc.Node,
                box_le: cc.Node,
                box_red3: cc.Node,
                box_red4: cc.Node,
                box_white3: cc.Node,
                box_white4: cc.Node,
                total_chan: cc.Label,
                total_le: cc.Label,
                total_red3: cc.Label,
                total_red4: cc.Label,
                total_white3: cc.Label,
                total_white4: cc.Label,
                me_chan: cc.Label,
                me_le: cc.Label,
                me_red3: cc.Label,
                me_red4: cc.Label,
                me_white3: cc.Label,
                me_white4: cc.Label,
                me_name: cc.Label,
                me_balans: cc.Label,
                labelTime: cc.Label,
                timeWait: cc.Label,
                nodeWait: cc.Node,
                box_chip: cc.Node,
                users_bg: cc.Node,
                users_count: cc.Label,
                nodeBat: cc.Node,
                chip_1000: cc.SpriteFrame,
                chip_10000: cc.SpriteFrame,
                chip_50000: cc.SpriteFrame,
                chip_100000: cc.SpriteFrame,
                chip_1000000: cc.SpriteFrame,
                dot_red: cc.SpriteFrame,
                dot_white: cc.SpriteFrame,
                dot: {
                    default: [],
                    type: cc.Sprite
                },
                log_chan: cc.Label,
                log_le: cc.Label,
                log_top: cc.Node,
                logMain: cc.Node,
                redH: cc.Node,
                miniNotice: cc.Node,
                Animation: cc.Animation,
                prefabNotice: cc.Prefab,
                bet: cc.Node,
                nodeRed: cc.Node,
                nodeXu: cc.Node,
                MiniPanel: cc.Prefab,
                loading: cc.Node,
                notice: u,
                dialog: d,
                red: !0
            },
            ctor: function() {
                this.logs = [],
                this.nan = !1,
                this.cuoc = "1000",
                this.actionBatOpen = cc.moveTo(.5, cc.v2(0, 246)),
                this.actionBatClose = cc.sequence(cc.callFunc(function() {
                    this.resetData()
                }, this), cc.moveTo(.5, cc.v2(0, 0)), cc.delayTime(.5), cc.callFunc(function() {
                    this.audioXocDia.play(),
                    this.Animation.play()
                }, this)),
                this.maxDot = {
                    x: 44,
                    y: 44
                },
                this.maxBox1_3 = {
                    x: 103,
                    y: 104
                },
                this.maxBox1_1 = {
                    x: 121,
                    y: 184
                },
                this.clients = {
                    red: {
                        chan: 0,
                        le: 0,
                        red3: 0,
                        red4: 0,
                        white3: 0,
                        white4: 0
                    },
                    xu: {
                        chan: 0,
                        le: 0,
                        red3: 0,
                        red4: 0,
                        white3: 0,
                        white4: 0
                    }
                },
                this.users = {
                    red: {
                        chan: 0,
                        le: 0,
                        red3: 0,
                        red4: 0,
                        white3: 0,
                        white4: 0
                    },
                    xu: {
                        chan: 0,
                        le: 0,
                        red3: 0,
                        red4: 0,
                        white3: 0,
                        white4: 0
                    }
                }
            },
            onLoad: function() {
                cc.RedT.inGame = this;
                var t = cc.instantiate(this.MiniPanel);
                cc.RedT.MiniPanel = t.getComponent("MiniPanel"),
                this.redH.insertChild(t),
                this.logMain = this.logMain.children.map(function(t) {
                    return t.children[0].getComponent(cc.Sprite)
                }),
                this.logMain.reverse(),
                this.log_top = this.log_top.children.map(function(t) {
                    var e = {
                        cell: t
                    }
                      , i = t.children.map(function(t) {
                        return {
                            c: t.children[0].getComponent(cc.Sprite),
                            t: t.children[1].getComponent(cc.Label)
                        }
                    });
                    return i.reverse(),
                    e.data = i,
                    e
                }),
                this.log_top.reverse(),
                this.me_name.string = cc.RedT.user.name,
                this.me_balans.string = r.numberWithCommas(cc.RedT.user.red),
                cc.RedT.send({
                    scene: "xocxoc",
                    g: {
                        xocxoc: {
                            ingame: !0
                        }
                    }
                })
            },
            onData: function(t) {
                void 0 !== t.user && (this.userData(t.user),
                cc.RedT.userData(t.user)),
                void 0 !== t.xocxoc && this.xocxoc(t.xocxoc),
                void 0 !== t.mini && cc.RedT.MiniPanel.onData(t.mini),
                void 0 !== t.TopHu && cc.RedT.MiniPanel.TopHu.onData(t.TopHu),
                void 0 !== t.taixiu && cc.RedT.MiniPanel.TaiXiu.TX_Main.onData(t.taixiu)
            },
            backGame: function() {
                clearInterval(this.timeInterval),
                cc.RedT.send({
                    g: {
                        xocxoc: {
                            outgame: !0
                        }
                    }
                }),
                this.loading.active = !0,
                void 0 !== this.timeOut && clearTimeout(this.timeOut),
                cc.director.loadScene("MainGame")
            },
            signOut: function() {
                clearInterval(this.timeInterval),
                cc.director.loadScene("MainGame", function() {
                    cc.RedT.inGame.signOut()
                })
            },
            userData: function(t) {
                this.red ? this.me_balans.string = r.numberWithCommas(t.red) : this.me_balans.string = r.numberWithCommas(t.xu)
            },
            xocxoc: function(t) {
                t.ingame && this.xocxocIngame(t.ingame),
                t.finish && this.xocxocFinish(t.finish),
                t.history && this.dialog.history.onData(t.history),
                t.top,
                t.status && this.status(t.status),
                t.chip && this.clientsChip(t.chip),
                t.mechip && this.meChip(t.mechip),
                t.client && this.updateClient(t.client),
                t.me && this.updateMe(t.me),
                void 0 !== t.notice && this.addNotice(t.notice)
            },
            xocxocIngame: function(t) {
                t.client && this.countClient(t.client),
                t.chip && this.ingameChip(t.chip),
                t.time && (this.time_remain = t.time - 1,
                this.playTime(),
                this.time_remain > 32 && t.logs.length && (this.nodeBat.position = cc.v2(0, 246),
                this.setDot([t.logs[0].red1, t.logs[0].red2, t.logs[0].red3, t.logs[0].red4]))),
                t.data && this.updateData(t.data),
                t.logs && (this.logs = t.logs,
                this.setLogs()),
                t.me && this.updateMe(t.me),
                t.chats
            },
            ingameChip: function(t) {
                for (var e = 0, i = Object.entries(t); e < i.length; e++) {
                    var o = n(i[e], 2)
                      , c = o[0]
                      , s = o[1]
                      , a = this.maxBox1_3;
                    switch (t.box) {
                    case "chan":
                    case "le":
                        a = this.maxBox1_1
                    }
                    for (var h = 0, r = Object.entries(s); h < r.length; h++) {
                        var u = n(r[h], 2)
                          , d = u[0]
                          , l = u[1];
                        if (l > 0)
                            for (; l; ) {
                                var p = Math.random() * (a.x + 1) >> 0
                                  , g = Math.random() * (a.y + 1) >> 0
                                  , m = new cc.Node;
                                (m = m.addComponent(cc.Sprite)).spriteFrame = this["chip_" + d],
                                m.node.position = cc.v2(p, g),
                                m.node.scale = .3,
                                this["box_" + c].children[1].addChild(m.node),
                                l--
                            }
                    }
                }
            },
            xocxocFinish: function(t) {
                var e = {
                    red1: t[0],
                    red2: t[1],
                    red3: t[2],
                    red4: t[3]
                };
                this.logs.unshift(e),
                this.logs.length > 48 && this.logs.pop(),
                this.setDot(t),
                this.labelTime.node.active = !1,
                this.time_remain = 43,
                this.playTime(),
                this.nan || this.FinishTT()
            },
            FinishTT: function() {
                this.audioMoBat.play(),
                this.nodeBat.runAction(cc.sequence(this.actionBatOpen, cc.callFunc(this.showKQ, this), cc.delayTime(1), cc.callFunc(this.showKQ2, this))),
                this.setLogs()
            },
            showKQ: function() {
                var t = 0;
                switch (Object.values(this.logs[0]).forEach(function(e) {
                    e && t++
                }),
                t % 2 ? this.box_le.children[0].active = !0 : this.box_chan.children[0].active = !0,
                t) {
                case 0:
                    this.box_white4.children[0].active = !0;
                    break;
                case 1:
                    this.box_white3.children[0].active = !0;
                    break;
                case 3:
                    this.box_red3.children[0].active = !0;
                    break;
                case 4:
                    this.box_red4.children[0].active = !0
                }
            },
            showKQ2: function() {
                var t = 0
                  , e = 0
                  , i = null
                  , n = null
                  , o = 0;
                Object.values(this.logs[0]).forEach(function(t) {
                    t && o++
                });
                var c = this.box_chip.parent.convertToWorldSpaceAR(this.box_chip.position)
                  , s = null;
                o % 2 ? (i = this.box_le.children[1],
                t += this.box_chan.children[1].children.length,
                s = this.box_chan.children[1].convertToNodeSpaceAR(c),
                Promise.all(this.box_chan.children[1].children.map(function(t) {
                    t.runAction(cc.spawn(cc.scaleTo(.4, .5), cc.moveTo(.4, s)))
                }))) : (i = this.box_chan.children[1],
                t += this.box_le.children[1].children.length,
                s = this.box_le.children[1].convertToNodeSpaceAR(c),
                Promise.all(this.box_le.children[1].children.map(function(t) {
                    t.runAction(cc.spawn(cc.scaleTo(.4, .5), cc.moveTo(.4, s)))
                })));
                var a = this.box_red3.children[1].convertToNodeSpaceAR(c)
                  , h = this.box_red4.children[1].convertToNodeSpaceAR(c)
                  , r = this.box_white3.children[1].convertToNodeSpaceAR(c)
                  , u = this.box_white4.children[1].convertToNodeSpaceAR(c);
                switch (o) {
                case 0:
                    n = this.box_white4.children[1],
                    t += this.box_red3.children[1].children.length + this.box_red4.children[1].children.length + this.box_white3.children[1].children.length,
                    Promise.all(this.box_red3.children[1].children.map(function(t) {
                        t.runAction(cc.spawn(cc.scaleTo(.4, .5), cc.moveTo(.4, a)))
                    })),
                    Promise.all(this.box_red4.children[1].children.map(function(t) {
                        t.runAction(cc.spawn(cc.scaleTo(.4, .5), cc.moveTo(.4, h)))
                    })),
                    Promise.all(this.box_white3.children[1].children.map(function(t) {
                        t.runAction(cc.spawn(cc.scaleTo(.4, .5), cc.moveTo(.4, r)))
                    }));
                    break;
                case 1:
                    n = this.box_white3.children[1],
                    t += this.box_red3.children[1].children.length + this.box_red4.children[1].children.length + this.box_white4.children[1].children.length,
                    Promise.all(this.box_red3.children[1].children.map(function(t) {
                        t.runAction(cc.spawn(cc.scaleTo(.4, .5), cc.moveTo(.4, a)))
                    })),
                    Promise.all(this.box_red4.children[1].children.map(function(t) {
                        t.runAction(cc.spawn(cc.scaleTo(.4, .5), cc.moveTo(.4, h)))
                    })),
                    Promise.all(this.box_white4.children[1].children.map(function(t) {
                        t.runAction(cc.spawn(cc.scaleTo(.4, .5), cc.moveTo(.4, u)))
                    }));
                    break;
                case 2:
                    t += this.box_red3.children[1].children.length + this.box_red4.children[1].children.length + this.box_white3.children[1].children.length + this.box_white4.children[1].children.length,
                    Promise.all(this.box_red3.children[1].children.map(function(t) {
                        t.runAction(cc.spawn(cc.scaleTo(.4, .5), cc.moveTo(.4, a)))
                    })),
                    Promise.all(this.box_red4.children[1].children.map(function(t) {
                        t.runAction(cc.spawn(cc.scaleTo(.4, .5), cc.moveTo(.4, h)))
                    })),
                    Promise.all(this.box_white3.children[1].children.map(function(t) {
                        t.runAction(cc.spawn(cc.scaleTo(.4, .5), cc.moveTo(.4, u)))
                    })),
                    Promise.all(this.box_white4.children[1].children.map(function(t) {
                        t.runAction(cc.spawn(cc.scaleTo(.4, .5), cc.moveTo(.4, u)))
                    }));
                    break;
                case 3:
                    n = this.box_red3.children[1],
                    t += this.box_white3.children[1].children.length + this.box_red4.children[1].children.length + this.box_white4.children[1].children.length,
                    Promise.all(this.box_white3.children[1].children.map(function(t) {
                        t.runAction(cc.spawn(cc.scaleTo(.4, .5), cc.moveTo(.4, r)))
                    })),
                    Promise.all(this.box_red4.children[1].children.map(function(t) {
                        t.runAction(cc.spawn(cc.scaleTo(.4, .5), cc.moveTo(.4, h)))
                    })),
                    Promise.all(this.box_white4.children[1].children.map(function(t) {
                        t.runAction(cc.spawn(cc.scaleTo(.4, .5), cc.moveTo(.4, u)))
                    }));
                    break;
                case 4:
                    n = this.box_red4.children[1],
                    t += this.box_white3.children[1].children.length + this.box_red3.children[1].children.length + this.box_white4.children[1].children.length,
                    Promise.all(this.box_white3.children[1].children.map(function(t) {
                        t.runAction(cc.spawn(cc.scaleTo(.4, .5), cc.moveTo(.4, r)))
                    })),
                    Promise.all(this.box_red3.children[1].children.map(function(t) {
                        t.runAction(cc.spawn(cc.scaleTo(.4, .5), cc.moveTo(.4, a)))
                    })),
                    Promise.all(this.box_white4.children[1].children.map(function(t) {
                        t.runAction(cc.spawn(cc.scaleTo(.4, .5), cc.moveTo(.4, u)))
                    }))
                }
                t && this.audioMultiChip.play(),
                setTimeout(function() {
                    var t = this;
                    if (e += i.children.length,
                    i.children.forEach(function(e) {
                        var n = cc.instantiate(e);
                        n.position = s,
                        n.scale = .5;
                        var o = Math.random() * (t.maxBox1_1.x + 1) >> 0
                          , c = Math.random() * (t.maxBox1_1.y + 1) >> 0;
                        i.addChild(n),
                        n.runAction(cc.sequence(cc.spawn(cc.scaleTo(.4, .3), cc.moveTo(.4, cc.v2(o, c))), cc.sequence(cc.moveTo(.1, cc.v2(o, c - 6)), cc.moveTo(.1, cc.v2(o, c)))))
                    }),
                    n) {
                        e += n.children.length;
                        var o = n.convertToNodeSpaceAR(c);
                        n.children.forEach(function(e) {
                            var i = cc.instantiate(e);
                            i.position = o,
                            i.scale = .5;
                            var c = Math.random() * (t.maxBox1_3.x + 1) >> 0
                              , s = Math.random() * (t.maxBox1_3.y + 1) >> 0;
                            n.addChild(i),
                            i.runAction(cc.sequence(cc.spawn(cc.scaleTo(.4, .3), cc.moveTo(.4, cc.v2(c, s))), cc.sequence(cc.moveTo(.1, cc.v2(c, s - 6)), cc.moveTo(.1, cc.v2(c, s)))))
                        })
                    }
                    e && Promise.all([1, 2, 3, 4, 5].map(function(e) {
                        1 !== e ? t["audioMultiChip" + e].play() : t.audioMultiChip.play()
                    })),
                    setTimeout(function() {
                        var t = this.users_bg.parent.convertToWorldSpaceAR(this.users_bg.position)
                          , e = i.convertToNodeSpaceAR(t);
                        if (i.children.forEach(function(t) {
                            t.runAction(cc.spawn(cc.fadeTo(.4, 0), cc.moveTo(.4, e)))
                        }),
                        n) {
                            var o = n.convertToNodeSpaceAR(t);
                            n.children.forEach(function(t) {
                                t.runAction(cc.spawn(cc.fadeTo(.4, 0), cc.moveTo(.4, o)))
                            })
                        }
                    }
                    .bind(this), 3e3)
                }
                .bind(this), 1500)
            },
            setDot: function(t) {
                var e = this
                  , i = Math.random() * (this.maxDot.x + 1) >> 0
                  , n = Math.random() * (this.maxDot.y + 1) >> 0
                  , o = n - i;
                o > 22 && (n -= n / 1.4),
                this.dot[0].node.position = cc.v2(i, n),
                i = Math.random() * (this.maxDot.x + 1) >> 0,
                (o = (n = Math.random() * (this.maxDot.y + 1) >> 0) - i) > 22 && (n -= n / 1.4),
                this.dot[1].node.position = cc.v2(i, n),
                i = Math.random() * (this.maxDot.x + 1) >> 0,
                (o = (n = Math.random() * (this.maxDot.y + 1) >> 0) - i) > 22 && (n -= n / 1.4),
                this.dot[2].node.position = cc.v2(i, n),
                i = Math.random() * (this.maxDot.x + 1) >> 0,
                (o = (n = Math.random() * (this.maxDot.y + 1) >> 0) - i) > 22 && (n -= n / 1.4),
                this.dot[3].node.position = cc.v2(i, n),
                this.dot.forEach(function(i, n) {
                    var o = t[n];
                    i.spriteFrame = o ? e.dot_red : e.dot_white
                })
            },
            playTime: function() {
                void 0 !== this.timeInterval && clearInterval(this.timeInterval),
                this.timeInterval = setInterval(function() {
                    if (this.time_remain > 32) {
                        var t = r.numberPad(this.time_remain - 33, 2);
                        this.timeWait.string = t,
                        this.labelTime.node.active = !1,
                        this.nodeWait.active = !0
                    } else if (this.time_remain > 30)
                        this.labelTime.node.active = !1,
                        this.nodeWait.active = !1,
                        32 === this.time_remain && this.nodeBat.runAction(this.actionBatClose);
                    else if (this.time_remain > -1) {
                        t = r.numberPad(this.time_remain, 2);
                        this.labelTime.node.active = !0,
                        this.nodeWait.active = !1,
                        this.labelTime.string = t,
                        this.time_remain < 11 ? this.labelTime.node.color = cc.Color.RED : this.labelTime.node.color = cc.Color.WHITE
                    } else
                        clearInterval(this.timeInterval);
                    this.time_remain--
                }
                .bind(this), 1e3)
            },
            countClient: function(t) {
                this.users_count.string = t
            },
            updateData: function(t) {
                this.red ? (this.total_chan.string = t.red.chan > 0 ? r.numberWithCommas(t.red.chan) : "",
                this.total_le.string = t.red.le > 0 ? r.numberWithCommas(t.red.le) : "",
                this.total_red3.string = t.red.red3 > 0 ? r.numberWithCommas(t.red.red3) : "",
                this.total_red4.string = t.red.red4 > 0 ? r.numberWithCommas(t.red.red4) : "",
                this.total_white3.string = t.red.white3 > 0 ? r.numberWithCommas(t.red.white3) : "",
                this.total_white4.string = t.red.white4 > 0 ? r.numberWithCommas(t.red.white4) : "") : (this.total_chan.string = t.xu.chan > 0 ? r.numberWithCommas(t.xu.chan) : "",
                this.total_le.string = t.xu.le > 0 ? r.numberWithCommas(t.xu.le) : "",
                this.total_red3.string = t.xu.red3 > 0 ? r.numberWithCommas(t.xu.red3) : "",
                this.total_red4.string = t.xu.red4 > 0 ? r.numberWithCommas(t.xu.red4) : "",
                this.total_white3.string = t.xu.white3 > 0 ? r.numberWithCommas(t.xu.white3) : "",
                this.total_white4.string = t.xu.white4 > 0 ? r.numberWithCommas(t.xu.white4) : "")
            },
            resetData: function() {
                this.box_chan.children[1].removeAllChildren(),
                this.box_le.children[1].removeAllChildren(),
                this.box_white4.children[1].removeAllChildren(),
                this.box_white3.children[1].removeAllChildren(),
                this.box_red3.children[1].removeAllChildren(),
                this.box_red4.children[1].removeAllChildren(),
                this.box_chan.children[0].active = !1,
                this.box_le.children[0].active = !1,
                this.box_white4.children[0].active = !1,
                this.box_white3.children[0].active = !1,
                this.box_red3.children[0].active = !1,
                this.box_red4.children[0].active = !1,
                this.total_chan.string = "",
                this.total_le.string = "",
                this.total_red3.string = "",
                this.total_red4.string = "",
                this.total_white3.string = "",
                this.total_white4.string = "",
                this.me_chan.string = "",
                this.me_le.string = "",
                this.me_red3.string = "",
                this.me_red4.string = "",
                this.me_white3.string = "",
                this.me_white4.string = "",
                this.users.red.chan = 0,
                this.users.red.le = 0,
                this.users.red.red3 = 0,
                this.users.red.red4 = 0,
                this.users.red.white3 = 0,
                this.users.red.white4 = 0,
                this.users.xu.chan = 0,
                this.users.xu.le = 0,
                this.users.xu.red3 = 0,
                this.users.xu.red4 = 0,
                this.users.xu.white3 = 0,
                this.users.xu.white4 = 0,
                this.clients.red.chan = 0,
                this.clients.red.le = 0,
                this.clients.red.red3 = 0,
                this.clients.red.red4 = 0,
                this.clients.red.white3 = 0,
                this.clients.red.white4 = 0,
                this.clients.xu.chan = 0,
                this.clients.xu.le = 0,
                this.clients.xu.red3 = 0,
                this.clients.xu.red4 = 0,
                this.clients.xu.white3 = 0,
                this.clients.xu.white4 = 0
            },
            setLogs: function() {
                var t = this;
                this.logMain.forEach(function(e, i) {
                    var n = t.logs[i];
                    if (n) {
                        e.node.active = !0;
                        var o = 0;
                        (n = Object.values(n)).forEach(function(t) {
                            t && o++
                        }),
                        e.spriteFrame = o % 2 ? t.dot_red : t.dot_white
                    } else
                        e.node.active = !1
                });
                var e = -1
                  , i = []
                  , n = []
                  , o = 0
                  , c = 0
                  , s = t.logs.slice();
                s.reverse(),
                s.forEach(function(t) {
                    var o = 0;
                    Object.values(t).forEach(function(t) {
                        t && o++
                    });
                    var c = !(o % 2);
                    -1 === e && (e = c),
                    (c !== e || n.length > 3) && (e = c,
                    i.push(n),
                    n = []),
                    c === e && n.push(o)
                }),
                i.push(n),
                i.reverse(),
                i = i.slice(0, 12),
                this.log_top.forEach(function(e, n) {
                    var s = i[n];
                    s ? (e.cell.active = !0,
                    e.data.forEach(function(e, i) {
                        var n = s[i];
                        void 0 !== n ? (e.c.node.parent.active = !0,
                        e.c.spriteFrame = n % 2 ? t.dot_red : 4 === n ? t.dot_red : t.dot_white,
                        e.t.string = 0 === n ? 4 : n,
                        n % 2 ? c++ : o++) : e.c.node.parent.active = !1
                    })) : e.cell.active = !1
                }),
                this.log_chan.string = o,
                this.log_le.string = c
            },
            changerBet: function(t, e) {
                var i = t.target;
                this.cuoc = i.name,
                this.bet.children.forEach(function(t) {
                    t == i ? (t.children[0].active = !1,
                    t.children[1].active = !0,
                    t.pauseSystemEvents(),
                    t.opacity = 255) : (t.children[0].active = !0,
                    t.children[1].active = !1,
                    t.resumeSystemEvents(),
                    t.opacity = 99)
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.nodeRed.active = !this.nodeRed.active,
                this.nodeXu.active = !this.nodeXu.active,
                this.updateMeCoint()
            },
            onCuoc: function(t, e) {
                cc.RedT.send({
                    g: {
                        xocxoc: {
                            cuoc: {
                                red: this.red,
                                cuoc: this.cuoc,
                                box: e
                            }
                        }
                    }
                })
            },
            addNotice: function(t) {
                var e = cc.instantiate(this.prefabNotice);
                e.getComponent("mini_warning").text.string = t,
                this.miniNotice.addChild(e)
            },
            clientsChip: function(t) {
                var e = null
                  , i = this.maxBox1_3;
                switch (t.box) {
                case "chan":
                    e = this.box_chan,
                    i = this.maxBox1_1;
                    break;
                case "le":
                    e = this.box_le,
                    i = this.maxBox1_1;
                    break;
                case "red3":
                    e = this.box_red3;
                    break;
                case "red4":
                    e = this.box_red4;
                    break;
                case "white3":
                    e = this.box_white3;
                    break;
                case "white4":
                    e = this.box_white4
                }
                var n = this.users_bg.parent.convertToWorldSpaceAR(this.users_bg.position);
                n = e.children[1].convertToNodeSpaceAR(n);
                var o = new cc.Node;
                (o = o.addComponent(cc.Sprite)).spriteFrame = this["chip_" + t.cuoc],
                o.node.position = n,
                o.node.scale = .67;
                var c = Math.random() * (i.x + 1) >> 0
                  , s = Math.random() * (i.y + 1) >> 0;
                e.children[1].addChild(o.node);
                var a = cc.instantiate(this.audioSingleChip.node);
                o.node.addChild(a),
                a = a.getComponent(cc.AudioSource),
                o.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(.4, .3), cc.moveTo(.4, cc.v2(c, s))), cc.callFunc(function() {
                    this.play()
                }, a), cc.sequence(cc.moveTo(.1, cc.v2(c, s - 6)), cc.moveTo(.1, cc.v2(c, s)))))
            },
            meChip: function(t) {
                var e = null
                  , i = null
                  , n = this.maxBox1_3;
                switch (this.bet.children.forEach(function(i) {
                    i.name == t.cuoc && (e = i)
                }),
                t.box) {
                case "chan":
                    i = this.box_chan,
                    n = this.maxBox1_1;
                    break;
                case "le":
                    i = this.box_le,
                    n = this.maxBox1_1;
                    break;
                case "red3":
                    i = this.box_red3;
                    break;
                case "red4":
                    i = this.box_red4;
                    break;
                case "white3":
                    i = this.box_white3;
                    break;
                case "white4":
                    i = this.box_white4
                }
                var o = e.parent.convertToWorldSpaceAR(e.position);
                o = i.children[1].convertToNodeSpaceAR(o);
                var c = new cc.Node;
                (c = c.addComponent(cc.Sprite)).spriteFrame = this["chip_" + t.cuoc],
                c.node.position = o;
                var s = Math.random() * (n.x + 1) >> 0
                  , a = Math.random() * (n.y + 1) >> 0;
                i.children[1].addChild(c.node);
                var h = cc.instantiate(this.audioSingleChip.node);
                c.node.addChild(h),
                h = h.getComponent(cc.AudioSource),
                c.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(.3, .3), cc.moveTo(.3, cc.v2(s, a))), cc.callFunc(function() {
                    this.play()
                }, h), cc.sequence(cc.moveTo(.1, cc.v2(s, a + 6)), cc.moveTo(.1, cc.v2(s, a)))))
            },
            updateMe: function(t) {
                t.red && this.updateMeRed(t.red),
                t.xu && this.updateMeXu(t.xu)
            },
            updateMeRed: function(t) {
                t.chan > 0 && (this.users.red.chan = t.chan,
                this.red && (this.me_chan.string = r.numberWithCommas(t.chan))),
                t.le > 0 && (this.users.red.le = t.le,
                this.red && (this.me_le.string = r.numberWithCommas(t.le))),
                t.red3 > 0 && (this.users.red.red3 = t.red3,
                this.red && (this.me_red3.string = r.numberWithCommas(t.red3))),
                t.red4 > 0 && (this.users.red.red4 = t.red4,
                this.red && (this.me_red4.string = r.numberWithCommas(t.red4))),
                t.white3 > 0 && (this.users.red.white3 = t.white3,
                this.red && (this.me_white3.string = r.numberWithCommas(t.white3))),
                t.white4 > 0 && (this.users.red.white4 = t.white4,
                this.red && (this.me_white4.string = r.numberWithCommas(t.white4)))
            },
            updateMeXu: function(t) {
                t.chan > 0 && (this.users.xu.chan = t.chan,
                !this.red && (this.me_chan.string = r.numberWithCommas(t.chan))),
                t.le > 0 && (this.users.xu.le = t.le,
                !this.red && (this.me_le.string = r.numberWithCommas(t.le))),
                t.red3 > 0 && (this.users.xu.red3 = t.red3,
                !this.red && (this.me_red3.string = r.numberWithCommas(t.red3))),
                t.red4 > 0 && (this.users.xu.red4 = t.red4,
                !this.red && (this.me_red4.string = r.numberWithCommas(t.red4))),
                t.white3 > 0 && (this.users.xu.white3 = t.white3,
                !this.red && (this.me_white3.string = r.numberWithCommas(t.white3))),
                t.white4 > 0 && (this.users.xu.white4 = t.white4,
                !this.red && (this.me_white4.string = r.numberWithCommas(t.white4)))
            },
            updateClient: function(t) {
                t.red && this.updateClientRed(t.red),
                t.xu && this.updateClientXu(t.xu)
            },
            updateClientRed: function(t) {
                t.chan > 0 && (this.clients.red.chan = t.chan,
                this.red && (this.total_chan.string = r.numberWithCommas(t.chan))),
                t.le > 0 && (this.clients.red.le = t.le,
                this.red && (this.total_le.string = r.numberWithCommas(t.le))),
                t.red3 > 0 && (this.clients.red.red3 = t.red3,
                this.red && (this.total_red3.string = r.numberWithCommas(t.red3))),
                t.red4 > 0 && (this.clients.red.red4 = t.red4,
                this.red && (this.total_red4.string = r.numberWithCommas(t.red4))),
                t.white3 > 0 && (this.clients.red.white3 = t.white3,
                this.red && (this.total_white3.string = r.numberWithCommas(t.white3))),
                t.white4 > 0 && (this.clients.red.white4 = t.white4,
                this.red && (this.total_white4.string = r.numberWithCommas(t.white4)))
            },
            updateClientXu: function(t) {
                t.chan > 0 && (this.clients.xu.chan = t.chan,
                !this.red && (this.total_chan.string = r.numberWithCommas(t.chan))),
                t.le > 0 && (this.clients.xu.le = t.le,
                !this.red && (this.total_le.string = r.numberWithCommas(t.le))),
                t.red3 > 0 && (this.clients.xu.red3 = t.red3,
                !this.red && (this.total_red3.string = r.numberWithCommas(t.red3))),
                t.red4 > 0 && (this.clients.xu.red4 = t.red4,
                !this.red && (this.total_red4.string = r.numberWithCommas(t.red4))),
                t.white3 > 0 && (this.clients.xu.white3 = t.white3,
                !this.red && (this.total_white3.string = r.numberWithCommas(t.white3))),
                t.white4 > 0 && (this.clients.xu.white4 = t.white4,
                !this.red && (this.total_white4.string = r.numberWithCommas(t.white4)))
            },
            updateMeCoint: function() {
                this.red ? (this.me_chan.string = this.users.red.chan > 0 ? r.numberWithCommas(this.users.red.chan) : "",
                this.me_le.string = this.users.red.le > 0 ? r.numberWithCommas(this.users.red.le) : "",
                this.me_red3.string = this.users.red.red3 > 0 ? r.numberWithCommas(this.users.red.red3) : "",
                this.me_red4.string = this.users.red.red4 > 0 ? r.numberWithCommas(this.users.red.red4) : "",
                this.me_white3.string = this.users.red.white3 > 0 ? r.numberWithCommas(this.users.red.white3) : "",
                this.me_white4.string = this.users.red.white4 > 0 ? r.numberWithCommas(this.users.red.white4) : "",
                this.total_chan.string = this.clients.red.chan > 0 ? r.numberWithCommas(this.clients.red.chan) : "",
                this.total_le.string = this.clients.red.le > 0 ? r.numberWithCommas(this.clients.red.le) : "",
                this.total_red3.string = this.clients.red.red3 > 0 ? r.numberWithCommas(this.clients.red.red3) : "",
                this.total_red4.string = this.clients.red.red4 > 0 ? r.numberWithCommas(this.clients.red.red4) : "",
                this.total_white3.string = this.clients.red.white3 > 0 ? r.numberWithCommas(this.clients.red.white3) : "",
                this.total_white4.string = this.clients.red.white4 > 0 ? r.numberWithCommas(this.clients.red.white4) : "") : (this.me_chan.string = this.users.xu.chan > 0 ? r.numberWithCommas(this.users.xu.chan) : "",
                this.me_le.string = this.users.xu.le > 0 ? r.numberWithCommas(this.users.xu.le) : "",
                this.me_red3.string = this.users.xu.red3 > 0 ? r.numberWithCommas(this.users.xu.red3) : "",
                this.me_red4.string = this.users.xu.red4 > 0 ? r.numberWithCommas(this.users.xu.red4) : "",
                this.me_white3.string = this.users.xu.white3 > 0 ? r.numberWithCommas(this.users.xu.white3) : "",
                this.me_white4.string = this.users.xu.white4 > 0 ? r.numberWithCommas(this.users.xu.white4) : "",
                this.total_chan.string = this.clients.xu.chan > 0 ? r.numberWithCommas(this.clients.xu.chan) : "",
                this.total_le.string = this.clients.xu.le > 0 ? r.numberWithCommas(this.clients.xu.le) : "",
                this.total_red3.string = this.clients.xu.red3 > 0 ? r.numberWithCommas(this.clients.xu.red3) : "",
                this.total_red4.string = this.clients.xu.red4 > 0 ? r.numberWithCommas(this.clients.xu.red4) : "",
                this.total_white3.string = this.clients.xu.white3 > 0 ? r.numberWithCommas(this.clients.xu.white3) : "",
                this.total_white4.string = this.clients.xu.white4 > 0 ? r.numberWithCommas(this.clients.xu.white4) : "")
            },
            status: function(t) {
                setTimeout(function() {
                    var e = new cc.Node;
                    if (e.addComponent(cc.Label),
                    (e = e.getComponent(cc.Label)).string = (t.win ? "+" : "-") + r.numberWithCommas(t.bet),
                    e.font = t.win ? cc.RedT.util.fontCong : cc.RedT.util.fontTru,
                    e.lineHeight = 130,
                    e.fontSize = 25,
                    e.node.position = cc.v2(0, 90),
                    this.miniNotice.addChild(e.node),
                    e.node.runAction(cc.sequence(cc.moveTo(4, cc.v2(0, 200)), cc.callFunc(function() {
                        this.node.destroy()
                    }, e))),
                    t.win && cc.RedT.send({
                        user: {
                            updateCoint: !0
                        }
                    }),
                    void 0 !== t.thuong && t.thuong > 0) {
                        var i = new cc.Node;
                        i.addComponent(cc.Label),
                        (i = i.getComponent(cc.Label)).string = "+" + r.numberWithCommas(t.thuong),
                        i.font = cc.RedT.util.fontEffect,
                        i.lineHeight = 90,
                        i.fontSize = 14,
                        this.miniNotice.addChild(i.node),
                        i.node.runAction(cc.sequence(cc.moveTo(4, cc.v2(0, 100)), cc.callFunc(function() {
                            this.node.destroy()
                        }, i)))
                    }
                }
                .bind(this), 4e3)
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper",
        Notice: "Notice",
        XocXoc_dialog: "XocXoc_dialog"
    }],
    Zeus_bonus_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "eb2a0irwWFJL6cdSNcodBRb", "Zeus_bonus_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                open: cc.Node,
                close: cc.Node,
                text: cc.Label
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Zeus_dialog: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "e6038C2wsxJW7aH8d1vsUiK", "Zeus_dialog");
        var n = t("Zeus_history")
          , o = t("Zeus_top");
        cc.Class({
            extends: cc.Component,
            properties: {
                history: n,
                top: o,
                help: cc.Node
            },
            init: function() {
                this.actionShow = cc.spawn(cc.scaleTo(.5, 1).easing(cc.easeBackOut(2.5)), cc.fadeTo(.5, 255)),
                this.objShow = null,
                this.objTmp = null
            },
            onClickBack: function() {
                cc.RedT.audio.playUnClick(),
                this.onBack()
            },
            onBack: function() {
                null != this.objShow ? void 0 == this.objShow.previous || null == this.objShow.previous ? (this.objShow.active = !1,
                this.node.active = !1,
                this.objShow = null) : (this.objTmp = this.objShow,
                this.objShow = this.objShow.previous,
                this.objTmp.previous = null,
                this.objTmp.active = !1,
                this.objShow.active = !0,
                this.objTmp = null) : this.node.active = !1
            },
            onClosePrevious: function(t) {
                void 0 !== t.previous && null !== t.previous && (this.onClosePrevious(t.previous),
                delete t.previous),
                t.active = !1
            },
            onCloseDialog: function() {
                null != this.objShow ? void 0 == this.objShow.previous || null == this.objShow.previous ? (this.objShow.active = this.node.active = !1,
                this.objShow = null) : (this.onClosePrevious(this.objShow.previous),
                this.objShow.active = this.node.active = !1,
                delete this.objShow.previous,
                this.objShow = null) : this.node.active = !1
            },
            resetSizeDialog: function(t) {
                t.stopAllActions(),
                t.scale = .5,
                t.opacity = 0
            },
            showHistory: function() {
                this.node.active = this.history.node.active = !0,
                this.objShow = this.history.node
            },
            showTop: function() {
                this.node.active = this.top.node.active = !0,
                this.objShow = this.top.node
            },
            showHelp: function() {
                this.node.active = this.help.active = !0,
                this.objShow = this.help
            }
        }),
        cc._RF.pop()
    }
    , {
        Zeus_history: "Zeus_history",
        Zeus_top: "Zeus_top"
    }],
    Zeus_history: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "341aezoH1lK1IIq/VUivU/o", "Zeus_history");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                page: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0
            },
            onLoad: function() {
                var t = this
                  , e = cc.instantiate(this.page);
                e.y = -232,
                this.node.addChild(e),
                this.page = e.getComponent("Pagination"),
                Promise.all(this.content.children.map(function(t) {
                    return t.getComponent("VQRed_history_item")
                })).then(function(e) {
                    t.content = e
                }),
                this.page.init(this)
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                cc.RedT.send({
                    g: {
                        zeus: {
                            log: {
                                red: this.red,
                                page: t
                            }
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                this.page.onSet(t.page, t.kmess, t.total),
                Promise.all(this.content.map(function(e, i) {
                    var o = t.data[i];
                    void 0 !== o ? (e.node.active = !0,
                    e.time.string = n.getStringDateByTime(o.time),
                    e.phien.string = o.id,
                    e.cuoc.string = n.numberWithCommas(o.bet),
                    e.win.string = o.line + " D\xf2ng",
                    e.line.string = n.numberWithCommas(o.win)) : e.node.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    Zeus_iline: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "f316ePvUxJIaKcH9dMK775a", "Zeus_iline"),
        cc.Class({
            extends: cc.Component,
            properties: {
                line: cc.Node,
                ef: !1
            },
            onEnable: function() {
                this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onShow, this),
                this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onHidden, this)
            },
            onDisable: function() {
                this.node.off(cc.Node.EventType.MOUSE_ENTER, this.onShow, this),
                this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.onHidden, this)
            },
            onShow: function() {
                this.line.active = !0
            },
            onHidden: function() {
                !this.ef && (this.line.active = !1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Zeus_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "69bb4kwhbFJAopemQVH6x0A", "Zeus_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                icons: {
                    default: [],
                    type: cc.Prefab
                }
            },
            init: function(t) {
                this.RedT = t
            },
            random: function() {
                var t = 11 * Math.random() >> 0;
                return this.setIcon(t),
                t
            },
            setIcon: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.node.removeAllChildren();
                var i = cc.instantiate(this.icons[t]);
                i.setScale(cc.v2(.9, .9)),
                this.node.addChild(i),
                e && (this.data = t)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Zeus_lines: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "14126PW9jxD15WpChakSO7E", "Zeus_lines");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                lines: cc.Node,
                mainLines: cc.Node
            },
            init: function(t) {
                var e = this;
                this.RedT = t;
                Promise.all(this.mainLines.children.map(function(t) {
                    return t.getComponent("Zeus_iline")
                })).then(function(t) {
                    e.mainLines = t
                }),
                this.selectAll(null, "1")
            },
            onOpen: function() {
                this.node.active = !0
            },
            onClose: function() {
                this.RedT.playClick(),
                this.node.active && this.data.length < 1 ? this.RedT.notice.show({
                    title: "C\u1ea2NH B\xc1O",
                    text: "Ch\u1ecdn \xedt nh\u1ea5t 1 d\xf2ng"
                }) : this.node.active = !1
            },
            select: function(t) {
                this.RedT.playClick();
                var e = t.target;
                e.color._val != cc.Color.WHITE._val ? e.color = cc.Color.WHITE : e.color = e.color.fromHEX("#8A8A8A"),
                this.check()
            },
            check: function() {
                var t = this;
                Promise.all(this.lines.children.map(function(t, e) {
                    return t.color._val == cc.Color.WHITE._val ? e + 1 : void 0
                })).then(function(e) {
                    Promise.all(e.filter(function(t) {
                        return void 0 !== t
                    })).then(function(e) {
                        t.data = e,
                        t.RedT.labelLine.string = e.length,
                        t.RedT.tong.string = n.numberWithCommas(e.length * n.getOnlyNumberInString(t.RedT.bet.string))
                    })
                })
            },
            selectChan: function() {
                var t = this;
                Promise.all(this.lines.children.map(function(t, e) {
                    var i = e + 1;
                    if (!(i % 2))
                        return t.color = cc.Color.WHITE,
                        i;
                    t.color = t.color.fromHEX("#8A8A8A")
                })).then(function(e) {
                    Promise.all(e.filter(function(t) {
                        return void 0 !== t
                    })).then(function(e) {
                        t.data = e,
                        t.RedT.labelLine.string = e.length,
                        t.RedT.tong.string = n.numberWithCommas(e.length * n.getOnlyNumberInString(t.RedT.bet.string))
                    })
                })
            },
            selectLe: function() {
                var t = this;
                Promise.all(this.lines.children.map(function(t, e) {
                    var i = e + 1;
                    if (i % 2)
                        return t.color = cc.Color.WHITE,
                        i;
                    t.color = t.color.fromHEX("#8A8A8A")
                })).then(function(e) {
                    Promise.all(e.filter(function(t) {
                        return void 0 !== t
                    })).then(function(e) {
                        t.data = e,
                        t.RedT.labelLine.string = e.length,
                        t.RedT.tong.string = n.numberWithCommas(e.length * n.getOnlyNumberInString(t.RedT.bet.string))
                    })
                })
            },
            selectAll: function(t, e) {
                var i = this;
                Promise.all(this.lines.children.map(function(t, i) {
                    var n = "1" == e;
                    return t.color = n ? cc.Color.WHITE : t.color.fromHEX("#8A8A8A"),
                    n ? i + 1 : void 0
                })).then(function(t) {
                    Promise.all(t.filter(function(t, e) {
                        return void 0 !== t
                    })).then(function(t) {
                        i.data = t,
                        i.RedT.labelLine.string = t.length,
                        i.RedT.tong.string = n.numberWithCommas(t.length * n.getOnlyNumberInString(i.RedT.bet.string))
                    })
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    Zeus_playBonus: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "2f66d/4hnFBH52OMOITl7hl", "Zeus_playBonus");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                numberBonus: cc.Label,
                listBox: cc.Node,
                notice: cc.Node,
                numberWin: cc.Label,
                icons: {
                    default: [],
                    type: cc.SpriteFrame
                }
            },
            init: function(t) {
                var e = this;
                this.RedT = t,
                Promise.all(this.listBox.children.map(function(t) {
                    return t.getComponent("Zeus_bonus_item")
                })).then(function(t) {
                    e.listBox = t
                })
            },
            onPlay: function(t) {
                this.reset(),
                this.node.active = !0,
                this.numberBonus.string = t
            },
            onClickBox: function(t) {
                this.numberBonus.string && (this.RedT.playClick(),
                this.onSend(t.target.name))
            },
            closeNotice: function() {
                this.notice.active = this.node.active = !1,
                this.RedT.hieuUng()
            },
            onData: function(t) {
                if (void 0 !== t.box) {
                    var e = this.listBox[t.box];
                    e.open.active = !0,
                    e.close.active = !1,
                    e.text.string = n.numberWithCommas(t.bet),
                    this.numberBonus.string = t.bonus,
                    this.scheduleOnce(function() {
                        e.open.active = !1
                    }, 1.5)
                }
                void 0 !== t.win && (this.notice.active = !0,
                this.numberWin.string = n.numberWithCommas(t.win),
                this.RedT.vuathang.string = n.numberWithCommas(1 * n.getOnlyNumberInString(this.RedT.vuathang.string) + t.win))
            },
            onSend: function(t) {
                cc.RedT.send({
                    g: {
                        zeus: {
                            bonus: {
                                box: t
                            }
                        }
                    }
                })
            },
            reset: function() {
                Promise.all(this.listBox.map(function(t) {
                    t.open.active = !1,
                    t.close.active = !0,
                    t.text.string = ""
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    Zeus_reel: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "cfbabmLtKlEpIH6Z4SOgJ9w", "Zeus_reel"),
        cc.Class({
            extends: cc.Component,
            init: function(t) {
                var e = this;
                this.RedT = t,
                this.icons = [];
                var i = this
                  , n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                Promise.all(n.map(function(t, e) {
                    var o = cc.instantiate(i.RedT.icon);
                    return i.node.addChild(o),
                    (o = o.getComponent("Zeus_item")).init(i.RedT),
                    e > 2 && e < n.length - 3 && o.random(),
                    o
                })).then(function(t) {
                    e.icons = t,
                    e.icons[e.icons.length - 1].setIcon(e.icons[4].random()),
                    e.icons[e.icons.length - 2].setIcon(e.icons[3].random()),
                    e.icons[e.icons.length - 3].setIcon(e.icons[2].random()),
                    e.icons[e.icons.length - 4].setIcon(e.icons[1].random()),
                    e.icons[e.icons.length - 5].setIcon(e.icons[0].random())
                })
            },
            spin: function(t, e) {
                this.node.stopAllActions();
                var i = cc.moveTo(e, cc.v2(this.node.x, -(this.node.height - 396))).easing(cc.easeInOut(3))
                  , n = cc.callFunc(function() {
                    0 === t && this.RedT.copy(),
                    this.node.y = 0
                }, this);
                if (4 === t) {
                    var o = cc.callFunc(function() {
                        this.RedT.EF_vuathang(),
                        this.node.y = 0,
                        this.RedT.random(),
                        this.RedT.hieuUng()
                    }, this);
                    this.node.runAction(cc.sequence(cc.delayTime(.1 * t), i, o))
                } else
                    this.node.runAction(cc.sequence(cc.delayTime(.1 * t), i, n))
            },
            stop: function() {
                this.node.stopAllActions(),
                this.RedT.copy(),
                this.node.y = 0
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Zeus_top: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "16e083VlxRHlYpusln5jRrS", "Zeus_top");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                item: cc.Prefab,
                content: cc.Node,
                cointRed: cc.Node,
                cointXu: cc.Node,
                red: !0
            },
            onEnable: function() {
                this.get_data()
            },
            get_data: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                cc.RedT.send({
                    g: {
                        zeus: {
                            top: this.red
                        }
                    }
                })
            },
            changerCoint: function() {
                this.red = !this.red,
                this.cointRed.active = !this.cointRed.active,
                this.cointXu.active = !this.cointXu.active,
                this.get_data()
            },
            onData: function(t) {
                this.content.removeAllChildren();
                var e = this;
                Promise.all(t.map(function(t, i) {
                    var o = cc.instantiate(e.item)
                      , c = o.getComponent("VQRed_history_item");
                    c.time.string = n.getStringDateByTime(t.time),
                    c.phien.string = t.name,
                    c.cuoc.string = n.numberWithCommas(t.bet),
                    c.line.string = n.numberWithCommas(t.win),
                    c.win.string = 2 == t.type ? "N\u1ed5 H\u0169" : "Th\u1eafng l\u1edbn",
                    o.children[0].active = !(1 & i),
                    e.content.addChild(o)
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    Zeus: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "9e5a3gmlfZAEZBJ1mCqGYsC", "Zeus");
        var n = t("Helper")
          , o = t("Zeus_reel")
          , c = t("Zeus_lines")
          , s = t("Zeus_playBonus")
          , a = t("Notice")
          , h = t("Zeus_dialog");
        cc.Class({
            extends: cc.Component,
            properties: {
                gameBonus: s,
                audioBG: cc.AudioSource,
                audioClickSpin: {
                    default: null,
                    type: cc.AudioClip
                },
                audioClick: {
                    default: null,
                    type: cc.AudioClip
                },
                audioWin: {
                    default: null,
                    type: cc.AudioClip
                },
                audioBigWin: {
                    default: null,
                    type: cc.AudioClip
                },
                audioJackpot: {
                    default: null,
                    type: cc.AudioClip
                },
                redhat: cc.Node,
                reels: {
                    default: [],
                    type: o
                },
                icon: cc.Prefab,
                icons: {
                    default: [],
                    type: cc.SpriteFrame
                },
                betString: {
                    default: [],
                    type: cc.String
                },
                audioIcons: {
                    default: [],
                    type: cc.SpriteFrame
                },
                audioIcon: cc.Sprite,
                nodeRed: cc.Node,
                nodeXu: cc.Node,
                nodeNotice: cc.Node,
                prefabNotice: cc.Prefab,
                MiniPanel: cc.Prefab,
                loading: cc.Node,
                notice: a,
                dialog: h,
                Line: c,
                hu: cc.Label,
                taikhoan: cc.Label,
                tong: cc.Label,
                vuathang: cc.Label,
                labelLine: cc.Label,
                bet: cc.Label,
                freeLabel: cc.Label,
                phien: cc.Label,
                BigWin: cc.Animation,
                BigWin_Label: cc.Label,
                NoHu_close: cc.Node,
                NoHu: cc.Animation,
                NoHu_Label: cc.Label,
                EF_Bonus: cc.Animation,
                EF_Free: cc.Animation,
                buttonCoint: cc.Node,
                buttonLine: cc.Node,
                buttonSpin: cc.Node,
                buttonSpinSpeed: cc.Node,
                buttonBet: cc.Node,
                buttonAuto: cc.Node,
                Game: cc.Node,
                ChonCuoc: cc.Node,
                hu100: cc.Label,
                hu1000: cc.Label,
                hu10000: cc.Label,
                isSpeed: !1,
                isForceSpeed: !1,
                isAuto: !1,
                isSpin: !1,
                isFreeSpin: !1,
                red: !0,
                betSelect: 0
            },
            onLoad: function() {
                cc.RedT.inGame = this;
                var t = cc.instantiate(this.MiniPanel);
                cc.RedT.MiniPanel = t.getComponent("MiniPanel"),
                this.redhat.insertChild(t);
                var e = this;
                this.Line.init(this),
                this.BigWin.on("finished", this.BigWinFinish, this),
                this.BigWin.on("play", this.BigWinPlay, this),
                this.EF_Free.on("finished", this.EF_FreeFinish, this),
                this.NoHu.on("play", this.NoHuPlay, this),
                this.EF_Bonus.on("finished", this.EF_BonusFinish, this),
                this.gameBonus.init(this),
                this.dialog.init(),
                Promise.all(this.reels.map(function(t) {
                    t.init(e)
                })),
                this.Game.active = !1,
                this.ChonCuoc.active = !0,
                this.onGetAllHu(),
                cc.RedT.send({
                    scene: "zeus"
                }),
                this.taikhoan.string = n.numberWithCommas(cc.RedT.user.red),
                this.speed = 400,
                this.resetSpin(),
                cc.RedT.isSoundBackground() ? (this.playMusic(),
                this.audioIcon.spriteFrame = this.audioIcons[1]) : this.audioIcon.spriteFrame = this.audioIcons[0]
            },
            _playSFX: function(t) {
                cc.RedT.IS_SOUND && cc.audioEngine.playEffect(t, !1)
            },
            playClick: function() {
                this._playSFX(this.audioClick)
            },
            BigWinPlay: function() {
                var t = cc.callFunc(function() {
                    this._playSFX(this.audioBigWin),
                    n.numberTo(this.BigWin_Label, 0, this.H_win, 2e3, !0)
                }, this);
                this.BigWin.node.runAction(cc.sequence(cc.delayTime(.3), t))
            },
            BigWinFinish: function() {
                this.isBigWin = !1,
                this.BigWin.node.active = !1,
                this.BigWin_Label.string = "",
                this.showLineWin(!1),
                this.hieuUng()
            },
            NoHuPlay: function() {
                this.NoHu_Label.string = "";
                var t = cc.callFunc(function() {
                    this._playSFX(this.audioJackpot),
                    n.numberTo(this.NoHu_Label, 0, this.H_win, 2e3, !0)
                }, this);
                this.NoHu.node.runAction(cc.sequence(cc.delayTime(.3), t));
                var e = cc.callFunc(function() {
                    this.NoHu_close.active = !0
                }, this);
                this.NoHu.node.runAction(cc.sequence(cc.delayTime(4), e))
            },
            NoHuFinish: function() {
                this.isNoHu = !1,
                this.isAuto && this.onAuto(),
                this.showLineWin(!1),
                this.hieuUng()
            },
            NoHuClose: function() {
                this.NoHu.node.active = this.NoHu_close.active = !1,
                this.NoHuFinish()
            },
            EF_BonusFinish: function() {
                this.EF_Bonus.node.active = !1,
                this.gameBonus.onPlay(this.isBonus),
                this.isBonus = 0,
                this.showLineWin(!1)
            },
            EF_FreeFinish: function() {
                this.isFree = !1,
                this.EF_Free.node.active = !1,
                this.showLineWin(!1),
                this.hieuUng()
            },
            onData: function(t) {
                void 0 !== t.user && (this.userData(t.user),
                cc.RedT.userData(t.user)),
                void 0 !== t.Zeus && this.Zeus(t.Zeus),
                void 0 !== t.mini && cc.RedT.MiniPanel.onData(t.mini),
                void 0 !== t.TopHu && cc.RedT.MiniPanel.TopHu.onData(t.TopHu),
                void 0 !== t.taixiu && cc.RedT.MiniPanel.TaiXiu.TX_Main.onData(t.taixiu)
            },
            userData: function(t) {
                this.red ? this.taikhoan.string = n.numberWithCommas(t.red) : this.taikhoan.string = n.numberWithCommas(t.xu)
            },
            Zeus: function(t) {
                var e = this;
                void 0 !== t.status && (1 === t.status ? (Promise.all(t.cel.map(function(t, i) {
                    Promise.all(t.map(function(t, n) {
                        e.reels[i].icons[n].setIcon(t, !0)
                    }))
                })),
                this.runReels(this.isSpeed),
                this.H_line_win = t.line_win,
                this.H_win = t.win,
                this.H_free = t.free,
                this.isBonus = t.isBonus,
                this.isNoHu = t.isNoHu,
                this.isBigWin = t.isBigWin,
                this.isFree = t.isFree,
                this.isFreeSpin = !!t.free) : this.resetSpin()),
                t.phien && (this.phien.string = "#" + t.phien),
                t.bonus && this.gameBonus.onData(t.bonus),
                t.log && this.dialog.history.onData(t.log),
                t.top && this.dialog.top.onData(t.top),
                t.notice && this.addNotice(t.notice)
            },
            EF_vuathang: function() {
                this.showLineWin(!0),
                this.vuathang.string = n.numberWithCommas(this.H_win),
                this.buttonSpin.active = !this.H_free,
                this.buttonSpinSpeed.active = !this.H_free,
                this.freeLabel.string = "Free: " + this.H_free,
                this.freeLabel.node.active = !!this.H_free
            },
            onLineWin: function(t) {
                var e = this;
                Promise.all(this.H_line_win.map(function(i) {
                    var n = e.Line.mainLines[i.line - 1];
                    t ? (n.ef = !0,
                    n.onShow()) : (n.ef = !1,
                    n.onHidden())
                }))
            },
            showLineWin: function(t) {
                this.onLineWin(t),
                t || this.isNoHu || this.isBigWin || this.isAuto || this.isFreeSpin || (this.eflineN = 0,
                this.efLineWin())
            },
            efLineWin: function(t) {
                if (this.H_line_win.length) {
                    this.node.stopAllActions();
                    void 0 === this.H_line_win[this.eflineN] && (this.eflineN = 0),
                    this.efOneLineWin(this.eflineN, !0);
                    var e = cc.callFunc(function() {
                        this.efOneLineWin(this.eflineN, !1),
                        this.eflineN += 1,
                        this.efLineWin()
                    }, this);
                    this.node.runAction(cc.sequence(cc.delayTime(1.5), e))
                }
            },
            efOneLineWin: function(t, e) {
                t = this.H_line_win[this.eflineN].line;
                var i = this.Line.mainLines[t - 1];
                e ? (i.ef = !0,
                i.onShow()) : (i.ef = !1,
                i.onHidden())
            },
            hieuUng: function() {
                if (this.isBigWin && !this.isNoHu)
                    this.BigWin.node.active = !0,
                    this.BigWin.play(),
                    this.oldBigWin = !0;
                else if (this.isNoHu)
                    this.NoHu.node.active = !0,
                    this.NoHu.play();
                else if (this.isBonus)
                    this.EF_Bonus.node.active = !0,
                    this.EF_Bonus.play(),
                    cc.RedT.audio.playEf("bonus");
                else if (this.isFree)
                    this.EF_Free.node.active = !0,
                    this.EF_Free.play();
                else if (this.H_win > 0) {
                    var t = new cc.Node;
                    t.addComponent(cc.Label),
                    (t = t.getComponent(cc.Label)).string = "+" + n.numberWithCommas(this.H_win),
                    t.font = cc.RedT.util.fontCong,
                    t.lineHeight = 130,
                    t.fontSize = 25,
                    t.node.position = cc.v2(0, 21),
                    this.nodeNotice.addChild(t.node),
                    !this.oldBigWin && this._playSFX(this.audioWin),
                    t.node.runAction(cc.sequence(cc.moveTo(1.2, cc.v2(0, 105)), cc.callFunc(function() {
                        this.speed = 0,
                        t.node.destroy(),
                        this.hieuUng(),
                        this.showLineWin(!1)
                    }, this))),
                    this.H_win = 0,
                    this.oldBigWin = !1
                } else
                    this.isAuto || this.isFreeSpin ? this.timeOut = setTimeout(function() {
                        this.onAutoSpin(),
                        this.speed = 400
                    }
                    .bind(this), this.speed) : this.resetSpin()
            },
            onChangerBet: function(t, e) {
                this._playSFX(this.audioClick),
                this.betSelect++,
                this.betSelect > 2 && (this.betSelect = 0),
                this.bet.string = e,
                this.tong.string = n.numberWithCommas(this.Line.data.length * n.getOnlyNumberInString(this.bet.string)),
                this.Game.active = !0,
                this.ChonCuoc.active = !1,
                this.resetSpin(),
                this.onGetHu()
            },
            onSelectBet: function() {
                this.Game.active = !1,
                this.ChonCuoc.active = !0,
                this.onGetAllHu(),
                this.onGetHu()
            },
            changerCoint: function() {
                this.red = !this.red,
                this.nodeRed.active = !this.nodeRed.active,
                this.nodeXu.active = !this.nodeXu.active,
                this.userData(cc.RedT.user),
                this.onGetHu()
            },
            onClickAuto: function() {
                this._playSFX(this.audioClick),
                this.onAuto()
            },
            onAuto: function() {
                this.isAuto = !this.isAuto,
                this.isAuto ? this.buttonAuto.color = cc.Color.WHITE : this.buttonAuto.color = this.buttonAuto.color.fromHEX("#8A8A8A")
            },
            onClickSpin: function() {
                this.isSpeed = !1,
                this.onSpin()
            },
            onClickSpinSpeed: function() {
                this.isSpeed = !0,
                this.isAuto && (this.isForceSpeed = !0),
                this.onSpin()
            },
            onAutoSpin: function() {
                this._playSFX(this.audioClickSpin),
                this.onGetSpin()
            },
            onSpin: function() {
                this.Line.data.length < 1 ? this.addNotice("Ch\u1ecdn \xedt nh\u1ea5t 1 d\xf2ng") : this.isSpin || (this._playSFX(this.audioClickSpin),
                this.node.stopAllActions(),
                void 0 !== this.eflineN && void 0 !== this.H_line_win && this.H_line_win.length && this.efOneLineWin(this.eflineN, !1),
                this.eflineO = this.eflineN = 0,
                this.isSpin = !0,
                this.setSpin(),
                this.onGetSpin())
            },
            setSpin: function() {
                this.buttonLine.pauseSystemEvents(),
                this.buttonSpin.pauseSystemEvents(),
                this.buttonSpinSpeed.pauseSystemEvents(),
                this.buttonCoint.pauseSystemEvents(),
                this.buttonBet.pauseSystemEvents()
            },
            resetSpin: function() {
                this.isAuto && this.onAuto(),
                this.isSpin = !1,
                this.isForceSpeed = !1,
                this.buttonLine.resumeSystemEvents(),
                this.buttonSpin.resumeSystemEvents(),
                this.buttonSpinSpeed.resumeSystemEvents(),
                this.buttonCoint.resumeSystemEvents(),
                this.buttonBet.resumeSystemEvents()
            },
            runReels: function(t) {
                var e = this;
                Promise.all(this.reels.map(function(i, n) {
                    t || e.isForceSpeed ? i.spin(n, .25) : i.spin(n, 1)
                })),
                this.isSpeed = !1
            },
            copy: function() {
                Promise.all(this.reels.map(function(t) {
                    t.icons[t.icons.length - 1].setIcon(t.icons[2].data),
                    t.icons[t.icons.length - 2].setIcon(t.icons[1].data),
                    t.icons[t.icons.length - 3].setIcon(t.icons[0].data)
                }))
            },
            random: function() {
                Promise.all(this.reels.map(function(t) {
                    Promise.all(t.icons.map(function(e, i) {
                        i > 2 && i < t.icons.length - 3 && e.random()
                    }))
                }))
            },
            onGetSpin: function() {
                cc.RedT.send({
                    g: {
                        zeus: {
                            spin: {
                                cuoc: n.getOnlyNumberInString(this.bet.string),
                                red: this.red,
                                line: this.Line.data
                            }
                        }
                    }
                })
            },
            addNotice: function(t) {
                var e = cc.instantiate(this.prefabNotice);
                e.getComponent("mini_warning").text.string = t,
                this.nodeNotice.addChild(e)
            },
            backGame: function() {
                this.loading.active = !0,
                void 0 !== this.timeOut && clearTimeout(this.timeOut),
                cc.director.loadScene("MainGame")
            },
            signOut: function() {
                cc.director.loadScene("MainGame", function() {
                    cc.RedT.inGame.signOut()
                })
            },
            onGetHu: function() {
                var t = this;
                if (void 0 !== cc.RedT.setting.topHu.data) {
                    var e = this
                      , i = n.getOnlyNumberInString(e.bet.string);
                    Promise.all(cc.RedT.setting.topHu.data.zeus.filter(function(t) {
                        return t.type == i && t.red == e.red
                    })).then(function(e) {
                        var i = n.getOnlyNumberInString(t.hu.string)
                          , o = e[0].bet;
                        i - o != 0 && n.numberTo(t.hu, i, o, 2e3, !0)
                    })
                }
            },
            onGetAllHu: function() {
                var t = this;
                if (void 0 !== cc.RedT.setting.topHu.data) {
                    n.getOnlyNumberInString(this.bet.string);
                    Promise.all(cc.RedT.setting.topHu.data.zeus.filter(function(t) {
                        return 1 == t.red
                    })).then(function(e) {
                        var i = e.filter(function(t) {
                            return 100 == t.type
                        })
                          , o = e.filter(function(t) {
                            return 1e3 == t.type
                        })
                          , c = e.filter(function(t) {
                            return 1e4 == t.type
                        })
                          , s = n.getOnlyNumberInString(t.hu100.string)
                          , a = n.getOnlyNumberInString(t.hu1000.string)
                          , h = n.getOnlyNumberInString(t.hu10000.string);
                        s - i[0].bet != 0 && n.numberTo(t.hu100, n.getOnlyNumberInString(t.hu100.string), i[0].bet, 4900, !0),
                        a - o[0].bet != 0 && n.numberTo(t.hu1000, n.getOnlyNumberInString(t.hu1000.string), o[0].bet, 4900, !0),
                        h - c[0].bet != 0 && n.numberTo(t.hu10000, n.getOnlyNumberInString(t.hu10000.string), c[0].bet, 4900, !0)
                    })
                }
            },
            playMusic: function() {
                this.audioBG.play()
            },
            pauseMusic: function() {
                this.audioBG.pause()
            },
            onSetAudio: function() {
                cc.RedT.isSoundBackground() ? (cc.RedT.setSoundBackground(!1),
                this.pauseMusic(),
                cc.RedT.IS_SOUND = !1,
                cc.RedT.setSoundGame(!1),
                this.audioIcon.spriteFrame = this.audioIcons[0]) : (cc.RedT.setSoundBackground(!0),
                this.playMusic(),
                cc.RedT.IS_SOUND = !0,
                cc.RedT.setSoundGame(!0),
                this.audioIcon.spriteFrame = this.audioIcons[1])
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper",
        Notice: "Notice",
        Zeus_dialog: "Zeus_dialog",
        Zeus_lines: "Zeus_lines",
        Zeus_playBonus: "Zeus_playBonus",
        Zeus_reel: "Zeus_reel"
    }],
    bankNap: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "72fdbys1l5HW7J4wCB8Lxax", "bankNap");
        var n = t("BrowserUtil")
          , o = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                labelBank: cc.Label,
                labelNumber: cc.Label,
                labelName: cc.Label,
                labelBranch: cc.Label,
                labelUID: cc.Label,
                moreBank: cc.Node,
                scrollviewBank: {
                    default: null,
                    type: cc.ScrollView
                },
                prefab: {
                    default: null,
                    type: cc.Prefab
                },
                isLoad: !1,
                moreHinhThuc: cc.Node,
                bodyNap: cc.Node,
                labelHinhthuc: cc.Label,
                inputTien: cc.EditBox,
                inputName: cc.EditBox,
                inputKhop: cc.EditBox,
                inputSTK: cc.EditBox,
                inputNameGo: cc.EditBox,
                hinhThuc: ""
            },
            onLoad: function() {
                this.isLoad || cc.RedT.send({
                    shop: {
                        bank: {
                            list: !0
                        }
                    }
                });
                var t = this;
                this.editboxs = [this.inputTien, this.inputName],
                this.keyHandle = function(e) {
                    return e.keyCode === cc.macro.KEY.tab ? (t.isTop() && t.changeNextFocusEditBox(),
                    e.preventDefault && e.preventDefault(),
                    !1) : e.keyCode === cc.macro.KEY.enter ? (n.focusGame(),
                    t.onNapClick(),
                    e.preventDefault && e.preventDefault(),
                    !1) : void 0
                }
            },
            onEnable: function() {
                this.labelUID.string = cc.RedT.user.UID,
                cc.sys.isBrowser && this.addEvent()
            },
            onDisable: function() {
                this.moreBank.active = this.moreHinhThuc.active = !1,
                cc.sys.isBrowser && this.removeEvent(),
                this.clean()
            },
            addEvent: function() {
                for (var t in cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).addEventListener("keydown", this.keyHandle, !1)
            },
            removeEvent: function() {
                for (var t in this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).removeEventListener("keydown", this.keyHandle, !1);
                cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
            },
            onKeyDown: function(t) {
                switch (t.keyCode) {
                case cc.macro.KEY.tab:
                    this.isTop() && this.changeNextFocusEditBox();
                    break;
                case cc.macro.KEY.enter:
                    this.isTop() && this.onNapClick()
                }
            },
            changeNextFocusEditBox: function() {
                for (var t = !1, e = 0, i = this.editboxs.length; e < i; e++)
                    if (n.checkEditBoxFocus(this.editboxs[e])) {
                        n.focusEditBox(this.editboxs[e]),
                        t = !0;
                        break
                    }
                !t && 0 < this.editboxs.length && n.focusEditBox(this.editboxs[0])
            },
            isTop: function() {
                return !cc.RedT.inGame.notice.node.active && !cc.RedT.inGame.loading.active
            },
            clean: function() {
                this.inputTien.string = this.inputName.string = this.inputSTK.string = this.inputKhop.string = this.inputNameGo.string = ""
            },
            toggleMoreBank: function() {
                this.moreBank.active = !this.moreBank.active
            },
            toggleHinhThuc: function() {
                this.moreHinhThuc.active = !this.moreHinhThuc.active
            },
            onData: function(t) {
                var e = this;
                this.isLoad = !0;
                var i = this;
                t.length > 0 && Promise.all(t.map(function(t, e) {
                    var n = cc.instantiate(i.prefab)
                      , o = n.getComponent("NapRed_itemOne");
                    return o.init(i, "i_arg", "labelBank"),
                    o.text.string = t.bank,
                    i.scrollviewBank.content.addChild(n),
                    o.data = t,
                    o
                })).then(function(t) {
                    e.i_arg = t
                })
            },
            backT: function(t) {
                this.labelNumber.string = t.number,
                this.labelName.string = t.name,
                this.labelBranch.string = t.branch
            },
            hinhThucSelect: function(t, e) {
                switch (this.hinhThuc = e,
                t.target.parent.children.forEach(function(t) {
                    t.name === e ? (t.children[0].active = !0,
                    this.labelHinhthuc.string = t.children[1].getComponent(cc.Label).string) : t.children[0].active = !1,
                    this.moreHinhThuc.active = !1
                }
                .bind(this)),
                e) {
                case "1":
                    this.bodyNap.children[0].active = !0,
                    this.bodyNap.children[1].active = !1,
                    this.bodyNap.children[2].active = !1;
                    break;
                case "2":
                    this.bodyNap.children[0].active = !1,
                    this.bodyNap.children[1].active = !0,
                    this.bodyNap.children[2].active = !1;
                    break;
                case "3":
                    this.bodyNap.children[0].active = !1,
                    this.bodyNap.children[1].active = !1,
                    this.bodyNap.children[2].active = !0
                }
            },
            onChangerRed: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                t = o.numberWithCommas(o.getOnlyNumberInString(t)),
                this.inputTien.string = 0 == t ? "" : t
            },
            onClickNap: function() {
                if (this.labelNumber.string.length)
                    if ("1" === this.hinhThuc && this.inputKhop.string.length < 6)
                        cc.RedT.inGame.notice.show({
                            title: "N\u1ea0P MEC",
                            text: "Nh\u1eadp m\xe3 giao d\u1ecbch ng\xe2n h\xe0ng..."
                        });
                    else if ("2" === this.hinhThuc && this.inputSTK.string.length < 6)
                        cc.RedT.inGame.notice.show({
                            title: "N\u1ea0P MEC",
                            text: "Vui l\xf2ng nh\u1eadp ch\xednh x\xe1c s\u1ed1 t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n."
                        });
                    else if ("3" === this.hinhThuc && this.inputNameGo.string.length < 6)
                        cc.RedT.inGame.notice.show({
                            title: "N\u1ea0P MEC",
                            text: "Vui l\xf2ng nh\u1eadp H\u1ecd T\xean ng\u01b0\u1eddi \u0111i chuy\u1ec3n ti\u1ec1n."
                        });
                    else if (o.getOnlyNumberInString(this.inputTien.string) >> 0 < 2e5)
                        cc.RedT.inGame.notice.show({
                            title: "N\u1ea0P MEC",
                            text: "N\u1ea1p t\u1ed1i thi\u1ec3u 200.000, t\u1ed1i \u0111a 1.000.000.000"
                        });
                    else if (this.inputName.string.length < 6)
                        cc.RedT.inGame.notice.show({
                            title: "N\u1ea0P MEC",
                            text: "Vui l\xf2ng nh\u1eadp ch\xednh x\xe1c H\u1ecd T\xean ng\u01b0\u1eddi g\u1eedi"
                        });
                    else {
                        var t = {
                            hinhthuc: this.hinhThuc,
                            bank: this.labelNumber.string,
                            money: o.getOnlyNumberInString(this.inputTien.string),
                            name: this.inputName.string
                        };
                        "1" === this.hinhThuc && (t.khop = this.inputKhop.string),
                        "2" === this.hinhThuc && (t.stk = this.inputSTK.string),
                        "3" === this.hinhThuc && (t.namego = this.inputNameGo.string),
                        t = {
                            shop: {
                                bank: {
                                    nap: t
                                }
                            }
                        },
                        cc.RedT.send(t)
                    }
                else
                    cc.RedT.inGame.notice.show({
                        title: "N\u1ea0P MEC",
                        text: "Vui l\xf2ng ch\u1ecdn ng\xe2n h\xe0ng mu\u1ed1n n\u1ea1p."
                    })
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil",
        Helper: "Helper"
    }],
    bankRut: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "e6e82lXaWpFFKSeuqaCN4Qt", "bankRut");
        var n = t("BrowserUtil")
          , o = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                editBank: cc.EditBox,
                editNumber: cc.EditBox,
                editName: cc.EditBox,
                editBranch: cc.EditBox,
                editRut: cc.EditBox,
                editOTP: cc.EditBox,
                typeOTP: ""
            },
            init: function() {
                var t = this;
                this.editboxs = [this.editBank, this.editNumber, this.editName, this.editBranch, this.editRut, this.editOTP],
                this.keyHandle = function(e) {
                    return e.keyCode === cc.macro.KEY.tab ? (t.isTop() && t.changeNextFocusEditBox(),
                    e.preventDefault && e.preventDefault(),
                    !1) : e.keyCode === cc.macro.KEY.enter ? (n.focusGame(),
                    t.onNapClick(),
                    e.preventDefault && e.preventDefault(),
                    !1) : void 0
                }
            },
            onEnable: function() {
                cc.sys.isBrowser && this.addEvent()
            },
            onDisable: function() {
                cc.sys.isBrowser && this.removeEvent(),
                this.clean()
            },
            addEvent: function() {
                for (var t in cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).addEventListener("keydown", this.keyHandle, !1)
            },
            removeEvent: function() {
                for (var t in this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).removeEventListener("keydown", this.keyHandle, !1);
                cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
            },
            onKeyDown: function(t) {
                switch (t.keyCode) {
                case cc.macro.KEY.tab:
                    this.isTop() && this.changeNextFocusEditBox();
                    break;
                case cc.macro.KEY.enter:
                    this.isTop() && this.onNapClick()
                }
            },
            changeNextFocusEditBox: function() {
                for (var t = !1, e = 0, i = this.editboxs.length; e < i; e++)
                    if (n.checkEditBoxFocus(this.editboxs[e])) {
                        n.focusEditBox(this.editboxs[e]),
                        t = !0;
                        break
                    }
                !t && 0 < this.editboxs.length && n.focusEditBox(this.editboxs[0])
            },
            isTop: function() {
                return !cc.RedT.inGame.notice.node.active && !cc.RedT.inGame.loading.active
            },
            clean: function() {
                this.editBank.string = this.editNumber.string = this.editName.string = this.editBranch.string = this.editRut.string = this.editOTP.string = ""
            },
            onClickOTP: function() {
                cc.RedT.send({
                    otp: {
                        type: this.typeOTP
                    }
                })
            },
            changerTypeOTP: function(t) {
                this.typeOTP = t.node.name
            },
            onChangerRed: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                t = o.numberWithCommas(o.getOnlyNumberInString(t)),
                this.editRut.string = 0 == t ? "" : t
            },
            onClick: function() {
                var t = null;
                o.isEmpty(this.editBank.string) || o.isEmpty(this.editNumber.string) || o.isEmpty(this.editName.string) || o.isEmpty(this.editBranch.string) || o.isEmpty(this.editRut.string) || o.isEmpty(this.editOTP.string) ? t = "Ki\u1ec3m tra l\u1ea1i c\xe1c th\xf4ng tin..." : o.getOnlyNumberInString(this.editRut.string) < 1e4 && (t = "S\u1ed1 ti\u1ec1n R\xdaT t\u1ed1i thi\u1ec3u l\xe0 100.000."),
                t ? cc.RedT.inGame.notice.show({
                    title: "L\u1ed6I",
                    text: t
                }) : cc.RedT.send({
                    shop: {
                        bank: {
                            rut: {
                                bank: this.editBank.string,
                                number: this.editNumber.string,
                                name: this.editName.string,
                                branch: this.editBranch.string,
                                rut: o.getOnlyNumberInString(this.editRut.string),
                                otp: this.editOTP.string
                            }
                        }
                    }
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil",
        Helper: "Helper"
    }],
    bgLoading: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b29c3M7ShVDkKHKf+49LVQZ", "bgLoading"),
        cc.Class({
            extends: cc.Component,
            properties: {
                text: cc.Label
            },
            onDisable: function() {
                this.text.string = ""
            },
            onData: function(t) {
                void 0 !== t.active && (this.node.active = t.active),
                void 0 !== t.text && (this.text.string = t.text)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    candy_reel_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b4e909CNdZP+6qJOWfTDfrb", "candy_reel_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                icon: cc.Sprite
            },
            init: function(t) {
                this.RedT = t
            },
            random: function() {
                var t = ~~(7 * Math.random());
                return this.setIcon(t),
                t
            },
            setIcon: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.icon.spriteFrame = this.RedT.icons[t],
                e && (this.data = t)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    dialogHuongDan: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "495d5jwe0pGBIw/joWKvc/9", "dialogHuongDan"),
        cc.Class({
            extends: cc.Component,
            properties: {
                game: cc.Node,
                content: cc.Node,
                title: cc.Label
            },
            init: function() {
                var t = this;
                Promise.all(this.game.children.map(function(t) {
                    return t.children[1].getComponent(cc.Label)
                })).then(function(e) {
                    t.game = e
                })
            },
            selectGame: function(t, e) {
                this.select(e)
            },
            select: function(t) {
                cc.RedT.audio.playClick();
                var e = this;
                Promise.all(this.game.map(function(i) {
                    var n = i.node.parent;
                    n.name == t ? (n.children[0].active = !0,
                    n.pauseSystemEvents(),
                    e.title.string = i.string) : (n.children[0].active = !1,
                    n.resumeSystemEvents())
                })),
                Promise.all(this.content.children.map(function(e) {
                    e.name == t ? e.active = !0 : e.active = !1
                }))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    hoverScale: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "d8e56/FW3FDTab9UduKTQcx", "hoverScale"),
        cc.Class({
            extends: cc.Component,
            properties: {
                pressedScale: 1,
                transDuration: 0
            },
            onLoad: function() {
                this.initScale = this.node.scale,
                this.scaleOnAction = cc.scaleTo(this.transDuration, this.pressedScale),
                this.scaleOffAction = cc.scaleTo(this.transDuration, this.initScale)
            },
            onEnable: function() {
                this.node.on(cc.Node.EventType.MOUSE_ENTER, this.eventOnHover, this),
                this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.eventOffHover, this)
            },
            onDisable: function() {
                this.node.off(cc.Node.EventType.MOUSE_ENTER, this.eventOnHover, this),
                this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.eventOffHover, this)
            },
            eventOnHover: function(t) {
                this.node.stopAllActions(),
                this.node.runAction(this.scaleOnAction)
            },
            eventOffHover: function(t) {
                this.node.stopAllActions(),
                this.node.runAction(this.scaleOffAction)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    iMessage_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "08764g9eU1CrrI+WH3GeclU", "iMessage_item"),
        cc.Class({
            extends: cc.Component,
            properties: {
                dot: cc.Node,
                bg: cc.Node,
                title: cc.Label,
                time: cc.Label
            },
            init: function(t) {
                this.RedT = t
            },
            onClick: function() {
                this.RedT.onContentClick(this)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    iMessage: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "70701e+jWpDjIG4eqgLNgmQ", "iMessage");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                news: cc.Label,
                text: cc.Label,
                item: cc.Prefab,
                content: cc.Node,
                message: ""
            },
            onLoad: function() {},
            onEnable: function() {
                cc.RedT.send({
                    message: {
                        update: !0
                    }
                })
            },
            onData: function(t) {
                t.list && (this.list(t.list),
                this.countNews(t.list)),
                t.text && (this.text.string = t.text),
                t.news && (t.news > 0 ? (this.news.node.active = !0,
                this.news.string = t.news) : this.news.node.active = !1)
            },
            list: function(t) {
                this.content.removeAllChildren();
                var e = this;
                Promise.all(t.map(function(t) {
                    var i = cc.instantiate(e.item);
                    (i = i.getComponent("iMessage_item")).init(e),
                    i.title.string = t.title,
                    i.time.string = n.getStringDateByTime(t.time),
                    i.bg.active = !t.read,
                    i.dot.active = e.message == t._id,
                    i.message = t._id,
                    e.content.addChild(i.node)
                }))
            },
            onContentClick: function(t) {
                var e = this;
                t.message != this.message && (t.bg.active = !1,
                cc.RedT.audio.playClick(),
                this.message = t.message,
                this.getContent(),
                t.dot.active = !0,
                Promise.all(this.content.children.filter(function(e) {
                    return e != t.node && (e.children[0].active = !1),
                    e.children[1].active
                })).then(function(t) {
                    (t = t.length) > 0 ? (e.news.node.active = !0,
                    e.news.string = t) : e.news.node.active = !1
                }))
            },
            getContent: function(t) {
                cc.RedT.send({
                    message: {
                        view: this.message
                    }
                })
            },
            reset: function() {
                this.content.removeAllChildren(),
                this.text.string = this.news.string = "",
                this.news.node.active = !1
            },
            countNews: function(t) {
                var e = t.filter(function(t) {
                    return !t.read
                });
                (e = e.length) > 0 ? (this.news.node.active = !0,
                this.news.string = e) : this.news.node.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    iconGameBai: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "fbc3eTUdt9BmbNrv1zsHCzT", "iconGameBai"),
        cc.Class({
            extends: cc.Component,
            properties: {
                title: "",
                game: "",
                table2: !0
            },
            openGame: function() {
                cc.RedT.IS_LOGIN ? cc.RedT.inGame.MenuRoom.openGame(this) : cc.RedT.inGame.dialog.showSignIn()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    iconGameHu: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b464brTuF9Jkai40xgtDiaq", "iconGameHu"),
        cc.Class({
            extends: cc.Component,
            properties: {
                hu100: cc.Label,
                hu1k: cc.Label,
                hu10k: cc.Label
            }
        }),
        cc._RF.pop()
    }
    , {}],
    iconGameTaiXiu: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "f5d22VsrEZLuKko/Zky02F3", "iconGameTaiXiu"),
        cc.Class({
            extends: cc.Component,
            properties: {
                tai: cc.Label,
                xiu: cc.Label
            }
        }),
        cc._RF.pop()
    }
    , {}],
    iconGame: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "a98fahA/phPCZvYv2bUDP1B", "iconGame"),
        cc.Class({
            extends: cc.Component,
            properties: {
                slot: !1,
                mini: !1,
                bai: !1,
                khac: !1
            }
        }),
        cc._RF.pop()
    }
    , {}],
    inputNumber: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b256eN/SStPwZz/lPd3MUDm", "inputNumber");
        var n = t("BrowserUtil");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                var t = this;
                this.editbox = this.node.getComponent(cc.EditBox),
                this.onShift = !1,
                this.eventKeyDown = function(e) {
                    16 === e.keyCode && (t.onShift = !0,
                    e.preventDefault()),
                    !t.onShift && (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 37 && e.keyCode <= 40 || 107 === e.keyCode || 109 === e.keyCode || 189 === e.keyCode || 8 === e.keyCode || 13 === e.keyCode) || e.preventDefault()
                }
                ,
                this.eventKeyUp = function(e) {
                    16 === e.keyCode && (e.preventDefault(),
                    t.onShift = !1)
                }
            },
            onEnable: function() {
                cc.sys.isBrowser && this.addEventTT()
            },
            onDisable: function() {
                cc.sys.isBrowser && this.removeEventTT()
            },
            addEventTT: function() {
                n.getHTMLElementByEditBox(this.editbox).addEventListener("keydown", this.eventKeyDown, !1),
                n.getHTMLElementByEditBox(this.editbox).addEventListener("keyup", this.eventKeyUp, !1)
            },
            removeEventTT: function() {
                n.getHTMLElementByEditBox(this.editbox).removeEventListener("keydown", this.eventKeyDown, !1),
                n.getHTMLElementByEditBox(this.editbox).removeEventListener("keyup", this.eventKeyUp, !1)
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil"
    }],
    itemContentMenu: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "ef328suSpdNvq+JTw+borMJ", "itemContentMenu"),
        cc.Class({
            extends: cc.Component,
            properties: {
                nodeUnSelect: {
                    default: null,
                    type: cc.Node
                },
                nodeSelect: {
                    default: null,
                    type: cc.Node
                },
                text: {
                    default: null,
                    type: cc.Node
                }
            },
            select: function() {
                this.nodeUnSelect.active = !1,
                this.nodeSelect.active = !0,
                this.node.pauseSystemEvents()
            },
            unselect: function() {
                this.nodeUnSelect.active = !0,
                this.nodeSelect.active = !1,
                this.node.resumeSystemEvents()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    itemHeadMenu: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b32dagCeD1MVp59ygCz6Tsa", "itemHeadMenu"),
        cc.Class({
            extends: cc.Component,
            properties: {
                nodeUnSelect: {
                    default: null,
                    type: cc.Node
                },
                nodeSelect: {
                    default: null,
                    type: cc.Node
                }
            },
            select: function() {
                this.nodeUnSelect.active = !1,
                this.nodeSelect.active = !0,
                this.node.pauseSystemEvents()
            },
            unselect: function() {
                this.nodeUnSelect.active = !0,
                this.nodeSelect.active = !1,
                this.node.resumeSystemEvents()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    kq_xsmb: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "be9a6IySFBEu49sR6oBJMoM", "kq_xsmb");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                date_count: 0,
                date: cc.Label,
                datePre: cc.Label,
                dateNext: cc.Label,
                gdb: cc.Label,
                g1: cc.Label,
                g2: {
                    default: [],
                    type: cc.Label
                },
                g3: {
                    default: [],
                    type: cc.Label
                },
                g4: {
                    default: [],
                    type: cc.Label
                },
                g5: {
                    default: [],
                    type: cc.Label
                },
                g6: {
                    default: [],
                    type: cc.Label
                },
                g7: {
                    default: [],
                    type: cc.Label
                },
                tk0: cc.Label,
                tk1: cc.Label,
                tk2: cc.Label,
                tk3: cc.Label,
                tk4: cc.Label,
                tk5: cc.Label,
                tk6: cc.Label,
                tk7: cc.Label,
                tk8: cc.Label,
                tk9: cc.Label
            },
            onLoad: function() {
                var t = new Date;
                this.date.string = n.numberPad(t.getDate(), 2) + "/" + n.numberPad(t.getMonth() + 1, 2) + "/" + t.getFullYear(),
                this.get_data(),
                (t = new Date).setDate(t.getDate() + 1),
                this.dateNext.string = n.numberPad(t.getDate(), 2) + "/" + n.numberPad(t.getMonth() + 1, 2) + "/" + t.getFullYear(),
                (t = new Date).setDate(t.getDate() - 1),
                this.datePre.string = n.numberPad(t.getDate(), 2) + "/" + n.numberPad(t.getMonth() + 1, 2) + "/" + t.getFullYear()
            },
            get_data: function() {
                cc.RedT.send({
                    g: {
                        xs: {
                            mb: {
                                kq: this.date.string
                            }
                        }
                    }
                })
            },
            onDatePre: function() {
                this.date_count--,
                this.onDateChanget()
            },
            onDateNext: function() {
                this.date_count++,
                this.onDateChanget()
            },
            onDateChanget: function() {
                this.reset();
                var t = new Date;
                t.setDate(t.getDate() + this.date_count),
                this.date.string = n.numberPad(t.getDate(), 2) + "/" + n.numberPad(t.getMonth() + 1, 2) + "/" + t.getFullYear(),
                this.get_data(),
                (t = new Date).setDate(t.getDate() + this.date_count + 1),
                this.dateNext.string = n.numberPad(t.getDate(), 2) + "/" + n.numberPad(t.getMonth() + 1, 2) + "/" + t.getFullYear(),
                (t = new Date).setDate(t.getDate() + this.date_count - 1),
                this.datePre.string = n.numberPad(t.getDate(), 2) + "/" + n.numberPad(t.getMonth() + 1, 2) + "/" + t.getFullYear()
            },
            reset: function() {
                this.gdb.string = "-----",
                this.g1.string = "-----",
                this.g2.forEach(function(t) {
                    t.string = "-----"
                }),
                this.g3.forEach(function(t) {
                    t.string = "-----"
                }),
                this.g4.forEach(function(t) {
                    t.string = "----"
                }),
                this.g5.forEach(function(t) {
                    t.string = "----"
                }),
                this.g6.forEach(function(t) {
                    t.string = "---"
                }),
                this.g7.forEach(function(t) {
                    t.string = "--"
                }),
                this.tk0.string = "-",
                this.tk1.string = "-",
                this.tk2.string = "-",
                this.tk3.string = "-",
                this.tk4.string = "-",
                this.tk5.string = "-",
                this.tk6.string = "-",
                this.tk7.string = "-",
                this.tk8.string = "-",
                this.tk9.string = "-"
            },
            onData: function(t) {
                t.gdb && (this.gdb.string = t.gdb),
                t.g1 && (this.g1.string = t.g1),
                this.g2.forEach(function(e, i) {
                    t.g2[i] && (e.string = t.g2[i])
                }),
                this.g3.forEach(function(e, i) {
                    t.g3[i] && (e.string = t.g3[i])
                }),
                this.g4.forEach(function(e, i) {
                    t.g4[i] && (e.string = t.g4[i])
                }),
                this.g5.forEach(function(e, i) {
                    t.g5[i] && (e.string = t.g5[i])
                }),
                this.g6.forEach(function(e, i) {
                    t.g6[i] && (e.string = t.g6[i])
                }),
                this.g7.forEach(function(e, i) {
                    t.g7[i] && (e.string = t.g7[i])
                });
                var e = [t.g1.substring(t.g1.length - 2), t.gdb.substring(t.gdb.length - 2)].concat(t.g2.map(function(t) {
                    return t.substring(t.length - 2)
                }), t.g3.map(function(t) {
                    return t.substring(t.length - 2)
                }), t.g4.map(function(t) {
                    return t.substring(t.length - 2)
                }), t.g5.map(function(t) {
                    return t.substring(t.length - 2)
                }), t.g6.map(function(t) {
                    return t.substring(t.length - 2)
                }), t.g7.map(function(t) {
                    return t.substring(t.length - 2)
                }))
                  , i = e.filter(function(t) {
                    return "0" === t.charAt()
                })
                  , n = e.filter(function(t) {
                    return "1" === t.charAt()
                })
                  , o = e.filter(function(t) {
                    return "2" === t.charAt()
                })
                  , c = e.filter(function(t) {
                    return "3" === t.charAt()
                })
                  , s = e.filter(function(t) {
                    return "4" === t.charAt()
                })
                  , a = e.filter(function(t) {
                    return "5" === t.charAt()
                })
                  , h = e.filter(function(t) {
                    return "6" === t.charAt()
                })
                  , r = e.filter(function(t) {
                    return "7" === t.charAt()
                })
                  , u = e.filter(function(t) {
                    return "8" === t.charAt()
                })
                  , d = e.filter(function(t) {
                    return "9" === t.charAt()
                });
                i.length > 0 && (this.tk0.string = i.join(", ")),
                n.length > 0 && (this.tk1.string = n.join(", ")),
                o.length > 0 && (this.tk2.string = o.join(", ")),
                c.length > 0 && (this.tk3.string = c.join(", ")),
                s.length > 0 && (this.tk4.string = s.join(", ")),
                a.length > 0 && (this.tk5.string = a.join(", ")),
                h.length > 0 && (this.tk6.string = h.join(", ")),
                r.length > 0 && (this.tk7.string = r.join(", ")),
                u.length > 0 && (this.tk8.string = u.join(", ")),
                d.length > 0 && (this.tk9.string = d.join(", "))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    landingSuKien: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "0da29aT5mZDCY+EkiAB02lS", "landingSuKien"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            init: function() {
                var t = localStorage.getItem("landingSuKien");
                this.node.active = null == t
            },
            closeSuKien: function() {
                localStorage.setItem("landingSuKien", "1"),
                this.node.active = !1
            },
            onData: function(t) {
                void 0 !== t.active && (this.node.active = t.active),
                void 0 !== t.text && (this.text.string = t.text)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    md5: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "a28a7Ff2hRIlJEpUUASSYZ0", "md5"),
        function() {
            var i = t("crypt")
              , n = t("charenc").utf8
              , o = t("is-buffer")
              , c = t("charenc").bin
              , s = function t(e, s) {
                e.constructor == String ? e = s && "binary" === s.encoding ? c.stringToBytes(e) : n.stringToBytes(e) : o(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
                for (var a = i.bytesToWords(e), h = 8 * e.length, r = 1732584193, u = -271733879, d = -1732584194, l = 271733878, p = 0; p < a.length; p++)
                    a[p] = 16711935 & (a[p] << 8 | a[p] >>> 24) | 4278255360 & (a[p] << 24 | a[p] >>> 8);
                a[h >>> 5] |= 128 << h % 32,
                a[14 + (h + 64 >>> 9 << 4)] = h;
                var g = t._ff
                  , m = t._gg
                  , f = t._hh
                  , v = t._ii;
                for (p = 0; p < a.length; p += 16) {
                    var T = r
                      , b = u
                      , _ = d
                      , C = l;
                    u = v(u = v(u = v(u = v(u = f(u = f(u = f(u = f(u = m(u = m(u = m(u = m(u = g(u = g(u = g(u = g(u, d = g(d, l = g(l, r = g(r, u, d, l, a[p + 0], 7, -680876936), u, d, a[p + 1], 12, -389564586), r, u, a[p + 2], 17, 606105819), l, r, a[p + 3], 22, -1044525330), d = g(d, l = g(l, r = g(r, u, d, l, a[p + 4], 7, -176418897), u, d, a[p + 5], 12, 1200080426), r, u, a[p + 6], 17, -1473231341), l, r, a[p + 7], 22, -45705983), d = g(d, l = g(l, r = g(r, u, d, l, a[p + 8], 7, 1770035416), u, d, a[p + 9], 12, -1958414417), r, u, a[p + 10], 17, -42063), l, r, a[p + 11], 22, -1990404162), d = g(d, l = g(l, r = g(r, u, d, l, a[p + 12], 7, 1804603682), u, d, a[p + 13], 12, -40341101), r, u, a[p + 14], 17, -1502002290), l, r, a[p + 15], 22, 1236535329), d = m(d, l = m(l, r = m(r, u, d, l, a[p + 1], 5, -165796510), u, d, a[p + 6], 9, -1069501632), r, u, a[p + 11], 14, 643717713), l, r, a[p + 0], 20, -373897302), d = m(d, l = m(l, r = m(r, u, d, l, a[p + 5], 5, -701558691), u, d, a[p + 10], 9, 38016083), r, u, a[p + 15], 14, -660478335), l, r, a[p + 4], 20, -405537848), d = m(d, l = m(l, r = m(r, u, d, l, a[p + 9], 5, 568446438), u, d, a[p + 14], 9, -1019803690), r, u, a[p + 3], 14, -187363961), l, r, a[p + 8], 20, 1163531501), d = m(d, l = m(l, r = m(r, u, d, l, a[p + 13], 5, -1444681467), u, d, a[p + 2], 9, -51403784), r, u, a[p + 7], 14, 1735328473), l, r, a[p + 12], 20, -1926607734), d = f(d, l = f(l, r = f(r, u, d, l, a[p + 5], 4, -378558), u, d, a[p + 8], 11, -2022574463), r, u, a[p + 11], 16, 1839030562), l, r, a[p + 14], 23, -35309556), d = f(d, l = f(l, r = f(r, u, d, l, a[p + 1], 4, -1530992060), u, d, a[p + 4], 11, 1272893353), r, u, a[p + 7], 16, -155497632), l, r, a[p + 10], 23, -1094730640), d = f(d, l = f(l, r = f(r, u, d, l, a[p + 13], 4, 681279174), u, d, a[p + 0], 11, -358537222), r, u, a[p + 3], 16, -722521979), l, r, a[p + 6], 23, 76029189), d = f(d, l = f(l, r = f(r, u, d, l, a[p + 9], 4, -640364487), u, d, a[p + 12], 11, -421815835), r, u, a[p + 15], 16, 530742520), l, r, a[p + 2], 23, -995338651), d = v(d, l = v(l, r = v(r, u, d, l, a[p + 0], 6, -198630844), u, d, a[p + 7], 10, 1126891415), r, u, a[p + 14], 15, -1416354905), l, r, a[p + 5], 21, -57434055), d = v(d, l = v(l, r = v(r, u, d, l, a[p + 12], 6, 1700485571), u, d, a[p + 3], 10, -1894986606), r, u, a[p + 10], 15, -1051523), l, r, a[p + 1], 21, -2054922799), d = v(d, l = v(l, r = v(r, u, d, l, a[p + 8], 6, 1873313359), u, d, a[p + 15], 10, -30611744), r, u, a[p + 6], 15, -1560198380), l, r, a[p + 13], 21, 1309151649), d = v(d, l = v(l, r = v(r, u, d, l, a[p + 4], 6, -145523070), u, d, a[p + 11], 10, -1120210379), r, u, a[p + 2], 15, 718787259), l, r, a[p + 9], 21, -343485551),
                    r = r + T >>> 0,
                    u = u + b >>> 0,
                    d = d + _ >>> 0,
                    l = l + C >>> 0
                }
                return i.endian([r, u, d, l])
            };
            s._ff = function(t, e, i, n, o, c, s) {
                var a = t + (e & i | ~e & n) + (o >>> 0) + s;
                return (a << c | a >>> 32 - c) + e
            }
            ,
            s._gg = function(t, e, i, n, o, c, s) {
                var a = t + (e & n | i & ~n) + (o >>> 0) + s;
                return (a << c | a >>> 32 - c) + e
            }
            ,
            s._hh = function(t, e, i, n, o, c, s) {
                var a = t + (e ^ i ^ n) + (o >>> 0) + s;
                return (a << c | a >>> 32 - c) + e
            }
            ,
            s._ii = function(t, e, i, n, o, c, s) {
                var a = t + (i ^ (e | ~n)) + (o >>> 0) + s;
                return (a << c | a >>> 32 - c) + e
            }
            ,
            s._blocksize = 16,
            s._digestsize = 16,
            e.exports = function(t, e) {
                if (void 0 === t || null === t)
                    throw new Error("Illegal argument " + t);
                var n = i.wordsToBytes(s(t, e));
                return e && e.asBytes ? n : e && e.asString ? c.bytesToString(n) : i.bytesToHex(n)
            }
        }(),
        cc._RF.pop()
    }
    , {
        charenc: 1,
        crypt: 2,
        "is-buffer": 3
    }],
    miniBigWin: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "1b515XdufZBFaOcG7quJClg", "miniBigWin");
        var n = t("Helper").numberTo;
        cc.Class({
            extends: cc.Component,
            properties: {
                bet: cc.Label
            },
            onLoad: function() {
                this.bet.font = this.node.red ? cc.RedT.util.fontCong : cc.RedT.util.fontTru,
                this.node.runAction(cc.sequence(cc.delayTime(.2), cc.callFunc(function() {
                    cc.RedT.audio.playEf("moneywin"),
                    n(this.bet, 0, this.node.bet, 1e3, !0)
                }, this)))
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    mini_warning: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "c832drPwXtFyrxiOXSF7olJ", "mini_warning"),
        cc.Class({
            extends: cc.Component,
            properties: {
                text: {
                    default: null,
                    type: cc.Label
                }
            },
            onEnable: function() {
                this.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(.09, 1), cc.fadeTo(.09, 255)), cc.delayTime(2.5), cc.spawn(cc.scaleTo(.09, 1.5), cc.fadeTo(.09, 0)), cc.callFunc(function() {
                    this.node.destroyAllChildren(),
                    this.node.destroy()
                }, this)))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    popupMinigame: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "acd26OFlQpFU6xTJ63KhBKq", "popupMinigame"),
        cc.Class({
            extends: cc.Component,
            properties: {
                list: {
                    default: null,
                    type: cc.Node
                },
                time: {
                    default: null,
                    type: cc.Label
                },
                nodeTime: {
                    default: null,
                    type: cc.Node
                },
                panel: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                cc.RedT.setting.popupMini = cc.RedT.setting.popupMini || {},
                this.ttOffset = null,
                this.ttOffset2 = null,
                this.toggleRuning = !1,
                void 0 !== cc.RedT.setting.popupMini.position && (this.node.position = cc.RedT.setting.popupMini.position),
                void 0 !== cc.RedT.setting.popupMini.open && (cc.RedT.setting.popupMini.open ? (this.list.active = !0,
                this.nodeTime.position = cc.v2(-155.7, -5.6),
                this.list.scale = 1) : (this.nodeTime.position = cc.v2(25, 43),
                this.list.scale = .2,
                this.list.active = !1))
            },
            onEnable: function() {
                this.panel.on(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.panel.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.panel.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.panel.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.panel.on(cc.Node.EventType.MOUSE_ENTER, this.setTop, this)
            },
            onDisable: function() {
                this.panel.off(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.panel.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.panel.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.panel.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.panel.off(cc.Node.EventType.MOUSE_ENTER, this.setTop, this)
            },
            eventStart: function(t) {
                this.setTop(),
                this.ttOffset = cc.v2(t.touch.getLocationX() - this.node.position.x, t.touch.getLocationY() - this.node.position.y),
                this.ttOffset2 = cc.v2(t.touch.getLocationX() - (t.touch.getLocationX() - this.node.position.x), t.touch.getLocationY() - (t.touch.getLocationY() - this.node.position.y))
            },
            eventMove: function(t) {
                this.node.position = cc.v2(t.touch.getLocationX() - this.ttOffset.x, t.touch.getLocationY() - this.ttOffset.y)
            },
            eventEnd: function(t) {
                cc.RedT.setting.popupMini.position = this.node.position,
                this.xChanger = this.ttOffset2.x - (t.touch.getLocationX() - this.ttOffset.x),
                this.yChanger = this.ttOffset2.y - (t.touch.getLocationY() - this.ttOffset.y),
                this.xChanger < 5 && this.xChanger > -5 && this.yChanger < 5 && this.yChanger > -5 && this.toggle()
            },
            toggle: function() {
                cc.RedT.audio.playClick(),
                this.toggleRuning || (this.toggleRuning = !0,
                this.list.stopAllActions(),
                this.list.active ? (cc.RedT.setting.popupMini.open = !1,
                this.nodeTime.active ? this.nodeTime.runAction(cc.moveTo(.3, cc.v2(25, 43))) : this.nodeTime.position = cc.v2(25, 43),
                this.list.runAction(cc.sequence(cc.spawn(cc.scaleTo(.3, .2).easing(cc.easeBackIn(3)), cc.rotateTo(.3, -720)), cc.callFunc(function() {
                    this.toggleRuning = this.list.active = !1
                }, this)))) : (this.list.active = cc.RedT.setting.popupMini.open = !0,
                this.nodeTime.active ? this.nodeTime.runAction(cc.moveTo(.3, cc.v2(-155.7, -5.6))) : this.nodeTime.position = cc.v2(-155.7, -5.6),
                this.list.runAction(cc.sequence(cc.spawn(cc.scaleTo(.3, 1).easing(cc.easeBackOut(3)), cc.rotateTo(.3, 720)), cc.callFunc(function() {
                    this.toggleRuning = !1
                }, this)))))
            },
            setTop: function() {
                this.node.parent.insertChild(this.node)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    popupSuKien: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "65d73UFk9dPHbcVrWcgDnBd", "popupSuKien");
        var n = t("Dialog");
        cc.Class({
            extends: cc.Component,
            properties: {
                panel: {
                    default: null,
                    type: cc.Node
                },
                dialog: n
            },
            onEnable: function() {
                this.panel.on(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.panel.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.panel.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.panel.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.panel.on(cc.Node.EventType.MOUSE_ENTER, this.setTop, this)
            },
            onDisable: function() {
                this.panel.off(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.panel.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.panel.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.panel.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.panel.off(cc.Node.EventType.MOUSE_ENTER, this.setTop, this)
            },
            eventStart: function(t) {
                this.setTop(),
                this.ttOffset = cc.v2(t.touch.getLocationX() - this.node.position.x, t.touch.getLocationY() - this.node.position.y),
                this.ttOffset2 = cc.v2(t.touch.getLocationX() - (t.touch.getLocationX() - this.node.position.x), t.touch.getLocationY() - (t.touch.getLocationY() - this.node.position.y))
            },
            eventMove: function(t) {
                this.node.position = cc.v2(t.touch.getLocationX() - this.ttOffset.x, t.touch.getLocationY() - this.ttOffset.y)
            },
            eventEnd: function(t) {
                this.xChanger = this.ttOffset2.x - (t.touch.getLocationX() - this.ttOffset.x),
                this.yChanger = this.ttOffset2.y - (t.touch.getLocationY() - this.ttOffset.y),
                this.xChanger < 5 && this.xChanger > -5 && this.yChanger < 5 && this.yChanger > -5 && this.toggle()
            },
            toggle: function(t) {
                this.dialog.showDEvent(t)
            },
            setTop: function() {
                this.node.parent.insertChild(this.node)
            }
        }),
        cc._RF.pop()
    }
    , {
        Dialog: "Dialog"
    }],
    popupTopHu: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "60851P7puJFtJI47yoz+HGT", "popupTopHu");
        var n = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                content: {
                    default: null,
                    type: cc.Node
                },
                body: {
                    default: null,
                    type: cc.Node
                },
                nodeRed: {
                    default: null,
                    type: cc.Node
                },
                nodeXu: {
                    default: null,
                    type: cc.Node
                },
                header: {
                    default: null,
                    type: cc.Node
                },
                panel: {
                    default: null,
                    type: cc.Node
                },
                x: {
                    default: [],
                    type: cc.SpriteFrame
                },
                red: !1,
                bet: "",
                spriteBetON: {
                    default: [],
                    type: cc.SpriteFrame
                },
                spriteBetOFF: {
                    default: [],
                    type: cc.SpriteFrame
                }
            },
            init: function(t) {
                this.RedT = t,
                cc.RedT.setting.topHu = cc.RedT.setting.topHu || {},
                void 0 !== cc.RedT.setting.topHu.position && (this.node.position = cc.RedT.setting.topHu.position),
                void 0 !== cc.RedT.setting.topHu.open && (this.body.active = cc.RedT.setting.topHu.open),
                void 0 !== cc.RedT.setting.topHu.data && this.onData(cc.RedT.setting.topHu.data)
            },
            onLoad: function() {
                this.ttOffset = null,
                this.ttOffset2 = null,
                this.toggleRuning = !1,
                Promise.all(this.content.children.map(function(t) {
                    t.hu = t.children[3].getComponent(cc.Label),
                    t.xHu = t.children[0].getComponent(cc.Sprite)
                }))
            },
            onEnable: function() {
                this.panel.on(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.panel.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.panel.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.panel.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.panel.on(cc.Node.EventType.MOUSE_ENTER, this.setTop, this),
                this.onChangerBet(null, "100")
            },
            onDisable: function() {
                this.panel.off(cc.Node.EventType.TOUCH_START, this.eventStart, this),
                this.panel.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this),
                this.panel.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this),
                this.panel.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this),
                this.panel.off(cc.Node.EventType.MOUSE_ENTER, this.setTop, this)
            },
            eventStart: function(t) {
                this.setTop(),
                this.ttOffset = cc.v2(t.touch.getLocationX() - this.node.position.x, t.touch.getLocationY() - this.node.position.y),
                this.ttOffset2 = cc.v2(t.touch.getLocationX() - (t.touch.getLocationX() - this.node.position.x), t.touch.getLocationY() - (t.touch.getLocationY() - this.node.position.y))
            },
            eventMove: function(t) {
                this.node.position = cc.v2(t.touch.getLocationX() - this.ttOffset.x, t.touch.getLocationY() - this.ttOffset.y)
            },
            eventEnd: function(t) {
                cc.RedT.setting.topHu.position = this.node.position,
                this.xChanger = this.ttOffset2.x - (t.touch.getLocationX() - this.ttOffset.x),
                this.yChanger = this.ttOffset2.y - (t.touch.getLocationY() - this.ttOffset.y),
                this.xChanger < 5 && this.xChanger > -5 && this.yChanger < 5 && this.yChanger > -5 && this.toggle()
            },
            toggle: function() {
                cc.RedT.audio.playClick(),
                this.body.active = cc.RedT.setting.topHu.open = !this.body.active,
                this.onChangerData()
            },
            onChangerCoint: function() {
                this.red = !this.red,
                this.nodeRed.active = !this.nodeRed.active,
                this.nodeXu.active = !this.nodeXu.active,
                this.onChangerData()
            },
            onChangerBet: function(t, e) {
                switch (this.bet = e,
                this.header.children[0].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteBetOFF[0],
                this.header.children[1].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteBetOFF[1],
                this.header.children[2].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteBetOFF[2],
                e) {
                case "100":
                    this.header.children[0].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteBetON[0];
                    break;
                case "1000":
                    this.header.children[1].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteBetON[1];
                    break;
                case "10000":
                    this.header.children[2].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteBetON[2]
                }
                this.onChangerData()
            },
            onData: function(t) {
                cc.RedT.setting.topHu.data = t,
                this.body.active && this.onChangerData(),
                this.onChangerGame()
            },
            onChangerData: function() {
                if (void 0 !== cc.RedT.setting.topHu.data) {
                    var t = this
                      , e = [];
                    Promise.all(this.content.children.map(function(i) {
                        var n = i.name
                          , o = cc.RedT.setting.topHu.data[n].filter(function(e) {
                            return e.type == t.bet && e.red == t.red
                        });
                        return e[n] = i,
                        o.length ? o[0].name = n : o[0] = {
                            name: n,
                            bet: 0
                        },
                        o[0]
                    })).then(function(i) {
                        var o = i.sort(function(t, e) {
                            return e.bet - t.bet
                        });
                        Promise.all(o.map(function(i, o) {
                            var c = e[i.name];
                            c.stopAllActions();
                            var s = -(75 * (o + 1) - 37.5);
                            c.runAction(cc.moveTo(.2, cc.v2(0, s))),
                            n.getOnlyNumberInString(c.hu.string) - i.bet != 0 && n.numberTo(c.hu, n.getOnlyNumberInString(c.hu.string), i.bet, 4900, !0),
                            i.balans > 0 && t.x[i.x - 2] ? (c.xHu.node.active = !0,
                            c.xHu.spriteFrame = t.x[i.x - 2]) : c.xHu.node.active = !1
                        }))
                    })
                }
            },
            onChangerGame: function() {
                this.RedT.MiniPoker.onGetHu(),
                this.RedT.BaCay.onGetHu(),
                this.RedT.BigBabol.onGetHu(),
                this.RedT.CaoThap.onGetHu(),
                this.RedT.AngryBirds.onGetHu(),
                this.RedT.MegaJackpot.onGetHu(),
                void 0 !== cc.RedT.inGame.onGetHu && cc.RedT.inGame.onGetHu()
            },
            setTop: function() {
                this.node.parent.insertChild(this.node)
            }
        }),
        cc._RF.pop()
    }
    , {
        Helper: "Helper"
    }],
    ruttien: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "1a558HqQAZIvJCav2OB+DnX", "ruttien");
        var n = t("Bank");
        cc.Class({
            extends: cc.Component,
            properties: {
                header: {
                    default: null,
                    type: cc.Node
                },
                NapRed: {
                    default: null,
                    type: cc.Node
                },
                TieuRed: {
                    default: null,
                    type: cc.Node
                },
                ChuyenRed: {
                    default: null,
                    type: cc.Node
                },
                Bank: n
            },
            init: function() {
                var t = this;
                this.NapRed = this.NapRed.getComponent("NapRed"),
                this.TieuRed = this.TieuRed.getComponent("TieuRed"),
                this.ChuyenRed = this.ChuyenRed.getComponent("ChuyenRed"),
                this.NapRed.init(),
                this.TieuRed.init(),
                this.ChuyenRed.init(),
                this.Bank.init(),
                this.body = [this.NapRed, this.TieuRed, this.ChuyenRed, this.Bank],
                Promise.all(this.header.children.map(function(t) {
                    return t.getComponent("itemHeadMenu")
                })).then(function(e) {
                    t.header = e
                })
            },
            onEnable: function() {
                cc.RedT.inGame.header.node.active = !1
            },
            onDisable: function() {
                cc.RedT.inGame.header.node.active = !0
            },
            onSelectHead: function(t, e) {
                Promise.all(this.header.map(function(t) {
                    t.node.name == e ? t.select() : t.unselect()
                })),
                Promise.all(this.body.map(function(t) {
                    t.node.name == e ? t.node.active = !0 : t.node.active = !1
                }))
            },
            superView: function(t) {
                "NapRed" == t || "ThongTinNapRed" == t || "QuyDinhNapRed" == t ? (this.onSelectHead(null, "NapRed"),
                "NapRed" != t && this.NapRed.onSelectHead(null, t)) : "TieuRed" == t || "MuaXu" == t || "MuaTheNap" == t ? (this.onSelectHead(null, "TieuRed"),
                "TieuRed" != t && this.TieuRed.onSelectHead(null, t)) : "ChuyenRed" == t && this.onSelectHead(null, "ChuyenRed")
            },
            onData: function(t) {
                void 0 !== t.nap_red && this.NapRed.onData(t.nap_red),
                void 0 !== t.mua_the_nap && this.TieuRed.MuaTheCao.onData(t.mua_the_nap),
                void 0 !== t.chuyen_red && this.ChuyenRed.onData(t.chuyen_red),
                t.bank && this.Bank.onData(t.bank)
            }
        }),
        cc._RF.pop()
    }
    , {
        Bank: "Bank"
    }],
    shopMuaTheCao: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "36ec7BUYDJJTorK1lfR1/DA", "shopMuaTheCao");
        var n = t("BrowserUtil")
          , o = t("Helper");
        cc.Class({
            extends: cc.Component,
            properties: {
                NhanhMang: {
                    default: null,
                    type: cc.Label
                },
                MenhGia: {
                    default: null,
                    type: cc.Label
                },
                editSoLuong: {
                    default: null,
                    type: cc.EditBox
                },
                editOTP: {
                    default: null,
                    type: cc.EditBox
                },
                moreNhaMang: {
                    default: null,
                    type: cc.Node
                },
                moreMenhGia: {
                    default: null,
                    type: cc.Node
                },
                scrollviewNhaMang: {
                    default: null,
                    type: cc.ScrollView
                },
                scrollviewMenhGia: {
                    default: null,
                    type: cc.ScrollView
                },
                bangGia: {
                    default: null,
                    type: cc.ScrollView
                },
                prefabLeft: {
                    default: null,
                    type: cc.Prefab
                },
                prefabRight: {
                    default: null,
                    type: cc.Prefab
                },
                typeOTP: ""
            },
            init: function() {
                var t = this;
                this.isLoaded = !1,
                this.editboxs = [this.editSoLuong, this.editOTP],
                this.keyHandle = function(e) {
                    return e.keyCode === cc.macro.KEY.tab ? (t.isTop() && t.changeNextFocusEditBox(),
                    e.preventDefault && e.preventDefault(),
                    !1) : e.keyCode === cc.macro.KEY.enter ? (n.focusGame(),
                    t.onClickMua(),
                    e.preventDefault && e.preventDefault(),
                    !1) : void 0
                }
            },
            onEnable: function() {
                cc.sys.isBrowser && this.addEvent(),
                this.isLoaded || cc.RedT.send({
                    shop: {
                        info_mua: !0
                    }
                })
            },
            onDisable: function() {
                this.moreNhaMang.active = this.moreMenhGia.active = !1,
                cc.sys.isBrowser && this.removeEvent(),
                this.clean()
            },
            addEvent: function() {
                for (var t in cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).addEventListener("keydown", this.keyHandle, !1)
            },
            removeEvent: function() {
                for (var t in this.editboxs)
                    n.getHTMLElementByEditBox(this.editboxs[t]).removeEventListener("keydown", this.keyHandle, !1);
                cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
            },
            onKeyDown: function(t) {
                switch (t.keyCode) {
                case cc.macro.KEY.tab:
                    this.isTop() && this.changeNextFocusEditBox();
                    break;
                case cc.macro.KEY.enter:
                    this.isTop() && this.onClickMua()
                }
            },
            changeNextFocusEditBox: function() {
                for (var t = !1, e = 0, i = this.editboxs.length; e < i; e++)
                    if (n.checkEditBoxFocus(this.editboxs[e])) {
                        n.focusEditBox(this.editboxs[e]),
                        t = !0;
                        break
                    }
                !t && 0 < this.editboxs.length && n.focusEditBox(this.editboxs[0])
            },
            isTop: function() {
                return !(this.moreNhaMang.active || this.moreMenhGia.active || cc.RedT.inGame.notice.node.active || cc.RedT.inGame.loading.active)
            },
            clean: function() {
                this.editSoLuong.string = ""
            },
            toggleMoreNhaMang: function() {
                this.moreNhaMang.active = !this.moreNhaMang.active,
                this.moreMenhGia.active = !1
            },
            toggleMoreMenhGia: function() {
                this.moreMenhGia.active = !this.moreMenhGia.active
            },
            infoSet: function(t, e, i) {
                var n = this
                  , c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                  , s = this;
                t.length > 0 && Promise.all(t.map(function(t, n) {
                    var a = cc.instantiate(s.prefabLeft)
                      , h = a.getComponent("NapRed_itemOne");
                    if (h.init(s, e, i),
                    c)
                        0 == n && (h.background.active = !0,
                        s.NhanhMang.string = t.name),
                        h.text.string = t.name,
                        s.scrollviewNhaMang.content.addChild(a);
                    else {
                        var r = o.numberWithCommas(t.name)
                          , u = o.numberWithCommas(t.values);
                        0 == n && (h.background.active = !0,
                        s.MenhGia.string = r),
                        h.text.string = r,
                        s.scrollviewMenhGia.content.addChild(a);
                        var d = cc.instantiate(s.prefabRight);
                        d.getComponent("NapRed_itemTT").init(r, u),
                        s.bangGia.content.addChild(d)
                    }
                    return h
                })).then(function(t) {
                    n[e] = t
                })
            },
            onData: function(t) {
                void 0 === t.info || this.isLoaded || (this.isLoaded = !0,
                void 0 !== t.info.nhamang && this.infoSet(t.info.nhamang, "nhamangList", "NhanhMang", !0),
                void 0 !== t.info.menhgia && this.infoSet(t.info.menhgia, "menhgiaList", "MenhGia"))
            },
            onClickMua: function() {
                var t = this.editSoLuong.string >> 0;
                t > 3 || t < 0 ? cc.RedT.inGame.notice.show({
                    title: "MUA TH\u1eba",
                    text: "S\u1ed1 l\u01b0\u1ee3ng kh\xf4ng h\u1ee3p l\u1ec7..."
                }) : 4 != this.editOTP.string.length ? cc.RedT.inGame.notice.show({
                    title: "L\u1ed6I",
                    text: "M\xe3 OTP kh\xf4ng \u0111\xfang..."
                }) : cc.RedT.send({
                    shop: {
                        mua_the: {
                            nhamang: this.NhanhMang.string,
                            menhgia: o.getOnlyNumberInString(this.MenhGia.string),
                            soluong: this.editSoLuong.string,
                            otp: this.editOTP.string
                        }
                    }
                })
            },
            onClickOTP: function() {
                cc.RedT.send({
                    otp: {
                        type: this.typeOTP
                    }
                })
            },
            changerTypeOTP: function(t) {
                this.typeOTP = t.node.name
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil",
        Helper: "Helper"
    }],
    shopMuaXu: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "e3d68ruZCVJyZezBdPhX4eo", "shopMuaXu");
        var n = t("Helper")
          , o = t("BrowserUtil");
        cc.Class({
            extends: cc.Component,
            properties: {
                xu: {
                    default: null,
                    type: cc.Label
                },
                red: {
                    default: null,
                    type: cc.EditBox
                },
                captcha: {
                    default: null,
                    type: cc.EditBox
                },
                capchaSprite: cc.Sprite
            },
            onLoad: function() {
                var t = this;
                this.editboxs = [this.red, this.captcha],
                this.keyHandle = function(e) {
                    return e.keyCode === cc.macro.KEY.tab ? (t.changeNextFocusEditBox(),
                    e.preventDefault && e.preventDefault(),
                    !1) : e.keyCode === cc.macro.KEY.enter ? (o.focusGame(),
                    t.onClickMua(),
                    e.preventDefault && e.preventDefault(),
                    !1) : void 0
                }
            },
            onEnable: function() {
                cc.sys.isBrowser && this.addEvent(),
                this.reCaptcha()
            },
            onDisable: function() {
                cc.sys.isBrowser && this.removeEvent(),
                this.clean()
            },
            addEvent: function() {
                for (var t in cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                this.editboxs)
                    o.getHTMLElementByEditBox(this.editboxs[t]).addEventListener("keydown", this.keyHandle, !1)
            },
            removeEvent: function() {
                for (var t in this.editboxs)
                    o.getHTMLElementByEditBox(this.editboxs[t]).removeEventListener("keydown", this.keyHandle, !1);
                cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
            },
            onKeyDown: function(t) {
                switch (t.keyCode) {
                case cc.macro.KEY.tab:
                    this.isTop() && this.changeNextFocusEditBox();
                    break;
                case cc.macro.KEY.enter:
                    this.isTop() && this.onClickMua()
                }
            },
            changeNextFocusEditBox: function() {
                for (var t = !1, e = 0, i = this.editboxs.length; e < i; e++)
                    if (o.checkEditBoxFocus(this.editboxs[e])) {
                        o.focusEditBox(this.editboxs[e]),
                        t = !0;
                        break
                    }
                !t && 0 < this.editboxs.length && o.focusEditBox(this.editboxs[0])
            },
            isTop: function() {
                return !cc.RedT.inGame.notice.node.active && !cc.RedT.inGame.loading.active
            },
            clean: function() {
                this.red.string = this.xu.string = this.captcha.string = ""
            },
            onChanger: function(t) {
                var e = n.getOnlyNumberInString(t)
                  , i = n.numberWithCommas(e);
                this.xu.string = n.numberWithCommas(3 * e),
                this.red.string = "0" == i ? "" : i
            },
            onClickMua: function() {
                parseInt(n.isEmpty(this.red.string) || n.getOnlyNumberInString(this.red.string)) < 1e3 ? cc.RedT.inGame.notice.show({
                    title: "MUA XU",
                    text: "S\u1ed1 XU mua XU t\u1ed1i thi\u1ec3u l\xe0 1.000"
                }) : n.isEmpty(this.captcha.string) ? cc.RedT.inGame.notice.show({
                    title: "MUA XU",
                    text: "Vui l\xf2ng nh\u1eadp ch\xednh x\xe1c m\xe3 x\xe1c nh\u1eadn."
                }) : cc.RedT.send({
                    shop: {
                        mua_xu: {
                            red: n.getOnlyNumberInString(this.red.string),
                            captcha: this.captcha.string
                        }
                    }
                })
            },
            initCaptcha: function(t) {
                var e = this
                  , i = new Image;
                i.src = t,
                i.width = 150,
                i.height = 50,
                setTimeout(function() {
                    var t = new cc.Texture2D;
                    t.initWithElement(i),
                    t.handleLoadedTexture();
                    var n = new cc.SpriteFrame(t);
                    e.capchaSprite.spriteFrame = n
                }, 10)
            },
            reCaptcha: function() {
                cc.RedT.send({
                    captcha: "withdrawXu"
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        BrowserUtil: "BrowserUtil",
        Helper: "Helper"
    }],
    subMenuControll: [function(t, e, i) {
        "use strict";
        function n(t) {
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (t = o(t))) {
                    var e = 0
                      , i = function() {};
                    return {
                        s: i,
                        n: function() {
                            return e >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[e++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var n, c, s = !0, a = !1;
            return {
                s: function() {
                    n = t[Symbol.iterator]()
                },
                n: function() {
                    var t = n.next();
                    return s = t.done,
                    t
                },
                e: function(t) {
                    a = !0,
                    c = t
                },
                f: function() {
                    try {
                        s || null == n.return || n.return()
                    } finally {
                        if (a)
                            throw c
                    }
                }
            }
        }
        function o(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return c(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === i && t.constructor && (i = t.constructor.name),
                "Map" === i || "Set" === i ? Array.from(i) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? c(t, e) : void 0
            }
        }
        function c(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        cc._RF.push(e, "84987GimdhLo67g4TdXG7dM", "subMenuControll"),
        cc.Class({
            extends: cc.Component,
            properties: {
                items: {
                    default: [],
                    type: cc.Node
                },
                body: {
                    default: [],
                    type: cc.Node
                }
            },
            onLoad: function() {
                for (var t in this.items)
                    this.items[t] = this.items[t].getComponent("subMenuItem")
            },
            onClickItem: function(t) {
                var e, i = n(this.items);
                try {
                    for (i.s(); !(e = i.n()).done; ) {
                        var o = e.value;
                        o.node == t.target ? o.onSelect() : o.offSelect()
                    }
                } catch (t) {
                    i.e(t)
                } finally {
                    i.f()
                }
                var c, s = n(this.body);
                try {
                    for (s.s(); !(c = s.n()).done; ) {
                        var a = c.value;
                        a.name === t.target.name ? a.active = !0 : a.active = !1
                    }
                } catch (t) {
                    s.e(t)
                } finally {
                    s.f()
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    subMenuItem: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "19618U18J5J55/yKtlBzkGh", "subMenuItem"),
        cc.Class({
            extends: cc.Component,
            properties: {
                background: cc.Node,
                background2: cc.Node,
                text: cc.Node
            },
            onSelect: function() {
                this.background.active = !1,
                this.background2.active = !0,
                this.text.color = cc.Color.BLACK
            },
            offSelect: function() {
                this.background.active = !0,
                this.background2.active = !1,
                this.text.color = cc.Color.WHITE
            }
        }),
        cc._RF.pop()
    }
    , {}],
    use_reversed_rotateBy: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "00fb65SD6FLjYcXPkiQtc3S", "use_reversed_rotateBy"),
        cc.RotateBy._reverse = !0,
        cc._RF.pop()
    }
    , {}],
    "use_v2.1.x_cc.Action": [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "c5c32AkWmNMf6JIQRB+AGw8", "use_v2.1.x_cc.Action"),
        cc.macro.ROTATE_ACTION_CCW = !0,
        cc._RF.pop()
    }
    , {}]
}, {}, ["BaseControll", "AngryBird_history", "AngryBird_history_item", "AngryBird_top", "AngryBirds-item", "AngryBirds-itemR", "AngryBirds", "AngryBirds_reelsL", "AngryBirds_reelsR", "BauCua", "BauCua_LichSu", "BauCua_ls_item", "BauCua_linhVat", "BauCua_logMini", "BauCua_top", "BauCua_top_item", "BigBabol", "BigBabol_LichSu", "BigBabol_Top", "BigBabol_line", "BigBabol_main_line", "BigBabol_reel", "BigBabol_reel_item", "Candy", "Candy_bonus_item", "Candy_playBonus", "Candy_dialog", "Candy_history", "Candy_iLine", "Candy_line", "Candy_reel", "Candy_top", "candy_reel_item", "CaoThap", "CaoThap_history", "CaoThap_history_item", "CaoThap_reels", "CaoThap_top", "CaoThap_top_item", "CoTrang", "CoTrang_history", "CoTrang_top", "CoTrang_dialog", "CoTrang_iline", "CoTrang_lines", "CoTrang_bonus_item", "CoTrang_playBonus", "CoTrang_item", "CoTrang_reel", "MegaJ_history", "MegaJ_history_item", "MegaJ_top", "MegaJ_top_item", "MegaJackpot", "Mini3Cay", "Mini3Cay_history", "Mini3Cay_ihistory", "Mini3Cay_reel", "Mini3Cay_top", "MiniPoker", "MiniPoker_LichSu", "MiniPoker_Top", "MiniPoker_reel", "Poker_dialog", "Poker_Player", "Poker", "TaiXiu", "TaiXiuBoard", "TaiXiuBoard_item", "TaiXiuChat", "TaiXiuLichSuPhien", "TaiXiuLichSuPhien_item", "TaiXiuLichSu", "TaiXiuLichSu_item", "TaiXiuMain", "TaiXiuMain_logTips", "TaiXiu_DiaNan", "TaiXiu_efScale", "TaiXiuThongKe", "TaiXiuTop", "TamHung", "TamHung_history", "TamHung_top", "TamHung_dialog", "TamHung_lines", "TamHung_main_line", "TamHung_bonus_item", "TamHung_playBonus", "TamHung_item", "TamHung_reel", "VQRed_dialog", "VQRed_history", "VQRed_history_item", "VQRed_setting", "VQRed_top", "VuongQuocRed", "VuongQuocRed_items", "VQRed_main_line", "VuongQuocRed_line", "VuongQuocRed_playBonus", "VuongQuocRed_reel", "VuongQuocRed_bigWin", "XoSo_MBHistory", "XoSo_MBHistory_item", "kq_xsmb", "MienBac_lo", "MienBac_dauduoi", "MienBac_lo2so", "MienBac_lo3so", "MienBac_lo4so", "MienBac_loxien", "XoSo_MienBac", "XoSo", "XoSo_History", "XoSo_KetQua", "XoSo_Main", "XoSo_Main_Main", "XoSo_select_item", "XocXoc", "XocXoc_dialog", "XocXoc_history", "XocXoc_history_item", "XocXoc_top", "Zeus", "Zeus_history", "Zeus_top", "Zeus_dialog", "Zeus_iline", "Zeus_lines", "Zeus_bonus_item", "Zeus_playBonus", "Zeus_item", "Zeus_reel", "BrowserUtil", "CheckOut", "Config", "DisableClick", "Card", "Helper", "MainAudio", "iconGame", "iconGameBai", "iconGameHu", "iconGameTaiXiu", "itemContentMenu", "itemHeadMenu", "Message", "Pagination", "Pagination_item", "hoverScale", "ThongBaoNoHu", "miniBigWin", "mini_warning", "inputNumber", "md5", "subMenuControll", "subMenuItem", "MainGame", "MainGame1", "DEvent", "EventAngrybird", "EventBigBabol", "EventMiniPoker", "EventTaiXiu", "EventTaiXiu_item", "Dialog", "ForGotPass", "GiftCode", "BaoMat", "DangKyOTP", "DoiMatKhau", "BaoMatGame", "BaoMatTaiKhoan", "CaNhan", "KetSat", "LichSu", "LichSuBank", "LichSuBank_item", "LichSuChuyen", "LichSuChuyen_item", "LichSuMuaXu", "LichSuNapMomo", "LichSuNapMomo_item", "LichSuNap", "LichSuNap_item", "LichSuRut", "LichSuRut_item", "Profile", "Settings", "Bank", "bankNap", "bankRut", "ChuyenRed", "ChuyenRed_daily", "MomoController", "NapRed", "NapRed_itemOne", "NapRed_itemTT", "Shop", "shopMuaTheCao", "shopMuaXu", "TieuRed", "ruttien", "SignIn", "SignName", "SignOut", "SignUp", "TheCao", "TheCao_item", "iMessage", "iMessage_item", "Header", "Menu", "MenuRoom", "MiniPanel", "EventTaiXiu_item1", "dialogHuongDan", "MiniDialog", "PokerNap", "popupMinigame", "popupTopHu", "NewsContents", "NewsItem", "Notice", "bgLoading", "landingSuKien", "popupSuKien", "Splash", "EF_NoHu", "PushNohu", "use_reversed_rotateBy", "use_v2.1.x_cc.Action"]);
