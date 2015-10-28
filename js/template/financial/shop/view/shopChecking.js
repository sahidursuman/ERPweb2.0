/*TMODJS:{"debug":true,"version":201,"md5":"b9b9f4cb2763d8b16cf4066574d4457f"}*/
define(function(require) {
    return require("../../../template")("financial/shop/view/shopChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, shopName = $data.shopName, $each = $utils.$each, yearList = $data.yearList, sumPerson = ($data.year, 
            $data.$index, $data.sumPerson), sumConsumeMoney = $data.sumConsumeMoney, sumTravelAgencyRebateMoney = $data.sumTravelAgencyRebateMoney, sumGuideRebateMoney = $data.sumGuideRebateMoney, sumCustomerRebateMoney = $data.sumCustomerRebateMoney, sumParkingRebateMoney = $data.sumParkingRebateMoney, sumRebateMoney = $data.sumRebateMoney, sumRealRebateMoney = $data.sumRealRebateMoney, WEB_IMG_URL_BIG = $data.WEB_IMG_URL_BIG, WEB_IMG_URL_SMALL = $data.WEB_IMG_URL_SMALL, shopList = $data.shopList, roleType = ($data.shop, 
            $data.index, $data.roleType), recordSize = ($data.detail, $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="row check shop-rs globalAdd"> <div class="col-xs-12 border borderNormal"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area editable editable-click" style="margin-top: 10px"> <div class="form-group"> <label style="float: left;margin: 5px auto auto 15px" class=" control-label "> 购物店：', 
            $line = 5, $out += $escape(shopName), $out += '</label> <label class="col-sm-1 control-label no-padding-right">账期：</label> <select class="col-sm-1" name="year"> ', 
            $line = 8, $each(yearList, function(year) {
                $out += ' <option value="', $line = 9, $out += $escape(year), $out += '">', $line = 9, 
                $out += $escape(year), $out += "</option> ", $line = 10;
            }), $out += ' </select> <label class="col-sm-1 control-label no-padding-right"></label> <select class="col-sm-1" name="month"> <option value="">全部</option> <option value="1">1月</option> <option value="2">2月</option> <option value="3">3月</option> <option value="4">4月</option> <option value="5">5月</option> <option value="6">6月</option> <option value="7">7月</option> <option value="8">8月</option> <option value="9">9月</option> <option value="10">10月</option> <option value="11">11月</option> <option value="12">12月</option> </select> <button class="btn-height btn-sm search-btn btn-shopshop-search" > <i class="ace-icon fa fa-search"></i> 搜索 </button> <button type="button" class="btn btn-sm btn-primary btn-success btn-shopExport" style="margin-left: 25px"> <span>导出报表</span> <i class="ace-icon fa fa-arrow-right icon-on-right"></i> </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group col-sm-12"> <label class="control-label pull-left" >总人数：', 
            $line = 42, $out += $escape(sumPerson), $out += '</label> <label class="control-label no-padding-right" style="margin-left: 15px">总购物金额：', 
            $line = 43, $out += $escape(sumConsumeMoney), $out += '</label> <label class="control-label no-padding-right" style="margin-left: 15px">总社佣：', 
            $line = 44, $out += $escape(sumTravelAgencyRebateMoney), $out += '</label> <label class="control-label no-padding-right" style="margin-left: 15px">总导佣：', 
            $line = 45, $out += $escape(sumGuideRebateMoney), $out += '</label> <label class="control-label no-padding-right" style="margin-left: 15px">总人数返佣：', 
            $line = 46, $out += $escape(sumCustomerRebateMoney), $out += '</label> <label class="control-label no-padding-right" style="margin-left: 15px">总停车返佣：', 
            $line = 47, $out += $escape(sumParkingRebateMoney), $out += '</label> <label class="control-label no-padding-right" style="margin-left: 15px">总账面返佣：', 
            $line = 48, $out += $escape(sumRebateMoney), $out += '</label> <label class="control-label no-padding-right" style="margin-left: 15px">总实际返佣：', 
            $line = 49, $out += $escape(sumRealRebateMoney), $out += '</label> </div> </form> </div> <input type="hidden" value="', 
            $line = 53, $out += $escape(WEB_IMG_URL_BIG), $out += '" name="WEB_IMG_URL_BIG" /> <input type="hidden" value="', 
            $line = 54, $out += $escape(WEB_IMG_URL_SMALL), $out += '" name="WEB_IMG_URL_SMALL" /> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px"> <thead> <tr> <th class="th-border"> 序号</th> <th class="th-border"> 团信息</th> <th class="th-border"> 进店日期</th> <th class="th-border"> 人数</th> <th class="th-border"> 商品</th> <th class="th-border"> 购物金额</th> <th class="th-border"> 社佣</th> <th class="th-border"> 导佣</th> <th class="th-border"> 人数返佣</th> <th class="th-border"> 停车返佣</th> <th class="th-border"> 单据</th> <th class="th-border"> 账面返佣</th> <th class="th-border"> <span class="necessary">*</span>实际返佣</th> <th class="th-border"> 说明</th> <th class="th-border"> 对账时间</th> <th class="th-border"> 对账人 </th> <th class="th-border">对账</th> </tr> </thead> <tbody> ', 
            $line = 79, $each(shopList, function(shop, index) {
                $out += ' <tr data-entity-id="', $line = 80, $out += $escape(shop.id), $out += '" data-entity-isConfirmAccount="', 
                $line = 80, $out += $escape(shop.isConfirmAccount), $out += '" data-entity-startTime="', 
                $line = 80, $out += $escape(shop.consumeStartTime), $out += '" data-entity-rebateMoney="', 
                $line = 80, $out += $escape(shop.rebateMoney), $out += '" data-entity-billRemark="', 
                $line = 80, $out += $escape(shop.billRemark), $out += '"> <td>', $line = 81, $out += $escape(index + 1), 
                $out += '</td> <td class="cost-detail" style="color: rgb(102,159,199)"> ', $line = 82, 
                $out += $escape(shop.tripNumber), $out += ",", $line = 82, $out += $escape(shop.lineProductName), 
                $out += ",", $line = 82, $out += $escape(shop.guideName), $out += "</td> <td>", 
                $line = 83, null == shop.consumeStartTime || "" == shop.consumeStartTime ? ($out += "-", 
                $line = 83) : ($line = 83, $out += $escape($helpers.dateFormat(shop.consumeStartTime, "yyyy-MM-dd")), 
                $line = 83), $out += "</td> <td>", $line = 84, $out += $escape(shop.adultCount), 
                $out += "大", $line = 84, $out += $escape(shop.childCount), $out += '小</td> <td><a href="#" class="seeGroup" style="margin-left:5px">展开</a></td> <td>', 
                $line = 86, $out += $escape(shop.consumeMoney), $out += "</td> <td>", $line = 87, 
                $out += $escape(shop.travelAgencyRebateMoney), $out += "</td> <td>", $line = 88, 
                $out += $escape(shop.guideRebateMoney), $out += "</td> <td>", $line = 89, $out += $escape(shop.sumCustomerRebateMoney), 
                $out += "</td> <td>", $line = 90, $out += $escape(shop.sumParkingRebateMoney), $out += "</td> <td>", 
                $line = 91, null != shop.billImages && "" != shop.billImages ? ($out += '<a href="#" class="shopImg" url="', 
                $line = 91, $out += $escape(shop.billImages), $out += '"><span>查看</span></a>', $line = 91) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 91), $out += "</td> <td>", $line = 92, $out += $escape(shop.rebateMoney), 
                $out += '</td> <td class="col-sm-1"> ', $line = 94, 0 == shop.isConfirmAccount ? ($out += ' <input data-entity-value="', 
                $line = 95, $out += $escape(shop.rebateMoney), $out += '" maxlength="9" type="text" name="realRebateMoney" value="', 
                $line = 95, $out += $escape(shop.rebateMoney), $out += '" class="col-sm-12" /> ', 
                $line = 96) : ($out += ' <input data-entity-value="', $line = 97, $out += $escape(shop.realRebateMoney), 
                $out += '" maxlength="1000" type="text" name="realRebateMoney" value="', $line = 97, 
                $out += $escape(shop.realRebateMoney), $out += '" class="col-sm-12" ', $line = 97, 
                1 == shop.isConfirmAccount && 1 != roleType && ($out += ' disabled = "true" ', $line = 97), 
                $out += "/> ", $line = 98), $out += ' </td> <td> <input data-entity-value="', $line = 101, 
                $out += $escape(shop.billRemark), $out += '" type="text" name="billRemark" value="', 
                $line = 101, $out += $escape(shop.billRemark), $out += '" class="col-sm-12" ', $line = 101, 
                1 == shop.isConfirmAccount && 1 != roleType && ($out += ' disabled = "true" ', $line = 101), 
                $out += "/> </td> <td> ", $line = 104, null != shop.checkTime && ($out += " ", $line = 105, 
                $out += $escape($helpers.dateFormat(shop.checkTime, "yyyy-MM-dd hh:mm:ss")), $out += " ", 
                $line = 106), $out += " </td> <td>", $line = 108, $out += $escape(shop.checkUserRealName), 
                $out += '</td> <td> <input type="checkbox" class="ace" name="isConfirmAccount" data-entity-checkStatus="', 
                $line = 110, $out += $escape(shop.isConfirmAccount), $out += '" ', $line = 110, 
                1 == shop.isConfirmAccount && ($out += 'checked="checked"', $line = 110), $out += " ", 
                $line = 110, 1 == shop.isConfirmAccount && 1 != roleType && ($out += ' disabled = "true" ', 
                $line = 110), $out += ' /> <span class="lbl"></span> </td> </tr> <tr class="hide"> <td colspan="17"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">商品</th> <th class="th-border">消费金额</th> <th class="th-border">社佣</th> <th class="th-border">导佣</th> </tr> </thead> <tbody> ', 
                $line = 127, $each(shop.detailList, function(detail, index) {
                    $out += " <tr> <td>", $line = 129, $out += $escape(index + 1), $out += "</td> <td>", 
                    $line = 130, $out += $escape(detail.name), $out += "</td> <td>", $line = 131, $out += $escape(detail.consumeMoney), 
                    $out += "</td> <td>", $line = 132, $out += $escape(detail.travelAgencyRebateMoney), 
                    $out += "</td> <td>", $line = 133, $out += $escape(detail.guideRebateMoney), $out += "</td> </tr> ", 
                    $line = 135;
                }), $out += " </tbody> </table> </td> </tr> ", $line = 140;
            }), $out += ' </tbody> </table> <div class="row pageMode" style="margin-top: 40px"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 146, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 155, 0 == totalPage ? ($out += " 0/0 ", $line = 157) : ($out += " ", $line = 158, 
            $out += $escape(pageNo + 1), $out += "/", $line = 158, $out += $escape(totalPage), 
            $out += " ", $line = 159), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> <div class="form-group col-sm-12 "> <label class="control-label pull-right" ><input type="checkbox" class="selectAll">全选</label> </div> <div class="clearfix"></div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary btn-shop-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary btn-confirm-shop-rs" style="margin-left:20px"> <i class="ace-icon fa fa-check-circle"></i> 确认 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row check shop-rs globalAdd">\r\n    <div class="col-xs-12 border borderNormal">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="search-area  editable editable-click" style="margin-top: 10px">\r\n                <div class="form-group"> <label style="float: left;margin: 5px auto auto 15px" class=" control-label "> 购物店：{{shopName}}</label>\r\n                    <label class="col-sm-1 control-label no-padding-right">账期：</label>\r\n                    <select class="col-sm-1" name="year">\r\n                        {{each yearList as year}}\r\n                        <option value="{{year}}">{{year}}</option>\r\n                        {{/each}}\r\n                    </select>\r\n                    <label class="col-sm-1 control-label no-padding-right"></label>\r\n                    <select class="col-sm-1" name="month">\r\n                        <option value="">全部</option>\r\n                        <option value="1">1月</option>\r\n                        <option value="2">2月</option>\r\n                        <option value="3">3月</option>\r\n                        <option value="4">4月</option>\r\n                        <option value="5">5月</option>\r\n                        <option value="6">6月</option>\r\n                        <option value="7">7月</option>\r\n                        <option value="8">8月</option>\r\n                        <option value="9">9月</option>\r\n                        <option value="10">10月</option>\r\n                        <option value="11">11月</option>\r\n                        <option value="12">12月</option>\r\n                    </select>\r\n \r\n                    <button class="btn-height btn-sm search-btn btn-shopshop-search" >\r\n                        <i class="ace-icon fa fa-search"></i>\r\n                       	 搜索\r\n                    </button>\r\n                    <button type="button" class="btn btn-sm btn-primary btn-success btn-shopExport" style="margin-left: 25px">\r\n							<span>导出报表</span>\r\n							<i class="ace-icon fa fa-arrow-right icon-on-right"></i>\r\n						</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group col-sm-12">\r\n                <label class="control-label pull-left" >总人数：{{sumPerson}}</label>\r\n                <label class="control-label no-padding-right" style="margin-left: 15px">总购物金额：{{sumConsumeMoney}}</label>\r\n                <label class="control-label no-padding-right" style="margin-left: 15px">总社佣：{{sumTravelAgencyRebateMoney}}</label>\r\n                <label class="control-label no-padding-right"  style="margin-left: 15px">总导佣：{{sumGuideRebateMoney}}</label>\r\n                <label class="control-label no-padding-right"  style="margin-left: 15px">总人数返佣：{{sumCustomerRebateMoney}}</label>\r\n                <label class="control-label no-padding-right"  style="margin-left: 15px">总停车返佣：{{sumParkingRebateMoney}}</label>\r\n                <label class="control-label no-padding-right"  style="margin-left: 15px">总账面返佣：{{sumRebateMoney}}</label>\r\n                <label class="control-label no-padding-right"  style="margin-left: 15px">总实际返佣：{{sumRealRebateMoney}}</label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <input type="hidden" value="{{WEB_IMG_URL_BIG}}" name="WEB_IMG_URL_BIG" />\r\n    <input type="hidden" value="{{WEB_IMG_URL_SMALL}}" name="WEB_IMG_URL_SMALL" />\r\n    <div class="clearfix"></div>\r\n    <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px">\r\n            <thead>\r\n            <tr>\r\n              <th class="th-border"> 序号</th>\r\n              <th class="th-border"> 团信息</th>\r\n              <th class="th-border"> 进店日期</th>\r\n              <th class="th-border"> 人数</th>\r\n              <th class="th-border"> 商品</th>\r\n              <th class="th-border"> 购物金额</th>\r\n              <th class="th-border"> 社佣</th>\r\n              <th class="th-border"> 导佣</th>\r\n              <th class="th-border"> 人数返佣</th>\r\n              <th class="th-border"> 停车返佣</th>\r\n              <th class="th-border"> 单据</th>\r\n              <th class="th-border"> 账面返佣</th>\r\n              <th class="th-border">  <span class="necessary">*</span>实际返佣</th>\r\n              <th class="th-border"> 说明</th>\r\n              <th class="th-border"> 对账时间</th>\r\n              <th class="th-border"> 对账人 </th>\r\n              <th class="th-border">对账</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            {{each shopList as shop index}}\r\n            <tr data-entity-id="{{shop.id}}" data-entity-isConfirmAccount="{{shop.isConfirmAccount}}" data-entity-startTime="{{shop.consumeStartTime}}" data-entity-rebateMoney="{{shop.rebateMoney}}" data-entity-billRemark="{{shop.billRemark}}">\r\n                <td>{{index+1}}</td>\r\n                <td class="cost-detail" style="color: rgb(102,159,199)"> {{shop.tripNumber}},{{shop.lineProductName}},{{shop.guideName}}</td>\r\n                <td>{{if shop.consumeStartTime == null || shop.consumeStartTime == ""}}-{{else}}{{shop.consumeStartTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n                <td>{{shop.adultCount}}大{{shop.childCount}}小</td>\r\n                <td><a href="#" class="seeGroup" style="margin-left:5px">展开</a></td>\r\n                <td>{{shop.consumeMoney}}</td>\r\n                <td>{{shop.travelAgencyRebateMoney}}</td>\r\n                <td>{{shop.guideRebateMoney}}</td>\r\n                <td>{{shop.sumCustomerRebateMoney}}</td>\r\n                <td>{{shop.sumParkingRebateMoney}}</td>\r\n                <td>{{if shop.billImages != null && shop.billImages !=""}}<a href="#" class="shopImg" url="{{shop.billImages}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n                <td>{{shop.rebateMoney}}</td>\r\n                <td class="col-sm-1">\r\n	               	{{if shop.isConfirmAccount == 0}}\r\n	                   <input data-entity-value="{{shop.rebateMoney}}"  maxlength="9" type="text" name="realRebateMoney" value="{{shop.rebateMoney}}" class="col-sm-12" />\r\n                   {{else}}\r\n                   	   <input data-entity-value="{{shop.realRebateMoney}}"  maxlength="1000" type="text" name="realRebateMoney" value="{{shop.realRebateMoney}}" class="col-sm-12" {{if shop.isConfirmAccount == 1 && roleType != 1 }} disabled = "true" {{/if}}/>\r\n                   {{/if}}\r\n				</td>\r\n                <td>\r\n                    <input data-entity-value="{{shop.billRemark}}" type="text" name="billRemark" value="{{shop.billRemark}}" class="col-sm-12" {{if shop.isConfirmAccount == 1 && roleType != 1 }} disabled = "true" {{/if}}/>\r\n                </td>\r\n                <td>\r\n                {{if shop.checkTime != null}}\r\n                	{{shop.checkTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}\r\n                {{/if}}\r\n                </td>\r\n                <td>{{shop.checkUserRealName}}</td>\r\n                <td>\r\n                    <input type="checkbox" class="ace" name="isConfirmAccount" data-entity-checkStatus="{{shop.isConfirmAccount}}" {{if shop.isConfirmAccount == 1}}checked="checked"{{/if}} {{if shop.isConfirmAccount == 1 && roleType != 1 }} disabled = "true" {{/if}} />\r\n                    <span class="lbl"></span>\r\n                </td>\r\n            </tr>\r\n            <tr class="hide">\r\n				<td colspan="17">\r\n					<table class="table table-striped table-bordered table-hover">\r\n							<thead>\r\n								<tr>\r\n									<th class="th-border">序号</th>\r\n									<th class="th-border">商品</th>\r\n									<th class="th-border">消费金额</th>\r\n									<th class="th-border">社佣</th>\r\n									<th class="th-border">导佣</th>\r\n								</tr>\r\n							</thead>  \r\n							<tbody>\r\n							   {{each shop.detailList as detail index}}\r\n								<tr>\r\n									<td>{{index+1}}</td>\r\n									<td>{{detail.name}}</td>\r\n									<td>{{detail.consumeMoney}}</td>\r\n									<td>{{detail.travelAgencyRebateMoney}}</td>\r\n									<td>{{detail.guideRebateMoney}}</td>\r\n								</tr>\r\n							  {{/each}}	\r\n							</tbody>\r\n					</table>\r\n				</td>\r\n			</tr>\r\n            {{/each}}\r\n            </tbody>\r\n        </table>\r\n\r\n    <div class="row pageMode" style="margin-top: 40px">\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n                <ul class="pagination">\r\n                    <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n                    <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n                    <li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n                        <a href="javascript:void(0)">\r\n                            {{if totalPage == 0}}\r\n                            0/0\r\n                            {{else}}\r\n                            {{pageNo+1}}/{{totalPage}}\r\n                            {{/if}}\r\n                        </a>\r\n                    </li>\r\n                    <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n                    <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n        <div class="form-group col-sm-12 ">\r\n            <label class="control-label pull-right"  ><input type="checkbox" class="selectAll">全选</label>\r\n        </div>\r\n        <div class="clearfix"></div>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group" style="text-align: center;">\r\n            	<button class="btn btn-xs btn-primary btn-shop-close">\r\n                    <i class="ace-icon fa fa-times-circle"></i>\r\n                   	 关闭\r\n                </button>\r\n                <button class="btn btn-xs btn-primary btn-confirm-shop-rs"  style="margin-left:20px">\r\n                    <i class="ace-icon fa fa-check-circle"></i>\r\n                   	 确认\r\n                </button>\r\n            </div>\r\n        </form>\r\n\r\n\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});