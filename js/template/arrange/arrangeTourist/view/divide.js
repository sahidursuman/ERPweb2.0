/*TMODJS:{"debug":true,"version":114,"md5":"a1e8d4b72eaaa4103ba4cace6f207f8a"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/divide", function($data, $filename) {
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
            $out += '</label> <label class="pull-left control-label pitch no-padding-right">已选人数：<span class="choosenAdultAndChildCount">大人0小孩0</span></label> </div> </form> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover all"> <thead> <tr class="bg-blur"> <th> <label class="pos-rel"> <input type="checkbox" class="ace mainCheckBox"> <span class="lbl"></span> </label> </th> <th>来源</th> <th>联系人</th> <th>联系电话</th> <th>客源地</th> <th>年龄</th> <th>人数</th> <th>备注</th> <th width="50">操作</th> </tr> </thead> <tbody> ', 
            $line = 35, $each(touristGroupList, function(touristGroup) {
                $out += ' <tr data-entity-id="', $line = 36, $out += $escape(touristGroup.id), $out += '" data-entity-adultCount="', 
                $line = 36, $out += $escape(touristGroup.adultCount), $out += '" data-entity-childCount="', 
                $line = 36, $out += $escape(touristGroup.childCount), $out += '"> <td> <label class="pos-rel"> <input type="checkbox" class="ace touristGroupCheckBox"> <span class="lbl"></span> </label> </td> <td>', 
                $line = 43, $out += $escape(touristGroup.partnerAgency.travelAgencyName), $out += "</td> <td>", 
                $line = 44, null != touristGroup.contactMember && ($line = 44, $out += $escape(touristGroup.contactMember.name), 
                $line = 44), $out += "</td> <td>", $line = 45, null != touristGroup.contactMember && ($line = 45, 
                $out += $escape(touristGroup.contactMember.mobileNumber), $line = 45), $out += "</td> <td>", 
                $line = 46, $out += $escape(touristGroup.areaData), $out += "</td> <td>", $line = 47, 
                $out += $escape(touristGroup.ageData), $out += "</td> <td>大人", $line = 48, $out += $escape(touristGroup.adultCount), 
                $out += "小孩", $line = 48, $out += $escape(touristGroup.childCount), $out += "</td> <td>", 
                $line = 49, $out += $escape(touristGroup.remark), $out += '</td> <td> <a data-entity-id="', 
                $line = 51, $out += $escape(touristGroup.id), $out += '" class="cursor groupView"> 查看 </a> </td> </tr> ', 
                $line = 56;
            }), $out += ' </tbody> </table> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class=" btn-xs search-btn btn-createTripPlan"> <i class="ace-icon fa fa-file-text-o"></i> 生成计划 </button> <button class=" btn-xs search-btn btn-chooseTripPlan" style="margin-left:50px"> <i class="ace-icon fa fa-file-text "></i> 选择计划 </button> </div> </form> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">\r\n	<div class="col-xs-12 divideTouristMain">\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<label class="pull-left control-label pitch no-padding-right">线路产品：{{lineProduct.name}}</label>\r\n				<label class="pull-left control-label pitch no-padding-right">类别：{{lineProduct.type}}</label>\r\n				<label class="pull-left control-label pitch no-padding-right">应用范围：{{if lineProduct.customerType == 0}}散客{{else}}团体{{/if}}</label>\r\n				<label class="pull-left control-label pitch no-padding-right">天数：{{lineProduct.days}}</label>\r\n				<label class="pull-left control-label pitch no-padding-right">出游日期：{{lineProduct.startTime}}</label>\r\n				<label class="pull-left control-label pitch no-padding-right">人数合计：大人{{lineProduct.adultCount}}小孩{{lineProduct.childCount}}</label>\r\n				<label class="pull-left control-label pitch no-padding-right">已选人数：<span class="choosenAdultAndChildCount">大人0小孩0</span></label>\r\n			</div>\r\n		</form>\r\n		<div class="col-xs-12">\r\n				<table class="table table-striped table-bordered table-hover all">\r\n					<thead>\r\n						<tr class="bg-blur">\r\n							<th>\r\n								<label class="pos-rel">\r\n									<input type="checkbox" class="ace mainCheckBox">\r\n									<span class="lbl"></span>\r\n								</label>\r\n							</th>\r\n							<th>来源</th>\r\n							<th>联系人</th>\r\n							<th>联系电话</th>\r\n							<th>客源地</th>\r\n							<th>年龄</th>\r\n							<th>人数</th>\r\n							<th>备注</th>\r\n							<th  width="50">操作</th>\r\n						</tr>\r\n					</thead>\r\n					<tbody>\r\n						{{each touristGroupList as touristGroup}}\r\n							<tr data-entity-id="{{touristGroup.id}}" data-entity-adultCount="{{touristGroup.adultCount}}" data-entity-childCount="{{touristGroup.childCount}}">\r\n								<td>\r\n									<label class="pos-rel">\r\n										<input type="checkbox" class="ace touristGroupCheckBox">\r\n										<span class="lbl"></span>\r\n									</label>\r\n								</td>\r\n								<td>{{touristGroup.partnerAgency.travelAgencyName}}</td>\r\n								<td>{{if touristGroup.contactMember!=null}}{{touristGroup.contactMember.name}}{{/if}}</td>\r\n								<td>{{if touristGroup.contactMember!=null}}{{touristGroup.contactMember.mobileNumber}}{{/if}}</td>\r\n								<td>{{touristGroup.areaData}}</td>\r\n								<td>{{touristGroup.ageData}}</td>\r\n								<td>大人{{touristGroup.adultCount}}小孩{{touristGroup.childCount}}</td>\r\n								<td>{{touristGroup.remark}}</td>\r\n								<td>\r\n									<a data-entity-id="{{touristGroup.id}}" class="cursor groupView">\r\n										查看\r\n									</a>\r\n								</td>\r\n							</tr>\r\n						{{/each}}\r\n					</tbody>\r\n				</table>\r\n				<form class="form-horizontal" role="form" onsubmit="return false">\r\n					<div class="form-group" style="text-align: center;">\r\n						<button class=" btn-xs search-btn btn-createTripPlan">\r\n							<i class="ace-icon fa fa-file-text-o"></i>\r\n							生成计划\r\n						</button>\r\n						<button class=" btn-xs search-btn btn-chooseTripPlan" style="margin-left:50px">\r\n							<i class="ace-icon fa fa-file-text "></i>\r\n							选择计划\r\n						</button>\r\n					</div>\r\n				</form>\r\n			</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});