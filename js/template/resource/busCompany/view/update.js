/*TMODJS:{"debug":true,"version":169,"md5":"3a2c7ec8b5e608e8400e5817c9a3052c"}*/
define(function(require) {
    return require("../../../template")("resource/busCompany/view/update", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, busCompany = $data.busCompany, $each = $utils.$each, $out = ($data.bus, 
            $data.$index, $data.price, $data.i, $data.driver, "");
            return $out += '<div class="col-xs-12 updateBusCompanyContainer globalAdd"> <form class="form-horizontal busCompanyMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false"> <input name="id" type="hidden" value="', 
            $line = 3, $out += $escape(busCompany.id), $out += '"/> <div class=" ui-sortable-handle"> <h5 > <span class="badge badge-primary">1</span> <label class="middle title-size navInformation">车队主体信息</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>车队名称:</label> <div class="col-sm-3"> <input type="text" name="companyName" class="col-sm-12" value="', 
            $line = 14, $out += $escape(busCompany.companyName), $out += '" maxlength="32"> </div> <label class="col-sm-1 control-label no-padding-right">是否启用:</label> <div class="col-sm-2 checkbox" style="margin-left:-10px"> <label> <input ', 
            $line = 19, 1 == busCompany.status && ($out += 'checked="checked"', $line = 19), 
            $out += ' type="checkbox" class="ace busCompany-status" value="1"> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>车队类型:</label> <div class="col-sm-3"> <select name="type"> <option ', 
            $line = 30, 0 == busCompany.type && ($out += 'selected="selected"', $line = 30), 
            $out += ' value="0">个人</option> <option ', $line = 31, 1 == busCompany.type && ($out += 'selected="selected"', 
            $line = 31), $out += ' value="1">集团</option> </select> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label> <div class="col-sm-3"> <input type="text" name="managerName" class="col-sm-12" value="', 
            $line = 38, $out += $escape(busCompany.managerName), $out += '" maxlength="45"/> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" class="col-sm-12" value="', 
            $line = 42, $out += $escape(busCompany.mobileNumber), $out += '" maxlength="11" /> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-3"> <input type="text" name="telNumber" class="col-sm-12" value="', 
            $line = 48, $out += $escape(busCompany.telNumber), $out += '" maxlength="20" /> </div> <label class="col-sm-1 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <input type="text" name="faxNumber" class="col-sm-12" value="', 
            $line = 52, $out += $escape(busCompany.faxNumber), $out += '" maxlength="20" /> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">车队所在省市:</label> <div class="col-sm-9"> <select name="provinceId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="cityId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="districtId" > <option selected="selected" value="">未选择</option> </select> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">详细地址:</label> <div class="col-sm-6"> <input type="text" name="street" class="col-sm-12 addressMinute" placeholder="请输入街道地址" value="', 
            $line = 72, $out += $escape(busCompany.street), $out += '" maxlength="1000" /> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">车队简介:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" maxlength="1000" >', 
            $line = 78, $out += $escape(busCompany.remark), $out += '</textarea> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group busList guideInterval"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">2</span> <label class="middle title-size navInformation">车辆列表</label> <a href="javascript:void(0)" class="btn-bus-add"> <button class="btn btn-sm btn-success btn-busCompany-add " style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover busList"> <thead> <tr> <th class="table-border"><span class="necessary">*</span>车牌号</th> <th class="table-border"><span class="necessary">*</span>车辆品牌</th> <th class="table-border">座位数</th> <th class="table-border">购买时间</th> <th class="table-border">协议包车</th> <th class="table-border">包车时限</th> <th class="table-border">包车价格</th> <th class="table-border">备注</th> <th class="table-border">操作</th> </tr> </thead> <tbody> ', 
            $line = 116, $each(busCompany.busList, function(bus) {
                $out += ' <tr data-entity-id="', $line = 117, $out += $escape(bus.id), $out += '"> <td><input name="licenseNumber" type="text" class="col-sm-12" value="', 
                $line = 118, $out += $escape(bus.licenseNumber), $out += '" maxlength="10" /></td> <td><input name="brand" type="text" class="col-sm-12" value="', 
                $line = 119, $out += $escape(bus.brand), $out += '" maxlength="32" /></td> <td><input name="seatCount" class="col-sm-12" type="text" value="', 
                $line = 120, $out += $escape(bus.seatCount), $out += '"/></td> <td class="col-sm-1"><div class="input-group col-sm-12"><input name="buyTime" type="text" class="date-picker" value="', 
                $line = 121, $out += $escape($helpers.dateFormat(bus.buyTime, "yyyy-MM-dd")), $out += '"/><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div></td> <td> <select name="isChartered" class="col-sm-12"> <option value="1" ', 
                $line = 124, 1 == bus.isChartered && ($out += 'selected="selected"', $line = 124), 
                $out += '>是</option> <option value="0" ', $line = 125, 0 == bus.isChartered && ($out += 'selected="selected"', 
                $line = 125), $out += '>否</option> </select> </td> <td class="time"> ', $line = 129, 
                1 == bus.isChartered ? ($out += " ", $line = 130, $each(bus.priceList, function(price, i) {
                    $out += ' <div data-index="', $line = 131, $out += $escape(i + 1), $out += '" data-entity-id="', 
                    $line = 131, $out += $escape(price.id), $out += '" class="clearfix ', $line = 131, 
                    i > 0 && ($out += "appendDiv", $line = 131), $out += " div-", $line = 131, $out += $escape(i + 1), 
                    $out += '" style="margin-top:2px"> <input name="startTime" type="text" ', $line = 132, 
                    0 == bus.isChartered && ($out += 'readonly="readonly"', $line = 132), $out += ' class="date-picker" style="width:100px" value="', 
                    $line = 132, 1 == bus.isChartered && ($line = 132, $out += $escape($helpers.dateFormat(price.startTime, "yyyy-MM-dd")), 
                    $line = 132), $out += '"/><label>&nbsp;至&nbsp;</label><input name="endTime" type="text" ', 
                    $line = 132, 0 == bus.isChartered && ($out += 'readonly="readonly"', $line = 132), 
                    $out += ' class="date-picker" style="width:100px" value="', $line = 132, 1 == bus.isChartered && ($line = 132, 
                    $out += $escape($helpers.dateFormat(price.endTime, "yyyy-MM-dd")), $line = 132), 
                    $out += '"/> ', $line = 133, 0 == i ? ($out += ' <label class="timeArea ', $line = 134, 
                    0 == bus.isChartered && ($out += "hide", $line = 134), $out += '" style="float:right"> <button class="btn btn-success btn-sm btn-white add"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </button> </label> ', 
                    $line = 139) : ($out += ' <label class="timeArea ', $line = 140, 0 == bus.isChartered && ($out += "hide", 
                    $line = 140), $out += '" style="float:right"> <button class="btn btn-danger btn-sm btn-white delete"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i> </button> </label> ', 
                    $line = 145), $out += " </div> ", $line = 147;
                }), $out += " ", $line = 148) : ($out += ' <div data-index="1" data-entity-id="" class="clearfix div-1" style="margin-top:2px"> <input name="startTime" type="text" readonly="readonly" class="date-picker" style="width:100px" value=""/><label>&nbsp;至&nbsp;</label><input name="endTime" type="text" readonly="readonly" class="date-picker" style="width:100px" value=""/> <label class="timeArea hide" style="float:right"> <button class="btn btn-success btn-sm btn-white add"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </button> </label> </div> ', 
                $line = 157), $out += ' </td> <td class="price"> ', $line = 160, 1 == bus.isChartered ? ($out += " ", 
                $line = 161, $each(bus.priceList, function(price, i) {
                    $out += ' <div data-index="', $line = 162, $out += $escape(i + 1), $out += '" class="clearfix div-', 
                    $line = 162, $out += $escape(i + 1), $out += '" style="margin-top:2px"> <input style="width:100px;" name="contractPrice" type="text" ', 
                    $line = 163, 0 == bus.isChartered && ($out += 'readonly="readonly"', $line = 163), 
                    $out += ' value="', $line = 163, $out += $escape(price.contractPrice), $out += '"/><label>&nbsp;元</label> </div> ', 
                    $line = 165;
                }), $out += " ", $line = 166) : ($out += ' <div data-index="1" class="clearfix div-1" style="margin-top:2px"> <input style="width:100px;" name="contractPrice" type="text" readonly="readonly" value=""/><label>&nbsp;元</label> </div> ', 
                $line = 170), $out += ' </td> <td><input name="remark" class="col-sm-12" type="text" value="', 
                $line = 172, $out += $escape(bus.remark), $out += '"/></td> <td style="width:70px"><a class="btn-bus-delete">删除</a></td> </tr> ', 
                $line = 175;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="form-group driverList guideInterval"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5> <span class="badge badge-primary">3</span> <label class="middle title-size navInformation">司机列表</label> <a href="javascript:void(0)" class="btn-driver-add"> <button class="btn btn-sm btn-success btn-busCompany-add " style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover driverList"> <thead> <tr> <th class="table-border"><span class="necessary">*</span>司机姓名</th> <th class="table-border">司机性别</th> <th class="table-border"><span class="necessary">*</span>司机电话</th> <th class="table-border">司机驾龄</th> <th class="table-border">驾驶证编号</th> <th class="table-border">是否启用</th> <th class="table-border">备注</th> <th class="table-border">操作</th> </tr> </thead> <tbody> ', 
            $line = 212, $each(busCompany.driverList, function(driver) {
                $out += ' <tr data-entity-id="', $line = 213, $out += $escape(driver.id), $out += '"> <td><input name="driverName" class="col-sm-12" type="text" value="', 
                $line = 214, $out += $escape(driver.name), $out += '"/></td> <td> <select name="gender" class="col-sm-12"> <option ', 
                $line = 217, 0 == driver.gender && ($out += 'selected="selected"', $line = 217), 
                $out += ' value="0">男</option> <option ', $line = 218, 1 == driver.gender && ($out += 'selected="selected"', 
                $line = 218), $out += ' value="1">女</option> </select> </td> <td><input name="mobileNumber" class="col-sm-12" type="text" value="', 
                $line = 221, $out += $escape(driver.mobileNumber), $out += '"/></td> <td><input name="driveYears" type="text" value="', 
                $line = 222, $out += $escape(driver.driveYears), $out += '"/></td> <td><input name="licenseId" class="col-sm-12" type="text" value="', 
                $line = 223, $out += $escape(driver.licenseId), $out += '"/></td> <td> <select name="status" class="col-sm-12"> <option ', 
                $line = 226, 0 == driver.status && ($out += 'selected="selected"', $line = 226), 
                $out += ' value="1">启用</option> <option ', $line = 227, 0 == driver.status && ($out += 'selected="selected"', 
                $line = 227), $out += ' value="0">停用</option> </select> </td> <td><input name="remark" class="col-sm-12" type="text" value="', 
                $line = 230, $out += $escape(driver.remark), $out += '" /></td> <td style="width:70px"> <a class=" btn-driver-delete">删除</a> </td> </tr> ', 
                $line = 235;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-busCompany guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 updateBusCompanyContainer globalAdd">\r\n	<form class="form-horizontal busCompanyMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<input name="id" type="hidden" value="{{busCompany.id}}"/>\r\n		<div class=" ui-sortable-handle">\r\n				<h5 >\r\n					<span class="badge badge-primary">1</span>\r\n					<label class="middle title-size navInformation">车队主体信息</label>\r\n				</h5>\r\n			<div class="widget-body">\r\n				<div class="widget-main">\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>车队名称:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="companyName" class="col-sm-12" value="{{busCompany.companyName}}" maxlength="32">\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">是否启用:</label>\r\n						<div class="col-sm-2 checkbox" style="margin-left:-10px">\r\n							<label>\r\n								<input {{if busCompany.status == 1}}checked="checked"{{/if}} type="checkbox" class="ace busCompany-status" value="1">\r\n								<span class="lbl">\r\n									启用\r\n								</span>\r\n							</label>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n					    <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>车队类型:</label>\r\n						<div class="col-sm-3">\r\n							<select name="type">\r\n								<option {{if busCompany.type == 0}}selected="selected"{{/if}} value="0">个人</option>\r\n								<option {{if busCompany.type == 1}}selected="selected"{{/if}} value="1">集团</option>\r\n							</select>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n					    <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="managerName" class="col-sm-12" value="{{busCompany.managerName}}" maxlength="45"/>\r\n						</div>\r\n				    	<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="mobileNumber" class="col-sm-12" value="{{busCompany.mobileNumber}}" maxlength="11" />\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">座机号码:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="telNumber" class="col-sm-12" value="{{busCompany.telNumber}}"  maxlength="20" />\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">传真号码:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="faxNumber" class="col-sm-12" value="{{busCompany.faxNumber}}" maxlength="20" />\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">车队所在省市:</label>\r\n						<div class="col-sm-9">\r\n							<select name="provinceId" style="margin-right:3px">\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n							<select name="cityId"  style="margin-right:3px">\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n							<select name="districtId" >\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">详细地址:</label>\r\n						<div class="col-sm-6">\r\n							<input type="text" name="street" class="col-sm-12 addressMinute" placeholder="请输入街道地址" value="{{busCompany.street}}" maxlength="1000" />\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">车队简介:</label>\r\n						<div class="col-sm-8">\r\n							<textarea class="form-control" name="remark" class="col-sm-12" maxlength="1000" >{{busCompany.remark}}</textarea>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group busList guideInterval">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<span class="badge badge-primary">2</span>\r\n							<label class="middle title-size navInformation">车辆列表</label>\r\n							<a href="javascript:void(0)" class="btn-bus-add">\r\n								<button class="btn btn-sm btn-success btn-busCompany-add " style="margin-left: 20px;">\r\n								<i class="ace-icon fa fa-plus"></i>\r\n								新增\r\n								</button>\r\n							</a>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover busList"> \r\n								<thead>\r\n									<tr>\r\n										<th class="table-border"><span class="necessary">*</span>车牌号</th>\r\n										<th class="table-border"><span class="necessary">*</span>车辆品牌</th>\r\n										<th class="table-border">座位数</th>\r\n										<th class="table-border">购买时间</th>\r\n										<th class="table-border">协议包车</th>\r\n										<th class="table-border">包车时限</th>\r\n										<th class="table-border">包车价格</th>\r\n										<th class="table-border">备注</th>\r\n										<th class="table-border">操作</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									{{each busCompany.busList as bus}}\r\n										<tr data-entity-id="{{bus.id}}">\r\n											<td><input  name="licenseNumber" type="text" class="col-sm-12" value="{{bus.licenseNumber}}" maxlength="10" /></td>\r\n											<td><input name="brand" type="text" class="col-sm-12" value="{{bus.brand}}" maxlength="32" /></td>\r\n											<td><input name="seatCount" class="col-sm-12" type="text" value="{{bus.seatCount}}"/></td>\r\n											<td class="col-sm-1"><div class="input-group col-sm-12"><input name="buyTime" type="text" class="date-picker" value="{{bus.buyTime | dateFormat:\'yyyy-MM-dd\'}}"/><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div></td>\r\n											<td>\r\n												<select name="isChartered" class="col-sm-12">\r\n													<option value="1" {{if bus.isChartered == 1}}selected="selected"{{/if}}>是</option>\r\n													<option value="0" {{if bus.isChartered == 0}}selected="selected"{{/if}}>否</option>\r\n												</select>\r\n											</td>\r\n											<td class="time">\r\n												{{if bus.isChartered == 1}} \r\n													{{each bus.priceList as price i}}\r\n													<div data-index="{{i+1}}" data-entity-id="{{price.id}}" class="clearfix {{if i > 0}}appendDiv{{/if}} div-{{i+1}}" style="margin-top:2px">\r\n														<input name="startTime" type="text" {{if bus.isChartered == 0}}readonly="readonly"{{/if}} class="date-picker" style="width:100px" value="{{if bus.isChartered == 1}}{{price.startTime | dateFormat:\'yyyy-MM-dd\'}}{{/if}}"/><label>&nbsp;至&nbsp;</label><input name="endTime" type="text" {{if bus.isChartered == 0}}readonly="readonly"{{/if}} class="date-picker" style="width:100px" value="{{if bus.isChartered == 1}}{{price.endTime | dateFormat:\'yyyy-MM-dd\'}}{{/if}}"/>\r\n														{{if i == 0}}\r\n														<label class="timeArea {{if bus.isChartered == 0}}hide{{/if}}" style="float:right">\r\n															<button class="btn btn-success btn-sm btn-white add">\r\n																<i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n															</button>\r\n														</label>\r\n														{{else}}\r\n														<label class="timeArea {{if bus.isChartered == 0}}hide{{/if}}" style="float:right">\r\n															<button class="btn btn-danger btn-sm btn-white delete">\r\n																<i class="ace-icon fa fa-minus bigger-110 icon-only"></i>\r\n															</button>\r\n														</label>\r\n														{{/if}}\r\n													</div>\r\n													{{/each}}\r\n												{{else}}\r\n													<div data-index="1" data-entity-id="" class="clearfix div-1" style="margin-top:2px">\r\n														<input name="startTime" type="text" readonly="readonly" class="date-picker" style="width:100px" value=""/><label>&nbsp;至&nbsp;</label><input name="endTime" type="text" readonly="readonly" class="date-picker" style="width:100px" value=""/>\r\n														<label class="timeArea hide" style="float:right">\r\n															<button class="btn btn-success btn-sm btn-white add">\r\n																<i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n															</button>\r\n														</label>\r\n													</div>\r\n												{{/if}}\r\n											</td>\r\n											<td class="price">\r\n												{{if bus.isChartered == 1}}\r\n													{{each bus.priceList as price i}}\r\n													<div data-index="{{i+1}}" class="clearfix div-{{i+1}}" style="margin-top:2px">\r\n														<input style="width:100px;" name="contractPrice" type="text" {{if bus.isChartered == 0}}readonly="readonly"{{/if}} value="{{price.contractPrice}}"/><label>&nbsp;元</label>\r\n													</div>\r\n													{{/each}}\r\n												{{else}}\r\n													<div data-index="1" class="clearfix div-1" style="margin-top:2px">\r\n														<input style="width:100px;" name="contractPrice" type="text" readonly="readonly" value=""/><label>&nbsp;元</label>\r\n													</div>\r\n												{{/if}}\r\n											</td>\r\n											<td><input name="remark" class="col-sm-12" type="text" value="{{bus.remark}}"/></td>\r\n											<td style="width:70px"><a class="btn-bus-delete">删除</a></td>\r\n										</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="form-group driverList guideInterval">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5>\r\n							<span class="badge badge-primary">3</span>\r\n							<label class="middle title-size navInformation">司机列表</label>\r\n							<a href="javascript:void(0)" class="btn-driver-add">\r\n								<button class="btn btn-sm btn-success btn-busCompany-add " style="margin-left: 20px;">\r\n								<i class="ace-icon fa fa-plus"></i>\r\n								新增\r\n								</button>\r\n							</a>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover driverList">\r\n								<thead>\r\n									<tr>\r\n										<th class="table-border"><span class="necessary">*</span>司机姓名</th>\r\n										<th class="table-border">司机性别</th>\r\n										<th class="table-border"><span class="necessary">*</span>司机电话</th>\r\n										<th class="table-border">司机驾龄</th>\r\n										<th class="table-border">驾驶证编号</th>\r\n										<th class="table-border">是否启用</th>\r\n										<th class="table-border">备注</th>\r\n										<th class="table-border">操作</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									{{each busCompany.driverList as driver}}\r\n										<tr data-entity-id="{{driver.id}}">\r\n											<td><input name="driverName" class="col-sm-12" type="text" value="{{driver.name}}"/></td>\r\n											<td>\r\n												<select name="gender" class="col-sm-12">\r\n													<option {{if driver.gender == 0}}selected="selected"{{/if}} value="0">男</option>\r\n													<option {{if driver.gender == 1}}selected="selected"{{/if}} value="1">女</option>\r\n												</select>\r\n											</td>\r\n											<td><input name="mobileNumber" class="col-sm-12" type="text" value="{{driver.mobileNumber}}"/></td>\r\n											<td><input name="driveYears" type="text" value="{{driver.driveYears}}"/></td>\r\n											<td><input name="licenseId" class="col-sm-12" type="text" value="{{driver.licenseId}}"/></td>\r\n											<td>\r\n												<select name="status" class="col-sm-12">\r\n													<option {{if driver.status == 0}}selected="selected"{{/if}} value="1">启用</option>\r\n													<option {{if driver.status == 0}}selected="selected"{{/if}} value="0">停用</option>\r\n												</select>\r\n											</td>\r\n											<td><input name="remark" class="col-sm-12" type="text" value="{{driver.remark}}" /></td>\r\n											<td style="width:70px">\r\n												<a class=" btn-driver-delete">删除</a>\r\n											</td>\r\n										</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-busCompany guideSubmit">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});