/**
 * 财务模块公共方法
 */

var FinancialService = {};

FinancialService.initPayEvent = function($container,rule)  {
    var currDate = new Date();
    var str = new Date(+new Date()+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
    $container.find('input[name="tally-date"]').val(str);
    $container.find('input[name="tally-date"]').datetimepicker({
        autoclose:true,
        todayHighlight:true,
        format:'L',
        language:'zh-CN'
    });

    var $cash = $container.find('input[name=cash-number]'),
        $card = $container.find('input[name=card-number]'),
        $balance =$container.find('.T-balance');
    getBankList($cash,0);
    getBankList($card,1);
    $select = $container.find('select[name=sumPayType]');
    if($select.length == 0){
        $select = $container.find('select[name=payType]');
    }
    $select.on('change', function(event) {
        event.preventDefault();
        var val = $(this).val();
        if(val == 1 || val == 5){
            var check =  new FinRule(5).check($container.find('.T-accountNumber').closest('div'));
        }
        $cash.closest('div').toggleClass('hidden', val !== "0");
        $card.closest('div').toggleClass('hidden', val != 1);
        if(val == 5){
            $card.closest('div').removeClass('hidden');
        };
        if(val == 6){
            $balance.closest('div').removeClass('hidden');
        }else {
            $balance.closest('div').addClass('hidden');
        }
        if(val !=0){
           $container.find('input[name=cash-id]').val('');
        };
        if(val !=1 && val!=5){
            $container.find('input[name=card-id]').val('');
            $card.val('');
        };
    }).trigger('change');
};

function getBankList($obj,payType){
    $obj.autocomplete({
        minLength:0,
        change :function(event, ui){
            if(ui.item == null){
                $(this).val('').nextAll('.T-accountId').val('');
                $(this).closest(".T-search-area").find('input[name=beginningBalance]').val('').trigger('change');
            }
        },
        select :function(event, ui){
            $bBala = $(this).closest(".T-search-area").find('input[name=beginningBalance]');
            if(payType == 0){
                $(this).nextAll('input[name=cash-id]').val(ui.item.id).trigger('change');
                $bBala.val(ui.item.beginningBalance).trigger('change');
                $(this).closest('div').next().find('input').val("");
            } else if(payType == 1){
                $(this).nextAll('input[name=card-id]').val(ui.item.id).trigger('change');
                $bBala.val(ui.item.beginningBalance).trigger('change');
                $(this).closest('div').prev().find('input').val("");
            }
        }
    }).one("click", function(){
        var $that = $(this);
        $.ajax({
            url:KingServices.build_url('financialIncomeOrPay','getBankList'),
            data : {payType : payType},
            showLoading:false,
            success:function(data){
                if(showDialog(data)){
                    var cardNumberJson = [];
                    var bankList = data.bankList;
                    if(bankList && bankList.length > 0){
                        for(var i=0, tmp; i < bankList.length; i++){
                            if (!!bankList[i].accountName && bankList[i].accountName != 'NULL') {
                                tmp = "账户：" + bankList[i].accountName;
                            } else {
                                tmp = "账号：" + bankList[i].bankAccountNumber;
                            }

                            var seatCount = {
                                value : tmp +",余额："+ bankList[i].balance +",期初余额：" + bankList[i].beginningBalance,
                                id: bankList[i].id,
                                beginningBalance: bankList[i].beginningBalance
                            }
                            cardNumberJson.push(seatCount);
                        }
                        $that.autocomplete('option','source', cardNumberJson).data('ajax', true);
                        $that.autocomplete('search', '');
                    }else{
                        layer.tips('没有内容', $that, {
                            tips: [1, '#3595CC'],
                            time: 2000
                        });
                    }
                }
            }
        })
    })
    .on('click', function() {
        var $that = $(this);
        if ($that.data('ajax')) {
            $that.autocomplete('search', '');
        }
    });
}

//时间控件--保留时分秒
FinancialService.datetimepicker=function($tab){
    if (!!$tab) {
       $tab.find(".datepicker").datetimepicker({
            autoclose: true,
            todayHighlight: true,
            format: 'L',
            language: 'zh-CN'
        })
    }
};


//对账-自动计算未付金额
FinancialService.updateUnpayMoney = function($tab,rule){
    $tab.find('.T-checkList').on('focusin', 'input[name="settlementMoney"]', function(event) {
        if(!$(this).data("oldVal")){
            $(this).data("oldVal",$(this).val());
        }
    })
    .on('change', 'input[name="settlementMoney"]', function(event) {
        var $this = $(this),
            $tr = $(this).closest('tr'),
            validator = rule.check($tr);
        if(!validator.form()){ return false;}
        var settlementMoney = ($tr.find("input[name=settlementMoney]").val() || 0) * 1,
            payedMoney = ($tr.find(".T-payedDetail").data("money") || 0) * 1;

        // 设置未付金额
        $tr.find("td[name=unPayedMoney]").text(Tools.toFixed(settlementMoney - payedMoney));

        //计算结算金额修改前后差值
        var spread = settlementMoney - $(this).data("oldVal")*1;
        //统计数据更新
        var $st = $tab.find(".T-stMoney"),
            $unpay = $tab.find(".T-unpayMoney");
        $st.text(Tools.toFixed($st.text()*1 + spread));
        $unpay.text(Tools.toFixed($unpay.text()*1 + spread));

        $(this).data("oldVal",$(this).val());
    });
};

//对账-保存json组装
/*
    isSave参数标识返回数据是否用于提交保存，保存时值为true
    inner参数用于标识内转转入和转出
 */
FinancialService.checkSaveJson = function($tab,tempJson,rule,isSave,inner){
    var validator = rule.check($tab);
    if(!validator.form()){ return false; }//未通过验证不允许翻页或提交

    if(!$tab.data('isEdited')){
        if(isSave && !tempJson){
            showMessageDialog($("#confirm-dialog-message"),"您未进行任何操作！");
            return false;
        } else {
            // return tempJson;
        }
    }

    var $list = $tab.find(".T-checkList"),
        $tr = $list.find(".T-checkTr"),
        saveJson = tempJson || [],
        len = saveJson.length; 
    $tr.each(function(){
        var $this = $(this);
        if($this.data("change")){//遍历修改行
            validator = rule.check($this);
            if(!validator.form()){ return false; }//未通过验证退出当前行

            var isChecked = "";
            if ($this.find(".T-checkbox").is(':checked')) {
                isChecked = 1;
            } else {
                isChecked = 0; 
            }
            //已有数据更新
            for(var i = 0; i < len; i++){
                if(saveJson[i].id == $this.data("id")){
                    if(inner){
                        saveJson[i].backMoney = $this.find("input[name=settlementMoney]").val();
                        saveJson[i].settlementMoney = $this.find(".T-settlementMoney").text();
                    } else {
                        saveJson[i].settlementMoney = $this.find("input[name=settlementMoney]").val();
                    }
                    saveJson[i].unPayedMoney = $this.find("td[name=unPayedMoney]").text();
                    saveJson[i].checkRemark = $this.find("[name=checkRemark]").val();
                    saveJson[i].isChecked = isChecked;
                    return;
                }
            }
            //新数据
            if(i >= len){
                var checkRecord = {
                    id : $this.data("id"),
                    settlementMoney : $this.find("input[name=settlementMoney]").val(),
                    unPayedMoney : $this.find("td[name=unPayedMoney]").text(),
                    checkRemark : $this.find("[name=checkRemark]").val(),
                    confirm : $this.data("confirm"),//数据的原始对账状态，保存时用于过滤不需提交的数据
                    isChecked : isChecked
                };
                if(inner){
                    checkRecord.backMoney = $this.find("input[name=settlementMoney]").val();
                    checkRecord.settlementMoney = $this.find(".T-settlementMoney").text();
                }
                saveJson.push(checkRecord);  
            }
        }
    });
    if(isSave){
        if(saveJson.length == 0){
            showMessageDialog($("#confirm-dialog-message"),"没有可提交的数据！");
            return false;
        }
        //保存数据处理,
        for(var i = 0; i < saveJson.length; i++){
            if(saveJson[i].confirm == 0 && saveJson[i].isChecked == 0){
                saveJson.splice(i,1);//删除不需提交的行
                i--;
            } else {
                saveJson[i].isConfirmAccount = saveJson[i].isChecked;
            }
        }
        saveJson = JSON.stringify(saveJson);
    } else {
       saveJson.sumSttlementMoney = $tab.find('.T-stMoney').text();
       saveJson.sumUnPayedMoney = $tab.find('.T-unpayMoney').text();
    }
    return saveJson;
};

//对账-翻页暂存数据读取
//inner用于标识内转转入和转出
FinancialService.getCheckTempData = function(resultList,tempJson,inner){
    if(!!tempJson && tempJson.length){
        for(var i = 0; i < tempJson.length; i++){
            for(var j = 0; j < resultList.length; j++){
                if(tempJson[i].id == resultList[j].id){
                    resultList[j].change = true;
                    if(inner){
                        resultList[j].backMoney = tempJson[i].backMoney;
                    }
                    resultList[j].settlementMoney = tempJson[i].settlementMoney;
                    resultList[j].unPayedMoney = tempJson[i].unPayedMoney;
                    resultList[j].checkRemark = tempJson[i].checkRemark;
                    resultList[j].isChecked = tempJson[i].isChecked;
                    break;
                }
            }
        }
    }
    return resultList;
};

//对账-修改但未勾选提醒
FinancialService.changeUncheck = function(trList,fn,minTdLen){
    var result = false,
        argLen = arguments.length;

    trList.each(function(){
        var $tr = $(this),
            $mainTr = $tr;
        
        if($tr.data('change')){
            if(argLen === 3){
                while($mainTr.children('td').length <= minTdLen){
                    $mainTr = $mainTr.prev();
                }
            }

            if($mainTr.data("confirm") == 0 && !$mainTr.find('.T-checkbox').is(":checked")){
                if(argLen === 3){
                    var $tempTr = $mainTr.next(),
                        index = $mainTr.index();
                    $mainTr.addClass('success');
                    var end = false;
                    while($tempTr.length > 0 && !end){
                        if($tempTr.hasClass('T-checkTr')){
                            end = true;
                        } else {
                            $tempTr.addClass('success');
                            $tempTr = $tempTr.next();
                        }
                    }
                } else{
                    $tr.addClass('success');
                }
                result = true;
            }
        }
    });

    if(result){
        var buttons = [
            {
                text: '是',
                class: "btn btn-primary btn-minier btn-heightMall",
                click: function() {
                    $(this).dialog("close");
                    fn();
                }
            }, 
            {
                text: '否',
                class: "btn btn-minier btn-heightMall",
                click: function() {
                    $(this).dialog("close");
                }
            }
        ];

        $("#confirm-dialog-message").removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i>提示</h4></div>",
            title_html: true,
            draggable:false,
            buttons: buttons,
            open:function(event,ui){
                $(this).find("p").text("您有记录已修改但未勾选对账，是否继续？");
            }
        });
    } else {
        fn();
    }
};

//付款-自动计算本次付款总额
FinancialService.updateSumPayMoney = function($tab,rule){
    $tab.find("input[name=sumPayMoney]").data("money",$tab.find("input[name=sumPayMoney]").val());
    $tab.on('focusin', 'input[name="payMoney"]', function(event) {
        if(!$(this).data('hasOld')){
            $(this).data("oldVal",$(this).val());
            $(this).data('hasOld',true);
        }
    })
    .on("change", 'input[name="payMoney"]', function(){
        var $this = $(this), $tr = $this.closest('tr').data('change', true),
            $sumPayMoney = $tab.find("input[name=sumPayMoney]"),
            validator = rule.check($tr);

        if (!validator.form())  return;

        var sumPayMoney = $sumPayMoney.data("money") || 0,
            newVal = $this.val() || 0,
            oldVal = $this.data("oldVal") || 0;
        if(isNaN(sumPayMoney)){ sumPayMoney = 0; }
        if(isNaN(newVal)){ newVal = 0; }
        if(isNaN(oldVal)){ oldVal = 0; }
        sumPayMoney = parseFloat(sumPayMoney) + parseFloat(newVal-oldVal);
        $sumPayMoney.data("money",sumPayMoney);
        $sumPayMoney.val(sumPayMoney);
        if($tab.find('.T-saveClear').length > 0 && $tab.find('.T-saveClear').data("borrow") == "borrow"){
            var $preMoney = $this.closest('tr').find('.T-preMoney');
            $preMoney.text($preMoney.text()*1 + parseFloat(newVal-oldVal));
        }

        if(!validator.form()){ return false; }
        $this.data("oldVal",$this.val());
    }).on("change","[name=payRemark]",function(){
        $(this).closest('tr').data("change",true);
    });
};

//付款-翻页暂存数据读取
FinancialService.getTempDate = function(resultList,tempJson,isGuide){//isGuide标识是否为导游付款
    if(!!tempJson && tempJson.length){
        for(var i = 0; i < tempJson.length; i++){
            var tempId = tempJson[i].id;
            for(var j = 0; j < resultList.length; j++){
                var id = resultList[j].id;
                if(tempId == id){
                    if(isGuide){
                        resultList[j].payMoney2 = tempJson[i].payMoney;
                    } else {
                        resultList[j].payMoney = tempJson[i].payMoney;
                    }
                    resultList[j].payRemark = tempJson[i].payRemark;
                }
            }
        }
    }
    return resultList;
};

//付款-保存(暂存)数据组装，数组，需转换为json
FinancialService.clearSaveJson = function($tab,clearSaveJson,rule,isSave){
    $tr = $tab.find(".T-clearList tr")
    $tr.each(function(){
        var $this = $(this);
        if($this.data("change")){
            var validator = rule.check($this);
            if(!validator.form()){ return false; }

            clearSaveJson = clearSaveJson || [];
            var id = $this.data("id"),i = 0,
                len = clearSaveJson.length,
                payMoney = $this.find("input[name=payMoney]").val();

            //已有数据更新
            for(i = 0; i < len; i++){
                if(clearSaveJson[i].id == id){
                    if(!payMoney || payMoney == 0){
                        clearSaveJson.splice(i,1);//删除不需提交的行
                        i--;
                    } else {
                        clearSaveJson[i].payMoney = payMoney;
                        clearSaveJson[i].payRemark = $this.find("[name=payRemark]").val();
                    }
                    return;
                }
            }
            //新数据
            if(i >= len && payMoney && payMoney != 0){
                var clearTemp = {
                    id : $this.data("id"),
                    payMoney : payMoney,
                    payRemark : $this.find("[name=payRemark]").val()
                };
                clearSaveJson.push(clearTemp);
            }
        }
    });
    if(isSave){
        if(!FinancialService.isClearSave($tab,rule)){
            return false;
        } else if(clearSaveJson.length == 0){
            showMessageDialog($("#confirm-dialog-message"),"没有可提交的数据！");
            return false;
        } else {
            var $saveBtn = $tab.find('.T-saveClear'),
                saveZero = $saveBtn.data('save-zero');
            if (!saveZero && parseFloat($tab.find('input[name=sumPayMoney]').val()) == 0) {
                showConfirmDialog($('#confirm-dialog-message'), '本次收款金额合计为0，是否继续?', function() {
                    $saveBtn.data('save-zero', true).trigger('click');
                })

                return false;
            } else {
                $saveBtn.data('save-zero', false);
            }
        }
        clearSaveJson = JSON.stringify(clearSaveJson);
    }
    return clearSaveJson;
};

//付款-保存前校验
FinancialService.isClearSave = function($tab,rule){
    var check =  new FinRule(5).check($tab);
    if(!check.form()){ return false; }
    if(!!rule){
        var validator = rule.check($tab);
        if(!validator.form()){return false;}
    }

    if(!$tab.data('isEdited')){
        showMessageDialog($("#confirm-dialog-message"),"您未进行任何操作！");
        return false;
    };
    var sumPayMoney = parseFloat($tab.find('input[name=sumPayMoney]').val()),
        sumListMoney = $tab.find('input[name=sumPayMoney]').data("money"),
        unpayMoney = parseFloat($tab.find('.T-unpayMoney').text());

    if (sumListMoney === undefined) {  // 未修改付款的时候，直接读取
        sumListMoney = parseFloat($tab.find('input[name=sumPayMoney]').val());
    }
    if(!Tools.Math.isFloatEqual(sumPayMoney,sumListMoney)){
        showMessageDialog($("#confirm-dialog-message"),"本次付款金额合计与单条记录本次付款金额的累计值不相等，请检查！");
        return false;
    };
    return true;
};

//自动下账前校验及数据组装
/**
 * 自动下账数据
 * @param  {int} id   数据ID？
 * @param  {object} $tab 父容器
 * @param  {object} rule 校验规则
 * @param  {int} type 1：收款，0：付款
 * @return {[type]}      [description]
 */
FinancialService.autoPayJson = function(id,$tab,rule, type){
    var validator = rule.check($tab), key = !!type?'收': '付';
    if(!validator.form()){ return false; }

    var startDate = $tab.find("input[name=startDate]").val(),
        endDate = $tab.find("input[name=endDate]").val(),
        sumPayMoney = parseFloat($tab.find('input[name=sumPayMoney]').val()) || 0,
        sumPayType = parseFloat($tab.find('select[name=sumPayType]').val()),
        $accountInfo = $tab.find('input[name="accountInfo"]'),
        sumPayRemark = $tab.find('input[name=sumPayRemark]').val(),
        unpayMoney = parseFloat($tab.find('.T-unpayMoney').text());
    if(startDate > endDate){
        showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
        return false;
    }
    if(sumPayMoney <= 0 || sumPayMoney == ""){
        showMessageDialog($("#confirm-dialog-message"),key + "款金额需大于0！");
        return false;
    }

    if(isNaN(sumPayMoney)){ sumPayMoney = 0; }
    if(isNaN(unpayMoney)){ unpayMoney = 0; }
    if(unpayMoney < 0){
        showMessageDialog($("#confirm-dialog-message"),"已对账未" + key + "总额为负，不能进行自动下账！");
        return false;
    }
    if(sumPayMoney > unpayMoney){
        showMessageDialog($("#confirm-dialog-message"),"本次"+ key + "款金额合计大于未"+ key + "金额合计（已对账），请先进行对账！");
        return false;
    }

    $tab.data('isEdited', false);
    var searchParam = {
        id : id,//字段id需与后台协调
        sumCurrentPayMoney : sumPayMoney,
        payType : sumPayType,
        payRemark : sumPayRemark,
        startDate : startDate,
        endDate : endDate
    };
    if ($accountInfo.length) {
        searchParam.accountInfo = $accountInfo.val();
    }
    
    searchParam = JSON.stringify(searchParam);
    return searchParam;
};

//获取当月第一天日期和当前日期
FinancialService.getInitDate = function(){
    return { 
        startDate : Tools.addDay(new Date(), -30),
        endDate : Tools.addDay(new Date(), 30)
    };
};

//获取当天日期的一个月
FinancialService.getInitMothDate = function(){
    return { 
        startDate : Tools.addDay(new Date(),-30),
        endDate : Tools.addDay(new Date(), 0)
    };
};

//时间控件初始化
FinancialService.initDate = function($tab){
    $tab.find('.date-picker').datepicker({
        autoclose: true,
        todayHighlight: true,
        format: 'yyyy-mm-dd',
        language: 'zh-CN'
    });
};

FinancialService.initCheckBoxs = function($checkAll,checkboxList){//$checkAll全选按钮对象，checkboxList复选框列表
    //全选框初始化
    if(isAllChecked(checkboxList)){
        $checkAll.prop("checked",true);
    }

    //给全选按钮绑定事件
    $checkAll.click(function(){
        if($checkAll.is(":checked")){
            checkboxList.each(function(i){
                $(this).prop("checked",true);
                if($(this).closest('tr').data("confirm") == 0){
                    $(this).closest('tr').data("change",true);
                    $(this).closest('.tab-pane').data("isEdited",true);
                }else{
                    $(this).closest('tr').data("change",false);
                }
            });
        } else{
            checkboxList.each(function(i){
                if(!$(this).prop("disabled")){
                    $(this).closest('tr').data("change",true);
                    $(this).closest('.tab-pane').data("isEdited",true);
                    $(this).prop("checked",false);
                }                                
            });
        } 
    });

    checkboxList.on("click",function(){
        $(this).closest('tr').data("change",true);
        if($(this).is(":checked")){
            if(isAllChecked(checkboxList)){
                $checkAll.prop("checked",true);
            }
        } else{
            $checkAll.prop("checked",false);
        }
    });
};

//自动下账提示
FinancialService.autoPayConfirm = function(startDate,endDate,fn){
    showConfirmMsg($("#confirm-dialog-message"),"是否按当前账期 " + startDate + " 至 " + endDate + " 下账？",function(){
        if ('function' === typeof fn) {
            fn();
        }
    });
};

//设置数据来源标识（中转、代订）
FinancialService.isGuidePay = function(dataList){

    for(var i = 0; i < dataList.length; i++){
        if(!!dataList[i].tripNumber){
            var tripNumber = trim(dataList[i].tripNumber),
            strLen = tripNumber.length;
            tripType = tripNumber.substring(strLen-2,strLen);
            if(tripType == "ZZ" ||　tripType == "zz" || tripType == "DD" || tripType == "dd"){
                dataList[i].isGuidePay = 1;
            }
        }else if(!!dataList[i].info){
            var tripNumData = dataList[i].info;
            var tripNum = tripNumData.split(',');
            if(/ZZ$/.test(tripNum[0] )|| /zz$/.test(tripNum[0]) || /DD$/.test(tripNum[0]) || /dd$/.test(tripNum[0])){
                dataList[i].isGuidePay = 1;
            }else{
                dataList[i].isGuidePay = 0;
            }
        }
        
    }
    return dataList;
};

//导出报表
FinancialService.exportReport = function(args,method){
    var str = '';
    for(var i in args){
        str += "&" + i + "=" + args[i];
    }
    exportXLS(KingServices.build_url('export',method) + str);
};

//判断列表是否已全选
function isAllChecked(checkboxList){
    var isAll = true;
    checkboxList.each(function(){
        if(!$(this).is(":checked")){
          isAll = false;
          return false;  
        }
    });
    return isAll;
}

/**
 * 财务校验方法
 * 使用方法：var rule = new FinRule(0);
 * @param {int} type 0: 对账、1：付款、2：自动下账；3：财务收付款、4：收款、6：导游和客户对账
 */ 
function FinRule(type) {
    this.type = type;
}

/**
 * 获取校验对象
 * @param  {object} $obj 需要校验输入框的父容器
 * @return {object}      校验对象。不支持类型，返回false
 */
FinRule.prototype.check = function($obj) {
    switch(this.type) {
        case 0:  // 对账
            return $obj.formValidate([
                {   //结算金额
                    $ele: $obj.find('input[name=settlementMoney]'),
                    rules: [
                        {
                            type: 'nonnegative-float',
                            errMsg: '请输入非负数'
                        }
                    ]
                }]);
        case 1: 
        case 2: 
        case 3: 
        case 4: // 财务收付款
            return $obj.formValidate([
                {   
                    $ele: $obj.find('input[name=payMoney]'),
                    rules: [
                        {
                            type: 'float',
                            errMsg: '请输入数字'
                        }
                    ]
                }]);
        case 5: // 银行账号、记账日期
            return $obj.formValidate([
                {   
                    $ele: $obj.find('input[name=card-number]'),
                    rules: [
                        {
                            type: 'null',
                            errMsg: '银行账号不能为空'
                        },
                    ]
                },
                {   
                    $ele: $obj.find('input[name=cash-number]'),
                    rules: [
                        {
                            type: 'null',
                            errMsg: '现金账号不能为空'
                        },
                    ]
                },
                {   
                    $ele: $obj.find('input[name=tally-date]'),
                    rules: [
                        {
                            type: 'null',
                            errMsg: '记账日期不能为空'
                        },
                    ]
                }
            ]);
        case 6:  // 导游和客户/内转转入/内转转出对账
            return $obj.formValidate([
                {   //结算金额
                    $ele: $obj.find('input[name=settlementMoney]'),
                    rules: [
                        {
                            type: 'float',
                            errMsg: '请输入数字'
                        }
                    ]
                }]);
        default:
            return false;
    }
}

/**
 * 客户账务、内转转入、转出、外转账务 对账及付款事件
 */
//对账-金额自动返算
//minTdLen 子行td数量
FinancialService.updateMoney_checking = function($tab,minTdLen){
    $tab.find('.T-checkList').on('focusin', 'input[name="settlementMoney"]', function(event) {
        if(!$(this).data("oldVal")){
            $(this).data("oldVal",$(this).val());
        }
    })
    .on('change', 'input[name="settlementMoney"]', function(event) {
        var $this = $(this),
            $tr = $(this).closest('tr'),
            $mainTr = $tr;
        if(isNaN($this.val())){ return false;}

        $tr.data("change",true);
        $tab.data("isEdited",true);
        while($mainTr.children('td').length <= minTdLen){
            $mainTr = $mainTr.prev();
        }
        $mainTr.data('change',true);

        var backMoney = ($tr.find("input[name=settlementMoney]").val() || 0) * 1,
            settlementMoney = $tr.find('.T-settlementMoney').text() *1,
            unReceivedMoney = $mainTr.find('.T-unReceivedMoney').text() *1;
        //计算结算金额修改前后差值
        var spread = backMoney - $this.data("oldVal")*1;

        $tr.find('.T-settlementMoney').text(settlementMoney - spread);
        $mainTr.find('.T-unReceivedMoney').text(unReceivedMoney - spread);

        $tab.find(".T-sumBackMoney").text($tab.find(".T-sumBackMoney").text()*1 + spread);
        $tab.find(".T-sumSettlementMoney").text($tab.find(".T-sumSettlementMoney").text()*1 - spread);
        $tab.find(".T-sumUnReceivedMoney").text($tab.find(".T-sumUnReceivedMoney").text()*1 - spread);

        $(this).data("oldVal",$(this).val());
    });
};

//对账-保存json组装(客户账务)
FinancialService.saveJson_checking = function($tab,tempJson,rule,isSave){
    var validator = rule.check($tab);
    if(!validator.form()){ return false; }//未通过验证不允许翻页或提交

    if(!$tab.data('isEdited')){
        if(isSave && !tempJson){
            showMessageDialog($("#confirm-dialog-message"),"您未进行任何操作！");
            return false;
        } else {
            // return tempJson;
        }
    }

    var $list = $tab.find(".T-checkList"),
        $tr = $list.find(".T-checkTr"),
        saveJson = tempJson || [],
        len = saveJson.length; 
    $tr.each(function(){
        var $this = $(this);
        if($this.data("change")){//遍历修改行
            validator = rule.check($this);
            if(!validator.form()){ return false; }//未通过验证退出当前行

            var isChecked = "";
            if ($this.find(".T-checkbox").is(':checked')) {
                isChecked = 1;
            } else {
                isChecked = 0; 
            }
            //已有数据更新
            for(var i = 0; i < len; i++){
                var $childTr = $this,
                    detailList = [],
                    end = false;
                while(!end && $childTr.length > 0){
                    if(saveJson[i].id == $this.data("id")){
                        saveJson[i].unPayedMoney = $this.find(".T-unReceivedMoney").text();
                        saveJson[i].checkRemark = $this.find(".T-remark").val();
                        saveJson[i].isChecked = isChecked;
                        if(saveJson[i].detailList.length){
                            for(var j = 0; j < saveJson[i].detailList.length; j++){
                                saveJson[i].detailList[j].backMoney = $childTr.find('.T-refund').val();
                                saveJson[i].detailList[j].settlementMoney = $childTr.find('.T-settlementMoney').text();
                            }
                        }
                    }
                    $childTr = $childTr.next();
                    if($childTr.hasClass('T-checkTr')){
                        end = true;
                    }
                }
            }
            //新数据
            if(i >= len){
                var $childTr = $this,
                    detailList = [],
                    end = false;
                while(!end && $childTr.length > 0){
                    if($childTr.data("change")){
                        var detailJosn = {
                            touristGroupId : $childTr.find(".T-touristGroupId").data("id"),
                            backMoney : $childTr.find('.T-refund').val(),
                            settlementMoney : $childTr.find('.T-settlementMoney').text(),
                            flag : $childTr.find(".T-touristGroupId").data("status")
                        };
                        if($childTr.find('.T-touristGroupId').data("trans")){//添加中转结算标识，用于合并缓存
                            detailJosn.trans = true;
                        }
                        detailList.push(detailJosn);
                    }
                    $childTr = $childTr.next();
                    if($childTr.hasClass('T-checkTr')){
                        end = true;
                    }
                }

                var checkRecord = {
                    id : $this.data("id"),
                    isChecked : isChecked,
                    unPayedMoney : $this.find(".T-unReceivedMoney").text(),
                    checkRemark : $this.find(".T-remark").val(),
                    status : $this.data("status"),
                    confirm : $this.data("confirm"),
                    detailList : detailList
                };
                saveJson.push(checkRecord);
            }
        }
    });
    if(isSave){
        if(saveJson.length == 0){
            showMessageDialog($("#confirm-dialog-message"),"没有可提交的数据！");
            return false;
        }
        //保存数据处理,
        for(var i = 0; i < saveJson.length; i++){
            if(saveJson[i].confirm == 0 && saveJson[i].isChecked == 0){
                saveJson.splice(i,1);//删除不需提交的行
                i--;
            } else {
                saveJson[i].isConfirmAccount = saveJson[i].isChecked;
            }
        }
        saveJson = JSON.stringify(saveJson);
    } else {
        saveJson.sumBackMoney = $tab.find('.T-sumBackMoney').text();
        saveJson.sumSettlementMoney = $tab.find('.T-sumSettlementMoney').text();
        saveJson.sumUnReceivedMoney = $tab.find('.T-sumUnReceivedMoney').text();
    }
    return saveJson;
};

//对账——合并缓存数据(客户账务)
FinancialService.getCheckTempData_checking = function(resultList,tempJson){
    if(!!tempJson && tempJson.length){
        for(var i = 0; i < tempJson.length; i++){
            for(var j = 0; j < resultList.length; j++){
                if(tempJson[i].id == resultList[j].id){
                    resultList[j].change = true;
                    resultList[j].unPayedMoney = tempJson[i].unPayedMoney;
                    resultList[j].checkRemark = tempJson[i].checkRemark;
                    resultList[j].isChecked = tempJson[i].isChecked;
                    var otherFeeIndex = 0;
                    for(var k = 0; k < tempJson[i].detailList.length; k++){
                        var detailList = tempJson[i].detailList[k];
                        if(detailList.trans){
                            resultList[j].detailList.transitFee.backMoney = detailList.backMoney;
                            resultList[j].detailList.transitFee.settlementMoney = detailList.settlementMoney;
                            otherFeeIndex = 0;
                        } else {
                            resultList[j].detailList.otherFee[otherFeeIndex].backMoney = detailList.backMoney;
                            resultList[j].detailList.otherFee[otherFeeIndex].settlementMoney = detailList.settlementMoney;
                            otherFeeIndex++;
                        }
                    }
                    break;
                }
            }
        }
    }
    return resultList;
};

//支付
/**
 * 未完成订单提醒
 */
FinancialService.unfinishedBill = function(args,listFn){
    var buttons = [
        {
            text: '现在去支付',
            class: "btn btn-primary btn-minier btn-heightMall",
            click: function() {
                $(this).dialog("close");
                KingServices.payment(args,listFn);
            }
        }, 
        {
            text: '否',
            class: "btn btn-minier btn-heightMall",
            click: function() {
                $(this).dialog("close");
                Tools.closeTab("financial_guide-paying");
            }
        }
    ];

    $("#confirm-dialog-message").removeClass('hide').dialog({
        modal: true,
        title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i>提示</h4></div>",
        title_html: true,
        draggable:false,
        buttons: buttons,
        open:function(event,ui){
            $(this).find("p").text("您有未完成的支付订单，是否跳转到付款界面？");
        }
    });
};


//页面“关闭”按钮事件
FinancialService.closeTab = function(tab_id){
    var $tab = $('#tab-' + tab_id + '-content');
    $tab.find(".T-btn-close").click(function(){
        if ($tab.data('isEdited'))  {
            showSaveConfirmDialog($("#confirm-dialog-message"),"数据已经被修改，是否保存?",function(){
                $tab.trigger(CLOSE_TAB_SAVE);
            },function(){
                Tools.closeTab(tab_id);
            },false);
        } else {
            Tools.closeTab(tab_id);
        }
    });
};