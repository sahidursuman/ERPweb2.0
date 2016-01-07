/*TMODJS:{"debug":true,"version":9,"md5":"ce57c35901d5e14640a865e3b81d356a"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/viewTripPlanGroup", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), basicInfo = $data.basicInfo, $escape = $utils.$escape, $each = $utils.$each, arrangeItems = $data.arrangeItems, $out = ($data.guideList, 
            $data.$index, $data.insuranceList, $data.busCompanyList, "");
            return $out += '<div class="container-fluid hct-view-plan"> <div class="row border"> <div class="col-xs-12 hd"> <h3>基本信息</h3> </div> </div> <div class="row border"> <div class="col-xs-3"> <label class="col-xs-4 text-right">报价单号：</label> <span class="col-xs-8">---</span> </div> <div class="col-xs-3"> <label class="col-xs-4 text-right">线路产品：</label> <span class="col-xs-8">', 
            $line = 14, basicInfo.lineProduct && ($line = 14, $out += $escape(basicInfo.lineProduct.name), 
            $line = 14), $out += '</span> </div> <div class="col-xs-3"> <label class="col-xs-4 text-right">人数：</label> <span class="col-xs-8">', 
            $line = 18, $out += $escape(basicInfo.touristAdultCount), $out += "大人 ", $line = 18, 
            $out += $escape(basicInfo.touristChildCount), $out += '小孩</span> </div> <div class="col-xs-3"> <label class="col-xs-4 text-right">团号：</label> <span class="col-xs-8">', 
            $line = 22, $out += $escape(basicInfo.tripNumber), $out += '</span> </div> </div> <div class="row border"> <div class="col-xs-3"> <label class="col-xs-4 text-right">全陪：</label> <span class="col-xs-8">', 
            $line = 28, $out += $escape(basicInfo.accompanyGuideName), $out += '</span> </div> <div class="col-xs-3"> <label class="col-xs-4 text-right">全陪电话：</label> <span class="col-xs-8">', 
            $line = 32, $out += $escape(basicInfo.accompanyGuideMobile), $out += '</span> </div> <div class="col-xs-3"> <label class="col-xs-4 text-right">责任计调：</label> <span class="col-xs-8">', 
            $line = 36, basicInfo.dutyOPUser && ($line = 36, $out += $escape(basicInfo.dutyOPUser.realName), 
            $line = 36), $out += '</span> </div> <div class="col-xs-3"> <label class="col-xs-4 text-right">责任部门：</label> <span class="col-xs-8">', 
            $line = 40, basicInfo.businessGroup && ($line = 40, $out += $escape(basicInfo.businessGroup.name), 
            $line = 40), $out += '</span> </div> </div> <div class="row border"> <div class="col-xs-3"> <label class="col-xs-4 text-right">购物商家：</label> <span class="col-xs-8">', 
            $line = 46, $out += $escape(basicInfo.shopNames), $out += '</span> </div> <div class="col-xs-3"> <label class="col-xs-4 text-right">自费商家：</label> <span class="col-xs-8">', 
            $line = 50, $out += $escape(basicInfo.selfPayItemNames), $out += '</span> </div> <div class="col-xs-3"> <label class="col-xs-4 text-right">包含自费：</label> <span class="col-xs-8">', 
            $line = 54, "1" == basicInfo.isContainSelfPay ? ($out += "包含", $line = 54) : ($out += "不包含", 
            $line = 54), $out += '</span> </div> <div class="col-xs-3"> <label class="col-xs-4 text-right">接站牌：</label> <span class="col-xs-8">', 
            $line = 58, $out += $escape(basicInfo.welcomeBoard), $out += '</span> </div> </div> <div class="row border"> <div class="col-xs-12"> <label class="col-xs-1 text-right">备注：</label> <span class="col-xs-11">---</span> </div> </div> </div> <div class="container-fluid hct-view-plan"> <div class="row border"> <div class="col-xs-12 hd"> <h3>基础安排</h3> </div> </div> <div class="row border"> <div class="col-xs-12"> <div class="timeline-container"> <div class="timeline-items scheduleListContainer"> <div class="timeline-item clearfix viewLineProductDaysDetail"> <div class="timeline-info" style="color:#1fade0;margin-left: -8px;"> <i class="ace-icon fa fa-circle"></i> <span>导</span> </div> <div class="widget-box transparent" style="margin-top: 25px"> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">开始日期</th> <th class="th-border">结束日期</th> <th class="th-border">任务</th> <th class="th-border">导游</th> <th class="th-border">联系电话</th> <th class="th-border">导服费</th> <th class="th-border">管理费</th> <th class="th-border">备注</th> </tr> </thead> <tbody> ', 
            $line = 101, $each(arrangeItems.guideList, function(guideList) {
                $out += " <tr> <td>", $line = 103, $out += $escape(guideList.startTime), $out += "</td> <td>", 
                $line = 104, $out += $escape(guideList.endTime), $out += "</td> <td>", $line = 105, 
                $out += $escape(guideList.taskType), $out += "</td> <td>", $line = 106, guideList.guide && ($line = 106, 
                $out += $escape(guideList.guide.realname), $line = 106), $out += "</td> <td>", $line = 107, 
                $out += $escape(guideList.mobileNumber), $out += "</td> <td>", $line = 108, $out += $escape(guideList.price), 
                $out += "</td> <td>", $line = 109, $out += $escape(guideList.manageFee), $out += "</td> <td>", 
                $line = 110, $out += $escape(guideList.remark), $out += "</td> </tr> ", $line = 112;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> <div class="timeline-item clearfix viewLineProductDaysDetail"> <div class="timeline-info" style="color:#1fade0;margin-left: -8px;"> <i class="ace-icon fa fa-circle"></i> <span>险</span> </div> <div class="widget-box transparent" style="margin-top: 25px"> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">保险公司</th> <th class="th-border">险种</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">应付</th> <th class="th-border">预付款</th> <th class="th-border">备注</th> </tr> </thead> <tbody> ', 
            $line = 140, $each(arrangeItems.insuranceList, function(insuranceList) {
                $out += " <tr> <td>", $line = 142, insuranceList.insurance && ($line = 142, $out += $escape(insuranceList.insurance.name), 
                $line = 142), $out += "</td> <td>", $line = 143, insuranceList.insuranceItem && ($line = 143, 
                $out += $escape(insuranceList.insuranceItem.name), $line = 143), $out += "</td> <td>", 
                $line = 144, $out += $escape(insuranceList.price), $out += "</td> <td>", $line = 145, 
                $out += $escape(insuranceList.memberCount), $out += "</td> <td>", $line = 146, $out += $escape(insuranceList.needPayMoney), 
                $out += "</td> <td>", $line = 147, $out += $escape(insuranceList.prePayMoney), $out += "</td> <td>", 
                $line = 148, $out += $escape(insuranceList.remark), $out += "</td> </tr> ", $line = 150;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> <div class="timeline-item clearfix viewLineProductDaysDetail"> <div class="timeline-info" style="color:#1fade0;margin-left: -8px;"> <i class="ace-icon fa fa-circle"></i> <span>车</span> </div> <div class="widget-box transparent" style="margin-top: 25px"> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">开始日期</th> <th class="th-border">结束日期</th> <th class="th-border">任务</th> <th class="th-border">车座数</th> <th class="th-border">车辆品牌</th> <th class="th-border">车牌号</th> <th class="th-border">所属车队</th> <th class="th-border">联系电话</th> <th class="th-border">司机</th> <th class="th-border">司机电话</th> <th class="th-border">合同号</th> <th class="th-border">车费</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">预付款</th> <th class="th-border">计划导付</th> <th class="th-border">备注</th> </tr> </thead> <tbody> ', 
            $line = 188, $each(arrangeItems.busCompanyList, function(busCompanyList) {
                $out += " <tr> <td>", $line = 190, $out += $escape(busCompanyList.startTime), $out += "</td> <td>", 
                $line = 191, $out += $escape(busCompanyList.endTime), $out += "</td> <td>", $line = 192, 
                $out += $escape(busCompanyList.taskType), $out += "</td> <td>", $line = 193, $out += $escape(busCompanyList.needSeatCount), 
                $out += "</td> <td>", $line = 194, $out += $escape(busCompanyList.brand), $out += "</td> <td>", 
                $line = 195, busCompanyList.bus && ($line = 195, $out += $escape(busCompanyList.bus.licenseNumber), 
                $line = 195), $out += "</td> <td>", $line = 196, busCompanyList.busCompany && ($line = 196, 
                $out += $escape(busCompanyList.busCompany.companyName), $line = 196), $out += "</td> <td>", 
                $line = 197, $out += $escape(busCompanyList.mobileNumber), $out += "</td> <td>", 
                $line = 198, busCompanyList.driver && ($line = 198, $out += $escape(busCompanyList.driver.name), 
                $line = 198), $out += "</td> <td>", $line = 199, busCompanyList.driver && ($line = 199, 
                $out += $escape(busCompanyList.driver.mobileNumber), $line = 199), $out += "</td> <td>", 
                $line = 200, $out += $escape(busCompanyList.contractNumber), $out += "</td> <td>", 
                $line = 201, $out += $escape(busCompanyList.price), $out += "</td> <td>", $line = 202, 
                $out += $escape(busCompanyList.reduceMoney), $out += "</td> <td>", $line = 203, 
                $out += $escape(busCompanyList.needPayMoney), $out += "</td> <td>", $line = 204, 
                $out += $escape(busCompanyList.prePayMoney), $out += "</td> <td>", $line = 205, 
                $out += $escape(busCompanyList.guidePayMoney), $out += "</td> <td>", $line = 206, 
                $out += $escape(busCompanyList.remark), $out += "</td> </tr> ", $line = 208;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </div> </div> </div> </div> <div class="container-fluid hct-view-plan"> <div class="row border"> <div class="col-xs-12 hd"> <h3>行程安排</h3> </div> </div> <div class="row border"> <div class="col-xs-12"> <div class="tabbable"> <ul class="nav nav-tabs" id="myTab"> <li class="active"> <a aria-expanded="true" data-toggle="tab" href="#planDayListView-0" style="text-align:center;width:140px;"> 第1天 </a> </li> <li> <a aria-expanded="true" data-toggle="tab" href="#planDayListView-0" style="text-align:center;width:140px;"> 第2天 </a> </li> </ul> <div class="tab-content" style="border: none;"> <div id="planDayListView-0" class="tab-pane fade active in"> <div class="row"> <div class="col-xs-3"> <label class="control-label">简要行程：</label> <label class="control-label">成都140KM 资中120KM 宜宾60KM 蜀南竹海</label> </div> <div class="col-xs-3 checkbox" style="margin-top: 0;"> <label class="control-label">含餐：</label> <label class="control-label"> <input type="checkbox" class="ace" disabled> <span class="lbl">早餐</span> </label> <label class="control-label"> <input type="checkbox" class="ace" disabled> <span class="lbl">午餐</span> </label> <label class="control-label"> <input type="checkbox" class="ace" disabled> <span class="lbl">晚餐</span> </label> </div> <div class="col-xs-3"> <label class="control-label">住宿地点：</label> <label class="control-label">成都140KM 资中120KM 宜宾60KM 蜀南竹海</label> </div> <div class="col-xs-3"> <label class="control-label">景点：</label> <label class="control-label">成都140KM 资中120KM 宜宾60KM 蜀南竹海</label> </div> </div> <div class="timeline-container"> <div class="timeline-items scheduleListContainer"> <div class="timeline-item clearfix viewLineProductDaysDetail"> <div class="timeline-info" style="color:#1fade0;margin-left: 5px;"> <i class="ace-icon fa fa-circle"></i> <span>餐饮</span> </div> <div class="widget-box transparent" style="margin-top: 25px"> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">类型</th> <th class="th-border">餐厅</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">餐标（元/人）</th> <th class="th-border">人数</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">预付款</th> <th class="th-border">计划导付</th> <th class="th-border">备注</th> </tr> </thead> <tbody> </tbody> </table> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> <div class="container-fluid hct-view-plan"> <div class="row border"> <div class="col-xs-12 hd"> <h3>游客名单</h3> </div> </div> <div class="row border"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">手机号码</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">是否联系人</th> </tr> </thead> <tbody> </tbody> </table> </div> </div> </div> <div class="container-fluid hct-view-plan"> <div class="row border"> <div class="col-xs-12 hd"> <h3>账单</h3> </div> </div> <div class="row border"> <div class="col-xs-3"> <label class="col-xs-4 text-right">应收：</label> <span class="col-xs-8">3000</span> </div> <div class="col-xs-3"> <label class="col-xs-4 text-right">预收款：</label> <span class="col-xs-8">3000</span> </div> <div class="col-xs-3"> <label class="col-xs-4 text-right">已收：</label> <span class="col-xs-8">3000</span> </div> <div class="col-xs-3"> <label class="col-xs-4 text-right">计划现收：</label> <span class="col-xs-8">3000</span> </div> </div> <div class="row border"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> </tr> </thead> <tbody> </tbody> </table> </div> </div> </div> <div class="container-fluid hct-view-plan"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-default T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid hct-view-plan">\r\n	<div class="row border">\r\n		<div class="col-xs-12 hd">\r\n			<h3>基本信息</h3>\r\n		</div>\r\n	</div>\r\n	<div class="row border">\r\n		<div class="col-xs-3">\r\n			<label class="col-xs-4 text-right">报价单号：</label>\r\n			<span class="col-xs-8">---</span>\r\n		</div>\r\n		<div class="col-xs-3">\r\n			<label class="col-xs-4 text-right">线路产品：</label>\r\n			<span class="col-xs-8">{{if basicInfo.lineProduct}}{{basicInfo.lineProduct.name}}{{/if}}</span>\r\n		</div>\r\n		<div class="col-xs-3">\r\n			<label class="col-xs-4 text-right">人数：</label>\r\n			<span class="col-xs-8">{{basicInfo.touristAdultCount}}大人 {{basicInfo.touristChildCount}}小孩</span>\r\n		</div>\r\n		<div class="col-xs-3">\r\n			<label class="col-xs-4 text-right">团号：</label>\r\n			<span class="col-xs-8">{{basicInfo.tripNumber}}</span>\r\n		</div>\r\n	</div>\r\n	<div class="row border">\r\n		<div class="col-xs-3">\r\n			<label class="col-xs-4 text-right">全陪：</label>\r\n			<span class="col-xs-8">{{basicInfo.accompanyGuideName}}</span>\r\n		</div>\r\n		<div class="col-xs-3">\r\n			<label class="col-xs-4 text-right">全陪电话：</label>\r\n			<span class="col-xs-8">{{basicInfo.accompanyGuideMobile}}</span>\r\n		</div>\r\n		<div class="col-xs-3">\r\n			<label class="col-xs-4 text-right">责任计调：</label>\r\n			<span class="col-xs-8">{{if basicInfo.dutyOPUser}}{{basicInfo.dutyOPUser.realName}}{{/if}}</span>\r\n		</div>\r\n		<div class="col-xs-3">\r\n			<label class="col-xs-4 text-right">责任部门：</label>\r\n			<span class="col-xs-8">{{if basicInfo.businessGroup}}{{basicInfo.businessGroup.name}}{{/if}}</span>\r\n		</div>\r\n	</div>\r\n	<div class="row border">\r\n		<div class="col-xs-3">\r\n			<label class="col-xs-4 text-right">购物商家：</label>\r\n			<span class="col-xs-8">{{basicInfo.shopNames}}</span>\r\n		</div>\r\n		<div class="col-xs-3">\r\n			<label class="col-xs-4 text-right">自费商家：</label>\r\n			<span class="col-xs-8">{{basicInfo.selfPayItemNames}}</span>\r\n		</div>\r\n		<div class="col-xs-3">\r\n			<label class="col-xs-4 text-right">包含自费：</label>\r\n			<span class="col-xs-8">{{if basicInfo.isContainSelfPay == "1"}}包含{{else}}不包含{{/if}}</span>\r\n		</div>\r\n		<div class="col-xs-3">\r\n			<label class="col-xs-4 text-right">接站牌：</label>\r\n			<span class="col-xs-8">{{basicInfo.welcomeBoard}}</span>\r\n		</div>\r\n	</div>\r\n	<div class="row border">\r\n		<div class="col-xs-12">\r\n			<label class="col-xs-1 text-right">备注：</label>\r\n			<span class="col-xs-11">---</span>\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n<div class="container-fluid hct-view-plan">\r\n	<div class="row border">\r\n		<div class="col-xs-12 hd">\r\n			<h3>基础安排</h3>\r\n		</div>\r\n	</div>\r\n	<div class="row border">\r\n		<div class="col-xs-12">\r\n			<div class="timeline-container">\r\n				<div class="timeline-items scheduleListContainer">\r\n					<div class="timeline-item clearfix viewLineProductDaysDetail">\r\n						<div class="timeline-info" style="color:#1fade0;margin-left: -8px;">\r\n							<i class="ace-icon fa fa-circle"></i>\r\n                            <span>导</span>\r\n						</div>\r\n						<div class="widget-box transparent" style="margin-top: 25px">\r\n							<div class="widget-body">\r\n                            	<div class="widget-main">\r\n									<table class="table table-striped table-bordered table-hover">\r\n										<thead>\r\n											<tr>\r\n												<th class="th-border">开始日期</th>\r\n												<th class="th-border">结束日期</th>\r\n												<th class="th-border">任务</th>\r\n												<th class="th-border">导游</th>\r\n												<th class="th-border">联系电话</th>\r\n												<th class="th-border">导服费</th>\r\n												<th class="th-border">管理费</th>\r\n												<th class="th-border">备注</th>\r\n											</tr>\r\n										</thead>\r\n										<tbody>\r\n											{{each arrangeItems.guideList as guideList}}\r\n											<tr>\r\n												<td>{{guideList.startTime}}</td>\r\n												<td>{{guideList.endTime}}</td>\r\n												<td>{{guideList.taskType}}</td>\r\n												<td>{{if guideList.guide}}{{guideList.guide.realname}}{{/if}}</td>\r\n												<td>{{guideList.mobileNumber}}</td>\r\n												<td>{{guideList.price}}</td>\r\n												<td>{{guideList.manageFee}}</td>\r\n												<td>{{guideList.remark}}</td>\r\n											</tr>\r\n											{{/each}}\r\n										</tbody>\r\n									</table>\r\n                            	</div>\r\n                            </div>\r\n						</div>\r\n					</div>\r\n					<div class="timeline-item clearfix viewLineProductDaysDetail">\r\n						<div class="timeline-info" style="color:#1fade0;margin-left: -8px;">\r\n							<i class="ace-icon fa fa-circle"></i>\r\n                            <span>险</span>\r\n						</div>\r\n						<div class="widget-box transparent" style="margin-top: 25px">\r\n							<div class="widget-body">\r\n                            	<div class="widget-main">\r\n									<table class="table table-striped table-bordered table-hover">\r\n										<thead>\r\n											<tr>\r\n												<th class="th-border">保险公司</th>\r\n												<th class="th-border">险种</th>\r\n												<th class="th-border">单价</th>\r\n												<th class="th-border">数量</th>\r\n												<th class="th-border">应付</th>\r\n												<th class="th-border">预付款</th>\r\n												<th class="th-border">备注</th>\r\n											</tr>\r\n										</thead>\r\n										<tbody>\r\n											{{each arrangeItems.insuranceList as insuranceList}}\r\n											<tr>\r\n												<td>{{if insuranceList.insurance}}{{insuranceList.insurance.name}}{{/if}}</td>\r\n												<td>{{if insuranceList.insuranceItem}}{{insuranceList.insuranceItem.name}}{{/if}}</td>\r\n												<td>{{insuranceList.price}}</td>\r\n												<td>{{insuranceList.memberCount}}</td>\r\n												<td>{{insuranceList.needPayMoney}}</td>\r\n												<td>{{insuranceList.prePayMoney}}</td>\r\n												<td>{{insuranceList.remark}}</td>\r\n											</tr>\r\n											{{/each}}\r\n										</tbody>\r\n									</table>\r\n                            	</div>\r\n                            </div>\r\n						</div>\r\n					</div>\r\n					<div class="timeline-item clearfix viewLineProductDaysDetail">\r\n						<div class="timeline-info" style="color:#1fade0;margin-left: -8px;">\r\n							<i class="ace-icon fa fa-circle"></i>\r\n                            <span>车</span>\r\n						</div>\r\n						<div class="widget-box transparent" style="margin-top: 25px">\r\n							<div class="widget-body">\r\n                            	<div class="widget-main">\r\n									<table class="table table-striped table-bordered table-hover">\r\n										<thead>\r\n											<tr>\r\n												<th class="th-border">开始日期</th>\r\n												<th class="th-border">结束日期</th>\r\n												<th class="th-border">任务</th>\r\n												<th class="th-border">车座数</th>\r\n												<th class="th-border">车辆品牌</th>\r\n												<th class="th-border">车牌号</th>\r\n												<th class="th-border">所属车队</th>\r\n												<th class="th-border">联系电话</th>\r\n												<th class="th-border">司机</th>\r\n												<th class="th-border">司机电话</th>\r\n												<th class="th-border">合同号</th>\r\n												<th class="th-border">车费</th>\r\n												<th class="th-border">优惠</th>\r\n												<th class="th-border">应付</th>\r\n												<th class="th-border">预付款</th>\r\n												<th class="th-border">计划导付</th>\r\n												<th class="th-border">备注</th>\r\n											</tr>\r\n										</thead>\r\n										<tbody>\r\n											{{each arrangeItems.busCompanyList as busCompanyList}}\r\n											<tr>\r\n												<td>{{busCompanyList.startTime}}</td>\r\n												<td>{{busCompanyList.endTime}}</td>\r\n												<td>{{busCompanyList.taskType}}</td>\r\n												<td>{{busCompanyList.needSeatCount}}</td>\r\n												<td>{{busCompanyList.brand}}</td>\r\n												<td>{{if busCompanyList.bus}}{{busCompanyList.bus.licenseNumber}}{{/if}}</td>\r\n												<td>{{if busCompanyList.busCompany}}{{busCompanyList.busCompany.companyName}}{{/if}}</td>\r\n												<td>{{busCompanyList.mobileNumber}}</td>\r\n												<td>{{if busCompanyList.driver}}{{busCompanyList.driver.name}}{{/if}}</td>\r\n												<td>{{if busCompanyList.driver}}{{busCompanyList.driver.mobileNumber}}{{/if}}</td>\r\n												<td>{{busCompanyList.contractNumber}}</td>\r\n												<td>{{busCompanyList.price}}</td>\r\n												<td>{{busCompanyList.reduceMoney}}</td>\r\n												<td>{{busCompanyList.needPayMoney}}</td>\r\n												<td>{{busCompanyList.prePayMoney}}</td>\r\n												<td>{{busCompanyList.guidePayMoney}}</td>\r\n												<td>{{busCompanyList.remark}}</td>\r\n											</tr>\r\n											{{/each}}\r\n										</tbody>\r\n									</table>\r\n                            	</div>\r\n                            </div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n<div class="container-fluid hct-view-plan">\r\n	<div class="row border">\r\n		<div class="col-xs-12 hd">\r\n			<h3>行程安排</h3>\r\n		</div>\r\n	</div>\r\n	<div class="row border">\r\n		<div class="col-xs-12">\r\n			<div class="tabbable">\r\n				<ul class="nav nav-tabs" id="myTab">\r\n                    <li class="active">\r\n                        <a aria-expanded="true" data-toggle="tab" href="#planDayListView-0" style="text-align:center;width:140px;"> \r\n							第1天\r\n						</a>\r\n                    </li>\r\n                    <li>\r\n                        <a aria-expanded="true" data-toggle="tab" href="#planDayListView-0" style="text-align:center;width:140px;"> \r\n							第2天\r\n						</a>\r\n                    </li>\r\n                </ul>\r\n                <div class="tab-content" style="border: none;">\r\n					<div id="planDayListView-0" class="tab-pane fade active in">\r\n						<div class="row">\r\n							<div class="col-xs-3">\r\n								<label class="control-label">简要行程：</label>\r\n								<label class="control-label">成都140KM 资中120KM 宜宾60KM 蜀南竹海</label>\r\n							</div>\r\n							<div class="col-xs-3 checkbox" style="margin-top: 0;">\r\n								<label class="control-label">含餐：</label>\r\n								<label class="control-label">\r\n									<input type="checkbox" class="ace" disabled>\r\n									<span class="lbl">早餐</span>\r\n								</label>\r\n								<label class="control-label">\r\n									<input type="checkbox" class="ace" disabled>\r\n									<span class="lbl">午餐</span>\r\n								</label>\r\n								<label class="control-label">\r\n									<input type="checkbox" class="ace" disabled>\r\n									<span class="lbl">晚餐</span>\r\n								</label>\r\n							</div>\r\n							<div class="col-xs-3">\r\n								<label class="control-label">住宿地点：</label>\r\n								<label class="control-label">成都140KM 资中120KM 宜宾60KM 蜀南竹海</label>\r\n							</div>\r\n							<div class="col-xs-3">\r\n								<label class="control-label">景点：</label>\r\n								<label class="control-label">成都140KM 资中120KM 宜宾60KM 蜀南竹海</label>\r\n							</div>\r\n						</div>\r\n						<div class="timeline-container">\r\n							<div class="timeline-items scheduleListContainer">\r\n								<div class="timeline-item clearfix viewLineProductDaysDetail">\r\n									<div class="timeline-info" style="color:#1fade0;margin-left: 5px;">\r\n										<i class="ace-icon fa fa-circle"></i>\r\n			                            <span>餐饮</span>\r\n									</div>\r\n									<div class="widget-box transparent" style="margin-top: 25px">\r\n										<div class="widget-body">\r\n			                            	<div class="widget-main">\r\n												<table class="table table-striped table-bordered table-hover">\r\n													<thead>\r\n														<tr>\r\n															<th class="th-border">类型</th>\r\n															<th class="th-border">餐厅</th>\r\n															<th class="th-border">联系人</th>\r\n															<th class="th-border">联系电话</th>\r\n															<th class="th-border">餐标（元/人）</th>\r\n															<th class="th-border">人数</th>\r\n															<th class="th-border">优惠</th>\r\n															<th class="th-border">应付</th>\r\n															<th class="th-border">预付款</th>\r\n															<th class="th-border">计划导付</th>\r\n															<th class="th-border">备注</th>\r\n														</tr>\r\n													</thead>\r\n													<tbody>\r\n														\r\n													</tbody>\r\n												</table>\r\n			                            	</div>\r\n			                            </div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n                </div>\r\n			</div>\r\n			\r\n		</div>\r\n	</div>\r\n</div>\r\n<div class="container-fluid hct-view-plan">\r\n	<div class="row border">\r\n		<div class="col-xs-12 hd">\r\n			<h3>游客名单</h3>\r\n		</div>\r\n	</div>\r\n	<div class="row border">\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th class="th-border">序号</th>\r\n						<th class="th-border">姓名</th>\r\n						<th class="th-border">手机号码</th>\r\n						<th class="th-border">证件类型</th>\r\n						<th class="th-border">证件号</th>\r\n						<th class="th-border">是否联系人</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody>\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n</div>\r\n<div class="container-fluid hct-view-plan">\r\n	<div class="row border">\r\n		<div class="col-xs-12 hd">\r\n			<h3>账单</h3>\r\n		</div>\r\n	</div>\r\n	<div class="row border">\r\n		<div class="col-xs-3">\r\n			<label class="col-xs-4 text-right">应收：</label>\r\n			<span class="col-xs-8">3000</span>\r\n		</div>\r\n		<div class="col-xs-3">\r\n			<label class="col-xs-4 text-right">预收款：</label>\r\n			<span class="col-xs-8">3000</span>\r\n		</div>\r\n		<div class="col-xs-3">\r\n			<label class="col-xs-4 text-right">已收：</label>\r\n			<span class="col-xs-8">3000</span>\r\n		</div>\r\n		<div class="col-xs-3">\r\n			<label class="col-xs-4 text-right">计划现收：</label>\r\n			<span class="col-xs-8">3000</span>\r\n		</div>\r\n	</div>\r\n	<div class="row border">\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th class="th-border">费用项</th>\r\n						<th class="th-border">数量</th>\r\n						<th class="th-border">单价</th>\r\n						<th class="th-border">金额</th>\r\n						<th class="th-border">说明</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody>\r\n					\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n</div>\r\n<div class="container-fluid hct-view-plan">\r\n	<div class="form-group" style="text-align: center;">\r\n		<button class="btn btn-xs btn-default T-btn-close">\r\n			<i class="ace-icon fa fa-times-circle"></i> 关闭 \r\n		</button>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});