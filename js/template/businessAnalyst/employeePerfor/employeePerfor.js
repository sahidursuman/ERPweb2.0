/**
 * 员工部门的查询&&列表的显示
 */
define(function(require, exports) {
    var menuKey = "business_analyst_employeePerfor",
        listMainTemplate = require("./view/listMain"),
        listDeptTemplate = require("./view/listDept"),
        listEmployTemplate = require("./view/listEmploy"),
        listSalePerforTemplate = require("./view/listSalePer");
    /**
     * 定义产品销量管理对象
     * @type {Object}
     */
    var PerformanceFun = {
        searchData: false,
        $searchArea: false,
        $tab: false,
    };

    /**
     * 员工业绩页面初始化的方法
     * @return {[type]} [description]
     */
    PerformanceFun.initModule = function() {
        PerformanceFun.listemployeePerfor();
    };

    //产品销量页面list
    PerformanceFun.listemployeePerfor = function() {
        var html = listMainTemplate();
        Tools.addTab(menuKey, "员工业绩", html);
        //初始化页面绑定事件
        PerformanceFun.init_event();
        PerformanceFun.first = true;
    };

    /**
     * 初始化页面绑定事件
     * @return {[type]} [description]
     */
    PerformanceFun.init_event = function() {
        var $tab = $('#tab-' + menuKey + '-content'),
            $searchArea = $tab.find('.T-search-area'),
            $personType = $searchArea.find('.T-select-opUserList'),
            $childDepartment = $searchArea.find('.T-childrenDepartment');
        $status = $searchArea.find('.T-status');

        // 初始化日期绑定
        Tools.setDatePicker($searchArea.find('.datepicker'), true);

        $searchArea.find('.T-select-employeerDept').on('change', function(event) {
            event.preventDefault();
            var index = 2;  // 默认第三个模板

            switch ($(this).val()*1) {
                case 1: // 员工
                    $status.add($childDepartment).addClass('hidden');
                    $personType.removeClass('hidden');

                    index = 0;
                    if ($personType.val() === '0') {
                        index = 1;
                    }
                    break;
                case 2: // 部门
                    $status.add($childDepartment).removeClass('hidden');
                    $personType.addClass('hidden');
                    PerformanceFun.setChildDepartmentList($childDepartment);
                    break;
                case 3: // 子部门
                    $personType.add($childDepartment).addClass('hidden');
                    $status.removeClass('hidden');
                    break;
                default:
                    break;
            }

            var $current = $tab.find('.table-area').children().addClass('hidden').eq(index).removeClass('hidden');

            if (index === 2 || !$current.hasClass('hasData')) {
            	PerformanceFun.getList();
            }
        });

        PerformanceFun.$tab = $tab;
        PerformanceFun.$form = $searchArea;

        // 搜索
        $searchArea.find('.T-search').on('click', function(event) {
            event.preventDefault();
            PerformanceFun.getList();
        }).trigger('click');
    };

    PerformanceFun.getList = function(page) {
        var args = PerformanceFun.$form.serializeJson(),
            url, template, method, index = 0, totalFun,
            childGroupSearchMethod = 'findByChildGroup';

        switch (args.object * 1) {
            case 1:
                delete args.businessGroupId;
                delete args.billStatus;
                method = 'findDutyOPPager';

                template = listEmployTemplate;
                totalFun = PerformanceFun.initFindUserTotal;
                if (args.type == 3) { // 外联销售
                    template = listSalePerforTemplate;
                    totalFun = PerformanceFun.initFindTotal;
                    method = 'findOutOPPager';
                    index = 1;
                }
                break;
            case 2:
                if (!method) {
                    method = 'findByBusinessGroup';
                    if (!!args.businessGroupId) {
                        method = childGroupSearchMethod;
                    }
                }

                template = listDeptTemplate;
                index = 2;
                break;
            case 3:
                method = childGroupSearchMethod;
                delete args.businessGroupId;
                template = listDeptTemplate;
                index = 2;
                break;
            default:
                return;
        }

        args.object;
        args.pageNo = page || 0;

        $.ajax({
            url: KingServices.build_url('performanceOfUser', method),
            type: 'post',
            dataType: 'json',
            data: {
            	searchParam: JSON.stringify(args)
            },
        })
        .done(function(data) {
            if (showDialog(data)) {
                data.isChildGroup = method === childGroupSearchMethod;
                //累加数据初始化
                data.getAdultCount=0;
                data.getChildCount=0;
                data.getNotDirectAdultCount=0;
                data.getNotDirectChildCount=0;
                data.tripCount=0;
                data.adultCount=0;
                data.childCount=0;
                data.transAdultCount=0;
                data.transChildCount=0;
                data.innerAdultCount=0;
                data.innerChildCount=0;
                data.orderCount=0;
                var $container = PerformanceFun.$tab.find('.table-area').children().addClass('hidden')
                .eq(index).html(template(data)).removeClass('hidden').addClass('hasData');

                if (!!totalFun) {
                    totalFun(args);
                }
                laypage({
                    cont: $container.find('.T-pagenation'),
                    pages: data.searchParam.totalPage, //总页数
                    curr: (data.searchParam.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) {  // 避免死循环，第一次进入，不调用页面方法
                            PerformanceFun.getList(obj.curr -1);
                        }
                    }
                }); 
            }
        });
    }

    //外联销售统计
    PerformanceFun.initFindTotal = function(args) {
        $.ajax({
                url: KingServices.build_url("performanceOfUser", "sumFindOutOP"),
                type: 'POST',
                showLoading: false,
                data: "searchParam=" + encodeURIComponent(JSON.stringify(args)),
            })
            .done(function(data) {
                var adultCount = data.adultCount || 0, 
                    childCount = data.childCount || 0;
                PerformanceFun.$tab.find('.T-totalCount').text(adultCount + "大" + childCount + "小");
            })
    }

    //员工业绩统计
    PerformanceFun.initFindUserTotal = function(args) {
        $.ajax({
                url: KingServices.build_url("performanceOfUser", "sumFindDutyOP"),
                type: 'POST',
                showLoading: false,
                data: "searchParam=" + encodeURIComponent(JSON.stringify(args)),
            })
            .done(function(data) {
            	var $tab = PerformanceFun.$tab;
                $tab.find('.T-tripTotalCount').text(data.tripCount);
                $tab.find('.T-adChilTotalCount').text(data.adultCount + "大" + data.childCount + "小");
                $tab.find('.T-transAdChilTotalCount').text(data.transAdultCount + "大" + data.transChildCount + "小");
                $tab.find('.T-innerAdChilTotalCount').text(data.innerAdultCount + "大" + data.innerChildCount + "小");
                $tab.find('.T-orderTotalCount').text(data.orderCount);
                $tab.find('.T-sTotalGrossProfit').text(data.sTotalGrossProfit);
                $tab.find('.T-tTotalGrossProfit').text(data.tTotalGrossProfit);
                $tab.find('.T-sPreTotalGrossProfit').text(data.sPreTotalGrossProfit);
                $tab.find('.T-tPreTotalGrossProfit').text(data.tPreTotalGrossProfit);
            })
    }


    //部门统计
    PerformanceFun.initFindBusinessGroupTotal = function(args) {
    	var method = 'sumFindByChildGroup';

        if (!!args.object && args.object==2 && !!args.businessGroupId) {
            method = 'sumFindByChildGroup';
        }else if (!!args.object && args.object==2 && !args.businessGroupId) {
            method = 'sumFindByBusinessGroup';
        }

        $.ajax({
                url: KingServices.build_url("performanceOfUser", method),
                type: 'POST',
                data: "searchParam=" + encodeURIComponent(JSON.stringify(args)),
            })
            .done(function(data) {
            	var $tab = PerformanceFun.$tab;

                $tab.find('.T-tripTotalCount').text(data.tripCount);
                $tab.find('.T-tripAdChildCount').text(data.adultCount + "大" + data.childCount + "小");
                $tab.find('.T-tripNotDirectAdChildCount').text(data.getNotDirectAdultCount + "大" + data.getNotDirectChildCount + "小");
                $tab.find('.T-sumAdultCount').text(data.getAdultCount + "大" + data.getChildCount + "小");
                $tab.find('.T-transAdChilTotalCount').text(data.transAdultCount + "大" + data.transChildCount + "小");
                $tab.find('.T-innerAdChilTotalCount').text(data.innerAdultCount + "大" + data.innerChildCount + "小");
                $tab.find('.T-orderTotalCount').text(data.orderCount);
            })
    }

    PerformanceFun.setChildDepartmentList = function($feild) {
    	if (!$feild.data('ajax')) {
    		$.ajax({
    			url: KingServices.build_url('group', 'departmentTreeList'),
    			type: 'post',
    			dataType: 'json',
    			showLoading: false
    		})
    		.done(function(data) {
    			if (showDialog(data))  {

    				var list = JSON.parse(data.tree || false);

    				if (!list)  return;
    				$feild.data('ajax', true);

    				for (var i = 0, len = list.length;i < len; i ++) {
    					list[i].value = list[i].name;
    				}

    				list.unshift({
    					id: '',
    					value: '全部'
    				});

			    	$feild.autocomplete({
			    	    minLength: 0,
			    	    source: list,
			    	    change :function(event, ui){
			    	        if(ui.item == null){
			    	            $feild.val('全部').next().val('');
			    	        }
			    	    },
			    	    select :function(event, ui){
			    	        $feild.blur().next().val(ui.item.id);
			    	    }
			    	}).on('click', function() {
		    			$feild.autocomplete('search', '');
			    	});
    			}
    		});
    		
    	}
    }

    exports.init = PerformanceFun.initModule;
});
