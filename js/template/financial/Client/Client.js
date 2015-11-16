define(function(require, exports) {
	var rule = require("./rule"),
        menuKey = "financial_Client",
        listTemplate = require("./view/list"),
        ClientChecking = require("./view/ClientChecking"),
        ClientClearing = require("./view/ClientClearing"),
        recordTemplate = require("./view/record"),
        ClientCheckTab = "financial_Client-checking",
        ClientClearTab = "financial_Client-clearing",
        tabId = "tab-"+menuKey+"-content",
        travelAgencyList,
        partnerAgencyList,
        validator;
    
    var Client = {
		searchData: false,
        $tab: false,
        $searchArea: false,
        $checkSearchArea: false,
        $clearSearchArea : false,
        partnerAgencyList : false,
        travelAgencyList : false,
        edited : {},
        oldBlanceClientId : false,
        oldCheckClientId : false
	};

    Client.initModule = function() {
        Client.listClient(0,"","","","","","");
    };	

    Client.listClient = function(page,fromPartnerAgencyId,fromPartnerAgencyName,travelId,travelName,year,month){
        if (Client.$searchArea && arguments.length === 1) {
            // 初始化页面后，可以获取页面的参数
            fromPartnerAgencyId = Client.$searchArea.find("input[name=fromPartnerAgencyId]").val(),
            fromPartnerAgencyName = Client.$searchArea.find("input[name=fromPartnerAgencyName]").val(),
            travelId = Client.$searchArea.find("input[name=travelId]").val(),
            travelName = Client.$searchArea.find("input[name=travelName]").val(),
            year = Client.$searchArea.find("select[name=year]").val(),
            month = Client.$searchArea.find("select[name=month]").val()
        }
        // 修正页码
        page = page || 0;
        //重置搜索条件
        Client.searchData = {
            pageNo : page,
            fromPartnerAgencyId : fromPartnerAgencyId,
            fromPartnerAgencyName : fromPartnerAgencyName,
            travelId : travelId,
            travelName : travelName,
            year : year,
            month : month,
            sortType: 'auto'
        };
        $.ajax({
            url:KingServices.build_url("financial/financialParAgency","findPager"),
            type: "POST",
            data: Client.searchData,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    Client.partnerAgencyList = JSON.parse(data.partnerAgencySet);
                    Client.travelAgencyList = JSON.parse(data.travelAgencySet);
                    var html = listTemplate(data);
                    addTab(menuKey,"客户账务",html);

                    Client.initList();
                    // 绑定翻页组件
                    laypage({
                        cont: Client.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                        pages: data.searchParam.totalPage, //总页数
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                Client.listClient(obj.curr - 1);
                            }
                        }
                    });
                }
            }
        });
    };

    Client.initList = function(){
        // 初始化jQuery 对象
        Client.$tab = $('#' + tabId);
        Client.$searchArea = Client.$tab.find('.T-search-area');

        Client.getPartnerAgencyList(Client.$tab.find('.choosePartnerAgency'));
        Client.getTravelAgencyList(Client.$tab.find('.chooseTravelAgency'));

        //搜索按钮事件
        Client.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            Client.listClient(0);
        });

        // 报表内的操作
        Client.$tab.find('.T-list').on('click', '.T-option', function(event) {
            event.preventDefault();
            var $that = $(this),id = $that.closest('tr').data('id');

            if ($that.hasClass('T-check')) {
                // 对账
                Client.ClientCheck(0,id,"","");
            } else if ($that.hasClass('T-clear')) {
                // 结算
                Client.ClientClear(id,"","","");
            }
        });
    };

    Client.ClientCheck = function(page,id,year,month){
    	var $tab = $('#tab-financial_Client-checking-content');    	
		if ($tab.length && $tab.find('.T-saveCheck').data('id') == id && $tab.find('.T-saveCheck').data('page') == page) {// 如果打开的是相同产品，则不替换
			$('.tab-financial_Client-checking').children('a').trigger('click');
			return;
		}
        if (Client.$checkSearchArea && arguments.length === 2) {
            year = Client.$checkSearchArea.find("select[name=year]").val(),
            month = Client.$checkSearchArea.find("select[name=month]").val()
        }
        // 修正页码
        page = page || 0;
        $.ajax({
            url:KingServices.build_url("financial/financialParAgency","findCheckPager"),
            type:"POST",
            data:{
                pageNo : page,
                id : id + "",
                year : year,
                month : month,
                sortType : "auto"
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    data.result = JSON.parse(data.result);
                    data.id = id;
                    var html = ClientChecking(data);
                    
                    
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-checking", "客户对账", html)) {
                        Client.initCheck(page,id); 
                        validator = rule.check($('.clientCheckingMain'));                       
                    }
                    //取消对账权限过滤
                    var $checktab = $("#tab-" + ClientCheckTab + "-content");
                    var checkTr = $checktab.find(".T-checkTr");
                    var rightCode = $checktab.find(".T-checkList").data("right");
                    checkDisabled(data.result,checkTr,rightCode);

                    //绑定翻页组件
                    laypage({
                        cont: $('#tab-' + ClientCheckTab + "-content .T-pagenation"),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                Client.ClientCheck(obj.curr -1,id);
                            }
                        }
                    });
                }
            }
        });
    };

    Client.initCheck = function(page,id){
        // 初始化jQuery 对象 
        var $checktab = $("#tab-" + ClientCheckTab + "-content");
        Client.$checkSearchArea = $checktab.find('.T-search-area');
        $checktab.find('.T-saveCheck').data('id', id);
        $checktab.find('.T-saveCheck').data('page', page);

        Client.init_check_event(id, $checktab);

        //搜索按钮事件
        $checktab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            Client.ClientCheck(0,id);
        });

        //导出报表事件 btn-clientExport
        $checktab.find(".T-clientExport").click(function(){
            var year = $checktab.find("[name=year]").val();
            var month = $checktab.find("[name=month]").val();
            var pid = id;
            checkLogin(function(){
                var url = KingServices.build_url("export","partnerAgency") + "&fromPartnerAgencyId="+pid+"&year="+year+"&month="+month+"&sortType=auto";
                exportXLS(url)
            });
        });

        //给全选按钮绑定事件
        $checktab.find(".T-checkAll").click(function(){
            var checkboxList = $checktab.find(".T-checkList tr input[type=checkbox]");
            if($(this).is(":checked")){
                checkboxList.each(function(i){
                    $(this).prop("checked",true);
                });
            } else{
                checkboxList.each(function(i){
                	if(!$(this).prop("disabled")){
                		$(this).prop("checked",false);
                	}                                
                });
            } 
        });

        //关闭页面事件
        $checktab.find(".T-closeTab").click(function(){
            closeTab(ClientCheckTab);
        });
        //确认对账按钮事件
        $checktab.find(".T-saveCheck").click(function(){ 
            validator = rule.check($('.clientCheckingMain'));
            if (!validator.form()) { return; }
            Client.saveCheckingData(page,id);
         });

        //展开游客小组
        $checktab.find(".T-groupList").hide();
        $checktab.find(".T-showGroup").click(function(){
            var tr = $(this).closest('tr').next();
            if($(this).text()=="展开"){
                $(this).text("收起");
            }else{$(this).text("展开");}
            tr.toggle();
        });

        //未收对账和返款内容变更后，计算并变更实际未收的值
        $checktab.find("[name=unIncomeMoney]").keyup(function(){
            var checkUnIncomeMoney = $(this).val();
            var backMoney = $(this).parent().next().find("[name=backMoney]").val();
            var rs = checkUnIncomeMoney - backMoney;
            $(this).parent().next().next().find("[name=actualNotGet]").text(rs);
        });
        $checktab.find("[name=backMoney]").keyup(function(){
            var checkUnIncomeMoney = $(this).parent().prev().find("[name=unIncomeMoney]").val();
            var backMoney = $(this).val();
            var rs = checkUnIncomeMoney - backMoney;
            $(this).parent().next().find("[name=actualNotGet]").text(rs);
        });
    };

    Client.ClientClear = function(id,year,startMonth,endMonth){  
    	if ($tab.length && $tab.find('.T-saveClear').data('id') == id) {// 如果打开的是相同产品，则不替换
			$('.tab-financial_Client-clearing').children('a').trigger('click');
			return;
		}

        if (Client.$clearSearchArea && arguments.length === 1) {
            year = Client.$clearSearchArea.find("select[name=year]").val(),
            startMonth = Client.$clearSearchArea.find("select[name=startMonth]").val(),
            endMonth = Client.$clearSearchArea.find("select[name=endMonth]").val()
        }
        $.ajax({
            url:KingServices.build_url("financial/financialParAgency","findSettlement"),
            type:"POST",
            data:{
                id : id + "",
                year : year,
                startMonth : startMonth,
                endMonth : endMonth
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    data.financialPartnerAgencySettlementList = JSON.parse(data.financialPartnerAgencySettlementList);
                    data.id = id;
                    var html = ClientClearing(data);
                        
                    //设置表单验证
                    var validator = rule.check($('.ClientClearMain'));
                        
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-clearing", "客户结算", html)) {
                        Client.initClear(id);                         
                    }
                    validator = rule.check($('.ClientClearMain'));
                }
            }
        })
    };

    Client.initClear = function(id){
        // 初始化jQuery 对象 
        var $cleartab = $("#tab-" + ClientClearTab + "-content");
        Client.$clearSearchArea = $cleartab.find('.T-search-area');
        $cleartab.find('.T-saveClear').data('id', id);

        Client.init_clear_event(id, $cleartab);

        //搜索事件
        $cleartab.find(".T-search").click(function(){
            Client.ClientClear(id);
        });

        //保存结算事件
        $cleartab.find(".T-saveClear").click(function(){
            if (!rule.check($cleartab).form()) { return; }
            Client.saveBlanceData($(this),id);
        });
        //明细按钮事件
        $cleartab.find(".T-detail").click(function(){
            var id = $(this).data("id");
            var year = $(this).data("year");
            var month = $(this).data("month");
            Client.ClientCheck(0,id,month,year);
        });

        //操作记录事件
        $cleartab.find("[name=ClientClear_recordButton]").click(function(){
            var id = $(".T-saveClear").closest('tr').data("id");
            $.ajax({
                url:KingServices.build_url("financial/financialParAgency","findSettlementRecord"),
                type:"POST",
                data:{
                    id : id + ""
                },
                success:function(data){
                    data.records = JSON.parse(data.records);
                    var result = showDialog(data);
                    if(result){
                        var html= recordTemplate(data);
                        var recordButtonLayer = layer.open({
                            type: 1,
                            title:"查看操作记录",
                            skin: 'layui-layer-rim', 
                            area: '900px', 
                            zIndex:1028,
                            content: html,
                            scrollbar: false
                        });
                    }
                }
            })
        });
    };

    Client.saveCheckingData = function(page,id,tab_id, title, html){
        var $checktab = $("#tab-" + ClientCheckTab + "-content");
        if(!$checktab.data('isEdited')){
            showMessageDialog($( "#confirm-dialog-message" ),"您未进行任何操作！");
            return false;
        }
        //保存对账时提交的数据
        var $this = $checktab.find(".T-checkList"),argumentsLen = arguments.length;
        var checkRecordList = [];
        function getValue(className,name){
            var result = className.find("[name="+name+"]").val();
            if (result == "") {//所有空字符串变成0
                result = 0;
            }
            return result;
        } 
        var clientCheckingTr = $this.find(".T-checkTr");
        clientCheckingTr.each(function(){
            var touristGroupId = $(this).data("id");
            var checkUnIncomeMoney = getValue($(this),"unIncomeMoney");
            var unPayMoney = getValue($(this),"notGet");
            var backMoney = getValue($(this),"backMoney");
            var remark = getValue($(this),"remark");
            var idDelete = "";
            if ($(this).find(".T-checkbox").is(':checked')) {
                idDelete = 1;
            } else {
                idDelete = 0; 
            }
            var checkRecord = {
                touristGroupId : touristGroupId,
                checkUnIncomeMoney : checkUnIncomeMoney,//未收对账
                unPayMoney : unPayMoney,//未收
                backMoney : backMoney,//返款
                remark : remark,//说明
                idDelete : idDelete
            };
            checkRecordList.push(checkRecord);
        });
        checkRecordList = JSON.stringify(checkRecordList);
        $.ajax({
            url:KingServices.build_url("financial/financialParAgency","saveCheck"),
            type:"POST",
            data:{
                checkRecordList : checkRecordList
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                        if(argumentsLen == 0){
                            Tools.closeTab("financial_Client-checking");
                             Client.listClient(Client.searchData.pageNo,Client.searchData.fromPartnerAgencyId,Client.searchData.fromPartnerAgencyName,Client.searchData.travelId,Client.searchData.travelName,Client.searchData.year,Client.searchData.month);
                        } else if(argumentsLen == 2){
                            $checktab.data('isEdited',false);
                             Client.ClientCheck(page,$checktab.find(".T-data-id").data("id"),"","");
                        } else {
                            $checktab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            Client.initCheck($checktab.find(".T-data-id").data("id"));
                        }
                    });
                }
            }
        });
    };

    Client.saveBlanceData = function($obj,id,tab_id, title, html){
        var $cleartab = $("#tab-" + ClientClearTab + "-content");
        if(!$cleartab.data('isEdited')){
            showMessageDialog($( "#confirm-dialog-message" ),"您未进行任何操作！");
            return false;
        }
        var $tr,argumentsLen = arguments.length;
        if (!!$obj)  {
            $tr= $obj.closest('tr');
        } else{
            $tr = $cleartab.find(".T-clearList tr");
        }

        var clearJsonList = [];
        $tr.each(function(i){
            //获取数据
            var clearJson = {
                id : $(this).data("id") + "",
                payMoney : $tr.eq(i).find("[name='payMoney']").val(),
                payType : $tr.eq(i).find("[name='payType']").val() + "",
                remark : $tr.eq(i).find("[name='remark']").val()
            };
            clearJsonList.push(clearJson);
		});
        clearJsonList = JSON.stringify(clearJsonList);
        $.ajax({
            url:KingServices.build_url("financial/financialParAgency","saveSettlement"),
            type:"POST",
            data:{
                clearJsonList : clearJsonList
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                        if(argumentsLen === 0){
                            Tools.closeTab("financial_Client-clearing");
                            Client.listClient(Client.searchData.pageNo,Client.searchData.fromPartnerAgencyId,Client.searchData.fromPartnerAgencyName,Client.searchData.travelId,Client.searchData.travelName,Client.searchData.year,Client.searchData.month);
                        }else if(argumentsLen === 2){
                            $cleartab.data('isEdited',false);
                            Client.ClientClear($cleartab.find(".T-data-id").data("id"),"","","");
                        } else {
                            $cleartab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            Client.initClear($cleartab.find(".T-data-id").data("id"));
                        }
                    });
                    
                }
            }
        });
	};

    //给每个tr增加验证
    Client.validatorTable = function(){
        var validator;
        var $tr = $("#tab-financial_Client-checking-content .T-checkList tr");
        $tr.each(function(){
            validator = rule.check($(this));
        });
        return validator;
    };

    Client.getPartnerAgencyList = function(obj){
        var $obj = $(obj);
        if(Client.partnerAgencyList != null && Client.partnerAgencyList.length > 0){
            for(var i=0;i<Client.partnerAgencyList.length;i++){
                Client.partnerAgencyList[i].value = Client.partnerAgencyList[i].travelAgencyName;
            }
        }
        $obj.autocomplete({
            minLength: 0,
            source : Client.partnerAgencyList,
            change: function(event, ui) {
                if (!ui.item)  {
                    $(this).nextAll('input[name="partnerAgencyId"]').val('');
                }
            },
            select: function(event, ui) {
                $(this).blur().nextAll('input[name="partnerAgencyId"]').val(ui.item.id);
            }
        }).on("click",function(){
            $obj.autocomplete('search', '');
        });                    
    };
    Client.getTravelAgencyList = function(obj){
        var $obj = $(obj);
        if(Client.travelAgencyList != null && Client.travelAgencyList.length > 0){
            for(var i=0;i<Client.travelAgencyList.length;i++){
                Client.travelAgencyList[i].value = Client.travelAgencyList[i].name;
            }
        }
        $obj.autocomplete({
            minLength: 0,
            source : Client.travelAgencyList,
            change: function(event, ui) {
                if (!ui.item)  {
                    $(this).nextAll('input[name="travelId"]').val('');
                }
            },
            select: function(event, ui) {
                $(this).blur().nextAll('input[name="travelId"]').val(ui.item.id);
            }
        }).on("click",function(){
            $obj.autocomplete('search', '');
        });        
    };

    Client.init_check_event = function(id, $tab) {
        if (!!$tab && $tab.length === 1) {
            var validator = rule.check($tab);

            // 监听修改
            $tab.find(".T-checkList").off('change').on('change', function(event) {
                event.preventDefault();
                $tab.data('isEdited', true);
            });
            $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
				event.preventDefault();
				Client.initCheck($tab.find('.T-saveCheck').data('page'),$tab.find('.T-saveCheck').data('id'));
			})
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event, tab_id, title, html) {
                event.preventDefault();
                Client.saveCheckingData(0,Client.oldBlanceClientId,tab_id, title, html);
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                Client.saveCheckingData();
            });
        }
    };

    Client.init_clear_event = function(id, $tab) {
        if (!!$tab && $tab.length === 1) {
            var validator = rule.check($tab);

           $tab.find(".T-clearList").off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE)
            .on('change', function(event) {
                event.preventDefault();
                $tab.data('isEdited', true);
            });
             $tab.off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
				event.preventDefault();
				Client.initClear($tab.find('.T-saveClear').data('id'));
			})
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event, tab_id, title, html) {
                event.preventDefault();
                Client.saveBlanceData("",Client.oldBlanceClientId,tab_id, title, html);
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                Client.saveBlanceData();
            });
        }
    };

    exports.init = Client.initModule;
});
