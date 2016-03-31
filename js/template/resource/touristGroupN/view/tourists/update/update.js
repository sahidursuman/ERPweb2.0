/*TMODJS:{"debug":true,"version":151,"md5":"f840b2c1235484883373c781522a5880"}*/
define(function(require) {
    return require("/js/template/template")("resource/touristGroupN/view/tourists/update/update", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, id = $data.id, baseInfo = $data.baseInfo, $each = $utils.$each, receiveTrip = $data.receiveTrip, joinTrip = ($data.rs, 
            $data.$index, $data.joinTrip), sendTrip = $data.sendTrip, otherInfo = $data.otherInfo, $out = "";
            return $out += '<div class="container-fluid T-container" data-id="', $line = 1, 
            $out += $escape(id), $out += '" data-type="', $line = 1, 1 == baseInfo.customerType ? ($out += "group", 
            $line = 1) : ($out += "single", $line = 1), $out += '"> <div class="row"> <div class="col-xs-12"> <h3 class="hct-update-list-title pull-left">小组信息</h3> <div class="pull-right" style="margin-top: -6px;"> <label class="pull-left control-label text-right mar-r-10">收客单号</label> <input type="text" class="pull-left w-150" name="orderNumber" value="', 
            $line = 7, $out += $escape(baseInfo.orderNumber), $out += '"> </div> <div class="pull-right mar-r-10" style="margin-top: -6px;"> <label class="pull-left control-label text-right mar-r-10">是否买保险</label> <input type="checkbox" class="ace pull-left" name="buyInsurance" ', 
            $line = 11, baseInfo.buyInsurance && ($out += "checked", $line = 11), $out += '> <span class="lbl"></span> </div> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th>客户</th> <th>行程</th> <th width="100">接团日期</th> <th width="100">送团日期</th> <th>应收</th> <th>客人信息</th> <th>联系电话</th> <th>外联销售</th> <th style="width: 170px;">团散界定</th> </tr> </thead> <tbody class="T-team-info"> <tr> <td><input type="text" class="col-xs-12 hct-cursor T-action T-client" readonly name="fromPartnerAgency" value="', 
            $line = 32, $out += $escape(baseInfo.fromPartnerAgency), $out += "（", $line = 32, 
            $out += $escape(baseInfo.fromPartnerAgencyContactName), $out += '）" data-id="', 
            $line = 32, $out += $escape(baseInfo.fromPartnerAgencyId), $out += '" data-contact-id="', 
            $line = 32, $out += $escape(baseInfo.fromPartnerAgencyContactId), $out += '" placeholder="点击选择客户"></td> <td> <div class="hct-input-group col-xs-12"> <input type="text" class="col-xs-12" name="lineProductName" value="', 
            $line = 35, $out += $escape(baseInfo.lineProductName), $out += '" data-id="', $line = 35, 
            $out += $escape(baseInfo.lineProductId), $out += '"> <span class="hct-group-add hct-cursor T-action T-search-trip">[搜索]</span> </div> </td> <td><input type="text" class="col-xs-12 datepicker" name="startTime" value="', 
            $line = 39, $out += $escape(baseInfo.startTime), $out += '"></td> <td><input type="text" class="col-xs-12 datepicker" name="endTime" value="', 
            $line = 40, $out += $escape(baseInfo.endTime), $out += '"></td> <td><input type="text" class="col-xs-12 hct-cursor T-action T-receivable F-float" readonly name="needPayAllMoney" value="', 
            $line = 41, $out += $escape(baseInfo.needPayAllMoney), $out += '" data-json="', 
            $line = 41, $out += $escape(baseInfo.touristGroupFee), $out += '" placeholder="点击填写应收团款"></td> <td><input type="text" class="col-xs-12 hct-cursor T-action T-guest-info" readonly name="guestDetails" value="', 
            $line = 42, $out += $escape(baseInfo.name), $out += '" data-json="', $line = 42, 
            $out += $escape(baseInfo.touristGroupMemberInfo), $out += '" placeholder="点击填写客人信息"></td> <td><input type="text" class="col-xs-12" name="mobileNumber" readonly value="', 
            $line = 43, $out += $escape(baseInfo.mobileNumber), $out += '"></td> <td><input type="text" class="col-xs-12 T-chooseUser" name="outOPUserName" value="', 
            $line = 44, $out += $escape(baseInfo.outOPUserName), $out += '" data-id="', $line = 44, 
            $out += $escape(baseInfo.outOPUserId), $out += '"></td> <td> <label class="radio-inline"> <input type="radio" class="ace T-single-group" name="singlePlanDefine" ', 
            $line = 47, 0 == baseInfo.customerType && ($out += "checked", $line = 47), $out += '> <span class="lbl">散客拼团</span> </label> <label class="radio-inline"> <input type="radio" class="ace T-indep-group" name="singlePlanDefine" ', 
            $line = 51, 1 == baseInfo.customerType && ($out += "checked", $line = 51), $out += '> <span class="lbl">独立成团</span> </label> </td> </tr> </tbody> </table> </div> </div> <div class="row"> <div class="col-xs-12 mar-b-20"> <button class="btn btn-app btn-xs hct-bg-1FADE0 T-add-join-group', 
            $line = 62, 0 != baseInfo.customerType && ($out += " hidden", $line = 62), $out += '"> <i class="ace-icon fa fa-plus bigger-160"></i> 接团 </button> <button class="btn btn-app btn-xs', 
            $line = 63, "1" == baseInfo.joinFlag ? ($out += " hct-bg-BBB", $line = 63) : ($out += " hct-bg-1FADE0 T-add-part-group", 
            $line = 63), $out += '"> <i class="ace-icon fa fa-plus bigger-160"></i> ', $line = 63, 
            1 == baseInfo.customerType ? ($out += "转团", $line = 63) : ($out += "参团", $line = 63), 
            $out += ' </button> <button class="btn btn-app btn-xs hct-bg-1FADE0 T-add-send-group', 
            $line = 64, 0 != baseInfo.customerType && ($out += " hidden", $line = 64), $out += '"> <i class="ace-icon fa fa-plus bigger-160"></i> 送团 </button> </div> </div> <div class="row T-join-group', 
            $line = 68, 0 != baseInfo.customerType && ($out += " hidden", $line = 68), $out += '"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point">接团</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th width="135">抵达时间</th> <th>班次</th> <th>车</th> <th>房</th> <th>它</th> <th>接团小计</th> <th>操作</th> </tr> </thead> <tbody class="T-join-group-list"> ', 
            $line = 86, $each(receiveTrip, function(rs) {
                $out += ' <tr data-id="', $line = 87, $out += $escape(rs.id), $out += '"> <td><input type="text" class="col-xs-12 datetimepicker" name="arriveTime" value="', 
                $line = 88, $out += $escape(rs.arriveTime), $out += '"></td> <td><input type="text" class="col-xs-12" name="arriveShift" value="', 
                $line = 89, $out += $escape(rs.arriveShift), $out += '"></td> <td><input type="text" class="w-100 hct-cursor T-action T-bus F-float F-money" readonly name="receiveBus" value="', 
                $line = 90, $out += $escape(rs.busNeedPayAllMoney), $out += '" data-json="', $line = 90, 
                $out += $escape(rs.receiveBus), $out += '" placeholder="点击填写车"></td> <td><input type="text" class="w-100 hct-cursor T-action T-hotel F-float F-money" readonly name="receiveHotel" value="', 
                $line = 91, $out += $escape(rs.hotelNeedPayAllMoney), $out += '" data-json="', $line = 91, 
                $out += $escape(rs.receiveHotel), $out += '" placeholder="点击填写房"></td> <td><input type="text" class="w-100 hct-cursor T-action T-other F-float F-money" readonly name="receiveOther" value="', 
                $line = 92, $out += $escape(rs.otherNeedPayAllMoney), $out += '" data-json="', $line = 92, 
                $out += $escape(rs.receiveOther), $out += '" placeholder="点击填写它"></td> <td><input type="text" class="w-100 F-float F-money" readonly name="totalMoney" value="', 
                $line = 93, $out += $escape(1 * (rs.busNeedPayAllMoney || 0) + 1 * (rs.hotelNeedPayAllMoney || 0) + 1 * (rs.otherNeedPayAllMoney || 0)), 
                $out += '"></td> <td><a class="cursor T-action T-delete">删除</a></td> </tr> ', $line = 96;
            }), $out += ' </tbody> </table> </div> </div> <div class="row T-offered"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point T-part-group-text">', 
            $line = 104, 1 == baseInfo.customerType ? ($out += "转团", $line = 104) : ($out += "参团", 
            $line = 104), $out += '</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th>线路产品</th> <th width="100">出团日期</th> <th width="100">完团日期</th> <th>线路应付</th> <th class="T-is-hidden ', 
            $line = 114, 0 != baseInfo.customerType && ($out += "hidden", $line = 114), $out += '">返程住宿</th> <th class="T-is-hidden ', 
            $line = 115, 0 != baseInfo.customerType && ($out += "hidden", $line = 115), $out += '">参团小计</th> <th class="T-is-hidden ', 
            $line = 116, 0 != baseInfo.customerType && ($out += "hidden", $line = 116), $out += '" width="95">本段现收团款</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody class="T-part-group-list"> ', 
            $line = 122, $each(joinTrip, function(rs) {
                $out += ' <tr data-id="', $line = 123, $out += $escape(rs.id), $out += '"> <td> <div class="hct-input-group col-xs-12', 
                $line = 125, (0 == rs.status || 1 == rs.status) && ($out += " T-action T-search-line", 
                $line = 125), $out += '"> <input type="text" class="col-xs-12 hct-cursor" readonly name="lineProductName" value="', 
                $line = 126, $out += $escape(rs.lineProductName), $out += '" data-id="', $line = 126, 
                $out += $escape(rs.lineProductId), $out += '" data-json="', $line = 126, $out += $escape(rs.lineJson), 
                $out += '" placeholder="点击选择线路产品"> ', $line = 127, (0 == rs.status || 1 == rs.status) && ($out += '<span class="hct-group-add cursor">[搜索]</span>', 
                $line = 127), $out += ' </div> </td> <td><input type="text" class="col-xs-12 datepicker" name="tripStartTime" value="', 
                $line = 130, $out += $escape(rs.tripStartTime), $out += '"', $line = 130, rs.status > 1 && ($out += " disabled", 
                $line = 130), $out += '></td> <td><input type="text" class="col-xs-12 datepicker" name="tripEndTime" value="', 
                $line = 131, $out += $escape(rs.tripEndTime), $out += '"', $line = 131, rs.status > 1 && ($out += " disabled", 
                $line = 131), $out += '></td> <td><input type="text" class="w-110', $line = 132, 
                (0 == rs.status || 1 == rs.status) && ($out += " T-action T-line-cope hct-cursor", 
                $line = 132), $out += '" readonly name="lineNeedPayMoney" value="', $line = 132, 
                $out += $escape(rs.lineNeedPayAllMoney), $out += '" data-json="', $line = 132, $out += $escape(rs.lineInfo), 
                $out += '" placeholder="点击填写线路应付"></td> <td class="T-is-hidden ', $line = 133, 0 != baseInfo.customerType && ($out += "hidden", 
                $line = 133), $out += '"><input type="text" class="w-110', $line = 133, (0 == rs.status || 1 == rs.status) && ($out += " T-action T-hotel hct-cursor", 
                $line = 133), $out += '" readonly name="hotelNeedPayMoney" value="', $line = 133, 
                $out += $escape(rs.hotelNeedPayAllMoney), $out += '" data-json="', $line = 133, 
                $out += $escape(rs.hotelInfo), $out += '" placeholder="点击填写返程住宿"></td> <td class="T-is-hidden ', 
                $line = 134, 0 != baseInfo.customerType && ($out += "hidden", $line = 134), $out += '"><input type="text" class="w-100 F-float F-money" readonly name="totalMoney" value="', 
                $line = 134, $out += $escape(1 * (rs.hotelNeedPayAllMoney || 0) + 1 * (rs.lineNeedPayAllMoney || 0)), 
                $out += '"></td> <td class="T-is-hidden ', $line = 135, 0 != baseInfo.customerType && ($out += "hidden", 
                $line = 135), $out += '"><input type="text" class="w-100 F-float F-money" name="operateCurrentNeedPayMoney" value="', 
                $line = 135, $out += $escape(rs.operateCurrentNeedPayMoney), $out += '"', $line = 135, 
                rs.status > 1 && ($out += " disabled", $line = 135), $out += '></td> <td class="T-status" data-status="', 
                $line = 136, $out += $escape(rs.status), $out += '">', $line = 136, $out += $escape($helpers.getPartGroupStatusText(rs.status)), 
                $out += '</td> <td> <a class="cursor T-inner-turn', $line = 138, "{}" != rs.outTransferInfo || rs.status > 1 ? ($out += " hct-color-BBB", 
                $line = 138) : ($out += " T-action", $line = 138), $out += '" data-json="', $line = 138, 
                $out += $escape(rs.innerTransferInfo), $out += '">内转</a> | <a class="cursor T-outer-turn', 
                $line = 139, "{}" != rs.innerTransferInfo || rs.status > 1 ? ($out += " hct-color-BBB", 
                $line = 139) : ($out += " T-action", $line = 139), $out += '" data-json="', $line = 139, 
                $out += $escape(rs.outTransferInfo), $out += '">外转</a> | <a class="cursor', $line = 140, 
                1 == rs.status ? ($out += " T-action T-delete", $line = 140) : ($out += " hct-color-BBB", 
                $line = 140), $out += '">删除</a> </td> </tr> ', $line = 143;
            }), $out += ' </tbody> </table> </div> </div> <div class="row T-send-group', $line = 149, 
            0 != baseInfo.customerType && ($out += " hidden", $line = 149), $out += '"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point">送团</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th width="135">送离时间</th> <th>班次</th> <th>车</th> <th>房</th> <th>它</th> <th>送团小计</th> <th>操作</th> </tr> </thead> <tbody class="T-send-group-list"> ', 
            $line = 167, $each(sendTrip, function(rs) {
                $out += ' <tr data-id="', $line = 168, $out += $escape(rs.id), $out += '"> <td><input type="text" class="col-xs-12 datetimepicker" name="leaveTime" value="', 
                $line = 169, $out += $escape(rs.leaveTime), $out += '"></td> <td><input type="text" class="col-xs-12" name="leaveShift" value="', 
                $line = 170, $out += $escape(rs.leaveShift), $out += '"></td> <td><input type="text" class="w-100 hct-cursor T-action T-bus" readonly name="receiveBus" value="', 
                $line = 171, $out += $escape(rs.busNeedPayAllMoney), $out += '" data-json="', $line = 171, 
                $out += $escape(rs.sendBus), $out += '" placeholder="点击填写车"></td> <td><input type="text" class="w-100 hct-cursor T-action T-hotel" readonly name="receiveHotel" value="', 
                $line = 172, $out += $escape(rs.hotelNeedPayAllMoney), $out += '" data-json="', 
                $line = 172, $out += $escape(rs.sendHotel), $out += '" placeholder="点击填写房"></td> <td><input type="text" class="w-100 hct-cursor T-action T-other" readonly name="receiveOther" value="', 
                $line = 173, $out += $escape(rs.otherNeedPayAllMoney), $out += '" data-json="', 
                $line = 173, $out += $escape(rs.sendOther), $out += '" placeholder="点击填写它"></td> <td><input type="text" class="w-100 F-float F-money" readonly name="totalMoney" value="', 
                $line = 174, $out += $escape(1 * (rs.busNeedPayAllMoney || 0) + 1 * (rs.hotelNeedPayAllMoney || 0) + 1 * (rs.otherNeedPayAllMoney || 0)), 
                $out += '"></td> <td><a class="cursor T-action T-delete">删除</a></td> </tr> ', $line = 177;
            }), $out += ' </tbody> </table> </div> </div> <div class="row"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-shrink-box">其它信息 <a class="hct-shrink-btn T-other-info-btn"> <i class="ace-icon fa fa-angle-double-down bigger-160"></i> </a> </h3> </div> </div> <div class="row hidden T-other-info-cont"> <div class="col-xs-12 mar-t-10"> <div class="col-xs-3 hct-group-input "> <label>全陪</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="accompanyGuideName" value="', 
            $line = 196, $out += $escape(otherInfo.accompanyGuideName), $out += '"> </div> </div> <div class="col-xs-3 hct-group-input"> <label>全陪电话</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="accompanyGuideMobile" value="', 
            $line = 202, $out += $escape(otherInfo.accompanyGuideMobile), $out += '"> </div> </div> <div class="col-xs-3 hct-group-input"> <label>组团单号</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="otaOrderNumber" value="', 
            $line = 208, $out += $escape(otherInfo.otaOrderNumber), $out += '"> </div> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-3 hct-group-input"> <label>客源类型</label> <div class="col-xs-12"> <select name="memberType" class="col-xs-12"> <option ', 
            $line = 217, 1 != otherInfo.memberType && ($out += "selected", $line = 217), $out += ' value="0">内宾</option> <option value="1" ', 
            $line = 218, 1 == otherInfo.memberType && ($out += "selected", $line = 218), $out += '>外宾</option> </select> </div> </div> <div class="col-xs-3 hct-group-input"> <label>接站牌</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="welcomeBoard" value="', 
            $line = 225, $out += $escape(otherInfo.welcomeBoard), $out += '"> </div> </div> <div class="col-xs-3 hct-group-input"> <label>送客地点</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="sendPosition" value="', 
            $line = 231, $out += $escape(otherInfo.sendPosition), $out += '"> </div> </div> </div> <div class="col-xs-12 mar-t-10 hct-group-input"> <label>备注</label> <div class="col-xs-12"> <textarea class="col-xs-12" name="remark">', 
            $line = 238, $out += $escape(otherInfo.remark), $out += '</textarea> </div> </div> </div> <div class="row"> <div class="col-xs-12 mar-t-20 mar-b-10"> <button class="btn btn-block btn-primary T-btn-save"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </div> </div> </div> <div style="position: fixed; right: 20px; bottom: 10px;min-width: 50px;"> <a class="btn btn-warning T-refresh" title="重新加载数据" style="border-radius: 5px;"> <i class="ace-icon fa fa-refresh bigger-160" style="margin-right: 0;"></i> </a> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid T-container" data-id="{{id}}" data-type="{{if baseInfo.customerType == 1}}group{{else}}single{{/if}}">\r\n	<div class="row">\r\n		<div class="col-xs-12">\r\n			<h3 class="hct-update-list-title pull-left">小组信息</h3>\r\n			<div class="pull-right" style="margin-top: -6px;">\r\n				<label class="pull-left control-label text-right mar-r-10">收客单号</label>\r\n				<input type="text" class="pull-left w-150" name="orderNumber" value="{{baseInfo.orderNumber}}">\r\n			</div>\r\n			<div class="pull-right mar-r-10" style="margin-top: -6px;">\r\n				<label class="pull-left control-label text-right mar-r-10">是否买保险</label>\r\n				<input type="checkbox" class="ace pull-left" name="buyInsurance" {{if !!baseInfo.buyInsurance}}checked{{/if}}>\r\n				<span class="lbl"></span>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover hct-table-update">\r\n				<thead>\r\n					<tr>\r\n						<th>客户</th>\r\n						<th>行程</th>\r\n						<th width="100">接团日期</th>\r\n						<th width="100">送团日期</th>\r\n						<th>应收</th>\r\n						<th>客人信息</th>\r\n						<th>联系电话</th>\r\n						<th>外联销售</th>\r\n						<th style="width: 170px;">团散界定</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-team-info">\r\n					<tr>\r\n						<td><input type="text" class="col-xs-12 hct-cursor T-action T-client" readonly name="fromPartnerAgency" value="{{baseInfo.fromPartnerAgency}}（{{baseInfo.fromPartnerAgencyContactName}}）" data-id="{{baseInfo.fromPartnerAgencyId}}" data-contact-id="{{baseInfo.fromPartnerAgencyContactId}}" placeholder="点击选择客户"></td>\r\n						<td>\r\n							<div class="hct-input-group col-xs-12">\r\n								<input type="text" class="col-xs-12" name="lineProductName" value="{{baseInfo.lineProductName}}" data-id="{{baseInfo.lineProductId}}">\r\n								<span class="hct-group-add hct-cursor T-action T-search-trip">[搜索]</span>\r\n							</div>\r\n						</td>\r\n						<td><input type="text" class="col-xs-12 datepicker" name="startTime" value="{{baseInfo.startTime}}"></td>\r\n						<td><input type="text" class="col-xs-12 datepicker" name="endTime" value="{{baseInfo.endTime}}"></td>\r\n						<td><input type="text" class="col-xs-12 hct-cursor T-action T-receivable F-float" readonly name="needPayAllMoney" value="{{baseInfo.needPayAllMoney}}" data-json="{{baseInfo.touristGroupFee}}" placeholder="点击填写应收团款"></td>\r\n						<td><input type="text" class="col-xs-12 hct-cursor T-action T-guest-info" readonly name="guestDetails" value="{{baseInfo.name}}" data-json="{{baseInfo.touristGroupMemberInfo}}" placeholder="点击填写客人信息"></td>\r\n						<td><input type="text" class="col-xs-12" name="mobileNumber" readonly value="{{baseInfo.mobileNumber}}"></td>\r\n						<td><input type="text" class="col-xs-12 T-chooseUser" name="outOPUserName" value="{{baseInfo.outOPUserName}}" data-id="{{baseInfo.outOPUserId}}"></td>\r\n						<td>\r\n							<label class="radio-inline">\r\n								<input type="radio" class="ace T-single-group" name="singlePlanDefine" {{if baseInfo.customerType == 0}}checked{{/if}}>\r\n								<span class="lbl">散客拼团</span>\r\n							</label>\r\n							<label class="radio-inline">\r\n								<input type="radio" class="ace T-indep-group" name="singlePlanDefine" {{if baseInfo.customerType == 1}}checked{{/if}}>\r\n								<span class="lbl">独立成团</span>\r\n							</label>\r\n						</td>\r\n					</tr>\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n	<div class="row">\r\n		<div class="col-xs-12 mar-b-20">\r\n			<button class="btn btn-app btn-xs hct-bg-1FADE0 T-add-join-group{{if baseInfo.customerType != 0}} hidden{{/if}}"> <i class="ace-icon fa fa-plus bigger-160"></i> 接团 </button>\r\n			<button class="btn btn-app btn-xs{{if baseInfo.joinFlag == "1"}} hct-bg-BBB{{else}} hct-bg-1FADE0 T-add-part-group{{/if}}"> <i class="ace-icon fa fa-plus bigger-160"></i> {{if baseInfo.customerType == 1}}转团{{else}}参团{{/if}} </button>\r\n			<button class="btn btn-app btn-xs hct-bg-1FADE0 T-add-send-group{{if baseInfo.customerType != 0}} hidden{{/if}}"> <i class="ace-icon fa fa-plus bigger-160"></i> 送团 </button>\r\n		</div>\r\n	</div>\r\n	\r\n	<div class="row T-join-group{{if baseInfo.customerType != 0}} hidden{{/if}}">\r\n		<div class="col-xs-12">\r\n			<h3 class="hct-update-list-title hct-title-point">接团</h3>\r\n		</div>\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover hct-table-update">\r\n				<thead>\r\n					<tr>\r\n						<th width="135">抵达时间</th>\r\n						<th>班次</th>\r\n						<th>车</th>\r\n						<th>房</th>\r\n						<th>它</th>\r\n						<th>接团小计</th>\r\n						<th>操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-join-group-list">\r\n				{{each receiveTrip as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td><input type="text" class="col-xs-12 datetimepicker" name="arriveTime" value="{{rs.arriveTime}}"></td>\r\n	                    <td><input type="text" class="col-xs-12" name="arriveShift" value="{{rs.arriveShift}}"></td>\r\n	                    <td><input type="text" class="w-100 hct-cursor T-action T-bus F-float F-money" readonly name="receiveBus" value="{{rs.busNeedPayAllMoney}}" data-json="{{rs.receiveBus}}" placeholder="点击填写车"></td>\r\n	                    <td><input type="text" class="w-100 hct-cursor T-action T-hotel F-float F-money" readonly name="receiveHotel" value="{{rs.hotelNeedPayAllMoney}}" data-json="{{rs.receiveHotel}}" placeholder="点击填写房"></td>\r\n	                    <td><input type="text" class="w-100 hct-cursor T-action T-other F-float F-money" readonly name="receiveOther" value="{{rs.otherNeedPayAllMoney}}" data-json="{{rs.receiveOther}}" placeholder="点击填写它"></td>\r\n	                    <td><input type="text" class="w-100 F-float F-money" readonly name="totalMoney" value="{{(rs.busNeedPayAllMoney || 0)*1 + (rs.hotelNeedPayAllMoney || 0)*1 + (rs.otherNeedPayAllMoney || 0)*1}}"></td>\r\n	                    <td><a class="cursor T-action T-delete">删除</a></td>\r\n                    </tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n	\r\n	<div class="row T-offered">\r\n		<div class="col-xs-12">\r\n			<h3 class="hct-update-list-title hct-title-point T-part-group-text">{{if baseInfo.customerType == 1}}转团{{else}}参团{{/if}}</h3>\r\n		</div>\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover hct-table-update">\r\n				<thead>\r\n					<tr>\r\n						<th>线路产品</th>\r\n						<th width="100">出团日期</th>\r\n						<th width="100">完团日期</th>\r\n						<th>线路应付</th>\r\n						<th class="T-is-hidden {{if baseInfo.customerType != 0}}hidden{{/if}}">返程住宿</th>\r\n						<th class="T-is-hidden {{if baseInfo.customerType != 0}}hidden{{/if}}">参团小计</th>\r\n						<th class="T-is-hidden {{if baseInfo.customerType != 0}}hidden{{/if}}" width="95">本段现收团款</th>\r\n						<th>状态</th>\r\n						<th>操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-part-group-list">\r\n				{{each joinTrip as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td>\r\n							<div class="hct-input-group col-xs-12{{if rs.status == 0 || rs.status == 1}} T-action T-search-line{{/if}}">\r\n								<input type="text" class="col-xs-12 hct-cursor" readonly name="lineProductName" value="{{rs.lineProductName}}" data-id="{{rs.lineProductId}}" data-json="{{rs.lineJson}}" placeholder="点击选择线路产品">\r\n								{{if rs.status == 0 || rs.status == 1}}<span class="hct-group-add cursor">[搜索]</span>{{/if}}\r\n							</div>\r\n						</td>\r\n						<td><input type="text" class="col-xs-12 datepicker" name="tripStartTime" value="{{rs.tripStartTime}}"{{if rs.status > 1}} disabled{{/if}}></td>\r\n						<td><input type="text" class="col-xs-12 datepicker" name="tripEndTime" value="{{rs.tripEndTime}}"{{if rs.status > 1}} disabled{{/if}}></td>\r\n						<td><input type="text" class="w-110{{if rs.status == 0 || rs.status == 1}} T-action T-line-cope hct-cursor{{/if}}" readonly name="lineNeedPayMoney" value="{{rs.lineNeedPayAllMoney}}" data-json="{{rs.lineInfo}}" placeholder="点击填写线路应付"></td>\r\n						<td class="T-is-hidden {{if baseInfo.customerType != 0}}hidden{{/if}}"><input type="text" class="w-110{{if rs.status == 0 || rs.status == 1}} T-action T-hotel hct-cursor{{/if}}" readonly name="hotelNeedPayMoney" value="{{rs.hotelNeedPayAllMoney}}" data-json="{{rs.hotelInfo}}" placeholder="点击填写返程住宿"></td>\r\n						<td class="T-is-hidden {{if baseInfo.customerType != 0}}hidden{{/if}}"><input type="text" class="w-100 F-float F-money" readonly name="totalMoney" value="{{(rs.hotelNeedPayAllMoney || 0)*1 + (rs.lineNeedPayAllMoney || 0)*1}}"></td>\r\n						<td class="T-is-hidden {{if baseInfo.customerType != 0}}hidden{{/if}}"><input type="text" class="w-100 F-float F-money" name="operateCurrentNeedPayMoney" value="{{rs.operateCurrentNeedPayMoney}}"{{if rs.status > 1}} disabled{{/if}}></td>\r\n						<td class="T-status" data-status="{{rs.status}}">{{rs.status | getPartGroupStatusText}}</td>\r\n						<td>\r\n							<a class="cursor T-inner-turn{{if rs.outTransferInfo != "{}" || rs.status > 1}} hct-color-BBB{{else}} T-action{{/if}}" data-json="{{rs.innerTransferInfo}}">内转</a> | \r\n							<a class="cursor T-outer-turn{{if rs.innerTransferInfo != "{}" || rs.status > 1}} hct-color-BBB{{else}} T-action{{/if}}" data-json="{{rs.outTransferInfo}}">外转</a> | \r\n							<a class="cursor{{if rs.status == 1}} T-action T-delete{{else}} hct-color-BBB{{/if}}">删除</a>\r\n						</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n	\r\n	<div class="row T-send-group{{if baseInfo.customerType != 0}} hidden{{/if}}">\r\n		<div class="col-xs-12">\r\n			<h3 class="hct-update-list-title hct-title-point">送团</h3>\r\n		</div>\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover hct-table-update">\r\n				<thead>\r\n					<tr>\r\n						<th width="135">送离时间</th>\r\n						<th>班次</th>\r\n						<th>车</th>\r\n						<th>房</th>\r\n						<th>它</th>\r\n						<th>送团小计</th>\r\n						<th>操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-send-group-list">\r\n				{{each sendTrip as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td><input type="text" class="col-xs-12 datetimepicker" name="leaveTime" value="{{rs.leaveTime}}"></td>\r\n	                    <td><input type="text" class="col-xs-12" name="leaveShift" value="{{rs.leaveShift}}"></td>\r\n	                    <td><input type="text" class="w-100 hct-cursor T-action T-bus" readonly name="receiveBus" value="{{rs.busNeedPayAllMoney}}" data-json="{{rs.sendBus}}" placeholder="点击填写车"></td>\r\n	                    <td><input type="text" class="w-100 hct-cursor T-action T-hotel" readonly name="receiveHotel" value="{{rs.hotelNeedPayAllMoney}}" data-json="{{rs.sendHotel}}" placeholder="点击填写房"></td>\r\n	                    <td><input type="text" class="w-100 hct-cursor T-action T-other" readonly name="receiveOther" value="{{rs.otherNeedPayAllMoney}}" data-json="{{rs.sendOther}}" placeholder="点击填写它"></td>\r\n	                    <td><input type="text" class="w-100 F-float F-money" readonly name="totalMoney" value="{{(rs.busNeedPayAllMoney || 0)*1 + (rs.hotelNeedPayAllMoney || 0)*1 + (rs.otherNeedPayAllMoney || 0)*1}}"></td>\r\n	                    <td><a class="cursor T-action T-delete">删除</a></td>\r\n                    </tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n	<div class="row">\r\n		<div class="col-xs-12">\r\n			<h3 class="hct-update-list-title hct-shrink-box">其它信息\r\n				<a class="hct-shrink-btn T-other-info-btn">\r\n					<i class="ace-icon fa fa-angle-double-down bigger-160"></i>\r\n				</a>\r\n			</h3>\r\n		</div>\r\n	</div>\r\n	<div class="row hidden T-other-info-cont">\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-3 hct-group-input ">\r\n				<label>全陪</label>\r\n				<div class="col-xs-12">\r\n					<input type="text" class="col-xs-12" name="accompanyGuideName" value="{{otherInfo.accompanyGuideName}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3 hct-group-input">\r\n				<label>全陪电话</label>\r\n				<div class="col-xs-12">\r\n					<input type="text" class="col-xs-12" name="accompanyGuideMobile" value="{{otherInfo.accompanyGuideMobile}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3 hct-group-input">\r\n				<label>组团单号</label>\r\n				<div class="col-xs-12">\r\n					<input type="text" class="col-xs-12" name="otaOrderNumber" value="{{otherInfo.otaOrderNumber}}">\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-3 hct-group-input">\r\n				<label>客源类型</label>\r\n				<div class="col-xs-12">\r\n					<select name="memberType" class="col-xs-12"> \r\n						<option {{if otherInfo.memberType != 1}}selected{{/if}} value="0">内宾</option> \r\n						<option value="1" {{if otherInfo.memberType == 1}}selected{{/if}}>外宾</option> \r\n					</select>\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3 hct-group-input">\r\n				<label>接站牌</label>\r\n				<div class="col-xs-12">\r\n					<input type="text" class="col-xs-12" name="welcomeBoard" value="{{otherInfo.welcomeBoard}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3 hct-group-input">\r\n				<label>送客地点</label>\r\n				<div class="col-xs-12">\r\n					<input type="text" class="col-xs-12" name="sendPosition" value="{{otherInfo.sendPosition}}">\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10 hct-group-input">\r\n			<label>备注</label>\r\n			<div class="col-xs-12">\r\n				<textarea class="col-xs-12" name="remark">{{otherInfo.remark}}</textarea>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class="row">\r\n		<div class="col-xs-12 mar-t-20 mar-b-10">\r\n			<button class="btn btn-block btn-primary T-btn-save"> <i class="ace-icon fa fa-check"></i> 提交信息 </button>\r\n		</div>\r\n	</div>\r\n</div>\r\n<div style="position: fixed; right: 20px; bottom: 10px;min-width: 50px;">\r\n	<a class="btn btn-warning T-refresh" title="重新加载数据" style="border-radius: 5px;">\r\n		<i class="ace-icon fa fa-refresh bigger-160" style="margin-right: 0;"></i>\r\n	</a>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});