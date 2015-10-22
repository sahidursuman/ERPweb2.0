/*TMODJS:{"debug":true,"version":104,"md5":"d7870693828900d49ab9698986b74010"}*/
define(function(require) {
    return require("../../../template")("resource/travelLine/view/add", '<div class="col-xs-12 globalAdd"> <form class="form-horizontal travelLineMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class="widget-title"> <span class="badge badge-primary">1</span> <label class="middle title-size">线路主体信息 </label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>线路名称:</label> <div class="col-sm-3"> <input type="text" name="name" class="col-sm-12" maxLength="100" /> </div> <label class="col-sm-2 control-label no-padding-right">是否启用:</label> <div class="col-sm-2 checkbox" style="margin-left:-10px;padding-top: 0px"> <label> <input checked="checked" type="checkbox" class="ace travelLine-status" value="1"> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">费用包含:</label> <div class="col-sm-8"> <textarea class="form-control" name="includeFee" class="col-sm-12" maxlength="1000" ></textarea> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">费用不包含:</label> <div class="col-sm-8"> <textarea class="form-control" name="excludeFee" class="col-sm-12" maxlength="1000" ></textarea> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">行程特色:</label> <div class="col-sm-8"> <textarea class="form-control" name="lineFeature" class="col-sm-12" maxlength="1000" ></textarea> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">行程须知:</label> <div class="col-sm-8"> <textarea class="form-control" name="lineNotice" class="col-sm-12" maxlength="1000" ></textarea> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">备注:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" maxlength="1000" ></textarea> </div> </div> </div> </div> </div> </form> <form class="form-horizontal travelLineDayList" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class="widget-title"> <span class="badge badge-primary">2</span> <label class="middle title-size">日程列表</label> <a href="javascript:void(0)" class="btn-line-day-add"> <button class="btn btn-sm btn-success btn-busCompany-add " style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover lineDayList"> <thead> <tr> <th>日期</th> <th>含餐情况</th> <th>住宿地点</th> <th>酒店星级</th> <th>行程标题</th> <th>操作</th> </tr> </thead> <tbody> </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-travelLine guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ');
});