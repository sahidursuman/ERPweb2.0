define(function(require, exports) {
	var rule = require("./rule"),
		menuKey = "financial_ticket",
		listTemplate = require("./view/list"),
		billImagesTemplate = require("./view/billImages"),
		ticketChecking = require("./view/TicketChecking"),
		ticketClearing = require("./view/TicketClearing"),
		blanceRecords = require("./view/ticketRecords"),
		checkMenuKey = menuKey + '_checking',
		clearMenuKey = menuKey + '_clearing';

	var Ticket = {
		$tab : false
	};

	Ticket.initModule = function(){
		Ticket.$tab = null;
		Ticket.getList();
	};

	Ticket.getList = function(page){
		var args = {
			pageNo : (page || 0),
			ticketId : "",
			year : 2015,
			month : ""
		};
		if(!!Ticket.$tab){
			args = {
				pageNo : (page || 0),
				ticketId : Ticket.$tab.find('.T-search-name').val(),
				year : Ticket.$tab.find('.T-search-year').val(),
				month : Ticket.$tab.find('.T-search-month').val()
			};
		}
		$.ajax({
			url : KingServices.build_url('financial/financialTicket', 'listSumFcTicket'),
			type : 'POST',
            data : args
		}).done(function(data){
			if(showDialog(data)){
				data.companyNameListNew = JSON.parse(data.companyNameListNew);
				data.yearList = [{value : '2015'}, {value : '2014'}, {value : '2013'}];
				data.monthList = [{value : 1}, {value : 2}, {value : 3}, {value : 4}, {value : 5}, {value : 6}, {value : 7}, {value : 8}, {value : 9}, {value : 10}, {value : 11}, {value : 12}];
				Tools.addTab(menuKey, "票务账务", listTemplate(data));
				Ticket.init_event();
				// 缓存页面
				Ticket.listPageNo = args.pageNo;
				// 绑定翻页组件
				laypage({
				    cont: Ticket.$tab.find('.T-pagenation'), 
				    pages: data.totalPage, //总页数
				    curr: (data.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		Ticket.getList(obj.curr -1);
				    	}
				    }
				});	
			}
		});
	};

	Ticket.init_event = function(){
		Ticket.$tab = $("#tab-"+menuKey+"-content");
		/**
		 * 搜索顶部的事件绑定
		 */
		var $searchArea = Ticket.$tab.find('.T-search-area');
		$searchArea.find('.T-btn-search').on('click', function(event) {
			event.preventDefault();
			Ticket.getList();
		});
		// 报表内的操作
		Ticket.$tab.find('.T-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id');
			if ($that.hasClass('T-check'))  {
				// 对账
				Ticket.checking(id);
			} else if ($that.hasClass('T-balance'))  {
				// 结算
				Ticket.clearing(id);
			}
		});
	};

	Ticket.checking = function(id){
		Ticket.$checkingTab = null;
		Ticket.checkingId = id;
		Ticket.checkingList(0, id);
	};

	Ticket.checkingList = function(page, id){
		var args = {
			pageNo : (page || 0),
			ticketId : id || Ticket.checkingId
		};

		$.ajax({
			url : KingServices.build_url('financial/financialTicket', 'listFcTicket'),
			type : "POST",
			data : args
		}).done(function(data){
			if(showDialog(data)){
				data.financialTicketList = JSON.parse(data.financialTicketList);
				Tools.addTab(checkMenuKey, "票务对账", ticketChecking(data));
				Ticket.check_event();
			}
		});
	};

	Ticket.check_event = function(){
		Ticket.$checkingTab = $("#tab-" + checkMenuKey + "-content");
	};

	Ticket.clearing = function(id){
		Ticket.$clearingTab = null;
		Ticket.clearingId = id;
		Ticket.clearingList(0, id);
	};

	Ticket.clearingList = function(page, id){
		var args = {
			pageNo : (page || 0),
			ticketId : id || Ticket.clearingId
		};
		if(Ticket.$clearingTab){
			args = {
				pageNo : (page || 0),
				ticketId : id || Ticket.clearingId
			};
		}

		$.ajax({
			url : KingServices.build_url('financial/financialTicket', 'listSumFcTicket'),
			type : "POST",
			data : args
		}).done(function(data){
			if(showDialog(data)){
				data.companyNameListNew = JSON.parse(data.companyNameListNew);
				Tools.addTab(clearMenuKey, "票务结算", ticketClearing(data));
				Ticket.clear_init();
			}
		});
	};

	Ticket.clear_init = function(){
		Ticket.$clearingTab = $("#tab-" + clearMenuKey + "-content");
		var $searchArea = Ticket.$clearingTab.find('.T-search-area');
		$searchArea.find('.T-btn-search').on('click', function(event) {
			event.preventDefault();
			Ticket.clearingList(0, Ticket.clearingId);
		});
		Ticket.$clearingTab.find('.T-records').on('click', function(event){
			event.preventDefault();
			Ticket.records();
		});

		// 报表内的操作
		Ticket.$tab.find('.T-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id');
			if ($that.hasClass('T-check'))  {
				// 对账
				//Ticket.checking(id);
			} else if ($that.hasClass('T-balance'))  {
				// 结算
				//Ticket.clearing(id);
			}
		});
	};

	//查看操作历史记录
	Ticket.records = function(){
		$.ajax({
			url : KingServices.build_url('financial/financialTicket', 'listFcTicketSettlementRecord'),
			type : "POST",
			data : {ticketId : Ticket.clearingId}
		}).done(function(data){
			if(showDialog(data)){
				layer.open({
	    			type: 1,
				    title:"操作记录",
				    skin: 'layui-layer-rim', //加上边框
				    area: '60%', //宽高
				    zIndex:1030,
				    content: blanceRecords(data),
				    scrollbar: false, // 推荐禁用浏览器外部滚动条
				    success: function(){}
	    		});
			}
		});
	};

	exports.init = Ticket.initModule;
});