define(function(require,exports){
	var menuKey = "resource_touristGroup",
		rule = require('./rule'),
		listTemplate = require('./view/list'),
		addTempLate = require('./view/add'),
		listMainTemplate = require('./view/listMain'),
		updateTemplate = require('./view/update'),
		viewTemplate = require('./view/view'),
		searchTemplate = require('./view/searchList'),
		lineproductSearchList = require("./view/lineproductSearchList"),
		addPartnerManagerTemplate = require('./view/addPartnerManager'),
		addVisitorMoreTemplate = require('./view/addVisitorMore'),
		tabId = "tab-"+menuKey+"-content",
		addTabId = menuKey+"-add",
		updateTabId = menuKey+'-update',
		viewTabId = menuKey+"-view";
	var touristGroup = {
		$tab:false,
		$searchArea:false,
		validator:false,
		checkInnerValidator:false,
		autocompleteDate : {},
		typeFlag:0,
		visitorId:0,
		args:{
			pageNo: 0,
			type : 0,
			lineProductName: "",
			lineProductId: "",
			fromBussinessGroupName: "",
			fromBussinessGroupId: "",
			fromPartnerAgencyName:"",
			fromPartnerAgencyId:"",
			creatorName:"",
			creatorId:"",
			startTimeSearch: "",
			createTimeStart: "",
			createTimeEnd: "",
			statusSearch: "",
			customerType: "",
			sortType: 'auto'
		}
	};
	//游客管理页面初始化
	touristGroup.initModule = function(){
		touristGroup.listTouristGroup(touristGroup.args);
	};
	touristGroup.listTouristGroup = function($args){
		//判断搜索区域的变化--是否改变条件
		if(touristGroup.$searchArea && arguments.length === 1){
			var fromPartnerAgencyId,fromPartnerAgencyName,fromBussinessGroupName,fromBussinessGroupId;
			fromPartnerAgencyId = touristGroup.$searchArea.find("input[name=fromPartnerAgencyId]").val();
			fromPartnerAgencyName = touristGroup.$searchArea.find("input[name=fromPartnerAgencyName]").val();
			fromBussinessGroupId = touristGroup.$searchArea.find("input[name=fromBussinessGroupId]").val();
			fromBussinessGroupName = touristGroup.$searchArea.find("input[name=fromBussinessGroupName]").val();
			if(fromPartnerAgencyName == "全部"){
				fromPartnerAgencyId = "";
				fromPartnerAgencyName = "";
			};
			if(fromBussinessGroupName == "全部"){
				fromBussinessGroupId = "";
				fromBussinessGroupName = "";
			};
			$args = {
				pageNo: 0,
				type : touristGroup.$searchArea.find('.T-choosePorB').val(),
				lineProductName: touristGroup.$searchArea.find('input[name=lineProductName]').val(),
				lineProductId: touristGroup.$searchArea.find('input[name=lineProductId]').val(),
				fromBussinessGroupName: fromBussinessGroupName,
				fromBussinessGroupId: fromBussinessGroupId,
				fromPartnerAgencyName:fromPartnerAgencyName,
				fromPartnerAgencyId:fromPartnerAgencyId,
				creatorName:touristGroup.$searchArea.find('input[name=creatorName]').val(),
				creatorId:touristGroup.$searchArea.find('input[name=creatorId]').val(),
				startTimeSearch: touristGroup.$searchArea.find('input[name=startTime]').val(),
				createTimeEnd: touristGroup.$searchArea.find('input[name=createTimeEnd]').val(),
				createTimeStart: touristGroup.$searchArea.find('input[name=createTimeStart]').val(),
				statusSearch: touristGroup.$searchArea.find('.T-select-status').find("button").data("value"),
				customerType: touristGroup.$searchArea.find('select[name=customerType]').val(),
				sortType: 'auto'
			}
		}
		//保存查询数据
		$.ajax({
			url:touristGroup.url("getTouristStatisticData","view"),
			data:$args,
			type:"POST",
			success:function(data){
				var result = showDialog(data);
				if(result){
					var html = listMainTemplate(data);
					Tools.addTab(menuKey,'游客管理',html);
					touristGroup.$tab = $("#"+tabId);
				 	var $mainFormObj = touristGroup.$tab.find(".T-touristGroupSearchForm"),
					 	$searchObj = $mainFormObj.find(".T-search-area");
					touristGroup.$searchArea = $searchObj;
					//业务事件
					touristGroup.initEvents();
					//获取搜索区域的数据
					touristGroup.getSearchAreaData();
					//获取列表数据
					touristGroup.getListData($args);
					//获取搜索栏的数据
					var $partnerAgencyObj = touristGroup.$tab.find(".T-choosePartnerAgency");//来源--组团社对象
					var $bussinessGroupObj = touristGroup.$tab.find(".T-chooseBussinessGroup");//来源--业务部对象
					var $lineProductObj = touristGroup.$tab.find(".T-chooseLineProduct");//线路产品对象
					var $createUserObj = touristGroup.$tab.find(".T-creatorUserChoose");//录入人对象
					//来源--组团社
					touristGroup.getListPartnerAgencyList($partnerAgencyObj);
					//来源--业务部
					touristGroup.getBussinessList($bussinessGroupObj);
					//线路产品
					touristGroup.getLineProduct($lineProductObj);
					//录入人
					touristGroup.getCreateUser($createUserObj);
					//选择组团社与业务部
					var $selectObj = $searchObj.find(".T-choosePorB");
					$selectObj.on('change',function(){
						touristGroup.choosePartnerAgencyOrBussiness($(this));
					});
					//格式化时间控件
					touristGroup.formatTime($searchObj);
				}
			}
		});
	};
	//页面事件
	touristGroup.initEvents = function(){
		var $searchAreaObj = touristGroup.$searchArea;
		//选择框事件
		$searchAreaObj.find(".T-select-status").on('click','a',function(event){
			event.preventDefault();
			var $that = $(this);
			$that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
			touristGroup.listTouristGroup(touristGroup.args);
		});
		//搜索按钮事件
		$searchAreaObj.find(".T-touristGroupList-search").on('click',function(event){
			event.preventDefault();
			touristGroup.listTouristGroup(touristGroup.args);
		});
		//新增小组事件
		$searchAreaObj.find(".T-touristGroup-add").on('click',function(event){
			event.preventDefault();
			touristGroup.typeFlag = 1;
			touristGroup.addTouristGroup();
		});
	};
	//报表事件
	touristGroup.listEvents = function($listObj){
		$listObj.find(".T-touristGroupList").on('click','.T-action',function(){
			var $that = $(this),id = $that.closest('tr').attr('id');
			if($that.hasClass('T-edit')){
				//修改小组
				touristGroup.updateTouristGroup(id);
				touristGroup.typeFlag = 2;
			};
			if($that.hasClass('T-view')){
				//查看小组
				touristGroup.viewTouristGroupDetails(id);
			};
			if($that.hasClass('T-del')){
				//删除小组
				showConfirmDialog($( "#confirm-dialog-message" ), "确定删除该条数据?",function(){
	        		touristGroup.deleteGroup(id);
	        	});
			};
		});
	};
	//添加游客小组
	touristGroup.addTouristGroup = function(){
		var html = addTempLate();
		if(Tools.addTab(addTabId,"添加游客",html))
		{
			touristGroup.addEvents();
		}	
	};
	//修改小组
	touristGroup.updateTouristGroup = function(id){
		//判断打开的是否是同一个页面
		var $tab = $('#tab-'+ updateTabId + '-content');
		if ($tab.length && $tab.find('.T-submit-updateTouristGroup').data('id') == id) {	// 如果打开的是相同数据模板，则不替换
			$('.tab-' + updateTabId).children('a').trigger('click');
			return;
		};
		$.ajax({
			url:touristGroup.url("viewTouristGroupDetails","view"),
			data:"id="+id,
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				if(result){
					var touristGroupInfo = JSON.parse(data.touristGroupDetail);
					data.touristGroupDetail = touristGroupInfo;
					var html = updateTemplate(data);
					if(Tools.addTab(updateTabId,'编辑小组',html)){
						touristGroup.visitorId = id;
						touristGroup.updateEvents();
					}
				}
			}
		});
	};
	//添加小组事件绑定
	touristGroup.addEvents = function(){
		var $addTabId = $("#tab-resource_touristGroup-add-content"),
			$groupInfoForm = $addTabId.find(".T-touristGroupMainForm"),//小组信息对象
			$groupMemberForm = $addTabId.find(".T-touristGroupMainFormMember"),//游客名单对象
			$innerTransferForm = $addTabId.find(".T-touristGroupMainFormRS");//中转安排对象
			//添加表单验证
			touristGroup.validator = rule.checktouristGroup($groupInfoForm);
			touristGroup.checkInnerValidator = rule.checkInnerTransfer($innerTransferForm);
			//添加tab切换
			touristGroup.init_CRU_event($addTabId);
			//小组信息模块处理
			touristGroup.groupInfoDispose($groupInfoForm);
			//游客名单模块处理
			touristGroup.groupMemberDispose($groupMemberForm);
			//中转安排处理
			touristGroup.innerTransferDispose($innerTransferForm);
			//提交按钮事件
			$addTabId.find(".T-submit-addTouristGroup").on('click',function(){
				if (!touristGroup.validator.form()) { return; }
				if(!touristGroup.checkInnerValidator.form()){return;}
				touristGroup.installData($addTabId);
			});
	};
	//修改小组的事件绑定
	touristGroup.updateEvents = function(){
		var id = touristGroup.visitorId,
			$updateTabId = $("#tab-resource_touristGroup-update-content"),
			$groupInfoForm = $updateTabId.find(".T-touristGroupMainForm"),//小组信息对象
			$groupMemberForm = $updateTabId.find(".T-touristGroupMainFormMember"),//游客名单对象
			$innerTransferForm = $updateTabId.find(".T-touristGroupMainFormRS");//中转安排对象
			$updateTabId.find(".T-submit-updateTouristGroup").data('id',id);
			//添加验证
			touristGroup.validator = rule.checktouristGroup($groupInfoForm);
			touristGroup.checkInnerValidator = rule.checkInnerTransfer($innerTransferForm);
			//添加tab切换
			touristGroup.init_CRU_event($updateTabId,id,2);
			//游客的序号
			touristGroup.memberNumber($groupMemberForm);
			//小组信息模块处理
			touristGroup.groupInfoDispose($groupInfoForm,2);
			//游客名单模块处理
			touristGroup.groupMemberDispose($groupMemberForm,2);
			//中转安排处理
			touristGroup.innerTransferDispose($innerTransferForm,2);
			//提交按钮事件
			$updateTabId.find(".T-submit-updateTouristGroup").on('click',function(){
				if(!touristGroup.validator.form()) { return; }
				if(!touristGroup.checkInnerValidator.form()){return;}
				touristGroup.installData($updateTabId,id,2);
			});
	};
	//查看小组信息
	touristGroup.viewTouristGroupDetails = function(id){
		$.ajax({
			url:touristGroup.url("viewTouristGroupDetails","view"),
			data:"id="+id,
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				if(result){
					var touristGroupInfo = JSON.parse(data.touristGroupDetail);
					data.touristGroupDetail = touristGroupInfo;
					var html = viewTemplate(data);
					Tools.addTab(viewTabId,"查看小组",html);
					var $viewTabId = $("#tab-resource_touristGroup-view-content"),
					$groupInfoForm = $viewTabId.find(".T-touristGroupMainForm");//小组信息对象
					$groupMemberForm = $viewTabId.find(".T-touristGroupMainFormMember");//游客名单对象
					$innerTransferForm = $viewTabId.find(".T-touristGroupMainFormRS");//中转安排对象
					//接送安排
					touristGroup.innerTransferDispose($innerTransferForm,2);
					//游客的序号
					touristGroup.memberNumber($groupMemberForm);
				}
			}
		});
	};
	//删除小组
	touristGroup.deleteGroup = function(id){
		$.ajax({
			url:touristGroup.url("deleteTouristGroup","delete"),
			data:"id="+id,
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				if(result){
					showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
						touristGroup.listTouristGroup(touristGroup.args);
					});
				}
			}
		});
	};
	//切换tab页面自动提示
	touristGroup.init_CRU_event = function($tab,id,typeFlag){
		if(!!$tab && $tab.length === 1){
			// 监听修改
			$tab.on('change', function(event) {
				event.preventDefault();
				$tab.data('isEdited', true);
			})
			// 监听保存，并切换tab
			.on(SWITCH_TAB_SAVE, function(event,tab_id, title, html) {
				event.preventDefault();
				if (!touristGroup.validator.form()) { return; }
				touristGroup.installData($tab,id,typeFlag,[tab_id,title,html]);
			})
			.on(SWITCH_TAB_BIND_EVENT, function(event,tab_id, title, html) {
				event.preventDefault();
				Tools.addTab(tab_id, title, html);
				//通过typeFlag来判断；1--新增的事件绑定；2--修改的事件绑定
				if(typeFlag == 2){
					touristGroup.updateEvents();
				}else{
					touristGroup.addEvents();
				}
			})
			// 保存后关闭
			.on(CLOSE_TAB_SAVE, function(event) {
				event.preventDefault();
				if (!touristGroup.validator.form()) { return; }
				touristGroup.installData($tab,id,typeFlag);
			});
		}
	};
	//处理小组信息
	touristGroup.groupInfoDispose = function($obj,typeFlag){
		//格式化时间控件
		touristGroup.formatTime($obj);
		//搜索线路
		$obj.find(".T-travelLine-search").on('click',function(){
			// touristGroup.searchLinproduct(true,0,"",typeFlag);
			touristGroup.initLineProductSearch(typeFlag == 2);
		});
		//客户来源
		var $partnerAgencyObj = $obj.find('input[name=fromPartnerAgency]');
		touristGroup.getPartnerAgencyList($partnerAgencyObj);
		//同行联系人
		var $contactObj = $obj.find('input[name=partnerAgencyNameList]');
		touristGroup.getContactList($contactObj);
		//新增同行联系人
		$obj.find('.T-addPartnerManager').on('click',function(){
			touristGroup.addPartnerManager($(this));
		});
		//新增费用项
		$obj.find('.T-touristGroup-addOtherCost').on('click',function(){
			touristGroup.addOtherCost($obj);
			touristGroup.validator = rule.checktouristGroup($obj);
		});
		//删除原有费用项
		if(typeFlag == 2){
			//addCost-delete
			$obj.find(".T-addCostTbody").on('click',".oldaddCost-delete",function(){
				$tr = $(this).closest('tr');
				var costListTrId = $tr.attr("data-entity-id");
				if(costListTrId!=null && costListTrId!=""){
					$tr.addClass("deleted");
					$tr.fadeOut(function(){
						$(this).hide();
						touristGroup.autoSumNeedPay($obj);
					})
					touristGroup.autoSumNeedPay($obj);
				};
			});	
		};
		//计算应收，未收
		$obj.find('input[name=payedMoney]').on('change',function(){
			touristGroup.autoSumNeedPay($obj);
		});
		$obj.find('input[name=currentNeedPayMoney]').on('change',function(){
			touristGroup.autoSumNeedPay($obj);
		});
		$obj.find(".T-addCostTbody").on('change','input',function(){
			touristGroup.autoSumNeedPay($obj);
		})
	};
	//处理游客名单
	touristGroup.groupMemberDispose = function($obj,typeFlag){
		//添加成员
		$obj.find('.T-add-tourist').on('click',function(){
			touristGroup.addVisotor($obj);
			touristGroup.validator = rule.checktouristGroup($obj);
		});
		//批量添加
		$obj.find('.T-add-tourist-more').on('click',function(){
			touristGroup.addVisotorMore($obj);
			touristGroup.validator = rule.checktouristGroup($obj);
		});
		//删除原有游客
		if(typeFlag == 2){
			$obj.find(".oldbtnDeleteTourist").on('click',function(){
				var $tr = $(this).closest('tr');
				var touristListTrId = $tr.attr("data-entity-id");
				if(touristListTrId!=null && touristListTrId!=""){
					$tr.addClass("deleted");
					$tr.fadeOut(function(){
						$(this).hide();
					})
				}
			});
		};
	};
	//处理中转
	touristGroup.innerTransferDispose = function($obj,typeFlag){
		//接团
		var $reception = $obj.find('input[name=touristReception]');
		$reception.on('click',function(){
			touristGroup.checkInnerValidator = rule.checkInnerTransfer($obj);
			var $showFlag = $reception.is(":checked");
			if($showFlag){
				$obj.find('.T-reception-div').removeClass("hide");
			}else{
				$obj.find('.T-reception-div').addClass("hide");
			}
		});
		//送团
		var $send = $obj.find('input[name=touristSend]');
		$send.on('click',function(){
			touristGroup.checkInnerValidator = rule.checkInnerTransfer($obj);
			var $showFlag = $send.is(":checked");
			if($showFlag){
				$obj.find('.T-send-div').removeClass("hide");
			}else{
				$obj.find('.T-send-div').addClass("hide");
			}
		});
		if(typeFlag == 2){
			
			var $reception = $obj.find('input[name=touristReception]');//接团
			var $send = $obj.find('input[name=touristSend]');//送团
			var $receptionFlag = $reception.is(":checked");
			if($receptionFlag == true){
				
				$obj.find('.T-reception-div').removeClass("hide");
			}else{
				$obj.find('.T-reception-div').addClass("hide");
			}
			var $sendFlag = $send.is(":checked");
			if($sendFlag == true){
				
				$obj.find('.T-send-div').removeClass("hide");
			}else{
				$obj.find('.T-send-div').addClass("hide");
			}
		}
		//格式化时间
		touristGroup.formatTime($obj);
	};

	/**
	 * 初始化选择线路的对话框
	 * @param  {Boolean} isUpdate true：修改界面，false：添加界面
	 * @return {[type]}           [description]
	 */
	touristGroup.initLineProductSearch = function(isUpdate) {
		var type = isUpdate ?'update': 'add',
			html =searchTemplate({update: type}),
			searchTravelLinelayer =layer.open({
				type: 1,
				title:"选择线路产品",
				skin: 'layui-layer-rim', //加上边框
				area: '85%', //宽高
				zIndex:1029,
				content: html,
				scrollbar: false,
			});

		var $dialog = $('.T-lineproduct-search-' + type);
		touristGroup.getLineProductList($dialog, 0);
		touristGroup.getLineProductList($dialog, 1);
		// 搜索线路产品
		$dialog.find('.T-lineProduct-search').on('click', function(event) {
			event.preventDefault();
			var $that = $(this),
				type = $that.prevAll('.tabbable').find('ul').find('.active').index();
			touristGroup.getLineProductList($dialog, type, $dialog.find('input[name="lineProduct_name"]').val());
		});	
		// 选择线路产品
		$dialog.find('.T-searchtravelLine').on('click', function(event) {
			event.preventDefault();
			var $tr = $dialog.find('input[name="choice-TravelLine"]:checked').closest('tr'), 
				$tab = $('#tab-resource_touristGroup-add-content'),
				quoteId = $tr.data('quote-id');

			if (isUpdate) {
				$tab = $('#tab-resource_touristGroup-update-content');
			}

			$tab.find('input[name="lineProductIdName"]').val($tr.children('[name="travelLine-select"]').text()).trigger('change');
			$tab.find('input[name="lineProductId"]').val($tr.data('id'));
			$tab.find('input[name="quoteId"]').val(quoteId);

			var $form = $tab.find('.T-touristGroupMainForm');
			if ($tr.closest('.tab-pane').index() === 1) {
				// 选择了报价产品，需要初始化游客小组的数据
				touristGroup.initQuoteData($form, quoteId);
			} else {
				// 清理
				touristGroup.clearQuoteData($form);
			}
			layer.close(searchTravelLinelayer);
		});	
	};

	/**
	 * 获取线路产品数据，并填入选择线路产品的对话框
	 * @param  {object} $dialog dialog的Jquery对象
	 * @param  {int} type    0：新增 1：更新
	 * @param  {int} page    页码
	 * @param  {string} name    搜索关键字
	 * @return {[type]}         [description]
	 */
	touristGroup.getLineProductList = function($dialog, type, page, name) {
		page = page || 0;
		var url = KingServices.build_url('lineProduct', 'findAll'),
			$tbody = $dialog.find('.T-normal-list');

		if (type) {
			url = KingServices.build_url('lineProduct', 'listQuoteLinePorduct');
			$tbody = $dialog.find('.T-quote-list');
		}
		$.ajax({
			url: url,
			type: 'post',
			data: {
					pageNo: page,
					name: name
				},
		})
		.done(function(data) {
			if (showDialog(data)) {
				data.lineProductList = JSON.parse(data.lineProductList);

				if (type) {
					var list = [];
					for (var i = 0, len = data.lineProductList.length, tmp, lineProduct; i < len; i ++) {
						tmp = data.lineProductList[i];
						lineProduct = tmp.lineProduct;
						list.push({
							quoteId: tmp.id,
							id: lineProduct.id,
							name: lineProduct.name,
							days: lineProduct.days,
							type: lineProduct.type,
							customerType: lineProduct.customerType,
							status: lineProduct.status,
							travelAgencyName: tmp.partnerAgency.travelAgencyName,
							createTime: tmp.createTime,
							adultCount: tmp.adultCount,
							childCount: tmp.childCount,
							startTime: tmp.startTime,
							contactRealname: tmp.partnerAgencyContact.contactRealname
						})
					}

					data.lineProductList = list;
					data.quote = type;
					console.info(data)
				}
				$tbody.html(lineproductSearchList(data));
				$tbody.closest('.tab-pane').find('.T-total').text(data.recordSize);
				// 绑定翻页组件
				laypage({
				    cont: $tbody.closest('.tab-pane').find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
				    pages: data.totalPage, //总页数
				    curr: (data.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
							touristGroup.getLineProductList($dialog, type, obj.curr -1,$dialog.find('input[name=lineProduct_name]').val());
				    	}
				    }
				});	
				// 让对话框居中
				$(window).trigger('resize');
			}
		});			
	};

	/**
	 * 用报价产品信息，初始化小组页面
	 * @param  {object} $mainForm   对应小组页面容器
	 * @param  {int} lineId 报价产品的索引
	 * @return {[type]}        [description]
	 */
	touristGroup.initQuoteData = function($mainForm, quoteId) {
		if (!!quoteId) {
			$.ajax({
				url: KingServices.build_url('lineProduct', 'findQuoteLineProduct'),
				type: 'post',
				showLoading: false,
				data: {id: quoteId},
			})
			.done(function(data) {
				if (showDialog(data)) {
					touristGroup.setQuoteData($mainForm, JSON.parse(data.quoteLinePorduct || false));
				}
			});
			
		}
	}

	/**
	 * 设置报价产品数据到游客小组
	 * @param {object} $mainForm 游客小组的父容器
	 * @param {object} data 报价产品的数据
	 */
	touristGroup.setQuoteData = function($mainForm, data) {
		if (!!data) {
			setData('startTime', data.startTime);   //出游日期
			var isUpdate = $mainForm.hasClass('T-update');
			setData('startTime', data.startTime.split(' ')[0]).prop('disabled', true).nextAll('span, .fa').addClass('hidden');   //出游日期
			setData('fromPartnerAgency', data.partnerAgency.travelAgencyName);   //客户来源
			setData('fromPartnerAgencyId', data.partnerAgency.id);   //客户来源的索引
			setData('partnerAgencyNameList', data.partnerAgencyContact.contactRealname).nextAll('.T-addPartnerManager').addClass('hidden');;   //同行联系人
			setData('partnerAgencyContactId', data.partnerAgencyContact.id);   //同行联系人的索引
			setData('adultCount', data.adultCount);   //大人人数
			setData('adultPrice', data.adultQuotePrice);   //大人单价
			setData('childCount', data.childCount);   //小孩人数
			setData('childPrice', data.childQuotePrice);   //小孩单价

			$mainForm.find('input[name="childPrice"]').trigger('change');
		}

		function setData(name, val) {                 
			$mainForm.find('[name="'+ name +'"]').val(val).prop('readonly', true);
			var $name = $mainForm.find('[name="'+ name +'"]');

			if (!!isUpdate)  {
				$name.data('old', $name.val());
			}

			$name.val(val).prop('readonly', true).trigger('change');
			return $name;
		}
	};

	/**
	 * 选择线路产品时，需要清理报价数据
	 * @param  {object} $mainForm 游客小组的父容器
	 * @return {[type]}      [description]
	 */
	touristGroup.clearQuoteData = function($mainForm) {
		var names = [
			'startTime', 
			'fromPartnerAgency',
			'fromPartnerAgencyId',
			'partnerAgencyNameList', 
			'partnerAgencyContactId',
			'adultCount',
			'adultPrice',
			'childCount',
			'childPrice'
			];
		
		names.forEach(function(name) {
			$mainForm.find('[name="'+ name +'"]').val('').prop('readonly', false);
			var $name = $mainForm.find('[name="'+ name +'"]'), val = $mainForm.hasClass('.T-update')? $name.data('old'): '';

			$name.val(val).prop('readonly', false).prop('disabled', false).nextAll('span,.fa').removeClass('hidden');
		});

		$mainForm.find('input[name="childPrice"]').trigger('change');
	};
	//获取线路产品
	touristGroup.searchLinproduct = function(typeFlag,pageNo,name,tabFlag){
		$.ajax({
			url:KingServices.build_url("lineProduct","findAll"),
			data:"pageNo="+pageNo+"&name="+name,
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				if(result){
					var lineProductInfo = JSON.parse(data.lineProductList);
					data.lineProductList = lineProductInfo;
					if(lineProductInfo != null && lineProductInfo.length > 0){
						for(var i=0;i<lineProductInfo.length;i++){
							lineProductInfo[i].value = lineProductInfo[i].name;
						}
					}
					var html = searchTemplate(data);
					if(typeFlag){
						searchLinproductLayer = layer.open({
							type:1,
							title:'选择线路',
							skin:'layui-layer-rim',
							area:'70%',
							zIndex:1028,
							scrollbar:false,
							content:html
						});
					}else{
						$("#layui-layer"+searchLinproductLayer+"").find(".layui-layer-content").html(html);
					}
					var $searchPanel = $("#T-chooseLineProductId");//获取面板
					//绑定翻页
					laypage({
					    cont: $searchPanel.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (data.pageNo + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		var name = $searchPanel.find('input[name=lineProduct_name]').val();
								touristGroup.searchLinproduct(false, obj.curr -1,name);
					    	}
					    }
					});
					//搜索事件
					$searchPanel.find('.T-lineProduct-search').off('click').on('click',function(){
						var name = $searchPanel.find('input[name=lineProduct_name]').val();
						touristGroup.searchLinproduct(false,0,name);
					});
					//提交事件
					$searchPanel.find('.T-searchtravelLine').off('click').on('click',function(){
						touristGroup.saveLineproduceJson($searchPanel,tabFlag);
						layer.close(searchLinproductLayer);
					});	
				}
			}
		});
	};
	//选择线路的提交按钮事件
	touristGroup.saveLineproduceJson = function($searchPanel,typeFlag){
		var $addVisitorObj;
		if(typeFlag !=2 ){
			$addVisitorObj = $("#tab-resource_touristGroup-add-content")
		}else{
			$addVisitorObj = $("#tab-resource_touristGroup-update-content")
		}
		
		var $parentObj = $addVisitorObj.find('.T- ');
		var lineProductName = $parentObj.find('input[name=lineProductIdName]');
		var lineProductId = $parentObj.find('input[name=lineProductId]');
		var $tr = $searchPanel.find('tbody tr'),
			name = "",
			id = "";
		$tr.each(function(i){
			var $selectFlag = $(this).find('input[name=choice-TravelLine]').is(":checked");
			var $that = $(this);
			if($selectFlag){
				name = $that.find('td[name=travelLine-select]').text();
				id = $that.find('td[name=travelLine-select]').attr("data-travelLine-Id");
			};
			lineProductName.val(name).trigger('change');
			lineProductId.val(id);
		});
	};
	//添加游客
	touristGroup.addVisotor = function($obj){
		var html = '<tr>'+
		'<td>'+'</td>'+
		'<td><input name="name" type="text" class="col-sm-12  no-padding-right" /></td>'+
		'<td><input name="mobileNumber" type="text" class="col-sm-12  no-padding-right"  maxlength="11"  /></td>'+
		'<td><select name="idCardType" value="idCardTypeId"><option value="0" selected="selected">身份证</option><option value="1">护照</option><option value="2">其它</option></select></td>'+
		'<td><input name="idCardNumber" type="text" class="col-sm-12  no-padding-right" /></td>'+
		'<td><div class="checkbox"><label><input type="checkbox" class="ace " value="1" name="isContactUser"><span class="lbl"></span></label></div></td>'+
		'<td><a class="cursor btnDeleteTourist">删除</a></td>'+
		'</tr>';
		var $tbody = $obj.find('.T-addTouristTbody')
		$tbody.append(html);
		touristGroup.memberNumber($obj);
		//删除事件
		$tbody.find('.btnDeleteTourist').on('click',function(){
			$tr = $(this).closest('tr');
			$tr.fadeOut(function(){
				$(this).remove();
				touristGroup.memberNumber($obj);
			});
		});
	};
	//游客列表序号自动升序
	touristGroup.memberNumber = function($obj){
		var $tbody = $obj.find('.T-addTouristTbody tr');
		$tbody.each(function(i){
			if(i>=0){
				$(this).children().eq(0).text(i+1);
			}
		});
	};
	//批量添加游客
	touristGroup.addVisotorMore = function($obj){
		var html = addVisitorMoreTemplate();
		var addVisotorMoreLayer = layer.open({
			type:1,
			title:'批量添加游客',
			skin:'layui-layer-rim',
			area:'40%',
			zIndex:1028,
			content:html,
			success:function(){
				var $panelObj = $(".T-batchAddTouristGroupMemberContainer");
				$panelObj.find('.T-submit-batchTouristGroupMember').on('click',function(){
					touristGroup.saveVisitorMore($panelObj,addVisotorMoreLayer,$obj);
				});
			}
		});
	};
	//批量添加游客保存
	touristGroup.saveVisitorMore = function($panelObj,addVisotorMoreLayer,$obj){
		var data = trim($panelObj.find('textarea[name=batchTouristGroupMember]').val());
		if(data == ""){
			showMessageDialog($( "#confirm-dialog-message" ),"请输入要添加的数据");
		}else{
			var dataArray = data.split(/\r?\n/);
			if(dataArray.length > 0){
				var memberInfo, memberInfoArray, name, mobileNumber, idCardNumber;
				for(var i=0;i<dataArray.length;i++){
					memberInfo = trim(dataArray[i]);
					memberInfoArray = memberInfo.split(/\s+/);
					name = "";
					mobileNumber = "";
					idCardNumber = "";
					if(memberInfoArray.length == 1){
						name = memberInfoArray[0];
					}
					else if(memberInfoArray.length == 2){
						name = memberInfoArray[0];
						numReg(memberInfoArray[1]);
					}
					else if(memberInfoArray.length == 3){
						name = memberInfoArray[0];
						numReg(memberInfoArray[1]);
						numReg(memberInfoArray[2]);
					}
					function numReg(str) {
						if(/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(str)){
							idCardNumber = str;
						}
						else if(/^((13[0-9])|(14[0-9])|(15[0-9])|(16[0-9])|(17[0-9])|(18[0-9])|(19[0-9]))\d{8}$/.test(str)){
							mobileNumber = str;
						}
					}
					// 如果第一行数据为空，则删除第一行
					var html=
						"<tr>"+
						"<td>"+"</td>"+
						"<td><input name=\"name\" type=\"text\" class=\"col-sm-12  no-padding-right\" value=\""+name+"\"/></td>"+
						"<td><input name=\"mobileNumber\" type=\"text\" class=\"col-sm-12  no-padding-right\"  value=\""+mobileNumber+"\"/></td>"+
						"<td><select name=\"idCardType\"><option value=\"0\" selected=\"selected\">身份证</option>><option value=\"1\">护照</option><option value=\"2\">其它</option></select></td>"+
						"<td><input name=\"idCardNumber\" type=\"text\" class=\"col-sm-12  no-padding-right\" value=\""+idCardNumber+"\" /></td>"+
						"<td><div class=\"checkbox\"><label><input type=\"checkbox\" class=\"ace \" value=\"1\" name=\"isContactUser\"><span class=\"lbl\"></span></label></div></td>"+
						"<td><a class=\"cursor btnDeleteTourist\">删除</i></a></td>"+
						"</tr>";
					
					var $formObj = $obj.closest('form');
					$formObj.find(".T-addTouristTbody").append(html);
					var $tableObj = $formObj.find(".T-addTouristList");
					touristGroup.memberNumber($tableObj);
					//游客名单删除事件
					$tableObj.find('.btnDeleteTourist').on('click',function(){
						var $tr = $(this).closest('tr');
						var touristListTrId = $tr.attr("data-entity-id");
						if(!(touristListTrId!=null && touristListTrId!="")){
							$tr.addClass("deleted");
							$tr.fadeOut(function(){
								$(this).remove();
							})
						}else{
							$tr.fadeOut(function(){
								$(this).remove();
								touristGroup.memberNumber($tableObj);
							});
						};
						
					});
					layer.close(addVisotorMoreLayer);
				}
			}
		}
	};
	//新增同行联系人
	touristGroup.addPartnerManager = function($obj){
		var $parentsObj = $obj.closest('form');
		var partnerAgencyId = $parentsObj.find('input[name=fromPartnerAgencyId]').val();
		var html = addPartnerManagerTemplate();
		if(partnerAgencyId){
			var addPartnerManagerLayer = layer.open({
				type:1,
				title:'新增同行联系人',
				skin:"layui-layer-rim",
				area:'40%',
				content:html,
				scrollbar:false,
				zIndex:1028,
				success:function(){
					var $addPartnerManagerObj = $(".T-addPartnerManager");
					//提交事件
					$addPartnerManagerObj.find('.T-submit-addPartnerManager').on('click',function(){
						var managerName = $addPartnerManagerObj.find('input[name=managerName]').val(),
						managerMobile = $addPartnerManagerObj.find('input[name=managerMobile]').val(),
						departmentName = $addPartnerManagerObj.find('input[name=departmentName]').val(),
						dutyName = $addPartnerManagerObj.find('input[name=dutyName]').val();
						touristGroup.addPartnerManagerFn(partnerAgencyId,managerName,managerMobile,departmentName,dutyName,$obj,addPartnerManagerLayer);
					});
				}
			});
		}else{
			layer.tips('新建联系人请先选择客户来源', $obj, {
					tips: [1, '#3595CC'],
					time: 2000
				});
			}
		};
	//新增同行联系人
	touristGroup.addPartnerManagerFn = function(partnerAgencyId,managerName,managerMobile,departmentName,dutyName,$obj,addPartnerManagerLayer){
		$.ajax({
			url:KingServices.build_url("partnerAgency","saveContact"),
			data:{
				partnerAgencyId:partnerAgencyId,
				contactRealname:managerName,
				contactMobileNumber:managerMobile,
				departmentName:departmentName,
				dutyName:dutyName,
				operation:"view"
			},
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				if(result){
					var contact = JSON.parse(data.partnerAgencyContact);
					layer.close(addPartnerManagerLayer);
					var $parentsObj = $obj.closest('div');
					$parentsObj.find('input[name=partnerAgencyNameList]').val(contact.contactRealname+"-["+contact.contactMobileNumber+"]").trigger('change');
					$parentsObj.find('input[name=partnerAgencyContactId]').val(contact.id);
				}
			}
		});
	};
	//新增其他费用项
	touristGroup.addOtherCost = function($obj){
		var html = '<tr>'+
		'<td><span name="addOrReduceSelect" value="0">其他费用</span></td>'+
		'<td><input  name="describeInfo" type="text" class="col-sm-12  no-padding-right" /></td>'+
		'<td><input  name="count" type="text" class="col-sm-12  no-padding-right T-costCount" /></td>'+
		'<td><input  name="price" type="text" class="col-sm-12  no-padding-right T-costPrice" /></td>'+
		'<td><a class="cursor addCost-delete">删除</a></td>'+
		'</tr>'
		var $parentsObj = $obj.closest("form");
		var $tableObj = $parentsObj.find(".T-addCostTbody");
		$tableObj.append(html);
		//删除事件
		$tableObj.find(".addCost-delete").off('click').on('click',function(){
			var $tr = $(this).closest('tr');
			$tr.fadeOut(function(){
				$(this).remove();
				touristGroup.autoSumNeedPay($obj);
			});
		})
	};
	//自动计算应收，未收
	touristGroup.autoSumNeedPay = function($obj){
		var needIncome = $obj.find('input[name=needPayAllMoney]');
		var hadIncome = $obj.find('input[name=payedMoney]');
		var unIncome = $obj.find('input[name=unIncomeMoney]');
		var currentIncome = $obj.find('input[name=currentNeedPayMoney]');
		var $tr = $obj.find('.T-addCostTbody').find("tr:not(.deleted)");
		var needSumIncome = 0;
		$tr.each(function(){
			var count = parseFloat($(this).find('.T-costCount').val());
			var price = parseFloat($(this).find('.T-costPrice').val());
			if(isNaN(count)){
				count = 0;
			}
			if(isNaN(price)){
				price = 0;
			}
			needSumIncome += count*price
		});
		//四舍五入
		needSumIncome = needSumIncome.toFixed(2);
		//计算应收
		needIncome.val(needSumIncome);
		//计算未收
		var hadInMoney = parseFloat(hadIncome.val()),
			currInMoney = parseFloat(currentIncome.val()),
			unInMoney = 0;
		if(isNaN(hadInMoney)){
			hadInMoney = 0;
		};
		if(isNaN(currInMoney)){
			currInMoney = 0;
		};
		unInMoney = needSumIncome - hadInMoney - currInMoney;
		unInMoney=unInMoney.toFixed(2);
		unIncome.val(unInMoney);	
	};
	//获取列表数据
	touristGroup.getListData = function(searchData){
			$.ajax({
				url:touristGroup.url('listTouristGroup','view'),
				data:searchData,
				type:'POST',
				success:function(data){
					var result = showDialog(data);
					if(result){
						var $listObj = $("#touristGroup-listMain"),
							$mainList = $("#"+tabId);
						var touristGroupList = data.touristGroupList;
						//实例化对象
						touristGroupList = JSON.parse(touristGroupList);
						//讲字符串改为对象
						data.touristGroupList = touristGroupList;
						var html = listTemplate(data);
						//权限过滤
						html = filterUnAuth(html);
						$listObj.html(html);
						touristGroup.listEvents($listObj);
						//绑定分页插件
						laypage({
							cont:$mainList.find('.T-pagenation'),
							pages:data.totalPage,
							curr:(searchData.pageNo+1),
							jump:function(obj,first){
								if(!first){
									searchData.pageNo = (obj.curr-1);
									touristGroup.getListData(searchData);
								}
							}
						});
					}
				}
			});
	};
	//获取组团社的数据
	touristGroup.getPartnerAgencyList = function($obj){
		$.ajax({
			url:KingServices.build_url("partnerAgency","getPartnerAgency"),
			data:{
				operation:'view'
			},
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				var partnerAgencyList = JSON.parse(data.partnerAgencyList);
				data.partnerAgencyList = partnerAgencyList;
				console.log(data);				if(result){
					$obj.autocomplete({
					minLength:0,
					change:function(event,ui){
						if(ui.item == null){
							$(this).closest('div').find('input[name=fromPartnerAgencyId]').val("");
							$(this).closest('div').find('input[name=partnerAgencyNameList]').val("");
						}
					},
					select:function(event,ui){
						$(this).blur();
						var obj = this;
						$(obj).closest('div').find("input[name=fromPartnerAgencyId]").val(ui.item.id).trigger('change');
						//通过typeFlag来判断--1、新增；2、修改
						if(touristGroup.typeFlag == 1){
							var $tabId = $("#tab-resource_touristGroup-add-content");
							$tabId.find("input[name=partnerAgencyNameList]").val("");
							$tabId.closest('div').find('input[name=partnerAgencyContactId]').val("");
						}
						if(touristGroup.typeFlag == 2){
							var $tabId = $("#tab-resource_touristGroup-update-content");
							$tabId.find("input[name=partnerAgencyNameList]").val("");
							$tabId.closest('div').find('input[name=partnerAgencyContactId]').val("");
						}
					}
					}).off('click').on('click',function(){
						if (!!$(this).attr('readonly')) return;
						var obj = this;
						var formParObj = data.partnerAgencyList;
						if(formParObj != null && formParObj.length>0){
							for(var i = 0;i<formParObj.length;i++){
								formParObj[i].value = formParObj[i].travelAgencyName
							}
						};
						$(obj).autocomplete('option','source',formParObj);
						$(obj).autocomplete('search','');
					});

				}
			
			}
		});
	};
	//获取同行联系人
	touristGroup.getContactList = function($obj){
		$obj.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					var objParent = $obj.closest('div');
					objParent.find("input[name=partnerAgencyContactId]").val("");
				}
			},
			select:function(event,ui){
				var objParent = $obj.closest('div');
				objParent.find("input[name=partnerAgencyContactId]").val(ui.item.id).trigger('change');
			}
		}).off('click').on('click',function(){
			if (!!$(this).attr('readonly')) return;
			var objM = this;
			var $parentsObj = $obj.closest('form');
			var partnerAgencyId = $parentsObj.find('input[name=fromPartnerAgencyId]').val();
			if(partnerAgencyId){
				$.ajax({
					url:KingServices.build_url("partnerAgency","getContactListByPartnerAgencyId"),
					data:{
						partnerAgencyId:partnerAgencyId,
						operation:"view"
					},
					showLoading: false,
					type:'POST',
					success:function(data){
						var result = showDialog(data);
						if(result){
							var contactList = JSON.parse(data.partnerAgencyContactList);
							if(contactList != null && contactList.length>0){
								if(contactList != null && contactList.length){
									for(var i=0;i<contactList.length;i++){
										contactList[i].value = contactList[i].contactRealname+" - ["+contactList[i].contactMobileNumber+"]";
									}
								}
								$(objM).autocomplete('option','source', contactList);
								$(objM).autocomplete('search', '');
							}else{
								layer.tips('该组团社没有联系人，请添加！', objM, {
									tips: [1, '#3595CC'],
									time: 2000
									});
							}
						}
					}
				});
			}else{
				layer.tips('请选择客户来源', objM, {
					tips: [1, '#3595CC'],
					time: 2000
				});
			}
			
		});
	};
	//获取业务部数据
	touristGroup.getBussinessList = function($obj){
		$obj.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).closest('div').find('input[name=fromBussinessGroupId]').val("");
				}
			},
			select:function(event,ui){
				$(this).blur();
				var obj = this;
				$(obj).closest('div').find("input[name=fromBussinessGroupId]").val(ui.item.id).trigger('change');
			}
		}).off('click').on('click',function(){
			var obj = this;
			var fromParObj = touristGroup.autocompleteDate.fromBusinessGroupList;
			if(fromParObj !=null && fromParObj.length>0){
				for(var i=0;i<fromParObj.length;i++){
					fromParObj[i].value = fromParObj[i].businessGroupName;
				}
			}
			$(obj).autocomplete('option','source', fromParObj);
			$(obj).autocomplete('search', '');
		});
	};
	//列表获取组团社数据
	touristGroup.getListPartnerAgencyList = function($obj){
		$obj.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).closest('div').find('input[name=fromPartnerAgencyId]').val("");
					$(this).closest('div').find('input[name=partnerAgencyNameList]').val("");
				}
			},
			select:function(event,ui){
				$(this).blur();
				var obj = this;
				$(obj).closest('div').find("input[name=fromPartnerAgencyId]").val(ui.item.id).trigger('change');
				//通过typeFlag来判断--1、新增；2、修改
				if(touristGroup.typeFlag == 1){
					var $tabId = $("#tab-resource_touristGroup-add-content");
					$tabId.find("input[name=partnerAgencyNameList]").val("");
					$tabId.closest('div').find('input[name=partnerAgencyContactId]').val("");
				}
				if(touristGroup.typeFlag == 2){
					var $tabId = $("#tab-resource_touristGroup-update-content");
					$tabId.find("input[name=partnerAgencyNameList]").val("");
					$tabId.closest('div').find('input[name=partnerAgencyContactId]').val("");
				}
			}
			}).off('click').on('click',function(){
				if (!!$(this).attr('readonly')) return;
				var obj = this;
				var formParObj = touristGroup.autocompleteDate.fromPartnerAgencyList;
				if(formParObj != null && formParObj.length>0){
					for(var i = 0;i<formParObj.length;i++){
						formParObj[i].value = formParObj[i].travelAgencyName
					}
				};
				$(obj).autocomplete('option','source',formParObj);
				$(obj).autocomplete('search','');
			});
	};
	//获取线路产品数据
	touristGroup.getLineProduct = function($obj){
		$obj.autocomplete({
			minLength:0,
			change:function(event,ui){
				if (ui.item == null)  {
					$(this).closest('div').find("input[name=lineProductId]").val("");
				}
			},
			select:function(event,ui){
				$(this).blur();
				var obj = this;
				$(obj).closest('div').find("input[name=lineProductId]").val(ui.item.id).trigger('change');
			}
		}).off('click').on('click',function(){
			var obj = this;
			var lineParObj = touristGroup.autocompleteDate.lineProductList;
			if(lineParObj !=null && lineParObj.length>0){
				for(var i=0;i<lineParObj.length;i++){
					lineParObj[i].value = lineParObj[i].name;
				}
			}
			$(obj).autocomplete('option','source', lineParObj);
			$(obj).autocomplete('search', '');
		});
	};
	//获取录入人数据
	touristGroup.getCreateUser = function($obj){
		$obj.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).closest('div').find("input[name=creatorId]").val("");
				}
			},
			select:function(event,ui){
				$(this).blur();
				var obj = this;
				$(obj).closest('div').find("input[name=creatorId]").val(ui.item.id).trigger('change');
			}
		}).off('click').on('click',function(){
			var obj = this;
			var creatorObj = touristGroup.autocompleteDate.creatorList;
			if(creatorObj !=null && creatorObj.length>0){
				for(var i=0;i<creatorObj.length;i++){
					creatorObj[i].value = creatorObj[i].realName;
				}
			}
			$(obj).autocomplete('option','source', creatorObj);
			$(obj).autocomplete('search', '');
		});
	};
	//获取搜索区域的数据
	touristGroup.getSearchAreaData = function(){
		$.ajax({
			url:KingServices.build_url("touristGroup","getQueryTermsForTouristGroup"),
			data:{
				operation:"view"
			},
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				if(result){
					var optional = {id : "" , travelAgencyName : "全部"},
						buissness = {id : "" , businessGroupName : "全部"};
						touristGroup.autocompleteDate.lineProductList = data.lineProductList;
						touristGroup.autocompleteDate.fromBusinessGroupList = data.fromBusinessGroupList;
						touristGroup.autocompleteDate.fromPartnerAgencyList = data.fromPartnerAgencyList;
						touristGroup.autocompleteDate.fromPartnerAgencyList.unshift(optional);
						touristGroup.autocompleteDate.fromBusinessGroupList.unshift(buissness);
						touristGroup.autocompleteDate.creatorList = data.creatorList;
				}
			}
		});
	};
	//选择组团社与业务部
	touristGroup.choosePartnerAgencyOrBussiness = function($obj){
		var $this = $obj,$parents = $this.closest('div'),
			$value = $this.val();
			if ($value == 1) {
				$parents.find('.T-choosePAB').hide();
				$parents.find('.T-chooseBussinessGroup').hide();
				$parents.find('.T-choosePartnerAgency').show();
			}else if ($value == 2) {
				$parents.find('.T-choosePAB').hide();
				$parents.find('.T-choosePartnerAgency').hide();
				$parents.find('.T-chooseBussinessGroup').show();
			}else if($value == 0){
				$parents.find('.T-choosePAB').show();
				$parents.find('.T-choosePartnerAgency').hide();
				$parents.find('.T-chooseBussinessGroup').hide();
			}
			$parents.find('.T-chooseBussinessGroup').val("");
			$parents.find('.T-choosePartnerAgency').val("");
			$parents.find('[name=fromPartnerAgencyId]').val("");
			$parents.find('[name=fromBussinessGroupId]').val("");
	};
	//时间控件
	touristGroup.formatTime = function($obj){
		$obj.find('.datepicker').datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		});
		$obj.find(".ShiftDatepicker").datetimepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'L',
			language: 'zh-CN'
		});
	};
	//组装数据
	touristGroup.installData = function($obj,id,typeFlag,tabArgs){
		//判断购买保险状态
		var buyInsuranceS = 1;
		var $lineInfoForm = $obj.find(".T-touristGroupMainForm");
		var insuranceStatus = $lineInfoForm.find('input[name=buyInsurance]');
		if(insuranceStatus.is(":checked") == true){
			buyInsuranceS = 1;
		}
		else{
			buyInsuranceS = 0;
		}
		var form = $lineInfoForm.serialize(),
		 	$startTime = $lineInfoForm.find('input[name="startTime"]');

		// for 出游日期
		if ($startTime.prop('disabled')) {
			form = form + '&startTime=' + $startTime.val();
		}
		
		function trim(str){
			return str.replace(/(^\s*)|(\s*$)/g, "");
		};
		var touristGroupFeeJsonAdd = [];
		var addCostStr
		if(typeFlag == 2){
			addCostStr = $lineInfoForm.find(".T-addCostTbody tr:not(.deleted)");
		}else{
			addCostStr = $lineInfoForm.find(".T-addCostTbody tr");
		};
		var isReturn = false;
		addCostStr.each(function(i){
			if(i > 1){
				var type = addCostStr.eq(i).find("[name=addOrReduceSelect]").attr("value");
				var describeInfo = trim(addCostStr.eq(i).find("input[name=describeInfo]").val());
				var count = trim(addCostStr.eq(i).find("input[name=count]").val());
				var price = trim(addCostStr.eq(i).find("input[name=price]").val());
				if((describeInfo != "") || (count  != "") || (price != "")){
					if (count == "") {
						showMessageDialog($( "#confirm-dialog-message" ), "请输入自费数量");
						isReturn = true;
						return false;
					}
					if (describeInfo == "") {
						showMessageDialog($( "#confirm-dialog-message" ), "请输入费用说明");
						isReturn = true;
						return false;
					}
					if (price == "") {
						showMessageDialog($( "#confirm-dialog-message" ), "请输入自费单价");
						isReturn = true;
						return false;
					};
					var touristGroupFeeJson = {};
					if(typeFlag == 2){
						var id = addCostStr.eq(i).data("entity-id");
						touristGroupFeeJson = {
							id:id,
							type : type,
							describeInfo : describeInfo,
							count : count,
							price : price
						};
					}else{
						touristGroupFeeJson = {
							type : type,
							describeInfo : describeInfo,
							count : count,
							price : price
						};
					};
					touristGroupFeeJsonAdd.push(touristGroupFeeJson);
				}
			}
		});
		if(isReturn){return;};
		//删除费用项
		if(typeFlag == 2){
			touristGroupFeeJsonDel = [];
			var delFeeStr = $lineInfoForm.find(".T-addCostTbody tr.deleted");
			delFeeStr.each(function(i){
				var idDel = delFeeStr.eq(i).attr("data-entity-id");
				touristGroupFeeJson = {
					id :idDel
				};
				touristGroupFeeJsonDel.push(touristGroupFeeJson);
			})
		};
		
		//游客名单 酒店星级等
		var $visiForm = $obj.find(".T-touristGroupMainFormMember");
		var expectLevel = $visiForm.find("select[name=level]").val()
		var includeOwnExpense = $visiForm.find("input[name=includeOwnExpense]").val();
		var touristRemarks = $visiForm.find("input[name=touristRemarks]").val();
		//接团、小车、送团
		var $arrangeForm = $obj.find(".T-touristGroupMainFormRS");
		var $receptionObj = $arrangeForm.find('input[name=touristReception]');
		var $smallCarObj = $arrangeForm.find('input[name=smallCar]');
		var $touristSendObj = $arrangeForm.find('input[name=touristSend]');
		if($receptionObj.is(':checked') == true){
			var isNeedArriveService = 1; 
		}else{
			isNeedArriveService = 0;
		}
		if($smallCarObj.is(":checked")==true){
			var isNeedBus = 1;
		}
		else{
			isNeedBus = 0;
		}
		if($touristSendObj.is(":checked")==true){
			var isNeedLeaveService = 1;
		}
		else{
			isNeedLeaveService = 0;
		}
		var buyInsurance = buyInsuranceS;
		form +="&hotelLevel="+expectLevel+"&includeSelfPay="+includeOwnExpense+"&remark="+touristRemarks+"&buyInsurance="+buyInsurance+"&isNeedArriveService="+isNeedArriveService+"&isNeedBus="+isNeedBus+"&isNeedLeaveService="+isNeedLeaveService;
		//游客json串
		var touristGroupMemberJsonAdd = touristGroup.installVisiJson($visiForm,id,typeFlag);
		
		if(touristGroupMemberJsonAdd ==2 || touristGroupMemberJsonAdd == 1){
			return;
		}
		if(touristGroupMemberJsonAdd.length == 0){
			showMessageDialog($( "#confirm-dialog-message" ),"请添加游客成员");
			return;
		}
		//删除游客小组
		var touristGroupMemberJsonDel = [];
		if(typeFlag == 2){						
			var addMemberStr = $visiForm.find(".T-addTouristList tbody tr.deleted");
			addMemberStr.each(function(i){
				var id = addMemberStr.eq(i).attr("data-entity-id");
				touristGroupMemberJson = {
					id : id
				};
				touristGroupMemberJsonDel.push(touristGroupMemberJson);
			})
		}
		//接送事件点json
		var outArrangeRemarkJson = touristGroup.installArrangeJson($arrangeForm);
		//将json对象转换成字符串
		touristGroupFeeJsonAdd = JSON.stringify(touristGroupFeeJsonAdd);
		touristGroupMemberJsonAdd = JSON.stringify(touristGroupMemberJsonAdd);
		outArrangeRemarkJson = JSON.stringify(outArrangeRemarkJson);
		var url,data,tabId;
		if(typeFlag == 2){
			touristGroupMemberJsonDel = JSON.stringify(touristGroupMemberJsonDel);
			touristGroupFeeJsonDel = JSON.stringify(touristGroupFeeJsonDel);
			url = touristGroup.url("updateTouristGroup","update");
			data = form+"&id="+id+"&touristGroupFeeJsonAdd="+touristGroupFeeJsonAdd+"&touristGroupFeeJsonDel="+touristGroupFeeJsonDel+"&touristGroupMemberJsonAdd="+touristGroupMemberJsonAdd+"&touristGroupMemberJsonDel="+touristGroupMemberJsonDel+"&outArrangeRemarkJson="+outArrangeRemarkJson
			tabId = updateTabId
		}else{
			//提交数据
			var innerStatus = false;
			if(isNeedArriveService == 1 || isNeedBus == 1 || isNeedLeaveService == 1){
				innerStatus = true;
			}
			url = touristGroup.url("saveTouristGroup","add");
			data = form+"&touristGroupFeeJsonAdd="+touristGroupFeeJsonAdd+"&touristGroupMemberJsonAdd="+touristGroupMemberJsonAdd+"&outArrangeRemarkJson="+outArrangeRemarkJson;
			var tabId = addTabId;
		};
		
		touristGroup.submitData($obj,url,data,innerStatus,tabId,tabArgs,typeFlag);
	};
	//提交数据
	touristGroup.submitData = function($obj,url,data,innerStatus,tabId,tabArgs,typeFlag){
		$.ajax({
			url:url,
			type:"POST",
			data:data,
			success:function(data){
				if(showDialog(data)){
					$obj.data('isEdited', false);
					showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
						if(data.success == 1){
							if(!!tabArgs && tabArgs.length === 3){
							Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
							if(typeFlag !=2){touristGroup.addEvents();}
							else{
							touristGroup.updateEvents();}
							}else{
								Tools.closeTab(tabId);
								touristGroup.listTouristGroup(touristGroup.args);
							};
							if (innerStatus) {
								KingServices.updateTransit(data.touristGroupId);
							}
						}
					});
				}
			}
		});
	};
	//拼接游客名单json
	touristGroup.installVisiJson = function($obj,id,typeFlag){
		var touristGroupMemberJsonAdd = [],
			erroFlag = 0,
			$tr;
		if(typeFlag == 2){
			$tr = $obj.find(".T-addTouristList tbody tr:not(.deleted)");
		}else{
			$tr = $obj.find(".T-addTouristList tbody tr");
		};
		$tr.each(function(i){
			var $that = $(this),
				name = $that.find("input[name=name]").val(),
				mobileNumber = $that.find("input[name=mobileNumber]").val(),
				idCardType = $that.find("select[name=idCardType]").val(),
				idCardNumber = $that.find("input[name=idCardNumber]").val(),
				isContactUser = 0;
			if(typeFlag == 2){
				var id = $that.attr("data-entity-id");
			};
			if($(this).find("input[name=isContactUser]").is(":checked")==true){
				isContactUser = 1;
			}
			if (isContactUser && mobileNumber == "")  {
				showMessageDialog($( "#confirm-dialog-message" ), "请填写名单中联系人的手机号码！");
				erroFlag = 1;
				return;
			} else if (!mobileNumber && !idCardNumber) {
				showMessageDialog($( "#confirm-dialog-message" ), "手机号码或证件号码必填一项！");
				erroFlag = 2;
				return;
			}
			var touristGroupMemberJson = {};
			if(typeFlag == 2){
			    touristGroupMemberJson = {
					id : id,
					name : name,
					mobileNumber : mobileNumber,
					idCardType : idCardType,
					idCardNumber : idCardNumber,
					isContactUser : isContactUser
				};
			}else{
				touristGroupMemberJson = {
					name : name,
					mobileNumber : mobileNumber,
					idCardType : idCardType,
					idCardNumber : idCardNumber,
					isContactUser : isContactUser
				};
			}
			
			touristGroupMemberJsonAdd.push(touristGroupMemberJson);
		});
		if(erroFlag == 0){
			return touristGroupMemberJsonAdd;
		}else{
			return erroFlag;
		}	
	};
	//拼接安排json
	touristGroup.installArrangeJson = function($outArrange){
		var outArrangeRemarkJson = {
			arriveTime : $outArrange.find("input[name=receptionTime]").val(),
			arrivePosition : $outArrange.find("input[name=receptionAddress]").val(),
			arriveShift : $outArrange.find("input[name=arriveShift]").val(),
			arriveShiftTime : $outArrange.find("input[name=arriveShiftTime]").val(),
			leaveTime : $outArrange.find("input[name=sendTime]").val(),
			leavePosition : $outArrange.find("input[name=sendAddress]").val(),
			leaveShift : $outArrange.find("input[name=leaveShift]").val(),
			leaveShiftTime : $outArrange.find("input[name=leaveShiftTime]").val()
		};
		return outArrangeRemarkJson;
	};
	//拼接url
	touristGroup.url = function(method,operation){
		var url = APP_ROOT + "back/touristGroup.do?method="+method+"&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation="+operation;
		return url;
	};
	exports.init = touristGroup.initModule;
});