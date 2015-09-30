/*TMODJS:{"debug":true,"version":60,"md5":"20ffe5d8f3274c1318974d0be7c97c7e"}*/
define(function(require) {
    return require("../../../template")("resource/travelLine/view/add", '<div class="col-xs-12"> <form class="form-horizontal travelLineMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-info-circle"></i> 线路主体信息 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>线路名称:</label> <div class="col-sm-3"> <input type="text" name="name" class="col-sm-12" maxLength="80" /> </div> <label class="col-sm-2 control-label no-padding-right">是否启用:</label> <div class="col-sm-2 checkbox" style="margin-left:-10px"> <label> <input checked="checked" type="checkbox" class="ace travelLine-status" value="1"> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">费用包含:</label> <div class="col-sm-8"> <textarea class="form-control" name="includeFee" class="col-sm-12" ></textarea> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">费用不包含:</label> <div class="col-sm-8"> <textarea class="form-control" name="excludeFee" class="col-sm-12" ></textarea> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">行程特色:</label> <div class="col-sm-8"> <textarea class="form-control" name="lineFeature" class="col-sm-12" ></textarea> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">行程须知:</label> <div class="col-sm-8"> <textarea class="form-control" name="lineNotice" class="col-sm-12" ></textarea> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">备注:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" ></textarea> </div> </div> </div> </div> </div> </form> <form class="form-horizontal travelLineDayList" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-line-day"></i> 日程列表 </h5> <div class="widget-toolbar no-border"> <a href="javascript:void(0)" class="btn-line-day-add"> <i class="ace-icon fa fa-plus"></i> 新增 </a> </div> </div> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover lineDayList"> <thead> <tr> <th>日期</th> <th>含餐情况</th> <th>住宿地点</th> <th>酒店星级</th> <th>行程标题</th> <th>操作</th> </tr> </thead> <tbody> </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-travelLine"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ');
});