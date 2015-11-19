/*TMODJS:{"debug":true,"version":33,"md5":"cd0beb9e6e51fc9a53c363084c5cf335"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/transferDivide", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, lineProduct = $data.lineProduct, $each = $utils.$each, touristGroupList = $data.touristGroupList, $out = ($data.touristGroup, 
            $data.$index, "");
            return $out += '<div class="row"> <div class="col-xs-12 divideTouristMain"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <label class="pull-left control-label pitch no-padding-right">线路产品：', 
            $line = 5, $out += $escape(lineProduct.name), $out += '</label> <label class="pull-left control-label pitch no-padding-right">类别：', 
            $line = 6, $out += $escape(lineProduct.type), $out += '</label> <label class="pull-left control-label pitch no-padding-right">应用范围：', 
            $line = 7, 0 == lineProduct.customerType ? ($out += "散客", $line = 7) : ($out += "团体", 
            $line = 7), $out += '</label> <label class="pull-left control-label pitch no-padding-right">天数：', 
            $line = 8, $out += $escape(lineProduct.days), $out += '</label> <label class="pull-left control-label pitch no-padding-right">出游日期：', 
            $line = 9, $out += $escape(lineProduct.startTime), $out += '</label> <label class="pull-left control-label pitch no-padding-right">人数合计：大人', 
            $line = 10, $out += $escape(lineProduct.adultCount), $out += "小孩", $line = 10, $out += $escape(lineProduct.childCount), 
            $out += '</label> <label class="pull-left control-label pitch no-padding-right">已选人数：<span class="choosenAdultAndChildCount">大人0小孩0</span></label> </div> </form> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover all"> <thead> <tr class="bg-blur"> <th>来源</th> <th>联系人</th> <th>联系电话</th> <th>客源地</th> <th>年龄</th> <th>人数</th> <th>备注</th> <th width="135">操作</th> </tr> </thead> <tbody class="T-Transferdivide-list"> ', 
            $line = 29, $each(touristGroupList, function(touristGroup) {
                $out += ' <tr data-entity-id="', $line = 30, $out += $escape(touristGroup.id), $out += '" data-entity-adultCount="', 
                $line = 30, $out += $escape(touristGroup.adultCount), $out += '" data-entity-childCount="', 
                $line = 30, $out += $escape(touristGroup.childCount), $out += '"> <td>', $line = 31, 
                $out += $escape(touristGroup.partnerAgency.travelAgencyName), $out += "</td> <td>", 
                $line = 32, null != touristGroup.contactMember && ($line = 32, $out += $escape(touristGroup.contactMember.name), 
                $line = 32), $out += "</td> <td>", $line = 33, null != touristGroup.contactMember && ($line = 33, 
                $out += $escape(touristGroup.contactMember.mobileNumber), $line = 33), $out += "</td> <td>", 
                $line = 34, $out += $escape(touristGroup.areaData), $out += "</td> <td>", $line = 35, 
                $out += $escape(touristGroup.ageData), $out += "</td> <td>大人", $line = 36, $out += $escape(touristGroup.adultCount), 
                $out += "小孩", $line = 36, $out += $escape(touristGroup.childCount), $out += "</td> <td>", 
                $line = 37, $out += $escape(touristGroup.remark), $out += '</td> <td> <a data-entity-id="', 
                $line = 39, $out += $escape(touristGroup.id), $out += '" class="cursor T-groupView T-action"> 查看 </a> <a class=" btn-xs T-transferdivide-createTripPlan T-action"> 生成计划 </a> </td> </tr> ', 
                $line = 49;
            }), $out += " </tbody> </table> </div> </div> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">\r\n	<div class="col-xs-12 divideTouristMain">\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<label class="pull-left control-label pitch no-padding-right">线路产品：{{lineProduct.name}}</label>\r\n				<label class="pull-left control-label pitch no-padding-right">类别：{{lineProduct.type}}</label>\r\n				<label class="pull-left control-label pitch no-padding-right">应用范围：{{if lineProduct.customerType == 0}}散客{{else}}团体{{/if}}</label>\r\n				<label class="pull-left control-label pitch no-padding-right">天数：{{lineProduct.days}}</label>\r\n				<label class="pull-left control-label pitch no-padding-right">出游日期：{{lineProduct.startTime}}</label>\r\n				<label class="pull-left control-label pitch no-padding-right">人数合计：大人{{lineProduct.adultCount}}小孩{{lineProduct.childCount}}</label>\r\n				<label class="pull-left control-label pitch no-padding-right">已选人数：<span class="choosenAdultAndChildCount">大人0小孩0</span></label>\r\n			</div>\r\n		</form>\r\n		<div class="col-xs-12">\r\n				<table class="table table-striped table-bordered table-hover all">\r\n					<thead>\r\n						<tr class="bg-blur">\r\n							<th>来源</th>\r\n							<th>联系人</th>\r\n							<th>联系电话</th>\r\n							<th>客源地</th>\r\n							<th>年龄</th>\r\n							<th>人数</th>\r\n							<th>备注</th>\r\n							<th  width="135">操作</th>\r\n						</tr>\r\n					</thead>\r\n					<tbody class="T-Transferdivide-list">\r\n						{{each touristGroupList as touristGroup}}\r\n							<tr data-entity-id="{{touristGroup.id}}" data-entity-adultCount="{{touristGroup.adultCount}}" data-entity-childCount="{{touristGroup.childCount}}">\r\n								<td>{{touristGroup.partnerAgency.travelAgencyName}}</td>\r\n								<td>{{if touristGroup.contactMember!=null}}{{touristGroup.contactMember.name}}{{/if}}</td>\r\n								<td>{{if touristGroup.contactMember!=null}}{{touristGroup.contactMember.mobileNumber}}{{/if}}</td>\r\n								<td>{{touristGroup.areaData}}</td>\r\n								<td>{{touristGroup.ageData}}</td>\r\n								<td>大人{{touristGroup.adultCount}}小孩{{touristGroup.childCount}}</td>\r\n								<td>{{touristGroup.remark}}</td>\r\n								<td>\r\n									<a data-entity-id="{{touristGroup.id}}" class="cursor T-groupView T-action">\r\n										查看\r\n									</a>\r\n\r\n									<a class=" btn-xs T-transferdivide-createTripPlan T-action">\r\n										生成计划\r\n									</a>\r\n\r\n								</td>\r\n							</tr>\r\n						{{/each}}\r\n					</tbody>\r\n				</table>\r\n			</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});