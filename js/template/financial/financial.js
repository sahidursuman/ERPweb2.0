/**
 * 财务模块公共方法
 */

var FinancialService = {};

FinancialService.initPayEvent = function($container)  {
    var currDate = new Date();
    var str = new Date(+new Date()+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
    $container.find('input[name="tally-date"]').val(str);
    $container.find('input[name="tally-date"]').datetimepicker({
        autoclose:true,
        todayHighlight:true,
        format:'L',
        language:'zh-CN'
     });
    var $card = $container.find('input[name="card-number"]').autocomplete({
        minLength:0,
        change :function(event, ui){
            if(ui.item == null){
                $(this).val('').nextAll('input[name="card-id"]').val('');
            }
        },
        select :function(event, ui){
             $(this).nextAll('input[name="card-id"]').val(ui.item.id).trigger('change');
             $(this).nextAll('input[name="card-id"]').val(ui.item.id).trigger('change');
        }
    }).one("click", function(){
        var $that = $(this);
        $.ajax({
            url:KingServices.build_url('financialIncomeOrPay','getBankList'),
            showLoading:false,
            success:function(data){
                if(showDialog(data)){
                    var cardNumberJson = [];
                    var bankList = data.bankList;
                    if(bankList && bankList.length > 0){
                        for(var i=0; i < bankList.length; i++){
                            var seatCount = {
                                value : "账户："+ bankList[i].bankAccountNumber+",余额："+ bankList[i].balance,
                                id: bankList[i].id
                            }
                            cardNumberJson.push(seatCount);
                        }
                        $that.autocomplete('option','source', cardNumberJson);
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
        $(this).autocomplete('search', '');
    });

    $container.find('select').on('change', function(event) {
        event.preventDefault();
        var val = $(this).val();

        $card.closest('div').toggleClass('hidden', val != 1);
    }).trigger('change');
};


//对账-自动计算未付金额
FinancialService.updateUnpayMoney = function($tab,rule){
    $tab.find('.T-checkList').on('focusin', 'input[name="settlementMoney"]', function(event) {
        $(this).data("oldVal",$(this).val());
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
    });
};

//对账-保存json组装
FinancialService.checkSaveJson = function($tab,rule){
    var validator = rule.check($tab);
    if(!validator.form()){return false;}

    if(!$tab.data('isEdited')){
        showMessageDialog($("#confirm-dialog-message"),"您未进行任何操作！");
        return false;
    }

    var $list = $tab.find(".T-checkList"),
        $tr = $list.find(".T-checkTr"),
        saveJson = []; 
    $tr.each(function(){
        var $this = $(this);
        if($this.data("change")){//遍历修改行
            var validator = rule.check($this);
            if(!validator.form()){ return false; }
            var isConfirmAccount = "";
            if ($this.find(".T-checkbox").is(':checked')) {
                isConfirmAccount = 1;
            } else {
                isConfirmAccount = 0; 
            }
            //提交修改了对账状态或已对账行数据的行
            if(($this.data("confirm") != isConfirmAccount) || ($this.data("confirm") == 1)){
                var checkRecord = {
                    id : $this.data("id"),
                    settlementMoney : getValue($this,"settlementMoney"),
                    unPayedMoney : $this.find("td[name=unPayedMoney]").text(),
                    checkRemark : $this.find("[name=checkRemark]").val(),
                    isConfirmAccount : isConfirmAccount
                };
                saveJson.push(checkRecord);
            }
        }
    });
    if(saveJson.length == 0){
        showMessageDialog($("#confirm-dialog-message"),"没有可提交的数据！");
        return false;
    }
    saveJson = JSON.stringify(saveJson);
    return saveJson;
};

//对账-修改但未勾选提醒
FinancialService.changeUncheck = function(trList,fn){
    var result = false,uncheckList = [];
    trList.each(function(){
        var $this = $(this);
        if($this.data('change') && $this.data("confirm") == 0 && !$this.find('.T-checkbox').is(":checked")){
            $this.addClass('success');
            uncheckList.push($this);
            result = true;
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
    var $sumPayMoney = $tab.find("input[name=sumPayMoney]");
    $tab.on('focusin', 'input[name="payMoney"]', function(event) {
        $(this).data("oldVal",$(this).val());
    })
    .on("change", 'input[name="payMoney"]', function(){
        var $this = $(this), $tr = $this.closest('tr').data('change', true),
            validator = rule.check($tr);

        if (!validator.form())  return;

        var sumPayMoney = $sumPayMoney.val() || 0,
            newVal = $this.val() || 0,
            oldVal = $(this).data("oldVal") || 0;
        if(isNaN(sumPayMoney)){ sumPayMoney = 0; }
        if(isNaN(newVal)){ newVal = 0; }
        if(isNaN(oldVal)){ oldVal = 0; }
        sumPayMoney = parseFloat(sumPayMoney);
        $sumPayMoney.val(sumPayMoney + parseFloat(newVal-oldVal));

        if(!validator.form()){ return false; }
    });
};

//付款-翻页暂存数据读取
FinancialService.getTempDate = function(resultList,tempJson){
    if(!!tempJson && tempJson.length){
        for(var i = 0; i < tempJson.length; i++){
            var tempId = tempJson[i].id;
            for(var j = 0; j < resultList.length; j++){
                var id = resultList[j].id;
                if(tempId == id){
                    resultList[j].payMoney = tempJson[i].payMoney;
                    resultList[j].payRemark = tempJson[i].payRemark;
                }
            }
        }
    }
    return resultList;
};

//付款-保存(暂存)数据组装，数组，需转换为json
FinancialService.clearSaveJson = function($tab,clearSaveJson,rule){
    $tr = $tab.find(".T-clearList tr")
    $tr.each(function(){
        var $this = $(this);
        if($this.data("change")){
            var validator = rule.check($this);
            if(!validator.form()){ return false; }

            clearSaveJson = clearSaveJson || [];
            var id = $this.data("id"),i = 0,
                len = clearSaveJson.length;

            //已有数据更新
            for(i = 0; i < len; i++){
                if(clearSaveJson[i].id == id){
                    clearSaveJson[i].payMoney = $this.find("input[name=payMoney]").val();
                    clearSaveJson[i].payRemark = $this.find("input[name=payRemark]").val();
                    return;
                }
            }
            //新数据
            if(i >= len){
                var clearTemp = {
                    id : $this.data("id"),
                    payMoney : $this.find("input[name=payMoney]").val(),
                    payRemark : $this.find("input[name=payRemark]").val()
                };
                clearSaveJson.push(clearTemp);
            }
        }
    });

    return clearSaveJson;
};

//付款-保存前校验
FinancialService.isClearSave = function($tab,rule){
    var validator = rule.check($tab);
    if(!validator.form()){return false;}

    if(!$tab.data('isEdited')){
        showMessageDialog($("#confirm-dialog-message"),"您未进行任何操作！");
        return false;
    }
    var sumPayMoney = parseFloat($tab.find('input[name=sumPayMoney]').val()),
        unpayMoney = parseFloat($tab.find('.T-unpayMoney').val());
    if(sumPayMoney > unpayMoney){
        showMessageDialog($("#confirm-dialog-message"),"付款金额不能大于已对账未付总额！");
        return false;
    }

    var $saveBtn = $tab.find('.T-saveClear'),
        saveZero = $saveBtn.data('save-zero');
    if (!saveZero && sumPayMoney == 0) {
        showConfirmDialog($('#confirm-dialog-message'), '本次收款金额合计为0，是否继续?', function() {
            $saveBtn.data('save-zero', true).trigger('click');
        })

        return false;
    } else {
        $saveBtn.data('save-zero', false);
    }
    
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
        sumPayMoney = parseFloat($tab.find('input[name=sumPayMoney]').val()),
        sumPayType = parseFloat($tab.find('select[name=sumPayType]').val()),
        $accountInfo = $tab.find('input[name="accountInfo"]'),
        sumPayRemark = $tab.find('input[name=sumPayRemark]').val(),
        unpayMoney = parseFloat($tab.find('.T-unpayMoney').text());
    if(startDate > endDate){
        showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
        return false;
    }
    if(sumPayMoney < 0 || sumPayMoney == ""){
        showMessageDialog($("#confirm-dialog-message"),key + "款金额需大于0！");
        return false;
    }

    if(isNaN(sumPayMoney)){ sumPayMoney = 0; }
    if(isNaN(unpayMoney)){ unpayMoney = 0; }
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
    var date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth()+1,
        day = date.getDate();
    if(month < 10){
        month = "0" + month;
    }
    if(day < 10){
        day = "0" + day;
    }
    var startDate = year + "-" + month + "-01",
        endDate = year + "-" + month + "-" + day;
    var dateJson = { 
        startDate : startDate,
        endDate : endDate
    };
    return dateJson;
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
        var tripNumber = trim(dataList[i].tripNumber),
            strLen = tripNumber.length;
            tripType = tripNumber.substring(strLen-2,strLen);
        if(tripType == "ZZ" ||　tripType == "zz" || tripType == "DD" || tripType == "dd"){
            dataList[i].isGuidePay = 1;
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
    console.log("exportReport");
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

function getValue($obj,name){
    var result = $obj.find("[name="+name+"]").val();
    if (result == "") {//所有空字符串变成0
        result = 0;
    }
    return result;
} 

/**
 * 财务校验方法
 * 使用方法：var rule = new FinRule(0);
 * @param {int} type 0: 对账、1：付款、2：自动下账；3：财务收付款、4：收款
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
        case 1: // 付款
            return $obj.formValidate([
                {   
                    $ele: $obj.find('input[name=payMoney]'),
                    rules: [
                        {
                            type: 'positive-float',
                            errMsg: '请输入正数'
                        },
                        {
                            type: 'le',
                            errMsg: '本次付款金额不能超过未付金额'
                        }
                    ]
                }]);
        case 2: // 自动下账
            return $obj.formValidate([
                {   
                    $ele: $obj.find('input[name=sumPayMoney]'),
                    rules: [
                        {
                            type: 'positive-float',
                            errMsg: '请输入正数'
                        },
                        {
                            type : 'null',
                            errMsg : '下账金额不能为空'
                        }
                    ]
                }]);
        case 3: // 财务收付款
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
        case 4: // 收款
            return $obj.formValidate([
                {   
                    $ele: $obj.find('input[name=payMoney]'),
                    rules: [
                        {
                            type: 'positive-float',
                            errMsg: '请输入正数'
                        },
                        {
                            type: 'le',
                            errMsg: '本次收款金额不能超过未收金额'
                        }
                    ]
                }]);
        default:
            return false;
    }
}