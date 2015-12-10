/*TMODJS:{"debug":true,"version":278,"md5":"cf0bec0b5091172b333474b1c9da566e"}*/
define(function(require) {
    return require("../../../template")("resource/selfpay/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, selfpay = $data.selfpay, $each = $utils.$each, $out = ($data.shopPolicy, 
            $data.$index, $data.hopTimeArea, $data.i, "");
            return $out += ' <form class="form-horizontal shopMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereOne tableWidthImp"> <tr> <td colspan="4" class="HeadManage">商家主体信息</td> </tr> <tr> <td class="style-myself">商家名称：</td> <td class="styleOne-self">', 
            $line = 9, $out += $escape(selfpay.name), $out += '</td> <td class="style-myself">是否启用：</td> <td class="styleOne-self">', 
            $line = 11, 0 == selfpay.status ? ($out += " 已停用 ", $line = 13) : ($out += " 已启用 ", 
            $line = 15), $out += '</td> </tr> <tr> <td class="style-myself">联系人：</td> <td class="styleOne-self">', 
            $line = 19, $out += $escape(selfpay.managerName), $out += '</td> <td class="style-myself">联系电话：</td> <td class="styleOne-self">', 
            $line = 21, $out += $escape(selfpay.mobileNumber), $out += '</td> </tr> <tr> <td class="style-myself">座机号码：</td> <td class="styleOne-self">', 
            $line = 25, $out += $escape(selfpay.telNumber), $out += '</td> <td class="style-myself">传真号码：</td> <td class="styleOne-self">', 
            $line = 27, $out += $escape(selfpay.faxNumber), $out += '</td> </tr> <tr> <td class="style-myselfOne">人数返佣(元/人)：</td> <td class="styleOne-self">', 
            $line = 31, $out += $escape(selfpay.customerRebateMoney), $out += '</td> <td class="style-myself">商家所在省市：</td> <td class="styleOne-self">', 
            $line = 33, null != selfpay.province && ($out += " ", $line = 34, $out += $escape(selfpay.province.name), 
            $out += " ", $line = 35), $out += " ", $line = 36, null != selfpay.city && ($out += " -", 
            $line = 37, $out += $escape(selfpay.city.name), $out += " ", $line = 38), $out += " ", 
            $line = 39, null != selfpay.district && ($out += " -", $line = 40, $out += $escape(selfpay.district.name), 
            $out += " ", $line = 41), $out += ' </td> </tr> <tr> <td class="style-myself">详细地址：</td> <td class="styleOne-self" colspan="3">', 
            $line = 46, $out += $escape(selfpay.street), $out += '</td> </tr> <tr> <td class="style-myself">商家简介：</td> <td class="styleOne-self" colspan="3">', 
            $line = 50, $out += $escape(selfpay.remark), $out += '</td> </tr> </table> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereTwo tableWidthImp"> <tr> <td colspan="8" class="HeadManage" style="text-align: left">商品列表</td> </tr> <tr> <td class="style-myself">商品名称</td> <td class="style-myself">针对客源</td> <td class="style-myself">时间范围</td> <td class="style-myself">内部价格（元）</td> <td class="style-myself">人数返佣（人/元）</td> <td class="style-myself">市场价格（元）</td> <td class="style-myself">导佣比例(%)</td> <td class="style-myself">社佣比例(%)</td> <td>备注</td> </tr> ', 
            $line = 70, $each(selfpay.selfPayItemList, function(shopPolicy) {
                $out += ' <tr data-entity-id="', $line = 71, $out += $escape(shopPolicy.id), $out += '"> <td> ', 
                $line = 73, $out += $escape(shopPolicy.name), $out += " </td> <td> ", $line = 76, 
                0 == shopPolicy.customerType ? ($out += " 散客 ", $line = 78) : ($out += " 团体 ", $line = 80), 
                $out += ' </td> <td class="rangeTimeWidth" > <div> 日常价格 </div> ', $line = 86, $each(shopPolicy.SelfPayRebateList, function(hopTimeArea) {
                    $out += " <div> ", $line = 88, $out += $escape($helpers.dateFormat(hopTimeArea.startTime, "yyyy-MM-dd")), 
                    $out += "至", $line = 88, $out += $escape($helpers.dateFormat(hopTimeArea.endTime, "yyyy-MM-dd")), 
                    $out += " </div> ", $line = 90;
                }), $out += ' </td> <td class="no-padding"> ', $line = 93, $out += $escape(shopPolicy.normalInnerPrice), 
                $out += "<br> ", $line = 94, $each(shopPolicy.SelfPayRebateList, function(hopTimeArea) {
                    $out += " ", $line = 95, $out += $escape(hopTimeArea.price), $out += "<br> ", $line = 96;
                }), $out += ' </td> <td>--</td> <td class="no-padding"> ', $line = 102, $out += $escape(shopPolicy.normalMarketPrice), 
                $out += "<br> ", $line = 103, $each(shopPolicy.SelfPayRebateList, function(hopTimeArea) {
                    $out += " ", $line = 104, $out += $escape(hopTimeArea.marketPrice), $out += "<br> ", 
                    $line = 105;
                }), $out += ' </td> <td class="no-padding"> <label class="col-sm-12 control-label center"> ', 
                $line = 109, $out += $escape($helpers.toFixed(100 * shopPolicy.normalGuideRate)), 
                $out += " </label> ", $line = 111, $each(shopPolicy.SelfPayRebateList, function(hopTimeArea) {
                    $out += ' <label class="col-sm-12 control-label center"> ', $line = 113, $out += $escape($helpers.toFixed(100 * hopTimeArea.guideRate)), 
                    $out += " </label> ", $line = 115;
                }), $out += ' </td> <td class="no-padding"> <label class="col-sm-12 control-label center"> ', 
                $line = 119, $out += $escape($helpers.toFixed(100 * shopPolicy.normalTravelAgencyRate)), 
                $out += " </label> ", $line = 121, $each(shopPolicy.SelfPayRebateList, function(hopTimeArea) {
                    $out += ' <label class="col-sm-12 control-label center"> ', $line = 123, $out += $escape($helpers.toFixed(100 * hopTimeArea.travelAgencyRate)), 
                    $out += " </label> ", $line = 125;
                }), $out += ' </td> <td class="remarkWidth">', $line = 127, $out += $escape(shopPolicy.remark), 
                $out += "</td> </tr> ", $line = 129;
            }), $out += " </table> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '\r\n<form class="form-horizontal shopMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n	<table class="whereQ whereOne tableWidthImp">\r\n		<tr>\r\n			<td colspan="4" class="HeadManage">商家主体信息</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">商家名称：</td>\r\n			<td class="styleOne-self">{{selfpay.name}}</td>\r\n			<td class="style-myself">是否启用：</td>\r\n			<td class="styleOne-self">{{if selfpay.status == 0}}\r\n				已停用\r\n				{{else}}\r\n				已启用\r\n				{{/if}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">联系人：</td>\r\n			<td class="styleOne-self">{{selfpay.managerName}}</td>\r\n			<td class="style-myself">联系电话：</td>\r\n			<td class="styleOne-self">{{selfpay.mobileNumber}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">座机号码：</td>\r\n			<td class="styleOne-self">{{selfpay.telNumber}}</td>\r\n			<td class="style-myself">传真号码：</td>\r\n			<td class="styleOne-self">{{selfpay.faxNumber}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myselfOne">人数返佣(元/人)：</td>\r\n			<td class="styleOne-self">{{selfpay.customerRebateMoney}}</td>\r\n			<td class="style-myself">商家所在省市：</td>\r\n			<td class="styleOne-self">{{if selfpay.province != null}}\r\n				{{selfpay.province.name}}\r\n				{{/if}}\r\n				{{if selfpay.city != null}}\r\n				-{{selfpay.city.name}}\r\n				{{/if}}\r\n				{{if selfpay.district != null}}\r\n				-{{selfpay.district.name}}\r\n				{{/if}}\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">详细地址：</td>\r\n			<td class="styleOne-self" colspan="3">{{selfpay.street}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">商家简介：</td>\r\n			<td class="styleOne-self" colspan="3">{{selfpay.remark}}</td>\r\n		</tr>\r\n	</table>\r\n</form>\r\n<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n	<table class="whereQ whereTwo tableWidthImp">\r\n		<tr>\r\n			<td colspan="8" class="HeadManage" style="text-align: left">商品列表</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">商品名称</td>\r\n			<td class="style-myself">针对客源</td>\r\n			<td class="style-myself">时间范围</td>\r\n			<td class="style-myself">内部价格（元）</td>\r\n			<td class="style-myself">人数返佣（人/元）</td>\r\n			<td class="style-myself">市场价格（元）</td>\r\n			<td class="style-myself">导佣比例(%)</td>\r\n			<td class="style-myself">社佣比例(%)</td>\r\n			<td>备注</td>\r\n		</tr>\r\n		{{each selfpay.selfPayItemList as shopPolicy}}\r\n		<tr data-entity-id="{{shopPolicy.id}}">\r\n			<td>\r\n				{{shopPolicy.name}}\r\n			</td>\r\n			<td>\r\n				{{if shopPolicy.customerType == 0}}\r\n				散客\r\n				{{else}}\r\n				团体\r\n				{{/if}}\r\n			</td>\r\n			<td class="rangeTimeWidth" > \r\n				<div>\r\n					日常价格\r\n				</div>\r\n				{{each shopPolicy.SelfPayRebateList as hopTimeArea i}}\r\n				<div>\r\n					{{hopTimeArea.startTime | dateFormat:\'yyyy-MM-dd\'}}至{{hopTimeArea.endTime | dateFormat:\'yyyy-MM-dd\'}}\r\n				</div>\r\n				{{/each}}\r\n			</td>\r\n			<td class="no-padding">\r\n				{{shopPolicy.normalInnerPrice}}<br>\r\n				{{each shopPolicy.SelfPayRebateList as hopTimeArea}}\r\n					{{hopTimeArea.price}}<br>\r\n				{{/each}}\r\n			</td>\r\n\r\n			<td>--</td>\r\n\r\n			<td class="no-padding">\r\n				{{shopPolicy.normalMarketPrice}}<br>\r\n				{{each shopPolicy.SelfPayRebateList as hopTimeArea i}}\r\n					{{hopTimeArea.marketPrice}}<br>\r\n				{{/each}}\r\n			</td>\r\n			<td class="no-padding">\r\n				<label class="col-sm-12 control-label center">\r\n					{{shopPolicy.normalGuideRate*100 | toFixed}}\r\n				</label>\r\n				{{each shopPolicy.SelfPayRebateList as hopTimeArea i}}\r\n					<label class="col-sm-12 control-label center">\r\n						{{hopTimeArea.guideRate*100 | toFixed}}\r\n					</label>\r\n				{{/each}}\r\n			</td>\r\n			<td class="no-padding">\r\n				<label class="col-sm-12 control-label center">\r\n					{{shopPolicy.normalTravelAgencyRate*100 | toFixed}} \r\n				</label>\r\n				{{each shopPolicy.SelfPayRebateList as hopTimeArea i}}\r\n					<label class="col-sm-12 control-label center">\r\n						{{hopTimeArea.travelAgencyRate*100 | toFixed}} \r\n					</label>\r\n				{{/each}}\r\n			</td>\r\n			<td class="remarkWidth">{{shopPolicy.remark}}</td>\r\n		</tr>\r\n		{{/each}}\r\n	</table>\r\n</form>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});