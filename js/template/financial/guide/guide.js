/**
 * 财务管理--导游账务
 *
 * by David Bear 2015-11-24
 */
define(function(require, exports) {
	var rule = require("./rule"),
		menuKey = "financial_guide",
        listTemplate = require("./view/list"),
        guideCheckingTemplate = require("./view/guideChecking"),
        billImagesTemplate = require("./view/billImages"),
        guideClearingTemplate = require("./view/guideClearing"),
        costDetail = require("./view/costDetail"),
        guideRecords = require("./view/guideRecords"),
        checkMenuKey = menuKey+"_checking",
        clearMenuKey = menuKey+"-clearing";

    var FinGuide = {
    	mock: true,
		$tab: false,
		$checkingTab : false,
		checkingId : null,
		$clearTab : false,
		clearId : null
	};
	/**
	 * 初始化模块
	 */
	FinGuide.initModule = function(){
		FinGuide.$tab = null;
		FinGuide.getList(0);
	};
	/**
	 * 获取购物账务列表，初始化列表页面
	 * @param  {int} page 页码
	 */
	FinGuide.getList = function(page){
		var args = FinancialService.getInitDate();

		args.pageNo = page || 0;
		if (!!FinGuide.$tab) {
			args = {
				pageNo: (page || 0),
				guideId: FinGuide.$tab.find('.T-search-name').data('id'),
				startDate: FinGuide.$tab.find('.T-search-start-date').val(),
				endDate : FinGuide.$tab.find('.T-search-end-date').val(),
			}

			var guideName = FinGuide.$tab.find('.T-search-name').val();
			if (guideName === '全部') {
				guideName = '';
			}

			args.guideName = guideName;
		}

		$.ajax({
			url: KingServices.build_url('account/guideFinancial', 'listSumFinancialGuide'),
			type: 'POST',
			data: args,
		}).done(function(data){
			if(showDialog(data)){
				data.guideName = data.guideName || '全部';
				Tools.addTab(menuKey,"导游账务",listTemplate(data));
				// 绑定事件
				FinGuide.init_event();
				// 缓存页面
				FinGuide.listPageNo = args.pageNo;
				// 绑定翻页组件
				laypage({
				    cont: FinGuide.$tab.find('.T-pagenation'), 
				    pages: data.totalPage, //总页数
				    curr: (data.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		FinGuide.getList(obj.curr -1);
				    	}
				    }
				});	
			}
		});
	};

	/**
	 * 初始化列表页面的事件绑定
	 */
	FinGuide.init_event = function(){
		FinGuide.$tab = $('#tab-' + menuKey + '-content');
		//搜索顶部的事件绑定
		var $searchArea = FinGuide.$tab.find('.T-search-area'),
			$datepicker = $searchArea.find('.datepicker');

		// 导游绑定
		FinGuide.getGuideNameList($searchArea.find('.T-search-name'), [$datepicker.eq(0).val(), $datepicker.eq(1).val()])
		// 绑定时间控件
		FinancialService.setDatePicker($datepicker).on('changeDate', function(event) {
			event.preventDefault();
			$searchArea.find('.T-search-name').data('ajax', false);
		});;
		$searchArea.find('.T-search-start-date').on('changeDate', function(event) {
			event.preventDefault();
			var start = $(this).val(),
				$end = $searchArea.find('.T-search-end-date').datepicker('setStartDate', start);

			if ($end.val() < start) {
				$end.val(start);
			}
		}).trigger('changeDate');


		$searchArea.find('.T-btn-search').on('click', function(event) {
			event.preventDefault();
			FinGuide.getList();
		});
		// 报表内的操作
		FinGuide.$tab.find('.T-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id');
			if ($that.hasClass('T-check'))  {
				// 对账
				FinGuide.checking(id);
			} else if ($that.hasClass('T-pay'))  {
				// 结算
				FinGuide.clearing(id);
			}
		});
	};

	FinGuide.getGuideNameList = function($obj, valArray)  {
		$obj.autocomplete({
		    minLength: 0,
		    change: function(event, ui) {
		        if (!ui.item)  {
		            $(this).data('id', '');
		        }
		    },
		    select: function(event, ui) {
		        $(this).blur().data('id', ui.item.id);
		    }
		}).on("click",function(){
		    if (!$obj.data('ajax')) {  // 避免重复请求
		    	var args = {};

		    	if (!!valArray && valArray.length === 2) {
		    		args.startDate = valArray[0];
		    		args.endDate = valArray[1];
		    	}
		        $.ajax({
		            url : KingServices.build_url('account/guideFinancial', 'listFinancialGuideQuery'),
		            type : "POST",
		            showLoading:false,
		            data: args
		        }).done(function(data){
		            for(var i=0; i<data.guideList.length; i++){
		                data.guideList[i].value = data.guideList[i].realname;
		                data.guideList[i].id = data.guideList[i].guideId;
		            }
		            data.guideList.unshift({id:'', value: '全部'});
		            $obj.autocomplete('option', 'source', data.guideList);
		            $obj.autocomplete('search', '');

		            $obj.data('ajax', true);
		        });
		    } else {
		        $obj.autocomplete('search', '');
		    }
		});
	}
	/**
	 * 初始化对账模块
	 * @param  {int} id    导游ID
	 * @param  {int} year  年
	 * @param  {int} month 月
	 */
	FinGuide.checking = function(id, year, month){
		FinGuide.$checkingTab = null;
		FinGuide.checkingId = id;
		FinGuide.checkingList(0, id, year, month);
	};

	FinGuide.checkingList = function(page, id, year, month){
		var args = {
			pageNo : (page || 0),
			guideId : id,
			year : FinGuide.$tab.find('.T-search-year').val() || year,
			month : FinGuide.$tab.find('.T-search-month').val() || month
		};
		if(!!FinGuide.$checkingTab){
			var args = {
				pageNo : (page || 0),
				guideId : id,
				year : FinGuide.$checkingTab.find('.T-search-year').val() || year,
				month : FinGuide.$checkingTab.find('.T-search-month').val() || month
			};
		}

		FinGuide.checkingPageNo = args.pageNo;

		$.ajax({
			url : KingServices.build_url('financialGuide', 'listGuideChecking'),
			type : "POST",
			data : args
		}).done(function(data){
			if(showDialog(data)){
				data.guideList = JSON.parse(data.guideList);
				data.monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
				Tools.addTab(checkMenuKey, "导游对账", guideCheckingTemplate(data));
				FinGuide.CL_event();
			}
		});
	};

	FinGuide.CL_event = function(){
		FinGuide.$checkingTab = $('#tab-' + checkMenuKey + '-content');
		var validator = rule.check(FinGuide.$checkingTab);
		FinGuide.$checkingTab.find('.T-checkList').off('change')
		.on('change', function(event) {
			event.preventDefault();
			FinGuide.$checkingTab.data('isEdited', true);
		});

		FinGuide.$checkingTab.off(SWITCH_TAB_SAVE).off(CLOSE_TAB_SAVE)
		.on(SWITCH_TAB_SAVE, function(event, tab_id, title, html){
			event.preventDefault();
			FinGuide.saveChecking(FinGuide.$checkingTab, validator, [tab_id, title, html], false);
		})
		.on(CLOSE_TAB_SAVE, function(event){
			event.preventDefault();
			FinGuide.saveChecking(FinGuide.$checkingTab, validator, null, true);
		});

		var $searchArea = FinGuide.$checkingTab.find('.T-search-area');
		$searchArea.find('.T-btn-search').on('click', function(event){
			event.preventDefault();
			FinGuide.checkingList(0, FinGuide.checkingId);
		});
		$searchArea.find('.T-btn-export').on('click', function(event){
			event.preventDefault();
			var guideName = $searchArea.find('.T-guide-name').text();
			var year = $searchArea.find('.T-search-year').val();
			var month = $searchArea.find('.T-search-month').val();
			FinGuide.exportReport(guideName, year, month);
		});
		FinGuide.$checkingTab.find('.T-select-all').on('click', function(event){
			var account = FinGuide.$checkingTab.find('.T-checkList .T-account'),
				$that = $(this);
			if(!!$that.is(':checked')){
				account.each(function(){
					$(this).prop("checked",true);
				});
			}else{
				account.each(function(){
					$(this).prop("checked",false);
				});
			}
		});
		//绑定确定事件
		FinGuide.$checkingTab.find('.T-confirm-guide').on('click', function(event){
			event.preventDefault();
			FinGuide.saveChecking(FinGuide.$checkingTab, validator, null, false);
		});
		//绑定取消事件
		FinGuide.$checkingTab.find('.T-guide-close').on('click', function(event){
			event.preventDefault();
			Tools.closeTab(Tools.getTabKey(FinGuide.$checkingTab.prop('id')));
		});
	};

	FinGuide.saveChecking = function($tab, validator, tab_array, isClose){
		// 表单校验
		if (!validator.form()) { 
			return;
		}
		var JsonStr = [],$tr = $tab.find('.T-checkList tr'),
			oldRealBack,
            newRealBack,
            oldRemark,
            newRemark;
	    $tr.each(function(i){
		    var checkStatus = $(this).data("entity-isConfirmAccount");
		    var flag = $(this).find("input[name='isConfirmAccount']").is(":checked");
		    newRealBack = $(this).find("input[name='realBackGuideMoney']").val();
		    oldRealBack = $(this).data("entity-realBackGuideMoney");
		    newRemark = $(this).find("input[name='billRemark']").val();
		    oldRemark = $(this).data("entity-billRemark");
		   	if(flag){
			   	if(checkStatus == 1){
				   	//判断是否被修改
				   	if(oldRemark != newRemark || oldRealBack != newRealBack){
				   	   	var checkData = {
				   	   	   	id:$(this).data("entity-id"),
    					   	guideId:FinGuide.checkingId,
    					   	realBackGuideMoney:newRealBack,
    					   	billRemark:newRemark,
    					   	isConfirmAccount:1
				   	   	}
				   	   	JsonStr.push(checkData);
				    }
		        }else{
		      	    var checkData = {
			   	   		id:$(this).data("entity-id"),
					   	guideId:FinGuide.checkingId,
					   	realBackGuideMoney:newRealBack,
					   	billRemark:newRemark,
					   	isConfirmAccount:1
			   	   	}
			   	   	JsonStr.push(checkData);
		        }
		    }else{
			    if(checkStatus == 1){
				    var checkData = {
					   id:$(this).data("entity-id"),
					   guideId:FinGuide.checkingId,
					   realBackGuideMoney:newRealBack,
					   billRemark:newRemark,
					   isConfirmAccount:0
    			    }
    			    JsonStr.push(checkData);
			    }
		   	}
	    });
	   
	    if(JsonStr.length == 0){
		    showMessageDialog($( "#confirm-dialog-message" ),"您当前未进行任何操作");
		    return;
	    }
	    console.log(JsonStr);
	    JsonStr = JSON.stringify(JsonStr);
	    $.ajax({
	   		url : KingServices.build_url('financialGuide', 'updateGuideChecking'),
	   		type : "POST",
	   		data : {financialGuideListStr : encodeURIComponent(JsonStr), menuKey : menuKey, operation : 'update'}
	    }).done(function(data){
	   		if(showDialog(data)){
	   			showMessageDialog($( "#confirm-dialog-message" ),data.message);
	   			if(!!isClose){
 	    			Tools.closeTab(Tools.getTabKey($tab.prop('id')));
 	    			FinGuide.getList(FinGuide.listPageNo);
 	    		}else{
 	    			FinGuide.checkingList(FinGuide.checkingPageNo, FinGuide.checkingId);
 	    		}
	   		}
	    });
	};

	FinGuide.clearing = function(id){
		FinGuide.$clearingTab = null;
		FinGuide.clearingId = id;
		FinGuide.clearingList(0, id);
	};

	FinGuide.clearingList = function(page, id){
		var args = {
			pageNo : (page || 0),
			guideId : id,
			year: FinGuide.$tab.find('.T-search-year').val(),
			start_month : 1,
			end_month : 12,
			menuKey : menuKey,
			operation : "view"
		};
		if(!!FinGuide.$clearingTab){
			args = {
				pageNo : (page || 0),
				shopId : id,
				year: FinGuide.$clearingTab.find('.T-search-year').val(),
				start_month : FinGuide.$clearingTab.find('.T-search-start-month').val(),
				end_month : FinGuide.$clearingTab.find('.T-search-end-month').val(),
				menuKey : menuKey,
				operation : "view"
			};
		}
		FinGuide.clearingPageNo = args.pageNo;
		$.ajax({
			url : KingServices.build_url('financialGuide', 'listGuideSettlement'),
			type : 'POST',
			data : args
		}).done(function(data){
			if(showDialog(data)){
				data.monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
				Tools.addTab(clearMenuKey, "导游结算", guideClearingTemplate(data))
				FinGuide.GC_event();
			}
		});
	};
	FinGuide.GC_event = function(){
		FinGuide.$clearingTab = $('#tab-' + clearMenuKey + '-content');
		//搜索顶部的事件绑定
		var $searchArea = FinGuide.$clearingTab.find('.T-search-area');
		$searchArea.find('.T-btn-search').on('click', function(event){
			FinGuide.clearingList(0, FinGuide.clearingId);
		});
		FinGuide.$clearingTab.find('.T-guide-records').on('click', function(event){
			event.preventDefault();
			FinGuide.records();
		});
		FinGuide.$clearingTab.find('.T-list').on('click', '.T-action', function(event){
			event.preventDefault();
			var $that = $(this);
			if($that.hasClass('T-save')){
				FinGuide.saveClearing($that, $that.data('entity-id'));
			}else if($that.hasClass('T-checkDetail')){
				FinGuide.checking(FinGuide.clearingId, $that.data('entity-year'), $that.data('entity-month'));
			}
		});
	};

	FinGuide.records = function(){
		$.ajax({
			url : KingServices.build_url('financialGuide', 'listFinancialGuideSettlementRecord'),
			type:"POST",
			data: {guideId : FinGuide.clearingId}
		}).done(function(data){
			if(showDialog(data)){
				if(data.financialGuideSettlementRecordList.length == 0){
        			showMessageDialog($( "#confirm-dialog-message" ),"暂时还没有操作记录");
        		}else{
		    		var blanceRecordsTemplateLayer =layer.open({
		    			type: 1,
					    title:"操作记录",
					    skin: 'layui-layer-rim', //加上边框
					    area: '60%', //宽高
					    zIndex:1030,
					    content: guideRecords(data),
					    scrollbar: false, // 推荐禁用浏览器外部滚动条
					    success: function(){}
		    		})
        		}
			}
		});
	};

	FinGuide.saveClearing = function($that, id){
		var $tr = $that.closest('tr'),
		payMoney = $tr.find('input[name=payMoney]').val(),
		payType = $tr.find("select[name='payType'] :selected").text(),
		remark = $tr.find(" input[name='remark']").val();
		$.ajax({
			url : KingServices.build_url('financialGuide', 'saveFinancialGuideSettlement'),
			type : 'POST',
			data : {id : id, payMoney : payMoney, payType : payType, remark : remark}
		}).done(function(data){
			if(showDialog(data)){
				showMessageDialog($( "#confirm-dialog-message" ),data.message);
				FinGuide.clearingList(FinGuide.clearingPageNo, FinGuide.clearingId);
			}
		});
	};

	/**
	 * 导出报表
	 * @param  {string} guideName 导游名
	 * @param  {string} year     年份
	 * @param  {string} month    月份
	 */
	FinGuide.exportReport = function(guideName, year, month){
		var url = APP_ROOT+"back/export.do?method=guide&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&guideId="+FinGuide.checkingId+"&guideName="+guideName+"&year="+year+"&month="+month+"&sortType=auto";
	    exportXLS(url);
	};

	// 暴露方法
	exports.init = FinGuide.initModule;
});