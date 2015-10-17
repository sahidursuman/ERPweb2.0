/*TMODJS:{"debug":true,"version":154,"md5":"8d1d89c27f370114e0d6a9002db870fa"}*/
define(function(require) {
    return require("../../../template")("financial/guide/view/guideChecking", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, guideName = $data.guideName, $each = $utils.$each, yearList = $data.yearList, sumGuidePreMoney = ($data.year, 
            $data.$index, $data.sumGuidePreMoney), sumGuideIncomeMoney = $data.sumGuideIncomeMoney, sumGuideNowPayedMoney = $data.sumGuideNowPayedMoney, sumGuideFee = $data.sumGuideFee, sumGuideRebateMoney = $data.sumGuideRebateMoney, sumBackGuideMoney = $data.sumBackGuideMoney, sumRealBackGuideMoney = $data.sumRealBackGuideMoney, guideList = $data.guideList, roleType = ($data.guide, 
            $data.roleType), recordSize = $data.recordSize, totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="row check globalAdd"> <div class="col-xs-12 border borderNormal " > <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area editable editable-click" style="margin-top: 10px"> <div class="form-group"> <label style="float: left;margin: 5px auto auto 15px" class=" control-label "> 导游：', 
            $line = 5, $out += $escape(guideName), $out += '</label> <label class="col-sm-1 control-label no-padding-right">账期：</label> <select class="col-sm-1" name="year"> ', 
            $line = 8, $each(yearList, function(year) {
                $out += ' <option value="', $line = 9, $out += $escape(year), $out += '">', $line = 9, 
                $out += $escape(year), $out += "</option> ", $line = 10;
            }), $out += ' </select> <label class="col-sm-1 control-label no-padding-right"></label> <select class="col-sm-1" name="month"> <option value="">全部</option> <option value="1">1月</option> <option value="2">2月</option> <option value="3">3月</option> <option value="4">4月</option> <option value="5">5月</option> <option value="6">6月</option> <option value="7">7月</option> <option value="8">8月</option> <option value="9">9月</option> <option value="10">10月</option> <option value="11">11月</option> <option value="12">12月</option> </select> <button class=" btn-sm btn-guideChecking-search search-btn btn-height" style="margin-left: 60px"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <button type="button" class="btn btn-sm btn-primary btn-success btn-guideExport" style="margin-left: 20px"> <span>导出报表</span> <i class="ace-icon fa fa-arrow-right icon-on-right"></i> </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group col-sm-10"> <label class=" control-label pull-left" style="margin-left: 5px">总预支款：', 
            $line = 42, $out += $escape(sumGuidePreMoney), $out += '</label> <label class="col-sm-1 control-label no-padding-right">总团队收入：', 
            $line = 43, $out += $escape(sumGuideIncomeMoney), $out += '</label> <label class="col-sm-1 control-label no-padding-right">总导游现付：', 
            $line = 44, $out += $escape(sumGuideNowPayedMoney), $out += '</label> <label class="col-sm-1 control-label no-padding-right">总导服费：', 
            $line = 45, $out += $escape(sumGuideFee), $out += '</label> <label class="col-sm-1 control-label no-padding-right">总导游返佣：', 
            $line = 46, $out += $escape(sumGuideRebateMoney), $out += '</label> <label class="col-sm-1 control-label no-padding-right">总退补款：', 
            $line = 47, $out += $escape(sumBackGuideMoney), $out += '</label> <label class="col-sm-2 control-label no-padding-right">总实际退补：', 
            $line = 48, $out += $escape(sumRealBackGuideMoney), $out += '</label> </div> </form> </div> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px"> <thead> <tr> <th class="th-border">团号</th> <th class="th-border">线路</th> <th class="th-border">预支款</th> <th class="th-border">现收团款</th> <th class="th-border">其他收入</th> <th class="th-border">导游现付</th> <th class="th-border">导服费</th> <th class="th-border">管理费</th> <th class="th-border">购物导拥</th> <th class="th-border">自费导拥</th> <th class="th-border">退补款</th> <th class="th-border col-sm-1" > <span class="necessary">*</span>实际退补款</th> <th class="th-border col-sm-1" >说明</th> <th class="th-border col-sm-1" >对账时间</th> <th class="th-border">对账人</th> <th class="th-border">对账</th> </tr> </thead> <tbody> ', 
            $line = 75, $each(guideList, function(guide) {
                $out += ' <tr data-entity-id="', $line = 76, $out += $escape(guide.id), $out += '" data-entity-isConfirmAccount="', 
                $line = 76, $out += $escape(guide.isConfirmAccount), $out += '" data-entity-startTime="', 
                $line = 76, $out += $escape(guide.startTime), $out += '"> <td> <a class="cost-detail" data-entity-id="', 
                $line = 78, $out += $escape(guide.id), $out += '" onsubmit="return false" href="javascript:void(0)">', 
                $line = 78, $out += $escape(guide.tripNumber), $out += "</a> </td> <td>", $line = 80, 
                $out += $escape(guide.lineProductName), $out += "</td> <td>", $line = 81, $out += $escape(guide.guidePreMoney), 
                $out += "</td> <td>", $line = 82, $out += $escape(guide.guideNowIncomeMoney), $out += "</td> <td>", 
                $line = 83, $out += $escape(guide.otherIncomeMoney), $out += "</td> <td>", $line = 84, 
                $out += $escape(guide.guideNowPayedMoney), $out += "</td> <td>", $line = 85, $out += $escape(guide.guideFee), 
                $out += "</td> <td>", $line = 86, $out += $escape(guide.manageFee), $out += "</td> <td>", 
                $line = 87, $out += $escape(guide.guideShopRebateMoney), $out += "</td> <td>", $line = 88, 
                $out += $escape(guide.guideSelfpayRebateMoney), $out += "</td> <td>", $line = 89, 
                $out += $escape(guide.backGuideMoney), $out += '</td> <td class="col-sm-1"> <input data-entity-value="', 
                $line = 91, $out += $escape(guide.realBackGuideMoney), $out += '" maxlength="9" type="text" name="realBackGuideMoney" value="', 
                $line = 91, $out += $escape(guide.realBackGuideMoney), $out += '" class="col-sm-12" ', 
                $line = 91, 1 == guide.isConfirmAccount && 1 != roleType && ($out += ' disabled = "true" ', 
                $line = 91), $out += '/> </td> <td> <input data-entity-value="', $line = 94, $out += $escape(guide.billRemark), 
                $out += '" maxlength="1000" type="text" name="billRemark" value="', $line = 94, 
                $out += $escape(guide.billRemark), $out += '" class="col-sm-12" ', $line = 94, 1 == guide.isConfirmAccount && 1 != roleType && ($out += ' disabled = "true" ', 
                $line = 94), $out += "/> </td> <td>", $line = 96, $out += $escape(guide.checkTime), 
                $out += "</td> <td>", $line = 97, $out += $escape(guide.checkUserRealName), $out += '</td> <td> <input type="checkbox" class="ace" name="isConfirmAccount" data-entity-checkStatus="', 
                $line = 99, $out += $escape(guide.isConfirmAccount), $out += '" ', $line = 99, 1 == guide.isConfirmAccount && ($out += 'checked="checked"', 
                $line = 99), $out += " ", $line = 99, 1 == guide.isConfirmAccount && 1 != roleType && ($out += ' disabled = "true" ', 
                $line = 99), $out += '/> <span class="lbl"></span> </td> </tr> ', $line = 103;
            }), $out += ' </tbody> </table> <div class="row pageMode" style="margin-top: 40px"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 108, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 117, 0 == totalPage ? ($out += " 0/0 ", $line = 119) : ($out += " ", $line = 120, 
            $out += $escape(pageNo + 1), $out += "/", $line = 120, $out += $escape(totalPage), 
            $out += " ", $line = 121), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> <div class="form-group col-sm-12" > <label class="control-label no-padding-right pull-right" ><input type="checkbox" class="selectAll">全选</label> </div> <div style="clear: both"></div> <br> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary btn-guide-close" > <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary btn-confirm-guide-checking" style="margin-left:20px"> <i class="ace-icon fa fa-check-circle"></i> 确认 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row check globalAdd">\r\n		<div class="col-xs-12 border borderNormal " >\r\n            <form class="form-horizontal" role="form" onsubmit="return false">\r\n                <div class="search-area  editable editable-click" style="margin-top: 10px">\r\n                    <div class="form-group"> <label style="float: left;margin: 5px auto auto 15px" class=" control-label "> 导游：{{guideName}}</label>\r\n                        <label class="col-sm-1 control-label no-padding-right">账期：</label>\r\n                        <select class="col-sm-1" name="year">\r\n                            {{each yearList as year}}\r\n							<option value="{{year}}">{{year}}</option>\r\n							{{/each}} \r\n                        </select>\r\n                        <label class="col-sm-1 control-label no-padding-right"></label>\r\n                        <select class="col-sm-1" name="month">\r\n                            <option value="">全部</option>\r\n                            <option value="1">1月</option>\r\n                            <option value="2">2月</option>\r\n                            <option value="3">3月</option>\r\n                            <option value="4">4月</option>\r\n                            <option value="5">5月</option>\r\n                            <option value="6">6月</option>\r\n                            <option value="7">7月</option>\r\n                            <option value="8">8月</option>\r\n                            <option value="9">9月</option>\r\n                            <option value="10">10月</option>\r\n                            <option value="11">11月</option>\r\n                            <option value="12">12月</option>\r\n                        </select>\r\n\r\n                        <button class=" btn-sm  btn-guideChecking-search search-btn btn-height" style="margin-left: 60px">\r\n                            <i class="ace-icon fa fa-search"></i>\r\n                            	搜索\r\n                        </button>\r\n                        <button type="button" class="btn btn-sm btn-primary btn-success btn-guideExport" style="margin-left: 20px">\r\n							<span>导出报表</span>\r\n							<i class="ace-icon fa fa-arrow-right icon-on-right"></i>\r\n						</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <form class="form-horizontal" role="form" onsubmit="return false">\r\n                <div class="form-group col-sm-10">\r\n                    <label class=" control-label pull-left" style="margin-left: 5px">总预支款：{{sumGuidePreMoney}}</label>\r\n                    <label class="col-sm-1 control-label no-padding-right">总团队收入：{{sumGuideIncomeMoney}}</label>\r\n                    <label class="col-sm-1 control-label no-padding-right">总导游现付：{{sumGuideNowPayedMoney}}</label>\r\n                    <label class="col-sm-1 control-label no-padding-right">总导服费：{{sumGuideFee}}</label>\r\n                    <label class="col-sm-1 control-label no-padding-right">总导游返佣：{{sumGuideRebateMoney}}</label>\r\n                    <label class="col-sm-1 control-label no-padding-right">总退补款：{{sumBackGuideMoney}}</label>\r\n                    <label class="col-sm-2 control-label no-padding-right">总实际退补：{{sumRealBackGuideMoney}}</label>\r\n                </div>\r\n            </form>\r\n        </div>\r\n             <div class="clearfix"></div>\r\n				<table class="table table-striped table-bordered table-hover all" style="margin-top: 30px">\r\n					<thead>\r\n						<tr>\r\n                           <th class="th-border">团号</th>\r\n                           <th class="th-border">线路</th>\r\n                           <th class="th-border">预支款</th>\r\n                           <th class="th-border">现收团款</th>\r\n                           <th class="th-border">其他收入</th>\r\n                           <th class="th-border">导游现付</th>\r\n                           <th class="th-border">导服费</th>\r\n                           <th class="th-border">管理费</th>\r\n                           <th class="th-border">购物导拥</th>\r\n                           <th class="th-border">自费导拥</th>\r\n                           <th class="th-border">退补款</th>\r\n                           <th class="th-border col-sm-1" > <span class="necessary">*</span>实际退补款</th>\r\n                           <th class="th-border col-sm-1" >说明</th>\r\n                           <th class="th-border col-sm-1" >对账时间</th>\r\n                           <th class="th-border">对账人</th>\r\n                           <th class="th-border">对账</th>\r\n                        </tr>\r\n					</thead>\r\n					<tbody>\r\n					{{each guideList as guide}}\r\n						<tr data-entity-id="{{guide.id}}" data-entity-isConfirmAccount="{{guide.isConfirmAccount}}" data-entity-startTime="{{guide.startTime}}">\r\n							<td>\r\n							   <a class="cost-detail" data-entity-id="{{guide.id}}" onsubmit="return false" href="javascript:void(0)">{{guide.tripNumber}}</a>\r\n							</td>\r\n							<td>{{guide.lineProductName}}</td>\r\n							<td>{{guide.guidePreMoney}}</td>\r\n							<td>{{guide.guideNowIncomeMoney}}</td>\r\n							<td>{{guide.otherIncomeMoney}}</td>\r\n							<td>{{guide.guideNowPayedMoney}}</td>\r\n							<td>{{guide.guideFee}}</td>\r\n							<td>{{guide.manageFee}}</td>\r\n							<td>{{guide.guideShopRebateMoney}}</td>\r\n							<td>{{guide.guideSelfpayRebateMoney}}</td>\r\n							<td>{{guide.backGuideMoney}}</td>\r\n							<td class="col-sm-1">\r\n								<input data-entity-value="{{guide.realBackGuideMoney}}"  maxlength="9" type="text" name="realBackGuideMoney" value="{{guide.realBackGuideMoney}}" class="col-sm-12"  {{if guide.isConfirmAccount == 1 && roleType != 1 }} disabled = "true" {{/if}}/>\r\n							</td>\r\n							<td>\r\n								<input data-entity-value="{{guide.billRemark}}" maxlength="1000" type="text" name="billRemark" value="{{guide.billRemark}}" class="col-sm-12" {{if guide.isConfirmAccount == 1 && roleType != 1 }} disabled = "true" {{/if}}/>\r\n							</td>\r\n							<td>{{guide.checkTime}}</td>\r\n							<td>{{guide.checkUserRealName}}</td>\r\n							<td>\r\n								<input type="checkbox" class="ace"  name="isConfirmAccount" data-entity-checkStatus="{{guide.isConfirmAccount}}" {{if guide.isConfirmAccount == 1}}checked="checked"{{/if}} {{if guide.isConfirmAccount == 1 && roleType != 1 }} disabled = "true" {{/if}}/>\r\n								<span class="lbl"></span>\r\n							</td>\r\n						</tr>\r\n					{{/each}}\r\n					</tbody>\r\n				</table>\r\n            <div class="row pageMode" style="margin-top: 40px">\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n                        <ul class="pagination">\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n                                <a href="javascript:void(0)">\r\n                                    {{if totalPage == 0}}\r\n									    0/0\r\n									{{else}}\r\n										{{pageNo+1}}/{{totalPage}}\r\n									{{/if}}\r\n                                </a>\r\n                            </li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="form-group  col-sm-12" >\r\n                <label class="control-label no-padding-right pull-right" ><input type="checkbox" class="selectAll">全选</label>\r\n            </div>\r\n            <div style="clear: both"></div>\r\n            <br>\r\n            <form class="form-horizontal" role="form" onsubmit="return false">\r\n                <div class="form-group" style="text-align: center;">\r\n                	<button class="btn btn-xs btn-primary btn-guide-close" >\r\n                        <i class="ace-icon fa fa-times-circle"></i>\r\n                       	 关闭\r\n                    </button>\r\n                    <button class="btn btn-xs btn-primary btn-confirm-guide-checking" style="margin-left:20px">\r\n                        <i class="ace-icon fa fa-check-circle"></i>\r\n                       	 确认\r\n                    </button>\r\n                </div>\r\n            </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});