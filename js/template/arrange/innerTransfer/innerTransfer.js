define(function(require, exports) {
	//var rule = require("./rule"); 
	var menuKey = "arrange_inner_transfer";
	listTemplate = require("./view/list"),
	viewTemplate=require("./view/view");
	editTemplate=require("./view/edit");
	tabId = "tab-" + menuKey + "-content";
	var requestMain = true;//控制搜索头的访问次数
	var requestTotal = true;//控制统计数据的访问次数
	//搜索字段
	var searchParam = {
			pageNo : "",
			type : "",
			touristGroupId : "",
			lineProductId : "",
			businessGroupId : "",
			creator : "",
			startTime : "",
			endTime : "",
			status : "",
			first : "",
		}
	//分页查询的返回结果
	var map = {
			searchParam : "",
			resultList : "",
			total : "",
			lineProduct : "",
			user : "",
			businessGroup : "",
	};
	function url(method,operation){
		return ""+APP_ROOT+"back/innerTransfer.do?&method="+method+"&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation="+operation;
	};
	var inner = {
			list:function(searchParam){
				globalLoadingLayer = layer.open({
					zIndex:1028,
					type:3
				});
				if(searchParam.first=="1"){
					requestMain = true;
					requestTotal = true;
					searchParam.first = "2";
				}
				if(requestMain){
					//搜索头数据  
					$.ajax({  
						url:url("findListMain","view"),
						data:"",
						dataType:'json',
						success:function(data1){
							map.lineProduct = JSON.parse(data1.lineProduct);
							map.user = JSON.parse(data1.user);
							map.businessGroup = JSON.parse(data1.businessGroup);
							requestMain = false;
						}
					});
				}
				//统计数据  
				if(requestTotal){
					$.ajax({  
						url:url("findTotal","view"),
						data:"searchParam="+encodeURIComponent(JSON.stringify(searchParam)),
						dataType:'json',
						success:function(data2){
							map.total = data2.total;
							requestTotal = false;
						}
					});
				}
				//分页结果集
				$.ajax({  
					url:url("findPager","view"),
					data:"searchParam="+encodeURIComponent(JSON.stringify(searchParam)),
					dataType:'json',
					success:function(data3){
						layer.close(globalLoadingLayer);
						map.resultList = JSON.parse(data3.resultList);
						map.searchParam = data3.searchParam;
						var html = listTemplate(map);
						addTab(menuKey,"内转管理",html);
						
						var classType = map.searchParam.type;
						$("#" +tabId+" .innerTransfer_list").find("[name=type]").val(classType);
						function getVal (name){
							var val = $("#" +tabId+" .innerTransfer_list").find("[name="+name+"]").val();
							return val;
						}
						function buildSearchParam(){
							searchParam.pageNo = getVal("pageNo");
							searchParam.totalPage = getVal("totalPage");
							searchParam.type = getVal("type");
							searchParam.lineProductId = getVal("lineProductId");
							searchParam.businessGroupId = getVal("businessGroupId");
							searchParam.creator = getVal("creator");
							searchParam.startTime = getVal("startTime");
							searchParam.endTime = getVal("endTime");
							searchParam.status = getVal("status");
							return searchParam;
						}
						
						//搜索事件
						$("#" +tabId+" .innerTransfer_list .search-btn").click(function(){
							searchParam = buildSearchParam();
							searchParam.pageNo = 0;
							requestTotal = true;
							inner.list(searchParam);
						});
						//切换我部转出
						$("#" +tabId+" .innerTransfer_list .transferOut").click(function(){
							//searchParam = buildSearchParam();
							searchParam.pageNo = 0;
							searchParam.type = 1;
							requestTotal = true;
							inner.list(searchParam);
						});
						//切换他部转入
						$("#" +tabId+" .innerTransfer_list .transferIn").click(function(){
							//searchParam = buildSearchParam();
							searchParam.pageNo = 0;
							searchParam.type = 2;
							requestTotal = true;
							inner.list(searchParam);
						});
						//分页--首页按钮事件
						$("#" +tabId+" .innerTransfer_list .pageMode a.first").click(function(){
							searchParam = buildSearchParam();
							searchParam.pageNo = 0;
							inner.list(searchParam);
						});
						//分页--上一页事件
						$("#" +tabId+" .innerTransfer_list .pageMode a.previous").click(function(){
							searchParam = buildSearchParam();
							var pageNo = parseInt(searchParam.pageNo);
							var previous = pageNo - 1;
							if(pageNo == 0){
								previous = 0;
							}
							searchParam.pageNo = previous;
							inner.list(searchParam);
						});   
						//分页--下一页事件
						$("#" +tabId+" .innerTransfer_list .pageMode a.next").click(function(){
							searchParam = buildSearchParam();
							var pageNo = parseInt(searchParam.pageNo);
							var totalPage = parseInt(searchParam.totalPage);
							var next =  pageNo + 1;
							if(pageNo == totalPage-1){
								next = pageNo ;
							}
							searchParam.pageNo = next;
							inner.list(searchParam);
						});
						//分页--尾页事件
						$("#" +tabId+" .innerTransfer_list .pageMode a.last").click(function(){
							searchParam = buildSearchParam();
							var totalPage = parseInt(searchParam.totalPage);
							var pageNo = 0;
							if(totalPage==0){
								pageNo = 0;
							}else{
								pageNo = totalPage - 1; 
							}
							searchParam.pageNo = pageNo;
							inner.list(searchParam);
						});
						//查看
						$("#" +tabId+" .innerTransfer_list .btn-transfer-view").click(function(){
							var id = $(this).attr("data-entity-id");
							inner.view(id);
						});
						//编辑
						$("#" +tabId+" .innerTransfer_list .btn-transfer-edit").click(function(){
							var id = $(this).attr("data-entity-id");
							inner.edit(id);
						});
						//撤销
						$("#" +tabId+" .innerTransfer_list .btn-transfer-delete").click(function(){
							
						});
						//确认
						$("#" +tabId+" .innerTransfer_list .btn-transfer-save").click(function(){
							
						});
						//拒绝
						$("#" +tabId+" .innerTransfer_list .btn-transfer-refuse").click(function(){
							
						});
						//提交修改数据
						$("#" +tabId+" .innerTransfer_list .123").click(function(){
							
						});
						//提交确认数据
						$("#" +tabId+" .innerTransfer_list .123").click(function(){
							
						});
						
						
					}
				})
				
				
			},
			view:function(id){
				$.ajax({  
					url:url("edit","view"),
					data:"id="+id,
					dataType:'json',
					before:function(){
						globalLoadingLayer = layer.open();
					},
					success:function(data){
						layer.close(globalLoadingLayer);
						data.innerTransfer = JSON.parse(data.innerTransfer);
						var html = viewTemplate(data);
						addTab(menuKey+"-view","内转信息",html);
					}
				});
			},
			edit:function(id){
				$.ajax({  
					url:url("edit","edit"),
					data:"id="+id,
					dataType:'json',
					before:function(){
						globalLoadingLayer = layer.open();
					},
					success:function(data){
						layer.close(globalLoadingLayer);
						data.innerTransfer = JSON.parse(data.innerTransfer);
						data.businessGroup = JSON.parse(data.businessGroup);
						var html = editTemplate(data);
						addTab(menuKey+"-edit","修改内转信息",html);
						
						//新增其他费用按钮
						$(".inner-edit-fee").find("button[name=addOhterFeeBtn]").click(function(){
							var addTr = "<tr><td>其他费用</td><td><input type='text' name='discribe' value='' /></td><td><input type='text' name='count' value='' /></td><td><input type='text' name='price' value='' /></td><td><label nam='deleteLable'>删除</label></td></tr>"
							$(".inner-edit-fee").find("tr[name=addDiv]").after(addTr);
						});
					}
				});
			},
			
	}
	
	exports.list=inner.list; 
});