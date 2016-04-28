/*TMODJS:{"debug":true,"version":400,"md5":"b09d33e965e684ef7d5557d0ddee8c55"}*/
define(function(require) {
    return require("../../../template")("resource/busCompany/view/update", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, busCompany = $data.busCompany, $each = $utils.$each, $out = ($data.bus, 
            $data.$index, $data.price, $data.i, $data.driver, "");
            return $out += ' <div class="col-xs-12 T-updateBusCompanyContainer globalAdd"> <form class="form-horizontal T-busCompanyMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false"> <input name="id" type="hidden" value="', 
            $line = 3, $out += $escape(busCompany.id), $out += '"/> <div class=" ui-sortable-handle"> <h5 > <span class="badge badge-primary">1</span> <label class="middle title-size navInformation">车队主体信息</label> </h5> <div class="widget-body"> <div class="widget-main widget-mainFrist"> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>车队名称:</label> <div class="col-sm-3"> <input type="text" name="companyName" class="col-sm-12" value="', 
            $line = 14, $out += $escape(busCompany.companyName), $out += '" maxlength="32"> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>车队类型:</label> <div class="col-sm-3"> <select name="type"> <option ', 
            $line = 19, 0 == busCompany.type && ($out += 'selected="selected"', $line = 19), 
            $out += ' value="0">个人</option> <option ', $line = 20, 1 == busCompany.type && ($out += 'selected="selected"', 
            $line = 20), $out += ' value="1">集团</option> </select> </div> </div>    <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label> <div class="col-sm-3"> <input type="text" name="managerName" class="col-sm-12" value="', 
            $line = 30, $out += $escape(busCompany.managerName), $out += '" maxlength="45"/> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" class="col-sm-12" value="', 
            $line = 34, $out += $escape(busCompany.mobileNumber), $out += '" maxlength="11" /> <label class="feild-label feild-error-tip" style="top:4px;right:80px;"> <i title="该手机号码将接收短信" class="fa fa-info blue"></i> </label> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-3"> <input type="text" name="telNumber" class="col-sm-12" value="', 
            $line = 43, $out += $escape(busCompany.telNumber), $out += '" maxlength="20" /> </div> <label class="col-sm-1 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <input type="text" name="faxNumber" class="col-sm-12" value="', 
            $line = 47, $out += $escape(busCompany.faxNumber), $out += '" maxlength="20" /> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">所在地区:</label> <div class="col-sm-4"> <select name="provinceId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="cityId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="districtId" > <option selected="selected" value="">未选择</option> </select> </div> <label class="col-sm-1 control-label no-padding-right" style="margin-left: -107px;">是否启用:</label> <div class="col-sm-3 checkbox resource_checkbox"> <label> <input ', 
            $line = 67, 1 == busCompany.status && ($out += 'checked="checked"', $line = 67), 
            $out += ' type="checkbox" class="ace busCompany-status" value="1"> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">详细地址:</label> <div class="col-sm-6"> <input type="text" name="street" class="col-sm-12 addressMinute" placeholder="请输入街道地址" value="', 
            $line = 77, $out += $escape(busCompany.street), $out += '" maxlength="100" /> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">车队简介:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" maxlength="1000" >', 
            $line = 83, $out += $escape(busCompany.remark), $out += '</textarea> </div> </div> <div class="form-group guideInterval"> <div class="col-sm-4"> <input class="form-control F-float F-money T-lowestPrice" type="hidden" name="lowestPrice" value="', 
            $line = 89, $out += $escape(busCompany.lowestPrice), $out += '" class="col-sm-12" maxlength="9" /> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group T-busList guideInterval"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">2</span> <label class="middle title-size navInformation">车辆列表</label> <a href="javascript:void(0)" class="btn-bus-add"> <button class="btn btn-sm btn-success T-busCompany-add " style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover busList" style="border: 1px solid #ccc"> <thead> <tr> <th class="table-border"><span class="necessary">*</span>车牌号</th> <th class="table-border">车辆品牌</th> <th class="table-border">座位数</th> <th class="table-border"style="width:150px;">购买时间</th> <th class="table-border" style="width: 70px">协议包车</th> <th class="table-border col-sm-3" >包车时限</th> <th class="table-border" style="width:140px;">包车价格</th> <th class="table-border">备注</th> <th class="table-border" width="60">操作</th> </tr> </thead> <tbody class="T-busTbody-list"> ', 
            $line = 128, $each(busCompany.busList, function(bus) {
                $out += ' <tr data-entity-id="', $line = 129, $out += $escape(bus.id), $out += '"> <td><input name="licenseNumber" type="text" class="col-sm-12" value="', 
                $line = 130, $out += $escape(bus.licenseNumber), $out += '" maxlength="10" /></td> <td><input name="brand" type="text" class="col-sm-12" value="', 
                $line = 131, $out += $escape(bus.brand), $out += '" maxlength="32" /></td> <td class="busCompanyupSubtractBtn"><input name="seatCount" class="col-sm-10" type="text" value="', 
                $line = 132, $out += $escape(bus.seatCount), $out += '"/></td> <td class="col-sm-1"><div class="input-group col-sm-12"><input name="buyTime" type="text" class="date-picker datepicker" style="width: 130px" ', 
                $line = 133, null == bus.buyTime || "" == bus.buyTime ? ($out += ' value="" ', $line = 133) : ($out += ' value="', 
                $line = 133, $out += $escape($helpers.dateFormat(bus.buyTime, "yyyy-MM-dd")), $out += '" ', 
                $line = 133), $out += '/><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div></td> <td> <select name="isChartered"> <option value="1" ', 
                $line = 136, 1 == bus.isChartered && ($out += 'selected="selected"', $line = 136), 
                $out += '>是</option> <option value="0" ', $line = 137, 0 == bus.isChartered && ($out += 'selected="selected"', 
                $line = 137), $out += '>否</option> </select> </td> <td class="time"> ', $line = 141, 
                1 == bus.isChartered ? ($out += " ", $line = 142, $each(bus.priceList, function(price, i) {
                    $out += ' <div data-index="', $line = 143, $out += $escape(i + 1), $out += '" data-entity-id="', 
                    $line = 143, $out += $escape(price.id), $out += '" class="clearfix ', $line = 143, 
                    i > 0 && ($out += "T-appendDiv", $line = 143), $out += " div-", $line = 143, $out += $escape(i + 1), 
                    $out += '" style="margin-top:2px"> <input name="startTime" type="text" ', $line = 144, 
                    0 == bus.isChartered && ($out += 'readonly="readonly"', $line = 144), $out += ' class="datepicker T-startTime T-calc" style="width:100px" value="', 
                    $line = 144, 1 == bus.isChartered && ($line = 144, $out += $escape($helpers.dateFormat(price.startTime, "yyyy-MM-dd")), 
                    $line = 144), $out += '"/><label>&nbsp;至&nbsp;</label><input name="endTime" type="text" ', 
                    $line = 144, 0 == bus.isChartered && ($out += 'readonly="readonly"', $line = 144), 
                    $out += ' class="datepicker T-endTime T-calc" style="width:100px" value="', $line = 144, 
                    1 == bus.isChartered && ($line = 144, $out += $escape($helpers.dateFormat(price.endTime, "yyyy-MM-dd")), 
                    $line = 144), $out += '"/> ', $line = 145, 0 == i ? ($out += ' <label class="timeArea ', 
                    $line = 146, 0 == bus.isChartered && ($out += "hide", $line = 146), $out += '" style="float:right"> <button class="btn btn-success btn-sm btn-white T-add"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </button> </label> ', 
                    $line = 151) : ($out += ' <label class="timeArea ', $line = 152, 0 == bus.isChartered && ($out += "hide", 
                    $line = 152), $out += '" style="float:right"> <button class="btn btn-danger btn-sm btn-white T-del"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i> </button> </label> ', 
                    $line = 157), $out += " </div> ", $line = 159;
                }), $out += " ", $line = 160) : ($out += ' <div data-index="1" data-entity-id="" class="clearfix T-appendDiv div-1" style="margin-top:2px"> <input name="startTime" type="text" readonly="readonly" class="datepicker T-startTime T-calc" style="width:100px" value=""/><label>&nbsp;至&nbsp;</label><input name="endTime" type="text" readonly="readonly" class="datepicker T-endTime T-calc" style="width:100px" value=""/> <label class="timeArea hide" style="float:right"> <button class="btn btn-success btn-sm btn-white T-add"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </button> </label> </div> ', 
                $line = 169), $out += " </td> <td> ", $line = 172, 1 == bus.isChartered ? ($out += " ", 
                $line = 173, $each(bus.priceList, function(price, i) {
                    $out += ' <div data-index="', $line = 174, $out += $escape(i + 1), $out += '" class="clearfix T-appendDiv div-', 
                    $line = 174, $out += $escape(i + 1), $out += '" style="margin-top:3px;margin-bottom:7px;"> <input style="width:100px;" name="contractPrice" maxlength="9" type="text" ', 
                    $line = 175, 0 == bus.isChartered && ($out += 'readonly="readonly"', $line = 175), 
                    $out += ' class="F-float F-money T-calc T-minPrice" value="', $line = 175, $out += $escape(price.contractPrice), 
                    $out += '"/><label>&nbsp;元</label> </div> ', $line = 177;
                }), $out += " ", $line = 178) : ($out += ' <div data-index="1" class="clearfix T-appendDiv div-1" style="margin-top:3px;margin-bottom:7px;"> <input style="width:100px;" name="contractPrice" class="F-float F-money T-calc T-minPrice" maxlength="9" type="text" readonly="readonly" value=""/><label>&nbsp;元</label> </div> ', 
                $line = 182), $out += ' </td> <td><input name="remark" maxlength="1000" class="col-sm-12" type="text" value="', 
                $line = 184, $out += $escape(bus.remark), $out += '"/></td> <td style="width:70px"><a class="T-bus-delete">删除</a></td> </tr> ', 
                $line = 187;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="form-group T-driverList guideInterval busCompanyAddSubtractBtn"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5> <span class="badge badge-primary">3</span> <label class="middle title-size navInformation">司机列表</label> <a href="javascript:void(0)" class="btn-driver-add"> <button class="btn btn-sm btn-success T-driver-add " style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover driverList" style="border: 1px solid #ccc"> <thead> <tr> <th class="table-border"><span class="necessary">*</span>司机姓名</th> <th class="table-border" style="width: 80px">司机性别</th> <th class="table-border"><span class="necessary">*</span>司机电话</th> <th class="table-border">司机驾龄</th> <th class="table-border">驾驶证编号</th> <th class="table-border" width="80">是否启用</th> <th class="table-border">备注</th> <th class="table-border" width="60">操作</th> </tr> </thead> <tbody> ', 
            $line = 225, $each(busCompany.driverList, function(driver) {
                $out += ' <tr data-entity-id="', $line = 226, $out += $escape(driver.id), $out += '"> <td><input name="driverName" class="col-sm-12" maxlength="32" type="text" value="', 
                $line = 227, $out += $escape(driver.name), $out += '"/></td> <td> <select name="gender"> <option ', 
                $line = 230, 0 == driver.gender && ($out += 'selected="selected"', $line = 230), 
                $out += ' value="0">男</option> <option ', $line = 231, 1 == driver.gender && ($out += 'selected="selected"', 
                $line = 231), $out += ' value="1">女</option> </select> </td> <td><input name="mobileNumber" class="col-sm-12" type="text" value="', 
                $line = 234, $out += $escape(driver.mobileNumber), $out += '"/></td> <td><input name="driveYears" maxlength="2"type="text" value="', 
                $line = 235, $out += $escape(driver.driveYears), $out += '"/></td> <td><input name="licenseId" class="col-sm-12" type="text" value="', 
                $line = 236, $out += $escape(driver.licenseId), $out += '" maxlength="18"/></td> <td width="8%"> <select name="status" class="col-sm-12"> <option ', 
                $line = 239, 0 == driver.status && ($out += 'selected="selected"', $line = 239), 
                $out += ' value="1">启用</option> <option ', $line = 240, 0 == driver.status && ($out += 'selected="selected"', 
                $line = 240), $out += ' value="0">停用</option> </select> </td> <td><input name="remark" class="col-sm-12" type="text" maxlength="1000" value="', 
                $line = 243, $out += $escape(driver.remark), $out += '" /></td> <td style="width:70px"> <a class=" T-driver-delete">删除</a> </td> </tr> ', 
                $line = 248;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary T-submit-busCompany guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: ' <div class="col-xs-12 T-updateBusCompanyContainer globalAdd">\r\n	<form class="form-horizontal T-busCompanyMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<input name="id" type="hidden" value="{{busCompany.id}}"/>\r\n		<div class=" ui-sortable-handle">\r\n				<h5 >\r\n					<span class="badge badge-primary">1</span>\r\n					<label class="middle title-size navInformation">车队主体信息</label>\r\n				</h5>\r\n			<div class="widget-body">\r\n				<div class="widget-main widget-mainFrist">\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>车队名称:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="companyName" class="col-sm-12" value="{{busCompany.companyName}}" maxlength="32">\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>车队类型:</label>\r\n                       <div class="col-sm-3">\r\n						<select name="type">\r\n							<option {{if busCompany.type == 0}}selected="selected"{{/if}} value="0">个人</option>\r\n							<option {{if busCompany.type == 1}}selected="selected"{{/if}} value="1">集团</option>\r\n						</select>\r\n					</div>\r\n					</div>\r\n					<!--<div class="form-group guideInterval">-->\r\n					   <!-- -->\r\n					<!--</div>-->\r\n					<div class="form-group guideInterval">\r\n					    <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="managerName" class="col-sm-12" value="{{busCompany.managerName}}" maxlength="45"/>\r\n						</div>\r\n				    	<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="mobileNumber" class="col-sm-12" value="{{busCompany.mobileNumber}}" maxlength="11" />\r\n							<label class="feild-label feild-error-tip" style="top:4px;right:80px;">\r\n								<i title="该手机号码将接收短信" class="fa fa-info blue"></i>\r\n							</label>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">座机号码:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="telNumber" class="col-sm-12" value="{{busCompany.telNumber}}"  maxlength="20" />\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">传真号码:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="faxNumber" class="col-sm-12" value="{{busCompany.faxNumber}}" maxlength="20" />\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">所在地区:</label>\r\n						<div class="col-sm-4">\r\n							<select name="provinceId" style="margin-right:3px">\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n							<select name="cityId"  style="margin-right:3px">\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n							<select name="districtId" >\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n						</div>\r\n\r\n						<label class="col-sm-1 control-label no-padding-right" style="margin-left: -107px;">是否启用:</label>\r\n						<div class="col-sm-3 checkbox resource_checkbox">\r\n							<label>\r\n								<input {{if busCompany.status == 1}}checked="checked"{{/if}} type="checkbox" class="ace busCompany-status" value="1">\r\n								<span class="lbl">\r\n									启用\r\n								</span>\r\n							</label>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">详细地址:</label>\r\n						<div class="col-sm-6">\r\n							<input type="text" name="street" class="col-sm-12 addressMinute" placeholder="请输入街道地址" value="{{busCompany.street}}" maxlength="100" />\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">车队简介:</label>\r\n						<div class="col-sm-8">\r\n							<textarea class="form-control" name="remark" class="col-sm-12" maxlength="1000" >{{busCompany.remark}}</textarea>\r\n						</div>\r\n					</div>\r\n\r\n					<div class="form-group guideInterval">\r\n						<div class="col-sm-4">\r\n							<input class="form-control F-float F-money T-lowestPrice" type="hidden" name="lowestPrice" value="{{busCompany.lowestPrice}}" class="col-sm-12" maxlength="9" />\r\n						</div>\r\n					</div>\r\n\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group T-busList guideInterval">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<span class="badge badge-primary">2</span>\r\n							<label class="middle title-size navInformation">车辆列表</label>\r\n							<a href="javascript:void(0)" class="btn-bus-add">\r\n								<button class="btn btn-sm btn-success T-busCompany-add " style="margin-left: 20px;">\r\n								<i class="ace-icon fa fa-plus"></i>\r\n								新增\r\n								</button>\r\n							</a>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover busList" style="border: 1px solid #ccc">\r\n								<thead>\r\n									<tr>\r\n										<th class="table-border"><span class="necessary">*</span>车牌号</th>\r\n										<th class="table-border">车辆品牌</th>\r\n										<th class="table-border">座位数</th>\r\n										<th class="table-border"style="width:150px;">购买时间</th>\r\n										<th class="table-border" style="width: 70px">协议包车</th>\r\n										<th class="table-border col-sm-3" >包车时限</th>\r\n										<th class="table-border" style="width:140px;">包车价格</th>\r\n										<th class="table-border">备注</th>\r\n										<th class="table-border" width="60">操作</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody class="T-busTbody-list">\r\n									{{each busCompany.busList as bus}}\r\n										<tr data-entity-id="{{bus.id}}">\r\n											<td><input  name="licenseNumber" type="text" class="col-sm-12" value="{{bus.licenseNumber}}" maxlength="10" /></td>\r\n											<td><input name="brand" type="text" class="col-sm-12" value="{{bus.brand}}" maxlength="32" /></td>\r\n											<td class="busCompanyupSubtractBtn"><input name="seatCount" class="col-sm-10" type="text" value="{{bus.seatCount}}"/></td>\r\n											<td class="col-sm-1"><div class="input-group col-sm-12"><input name="buyTime" type="text" class="date-picker datepicker" style="width: 130px" {{if bus.buyTime == null || bus.buyTime == ""}} value="" {{else}} value="{{bus.buyTime | dateFormat:\'yyyy-MM-dd\'}}" {{/if}}/><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div></td>\r\n											<td>\r\n												<select name="isChartered">\r\n													<option value="1" {{if bus.isChartered == 1}}selected="selected"{{/if}}>是</option>\r\n													<option value="0" {{if bus.isChartered == 0}}selected="selected"{{/if}}>否</option>\r\n												</select>\r\n											</td>\r\n											<td class="time">\r\n												{{if bus.isChartered == 1}} \r\n													{{each bus.priceList as price i}}\r\n													<div data-index="{{i+1}}" data-entity-id="{{price.id}}" class="clearfix {{if i > 0}}T-appendDiv{{/if}} div-{{i+1}}" style="margin-top:2px">\r\n														<input name="startTime" type="text" {{if bus.isChartered == 0}}readonly="readonly"{{/if}} class="datepicker T-startTime T-calc" style="width:100px" value="{{if bus.isChartered == 1}}{{price.startTime | dateFormat:\'yyyy-MM-dd\'}}{{/if}}"/><label>&nbsp;至&nbsp;</label><input name="endTime" type="text" {{if bus.isChartered == 0}}readonly="readonly"{{/if}} class="datepicker T-endTime T-calc" style="width:100px" value="{{if bus.isChartered == 1}}{{price.endTime | dateFormat:\'yyyy-MM-dd\'}}{{/if}}"/>\r\n														{{if i == 0}}\r\n														<label class="timeArea {{if bus.isChartered == 0}}hide{{/if}}" style="float:right">\r\n															<button class="btn btn-success btn-sm btn-white T-add">\r\n																<i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n															</button>\r\n														</label>\r\n														{{else}}\r\n														<label class="timeArea {{if bus.isChartered == 0}}hide{{/if}}" style="float:right">\r\n															<button class="btn btn-danger btn-sm btn-white T-del">\r\n																<i class="ace-icon fa fa-minus bigger-110 icon-only"></i>\r\n															</button>\r\n														</label>\r\n														{{/if}}\r\n													</div>\r\n													{{/each}}\r\n												{{else}}\r\n													<div data-index="1" data-entity-id="" class="clearfix T-appendDiv div-1" style="margin-top:2px">\r\n														<input name="startTime" type="text" readonly="readonly" class="datepicker T-startTime T-calc" style="width:100px" value=""/><label>&nbsp;至&nbsp;</label><input name="endTime" type="text" readonly="readonly" class="datepicker T-endTime T-calc" style="width:100px" value=""/>\r\n														<label class="timeArea hide" style="float:right">\r\n															<button class="btn btn-success btn-sm btn-white T-add">\r\n																<i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n															</button>\r\n														</label>\r\n													</div>\r\n												{{/if}}\r\n											</td>\r\n											<td>\r\n												{{if bus.isChartered == 1}}\r\n													{{each bus.priceList as price i}}\r\n													<div data-index="{{i+1}}" class="clearfix T-appendDiv div-{{i+1}}" style="margin-top:3px;margin-bottom:7px;">\r\n														<input style="width:100px;" name="contractPrice" maxlength="9" type="text" {{if bus.isChartered == 0}}readonly="readonly"{{/if}} class="F-float F-money T-calc T-minPrice" value="{{price.contractPrice}}"/><label>&nbsp;元</label>\r\n													</div>\r\n													{{/each}}\r\n												{{else}}\r\n													<div data-index="1" class="clearfix T-appendDiv div-1" style="margin-top:3px;margin-bottom:7px;">\r\n														<input style="width:100px;" name="contractPrice" class="F-float F-money T-calc T-minPrice" maxlength="9" type="text" readonly="readonly" value=""/><label>&nbsp;元</label>\r\n													</div>\r\n												{{/if}}\r\n											</td>\r\n											<td><input name="remark" maxlength="1000" class="col-sm-12" type="text" value="{{bus.remark}}"/></td>\r\n											<td style="width:70px"><a class="T-bus-delete">删除</a></td>\r\n										</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="form-group T-driverList guideInterval busCompanyAddSubtractBtn">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5>\r\n							<span class="badge badge-primary">3</span>\r\n							<label class="middle title-size navInformation">司机列表</label>\r\n							<a href="javascript:void(0)" class="btn-driver-add">\r\n								<button class="btn btn-sm btn-success T-driver-add " style="margin-left: 20px;">\r\n								<i class="ace-icon fa fa-plus"></i>\r\n								新增\r\n								</button>\r\n							</a>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover driverList" style="border: 1px solid #ccc">\r\n								<thead>\r\n									<tr>\r\n\r\n										<th class="table-border"><span class="necessary">*</span>司机姓名</th>\r\n										<th class="table-border" style="width: 80px">司机性别</th>\r\n										<th class="table-border"><span class="necessary">*</span>司机电话</th>\r\n										<th class="table-border">司机驾龄</th>\r\n										<th class="table-border">驾驶证编号</th>\r\n										<th class="table-border" width="80">是否启用</th>\r\n										<th class="table-border">备注</th>\r\n										<th class="table-border" width="60">操作</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									{{each busCompany.driverList as driver}}\r\n										<tr data-entity-id="{{driver.id}}">\r\n											<td><input name="driverName" class="col-sm-12" maxlength="32" type="text" value="{{driver.name}}"/></td>\r\n											<td>\r\n												<select name="gender">\r\n													<option {{if driver.gender == 0}}selected="selected"{{/if}} value="0">男</option>\r\n													<option {{if driver.gender == 1}}selected="selected"{{/if}} value="1">女</option>\r\n												</select>\r\n											</td>\r\n											<td><input name="mobileNumber" class="col-sm-12" type="text" value="{{driver.mobileNumber}}"/></td>\r\n											<td><input name="driveYears" maxlength="2"type="text" value="{{driver.driveYears}}"/></td>\r\n											<td><input name="licenseId" class="col-sm-12" type="text" value="{{driver.licenseId}}" maxlength="18"/></td>\r\n											<td width="8%">\r\n												<select name="status" class="col-sm-12">\r\n													<option {{if driver.status == 0}}selected="selected"{{/if}} value="1">启用</option>\r\n													<option {{if driver.status == 0}}selected="selected"{{/if}} value="0">停用</option>\r\n												</select>\r\n											</td>\r\n											<td><input name="remark" class="col-sm-12" type="text" maxlength="1000" value="{{driver.remark}}" /></td>\r\n											<td style="width:70px">\r\n												<a class=" T-driver-delete">删除</a>\r\n											</td>\r\n										</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary T-submit-busCompany guideSubmit">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});