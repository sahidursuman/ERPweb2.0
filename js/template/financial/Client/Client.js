define(function(require, exports) {
	var rule = require("./rule"),
        menuKey = "financial_Client",
        listTemplate = require("./view/list"),
        ClientChecking = require("./view/ClientChecking"),
        ClientClearing = require("./view/ClientClearing"),
        recordTemplate = require("./view/record"),
        ClientCheckTab = "financial_Client-checking",
        ClientClearTab = "financial_Client-clearing",
        travelAgencyList,
        partnerAgencyList,
        Client = {
		searchParam  : {
			"pageNo": "",
			"pageSize":"",
			"sortType":"",
			"fromPartnerAgencyId":"",
			"travelId":"",
            "fromPartnerAgencyName" : "",
            "travelName" : "",
			year : "",
			month : ""
		},
		searchCheckData:{
        	pageNo : "",
        	id : "",
        	year : "",
        	month : ""
        },
        searchBalanceData:{
        	id : "",
        	year : "",
        	startMonth : "",
			endMonth : ""
        }, 
		edited : {},
		isEdited : function(editedType){
			if(!!Client.edited[editedType] && Client.edited[editedType] != ""){
				return true;
			}
			return false;
		},
		oldCheckClientId:0,
		oldBlanceClientId:0,
		listClient:function(pageNo,fromPartnerAgencyId,fromPartnerAgencyName,travelId,travelName,year,month){
        	Client.searchParam = {
				"pageNo":pageNo,
				"pageSize":10,
				"sortType":"auto",
				"fromPartnerAgencyId":fromPartnerAgencyId,
				"travelId":travelId,
                "fromPartnerAgencyName" : fromPartnerAgencyName,
                 "travelName" : travelName,
				year : year,
				month : month
        	};
        	Client.searchParam = JSON.stringify(Client.searchParam);
            $.ajax({
                url:""+APP_ROOT+"back/financial/financialParAgency.do?method=findPager&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:"searchParam="+encodeURIComponent(Client.searchParam)+"",
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                    layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                        partnerAgencyList = JSON.parse(data.partnerAgencySet);
                    	travelAgencyList = JSON.parse(data.travelAgencySet);
                    	var totalPage = data.pager.totalPage;
                        data.partnerAgencySet = JSON.parse(data.partnerAgencySet);
                        data.travelAgencySet = JSON.parse(data.travelAgencySet);
                        data.month = month;
                        var html = listTemplate(data);
                        addTab(menuKey,"客户账务",html);
                        $("#tab-"+menuKey+"-content .guideMainForm .date-picker").datepicker({
                            autoclose: true,
                            todayHighlight: true,
                            format: 'yyyy-mm-dd',
                            language: 'zh-CN'
                        });
                        var $tabId = $("#tab-financial_Client-content");
                        var travelId = $("input[name=travelAgencyId]").val(),
                            travelName = $("input[name=travelAgencyName]").val();
                        var fromPartnerAgencyId = $("input[name=partnerAgencyId]").val(),
                            fromPartnerAgencyName = $("input[name=partnerAgencyName]").val();
                        var pageNo = $("#listClient_pager_pagerNo").val();
                        //搜索按钮事件
                        $tabId.find(".btn-arrangeTourist-search").click(function(){
                            var travelId = $("input[name=travelAgencyId]").val(),
                                travelName = $("input[name=travelAgencyName]").val();
                            var fromPartnerAgencyId = $("input[name=partnerAgencyId]").val(),
                                fromPartnerAgencyName = $("input[name=partnerAgencyName]").val();
                            var pageNo = $("#listClient_pager_pagerNo").val();
                            var year = $(".listMain").find("[name=ClientCheck_searchYear]").val();
                            var month = $(".listMain").find("[name=ClientCheck_searchMonth]").val();
                            Client.listClient(pageNo,fromPartnerAgencyId,fromPartnerAgencyName,travelId,travelName,year,month);
                        });
                        var tab = "tab-" + menuKey + "-content";
                        Client.getPartnerAgencyList($("#"+tab+" .choosePartnerAgency"),"");
                        Client.getTravelAgencyList($("#"+tab+" .chooseTravelAgency"),"");
                        //分页--首页按钮事件
                        $tabId.find(".first").click(function(){
                        	var travelId = $("input[name=travelAgencyId]").val(),
                                travelName = $("input[name=travelAgencyName]").val();
                            var fromPartnerAgencyId = $("input[name=partnerAgencyId]").val(),
                                fromPartnerAgencyName = $("input[name=partnerAgencyName]").val();
                            var year = $(".listMain").find("[name=ClientCheck_searchYear]").val();
                            var month = $(".listMain").find("[name=ClientCheck_searchMonth]").val();
                            Client.listClient(0,fromPartnerAgencyId,fromPartnerAgencyName,travelId,travelName,year,month);
                        });
                        //分页--上一页事件
                        $tabId.find(".previous").click(function(){
                        	var travelId = $("input[name=travelAgencyId]").val(),
                                travelName = $("input[name=travelAgencyName]").val();
                            var fromPartnerAgencyId = $("input[name=partnerAgencyId]").val(),
                                fromPartnerAgencyName = $("input[name=partnerAgencyName]").val();
                            var pageNo = $("#listClient_pager_pagerNo").val();
                            if (pageNo-1 == 0 || pageNo == 0) {
                            	pageNo = 0;
							}else {
								pageNo = pageNo - 1;
							}
                            var year = $(".listMain").find("[name=ClientCheck_searchYear]").val();
                            var month = $(".listMain").find("[name=ClientCheck_searchMonth]").val();
                            Client.listClient(pageNo,fromPartnerAgencyId,fromPartnerAgencyName,travelId,travelName,year,month);
                        });
                        //分页--下一页事件
                        $tabId.find(".next").click(function(){
                        	var travelId = $("input[name=travelAgencyId]").val(),
                                travelName = $("input[name=travelAgencyName]").val();
                            var fromPartnerAgencyId = $("input[name=partnerAgencyId]").val(),
                                fromPartnerAgencyName = $("input[name=partnerAgencyName]").val();
                            var pageNo = $("#listClient_pager_pagerNo").val();
							pageNo = parseInt(pageNo) + 1;
							if (pageNo+1 >= totalPage) {
								pageNo = totalPage - 1;
							}
							 var year = $(".listMain").find("[name=ClientCheck_searchYear]").val();
                            var month = $(".listMain").find("[name=ClientCheck_searchMonth]").val();
                            Client.listClient(pageNo,fromPartnerAgencyId,fromPartnerAgencyName,travelId,travelName,year,month);
                        });
                        //分页--尾页事件
                        $tabId.find(".last").click(function(){
                        	var travelId = $("input[name=travelAgencyId]").val(),
                                travelName = $("input[name=travelAgencyName]").val();
                            var fromPartnerAgencyId = $("input[name=partnerAgencyId]").val(),
                                fromPartnerAgencyName = $("input[name=partnerAgencyName]").val();
                            var pageNo = totalPage;
                            var year = $(".listMain").find("[name=ClientCheck_searchYear]").val();
                            var month = $(".listMain").find("[name=ClientCheck_searchMonth]").val();
                            Client.listClient(pageNo-1,fromPartnerAgencyId,fromPartnerAgencyName,travelId,travelName,year,month);
                        });
                        //给对账按钮绑定事件
                        $tabId.find(".btn-divide").click(function(){
                        	var id = $(this).attr('data-entity-id');
                        	var pageNo = $("#listClient_pager_pagerNo").val();
                        	Client.ClientCheck(pageNo,id,"","");
                        
                        });
                        //给结算按钮绑定事件
                        $tabId.find(".btn-transfter").click(function(){
                        	var id = $(this).attr('data-entity-id');
                        	Client.ClientClear(id,"2015","","");
                        });
                    }
                }
            });  
        },
        ClientCheck:function(pageNo,id,month,year){
        	var travelAgencyId  = id;
        	var pager = {
				"pageNo":pageNo,
				"sortType":"auto",
				"eqMap":{
					"fromPartnerAgencyId":id,
					"month":month,
					"year":year
				},
        	};
        	pager = JSON.stringify(pager);
        	 $.ajax({
                 url:""+APP_ROOT+"back/financial/financialParAgency.do?method=findCheckPager&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                 type:"POST",
                 data:"pager="+encodeURIComponent(pager),
                 dataType:"json",
                 beforeSend:function(){
                     globalLoadingLayer = openLoadingLayer();
                 },
                 success:function(data){
                	 //表单验证
                	 var validator = rule.check($('.clientCheckingMain'));
                	 
                     layer.close(globalLoadingLayer);
                     var result = showDialog(data);
                     if(result){
						 Client.searchCheckData = {
							pageNo : pageNo,
							id : id,
							year : year,
							month : month
						};
                         data.pager = JSON.parse(data.pager);
                         var html = ClientChecking(data);				 
						
						 if($("#" +"tab-"+ClientCheckTab+"-content").length > 0) {
							 addTab(ClientCheckTab,"客户对账");
                 	    	 if(!!Client.edited["checking"] && Client.edited["checking"] != ""){
    		                    //给每个tr添加表单验证
                 	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
                 	    			validator = rule.check($('.clientCheckingMain'));
                 	    			 if (!validator.form()) { return; }
                 	    			 Client.saveCheckingData(Client.oldCheckClientId,0);
    			            		 Client.edited["checking"] = "";
    			            		 addTab(ClientCheckTab,"客户对账",html);
    			            		 validator = rule.check($('.clientCheckingMain'));
    			            	 },function(){
									addTab(ClientCheckTab,"客户对账",html);
									Client.edited["checking"] = "";
									validator = rule.check($('.clientCheckingMain'));
    			            	 });
                 	    	 }else{
                     	    	addTab(ClientCheckTab,"客户对账",html);
                     	    	validator = rule.check($('.clientCheckingMain'));
                 	    	 }
             	    		 
                 	    }else{
                 	    	addTab(ClientCheckTab,"客户对账",html);
                 	    	validator = rule.check($('.clientCheckingMain'));
                 	    }
                         var $checkId = $("#tab-financial_Client-checking-content");
                         
						 $("#" +"tab-"+ClientCheckTab+"-content .all").on('change', function() {
                 		    Client.edited["checking"] = "checking";
                 		    Client.oldCheckClientId = id;
	    	    		});
                         //关闭页面事件
                         $checkId.find(".clientCheckingMain .btn-close-tab").click(function(){
                        	 closeTab(ClientCheckTab);
							 Client.edited["checking"] = "";
                         })
                         //获取页面数据
                         var pageNo = $("#ClientCheck_pager_pagerNo").val();
                         var id = $(".clientCheckingMain").find("[name=ClientCheck_pager_pagerNo]").val();
                         //搜索
                         $checkId.find("[name=ClientCheck_searchButton]").click(function(){
							Client.searchCheckData = {
								pageNo : pageNo,
								id : id,
								year : $(".clientCheckingMain").find("[name=ClientCheck_searchYear]").val(),
								month : $(".clientCheckingMain").find("[name=ClientCheck_searchMonth]").val()
							};
                             Client.ClientCheck(0,Client.searchCheckData.id,Client.searchCheckData.month,Client.searchCheckData.year);
                         })
                         //导出报表事件 btn-clientExport
                         $checkId.find(".clientCheckingMain .btn-clientExport").click(function(){
                        	 var year = $(".clientCheckingMain").find("[name=ClientCheck_searchYear]").val();
                        	 var month = $(".clientCheckingMain").find("[name=ClientCheck_searchMonth]").val();
                        	 var pid = $(".clientCheckingMain").find("[name=ClientCheck_fromPartnerAgencyId]").val();
                        	 checkLogin(function(){
 	                        	var url = ""+APP_ROOT+"back/export.do?method=partnerAgency&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&fromPartnerAgencyId="+pid+"&year="+year+"&month="+month+"&sortType=auto";
 	                        	exportXLS(url)
 	                        });
                         });
                         //分页--首页按钮事件
                         $checkId.find(".first").click(function(){
                        	 var year = $(".clientCheckingMain").find("[name=ClientCheck_searchYear]").val();
                        	 var month = $(".clientCheckingMain").find("[name=ClientCheck_searchMonth]").val();
                        	 Client.ClientCheck(0,id,month,year);
                         });
                         //分页--上一页事件
                         $checkId.find(".previous").click(function(){
                        	 var year = $(".clientCheckingMain").find("[name=ClientCheck_searchYear]").val();
                        	 var month = $(".clientCheckingMain").find("[name=ClientCheck_searchMonth]").val();
                             if (pageNo <=1) {
                             	pageNo = 0;
 							}else {
 								pageNo = parseInt(pageNo) - 1;
 							}
                             Client.ClientCheck(pageNo,id,month,year);
                         });
                         //分页--下一页事件
                         $checkId.find(".next").click(function(){
                        	 var year = $(".clientCheckingMain").find("[name=ClientCheck_searchYear]").val();
                        	 var month = $(".clientCheckingMain").find("[name=ClientCheck_searchMonth]").val();
 							 if (parseInt(pageNo)+1 >= data.pager.totalPage) {
 							 	 pageNo = data.pager.totalPage - 1;
 							 }else {
 								 pageNo = parseInt(pageNo) + 1;
							 }
 							 //alert(pageNo+"====="+id+"====="+year+"====="+month)
 							 Client.ClientCheck(pageNo,id,month,year);
                         });
                         //分页--尾页事件
                         $checkId.find(".last").click(function(){
                        	 var year = $(".clientCheckingMain").find("[name=ClientCheck_searchYear]").val();
                        	 var month = $(".clientCheckingMain").find("[name=ClientCheck_searchMonth]").val();
                             Client.ClientCheck(data.pager.totalPage-1,id,month,year);
                         });
                         //给全选按钮绑定事件
                         $checkId.find("input[name=ClientCheck_checkAllBox]").click(function(){
                        	 $(".clientCheckingMain .checkingTbody tr").each(function(i){
                        		 $(this).attr("checked","true");
                        	 });
                         });
                         
                         //展开游客小组
                         $checkId.find(".clientCheckingMain .btn-show-group").click(function(){

 	                    	var tr = $(this).parent().parent().next();
 	                    	if($(this).text()=="展开"){
 	                    		$(this).text("收起");
 	                    	}else{$(this).text("展开");}
 	                     	if(tr.hasClass("hide")){
 									$(this).find("i").removeClass("fa-chevron-up");
 									$(this).find("i").addClass("fa-chevron-down");
 									tr.removeClass("hide");
 								}
 								else{
 									$(this).find("i").removeClass("fa-chevron-down");
 									$(this).find("i").addClass("fa-chevron-up");
 									tr.addClass("hide");
 								}
                         });
                         //全选择框事件
                         $checkId.find("[name=ClientCheck_checkAllBox]").click(function(){
                        	 var clientCheckingTr = $(".clientCheckingMain .checkingTbody").find("[name=eachTr]");
                        	 clientCheckingTr.each(function(i){
                        		 $(this).find("[name=ClientCheck_checkBox]").attr("checked","true");
                        	 });
                         });
                         //未收对账和返款内容变更后，计算并变更实际未收的值
                         $checkId.find("[name=ClientCheck_checkUnIncomeMoney]").keyup(function(){
                        	 var checkUnIncomeMoney = $(this).val();
                        	 var backMoney = $(this).parent().next().find("[name=ClientCheck_backMoney]").val();
                        	 var rs = checkUnIncomeMoney - backMoney;
                        	 $(this).parent().next().next().find("[name=ClientCheck_actualNotGet]").text(rs);
                         });
                         $checkId.find("[name=ClientCheck_backMoney]").keyup(function(){
                        	 var checkUnIncomeMoney = $(this).parent().prev().find("[name=ClientCheck_checkUnIncomeMoney]").val();
                        	 var backMoney = $(this).val();
                        	 var rs = checkUnIncomeMoney - backMoney;
                        	 $(this).parent().next().find("[name=ClientCheck_actualNotGet]").text(rs);
                         });
                         
                         //确认对账按钮事件
                         $checkId.find("[name=ClientCheck_checkButton]").click(function(){ 
                        	Client.saveCheckingData(id,0);
                         });
                     }
                 }
        	 })
        },
        ClientClear:function(id,year,startMonth,endMonth){
        	$.ajax({
                url:""+APP_ROOT+"back/financial/financialParAgency.do?method=findSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:"id="+id+"&year="+year+"&startMonth="+startMonth+"&endMonth="+endMonth,
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                	
                    layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
						Client.searchBalanceData = {
							id : id,
							year : year,
							startMonth : startMonth,
							endMonth : endMonth
						};
                        data.financialPartnerAgencySettlementList = JSON.parse(data.financialPartnerAgencySettlementList);
                        var html = ClientClearing(data);
                        
                        //设置表单验证
                        var validator = rule.check($('.ClientClearMain'));
						
						if($("#" +"tab-"+ClientClearTab+"-content").length > 0) {
							 addTab(ClientClearTab,"客户结算");
                 	    	 if(!!Client.edited["clearing"] && Client.edited["clearing"] != ""){
    		                    //给每个tr添加表单验证
                 	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
                 	    			var saveBtn = $("#tab-financial_Client-clearing-content").find('[name=ClientClear_saveButton]');
                                    if (!$(saveBtn).data('validata').form()) { return; }
                 	    			 Client.saveBlanceData(Client.oldBlanceClientId,0);
    			            		 Client.edited["clearing"] = "";
    			            		 addTab(ClientClearTab,"客户结算",html);
    			            		 Client.validatorTable();
    			            	 },function(){
    			            		    addTab(ClientClearTab,"客户结算",html);
    			            		    Client.edited["clearing"] = "";
    			            		    Client.validatorTable();
    			            	 });
                 	    	 }else{
                     	    	addTab(ClientClearTab,"客户结算",html);
                     	    	Client.validatorTable();
                 	    	 }
             	    		 
                 	    }else{
                 	    	addTab(ClientClearTab,"客户结算",html);
                 	    	validator = rule.check($('.ClientClearMain'))
                            Client.validatorTable();
                 	    }
                        
                        var pid = data.pid;
                        $("#" +"tab-"+ClientClearTab+"-content .all").on('change', 'input, select', function() {
                 		   Client.edited["clearing"] = "clearing";
                            $(this).closest('tr').data('blanceStatus',true);
                 		    Client.oldBlanceClientId = id;
	    	    		});
                        
                        var $balcneId = $("#tab-financial_Client-clearing-content");
                        //搜索事件
                        $balcneId.find("[name=searchButton]").click(function(){
                        	function getVal(name){
                        		var rs = $(".ClientClearMain").find("[name="+name+"]").val();
                        		return rs;
                        	}
							Client.searchBalanceData = {
								id : id,
								year : getVal("ClientClear_year"),
								startMonth : getVal("ClientClear_startMonth"),
								endMonth : getVal("ClientClear_endMonth")
							};
                        	Client.ClientClear(Client.searchBalanceData.id,Client.searchBalanceData.year,Client.searchBalanceData.startMonth,Client.searchBalanceData.endMonth);
                        });
                        //明细按钮事件
                        $balcneId.find("[name=ClientClear_findCheckButton]").click(function(){
                        	var id = $(this).attr("data-entity-id");
                        	var year = $(this).attr("data-entity-year");
                        	var month = $(this).attr("data-entity-month");
                        	Client.ClientCheck(0,id,month,year);
                        });
                        //操作记录事件
                        $balcneId.find("[name=ClientClear_recordButton]").click(function(){
                        	var sid = $(".ClientClearMain").find("[name=ClientClear_saveButton]").attr("data-entity-id");
                        	$.ajax({
                                url:""+APP_ROOT+"back/financial/financialParAgency.do?method=findSettlementRecord&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                                type:"POST",
                                data:"id="+sid,
                                dataType:"json",
                                beforeSend:function(){
                                    globalLoadingLayer = openLoadingLayer();
                                },
                                success:function(data){
                                    layer.close(globalLoadingLayer);
                                    data.records = JSON.parse(data.records);
                                    var result = showDialog(data);
                                    if(result){
                                        var html= recordTemplate(data);
                                    	var recordButtonLayer = layer.open({
                						    type: 1,
                						    title:"查看操作记录",
                						    skin: 'layui-layer-rim', //加上边框
                						    area: ['95%', '90%'], //宽高
                						    zIndex:1028,
                						    content: html,
                						    success:function(){
                						    	
                						    }
                                    	})
                                    }
                                    
                                    
                                }
                        	})
                        });
                        //保存结算事件
                        $balcneId.find(".ClientClearMain").find("[name=ClientClear_saveButton]").click(function(){
                            if (!$(this).data('validata').form()) { return; }
                        	Client.saveBlanceData(Client.oldBlanceClientId,0, $(this));
                        });	
                    }
                }
       	    })
        },
        //给每个tr增加验证
        validatorTable:function(){
            //获取table中的tr
            var $tr = $("#tab-financial_Client-clearing-content .all tbody tr")
            //给每个tr添加表单验证
            $tr.each(function(){
                $(this).find('[name=ClientClear_saveButton]').data('validata', rule.check($(this)));
            });
        },
		saveCheckingData : function(id,isClose){
			
			// 表单校验
			if (!validator.form()) { return; }
			 
			//保存对账时提交的数据
			var $this = $(".clientCheckingMain");
			var checkRecordList = [];
			function getValue(className,name){
				var result = className.find("[name="+name+"]").val();
				if (result == "") {//所有空字符串变成0
					result = 0;
				}
				return result;
			}
			function getOldVal(className,name){
				var result = className.find("[name="+name+"]").attr("data-entity-id");
				if (result == "") {//所有空字符串变成0
					result = 0;
				}
				return result;
			}
			var clientCheckingTr = $(".clientCheckingMain .checkingTbody").find("[name=eachTr]");
			clientCheckingTr.each(function(i){
				var isCheck = $(this).find("[name=ClientCheck_checkBox]").is(':checked');
				var bool = 0;//判断数据是否发生变更
				var isCheckvar = $(this).find("[name=ClientCheck_checkBox]").attr("data-entity-id");
				if (isCheck) {
					var touristGroupId = $(this).attr("data-entity-id");
					var checkUnIncomeMoney = getValue($(this),"ClientCheck_checkUnIncomeMoney");
					var unPayMoney = getValue($(this),"ClientCheck_notGet");
					var backMoney = getValue($(this),"ClientCheck_backMoney");
					var remark = getValue($(this),"ClientCheck_remark");
					var oldcheckUnIncomeMoney = getOldVal($(this),"ClientCheck_checkUnIncomeMoney")
					var oldbackMoney = getOldVal($(this),"ClientCheck_backMoney");
					var oldremark = getOldVal($(this),"ClientCheck_remark");
					if (checkUnIncomeMoney==oldcheckUnIncomeMoney) {
						bool = bool+1;
					}
					if (backMoney==oldbackMoney) {
						bool = bool+1;
					}
					if (remark==oldremark) {
						bool = bool+1;
					}
					if (bool!=3) {
						var checkRecord = {
							"touristGroupId":touristGroupId,
							"checkUnIncomeMoney":checkUnIncomeMoney,//未收对账
							"unPayMoney":unPayMoney,//未收
							"backMoney":backMoney,//返款
							"remark":remark,//说明
							"idDelete":1,
						 };
						checkRecordList.push(checkRecord);
					}
					if (isCheckvar==0&&bool==3) {
						var checkRecord = {
							"touristGroupId":touristGroupId,
							"checkUnIncomeMoney":checkUnIncomeMoney,//未收对账
							"unPayMoney":unPayMoney,//未收
							"backMoney":backMoney,//返款
							"remark":remark,//说明
							"idDelete":1,
						};
						checkRecordList.push(checkRecord);
					}
				}else {
				var checkRecord = {
					"touristGroupId":$(this).attr("data-entity-id"),
					"checkUnIncomeMoney":getValue($this,"ClientCheck_checkUnIncomeMoney"),//未收对账
					"unPayMoney":getValue($this,"ClientCheck_notGet"),//未收
					"backMoney":getValue($this,"ClientCheck_backMoney"),//返款
					"remark":getValue($this,"ClientCheck_remark"),//说明
					"idDelete":0,
				};
				checkRecordList.push(checkRecord);
				}
			})
			checkRecordList = JSON.stringify(checkRecordList);
			$.ajax({
				url:""+APP_ROOT+"back/financial/financialParAgency.do?method=saveCheck&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=save",
				type:"POST",
				data:"checkRecordList="+encodeURIComponent(checkRecordList),
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(t){
					layer.close(globalLoadingLayer);
					var result = showDialog(t);
					if(result){
						showMessageDialog($( "#confirm-dialog-message" ),t.message);
						Client.edited["checking"] = "";
						if(isClose == 1){
							closeTab(ClientCheckTab);
							Client.pager = JSON.parse(Client.pager);
							Client.listClient(Client.searchParam.pageNo,Client.searchParam.fromPartnerAgencyId,Client.searchParam.fromPartnerAgencyName,Client.searchParam.travelId,Client.searchParam.travelName,Client.searchParam.year,Client.searchParam.month);
						} else {
							Client.ClientCheck(Client.searchCheckData.pageNo,Client.searchCheckData.id,Client.searchCheckData.month,Client.searchCheckData.year);
						}
					}
				}
			});
		},
		saveBlanceData : function(isClose, $obj){
            var $tr = $("#tab-financial_Client-clearing-content .all tbody tr"),
            DataArr = [],
            id,
            payMoney,
            payType,
            remark,
            JsonData;

            if (!!$obj)  {
                $tr= $obj.closest('tr');
            }
            $tr.each(function(i){
                if($(this).data('blanceStatus')){
                   //获取数据
                     id = $(this).attr("data-entity-id");
                     payMoney = $tr.eq(i).find("[name='ClientClear_payMoney']").val();//收款金额
                     payType = $tr.eq(i).find("[name='ClientClear_payType']").val();//收款方式
                     remark = $tr.eq(i).find("[name='ClientClear_remark']").val();//备注
                }
			});
            console.log(id);
			
                $.ajax({
                    url:""+APP_ROOT+"back/financial/financialParAgency.do?method=saveSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=save",
                    type:"POST",
                    data:"id="+id+"&payMoney="+payMoney+"&payType="+payType+"&remark="+remark,
                    dataType:"json",
                    beforeSend:function(){
                        globalLoadingLayer = openLoadingLayer();
                    },
                    success:function(data){
                        layer.close(globalLoadingLayer);
                        var result = showDialog(data);
                        if(result){
                            showMessageDialog($( "#confirm-dialog-message" ),data.message);
                            Client.edited["clearing"] = "";
                            if(isClose == 1){
                                closeTab();
                                Client.pager = JSON.parse(Client.pager);
                                Client.listClient(Client.searchParam.pageNo,Client.searchParam.fromPartnerAgencyId,Client.searchParam.fromPartnerAgencyName,Client.searchParam.travelId,Client.searchParam.travelName,Client.searchParam.year,Client.searchParam.month);
                            } else {
                                Client.ClientClear(Client.searchBalanceData.id,Client.searchBalanceData.year,Client.searchBalanceData.startMonth,Client.searchBalanceData.endMonth);
                            }
                        }
                    }
                });
		},
        getPartnerAgencyList:function(obj,partnerAId){
            var $objC = $(obj);
            if(partnerAgencyList != null && partnerAgencyList.length > 0){
                for(var i=0;i<partnerAgencyList.length;i++){
                    partnerAgencyList[i].value = partnerAgencyList[i].travelAgencyName;
                }
            }
            $(obj).autocomplete({
                minLength: 0,
                change: function(event, ui) {
                    if (!ui.item)  {
                        $(this).val('').nextAll('input[name="partnerAgencyId"]').val('');
                    }
                },
                select: function(event, ui) {
                    $(this).blur().nextAll('input[name="partnerAgencyId"]').val(ui.item.id);
                }
            }).off("click").on("click",function(){
                $objC.autocomplete('option','source', partnerAgencyList);
                $objC.autocomplete('search', '');
            });        
                     
        },
        getTravelAgencyList:function(obj,partnerAId){
            var $objC = $(obj);
            if(travelAgencyList != null && travelAgencyList.length > 0){
                for(var i=0;i<travelAgencyList.length;i++){
                    travelAgencyList[i].value = travelAgencyList[i].name;
                }
            }
            $(obj).autocomplete({
                minLength: 0,
                change: function(event, ui) {
                    if (!ui.item)  {
                        $(this).val('').nextAll('input[name="travelAgencyId"]').val('');
                    }
                },
                select: function(event, ui) {
                    $(this).blur().nextAll('input[name="travelAgencyId"]').val(ui.item.id);
                }
            }).off("click").on("click",function(){
                $objC.autocomplete('option','source', travelAgencyList);
                $objC.autocomplete('search', '');
            });        
        },
		save : function(saveType){
			if(saveType == "checking"){
				Client.saveCheckingData(Client.oldCheckClientId,1);
			} else if(saveType == "clearing"){
				Client.saveBlanceData(Client.oldBlanceClientId,1);
			}
		},
		clearEdit : function(clearType){
			Client.edited[clearType] = "";
		}
    }
    exports.listClient = Client.listClient;
	exports.isEdited = Client.isEdited;
	exports.save = Client.save;
	exports.clearEdit = Client.clearEdit;
});
