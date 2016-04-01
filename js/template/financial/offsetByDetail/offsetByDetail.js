/**
 * 财务管理--冲抵明细
 *
 * by AvenStar 2016-3-29
 */
define(function(require, exports) {
	//模板加载
	var menuKey = "financial_offsetByDetail",
        rule = require("./rule"),
        listTemplate = require("./view/list"),
        addTemplate = require("./view/add");

    //定义一个冲抵明细对象
	var offsetByDetail={
		$tab:false,
        $addLayer:""
	};
	
	offsetByDetail.initModule = function() {
        offsetByDetail.getList(0);
    };

    //初始化页面
    offsetByDetail.getList=function(page) {
    	var args = FinancialService.getInitMothDate();
    	//修正页面
        if (!!offsetByDetail.$tab && arguments.length==1) {
             var $tab=offsetByDetail.$tab;
             args={
                startDate:offsetByDetail.getVal($tab,"startDate"),
                endDate:offsetByDetail.getVal($tab,"endDate"),
                moneyType:offsetByDetail.getVal($tab,"moneyType"),
                resourceType:offsetByDetail.getVal($tab,"resourceType"),
                resourceName:offsetByDetail.getVal($tab,"resourceName"),
                receivableType:offsetByDetail.getVal($tab,"receivableType"),
                receivableTypeId:offsetByDetail.getVal($tab,"receivableTypeId"),
                subjectName:offsetByDetail.getVal($tab,"subjectName"),
                voucher:offsetByDetail.getVal($tab,"voucher"),
                payType:offsetByDetail.getVal($tab,"payType")
             }
        };
    	var pageNo=page || 0;
        args.pageNo=pageNo;
        $.ajax({
            url:KingServices.build_url("cash","findPager"),
            type: 'POST',
            data:args
        })
        .done(function(data) {
            if( showDialog(data)){
                data.result = JSON.parse(data.result);
                Tools.addTab(menuKey, "冲抵明细", listTemplate(data));
                //初始化Tab
                offsetByDetail.$tab=$("#tab-"+menuKey+"-content");
                offsetByDetail.init_event($("#tab-"+menuKey+"-content"));
                //统计收付款合计
                offsetByDetail.getTotal(args);

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
    offsetByDetail.init_event=function($tab){

        Tools.setDatePicker($tab.find('.datepicker'), true);
        //搜索
    	$tab.find('.T-btn-search').off('click').on('click',function(event) {
    		event.preventDefault();
    		/* Act on the event */
            offsetByDetail.getList(0);
    	});

    	$tab.find('.T-btn-add').off('click').on('click', function(event) {
    		event.preventDefault();
    		/* Act on the event */
            offsetByDetail.addOffsetList();
    	});

        //主营业务收付类别
        offsetByDetail.getReceivableTypeList($tab.find('[name=receivableType]'));

    };
    
    //统计收付款合计
    offsetByDetail.getTotal=function(args){
        $.ajax({
           url : KingServices.build_url('cash', 'findTotal'),
            type : "POST",
            data : args,
            showLoading: false
        })
        .done(function(data) {
             offsetByDetail.$tab.find('.T-sumStMoney').text(data.total.incomeMoney);
             offsetByDetail.$tab.find('.T-sumPayMoney').text(data.total.payMoney);
        })
    };

    //新增
    offsetByDetail.addOffsetList =function(){
        //Tools.addTab(menuKey+'-add', "冲抵明细新增", );
        $.ajax({
            url:KingServices.build_url("cash","addIncomeorPay"),
            type: 'POST',
        })
        .done(function(data) {
             if(showDialog(data)){
                offsetByDetail.addLayer = layer.open({
                    type: 1,
                    title:"新增冲抵明细",
                    skin: 'layui-layer-rim', //加上边框
                    area: '800px', //宽高
                    zIndex:1028,
                    content: addTemplate(data),
                    scrollbar: false
                });
                offsetByDetail.addOffset_event($('.T-addOffsetList-container'));
             }
        });
    };

    /**
     * [addOffset_event 新增冲抵明细]
     * @param {[type]} $addOffsetList [新增冲抵明细容器]
     */
    offsetByDetail.addOffset_event=function($addOffsetList){
        //表单验证
        validator = rule.check($addOffsetList);
        FinancialService.datetimepicker($addOffsetList);
        //关闭
        $addOffsetList.find('.T-close').off('click').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            layer.close(offsetByDetail.addLayer);
        });
        $addOffsetList.find('.T-save').off('click').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            if (!validator.form()) { return; }
            offsetByDetail.saveAddOff($addOffsetList);
        });
        $addOffsetList.find('.T-moneyType').off('change').on('change',function(event) {
            event.preventDefault();
            /* Act on the event */
            var $_that=$(this);
            if ($_that.val()==0) { //收入
                $addOffsetList.find('.T-subject0').toggleClass('hide');
                $addOffsetList.find('.T-subject1').toggleClass('hide');
            } else if($_that.val()==1){//支出
                $addOffsetList.find('.T-subject0').toggleClass('hide');
                $addOffsetList.find('.T-subject1').toggleClass('hide');
            }
        });
        //支付方式对应账号
        $addOffsetList.find('.T-payType').off('change').on('change', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $that=$(this);
            if ($that.val()==3 || $that.val()==4) {
                $addOffsetList.find('.T-payType-number').hide().nextAll('').addClass('hide');
            } else if($that.val()==0){ //现金
                $addOffsetList.find('.T-payType-number').show().nextAll().addClass('hide');
                $addOffsetList.find('.T-payType-number-text').text('现金账号：');
            }else if($that.val()==1){ //银行
                $addOffsetList.find('.T-payType-number').hide().nextAll().removeClass('hide');
            }else if($that.val()==5){ //网付
                 $addOffsetList.find('.T-payType-number').hide().nextAll().removeClass('hide');
            }
        });

        //现金账号
        $addOffsetList.find('.T-cash-choose').off('click').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $cash=$(this);
            // 现金
            getBankList($cash,0);
        });

        //银行账号
        $addOffsetList.find('.T-card-choose').off('click').on('click', function(event) {
            event.preventDefault();
            var $card=$(this);
            getBankList($card,1);
        });

        offsetByDetail.getResourceList($addOffsetList.find('[name=resourceName]'),$addOffsetList);

    };

    /**
     * [saveAddOff description]
     * @return {[type]} [description]
     */
    offsetByDetail.saveAddOff=function($addTab){
        var searchParam={
            moneyType : offsetByDetail.getVal($addTab,"moneyType"),// 业务类别
            resourceType : offsetByDetail.getVal($addTab,"resourceType"),// 对方单位类型
            payType : offsetByDetail.getVal($addTab,"payType"),// 支付方式
            subjectId : offsetByDetail.getVal($addTab,"subjectId"),// 会计科目
            subjectName : offsetByDetail.getVal($addTab,"subjectName"),// 会计科目
            bankId : offsetByDetail.getVal($addTab,"cash-id") || offsetByDetail.getVal($addTab,"card-id"),// 现金ID 银行ID
            resourceName : offsetByDetail.getVal($addTab,"resourceName"),// 对方单位
            resourceId : offsetByDetail.getVal($addTab,"resourceId"),// 对方单位
            subjectId : offsetByDetail.getVal($addTab,"subjectId"),// 会计科目
            departmentId : offsetByDetail.getVal($addTab,"departmentId"),// 所属部门
            incomeMoney : offsetByDetail.getVal($addTab,"incomeMoney"),// 记账金额
            billTime : offsetByDetail.getVal($addTab,"billTime"),// 记账日期
            voucher : offsetByDetail.getVal($addTab,"voucher"),// 凭证编号
            remark : offsetByDetail.getVal($addTab,"remark")// 备注
        };
        $.ajax({
           url:KingServices.build_url("cash","saveIncomeorPay"),
            type: 'POST',
            data:"searchParam="+JSON.stringify(searchParam)
        })
        .done(function(data) {
            if( showDialog(data)){
                showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                    layer.close(offsetByDetail.addLayer);
                    offsetByDetail.$tab.find('.T-btn-search').trigger('click');
                });
            }
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
                   $(this).nextAll().find('[name=resourceId]').val('');
                }
            },
            select: function(event, ui) {
                $(this).val(ui.item.name).nextAll('[name=resourceId]').val(ui.item.id).trigger('change');
            }
        }).off('click').on('click', function() {
            $.ajax({
                url:KingServices.build_url("cash","findUnits"),
                type: 'POST',
                data:"resourceType="+$tab.find('.T-resourceType').val(),
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
     * [getReceivableTypeList 获取主营业务收付类别]
     * @param  {[type]} $obj [父对象]
     * @return {[type]}      [description]
     */
    offsetByDetail.getReceivableTypeList = function($obj) {
        $obj.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (!ui.item) {
                   $(this).nextAll().find('[name=resourceId]').val('');
                }
            },
            select: function(event, ui) {
                $(this).val(ui.item.name).nextAll('[name=receivableTypeId]').val(ui.item.id).trigger('change');
            }
        }).off('click').on('click', function() {
             $.ajax({
               url:KingServices.build_url("cash","findSelectValue"),
               type: 'POST',
            })
            .done(function(data) {
                if (showDialog(data)) {
                    var all={ id:'',name:'全部'};
                    var list = data.receivableTypes;list.unshift(all);
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