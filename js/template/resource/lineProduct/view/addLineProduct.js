/*TMODJS:{"debug":true,"version":469,"md5":"cc40b3085782a86942630a78043d5c29"}*/
define(function(require) {
    return require("../../../template")("resource/lineProduct/view/addLineProduct", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, travelLine = $data.travelLine, $each = $utils.$each, editorName = ($data.travelLineDay, 
            $data.i, $data.editorName), $string = $utils.$string, $out = "";
            return $out += '<div class="col-xs-12 T-updateLineProductContainer"> <form class="form-horizontal T-mainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=" pull-left " > <i class="ace-icon fa fa-info-circle title-size"></i> <label class="middle title-size">线路产品主体信息</label> </h5> <div class="pull-right line-bluer line-separated"></div> <div style="clear: both"></div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>线路产品名称:</label> <div class="col-sm-2"> <input type="text" name="name" class="col-sm-12 bind-change" placeholder="请输入线路产品名称" maxlength="80"> </div> <label class="col-sm-1 control-label no-padding-right">线路天数:</label> <div class="col-sm-2"> <input type="text" class="col-sm-12 F-float F-count" readonly="readonly" name="days" value="', 
            $line = 19, $out += $escape(travelLine.days), $out += '"> </div> <label class="col-sm-1 control-label no-padding-right">线路模板:</label> <div class="col-sm-2"> <input type="hidden" name="travellineId" value="', 
            $line = 23, $out += $escape(travelLine.id), $out += '"> <input type="text" readonly="readonly" class="col-sm-12" value="', 
            $line = 24, $out += $escape(travelLine.name), $out += '"> </div> <label class="col-sm-1 control-label no-padding-right">是否启用:</label> <div class="col-sm-2 checkbox" style="margin-left:-10px;padding-top: 0px"> <label> <input checked="checked" type="checkbox" class="ace busCompany-status" name="status" value="1"> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>线路类型:</label> <div class="col-sm-2"> <input type="text" name="type" class="col-sm-12" maxlength="80"> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>针对客源:</label> <div class="col-sm-2"> <select name="customerType"> <option value="0" selected="selected">散客</option> <option value="1">团体</option> </select> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">购物商家:</label> <div class="col-sm-2"> <input class="T-multiselect T-shopMultiselect col-sm-12" readonly="readonly" type="text" name="" maxlength="80"> </div> <label class="col-sm-1 control-label no-padding-right">自费商家:</label> <div class="col-sm-2"> <input class="T-multiselect T-selfPayMultiselect col-sm-12" readonly="readonly" type="text" name="" maxlength="80"> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">备注:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" maxlength="1000"></textarea> </div> </div> </div> </div> </div> </form> <form class="form-horizontal T-guideService-form" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class="widget-title"> <h5 class="pull-left title-size"> <i class="ace-icon fa fa-calendar-minus-o"></i> <label class="middle title-size">导游服务标准</label> </h5> <div class="pull-right line-bluer line-separatedT"></div> <div style="clear: both"></div> <h5 class="" style="color: #666!important;font-size: 14px!important;"> <a href="javascript:void(0)" class="T-add T-add-service"> <button class="btn btn-sm btn-success btn-guide-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover lineDayList" style="border: 1px solid #ddd;"> <thead> <tr> <th class="th-border">服务标准</th> <th class="th-border">服务内容</th> <th class="th-border">服务要求</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-service-list"> </tbody> </table> </div> </div> </div> </form> <form class="form-horizontal T-middleForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group globalAdd"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class="pull-left title-size"> <i class="ace-icon fa fa-calendar-minus-o"></i> <label class="middle title-size">基础安排模板</label> </h5> <div class="pull-right line-bluer line-separatedT"></div> <div style="clear: both"></div> <div class="widget-body"> <div class="widget-main"> <div class="clearfix"></div> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="ui-sortable-handle T-baseArrange"> <h5 class="" style="color: #666!important;font-size: 14px!important;"> <i class="ace-icon fa fa-circle " style="font-size: 10px!important;"></i> <label class="middle " style="font-weight: bold!important;margin-top: 5px">保险安排</label> <a href="javascript:void(0)" class="T-add T-addInsurance"> <button class="btn btn-sm btn-success btn-guide-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover arrangeInsuranceList"> <thead> <tr> <th class="th-border">公司名称</th> <th class="th-border">险种</th> <th class="th-border">单价</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">座机电话</th> <th class="th-border">备注</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-insuranceForm">  </tbody> </table> </div> </div> </div> </div> <div class="clearfix"></div> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="ui-sortable-handle T-baseArrange"> <h5 class="" style="color: #666!important;font-size: 14px!important;"> <i class="ace-icon fa fa-circle " style="font-size: 10px!important;"></i> <label class="middle " style="font-weight: bold!important;margin-top: 5px">车队安排</label> <a href="javascript:void(0)" class="T-add T-addBusCompany"> <button class="btn btn-sm btn-success btn-guide-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover arrangeBusCompanyList"> <thead> <tr> <th class="th-border">需求座位数</th> <th class="th-border">车辆品牌</th> <th class="th-border">备注</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-busCompanyForm">  </tbody> </table> </div> </div> </div> </div> <div class="clearfix"></div> </div> </div> </div> </div> </div> <div class="form-group lineDayArrangeTemplate"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle widgetSchedule"> <h5 class="pull-left title-size"> <i class="ace-icon fa fa-paper-plane"></i> <label class="middle title-size">行程安排模板</label> </h5> <div class="pull-right line-bluer line-separatedT"></div> <div style="clear: both"></div> <div class="widget-body"> <div class="widget-main"> <div class="tabbable"> <ul class="nav nav-tabs" id="myTab"> ', 
            $line = 222, $each(travelLine.travelLineDayList, function(travelLineDay, i) {
                $out += " <li ", $line = 223, 0 == i && ($out += 'class="active"', $line = 223), 
                $out += '> <a aria-expanded="true" data-toggle="tab" href="#dayList-', $line = 224, 
                $out += $escape(i), $out += '" style="text-align:center;width:140px;"> 第', $line = 225, 
                $out += $escape(i + 1), $out += "天 </a> </li> ", $line = 228;
            }), $out += ' </ul> <div class="tab-content T-daylist" style="position:relative;top: -2px;border: 1px solid #ececec"> ', 
            $line = 231, $each(travelLine.travelLineDayList, function(travelLineDay, i) {
                $out += ' <div id="dayList-', $line = 232, $out += $escape(i), $out += '" class="tab-pane fade ', 
                $line = 232, 0 == i && ($out += "active in", $line = 232), $out += '"> <div class="col-xs-12 col-sm-12 widget-container-col travelLineDayList"> <div class="ui-sortable-handle T-dailyArrangeList"> <h5 class=""> <label class="title-size">简要行程：', 
                $line = 236, $out += $escape(travelLineDay.title), $out += '</label> </h5> <div style="margin-top:10px;margin-bottom:10px"> <button class="btn btn-app btn-xs T-add T-addRestaurant" style="background: #1fade0!important;"> <i class="ace-icon fa fa-plus bigger-160"></i> 餐饮 </button> <button class="btn btn-app btn-xs T-add T-addHotel" style="background: #1fade0!important;"> <i class="ace-icon fa fa-plus bigger-160"></i> 酒店 </button> <button class="btn btn-app btn-xs T-add T-addScenic" style="background: #1fade0!important;"> <i class="ace-icon fa fa-plus bigger-160"></i> 景区 </button> <button class="btn btn-app btn-xs T-add T-addTraffic " style="background: #1fade0!important;"> <i class="ace-icon fa fa-plus bigger-160"></i> 交通 </button> <button class="btn btn-app btn-xs T-add T-addOther " style="background: #1fade0!important;"> <i class="ace-icon fa fa-plus bigger-160"></i> 其它 </button> </div> <div id="timeline-1"> <div class="row"> <div class="col-xs-12 col-sm-12"> <div class="timeline-container" style="overflow: auto;"> <div class="timeline-items scheduleListContainer T-timeline-detail-container"> </div> </div> </div> </div> </div> <div class="widget-body"> <div class="scheduleContainer"> <h5 class="header">行程详情：</h5> <script id="', 
                $line = 275, $out += $escape(editorName), $out += "-", $line = 275, $out += $escape(i), 
                $out += '" class="T-editor" type="text/plain" style="width:100%"> ', $line = 276, 
                $out += $string($helpers.decode(travelLineDay.detail)), $out += ' </script> </div> </div> </div> </div> <div class="clearfix"></div> </div> ', 
                $line = 284;
            }), $out += ' <div style="clear:both;height:0px;line-height:0px;"></div> </div> </div> </div> </div> </div> </div> </div> <div class="form-group driverList"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="title-size">特别说明</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">费用包含:</label> <div class="col-sm-8"> <textarea class="form-control" name="includeFee" class="col-sm-12">', 
            $line = 304, $out += $escape(travelLine.includeFee), $out += '</textarea> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">费用不含:</label> <div class="col-sm-8"> <textarea class="form-control" name="excludeFee" class="col-sm-12">', 
            $line = 310, $out += $escape(travelLine.excludeFee), $out += '</textarea> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">行程特色:</label> <div class="col-sm-8"> <textarea class="form-control" name="lineFeature" class="col-sm-12">', 
            $line = 316, $out += $escape(travelLine.lineFeature), $out += '</textarea> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">行程须知:</label> <div class="col-sm-8"> <textarea class="form-control" name="lineNotice" class="col-sm-12">', 
            $line = 322, $out += $escape(travelLine.lineNotice), $out += '</textarea> </div> </div> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary T-btn-submit guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12  T-updateLineProductContainer">\r\n	<form class="form-horizontal T-mainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class=" pull-left " >\r\n					<i class="ace-icon fa fa-info-circle title-size"></i>\r\n					<label class="middle title-size">线路产品主体信息</label>\r\n				</h5>\r\n			<div class="pull-right line-bluer line-separated"></div>\r\n			<div style="clear: both"></div>\r\n			<div class="widget-body">\r\n				<div class="widget-main">\r\n					<div class="form-group">\r\n						<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>线路产品名称:</label>\r\n						<div class="col-sm-2">\r\n							<input type="text" name="name" class="col-sm-12 bind-change" placeholder="请输入线路产品名称" maxlength="80">  \r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">线路天数:</label>\r\n						<div class="col-sm-2">\r\n							<input type="text" class="col-sm-12 F-float F-count" readonly="readonly" name="days" value="{{travelLine.days}}">\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">线路模板:</label>\r\n						<div class="col-sm-2">\r\n							<input type="hidden" name="travellineId" value="{{travelLine.id}}"> \r\n							<input type="text" readonly="readonly" class="col-sm-12" value="{{travelLine.name}}">\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">是否启用:</label>\r\n						<div class="col-sm-2 checkbox" style="margin-left:-10px;padding-top: 0px">\r\n							<label>\r\n								<input checked="checked" type="checkbox" class="ace busCompany-status" name="status" value="1">\r\n								<span class="lbl">\r\n									启用\r\n								</span>\r\n							</label>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>线路类型:</label>\r\n						<div class="col-sm-2">\r\n							<input type="text" name="type" class="col-sm-12" maxlength="80">\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>针对客源:</label>\r\n						<div class="col-sm-2">\r\n							<select name="customerType">\r\n								<option value="0" selected="selected">散客</option>\r\n								<option value="1">团体</option>\r\n							</select>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-1 control-label no-padding-right">购物商家:</label>\r\n						<div class="col-sm-2">\r\n							<input class="T-multiselect T-shopMultiselect col-sm-12" readonly="readonly" type="text" name="" maxlength="80">\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">自费商家:</label>\r\n						<div class="col-sm-2">\r\n							<input class="T-multiselect T-selfPayMultiselect col-sm-12" readonly="readonly" type="text" name="" maxlength="80">\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-1 control-label no-padding-right">备注:</label>\r\n						<div class="col-sm-8">\r\n							<textarea class="form-control" name="remark" class="col-sm-12" maxlength="1000"></textarea>       \r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n	<form class="form-horizontal T-guideService-form" role="form" style="margin-top:10px" onsubmit="return false">\r\n        <div class=" ui-sortable-handle">\r\n            <h5 class="widget-title">\r\n                <h5 class="pull-left title-size">\r\n                    <i class="ace-icon fa fa-calendar-minus-o"></i>\r\n                    <label class="middle title-size">导游服务标准</label>\r\n                </h5>\r\n                <div class="pull-right line-bluer  line-separatedT"></div>\r\n                <div style="clear: both"></div>\r\n                <h5 class="" style="color: #666!important;font-size: 14px!important;">\r\n                    <a href="javascript:void(0)" class="T-add T-add-service">\r\n                        <button class="btn btn-sm btn-success btn-guide-add" style="margin-left: 20px">\r\n                            <i class="ace-icon fa fa-plus"></i>\r\n                            新增\r\n                        </button>\r\n                    </a>\r\n                </h5>\r\n            </h5>\r\n            <div class="widget-body">\r\n                <div class="widget-main no-padding">\r\n                    <table class="table table-striped table-bordered table-hover lineDayList" style="border: 1px solid #ddd;">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class="th-border">服务标准</th>\r\n                                <th class="th-border">服务内容</th>\r\n                                <th class="th-border">服务要求</th>\r\n                                <th class="th-border">操作</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody class="T-service-list">\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n	\r\n	<form class="form-horizontal T-middleForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group globalAdd">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="pull-left title-size">\r\n							<i class="ace-icon fa fa-calendar-minus-o"></i>\r\n							<label class="middle title-size">基础安排模板</label>\r\n						</h5>\r\n					<div class="pull-right line-bluer line-separatedT"></div>\r\n					<div style="clear: both"></div>\r\n					<div class="widget-body">\r\n						<div class="widget-main">\r\n								<div class="clearfix"></div>\r\n								<div class="col-xs-12 col-sm-12 widget-container-col">\r\n									<div class="ui-sortable-handle T-baseArrange">\r\n											<h5 class="" style="color: #666!important;font-size: 14px!important;">\r\n												<i class="ace-icon fa fa-circle " style="font-size: 10px!important;"></i>\r\n												<label class="middle " style="font-weight: bold!important;margin-top: 5px">保险安排</label>\r\n                                                <a href="javascript:void(0)" class="T-add T-addInsurance">\r\n                                                    <button class="btn btn-sm btn-success btn-guide-add" style="margin-left: 20px">\r\n                                                        <i class="ace-icon fa fa-plus"></i>\r\n                                                        新增\r\n                                                    </button>\r\n                                                </a>\r\n											</h5>\r\n										<div class="widget-body">\r\n											<div class="widget-main">\r\n												<table class="table table-striped table-bordered table-hover arrangeInsuranceList">\r\n													<thead>\r\n														<tr>\r\n															<th class="th-border">公司名称</th>  \r\n															<th class="th-border">险种</th>\r\n															<th class="th-border">单价</th>\r\n															<th class="th-border">联系人</th>\r\n															<th class="th-border">联系电话</th>\r\n															<th class="th-border">座机电话</th>\r\n															<th class="th-border">备注</th>\r\n															<th class="th-border">操作</th>\r\n														</tr>\r\n													</thead>\r\n													<tbody class="T-insuranceForm">\r\n														<!-- <tr>\r\n															<td><input class="T-insurance-name col-xs-12 bind-change" name="insuranceName" type="text"/><input type="hidden" name="insuranceId"/></td>\r\n															<td>\r\n																<input class="col-xs-12 T-chooseInsuranceItem" name="type" type="text" maxlength="100" />\r\n																<input type="hidden" name="typeId" value="">\r\n															</td>\r\n															<td><input class="col-xs-12 F-float F-money" name="price" type="text" maxlength="6" /></td>\r\n															<td><input class="col-xs-12" name="managerName" type="text" readonly="readonly"/></td>\r\n															<td><input class="col-xs-12" name="mobileNumber" type="text" readonly="readonly"/></td>\r\n															<td><input class="col-xs-12" name="telNumber" type="text" readonly="readonly"/></td>\r\n															<td><input class="col-xs-12" name="remark" type="text" maxlength="1000" /></td>\r\n															<td><a class="cursor T-delete deleteAllother T-delTr">删除</a></td>\r\n														</tr> -->\r\n													</tbody>\r\n												</table>\r\n											</div>\r\n										</div>\r\n									</div>\r\n								</div>\r\n								<div class="clearfix"></div>\r\n								<div class="col-xs-12 col-sm-12 widget-container-col">\r\n									<div class="ui-sortable-handle T-baseArrange">\r\n											<h5 class="" style="color: #666!important;font-size: 14px!important;">\r\n												<i class="ace-icon fa fa-circle " style="font-size: 10px!important;"></i>\r\n												<label class="middle " style="font-weight: bold!important;margin-top: 5px">车队安排</label>\r\n                                                <a href="javascript:void(0)" class="T-add T-addBusCompany">\r\n                                                    <button class="btn btn-sm btn-success btn-guide-add" style="margin-left: 20px">\r\n                                                        <i class="ace-icon fa fa-plus"></i>\r\n                                                        新增\r\n                                                    </button>\r\n                                                </a>\r\n											</h5>\r\n										<div class="widget-body">\r\n											<div class="widget-main">\r\n												<table class="table table-striped table-bordered table-hover arrangeBusCompanyList">\r\n													<thead>\r\n														<tr>\r\n															<th class="th-border">需求座位数</th>\r\n															<th class="th-border">车辆品牌</th>\r\n															<th class="th-border">备注</th>\r\n															<th class="th-border">操作</th>\r\n														</tr>\r\n													</thead>\r\n													<tbody class="T-busCompanyForm">\r\n														<!-- <tr>\r\n															<td><input class="col-xs-12 bind-change T-needSeatCount F-float F-count" name="needSeatCount" type="text" maxlength="2" /></td> \r\n															<td><input type="text" class="col-xs-12 T-busBrand" name="brand"></td> \r\n															<td><input class="col-xs-12" name="remark" type="text" maxlength="1000" /></td>\r\n															<td><a class="cursor T-delete deleteAllother T-delTr">删除</a></td>\r\n														</tr> -->\r\n													</tbody>\r\n												</table>\r\n											</div>\r\n										</div>\r\n									</div>\r\n								</div>\r\n								<div class="clearfix"></div>					\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="form-group lineDayArrangeTemplate">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle widgetSchedule">\r\n						<h5 class="pull-left title-size">\r\n							<i class="ace-icon fa fa-paper-plane"></i>\r\n							<label class="middle title-size">行程安排模板</label>\r\n						</h5>\r\n					<div class="pull-right line-bluer  line-separatedT"></div>\r\n					<div style="clear: both"></div>\r\n					<div class="widget-body">\r\n						<div class="widget-main">\r\n							<div class="tabbable">\r\n								<ul class="nav nav-tabs" id="myTab">\r\n									{{each travelLine.travelLineDayList as travelLineDay i}}\r\n									<li {{if i == 0}}class="active"{{/if}}>\r\n										<a aria-expanded="true" data-toggle="tab" href="#dayList-{{i}}" style="text-align:center;width:140px;">\r\n											第{{i+1}}天\r\n										</a>\r\n									</li>\r\n									{{/each}}\r\n								</ul> \r\n								<div class="tab-content T-daylist" style="position:relative;top: -2px;border: 1px solid #ececec">\r\n									{{each travelLine.travelLineDayList as travelLineDay i}}\r\n									<div id="dayList-{{i}}" class="tab-pane fade {{if i == 0}}active in{{/if}}">\r\n										<div class="col-xs-12 col-sm-12 widget-container-col travelLineDayList">\r\n											<div class="ui-sortable-handle T-dailyArrangeList">\r\n													<h5 class="">\r\n														<label class="title-size">简要行程：{{travelLineDay.title}}</label>\r\n													</h5>\r\n														<div style="margin-top:10px;margin-bottom:10px">\r\n															<button class="btn btn-app  btn-xs  T-add T-addRestaurant" style="background: #1fade0!important;">\r\n																<i class="ace-icon fa fa-plus bigger-160"></i>\r\n																餐饮\r\n															</button>\r\n															<button class="btn btn-app   btn-xs  T-add T-addHotel" style="background: #1fade0!important;">\r\n																<i class="ace-icon fa fa-plus bigger-160"></i>\r\n																酒店\r\n															</button>\r\n															<button class="btn btn-app   btn-xs  T-add T-addScenic" style="background: #1fade0!important;">\r\n																<i class="ace-icon fa fa-plus bigger-160"></i>\r\n																景区\r\n															</button>\r\n															<button class="btn btn-app   btn-xs T-add T-addTraffic " style="background: #1fade0!important;">\r\n																<i class="ace-icon fa fa-plus bigger-160"></i>\r\n																交通\r\n															</button>\r\n															<button class="btn btn-app   btn-xs T-add T-addOther " style="background: #1fade0!important;">\r\n																<i class="ace-icon fa fa-plus bigger-160"></i>\r\n																其它\r\n															</button>\r\n														</div>\r\n\r\n														<div id="timeline-1">\r\n															<div class="row">\r\n																<div class="col-xs-12 col-sm-12">\r\n																	<div class="timeline-container" style="overflow: auto;">\r\n																		<div class="timeline-items scheduleListContainer T-timeline-detail-container">\r\n\r\n																		</div><!-- /.timeline-items -->\r\n																	</div><!-- /.timeline-container -->\r\n																</div>\r\n															</div>\r\n														</div>\r\n												<div class="widget-body">\r\n													<div class="scheduleContainer">\r\n														<h5 class="header">行程详情：</h5>\r\n														<script id="{{editorName}}-{{i}}" class="T-editor" type="text/plain" style="width:100%">\r\n															{{#travelLineDay.detail | decode}}\r\n														</script>\r\n													</div>\r\n												</div>\r\n											</div>\r\n										</div>\r\n										<div class="clearfix"></div>\r\n									</div>\r\n									{{/each}}\r\n									<div style="clear:both;height:0px;line-height:0px;"></div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="form-group driverList">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<label class="title-size">特别说明</label>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main">\r\n							<div class="form-group">\r\n								<label class="col-sm-2 control-label no-padding-right">费用包含:</label>\r\n								<div class="col-sm-8">\r\n									<textarea class="form-control" name="includeFee" class="col-sm-12">{{travelLine.includeFee}}</textarea>   \r\n								</div>\r\n							</div>\r\n							<div class="form-group">\r\n								<label class="col-sm-2 control-label no-padding-right">费用不含:</label>\r\n								<div class="col-sm-8">\r\n									<textarea class="form-control"  name="excludeFee" class="col-sm-12">{{travelLine.excludeFee}}</textarea>\r\n								</div>\r\n							</div>\r\n							<div class="form-group">\r\n								<label class="col-sm-2 control-label no-padding-right">行程特色:</label>\r\n								<div class="col-sm-8">\r\n									<textarea class="form-control" name="lineFeature" class="col-sm-12">{{travelLine.lineFeature}}</textarea>\r\n								</div>\r\n							</div>\r\n							<div class="form-group">\r\n								<label class="col-sm-2 control-label no-padding-right">行程须知:</label>\r\n								<div class="col-sm-8">\r\n									<textarea class="form-control"  name="lineNotice" class="col-sm-12">{{travelLine.lineNotice}}</textarea>\r\n								</div>   \r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary T-btn-submit guideSubmit">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});