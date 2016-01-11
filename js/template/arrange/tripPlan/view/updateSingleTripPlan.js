/*TMODJS:{"debug":true,"version":52,"md5":"8016bd4db9c744cc31acf9cfa460aef0"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/updateSingleTripPlan", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, tripPlan = $data.tripPlan, $each = $utils.$each, tripPlanDay = $data.tripPlanDay, touristGroupList = ($data.rs, 
            $data.$index, $data.touristGroupList), hasData = ($data.group, $data.hasData), require = $data.require, $out = ($data.req, 
            "");
            return $out += '<div class="container-fulid hct-editor-plan T-tab globalAdd">  <form class="T-basic-info" role="form" onsubmit="return false"> <input type="hidden" name="id" value="', 
            $line = 4, $out += $escape(tripPlan.id), $out += '"> <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">基本信息</h3> <div class="pull-right" style="width:280px;"> <label class="col-xs-4 control-label text-right par-r-15">团号</label> <input type="text" readonly class="col-xs-8" value="', 
            $line = 10, $out += $escape(tripPlan.tripNumber), $out += '"> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>线路产品</label> <div class="hct-input-group col-xs-8"> <input type="text" name="lineProductName" readonly class="col-xs-12" value="', 
            $line = 18, $out += $escape(tripPlan.lineProduct.name), $out += '"> <input type="hidden" name="lineProductId" value="', 
            $line = 19, $out += $escape(tripPlan.lineProduct.id), $out += '"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">计划人数</label> <div class="col-xs-8"> <input type="text" class="form-control F-float F-count" name="planTouristCount" value="', 
            $line = 25, $out += $escape(tripPlan.planTouristCount), $out += '"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>出游日期</label> <div class="col-xs-8"> <input type="text" class="col-xs-12 datepicker" name="startTime" value="', 
            $line = 31, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), 
            $out += '"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>完团日期</label> <div class="col-xs-8"> <input type="text" class="col-xs-12 datepicker" name="endTime" value="', 
            $line = 37, $out += $escape($helpers.dateFormat(tripPlan.endTime, "yyyy-MM-dd")), 
            $out += '"> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">全陪</label> <div class="col-xs-8"> <input name="accompanyGuideName" type="text" class="col-xs-12" value="', 
            $line = 46, $out += $escape(tripPlan.accompanyGuideName), $out += '"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">全陪电话</label> <div class="col-xs-8"> <input name="accompanyGuideMobile" type="text" class="col-xs-12" value="', 
            $line = 52, $out += $escape(tripPlan.accompanyGuideMobile), $out += '"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">责任计调</label> <div class="col-xs-8"> <input name="dutyOPUserName" type="text" class="col-xs-12" value="', 
            $line = 58, tripPlan.dutyOPUser && ($line = 58, $out += $escape(tripPlan.dutyOPUser.realName), 
            $line = 58), $out += '"> <input type="hidden" name="dutyOPUserId" value="', $line = 59, 
            tripPlan.dutyOPUser && ($line = 59, $out += $escape(tripPlan.dutyOPUser.id), $line = 59), 
            $out += '"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">责任部门</label> <div class="col-xs-8"> <input type="text" name="dutyOPDepartment" readonly class="col-xs-12" value="', 
            $line = 65, tripPlan.dutyOPUser && ($line = 65, $out += $escape(tripPlan.dutyOPUser.businessGroup.name), 
            $line = 65), $out += '"> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">购物商家</label> <div class="col-xs-8"> <input type="text" name="shopNames" readonly class="col-xs-12 T-shopNames" data-propover="', 
            $line = 75, $out += $escape(tripPlan.shopIds), $out += '" value="', $line = 75, 
            $out += $escape(tripPlan.shopNames), $out += '"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">自费商家</label> <div class="col-xs-8"> <input type="text" name="selfPayItemNames" readonly class="col-xs-12 T-selfPayItemNames" data-propover="', 
            $line = 81, $out += $escape(tripPlan.selfPayItemIds), $out += '" value="', $line = 81, 
            $out += $escape(tripPlan.selfPayItemNames), $out += '"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">包含自费</label> <div class="col-xs-8"> <input type="checkbox" class="ace" name="isContainSelfPay" ', 
            $line = 87, tripPlan.isContainSelfPay && ($out += ' checked="checked" ', $line = 87), 
            $out += '> <label class="lbl"></label> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">接站牌</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="welcomeBoard" value="', 
            $line = 94, $out += $escape(tripPlan.welcomeBoard), $out += '"> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <label class="col-xs-1 control-label text-right">备注</label> <div class="col-xs-11"> <textarea class="col-xs-12" name="remark" maxlength="1000">', 
            $line = 103, $out += $escape(tripPlan.remark), $out += '</textarea> </div> </div> </div> <div class="row"> <div class="col-xs-6 T-executeTime"> <label class="control-label">确认发团后游客短信设置</label> <label> <input type="radio" class="ace T-immediate" name="executeTimeType" ', 
            $line = 112, 0 == tripPlan.executeTimeType && ($out += "checked", $line = 112), 
            $out += '> <span class="lbl">立即发送</span> </label> <label> <input type="radio" class="ace T-timed" name="executeTimeType" ', 
            $line = 116, 1 == tripPlan.executeTimeType && ($out += "checked", $line = 116), 
            $out += '> <span class="lbl">定时发送</span> </label> <input type="text" class="datetimepicker ', 
            $line = 119, 0 == tripPlan.executeTimeType && ($out += "hidden", $line = 119), $out += '" name="executeTime" value="', 
            $line = 119, $out += $escape(tripPlan.datetimepicker), $out += '"> </div> <div class="col-xs-6"> <label class="col-xs-4 control-label text-right">短信签名</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="travelAgencyTag" value="', 
            $line = 124, $out += $escape(tripPlan.travelAgencyTag), $out += '"> </div> </div> </div> </form>  <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">行程安排</h3> <div class="pull-left mar-l-15"> <button class="btn btn-sm btn-success T-add-days"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">简要行程</th> <th class="th-border">含餐情况</th> <th class="th-border">住宿地点</th> <th class="th-border">景点</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-days"> ', 
            $line = 153, $each(tripPlanDay, function(rs) {
                $out += " <tr data-id=", $line = 154, $out += $escape(rs.id), $out += '> <td name="dateDays" data-which-day=', 
                $line = 155, $out += $escape(rs.whichDay), $out += '><input type="text" class="col-xs-12 datepicker" name="whichDayDate" value=""></td> <td><input type="text" class="col-xs-12" name="title" value="', 
                $line = 156, $out += $escape(rs.title), $out += '"></td> <td> <label class="control-label"> <input type="checkbox" name="repastDetailM" class="ace" ', 
                $line = 159, "1" == rs.m && ($out += "checked", $line = 159), $out += '> <span class="lbl">早餐</span> </label> <label class="control-label mar-l-10"> <input type="checkbox" name="repastDetailN" class="ace" ', 
                $line = 163, "1" == rs.n && ($out += "checked", $line = 163), $out += '> <span class="lbl">午餐</span> </label> <label class="control-label mar-l-10"> <input type="checkbox" name="repastDetailE" class="ace" ', 
                $line = 167, "1" == rs.e && ($out += "checked", $line = 167), $out += '> <span class="lbl">晚餐</span> </label> </td> <td><input type="text" class="col-xs-12" name="restPosition" value="', 
                $line = 171, $out += $escape(rs.restPosition), $out += '"></td> <td><input type="text" class="col-xs-12 T-action T-scenicItem" name="scenicItemNames" data-propover="', 
                $line = 172, $out += $escape(rs.scenicItemIds), $out += '" readonly value="', $line = 172, 
                $out += $escape(rs.scenicItemNames), $out += '"></td> <td> <a class="cursor T-action T-update-detail" title="编辑行程详情" data-detail="', 
                $line = 174, $out += $escape(rs.detail), $out += '"> 编辑行程详情 <label style="padding-left:10px;">|</label> </a> <a class="cursor T-action T-delete" title="删除"> 删除 </a> </td> </tr> ', 
                $line = 183;
            }), $out += ' </tbody> </table> </div> </div>  <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">游客名单</h3> <div class="pull-left mar-l-15"> <button class="btn btn-sm btn-success T-add-touristGroup"> <i class="ace-icon fa fa-search"></i> 选择游客 </button> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">外联销售</th> <th class="th-border">线路产品</th> <th class="th-border">来源</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">客源地</th> <th class="th-border">年龄</th> <th class="th-border">人数</th> <th class="th-border">现收团款</th> <th class="th-border">住宿标准</th> <th class="th-border">包含自费</th> <th class="th-border">备注</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-touristGroup-list"> ', 
            $line = 219, $each(touristGroupList, function(group) {
                $out += ' <tr data-id="', $line = 220, $out += $escape(group.id), $out += '"> <td name="creatorName">', 
                $line = 221, group.outOPUser && ($line = 221, $out += $escape(group.outOPUser.realName), 
                $line = 221), $out += '</td> <td name="lineProductName">', $line = 222, $out += $escape(group.lineProduct.name), 
                $out += '</td> <td name="travelAgencyName">', $line = 223, $out += $escape(group.partnerAgency.travelAgencyName), 
                $out += '</td> <td name="contactMemberName">', $line = 224, $out += $escape(group.contactMember.name), 
                $out += '</td> <td name="contactMemberMobileNumber">', $line = 225, $out += $escape(group.contactMember.mobileNumber), 
                $out += '</td> <td name="areaData">', $line = 226, $out += $escape(group.areaData), 
                $out += '</td> <td name="ageData" class="F-float F-count">', $line = 227, $out += $escape(group.ageData), 
                $out += '</td> <td name="peopleCount" class="F-float F-count" data-adultCount="', 
                $line = 228, $out += $escape(group.adultCount), $out += '" data-childCount="', $line = 228, 
                $out += $escape(group.childCount), $out += '">', $line = 228, $out += $escape(group.adultCount + group.childCount), 
                $out += '</td> <td name="currentNeedPayMoney" class="F-float F-money">', $line = 229, 
                $out += $escape(group.currentNeedPayMoney), $out += '</td> <td name="hotelLevel">', 
                $line = 230, 1 == group.hotelLevel ? ($out += " 三星以下 ", $line = 232) : 2 == group.hotelLevel ? ($out += " 三星 ", 
                $line = 234) : 3 == group.hotelLevel ? ($out += " 准四星 ", $line = 236) : 4 == group.hotelLevel ? ($out += " 四星 ", 
                $line = 238) : 5 == group.hotelLevel ? ($out += " 准五星 ", $line = 240) : 6 == group.hotelLevel ? ($out += " 五星 ", 
                $line = 242) : 7 == group.hotelLevel && ($out += " 五星以上 ", $line = 244), $out += ' </td> <td name="includeSelfPay">', 
                $line = 246, $out += $escape(group.includeSelfPay), $out += '</td> <td name="remark">', 
                $line = 247, $out += $escape(group.remark), $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group"> <a class="cursor T-action T-groupView"> 查看 </a><a class=\'cursor\'> </a> <a class="cursor T-action T-groupDelete"> 删除 </a> </div> </td> </tr> ', 
                $line = 259;
            }), $out += ' </tbody> </table> </div> </div>  <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">操作计划</h3> <div class="pull-left mar-l-15 T-action-plan"> <label data-type="insurance" class="control-label T-add-action"> <input type="checkbox" class="ace" ', 
            $line = 271, hasData.insurance && ($out += 'checked="true"', $line = 271), $out += '> <span class="lbl">保险</span> </label> <label data-type="guide" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace" ', 
            $line = 275, hasData.guide && ($out += 'checked="true"', $line = 275), $out += '> <span class="lbl">导游</span> </label> <label data-type="bus" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace" ', 
            $line = 279, hasData.bus && ($out += 'checked="true"', $line = 279), $out += '> <span class="lbl">车辆</span> </label> <label data-type="restaurant" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace" ', 
            $line = 283, hasData.restaurant && ($out += 'checked="true"', $line = 283), $out += '> <span class="lbl">餐饮</span> </label> <label data-type="hotel" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace" ', 
            $line = 287, hasData.hotel && ($out += 'checked="true"', $line = 287), $out += '> <span class="lbl">酒店</span> </label> <label data-type="scenic" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace" ', 
            $line = 291, hasData.scenic && ($out += 'checked="true"', $line = 291), $out += '> <span class="lbl">景区</span> </label> <label data-type="ticket" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace" ', 
            $line = 295, hasData.ticket && ($out += 'checked="true"', $line = 295), $out += '> <span class="lbl">票务</span> </label> <label data-type="shop" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace" ', 
            $line = 299, hasData.shop && ($out += 'checked="true"', $line = 299), $out += '> <span class="lbl">购物</span> </label> <label data-type="selfPay" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace" ', 
            $line = 303, hasData.selfPay && ($out += 'checked="true"', $line = 303), $out += '> <span class="lbl">自费</span> </label> <label data-type="other" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace" ', 
            $line = 307, hasData.other && ($out += 'checked="true"', $line = 307), $out += '> <span class="lbl">其它</span> </label> </div> </div> </div> <div class="row"> <div class="col-xs-12 T-action-plan-list"> ', 
            $line = 315, $each(require, function(req) {
                $out += ' <div class="col-xs-12 hct-plan-ask" data-type="', $line = 316, $out += $escape(req.requireType), 
                $out += '" data-id="', $line = 316, $out += $escape(req.id), $out += '"> <div class="pull-left hct-plan-ask-title">', 
                $line = 317, $out += $escape(req.requireText), $out += '计划要求</div> <div class="pull-left hct-plan-ask-input"> <input type="text" class="col-xs-12" name="requireContent" value="', 
                $line = 319, $out += $escape(req.requireContent), $out += '"> </div> <div class="pull-left hct-plan-ask-operate"><a class="cursor T-action T-delete" title="删除">删除</a></div> </div> ', 
                $line = 323;
            }), $out += ' </div> </div>  <div class="row"> <div class="form-group text-center mar-t-20"> <button class="btn btn-xs btn-danger T-cancelPlan w100"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-xs btn-primary T-savePlan w100 marginLeft-30"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fulid hct-editor-plan T-tab globalAdd">\r\n	<!-- 1. 基本信息 -->\r\n	<form class="T-basic-info" role="form" onsubmit="return false">\r\n		<input type="hidden" name="id" value="{{tripPlan.id}}">\r\n		<div class="row">\r\n			<div class="col-xs-12 hd">\r\n				<h3 class="pull-left">基本信息</h3>\r\n				<div class="pull-right" style="width:280px;">\r\n					<label class="col-xs-4 control-label text-right par-r-15">团号</label>\r\n					<input type="text" readonly class="col-xs-8" value="{{tripPlan.tripNumber}}">\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="row">\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right"><span class="necessary">*</span>线路产品</label>\r\n				<div class="hct-input-group col-xs-8">\r\n					<input type="text" name="lineProductName" readonly class="col-xs-12" value="{{tripPlan.lineProduct.name}}">\r\n					<input type="hidden" name="lineProductId" value="{{tripPlan.lineProduct.id}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">计划人数</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="form-control F-float F-count" name="planTouristCount" value="{{tripPlan.planTouristCount}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right"><span class="necessary">*</span>出游日期</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="col-xs-12 datepicker" name="startTime"  value="{{tripPlan.startTime | dateFormat: \'yyyy-MM-dd\'}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right"><span class="necessary">*</span>完团日期</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="col-xs-12 datepicker" name="endTime"  value="{{tripPlan.endTime | dateFormat: \'yyyy-MM-dd\'}}">\r\n				</div>\r\n			</div>\r\n		</div>\r\n\r\n		<div class="row">\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">全陪</label>\r\n				<div class="col-xs-8">\r\n					<input name="accompanyGuideName" type="text" class="col-xs-12"  value="{{tripPlan.accompanyGuideName}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">全陪电话</label>\r\n				<div class="col-xs-8">\r\n					<input name="accompanyGuideMobile" type="text" class="col-xs-12"  value="{{tripPlan.accompanyGuideMobile}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">责任计调</label>\r\n				<div class="col-xs-8">\r\n					<input name="dutyOPUserName" type="text" class="col-xs-12"  value="{{if tripPlan.dutyOPUser}}{{tripPlan.dutyOPUser.realName}}{{/if}}">\r\n					<input type="hidden" name="dutyOPUserId"  value="{{if tripPlan.dutyOPUser}}{{tripPlan.dutyOPUser.id}}{{/if}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">责任部门</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" name="dutyOPDepartment" readonly class="col-xs-12"  value="{{if tripPlan.dutyOPUser}}{{tripPlan.dutyOPUser.businessGroup.name}}{{/if}}">\r\n				</div>\r\n			</div>\r\n		</div>\r\n\r\n		\r\n		<div class="row">\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">购物商家</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" name="shopNames" readonly class="col-xs-12 T-shopNames" data-propover="{{tripPlan.shopIds}}" value="{{tripPlan.shopNames}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">自费商家</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" name="selfPayItemNames" readonly class="col-xs-12 T-selfPayItemNames" data-propover="{{tripPlan.selfPayItemIds}}"  value="{{tripPlan.selfPayItemNames}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">包含自费</label>\r\n				<div class="col-xs-8">\r\n					<input type="checkbox" class="ace" name="isContainSelfPay" {{if tripPlan.isContainSelfPay}} checked="checked" {{/if}}>\r\n					<label class="lbl"></label>\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">接站牌</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="col-xs-12" name="welcomeBoard" value="{{tripPlan.welcomeBoard}}">\r\n				</div>\r\n			</div>\r\n		</div>\r\n\r\n		<div class="row">\r\n			<div class="col-xs-12">\r\n				<label class="col-xs-1 control-label text-right">备注</label>\r\n				<div class="col-xs-11">\r\n					<textarea class="col-xs-12" name="remark" maxlength="1000">{{tripPlan.remark}}</textarea>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		\r\n		<div class="row">\r\n			<div class="col-xs-6 T-executeTime">\r\n				<label class="control-label">确认发团后游客短信设置</label>\r\n				<label>\r\n					<input type="radio" class="ace T-immediate" name="executeTimeType" {{if tripPlan.executeTimeType == 0}}checked{{/if}}>\r\n					<span class="lbl">立即发送</span>\r\n				</label>\r\n				<label>\r\n					<input type="radio" class="ace T-timed" name="executeTimeType" {{if tripPlan.executeTimeType == 1}}checked{{/if}}>\r\n					<span class="lbl">定时发送</span>\r\n				</label>\r\n				<input type="text" class="datetimepicker {{if tripPlan.executeTimeType == 0}}hidden{{/if}}" name="executeTime"  value="{{tripPlan.datetimepicker}}">\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<label class="col-xs-4 control-label text-right">短信签名</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="col-xs-12" name="travelAgencyTag" value="{{tripPlan.travelAgencyTag}}">\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n\r\n	<!-- 2. 行程安排 -->\r\n	<div class="row">\r\n		<div class="col-xs-12 hd">\r\n			<h3 class="pull-left">行程安排</h3>\r\n			<div class="pull-left mar-l-15">\r\n				<button class="btn btn-sm btn-success T-add-days"> <i class="ace-icon fa fa-plus"></i> 新增 </button>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class="row">\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th class="th-border">日期</th>\r\n						<th class="th-border">简要行程</th>\r\n						<th class="th-border">含餐情况</th>\r\n						<th class="th-border">住宿地点</th>\r\n						<th class="th-border">景点</th>\r\n						<th class="th-border">操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-days">\r\n				{{each tripPlanDay as rs}}\r\n				<tr data-id={{rs.id}}>\r\n					<td name="dateDays" data-which-day={{rs.whichDay}}><input type="text" class="col-xs-12 datepicker" name="whichDayDate" value=""></td>\r\n					<td><input type="text" class="col-xs-12" name="title" value="{{rs.title}}"></td>\r\n					<td>\r\n						<label class="control-label">\r\n							<input type="checkbox" name="repastDetailM" class="ace" {{if rs.m == "1"}}checked{{/if}}>\r\n							<span class="lbl">早餐</span>\r\n						</label>\r\n						<label class="control-label mar-l-10">\r\n							<input type="checkbox" name="repastDetailN" class="ace" {{if rs.n == "1"}}checked{{/if}}>\r\n							<span class="lbl">午餐</span>\r\n						</label>\r\n						<label class="control-label mar-l-10">\r\n							<input type="checkbox" name="repastDetailE" class="ace" {{if rs.e == "1"}}checked{{/if}}>\r\n							<span class="lbl">晚餐</span>\r\n						</label>\r\n					</td>\r\n					<td><input type="text" class="col-xs-12" name="restPosition" value="{{rs.restPosition}}"></td>\r\n					<td><input type="text" class="col-xs-12 T-action T-scenicItem" name="scenicItemNames" data-propover="{{rs.scenicItemIds}}" readonly value="{{rs.scenicItemNames}}"></td>\r\n					<td>\r\n						<a class="cursor T-action T-update-detail" title="编辑行程详情" data-detail="{{rs.detail}}">\r\n				            编辑行程详情\r\n				            <label style="padding-left:10px;">|</label>\r\n				        </a>\r\n				        <a class="cursor T-action T-delete" title="删除">\r\n				            删除\r\n				        </a>\r\n					</td>\r\n				</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n\r\n	<!-- 3. 游客名单 -->\r\n	<div class="row">\r\n		<div class="col-xs-12 hd">\r\n			<h3 class="pull-left">游客名单</h3>\r\n			<div class="pull-left mar-l-15">\r\n				<button class="btn btn-sm btn-success T-add-touristGroup"> <i class="ace-icon fa fa-search"></i> 选择游客 </button>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class="row">\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th class="th-border">外联销售</th>\r\n						<th class="th-border">线路产品</th>\r\n						<th class="th-border">来源</th>\r\n						<th class="th-border">联系人</th>\r\n						<th class="th-border">联系电话</th>\r\n						<th class="th-border">客源地</th>\r\n						<th class="th-border">年龄</th>\r\n						<th class="th-border">人数</th>\r\n						<th class="th-border">现收团款</th>\r\n						<th class="th-border">住宿标准</th>\r\n						<th class="th-border">包含自费</th>\r\n						<th class="th-border">备注</th>\r\n						<th class="th-border">操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-touristGroup-list">\r\n					{{each touristGroupList as group}}\r\n					<tr data-id="{{group.id}}">\r\n						<td name="creatorName">{{if group.outOPUser }}{{group.outOPUser.realName}}{{/if}}</td>\r\n						<td name="lineProductName">{{group.lineProduct.name}}</td>\r\n						<td name="travelAgencyName">{{group.partnerAgency.travelAgencyName}}</td>\r\n						<td name="contactMemberName">{{group.contactMember.name}}</td>\r\n						<td name="contactMemberMobileNumber">{{group.contactMember.mobileNumber}}</td>\r\n						<td name="areaData">{{group.areaData}}</td>\r\n						<td name="ageData" class="F-float F-count">{{group.ageData}}</td>\r\n						<td name="peopleCount" class="F-float F-count" data-adultCount="{{group.adultCount}}" data-childCount="{{group.childCount}}">{{group.adultCount+group.childCount}}</td>\r\n						<td name="currentNeedPayMoney" class="F-float F-money">{{group.currentNeedPayMoney}}</td>\r\n						<td name="hotelLevel">{{if group.hotelLevel==1 }}\r\n						   三星以下\r\n						   {{else if group.hotelLevel==2 }}\r\n						   三星\r\n						   {{else if group.hotelLevel==3 }}\r\n						   准四星\r\n						   {{else if group.hotelLevel==4 }}\r\n						   四星\r\n						   {{else if group.hotelLevel==5 }}\r\n						   准五星\r\n						   {{else if group.hotelLevel==6 }}\r\n						   五星\r\n						   {{else if group.hotelLevel==7 }}\r\n						   五星以上\r\n						   {{/if}}\r\n						</td>\r\n						<td name="includeSelfPay">{{group.includeSelfPay}}</td>\r\n						<td name="remark">{{group.remark}}</td>\r\n						<td>\r\n							<div class="hidden-sm hidden-xs btn-group">\r\n							<a class="cursor T-action T-groupView">\r\n								查看\r\n							</a><a class=\'cursor\'> </a>\r\n							<a class="cursor T-action T-groupDelete">\r\n								删除\r\n							</a>\r\n							</div>\r\n						</td>\r\n					</tr>\r\n					{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n\r\n	<!-- 4. 操作计划 -->\r\n	<div class="row">\r\n		<div class="col-xs-12 hd">\r\n			<h3 class="pull-left">操作计划</h3>\r\n			<div class="pull-left mar-l-15 T-action-plan">\r\n				<label data-type="insurance" class="control-label T-add-action">\r\n					<input type="checkbox" class="ace" {{if hasData.insurance}}checked="true"{{/if}}>\r\n					<span class="lbl">保险</span>\r\n				</label>\r\n				<label data-type="guide" class="control-label T-add-action mar-l-10">\r\n					<input type="checkbox" class="ace" {{if hasData.guide}}checked="true"{{/if}}>\r\n					<span class="lbl">导游</span>\r\n				</label>\r\n				<label data-type="bus" class="control-label T-add-action mar-l-10">\r\n					<input type="checkbox" class="ace" {{if hasData.bus}}checked="true"{{/if}}>\r\n					<span class="lbl">车辆</span>\r\n				</label>\r\n				<label data-type="restaurant" class="control-label T-add-action mar-l-10">\r\n					<input type="checkbox" class="ace" {{if hasData.restaurant}}checked="true"{{/if}}>\r\n					<span class="lbl">餐饮</span>\r\n				</label>\r\n				<label data-type="hotel" class="control-label T-add-action mar-l-10">\r\n					<input type="checkbox" class="ace" {{if hasData.hotel}}checked="true"{{/if}}>\r\n					<span class="lbl">酒店</span>\r\n				</label>\r\n				<label data-type="scenic" class="control-label T-add-action mar-l-10">\r\n					<input type="checkbox" class="ace" {{if hasData.scenic}}checked="true"{{/if}}>\r\n					<span class="lbl">景区</span>\r\n				</label>\r\n				<label data-type="ticket" class="control-label T-add-action mar-l-10">\r\n					<input type="checkbox" class="ace" {{if hasData.ticket}}checked="true"{{/if}}>\r\n					<span class="lbl">票务</span>\r\n				</label>\r\n				<label data-type="shop" class="control-label T-add-action mar-l-10">\r\n					<input type="checkbox" class="ace" {{if hasData.shop}}checked="true"{{/if}}>\r\n					<span class="lbl">购物</span>\r\n				</label>\r\n				<label data-type="selfPay" class="control-label T-add-action mar-l-10">\r\n					<input type="checkbox" class="ace" {{if hasData.selfPay}}checked="true"{{/if}}>\r\n					<span class="lbl">自费</span>\r\n				</label>\r\n				<label data-type="other" class="control-label T-add-action mar-l-10">\r\n					<input type="checkbox" class="ace" {{if hasData.other}}checked="true"{{/if}}>\r\n					<span class="lbl">其它</span>\r\n				</label>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class="row">\r\n		<div class="col-xs-12 T-action-plan-list">\r\n			{{each require as req}}\r\n			<div class="col-xs-12 hct-plan-ask" data-type="{{req.requireType}}" data-id="{{req.id}}">\r\n				<div class="pull-left hct-plan-ask-title">{{req.requireText}}计划要求</div>\r\n				<div class="pull-left hct-plan-ask-input">\r\n				    <input type="text" class="col-xs-12" name="requireContent" value="{{req.requireContent}}">\r\n				</div>\r\n				<div class="pull-left hct-plan-ask-operate"><a class="cursor T-action T-delete" title="删除">删除</a></div>\r\n			</div>\r\n			{{/each}}\r\n		</div>\r\n	</div>\r\n\r\n	<!-- 5. 操作 -->\r\n	<div class="row">\r\n		<div class="form-group text-center mar-t-20">\r\n			<button class="btn btn-xs btn-danger T-cancelPlan w100">\r\n				<i class="ace-icon fa fa-times"></i>\r\n				取消\r\n			</button>\r\n\r\n			<button class="btn btn-xs  btn-primary T-savePlan w100 marginLeft-30">\r\n				<i class="ace-icon fa fa-check"></i>\r\n				保存\r\n			</button>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});