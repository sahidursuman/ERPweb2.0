/*TMODJS:{"debug":true,"version":198,"md5":"57bdf949f0e237a04ea44cbe6bccb3f6"}*/
define(function(require) {
    return require("../../../template")("resource/shop/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, shop = $data.shop, $each = $utils.$each, $out = ($data.shopPolicy, 
            $data.$index, $data.hopTimeArea, $data.i, $data.shopCostRebate, "");
            return $out += ' <form class="form-horizontal shopMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereOne"> <tr> <td colspan="4" class="HeadManage">商家主体信息</td> </tr> <tr> <td class="style-myself">商家名称：</td> <td class="styleOne-self">', 
            $line = 9, $out += $escape(shop.name), $out += '</td> <td class="style-myself">是否启用：</td> <td class="styleOne-self">', 
            $line = 11, 0 == shop.status ? ($out += " 已停用 ", $line = 13) : ($out += " 已启用 ", 
            $line = 15), $out += '</td> </tr> <tr> <td class="style-myself">联系人：</td> <td class="styleOne-self">', 
            $line = 19, $out += $escape(shop.managerName), $out += '</td> <td class="style-myself">联系电话：</td> <td class="styleOne-self">', 
            $line = 21, $out += $escape(shop.mobileNumber), $out += '</td> </tr> <tr> <td class="style-myself">座机号码：</td> <td class="styleOne-self">', 
            $line = 25, $out += $escape(shop.telNumber), $out += '</td> <td class="style-myself">传真号码：</td> <td class="styleOne-self">', 
            $line = 27, $out += $escape(shop.faxNumber), $out += '</td> </tr> <tr> <td class="style-myself style-myselfOne">人数返佣(元/人)：</td> <td class="styleOne-self">', 
            $line = 31, $out += $escape(shop.customerRebateMoney), $out += '</td> <td class="style-myself style-myselfOne">停车返佣(辆/人)：</td> <td class="styleOne-self">', 
            $line = 33, $out += $escape(shop.parkingRebateMoney), $out += ' </td> </tr> <tr> <td class="style-myself">商家所在省市：</td> <td class="styleOne-self" colspan="3">', 
            $line = 37, null != shop.province && ($out += " ", $line = 38, $out += $escape(shop.province.name), 
            $out += " ", $line = 39), $out += " ", $line = 40, null != shop.city && ($out += " -", 
            $line = 41, $out += $escape(shop.city.name), $out += " ", $line = 42), $out += " ", 
            $line = 43, null != shop.district && ($out += " -", $line = 44, $out += $escape(shop.district.name), 
            $out += " ", $line = 45), $out += '</td> </tr> <tr> <td class="style-myself">详细地址：</td> <td class="styleOne-self" colspan="3">', 
            $line = 49, $out += $escape(shop.street), $out += '</td> </tr> <tr> <td class="style-myself">商家简介：</td> <td class="styleOne-self" colspan="3">', 
            $line = 53, $out += $escape(shop.remark), $out += '</td> </tr> </table> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereTwo"> <tr> <td colspan="8" class="HeadManage" style="text-align: left">商品列表</td> </tr> <tr> <td class="style-myself">商品名称</td> <td class="style-myself">针对客源</td> <td class="style-myself">时间范围</td> <td class="style-myself">时间区间</td> <td class="style-myself">导佣比例(%)</td> <td class="style-myself">社佣比例(%)</td> <td>备注</td> </tr> ', 
            $line = 71, $each(shop.shopPolicyList, function(shopPolicy) {
                $out += ' <tr data-entity-id="', $line = 72, $out += $escape(shopPolicy.id), $out += '"> <td> ', 
                $line = 74, $out += $escape(shopPolicy.name), $out += " </td> <td> ", $line = 77, 
                0 == shopPolicy.customerType ? ($out += " 散客 ", $line = 79) : ($out += " 团体 ", $line = 81), 
                $out += ' </td> <td class="rangeTimeWidth" > ', $line = 84, $each(shopPolicy.shopTimeAreaList, function(hopTimeArea) {
                    $out += " <div> ", $line = 86, $out += $escape($helpers.dateFormat(hopTimeArea.startTime, "yyyy-MM-dd")), 
                    $out += "至", $line = 86, $out += $escape($helpers.dateFormat(hopTimeArea.endTime, "yyyy-MM-dd")), 
                    $out += " </div> ", $line = 88;
                }), $out += ' </td> <td class="no-padding"> ', $line = 91, $each(shopPolicy.shopTimeAreaList, function(hopTimeArea) {
                    $out += " ", $line = 93, $each(hopTimeArea.shopCostRebateList, function(shopCostRebate) {
                        $out += " ", $line = 95, $out += $escape(shopCostRebate.costMoneyStart), $out += "至", 
                        $line = 95, $out += $escape(shopCostRebate.costMoneyEnd), $out += " ", $line = 97;
                    }), $out += " ", $line = 99;
                }), $out += ' </td> <td class="no-padding"> ', $line = 102, $each(shopPolicy.shopTimeAreaList, function(hopTimeArea, i) {
                    $out += ' <div class="col-sm-12', $line = 103, 0 != i && ($out += " border-top", 
                    $line = 103), $out += '" style="padding-bottom: 7px;"> ', $line = 104, $each(hopTimeArea.shopCostRebateList, function(shopCostRebate) {
                        $out += ' <label class="col-sm-12 control-label center"> ', $line = 106, $out += $escape($helpers.toFixed(100 * shopCostRebate.guideRate)), 
                        $out += " </label> ", $line = 108;
                    }), $out += " </div> ", $line = 110;
                }), $out += ' </td> <td class="no-padding"> ', $line = 113, $each(shopPolicy.shopTimeAreaList, function(hopTimeArea, i) {
                    $out += ' <div class="col-sm-12', $line = 114, 0 != i && ($out += " border-top", 
                    $line = 114), $out += '" style="padding-bottom: 7px;"> ', $line = 115, $each(hopTimeArea.shopCostRebateList, function(shopCostRebate) {
                        $out += ' <label class="col-sm-12 control-label center"> ', $line = 117, $out += $escape($helpers.toFixed(100 * shopCostRebate.travelAgencyRate)), 
                        $out += " </label> ", $line = 119;
                    }), $out += " </div> ", $line = 121;
                }), $out += ' </td> <td class="remarkWidth">', $line = 123, $out += $escape(shopPolicy.remark), 
                $out += "</td> </tr> ", $line = 125;
            }), $out += " </table> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '\r\n  <form class="form-horizontal shopMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n	  <table class="whereQ whereOne">\r\n		  <tr>\r\n			  <td colspan="4" class="HeadManage">商家主体信息</td>\r\n		  </tr>\r\n		  <tr>\r\n			  <td class="style-myself">商家名称：</td>\r\n			  <td class="styleOne-self">{{shop.name}}</td>\r\n			  <td class="style-myself">是否启用：</td>\r\n			  <td class="styleOne-self">{{if shop.status == 0}}\r\n				  已停用\r\n				  {{else}}\r\n				  已启用\r\n				  {{/if}}</td>\r\n		  </tr>\r\n		  <tr>\r\n			  <td class="style-myself">联系人：</td>\r\n			  <td class="styleOne-self">{{shop.managerName}}</td>\r\n			  <td class="style-myself">联系电话：</td>\r\n			  <td class="styleOne-self">{{shop.mobileNumber}}</td>\r\n		  </tr>\r\n		  <tr>\r\n			  <td class="style-myself">座机号码：</td>\r\n			  <td class="styleOne-self">{{shop.telNumber}}</td>\r\n			  <td class="style-myself">传真号码：</td>\r\n			  <td class="styleOne-self">{{shop.faxNumber}}</td>\r\n		  </tr>\r\n		  <tr>\r\n			  <td class="style-myself style-myselfOne">人数返佣(元/人)：</td>\r\n			  <td class="styleOne-self">{{shop.customerRebateMoney}}</td>\r\n			  <td class="style-myself style-myselfOne">停车返佣(辆/人)：</td>\r\n			  <td class="styleOne-self">{{shop.parkingRebateMoney}}	</td>\r\n		  </tr>\r\n		  <tr>\r\n			  <td class="style-myself">商家所在省市：</td>\r\n			  <td class="styleOne-self" colspan="3">{{if shop.province != null}}\r\n				  {{shop.province.name}}\r\n				  {{/if}}\r\n				  {{if shop.city != null}}\r\n				  -{{shop.city.name}}\r\n				  {{/if}}\r\n				  {{if shop.district != null}}\r\n				  -{{shop.district.name}}\r\n				  {{/if}}</td>\r\n		  </tr>\r\n		  <tr>\r\n			  <td class="style-myself">详细地址：</td>\r\n			  <td class="styleOne-self" colspan="3">{{shop.street}}</td>\r\n		  </tr>\r\n		  <tr>\r\n			  <td class="style-myself">商家简介：</td>\r\n			  <td class="styleOne-self" colspan="3">{{shop.remark}}</td>\r\n		  </tr>\r\n	  </table>\r\n	</form>\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<table class="whereQ whereTwo">\r\n			<tr>\r\n				<td colspan="8" class="HeadManage" style="text-align: left">商品列表</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">商品名称</td>\r\n				<td class="style-myself">针对客源</td>\r\n				<td class="style-myself">时间范围</td>\r\n				<td class="style-myself">时间区间</td>\r\n				<td class="style-myself">导佣比例(%)</td>\r\n				<td class="style-myself">社佣比例(%)</td>\r\n				<td>备注</td>\r\n			</tr>\r\n			{{each shop.shopPolicyList as shopPolicy}}\r\n			<tr data-entity-id="{{shopPolicy.id}}">\r\n				<td>\r\n					{{shopPolicy.name}}\r\n				</td>\r\n				<td>\r\n					{{if shopPolicy.customerType == 0}}\r\n						散客\r\n						{{else}}\r\n						团体\r\n						{{/if}}\r\n				</td>\r\n				<td class="rangeTimeWidth" >\r\n					{{each shopPolicy.shopTimeAreaList as hopTimeArea i}}\r\n					<div>\r\n						{{hopTimeArea.startTime | dateFormat:\'yyyy-MM-dd\'}}至{{hopTimeArea.endTime | dateFormat:\'yyyy-MM-dd\'}}\r\n					</div>\r\n					{{/each}}\r\n				</td>\r\n				<td class="no-padding">\r\n					{{each shopPolicy.shopTimeAreaList as hopTimeArea i}}\r\n\r\n						{{each hopTimeArea.shopCostRebateList as shopCostRebate}}\r\n\r\n							{{shopCostRebate.costMoneyStart}}至{{shopCostRebate.costMoneyEnd}}\r\n\r\n						{{/each}}\r\n\r\n					{{/each}}\r\n				</td>\r\n				<td class="no-padding">\r\n					{{each shopPolicy.shopTimeAreaList as hopTimeArea i}}\r\n					<div class="col-sm-12{{if i != 0}} border-top{{/if}}" style="padding-bottom: 7px;">\r\n						{{each hopTimeArea.shopCostRebateList as shopCostRebate}}\r\n						<label class="col-sm-12 control-label center">\r\n							{{shopCostRebate.guideRate*100 | toFixed}}\r\n						</label>\r\n						{{/each}}\r\n					</div>\r\n					{{/each}}\r\n				</td>\r\n				<td class="no-padding">\r\n					{{each shopPolicy.shopTimeAreaList as hopTimeArea i}}\r\n					<div class="col-sm-12{{if i != 0}} border-top{{/if}}" style="padding-bottom: 7px;">\r\n						{{each hopTimeArea.shopCostRebateList as shopCostRebate}}\r\n						<label class="col-sm-12 control-label center">\r\n							{{shopCostRebate.travelAgencyRate*100 | toFixed}}\r\n						</label>\r\n						{{/each}}\r\n					</div>\r\n					{{/each}}\r\n				</td>\r\n				<td class="remarkWidth">{{shopPolicy.remark}}</td>\r\n			</tr>\r\n			{{/each}}\r\n		</table>\r\n	</form>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});