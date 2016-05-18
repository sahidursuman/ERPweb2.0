/**
 * 中转安排模块
 * author：roger wei
 * 2016-03-31
 */

define(function(require, exports) {
    var tabKey = "transfer",
        BusListTemplate = require('./transferView/busList'),
        BusArrangedListTemplate = require('./transferView/busArrangedList'),
        BusArrangeTemplate = require('./transferView/busArrange'),
        ViewBusTemplate = require('./transferView/viewBus'),
        addbustransferTemplate = require('./transferView/addbustransfer'),
        busplanId = "tab-" + tabKey + "-busplan",
        viewBusId = "tab-" + tabKey + "-viewBus",

        HotelListTemplate = require('./transferView/hotelList'),
        HotelArrangedListTemplate = require('./transferView/hotelArrangedList'),
        HotelArrangeTemplate = require('./transferView/hotelArrange'),
        ViewHotelTemplate = require('./transferView/viewHotel'),
        addHotelTransferTemplate = require('./transferView/addHotelTransfer'),
        hotelplanId = "tab-" + tabKey + "-hotelplan",
        viewhotelId = "tab-" + tabKey + "-viewhotel",

        OtherListTemplate = require('./transferView/otherList'),
        OtherArrangeTemplate = require('./transferView/otherArrange'),
        ViewOtherTemplate = require('./transferView/viewOther'),
        planCollectionTemplate = require('./transferView/planCollection'),

        Transfer = {
            transitIds: [],
            installCheckData: [],
            delBusTransferId: [],
            delHotelTransferId: [],
            deleteOutBusIds: [],
            deleteOutHotelIds: [],
            deleteOutOtherIds: [], //删除其他缓存id
            deleteOutRestaurantIds: [], //删除餐id
            deleteOutTicketIds: [], //删除票务
            busArrangeIdArray: [],
            hotelArrangeIdArray: [],
            collectionList : []
        },
        tabKey = 'transfer_arrange_part',
        service_name = 'v2/singleItemArrange/touristGroupTransferArrange',
        rule = require('./rule');

    /**
     * 列表入口
     * @param  {object} $form 搜索的参数区域
     * @return {[type]}       [description]
     */
    Transfer.getList = function($form) {
        var $tab = $form.closest('.tab-pane'),
            target = $tab.data('target');

        Transfer.$tab = $tab.parent();

        switch (target) {
            // 中转部分
            case 'bus':
                Transfer._getBusList($form);
                break;
            case 'hotel':
                Transfer._getHotelList($form);
                break;
            case 'other':
                Transfer._getOtherList($form);
                break;

            default:
                break;
        }
    };

    /**
     * 安排入口
     * @param  {object} $arrange 安排按钮
     * @return {[type]}          [description]
     */
    Transfer.arrange = function($arrange) {
        var target = $arrange.closest('.tab-pane').data('target');

        switch (target) {
            case 'bus':
                Transfer._arrangeBus($arrange);
                break;
            case 'hotel':
                Transfer._arrangeHotel($arrange);
                break;
            case 'other':
                Transfer._arrangeOther($arrange);
                break;

            default:
                break;
        }
    };

    Transfer.mergeArrange = function($mergeBtn) {
        switch ($mergeBtn.closest('.tab-pane').data('target')) {
            case 'bus':
                Transfer._mergeArrangeBus();
                break;
            case 'hotel':
                Transfer._mergeArrangeHotel();
                break;
            default:
                break;
        }
    }

    /**
     * 获取未安排Id
     **/
    Transfer.setArrangeId = function($checkBox) {
        var target = $checkBox.closest('.tab-pane').data('target'),
            checked = $checkBox[0].checked,
            $tr = $checkBox.closest('tr'),
            data = {
                outRemarkId: $tr.data('id'),
                shuttleType: $tr.find('input[name="shuttleType"]').val(),
            },

            IdList;

        switch (target) {
            case 'bus':
                IdList = Transfer.busArrangeIdArray || [];
                Transfer.busArrangeIdArray = IdList;
                break;
            case 'hotel':
                IdList = Transfer.hotelArrangeIdArray || [];
                Transfer.hotelArrangeIdArray = IdList;
                break;

            default:
                break;
        };
        if (IdList) {
            if (checked) {
                IdList.push(data)
            } else {
                for (var i = 0, len = IdList.length; i < len; i++) {
                    if (IdList[i].outRemarkId == data.outRemarkId) {
                        IdList.splice(i, 1);
                        break;
                    }
                }
            }
        }

        $checkBox.closest('.tab-pane').find('.T-merge-arrange').prop('disabled', IdList.length === 0);
    }

    /**
     * 查看入口
     * @param  {object} $arrange 安排按钮
     * @return {[type]}          [description]
     */
    Transfer.view = function($view) {
        var $tabPane = $view.closest('.tab-pane'),
            target = $tabPane.data('target'),
            id = $view.closest('tr').data('id'),
            status = $tabPane.find('select[name="status"]').val(),
            args = {};

        if (!id) {
            console.info('ID 为空，查看无效');
            return;
        }

        if (status === '0') {
            args.outRemarkId = id;
        } else {
            args.unifyId = id;
        }

        switch (target) {
            // 中转部分
            case 'bus':
                Transfer._viewBus(args);
                break;
            case 'hotel':
                Transfer._viewHotel(args);
                break;
            case 'other':
                Transfer._viewOther(id);
                break;

            default:
                break;
        }
    };

    /**
     * 刷新安排列表
     * @param  {string} target 刷新对象
     * @return {[type]}        [description]
     */
    Transfer._refreshList = function(target) {
        var tabId, getListFun = false;
        switch (target) {
            case 'bus':
                tabId = '#transfer-bus-arrange';
                getListFun = Transfer._getBusList;
                break;
            case 'hotel':
                tabId = '#transfer-hotel-arrange';
                getListFun = Transfer._getHotelList;
                break;
            case 'other':
                tabId = '#transfer-other-arrange';
                getListFun = Transfer._getOtherList;
                break;

            default:
                break;
        }

        if (!!getListFun) {
            var $curTab = Transfer.$tab.find(tabId),
                // 获取查看的页码，系统从0开始
                pageNo = ($curTab.find('.laypage_curr').text() || 1) * 1;

            getListFun($curTab.children('form'), pageNo - 1);
        }
    };
    /**
     * 获取车队安排的列表
     * @param  {object} $searchFrom 参数form
     * @param  {int} page        页面
     * @return {[type]}             [description]
     */
    Transfer._getBusList = function($searchFrom, page) {

        var args = $searchFrom.serializeJson();
        var assign = $searchFrom.find('.T-assign-check').is(':checked');
        if (assign) {
            args.assign = 1;
        } else {
            args.assign = 0;
        }
        args.pageNo = page || 0;
        $.ajax({
                url: KingServices.build_url(service_name, 'getOutBusArrangeList'),
                type: 'post',
                dataType: 'json',
                data: args,
            })
            .done(function(data) {
                if (showDialog(data)) {
                    data.canMergeArrange = false;

                    // 设置选中效果
                    if (args.status == '0' && !!Transfer.busArrangeIdArray && Transfer.busArrangeIdArray.length) {
                        for (var i = 0, len = data.outRemarkArrangeList.length, tmp; i < len; i++) {
                            tmp = data.outRemarkArrangeList[i];

                            for (var j = 0, jLen = Transfer.busArrangeIdArray.length; j < jLen; j++) {
                                if (tmp.id == Transfer.busArrangeIdArray[j].outRemarkId) {
                                    tmp.checked = true;
                                    data.canMergeArrange = true;
                                    break;
                                }
                            }
                        }
                    }

                    var html = args.status == '1' ? BusArrangedListTemplate(data) : BusListTemplate(data);

                    var $container = $searchFrom.next().html(filterUnAuth(html));
                    laypage({
                        cont: $container.find('.T-pagenation'),
                        pages: data.totalPage, //总页数
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                Transfer._getBusList($searchFrom, obj.curr - 1);
                            }
                        }
                    });
                }
            });
    };


    /**
     * 获取酒店安排的列表
     * @param  {object} $searchFrom 参数form
     * @param  {int} page        页面
     * @return {[type]}             [description]
     */
    Transfer._getHotelList = function($searchFrom, page) {
        var args = $searchFrom.serializeJson();
        var assign = $searchFrom.find('.T-assign-check').is(':checked');
        if (assign) {
            args.assign = 1;
        } else {
            args.assign = 0;
        }
        args.pageNo = page || 0;
        $.ajax({
                url: KingServices.build_url(service_name, 'getOutHotelArrangeList'),
                type: 'post',
                dataType: 'json',
                data: args,
            })
            .done(function(data) {
                if (showDialog(data)) {
                    data.canMergeArrange = false;
                    // 设置选中效果
                    if (args.status == '0' && !!Transfer.hotelArrangeIdArray && Transfer.hotelArrangeIdArray.length) {
                        for (var i = 0, len = data.outHotelRemarkList.length, tmp; i < len; i++) {
                            tmp = data.outHotelRemarkList[i];

                            for (var j = 0, jLen = Transfer.hotelArrangeIdArray.length; j < jLen; j++) {
                                if (tmp.id == Transfer.hotelArrangeIdArray[j].outRemarkId) {
                                    data.canMergeArrange = true;
                                    tmp.checked = true;
                                    break;
                                }
                            }
                        }
                    }

                    var html = args.status == '1' ? HotelArrangedListTemplate(data) : HotelListTemplate(data);

                    var $container = $searchFrom.next().html(filterUnAuth(html));

                    laypage({
                        cont: $container.find('.T-pagenation'),
                        pages: data.totalPage, //总页数
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                Transfer._getHotelList($searchFrom, obj.curr - 1);
                            }
                        }
                    });
                }
            });
    };
    /**
     * 获取酒店安排的列表
     * @param  {object} $searchFrom 参数form
     * @param  {int} page        页面
     * @return {[type]}             [description]
     */
    Transfer._getAddHotelList = function($searchFrom, page, selectedOutRemarkList, shuttleType) {
        var args = $searchFrom.serializeJson();
        args.selectedOutRemarkList = JSON.stringify(selectedOutRemarkList);
        var assign = $searchFrom.find('.T-assign-check').is(':checked');
        if (assign) {
            args.assign = 1;
        } else {
            args.assign = 0;
        }
        args.shuttleType = shuttleType;
        args.pageNo = page || 0;
        $.ajax({
                url: KingServices.build_url(service_name, 'getOutHotelArrangeList'),
                type: 'post',
                dataType: 'json',
                data: args
            })
            .done(function(data) {
                if (showDialog(data)) {
                    Transfer.addHotelTransferData = data.outHotelRemarkList;
                    data.isFrame = true;
                    // 设置选中效果
                    if (args.status == '0' && !!Transfer.hotelArrangeIdArray && Transfer.hotelArrangeIdArray.length) {
                        for (var i = 0, len = data.outHotelRemarkList.length, tmp; i < len; i++) {
                            tmp = data.outHotelRemarkList[i];
                            for (var j = 0, jLen = Transfer.hotelArrangeIdArray.length; j < jLen; j++) {
                                if (tmp.id == Transfer.hotelArrangeIdArray[j].outRemarkId) {
                                    tmp.checked = true;
                                    break;
                                }
                            }
                        }
                    }

                    var html = args.status == '1' ? HotelArrangedListTemplate(data) : HotelListTemplate(data);

                    var $container = $searchFrom.next().html(filterUnAuth(html));

                    laypage({
                        cont: $container.find('.T-pagenation'),
                        pages: data.totalPage, //总页数
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                Transfer._getAddHotelList($searchFrom, obj.curr - 1);
                            }
                        }
                    });
                }
            });
    };

    /**
     * 获取其他安排的列表
     * @param  {object} $searchFrom 参数form
     * @param  {int} page        页面
     * @return {[type]}             [description]
     */
    Transfer._getOtherList = function($searchFrom, page) {
        var args = $searchFrom.serializeJson();
        var assign = $searchFrom.find('.T-assign-check').is(':checked');
        if (assign) {
            args.assign = 1;
        } else {
            args.assign = 0;
        }
        args.pageNo = page || 0;
        $.ajax({
                url: KingServices.build_url(service_name, 'getOutOtherArrangeList'),
                type: 'post',
                dataType: 'json',
                data: args,
            })
            .done(function(data) {
                if (showDialog(data)) {
                    if (data.recordSize) {
                        for (var i = 0, tmp, len = data.outOtherList.length; i < len; i++) {
                            tmp = data.outOtherList[i];
                            tmp.size = len_j = tmp.arrangeItems.length || 1;
                        }
                    }
                    var $container = $searchFrom.next().html(OtherListTemplate(data));

                    laypage({
                        cont: $container.find('.T-pagenation'),
                        pages: data.totalPage, //总页数
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                Transfer._getOtherList($searchFrom, obj.curr - 1);
                            }
                        }
                    });
                }
            });
    };

    /**
     * 安排车
     * @param  {object} $arrange 安排按钮
     * @return {[type]}          [description]
     */
    Transfer._arrangeBus = function($arrange) {
        var id = $arrange.closest('tr').data('id'),
            args = {};
        var shuttleType = $arrange.closest('tr').attr('shuttleType')
        if ($arrange.closest('.tab-pane').find('select[name="status"]').val() === '0') {
            args.outRemarkId = id;
            args.shuttleType = shuttleType;
        } else {
            args.unifyId = id;
        }

        if (!!id) {
            $.ajax({
                url: KingServices.build_url(service_name, "getOutBusArrange"),
                type: "POST",
                data: args,
                success: function(data) {
                    if (showDialog(data)) {
                        var html = BusArrangeTemplate(data);
                        addTab(busplanId, '车安排', html);
                        Transfer.$busplanId = $("#tab-" + busplanId + "-content");
                        var $busplanId = Transfer.$busplanId;
                        Transfer.$checkJson = Transfer.$busviewId;
                        Transfer.busplanclick($busplanId, '', shuttleType); //车安排事件
                        Transfer.deleteOutBusIds = [];
                        Transfer.busCollList($busplanId,data.outBusList);
                    }
                }
            });
        }
    };

    /**
     * 统一车安排事件
     * @return {[type]}          [description]
     */
    Transfer._mergeArrangeBus = function() {
            for (var i = 0; i < Transfer.busArrangeIdArray.length; i++) {
                if (!Transfer.busArrangeIdArray[i].outRemarkId) {
                    Transfer.busArrangeIdArray.splice(i, 1);
                }
            }
            var outRemarkList = JSON.stringify(Transfer.busArrangeIdArray);

            $.ajax({
                url: KingServices.build_url(service_name, "outBusUnifyArrange"),
                type: "POST",
                data: { outRemarkList: outRemarkList },
                success: function(data) {
                    var result = showDialog(data);
                    if (result) {
                        var html = BusArrangeTemplate(data);
                        addTab(busplanId, '车安排', html);
                        Transfer.$busplanId = $("#tab-" + busplanId + "-content");
                        var $busplanId = Transfer.$busplanId;
                        Transfer.$checkJson = Transfer.$busviewId;
                        Transfer.busplanclick($busplanId); //车安排事件
                        

                    };
                }
            })
        }
        /**
         * 车队安排事件
         * @param  {[type]} $busplanId [容器]
         * @return {[type]}      [description]
         */
    Transfer.busplanclick = function($busplanId, outRemarkId, shuttleType) {
            Transfer.addResource($busplanId); //车安排弹窗
            Transfer.bindBusCompanyChoose($busplanId); //车安排autocomplete列表
            Transfer.setDate($busplanId); //时间控件
            var validate = rule.transferBusCheck($busplanId);
            //change触发计算
            $busplanId.on('change', '.count, .price, .discount', function() {
                var $that = $(this);
                $Tr = $that.closest("tr");
                Transfer.calculation($Tr);
            });
            //关闭安排按钮
            $busplanId.find('.T-cancel').on('click', function() {
                    Tools.closeTab(busplanId);
                })
                //保存车未安排事件
            $busplanId.find('.T-bus-save').on('click', function() {
                if (!validate.form()) return;
                Transfer.submitbus($busplanId);
            });
            //新增车
            $busplanId.find('.T-add-bus').on('click', function() {
                Transfer.addbus($busplanId, validate);
            });
            
            //计划代收
            $busplanId.find('.T-bus-plan').on('click', '.T-collection', function(event) {
                event.preventDefault();
                /* Act on the event */
                Transfer.planCollection($busplanId, $(this));
            }).on('click', '.T-arrange-delete', function() {
                Transfer.deleteBusArrange($(this));
            });
            //添加中转数据
            $busplanId.find('.T-add-BusTransfersId').on('click', function() {
                var shuttleType = $busplanId.find('input[name=shuttleType]').val();
                Transfer.addBusTransfer(shuttleType, $busplanId);
            });
            //删除中转数据
            $busplanId.off('click').on('click', '.T-del-bus', function() {
                var $that = $(this),
                    $tr = $that.closest('tr'),
                    outRemarkId = $tr.find('[name=outRemarkId]').val();
                var $taskListLen = $busplanId.find('.T-task-list').length;
                if ($taskListLen <= 1) {
                    $that.attr('disabled', 'disabled');
                } else {
                    $tr.remove();
                    var delBusTransferData = {
                        outRemarkId: outRemarkId
                    }
                    Transfer.delBusTransferId.push(delBusTransferData);
                }

                //更新缓冲数据
                Transfer.spliceColGroIteArr($busplanId, outRemarkId);

            });
        }

        /**
         * [spliceColGroIteArr 移除代收安排记录]
         * @param  {[type]} outRemarkId 计划ID
         * @return {[type]}             [description]
         */
        Transfer.spliceColGroIteArr = function($tab, outRemarkId){

            var $hotelTr = $tab.find('tbody.T-hotel-plan').children('tr'),
                $busTr = $tab.find('tbody.T-bus-plan').children('tr');

            //房安排
            $hotelTr.each(function(index) {
                var collectGroItemList=$hotelTr.eq(index).find('.T-collection').data('collectGroItemList');
                if (!!collectGroItemList && collectGroItemList.length > 0 ) {
                    for(var i = 0, len = collectGroItemList.length; i < len; i++){
                        if (collectGroItemList[i].outRemarkId = outRemarkId) {
                            collectGroItemList.splice(i, 1);
                            break;
                        }
                    }
                    //修改缓存data数据
                    $hotelTr.eq(index).find('.T-collection').data('collectGroItemList', collectGroItemList)

                    //重置计算
                    for(var i = 0, len = collectGroItemList.length; i < len; i++){
                        count+=collectGroItemList[i].collectionGroup;
                        count+=collectGroItemList[i].collectionItem;
                    }
                    $hotelTr.eq(index).find('.T-collection').val(count);
                }
                
            }); 

            //车安排
            $busTr.each(function(index) {
                var collectGroItemList=$busTr.eq(index).find('.T-collection').data('collectGroItemList'), count = 0; 
                if (!!collectGroItemList && collectGroItemList.length > 0 ) {
                    for(var i = 0, len = collectGroItemList.length; i < len; i++){
                        if (collectGroItemList[i].outRemarkId = outRemarkId) {
                            collectGroItemList.splice(i, 1);
                            break;
                        }
                    }
                    //修改data缓存数据
                    $busTr.eq(index).find('.T-collection').data('collectGroItemList', collectGroItemList);

                    //重置计算
                    for(var i = 0, len = collectGroItemList.length; i < len; i++){
                        count+=collectGroItemList[i].collectionGroup;
                        count+=collectGroItemList[i].collectionItem;
                    }
                    $busTr.eq(index).find('.T-collection').val(count);
                }
            }); 
        }

        /**
         * 
         * 增加车安排弹窗任务
         * @param {int} shuttleType 接送团标志 0：接团；1：送团
         * @param {int} status      安排状态： 0：未安排，1：已安排
         */
    Transfer.addBusTransfer = function(shuttleType, $busplanId) {
        var outRemarkId = $busplanId.find('[name=outRemarkId]');
        var selectedOutRemarkList = [];
        outRemarkId.each(function() {
            if ($(this).val().trim()) {
                var outRemarkIdData = {
                    outRemarkId: $(this).val()
                };
                selectedOutRemarkList.push(outRemarkIdData);
            }
        });
        shuttleType = shuttleType || 0;
        status = 0;
        var layerFrame = layer.open({
            type: 1,
            title: "选择游客",
            skin: 'layui-layer-rim', // 加上边框
            area: '1340px', // 宽高
            zIndex: 1028,
            content: addbustransferTemplate({
                shuttleType: shuttleType,
                status: status
            }),
            scrollbar: false, // 推荐禁用浏览器外部滚动条
            success: function(event) {
                // 初始化列表
                Transfer.addBusTransferArray = [];

                // 绑定事件
                var $frame = $('#transfer-bus-arrange-frame');
                // search
                $frame.find('.T-search').on('click', function(event) {
                    event.preventDefault();
                    Transfer._getAddBusList($(this).closest('form'), 0, selectedOutRemarkList);
                }).trigger('click');

                // 添加
                $frame.find('.T-confirm').off('click').on('click', function(event) {
                    event.preventDefault();
                    //缓存选中的数据
                    var checkData = Transfer.installCheckDatas($frame);
                    // 添加游客列表
                    var htmlData = '';
                    for (var i = 0; i < checkData.length; i++) {
                        var busPlan = checkData[i];
                        var span = '';
                        var input = '';
                        if (busPlan.shuttleType == 1) {
                            span = '<span>接团</span>';
                            input = '<input name="shuttleType" value="1" type="hidden"/>';
                        } else if (busPlan.shuttleType == 2) {
                            span = '<span>送团</span>';
                            input = '<input name="shuttleType" value="2" type="hidden"/>';
                        }
                        var htmlData = '<tr class="T-task-list">' +
                            '<td class="h-touristGroupInfo">' +
                            '<input type="hidden" name="outRemarkId" value="' + (busPlan.id || "") + '">' +
                            '<p>中转单号：<span class="orderNumber">' + (busPlan.orderNumber || "") + '</span></p>' +
                            '<p><span><span class="lineProductName">&lt;' + (busPlan.lineProductName || "") + '&gt;</span></span></p>' +
                            '<p><span class="startTime">' + (busPlan.startTime || "") + '</span>' +
                            '<span class="partnerAgencyName">' + (busPlan.partnerAgencyName || "") + '</span>外联销售：' +
                            '<span class="outOPUserName">' + (busPlan.outOPUserName || "") + '</span></p>' +
                            '<p>收客单号：<span class="tgOrderNumber">' + (busPlan.tgOrderNumber || "") + '</span></p></td>' +
                            '<td>' +
                            span +
                            input +
                            '</td>' +
                            '<td>' +
                            '<p><span cals="contactMemberName">' + (busPlan.contactMemberName || "") + '</span></p>' +
                            '<p>' +
                            '<span class="adultCount">' + (busPlan.adultCount || "") + '</span>大' +
                            '<span class="childCount">' + (busPlan.childCount || "") + '</span>小' +
                            '</p>' +
                            '<p><span class="contactMemberPhoneNumber">' + (busPlan.contactMemberPhoneNumber || "") + '</span></p>' +
                            '</td>' +
                            '<td><span class="arriveTime">' + (busPlan.arriveTime || "") + '</span></td>' +
                            '<td><span class="shift">' + (busPlan.shift || "") + '</span></td>' +
                            '<td><span class="shift">' + (busPlan.require || "") + '</span></td>' +
                            '<td>' +
                            '<a class="cursor T-del-bus" title="删除">删除</a>' +
                            '</td>' +
                            '</tr>'
                        $busplanId.find('.T-arrange').append(htmlData);
                    };

                    // 关闭对话框
                    layer.close(layerFrame);
                });

                // 勾选
                $frame.find('.T-table-area').on('click', 'input[type="checkbox"]', function(event) {
                    var $that = $(this),
                        item = Transfer.addBusTransferData[$that.index()];
                    // 缓存数据
                    if (this.checked) {
                        Transfer.addBusTransferArray.push(item);

                    } else {
                        // 删除数据
                        for (var i = 0, len = Transfer.addBusTransferArray.length; i < len; i++) {
                            if (item.id === Transfer.addBusTransferArray[i].id) {
                                Transfer.addBusTransferArray.splice(i, 1);
                            }
                        }
                    }
                });
            }
        });
    };
    //缓存数据 
    Transfer.installCheckDatas = function($frame) {
        var $tr = $frame.find('.T-bus-list').find('tr'); //找到所有的tr
        $tr.each(function(i) {
            var $that = $(this),
                id = $that.attr('data-id');
            var selectFlag = $that.find('.T-cheked').is(':checked'); //判断是否勾选
            if (selectFlag) {
                var checkData = {
                    shuttleType: $that.find("input[name=shuttleType]").val(),
                    id: id,
                    orderNumber: $that.find('.orderNumber').text(),
                    lineProductName: $that.find('.lineProductName').text(),
                    startTime: $that.find('.startTime').text(),
                    partnerAgencyName: $that.find('.partnerAgencyName').text(),
                    adultCount: $that.find('.adultCount').text(),
                    childCount: $that.find('.childCount').text(),
                    outOPUserName: $that.find('.outOPUserName').text(),
                    require: $that.find('.require').text(),
                    tgOrderNumber: $that.find('.tgOrderNumber').text(),
                    outOPUserName: $that.find('.outOPUserName').text(),
                    contactMemberName: $that.find('.contactMemberName').text(),
                    adultCount: $that.find('.adultCount').text(),
                    childCount: $that.find('.childCount').text(),
                    contactMemberPhoneNumber: $that.find('.contactMemberPhoneNumber').text(),
                    arriveTime: $that.find('.arriveTime').text(),
                    shift: $that.find('.shift').text(),
                };
                Transfer.installCheckData.push(checkData);
            }
        });
        return Transfer.installCheckData;
    };

    Transfer.busCollList = function($tab, outBusList){
        var collectionList=[];
        if (!!outBusList && outBusList.length> 0 ) {
           for (var i = 0; i < outBusList.length; i++) {
                $tab.find('[name=collectionList]').eq(i).val(JSON.stringify(outBusList[i].collectionList));
            };
        }  
    };

    /**
     * 获取车队安排的列表
     * @param  {object} $searchFrom 参数form
     * @param  {int} page        页面
     * @return {[type]}             [description]
     */
    Transfer._getAddBusList = function($searchFrom, page, selectedOutRemarkList) {
        var shuttleType = $searchFrom.find('name[shuttleType]').text();
        var args = $searchFrom.serializeJson();
        args.selectedOutRemarkList = JSON.stringify(selectedOutRemarkList)
        var assign = $searchFrom.find('.T-assign-check').is(':checked');
        if (assign) {
            args.assign = 1;
        } else {
            args.assign = 0;
        }
        args.pageNo = page || 0;
        $.ajax({
                url: KingServices.build_url(service_name, 'getOutBusArrangeList'),
                type: 'post',
                dataType: 'json',
                data: args
            })
            .done(function(data) {
                if (showDialog(data)) {
                    Transfer.addBusTransferData = data.outRemarkArrangeList;
                    data.isFrame = true;
                    Transfer.installCheckData = [];

                    // 设置选中效果
                    if (args.status == '0' && !!Transfer.addBusTransferArray && Transfer.addBusTransferArray.length) {
                        for (var i = 0, len = data.outRemarkArrangeList.length, tmp; i < len; i++) {
                            tmp = data.outRemarkArrangeList[i];

                            for (var j = 0, jLen = Transfer.addBusTransferArray.length; j < jLen; j++) {
                                if (tmp.id == Transfer.addBusTransferArray[j].outRemarkId) {
                                    tmp.checked = true;
                                    break;
                                }
                            }
                        }
                    }
                    Transfer.setDate($searchFrom);
                    var html = args.status == '1' ? BusArrangedListTemplate(data) : BusListTemplate(data);

                    var $container = $searchFrom.next().html(html);
                    laypage({
                        cont: $container.find('.T-pagenation'),
                        pages: data.totalPage, //总页数
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                Transfer._getAddBusList($searchFrom, obj.curr - 1);
                            }
                        }
                    });

                    $(window).trigger('resize');
                }
            });
    };
    //安排车保存
    Transfer.submitbus = function($tab) {
        var shuttleType = $tab.find('[name=shuttleType]').val();
        var unifyId = $tab.find('[name=unifyId]').val();
        var outBusList = Tools.getTableVal($('#busplan_body'), 'id'), //车安排列表
            outRemarkList = [], //中转列表 Id
            $tr = $tab.find('.T-bus-plan tr'),
            outRemarkId = $tab.find('input[name=outRemarkId]'),
            status = $tab.find('.T-finishedArrange').is(':checked') ? 1 : 0;
        outRemarkId.each(function() {
            if ($(this).val().trim()) {
                var outRemarkJson = {
                    outRemarkId: $(this).val(),
                    shuttleType: shuttleType
                }
                outRemarkList.push(outRemarkJson);
            }
        })
        outBusList.forEach(function(item) {
            item.collectionList = JSON.parse(item.collectionList || '[]');
        });
        outRemarkList = JSON.stringify(outRemarkList);
        outBusList = JSON.stringify(outBusList);

        $.ajax({
            url: KingServices.build_url(service_name, "saveOutBusUnifyArrange"),
            type: "POST",
            data: {
                unifyId: unifyId,
                status: status,
                outBusList: outBusList,
                outRemarkList: outRemarkList,
                shuttleType: shuttleType,
                deleteOutRemarkList: JSON.stringify(Transfer.delBusTransferId),
                deleteOutBusIds: Transfer.deleteOutBusIds.join(','),
            },
            success: function(data) {
                if (showDialog(data)) {
                    showMessageDialog(data.message, function() {
                        Transfer.busArrangeIdArray = [];
                        Transfer._refreshList('bus');
                        Tools.closeTab(busplanId);
                        Transfer.deleteOutBusIds = [];
                    });
                }

            }
        })
    };

    /**
     * 车队安排弹窗事件
     * @param  {[type]} $busplanId [容器]
     * @return {[type]}      [description]
     */
    Transfer.addResource = function($busplanId) {
            $busplanId.find(".T-addBusCompanyResource").off('click').on("click", { function: KingServices.addBusCompany }, KingServices.addResourceFunction);
            $busplanId.find(".T-addHotelResource").off('click').on("click", { function: KingServices.addHotel, type: "tr", name: "hotelName", id: "hotelId", managerName: "hotelManagerName", mobileNumber: "hotelMobileNumber" }, KingServices.addResourceFunction);
            $busplanId.find(".T-addTicketResource").off('click').on("click", { function: KingServices.addTicket, type: "tr", name: "ticketName", id: "ticketId" }, KingServices.addResourceFunction);
            $busplanId.find(".T-addRestaurantResource").off('click').on("click", { function: KingServices.addRestaurant, type: "tr", name: "restaurant", id: "restaurantId", managerName: "manager", mobileNumber: "mobileNumber" }, KingServices.addResourceFunction);

            $busplanId.find(".T-addBusResource,.T-addDriverResource").off('click').on("click", {
                function: KingServices.addBusDriver,
                busCompanyName: "busCompanyName",
                busCompanyId: "busCompanyId",
                busLicenseNumberId: "busLicenseNumberId",
                busLicenseNumber: "busLicenseNumber",
                busbrand: "busbrand",
                seatCount: "seatCount",
                driverName: "driverName",
                driverId: "driverId",
                driverMobileNumber: "MobileNumber",
                type: "tr"
            }, KingServices.addBusDriverFunction);
        }
        /**
         * 车队autocomplete
         * @param  {[type]} $busplanId [容器]
         * @return {[type]}      [description]
         */
    Transfer.bindBusCompanyChoose = function($busplanId) {
        function clearData($tr, start) {
            switch (start) {
                case 'brand':
                    $tr.find('input[name="busbrand"]').val('');
                case 'licenseNumber':
                    $tr.find('input[name="busLicenseNumber"]').val('');
                    $tr.find('input[name="busLicenseNumberId"]').val('');
                case 'CompanyName':
                    $tr.find('input[name="busCompanyName"]').val('');
                    $tr.find('input[name="busCompanyId"]').val('');
                    $tr.find('input[name="mobileNumber"]').val('');
                case 'driverName':
                    $tr.find('input[name="driverName"]').val('');
                    $tr.find('input[name="driverId"]').val('');
                    $tr.find('input[name="driverMobileNumber"]').val('');
                default:
                    break;
            }
        }

        function checkBusCompay($tr, start) {
            setTimeout(function() {
                var searchJson = {
                    seatCount: $tr.find('input[name=seatCount]').val(),
                    brand: $tr.find('input[name=busbrand]').val(),
                    busId: $tr.find('input[name=busLicenseNumberId]').val(),
                    busCompanyId: $tr.find('input[name=busCompanyId]').val()
                };
                $.ajax({
                        url: KingServices.build_url('busCompany', 'getAllBusCompanyList'),
                        showLoading: false,
                        type: 'post',
                        data: searchJson,
                    })
                    .done(function(data) {
                        if (showDialog(data)) {
                            data.busCompanyList = JSON.parse(data.busCompanyList);
                            if (!data.busCompanyList || !data.busCompanyList.length) {
                                clearData($tr, start);
                            }
                        }
                    });
            }, 10);
        }

        //选择车座位数
        var chooseSeatCount = $busplanId.find(".T-chooseSeatCount");
        chooseSeatCount.autocomplete({
                minLength: 0,
                change: function(event, ui) {
                    if (ui.item == null) {
                        var $this = $(this),
                            parents = $(this).closest('tr');
                        $this.val("");
                        clearData(parents, 'brand');
                    }
                },
                select: function(event, ui) {

                    var $this = $(this),
                        parents = $(this).closest('tr');
                    checkBusCompay($(this).blur().closest('tr'), 'brand'), $tr = $this.closest('tr');
                    $tr.find('input[name=seatCount]').val('');
                    $tr.find('input[name=brand]').val('');
                    $tr.find('input[name=licenseNumber]').val('');
                }
            }).unbind("click").click(function() {
                var obj = this,
                    $tr = $(this).closest('tr');
                $.ajax({
                    url: KingServices.build_url('bookingOrder', 'getSeatCountList'),
                    showLoading: false,
                    data: {
                        brand: $tr.find("input[name=busbrand]").val(),
                        busCompanyId: $tr.find("input[name=busCompanyId]").val()
                    },
                    success: function(data) {
                        if (showDialog(data)) {
                            var seatCountListJson = [];
                            var seatCountList = data.seatCountList;
                            if (seatCountList && seatCountList.length > 0) {
                                for (var i = 0; i < seatCountList.length; i++) {
                                    var seatCount = {
                                        value: seatCountList[i]
                                    }
                                    seatCountListJson.push(seatCount);
                                }
                                $(obj).autocomplete('option', 'source', seatCountListJson);
                                $(obj).autocomplete('search', '');
                            } else {
                                layer.tips('无数据', obj, {
                                    tips: [1, '#3595CC'],
                                    time: 2000
                                });
                            }
                        }
                    }
                })
            })
            //选择品牌
        var chooseBrand = $busplanId.find(".T-chooseBusBrand");
        chooseBrand.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (ui.item == null) {
                    var $this = $(this),
                        parents = $(this).closest('tr');
                    $this.val("");
                    clearData(parents, 'LicenseNumber');
                }
            },
            select: function(event, ui) {
                var $this = $(this),
                    parents = $(this).closest('tr');
                checkBusCompay($(this).blur().closest('tr'), 'LicenseNumber');
            }
        }).unbind("click").click(function() {
            var obj = this;
            var $tr = $(this).closest('tr');
            var seatCount = $tr.find("[name=seatCount]").val();
            $.ajax({
                url: KingServices.build_url('bookingOrder', 'getBusBrandList'),
                data: {
                    seatCount: $tr.find("[name=seatCount]").val(),
                    busCompanyId: $tr.find("[name=busCompanyId]").val()
                },
                showLoading: false,
                type: "POST",
                success: function(data) {
                    if (showDialog(data)) {
                        var busBrandListJson = [];
                        var busBrandList = data.busBrandList;
                        if (busBrandList && busBrandList.length > 0) {
                            for (var i = 0; i < busBrandList.length; i++) {
                                var busBrand = {
                                    value: busBrandList[i]
                                }
                                busBrandListJson.push(busBrand);
                            }
                            $(obj).autocomplete('option', 'source', busBrandListJson);
                            $(obj).autocomplete('search', '');
                        } else {
                            layer.tips('无数据', obj, {
                                tips: [1, '#3595CC'],
                                time: 2000
                            });
                        }
                    }
                }
            })
        });
        //选择车辆
        var chooseLicense = $busplanId.find(".T-chooseBusLicenseNumber");
        chooseLicense.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (ui.item == null) {
                    var $this = $(this),
                        parents = $(this).closest('tr');
                    $this.val("");
                    clearData(parents, 'licenseNumber');
                }
            },
            select: function(event, ui) {
                var $this = $(this),
                    parents = $(this).closest('tr');
                parents.find("input[name=busId]").val(ui.item.id).trigger('change');
                checkBusCompay(parents, 'licenseNumber');
            }
        }).unbind("click").click(function() {
            var obj = this,
                parents = $(obj).closest('tr'),
                seatCount = parents.find("[name=seatCount]").val(),
                busCompanyId = parents.find("[name=busCompanyId]").val(),
                busBrand = parents.find("[name=busbrand]").val();
            $.ajax({
                url: KingServices.build_url('busCompany', 'getLicenseNumbers'),
                data: {
                    seatCount: seatCount,
                    brand: busBrand,
                    busCompanyId: busCompanyId
                },
                showLoading: false,
                type: "POST",
                success: function(data) {
                    if (showDialog(data)) {
                        var licenseList = JSON.parse(data.busList);
                        if (licenseList && licenseList.length > 0) {
                            for (var i = 0; i < licenseList.length; i++) {
                                licenseList[i].value = licenseList[i].licenseNumber;
                            }
                            $(obj).autocomplete('option', 'source', licenseList);
                            $(obj).autocomplete('search', '');
                        } else {
                            layer.tips('无数据', obj, {
                                tips: [1, '#3595CC'],
                                time: 2000
                            });
                        }
                    }
                }
            })
        });
        // 选择车队
        var chooseLicense = $busplanId.find(".T-busCompanyName");
        chooseLicense.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (ui.item == null) {
                    var $this = $(this),
                        parents = $(this).closest('tr');
                    $this.val("");
                    clearData($that.closest('tr'), 'CompanyName');

                }
            },
            select: function(event, ui) {
                var $tr = $(this).blur().closest('tr');
                checkBusCompay($tr, 'driverName');
                $tr.find("input[name=busCompanyName]").val(ui.item.busCompanyName);
                $tr.find("input[name=busCompanyId]").val(ui.item.id).trigger('change');
                $tr.find('input[name=seatCount]').val('');
                $tr.find('input[name=brand]').val('');
                $tr.find('input[name=licenseNumber]').val('');
                $tr.find('input[name=driverName]').val('');
                $tr.find('input[name=MobileNumber]').val('');
                $.ajax({
                        url: KingServices.build_url('busCompany', 'findBusCompanyById'),
                        type: 'post',
                        dataType: 'json',
                        showLoading: false,
                        data: {
                            id: ui.item.id
                        },
                    })
                    .done(function(data) {
                        if (showDialog(data)) {
                            data.busCompany = JSON.parse(data.busCompany || false);

                            if (!!data.busCompany)
                                $tr.find("input[name=mobileNumber]").val(data.busCompany.mobileNumber || '');
                            else {
                                $tr.find("input[name=mobileNumber]").val('');
                            }
                        }
                    });
            }
        }).unbind("click").click(function() {
            var obj = this,
                parents = $(obj).closest('tr'),
                seatCount = parents.find("[name=seatCount]").val(),
                busBrand = parents.find("[name=busbrand]").val();
            $.ajax({
                url: KingServices.build_url('busCompany', 'getAllBusCompanyList'),
                showLoading: false,
                type: "POST",
                success: function(data) {
                    var result = showDialog(data);
                    if (result) {
                        var busCompanyList = JSON.parse(data.busCompanyList);
                        if (busCompanyList && busCompanyList.length > 0) {
                            for (var i = 0; i < busCompanyList.length; i++) {
                                busCompanyList[i].value = busCompanyList[i].companyName;
                            }
                            $(obj).autocomplete('option', 'source', busCompanyList);
                            $(obj).autocomplete('search', '');
                        } else {
                            layer.tips('无数据', obj, {
                                tips: [1, '#3595CC'],
                                time: 2000
                            });
                        }
                    }
                }
            })
        });
        //司机选择
        var chooseDriver = $busplanId.find(".T-chooseDriver");
        chooseDriver.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (ui.item == null) {
                    var $this = $(this),
                        parents = $(this).closest('tr');
                    $this.val("");
                    parents.find("input[name=driverId]").val("");
                    parents.find("input[name=driverMobileNumber]").val("");
                }
            },
            select: function(event, ui) {
                var $this = $(this),
                    parents = $(this).closest('tr');
                parents.find("input[name=driverId]").val(ui.item.id).trigger('change');
                parents.find("input[name=MobileNumber]").val(ui.item.mobileNumber);
            }
        }).unbind("click").click(function() {
            var obj = this,
                $tr = $(this).closest('tr'); //busCompanyId
            var busLicenseNumberId = $tr.find("input[name=busLicenseNumberId]").val();
            var busCompanyId = $tr.find("input[name=busCompanyId]").val();
            if (busCompanyId == '' || busCompanyId == null) {
                showMessageDialog("请选择车队");
            } else {
                $.ajax({
                    url: KingServices.build_url('busCompany', 'getDrivers'),
                    data: "busCompanyId=" + busCompanyId + "",
                    showLoading: false,
                    type: "POST",
                    success: function(data) {
                        if (showDialog(data)) {
                            var driverList = JSON.parse(data.driverList);
                            if (driverList && driverList.length > 0) {
                                for (var i = 0; i < driverList.length; i++) {
                                    driverList[i].value = driverList[i].name;
                                }
                                $(obj).autocomplete('option', 'source', driverList);
                                $(obj).autocomplete('search', '');
                            } else {
                                layer.tips('无数据', obj, {
                                    tips: [1, '#3595CC'],
                                    time: 2000
                                });
                            }
                        }
                    }
                })
            }

        });
    };

    /**统一安排
     * @return {[type]}
     */
    Transfer._mergeArrangeHotel = function() {
        $.ajax({
            url: KingServices.build_url(service_name, "outHotelUnifyArrange"),
            type: "POST",
            data: {
                outRemarkList: JSON.stringify(Transfer.hotelArrangeIdArray)
            },
            success: function(data) {
                if (showDialog(data)) {
                    var html = HotelArrangeTemplate(data);
                    addTab(hotelplanId, '房安排', html);
                    Transfer.$hotelplanId = $("#tab-" + hotelplanId + "-content");
                    $hotelplanId = Transfer.$hotelplanId;
                    Transfer.hotelplanclick($hotelplanId);
                }
            }
        });
    }

    /**
     * 安排房
     * @param  {object} $arrange 安排按钮
     * @return {[type]}          [description]
     */
    Transfer._arrangeHotel = function($arrange) {
        var id = $arrange.closest('tr').data('id'),
            args = {};

        if ($arrange.closest('.tab-pane').find('select[name="status"]').val() === '0') {
            args.outRemarkId = id;
        } else {
            args.unifyId = id;
        }

        if (!!id) {
            $.ajax({
                url: KingServices.build_url(service_name, "getOutHotelArrange"),
                type: "POST",
                data: args,
                success: function(data) {
                    if (showDialog(data)) {
                        var html = HotelArrangeTemplate(data);
                        addTab(hotelplanId, '房安排', html);
                        Transfer.$hotelplanId = $("#tab-" + hotelplanId + "-content");
                        $hotelplanId = Transfer.$hotelplanId;
                        Transfer.hotelplanclick($hotelplanId);
                        Transfer.deleteOutHotelIds = [];
                        Transfer.busCollList($hotelplanId,data.outHotelList);
                    }
                }
            });
        }
    };

    /**
     * 安排房事件
     * @param  {object} $hotelplanId 安排按钮
     * @return {[type]}          [description]
     */
    Transfer.hotelplanclick = function($hotelplanId) {
            Transfer.addResource($hotelplanId); //房安排弹窗
            Transfer.bindHotelChoose($hotelplanId); //房安排autocomplete列表
            Transfer.setDate($hotelplanId); //时间控件
            var validate = rule.transferHotelCheck($hotelplanId);
            //change触发计算
            $hotelplanId.on('change', '.count, .price, .discount', function() {
                var $that = $(this);
                $Tr = $that.closest("tr");
                Transfer.calculation($Tr);
            });
            //关闭安排按钮
            $hotelplanId.find('.T-cancel').on('click', function() {
                Tools.closeTab(hotelplanId);
            });
            //保存房未安排事件
            $hotelplanId.find('.T-hotel-save').on('click', function() {
                if (!validate.form()) return;
                Transfer.submithotel($hotelplanId);
            });
            //新增房
            $hotelplanId.find('.T-add-hotel').on('click', function() {
                Transfer.addhotel($hotelplanId, validate);
            });

            //计划代收
            $hotelplanId.find('.T-hotel-plan').on('click', '.T-collection', function(event) {
                event.preventDefault();
                Transfer.planCollection($hotelplanId, $(this));
            }).on('click', '.T-arrange-delete', function() {
                Transfer.deleteHotelArrange($(this));
            });

            // 新增游客
            $hotelplanId.find('.T-add-HotelTransfersId').on('click', function() {
                var shuttleType = $hotelplanId.find('input[name=shuttleType]').val();
                Transfer.addHotelTransfer($hotelplanId, shuttleType);
            });

            //删除中转数据
            $hotelplanId.off('click').on('click', '.T-del-hotel', function() {
                var $that = $(this),
                    $tr = $that.closest('tr'),
                    outRemarkId = $tr.find('[name=outRemarkId]').val();
                var $taskListLen = $hotelplanId.find('.T-task-list').length;
                if ($taskListLen <= 1) {
                    $that.attr('disabled', 'disabled');
                } else {
                    $tr.remove();
                    var delHotelTransferData = {
                        outRemarkId: outRemarkId
                    }
                    Transfer.delHotelTransferId.push(delHotelTransferData);
                }

               //更新缓存数据
               Transfer.spliceColGroIteArr($hotelplanId, outRemarkId);
            });

        }
        /**
         * 增加房安排弹窗任务
         * @param {int} shuttleType 接送团标志 0：接团；1：送团
         * @param {int} status      安排状态： 0：未安排，1：已安排
         */
    Transfer.addHotelTransfer = function($hotelplanId, shuttleType) {
        var outRemarkId = $hotelplanId.find('[name=outRemarkId]');
        var selectedOutRemarkList = [];
        outRemarkId.each(function() {
            if ($(this).val().trim()) {
                var outRemarkIdData = {
                    outRemarkId: $(this).val()
                };
                selectedOutRemarkList.push(outRemarkIdData);
            }
        });
        shuttleType = shuttleType || 0;
        status = 0;
        var layerFrame = layer.open({
            type: 1,
            title: "选择游客",
            skin: 'layui-layer-rim', // 加上边框
            area: '1340px', // 宽高
            zIndex: 1028,
            content: addHotelTransferTemplate({
                shuttleType: shuttleType,
                status: status
            }),
            scrollbar: false, // 推荐禁用浏览器外部滚动条
            success: function(obj, event) {
                // var $frame = $(obj);
                // 初始化列表
                Transfer.addHotelTransferArray = [];

                // 绑定事件
                var $frame = $('#transfer-hotel-arrange-frame');
                Transfer.setDate($frame);
                // search
                $frame.find('.T-search').on('click', function(event) {
                    event.preventDefault();
                    Transfer._getAddHotelList($(this).closest('form'), 0, selectedOutRemarkList, shuttleType);
                }).trigger('click');

                // 添加
                $frame.find('.T-confirm').off('click').on('click', function(event) {
                    event.preventDefault();
                    //缓存选中的数据
                    var checkData = Transfer.installCheckDatashotel($frame);
                    // 添加游客列表
                    var htmlData = '';
                    for (var i = 0; i < checkData.length; i++) {
                        var hotelPlan = checkData[i];
                        var span = '';
                        var input = '';
                        if (hotelPlan.shuttleType == 1) {
                            span = '<span>接团</span>';
                            input = '<input name="shuttleType" value="1" type="hidden"/>';
                        } else if (hotelPlan.shuttleType == 2) {
                            span = '<span>送团</span>';
                            input = '<input name="shuttleType" value="2" type="hidden"/>';
                        } else if (hotelPlan.shuttleType == 3) {
                            span = '<span>返程住宿</span>';
                            input = '<input name="shuttleType" value="3" type="hidden"/>';
                        };
                        var htmlData = ' <tr class="T-task-list">' +
                            '<td class="h-touristGroupInfo">' +
                            '<input type="hidden" name="outRemarkId" value="' + (hotelPlan.id || "") + '">' +
                            '<p>中转单号：<span class="orderNumber">' + (hotelPlan.orderNumber || "") + '</span></p>' +
                            '<p><span><span class="lineProductName">&lt;' + (hotelPlan.lineProductName || "") + '&gt;</span></span></p>' +
                            '<p><span class="startTime">' + (hotelPlan.startTime || "") + '</span>' +
                            '<span class="partnerAgencyName">' + (hotelPlan.partnerAgencyName || "") + '</span>外联销售：' +
                            '<span class="outOPUserName">' + (hotelPlan.outOPUserName || "") + '</span></p>' +
                            '<p>收客单号：<span class="tgOrderNumber">' + (hotelPlan.tgOrderNumber || "") + '</span></p>' +
                            '</td>' +
                            '<td>' +
                            span +
                            input +
                            '</td>' +
                            '<td>' +
                            '<p><span cals="contactMemberName">' + (hotelPlan.contactMemberName || "") + '</span></p>' +
                            '<p>' +
                            '<span class="adultCount">' + (hotelPlan.adultCount || "") + '</span>大' +
                            '<span class="childCount">' + (hotelPlan.childCount || "") + '</span>小' +
                            '</p>' +
                            '<p><span class="contactMemberPhoneNumber">' + (hotelPlan.contactMemberPhoneNumber || "") + '</span></p>' +
                            '</td>' +
                            '<td><sapn class="checkInTime">' + (hotelPlan.checkInTime || "") + '</span></td>' +
                            '<td><sapn class="hotelLevel">' + (hotelPlan.hotelLevel || "") + '</span></td>' +
                            '<td><span class="roomCount">' + (hotelPlan.roomCount || "") + '</sapn></td>' +
                            '<td><span class="require">' + (hotelPlan.require || "") + '</span></td>' +
                            '<td><a class="cursor T-del-hotel" title="删除">删除</a></td>' +
                            '</tr>'


                        $hotelplanId.find('.T-hotelArrange').append(htmlData);
                    };

                    // 关闭对话框
                    layer.close(layerFrame);
                });

                // // 勾选
                $frame.find('.T-table-area').on('click', 'input[type="checkbox"]', function(event) {
                    var $that = $(this),
                        item = Transfer.addHotelTransferData[$that.index()];
                    // 缓存数据
                    if (this.checked) {
                        Transfer.addHotelTransferArray.push(item);
                    } else {
                        // 删除数据
                        for (var i = 0, len = Transfer.addHotelTransferArray.length; i < len; i++) {
                            if (item.id === Transfer.addHotelTransferArray[i].outRemarkId) {
                                Transfer.addHotelTransferArray.splice(i, 1);

                            }
                        }
                    }
                });
            }
        });
    };
    //缓存数据 
    Transfer.installCheckDatashotel = function($frame) {
        var $tr = $frame.find('.T-hotel-list').find('tr'); //找到所有的tr
        var installCheckDatahotel = [];
        $tr.each(function(i) {
            var $that = $(this),
                id = $that.attr('data-id');
            var selectFlag = $that.find('.T-cheked').is(':checked'); //判断是否勾选
            if (selectFlag) {
                var checkData = {
                    id: id,
                    shuttleType: $that.find('input[name=shuttleType]').val(),
                    orderNumber: $that.find('.orderNumber').text(),
                    lineProductName: $that.find('.lineProductName').text(),
                    startTime: $that.find('.startTime').text(),
                    partnerAgencyName: $that.find('.partnerAgencyName').text(),
                    adultCount: $that.find('.adultCount').text(),
                    childCount: $that.find('.childCount').text(),
                    outOPUserName: $that.find('.outOPUserName').text(),
                    require: $that.find('.require').text(),
                    tgOrderNumber: $that.find('.tgOrderNumber').text(),
                    contactMemberName: $that.find('.contactMemberName').text(),
                    contactMemberPhoneNumber: $that.find('.contactMemberPhoneNumber').text(),
                    checkInTime: $that.find('.checkInTime').text(),
                    hotelLevel: $that.find('.hotelLevel').text(),
                    roomCount: $that.find('.roomCount').text(),
                };
                installCheckDatahotel.push(checkData);
            }
        });
        return installCheckDatahotel;
    };

    //安排房保存
    Transfer.submithotel = function($hotelplanId) {
        var unifyId = $hotelplanId.find('[name=unifyId]').val();
        var shuttleType = $hotelplanId.find('[name=shuttleType]').val();
        var outHotelList = Tools.getTableVal($('#hotelplan_body'), 'id'), //车安排列表
            status = $hotelplanId.find('.T-finishedArrange').is(':checked') ? 1 : 0;

        outHotelList.forEach(function(item) {
            item.collectionList = JSON.parse(item.collectionList || '[]');
        });

        outHotelList = JSON.stringify(outHotelList);
        outRemarkList = [], //中转列表 Id
            $tr = $hotelplanId.find('.T-bus-plan tr'),
            outRemarkId = $hotelplanId.find('input[name=outRemarkId]');
        outRemarkId.each(function() {
            if ($(this).val().trim()) {
                var outRemarkJson = {
                    outRemarkId: $(this).val(),
                    shuttleType: shuttleType
                }
                outRemarkList.push(outRemarkJson);
            }
        })
        outRemarkList = JSON.stringify(outRemarkList);
        $.ajax({
            url: KingServices.build_url(service_name, "saveOutHotelUnifyArrange"),
            type: "POST",
            data: {
                unifyId: unifyId,
                status: status,
                outHotelList: outHotelList,
                outRemarkList: outRemarkList,
                deleteOutRemarkList: JSON.stringify(Transfer.delHotelTransferId),
                shuttleType: shuttleType,
                deleteOutHotelIds: Transfer.deleteOutHotelIds.join(','),
            },
            success: function(data) {
                if (showDialog(data)) {
                    showMessageDialog(data.message, function() {
                        Transfer.hotelArrangeIdArray = [];
                        Transfer._refreshList('hotel');
                        Tools.closeTab(hotelplanId);
                        Transfer.deleteOutHotelIds = [];
                    });
                }

            }
        })
    };
    /**
     * 酒店autocomplete
     * @param  {[type]} tab       [容器]
     * @param  {[type]} validator [description]
     * @return {[type]}           [description]
     */
    Transfer.bindHotelChoose = function($hotelplanId) {
        var hotelChoose = $hotelplanId.find('.T-chooseHotel');
        var $hotelStar = $hotelplanId.find(".tripPlanHotelStar");
        $hotelStar.off().on("change", function() {
            var parentObj = $(this).closest('tr');
            parentObj.find("input[name=hotelName]").val("");
            parentObj.find("input[name=hotelId]").val("");
            parentObj.find("input[name=hotelRoomType]").val("");
            parentObj.find("input[name=hotelRoomId]").val("");
            parentObj.find("input[name=hotelMobileNumber]").val("");
            parentObj.find("input[name=hotelManagerName]").val("");
            parentObj.find("input[name=price]").val("");
        });
        //酒店选择
        hotelChoose.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (ui.item == null) {
                    $(this).val("");
                    var parents = $(this).closest('tr');
                    parents.find("input[name=hotelId]").val("");
                    parents.find("input[name=hotelRoomType]").val("");
                    parents.find("input[name=hotelRoomId]").val("");
                    parents.find("input[name=hotelMobileNumber]").val("");
                    parents.find("input[name=hotelManagerName]").val("");
                    parents.find("input[name=price]").val("");
                }
            },
            select: function(event, ui) {
                var _this = this,
                    parents = $(_this).closest('tr');
                parents.find("input[name=hotelId]").val(ui.item.id).trigger('change');
                $.ajax({
                    url: KingServices.build_url("hotel", "getHotelById"),
                    showLoading: false,
                    data: "id=" + ui.item.id,
                    success: function(data) {
                        if (showDialog(data)) {
                            parents.find("input[name=hotelMobileNumber]").val(data.hotel.mobileNumber);
                            parents.find("input[name=hotelManagerName]").val(data.hotel.managerName);
                            parents.find("select[name=hotelLevel]").val(data.hotel.level);
                            parents.find("input[name=hotelRoomType]").val("");
                            parents.find("input[name=hotelRoomId]").val("");
                        }
                    }
                });
            }
        }).off("click").on("click", function() {
            var hotelStarValue = $hotelStar.val(),
                hotelStarValue = $(this).closest('tr').find('.tripPlanHotelStar').val();
            obj = this;
            $.ajax({
                url: KingServices.build_url('hotel', 'findHotelListByLevel'),
                showLoading: false,
                data: "level=" + hotelStarValue,
                success: function(data) {
                    if (showDialog(data)) {
                        var hotelList = JSON.parse(data.hotelList);
                        if (hotelList && hotelList.length > 0) {
                            for (var i = 0; i < hotelList.length; i++) {
                                hotelList[i].value = hotelList[i].name;
                            }
                            $(obj).autocomplete('option', 'source', hotelList);
                            $(obj).autocomplete('search', '');
                        } else {
                            layer.tips('没有酒店可供选择', obj, {
                                tips: [1, '#3595CC'],
                                time: 2000
                            });
                        }
                    }
                }
            });
        });
        //房型选择
        $hotelplanId.find("[name=hotelRoomType]").autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (ui.item == null) {
                    $(this).val("");
                    var objParent = $(this).closest('tr');
                    objParent.find("input[name=hotelRoomId]").val("");
                    objParent.find("input[name=price]").val("");
                }
            },
            select: function(event, ui) {
                var $thisRoom = $(this).closest('tr');
                $thisRoom.find("input[name=hotelRoomId]").val(ui.item.id).trigger('change');
                var startTime = $thisRoom.find("input[name=checkInTime]").val();
                $.ajax({
                    url: KingServices.build_url('hotel', 'findRoomDetailById'),
                    showLoading: false,
                    data: "id=" + ui.item.id + "&startTime=" + startTime,
                    success: function(data) {
                        if (showDialog(data)) {
                            var hotelRoom = JSON.parse(data.hotelRoom);
                            $thisRoom.find("input[name=price]").val(hotelRoom.normalInnerPrice).trigger('change');
                        }
                    }
                })
            }
        }).off("click").on("click", function() {
            var _this = $(this),
                $parents = _this.closest('tr'),
                id = $parents.find('input[name=hotelId]').val();
            if (!!id) {
                $.ajax({
                    url: KingServices.build_url('hotel', 'findTypeByHotelId'),
                    showLoading: false,
                    data: "id=" + id,
                    success: function(data) {
                        if (showDialog(data)) {
                            var hotelRommList = JSON.parse(data.hotelRommList);
                            if (hotelRommList && hotelRommList.length > 0) {
                                for (var i = 0; i < hotelRommList.length; i++) {
                                    hotelRommList[i].value = hotelRommList[i].type;
                                }
                                $(_this).autocomplete('option', 'source', hotelRommList);
                                $(_this).autocomplete('search', '');
                            } else {
                                layer.tips('没有房型可供选择', _this, {
                                    tips: [1, '#3595CC'],
                                    time: 2000
                                });
                            }
                        }
                    }
                });
            } else {
                layer.tips('请选择酒店', _this, {
                    tips: [1, '#3595CC'],
                    time: 2000
                });
            }
        });
    };

    /**
     * 安排其他
     * @param  {object} $arrange 安排按钮
     * @return {[type]}          [description]
     */
    Transfer._arrangeOther = function($arrange) {
        var id = $arrange.closest('tr').data('id');

        if (!!id) {
            $.ajax({
                url: KingServices.build_url(service_name, "getOutOtherArrange"),
                type: "POST",
                data: {
                    id: id
                },
                success: function(data) {
                    if (showDialog(data)) {
                        var tab_key = tabKey + '_other';
                        if (Tools.addTab(tab_key, '其他安排', OtherArrangeTemplate(data))) {
                            Transfer._initOtherArrange($('#tab-' + tab_key + '-content')); 
                        }
                    }
                }
            });
        }
    };

    /**
     * 车查看
     * @param  {object} args 安排ID
     * @return {[type]}    [description]
     */
    Transfer._viewBus = function(args) {
        $.ajax({
            url: KingServices.build_url(service_name, "getOutBusArrange"),
            type: "POST",
            data: args,
            success: function(data) {
                if (showDialog(data)) {
                    var html = ViewBusTemplate(data);
                    var viewBusTabId = "tab-viewBus-content";
                    addTab(viewBusTabId, '车查看', html);
                    Transfer._viewPlanCollection($('#tab-'+viewBusTabId+'-content'));
                }
            }
        });
    };

    //车查看代收
     Transfer._viewPlanCollection = function ($tab) {
        $tab.find('.T-bus-plan').on('click', '.T-collection', function(event) {
            event.preventDefault();
            Transfer.planCollection($tab, $(this), 'view');
        });
        $tab.find('.T-hotel-plan').on('click', '.T-collection', function(event) {
            event.preventDefault();
            Transfer.planCollection($tab, $(this), 'view');
        }) 
     } 

    /**
     * 房查看
     * @param  {object} args 安排ID
     * @return {[type]}    [description]
     */
    Transfer._viewHotel = function(args) {
        $.ajax({
            url: KingServices.build_url(service_name, "getOutHotelArrange"),
            type: "POST",
            data: args,
            success: function(data) {
                if (showDialog(data)) {
                    var html = ViewHotelTemplate(data);
                    var viewHotelTabId = "tab-viewBus-content";
                    addTab(viewHotelTabId, '房查看', html);
                    Transfer._viewPlanCollection($('#tab-'+viewHotelTabId+'-content'));
                }
            }
        });
    };
    /**
     * 其他查看
     * @param  {int} id 安排ID
     * @return {[type]}    [description]
     */
    Transfer._viewOther = function(id) {
        if (!id) {
            console.info('其他安排为空，无法查看具体信息');
        }

        $.ajax({
                url: KingServices.build_url(service_name, 'getOutOtherArrange'),
                type: 'get',
                dataType: 'json',
                data: { id: id },
            })
            .done(function(res) {
                if (showDialog(res)) {
                    var tab_key = tabKey + '_view_other';

                    if (Tools.addTab(tab_key, '查看其他安排', ViewOtherTemplate(res))) {
                        $('#tab-' + tab_key + '-content').find('.T-close').on('click', function(event) {
                            event.preventDefault();

                            Tools.closeTab(tab_key);
                        });
                    }
                }
            });
    };

    /**
     * 初始化安排事件
     * @param  {object} $tab 安排tab
     * @return {[type]}      [description]
     */
    Transfer._initOtherArrange = function($tab) {
            Transfer.setDate($tab);
            Transfer.addResource($tab);
            var validate = rule.transferOtherCheck($tab);
            // 绑定安排完成的选择
            $tab.find('#myTab_transitArrange').on('click', 'a', function(event) {
                event.preventDefault();
                $tab.find('[data-target="' + $(this).attr('href') + '"]').removeClass('hidden').siblings('.checkbox').addClass('hidden');
            }).find('a').eq(0).trigger('click');

            // 添加安排
            $tab.find('.tab-content').on('click', '.T-add', function(event) {
                    event.preventDefault();

                    var $that = $(this),
                        $tbody = $that.closest('.T-tab-pane').find('tbody');

                    if ($that.hasClass('T-restaurant')) {
                        // 添加酒店
                        Transfer.addRestaurant($tbody, validate);
                    } else if ($that.hasClass('T-ticket')) {
                        // 添加票务
                        Transfer.addTicket($tbody, validate);
                    } else if ($that.hasClass('T-other')) {
                        // 添加其他
                        Transfer.addOther($tbody, validate);
                    }
                })
                .on('click', '.T-autocomplete-input', function(event) {
                    event.preventDefault();
                    var $that = $(this);

                    if ($that.hasClass('ui-autocomplete-input')) return;

                    if ($that.hasClass('T-chooseRestaurant')) {
                        // 餐厅选项
                        Transfer.setRestaurantList($that);
                    } else if ($that.hasClass('T-chooseTicket')) {
                        // 票务选项
                        Transfer.setTicketChoose($that);
                    }

                    $that.trigger('click');
                })
                .on('click', '.T-restaurant-del', function(event) {
                    event.preventDefault();
                    // 删除餐
                    Transfer.deleteRestaurant($(this));
                })
                .on('click', '.T-ticket-del', function(event) {
                    event.preventDefault();
                    // 删除票
                    Transfer.deleteTicket($(this));
                })
                .on('click', '.T-Other-del', function(event) {
                    event.preventDefault();
                    // 删除它
                    Transfer.deleteOther($(this));
                })
                .on('change', '[name="price"], [name="memberCount"], [name="reduceMoney"], [name="reduceMoney"]', function(event) {
                    event.preventDefault();

                    Transfer.calculation($(this).closest('tr'));
                });

            $tab.on('click', '.T-submit', function(event) {
                event.preventDefault();
                if (!validate.form()) return;
                Transfer.otherSubmit($tab);
            }).
            on('click', '.T-cancel', function() {
                var tab = tabKey + '_other';
                //关闭其他安排
                Tools.closeTab(tab);
            });
        }
        //添加车安排
    Transfer.addbus = function($obj, validate) {
        var html = '<tr data-entity-id="">' +
            '<td><div class="col-sm-12"><input type="hidden" name="serviceType" value="" /><input type="hidden" name="busId" value="" />' +
            '<input class="col-sm-12 bind-change T-busCompanyName" name="busCompanyName"  type="text" value="" />' +
            '<input type="hidden" name="busCompanyId" value="" /><span class="addResourceBtn T-addBusCompanyResource R-right" data-right="1020002" title="添加车队"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
            '<td><input type="text" class="col-sm-12 T-chooseSeatCount" name="seatCount" value="" /></td>' +
            '<td><input class="col-sm-12 T-chooseBusBrand" name="brand" type="text" value="" /></td>' +
            '<td><div class="col-sm-12"><input class="col-sm-12 T-chooseBusLicenseNumber bind-change" name="licenseNumber" type="text" value="" /><input type="hidden" name="busLicenseNumberId" value="" /><span class="addResourceBtn T-addBusResource R-right" data-right="1020002" title="添加车辆"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
            '<td><div class="col-sm-12"><input class="col-sm-12 T-chooseDriver bind-change" name="driverName" type="text" value="" /><input type="hidden" name="driverId" value="" /><span class="addResourceBtn T-addDriverResource R-right" data-right="1020002" title="添加司机"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
            '<td><input class="col-sm-12" name="MobileNumber" readonly="readonly" type="text" value="" /></td>' +
            '<td><input class="col-sm-12  T-dateTimePicker" name="useTime" type="text" value="" /></td>' +
            '<td><input class="col-sm-12" name="boardLocation" type="text"  maxlength="20"  value="" /></td>' +
            '<td><input class="col-sm-12" name="destination" type="text" maxlength="20" value="" /></td>' +
            '<td><input class="col-sm-12 T-number price F-float F-money" name="fee" type="text"  maxlength="9" value="" /><input type="hidden" class="count" value="1" /></td>' +
            '<td><input class="col-sm-12 T-number discount F-float F-count" name="reduceMoney"  maxlength="9" type="text" value="" /></td>' +
            '<td><input class="col-sm-12 needPay F-float F-money" readonly="readonly" name="needPayMoney"  maxlength="9" type="text" value="" /></td>' +
            '<td><input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" maxlength="9" type="text" value="" /></td>' +
            '<td><input class="col-sm-12 T-collection F-float F-money" type="text" data-type="bus" name="collection" readonly> <input type="hidden" name="collectionList"  value=""></td>' +
            '<td><input class="col-sm-12" name="remark" type="text" value="" maxlength="1000" /></td>' +
            '<td>--</td>' +
            '<td><a class="cursor T-arrange-delete" data-catename="bus" title="删除">删除</a></td>' +
            '</tr>';
        var $tbody = $obj.find('.T-bus-plan');
        $tbody.append(html);
        Transfer.addResource($obj); //车安排弹窗
        Transfer.bindBusCompanyChoose($obj); //车安排autocomplete列表
        Transfer.setDate($obj); //时间控件
        //校验
        rule.transferBusUpdate(validate);
    };
    //添加房安排
    Transfer.addhotel = function($obj, validate) {
        var html = '<tr>' +
            '<td>' +
            '<input class="col-sm-12 T-datePicker datepicker" name="checkInTime" value="" type="text" /></td>' +
            '<td><input class="col-sm-12 T-datePicker datepicker" name="checkOutTime" value="" type="text" /></td>' +
            '<td><select class="tripPlanHotelStar" name="hotelLevel">' +
            '<option  selected="selected" value="" {{if outHotel.hotel.level == 0}}selected="selected"{{/if}}>--全部--</option><option value="1">三星以下</option>' +
            '<option value="2">三星</option><option value="3">准四星</option>' +
            '<option value="4">四星</option><option value="5">准五星</option>' +
            '<option value="6">五星</option><option value="7">五星以上</option></select></td>' +
            '<td><div class="col-sm-12"><input class="col-sm-12 T-chooseHotel" name="hotelName" value="" type="text" /><input type="hidden" name="hotelId" value=""/>' +
            '<span class="addResourceBtn T-addHotelResource R-right" data-right="1040002" title="添加酒店"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
            '<td><input class="col-sm-12" name="hotelManagerName" value="" readonly="readonly" type="text" /></td>' +
            '<td><input class="col-sm-12" name="hotelMobileNumber" value="" readonly="readonly" type="text" /></td>' +
            '<td><input class="col-sm-12" name="hotelRoomType" value=""  type="text" /><input type="hidden" name="hotelRoomId" value=""/></td>' +
            '<td><input class="col-sm-12 T-number price F-float F-money" name="price" value="" maxlength="9" type="text" /></td>' +
            '<td><input class="col-sm-12 count F-float F-count" name="memberCount"  maxlength="6" value="" type="text" /></td>' +
            '<td><input class="col-sm-12 T-number discount F-float F-money" name="reduceMoney"  maxlength="9" value="" type="text" /></td>' +
            '<td><input class="col-sm-12 needPay F-float F-money" readonly="readonly" name="needPayMoney" value="" type="text" /></td>' +
            '<td><input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" value="" type="text" maxlength="9" /></td>' +
            '<td><input class="col-sm-12 T-collection F-float F-money" type="text" name="collection" readonly ><input type="hidden" name="collectionList"  value=""></td>' +
            '<td><input class="col-sm-12" name="remark" type="text" value="" maxlength="1000" /></td>' +
            '<td>--</td>' +
            '<td><a class="cursor T-arrange-delete" data-catename="hotel" title="删除">删除</a></td>' +
            '</tr>';
        var $tbody = $obj.find('.T-hotel-plan');
        $tbody.append(html);
        Transfer.addResource($obj); //房安排弹窗
        Transfer.bindHotelChoose($obj); //房安排autocomplete列表
        Transfer.setDate($obj); //时间控件
        //校验
        rule.transferHotelUpdate(validate);
    };

    Transfer.addRestaurant = function($tbody, validate) {
        var html = '<tr data-entity-id="">' +
            '<td><input class="col-sm-12 T-datePicker datepicker" name="startTime" type="text" value="" /></td>' +
            '<td><div class="col-sm-12"><input type="hidden" name="serviceType" value="0" /><input class="col-sm-12 bind-change T-autocomplete-input T-chooseRestaurant" name="restaurant" type="text" value="" />' +
            '<input type="hidden" name="restaurantId" value="" />' +
            '<span class="addResourceBtn T-addRestaurantResource R-right" data-right="1030002" title="添加餐厅">' +
            '<i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
            '<td><input class="col-sm-11" name="manager" readonly="readonly" type="text" value="" /></td>' +
            '<td><input class="col-sm-12" name="mobileNumber" readonly="readonly" type="text" value="" /></td>' +
            '<td><select name="standardType"><option value="早餐">早餐</option><option value="午餐">午餐</option><option value="晚餐">晚餐</option></select>' +
            '</td><td><input class="col-sm-12 T-chooseStandard price F-float F-money" name="price" type="text" value="" maxlength="9" />' +
            '</td><td><input class="col-sm-12 count F-float F-count" name="memberCount" maxlength="6" type="text" value="" /></td>' +
            '<td><input class="col-sm-12 T-number discount F-float F-money" name="reduceMoney" maxlength="9" type="text" value="" /></td>' +
            '<td><input class="col-sm-12 T-number needPay F-float F-money" name="needPayMoney" readonly="readonly" type="text" value="" /></td>' +
            '<td><input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" maxlength="9"  type="text" value="" /></td>' +
            '<td><input class="col-sm-12" name="remark" type="text" value="" maxlength="1000" /></td>' +
            '<td>--</td>' +
            '<td><a class="cursor T-arrange-delete" data-catename="restaurant" title="删除">删除</a></td>' +
            '</tr>',
            $line = filterUnAuth(html);
        $tbody.append($line);
        Transfer.addResource($line);
        Transfer.setDate($line);
        //删除餐
        $tbody.find('.T-arrange-delete').on('click', function() {
            Transfer.deleteRestaurant($(this));
        });
        //校验
        rule.transferOtherUpdate(validate);
    };
    Transfer.addTicket = function($tbody, validate) {
        var html = '<tr>' +
            '<td><div class="col-sm-12"><input class="col-sm-12 T-autocomplete-input T-chooseTicket" name="ticketName" value="" type="text" /><input type="hidden" name="ticketId" />' +
            '<span class="addResourceBtn T-addTicketResource R-right" data-right="1070002" title="添加票务"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
            '<td><select class="" name="type"><option value="1">机票</option>' +
            '<option value="2">汽车票</option><option value="3">火车票</option><option value="4">轮船票</option></select></td>' +
            '<td><input class="col-sm-12" name="startingCity" value="" maxlength="20"  type="text" /></td>' +
            '<td><input class="col-sm-12" name="arriveCity" value="" maxlength="20"  type="text" /></td>' +
            '<td><input class="col-sm-12 T-dateTimePicker" name="startTime" value="" type="text" /></td>' +
            '<td><input class="col-sm-12" name="shift" value=""  maxlength="20"  type="text" /></td>' +
            '<td><input class="col-sm-12" name="seatLevel"  maxlength="20"  value="" type="text" />' +
            '<td><input class="col-sm-12 T-number price F-float F-money" name="price"  maxlength="9"  value="" type="text" /></td>' +
            '<td><input class="col-sm-12 count F-float F-count" name="memberCount"  maxlength="6"  value="" type="text" /></td>' +
            '<td><input class="col-sm-12 T-number discount F-float F-money" name="reduceMoney" value=""  maxlength="9"  type="text" /></td>' +
            '<td><input class="col-sm-12 needPay F-float F-money" readonly="readonly" name="needPayMoney" value="" type="text" /></td>' +
            '<td><input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" value=""  maxlength="9"  type="text" /></td>' +
            '<td><input class="col-sm-12" name="remark" type="text" value="" maxlength="1000" /></td>' +
            '<td>--</td>' +
            '<td><a class="cursor T-arrange-delete" data-catename="ticket" title="删除">删除</a></td>' +
            '</tr>';

        $line = filterUnAuth(html);
        $tbody.append($line);
        Transfer.addResource($line);
        Transfer.setDate($line);
        //删除票务
        $tbody.find('.T-arrange-delete').on('click', function() {
            Transfer.deleteTicket($(this));
        });
        //校验
        rule.transferOtherUpdate(validate);
    };
    Transfer.addOther = function($tbody, validate) {
        var html = '<tr data-entity-id="">' +
            '<td><input class="col-sm-12 T-datePicker datepicker" name="startTime" type="text" value="" /></td>' +
            '<td><input class="col-sm-12" name="name" type="text" value="" maxlength="30" /></td>' +
            '<td><input class="col-sm-12" name="managerName" type="text" value="" maxlength="20" /></td>' +
            '<td><input class="col-sm-12" name="mobileNumber" type="text" maxlength="11" value="" /></td>' +
            '<td><input class="col-sm-12 price F-float F-money" name="price" type="text" maxlength="9" value="" /></td>' +
            '<td><input class="col-sm-12 count F-float F-count" name="memberCount" type="text" maxlength="9" value="" /></td>' +
            '<td><input class="col-sm-12 T-number discount F-float F-money" name="reduceMoney" type="text" maxlength="9" value="" /></td>' +
            '<td><input class="col-sm-12 T-number needPay F-float F-money" name="needPayMoney" readonly="readonly" type="text" value="" /></td>' +
            '<td><input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" type="text" maxlength="9" value="" /></td>' +
            '<td><input class="col-sm-12" name="remark" type="text" value="" maxlength="1000"/></td>' +
            '<td>--</td>' +
            '<td><a class="cursor T-arrange-delete" data-catename="other" title="删除">删除</a></td>' +
            '</tr>';

        $line = filterUnAuth(html);
        $tbody.append($line);
        Transfer.setDate($line);
        //删除其他
        $tbody.find('.T-arrange-delete').on('click', function() {
            Transfer.deleteOther($(this));
        });
        rule.transferOtherUpdate(validate);
    };

    /**
     * 保存——其他安排
     * @param  {object} $tab 顶层元素
     * @return {[type]}      [description]
     */
    Transfer.otherSubmit = function($tab) {
        var args = {},
            data;

        data = Tools.getTableVal($tab.find('#restaurant_body'), 'entity-id');
        if (!!data) {
            args.outRestaurantList = JSON.stringify(data);
        }
        data = Tools.getTableVal($tab.find('#ticket_body'), 'entity-id');
        if (!!data) {
            args.outTicketList = JSON.stringify(data);
        }
        data = Tools.getTableVal($tab.find('#other_body'), 'entity-id');
        if (!!data) {
            args.outOtherList = JSON.stringify(data);
        }

        $tab.find('.T-finishedArrange').each(function(index, el) {
            var $that = $(this);
            args[$that.prop('name')] = $that.prop('checked') ? 3 : 1;
        });

        args.outRemarkId = $tab.find('input[name="outRemarkId"]').val();

        args.deleteOutRestaurantIds = Transfer.deleteOutRestaurantIds.join(',');

        args.deleteOutTicketIds = Transfer.deleteOutTicketIds.join(',');

        args.deleteOutOtherIds = Transfer.deleteOutOtherIds.join(',');

        $.ajax({
                url: KingServices.build_url(service_name, 'saveOutOtherArrange'),
                type: 'post',
                dataType: 'json',
                data: args
            })
            .done(function(res) {
                if (showDialog(res)) {
                    // 刷新其他的安排列表
                    showMessageDialog(res.message, function() {
                        Tools.closeTab(Tools.getTabKey($tab.prop('id')));
                        Transfer._refreshList('other');
                    });
                    Transfer.deleteOutRestaurantIds = [];
                    Transfer.deleteOutTicketIds = [];
                    Transfer.deleteOutOtherIds = [];
                }
            });

    };
    /**
     * 计划代收
     * @param  {object} $obj 删除按钮
     * @return {[type]}      [description]
     */
    Transfer.planCollection = function($tab, $that, isView) {
            var idList = [], //中转列表 Id
                outRemarkId = $tab.find('.T-arrange').find('input[name=outRemarkId]'),
                $tr = $that.closest('tr'),
                arrangeId = $tr.attr('data-entity-id'),
                subject = $that.attr("data-type")=="bus" ? 0 : 1,
                isConfirmAccount = $that.attr('data-isConfirmAccount');
            outRemarkId.each(function() {
                if ($(this).val().trim()) {
                    idList.push($(this).val());
                }
            });

            $.ajax({
                url: KingServices.build_url(service_name, "getCollectionList"),
                type: "POST",
                data: {
                    outRemarkIds: idList.join(','),
                    arrangeId: arrangeId,
                    subject: subject
                },
                success: function(data) {
                    if (showDialog(data)) {
                        data.isConfirmAccount = isConfirmAccount;
                        data.isView = isView;
                        var colGroItemList = $that.data('collectGroItemList');
                        if (!!colGroItemList && colGroItemList.length > 0 ) {
                            for (var i = 0; i <  colGroItemList.length; i++) {
                                data.collectionList[i].collectionGroup = colGroItemList[i].collectionGroup;
                                data.collectionList[i].collectionItem = colGroItemList[i].collectionItem;
                            };
                        }
                        var html = planCollectionTemplate(data);
                        var _Title = '编辑计划代收';
                        if (!!isView) {
                            _Title = '查看计划代收';
                        };
                       
                        layer.open({
                            type: 1,
                            title: _Title,
                            skin: 'layui-layer-rim',
                            area: '1200px',
                            zIndex: 1028,
                            content: html,
                            scrollbar: false,
                            success: function(obj, index) {
                                var $LayerId = $(obj);
                                //save
                                $LayerId.on('click','.T-btn-save',function(){
                                    var collection  = $LayerId.find('input[name=collection]'),
                                        collectionList = [],
                                        collectGroItemList = [],
                                        count = 0,
                                        $layerTr = $LayerId.find('#T-transfer-bus').children('tr');
                                    $layerTr.each(function(index) {
                                        var $that = $(this),
                                            collectionGroup=$layerTr.eq(index).find('[name=collectionGroup]').val()*1 || 0,
                                            collectionItem=$layerTr.eq(index).find('[name=collectionItem]').val()*1 || 0,
                                            planCollection = {
                                                id : $that.attr("id"),
                                                touristGroupId : $that.attr("touristGroupId"),
                                                collectionGroup : collectionGroup,
                                                collectionItem : collectionItem
                                            },
                                            collectGroItemJson = {
                                                collectionGroup : collectionGroup,
                                                collectionItem : collectionItem ,
                                                outRemarkId : ''
                                            };
                                         count+=collectionGroup;
                                        count+=collectionItem;
                                        collectionList.push(planCollection);

                                        collectGroItemList.push(collectGroItemJson);

                                        //设置安排Id
                                        if (!!collectGroItemList && collectGroItemList.length > 0 && !!idList && idList.length>0) {
                                            for (var i = 0; i < collectGroItemList.length; i++) {
                                                collectGroItemList[i].outRemarkId = idList[i];
                                            };
                                        }

                                    });
                                    $tr.find('[name=collectionList]').val(JSON.stringify(collectionList));//代收信息
                                    $that.val(count); //代收金额合计
                                    $that.data('collectGroItemList', collectGroItemList);//存储代收费用信息
                                    layer.close(index);
                                   
                                })

                                //layer-close
                                $LayerId.on('click','.T-btn-close',function(){
                                    layer.close(index);
                                });
                            }
                        });

                    }
                }
            })
        }
    Transfer.deleteBusArrange = function($obj) {
        var $tr = $obj.closest('tr'),
            id = $tr.data('entity-id');
        $tr.fadeOut(function() {
            $obj.parents('tr').remove()
        })
        Transfer.deleteOutBusIds.push(id);
    };
    /**
     * 删除房安排
     * @param  {object} $obj 删除按钮
     * @return {[type]}      [description]
     */
    Transfer.deleteHotelArrange = function($obj) {
        var $tr = $obj.closest('tr'),
            id = $tr.data('entity-id');
        $tr.fadeOut(function() {
            $obj.parents('tr').remove()
        })
        Transfer.deleteOutHotelIds.push(id);
    };
    /**
     * 删除餐安排
     * @param  {object} $obj 删除按钮
     * @return {[type]}      [description]
     */
    Transfer.deleteRestaurant = function($obj) {
        var $tr = $obj.closest('tr'),
            id = $tr.data('entity-id');
        $tr.fadeOut(function() {
            $obj.parents('tr').remove()
        })
        Transfer.deleteOutRestaurantIds.push(id);
    };
    /**
     * 删除票安排
     * @param  {object} $obj 删除按钮
     * @return {[type]}      [description]
     */
    Transfer.deleteTicket = function($obj) {
        var $tr = $obj.closest('tr'),
            id = $tr.data('entity-id');
        $tr.fadeOut(function() {
            $obj.parents('tr').remove()
        })
        Transfer.deleteOutTicketIds.push(id);
    };
    /**
     * 删除它安排
     * @param  {object} $obj 删除按钮
     * @return {[type]}      [description]
     */
    Transfer.deleteOther = function($obj) {
        var $tr = $obj.closest('tr'),
            id = $tr.data('entity-id');
        $tr.fadeOut(function() {
            $obj.parents('tr').remove()
        })
        Transfer.deleteOutOtherIds.push(id);
    };
    Transfer.setDate = function($container) {
        // 绑定日期
        Tools.setDatePicker($container.find('.T-datePicker'));

        $container.find('.T-dateTimePicker').datetimepicker({
            autoclose: true,
            todayHighlight: true,
            format: 'L',
            language: 'zh-CN',
            maxView: 3
        });
    };

    /**
     * 餐厅选择项
     * @param {object} $feild 餐厅输入框
     */
    Transfer.setRestaurantList = function($feild) {
        if ($feild.length) {
            var $tr = $feild.closest('tr'),
                restaurantChoose = $tr.find(".T-chooseRestaurant"),
                standardChoose = $tr.find(".T-chooseStandard"),
                standardType = $tr.find("select[name=standardType]");
            standardType.off("change").on("change", function() {
                var parents = $(this).closest('tr');
                parents.find("input[name=restaurantStandardId]").val("");
                // Transfer.calculation($(this));
            });
            //餐厅选择
            $feild.autocomplete({
                minLength: 0,
                select: function(event, ui) {
                    var _this = this,
                        parents = $(_this).closest('tr');
                    parents.find("input[name=restaurantId]").val(ui.item.id);
                    $.ajax({
                        url: KingServices.build_url('restaurant', 'findRestaurantById'),
                        showLoading: false,
                        data: "id=" + ui.item.id,
                        success: function(data) {
                            if (showDialog(data)) {
                                var restaurant = JSON.parse(data.restaurant);
                                parents.find("input[name=mobileNumber]").val(restaurant.mobileNumber);
                                parents.find("input[name=manager]").val(restaurant.managerName);
                                parents.find("input[name=price]").val(0);
                                parents.find("input[name=restaurantStandardId]").val(0);
                                // Transfer.calculation($(_this));
                            }
                        }
                    });

                },
                change: function(event, ui) {
                    if (ui.item == null) {
                        $(this).val("");
                        var parents = $(this).closest('tr');
                        parents.find("input[name=restaurantId]").val("");
                        parents.find("input[name=manager]").val("");
                        parents.find("input[name=mobileNumber]").val("");
                        parents.find("input[name=restaurantStandardId]").val("");
                        parents.find("input[name=price]").val("");
                    }
                }
            }).off("click").on("click", function() {
                var obj = this;
                $.ajax({
                    url: KingServices.build_url('restaurant', 'findAll'),
                    showLoading: false,
                    success: function(data) {
                        if (showDialog(data)) {
                            var restaurantList = JSON.parse(data.restaurantList);
                            if (restaurantList && restaurantList.length > 0) {
                                for (var i = 0; i < restaurantList.length; i++) {
                                    restaurantList[i].value = restaurantList[i].name;
                                }
                            }
                            $(obj).autocomplete('option', 'source', restaurantList);
                            $(obj).autocomplete('search', '');
                        }
                    }
                });
            });
            //餐标
            standardChoose.autocomplete({
                minLength: 0,
                select: function(event, ui) {
                    var standardId = ui.item.id;
                    var _this = $(this);

                    $(this).closest('tr').find("input[name=price]").val(ui.item.price);
                    $(this).closest('tr').find("input[name=price]").focus();
                    $(this).closest('tr').find("input[name=price]").blur();

                },
                // change: function(event, ui) {
                //     if (ui.item == null) {
                //         var objParent = $(this).closest('tr');
                //         objParent.find("input[name=price]").val("");
                //     };
                //     Transfer.calculation($(this));
                // }
            }).off("click").on("click", function() {
                var obj = this,
                    parents = $(obj).closest('tr');
                var id = parents.find("input[name=restaurantId]").val();
                var type = parents.find('select[name=standardType]').val();
                if (id && id.length > 0) {
                    $.ajax({
                        url: KingServices.build_url('restaurant', 'getRestaurantStandardByType'),
                        showLoading: false,
                        data: "restaurantId=" + id + "&type=" + type,
                        success: function(data) {
                            if (showDialog(data)) {
                                var restaurantStandardList = data.restaurantStandardList;
                                if (restaurantStandardList && restaurantStandardList.length > 0) {
                                    for (var i = 0; i < restaurantStandardList.length; i++) {
                                        restaurantStandardList[i].value = restaurantStandardList[i].price;
                                    }
                                    $(obj).autocomplete('option', 'source', restaurantStandardList);
                                    $(obj).autocomplete('search', '');
                                } else {
                                    layer.tips('没有内容。', obj, {
                                        tips: [1, '#3595CC'],
                                        time: 2000
                                    });
                                }
                            }
                        }
                    });
                } else {
                    layer.tips('请选择餐厅', _this, {
                        tips: [1, '#3595CC'],
                        time: 2000
                    });
                }
            });
        }
    }

    Transfer.setTicketChoose = function($feild) {
        if (!$feild.length) {
            console.info('组织票务选项失败：选择框不存在')
            return;
        }

        $feild.autocomplete({
            minLength: 0,
            select: function(event, ui) {
                var _this = this;
                var thisParent = $(_this).closest('tr');
                thisParent.find("input[name=ticketId]").val(ui.item.id).trigger('change');
                // var validator = rule.setTranistCheckor($(".arrangeTouristMain"));
                // rule.update(validator);
            },
            change: function(event, ui) {
                if (ui.item == null) {
                    $(this).val("");
                    var thisParent = $(this).closest('tr');
                    thisParent.find("input[name=ticketId]").val("").trigger('change');
                }
            }
        }).off("click").on("click", function() {
            var obj = this;
            $.ajax({
                url: KingServices.build_url('ticket', 'findAll'),
                showLoading: false,
                success: function(data) {
                    if (showDialog(data)) {
                        var ticketList = JSON.parse(data.ticketList);
                        if (ticketList && ticketList.length > 0) {
                            for (var i = 0; i < ticketList.length; i++) {
                                ticketList[i].value = ticketList[i].name;
                            }
                            $(obj).autocomplete('option', 'source', ticketList);
                            $(obj).autocomplete('search', '');
                        } else {
                            layer.tips('没有内容。', obj, {
                                tips: [1, '#3595CC'],
                                time: 2000
                            });
                        }
                    }
                }
            });
        });
    };

    //计算
    Transfer.calculation = function($obj) {
        var count = $obj.find(".count").val() || 0,
            price = $obj.find(".price").val() || 0,
            discount = $obj.find(".discount").val() || 0,
            needPay = (count * price) - discount;
        $obj.find(".needPay").val(needPay);
    };

    return Transfer;
});
