/*TMODJS:{"debug":true,"version":303,"md5":"904b493439a8bf075b793ab9344569c3"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/viewTransferOut", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, partnerAgency = $data.partnerAgency, lineNeedPayMoney = $data.lineNeedPayMoney, currentNeedPayMoney = $data.currentNeedPayMoney, transRemark = $data.transRemark, $each = $utils.$each, touristGroup = $data.touristGroup, lineProduct = ($data.transferFee, 
            $data.$index, $data.lineProduct), isParent = $data.isParent, parentTouristGroup = $data.parentTouristGroup, $out = ($data.result, 
            $data.i, "");
            return $out += '<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false;"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">我社转出主体信息</label> <button class="btn btn-sm btn-success export-Btn T-statementsBtn pull-right" style="margin-top: -4px;">结算单</button> </h5> <table class="whereQ whereTwo" style="width: 100%;margin-bottom: 28px"> <tr> <td class="style-myself">同行地接：</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="4">', 
            $line = 10, $out += $escape(partnerAgency.travelAgencyName), $out += '</td> </tr> <tr> <td class="style-myself">应付：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">', 
            $line = 14, $out += $escape(lineNeedPayMoney), $out += '</span></td> <td class="style-myself">对方现收金额: </td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="2"><span class="F-float F-money">', 
            $line = 17, $out += $escape(currentNeedPayMoney), $out += '</span></td> </tr> <tr> <td class="style-myself">转客备注：</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="4">', 
            $line = 21, $out += $escape(transRemark), $out += '</td> </tr> </table> </div> </form> </div> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">转客列表</label> </h5> <div class="widget-body TransferTable"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">备注</th> </tr> </thead> <tbody>  ', 
            $line = 48, $each(touristGroup.touristGroupTransferFeeList, function(transferFee) {
                $out += " ", $line = 48, null != transferFee && ($out += " <tr> <td> ", $line = 51, 
                "酒店费用" == transferFee.name || 8 == transferFee.type ? ($out += " 单房差 ", $line = 53) : ($out += " ", 
                $line = 54, $out += $escape(transferFee.name), $out += " ", $line = 55), $out += ' </td> <td><span class="F-float F-count">', 
                $line = 57, $out += $escape(transferFee.count), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 58, $out += $escape(transferFee.price), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 59, $out += $escape(transferFee.count * transferFee.price), $out += "</span></td> <td>", 
                $line = 60, $out += $escape(transferFee.remark), $out += "</td> </tr> ", $line = 62), 
                $out += " ", $line = 62;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </form> <form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">线路产品信息</label> </h5> <table class="whereQ whereTwo" style="width: 100%"> <tr> <td class="style-myself CheckPlan">线路产品</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 79, lineProduct && ($out += " ", $line = 79, $out += $escape(lineProduct.name), 
            $line = 79), $out += '</td> <td class="style-myself CheckPlan">出游日期</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 81, $out += $escape($helpers.dateFormat(touristGroup.startTime, "yyyy-MM-dd")), 
            $out += '</td> </tr> <tr> <td class="style-myself CheckPlan">客户</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 85, $out += $escape(touristGroup.partnerAgency.travelAgencyName), $out += '</td> <td class="style-myself CheckPlan">客户联系人</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3"> ', 
            $line = 88, null != touristGroup.partnerAgencyContact && ($line = 88, $out += $escape(touristGroup.partnerAgencyContact.contactRealname), 
            $out += "|", $line = 88, $out += $escape(touristGroup.partnerAgencyContact.contactMobileNumber), 
            $line = 88), $out += ' </td> </tr> <tr> <td class="style-myself CheckPlan">收客备注</td> <td colspan="5">', 
            $line = 93, $out += $escape(touristGroup.remark), $out += '</td> </tr> </table> </div> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5> <label class="middle title-size">收客信息</label> </h5> ', 
            $line = 104, 1 == isParent ? ($out += ' <table class="whereQ whereTwo" style="width: 100%"> <tr> <td class="style-myself CheckPlan">本段团款：</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="5"><span class="F-float F-money">', 
            $line = 108, $out += $escape(parentTouristGroup.needPayAllMoney), $out += "</span></td> </tr> </table> ", 
            $line = 111) : ($out += ' <table class="whereQ whereTwo" style="width: 100%"> <tr> <td class="style-myself CheckPlan">本段团款：</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="5"><span class="F-float F-money"> ', 
            $line = 115, $out += $escape(touristGroup.needPayAllMoney), $out += "</span></td> </tr> </table> ", 
            $line = 118), $out += ' </div> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">游客小组信息</label> </h5> <div class="widget-body TransferTable"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">联系人</th> </tr> </thead> <tbody> ', 
            $line = 142, $each(touristGroup.touristGroupMemberList, function(result, i) {
                $out += " <tr> <td>", $line = 144, $out += $escape(i + 1), $out += "</td> <td>", 
                $line = 145, $out += $escape(result.name), $out += "</td> <td>", $line = 146, $out += $escape(result.mobileNumber), 
                $out += "</td> <td> ", $line = 148, 0 == result.idCardType ? ($out += "身份证 ", $line = 148) : 1 == result.idCardType ? ($out += "护照 ", 
                $line = 148) : 2 == result.idCardType && ($out += "其他 ", $line = 148), $out += " </td> <td>", 
                $line = 150, $out += $escape(result.idCardNumber), $out += "</td> <td>", $line = 151, 
                0 == result.isContactUser ? ($out += "否", $line = 151) : ($out += "是", $line = 151), 
                $out += "</td> </tr> ", $line = 153;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false;">\r\n    <div class=" ui-sortable-handle">\r\n        <h5 class="">\r\n					 <label class="middle title-size">我社转出主体信息</label>\r\n                     <button class="btn btn-sm btn-success export-Btn T-statementsBtn pull-right" style="margin-top: -4px;">结算单</button>\r\n				</h5>\r\n        <table class="whereQ whereTwo" style="width: 100%;margin-bottom: 28px">\r\n            <tr>\r\n                <td class="style-myself">同行地接：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="4">{{partnerAgency.travelAgencyName}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td class="style-myself">应付：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">{{lineNeedPayMoney}}</span></td>\r\n\r\n                <td class="style-myself">对方现收金额: </td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="2"><span class="F-float F-money">{{currentNeedPayMoney}}</span></td>\r\n            </tr>\r\n            <tr>\r\n                <td class="style-myself">转客备注：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="4">{{transRemark}}</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n</form>\r\n</div>\r\n<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n    <div class="form-group">\r\n        <div class="col-xs-12 col-sm-12 widget-container-col">\r\n            <div class=" ui-sortable-handle">\r\n                <h5 class="">\r\n							<label class="middle title-size">转客列表</label>\r\n						</h5>\r\n                <div class="widget-body TransferTable">\r\n                    <div class="widget-main no-padding">\r\n                        <table class="table table-striped table-bordered table-hover hotelRoomStandardList">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class="th-border">费用项</th>\r\n                                    <th class="th-border">数量</th>\r\n                                    <th class="th-border">单价</th>\r\n                                    <th class="th-border">金额</th>\r\n                                    <th class="th-border">备注</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <!-- 其他费用 -->\r\n                                {{each touristGroup.touristGroupTransferFeeList as transferFee}} {{if transferFee!=null}}\r\n                                <tr>\r\n                                    <td>\r\n                                        {{if transferFee.name == \'酒店费用\' || transferFee.type == 8}}\r\n                                            单房差\r\n                                        {{else}}\r\n                                            {{transferFee.name}}\r\n                                        {{/if}}\r\n                                    </td>\r\n                                    <td><span class="F-float F-count">{{transferFee.count}}</span></td>\r\n                                    <td><span class="F-float F-money">{{transferFee.price}}</span></td>\r\n                                    <td><span class="F-float F-money">{{transferFee.count*transferFee.price}}</span></td>\r\n                                    <td>{{transferFee.remark}}</td>\r\n                                </tr>\r\n                                {{/if}} {{/each}}\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n<form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n    <div class=" ui-sortable-handle">\r\n        <h5 class="">\r\n					<label class="middle title-size">线路产品信息</label>\r\n				</h5>\r\n        <table class="whereQ whereTwo" style="width: 100%">\r\n            <tr>\r\n                <td class="style-myself CheckPlan">线路产品</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px">{{if !!lineProduct}} {{lineProduct.name}}{{/if}}</td>\r\n                <td class="style-myself CheckPlan">出游日期</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{touristGroup.startTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td class="style-myself CheckPlan">客户</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px">{{touristGroup.partnerAgency.travelAgencyName}}</td>\r\n                <td class="style-myself CheckPlan">客户联系人</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">\r\n                    {{if touristGroup.partnerAgencyContact != null}}{{touristGroup.partnerAgencyContact.contactRealname}}|{{touristGroup.partnerAgencyContact.contactMobileNumber}}{{/if}}\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class="style-myself CheckPlan">收客备注</td>\r\n                <td colspan="5">{{touristGroup.remark}}</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n</form>\r\n<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n    <div class=" ui-sortable-handle">\r\n        <h5>\r\n			<label class="middle title-size">收客信息</label>\r\n		</h5>\r\n\r\n		{{if isParent==1}}\r\n        <table class="whereQ whereTwo" style="width: 100%">\r\n            <tr>\r\n                <td class="style-myself CheckPlan">本段团款：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="5"><span class="F-float F-money">{{parentTouristGroup.needPayAllMoney}}</span></td>\r\n            </tr>\r\n        </table>\r\n        {{else}}\r\n        <table class="whereQ whereTwo" style="width: 100%">\r\n            <tr>\r\n                <td class="style-myself CheckPlan">本段团款：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="5"><span class="F-float F-money"> {{touristGroup.needPayAllMoney}}</span></td>\r\n            </tr>\r\n        </table>\r\n        {{/if}}\r\n    </div>\r\n</form>\r\n<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n    <div class="form-group">\r\n        <div class="col-xs-12 col-sm-12 widget-container-col">\r\n            <div class=" ui-sortable-handle">\r\n                <h5 class="">\r\n							<label class="middle title-size">游客小组信息</label>\r\n						</h5>\r\n                <div class="widget-body TransferTable">\r\n                    <div class="widget-main no-padding">\r\n                        <table class="table table-striped table-bordered table-hover hotelRoomStandardList">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class="th-border">序号</th>\r\n                                    <th class="th-border">姓名</th>\r\n                                    <th class="th-border">联系电话</th>\r\n                                    <th class="th-border">证件类型</th>\r\n                                    <th class="th-border">证件号</th>\r\n                                    <th class="th-border">联系人</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                {{each touristGroup.touristGroupMemberList as result i}}\r\n                                <tr>\r\n                                    <td>{{i+1}}</td>\r\n                                    <td>{{result.name}}</td>\r\n                                    <td>{{result.mobileNumber}}</td>\r\n                                    <td>\r\n                                        {{if result.idCardType==0}}身份证 {{else if result.idCardType==1}}护照 {{else if result.idCardType==2}}其他 {{/if}}\r\n                                    </td>\r\n                                    <td>{{result.idCardNumber}}</td>\r\n                                    <td>{{if result.isContactUser == 0}}否{{else}}是{{/if}}</td>\r\n                                </tr>\r\n                                {{/each}}\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});