/**
 * 财务管理--冲抵明细
 *
 * by AvenStar 2016-3-29
 */
define(function(require, exports) {
	//模板加载
	var menuKey = "financial_offsetByDetail",
        listMainTemplate = require("./view/listMain"),
        offsetDetailTemplate = require("./view/offsetDetail"),
        blanceDetailTemplate=require("./view/blanceDetail");

    //定义一个冲抵明细对象
	var offsetByDetail={
		$tab:false,
        $addLayer:"",
        resourceType:22,
        $blanceTab:'',
        $detailTab:''
	};
	
	offsetByDetail.initModule = function() {
        var args = FinancialService.getInitMothDate();
            args.resourceType=offsetByDetail.resourceType;
        offsetByDetail.getList(0,args);
    };

    //初始化页面
    offsetByDetail.getList=function(page,args) {
    	//修正页面
        if (!!offsetByDetail.$tab && arguments.length==1) {
             var $tab=offsetByDetail.$tab;
             args={
                resourceType:offsetByDetail.getVal($tab,"resourceType"),
                resourceId:offsetByDetail.getVal($tab,"resourceId"),
                resourceName:offsetByDetail.getVal($tab,"resourceName"),
                startDate:offsetByDetail.getVal($tab,"startDate"),
                endDate:offsetByDetail.getVal($tab,"endDate"),
             }
        };
    	var pageNo=page || 0;
        args.pageNo=pageNo;
        $.ajax({
            url:KingServices.build_url("cash","findListPager"),
            type: 'POST',
            data:args
        })
        .done(function(data) {
            if( showDialog(data)){
                Tools.addTab(menuKey, "冲抵账款", listMainTemplate(data));
                //初始化Tab
                offsetByDetail.$tab=$("#tab-"+menuKey+"-content");
                offsetByDetail.initMain_event($("#tab-"+menuKey+"-content"));
                // 绑定翻页组件
                laypage({
                    cont: offsetByDetail.$tab.find('.T-pagenation'),
                    pages: data.searchParam.totalPage, //总页数
                    curr: (data.searchParam.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) { // 避免死循环，第一次进入，不调用页面方法
                            offsetByDetail.getList(obj.curr - 1);
                        }
                    }
                });

            }
        });
    	
    };
    //初始化事件
    offsetByDetail.initMain_event=function($tab){
        Tools.setDatePicker($tab.find('.datepicker'), true);
        //搜索
    	$tab.find('.T-btn-search').off('click').on('click',function(event) {
    		event.preventDefault();
    		/* Act on the event */
            offsetByDetail.getList(0);
    	});

        //资源类型切换后清空对方单位
        $tab.find('.T-resourceType').off('change').on('change', function(event) {
            event.preventDefault();
            /* Act on the event */
            $tab.find('[name=resourceName]').val('');
        });

        //余额、查看
        $tab.find('.T-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            /* Act on the event */
            //余额 payStatus=4  明细 payStatus=3
            var $that=$(this),
                 resourceId=$that.closest('tr').attr('data-resourceId'),
                 resourceType=$that.closest('tr').attr('data-resourceType'),
                 startDate=offsetByDetail.getVal($tab,"startDate"),
                 endDate=offsetByDetail.getVal($tab,"endDate");
            if ($that.hasClass('T-income')) {
                // 余额
                offsetByDetail.offsetBlanceDetail(0,resourceId,resourceType,4,startDate,endDate);
                
            } else if($that.hasClass('T-viewDetails')){
                // 查看
                offsetByDetail.offsetViewDetail(0,resourceId,resourceType,3,startDate,endDate);
            }
        });
        //主营业务收付类别
        offsetByDetail.getResourceList($tab.find('[name=resourceName]'),$tab);
    };

    /**
     * [offsetBlanceDetail 冲抵明细-支出余额]
     * @param  {[type]} resourceId   [对方单位ID]
     * @param  {[type]} resourceType [对方单位Type]
     * @param  {[type]} payStatus    [余额明细标识]
     * @return {[type]}              [description]
     */
    offsetByDetail.offsetBlanceDetail=function(pageNo,resourceId,resourceType,payStatus,startDate,endDate){
        if (!!offsetByDetail.$blanceTab && arguments.length==1) {
            var voucher=offsetByDetail.getVal(offsetByDetail.$blanceTab,"voucher"),
                startDate=offsetByDetail.getVal(offsetByDetail.$blanceTab,"startDate"),
                endDate=offsetByDetail.getVal(offsetByDetail.$blanceTab,"endDate"),
                resourceId=offsetByDetail.getVal(offsetByDetail.$blanceTab,"resourceId"),
                resourceType=offsetByDetail.getVal(offsetByDetail.$blanceTab,"resourceType"),
                payStatus=offsetByDetail.getVal(offsetByDetail.$blanceTab,"payStatus");
        }
        var pageNo=pageNo || 0;
        var searchParam={
            pageNo:pageNo,
            voucher:voucher,
            resourceId:resourceId,
            resourceType:resourceType,
            payStatus:payStatus,
            startDate:startDate,
            endDate:endDate
        };
        searchParam=JSON.stringify(searchParam);
        $.ajax({
            url:KingServices.build_url("cash","findPager"),
            type: 'POST',
            data:"searchParam="+searchParam,
        })
        .done(function(data) {
            if( showDialog(data)){
                data.result = JSON.parse(data.result);
                data.resourceId=resourceId;
                data.resourceType=resourceType;
                data.payStatus=payStatus;
                var tab_Title='预收账款明细';
                if (resourceType==20) {
                    tab_Title='预付账款明细';
                }
                Tools.addTab(menuKey+"-blance", tab_Title, blanceDetailTemplate(data));
                offsetByDetail.$blanceTab=$("#tab-"+menuKey+"-blance-content");
                offsetByDetail.initBlance_event(offsetByDetail.$blanceTab);

                // 绑定翻页组件
                laypage({
                    cont: offsetByDetail.$blanceTab.find('.T-pagenation'),
                    pages: data.searchParam.totalPage, //总页数
                    curr: (data.searchParam.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) { // 避免死循环，第一次进入，不调用页面方法
                            offsetByDetail.offsetBlanceDetail(obj.curr - 1);
                        }
                    }
                });
            }
        })
    };
   
    //支出
    offsetByDetail.offsetViewDetail=function(pageNo,resourceId,resourceType,payStatus,startDate,endDate){
         if (!!offsetByDetail.$detailTab && arguments.length==1) {
            var voucher=offsetByDetail.getVal(offsetByDetail.$detailTab,"voucher"),
                startDate=offsetByDetail.getVal(offsetByDetail.$detailTab,"startDate"),
                endDate=offsetByDetail.getVal(offsetByDetail.$detailTab,"endDate"),
                resourceId=offsetByDetail.getVal(offsetByDetail.$detailTab,"resourceId"),
                resourceType=offsetByDetail.getVal(offsetByDetail.$detailTab,"resourceType"),
                payStatus=offsetByDetail.getVal(offsetByDetail.$detailTab,"payStatus");
        };
        var pageNo=pageNo || 0;
        var searchParam={
            pageNo:pageNo,
            voucher:voucher,
            resourceId:resourceId,
            resourceType:resourceType,
            payStatus:payStatus,
            startDate:startDate,
            endDate:endDate
        };
        searchParam=JSON.stringify(searchParam);
        $.ajax({
            url:KingServices.build_url("cash","findPager"),
            type: 'POST',
            data:"searchParam="+searchParam,
        })
        .done(function(data) {
            if( showDialog(data)){
                data.result = JSON.parse(data.result);
                data.resourceId=resourceId;
                data.resourceType=resourceType;
                data.payStatus=payStatus;
                Tools.addTab(menuKey+"-detail", "冲抵明细", offsetDetailTemplate(data));
                offsetByDetail.$detailTab=$("#tab-"+menuKey+"-detail-content");
                offsetByDetail.initDetail_event(offsetByDetail.$detailTab);
                //统计明细金额
                offsetByDetail.getTotal(searchParam);
                // 绑定翻页组件
                laypage({
                    cont: offsetByDetail.$detailTab.find('.T-pagenation'),
                    pages: data.searchParam.totalPage, //总页数
                    curr: (data.searchParam.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) { // 避免死循环，第一次进入，不调用页面方法
                            offsetByDetail.offsetViewDetail(obj.curr - 1);
                        }
                    }
                });
            }
        })
    };

    //金额
    offsetByDetail.initBlance_event=function($tab){
        Tools.setDatePicker($tab.find('.datepicker'), true);
        $tab.find('.T-blance-search').off('click').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            offsetByDetail.offsetBlanceDetail(0);
        });  
    };

    //统计金额
    offsetByDetail.getTotal=function(searchParam){
        $.ajax({
           url : KingServices.build_url('cash', 'findTotal'),
            type : "POST",
            data : "searchParam="+searchParam,
            showLoading: false
        })
        .done(function(data) {
             offsetByDetail.$detailTab.find('.T-total').text(data.total.incomeMoney*1+data.total.payMoney*1);
        })
    };

    //明细
    offsetByDetail.initDetail_event=function($tab){
        Tools.setDatePicker($tab.find('.datepicker'), true);
        $tab.find('.T-detail-search').off('click').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            offsetByDetail.offsetViewDetail(0);
        }); 

        $tab.find('.T-view').off('click').on('click',function(event) {
            event.preventDefault();
            var $that=$(this);id=$that.closest('tr').data('id');
            /* Act on the event */
            KingServices.viewDetails(id);
        });      
    };

    /**
     * [getResourceList 获取对方单位]
     * @param  {[type]} $obj         [对方单位对象]
     * @param  {[type]} resourceType [资源类型]
     * @return {[type]}           
     */
    offsetByDetail.getResourceList = function($obj,$tab) {
        $obj.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (!ui.item) {
                   $(this).val('').nextAll('[name=resourceId]').val('');
                }
            },
            select: function(event, ui) {
                $(this).val(ui.item.name).nextAll('[name=resourceId]').val(ui.item.id).trigger('change');
            }
        }).off('click').on('click', function() {
            var resourceType = $tab.find('[name=resourceType]').val();
            if (!resourceType) { 
                return;
            }
            $.ajax({
                url:KingServices.build_url("cash","findUnits"),
                type: 'POST',
                data:"resourceType="+resourceType,
            })
            .done(function(data) {
                if (showDialog(data)) {
                    var list = data.units;
                    if (list != null && list.length > 0) {
                        for (var i = 0; i < list.length; i++) {
                            list[i].value = list[i].name;
                            list[i].id = list[i].id;
                        };
                    } else {
                        layer.tips('没有内容', $obj, {
                            tips: [1, '#3595CC'],
                            time: 2000
                        });
                    }
                    $obj.autocomplete('option', 'source', list);
                    $obj.autocomplete('search', '');
                }
            });
        })
    };


     /**
     * [loadResTypeSelect 会计科目加载资源]
     * @param  {[type]} resTypeText [会计科目Text]
     * @param  {[type]} $container  [容器]
     * @return {[type]}             [description]
     */
    offsetByDetail.loadResTypeSelect =function(resTypeText, $container){
        if (resTypeText==="预收账款" || resTypeText==="预付账款") {
                $container.find('.T-resType').removeClass('hidden');
                $container.find('[name=resourceType]').addClass('T-resourceType');
            }else{
                $container.find('.T-resType').addClass('hidden');
                $container.find('[name=resourceType]').removeClass('T-resourceType');
            }
        var resPayTypeList=[{id:'20',name:'酒店'}],resRecTypeList=[{id:'21',name:'购物'},{id:'22',name:'客户'}],resTypeOption='';
        if (resTypeText==="预付账款") {
           for(var i = 0; i < resPayTypeList.length; i++){
             resTypeOption+="<option  value=" + resPayTypeList[i].id + ">" + resPayTypeList[i].name + "</option>";
           }
        }
        if (resTypeText==="预收账款") {
            for(var i = 0; i < resRecTypeList.length; i++){
             resTypeOption+="<option  value=" + resRecTypeList[i].id + ">" + resRecTypeList[i].name + "</option>";
           }
        }
        $container.find(".T-resourceType").html(resTypeOption);
        $container.find('input[name=resourceName]').val('').next().val('');
    };

    /**
     * [getVal 获取控件值]
     * @param  {[type]} $tab 父容器
     * @param  {[type]} name [控件名称name]
     * @return {[type]}      [description]
     */
    offsetByDetail.getVal=function($tab,name){
        return $tab.find('[name='+name+']').val();
    };

   	exports.init = offsetByDetail.initModule;
})