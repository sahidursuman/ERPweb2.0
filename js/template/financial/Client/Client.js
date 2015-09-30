define(function(require, exports) {
	var rule = require("./rule");
    var menuKey = "financial_Client";
    var listTemplate = require("./view/list");
    var ClientChecking = require("./view/ClientChecking");
    var ClientClearing = require("./view/ClientClearing");
    var recordTemplate = require("./view/record");
    var ClientCheckTab = "financial_Client-check";
    var ClientClearTab = "financial_Client-clear";
    var Client = {
    		listClient:function(pageNo,fromPartnerAgencyId,travelId,year,month){
        	var pager = {
        			"pageNo":pageNo,
        			"pageSize":10,
        			"sortType":"auto",
        			"eqMap":{
        				"fromPartnerAgencyId":fromPartnerAgencyId,
        				"travelId":travelId,
        			},
        	};
        	pager = JSON.stringify(pager);
            $.ajax({
                url:""+APP_ROOT+"back/financial/financialParAgency.do?method=findPager&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:"pager="+encodeURIComponent(pager)+"&year="+year+"&month="+month,
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                    layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                    	
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
  
                        var travelId = $("select[name=listClient_travelAgencySet]").val();
                        var fromPartnerAgencyId = $("select[name=listClient_partnerAgencySet]").val();
                        var pageNo = $("#listClient_pager_pagerNo").val();
                        //搜索按钮事件
                        $(".main-content .page-content .btn-arrangeTourist-search").click(function(){
                            var travelId = $("select[name=listClient_travelAgencySet]").val();
                            var fromPartnerAgencyId = $("select[name=listClient_partnerAgencySet]").val();
                            var pageNo = $("#listClient_pager_pagerNo").val();
                            var year = $(".listMain").find("[name=ClientCheck_searchYear]").val();
                            var month = $(".listMain").find("[name=ClientCheck_searchMonth]").val();
                            Client.listClient(pageNo,fromPartnerAgencyId,travelId,year,month);
                        });
                        //分页--首页按钮事件
                        $(".main-content .page-content .pageMode a.first").click(function(){
                        	var travelId = $("select[name=listClient_travelAgencySet]").val();
                            var fromPartnerAgencyId = $("select[name=listClient_partnerAgencySet]").val();
                            var year = $(".listMain").find("[name=ClientCheck_searchYear]").val();
                            var month = $(".listMain").find("[name=ClientCheck_searchMonth]").val();
                            Client.listClient(0,fromPartnerAgencyId,travelId,year,month);
                        });
                        //分页--上一页事件
                        $(".main-content .page-content .pageMode a.previous").click(function(){
                        	var travelId = $("select[name=listClient_travelAgencySet]").val();
                            var fromPartnerAgencyId = $("select[name=listClient_partnerAgencySet]").val();
                            var pageNo = $("#listClient_pager_pagerNo").val();
                            if (pageNo-1 == 0 || pageNo == 0) {
                            	pageNo = 0;
							}else {
								pageNo = pageNo - 1;
							}
                            var year = $(".listMain").find("[name=ClientCheck_searchYear]").val();
                            var month = $(".listMain").find("[name=ClientCheck_searchMonth]").val();
                            Client.listClient(pageNo,fromPartnerAgencyId,travelId,year,month);
                        });
                        //分页--下一页事件
                        $(".main-content .page-content .pageMode a.next").click(function(){
                        	var travelId = $("select[name=listClient_travelAgencySet]").val();
                            var fromPartnerAgencyId = $("select[name=listClient_partnerAgencySet]").val();
                            var pageNo = $("#listClient_pager_pagerNo").val();
							pageNo = parseInt(pageNo) + 1;
							if (pageNo+1 >= totalPage) {
								pageNo = totalPage - 1;
							}
							 var year = $(".listMain").find("[name=ClientCheck_searchYear]").val();
                            var month = $(".listMain").find("[name=ClientCheck_searchMonth]").val();
                            Client.listClient(pageNo,fromPartnerAgencyId,travelId,year,month);
                        });
                        //分页--尾页事件
                        $(".main-content .page-content .pageMode a.last").click(function(){
                        	var travelId = $("select[name=listClient_travelAgencySet]").val();
                            var fromPartnerAgencyId = $("select[name=listClient_partnerAgencySet]").val();
                            var pageNo = totalPage;
                            var year = $(".listMain").find("[name=ClientCheck_searchYear]").val();
                            var month = $(".listMain").find("[name=ClientCheck_searchMonth]").val();
                            Client.listClient(pageNo-1,fromPartnerAgencyId,travelId,year,month);
                        });
                        //给对账按钮绑定事件
                        $("#tab-"+menuKey+"-content  .btn-divide").click(function(){
                        	var id = $(this).attr('data-entity-id');
                        	var pageNo = $("#listClient_pager_pagerNo").val();
                        	Client.ClientCheck(pageNo,id,"","");
                        
                        });
                        //给结算按钮绑定事件
                        $("#tab-"+menuKey+"-content  .btn-transfter").click(function(){
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
                	 var $obj = $(".clientCheckingMain .form-horizontal");
                	 
                     layer.close(globalLoadingLayer);
                     var result = showDialog(data);
                     if(result){
                         data.pager = JSON.parse(data.pager);
                         var html = ClientChecking(data);
                         addTab(ClientCheckTab,"客户对账",html);
                         
                         //设置表单验证
                         var validator =  rule.check($('.clientCheckingMain'));
                         //关闭页面事件
                         $(".clientCheckingMain .btn-close-tab").click(function(){
                        	 $(".tab-financial_Client-check i.tab-close").trigger("click");
                         })
                         //获取页面数据
                         var pageNo = $("#ClientCheck_pager_pagerNo").val();
                         var id = $(".clientCheckingMain").find("[name=ClientCheck_pager_pagerNo]").val();
                         //搜索
                         $(".clientCheckingMain").find("[name=ClientCheck_searchButton]").click(function(){
                        	 var year = $(".clientCheckingMain").find("[name=ClientCheck_searchYear]").val();
                        	 var month = $(".clientCheckingMain").find("[name=ClientCheck_searchMonth]").val();
                             Client.ClientCheck(0,id,month,year);
                         })
                         //导出报表事件 btn-clientExport
                         $(".clientCheckingMain .btn-clientExport").click(function(){
                        	 var year = $(".clientCheckingMain").find("[name=ClientCheck_searchYear]").val();
                        	 var month = $(".clientCheckingMain").find("[name=ClientCheck_searchMonth]").val();
                        	 var pid = $(".clientCheckingMain").find("[name=ClientCheck_fromPartnerAgencyId]").val();
                        	 checkLogin(function(){
 	                        	var url = ""+APP_ROOT+"back/export.do?method=partnerAgency&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&fromPartnerAgencyId="+pid+"&year="+year+"&month="+month+"&sortType=auto";
 	                        	exportXLS(url)
 	                        });
                         });
                         //分页--首页按钮事件
                         $(".main-content .page-content .pageMode a.first").click(function(){
                        	 var year = $(".clientCheckingMain").find("[name=ClientCheck_searchYear]").val();
                        	 var month = $(".clientCheckingMain").find("[name=ClientCheck_searchMonth]").val();
                        	 Client.ClientCheck(0,id,month,year);
                         });
                         //分页--上一页事件
                         $(".main-content .page-content .pageMode a.previous").click(function(){
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
                         $(".main-content .page-content .pageMode a.next").click(function(){
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
                         $(".main-content .page-content .pageMode a.last").click(function(){
                        	 var year = $(".clientCheckingMain").find("[name=ClientCheck_searchYear]").val();
                        	 var month = $(".clientCheckingMain").find("[name=ClientCheck_searchMonth]").val();
                             Client.ClientCheck(data.pager.totalPage-1,id,month,year);
                         });
                         //给全选按钮绑定事件
                         $("input[name=ClientCheck_checkAllBox]").click(function(){
                        	 $(".clientCheckingMain .checkingTbody tr").each(function(i){
                        		 $(this).attr("checked","true");
                        	 });
                         });
                         
                         //展开游客小组
                         $(".clientCheckingMain .btn-show-group").click(function(){

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
                         $(".clientCheckingMain").find("[name=ClientCheck_checkAllBox]").click(function(){
                        	 var clientCheckingTr = $(".clientCheckingMain .checkingTbody").find("[name=eachTr]");
                        	 clientCheckingTr.each(function(i){
                        		 $(this).find("[name=ClientCheck_checkBox]").attr("checked","true");
                        	 });
                         });
                         //未收对账和返款内容变更后，计算并变更实际未收的值
                         $(".clientCheckingMain").find("[name=ClientCheck_checkUnIncomeMoney]").keyup(function(){
                        	 var checkUnIncomeMoney = $(this).val();
                        	 var backMoney = $(this).parent().next().find("[name=ClientCheck_backMoney]").val();
                        	 var rs = checkUnIncomeMoney - backMoney;
                        	 $(this).parent().next().next().find("[name=ClientCheck_actualNotGet]").text(rs);
                         });
                         $(".clientCheckingMain").find("[name=ClientCheck_backMoney]").keyup(function(){
                        	 var checkUnIncomeMoney = $(this).parent().prev().find("[name=ClientCheck_checkUnIncomeMoney]").val();
                        	 var backMoney = $(this).val();
                        	 var rs = checkUnIncomeMoney - backMoney;
                        	 $(this).parent().next().find("[name=ClientCheck_actualNotGet]").text(rs);
                         });
                         
                         //确认对账按钮事件
                         $(".clientCheckingMain").find("[name=ClientCheck_checkButton]").click(function(){
                        	 
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
                                     Client.ClientCheck(data.pager.pageNo,data.pager.eqMap.fromPartnerAgencyId,data.month,data.year);
                                     if(result){
                                    	 showMessageDialog($( "#confirm-dialog-message" ),t.message,function(){
                                    	 });
                                     }
                                 }
                        	 });
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
                	
                	//表单验证
                	var $obj = $(".ClientClearMain .form-horizontal")
                	
                    layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                        data.financialPartnerAgencySettlementList = JSON.parse(data.financialPartnerAgencySettlementList);
                        var html = ClientClearing(data);
                        addTab(ClientClearTab,"客户结算",html);
                        
                        //设置表单验证
                        var validator = rule.check($('.ClientClearMain'));
                        
                        var pid = data.pid;
                        
                        //搜索事件
                        $(".ClientClearMain").find("[name=searchButton]").click(function(){
                        	function getVal(name){
                        		var rs = $(".ClientClearMain").find("[name="+name+"]").val();
                        		return rs;
                        	}
                        	var year = getVal("ClientClear_year");//年
                        	var startMonth = getVal("ClientClear_startMonth");//开始月
                        	var endMonth = getVal("ClientClear_endMonth");//结束月
                        	Client.ClientClear(pid,year,startMonth,endMonth);
                        });
                        //明细按钮事件
                        $(".ClientClearMain").find("[name=ClientClear_findCheckButton]").click(function(){
                        	var id = $(this).attr("data-entity-id");
                        	var year = $(this).attr("data-entity-year");
                        	var month = $(this).attr("data-entity-month");
                        	Client.ClientCheck(0,id,month,year);
                        });
                        //操作记录事件
                        $(".ClientClearMain").find("[name=ClientClear_recordButton]").click(function(){
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
                        $(".ClientClearMain").find("[name=ClientClear_saveButton]").click(function(){
                        	
                        	// 表单校验
    			    		if (!validator.form()) { return; }
                        	
                        	var $this = $(this).parent().parent();
                        	function getVal(name){
                        		var rs = $this.find("[name="+name+"]").val();
                        		if (rs == "") {
									rs = 0;
								}
                        		return rs;
                        	}
                        	//获取数据
                        	var id = $(this).attr("data-entity-id");
                        	var payMoney = getVal("ClientClear_payMoney");//收款金额
                        	var payType = getVal("ClientClear_payType");//收款方式
                        	var remark = getVal("ClientClear_remark");//备注
                        	if(payMoney == null || payMoney == ""){
                        		showMessageDialog($( "#confirm-dialog-message" ),"请输入收款金额");
                        		return
                        	}else{$.ajax({
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
                                    showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                               	 	});
                                    if(result){
                                    	Client.ClientClear(data.pid,"2015","","");
                                    }
                                }
                        	});}
                        });
                        	
                    }
                }
       	    })
        },
    }
    exports.listClient = Client.listClient;
});
