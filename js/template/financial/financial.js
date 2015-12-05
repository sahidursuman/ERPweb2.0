/**
 * 财务模块公共方法
 */

var FinancialService = {};

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
        $tr.find("td[name=unPayedMoney]").text(settlementMoney - payedMoney);

        //计算结算金额修改前后差值
        var spread = settlementMoney - $(this).data("oldVal")*1;
        //统计数据更新
        var $st = $tab.find(".T-stMoney"),
            $unpay = $tab.find(".T-unpayMoney");
        $st.text($st.text()*1 + spread);
        $unpay.text($unpay.text()*1 + spread);
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
    saveJson = JSON.stringify(saveJson);
    return saveJson;
};


//付款-自动计算本次付款总额
FinancialService.updateSumPayMoney = function($tab,rule){
    var $sumPayMoney = $tab.find("input[name=sumPayMoney]");
    $tab.on('focusin', 'input[name="payMoney"]', function(event) {
        $(this).data("oldVal",$(this).val());
    })
    .on("change", 'input[name="payMoney"]', function(){
        var $this = $(this),validator = rule.check($this.closest('tr'));
        var sumPayMoney = $sumPayMoney.val(),
            newVal = $this.val(),
            oldVal = $(this).data("oldVal");
        if(isNaN(sumPayMoney)){ sumPayMoney = 0; }
        if(isNaN(newVal)){ newVal = 0; }
        if(isNaN(oldVal)){ oldVal = 0; }
        sumPayMoney = parseInt(sumPayMoney);
        $sumPayMoney.val(sumPayMoney + parseInt(newVal-oldVal));

        if(!validator.form()){ return false; }
    });
};

//付款-翻页暂存数据读取
FinancialService.getTempDate = function(resultList,tempJson){
    if(tempJson){
        for(var i = 0; i < tempJson.length; i++){
            var tempId = tempJson[i].id;
            for(var i = 0; i < resultList.length; i++){
                var id = resultList[i].id;
                if(tempId == id){
                    resultList[i].payMoney = tempJson[i].payMoney;
                    resultList[i].payType = tempJson[i].payType;
                    resultList[i].payRemark = tempJson[i].payRemark;
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

            var id = $this.data("id"),i = 0,len = clearSaveJson.length;
            if(!clearSaveJson){
               len = 0; 
               clearSaveJson = [];
            }
            //已有数据更新
            for(i = 0; i < len; i++){
                if(clearSaveJson[i].id == id){
                    clearSaveJson[i].payMoney = $this.find("input[name=payMoney]").val();
                    clearSaveJson[i].payType = $this.find("select[name=payType]").val();
                    clearSaveJson[i].payRemark = $this.find("input[name=payRemark]").val();
                    return;
                }
            }
            //新数据
            if(i >= len){
                var clearTemp = {
                    id : $this.data("id"),
                    payMoney : $this.find("input[name=payMoney]").val(),
                    payType : $this.find("select[name=payType]").val(),
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
    var sumPayMoney = parseInt($tab.find('input[name=sumPayMoney]').val()),
        unpayMoney = parseInt($tab.find('.T-unpayMoney').val());
    if(sumPayMoney > unpayMoney){
        showMessageDialog($("#confirm-dialog-message"),"付款金额大于未付总额！");
        return false;
    }
    return true;
};

//自动下账前校验及数据组装
FinancialService.autoPayJson = function(id,$tab,rule){
    var validator = rule.check($tab);
    if(!validator.form()){ return false; }

    var startDate = $tab.find("input[name=startDate]").val(),
        endDate = $tab.find("input[name=endDate]").val(),
        sumPayMoney = parseInt($tab.find('input[name=sumPayMoney]').val()),
        sumPayType = parseInt($tab.find('select[name=sumPayType]').val()),
        unpayMoney = parseInt($tab.find('.T-unpayMoney').text());
    if(sumPayMoney == 0 || sumPayMoney == ""){
        showMessageDialog($("#confirm-dialog-message"),"请输入本次付款金额！");
        return false;
    }

    if(isNaN(sumPayMoney)){ sumPayMoney = 0; }
    if(isNaN(unpayMoney)){ unpayMoney = 0; }
    if(sumPayMoney > unpayMoney){
        showMessageDialog($("#confirm-dialog-message"),"付款金额大于未付总额！");
        return false;
    }
    var searchParam = {
        id : id + "",//字段id需与后台协调
        sumCurrentPayMoney : sumPayMoney,
        payType : sumPayType,
        startDate : startDate,
        endDate : endDate
    };
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
                $(this).closest('tr').data("change",true);
            });
        } else{
            checkboxList.each(function(i){
                if(!$(this).prop("disabled")){
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

/**
 * 设置时间控件
 * @param {object} $obj    绑定时间控件的对象
 * @param {[type]} options [description]
 */
FinancialService.setDatePicker = function($obj, options)  {
    return $obj.datepicker($.extend({}, {
        autoclose: true,
        todayHighlight: true,
        format: 'yyyy-mm-dd',
        language: 'zh-CN'
    }, options));
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

