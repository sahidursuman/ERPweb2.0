/*TMODJS:{"debug":true,"version":61,"md5":"82aa0937ea0ba8d5c5f9fe2593db6172"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/addSingleTripPlan", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), id = $data.id, $escape = $utils.$escape, lineProName = $data.lineProName, startTime = $data.startTime, $out = "";
            return $out += '<div class="container-fulid hct-editor-plan T-tab globalAdd">  <form class="T-basic-info" role="form" onsubmit="return false"> <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">基本信息</h3> <div class="pull-right" style="width:280px;"> <label class="col-xs-4 control-label text-right par-r-15">团号</label> <input type="text" readonly class="col-xs-8" value="系统自动生成"> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>线路产品</label> <div class="hct-input-group col-xs-8 ', 
            $line = 16, id || ($out += "T-search-line", $line = 16), $out += '"> <input type="text" name="lineProductName" readonly class="bind-change col-xs-12" value="', 
            $line = 17, $out += $escape(lineProName), $out += '"> ', $line = 18, id || ($out += '<span class="hct-group-search cursor">[搜索]</span>', 
            $line = 18), $out += ' <input type="hidden" name="lineProductId" value="', $line = 19, 
            $out += $escape(id), $out += '"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">计划人数</label> <div class="col-xs-8"> <input type="text" class="form-control F-float F-count" name="planTouristCount"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>出游日期</label> <div class="col-xs-8"> <input type="text" class="col-xs-12 datepicker" name="startTime" value="', 
            $line = 31, $out += $escape(startTime), $out += '"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>完团日期</label> <div class="col-xs-8"> <input type="text" class="col-xs-12 datepicker" name="endTime"> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">全陪</label> <div class="col-xs-8"> <input name="accompanyGuideName" type="text" class="col-xs-12"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">全陪电话</label> <div class="col-xs-8"> <input name="accompanyGuideMobile" type="text" class="col-xs-12"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">责任计调</label> <div class="col-xs-8"> <input name="dutyOPUserName" type="text" class="col-xs-12"> <input type="hidden" name="dutyOPUserId" > </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">责任部门</label> <div class="col-xs-8"> <input type="text" name="dutyOPDepartment" readonly class="col-xs-12"> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">购物商家</label> <div class="col-xs-8"> <input type="text" name="shopNames" readonly class="col-xs-12 T-shopNames"> <input type="hidden" name="shopIds"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">自费商家</label> <div class="col-xs-8"> <input type="text" name="selfPayItemNames" readonly class="col-xs-12 T-selfPayItemNames"> <input type="hidden" name="selfPayItemIds"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">包含自费</label> <div class="col-xs-8"> <input type="checkbox" class="ace" name="isContainSelfPay"> <label class="lbl"></label> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">接站牌</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="welcomeBoard"> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <label class="col-xs-1 control-label text-right">备注</label> <div class="col-xs-11"> <textarea class="col-xs-12" name="remark" maxlength="1000"></textarea> </div> </div> </div> <div class="row"> <div class="col-xs-6 T-executeTime"> <label class="control-label">确认发团后游客短信设置</label> <label> <input type="radio" class="ace T-immediate" name="executeTimeType" checked> <span class="lbl">立即发送</span> </label> <label> <input type="radio" class="ace T-timed" name="executeTimeType"> <span class="lbl">定时发送</span> </label> <input type="text" class="datetimepicker hidden" name="executeTime"> </div> <div class="col-xs-6"> <label class="col-xs-4 control-label text-right">短信签名</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="travelAgencyTag"> </div> </div> </div> </form>  <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">行程安排</h3> <div class="pull-left mar-l-15"> <button class="btn btn-sm btn-success T-add-days"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">简要行程</th> <th class="th-border">含餐情况</th> <th class="th-border">住宿地点</th> <th class="th-border">景点</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-days"> </tbody> </table> </div> </div>  <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">游客名单</h3> <div class="pull-left mar-l-15"> <button class="btn btn-sm btn-success T-add-touristGroup"> <i class="ace-icon fa fa-search"></i> 选择游客 </button> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">外联销售</th> <th class="th-border">线路产品</th> <th class="th-border">来源</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">客源地</th> <th class="th-border">年龄</th> <th class="th-border">人数</th> <th class="th-border">现收团款</th> <th class="th-border">住宿标准</th> <th class="th-border">包含自费</th> <th class="th-border">备注</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-touristGroup-list"></tbody> </table> </div> </div>  <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">操作计划</h3> <div class="pull-left mar-l-15 T-action-plan"> <label data-type="insurance" class="control-label T-add-action"> <input type="checkbox" class="ace"> <span class="lbl">保险</span> </label> <label data-type="guide" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">导游</span> </label> <label data-type="bus" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">车辆</span> </label> <label data-type="restaurant" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">餐饮</span> </label> <label data-type="hotel" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">酒店</span> </label> <label data-type="scenic" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">景区</span> </label> <label data-type="ticket" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">票务</span> </label> <label data-type="shop" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">购物</span> </label> <label data-type="selfPay" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">自费</span> </label> <label data-type="other" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">其它</span> </label> </div> </div> </div> <div class="row"> <div class="col-xs-12 T-action-plan-list"> </div> </div>  <div class="row"> <div class="form-group text-center mar-t-20"> <button class="btn btn-xs btn-danger T-cancelPlan w100"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-xs btn-primary T-savePlan w100 marginLeft-30"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fulid hct-editor-plan T-tab globalAdd">\r\n	<!-- 1. 基本信息 -->\r\n	<form class="T-basic-info" role="form" onsubmit="return false">\r\n		<div class="row">\r\n			<div class="col-xs-12 hd">\r\n				<h3 class="pull-left">基本信息</h3>\r\n				<div class="pull-right" style="width:280px;">\r\n					<label class="col-xs-4 control-label text-right par-r-15">团号</label>\r\n					<input type="text" readonly class="col-xs-8" value="系统自动生成">\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="row">\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right"><span class="necessary">*</span>线路产品</label>\r\n				<div class="hct-input-group col-xs-8 {{if !id}}T-search-line{{/if}}">\r\n					<input type="text" name="lineProductName" readonly class="bind-change col-xs-12" value="{{lineProName}}">\r\n					{{if !id}}<span class="hct-group-search cursor">[搜索]</span>{{/if}}\r\n					<input type="hidden" name="lineProductId" value="{{id}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">计划人数</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="form-control F-float F-count" name="planTouristCount">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right"><span class="necessary">*</span>出游日期</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="col-xs-12 datepicker" name="startTime" value="{{startTime}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right"><span class="necessary">*</span>完团日期</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="col-xs-12 datepicker" name="endTime">\r\n				</div>\r\n			</div>\r\n		</div>\r\n\r\n		<div class="row">\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">全陪</label>\r\n				<div class="col-xs-8">\r\n					<input name="accompanyGuideName" type="text" class="col-xs-12">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">全陪电话</label>\r\n				<div class="col-xs-8">\r\n					<input name="accompanyGuideMobile" type="text" class="col-xs-12">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">责任计调</label>\r\n				<div class="col-xs-8">\r\n					<input name="dutyOPUserName" type="text" class="col-xs-12">\r\n					<input type="hidden" name="dutyOPUserId" >\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">责任部门</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" name="dutyOPDepartment" readonly class="col-xs-12">\r\n				</div>\r\n			</div>\r\n		</div>\r\n\r\n		\r\n		<div class="row">\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">购物商家</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" name="shopNames" readonly class="col-xs-12 T-shopNames">\r\n					<input type="hidden" name="shopIds">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">自费商家</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" name="selfPayItemNames" readonly class="col-xs-12 T-selfPayItemNames">\r\n					<input type="hidden" name="selfPayItemIds">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">包含自费</label>\r\n				<div class="col-xs-8">\r\n					<input type="checkbox" class="ace" name="isContainSelfPay">\r\n					<label class="lbl"></label>\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">接站牌</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="col-xs-12" name="welcomeBoard">\r\n				</div>\r\n			</div>\r\n		</div>\r\n\r\n		<div class="row">\r\n			<div class="col-xs-12">\r\n				<label class="col-xs-1 control-label text-right">备注</label>\r\n				<div class="col-xs-11">\r\n					<textarea class="col-xs-12" name="remark" maxlength="1000"></textarea>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		\r\n		<div class="row">\r\n			<div class="col-xs-6 T-executeTime">\r\n				<label class="control-label">确认发团后游客短信设置</label>\r\n				<label>\r\n					<input type="radio" class="ace T-immediate" name="executeTimeType" checked>\r\n					<span class="lbl">立即发送</span>\r\n				</label>\r\n				<label>\r\n					<input type="radio" class="ace T-timed" name="executeTimeType">\r\n					<span class="lbl">定时发送</span>\r\n				</label>\r\n				<input type="text" class="datetimepicker hidden" name="executeTime">\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<label class="col-xs-4 control-label text-right">短信签名</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="col-xs-12" name="travelAgencyTag">\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n\r\n	<!-- 2. 行程安排 -->\r\n	<div class="row">\r\n		<div class="col-xs-12 hd">\r\n			<h3 class="pull-left">行程安排</h3>\r\n			<div class="pull-left mar-l-15">\r\n				<button class="btn btn-sm btn-success T-add-days"> <i class="ace-icon fa fa-plus"></i> 新增 </button>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class="row">\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th class="th-border">日期</th>\r\n						<th class="th-border">简要行程</th>\r\n						<th class="th-border">含餐情况</th>\r\n						<th class="th-border">住宿地点</th>\r\n						<th class="th-border">景点</th>\r\n						<th class="th-border">操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-days">\r\n					\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n\r\n	<!-- 3. 游客名单 -->\r\n	<div class="row">\r\n		<div class="col-xs-12 hd">\r\n			<h3 class="pull-left">游客名单</h3>\r\n			<div class="pull-left mar-l-15">\r\n				<button class="btn btn-sm btn-success T-add-touristGroup"> <i class="ace-icon fa fa-search"></i> 选择游客 </button>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class="row">\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th class="th-border">外联销售</th>\r\n						<th class="th-border">线路产品</th>\r\n						<th class="th-border">来源</th>\r\n						<th class="th-border">联系人</th>\r\n						<th class="th-border">联系电话</th>\r\n						<th class="th-border">客源地</th>\r\n						<th class="th-border">年龄</th>\r\n						<th class="th-border">人数</th>\r\n						<th class="th-border">现收团款</th>\r\n						<th class="th-border">住宿标准</th>\r\n						<th class="th-border">包含自费</th>\r\n						<th class="th-border">备注</th>\r\n						<th class="th-border">操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-touristGroup-list"></tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n\r\n	<!-- 4. 操作计划 -->\r\n	<div class="row">\r\n		<div class="col-xs-12 hd">\r\n			<h3 class="pull-left">操作计划</h3>\r\n			<div class="pull-left mar-l-15 T-action-plan">\r\n				<label data-type="insurance" class="control-label T-add-action">\r\n					<input type="checkbox" class="ace">\r\n					<span class="lbl">保险</span>\r\n				</label>\r\n				<label data-type="guide" class="control-label T-add-action mar-l-10">\r\n					<input type="checkbox" class="ace">\r\n					<span class="lbl">导游</span>\r\n				</label>\r\n				<label data-type="bus" class="control-label T-add-action mar-l-10">\r\n					<input type="checkbox" class="ace">\r\n					<span class="lbl">车辆</span>\r\n				</label>\r\n				<label data-type="restaurant" class="control-label T-add-action mar-l-10">\r\n					<input type="checkbox" class="ace">\r\n					<span class="lbl">餐饮</span>\r\n				</label>\r\n				<label data-type="hotel" class="control-label T-add-action mar-l-10">\r\n					<input type="checkbox" class="ace">\r\n					<span class="lbl">酒店</span>\r\n				</label>\r\n				<label data-type="scenic" class="control-label T-add-action mar-l-10">\r\n					<input type="checkbox" class="ace">\r\n					<span class="lbl">景区</span>\r\n				</label>\r\n				<label data-type="ticket" class="control-label T-add-action mar-l-10">\r\n					<input type="checkbox" class="ace">\r\n					<span class="lbl">票务</span>\r\n				</label>\r\n				<label data-type="shop" class="control-label T-add-action mar-l-10">\r\n					<input type="checkbox" class="ace">\r\n					<span class="lbl">购物</span>\r\n				</label>\r\n				<label data-type="selfPay" class="control-label T-add-action mar-l-10">\r\n					<input type="checkbox" class="ace">\r\n					<span class="lbl">自费</span>\r\n				</label>\r\n				<label data-type="other" class="control-label T-add-action mar-l-10">\r\n					<input type="checkbox" class="ace">\r\n					<span class="lbl">其它</span>\r\n				</label>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class="row">\r\n		<div class="col-xs-12 T-action-plan-list">\r\n		</div>\r\n	</div>\r\n\r\n	<!-- 5. 操作 -->\r\n	<div class="row">\r\n		<div class="form-group text-center mar-t-20">\r\n			<button class="btn btn-xs btn-danger T-cancelPlan w100">\r\n				<i class="ace-icon fa fa-times"></i>\r\n				取消\r\n			</button>\r\n\r\n			<button class="btn btn-xs  btn-primary T-savePlan w100 marginLeft-30">\r\n				<i class="ace-icon fa fa-check"></i>\r\n				保存\r\n			</button>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});