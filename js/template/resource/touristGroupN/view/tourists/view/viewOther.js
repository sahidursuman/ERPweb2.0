/*TMODJS:{"version":4,"md5":"79e4836891b0fb9eb3d97f8a0909498b"}*/
define(function(require){return require("/js/template/template")("resource/touristGroupN/view/tourists/view/viewOther",function(a){"use strict";var b=this,c=b.$helpers,d=b.$escape,e=a.consumeTime,f=a.isRestaurantRequired,g=a.restaurantRequired,h=a.isTicketRequired,i=a.ticketRequired,j=a.isOtherRequired,k=a.otherRequired,l=a.dutyDepartmentName,m=a.dutyUserName,n=a.needPayAllMoney,o=a.otherFeeDel,p=a.otherFee,q=b.$each,r=(a.rs,a.$index,"");return r+='<div class="container-fluid mar-t-20"> <div class="row"> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label">\u6d88\u8d39\u65e5\u671f</div> <div class="col-xs-3 control-label">',r+=d(e),r+='</div> </div> <div class="col-xs-12 mar-t-10 ',1!=f&&(r+="hidden "),r+='T-ask-restaurant"> <div class="col-xs-1 text-right no-padding-right control-label">\u9910\u5385\u8981\u6c42</div> <div class="col-xs-11 control-label">',g&&(r+=d(g.requireContent)),r+='</div> </div> <div class="col-xs-12 mar-t-10',1!=h&&(r+=" hidden"),r+=' T-ask-ticket"> <div class="col-xs-1 text-right no-padding-right control-label">\u7968\u52a1\u8981\u6c42</div> <div class="col-xs-11 control-label">',i&&(r+=d(i.requireContent)),r+='</div> </div> <div class="col-xs-12 mar-t-10 ',1!=j&&(r+="hidden "),r+='T-ask-other"> <div class="col-xs-1 text-right no-padding-right control-label">\u5176\u5b83\u8981\u6c42</div> <div class="col-xs-11 control-label">',k&&(r+=d(k.requireContent)),r+='</div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label">\u8d23\u4efb\u90e8\u95e8</div> <div class="col-xs-3 control-label">',r+=d(l),r+='</div> <div class="col-xs-1 text-right no-padding-right control-label">\u8d23\u4efb\u8ba1\u8c03</div> <div class="col-xs-3 control-label">',r+=d(m),r+='</div> </div> <div class="col-xs-12 mar-t-20"> <div class="col-xs-8" style="padding-left: 20px; padding-top: 4px;"> <label class="control-label pull-left" style="width: 35px;">\u5e94\u4ed8</label> <span class="control-label pull-left">',r+=d(n),r+='</span> </div> </div> <div class="col-xs-12 mar-t-20"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>\u8d39\u7528\u9879</th> <th>\u6570\u91cf</th> <th>\u5355\u4ef7</th> <th>\u91d1\u989d</th> <th>\u8bf4\u660e</th> </tr> </thead> <tbody class="T-fee-list" data-del-json="',r+=d(o),r+='"> ',p&&p.length>0&&(r+=" ",q(p,function(a){r+=' <tr data-id="',r+=d(a.id),r+='"> <td>',r+=d(c.getFeeItemType(a.type,!0)),r+="</td> <td>",r+=d(a.count),r+="</td> <td>",r+=d(a.price),r+="</td> <td>",r+=d(a.price*a.count),r+="</td> <td>",r+=d(a.remark),r+="</td> </tr> "}),r+=" "),r+=' </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> \u5173\u95ed </button> </div> </div> </div>',new String(r)})});