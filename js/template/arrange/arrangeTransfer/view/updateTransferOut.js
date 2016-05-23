/*TMODJS:{"debug":true,"version":170,"md5":"359986eed88db06ad38c61dd72b880db"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/updateTransferOut", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, touristGroupTransfer = $data.touristGroupTransfer, cashFlag = $data.cashFlag, $each = $utils.$each, $string = ($data.transferFee1, 
            $data.$index, $utils.$string), isParent = $data.isParent, parentTouristGroup = $data.parentTouristGroup, touristGroup = $data.touristGroup, $out = ($data.toulist, 
            $data.i, "");
            return $out += '<div class="updateTransfer clearfix globalAdd"> <form class="form-horizontal clearfix " role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size">修改小组信息</label> </h5> <div class="widget-body"> <div class="widget-body"> <div class="widget-main"> <input type="hidden" name="status" value="', 
            $line = 11, $out += $escape(touristGroupTransfer.touristGroup.status), $out += '" /> <input type="hidden" name="touristGroupTransferId" value="', 
            $line = 12, $out += $escape(touristGroupTransfer.id), $out += '"> <div class="form-group col-sm-12" style=" margin-top:20px; "> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>同行地接</label> <div class="col-sm-2"> <input type="text" class="col-sm-12" ', 
            $line = 17, 0 == touristGroupTransfer.status && ($out += 'readonly="readonly" ', 
            $line = 17), $out += ' placeholder="客户" name="" value="', $line = 17, $out += $escape(touristGroupTransfer.partnerAgency.travelAgencyName), 
            $out += '" /> <input type="hidden" name="transferPartnerAgencyId" value="', $line = 18, 
            $out += $escape(touristGroupTransfer.partnerAgency.id), $out += '" /> </div> </div> </div> <div class="form-group col-sm-12"> <label class="col-sm-1 control-label no-padding-right">外转备注</label> <div class="col-sm-5"> <input value="', 
            $line = 27, $out += $escape(touristGroupTransfer.touristGroup.transRemark), $out += '" type="text" name="transRemark" class="col-xs-12" maxlength="500" /> </div> </div>  <div class="form-group col-sm-12"> <label class="col-xs-1 control-label no-padding-right">应付：</label> <div class="col-xs-1"> <input name="transNeedPayAllMoney" value="', 
            $line = 35, $out += $escape(touristGroupTransfer.touristGroup.transNeedPayAllMoney), 
            $out += '" maxlength="9" type="text" readonly="readonly" class="col-xs-12 F-float F-money" /> </div> <label class="pull-left"> <input type="checkbox" class="ace" ', 
            $line = 38, 1 == cashFlag && ($out += "checked", $line = 38), $out += ' name="cashFlag" /> <span class="lbl"> 对方现收</span> </label> <div class="T-cashFlag mar-l-15 pull-left ', 
            $line = 40, 0 == cashFlag && ($out += "hidden", $line = 40), $out += '"> <label class="control-label pad-l-5">对方现收金额：</label> <input name="currentNeedPayMoney" value="', 
            $line = 42, touristGroupTransfer.touristGroup && ($line = 42, $out += $escape(touristGroupTransfer.touristGroup.currentNeedPayMoney), 
            $line = 42), $out += '" maxlength="9" type="text" class="F-float F-money"> </div> <div class="col-xs-1"> <input name="transPayedMoney" value="', 
            $line = 45, $out += $escape(touristGroupTransfer.transPayedMoney), $out += '" maxlength="9" type="hidden" class="col-xs-12 F-float F-money" /> </div> </div>  <div class="form-group col-sm-12"> <div class="search-area clearfix">  <div class="col-sm-8"> <button class="btn btn-sm btn-success T-transfer-addCost pull-left"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> </div>  <table class="table table-striped table-bordered table-hover addTransferCostTable"> <thead> <tr> <th class="th-border">费用项</th> <th class="th-border"><span class="necessary pull-left col-sm-2">*</span>数量</th> <th class="th-border"><span class="necessary pull-left col-sm-2">*</span>单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-addTransferCost">  ', 
            $line = 73, $each(touristGroupTransfer.touristGroup.touristGroupTransferFeeList, function(transferFee1) {
                $out += " ", $line = 73, null != transferFee1 && ($out += ' <tr data-entity-id="', 
                $line = 74, $out += $escape(transferFee1.id), $out += '"> <td> <select name="type" class="col-sm-10 col-sm-offset-1"> ', 
                $line = 77, $out += $string($helpers.getFeeItemType(transferFee1.type, !0)), $out += ' </select> </td> <td> <input type="text" name="count" value="', 
                $line = 81, $out += $escape(transferFee1.count), $out += '" class="col-sm-10 col-sm-offset-1 count T-count T-calc F-float F-count" /> </td> <td> <input type="text" name="otherPrice" value="', 
                $line = 84, $out += $escape(transferFee1.price), $out += '" class="col-sm-10 col-sm-offset-1 price T-price T-calc F-float F-money" /> </td> <td> <input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right T-payMoney F-float F-money" /> </td> <td> <input name="remark" value="', 
                $line = 90, $out += $escape(transferFee1.remark), $out += '" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right" /> </td> <td> <a class="T-updateTransfer-delete cursor">删除</a> </td> </tr> ', 
                $line = 96), $out += " ", $line = 96;
            }), $out += ' </tbody> </table>  </div> </div> </div> </div> </div> </form> <form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">2</span> <label class="middle title-size">线路产品信息</label> </h5> <table class="whereQ whereTwo" style="width: 100%"> <tr> <td class="style-myself CheckPlan">线路产品</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 116, touristGroupTransfer.lineProduct && ($line = 116, $out += $escape(touristGroupTransfer.lineProduct.name), 
            $line = 116), $out += '</td> <td class="style-myself CheckPlan">出游日期</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 118, $out += $escape($helpers.dateFormat(touristGroupTransfer.touristGroup.startTime, "yyyy-MM-dd")), 
            $out += '</td> </tr> <tr> <td class="style-myself CheckPlan">客户</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 122, $out += $escape(touristGroupTransfer.touristGroup.partnerAgency.travelAgencyName), 
            $out += '</td> <td class="style-myself CheckPlan">客户联系人</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3"> ', 
            $line = 125, null != touristGroupTransfer.touristGroup.partnerAgencyContact && ($line = 125, 
            $out += $escape(touristGroupTransfer.touristGroup.partnerAgencyContact.contactRealname), 
            $out += "|", $line = 125, $out += $escape(touristGroupTransfer.touristGroup.partnerAgencyContact.contactMobileNumber), 
            $line = 125), $out += ' </td> </tr> <tr> <td class="style-myself CheckPlan">收客备注</td> <td colspan="5">', 
            $line = 130, $out += $escape(touristGroupTransfer.touristGroup.remark), $out += '</td> </tr> </table> </div> </form>  <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">4</span> <label class="middle title-size">收客信息</label> </h5> ', 
            $line = 144, 1 == isParent ? ($out += ' <table class="whereQ whereTwo" style="width: 100%"> <tr> <td class="style-myself CheckPlan">本段团款：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money" colspan="3">', 
            $line = 148, $out += $escape(parentTouristGroup.subsectionNeedPayAllMoney), $out += "</span></td> </tr> </table> ", 
            $line = 151) : ($out += ' <table class="whereQ whereTwo" style="width: 100%"> <tr> <td class="style-myself CheckPlan">本段团款：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money" colspan="3">', 
            $line = 155, $out += $escape(touristGroup.needPayAllMoney), $out += "</span></td> </tr> </table> ", 
            $line = 158), $out += ' </div> </form>   <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">5</span> <label class="middle title-size">游客小组信息</label> </h5> <div class="widget-body TransferTable"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">联系人</th> </tr> </thead> <tbody> ', 
            $line = 185, $each(touristGroupTransfer.touristGroup.touristGroupMemberList, function(toulist, i) {
                $out += " <tr> <td>", $line = 187, $out += $escape(i + 1), $out += "</td> <td>", 
                $line = 188, $out += $escape(toulist.name), $out += "</td> <td>", $line = 189, $out += $escape(toulist.mobileNumber), 
                $out += "</td> <td> ", $line = 191, 0 == toulist.idCardType ? ($out += "身份证 ", $line = 191) : 1 == toulist.idCardType ? ($out += "护照 ", 
                $line = 191) : 2 == toulist.idCardType && ($out += "其他 ", $line = 191), $out += "</td> <td>", 
                $line = 192, $out += $escape(toulist.idCardNumber), $out += "</td> <td>", $line = 193, 
                0 == toulist.isContactUser ? ($out += "否", $line = 193) : ($out += "是", $line = 193), 
                $out += "</td> </tr> ", $line = 195;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-sm btn-danger T-cancelTransfer"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-sm btn-primary T-saveTransoutInfo" style="margin-left: 20px"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="updateTransfer clearfix globalAdd">\r\n    <form class="form-horizontal clearfix " role="form" style="margin-top:10px" onsubmit="return false">\r\n        <div class=" ui-sortable-handle">\r\n            <h5 class="">\r\n				<span class="badge badge-primary">1</span>\r\n				<label class="middle title-size">修改小组信息</label>\r\n			</h5>\r\n            <div class="widget-body">\r\n                <div class="widget-body">\r\n                    <div class="widget-main">\r\n                        <input type="hidden" name="status" value="{{touristGroupTransfer.touristGroup.status}}" />\r\n                        <input type="hidden" name="touristGroupTransferId" value="{{touristGroupTransfer.id}}">\r\n                        <div class="form-group col-sm-12" style=" margin-top:20px; ">\r\n                            <div class="search-area">\r\n                                <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>同行地接</label>\r\n                                <div class="col-sm-2">\r\n                                    <input type="text" class="col-sm-12" {{if touristGroupTransfer.status==0}}readonly="readonly" {{/if}} placeholder="客户" name="" value="{{touristGroupTransfer.partnerAgency.travelAgencyName}}" />\r\n                                    <input type="hidden" name="transferPartnerAgencyId" value="{{touristGroupTransfer.partnerAgency.id}}" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n    \r\n                        <div class="form-group col-sm-12">\r\n                            <label class="col-sm-1 control-label no-padding-right">外转备注</label>\r\n                            <div class="col-sm-5">\r\n                                <input value="{{touristGroupTransfer.touristGroup.transRemark}}" type="text" name="transRemark" class="col-xs-12" maxlength="500" />\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- 付款金额start -->\r\n                        <div class="form-group col-sm-12"> \r\n                               <label class="col-xs-1 control-label no-padding-right">应付：</label> \r\n                               <div class="col-xs-1"> \r\n                                    <input name="transNeedPayAllMoney" value="{{touristGroupTransfer.touristGroup.transNeedPayAllMoney}}" maxlength="9" type="text" readonly="readonly" class="col-xs-12 F-float F-money" /> \r\n                               </div> \r\n                               <label class="pull-left">\r\n                                    <input type="checkbox" class="ace" {{if cashFlag==1}}checked{{/if}} name="cashFlag" /> <span class="lbl"> 对方现收</span> \r\n                               </label>\r\n                               <div class="T-cashFlag mar-l-15 pull-left  {{if cashFlag==0}}hidden{{/if}}">\r\n                                   <label class="control-label pad-l-5">对方现收金额：</label> \r\n                                   <input name="currentNeedPayMoney" value="{{if !!touristGroupTransfer.touristGroup}}{{touristGroupTransfer.touristGroup.currentNeedPayMoney}}{{/if}}" maxlength="9" type="text" class="F-float F-money">\r\n                               </div>\r\n                                <div class="col-xs-1">\r\n                                    <input name="transPayedMoney" value="{{touristGroupTransfer.transPayedMoney}}" maxlength="9" type="hidden" class="col-xs-12 F-float F-money" />\r\n                                </div>\r\n                        </div>\r\n                        <!-- 付款金额end -->\r\n        \r\n\r\n                        <div class="form-group col-sm-12">\r\n                            <div class="search-area clearfix">\r\n                                <!-- 新增费用项目 -->\r\n                                <div class="col-sm-8">\r\n                                    <button class="btn btn-sm btn-success T-transfer-addCost pull-left"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button>\r\n                                </div>\r\n                            </div>\r\n                        \r\n                        <!-- 转客列表编辑start -->\r\n                        <table class="table table-striped table-bordered table-hover addTransferCostTable">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class="th-border">费用项</th>\r\n                                    <th class="th-border"><span class="necessary pull-left col-sm-2">*</span>数量</th>\r\n                                    <th class="th-border"><span class="necessary pull-left col-sm-2">*</span>单价</th>\r\n                                    <th class="th-border">金额</th>\r\n                                    <th class="th-border">说明</th>\r\n                                    <th class="th-border">操作</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody class="T-addTransferCost">\r\n                                <!-- 其他费用 -->\r\n                                {{each touristGroupTransfer.touristGroup.touristGroupTransferFeeList as transferFee1}} {{if transferFee1 != null}}\r\n                                <tr data-entity-id="{{transferFee1.id}}">\r\n                                    <td>\r\n                                        <select name="type" class="col-sm-10 col-sm-offset-1">\r\n                                            {{#transferFee1.type | getFeeItemType: true}}\r\n                                        </select>\r\n                                    </td>\r\n                                    <td>\r\n                                        <input type="text" name="count" value="{{transferFee1.count}}" class="col-sm-10 col-sm-offset-1 count T-count T-calc F-float F-count" />\r\n                                    </td>\r\n                                    <td>\r\n                                        <input type="text" name="otherPrice" value="{{transferFee1.price}}" class="col-sm-10 col-sm-offset-1 price T-price T-calc F-float F-money" />\r\n                                    </td>\r\n                                    <td>\r\n                                        <input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-10 col-sm-offset-1   no-padding-right T-payMoney F-float F-money" />\r\n                                    </td>\r\n                                    <td>\r\n                                        <input name="remark" value="{{transferFee1.remark}}" type="text" class="col-sm-10 col-sm-offset-1   no-padding-right" />\r\n                                    </td>\r\n                                    <td>\r\n                                        <a class="T-updateTransfer-delete cursor">删除</a>\r\n                                    </td>\r\n                                </tr>\r\n                                {{/if}} {{/each}}\r\n                            </tbody>\r\n                        </table>\r\n                        <!-- 转客列表编辑end -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n    <form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n        <div class=" ui-sortable-handle">\r\n            <h5 class="">\r\n                <span class="badge badge-primary">2</span>\r\n                <label class="middle title-size">线路产品信息</label>\r\n            </h5>\r\n            <table class="whereQ whereTwo" style="width: 100%">\r\n                <tr>\r\n                    <td class="style-myself CheckPlan">线路产品</td>\r\n                    <td style="text-align: left;padding: 0px 0px 0px 10px">{{if !!touristGroupTransfer.lineProduct}}{{touristGroupTransfer.lineProduct.name}}{{/if}}</td>\r\n                    <td class="style-myself CheckPlan">出游日期</td>\r\n                    <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{touristGroupTransfer.touristGroup.startTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class="style-myself CheckPlan">客户</td>\r\n                    <td style="text-align: left;padding: 0px 0px 0px 10px">{{touristGroupTransfer.touristGroup.partnerAgency.travelAgencyName}}</td>\r\n                    <td class="style-myself CheckPlan">客户联系人</td>\r\n                    <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">\r\n                       {{if touristGroupTransfer.touristGroup.partnerAgencyContact != null}}{{touristGroupTransfer.touristGroup.partnerAgencyContact.contactRealname}}|{{touristGroupTransfer.touristGroup.partnerAgencyContact.contactMobileNumber}}{{/if}}\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class="style-myself CheckPlan">收客备注</td>\r\n                    <td colspan="5">{{touristGroupTransfer.touristGroup.remark}}</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n    </form>\r\n\r\n    <!-- 收客信息start-->\r\n    <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n        <div class=" ui-sortable-handle">\r\n           <h5 class="">\r\n                <span class="badge badge-primary">4</span>\r\n                <label class="middle title-size">收客信息</label>\r\n            </h5>\r\n\r\n            {{if isParent==1}}\r\n            <table class="whereQ whereTwo" style="width: 100%">\r\n                <tr>\r\n                    <td class="style-myself CheckPlan">本段团款：</td>\r\n                    <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money" colspan="3">{{parentTouristGroup.subsectionNeedPayAllMoney}}</span></td>\r\n                </tr>\r\n            </table>\r\n            {{else}}\r\n            <table class="whereQ whereTwo" style="width: 100%">\r\n                <tr>\r\n                    <td class="style-myself CheckPlan">本段团款：</td>\r\n                    <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money" colspan="3">{{touristGroup.needPayAllMoney}}</span></td>\r\n                </tr>\r\n            </table>\r\n            {{/if}}\r\n        </div>\r\n    </form>\r\n    <!-- 收客信息end -->\r\n    <!-- 游客信息start -->\r\n    <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n        <div class="form-group">\r\n            <div class="col-xs-12 col-sm-12 widget-container-col">\r\n                <div class=" ui-sortable-handle">\r\n                    <h5 class="">\r\n									<span class="badge badge-primary">5</span>\r\n									<label class="middle title-size">游客小组信息</label>\r\n								</h5>\r\n                    <div class="widget-body TransferTable">\r\n                        <div class="widget-main no-padding">\r\n                            <table class="table table-striped table-bordered table-hover">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class="th-border">序号</th>\r\n                                        <th class="th-border">姓名</th>\r\n                                        <th class="th-border">联系电话</th>\r\n                                        <th class="th-border">证件类型</th>\r\n                                        <th class="th-border">证件号</th>\r\n                                        <th class="th-border">联系人</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    {{each touristGroupTransfer.touristGroup.touristGroupMemberList as toulist i}}\r\n                                    <tr>\r\n                                        <td>{{i+1}}</td>\r\n                                        <td>{{toulist.name}}</td>\r\n                                        <td>{{toulist.mobileNumber}}</td>\r\n                                        <td>\r\n                                        {{if toulist.idCardType==0}}身份证 {{else if toulist.idCardType==1}}护照 {{else if toulist.idCardType==2}}其他 {{/if}}</td>\r\n                                        <td>{{toulist.idCardNumber}}</td>\r\n                                        <td>{{if toulist.isContactUser==0}}否{{else}}是{{/if}}</td>\r\n                                    </tr>\r\n                                    {{/each}}\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-sm btn-danger T-cancelTransfer">\r\n                <i class="ace-icon fa fa-times"></i> 取消\r\n            </button>\r\n            <button class="btn btn-sm btn-primary T-saveTransoutInfo" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-check"></i> 保存\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});