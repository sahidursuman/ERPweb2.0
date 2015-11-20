/*TMODJS:{"debug":true,"version":399,"md5":"7f868c4c177e173d782b8a2fcd9ec958"}*/
define(function(require) {
    return require("../../../template")("resource/subsection/view/operation", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, ptGroup = $data.ptGroup, $each = $utils.$each, subtGroupList = $data.subtGroupList, mark = ($data.subList, 
            $data.$index, $data.mark), $out = "";
            return $out += '<div class="col-xs-12 operationMainForm globalAdd"> <div class="form-group clearfix" style="padding-bottom:15px;"> <input type="hidden" name="touristGroupId" value="', 
            $line = 3, $out += $escape(ptGroup.id), $out += '" /> <input type="hidden" name="touristGroupStartTime" value="', 
            $line = 4, $out += $escape($helpers.dateFormat(ptGroup.startTime, "yyyy-MM-dd")), 
            $out += '" /> <input type="hidden" name="touristGroupDays" value="', $line = 5, 
            $out += $escape(ptGroup.lineProduct.days), $out += '" /> <label class="control-label col-xs-2">线路产品: ', 
            $line = 6, $out += $escape(ptGroup.lineProduct.name), $out += '</label> <label class="control-label col-xs-2">类别：', 
            $line = 7, $out += $escape(ptGroup.lineProduct.type), $out += '</label> <label class="control-label col-xs-2">应用范围：', 
            $line = 8, 0 == ptGroup.lineProduct.customerType ? ($out += "散客", $line = 8) : ($out += "团体", 
            $line = 8), $out += '</label> <label class="control-label col-xs-2">天数：', $line = 9, 
            $out += $escape(ptGroup.lineProduct.days), $out += '天</label> <label class="control-label col-xs-2">出游日期: ', 
            $line = 10, $out += $escape($helpers.dateFormat(ptGroup.startTime, "yyyy-MM-dd")), 
            $out += '</label> <label class="control-label col-xs-2">人数合计: ', $line = 11, $out += $escape(ptGroup.adultCount), 
            $out += "大", $line = 11, $out += $escape(ptGroup.childCount), $out += '小</label> <label class="control-label col-xs-2">来源: ', 
            $line = 12, $out += $escape(ptGroup.partnerAgency.travelAgencyName), $out += '</label> <label class="control-label col-xs-2">联系人: ', 
            $line = 13, $out += $escape(ptGroup.contactMember.name), $out += '</label> <label class="control-label col-xs-2">联系电话: ', 
            $line = 14, $out += $escape(ptGroup.contactMember.mobileNumber), $out += '</label> </div> <div class="form-group"> <button class="btn btn-sm btn-success T-btn-operation-add"> <i class="ace-icon fa fa-plus"></i>新增分段</button> </div> <div class="form-group"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>线路产品</th> <th>针对客源</th> <th>行程天数</th> <th>出游日期</th> <th>本段现收团款</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody class="T-subsectionOperationTbody">', 
            $line = 32, $each(subtGroupList, function(subList) {
                $out += " ", $line = 33, null != subList.id && ($out += ' <tr data-entity-id="', 
                $line = 34, $out += $escape(subList.id), $out += '"> <td> <input type="hidden" name="lineProductId" value="', 
                $line = 36, $out += $escape(subList.lineProduct.id), $out += '" /> <input class="', 
                $line = 37, 1 == subList.status && ($out += "T-chooseLineProduct", $line = 37), 
                $out += ' col-sm-12" name="lineProduct" ', $line = 37, 1 != subList.status && ($out += 'readonly="readonly"', 
                $line = 37), $out += ' type="text" value="', $line = 37, $out += $escape(subList.lineProduct.name), 
                $out += '" /> </td> <td><input type="text" name="customerType" class="col-sm-12" readonly="readonly" value="', 
                $line = 39, 0 == subList.lineProduct.customerType ? ($out += "散客", $line = 39) : ($out += "团体", 
                $line = 39), $out += '" /></td> <td><input type="text" name="days" class="col-sm-10" readonly="readonly" value="', 
                $line = 40, $out += $escape(subList.lineProduct.days), $out += '" /><span class="col-sm-2" style="line-height: 30px">天</span></td> <td><input class="', 
                $line = 41, 1 == subList.status && ($out += "T-startTime", $line = 41), $out += ' datepicker col-sm-12" name="startTime" type="text" ', 
                $line = 41, 1 != subList.status && ($out += 'readonly="readonly"', $line = 41), 
                $out += ' value="', $line = 41, $out += $escape($helpers.dateFormat(subList.startTime, "yyyy-MM-dd")), 
                $out += '" /></td> <td> <input type="radio" name="operateCurrentNeedPayMoney" ', 
                $line = 43, 1 == subList.operateCurrentNeedPayMoney && ($out += 'checked="checked"', 
                $line = 43), $out += " /> </td> <td> ", $line = 46, 0 == subList.status ? ($out += " 已发团 ", 
                $line = 48) : 1 == subList.status ? ($out += " 未分团 ", $line = 50) : 2 == subList.status ? ($out += " 已分团 ", 
                $line = 52) : 3 == subList.status ? ($out += " 已转客 ", $line = 54) : 4 == subList.status ? ($out += " 已取消 ", 
                $line = 56) : 5 == subList.status ? ($out += " 已分段 ", $line = 58) : 6 == subList.status && ($out += " 已内转 ", 
                $line = 60), $out += ' </td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entity-id="', 
                $line = 64, $out += $escape(subList.id), $out += '" class=" ', $line = 64, 1 == subList.status && ($out += "T-btn-operation-delete", 
                $line = 64), $out += ' cursor" ', $line = 64, 1 != subList.status && ($out += 'style="color: #bbb;"', 
                $line = 64), $out += "> 删除 </a> </div> </td> </tr>", $line = 69), $line = 69;
            }), $out += ' </tbody> </table> </div> <div class="form-group" style="text-align: center;"> <button class="btn btn-sm btn-danger T-btn-operation-close otherButton"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-sm btn-success T-btn-operation-save otherButton" data-days=', 
            $line = 75, $out += $escape(ptGroup.lineProduct.days), $out += " data-currentNeedPayMoney=", 
            $line = 75, $out += $escape(ptGroup.currentNeedPayMoney), $out += " ", $line = 75, 
            1 == mark && ($out += 'data-entity-mark="1"', $line = 75), $out += '> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 operationMainForm globalAdd">\r\n	<div class="form-group clearfix" style="padding-bottom:15px;">\r\n		<input type="hidden" name="touristGroupId" value="{{ptGroup.id}}" />\r\n		<input type="hidden" name="touristGroupStartTime" value="{{ptGroup.startTime | dateFormat: \'yyyy-MM-dd\'}}" />\r\n		<input type="hidden" name="touristGroupDays" value="{{ptGroup.lineProduct.days}}" />\r\n		<label class="control-label col-xs-2">线路产品: {{ptGroup.lineProduct.name}}</label>\r\n		<label class="control-label col-xs-2">类别：{{ptGroup.lineProduct.type}}</label>\r\n		<label class="control-label col-xs-2">应用范围：{{if ptGroup.lineProduct.customerType == 0}}散客{{else}}团体{{/if}}</label>\r\n		<label class="control-label col-xs-2">天数：{{ptGroup.lineProduct.days}}天</label>\r\n		<label class="control-label col-xs-2">出游日期: {{ptGroup.startTime | dateFormat: \'yyyy-MM-dd\'}}</label>\r\n		<label class="control-label col-xs-2">人数合计: {{ptGroup.adultCount}}大{{ptGroup.childCount}}小</label> \r\n		<label class="control-label col-xs-2">来源: {{ptGroup.partnerAgency.travelAgencyName}}</label>\r\n		<label class="control-label col-xs-2">联系人: {{ptGroup.contactMember.name}}</label> \r\n		<label class="control-label col-xs-2">联系电话: {{ptGroup.contactMember.mobileNumber}}</label>\r\n	</div>\r\n	<div class="form-group">\r\n		<button class="btn btn-sm btn-success T-btn-operation-add"> <i class="ace-icon fa fa-plus"></i>新增分段</button>\r\n	</div>\r\n	<div class="form-group">\r\n		<table class="table table-striped table-bordered table-hover">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th>线路产品</th>\r\n					<th>针对客源</th>\r\n					<th>行程天数</th>\r\n					<th>出游日期</th>\r\n					<th>本段现收团款</th>\r\n					<th>状态</th>\r\n					<th>操作</th>\r\n				</tr>  \r\n			</thead>\r\n			<tbody class="T-subsectionOperationTbody">{{each subtGroupList as subList}}\r\n			{{if subList.id != null}}\r\n				<tr data-entity-id="{{subList.id}}">\r\n					<td>\r\n						<input type="hidden" name="lineProductId" value="{{subList.lineProduct.id}}" />\r\n						<input class="{{if subList.status == 1}}T-chooseLineProduct{{/if}} col-sm-12" name="lineProduct" {{if subList.status != 1}}readonly="readonly"{{/if}} type="text" value="{{subList.lineProduct.name}}" />\r\n					</td>\r\n					<td><input type="text" name="customerType" class="col-sm-12" readonly="readonly" value="{{if subList.lineProduct.customerType == 0}}散客{{else}}团体{{/if}}" /></td>\r\n					<td><input type="text" name="days" class="col-sm-10" readonly="readonly" value="{{subList.lineProduct.days}}" /><span class="col-sm-2" style="line-height: 30px">天</span></td>\r\n					<td><input class="{{if subList.status == 1}}T-startTime{{/if}} datepicker col-sm-12" name="startTime" type="text" {{if subList.status != 1}}readonly="readonly"{{/if}} value="{{subList.startTime | dateFormat: \'yyyy-MM-dd\'}}" /></td>\r\n					<td>\r\n						<input type="radio" name="operateCurrentNeedPayMoney" {{if subList.operateCurrentNeedPayMoney == 1}}checked="checked"{{/if}} />\r\n					</td>\r\n					<td>\r\n					{{if subList.status == 0}}\r\n						已发团\r\n					{{else if subList.status == 1}}\r\n						未分团\r\n					{{else if subList.status == 2}}\r\n						已分团\r\n					{{else if subList.status == 3}}\r\n						已转客\r\n					{{else if subList.status == 4}}\r\n						已取消\r\n					{{else if subList.status == 5}}\r\n						已分段\r\n					{{else if subList.status == 6}}\r\n						已内转\r\n					{{/if}}\r\n					</td>\r\n					<td>\r\n						<div class="hidden-sm hidden-xs btn-group">\r\n						<a data-entity-id="{{subList.id}}" class=" {{if subList.status == 1}}T-btn-operation-delete{{/if}} cursor" {{if subList.status != 1}}style="color: #bbb;"{{/if}}>\r\n							删除\r\n						</a>\r\n					</div>\r\n					</td>\r\n				</tr>{{/if}}{{/each}}\r\n			</tbody>\r\n		</table>\r\n	</div>\r\n	<div class="form-group" style="text-align: center;">\r\n		<button class="btn btn-sm btn-danger T-btn-operation-close otherButton"> <i class="ace-icon fa fa-times"></i> 取消 </button> \r\n		<button class="btn btn-sm btn-success T-btn-operation-save otherButton" data-days={{ptGroup.lineProduct.days}} data-currentNeedPayMoney={{ptGroup.currentNeedPayMoney}} {{if mark == 1}}data-entity-mark="1"{{/if}}> <i class="ace-icon fa fa-check"></i> 保存 </button> \r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});