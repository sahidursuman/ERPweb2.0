define(function(require, exports) {
    var messageTemplate = require("./view/message"),
        viewTemplate = require("../system/message/view/view"),
        settingsTemplate = require('./view/userSettings');
        
    var index = {
            /**
             * 初始化首页模块
             * @return {[type]} [description]
             */
            main: function() {
                that.init_event();
                that.init_message();

                if (KingSettings.pusher) {
                    Tools.loadPluginScript('plugin_pusher', function() {
                        index.bind_message();                        
                    });
                }
                index.MessagePrompt({
                    bus: IndexData.userInfo.unReadBusCompanyOffer || 0,
                    hotel: IndexData.userInfo.unReadHotelOffer || 0
                });
            },
            /**
             * 绑定处理方法
             * @return {[type]} [description]
             */
            init_event: function() {
                $('#update-userinfo-settings').on('click', function(event) {
                    event.preventDefault();
                    index.updateUserinfoLayer = index.initUpdateUserinfoLayer();
                });
            },

            /**
             * 绑定询价消息
             * @return {[type]} [description]
             */
            bind_message: function() {
                var pusher = new Pusher(IndexData.userInfo.pusherKey, {
                    encrypted: true
                });
                var channel = pusher.subscribe('user_' + IndexData.userInfo.userId + '_channel');
                // 绑定车队询价消息
                channel.bind('offer_bus_company', function(data) {
                    console.info(data);
                    index.MessagePrompt({
                        bus: data.count || 0
                    });
                });
                // 绑定酒店询价消息
                channel.bind('offer_hotel', function(data) {
                    console.info(data);
                    index.MessagePrompt({
                        hotel: data.count || 0
                    });
                });
                 // 绑定发团安排车队询价回馈结果
                channel.bind('tripPlan_offer_bus_company_result', function(data) {
                    console.info(data);
                    index.tripPlanChangeBookingStatus(data, 'bus');
                });
                 // 绑定发团安排酒店询价回馈结果
                channel.bind('tripPlan_offer_hotel_result', function(data) {
                    console.info(data);
                    index.tripPlanChangeBookingStatus(data, 'hotel');
                });
                //绑定发团安排车队预订回馈结果
                channel.bind('tripPlan_booking_bus_company_result'), function(data) {
                    console.info(data);
                    index.tripPlanChangeBookingStatus(data, 'hotel', 1);
                }
                //绑定发团安排酒店预订回馈结果
                channel.bind('tripPlan_booking_hotel_result'), function(data) {
                    console.info(data);
                    index.tripPlanChangeBookingStatus(data, 'hotel', 1);
                }
            },

            /**
             * 初始化消息通讯
             * @return {[type]} [description]
             */
            init_message: function() {
                index.message();
                setInterval(index.message, 1000 * 60 * 30);
            },
            message: function() {
                $.ajax({
                    url: KingServices.build_url('message', 'listMessage'),
                    type: "POST",
                    success: function(data) {
                        var result = showDialog(data);
                        if (result) {
                            if (data.unReadMsgCount == 0) {
                                $("#unReadCountStr").text("当前没有未读消息");
                                // data.unReadMsgCount = 0;

                            } else {
                                $("#unReadCountStr").text(data.unReadMsgCount + "  条新消息");
                            }
                            $("#msgCountSpan").text(data.unReadMsgCount);
                            var html = messageTemplate(data);
                            $("#msgContainer .msgList").html(html);
                            $("#msgContainer").ace_scroll({
                                size: 200
                            });

                            $("#msgContainer .msgList .msg-intro").click(function() {
                                var id = $(this).attr("data-entity-id");
                                $.ajax({
                                    url: KingServices.build_url('message', 'readMessage'),
                                    type: "POST",
                                    data: "id=" + id,
                                    success: function(data) {
                                        layer.open({
                                            type: 1,
                                            title: "查看信息",
                                            skin: 'layui-layer.-rim', //加上边框
                                            area: '600px', //宽高
                                            zIndex: 1028,
                                            content: viewTemplate(data),
                                            scrollbar: false, // 推荐禁用浏览器外部滚动条
                                        });
                                    }
                                });
                            });
                        }
                    }
                });
            }
        },
        that = index;

    index.initUpdateUserinfoLayer = function() {

        return layer.open({
            type: 1,
            title: "修改个人信息",
            skin: 'layui-layer-lan', //加上边框
            area: ['500px', '300px'], //宽高
            zIndex: 1028,
            content: settingsTemplate(IndexData.userInfo),
            success: function() {
                // 绑定表单校验事件
                index.bindValiator();
                // 初始化对话框的事件
                index.init_update_user_info_event();

                $('.btn-cancelUserInfo').parent().off('click.updateinfo.api')
                    .on('click.updateinfo.api', 'button', function(event) {
                        var $that = $(this);
                        if ($that.hasClass('btn-cancelUserInfo')) {
                            // 取消
                            layer.close(index.updateUserinfoLayer);
                        } else if ($that.hasClass('btn-UserSaveInfo')) {
                            // 保存
                            if (index.updateUserInfoAction === 0) {
                                // 保存个人信息的修改
                                index.saveUserInfo();
                            } else if (index.updateUserInfoAction === 1) {
                                // 修改密码
                                index.changePwd();
                            }
                        }
                    });
            }
        });
    };


    // 新消息提示 
    /**
     * 询价消息提示控件
     * @param {object} data { bus: 5, hotel: 2}.只会传递其中一个值，不需要修改另外一个值
     */

    var html = '<div class="newMessage-prompt"><a class="T-item T-bus"> <i class="fa fa-car" style="font-size: 21px;"></i><span class="T-bus-counter badge badge-important newsMoreT">0</span></a>' + '<a class="T-item T-hotel" style="display: inline-block;margin-top:30px;"><i class="fa fa-home" style="font-size: 25px;margin-top: 20px"></i><span class="T-hotel-counter badge badge-important newsMore">0</span></a></div>';
    index.MessagePrompt = function(data) {
        var $messager = $('.newMessage-prompt');

        if (hasData()) {
            if (!$messager.length) {
                $messager = $(html).appendTo($('body'));

                // 绑定hover
                $messager.find('.T-item').hover(
                    function() {
                        var $that = $(this),
                            url, keys, target;

                        $that.data('focus-in', true);
                        if ($that.hasClass('T-bus')) {
                            url = KingServices.build_url('busInquiry', 'listUnReadBusCompanyOffer');
                            keys = ['busCompanyOfferListJson', 'busComnpany', 'companyName'];
                            target = 'T-bus';
                        } else if ($that.hasClass('T-hotel')) {
                            url = KingServices.build_url('hotelInquiry', 'listUnReadHotelOffer');
                            keys = ['hotelOfferListJson', 'hotel', 'name'];
                            target = 'T-hotel';
                        }
                        if (!$that.data('isSentAjax') && !!url) {
                            $.ajax({
                                    url: url,
                                    type: 'post',
                                    showLoading: false
                                })
                                .done(function(data) {
                                    console.info(data);
                                    if (data.success == 1) {
                                        var str = [],
                                            list = JSON.parse(data[keys[0]] || false);

                                        if (!!list) {
                                            for (var i = 0, len = list.length, name, qId, res, tmp; i < len; i++) {
                                                tmp = list[i];
                                                name = tmp[keys[1]][keys[2]];
                                                qId = tmp.quoteId;
                                                tId = tmp.tripPlanId;
                                                res = tmp.result;
                                                str.push('<li class="list-group-item boxLiStyle">' + name + (res == 1 ? '已同意' : (res == -1 ? '已拒绝' : '')) +
                                                    ', <a class="T-view-quote" data-target="' + target + '" data-quote-id="' + qId + '" data-tripplan-id="' + tId + '">查看</a></li>');
                                            }

                                            if (len) {
                                                str = '<div class="MessagePrompt-box"><ul class="list-group">' + str.join('') + '</ul></div>';
                                            } else {
                                                str = '';
                                            }

                                            $that.data('html', str);
                                            Tools.descToolTip($that, 2, 'left');

                                            var action = 'hide';

                                            if ($that.data('focus-in')) {
                                                action = 'show';
                                            }
                                            $that.popover(action);
                                        }
                                    }

                                    $that.data('isSentAjax', true);
                                });
                        }
                    },
                    function() {
                        $(this).data('focus-in', false);
                    });

                // 绑定查看事件
                var $tip = Tools.$descContainer2;

                if ($tip.length) {
                    $tip.on('click', '.T-view-quote', function(event) {
                        event.preventDefault();
                        var $that = $(this),
                            id = $that.data('quote-id'),
                            tripPlanId = $that.data('tripplan-id'),
                            target = $that.data('target'),
                            count = 0; //target: T-hotel or T-bus

                        if (!!tripPlanId) {
                           seajs.use(ASSETS_ROOT + modalScripts.arrange_all, function(module) {
                               module.updatePlanInfo(tripPlanId, target);
                           }); 
                        } else {
                            // 查看询价                    
                            seajs.use(ASSETS_ROOT + modalScripts.arrange_quote, function(module) {
                                module.updateQuoteToOffer(id, target);
                            });
                       }
                        // 验证消息条数
                        $that.closest('ul').children('li').each(function(index, el) {
                            if ($(this).children('a').data('quote-id') == id) {
                                count++;
                            }
                        });

                        var $target = $messager.find('.' + target),
                            curr = $target.find('span').text(),
                            needHide = true,
                            inAll = curr - count;
                        $target.find('span').text(inAll),
                            $tipHtml = $($target.data('html'));

                        // remove this item content
                        $tipHtml.find('li').each(function(index, el) {
                            var $li = $(this);
                            if ($li.children('a').data('quote-id') == id) {
                                $li.remove();
                            }
                        });
                        // 修正提示内容
                        var newHtml = $tipHtml.prop('outerHTML');
                        $target.data('html', newHtml); // firefox 可能存在兼容性问题
                        if (inAll > 0) {
                            $target.data('bs.popover').options.content = newHtml;
                        } else {
                            // 为零时
                            $target.popover('destroy');
                            $target.data('bs.popover').options.content = "";
                        }

                        // 通过检查消息条数，确定是否显示右侧的询价组件。
                        $('.newMessage-prompt').children('a').each(function(index, el) {
                            console.info($(this).find('span').text())
                            if ($(this).find('span').text() > 0) {
                                needHide = false;
                                return false;
                            }
                        });

                        // 全部是零时，隐藏
                        if (needHide) {
                            $messager.addClass('hidden');
                        }
                        // 查看后，清空tip的内容
                        $tip.html('');
                    });
                }
            } else {
                $messager.removeClass('hidden');
            }
            if (data.bus != undefined) {
                $messager.find('.T-bus-counter').text(data.bus).closest('.T-item').data('isSentAjax', false);
            }
        }

        if (data.hotel != undefined) {
            $messager.find('.T-hotel-counter').text(data.hotel).closest('.T-item').data('isSentAjax', false);
        }

        if (data.guide != undefined) {
            $messager.find('.T-guide-counter').text(data.guide).closest('.T-item').data('isSentAjax', false);
        }

        function hasData() {
            var res = false;

            for (var i in data) {
                if (data[i] > 0) {
                    res = true;
                }
            }

            return res;
        }
    };


    index.bindValiator = function() {
        var $obj = $(".login-userData-form");
        index.validator = {
            updateinfoValidator: $obj.formValidate([{
                $ele: $obj.find("input[name='realName']"),
                rules: [{
                    type: 'null',
                    errMsg: '姓名不能为空'
                }]
            }, {
                $ele: $obj.find("input[name='mobileNumber']"),
                rules: [{
                    type: 'null',
                    errMsg: '电话不能为空'
                }, {
                    type: 'phone-num',
                    errMsg: '电话格式不正确'
                }]
            }]),
            changePwdValidator: $obj.formValidate([{
                $ele: $obj.find("input[name='oldPassword']"),
                rules: [{
                    type: 'null',
                    errMsg: '旧密码不能为空'
                }]
            }, {
                $ele: $obj.find("input[name='newPassword']"),
                rules: [{
                    type: 'null',
                    errMsg: '新密码不能为空'
                }]
            }, {
                $ele: $obj.find("input[name='newPassword1']"),
                rules: [{
                    type: 'null',
                    errMsg: '确认密码不能为空'
                }]
            }])
        }
    };

    index.saveUserInfo = function() {
        // 表单校验
        if (!index.validator.updateinfoValidator.form()) {
            return;
        }
        var $updateObj = $(".login-userData-form");
        var userName = $updateObj.find("input[name='userName']").val();
        var realName = $updateObj.find("input[name='realName']").val();
        var mobileNumber = $updateObj.find("input[name='mobileNumber']").val();
        var user = {
                userName: userName,
                realName: realName,
                mobileNumber: mobileNumber
            }
            //提交修改用户信息
        $.ajax({
            url: KingServices.build_url('user', 'updateInfo'),
            data: "user=" + encodeURIComponent(JSON.stringify(user)),
            success: function(data) {
                if (showDialog(data)) {
                    showMessageDialog(data.message, function() {
                        // 关闭对话框
                        layer.close(index.updateUserinfoLayer);

                        // 回显设置
                        var $userInfoContainer = $('#loginUserInfo');
                        $userInfoContainer.find('.userName').text(realName);
                        $userInfoContainer.find('.phoneNumber').text(mobileNumber);
                        IndexData.userInfo.realName = realName;
                        IndexData.userInfo.mobileNumber = mobileNumber;
                    });
                }
            }
        })
    };

    index.changePwd = function() {
        if (!index.validator.changePwdValidator.form()) {
            return;
        }
        var $loginObj = $("#alter-pwd");
        var newPassword = $loginObj.find("input[name='newPassword']").val();
        var newPassword1 = $loginObj.find("input[name='newPassword1']").val();
        var oldPassword = $loginObj.find("input[name='oldPassword']").val();
        if (newPassword != newPassword1) {
            //两次密码是否一致性的验证
            $(".password-validate").text("两次输入的密码不一致！");
            return false;
        } else {
            $.ajax({
                url: KingServices.build_url('user', 'rePassword'),
                data: {
                    oldPassword: oldPassword,
                    newPassword: newPassword
                },
                success: function(data) {
                    layer.close(index.updateUserinfoLayer);
                    if (showDialog(data)) {
                        showMessageDialog(data.message, function() {
                            $.ajax({
                                url: APP_ROOT + "base.do?method=logOut&token=" + $.cookie("token") + "&operation=self",
                                type: "POST",
                                success: function(data) {
                                    if (data.success == 0) {
                                        showMessageDialog(data.message);
                                    } else {
                                        window.location.href = "login.html";
                                    }
                                }
                            });
                        });
                    }
                }
            })
        }
    };

    index.init_update_user_info_event = function() {
        index.updateUserInfoAction = 0; // 修改个人信息
        $(".userinfo-tabs").on('click', '>p', function(event) {
            event.preventDefault();
            var $that = $(this);

            if ($that.hasClass('user-active')) return;


            $that.parent().children().toggleClass('Default user-active');
            $('.userinfo-content').children('div').toggleClass('hidden');

            if ($that.hasClass('alter-user')) { // 修改个人信息
                index.updateUserInfoAction = 0;
            } else {
                index.updateUserInfoAction = 1; // 修改密码
            }
        });
    }

    /**
     * 修改发团安排中 预订状态
     * @param  {[type]} data [返回值]
     * @return {[type]}      [description]
     */
    index.tripPlanChangeBookingStatus = function(data, name, type) {
        if (name == 'hotel') {
            var $rs = data, $tab = $('#tab-arrange_all-update-content'),
                $tripPlanId = $rs.tripPlanId,
                $hotelId = $rs.hotelId,
                $hotelRoomId = $rs.hotelRoomId,
                $whichDay = $rs.whichDay;

            var tripPlanId = $tab.find('[name=tripPlanId]').val()
            if (!!$tab && $tripPlanId == tripPlanId) {
                var $tr = $tab.find('#tripPlan_addPlan_hotel tbody tr');
                $tr.each(function(i) {
                    var hotelId = $tr.eq(i).find('[name=hotelId]').val(),
                        roomId = $tr.eq(i).find('[name=hotelRoomId]').val(),
                        whichDay = $tr.eq(i).find('[name=whichDay]').val();
                    if ($hotelId == hotelId && $hotelRoomId == roomId && $whichDay == whichDay) {
                        if (type == 1) {
                            $tr.eq(i).find('[name=hotelOrder]').val(3);
                        }else{
                            $tr.eq(i).find('.T-hotel-bookingStatus').addClass('T-hotel-booking').css('color','rgb(51, 122, 183)');
                        }
                    }
                });
            }
        }else if (name == 'bus') {
            var $rs = data, $tab = $('#tab-arrange_all-update-content'),
                $tripPlanId = $rs.tripPlanId;
                $busCompanyId = $rs.busCompanyId;
            var tripPlanId = $tab.find('[name=tripPlanId]').val(),
                $tr = $tab.find('#tripPlan_addPlan_bus tbody tr');
            if (!!$tab && $tripPlanId == tripPlanId) {
                $tr.each(function(i) {
                    var busCompanyId = $tr.eq(i).find('[name=busCompanyId]').val()
                    if (busCompanyId == $busCompanyId) {
                        if (type == 1) {
                            $tr.eq(i).find('[name=busOrder]').val(3);
                        }else{
                            $tr.eq(i).find('.T-bus-bookingStatus').addClass('T-bus-booking').css('color','rgb(51, 122, 183)');
                        }
                    }
                })
            }
        }
    };

    exports.main = index.main;
});
