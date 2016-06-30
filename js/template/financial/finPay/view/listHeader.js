/*TMODJS:{"debug":true,"version":16,"md5":"b53f01a17ffbbd93ce864d61b2a653d2"}*/
define(function(require){return require('../../../template')('financial/finPay/view/listHeader', function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,$escape=$utils.$escape,sumNeedPayMoney=$data.sumNeedPayMoney,sumPaiedMoney=$data.sumPaiedMoney,sumUnPaiedMoney=$data.sumUnPaiedMoney,$out='';$out+='<div class="form-group mar-r-20"> <label class="control-label">结算金额合计：</label> <label class="control-label F-float F-money T-sumStMoney">';
$line=3;$out+=$escape(sumNeedPayMoney);
$out+='</label> </div> <div class="form-group mar-r-20"> <label class="control-label">已付金额合计：</label> <label class="control-label F-float F-money T-sumPaiedMoney">';
$line=7;$out+=$escape(sumPaiedMoney);
$out+='</label> </div> <div class="form-group "> <label class="control-label">未付金额合计：</label> <label class="control-label F-float F-money T-sumUnPaiedMoney">';
$line=11;$out+=$escape(sumUnPaiedMoney);
$out+='</label> </div>';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'<div class="form-group mar-r-20">\r\n    <label class="control-label">结算金额合计：</label>\r\n    <label class="control-label F-float F-money T-sumStMoney">{{sumNeedPayMoney}}</label>\r\n</div>\r\n<div class="form-group mar-r-20">\r\n    <label class="control-label">已付金额合计：</label>\r\n    <label class="control-label F-float F-money T-sumPaiedMoney">{{sumPaiedMoney}}</label>\r\n</div>\r\n<div class="form-group ">\r\n    <label class="control-label">未付金额合计：</label>\r\n    <label class="control-label F-float F-money T-sumUnPaiedMoney">{{sumUnPaiedMoney}}</label>\r\n</div>'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});});