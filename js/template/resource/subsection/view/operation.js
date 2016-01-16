/*TMODJS:{"debug":true,"version":781,"md5":"1700aadba04a2607b1a370e9547fbe0e"}*/
define(function(require) {
    return require("../../../template")("resource/subsection/view/operation", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, ptGroup = $data.ptGroup, $each = $utils.$each, mark = ($data.transferList, 
            $data.$index, $data.mark), subtGroupList = $data.subtGroupList, $string = ($data.subList, 
            $data.indexA, $data.FeeList, $data.index, $utils.$string), $out = "";
            return $out += '<div class="col-xs-12 operationMainForm globalAdd"> <div class="form-group clearfix" style="padding-bottom:15px;"> <input type="hidden" name="touristGroupId" value="', 
            $line = 3, $out += $escape(ptGroup.id), $out += '" /> <input type="hidden" name="touristGroupStartTime" value="', 
            $line = 4, $out += $escape($helpers.dateFormat(ptGroup.startTime, "yyyy-MM-dd")), 
            $out += '" /> <input type="hidden" name="touristGroupDays" value="', $line = 5, 
            $out += $escape(ptGroup.lineProduct.days), $out += '" /> <div class="row"> <label class="control-label col-xs-2">线路产品: ', 
            $line = 7, $out += $escape(ptGroup.lineProduct.name), $out += '</label> <label class="control-label col-xs-2">类别：', 
            $line = 8, $out += $escape(ptGroup.lineProduct.type), $out += '</label> <label class="control-label col-xs-2">应用范围：', 
            $line = 9, 0 == ptGroup.lineProduct.customerType ? ($out += "散客", $line = 9) : ($out += "团体", 
            $line = 9), $out += "</label> <label class=\"control-label col-xs-2\">天数：<span class='F-float F-count'>", 
            $line = 10, $out += $escape(ptGroup.lineProduct.days), $out += '</span>天</label> <label class="control-label col-xs-2 ">出游日期: <span class="T-startTime">', 
            $line = 11, $out += $escape($helpers.dateFormat(ptGroup.startTime, "yyyy-MM-dd")), 
            $out += '</span></label> </div> <div class="row"> <label class="control-label col-xs-2">来源: ', 
            $line = 14, $out += $escape(ptGroup.partnerAgency.travelAgencyName), $out += '</label> <label class="control-label col-xs-2">联系人: ', 
            $line = 15, $out += $escape(ptGroup.contactMember.name), $out += '</label> <label class="control-label col-xs-2">联系电话: ', 
            $line = 16, $out += $escape(ptGroup.contactMember.mobileNumber), $out += '</label> <label class="control-label col-xs-2">人数合计: ', 
            $line = 17, $out += $escape(ptGroup.adultCount), $out += "大", $line = 17, $out += $escape(ptGroup.childCount), 
            $out += "小</label> <label class=\"control-label col-xs-2\">应收: <span class='F-float F-money'>", 
            $line = 18, $out += $escape(ptGroup.needPayAllMoney), $out += '</span></label> </div> </div>  <div class="form-group"> <div class="col-sm-12"> <table class="table table-striped table-bordered table-hover addCostList"> <thead> <tr> <th class="th-border" width="20%">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> </tr> </thead> <tbody class="T-innerOutEditFeeTbody"> <tr data-entity-id="1" data-type="3"> <td class="T-name"> FEE </td> <td class="T-count"> 100 </td> <td class="T-price"> 2 </td> <td>200</td> <td> RMARK </td> </tr>  ', 
            $line = 55, $each(ptGroup.touristGroupFeeList, function(transferList) {
                $out += ' <tr data-entity-id="', $line = 56, $out += $escape(transferList.id), $out += '" data-type="', 
                $line = 56, $out += $escape(transferList.type), $out += '"> <td class="T-name"> ', 
                $line = 58, $out += $escape(transferList.name), $out += ' </td> <td class="T-count"> ', 
                $line = 61, $out += $escape(transferList.count), $out += ' </td> <td class="T-price"> ', 
                $line = 64, $out += $escape(transferList.price), $out += " </td> <td>", $line = 66, 
                $out += $escape(transferList.price * transferList.count), $out += "</td> <td> ", 
                $line = 69, $out += $escape(transferList.remark), $out += " </td> </tr> ", $line = 72;
            }), $out += ' </tbody> </table> </div> </div>  <div class="form-group"> <button class="btn btn-sm btn-success T-btn-operation-add" data-mark="', 
            $line = 81, $out += $escape(mark), $out += '"> <i class="ace-icon fa fa-plus"></i>新增分段</button> </div> <div class="form-group"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>线路产品</th> <th>针对客源</th> <th>行程天数</th> <th>出游日期</th> <th>费用项</th> <th>数量</th> <th>单价</th> <th>金额</th> <th>本段现收团款</th> <th>本段核算中转</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody class="T-subsectionOperationTbody" data-neePayAllMoney="', 
            $line = 102, $out += $escape(ptGroup.needPayAllMoney), $out += '"> ', $line = 103, 
            $each(subtGroupList, function(subList) {
                $out += " ", $line = 104, null != subList.id && ($out += ' <tr data-entity-id="', 
                $line = 105, $out += $escape(subList.id), $out += '"> <td> <input type="hidden" name="lineProductId" value="', 
                $line = 107, $out += $escape(subList.lineProduct.id), $out += '" /> <input class="', 
                $line = 108, 1 == subList.status && ($out += "T-chooseLineProduct", $line = 108), 
                $out += ' col-sm-12" name="lineProduct" ', $line = 108, 1 != subList.status && ($out += 'readonly="readonly" ', 
                $line = 108), $out += ' type="text" value="', $line = 108, $out += $escape(subList.lineProduct.name), 
                $out += '" /> </td> <td> <input type="text" name="customerType" class="col-sm-12" readonly="readonly" value="', 
                $line = 111, 0 == subList.lineProduct.customerType ? ($out += "散客", $line = 111) : ($out += "团体", 
                $line = 111), $out += '" /> </td> <td> <input type="text" name="days" class="col-sm-10 F-float F-count" readonly="readonly" value="', 
                $line = 114, $out += $escape(subList.lineProduct.days), $out += '" /><span class="col-sm-2" style="line-height: 30px">天</span></td> <td> <input class="', 
                $line = 116, 1 == subList.status && ($out += "T-startTime", $line = 116), $out += ' datepicker col-sm-12" name="startTime" type="text" ', 
                $line = 116, 1 != subList.status && ($out += 'readonly="readonly" ', $line = 116), 
                $out += ' value="', $line = 116, $out += $escape($helpers.dateFormat(subList.startTime, "yyyy-MM-dd")), 
                $out += '" /> </td> ', $line = 119, null != subList.touristGroupFeeList && ($out += " <td> ", 
                $line = 121, $each(subList.touristGroupFeeList, function(FeeList, index) {
                    $out += " ", $line = 122, 0 == index && ($out += ' <div class="clearfix" style="margin-top:6px"> <select name="type" data-index="', 
                    $line = 124, $out += $escape(index), $out += '" data-id="0" class="T-type pull-left"> ', 
                    $line = 125, $out += $string($helpers.getFeeItemType(FeeList.type, !1)), $out += ' </select> <label class="timeArea" style="float:right;padding-top:0px;"> <button class="btn btn-success btn-sm btn-white T-add"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </button> </label> </div> ', 
                    $line = 133), $out += " ", $line = 134, index > 0 && ($out += ' <div class="clearfix" style="margin-top:5px"> <select name="type" data-index="', 
                    $line = 136, $out += $escape(index), $out += '" data-id="', $line = 136, $out += $escape(FeeList.id), 
                    $out += '" class="T-type pull-left"> ', $line = 137, $out += $string($helpers.getFeeItemType(FeeList.type, !1)), 
                    $out += ' </select> <label class="timeArea" style="float:right;padding-top:0px;"> <button class="btn btn-success btn-sm btn-white T-del"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i> </button> </label> </div> ', 
                    $line = 145), $out += " ", $line = 146;
                }), $out += " </td> <td> ", $line = 150, $each(subList.touristGroupFeeList, function(FeeList, index) {
                    $out += " ", $line = 151, 0 == index && ($out += ' <div class="clearfix" style="margin-top:6px" data-id=\'0\'><input data-index="', 
                    $line = 152, $out += $escape(index), $out += '" class=" F-float F-count T-count T-calc T-count-0 " type="text" name="count" value="', 
                    $line = 152, $out += $escape(FeeList.count), $out += '"></div> ', $line = 153), 
                    $out += " ", $line = 154, index > 0 && ($out += ' <div class="clearfix" style="margin-top:10px" data-id=\'0\'><input data-index="', 
                    $line = 155, $out += $escape(index), $out += '" class=" F-float F-count T-count T-calc T-count-0 " type="text" name="count" value="', 
                    $line = 155, $out += $escape(FeeList.count), $out += '"></div> ', $line = 157), 
                    $out += " ", $line = 158;
                }), $out += " </td> <td> ", $line = 161, $each(subList.touristGroupFeeList, function(FeeList, index) {
                    $out += " ", $line = 162, 0 == index && ($out += ' <div class="clearfix" style="margin-top:6px" data-id=\'\'><input data-index="', 
                    $line = 163, $out += $escape(index), $out += '" class="F-float F-count T-price T-calc T-price-0" type="text" name="price" value="', 
                    $line = 163, $out += $escape(FeeList.price), $out += '"></div> ', $line = 164), 
                    $out += " ", $line = 165, index > 0 && ($out += ' <div class="clearfix" style="margin-top:10px" data-id=\'\'><input data-index="', 
                    $line = 166, $out += $escape(index), $out += '" class="F-float F-count T-price T-calc T-price-0" type="text" name="price" value="', 
                    $line = 166, $out += $escape(FeeList.price), $out += '"></div> ', $line = 167), 
                    $out += " ", $line = 168;
                }), $out += " </td> ", $line = 170), $out += ' <td> <div class="clearfix" style="margin-top:10px" data-id=\'\'><input class="F-float F-money T-payedMoney T-calc" value="" type="text" name="needPayAllMoney" value=""></div> </td> <td> <input type="radio" name="operateCurrentNeedPayMoney" ', 
                $line = 178, 1 == subList.operateCurrentNeedPayMoney && ($out += 'checked="checked" ', 
                $line = 178), $out += ' /> </td> <td><input type="radio" name="operateCalculteOut" class="T-operateCalculteOut" ', 
                $line = 180, 1 == subList.operateCalculteOut && ($out += 'checked="checked" ', $line = 180), 
                $out += " /></td> <td> ", $line = 182, 0 == subList.status ? ($out += " 已发团 ", $line = 182) : 1 == subList.status ? ($out += " 未分团 ", 
                $line = 182) : 2 == subList.status ? ($out += " 已分团 ", $line = 182) : 3 == subList.status ? ($out += " 已转客 ", 
                $line = 182) : 4 == subList.status ? ($out += " 已取消 ", $line = 182) : 5 == subList.status ? ($out += " 已分段 ", 
                $line = 182) : 6 == subList.status && ($out += " 已内转 ", $line = 182), $out += ' </td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entity-id="', 
                $line = 186, $out += $escape(subList.id), $out += '" class=" ', $line = 186, 1 == subList.status && ($out += "T-btn-operation-delete", 
                $line = 186), $out += ' cursor" ', $line = 186, 1 != subList.status && ($out += 'style="color: #bbb;" ', 
                $line = 186), $out += "> 删除 </a> </div> </td> </tr>", $line = 191), $line = 191;
            }), $out += ' </tbody> </table> </div> <div class="form-group" style="text-align: center;"> <button class="btn btn-sm btn-danger T-btn-operation-close otherButton"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-sm btn-success T-btn-operation-save otherButton" data-days=', 
            $line = 197, $out += $escape(ptGroup.lineProduct.days), $out += " data-currentNeedPayMoney=", 
            $line = 197, $out += $escape(ptGroup.currentNeedPayMoney), $out += " ", $line = 197, 
            1 == mark && ($out += 'data-entity-mark="1" ', $line = 197), $out += '> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 operationMainForm globalAdd">\r\n    <div class="form-group clearfix" style="padding-bottom:15px;">\r\n        <input type="hidden" name="touristGroupId" value="{{ptGroup.id}}" />\r\n        <input type="hidden" name="touristGroupStartTime" value="{{ptGroup.startTime | dateFormat: \'yyyy-MM-dd\'}}" />\r\n        <input type="hidden" name="touristGroupDays" value="{{ptGroup.lineProduct.days}}" />\r\n        <div class="row">\r\n            <label class="control-label col-xs-2">线路产品: {{ptGroup.lineProduct.name}}</label>\r\n            <label class="control-label col-xs-2">类别：{{ptGroup.lineProduct.type}}</label>\r\n            <label class="control-label col-xs-2">应用范围：{{if ptGroup.lineProduct.customerType == 0}}散客{{else}}团体{{/if}}</label>\r\n            <label class="control-label col-xs-2">天数：<span class=\'F-float F-count\'>{{ptGroup.lineProduct.days}}</span>天</label>\r\n            <label class="control-label col-xs-2 ">出游日期: <span class="T-startTime">{{ptGroup.startTime | dateFormat: \'yyyy-MM-dd\'}}</span></label>\r\n        </div>\r\n        <div class="row">\r\n            <label class="control-label col-xs-2">来源: {{ptGroup.partnerAgency.travelAgencyName}}</label>\r\n            <label class="control-label col-xs-2">联系人: {{ptGroup.contactMember.name}}</label>\r\n            <label class="control-label col-xs-2">联系电话: {{ptGroup.contactMember.mobileNumber}}</label>\r\n            <label class="control-label col-xs-2">人数合计: {{ptGroup.adultCount}}大{{ptGroup.childCount}}小</label>\r\n            <label class="control-label col-xs-2">应收: <span class=\'F-float F-money\'>{{ptGroup.needPayAllMoney}}</span></label>\r\n        </div>\r\n    </div>\r\n\r\n    \r\n    <!--游客小组费start-->\r\n    <div class="form-group">\r\n        <div class="col-sm-12">\r\n            <table class="table table-striped table-bordered table-hover addCostList"> \r\n                <thead>\r\n                    <tr>\r\n                        <th class="th-border" width="20%">费用项</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">金额</th>   \r\n                        <th class="th-border">说明</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-innerOutEditFeeTbody">\r\n                    <tr  data-entity-id="1" data-type="3">\r\n                        <td class="T-name">\r\n                            FEE\r\n                        </td>   \r\n                        <td class="T-count">\r\n                            100\r\n                        </td>\r\n                        <td  class="T-price">\r\n                            2\r\n                        </td>\r\n                        <td>200</td>\r\n\r\n                        <td>\r\n                            RMARK\r\n                        </td>\r\n                    </tr>\r\n\r\n                    <!--游客小组费用start-->\r\n                    {{each ptGroup.touristGroupFeeList as transferList}}\r\n                        <tr  data-entity-id="{{transferList.id}}" data-type="{{transferList.type}}">\r\n                            <td class="T-name">\r\n                                {{transferList.name}}\r\n                            </td>   \r\n                            <td class="T-count">\r\n                                {{transferList.count}}\r\n                            </td>\r\n                            <td class="T-price">\r\n                                {{transferList.price}}\r\n                            </td>\r\n                            <td>{{transferList.price*transferList.count}}</td>\r\n\r\n                            <td>\r\n                                {{transferList.remark}}\r\n                            </td>\r\n                        </tr>\r\n                    {{/each}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <!--游客小组费end-->\r\n\r\n\r\n    <div class="form-group">\r\n        <button class="btn btn-sm btn-success T-btn-operation-add" data-mark="{{mark}}"> <i class="ace-icon fa fa-plus"></i>新增分段</button>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n        <table class="table table-striped table-bordered table-hover">\r\n            <thead>\r\n                <tr class="bg-blur">\r\n                    <th>线路产品</th>\r\n                    <th>针对客源</th>\r\n                    <th>行程天数</th>\r\n                    <th>出游日期</th>\r\n                    <th>费用项</th>\r\n                    <th>数量</th>\r\n                    <th>单价</th>\r\n                    <th>金额</th>\r\n                    <th>本段现收团款</th>\r\n                    <th>本段核算中转</th>\r\n                    <th>状态</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody class="T-subsectionOperationTbody" data-neePayAllMoney="{{ptGroup.needPayAllMoney}}">\r\n            {{each subtGroupList as subList indexA}}\r\n              {{if subList.id != null}}\r\n                <tr data-entity-id="{{subList.id}}">\r\n                    <td>\r\n                        <input type="hidden" name="lineProductId" value="{{subList.lineProduct.id}}" />\r\n                        <input class="{{if subList.status == 1}}T-chooseLineProduct{{/if}} col-sm-12" name="lineProduct" {{if subList.status !=1 }}readonly="readonly" {{/if}} type="text" value="{{subList.lineProduct.name}}" />\r\n                    </td>\r\n                    <td>\r\n                        <input type="text" name="customerType" class="col-sm-12" readonly="readonly" value="{{if subList.lineProduct.customerType == 0}}散客{{else}}团体{{/if}}" />\r\n                    </td>\r\n                    <td>\r\n                        <input type="text" name="days" class="col-sm-10 F-float F-count" readonly="readonly" value="{{subList.lineProduct.days}}" /><span class="col-sm-2" style="line-height: 30px">天</span></td>\r\n                    <td>\r\n                        <input class="{{if subList.status == 1}}T-startTime{{/if}} datepicker col-sm-12" name="startTime" type="text" {{if subList.status !=1 }}readonly="readonly" {{/if}} value="{{subList.startTime | dateFormat: \'yyyy-MM-dd\'}}" />\r\n                    </td>\r\n\r\n                    {{if subList.touristGroupFeeList!=null}}\r\n                        <td>\r\n                         {{each subList.touristGroupFeeList as FeeList index}}\r\n                         {{if index == 0}}\r\n                            <div class="clearfix" style="margin-top:6px">\r\n                                <select name="type" data-index="{{index}}"  data-id="0" class="T-type pull-left">\r\n                                    {{#FeeList.type | getFeeItemType: false}}\r\n                                 </select>\r\n                                <label class="timeArea" style="float:right;padding-top:0px;">\r\n                                    <button class="btn btn-success btn-sm btn-white T-add">\r\n                                        <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                    </button>\r\n                                </label>\r\n                            </div>\r\n                          {{/if}}\r\n                          {{if index>0}}\r\n                           <div class="clearfix" style="margin-top:5px">\r\n                                <select name="type" data-index="{{index}}"  data-id="{{FeeList.id}}" class="T-type pull-left">\r\n                                    {{#FeeList.type | getFeeItemType: false}}\r\n                                 </select>\r\n                                <label class="timeArea" style="float:right;padding-top:0px;">\r\n                                    <button class="btn btn-success btn-sm btn-white T-del">\r\n                                        <i class="ace-icon fa fa-minus bigger-110 icon-only"></i>\r\n                                    </button>\r\n                                </label>\r\n                            </div>\r\n                          {{/if}}\r\n                        {{/each}}\r\n\r\n                        </td>\r\n                         <td>\r\n                          {{each subList.touristGroupFeeList as FeeList index}}\r\n                           {{if index == 0}}\r\n                            <div class="clearfix" style="margin-top:6px" data-id=\'0\'><input  data-index="{{index}}" class=" F-float F-count T-count T-calc T-count-0 " type="text" name="count"  value="{{FeeList.count}}"></div>\r\n                            {{/if}}\r\n                            {{if index>0}}\r\n                            <div class="clearfix" style="margin-top:10px" data-id=\'0\'><input  data-index="{{index}}" class=" F-float F-count T-count T-calc T-count-0 " type="text" name="count"  value="{{FeeList.count}}"></div>\r\n\r\n                            {{/if}}\r\n                          {{/each}}\r\n                        </td>\r\n                         <td>\r\n                         {{each subList.touristGroupFeeList as FeeList index}}\r\n                         {{if index == 0}}\r\n                            <div class="clearfix" style="margin-top:6px" data-id=\'\'><input   data-index="{{index}}" class="F-float F-count T-price T-calc T-price-0"  type="text" name="price" value="{{FeeList.price}}"></div>\r\n                         {{/if}}\r\n                         {{if index>0}}\r\n                            <div class="clearfix" style="margin-top:10px" data-id=\'\'><input   data-index="{{index}}" class="F-float F-count T-price T-calc T-price-0"  type="text" name="price" value="{{FeeList.price}}"></div>\r\n                         {{/if}}\r\n                         {{/each}}\r\n                        </td>\r\n                     {{/if}}\r\n\r\n                    <td>      \r\n                    <div class="clearfix" style="margin-top:10px" data-id=\'\'><input class="F-float F-money  T-payedMoney T-calc" value="" type="text" name="needPayAllMoney" value=""></div>\r\n                    </td>\r\n                   \r\n\r\n                    <td>\r\n                        <input type="radio" name="operateCurrentNeedPayMoney" {{if subList.operateCurrentNeedPayMoney==1 }}checked="checked" {{/if}} />\r\n                    </td>\r\n                    <td><input type="radio" name="operateCalculteOut" class="T-operateCalculteOut" {{if subList.operateCalculteOut==1 }}checked="checked" {{/if}} /></td>\r\n                    <td>\r\n                        {{if subList.status == 0}} 已发团 {{else if subList.status == 1}} 未分团 {{else if subList.status == 2}} 已分团 {{else if subList.status == 3}} 已转客 {{else if subList.status == 4}} 已取消 {{else if subList.status == 5}} 已分段 {{else if subList.status == 6}} 已内转 {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        <div class="hidden-sm hidden-xs btn-group">\r\n                            <a data-entity-id="{{subList.id}}" class=" {{if subList.status == 1}}T-btn-operation-delete{{/if}} cursor" {{if subList.status !=1 }}style="color: #bbb;" {{/if}}>\r\n							删除\r\n						</a>\r\n                        </div>\r\n                    </td>\r\n                </tr>{{/if}}{{/each}}\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div class="form-group" style="text-align: center;">\r\n        <button class="btn btn-sm btn-danger T-btn-operation-close otherButton"> <i class="ace-icon fa fa-times"></i> 取消 </button>\r\n        <button class="btn btn-sm btn-success T-btn-operation-save otherButton" data-days={{ptGroup.lineProduct.days}} data-currentNeedPayMoney={{ptGroup.currentNeedPayMoney}} {{if mark==1 }}data-entity-mark="1" {{/if}}> <i class="ace-icon fa fa-check"></i> 保存 </button>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});