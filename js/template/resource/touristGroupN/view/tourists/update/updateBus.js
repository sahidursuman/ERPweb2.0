/*TMODJS:{"version":39,"md5":"15bca50f673040a447738f7dbb5e6917"}*/
define(function(require){return require("/js/template/template")("resource/touristGroupN/view/tourists/update/updateBus",function(a){"use strict";var b=this,c=b.$helpers,require=a.require,d=b.$escape,e=a.dutyDepartmentName,f=a.dutyDepartmentId,g=a.dutyUserName,h=a.dutyUserId,i=a.isTransfer,j=a.transferPartnerAgency,k=a.needPayAllMoney,l=a.busFeeDel,m=a.busFee,n=b.$each,o=(a.rs,a.$index,b.$string),p="";return p+='<div class="container-fluid mar-t-20"> <div class="row"> <div class="col-xs-12"> <div class="col-xs-1 text-right no-padding-right control-label">\u8f66\u8f86\u8981\u6c42</div> <div class="col-xs-11"> <input type="text" class="col-xs-12" name="requireContent" value="',require&&(p+=d(require.requireContent)),p+='" data-id="',require&&(p+=d(require.id)),p+='"> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label">\u8d23\u4efb\u90e8\u95e8</div> <div class="col-xs-3"> <input type="text" class="col-xs-12" name="dutyDepartmentName" value="',p+=d(e),p+='" data-id="',p+=d(f),p+='"> </div> <div class="col-xs-1 text-right no-padding-right control-label">\u8d23\u4efb\u8ba1\u8c03</div> <div class="col-xs-3"> <input type="text" class="col-xs-12" name="dutyUserName" value="',p+=d(g),p+='" data-id="',p+=d(h),p+='"> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 col-xs-offset-1" style="padding-left: 7px;"> <label class="control-label"> <input type="checkbox" class="ace T-abversion"',1==i&&(p+=" checked"),p+='> <span class="lbl"> \u5916\u8f6c</span> </label> </div> <div class="col-xs-4',1!=i&&(p+=" hidden"),p+=' T-peer"> <label class="pull-left control-label" style="width: 35px">\u540c\u884c</label> <input type="text" class="pull-left" name="transferPartnerAgency" value="',p+=d(j),p+='"> </div> </div> <div class="col-xs-12 mar-t-20"> <div class="col-xs-2" style="padding-left: 20px;"> <button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> \u65b0\u589e\u8d39\u7528\u9879 </button> </div> <div class="col-xs-8" style="padding-top: 4px;"> <label class="control-label pull-left" style="width: 35px;">\u5e94\u4ed8</label> <input type="text" readonly class="pull-left" name="needPayAllMoney" value="',p+=d(k),p+='"> </div> </div> <div class="col-xs-12 mar-t-20"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>\u8d39\u7528\u9879</th> <th>\u6570\u91cf</th> <th>\u5355\u4ef7</th> <th>\u91d1\u989d</th> <th>\u8bf4\u660e</th> <th>\u64cd\u4f5c</th> </tr> </thead> <tbody class="T-fee-list" data-del-json="',p+=d(l),p+='"> ',m&&m.length>0&&(p+=" ",n(m,function(a){p+=' <tr data-id="',p+=d(a.id),p+='"> <td> <select class="col-xs-12" name="type"> ',p+=o(c.getFeeItemType(a.type,!0)),p+=' </select> </td> <td><input type="text" class="col-xs-12 T-option F-float F-count" name="count" value="',p+=d(a.count),p+='"></td> <td><input type="text" class="col-xs-12 T-option F-float F-money" name="price" value="',p+=d(a.price),p+='"></td> <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="',p+=d(a.price*a.count),p+='"></td> <td><input type="text" class="col-xs-12" name="remark" value="',p+=d(a.remark),p+='"></td> <td><a class="cursor T-action T-delete">\u5220\u9664</a></td> </tr> '}),p+=" "),p+=' </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> \u4fdd\u5b58 </button> </div> </div> </div>',new String(p)})});