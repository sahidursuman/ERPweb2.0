/*TMODJS:{"debug":true,"version":178,"md5":"22a720ea2570912755a6ef9eb0a7446d"}*/
define(function(require) {
    return require("../../../template")("resource/selfpay/view/update", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, selfpay = $data.selfpay, $each = $utils.$each, $out = ($data.itemList, 
            $data.$index, $data.rebateList, $data.index, "");
            return $out += '<div class="col-xs-12 T-update-selfpay-form globalAdd"> <form class="form-horizontal T-selfpayMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false"> <input name="selfpayId" type="hidden" value="', 
            $line = 3, $out += $escape(selfpay.id), $out += '" /> <div class=" ui-sortable-handle"> <h5 > <span class="badge badge-primary">1</span> <label class="title-size middle">自费项目主体信息</label> </h5> <div class="widget-body"> <div class="widget-main widget-mainFrist"> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>公司名称:</label> <div class="col-sm-3"> <input type="text" name="name" value="', 
            $line = 14, $out += $escape(selfpay.name), $out += '" class="col-sm-12" maxlength="100"> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>是否启用:</label> <div class="col-sm-3 checkbox" style="margin-left:-10px;margin-top: -6px"> <label> <input ', 
            $line = 20, 1 == selfpay.status && ($out += ' checked="checked"', $line = 20), $out += ' type="checkbox" class="ace T-selfpay-status" value="1"> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label> <div class="col-sm-3"> <input type="text" name="managerName" value="', 
            $line = 30, $out += $escape(selfpay.managerName), $out += '" class="col-sm-12" maxlength="32"> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" value="', 
            $line = 34, $out += $escape(selfpay.mobileNumber), $out += '" class="col-sm-12" maxlength="11"> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-3"> <input type="text" name="telNumber" class="col-sm-12" value="', 
            $line = 40, $out += $escape(selfpay.telNumber), $out += '" maxlength="20"/> </div> <label class="col-sm-1 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <input type="text" name="faxNumber" class="col-sm-12" value="', 
            $line = 44, $out += $escape(selfpay.faxNumber), $out += '" maxlength="20"/> </div> </div>  <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">人数返佣(元/人):</label> <div class="col-sm-3"> <input type="text" name="customerRebateMoney" value="', 
            $line = 54, $out += $escape(selfpay.customerRebateMoney), $out += '" class="col-sm-12" maxlength="10"> </div> <label class="col-sm-1 control-label no-padding-right">公司所在省市:</label> <div class="col-sm-3"> <select name="provinceId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="cityId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="districtId"> <option selected="selected" value="">未选择</option> </select> </div> </div>     <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">详细地址:</label> <div class="col-sm-6"> <input type="text" name="street" value="', 
            $line = 78, $out += $escape(selfpay.street), $out += '" class="col-sm-12 addressMinute" placeholder="请输入街道地址" maxlength="100"/> </div> </div> <div class="form-group guideInterval"> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">公司简介:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" >', 
            $line = 87, $out += $escape(selfpay.remark), $out += '</textarea> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group priceList"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 > <span class="badge badge-primary">1</span> <label class="title-size middle">项目价格列表</label> <a href="javascript:void(0)" class="btn-price-add"> <button class="btn btn-sm btn-success T-btn-selfpay-update " style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover priceList" style="border: 1px solid #ccc"> <thead> <tr> <th class="table-border"><span class="necessary">*</span>项目名称</th> <th class="table-border">针对客源</th> <th class="table-border"><span class="necessary">*</span>时间区间</th> <th class="table-border"><span class="necessary">*</span>内部价格(元)</th> <th class="table-border"><span class="necessary">*</span>市场价格(元)</th> <th class="table-border"><span class="necessary">*</span>导游返佣(%)</th> <th class="table-border"><span class="necessary">*</span>旅行社返佣(%)</th> <th class="table-border">备注</th> <th class="table-border">操作</th> </tr> </thead> <tbody class="T-selfpayList-Tbody">', 
            $line = 125, $each(selfpay.selfPayItemList, function(itemList) {
                $out += ' <tr data-entity-id="', $line = 126, $out += $escape(itemList.id), $out += '"> <td> <input name="name" value="', 
                $line = 128, $out += $escape(itemList.name), $out += '" class="col-sm-12" type="text" style="min-width:100px;" maxlength="100"> </td> <td> <select class="col-sm-12" name="customerType" style="min-width:100px;"> <option value="0" ', 
                $line = 132, 0 == itemList.customerType && ($out += 'selected="selected"', $line = 132), 
                $out += '>散客</option> <option value="1" ', $line = 133, 1 == itemList.customerType && ($out += 'selected="selected"', 
                $line = 133), $out += ">团体</option> </select> </td> <td>", $line = 136, $each(itemList.SelfPayRebateList, function(rebateList, index) {
                    $out += " ", $line = 137, 0 == index ? ($out += ' <div class="col-sm-12 no-padding dateTimeArea" data-index="1"> <input type="hidden" name="rebateListId" value="', 
                    $line = 139, $out += $escape(rebateList.id), $out += '" /> <input name="startTime" value="', 
                    $line = 140, $out += $escape($helpers.dateFormat(rebateList.startTime, "yyyy-MM-dd")), 
                    $out += '" type="text" class="datepicker col-sm-4"> <label class="col-sm-2 control-label center">&nbsp;至&nbsp;</label> <input name="endTime" value="', 
                    $line = 142, $out += $escape($helpers.dateFormat(rebateList.endTime, "yyyy-MM-dd")), 
                    $out += '" type="text" class="datepicker col-sm-4"> <label class="priceArea col-sm-2" style="padding-top:0px;"> <button class="btn btn-success btn-sm btn-white T-add"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </button> </label> </div>', 
                    $line = 148) : ($out += ' <div class="col-sm-12 no-padding dateTimeArea" data-index="', 
                    $line = 149, $out += $escape(index + 1), $out += '"> <input type="hidden" name="rebateListId" value="', 
                    $line = 150, $out += $escape(rebateList.id), $out += '" /> <input name="startTime" value="', 
                    $line = 151, $out += $escape($helpers.dateFormat(rebateList.startTime, "yyyy-MM-dd")), 
                    $out += '" type="text" class="datepicker col-sm-4"> <label class="col-sm-2 control-label center">&nbsp;至&nbsp;</label> <input name="endTime" value="', 
                    $line = 153, $out += $escape($helpers.dateFormat(rebateList.endTime, "yyyy-MM-dd")), 
                    $out += '" type="text" class="datepicker col-sm-4"> <label class="priceArea col-sm-2" style="padding-top:0px;"> <button class="btn btn-danger btn-sm btn-white T-del"> <i class="ace-icon fa fa-minus bigger-110 icon-only" style="line-height: 14px"></i> </button> </label> </div>', 
                    $line = 159), $line = 159;
                }), $out += " </td> <td>", $line = 161, $each(itemList.SelfPayRebateList, function(rebateList, index) {
                    $out += " ", $line = 162, 0 == index ? ($out += ' <div class="col-sm-12 no-padding"> <input name="contractPrice" value="', 
                    $line = 164, $out += $escape(rebateList.price), $out += '" class="col-sm-12" type="text" maxlength="10"> </div>', 
                    $line = 165) : ($out += ' <div class="col-sm-12 no-padding" style="padding-top:5px!important;"> <input name="contractPrice" value="', 
                    $line = 167, $out += $escape(rebateList.price), $out += '" class="col-sm-12" type="text" maxlength="10"> </div>', 
                    $line = 168), $line = 168;
                }), $out += " </td> <td>", $line = 170, $each(itemList.SelfPayRebateList, function(rebateList, index) {
                    $out += " ", $line = 171, 0 == index ? ($out += ' <div class="col-sm-12 no-padding"> <input name="marketPrice" value="', 
                    $line = 173, $out += $escape(rebateList.marketPrice), $out += '" class="col-sm-12" type="text" maxlength="10"> </div>', 
                    $line = 174) : ($out += ' <div class="col-sm-12 no-padding" style="padding-top:5px!important;"> <input name="marketPrice" value="', 
                    $line = 176, $out += $escape(rebateList.marketPrice), $out += '" class="col-sm-12" type="text" maxlength="10"> </div>', 
                    $line = 177), $line = 177;
                }), $out += " </td> <td>", $line = 179, $each(itemList.SelfPayRebateList, function(rebateList, index) {
                    $out += " ", $line = 180, 0 == index ? ($out += ' <div class="col-sm-12 no-padding"> <input name="guideRate" value="', 
                    $line = 182, $out += $escape($helpers.toFixed(100 * rebateList.guideRate)), $out += '" class="col-sm-12" type="text" maxlength="5"> </div>', 
                    $line = 183) : ($out += ' <div class="col-sm-12 no-padding" style="padding-top:5px!important;"> <input name="guideRate" value="', 
                    $line = 185, $out += $escape($helpers.toFixed(100 * rebateList.guideRate)), $out += '" class="col-sm-12" type="text" maxlength="5"> </div>', 
                    $line = 186), $line = 186;
                }), $out += " </td> <td>", $line = 188, $each(itemList.SelfPayRebateList, function(rebateList, index) {
                    $out += " ", $line = 189, 0 == index ? ($out += ' <div class="col-sm-12 no-padding"> <input name="travelAgencyRate" value="', 
                    $line = 191, $out += $escape($helpers.toFixed(100 * rebateList.travelAgencyRate)), 
                    $out += '" class="col-sm-12" type="text" maxlength="5"> </div>', $line = 192) : ($out += ' <div class="col-sm-12 no-padding" style="padding-top:5px!important;"> <input name="travelAgencyRate" value="', 
                    $line = 194, $out += $escape($helpers.toFixed(100 * rebateList.travelAgencyRate)), 
                    $out += '" class="col-sm-12" type="text" maxlength="5"> </div>', $line = 195), $line = 195;
                }), $out += ' </td> <td> <input name="remark" value="', $line = 198, $out += $escape(itemList.remark), 
                $out += '" type="text" class="col-sm-12" style="min-width:100px;" maxlength="1000"> </td> <td style="width:70px">    <a class="T-btn-price-delete">删除</a> </td> </tr>', 
                $line = 206;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary T-btn-submit-selfpay"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 T-update-selfpay-form globalAdd">\r\n	<form class="form-horizontal T-selfpayMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<input name="selfpayId" type="hidden" value="{{selfpay.id}}" />\r\n		<div class=" ui-sortable-handle">\r\n				<h5 >\r\n					<span class="badge badge-primary">1</span>\r\n					<label class="title-size middle">自费项目主体信息</label>\r\n				</h5>\r\n			<div class="widget-body">\r\n				<div class="widget-main widget-mainFrist">\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>公司名称:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="name" value="{{selfpay.name}}" class="col-sm-12" maxlength="100">\r\n						</div>\r\n\r\n						<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>是否启用:</label>\r\n						<div class="col-sm-3 checkbox" style="margin-left:-10px;margin-top: -6px">\r\n							<label>\r\n								<input {{if selfpay.status == 1}} checked="checked"{{/if}}  type="checkbox" class="ace T-selfpay-status" value="1">\r\n								<span class="lbl">\r\n									启用\r\n								</span>\r\n							</label>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n					    <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="managerName" value="{{selfpay.managerName}}" class="col-sm-12" maxlength="32">\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="mobileNumber" value="{{selfpay.mobileNumber}}" class="col-sm-12" maxlength="11">\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n					    <label class="col-sm-2 control-label no-padding-right">座机号码:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="telNumber" class="col-sm-12" value="{{selfpay.telNumber}}" maxlength="20"/>\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">传真号码:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="faxNumber" class="col-sm-12" value="{{selfpay.faxNumber}}" maxlength="20"/>\r\n						</div>\r\n					</div>\r\n					\r\n                                                                                                             \r\n                                                                                                  \r\n                   <!--添加人数返佣start-->                  \r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">人数返佣(元/人):</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="customerRebateMoney" value="{{selfpay.customerRebateMoney}}" class="col-sm-12" maxlength="10">\r\n						</div>\r\n\r\n						<label class="col-sm-1 control-label no-padding-right">公司所在省市:</label>\r\n						<div class="col-sm-3">\r\n							<select name="provinceId"  style="margin-right:3px">\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n							<select name="cityId"  style="margin-right:3px">\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n							<select name="districtId">\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n						</div>\r\n					</div>\r\n                  <!--添加人数返佣end-->    \r\n\r\n					<!--<div class="form-group guideInterval">-->\r\n					<!-- -->\r\n					<!--</div>-->\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">详细地址:</label>\r\n						<div class="col-sm-6">\r\n							<input type="text" name="street" value="{{selfpay.street}}" class="col-sm-12 addressMinute" placeholder="请输入街道地址" maxlength="100"/>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">公司简介:</label>\r\n						<div class="col-sm-8">\r\n							<textarea class="form-control" name="remark" class="col-sm-12" >{{selfpay.remark}}</textarea>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group priceList">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n					<h5 >\r\n						<span class="badge badge-primary">1</span>\r\n						<label class="title-size middle">项目价格列表</label>\r\n							<a href="javascript:void(0)" class="btn-price-add">\r\n								<button class="btn btn-sm btn-success T-btn-selfpay-update " style="margin-left: 20px;">\r\n								<i class="ace-icon fa fa-plus"></i>\r\n								新增\r\n								</button>\r\n							</a>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover priceList" style="border: 1px solid #ccc">\r\n								<thead>\r\n									<tr>\r\n										<th class="table-border"><span class="necessary">*</span>项目名称</th>\r\n										<th class="table-border">针对客源</th>\r\n										<th class="table-border"><span class="necessary">*</span>时间区间</th>\r\n										<th class="table-border"><span class="necessary">*</span>内部价格(元)</th>\r\n										<th class="table-border"><span class="necessary">*</span>市场价格(元)</th>\r\n										<th class="table-border"><span class="necessary">*</span>导游返佣(%)</th>\r\n										<th class="table-border"><span class="necessary">*</span>旅行社返佣(%)</th>\r\n										<th class="table-border">备注</th>\r\n										<th class="table-border">操作</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody class="T-selfpayList-Tbody">{{each selfpay.selfPayItemList as itemList}}\r\n									<tr data-entity-id="{{itemList.id}}">\r\n										<td>\r\n											<input name="name" value="{{itemList.name}}" class="col-sm-12" type="text" style="min-width:100px;" maxlength="100">\r\n										</td>\r\n										<td>\r\n											<select class="col-sm-12" name="customerType" style="min-width:100px;">\r\n												<option value="0" {{if itemList.customerType == 0}}selected="selected"{{/if}}>散客</option>\r\n												<option value="1" {{if itemList.customerType == 1}}selected="selected"{{/if}}>团体</option>\r\n											</select>\r\n										</td>\r\n										<td>{{each itemList.SelfPayRebateList as rebateList index}}\r\n											{{if index == 0}}\r\n											<div class="col-sm-12 no-padding dateTimeArea" data-index="1">\r\n												<input type="hidden" name="rebateListId" value="{{rebateList.id}}" />\r\n												<input name="startTime" value="{{rebateList.startTime | dateFormat: \'yyyy-MM-dd\'}}" type="text" class="datepicker col-sm-4">\r\n												<label class="col-sm-2 control-label center">&nbsp;至&nbsp;</label>\r\n												<input name="endTime" value="{{rebateList.endTime | dateFormat: \'yyyy-MM-dd\'}}" type="text" class="datepicker col-sm-4">\r\n												<label class="priceArea col-sm-2" style="padding-top:0px;">\r\n													<button class="btn btn-success btn-sm btn-white T-add">\r\n														<i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n													</button>\r\n												</label>\r\n											</div>{{else}}\r\n											<div class="col-sm-12 no-padding dateTimeArea" data-index="{{index+1}}">\r\n												<input type="hidden" name="rebateListId" value="{{rebateList.id}}" />\r\n												<input name="startTime" value="{{rebateList.startTime | dateFormat: \'yyyy-MM-dd\'}}" type="text" class="datepicker col-sm-4">\r\n												<label class="col-sm-2 control-label center">&nbsp;至&nbsp;</label>\r\n												<input name="endTime" value="{{rebateList.endTime | dateFormat: \'yyyy-MM-dd\'}}" type="text" class="datepicker col-sm-4">\r\n												<label class="priceArea col-sm-2" style="padding-top:0px;">\r\n													<button class="btn btn-danger btn-sm btn-white T-del">\r\n														<i class="ace-icon fa fa-minus bigger-110 icon-only" style="line-height: 14px"></i>\r\n													</button>\r\n												</label>\r\n											</div>{{/if}}{{/each}}\r\n										</td>\r\n										<td>{{each itemList.SelfPayRebateList as rebateList index}}\r\n											{{if index == 0}}\r\n											<div class="col-sm-12 no-padding">\r\n												<input name="contractPrice" value="{{rebateList.price}}" class="col-sm-12" type="text" maxlength="10">\r\n											</div>{{else}}\r\n											<div class="col-sm-12 no-padding" style="padding-top:5px!important;">\r\n												<input name="contractPrice" value="{{rebateList.price}}" class="col-sm-12" type="text" maxlength="10">\r\n											</div>{{/if}}{{/each}}\r\n										</td>\r\n										<td>{{each itemList.SelfPayRebateList as rebateList index}}\r\n											{{if index == 0}}\r\n											<div class="col-sm-12 no-padding">\r\n												<input name="marketPrice" value="{{rebateList.marketPrice}}" class="col-sm-12" type="text" maxlength="10">\r\n											</div>{{else}}\r\n											<div class="col-sm-12 no-padding" style="padding-top:5px!important;">\r\n												<input name="marketPrice" value="{{rebateList.marketPrice}}" class="col-sm-12" type="text" maxlength="10">\r\n											</div>{{/if}}{{/each}}\r\n										</td>\r\n										<td>{{each itemList.SelfPayRebateList as rebateList index}}\r\n											{{if index == 0}}\r\n											<div class="col-sm-12 no-padding">\r\n												<input name="guideRate" value="{{rebateList.guideRate*100 | toFixed}}" class="col-sm-12" type="text" maxlength="5">\r\n											</div>{{else}}\r\n											<div class="col-sm-12 no-padding" style="padding-top:5px!important;">\r\n												<input name="guideRate" value="{{rebateList.guideRate*100 | toFixed}}" class="col-sm-12" type="text" maxlength="5">\r\n											</div>{{/if}}{{/each}}\r\n										</td>\r\n										<td>{{each itemList.SelfPayRebateList as rebateList index}}\r\n											{{if index == 0}}\r\n											<div class="col-sm-12 no-padding">\r\n												<input name="travelAgencyRate" value="{{rebateList.travelAgencyRate*100 | toFixed}}" class="col-sm-12" type="text" maxlength="5">\r\n											</div>{{else}}\r\n											<div class="col-sm-12 no-padding" style="padding-top:5px!important;">\r\n												<input name="travelAgencyRate" value="{{rebateList.travelAgencyRate*100 | toFixed}}" class="col-sm-12" type="text" maxlength="5">\r\n											</div>{{/if}}{{/each}}\r\n										</td>\r\n										<td>\r\n											<input name="remark" value="{{itemList.remark}}" type="text" class="col-sm-12" style="min-width:100px;" maxlength="1000">\r\n										</td> \r\n										<td style="width:70px">\r\n											<!--<button class="btn btn-xs btn-danger btn-price-delete">-->\r\n												<!--<i class="ace-icon fa fa-trash-o bigger-120"></i>-->\r\n											<!--</button>-->\r\n											<a class="T-btn-price-delete">删除</a>\r\n										</td>\r\n									</tr>{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary T-btn-submit-selfpay">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});