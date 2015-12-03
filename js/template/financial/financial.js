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