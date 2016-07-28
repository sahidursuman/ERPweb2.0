/**
 * 财务管理--导游借款
 *
 * by 廖佳玲
 */
define(function(require, exports){
	var listTemplate = require("./view/list"),
		menuKey = "financial_guide_borrow_money";

	var guideBorrow = {
		$tab : false
	};
	/**
	 * 初始化模块
	 */
	guideBorrow.initModule = function(){
		var args = FinancialService.getInitDate();
		args.pageNo = 0;
		args.accountStatus = 2;
        args.businessName = '';
        args.businessGroupId = '';
        args.groupName = '';
        args.groupId = '';
		guideBorrow.getList(args);
	};
	guideBorrow.getList = function(args,$tab){
		if(!!$tab){
			args.pageNo = args.pageNo || 0;
			args.guideId = $tab.find('input[name=guideId]').val();
			args.guideName = $tab.find('input[name=guideName]').val();
			args.startDate = $tab.find('input[name=startDate]').val();
			args.endDate = $tab.find('input[name=endDate]').val();
			args.accountStatus = $tab.find(".T-borrow-status").find("button").data("value");
			args.businessName = $tab.find('[name=departmentName]').val();
            args.businessGroupId = $tab.find('[name=departmentId]').val();
            args.groupName = $tab.find('[name=childDepartmentName]').val();
            args.groupId = $tab.find('[name=childDepartmentId]').val();
		}
		args.guideName = (args.guideName == "全部") ? "" : args.guideName;
		if($tab && $tab.data("searchEdit")){
			args.pageNo = 0;
			$tab.data('searchEdit', false);
		}

		$.ajax({
			url: KingServices.build_url("account/guideFinancial","guideLoanList"),
			type: 'POST',
			data: {searchParam: JSON.stringify(args)},
		})
		.done(function(data) {
			if(showDialog(data)){
				data.searchParam = args;
				Tools.addTab(menuKey, "导游借款", listTemplate(data));
				guideBorrow.$tab = $("#tab-" + menuKey + "-content");
				guideBorrow.initList(guideBorrow.$tab,args);

				//绑定翻页组件
                laypage({
                    cont: guideBorrow.$tab.find('.T-pagenation'),
                    pages: data.totalPage,
                    curr: (args.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) { 
                            args.pageNo = obj.curr-1;
                            guideBorrow.getList(args,guideBorrow.$tab);
                        }
                    }
                });
			}
		});
	};

	guideBorrow.initList = function($tab,args){
		Tools.setDatePicker($tab.find('.datepicker'), true);
		guideBorrow.getGuideList($tab.find('input[name=guideName]'));
		$tab.find(".T-btn-search").off().on('click',function(event) {
			event.preventDefault();
			guideBorrow.getList({pageNo : 0},$tab);
		});
		$tab.find('.T-search-area').on('change', 'input,select', function(event) {
			event.preventDefault();
			$tab.data('searchEdit',true);
		});

		//部门下拉
        FinancialService.getDepartment($tab.find('input[name=departmentName]'));

        //子部门下拉
        FinancialService.getChildDeparment($tab.find('input[name=childDepartmentName]'));

		//状态框选择事件
        $tab.find(".T-borrow-status a").off().on('click',function(event){
            event.preventDefault();
            var $that = $(this);
            $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
            guideBorrow.getList({pageNo : 0},$tab);
        });

        $tab.on("click",'.T-borrow',function(){
        	var $tr = $(this).closest('tr'),
				options = {
					guideId: $tr.data('id'),
					guideName: $tr.data('name'),
					startDate: args.startDate,
					endDate: args.endDate,
					accountStatus : args.accountStatus,
					borrow : true
				};
				options.businessName = $tab.find('[name=departmentName]').val();
            	options.businessGroupId = $tab.find('[name=departmentId]').val();
            	options.groupName = $tab.find('[name=childDepartmentName]').val();
            	options.groupId = $tab.find('[name=childDepartmentId]').val();
			seajs.use(ASSETS_ROOT + modalScripts.financial_guide, function(module){
				module.initPayment(options);
			});
		});
	};

	guideBorrow.getGuideList = function($obj){
		$obj.autocomplete({
	        minLength:0,
	        change :function(event, ui){
	            if(ui.item == null){
	                $obj.val('').nextAll('input[name=guideId]').val('');
	            }
	        },
	        select :function(event, ui){
                $obj.nextAll('input[name=guideId]').val(ui.item.id).trigger('change');
	        }
	    }).one("click",function(){
	    	if(!guideBorrow.guideList){
		    	$.ajax({
		            url:KingServices.build_url('account/guideFinancial','selectGuideName'),
		            showLoading:false,
		            success:function(data){
		                if(showDialog(data)){
		                    var guideList = data.guideList;
		                    if(guideList.length > 0){
		                        for(var i=0; i < guideList.length; i++){
		                        	guideList[i].id = guideList[i].guideId;
		                        	guideList[i].value = guideList[i].guideName;
		                        }
		                        guideList.unshift({id : "",value : "全部"});
		                        guideBorrow.guideList = guideList;
		                        
		                        $obj.autocomplete('option', 'source', guideList);
			                    $obj.autocomplete('search', '');
		                    }
		                }
		            }
		        });
		    } else {
		    	$obj.autocomplete('option', 'source', guideBorrow.guideList);
		    }
	    }).on("click",function(){
	    	if(guideBorrow.guideList){
	    		$obj.autocomplete('search','');
	    	}
        });
	};

	// 暴露方法
	exports.init = guideBorrow.initModule;
});