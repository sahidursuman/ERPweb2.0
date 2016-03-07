/*TMODJS:{"debug":true,"version":462,"md5":"6d137d87baabab4759b28174208eae72"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/updateTransferOut", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, touristGroupTransfer = $data.touristGroupTransfer, cashFlag = $data.cashFlag, $each = $utils.$each, $string = ($data.transferFee1, 
            $data.$index, $utils.$string), isParent = $data.isParent, parentTouristGroup = $data.parentTouristGroup, $out = ($data.transferFeeList, 
            $data.toulist, $data.i, "");
            return $out += '<div class="updateTransfer clearfix globalAdd"> <form class="form-horizontal clearfix " role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size">修改小组信息</label> </h5> <div class="widget-body"> <div class="widget-body"> <div class="widget-main"> <input type="hidden" name="status" value="', 
            $line = 11, $out += $escape(touristGroupTransfer.touristGroup.status), $out += '" /> <input type="hidden" name="touristGroupTransferId" value="', 
            $line = 12, $out += $escape(touristGroupTransfer.id), $out += '"> <input type="hidden" name="touristGroupTransferId" value="', 
            $line = 13, $out += $escape(touristGroupTransfer.partnerAgency.id), $out += '"> <div class="form-group col-sm-12" style=" margin-top:20px; "> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>同行地接：</label> <div class="col-sm-2"> <input type="text" class="col-sm-12 ', 
            $line = 18, 0 != touristGroupTransfer.status && ($out += "T-choosePartnerAgency", 
            $line = 18), $out += ' " style="', $line = 18, 0 == touristGroupTransfer.status && ($out += "color:#bbb; ", 
            $line = 18), $out += ' " ', $line = 18, 0 == touristGroupTransfer.status && ($out += 'readonly="readonly" ', 
            $line = 18), $out += ' placeholder="客户" name="" value="', $line = 18, $out += $escape(touristGroupTransfer.partnerAgency.travelAgencyName), 
            $out += '" /> <input type="hidden" name="transferPartnerAgencyId" value="', $line = 19, 
            $out += $escape(touristGroupTransfer.partnerAgency.id), $out += '" /> </div> </div> </div>  <div class="form-group col-sm-12 formOneList"> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right pull-left">应付：</label> <div class="col-sm-2 trans-NeedPayAllMoney"> <input name="transNeedPayAllMoney" value="', 
            $line = 28, $out += $escape(touristGroupTransfer.touristGroup.transNeedPayAllMoney), 
            $out += '" type="text" readonly="readonly" class="col-xs-12 F-float F-money" /> </div> <label class="col-sm-1 control-label no-padding-right pull-left"><span class="necessary">*</span>计划现收：</label> <div class="col-sm-2 trans-PayedMoney"> ', 
            $line = 32, 1 == cashFlag ? ($out += ' <input name="currentNeedPayMoney F-float F-money" value="', 
            $line = 33, $out += $escape(touristGroupTransfer.touristGroup.currentNeedPayMoney), 
            $out += '" readonly="readonly" type="text" class="col-xs-12" /> ', $line = 33) : ($out += ' <input name="currentNeedPayMoney F-float F-money" value="0" readonly="readonly" type="text" class="col-xs-12" /> ', 
            $line = 34), $out += ' </div> <div class="col-sm-2"> <label> <input type="checkbox" class="ace" ', 
            $line = 38, 1 == cashFlag && ($out += 'checked="checked" ', $line = 38), $out += ' disabled="disabled" value="', 
            $line = 38, $out += $escape(cashFlag), $out += '" name="cashFlag" /> <span class="lbl"></span> </label> <label class="control-label no-padding-right">对方现收</label> </div> <div class="col-sm-2 trans-PayedMoney"> <input name="transPayedMoney" value="', 
            $line = 44, $out += $escape(touristGroupTransfer.touristGroup.transPayedMoney), 
            $out += '" readonly="readonly" type="hidden" class="col-xs-12 F-float F-money" /> </div> </div> </div>  <div class="form-group col-sm-12"> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">外转备注:</label> <div class="col-sm-10"> <textarea class="form-control col-sm-12" name="transRemark" value="" maxlength="1000">', 
            $line = 53, $out += $escape(touristGroupTransfer.touristGroup.transRemark), $out += '</textarea> </div> </div> </div> <div class="form-group col-sm-12"> <div class="search-area">  <div class="col-sm-8"> <button class="btn btn-sm btn-success T-transfer-addCost pull-left"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> </div> </div>  <table class="table table-striped table-bordered table-hover addTransferCostTable"> <thead> <tr> <th class="th-border">费用项</th> <th class="th-border"><span class="necessary pull-left col-sm-2">*</span>数量</th> <th class="th-border"><span class="necessary pull-left col-sm-2">*</span>单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-addTransferCost">  ', 
            $line = 79, $each(touristGroupTransfer.touristGroup.touristGroupTransferFeeList, function(transferFee1) {
                $out += " ", $line = 79, null != transferFee1 && ($out += ' <tr data-entity-id="', 
                $line = 80, $out += $escape(transferFee1.id), $out += '"> <td> <select name="type" class="col-sm-10 col-sm-offset-1"> ', 
                $line = 83, $out += $string($helpers.getFeeItemType(transferFee1.type, !0)), $out += ' </select> </td> <td> <input type="text" name="count" value="', 
                $line = 87, $out += $escape(transferFee1.count), $out += '" class="col-sm-10 col-sm-offset-1 count T-count T-calc F-float F-count" /> </td> <td> <input type="text" name="otherPrice" value="', 
                $line = 90, $out += $escape(transferFee1.price), $out += '" class="col-sm-10 col-sm-offset-1 price T-price T-calc F-float F-money" /> </td> <td> <input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right T-payMoney F-float F-money" /> </td> <td> <input name="remark" value="', 
                $line = 96, $out += $escape(transferFee1.remark), $out += '" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right" /> </td> <td> <a class="T-updateTransfer-delete cursor">删除</a> </td> </tr> ', 
                $line = 102), $out += " ", $line = 102;
            }), $out += ' </tbody> </table>  </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">2</span> <label class="middle title-size">线路产品信息</label> </h5> <div class="widget-body clearfix"> <div class="widget-main"> <div class="form-group col-sm-12"> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">线路产品：</label> <div class="col-sm-2"> <input name="lineProductName" value="', 
            $line = 123, $out += $escape(touristGroupTransfer.lineProduct.name), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">出游日期:：</label> <div class="col-sm-2"> <input name="createTime" value="', 
            $line = 127, $out += $escape($helpers.dateFormat(touristGroupTransfer.touristGroup.startTime, "yyyy-MM-dd")), 
            $out += '" disabled="disabled" type="text" class="date-picker col-xs-12" /> </div> </div> </div> <div class="form-group col-sm-12"> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">客户:</label> <div class="col-sm-2"> <input value="', 
            $line = 135, $out += $escape(touristGroupTransfer.touristGroup.partnerAgency.travelAgencyName), 
            $out += '" readonly="readonly" type="text" class="col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">同行联系人:</label> <div class="col-sm-2"> <input name="contactMemberName" value="', 
            $line = 139, null != touristGroupTransfer.touristGroup.partnerAgencyContact && ($line = 139, 
            $out += $escape(touristGroupTransfer.touristGroup.partnerAgencyContact.contactRealname), 
            $out += "|", $line = 139, $out += $escape(touristGroupTransfer.touristGroup.partnerAgencyContact.contactMobileNumber), 
            $line = 139), $out += '" readonly="readonly" type="text" class="col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">获得方式:</label> <div class="col-sm-2"> <select name="getType" class="col-sm-12" disabled="disabled"> <option', 
            $line = 144, 1 == touristGroupTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 144), $out += ' value="1">旅行社系统</option> <option', $line = 145, 2 == touristGroupTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 145), $out += ' value="2">传真</option> <option', $line = 146, 3 == touristGroupTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 146), $out += ' value="3">短信</option> <option', $line = 147, 4 == touristGroupTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 147), $out += ' value="4">电话</option> <option', $line = 148, 5 == touristGroupTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 148), $out += ' value="5">QQ</option> </select> </div> </div> </div> <div class="search-area col-sm-12"> <label class="pull-left control-label no-padding-right">收客备注：</label> <div class="col-sm-10"> <textarea class="form-control col-sm-12" name="remark" value="', 
            $line = 156, $out += $escape(touristGroupTransfer.touristGroup.remark), $out += '" readonly="readonly" maxlength="1000">', 
            $line = 156, $out += $escape(touristGroupTransfer.touristGroup.remark), $out += '</textarea> </div> </div> </div> </div> </div> </form>  <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col" style="margin-top:-15px"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">4</span> <label class="middle title-size">收客信息</label> </h5> <div class="search-area col-sm-12"> ', 
            $line = 173, 1 == isParent ? ($out += ' <label class="col-sm-1 control-label no-padding-right" style="width:84px;">应收：</label> <div class="col-sm-1"> <input name="needPayAllMoney" value="', 
            $line = 176, $out += $escape(parentTouristGroup.subsectionNeedPayAllMoney), $out += '" readonly="readonly" type="text" class="col-xs-12 F-float F-money" /> </div> <label class="col-sm-1 control-label no-padding-right">已收：</label> <div class="col-sm-1"> <input name="payedMoney" value="', 
            $line = 180, $out += $escape(parentTouristGroup.payedMoney), $out += '" readonly="readonly" type="text" class="col-xs-12 F-float F-money" /> </div> <label class="col-sm-1 control-label no-padding-right">计划现收：</label> <div class="col-sm-1"> ', 
            $line = 184, 1 == cashFlag ? ($out += ' <input name="currentNeedPayMoney" value="', 
            $line = 185, $out += $escape(parentTouristGroup.currentNeedPayMoney), $out += '" readonly="readonly" type="text" class="col-xs-12 F-float F-money" /> ', 
            $line = 185) : ($out += ' <input name="currentNeedPayMoney" value="0" readonly="readonly" type="text" class="col-xs-12 F-float F-money" /> ', 
            $line = 186), $out += " </div> ", $line = 188) : ($out += ' <label class="col-sm-1 control-label no-padding-right" style="width:84px;">应收：</label> <div class="col-sm-1"> <input name="needPayAllMoney" value="', 
            $line = 191, $out += $escape(touristGroupTransfer.touristGroup.needPayAllMoney), 
            $out += '" readonly="readonly" type="text" class="col-xs-12 F-float F-money" /> </div> <label class="col-sm-1 control-label no-padding-right">已收：</label> <div class="col-sm-1"> <input name="payedMoney" value="', 
            $line = 195, $out += $escape(touristGroupTransfer.touristGroup.payedMoney), $out += '" readonly="readonly" type="text" class="col-xs-12 F-float F-money" /> </div> <label class="col-sm-1 control-label no-padding-right">计划现收：</label> <div class="col-sm-1"> ', 
            $line = 199, 1 == cashFlag ? ($out += ' <input name="currentNeedPayMoney" value="', 
            $line = 200, $out += $escape(touristGroupTransfer.touristGroup.currentNeedPayMoney), 
            $out += '" readonly="readonly" type="text" class="col-xs-12 F-float F-money" /> ', 
            $line = 200) : ($out += ' <input name="currentNeedPayMoney" value="0" readonly="readonly" type="text" class="col-xs-12 F-float F-money" /> ', 
            $line = 201), $out += " </div> ", $line = 203), $out += ' </div> <div class="widget-body TransferTable"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> </tr> </thead> <tbody> ', 
            $line = 218, $each(touristGroupTransfer.touristGroup.touristGroupFeeList, function(transferFeeList) {
                $out += ' <tr> <td> <input value="', $line = 221, $out += $escape(transferFeeList.name), 
                $out += '" readonly="readonly" type="text" name="type" class="col-sm-12"> </td> <td><span class="F-float F-count">', 
                $line = 223, $out += $escape(transferFeeList.count), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 224, $out += $escape(transferFeeList.price), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 225, $out += $escape(transferFeeList.count * transferFeeList.price), $out += "</span></td> <td>", 
                $line = 226, $out += $escape(transferFeeList.remark), $out += "</td> </tr> ", $line = 228;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </form>   <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">5</span> <label class="middle title-size">游客小组信息</label> </h5> <div class="widget-body TransferTable"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">联系人</th> </tr> </thead> <tbody> ', 
            $line = 261, $each(touristGroupTransfer.touristGroup.touristGroupMemberList, function(toulist, i) {
                $out += " <tr> <td>", $line = 263, $out += $escape(i + 1), $out += "</td> <td>", 
                $line = 264, $out += $escape(toulist.name), $out += "</td> <td>", $line = 265, $out += $escape(toulist.mobileNumber), 
                $out += "</td> <td>身份证</td> <td>", $line = 267, $out += $escape(toulist.idCardNumber), 
                $out += "</td> <td>", $line = 268, 0 == toulist.isContactUser ? ($out += "否", $line = 268) : ($out += "是", 
                $line = 268), $out += "</td> </tr> ", $line = 270;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-sm btn-danger T-cancelTransfer"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-sm btn-primary T-saveTransoutInfo" style="margin-left: 20px"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="updateTransfer clearfix globalAdd">\r\n    <form class="form-horizontal clearfix " role="form" style="margin-top:10px" onsubmit="return false">\r\n        <div class=" ui-sortable-handle">\r\n            <h5 class="">\r\n								<span class="badge badge-primary">1</span>\r\n								<label class="middle title-size">修改小组信息</label>\r\n							</h5>\r\n            <div class="widget-body">\r\n                <div class="widget-body">\r\n                    <div class="widget-main">\r\n                        <input type="hidden" name="status" value="{{touristGroupTransfer.touristGroup.status}}" />\r\n                        <input type="hidden" name="touristGroupTransferId" value="{{touristGroupTransfer.id}}">\r\n                        <input type="hidden" name="touristGroupTransferId" value="{{touristGroupTransfer.partnerAgency.id}}">\r\n                        <div class="form-group col-sm-12" style=" margin-top:20px; ">\r\n                            <div class="search-area">\r\n                                <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>同行地接：</label>\r\n                                <div class="col-sm-2">\r\n                                    <input type="text" class="col-sm-12 {{if touristGroupTransfer.status!=0}}T-choosePartnerAgency{{/if}} " style="{{if touristGroupTransfer.status==0}}color:#bbb; {{/if}} " {{if touristGroupTransfer.status==0}}readonly="readonly" {{/if}} placeholder="客户" name="" value="{{touristGroupTransfer.partnerAgency.travelAgencyName}}" />\r\n                                    <input type="hidden" name="transferPartnerAgencyId" value="{{touristGroupTransfer.partnerAgency.id}}" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- 付款金额start -->\r\n                        <div class="form-group col-sm-12 formOneList">\r\n                            <div class="search-area">\r\n                                <label class="col-sm-1 control-label no-padding-right pull-left">应付：</label>\r\n                                <div class="col-sm-2 trans-NeedPayAllMoney">\r\n                                    <input name="transNeedPayAllMoney" value="{{touristGroupTransfer.touristGroup.transNeedPayAllMoney}}" type="text" readonly="readonly" class="col-xs-12 F-float F-money" />\r\n                                </div>\r\n                                <label class="col-sm-1 control-label no-padding-right pull-left"><span class="necessary">*</span>计划现收：</label>\r\n                                <div class="col-sm-2 trans-PayedMoney">\r\n                                    {{if cashFlag==1}}\r\n                                    <input name="currentNeedPayMoney F-float F-money" value="{{touristGroupTransfer.touristGroup.currentNeedPayMoney}}" readonly="readonly" type="text" class="col-xs-12" /> {{else}}\r\n                                    <input name="currentNeedPayMoney F-float F-money" value="0" readonly="readonly" type="text" class="col-xs-12" /> {{/if}}\r\n                                </div>\r\n                                <div class="col-sm-2">\r\n                                	<label>\r\n                                	    <input type="checkbox" class="ace" {{if cashFlag==1}}checked="checked" {{/if}} disabled="disabled" value="{{cashFlag}}" name="cashFlag" />\r\n                                	    <span class="lbl"></span>\r\n                                	</label>\r\n                                	<label class="control-label no-padding-right">对方现收</label>\r\n                                </div>\r\n                                <div class="col-sm-2 trans-PayedMoney">\r\n                                    <input name="transPayedMoney" value="{{touristGroupTransfer.touristGroup.transPayedMoney}}" readonly="readonly" type="hidden" class="col-xs-12 F-float F-money" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- 付款金额end -->\r\n                        <div class="form-group col-sm-12">\r\n                            <div class="search-area">\r\n                                <label class="col-sm-1 control-label no-padding-right">外转备注:</label>\r\n                                <div class="col-sm-10">\r\n                                    <textarea class="form-control col-sm-12" name="transRemark" value="" maxlength="1000">{{touristGroupTransfer.touristGroup.transRemark}}</textarea>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class="form-group col-sm-12">\r\n                            <div class="search-area">\r\n                                <!-- 新增费用项目 -->\r\n                                <div class="col-sm-8">\r\n                                    <button class="btn btn-sm btn-success T-transfer-addCost pull-left"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- 转客列表编辑start -->\r\n                        <table class="table table-striped table-bordered table-hover addTransferCostTable">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class="th-border">费用项</th>\r\n                                    <th class="th-border"><span class="necessary pull-left col-sm-2">*</span>数量</th>\r\n                                    <th class="th-border"><span class="necessary pull-left col-sm-2">*</span>单价</th>\r\n                                    <th class="th-border">金额</th>\r\n                                    <th class="th-border">说明</th>\r\n                                    <th class="th-border">操作</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody class="T-addTransferCost">\r\n                                <!-- 其他费用 -->\r\n                                {{each touristGroupTransfer.touristGroup.touristGroupTransferFeeList as transferFee1}} {{if transferFee1 != null}}\r\n                                <tr data-entity-id="{{transferFee1.id}}">\r\n                                    <td>\r\n                                        <select name="type" class="col-sm-10 col-sm-offset-1">\r\n                                            {{#transferFee1.type | getFeeItemType: true}}\r\n                                        </select>\r\n                                    </td>\r\n                                    <td>\r\n                                        <input type="text" name="count" value="{{transferFee1.count}}" class="col-sm-10 col-sm-offset-1 count T-count T-calc F-float F-count" />\r\n                                    </td>\r\n                                    <td>\r\n                                        <input type="text" name="otherPrice" value="{{transferFee1.price}}" class="col-sm-10 col-sm-offset-1 price T-price T-calc F-float F-money" />\r\n                                    </td>\r\n                                    <td>\r\n                                        <input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-10 col-sm-offset-1   no-padding-right T-payMoney F-float F-money" />\r\n                                    </td>\r\n                                    <td>\r\n                                        <input name="remark" value="{{transferFee1.remark}}" type="text" class="col-sm-10 col-sm-offset-1   no-padding-right" />\r\n                                    </td>\r\n                                    <td>\r\n                                        <a class="T-updateTransfer-delete cursor">删除</a>\r\n                                    </td>\r\n                                </tr>\r\n                                {{/if}} {{/each}}\r\n                            </tbody>\r\n                        </table>\r\n                        <!-- 转客列表编辑end -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n        <div class=" ui-sortable-handle">\r\n            <h5 class="">\r\n						<span class="badge badge-primary">2</span>\r\n						<label class="middle title-size">线路产品信息</label>\r\n					</h5>\r\n            <div class="widget-body clearfix">\r\n                <div class="widget-main">\r\n                    <div class="form-group col-sm-12">\r\n                        <div class="search-area">\r\n                            <label class="col-sm-1 control-label no-padding-right">线路产品：</label>\r\n                            <div class="col-sm-2">\r\n                                <input name="lineProductName" value="{{touristGroupTransfer.lineProduct.name}}" type="text" readonly="readonly" class="date-picker col-xs-12" />\r\n                            </div>\r\n                            <label class="col-sm-1 control-label no-padding-right">出游日期:：</label>\r\n                            <div class="col-sm-2">\r\n                                <input name="createTime" value="{{touristGroupTransfer.touristGroup.startTime | dateFormat:\'yyyy-MM-dd\'}}" disabled="disabled" type="text" class="date-picker col-xs-12" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class="form-group col-sm-12">\r\n                        <div class="search-area">\r\n                            <label class="col-sm-1 control-label no-padding-right">客户:</label>\r\n                            <div class="col-sm-2">\r\n                                <input value="{{touristGroupTransfer.touristGroup.partnerAgency.travelAgencyName}}" readonly="readonly" type="text" class="col-xs-12" />\r\n                            </div>\r\n                            <label class="col-sm-1 control-label no-padding-right">同行联系人:</label>\r\n                            <div class="col-sm-2">\r\n                                <input name="contactMemberName" value="{{if touristGroupTransfer.touristGroup.partnerAgencyContact != null}}{{touristGroupTransfer.touristGroup.partnerAgencyContact.contactRealname}}|{{touristGroupTransfer.touristGroup.partnerAgencyContact.contactMobileNumber}}{{/if}}" readonly="readonly" type="text" class="col-xs-12" />\r\n                            </div>\r\n                            <label class="col-sm-1 control-label no-padding-right">获得方式:</label>\r\n                            <div class="col-sm-2">\r\n                                <select name="getType" class="col-sm-12" disabled="disabled">\r\n                                    <option{{if touristGroupTransfer.touristGroup.getType==1 }} selected="selected" {{/if}} value="1">旅行社系统</option>\r\n                                        <option{{if touristGroupTransfer.touristGroup.getType==2 }} selected="selected" {{/if}} value="2">传真</option>\r\n                                            <option{{if touristGroupTransfer.touristGroup.getType==3 }} selected="selected" {{/if}} value="3">短信</option>\r\n                                                <option{{if touristGroupTransfer.touristGroup.getType==4 }} selected="selected" {{/if}} value="4">电话</option>\r\n                                                    <option{{if touristGroupTransfer.touristGroup.getType==5 }} selected="selected" {{/if}} value="5">QQ</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class="search-area col-sm-12">\r\n                        <label class="pull-left control-label no-padding-right">收客备注：</label>\r\n                        <div class="col-sm-10">\r\n                            <textarea class="form-control col-sm-12" name="remark" value="{{touristGroupTransfer.touristGroup.remark}}" readonly="readonly" maxlength="1000">{{touristGroupTransfer.touristGroup.remark}}</textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <!-- 收客信息start-->\r\n    <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n        <div class="form-group">\r\n            <div class="col-xs-12 col-sm-12 widget-container-col" style="margin-top:-15px">\r\n                <div class=" ui-sortable-handle">\r\n                    <h5 class="">\r\n							<span class="badge badge-primary">4</span>\r\n							<label class="middle title-size">收客信息</label>\r\n						</h5>\r\n                    <div class="search-area col-sm-12">\r\n                        {{if isParent==1}}\r\n                        <label class="col-sm-1 control-label no-padding-right" style="width:84px;">应收：</label>\r\n                        <div class="col-sm-1">\r\n                            <input name="needPayAllMoney" value="{{parentTouristGroup.subsectionNeedPayAllMoney}}" readonly="readonly" type="text" class="col-xs-12 F-float F-money" />\r\n                        </div>\r\n                        <label class="col-sm-1 control-label no-padding-right">已收：</label>\r\n                        <div class="col-sm-1">\r\n                            <input name="payedMoney" value="{{parentTouristGroup.payedMoney}}" readonly="readonly" type="text" class="col-xs-12 F-float F-money" />\r\n                        </div>\r\n                        <label class="col-sm-1 control-label no-padding-right">计划现收：</label>\r\n                        <div class="col-sm-1">\r\n                            {{if cashFlag==1}}\r\n                            <input name="currentNeedPayMoney" value="{{parentTouristGroup.currentNeedPayMoney}}" readonly="readonly" type="text" class="col-xs-12 F-float F-money" /> {{else}}\r\n                            <input name="currentNeedPayMoney" value="0" readonly="readonly" type="text" class="col-xs-12 F-float F-money" /> {{/if}}\r\n                        </div>\r\n                        {{else}}\r\n                        <label class="col-sm-1 control-label no-padding-right" style="width:84px;">应收：</label>\r\n                        <div class="col-sm-1">\r\n                            <input name="needPayAllMoney" value="{{touristGroupTransfer.touristGroup.needPayAllMoney}}" readonly="readonly" type="text" class="col-xs-12 F-float F-money" />\r\n                        </div>\r\n                        <label class="col-sm-1 control-label no-padding-right">已收：</label>\r\n                        <div class="col-sm-1">\r\n                            <input name="payedMoney" value="{{touristGroupTransfer.touristGroup.payedMoney}}" readonly="readonly" type="text" class="col-xs-12 F-float F-money" />\r\n                        </div>\r\n                        <label class="col-sm-1 control-label no-padding-right">计划现收：</label>\r\n                        <div class="col-sm-1">\r\n                            {{if cashFlag==1}}\r\n                            <input name="currentNeedPayMoney" value="{{touristGroupTransfer.touristGroup.currentNeedPayMoney}}" readonly="readonly" type="text" class="col-xs-12 F-float F-money" /> {{else}}\r\n                            <input name="currentNeedPayMoney" value="0" readonly="readonly" type="text" class="col-xs-12 F-float F-money" /> {{/if}}\r\n                        </div>\r\n                        {{/if}}\r\n                    </div>\r\n                    <div class="widget-body TransferTable">\r\n                        <div class="widget-main no-padding">\r\n                            <table class="table table-striped table-bordered table-hover">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class="th-border">费用项</th>\r\n                                        <th class="th-border">数量</th>\r\n                                        <th class="th-border">单价</th>\r\n                                        <th class="th-border">金额</th>\r\n                                        <th class="th-border">说明</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    {{each touristGroupTransfer.touristGroup.touristGroupFeeList as transferFeeList}}\r\n                                    <tr>\r\n                                        <td>\r\n                                            <input value="{{transferFeeList.name}}" readonly="readonly" type="text" name="type" class="col-sm-12">\r\n                                        </td>\r\n                                        <td><span class="F-float F-count">{{transferFeeList.count}}</span></td>\r\n                                        <td><span class="F-float F-money">{{transferFeeList.price}}</span></td>\r\n                                        <td><span class="F-float F-money">{{transferFeeList.count*transferFeeList.price}}</span></td>\r\n                                        <td>{{transferFeeList.remark}}</td>\r\n                                    </tr>\r\n                                    {{/each}}\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <!-- 收客信息end -->\r\n    <!-- 游客信息start -->\r\n    <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n        <div class="form-group">\r\n            <div class="col-xs-12 col-sm-12 widget-container-col">\r\n                <div class=" ui-sortable-handle">\r\n                    <h5 class="">\r\n									<span class="badge badge-primary">5</span>\r\n									<label class="middle title-size">游客小组信息</label>\r\n								</h5>\r\n                    <div class="widget-body TransferTable">\r\n                        <div class="widget-main no-padding">\r\n                            <table class="table table-striped table-bordered table-hover">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class="th-border">序号</th>\r\n                                        <th class="th-border">姓名</th>\r\n                                        <th class="th-border">联系电话</th>\r\n                                        <th class="th-border">证件类型</th>\r\n                                        <th class="th-border">证件号</th>\r\n                                        <th class="th-border">联系人</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    {{each touristGroupTransfer.touristGroup.touristGroupMemberList as toulist i}}\r\n                                    <tr>\r\n                                        <td>{{i+1}}</td>\r\n                                        <td>{{toulist.name}}</td>\r\n                                        <td>{{toulist.mobileNumber}}</td>\r\n                                        <td>身份证</td>\r\n                                        <td>{{toulist.idCardNumber}}</td>\r\n                                        <td>{{if toulist.isContactUser==0}}否{{else}}是{{/if}}</td>\r\n                                    </tr>\r\n                                    {{/each}}\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-sm btn-danger T-cancelTransfer">\r\n                <i class="ace-icon fa fa-times"></i> 取消\r\n            </button>\r\n            <button class="btn btn-sm btn-primary T-saveTransoutInfo" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-check"></i> 保存\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});