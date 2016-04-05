/*TMODJS:{"debug":true,"version":260,"md5":"746134543c4520fd0cf671bb701fbc5f"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/ticketArrange", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, ticketArrange = $data.ticketArrange, $each = $utils.$each, $escape = ($data.arrange, 
            $data.index, $utils.$escape), tripPlan = $data.tripPlan, isFinance = ($data.rs, 
            $data.isFinance), remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i>票务 <a href="javascript:void(0)" class="T-ticket-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <div class="overflow-x min-w-1050"> <table class="table overflow-table table-striped table-bordered table-hover w-1500"> <thead> <tr> <th class="th-border" rowspan="2"><span class="necessary">*</span>票务商家</th> <th class="th-border" rowspan="2"><span class="necessary">*</span>类型</th> <th class="th-border" rowspan="2"><span class="necessary">*</span>日期</th> <th class="th-border" rowspan="2">出发地</th> <th class="th-border" rowspan="2">目的地</th> <th class="th-border" rowspan="2">班次</th> <th class="th-border" rowspan="2"><span class="necessary">*</span>座位级别</th> <th class="th-border" rowspan="2"><span class="necessary">*</span>单价</th> <th class="th-border" rowspan="2"><span class="necessary">*</span>数量</th> <th class="th-border" rowspan="2">优惠</th> <th class="th-border" rowspan="2">应付</th> <th class="th-border" rowspan="2">已付</th> <th class="th-border" colspan="6">导游实销</th> <th class="th-border" rowspan="2">是否对账</th> </tr> <tr> <th class="th-border">导游</th> <th class="th-border">数量</th> <th class="th-border">付款方式</th> <th class="th-border">金额</th> <th class="th-border">单据</th> <th class="th-border">备注</th> </tr> </thead> <tbody class="T-count-ticket"> ', 
            $line = 41, ticketArrange.listMap && ticketArrange.listMap.length && ($out += " ", 
            $line = 42, $each(ticketArrange.listMap, function(arrange) {
                $out += ' <tr badStatus = "', $line = 43, $out += $escape(arrange.badStatus), $out += '" ticketArrangeId="', 
                $line = 43, $out += $escape(arrange.id), $out += '" isConfirmAccount="', $line = 44, 
                $out += $escape(arrange.isConfirmAccount), $out += '"> <td><span class="ticketName">', 
                $line = 46, $out += $escape(arrange.ticketName), $out += "</span></td> <td> ", $line = 49, 
                1 == arrange.type ? ($out += " 机票 ", $line = 51) : 2 == arrange.type ? ($out += " 汽车票 ", 
                $line = 53) : 3 == arrange.type ? ($out += " 火车票 ", $line = 55) : 4 == arrange.type && ($out += " 轮船票 ", 
                $line = 57), $out += " </td> <td >", $line = 60, $out += $escape($helpers.dateFormat(arrange.dateTime, "yyyy-MM-dd")), 
                $out += "</td> <td >", $line = 62, $out += $escape(arrange.startingCity), $out += "</td> <td >", 
                $line = 64, $out += $escape(arrange.arriveCity), $out += "</td> <td>", $line = 66, 
                $out += $escape(arrange.shift), $out += "</td> <td>", $line = 68, $out += $escape(arrange.seatLevel), 
                $out += "</td> <td> ", $line = 71, -1 == tripPlan.billStatus ? ($out += " ", $line = 72, 
                1 == arrange.badStatus ? ($out += ' <span class="F-float F-money">', $line = 73, 
                $out += $escape(arrange.realPrice), $out += "</span> ", $line = 74) : ($out += ' <span class="F-float F-money">', 
                $line = 75, $out += $escape(arrange.realPrice), $out += "</span> ", $line = 76), 
                $out += ' <input type="hidden" name="price" value="', $line = 77, $out += $escape(arrange.realPrice), 
                $out += '" /> ', $line = 78) : ($out += " ", $line = 79, 1 == arrange.badStatus ? ($out += ' <input type="text" name="price" value="', 
                $line = 80, $out += $escape(arrange.realPrice), $out += '" class="w-80" readOnly="readOnly"/> ', 
                $line = 81) : ($out += ' <input type="text" name="price" value="', $line = 82, $out += $escape(arrange.realPrice), 
                $out += '" class="w-80" ', $line = 82, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                $line = 82), $out += "/> ", $line = 83), $out += " ", $line = 84), $out += " </td> <td> ", 
                $line = 88, 1 == arrange.badStatus ? ($out += ' <span class="F-float F-count">', 
                $line = 89, $out += $escape(arrange.memberCount), $out += "</span> ", $line = 90) : ($out += ' <input class="F-float F-count w-50" name="realCount" type="text" value="', 
                $line = 91, $out += $escape(arrange.realCount), $out += '" maxlength="5" ', $line = 92, 
                1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 92), $out += "/> ", 
                $line = 93), $out += " </td> <td> ", $line = 97, 1 == arrange.badStatus ? ($out += ' <span class="F-float F-money">', 
                $line = 98, $out += $escape(arrange.realReduceMoney), $out += "</span> ", $line = 99) : ($out += ' <input type="text" name="realReduceMoney" class="F-float F-money w-80" value="', 
                $line = 100, $out += $escape(arrange.realReduceMoney), $out += '" ', $line = 101, 
                1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 101), $out += "/> ", 
                $line = 102), $out += " </td> <td> ", $line = 106, 1 == arrange.badStatus ? ($out += ' <span class="ticketneedPayMoney F-float F-money">', 
                $line = 107, $out += $escape(arrange.realNeedPayMoney), $out += "</span> ", $line = 108) : ($out += " ", 
                $line = 109, 1 == arrange.isConfirmAccount ? ($out += ' <span class="ticketneedPayMoney F-float F-money" >', 
                $line = 110, $out += $escape(arrange.realNeedPayMoney), $out += "</span> ", $line = 111) : ($out += ' <span class="ticketneedPayMoney F-float F-money"></span> ', 
                $line = 113), $out += " ", $line = 114), $out += ' <input type="hidden" value="', 
                $line = 115, $out += $escape(arrange.realNeedPayMoney), $out += '" name="needPayMoney"> </td> <td><span class="F-float F-money">', 
                $line = 118, $out += $escape(arrange.payedMoney), $out += '</span></td> <td name="guideName"> <div class="div-h-30"> <button class="btn btn-success btn-sm btn-white T-addGuide pull-right"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </button>  </div> ', 
                $line = 127, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 128, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 129, $out += $escape(index + 1), 
                    $out += '" guideId = "', $line = 129, $out += $escape(rs.id), $out += '"> <span class="guideName">', 
                    $line = 130, $out += $escape(rs.guideName), $out += '</span> <input name="guideId" value="', 
                    $line = 131, $out += $escape(rs.id), $out += '" type="hidden" /> <input name="guideName" value="', 
                    $line = 132, $out += $escape(rs.guideName), $out += '" type="hidden" /> <input name="guideArrangeId" value="', 
                    $line = 133, $out += $escape(rs.guideArrangeId), $out += '" type="hidden" /> <button class="btn btn-danger btn-sm btn-white T-delGuide pull-right"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i> </button>  </div> ', 
                    $line = 139;
                }), $out += " ", $line = 140) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> <input name="guideId" type="hidden" /> <input name="guideName" type="text" class="w-80" ', 
                $line = 143, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 143), 
                $line = 143, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 143), 
                $out += '/> <button class="btn btn-danger btn-sm btn-white T-delGuide pull-right"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i> </button>   </div> ', 
                $line = 150), $out += ' </td> <td name="guideRealCount"> <div class="div-h-30"></div> ', 
                $line = 156, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 157, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 158, $out += $escape(index + 1), 
                    $out += '"> <input name="guideRealCount" value="', $line = 159, $out += $escape(rs.realCount), 
                    $out += '" class="w-50" ', $line = 160, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', 
                    $line = 160), $out += "/> </div> ", $line = 162;
                }), $out += " ", $line = 163) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> <input name="guideRealCount" class="w-50" ', 
                $line = 165, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 165), 
                $out += "/> </div> ", $line = 167), $out += ' </td> <td name="payType"> <div class="div-h-30"></div> ', 
                $line = 172, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 173, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 174, $out += $escape(index + 1), 
                    $out += '"> <select name="payType" ', $line = 175, 1 == arrange.isConfirmAccount && ($out += 'disabled="disabled"', 
                    $line = 175), $out += '> <option value="0" ', $line = 176, 0 == arrange.realPayType && ($out += 'selected="selected"', 
                    $line = 176), $out += '>现金</option> <option value="1" ', $line = 177, 1 == arrange.realPayType && ($out += 'selected="selected"', 
                    $line = 177), $out += '>刷卡</option> <option value="2" ', $line = 178, 2 == arrange.realPayType && ($out += 'selected="selected"', 
                    $line = 178), $out += ">签单</option> </select> </div> ", $line = 181;
                }), $out += " ", $line = 182) : ($out += ' <div class="div-h-30 mar-t-5" index="1" ', 
                $line = 183, 1 == arrange.isConfirmAccount && ($out += 'disabled="disabled"', $line = 183), 
                $out += '> <select name="payType"> <option value="0" >现金</option> <option value="1" >刷卡</option> <option value="2" >签单</option> </select> </div> ', 
                $line = 190), $out += ' </td> <td name="guidePayedMoney"> <div class="div-h-30"></div> ', 
                $line = 195, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 196, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 197, $out += $escape(index + 1), 
                    $out += '"> <input name="guidePayedMoney" value="', $line = 198, $out += $escape(rs.guidePayedMoney), 
                    $out += '" class="w-80" ', $line = 199, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', 
                    $line = 199), $out += "/> </div> ", $line = 201;
                }), $out += " ", $line = 202) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> <input name="guidePayedMoney" class="w-80" ', 
                $line = 204, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 204), 
                $out += "/> </div> ", $line = 206), $out += ' </td> <td name="billImage"> <div class="div-h-30"></div> ', 
                $line = 211, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 212, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 213, $out += $escape(index + 1), 
                    $out += '"> ', $line = 214, null != rs.billImage && "" != rs.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                    $line = 215, $out += $escape(rs.billImage), $out += '" class="btn-view">查看</a> ', 
                    $line = 216) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 218), $out += " </div> ", 
                    $line = 220;
                }), $out += " ", $line = 221) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> <span style="color:#bbb;">查看</span> </div> ', 
                $line = 225), $out += ' </td> <td name="billRemark"> <div class="div-h-30"></div> ', 
                $line = 230, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 231, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 232, $out += $escape(index + 1), 
                    $out += '"> <input name="billRemark" value="', $line = 233, $out += $escape(rs.billRemark), 
                    $out += '" ', $line = 234, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', 
                    $line = 234), $out += "/> </div> ", $line = 236;
                }), $out += " ", $line = 237) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> <input name="billRemark" ', 
                $line = 239, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 239), 
                $out += "/> </div> ", $line = 241), $out += " </td> <td>", $line = 244, 0 == arrange.isConfirmAccount ? ($out += " 未对账 ", 
                $line = 246) : ($out += " 已对账 ", $line = 248), $out += " &nbsp;&nbsp; ", $line = 250, 
                0 == arrange.payedMoney && 0 == arrange.isConfirmAccount ? ($out += ' <a href="javascript:void(0)" class="T-ticketArrDel">删除</a> ', 
                $line = 252) : ($out += ' <span style="color:#bbb;">删除</span> ', $line = 254), $out += " </td> </tr> ", 
                $line = 257;
            }), $out += " ", $line = 258), $out += " </tbody> </table> </div> ", $line = 262, 
            tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 266, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 266), $out += ' type="text" style="width:30%;" value="', $line = 266, remarkArrangeList.ticketRemark.length > 0 && ($line = 266, 
            $out += $escape(remarkArrangeList.ticketRemark[0].opCheckRemark), $line = 266), 
            $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 269, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 269), $out += ' type="text" style="width:30%;" value="', $line = 269, remarkArrangeList.ticketRemark.length > 0 && ($line = 269, 
            $out += $escape(remarkArrangeList.ticketRemark[0].financeCheckRemark), $line = 269), 
            $out += '" /> </div> </div> ', $line = 272), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa-medkit"></i>票务\r\n        <a href="javascript:void(0)" class="T-ticket-add">\r\n            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-plus"></i>\r\n                新增\r\n            </button>\r\n        </a>\r\n    </h5>\r\n</div>\r\n<div class="overflow-x min-w-1050">\r\n<table class="table overflow-table table-striped table-bordered table-hover w-1500">\r\n    <thead>\r\n    <tr>\r\n        <th class="th-border" rowspan="2"><span class="necessary">*</span>票务商家</th>\r\n        <th class="th-border" rowspan="2"><span class="necessary">*</span>类型</th>\r\n        <th class="th-border" rowspan="2"><span class="necessary">*</span>日期</th>\r\n        <th class="th-border" rowspan="2">出发地</th>\r\n        <th class="th-border" rowspan="2">目的地</th>\r\n        <th class="th-border" rowspan="2">班次</th>\r\n        <th class="th-border" rowspan="2"><span class="necessary">*</span>座位级别</th>\r\n        <th class="th-border" rowspan="2"><span class="necessary">*</span>单价</th>\r\n        <th class="th-border" rowspan="2"><span class="necessary">*</span>数量</th>\r\n        <th class="th-border" rowspan="2">优惠</th>\r\n        <th class="th-border" rowspan="2">应付</th>\r\n        <th class="th-border" rowspan="2">已付</th>\r\n       <th class="th-border" colspan="6">导游实销</th>\r\n        <th class="th-border" rowspan="2">是否对账</th>\r\n    </tr>\r\n    <tr>\r\n        <th class="th-border">导游</th>\r\n        <th class="th-border">数量</th>\r\n        <th class="th-border">付款方式</th>\r\n        <th class="th-border">金额</th>\r\n        <th class="th-border">单据</th>\r\n        <th class="th-border">备注</th>   \r\n    </tr>\r\n    </thead>\r\n    <tbody class="T-count-ticket">\r\n    {{if !!ticketArrange.listMap && ticketArrange.listMap.length}}\r\n    {{each ticketArrange.listMap as arrange index}}\r\n    <tr badStatus = "{{arrange.badStatus}}" ticketArrangeId="{{arrange.id}}"\r\n    isConfirmAccount="{{arrange.isConfirmAccount}}">\r\n\r\n        <td><span class="ticketName">{{arrange.ticketName}}</span></td><!-- 票务公司 -->\r\n\r\n        <td>\r\n            {{if arrange.type == 1}}\r\n                机票\r\n            {{else if arrange.type== 2}}\r\n                汽车票\r\n            {{else if arrange.type == 3}}\r\n                火车票\r\n            {{else if arrange.type == 4}}\r\n                轮船票\r\n            {{/if}}\r\n        </td><!-- 类型 -->\r\n\r\n        <td >{{arrange.dateTime | dateFormat: \'yyyy-MM-dd\'}}</td><!-- 日期 -->\r\n\r\n        <td >{{arrange.startingCity}}</td><!-- 出发地 -->\r\n\r\n        <td >{{arrange.arriveCity}}</td><!-- 目的地 -->\r\n\r\n        <td>{{arrange.shift}}</td><!-- 班次 -->\r\n\r\n        <td>{{arrange.seatLevel}}</td><!-- 座位级别 -->\r\n\r\n        <td>\r\n            {{if tripPlan.billStatus == -1}}\r\n                {{if arrange.badStatus == 1}}\r\n                    <span class="F-float F-money">{{arrange.realPrice}}</span>\r\n                {{else}}\r\n                    <span class="F-float F-money">{{arrange.realPrice}}</span>\r\n                {{/if}}\r\n                    <input type="hidden" name="price" value="{{arrange.realPrice}}" />\r\n            {{else}}\r\n                {{if arrange.badStatus == 1}}\r\n                    <input type="text" name="price" value="{{arrange.realPrice}}" class="w-80" readOnly="readOnly"/>\r\n                {{else}}\r\n                    <input type="text" name="price" value="{{arrange.realPrice}}" class="w-80" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                {{/if}}\r\n            {{/if}}\r\n        </td><!-- 单价 -->\r\n\r\n        <td>\r\n            {{if arrange.badStatus == 1}}\r\n                <span class="F-float F-count">{{arrange.memberCount}}</span>\r\n            {{else}}\r\n                <input class="F-float F-count w-50" name="realCount" type="text" value="{{arrange.realCount}}" maxlength="5" \r\n                {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n            {{/if}}\r\n        </td><!-- 数量 -->\r\n\r\n        <td>\r\n            {{if arrange.badStatus == 1}}\r\n                <span class="F-float F-money">{{arrange.realReduceMoney}}</span>\r\n            {{else}}\r\n                <input type="text" name="realReduceMoney" class="F-float F-money w-80" value="{{arrange.realReduceMoney}}"\r\n                {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n            {{/if}}\r\n        </td><!-- 优惠 -->\r\n\r\n        <td>\r\n            {{if arrange.badStatus == 1}}\r\n                <span class="ticketneedPayMoney F-float F-money">{{arrange.realNeedPayMoney}}</span>\r\n            {{else}}\r\n                {{if arrange.isConfirmAccount == 1}}\r\n                    <span class="ticketneedPayMoney F-float F-money" >{{arrange.realNeedPayMoney}}</span>\r\n                {{else}}\r\n                    <span class="ticketneedPayMoney F-float F-money"></span>\r\n                {{/if}}\r\n            {{/if}}\r\n            <input type="hidden" value="{{arrange.realNeedPayMoney}}" name="needPayMoney">\r\n        </td><!-- 应付 -->\r\n\r\n        <td><span class="F-float F-money">{{arrange.payedMoney}}</span></td><!-- 已付 -->\r\n        \r\n        <td name="guideName">\r\n            <div class="div-h-30">\r\n                <button class="btn btn-success btn-sm btn-white T-addGuide pull-right"> \r\n                    <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                </button>\r\n                <!-- <a href="#" class="T-addGuide pull-right">增加</a> --><!-- 增加导游 -->\r\n            </div>\r\n            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                {{each arrange.guideDetails as rs index}}\r\n                    <div class="div-h-30 mar-t-5" index="{{index+1}}" guideId = "{{rs.id}}">\r\n                        <span class="guideName">{{rs.guideName}}</span>\r\n                        <input name="guideId" value="{{rs.id}}" type="hidden" />\r\n                        <input name="guideName" value="{{rs.guideName}}" type="hidden" />\r\n                        <input name="guideArrangeId" value="{{rs.guideArrangeId}}" type="hidden" />\r\n                        <button class="btn btn-danger btn-sm btn-white T-delGuide pull-right"> \r\n                            <i class="ace-icon fa fa-minus bigger-110 icon-only"></i>\r\n                        </button>\r\n                        <!-- 删除导游 -->\r\n                    </div>\r\n                {{/each}}\r\n                {{else}}\r\n                    <div class="div-h-30 mar-t-5" index="1">\r\n                        <input name="guideId" type="hidden" />\r\n                        <input name="guideName"  type="text" class="w-80" {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}{{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                        <button class="btn btn-danger btn-sm btn-white T-delGuide pull-right"> \r\n                            <i class="ace-icon fa fa-minus bigger-110 icon-only"></i>\r\n                        </button>\r\n                        <!-- <a href="#" class="T-delGuide pull-right">删除</a> -->\r\n                        <!-- 删除导游 -->\r\n                    </div>\r\n            {{/if}}\r\n            \r\n        </td><!-- 导游 -->\r\n\r\n        <td name="guideRealCount">\r\n            <div class="div-h-30"></div>\r\n            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                {{each arrange.guideDetails as rs index}}\r\n                    <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                        <input name="guideRealCount" value="{{rs.realCount}}" class="w-50" \r\n                        {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                    </div>\r\n                {{/each}}\r\n                {{else}}\r\n                <div class="div-h-30 mar-t-5" index="1">\r\n                    <input name="guideRealCount" class="w-50" {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                </div>\r\n            {{/if}}\r\n        </td><!-- 数量 -->\r\n        \r\n        <td name="payType">\r\n            <div class="div-h-30"></div>\r\n            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                {{each arrange.guideDetails as rs index}}\r\n                    <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                        <select name="payType" {{if arrange.isConfirmAccount == 1}}disabled="disabled"{{/if}}>\r\n                            <option value="0" {{if arrange.realPayType == 0}}selected="selected"{{/if}}>现金</option>\r\n                            <option value="1" {{if arrange.realPayType == 1}}selected="selected"{{/if}}>刷卡</option>\r\n                            <option value="2" {{if arrange.realPayType == 2}}selected="selected"{{/if}}>签单</option>\r\n                        </select>\r\n                    </div>\r\n                {{/each}}\r\n            {{else}}\r\n                <div class="div-h-30 mar-t-5" index="1" {{if arrange.isConfirmAccount == 1}}disabled="disabled"{{/if}}>\r\n                    <select name="payType">\r\n                            <option value="0" >现金</option>\r\n                            <option value="1" >刷卡</option>\r\n                            <option value="2" >签单</option>\r\n                    </select>\r\n                </div>\r\n            {{/if}}\r\n        </td><!-- 付款方式 -->\r\n        \r\n        <td name="guidePayedMoney">\r\n            <div class="div-h-30"></div>\r\n            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                {{each arrange.guideDetails as rs index}}\r\n                    <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                        <input name="guidePayedMoney" value="{{rs.guidePayedMoney}}" class="w-80" \r\n                        {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                    </div>\r\n                {{/each}}\r\n            {{else}}\r\n                <div class="div-h-30 mar-t-5" index="1">\r\n                    <input name="guidePayedMoney" class="w-80" {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                </div>\r\n            {{/if}}\r\n        </td><!-- 金额 -->\r\n        \r\n        <td name="billImage">\r\n            <div class="div-h-30"></div>\r\n            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                {{each arrange.guideDetails as rs index}}\r\n                    <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                       {{if rs.billImage != null && rs.billImage != ""}}\r\n                        <a href="javascript:void(0);" url="{{rs.billImage}}" class="btn-view">查看</a>\r\n                    {{else}}\r\n                        <span style="color:#bbb;">查看</span>\r\n                    {{/if}}\r\n                    </div>\r\n                {{/each}}\r\n            {{else}}\r\n                <div class="div-h-30 mar-t-5" index="1">\r\n                    <span style="color:#bbb;">查看</span>\r\n                </div>\r\n            {{/if}}\r\n        </td><!-- 单据 -->\r\n        \r\n        <td name="billRemark">\r\n            <div class="div-h-30"></div>\r\n            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                {{each arrange.guideDetails as rs index}}\r\n                    <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                        <input name="billRemark" value="{{rs.billRemark}}"\r\n                        {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                    </div>\r\n                {{/each}}\r\n            {{else}}\r\n                <div class="div-h-30 mar-t-5" index="1">\r\n                    <input name="billRemark" {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                </div>\r\n            {{/if}}\r\n        </td><!-- 备注 -->\r\n\r\n        <td>{{if arrange.isConfirmAccount == 0}}\r\n                未对账\r\n            {{else}}\r\n                已对账\r\n            {{/if}}\r\n            &nbsp;&nbsp;\r\n            {{if arrange.payedMoney == 0 &&　arrange.isConfirmAccount == 0}}\r\n                <a href="javascript:void(0)" class="T-ticketArrDel">删除</a>\r\n            {{else}}\r\n                <span style="color:#bbb;">删除</span>\r\n            {{/if}}\r\n        </td>\r\n    </tr>\r\n    {{/each}}\r\n    {{/if}}\r\n    </tbody>\r\n</table>\r\n</div>\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.ticketRemark.length>0}}{{remarkArrangeList.ticketRemark[0].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.ticketRemark.length>0}}{{remarkArrangeList.ticketRemark[0].financeCheckRemark}}{{/if}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});