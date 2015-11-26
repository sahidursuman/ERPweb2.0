/**
 * 财务管理——保险账务模块
 *
 * 对账、结算信息
 * 显示保险账务列表
 */
define(function(require, exports) {
	alert();
	var rule = require("./rule");
		menuKey = "financial_insure",
	    listTemplate = require("./view/list"),
	    billImagesTemplate = require("./view/billImages"),
	    blanceRecords = require("./view/insuranceRecords"),
	    insuranceChecking = require("./view/insureChecking"),
	    insureClearing = require("./view/insureClearing"),
		tabId = "tab-"+menuKey+"-content",
	    checkTabId = menuKey+"-checking",
	    blanceTabId = menuKey+"-blance",
	    yearList=[],
	    monthList = [];
	    // travelAgencyList,
     //    partnerAgencyList,
     //    validator;
	    for(var i=2013;i<=new Date().getFullYear();i++){
	    	var yeardata={"value":i}
	    	yearList.push(yeardata)
	    }
	    for(var j = 1;j<=12;j++){
	    	var monthData = {"value":j}
	    	monthList.push(monthData);
	    }
	    Insure = {
	    	searchData: false,
	        $tab: false,
	        $searchArea: false,
	        $checkSearchArea: false,
	        $clearSearchArea : false,
	        partnerAgencyList : false,
	        travelAgencyList : false,
	        edited : {},
	        oldBlanceInsureId : false,
	        oldCheckInsureId : false
	    }
	     Insure.initModule = function() {
        Insure.listInsure(0,"","","","","","");
    }
  	

	Insure.listInsure = function(pageNo,insuranceId,year,month){
        if (Insure.$searchArea && arguments.length === 1) {
            // 初始化页面后，可以获取页面的参数
            insuranceId = Insure.$searchArea.find(".insuranceId").val(),
            year = Insure.$searchArea.find(".year").val(),
            month = Insure.$searchArea.find(".month").val(),
     
        
        // 修正页码
        page = page || 0;
        //重置搜索条件
        Insure.searchData = {
            pageNo : page,
            insuranceId : insuranceId,
            year : year,
            month : month,
            sortType: 'auto'
        };
        $.ajax({
            url:KingServices.build_url("financial/financialInsuranceSettlementList","insurance"),
            type: "POST",
            data: Insure.searchData,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    Insure.listInsure = JSON.parse(data.partnerAgencySet);
                    Insure.listInsure = JSON.parse(data.travelAgencySet);
                    var html = listTemplate(data);
                    addTab(menuKey,"保险账务",html);

                    Insure.initList();
                    // 绑定翻页组件
                    laypage({
                        cont: Insure.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                        pages: data.searchParam.totalPage, //总页数
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                Insure.listInsure(obj.curr - 1);
                            }
                        }
                    });
                }
            }
        });
    };
	    
  };
      Insure.initList = function(){
        // 初始化jQuery 对象
        Insure.$tab = $('#' + tabId);
        Insure.$searchArea = Insure.$tab.find('.T-search-area');

        Insure.getPartnerAgencyList(Insure.$tab.find('.choosePartnerAgency'));
        Insure.getTravelAgencyList(Insure.$tab.find('.chooseTravelAgency'));

        //搜索按钮事件
        Insure.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            Insure.listInsure(0);
        });

        // 报表内的操作
        Insure.$tab.find('.T-list').on('click', '.T-option', function(event) {
            event.preventDefault();
            var $that = $(this),id = $that.closest('tr').data('id');

            if ($that.hasClass('T-check')) {
                // 对账
                Insure.InsureCheck(0,id,"","");
            } else if ($that.hasClass('T-clear')) {
                // 结算
                Insure.InsureClear(id,"","","");
            }
        });
    };
	
	exports.listInsure = Insure.listInsure;
	// exports.isEdited = Insure.isEdited;
	// exports.save = Insure.save;
	// exports.clearEdit = Insure.clearEdit;
});
