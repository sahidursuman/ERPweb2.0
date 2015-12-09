define(function(require, exports) {
	var rule = require("./rule");
		menuKey = "financial_insure",
	    listTemplate = require("./view/list"),
	    billImagesTemplate = require("./view/billImages"),
	    insuranceChecking = require("./view/insureChecking"),
	    insureClearing = require("./view/insureClearing"),
		tabId = "tab-"+menuKey+"-content",
	    checkTabId = menuKey+"-checking",
	    blanceTabId = menuKey+"-blance";

	var  Insure = {
		searchData : false,
        $tab :false,
        $checkTab : false,
        $clearTab : false,
        $searchArea : false,
        $checkSearchArea: false,
        $clearSearchArea : false,
        selfList : false,
        clearTempData : false,
        clearTempSumDate : false
	};

	Insure.initModule = function() {
		var dateJson = FinancialService.getInitDate();
        Insure.listInsure(0,"","",dateJson.startDate,dateJson.endDate);
   	};
  	Insure.listInsure = function(pageNo,insuranceName,insuranceId,startDate,endDate){
  		if (Insure.$searchArea && arguments.length === 1) {
            // 初始化页面后，可以获取页面的参数
            insuranceName = Insure.$searchArea.find("input[name=insuranceName]").val(),
            insuranceId = Insure.$searchArea.find("input[name=insuranceId]").val(),
            startDate = Insure.$searchArea.find("input[name=startDate]").val(),
            endDate = Insure.$searchArea.find("input[name=endDate]").val()
    	}
    	if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }
        insuranceName = (insuranceName == "全部") ? "" : insuranceName;

  		Insure.searchData={
  			pageNo : page,
  			insuranceName : insuranceName,
  			insuranceId : insuranceId,
  			startDate : startDate,
  			endDate : endDate,
  			sortType: 'auto'
  		};
  		var searchParam = JSON.stringify(Insure.searchData);
	  	$.ajax({
	       url:KingServices.build_url("account/insuranceFinancial","listSumFinancialInsurance"),
			type:"POST",
			data:{ searchParam : searchParam },
	        success: function(data){
	            var result = showDialog(data);
	            if (result) {
	                var html = listTemplate(data);
	                Tools.addTab(menuKey,"保险账务",html);
	                Insure.initList(startDate,endDate);

	                // 绑定翻页组件
                    laypage({
                        cont: Insure.$tab.find('.T-pagenation'),
                        pages: data.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                Insure.listInsure(obj.curr -1);
                            }
                        }
                    });
	            }
        	}
    	});
  	};

  	Insure.initList = function(startDate,endDate){
        // 初始化jQuery 对象
        Insure.$tab = $('#' + tabId);
        Insure.$searchArea=Insure.$tab.find('.T-search-area');

        Insure.getQueryList();
        FinancialService.initDate(Insure.$tab);

 		//搜索按钮事件
        Insure.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            Insure.listInsure(0);
        });
        // 报表内的操作
        Insure.$tab.find('.T-list').on('click', '.T-option', function(event) {
            event.preventDefault();
            var $that = $(this),
            	id = $that.closest('tr').data('id'),
                yearList = Insure.$searchArea.find("select[name=year]").val(),
                monthList = Insure.$searchArea.find("select[name=month]").val();
                console.log(id);

            if ($that.hasClass('T-check')) {
                // 对账
                Insure.GetChecking(0,id,yearList,monthList);
            } else if ($that.hasClass('T-clear')) {
                // 结算
                Insure.getClearing(0,id,2015,1,12);
            }
        });
    };
	  	// 保险对账
		Insure.GetChecking = function(page,id,year,month){
	  		Insure.checkSearchData = {
	  			pageNo : page,
	  			id:id,
                year : year,
                month : month,
	  		};
			$.ajax({
		       url:KingServices.build_url("financial/financialInsurance","listFcInsurance"),
				type:"POST",
				data:Insure.checkSearchData,
				success : function(data){
					console.log(data);
					var result = showDialog(data);
					if(result){
					data.yearList = yearList
	            	data.monthList = monthList
						var html = insuranceChecking(data);
		  				Tools.addTab(checkTabId,"保险对账",html);
		  				 Insure.initList();


						//关闭页面事件
			        	$(".T-Checking").find(".T-closeTab").click(function(){
				            Tools.closeTab(checkTabId);
				        });
					    //给全选按钮绑定事件
							$(".T-Checking").find(".T-selectAll").click(function(event) {
								var checkboxList = $(".T-Checking").find(".T-checkListNum tr input[type=checkbox]");
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
		  				
						}
				}
		});

		}
	  	// 结算
	  	Insure.getClearing = function(page,insuranceId,year,startMonth,endMonth){
	  		Insure.ClearSearchData = {
	  			pageNo:page,
	  			insuranceId : insuranceId,
	  			year : year,
	  			monthStart:startMonth,
	  			monthEnd : endMonth ,
	  			sortType : 'auto'
	  		}
	  		$.ajax({
		       url:KingServices.build_url("financial/financialInsurance","listFcInsuranceSettlement"),
				type:"POST",
				data:Insure.ClearSearchData,
				success : function(data){
					console.log(data);
					var result = showDialog(data);
					if(result){
						data.yearList = yearList
	            		data.monthList = monthList
						var html = insureClearing(data);
		  				Tools.addTab("-Clearing","操作记录",html);
		  				Insure.initList();
		  				$(".T-insureClearing").find('.T-Records').click(function(event) {
		  					alert();
		  					event.preventDefault();
		  					Insure.lookRecord();
		  				});
					}
				}
		  	});	
	  	}
	  	// 查看操作记录
	  	Insure.lookRecord = function(){
	  		var html = blanceRecords();
	  		var RecordsLayer =layer.open({
    			type: 1,
			    title:"操作记录",
			    skin: 'layui-layer-rim', //加上边框
			    area: '60%', //宽高
			    zIndex:1030,
			    content: html,
			    scrollbar: false, // 推荐禁用浏览器外部滚动条
			    success: function(){}
        	})

	  	}

	Insure.getQueryList = function(){
        var $Insure = Self.$tab.find(".T-chooseInsure"),
            insureList = data.insuranceNameList;
        if(insureList != null && insureList.length > 0){
            for(var i=0;i<insureList.length;i++){
            	insureList[i].id = insureList[i].insuranceId;
                insureList[i].value = insureList[i].insuranceName;
            }
        }
        var all = {
            id : "",
            value : "全部"
        };
        insureList.unshift(all);

        //车队
        $Insure.autocomplete({
            minLength: 0,
            source : insureList,
            change: function(event,ui) {
                if (!ui.item)  {
                    $(this).nextAll('input[name="insuranceId"]').val('');
                }
            },
            select: function(event,ui) {
                $(this).blur().nextAll('input[name="insuranceId"]').val(ui.item.id);
            }
        }).on("click",function(){
            $Insure.autocomplete('search','');
        });      
    };

	exports.init = Insure.initModule;
});
