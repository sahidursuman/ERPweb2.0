/**
 * 财务模块公共方法
 */

var FinancialService = {};

//对账-自动计算未付金额
FinancialService.updateUnpayMoney = function($tab,rule){
    $tab.find(".T-checkList tr input[name=settlementMoney]").on("change",function(){
        var $this = $(this),
            $tr = $(this).closest('tr'),
            validator = rule.check($tr);
        if(!validator.form()){ return false;}
        var settlementMoney = $tr.find("input[name=settlementMoney]").val(),
            payedMoney = $tr.find(".T-payedDetail").data("money");
        if(settlementMoney == ""){
            settlementMoney = 0;
        }
        if(payedMoney == ""){
            payedMoney = 0;
        }
        settlementMoney = parseInt(settlementMoney);
        payedMoney = parseInt(payedMoney);

        var unPayedMoney = settlementMoney - payedMoney;
        $tr.find("td[name=unPayedMoney]").text(unPayedMoney);
    });
};

//对账-保存json组装
FinancialService.checkSaveJson = function($tab){
    var $list = $tab.find(".T-checkList"),
        $tr = $list.find(".T-checkTr"),
        saveJson = []; 
    $tr.each(function(){
        var $this = $(this);
        if($this.data("change")){//遍历修改行
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
                    checkRemark : getValue($this,"checkRemark"),
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
    $tab.find("input[name=payMoney]").on("focus",function(){
        $(this).data("oldVal",$(this).val());
    })
    .on("change",function(){
        var $this = $(this),validator = rule.check($this.closest('tr'));
        if(!validator.form()){ return false;}
        var sumPayMoney = $sumPayMoney.val();
        if(sumPayMoney == ""){
            sumPayMoney = 0;
        }
        sumPayMoney = parseInt(sumPayMoney);
        $sumPayMoney.val(sumPayMoney + parseInt($this.val()-$(this).data("oldVal")));
    });
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
        if($(this).is(":checked")){
            $(this).closest('tr').data("change",true);
            if(isAllChecked(checkboxList)){
                $checkAll.prop("checked",true);
            }
        } else{
            $checkAll.prop("checked",false);
        }
    });
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