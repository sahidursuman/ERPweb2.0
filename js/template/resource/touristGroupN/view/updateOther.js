/*TMODJS:{"debug":true,"version":14,"md5":"aef8c6460f4a9b3150df15d18455eadd"}*/
define(function(require) {
    return require("../../../template")("resource/touristGroupN/view/updateOther", '<div class="container-fluid mar-t-20"> <div class="row"> <div class="col-xs-12"> <div class="col-xs-10 T-action-plan"> <label class="control-label" data-type="restaurant"> <input type="checkbox" name="isContactUser" class="ace"> <span class="lbl"> 餐厅</span> </label> <label class="control-label" data-type="ticket"> <input type="checkbox" name="isContactUser" class="ace"> <span class="lbl"> 票务</span> </label> <label class="control-label" data-type="other"> <input type="checkbox" name="isContactUser" class="ace"> <span class="lbl"> 其它</span> </label> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-2 text-right no-padding-right control-label">消费日期</div> <div class="col-xs-6"> <input type="text" class="col-xs-12"> </div> </div> <div class="col-xs-12 mar-t-10 hidden T-ask-restaurant"> <div class="col-xs-2 text-right no-padding-right control-label">餐厅要求</div> <div class="col-xs-10"> <input type="text" class="col-xs-12"> </div> </div> <div class="col-xs-12 mar-t-10 hidden T-ask-ticket"> <div class="col-xs-2 text-right no-padding-right control-label">票务要求</div> <div class="col-xs-10"> <input type="text" class="col-xs-12"> </div> </div> <div class="col-xs-12 mar-t-10 hidden T-ask-other"> <div class="col-xs-2 text-right no-padding-right control-label">其它要求</div> <div class="col-xs-10"> <input type="text" class="col-xs-12"> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-2 text-right no-padding-right control-label">责任部门</div> <div class="col-xs-6"> <input type="text" class="col-xs-12"> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-2 text-right no-padding-right control-label">责任计调</div> <div class="col-xs-6"> <input type="text" class="col-xs-12"> </div> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div>');
});