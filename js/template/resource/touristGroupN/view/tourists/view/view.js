/*TMODJS:{"debug":true,"version":63,"md5":"ae3c92edc02c499d29cdaf4caba477d0"}*/
define(function(require) {
    return require("../../../../../template")("resource/touristGroupN/view/tourists/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, id = $data.id, baseInfo = $data.baseInfo, type = $data.type, receiveTrip = $data.receiveTrip, $each = $utils.$each, joinTrip = ($data.rs, 
            $data.$index, $data.joinTrip), sendTrip = $data.sendTrip, otherInfo = $data.otherInfo, $out = "";
            return $out += '<div class="container-fluid T-container" data-id="', $line = 1, 
            $out += $escape(id), $out += '"> <div class="row"> <div class="col-xs-12"> <h3 class="hct-update-list-title pull-left">小组信息</h3> <div class="pull-right" style="margin-top: -6px;"> <label class="pull-left control-label text-right mar-r-10">收客单号</label> <input type="text" class="pull-left w-150" disabled value="', 
            $line = 7, $out += $escape(baseInfo.orderNumber), $out += '"> </div> <div class="pull-right mar-r-10 mar-t-F6"> <label class="pull-left control-label text-right mar-r-10">是否买保险</label> <input type="checkbox" class="ace pull-left" disabled ', 
            $line = 11, baseInfo.buyInsurance && ($out += "checked", $line = 11), $out += '> <span class="lbl"></span> </div> ', 
            $line = 14, "inner" != type && ($out += ' <div class="pull-right mar-r-15 mar-t-F6"> <button class="btn btn-sm btn-success export-Btn T-statementsBtn" style="height: 20px;line-height: 1px;">结算单</button> </div> ', 
            $line = 18), $out += ' </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th>客户</th> <th>行程</th> <th width="100">接团日期</th> <th width="100">送团日期</th> ', 
            $line = 28, "inner" != type && ($out += "<th>应收</th>", $line = 28), $out += ' <th>客人信息</th> <th>联系电话</th> <th>外联销售</th> <th style="width: 170px;">团散界定</th> </tr> </thead> <tbody class="T-team-info"> <tr> <td>', 
            $line = 37, $out += $escape(baseInfo.fromPartnerAgency), $line = 37, "" != baseInfo.fromPartnerAgencyContactName && ($out += "（", 
            $line = 37, $out += $escape(baseInfo.fromPartnerAgencyContactName), $out += "）", 
            $line = 37), $out += "</td> <td>", $line = 38, $out += $escape(baseInfo.lineProductName), 
            $out += "</td> <td>", $line = 39, $out += $escape($helpers.dateFormat(baseInfo.startTime, "yyyy-MM-dd")), 
            $out += "</td> <td>", $line = 40, $out += $escape($helpers.dateFormat(baseInfo.endTime, "yyyy-MM-dd")), 
            $out += "</td> ", $line = 41, "inner" != type && ($out += '<td><a class="hct-cursor T-action T-receivable F-float F-money" data-json="', 
            $line = 41, $out += $escape(baseInfo.touristGroupFee), $out += '">', $line = 41, 
            $out += $escape(baseInfo.needPayAllMoney), $out += '</a>&nbsp;&nbsp;&nbsp;&nbsp;<a class="hct-cursor T-action T-fee-adjust R-right" data-right="1470007">[费用调整]</a></td>', 
            $line = 41), $out += ' <td><a class="hct-cursor T-action T-guest-info" data-json="', 
            $line = 42, $out += $escape(baseInfo.touristGroupMemberInfo), $out += '">', $line = 42, 
            $out += $escape(baseInfo.name), $out += "</a></td> <td>", $line = 43, $out += $escape(baseInfo.mobileNumber), 
            $out += "</td> <td>", $line = 44, $out += $escape(baseInfo.outOPUserName), $out += "</td> <td>", 
            $line = 45, 0 == baseInfo.customerType ? ($out += "散客拼团", $line = 45) : ($out += "独立成团", 
            $line = 45), $out += "</td> </tr> </tbody> </table> </div> </div> ", $line = 51, 
            0 == baseInfo.customerType && receiveTrip.length > 0 && "inner" != type && ($out += ' <div class="row T-join-group"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point">接团</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th width="135">抵达时间</th> <th>班次</th> <th>车</th> <th>房</th> <th>它</th> <th>接团小计</th> </tr> </thead> <tbody class="T-join-group-list"> ', 
            $line = 69, $each(receiveTrip, function(rs) {
                $out += " <tr> <td>", $line = 71, $out += $escape($helpers.dateFormat(rs.arriveTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 72, $out += $escape(rs.arriveShift), $out += '</td> <td><a class="hct-cursor T-action T-bus F-float F-money" data-json="', 
                $line = 73, $out += $escape(rs.receiveBus), $out += '">', $line = 73, $out += $escape(rs.busNeedPayAllMoney), 
                $out += '</a></td> <td><a class="hct-cursor T-action T-hotel F-float F-money" data-json="', 
                $line = 74, $out += $escape(rs.receiveHotel), $out += '">', $line = 74, $out += $escape(rs.hotelNeedPayAllMoney), 
                $out += '</a></td> <td><a class="hct-cursor T-action T-other F-float F-money" data-json="', 
                $line = 75, $out += $escape(rs.receiveOther), $out += '">', $line = 75, $out += $escape(rs.otherNeedPayAllMoney), 
                $out += '</a></td> <td><span class="F-float F-money">', $line = 76, $out += $escape(1 * (rs.busNeedPayAllMoney || 0) + 1 * (rs.hotelNeedPayAllMoney || 0) + 1 * (rs.otherNeedPayAllMoney || 0)), 
                $out += "</span></td> </tr> ", $line = 78;
            }), $out += " </tbody> </table> </div> </div> ", $line = 83), $out += " ", $line = 84, 
            joinTrip && joinTrip.length > 0 && ($out += ' <div class="row T-offered"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point">', 
            $line = 87, 0 == baseInfo.customerType ? ($out += "参团", $line = 87) : ($out += "转团", 
            $line = 87), $out += '</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th>线路产品</th> <th width="100">出团日期</th> <th width="100">完团日期</th> <th>本段团款</th> <th>线路应付</th> ', 
            $line = 98, 0 == baseInfo.customerType && ($out += ' <th class="T-is-hidden">返程住宿</th> <th class="T-is-hidden" width="95">本段代收团款</th> ', 
            $line = 101), $out += ' <th>状态</th> </tr> </thead> <tbody class="T-part-group-list"> ', 
            $line = 106, $each(joinTrip, function(rs) {
                $out += ' <tr data-id="', $line = 107, $out += $escape(rs.id), $out += '"> <td> <span name="lineProductName" data-json="', 
                $line = 109, $out += $escape(rs.lineJson), $out += '">', $line = 109, $out += $escape(rs.lineProductName), 
                $out += '</span> </td> <td name="tripStartTime">', $line = 111, $out += $escape($helpers.dateFormat(rs.tripStartTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 112, $out += $escape($helpers.dateFormat(rs.tripEndTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 113, $out += $escape(rs.subNeedPayMoney), $out += '</td> <td> <a class="T-action T-line-cope hct-cursor F-float F-money" data-json="', 
                $line = 115, $out += $escape(rs.lineInfo), $out += '">', $line = 115, $out += $escape(rs.lineNeedPayAllMoney), 
                $out += '</a> &nbsp;&nbsp;&nbsp;&nbsp;<a class="hct-cursor T-action T-fee-adjust R-right" data-right="1470007">[费用调整]</a> </td> ', 
                $line = 118, 0 == baseInfo.customerType && ($out += ' <td><a class="T-action T-hotel hct-cursor F-float F-money" data-json="', 
                $line = 119, $out += $escape(rs.hotelInfo), $out += '">', $line = 119, $out += $escape(rs.hotelInputValue), 
                $out += '</a></td> <td><span class="F-float F-money currentNeedPayMoney">', $line = 120, 
                $out += $escape(rs.currentNeedPayMoney), $out += "</span></td> ", $line = 121), 
                $out += " <td>", $line = 122, $out += $escape($helpers.getPartGroupStatusText(rs.status)), 
                $out += "</td> </tr> ", $line = 124;
            }), $out += " </tbody> </table> </div> </div> ", $line = 129), $out += " ", $line = 130, 
            0 == baseInfo.customerType && sendTrip.length > 0 && "inner" != type && ($out += ' <div class="row T-send-group"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point">送团</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th width="135">送离时间</th> <th>班次</th> <th>车</th> <th>房</th> <th>它</th> <th>送团小计</th> </tr> </thead> <tbody class="T-send-group-list"> ', 
            $line = 148, $each(sendTrip, function(rs) {
                $out += ' <tr data-id="', $line = 149, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 150, $out += $escape($helpers.dateFormat(rs.leaveTime, "yyyy-MM-dd")), $out += "</td> <td>", 
                $line = 151, $out += $escape(rs.leaveShift), $out += '</td> <td><a class="hct-cursor T-action T-bus" data-json="', 
                $line = 152, $out += $escape(rs.sendBus), $out += '">', $line = 152, $out += $escape(rs.busNeedPayAllMoney), 
                $out += '</a></td> <td><a class="hct-cursor T-action T-hotel" data-json="', $line = 153, 
                $out += $escape(rs.sendHotel), $out += '">', $line = 153, $out += $escape(rs.hotelNeedPayAllMoney), 
                $out += '</a></td> <td><a class="hct-cursor T-action T-other" data-json="', $line = 154, 
                $out += $escape(rs.sendOther), $out += '">', $line = 154, $out += $escape(rs.otherNeedPayAllMoney), 
                $out += '</a></td> <td><span class="F-float F-money">', $line = 155, $out += $escape(1 * (rs.busNeedPayAllMoney || 0) + 1 * (rs.hotelNeedPayAllMoney || 0) + 1 * (rs.otherNeedPayAllMoney || 0)), 
                $out += "</span></td> </tr> ", $line = 157;
            }), $out += " </tbody> </table> </div> </div> ", $line = 162), $out += ' <div class="row"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-shrink-box">其它信息 <a class="hct-shrink-btn T-other-info-btn"> <i class="ace-icon fa fa-angle-double-up bigger-160"></i> </a> </h3> </div> </div> <div class="row T-other-info-cont"> <div class="col-xs-12 mar-t-10"> <div class="col-xs-3 hct-group-input "> <label>全陪</label> <div class="col-xs-12 control-label"> ', 
            $line = 177, $out += $escape(otherInfo.accompanyGuideName), $out += ' </div> </div> <div class="col-xs-3 hct-group-input"> <label>全陪电话</label> <div class="col-xs-12 control-label"> ', 
            $line = 183, $out += $escape(otherInfo.accompanyGuideMobile), $out += ' </div> </div> <div class="col-xs-3 hct-group-input"> <label>组团单号</label> <div class="col-xs-12 control-label"> ', 
            $line = 189, $out += $escape(otherInfo.otaOrderNumber), $out += ' </div> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-3 hct-group-input"> <label>客源类型</label> <div class="col-xs-12 control-label"> ', 
            $line = 197, 1 == otherInfo.memberType ? ($out += "外宾", $line = 197) : ($out += "内宾", 
            $line = 197), $out += ' </div> </div> <div class="col-xs-3 hct-group-input"> <label>接站牌</label> <div class="col-xs-12 control-label"> ', 
            $line = 203, $out += $escape(otherInfo.welcomeBoard), $out += ' </div> </div> <div class="col-xs-3 hct-group-input"> <label>送客地点</label> <div class="col-xs-12 control-label"> ', 
            $line = 209, $out += $escape(otherInfo.sendPosition), $out += ' </div> </div> </div> <div class="col-xs-12 mar-t-10 hct-group-input"> <label>备注</label> <div class="col-xs-12 control-label"> ', 
            $line = 216, $out += $escape(otherInfo.remark), $out += ' </div> </div> </div> <div class="row"> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid T-container" data-id="{{id}}">\r\n	<div class="row">\r\n		<div class="col-xs-12">\r\n			<h3 class="hct-update-list-title pull-left">小组信息</h3>\r\n			<div class="pull-right" style="margin-top: -6px;">\r\n				<label class="pull-left control-label text-right mar-r-10">收客单号</label>\r\n				<input type="text" class="pull-left w-150" disabled value="{{baseInfo.orderNumber}}">\r\n			</div>\r\n			<div class="pull-right mar-r-10 mar-t-F6">\r\n				<label class="pull-left control-label text-right mar-r-10">是否买保险</label>\r\n				<input type="checkbox" class="ace pull-left" disabled {{if !!baseInfo.buyInsurance}}checked{{/if}}>\r\n				<span class="lbl"></span>\r\n			</div>\r\n			{{if type != "inner"}}\r\n			<div class="pull-right mar-r-15 mar-t-F6">\r\n				<button class="btn btn-sm btn-success export-Btn T-statementsBtn" style="height: 20px;line-height: 1px;">结算单</button>\r\n			</div>\r\n			{{/if}}\r\n		</div>\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover hct-table-update">\r\n				<thead>\r\n					<tr>\r\n						<th>客户</th>\r\n						<th>行程</th>\r\n						<th width="100">接团日期</th>\r\n						<th width="100">送团日期</th>\r\n						{{if type != "inner"}}<th>应收</th>{{/if}}\r\n						<th>客人信息</th>\r\n						<th>联系电话</th>\r\n						<th>外联销售</th>\r\n						<th style="width: 170px;">团散界定</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-team-info">\r\n					<tr>\r\n						<td>{{baseInfo.fromPartnerAgency}}{{if baseInfo.fromPartnerAgencyContactName != ""}}（{{baseInfo.fromPartnerAgencyContactName}}）{{/if}}</td>\r\n						<td>{{baseInfo.lineProductName}}</td>\r\n						<td>{{baseInfo.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n						<td>{{baseInfo.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n						{{if type != "inner"}}<td><a class="hct-cursor T-action T-receivable F-float F-money" data-json="{{baseInfo.touristGroupFee}}">{{baseInfo.needPayAllMoney}}</a>&nbsp;&nbsp;&nbsp;&nbsp;<a class="hct-cursor T-action T-fee-adjust R-right" data-right="1470007">[费用调整]</a></td>{{/if}}\r\n						<td><a class="hct-cursor T-action T-guest-info" data-json="{{baseInfo.touristGroupMemberInfo}}">{{baseInfo.name}}</a></td>\r\n						<td>{{baseInfo.mobileNumber}}</td>\r\n						<td>{{baseInfo.outOPUserName}}</td>\r\n						<td>{{if baseInfo.customerType == 0}}散客拼团{{else}}独立成团{{/if}}</td>\r\n					</tr>\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n	{{if baseInfo.customerType == 0 && receiveTrip.length > 0 && type != "inner"}}\r\n	<div class="row T-join-group">\r\n		<div class="col-xs-12">\r\n			<h3 class="hct-update-list-title hct-title-point">接团</h3>\r\n		</div>\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover hct-table-update">\r\n				<thead>\r\n					<tr>\r\n						<th width="135">抵达时间</th>\r\n						<th>班次</th>\r\n						<th>车</th>\r\n						<th>房</th>\r\n						<th>它</th>\r\n						<th>接团小计</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-join-group-list">\r\n				{{each receiveTrip as rs}}\r\n					<tr>\r\n						<td>{{rs.arriveTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n	                    <td>{{rs.arriveShift}}</td>\r\n	                    <td><a class="hct-cursor T-action T-bus F-float F-money" data-json="{{rs.receiveBus}}">{{rs.busNeedPayAllMoney}}</a></td>\r\n	                    <td><a class="hct-cursor T-action T-hotel F-float F-money" data-json="{{rs.receiveHotel}}">{{rs.hotelNeedPayAllMoney}}</a></td>\r\n	                    <td><a class="hct-cursor T-action T-other F-float F-money" data-json="{{rs.receiveOther}}">{{rs.otherNeedPayAllMoney}}</a></td>\r\n	                    <td><span class="F-float F-money">{{(rs.busNeedPayAllMoney || 0)*1 + (rs.hotelNeedPayAllMoney || 0)*1 + (rs.otherNeedPayAllMoney || 0)*1}}</span></td>\r\n                    </tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n	{{/if}}\r\n	{{if !!joinTrip && joinTrip.length >0}}\r\n	<div class="row T-offered">\r\n		<div class="col-xs-12">\r\n			<h3 class="hct-update-list-title hct-title-point">{{if baseInfo.customerType == 0}}参团{{else}}转团{{/if}}</h3>\r\n		</div>\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover hct-table-update">\r\n				<thead>\r\n					<tr>\r\n						<th>线路产品</th>\r\n						<th width="100">出团日期</th>\r\n						<th width="100">完团日期</th>\r\n						<th>本段团款</th>\r\n						<th>线路应付</th>\r\n						{{if baseInfo.customerType == 0}}\r\n						<th class="T-is-hidden">返程住宿</th>\r\n						<th class="T-is-hidden" width="95">本段代收团款</th>\r\n						{{/if}}\r\n						<th>状态</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-part-group-list">\r\n				{{each joinTrip as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td>\r\n							<span name="lineProductName" data-json="{{rs.lineJson}}">{{rs.lineProductName}}</span>\r\n						</td>\r\n						<td name="tripStartTime">{{rs.tripStartTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n						<td>{{rs.tripEndTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n						<td>{{rs.subNeedPayMoney}}</td>\r\n						<td>\r\n							<a class="T-action T-line-cope hct-cursor F-float F-money" data-json="{{rs.lineInfo}}">{{rs.lineNeedPayAllMoney}}</a>\r\n							&nbsp;&nbsp;&nbsp;&nbsp;<a class="hct-cursor T-action T-fee-adjust R-right" data-right="1470007">[费用调整]</a>\r\n						</td>\r\n						{{if baseInfo.customerType == 0}}\r\n						<td><a class="T-action T-hotel hct-cursor F-float F-money" data-json="{{rs.hotelInfo}}">{{rs.hotelInputValue}}</a></td>\r\n						<td><span class="F-float F-money currentNeedPayMoney">{{rs.currentNeedPayMoney}}</span></td>\r\n						{{/if}}\r\n						<td>{{rs.status | getPartGroupStatusText}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n	{{/if}}\r\n	{{if baseInfo.customerType == 0 && sendTrip.length > 0 && type != "inner"}}\r\n	<div class="row T-send-group">\r\n		<div class="col-xs-12">\r\n			<h3 class="hct-update-list-title hct-title-point">送团</h3>\r\n		</div>\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover hct-table-update">\r\n				<thead>\r\n					<tr>\r\n						<th width="135">送离时间</th>\r\n						<th>班次</th>\r\n						<th>车</th>\r\n						<th>房</th>\r\n						<th>它</th>\r\n						<th>送团小计</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-send-group-list">\r\n				{{each sendTrip as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td>{{rs.leaveTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n	                    <td>{{rs.leaveShift}}</td>\r\n	                    <td><a class="hct-cursor T-action T-bus" data-json="{{rs.sendBus}}">{{rs.busNeedPayAllMoney}}</a></td>\r\n	                    <td><a class="hct-cursor T-action T-hotel" data-json="{{rs.sendHotel}}">{{rs.hotelNeedPayAllMoney}}</a></td>\r\n	                    <td><a class="hct-cursor T-action T-other" data-json="{{rs.sendOther}}">{{rs.otherNeedPayAllMoney}}</a></td>\r\n	                    <td><span class="F-float F-money">{{(rs.busNeedPayAllMoney || 0)*1 + (rs.hotelNeedPayAllMoney || 0)*1 + (rs.otherNeedPayAllMoney || 0)*1}}</span></td>\r\n                    </tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n	{{/if}}\r\n	<div class="row">\r\n		<div class="col-xs-12">\r\n			<h3 class="hct-update-list-title hct-shrink-box">其它信息\r\n				<a class="hct-shrink-btn T-other-info-btn">\r\n					<i class="ace-icon fa fa-angle-double-up bigger-160"></i>\r\n				</a>\r\n			</h3>\r\n		</div>\r\n	</div>\r\n	<div class="row T-other-info-cont">\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-3 hct-group-input ">\r\n				<label>全陪</label>\r\n				<div class="col-xs-12 control-label">\r\n					{{otherInfo.accompanyGuideName}}\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3 hct-group-input">\r\n				<label>全陪电话</label>\r\n				<div class="col-xs-12 control-label">\r\n					{{otherInfo.accompanyGuideMobile}}\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3 hct-group-input">\r\n				<label>组团单号</label>\r\n				<div class="col-xs-12 control-label">\r\n					{{otherInfo.otaOrderNumber}}\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-3 hct-group-input">\r\n				<label>客源类型</label>\r\n				<div class="col-xs-12 control-label">\r\n					{{if otherInfo.memberType == 1}}外宾{{else}}内宾{{/if}}\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3 hct-group-input">\r\n				<label>接站牌</label>\r\n				<div class="col-xs-12 control-label">\r\n					{{otherInfo.welcomeBoard}}\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3 hct-group-input">\r\n				<label>送客地点</label>\r\n				<div class="col-xs-12 control-label">\r\n					{{otherInfo.sendPosition}}\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10 hct-group-input">\r\n			<label>备注</label>\r\n			<div class="col-xs-12 control-label">\r\n				{{otherInfo.remark}}\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class="row">\r\n		<div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n			<button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});