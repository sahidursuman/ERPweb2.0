/*TMODJS:{"debug":true,"version":34,"md5":"8c6337de6ebe3505eb63b332c89e56e2"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/updateGroupTripPlan", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, tripPlan = $data.tripPlan, touristGroup = $data.touristGroup, $string = $utils.$string, $each = $utils.$each, tripPlanDayList = $data.tripPlanDayList, touristGroupMemberList = ($data.rs, 
            $data.$index, $data.touristGroupMemberList), hasData = $data.hasData, tripPlanRequireList = $data.tripPlanRequireList, touristGroupFeeList = ($data.req, 
            $data.touristGroupFeeList), $out = "";
            return $out += '<div class="container-fulid hct-editor-plan globalAdd T-tab" data-id="', 
            $line = 1, $out += $escape(tripPlan.tripPlanId), $out += '"> <form class="T-basic-info" role="form" onsubmit="return false"> <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">基本信息</h3> <div class="pull-right" style="width:280px;"> <label class="col-xs-4 control-label text-right par-r-15">团号</label> <input type="text" readonly class="col-xs-8" value="系统自动生成"> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">报价单号</label> <div class="col-xs-8"> <input type="text" name="quoteOrderName" class="col-xs-12" readonly value="', 
            $line = 16, $out += $escape(tripPlan.quoteNumber), $out += '"> <input type="hidden" name="quoteId" value="', 
            $line = 17, $out += $escape(tripPlan.quoteId), $out += '"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>线路产品</label> <div class="col-xs-8"> <input type="text" name="lineProductName" readonly class="col-xs-12" value="', 
            $line = 23, $out += $escape(tripPlan.lineProductName), $out += '"> <input type="hidden" name="lineProductId" value="', 
            $line = 24, $out += $escape(tripPlan.lineProductId), $out += '"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>人数</label> <div class="col-xs-8"> <input type="text" name="adultCount" value="', 
            $line = 30, $out += $escape(tripPlan.adultCount), $out += '" style="width: 40px;"> <label class="control-label">大人</label> <input type="text" name="childCount" value="', 
            $line = 32, $out += $escape(tripPlan.childCount), $out += '" style="width: 40px;"> <label class="control-label">小孩</label> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">收客单号</label> <div class="col-xs-8"> <input type="text" readonly class="col-xs-12" name="partnerAgencyName" value="', 
            $line = 39, $out += $escape(touristGroup.orderNumber), $out += '" data-id="', $line = 39, 
            $out += $escape(touristGroup.id), $out += '"> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>出游日期</label> <div class="col-xs-8"> <input type="text" class="col-xs-12 datepicker" name="startTime" value="', 
            $line = 47, $out += $escape(tripPlan.startTime), $out += '"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>完团日期</label> <div class="col-xs-8"> <input type="text" class="col-xs-12 datepicker" name="endTime" value="', 
            $line = 53, $out += $escape(tripPlan.endTime), $out += '"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>客户</label> <div class="hct-input-group col-xs-8"> <input type="text" class="col-xs-12" name="travelAgencyName" value="', 
            $line = 59, touristGroup.partnerAgency && ($line = 59, $out += $escape(touristGroup.partnerAgency.travelAgencyName), 
            $line = 59), $out += '"> <input type="hidden" name="fromPartnerAgencyId" value="', 
            $line = 60, touristGroup.partnerAgency && ($line = 60, $out += $escape(touristGroup.partnerAgency.id), 
            $line = 60), $out += '"> <span class="hct-group-add cursor T-addPartner">[新增]</span> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>客户联系人</label> <div class="hct-input-group col-xs-8"> <input type="text" class="col-xs-12" name="contactRealname" value="', 
            $line = 67, touristGroup.partnerAgencyContact && ($line = 67, $out += $escape(touristGroup.partnerAgencyContact.contactRealname), 
            $out += "-[", $line = 67, $out += $escape(touristGroup.partnerAgencyContact.contactMobileNumber), 
            $out += "]", $line = 67), $out += '"> <input type="hidden" name="fromPartnerAgencyContactId" value="', 
            $line = 68, touristGroup.partnerAgencyContact && ($line = 68, $out += $escape(touristGroup.partnerAgencyContact.id), 
            $line = 68), $out += '"> <span class="hct-group-add cursor T-addPartnerManager">[新增]</span> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">全陪</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="accompanyGuideName" value="', 
            $line = 77, $out += $escape(tripPlan.accompanyGuideName), $out += '"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">全陪电话</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="accompanyGuideMobile" value="', 
            $line = 83, $out += $escape(tripPlan.accompanyGuideMobile), $out += '"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">获得方式</label> <div class="col-xs-8"> <select class="col-xs-12" name="getType"> ', 
            $line = 90, $out += $string($helpers.getWayType(touristGroup.getType)), $out += ' </select> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">组团单号</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="otaOrderNumber" value="', 
            $line = 97, $out += $escape(touristGroup.otaOrderNumber), $out += '"> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">外联销售</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="outOPUserName" value="', 
            $line = 105, touristGroup.outOPUser && ($line = 105, $out += $escape(touristGroup.outOPUser.realName), 
            $line = 105), $out += '"> <input type="hidden" name="outOPUserId" value="', $line = 106, 
            touristGroup.outOPUser && ($line = 106, $out += $escape(touristGroup.outOPUser.id), 
            $line = 106), $out += '"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">客源类型</label> <div class="col-xs-8"> <select class="col-xs-12" name="memberType"> <option value="0">内宾</option> <option value="1" ', 
            $line = 114, 1 == touristGroup.memberType && ($out += "selected", $line = 114), 
            $out += '>外宾</option> </select> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">责任计调</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="dutyOPUserName" value="', 
            $line = 121, $out += $escape(tripPlan.dutyOPUserName), $out += '"> <input type="hidden" name="dutyOPUserId" value="', 
            $line = 122, $out += $escape(tripPlan.dutyOPUserId), $out += '"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">责任部门</label> <div class="col-xs-8"> <input type="text" readonly class="col-xs-12" name="dutyOPDepartment" value="', 
            $line = 128, $out += $escape(tripPlan.dutyOPUserBusinessGroupName), $out += '"> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">购物商家</label> <div class="col-xs-8"> <input type="text" name="shopNames" readonly class="col-xs-12 T-shopNames" value="', 
            $line = 136, $out += $escape(tripPlan.shopNames), $out += '" data-propover="', $line = 136, 
            $out += $escape(tripPlan.shopIds), $out += '"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">自费商家</label> <div class="col-xs-8"> <input type="text" name="selfPayItemNames" readonly class="col-xs-12 T-selfPayItemNames" value="', 
            $line = 142, $out += $escape(tripPlan.selfPayItemNames), $out += '" data-propover="', 
            $line = 142, $out += $escape(tripPlan.selfPayItemIds), $out += '"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">包含自费</label> <div class="col-xs-2"> <input type="checkbox" class="ace" name="isContainSelfPay" ', 
            $line = 148, $out += $escape($helpers.checked(tripPlan.isContainSelfPay)), $out += '> <label class="lbl"></label> </div> <label class="col-xs-4 control-label text-right">是否购买保险</label> <div class="col-xs-2"> <input type="checkbox" class="ace" name="buyInsurance" ', 
            $line = 153, $out += $escape($helpers.checked(touristGroup.buyInsurance)), $out += '> <label class="lbl"></label> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">接站牌</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="welcomeBoard" value="', 
            $line = 160, $out += $escape(tripPlan.welcomeBoard), $out += '"> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <label class="col-xs-1 control-label text-right">备注</label> <div class="col-xs-11"> <textarea class="col-xs-12" name="remark" maxlength="1000">', 
            $line = 168, $out += $escape(tripPlan.remark), $out += '</textarea> </div> </div> </div> <div class="row"> <div class="col-xs-6 T-executeTime"> <label class="control-label">确认发团后游客短信设置</label> <label> <input type="radio" class="ace" name="executeTimeType" ', 
            $line = 176, 0 == tripPlan.executeTimeType && ($out += "checked", $line = 176), 
            $out += '> <span class="lbl">立即发送</span> </label> <label> <input type="radio" class="ace T-timed" name="executeTimeType" ', 
            $line = 180, 1 == tripPlan.executeTimeType && ($out += "checked", $line = 180), 
            $out += '> <span class="lbl">定时发送</span> </label> <input type="text" class="datetimepicker hidden" name="executeTime" value="', 
            $line = 183, $out += $escape(tripPlan.executeTime), $out += '"> </div> <div class="col-xs-6"> <label class="col-xs-4 control-label text-right">短信签名</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="travelAgencyTag" value="', 
            $line = 188, $out += $escape(tripPlan.travelAgencyTag), $out += '"> </div> </div> </div> </form> <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">行程安排</h3> <div class="pull-left mar-l-15"> <button class="btn btn-sm btn-success T-add-days"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </div> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">简要行程</th> <th class="th-border">含餐情况</th> <th class="th-border">住宿地点</th> <th class="th-border">景点</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-days"> ', 
            $line = 213, $each(tripPlanDayList, function(rs) {
                $out += ' <tr data-id="', $line = 214, $out += $escape(rs.id), $out += '"> <td name="dateDays" data-which-day=', 
                $line = 215, $out += $escape(rs.whichDay), $out += '></td> <td><input type="text" class="col-xs-12" name="title" value="', 
                $line = 216, $out += $escape(rs.title), $out += '"></td> <td> <label class="control-label"> <input type="checkbox" name="repastDetailM" class="ace" ', 
                $line = 219, $out += $escape($helpers.checked(rs.m)), $out += '> <span class="lbl">早餐</span> </label> <label class="control-label mar-l-10"> <input type="checkbox" name="repastDetailN" class="ace" ', 
                $line = 223, $out += $escape($helpers.checked(rs.n)), $out += '> <span class="lbl">午餐</span> </label> <label class="control-label mar-l-10"> <input type="checkbox" name="repastDetailE" class="ace" ', 
                $line = 227, $out += $escape($helpers.checked(rs.e)), $out += '> <span class="lbl">晚餐</span> </label> </td> <td><input type="text" class="col-xs-12" name="restPosition" value="', 
                $line = 231, $out += $escape(rs.restPosition), $out += '"></td> <td><input type="text" class="col-xs-12 T-action T-scenicItem" name="scenicItemNames" data-propover="', 
                $line = 232, $out += $escape(rs.scenicItemIds), $out += '" readonly value="', $line = 232, 
                $out += $escape(rs.scenicItemNames), $out += '"></td> <td> <a class="cursor T-action T-update-detail" title="编辑行程详情" data-detail="', 
                $line = 234, $out += $escape(rs.detail), $out += '"> 编辑行程详情 <label style="padding-left:10px;">|</label> </a> <a class="cursor T-action T-delete" title="删除"> 删除 </a> </td> </tr> ', 
                $line = 243;
            }), $out += ' </tbody> </table> </div> </div> <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">游客名单</h3> <div class="pull-left mar-l-15"> <button class="btn btn-sm btn-success T-add-tourists"> <i class="ace-icon fa fa-plus"></i> 添加成员 </button> <button class="btn btn-sm btn-success T-add-tourists-batch"> <i class="ace-icon fa fa-plus"></i> 批量添加 </button> </div> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">姓名</th> <th class="th-border">手机号码</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">设为联系人</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-tourists-list"> ', 
            $line = 269, $each(touristGroupMemberList, function(rs) {
                $out += ' <tr data-id="', $line = 270, $out += $escape(rs.id), $out += '"> <td><input type="text" class="col-xs-12" name="name" value="', 
                $line = 271, $out += $escape(rs.name), $out += '"></td> <td><input type="text" class="col-xs-12" name="mobileNumber" value="', 
                $line = 272, $out += $escape(rs.mobileNumber), $out += '"></td> <td> <select class="col-xs-12" name="idCardType"> ', 
                $line = 275, $out += $string($helpers.getCardOption(rs.idCardType)), $out += ' </select> </td> <td><input type="text" class="col-xs-12" name="idCardNumber" value="', 
                $line = 278, $out += $escape(rs.idCardNumber), $out += '"></td> <td> <label class="control-label"> <input type="checkbox" name="isContactUser" class="ace" ', 
                $line = 281, $out += $escape($helpers.checked(rs.isContactUser)), $out += '> <span class="lbl"></span> </label> </td> <td> <a class="cursor T-action T-delete" title="删除">删除</a> </td> </tr> ', 
                $line = 289;
            }), $out += ' </tbody> </table> </div> </div> <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">操作计划</h3> <div class="pull-left mar-l-15 T-action-plan"> <button data-type="insurance" class="btn btn-sm btn-success T-add-action" ', 
            $line = 298, hasData.insurance && ($out += ' disabled="disabled" ', $line = 298), 
            $out += '> <i class="ace-icon fa fa-plus"></i> 保险 </button> <button data-type="guide" class="btn btn-sm btn-success T-add-action" ', 
            $line = 299, hasData.guide && ($out += ' disabled="disabled" ', $line = 299), $out += '> <i class="ace-icon fa fa-plus"></i> 导游 </button> <button data-type="bus" class="btn btn-sm btn-success T-add-action" ', 
            $line = 300, hasData.bus && ($out += ' disabled="disabled" ', $line = 300), $out += '> <i class="ace-icon fa fa-plus"></i> 车辆 </button> <button data-type="restaurant" class="btn btn-sm btn-success T-add-action" ', 
            $line = 301, hasData.restaurant && ($out += ' disabled="disabled" ', $line = 301), 
            $out += '> <i class="ace-icon fa fa-plus"></i> 餐饮 </button> <button data-type="hotel" class="btn btn-sm btn-success T-add-action" ', 
            $line = 302, hasData.hotel && ($out += ' disabled="disabled" ', $line = 302), $out += '> <i class="ace-icon fa fa-plus"></i> 酒店 </button> <button data-type="scenic" class="btn btn-sm btn-success T-add-action" ', 
            $line = 303, hasData.scenic && ($out += ' disabled="disabled" ', $line = 303), $out += '> <i class="ace-icon fa fa-plus"></i> 景区 </button> <button data-type="ticket" class="btn btn-sm btn-success T-add-action" ', 
            $line = 304, hasData.ticket && ($out += ' disabled="disabled" ', $line = 304), $out += '> <i class="ace-icon fa fa-plus"></i> 票务 </button> <button data-type="shop" class="btn btn-sm btn-success T-add-action" ', 
            $line = 305, hasData.shop && ($out += ' disabled="disabled" ', $line = 305), $out += '> <i class="ace-icon fa fa-plus"></i> 购物 </button> <button data-type="selfPay" class="btn btn-sm btn-success T-add-action" ', 
            $line = 306, hasData.selfPay && ($out += ' disabled="disabled" ', $line = 306), 
            $out += '> <i class="ace-icon fa fa-plus"></i> 自费 </button> <button data-type="other" class="btn btn-sm btn-success T-add-action" ', 
            $line = 307, hasData.other && ($out += ' disabled="disabled" ', $line = 307), $out += '> <i class="ace-icon fa fa-plus"></i> 其它 </button> </div> </div> <div class="col-xs-12 T-action-plan-list"> ', 
            $line = 311, $each(tripPlanRequireList, function(req) {
                $out += ' <div class="col-xs-12 hct-plan-ask" data-type="', $line = 312, $out += $escape(req.requireType), 
                $out += '" data-id="', $line = 312, $out += $escape(req.id), $out += '"> <div class="pull-left hct-plan-ask-title">', 
                $line = 313, $out += $escape(req.requireText), $out += '计划要求</div> <div class="pull-left hct-plan-ask-input"> <input type="text" class="col-xs-12" name="requireContent" value="', 
                $line = 315, $out += $escape(req.requireContent), $out += '"> </div> <div class="pull-left hct-plan-ask-operate"><a class="cursor T-action T-delete" title="删除">删除</a></div> </div> ', 
                $line = 319;
            }), $out += ' </div> </div> <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">账单</h3> <div class="pull-left mar-l-15"> <button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> </div> <div class="col-xs-12"> <div class="col-xs-2"> <label class="col-xs-4 text-right">应收</label> <div class="col-xs-8"> <input type="text" class="col-xs-12 F-float F-money" name="needPayAllMoney" readonly value="', 
            $line = 333, $out += $escape(touristGroup.needPayAllMoney), $out += '"> </div> </div> <div class="col-xs-2"> <label class="col-xs-4 text-right">预收款</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="preIncomeMoney" value="', 
            $line = 339, $out += $escape(touristGroup.preIncomeMoney), $out += '"> </div> </div> <div class="col-xs-2"> <label class="col-xs-4 text-right">计划现收</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="currentNeedPayMoney" value="', 
            $line = 345, $out += $escape(touristGroup.currentNeedPayMoney), $out += '"> </div> </div> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-fee-list"> ', 
            $line = 362, $each(touristGroupFeeList, function(rs) {
                $out += ' <tr data-id="', $line = 363, $out += $escape(rs.id), $out += '"> <td><input type="text" class="col-xs-12" name="describeInfo" value="', 
                $line = 364, $out += $escape(rs.describeInfo), $out += '"></td> <td><input type="text" class="col-xs-12 T-calculate T-count F-count" name="count" value="', 
                $line = 365, $out += $escape(rs.count), $out += '"></td> <td><input type="text" class="col-xs-12 T-calculate T-price F-money" name="price" value="', 
                $line = 366, $out += $escape(rs.price), $out += '"></td> <td><input type="text" class="col-xs-12" name="money" readonly value="', 
                $line = 367, rs.count && rs.price && ($line = 367, $out += $escape(rs.count * rs.price), 
                $line = 367), $out += '"></td> <td><input type="text" class="col-xs-12" name="remark" value="', 
                $line = 368, $out += $escape(rs.remark), $out += '"></td> <td><a class="cursor T-action T-delete" title="删除">删除</a></td> </tr> ', 
                $line = 371;
            }), $out += ' </tbody> </table> </div> </div> <div class="row"> <div class="form-group" style="text-align: center;"> <button class="btn btn-sm btn-danger T-cancelPlan otherButton"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-sm btn-primary T-savePlan otherButton marginLeft-30"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fulid hct-editor-plan globalAdd T-tab" data-id="{{tripPlan.tripPlanId}}">\r\n	<form class="T-basic-info" role="form" onsubmit="return false">\r\n		<div class="row">\r\n			<div class="col-xs-12 hd">\r\n				<h3 class="pull-left">基本信息</h3>\r\n				<div class="pull-right" style="width:280px;">\r\n					<label class="col-xs-4 control-label text-right par-r-15">团号</label>\r\n					<input type="text" readonly class="col-xs-8" value="系统自动生成">\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="row">\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">报价单号</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" name="quoteOrderName" class="col-xs-12" readonly value="{{tripPlan.quoteNumber}}">\r\n					<input type="hidden" name="quoteId" value="{{tripPlan.quoteId}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right"><span class="necessary">*</span>线路产品</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" name="lineProductName" readonly class="col-xs-12" value="{{tripPlan.lineProductName}}">\r\n					<input type="hidden" name="lineProductId" value="{{tripPlan.lineProductId}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right"><span class="necessary">*</span>人数</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" name="adultCount" value="{{tripPlan.adultCount}}" style="width: 40px;">\r\n					<label class="control-label">大人</label>\r\n					<input type="text" name="childCount" value="{{tripPlan.childCount}}" style="width: 40px;">\r\n					<label class="control-label">小孩</label>\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">收客单号</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" readonly class="col-xs-12" name="partnerAgencyName" value="{{touristGroup.orderNumber}}" data-id="{{touristGroup.id}}">\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="row">\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right"><span class="necessary">*</span>出游日期</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="col-xs-12 datepicker" name="startTime" value="{{tripPlan.startTime}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right"><span class="necessary">*</span>完团日期</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="col-xs-12 datepicker" name="endTime" value="{{tripPlan.endTime}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right"><span class="necessary">*</span>客户</label>\r\n				<div class="hct-input-group col-xs-8">\r\n					<input type="text" class="col-xs-12" name="travelAgencyName" value="{{if !!touristGroup.partnerAgency}}{{touristGroup.partnerAgency.travelAgencyName}}{{/if}}">\r\n					<input type="hidden" name="fromPartnerAgencyId" value="{{if !!touristGroup.partnerAgency}}{{touristGroup.partnerAgency.id}}{{/if}}">\r\n					<span class="hct-group-add cursor T-addPartner">[新增]</span>\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right"><span class="necessary">*</span>客户联系人</label>\r\n				<div class="hct-input-group col-xs-8">\r\n					<input type="text" class="col-xs-12" name="contactRealname" value="{{if !!touristGroup.partnerAgencyContact}}{{touristGroup.partnerAgencyContact.contactRealname}}-[{{touristGroup.partnerAgencyContact.contactMobileNumber}}]{{/if}}">\r\n					<input type="hidden" name="fromPartnerAgencyContactId" value="{{if !!touristGroup.partnerAgencyContact}}{{touristGroup.partnerAgencyContact.id}}{{/if}}">\r\n					<span class="hct-group-add cursor T-addPartnerManager">[新增]</span>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="row">\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">全陪</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="col-xs-12" name="accompanyGuideName" value="{{tripPlan.accompanyGuideName}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">全陪电话</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="col-xs-12" name="accompanyGuideMobile" value="{{tripPlan.accompanyGuideMobile}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">获得方式</label>\r\n				<div class="col-xs-8">\r\n					<select class="col-xs-12" name="getType">\r\n						{{#touristGroup.getType | getWayType}}\r\n					</select>\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">组团单号</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="col-xs-12" name="otaOrderNumber" value="{{touristGroup.otaOrderNumber}}">\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="row">\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">外联销售</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="col-xs-12" name="outOPUserName" value="{{if touristGroup.outOPUser}}{{touristGroup.outOPUser.realName}}{{/if}}">\r\n					<input type="hidden" name="outOPUserId" value="{{if touristGroup.outOPUser}}{{touristGroup.outOPUser.id}}{{/if}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">客源类型</label>\r\n				<div class="col-xs-8">\r\n					<select class="col-xs-12" name="memberType">\r\n						<option value="0">内宾</option>\r\n						<option value="1" {{if touristGroup.memberType == 1}}selected{{/if}}>外宾</option>\r\n					</select>\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">责任计调</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="col-xs-12" name="dutyOPUserName" value="{{tripPlan.dutyOPUserName}}">\r\n					<input type="hidden" name="dutyOPUserId" value="{{tripPlan.dutyOPUserId}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">责任部门</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" readonly class="col-xs-12" name="dutyOPDepartment" value="{{tripPlan.dutyOPUserBusinessGroupName}}">\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="row">\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">购物商家</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" name="shopNames" readonly class="col-xs-12 T-shopNames" value="{{tripPlan.shopNames}}" data-propover="{{tripPlan.shopIds}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">自费商家</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" name="selfPayItemNames" readonly class="col-xs-12 T-selfPayItemNames" value="{{tripPlan.selfPayItemNames}}" data-propover="{{tripPlan.selfPayItemIds}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">包含自费</label>\r\n				<div class="col-xs-2">\r\n					<input type="checkbox" class="ace" name="isContainSelfPay" {{tripPlan.isContainSelfPay | checked}}>\r\n					<label class="lbl"></label>\r\n				</div>\r\n				<label class="col-xs-4 control-label text-right">是否购买保险</label>\r\n				<div class="col-xs-2">\r\n					<input type="checkbox" class="ace" name="buyInsurance" {{touristGroup.buyInsurance | checked}}>\r\n					<label class="lbl"></label>\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 control-label text-right">接站牌</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="col-xs-12" name="welcomeBoard" value="{{tripPlan.welcomeBoard}}">\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="row">\r\n			<div class="col-xs-12">\r\n				<label class="col-xs-1 control-label text-right">备注</label>\r\n				<div class="col-xs-11">\r\n					<textarea class="col-xs-12" name="remark" maxlength="1000">{{tripPlan.remark}}</textarea>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="row">\r\n			<div class="col-xs-6 T-executeTime">\r\n				<label class="control-label">确认发团后游客短信设置</label>\r\n				<label>\r\n					<input type="radio" class="ace" name="executeTimeType" {{if tripPlan.executeTimeType == 0}}checked{{/if}}>\r\n					<span class="lbl">立即发送</span>\r\n				</label>\r\n				<label>\r\n					<input type="radio" class="ace T-timed" name="executeTimeType" {{if tripPlan.executeTimeType == 1}}checked{{/if}}>\r\n					<span class="lbl">定时发送</span>\r\n				</label>\r\n				<input type="text" class="datetimepicker hidden" name="executeTime" value="{{tripPlan.executeTime}}">\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<label class="col-xs-4 control-label text-right">短信签名</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="col-xs-12" name="travelAgencyTag" value="{{tripPlan.travelAgencyTag}}">\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n	<div class="row">\r\n		<div class="col-xs-12 hd">\r\n			<h3 class="pull-left">行程安排</h3>\r\n			<div class="pull-left mar-l-15">\r\n				<button class="btn btn-sm btn-success T-add-days"> <i class="ace-icon fa fa-plus"></i> 新增 </button>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th class="th-border">日期</th>\r\n						<th class="th-border">简要行程</th>\r\n						<th class="th-border">含餐情况</th>\r\n						<th class="th-border">住宿地点</th>\r\n						<th class="th-border">景点</th>\r\n						<th class="th-border">操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-days">\r\n				{{each tripPlanDayList as rs}}\r\n				<tr data-id="{{rs.id}}">\r\n					<td name="dateDays" data-which-day={{rs.whichDay}}></td>\r\n					<td><input type="text" class="col-xs-12" name="title" value="{{rs.title}}"></td>\r\n					<td>\r\n						<label class="control-label">\r\n							<input type="checkbox" name="repastDetailM" class="ace" {{rs.m | checked}}>\r\n							<span class="lbl">早餐</span>\r\n						</label>\r\n						<label class="control-label mar-l-10">\r\n							<input type="checkbox" name="repastDetailN" class="ace" {{rs.n | checked}}>\r\n							<span class="lbl">午餐</span>\r\n						</label>\r\n						<label class="control-label mar-l-10">\r\n							<input type="checkbox" name="repastDetailE" class="ace" {{rs.e | checked}}>\r\n							<span class="lbl">晚餐</span>\r\n						</label>\r\n					</td>\r\n					<td><input type="text" class="col-xs-12" name="restPosition" value="{{rs.restPosition}}"></td>\r\n					<td><input type="text" class="col-xs-12 T-action T-scenicItem" name="scenicItemNames" data-propover="{{rs.scenicItemIds}}" readonly value="{{rs.scenicItemNames}}"></td>\r\n					<td>\r\n						<a class="cursor T-action T-update-detail" title="编辑行程详情" data-detail="{{rs.detail}}">\r\n				            编辑行程详情\r\n				            <label style="padding-left:10px;">|</label>\r\n				        </a>\r\n				        <a class="cursor T-action T-delete" title="删除">\r\n				            删除\r\n				        </a>\r\n					</td>\r\n				</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n	<div class="row">\r\n		<div class="col-xs-12 hd">\r\n			<h3 class="pull-left">游客名单</h3>\r\n			<div class="pull-left mar-l-15">\r\n				<button class="btn btn-sm btn-success T-add-tourists"> <i class="ace-icon fa fa-plus"></i> 添加成员 </button>\r\n				<button class="btn btn-sm btn-success T-add-tourists-batch"> <i class="ace-icon fa fa-plus"></i> 批量添加 </button>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th class="th-border">姓名</th>\r\n						<th class="th-border">手机号码</th>\r\n						<th class="th-border">证件类型</th>\r\n						<th class="th-border">证件号</th>\r\n						<th class="th-border">设为联系人</th>\r\n						<th class="th-border">操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-tourists-list">\r\n					{{each touristGroupMemberList as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td><input type="text" class="col-xs-12" name="name" value="{{rs.name}}"></td>\r\n						<td><input type="text" class="col-xs-12" name="mobileNumber" value="{{rs.mobileNumber}}"></td>\r\n						<td>\r\n							<select class="col-xs-12" name="idCardType">\r\n								{{#rs.idCardType | getCardOption}}\r\n							</select>\r\n						</td>\r\n						<td><input type="text" class="col-xs-12" name="idCardNumber" value="{{rs.idCardNumber}}"></td>\r\n						<td>\r\n							<label class="control-label">\r\n								<input type="checkbox" name="isContactUser" class="ace" {{rs.isContactUser | checked}}>\r\n								<span class="lbl"></span>\r\n							</label>\r\n						</td>\r\n						<td>\r\n					        <a class="cursor T-action T-delete" title="删除">删除</a>\r\n						</td>\r\n					</tr>\r\n					{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n	<div class="row">\r\n		<div class="col-xs-12 hd">\r\n			<h3 class="pull-left">操作计划</h3>\r\n			<div class="pull-left mar-l-15 T-action-plan">\r\n				<button data-type="insurance" class="btn btn-sm btn-success T-add-action" {{if hasData.insurance}} disabled="disabled" {{/if}}> <i class="ace-icon fa fa-plus"></i> 保险 </button>\r\n				<button data-type="guide" class="btn btn-sm btn-success T-add-action" {{if hasData.guide}} disabled="disabled" {{/if}}> <i class="ace-icon fa fa-plus"></i> 导游 </button>\r\n				<button data-type="bus" class="btn btn-sm btn-success T-add-action" {{if hasData.bus}} disabled="disabled" {{/if}}> <i class="ace-icon fa fa-plus"></i> 车辆 </button>\r\n				<button data-type="restaurant" class="btn btn-sm btn-success T-add-action" {{if hasData.restaurant}} disabled="disabled" {{/if}}> <i class="ace-icon fa fa-plus"></i> 餐饮 </button>\r\n				<button data-type="hotel" class="btn btn-sm btn-success T-add-action" {{if hasData.hotel}} disabled="disabled" {{/if}}> <i class="ace-icon fa fa-plus"></i> 酒店 </button>\r\n				<button data-type="scenic" class="btn btn-sm btn-success T-add-action" {{if hasData.scenic}} disabled="disabled" {{/if}}> <i class="ace-icon fa fa-plus"></i> 景区 </button>\r\n				<button data-type="ticket" class="btn btn-sm btn-success T-add-action" {{if hasData.ticket}} disabled="disabled" {{/if}}> <i class="ace-icon fa fa-plus"></i> 票务 </button>\r\n				<button data-type="shop" class="btn btn-sm btn-success T-add-action" {{if hasData.shop}} disabled="disabled" {{/if}}> <i class="ace-icon fa fa-plus"></i> 购物 </button>\r\n				<button data-type="selfPay" class="btn btn-sm btn-success T-add-action" {{if hasData.selfPay}} disabled="disabled" {{/if}}> <i class="ace-icon fa fa-plus"></i> 自费 </button>\r\n				<button data-type="other" class="btn btn-sm btn-success T-add-action" {{if hasData.other}} disabled="disabled" {{/if}}> <i class="ace-icon fa fa-plus"></i> 其它 </button>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 T-action-plan-list">\r\n			{{each tripPlanRequireList as req}}\r\n			<div class="col-xs-12 hct-plan-ask" data-type="{{req.requireType}}" data-id="{{req.id}}">\r\n				<div class="pull-left hct-plan-ask-title">{{req.requireText}}计划要求</div>\r\n				<div class="pull-left hct-plan-ask-input">\r\n				    <input type="text" class="col-xs-12" name="requireContent" value="{{req.requireContent}}">\r\n				</div>\r\n				<div class="pull-left hct-plan-ask-operate"><a class="cursor T-action T-delete" title="删除">删除</a></div>\r\n			</div>\r\n			{{/each}}\r\n		</div>\r\n	</div>\r\n	<div class="row">\r\n		<div class="col-xs-12 hd">\r\n			<h3 class="pull-left">账单</h3>\r\n			<div class="pull-left mar-l-15">\r\n				<button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12">\r\n			<div class="col-xs-2">\r\n				<label class="col-xs-4 text-right">应收</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="col-xs-12 F-float F-money" name="needPayAllMoney" readonly value="{{touristGroup.needPayAllMoney}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-2">\r\n				<label class="col-xs-4 text-right">预收款</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="col-xs-12" name="preIncomeMoney" value="{{touristGroup.preIncomeMoney}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-2">\r\n				<label class="col-xs-4 text-right">计划现收</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" class="col-xs-12" name="currentNeedPayMoney" value="{{touristGroup.currentNeedPayMoney}}">\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th class="th-border">费用项</th>\r\n						<th class="th-border">数量</th>\r\n						<th class="th-border">单价</th>\r\n						<th class="th-border">金额</th>\r\n						<th class="th-border">说明</th>\r\n						<th class="th-border">操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-fee-list">\r\n					{{each touristGroupFeeList as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td><input type="text" class="col-xs-12" name="describeInfo" value="{{rs.describeInfo}}"></td>\r\n						<td><input type="text" class="col-xs-12 T-calculate T-count F-count" name="count" value="{{rs.count}}"></td>\r\n						<td><input type="text" class="col-xs-12 T-calculate T-price F-money" name="price" value="{{rs.price}}"></td>\r\n						<td><input type="text" class="col-xs-12" name="money" readonly value="{{if rs.count && rs.price}}{{rs.count * rs.price}}{{/if}}"></td>\r\n						<td><input type="text" class="col-xs-12" name="remark" value="{{rs.remark}}"></td>\r\n						<td><a class="cursor T-action T-delete" title="删除">删除</a></td>\r\n					</tr>\r\n					{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n	<div class="row">\r\n		<div class="form-group" style="text-align: center;">\r\n			<button class="btn btn-sm btn-danger T-cancelPlan otherButton">\r\n				<i class="ace-icon fa fa-times"></i>\r\n				取消\r\n			</button>\r\n\r\n			<button class="btn btn-sm  btn-primary T-savePlan otherButton marginLeft-30">\r\n				<i class="ace-icon fa fa-check"></i>\r\n				保存\r\n			</button>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});