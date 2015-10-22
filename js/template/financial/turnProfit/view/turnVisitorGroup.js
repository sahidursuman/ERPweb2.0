/*TMODJS:{"debug":true,"version":19,"md5":"ba443266ed05401a395f5283eeb1a6c8"}*/
define(function(require) {
    return require("../../../template")("financial/turnProfit/view/turnVisitorGroup", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, partnerAgency = $data.partnerAgency, touristGroup = $data.touristGroup, $each = $utils.$each, $out = ($data.transferFee, 
            $data.$index, "");
            return $out += '<div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px"> <table class="whereQ whereTwo" style="width: 100%"> <tr> <td colspan="4" class="HeadManage" style="text-align: left">我社转出主体信息</td> </tr> <tr> <td class="style-myself CheckPlan">同行地接</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 9, $out += $escape(partnerAgency.travelAgencyName), $out += '</td> </tr> <tr> <td class="style-myself CheckPlan">转客备注</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 13, $out += $escape(touristGroup.transRemark), $out += '</td> </tr> <tr> <td class="style-myself CheckPlan">应付</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 17, $out += $escape(touristGroup.transNeedPayAllMoney), $out += '</td> <td class="style-myself CheckPlan">已付</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 19, $out += $escape(touristGroup.transPayedMoney), $out += '</td> </tr> </table> </form> </div> <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 转客列表 </h5> </div> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th>类型</th> <th>说明</th> <th>数量</th> <th>转客单价</th> </tr> </thead> <tbody> <tr> <td>转客价</td> <td>大人</td> <td>', 
            $line = 52, $out += $escape(touristGroup.adultCount), $out += "</td> <td>", $line = 53, 
            $out += $escape(touristGroup.transAdultPrice), $out += "</td> </tr> <tr> <td>转客价</td> <td>小孩</td> <td>", 
            $line = 60, $out += $escape(touristGroup.childCount), $out += "</td> <td>", $line = 61, 
            $out += $escape(touristGroup.transChildPrice), $out += "</td> </tr>  ", $line = 65, 
            $each(touristGroup.touristGroupTransferFeeSet, function(transferFee) {
                $out += " ", $line = 66, null != transferFee && ($out += " <tr> <td>其他费用</td> <td>", 
                $line = 69, $out += $escape(transferFee.discribe), $out += "</td> <td>", $line = 70, 
                $out += $escape(transferFee.count), $out += "</td> <td>", $line = 71, $out += $escape(transferFee.otherPrice), 
                $out += "</td> </tr> ", $line = 73), $out += " ", $line = 74;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px">\r\n		<table class="whereQ whereTwo" style="width: 100%">\r\n			<tr>\r\n                <td colspan="4" class="HeadManage" style="text-align: left">我社转出主体信息</td>\r\n            </tr>\r\n			<tr>\r\n				<td class="style-myself CheckPlan">同行地接</td>\r\n				<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{partnerAgency.travelAgencyName}}</td>\r\n				</tr>\r\n			<tr>\r\n				<td class="style-myself CheckPlan">转客备注</td>\r\n				<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{touristGroup.transRemark}}</td>\r\n				</tr>\r\n			<tr>\r\n				<td class="style-myself CheckPlan">应付</td>\r\n				<td style="text-align: left;padding: 0px 0px 0px 10px">{{touristGroup.transNeedPayAllMoney}}</td>\r\n				<td class="style-myself CheckPlan">已付</td>\r\n				<td style="text-align: left;padding: 0px 0px 0px 10px">{{touristGroup.transPayedMoney}}</td>\r\n				</tr>\r\n		</table>\r\n	</form>\r\n</div>\r\n\r\n<div  class="col-xs-12">	\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class="widget-box ui-sortable-handle">\r\n					<div class="widget-header">\r\n						<h5 class="widget-title">\r\n							<i class="ace-icon fa fa-building"></i>\r\n							转客列表\r\n						</h5>\r\n					</div>\r\n\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList"> \r\n								<thead>\r\n							      	<tr>\r\n										<th>类型</th>\r\n										<th>说明</th>\r\n										<th>数量</th>\r\n										<th>转客单价</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									<tr>\r\n										<td>转客价</td>\r\n										<td>大人</td>\r\n										<td>{{touristGroup.adultCount}}</td>\r\n										<td>{{touristGroup.transAdultPrice}}</td>\r\n								\r\n									</tr>\r\n									\r\n									<tr>\r\n										<td>转客价</td>\r\n										<td>小孩</td>\r\n										<td>{{touristGroup.childCount}}</td>\r\n										<td>{{touristGroup.transChildPrice}}</td>	\r\n									</tr>  \r\n									\r\n								  <!-- 其他费用 -->\r\n								  {{each touristGroup.touristGroupTransferFeeSet as transferFee}}\r\n								    {{if transferFee!=null}}\r\n								      <tr>   \r\n								            <td>其他费用</td>  \r\n								            <td>{{transferFee.discribe}}</td>\r\n								            <td>{{transferFee.count}}</td>  \r\n								            <td>{{transferFee.otherPrice}}</td>\r\n								      </tr>\r\n								      {{/if}}  \r\n								  {{/each}} 										  \r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});