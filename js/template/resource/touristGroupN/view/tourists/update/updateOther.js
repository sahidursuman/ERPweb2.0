/*TMODJS:{"version":40,"md5":"3af34458c0bb13823b4563973ce7648e"}*/
define(function(require){return require("/js/template/template")("resource/touristGroupN/view/tourists/update/updateOther",function(a){"use strict";var b=this,c=(b.$helpers,a.isRestaurantRequired),d=a.isTicketRequired,e=a.isOtherRequired,f=b.$escape,g=a.consumeTime,h=a.restaurantRequired,i=a.ticketRequired,j=a.otherRequired,k=a.dutyDepartmentName,l=a.dutyDepartmentId,m=a.dutyUserName,n=a.dutyUserId,o=a.needPayAllMoney,p=a.otherFeeDel,q=a.otherFee,r=b.$each,s=(a.rs,a.$index,a.type),t="";return t+='<div class="container-fluid mar-t-20"> <div class="row"> <div class="col-xs-12"> <div class="col-xs-10 T-action-plan"> <label class="control-label" data-type="restaurant"> <input type="checkbox" name="isRestaurantRequired" class="ace" ',c&&(t+="checked"),t+='> <span class="lbl"> \u9910\u5385</span> </label> <label class="control-label" data-type="ticket"> <input type="checkbox" name="isTicketRequired" class="ace" ',d&&(t+="checked"),t+='> <span class="lbl"> \u7968\u52a1</span> </label> <label class="control-label" data-type="other"> <input type="checkbox" name="isOtherRequired" class="ace" ',e&&(t+="checked"),t+='> <span class="lbl"> \u5176\u5b83</span> </label> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary">*</span>\u6d88\u8d39\u65e5\u671f</div> <div class="col-xs-3"> <input type="text" class="col-xs-12 datepicker" name="consumeTime" value="',t+=f(g),t+='"> </div> </div> <div class="col-xs-12 mar-t-10 ',1!=c&&(t+="hidden "),t+='T-ask-restaurant"> <div class="col-xs-1 text-right no-padding-right control-label">\u9910\u5385\u8981\u6c42</div> <div class="col-xs-11"> <input type="text" class="col-xs-12" name="restaurantRequired"',h&&(t+=' value="',t+=f(h.requireContent),t+='" data-id="',t+=f(h.id),t+='"'),t+='> </div> </div> <div class="col-xs-12 mar-t-10',1!=d&&(t+=" hidden"),t+=' T-ask-ticket"> <div class="col-xs-1 text-right no-padding-right control-label">\u7968\u52a1\u8981\u6c42</div> <div class="col-xs-11"> <input type="text" class="col-xs-12" name="ticketRequired"',i&&(t+=' value="',t+=f(i.requireContent),t+='" data-val="',t+=f(i.id),t+='"'),t+='> </div> </div> <div class="col-xs-12 mar-t-10 ',1!=e&&(t+="hidden "),t+='T-ask-other"> <div class="col-xs-1 text-right no-padding-right control-label">\u5176\u5b83\u8981\u6c42</div> <div class="col-xs-11"> <input type="text" class="col-xs-12" name="otherRequired"',j&&(t+=' value="',t+=f(j.requireContent),t+='" data-val="',t+=f(j.id),t+='"'),t+='> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label">\u8d23\u4efb\u90e8\u95e8</div> <div class="col-xs-3"> <input type="text" class="col-xs-12" name="dutyDepartmentName" value="',t+=f(k),t+='" data-id="',t+=f(l),t+='"> </div> <div class="col-xs-1 text-right no-padding-right control-label">\u8d23\u4efb\u8ba1\u8c03</div> <div class="col-xs-3"> <input type="text" class="col-xs-12" name="dutyUserName" value="',t+=f(m),t+='" data-id="',t+=f(n),t+='"> </div> </div> <div class="col-xs-12 mar-t-20"> <div class="col-xs-2" style="padding-left: 20px;"> <button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> \u65b0\u589e\u8d39\u7528\u9879 </button> </div> <div class="col-xs-8" style="padding-top: 4px;"> <label class="control-label pull-left" style="width: 35px;">\u5e94\u4ed8</label> <input type="text" readonly class="pull-left" name="needPayAllMoney" value="',t+=f(o),t+='"> </div> </div> <div class="col-xs-12 mar-t-20"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>\u8d39\u7528\u9879</th> <th>\u6570\u91cf</th> <th>\u5355\u4ef7</th> <th>\u91d1\u989d</th> <th>\u8bf4\u660e</th> <th>\u64cd\u4f5c</th> </tr> </thead> <tbody class="T-fee-list" data-type="3" data-del-json="',t+=f(p),t+='"> ',q&&q.length>0&&(t+=" ",r(q,function(a){t+=' <tr data-id="',t+=f(a.id),t+='"> <td> <select class="col-xs-12" name="type"> <option value="3">\u4e2d\u8f6c\u7ed3\u7b97\u4ef7</option> <option value="5" ',"5"==s&&(t+="selected"),t+='>\u9910\u5385\u8d39\u7528</option> <option value="11" ',"11"==s&&(t+="selected"),t+='>\u7968\u52a1\u8d39\u7528</option> <option value="12" ',"12"==s&&(t+="selected"),t+='>\u5176\u4ed6\u8d39\u7528</option> </select> </td> <td><input type="text" class="col-xs-12 T-option F-float F-count" name="count" value="',t+=f(a.count),t+='"></td> <td><input type="text" class="col-xs-12 T-option F-float F-money" name="price" value="',t+=f(a.price),t+='"></td> <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="',t+=f(a.price*a.count),t+='"></td> <td><input type="text" class="col-xs-12" name="remark" value="',t+=f(a.remark),t+='"></td> <td><a class="cursor T-action T-delete">\u5220\u9664</a></td> </tr> '}),t+=" "),t+=' </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> \u4fdd\u5b58 </button> </div> </div> </div>',new String(t)})});