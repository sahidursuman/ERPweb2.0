/*TMODJS:{"debug":true,"version":212,"md5":"8dabb08c5f5dc4b3c5f7015c03696936"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/viewTransferOut", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, partnerAgency = $data.partnerAgency, touristGroup = $data.touristGroup, $each = $utils.$each, lineProduct = ($data.transferFee, 
            $data.$index, $data.lineProduct), isParent = $data.isParent, parentTouristGroup = $data.parentTouristGroup, cashFlag = $data.cashFlag, $out = ($data.transferFeeList, 
            $data.result, $data.i, "");
            return $out += '<form class="form-horizontal" role="form" style="margin-top:10px"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">我社转出主体信息</label> </h5> <table class="whereQ whereTwo" style="width: 100%;margin-bottom: 28px"> <tr> <td class="style-myself">同行地接：</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="4">', 
            $line = 9, $out += $escape(partnerAgency.travelAgencyName), $out += '</td> </tr> <tr> <td class="style-myself">应付：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">', 
            $line = 13, $out += $escape(touristGroup.transNeedPayAllMoney), $out += '</span></td> <td colspan="3"> ', 
            $line = 15, 1 == touristGroup.operateCurrentNeedPayMoney ? ($out += ' <label> <input type="checkbox" class="ace buyInsurance-status" checked="checked" value="', 
            $line = 17, $out += $escape(touristGroup.operateCurrentNeedPayMoney), $out += '" name="operateCurrentNeedPayMoney" disabled="disabled"> <span class="lbl"> </span> </label> ', 
            $line = 21) : ($out += ' <label style="padding-left:0px;"> <input type="checkbox" class="ace buyInsurance-status" checked="" value="', 
            $line = 23, $out += $escape(touristGroup.operateCurrentNeedPayMoney), $out += '" name="operateCurrentNeedPayMoney" disabled="disabled"> <span class="lbl"> </span> </label> ', 
            $line = 27), $out += ' <label class="control-label no-padding-right">对方现收</label> </td> </tr> <tr> <td class="style-myself">转客备注：</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="4">', 
            $line = 33, $out += $escape(touristGroup.transRemark), $out += '</td> </tr> </table> </div> </form> </div> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">转客列表</label> </h5> <div class="widget-body TransferTable"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">备注</th> </tr> </thead> <tbody>  ', 
            $line = 60, $each(touristGroup.touristGroupTransferFeeList, function(transferFee) {
                $out += " ", $line = 60, null != transferFee && ($out += " <tr> <td>", $line = 62, 
                $out += $escape(transferFee.name), $out += '</td> <td><span class="F-float F-count">', 
                $line = 63, $out += $escape(transferFee.count), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 64, $out += $escape(transferFee.price), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 65, $out += $escape(transferFee.count * transferFee.price), $out += "</span></td> <td>", 
                $line = 66, $out += $escape(transferFee.remark), $out += "</td> </tr> ", $line = 68), 
                $out += " ", $line = 68;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </form> <form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">线路产品信息</label> </h5> <table class="whereQ whereTwo" style="width: 100%"> <tr> <td class="style-myself CheckPlan">线路产品</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 85, null != lineProduct.name && ($out += " ", $line = 85, $out += $escape(lineProduct.name), 
            $line = 85), $out += '</td> <td class="style-myself CheckPlan">出游日期</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 87, $out += $escape($helpers.dateFormat(touristGroup.startTime, "yyyy-MM-dd")), 
            $out += '</td> </tr> <tr> <td class="style-myself CheckPlan">客户</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 91, $out += $escape(touristGroup.partnerAgency.travelAgencyName), $out += '</td> <td class="style-myself CheckPlan">客户联系人</td> <td style="text-align: left;padding: 0px 0px 0px 10px"> ', 
            $line = 94, null != touristGroup.partnerAgencyContact && ($line = 94, $out += $escape(touristGroup.partnerAgencyContact.contactRealname), 
            $out += "|", $line = 94, $out += $escape(touristGroup.partnerAgencyContact.contactMobileNumber), 
            $line = 94), $out += ' </td> <td class="style-myself CheckPlan">获得方式</td> <td style="text-align: left;padding: 0px 0px 0px 10px"> ', 
            $line = 98, 1 == touristGroup.getType ? ($out += "旅行社系统 ", $line = 98) : 2 == touristGroup.getType ? ($out += "传真 ", 
            $line = 98) : 3 == touristGroup.getType ? ($out += "短信 ", $line = 98) : 4 == touristGroup.getType ? ($out += "电话 ", 
            $line = 98) : 5 == touristGroup.getType && ($out += "QQ ", $line = 98), $out += ' </td> </tr> <tr> <td class="style-myself CheckPlan">收客备注</td> <td colspan="5">', 
            $line = 103, $out += $escape(touristGroup.remark), $out += '</td> </tr> </table> </div> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5> <label class="middle title-size">收客信息</label> </h5> ', 
            $line = 114, 1 == isParent ? ($out += ' <table class="whereQ whereTwo" style="width: 100%"> <tr> <td class="style-myself CheckPlan">应收：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">', 
            $line = 118, $out += $escape(parentTouristGroup.subsectionNeedPayAllMoney), $out += '</span></td> <td class="style-myself CheckPlan">已收：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">', 
            $line = 120, $out += $escape(parentTouristGroup.payedMoney), $out += '</span></td> <td class="style-myself CheckPlan">计划现收：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"> ', 
            $line = 123, 1 == cashFlag ? ($out += ' <span class="F-float F-money">', $line = 124, 
            $out += $escape(parentTouristGroup.currentNeedPayMoney), $out += "</span> ", $line = 124) : ($out += "0 ", 
            $line = 124), $out += " </td> </tr> </table> ", $line = 128) : ($out += ' <table class="whereQ whereTwo" style="width: 100%"> <tr> <td class="style-myself CheckPlan">应收：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">', 
            $line = 132, $out += $escape(touristGroup.needPayAllMoney), $out += '</span></td> <td class="style-myself CheckPlan">已收：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">', 
            $line = 134, $out += $escape(touristGroup.payedMoney), $out += '</span></td> <td class="style-myself CheckPlan">计划现收：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"> ', 
            $line = 137, 1 == cashFlag ? ($out += ' <span class="F-float F-money">', $line = 138, 
            $out += $escape(touristGroup.currentNeedPayMoney), $out += "</span> ", $line = 138) : ($out += "0 ", 
            $line = 138), $out += " </td> </tr> </table> ", $line = 142), $out += ' <table class="table table-striped table-bordered table-hover hotelRoomStandardList mar-t-10"> <thead> <tr> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">备注</th> </tr> </thead> <tbody> ', 
            $line = 155, $each(touristGroup.touristGroupFeeList, function(transferFeeList) {
                $out += " <tr> <td>", $line = 157, $out += $escape(transferFeeList.name), $out += '</td> <td><span class="F-float F-count">', 
                $line = 158, $out += $escape(transferFeeList.count), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 159, $out += $escape(transferFeeList.price), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 160, $out += $escape(transferFeeList.count * transferFeeList.price), $out += "</span></td> <td>", 
                $line = 161, $out += $escape(transferFeeList.remark), $out += "</td> </tr> ", $line = 163;
            }), $out += ' </tbody> </table> </div> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">游客小组信息</label> </h5> <div class="widget-body TransferTable"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">联系人</th> </tr> </thead> <tbody> ', 
            $line = 189, $each(touristGroup.touristGroupMemberList, function(result, i) {
                $out += " <tr> <td>", $line = 191, $out += $escape(i + 1), $out += "</td> <td>", 
                $line = 192, $out += $escape(result.name), $out += "</td> <td>", $line = 193, $out += $escape(result.mobileNumber), 
                $out += "</td> <td> ", $line = 195, 0 == result.idCardType ? ($out += "身份证 ", $line = 195) : 1 == result.idCardType ? ($out += "护照 ", 
                $line = 195) : 2 == result.idCardType && ($out += "其他 ", $line = 195), $out += " </td> <td>", 
                $line = 197, $out += $escape(result.idCardNumber), $out += "</td> <td>", $line = 198, 
                0 == result.isContactUser ? ($out += "否", $line = 198) : ($out += "是", $line = 198), 
                $out += "</td> </tr> ", $line = 200;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<form class="form-horizontal" role="form" style="margin-top:10px">\r\n    <div class=" ui-sortable-handle">\r\n        <h5 class="">\r\n					 <label class="middle title-size">我社转出主体信息</label>\r\n				</h5>\r\n        <table class="whereQ whereTwo" style="width: 100%;margin-bottom: 28px">\r\n            <tr>\r\n                <td class="style-myself">同行地接：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="4">{{partnerAgency.travelAgencyName}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td class="style-myself">应付：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">{{touristGroup.transNeedPayAllMoney}}</span></td>\r\n                <td colspan="3">\r\n                    {{if touristGroup.operateCurrentNeedPayMoney==1}}\r\n                    <label>\r\n                        <input type="checkbox" class="ace buyInsurance-status" checked="checked" value="{{touristGroup.operateCurrentNeedPayMoney}}" name="operateCurrentNeedPayMoney" disabled="disabled">\r\n                        <span class="lbl">\r\n								</span>\r\n                    </label>\r\n                    {{else}}\r\n                    <label style="padding-left:0px;">\r\n                        <input type="checkbox" class="ace buyInsurance-status" checked="" value="{{touristGroup.operateCurrentNeedPayMoney}}" name="operateCurrentNeedPayMoney" disabled="disabled">\r\n                        <span class="lbl">\r\n								</span>\r\n                    </label>\r\n                    {{/if}}\r\n                    <label class="control-label no-padding-right">对方现收</label>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class="style-myself">转客备注：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="4">{{touristGroup.transRemark}}</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n</form>\r\n</div>\r\n<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n    <div class="form-group">\r\n        <div class="col-xs-12 col-sm-12 widget-container-col">\r\n            <div class=" ui-sortable-handle">\r\n                <h5 class="">\r\n							<label class="middle title-size">转客列表</label>\r\n						</h5>\r\n                <div class="widget-body TransferTable">\r\n                    <div class="widget-main no-padding">\r\n                        <table class="table table-striped table-bordered table-hover hotelRoomStandardList">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class="th-border">费用项</th>\r\n                                    <th class="th-border">数量</th>\r\n                                    <th class="th-border">单价</th>\r\n                                    <th class="th-border">金额</th>\r\n                                    <th class="th-border">备注</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <!-- 其他费用 -->\r\n                                {{each touristGroup.touristGroupTransferFeeList as transferFee}} {{if transferFee!=null}}\r\n                                <tr>\r\n                                    <td>{{transferFee.name}}</td>\r\n                                    <td><span class="F-float F-count">{{transferFee.count}}</span></td>\r\n                                    <td><span class="F-float F-money">{{transferFee.price}}</span></td>\r\n                                    <td><span class="F-float F-money">{{transferFee.count*transferFee.price}}</span></td>\r\n                                    <td>{{transferFee.remark}}</td>\r\n                                </tr>\r\n                                {{/if}} {{/each}}\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n<form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n    <div class=" ui-sortable-handle">\r\n        <h5 class="">\r\n					<label class="middle title-size">线路产品信息</label>\r\n				</h5>\r\n        <table class="whereQ whereTwo" style="width: 100%">\r\n            <tr>\r\n                <td class="style-myself CheckPlan">线路产品</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px">{{if lineProduct.name!=null}} {{lineProduct.name}}{{/if}}</td>\r\n                <td class="style-myself CheckPlan">出游日期</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{touristGroup.startTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td class="style-myself CheckPlan">客户</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px">{{touristGroup.partnerAgency.travelAgencyName}}</td>\r\n                <td class="style-myself CheckPlan">客户联系人</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px">\r\n                    {{if touristGroup.partnerAgencyContact != null}}{{touristGroup.partnerAgencyContact.contactRealname}}|{{touristGroup.partnerAgencyContact.contactMobileNumber}}{{/if}}\r\n                </td>\r\n                <td class="style-myself CheckPlan">获得方式</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px">\r\n                    {{if touristGroup.getType==1 }}旅行社系统 {{else if touristGroup.getType==2}}传真 {{else if touristGroup.getType==3}}短信 {{else if touristGroup.getType==4}}电话 {{else if touristGroup.getType==5}}QQ {{/if}}\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class="style-myself CheckPlan">收客备注</td>\r\n                <td colspan="5">{{touristGroup.remark}}</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n</form>\r\n<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n    <div class=" ui-sortable-handle">\r\n        <h5>\r\n			<label class="middle title-size">收客信息</label>\r\n		</h5>\r\n\r\n		{{if isParent==1}}\r\n        <table class="whereQ whereTwo" style="width: 100%">\r\n            <tr>\r\n                <td class="style-myself CheckPlan">应收：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">{{parentTouristGroup.subsectionNeedPayAllMoney}}</span></td>\r\n                <td class="style-myself CheckPlan">已收：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">{{parentTouristGroup.payedMoney}}</span></td>\r\n                <td class="style-myself CheckPlan">计划现收：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px">\r\n                    {{if cashFlag==1}}\r\n                    <span class="F-float F-money">{{parentTouristGroup.currentNeedPayMoney}}</span> {{else}}0 {{/if}}\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        {{else}}\r\n        <table class="whereQ whereTwo" style="width: 100%">\r\n            <tr>\r\n                <td class="style-myself CheckPlan">应收：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">{{touristGroup.needPayAllMoney}}</span></td>\r\n                <td class="style-myself CheckPlan">已收：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">{{touristGroup.payedMoney}}</span></td>\r\n                <td class="style-myself CheckPlan">计划现收：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px">\r\n                    {{if cashFlag==1}}\r\n                    <span class="F-float F-money">{{touristGroup.currentNeedPayMoney}}</span> {{else}}0 {{/if}}\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        {{/if}}\r\n\r\n        <table class="table table-striped table-bordered table-hover hotelRoomStandardList mar-t-10">\r\n            <thead>\r\n                <tr>\r\n                    <th class="th-border">费用项</th>\r\n                    <th class="th-border">数量</th>\r\n                    <th class="th-border">单价</th>\r\n                    <th class="th-border">金额</th>\r\n                    <th class="th-border">备注</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                {{each touristGroup.touristGroupFeeList as transferFeeList}}\r\n                <tr>\r\n                    <td>{{transferFeeList.name}}</td>\r\n                    <td><span class="F-float F-count">{{transferFeeList.count}}</span></td>\r\n                    <td><span class="F-float F-money">{{transferFeeList.price}}</span></td>\r\n                    <td><span class="F-float F-money">{{transferFeeList.count*transferFeeList.price}}</span></td>\r\n                    <td>{{transferFeeList.remark}}</td>\r\n                </tr>\r\n                {{/each}}\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</form>\r\n<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n    <div class="form-group">\r\n        <div class="col-xs-12 col-sm-12 widget-container-col">\r\n            <div class=" ui-sortable-handle">\r\n                <h5 class="">\r\n							<label class="middle title-size">游客小组信息</label>\r\n						</h5>\r\n                <div class="widget-body TransferTable">\r\n                    <div class="widget-main no-padding">\r\n                        <table class="table table-striped table-bordered table-hover hotelRoomStandardList">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class="th-border">序号</th>\r\n                                    <th class="th-border">姓名</th>\r\n                                    <th class="th-border">联系电话</th>\r\n                                    <th class="th-border">证件类型</th>\r\n                                    <th class="th-border">证件号</th>\r\n                                    <th class="th-border">联系人</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                {{each touristGroup.touristGroupMemberList as result i}}\r\n                                <tr>\r\n                                    <td>{{i+1}}</td>\r\n                                    <td>{{result.name}}</td>\r\n                                    <td>{{result.mobileNumber}}</td>\r\n                                    <td>\r\n                                        {{if result.idCardType==0}}身份证 {{else if result.idCardType==1}}护照 {{else if result.idCardType==2}}其他 {{/if}}\r\n                                    </td>\r\n                                    <td>{{result.idCardNumber}}</td>\r\n                                    <td>{{if result.isContactUser == 0}}否{{else}}是{{/if}}</td>\r\n                                </tr>\r\n                                {{/each}}\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});