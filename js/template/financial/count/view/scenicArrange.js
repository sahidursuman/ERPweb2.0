/*TMODJS:{"debug":true,"version":238,"md5":"36f71640a245c22360bd8767cfcdab73"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/scenicArrange", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, editStatus = $data.editStatus, scenicArrange = $data.scenicArrange, $each = $utils.$each, $escape = ($data.arrange, 
            $data.index, $utils.$escape), tripPlan = $data.tripPlan, isFinance = ($data.rs, 
            $data.isFinance), remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $line = 1, 2 != editStatus && ($out += ' <div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i>景区 <a href="javascript:void(0)" class="T-scenic-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> ', 
            $line = 13), $out += ' <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover w-1400"> <thead> <tr> <th class="th-border" rowspan="2"><span class="necessary">*</span>时间</th> <th class="th-border" rowspan="2"><span class="necessary">*</span>景区</th> <th class="th-border" rowspan="2"><span class="necessary">*</span>收费项目</th> <th class="th-border" rowspan="2"><span class="necessary">*</span>单价</th> <th class="th-border" rowspan="2"><span class="necessary">*</span>数量</th> <th class="th-border" rowspan="2">优惠</th> <th class="th-border" rowspan="2">应付</th> <th class="th-border" rowspan="2">已付</th> <th class="th-border" colspan="6">导游实销</th> <th class="th-border" rowspan="2">操作</th> </tr> <tr> <th class="th-border">导游</th> <th class="th-border">数量</th> <th class="th-border">付款方式</th> <th class="th-border">金额</th> <th class="th-border">单据</th> <th class="th-border">导游报账备注</th> </tr> </thead> <tbody class="T-count-scenic"> ', 
            $line = 39, null != scenicArrange && ($out += " ", $line = 40, scenicArrange.listMap.length && ($out += " ", 
            $line = 41, $each(scenicArrange.listMap, function(arrange) {
                $out += ' <tr badStatus="', $line = 42, $out += $escape(arrange.badStatus), $out += '" scenicArrangeId="', 
                $line = 42, $out += $escape(arrange.id), $out += '" whichDay="', $line = 42, $out += $escape(arrange.whichDay), 
                $out += '" isConfirmAccount="', $line = 42, $out += $escape(arrange.isConfirmAccount), 
                $out += '" arrangeType="scenicArrange"> <td> <span class="whichDay">', $line = 45, 
                $out += $escape($helpers.dateFormat(arrange.dateTime, "yyyy-MM-dd")), $out += '</span> </td> <td> <span class="scenicName">', 
                $line = 49, $out += $escape(arrange.scenicName), $out += "</span> </td> <td>", $line = 52, 
                $out += $escape(arrange.scenicItem), $out += "</td> <td> ", $line = 55, -1 == tripPlan.billStatus ? ($out += " ", 
                $line = 56, 1 == arrange.badStatus ? ($out += ' <span class="F-float F-money">', 
                $line = 57, $out += $escape(arrange.realPrice), $out += "</span> ", $line = 58) : ($out += ' <span class="F-float F-money">', 
                $line = 59, $out += $escape(arrange.realPrice), $out += "</span> ", $line = 60), 
                $out += ' <input type="hidden" name="price" value="', $line = 61, $out += $escape(arrange.realPrice), 
                $out += '" /> ', $line = 62) : ($out += " ", $line = 63, 2 == editStatus ? ($out += ' <span class="F-float F-money">', 
                $line = 64, $out += $escape(arrange.realPrice), $out += '</span> <input type="hidden" name="price" value="', 
                $line = 65, $out += $escape(arrange.realPrice), $out += '"/> ', $line = 66) : ($out += " ", 
                $line = 67, 1 == arrange.badStatus ? ($out += ' <input type="text" name="price" value="', 
                $line = 68, $out += $escape(arrange.realPrice), $out += '"readOnly="readOnly" class="w-80" /> ', 
                $line = 69) : ($out += ' <input type="text" name="price" class="w-80" value="', 
                $line = 70, $out += $escape(arrange.realPrice), $out += '" ', $line = 71, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                $line = 71), $out += "/> ", $line = 72), $out += " ", $line = 73), $out += " ", 
                $line = 74), $out += " </td> <td> ", $line = 78, 1 == arrange.badStatus ? ($out += ' <span class="F-float F-count">', 
                $line = 79, $out += $escape(arrange.realCount), $out += '</span> <input type="hidden" name="realCount" value="', 
                $line = 80, $out += $escape(arrange.realCount), $out += '"> ', $line = 81) : ($out += " ", 
                $line = 82, 2 == editStatus ? ($out += ' <span class="F-float F-count">', $line = 83, 
                $out += $escape(arrange.realCount), $out += '</span> <input type="hidden" name="realCount" value="', 
                $line = 84, $out += $escape(arrange.realCount), $out += '"> ', $line = 85) : ($out += ' <input type="text" class="F-float F-count w-50" name="realCount" value="', 
                $line = 86, $out += $escape(arrange.realCount), $out += '" readOnly="readOnly"/> ', 
                $line = 87), $out += " ", $line = 88), $out += " </td> <td> ", $line = 92, 1 == arrange.badStatus ? ($out += ' <span class="F-float F-money">', 
                $line = 93, $out += $escape(arrange.realReduceMoney), $out += '</span> <input type="hidden" name="realReduceMoney" value="', 
                $line = 94, $out += $escape(arrange.realReduceMoney), $out += '"> ', $line = 95) : ($out += " ", 
                $line = 96, 2 == editStatus ? ($out += ' <span class="F-float F-money ">', $line = 97, 
                $out += $escape(arrange.realReduceMoney), $out += '</span> <input type="hidden" name="realReduceMoney" value="', 
                $line = 98, $out += $escape(arrange.realReduceMoney), $out += '"> ', $line = 99) : ($out += ' <input type="text" name="realReduceMoney" class="F-float F-money w-80" value="', 
                $line = 100, $out += $escape(arrange.realReduceMoney), $out += '" ', $line = 100, 
                1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 100), $out += "/> ", 
                $line = 101), $out += " ", $line = 102), $out += ' </td> <td> <span class="realNeedPayMoney F-float F-money">', 
                $line = 106, $out += $escape(arrange.realNeedPayMoney), $out += '</span> <input type="hidden" name="realNeedPayMoney" value="', 
                $line = 107, $out += $escape(arrange.realNeedPayMoney), $out += '"> </td> <td><span class="F-float F-money">', 
                $line = 110, $out += $escape(arrange.payedMoney), $out += '</span></td> <td name="guideName"> <div class="div-h-30"> ', 
                $line = 114, 2 != editStatus && ($out += ' <button class="btn btn-success btn-sm btn-white T-addGuide pull-right"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </button>  ', 
                $line = 119), $out += " </div> ", $line = 121, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 122, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 123, $out += $escape(index + 1), 
                    $out += '" guideId = "', $line = 123, $out += $escape(rs.id), $out += '"> ', $line = 124, 
                    2 == editStatus ? ($out += ' <span class="guideName">', $line = 125, $out += $escape(rs.guideName), 
                    $out += "</span> ", $line = 126) : ($out += ' <span class="guideName">', $line = 127, 
                    $out += $escape(rs.guideName), $out += '</span> <input name="guideId" value="', 
                    $line = 128, $out += $escape(rs.id), $out += '" type="hidden" /> <input name="guideName" value="', 
                    $line = 129, $out += $escape(rs.guideName), $out += '" type="hidden" /> <input name="guideArrangeId" value="', 
                    $line = 130, $out += $escape(rs.guideArrangeId), $out += '" type="hidden" /> <button class="btn btn-danger btn-sm btn-white T-delGuide pull-right"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i> </button>  ', 
                    $line = 135), $out += " </div> ", $line = 137;
                }), $out += " ", $line = 138) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> ', 
                $line = 140, 2 == editStatus ? ($out += " - ", $line = 142) : ($out += ' <input name="guideArrangeId" type="hidden" /> <input name="guideName" type="text" class="w-80" ', 
                $line = 144, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 144), 
                $out += '/> <button class="btn btn-danger btn-sm btn-white T-delGuide pull-right"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i> </button>   ', 
                $line = 150), $out += " </div> ", $line = 152), $out += ' </td> <td name="guideRealCount"> <div class="div-h-30"></div> ', 
                $line = 158, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 159, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 160, $out += $escape(index + 1), 
                    $out += '"> ', $line = 161, 2 == editStatus ? ($out += ' <span class="F-float F-money">', 
                    $line = 162, $out += $escape(rs.realCount), $out += '</span> <input type="hidden" name="guideRealCount" value="', 
                    $line = 163, $out += $escape(rs.realCount), $out += '"/> ', $line = 164) : ($out += ' <input type="text" name="guideRealCount" value="', 
                    $line = 165, $out += $escape(rs.realCount), $out += '" class="F-float F-money w-50" ', 
                    $line = 167, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 167), 
                    $out += "/> ", $line = 168), $out += " </div> ", $line = 170;
                }), $out += " ", $line = 171) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> ', 
                $line = 173, 2 == editStatus ? ($out += " - ", $line = 175) : ($out += ' <input name="guideRealCount" type="text" class="w-50" ', 
                $line = 176, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 176), 
                $out += "/> ", $line = 177), $out += " </div> ", $line = 180), $out += ' </td> <td name="payType"> <div class="div-h-30"></div> ', 
                $line = 185, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 186, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 187, $out += $escape(index + 1), 
                    $out += '"> ', $line = 188, 2 == editStatus ? ($out += " ", $line = 189, 0 == rs.realPayType ? ($out += " 现金 ", 
                    $line = 191) : 1 == rs.realPayType ? ($out += " 刷卡 ", $line = 193) : 2 == rs.realPayType && ($out += " 签单 ", 
                    $line = 195), $out += " ", $line = 196) : ($out += ' <select name="payType" ', $line = 197, 
                    1 == arrange.isConfirmAccount && ($out += 'disabled="disabled"', $line = 197), $out += '> <option value="0" ', 
                    $line = 198, 0 == rs.realPayType && ($line = 198), $out += '>现金</option> <option value="1" ', 
                    $line = 199, 1 == rs.realPayType && ($out += "selected=true", $line = 199), $out += '>刷卡</option> <option value="2" ', 
                    $line = 200, 2 == rs.realPayType && ($out += "selected=true", $line = 200), $out += ">签单</option> </select> ", 
                    $line = 202), $out += " </div> ", $line = 204;
                }), $out += " ", $line = 205) : ($out += ' <div class="div-h-30 mar-t-5" index="1" ', 
                $line = 206, 1 == arrange.isConfirmAccount && ($out += 'disabled="disabled"', $line = 206), 
                $out += "> ", $line = 207, 2 == editStatus ? ($out += " - ", $line = 209) : ($out += ' <select name="payType"> <option value="0" >现金</option> <option value="1" >刷卡</option> <option value="2" >签单</option> </select> ', 
                $line = 215), $out += " </div> ", $line = 217), $out += ' </td> <td name="guidePayedMoney"> <div class="div-h-30"></div> ', 
                $line = 222, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 223, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 224, $out += $escape(index + 1), 
                    $out += '"> ', $line = 225, 2 == editStatus ? ($out += ' <span class="F-float F-money">', 
                    $line = 226, $out += $escape(rs.guidePayedMoney), $out += '</span> <input type="hidden" name="guidePayedMoney" value="', 
                    $line = 227, $out += $escape(rs.guidePayedMoney), $out += '"/> ', $line = 228) : ($out += ' <input type="text" name="guidePayedMoney" value="', 
                    $line = 229, $out += $escape(rs.guidePayedMoney), $out += '" class="F-float F-money w-80" ', 
                    $line = 231, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 231), 
                    $out += "/> ", $line = 232), $out += " </div> ", $line = 234;
                }), $out += " ", $line = 235) : ($out += " ", $line = 236, 2 == editStatus ? ($out += " 0 ", 
                $line = 238) : ($out += ' <input name="guidePayedMoney" type="text" class="w-80" ', 
                $line = 239, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 239), 
                $out += "/> ", $line = 240), $out += ' <div class="div-h-30 mar-t-5" index="1"> </div> ', 
                $line = 244), $out += ' </td> <td name="billImage"> <div class="div-h-30"></div> ', 
                $line = 249, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 250, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 251, $out += $escape(index + 1), 
                    $out += '"> ', $line = 252, null != rs.billImage && "" != rs.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                    $line = 253, $out += $escape(rs.billImage), $out += '" class="btn-view">查看</a> ', 
                    $line = 254) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 256), $out += " </div> ", 
                    $line = 258;
                }), $out += " ", $line = 259) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> ', 
                $line = 262, 2 == editStatus ? ($out += " - ", $line = 264) : ($out += ' <span style="color:#bbb;">查看</span> ', 
                $line = 266), $out += " </div> ", $line = 269), $out += ' </td> <td name="billRemark"> <div class="div-h-30"></div> ', 
                $line = 274, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 275, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 276, $out += $escape(index + 1), 
                    $out += '"> ', $line = 277, 2 == editStatus ? ($out += " <span>", $line = 278, $out += $escape(rs.billRemark), 
                    $out += "</span> ", $line = 279) : ($out += ' <input name="billRemark" value="', 
                    $line = 280, $out += $escape(rs.billRemark), $out += '" ', $line = 281, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', 
                    $line = 281), $out += "/> ", $line = 282), $out += " </div> ", $line = 284;
                }), $out += " ", $line = 285) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> ', 
                $line = 287, 2 == editStatus ? ($out += " - ", $line = 289) : ($out += ' <input name="billRemark" ', 
                $line = 290, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 290), 
                $out += "/> ", $line = 291), $out += " </div> ", $line = 293), $out += " </td> <td> ", 
                $line = 297, 0 == arrange.isConfirmAccount ? ($out += " 未对账 ", $line = 299) : ($out += " 已对账 ", 
                $line = 301), $out += " ", $line = 302, 2 != editStatus && ($out += " &nbsp;&nbsp; ", 
                $line = 304, 0 == arrange.payedMoney && 0 == arrange.isConfirmAccount ? ($out += ' <a href="javascript:void(0)" class="T-otherOutArrDel">删除</a> ', 
                $line = 306) : ($out += ' <span style="color:#bbb;">删除</span> ', $line = 308), $out += " ", 
                $line = 309), $out += " </td> </tr> ", $line = 312;
            }), $out += " ", $line = 313), $out += " ", $line = 314), $out += " </tbody> </table> </div> ", 
            $line = 318, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 322, isFinance || ($out += 'readonly="readonly" ', $line = 322), $out += ' type="text" style="width:30%;" value="', 
            $line = 322, remarkArrangeList.scenicRemark.length > 0 && ($line = 322, $out += $escape(remarkArrangeList.scenicRemark[0].opCheckRemark), 
            $line = 322), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 324, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly" ', 
            $line = 324), $out += ' type="text" style="width:30%;" value="', $line = 324, remarkArrangeList.scenicRemark.length > 0 && ($line = 324, 
            $out += $escape(remarkArrangeList.scenicRemark[0].financeCheckRemark), $line = 324), 
            $out += '" /> </div> </div>', $line = 326), $out += " ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{if editStatus != 2}}\r\n<div class="ui-sortable-handle widget-container-col">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa-medkit"></i>景区\r\n        <a href="javascript:void(0)" class="T-scenic-add">\r\n            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-plus"></i>\r\n                新增\r\n            </button>\r\n        </a>\r\n    </h5>\r\n</div>\r\n{{/if}}\r\n<div class="overflow-x min-w-1050">\r\n    <table class="table table-striped table-bordered table-hover w-1400">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border" rowspan="2"><span class="necessary">*</span>时间</th>\r\n                <th class="th-border" rowspan="2"><span class="necessary">*</span>景区</th>\r\n                <th class="th-border" rowspan="2"><span class="necessary">*</span>收费项目</th>\r\n                <th class="th-border" rowspan="2"><span class="necessary">*</span>单价</th>\r\n                <th class="th-border" rowspan="2"><span class="necessary">*</span>数量</th>\r\n                <th class="th-border" rowspan="2">优惠</th>\r\n                <th class="th-border" rowspan="2">应付</th>\r\n                <th class="th-border" rowspan="2">已付</th>\r\n                <th class="th-border" colspan="6">导游实销</th>\r\n                <th class="th-border" rowspan="2">操作</th>\r\n            </tr>\r\n            <tr>\r\n                <th class="th-border">导游</th>\r\n                <th class="th-border">数量</th>\r\n                <th class="th-border">付款方式</th>\r\n                <th class="th-border">金额</th>\r\n                <th class="th-border">单据</th>\r\n                <th class="th-border">导游报账备注</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-count-scenic">\r\n            {{if scenicArrange != null}} \r\n                {{if scenicArrange.listMap.length}} \r\n                    {{each scenicArrange.listMap as arrange index}}\r\n                        <tr badStatus="{{arrange.badStatus}}" scenicArrangeId="{{arrange.id}}" whichDay="{{arrange.whichDay}}" isConfirmAccount="{{arrange.isConfirmAccount}}" arrangeType="scenicArrange">\r\n                            \r\n                            <td>\r\n                                <span class="whichDay">{{arrange.dateTime | dateFormat: \'yyyy-MM-dd\'}}</span>\r\n                            </td><!-- 日期 -->\r\n\r\n                            <td>\r\n                                <span class="scenicName">{{arrange.scenicName}}</span>\r\n                            </td><!-- 景区 -->\r\n\r\n                            <td>{{arrange.scenicItem}}</td><!-- 收费项目 -->\r\n\r\n                            <td>\r\n                                {{if tripPlan.billStatus == -1}}\r\n                                    {{if arrange.badStatus == 1}}\r\n                                        <span class="F-float F-money">{{arrange.realPrice}}</span>\r\n                                    {{else}}\r\n                                        <span class="F-float F-money">{{arrange.realPrice}}</span>\r\n                                    {{/if}}\r\n                                        <input type="hidden" name="price" value="{{arrange.realPrice}}" />\r\n                                {{else}}\r\n                                    {{if editStatus == 2}}\r\n                                        <span class="F-float F-money">{{arrange.realPrice}}</span>\r\n                                        <input type="hidden" name="price" value="{{arrange.realPrice}}"/>\r\n                                    {{else}}\r\n                                        {{if arrange.badStatus == 1}}\r\n                                            <input type="text" name="price" value="{{arrange.realPrice}}"readOnly="readOnly" class="w-80" />\r\n                                        {{else}}\r\n                                            <input type="text" name="price" class="w-80" value="{{arrange.realPrice}}" \r\n                                                   {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                                        {{/if}}\r\n                                    {{/if}}\r\n                                {{/if}}\r\n                            </td><!-- 单价 -->\r\n\r\n                            <td>\r\n                                {{if arrange.badStatus == 1}}\r\n                                    <span class="F-float F-count">{{arrange.realCount}}</span>\r\n                                    <input type="hidden" name="realCount" value="{{arrange.realCount}}">\r\n                                {{else}}\r\n                                    {{if editStatus == 2}}\r\n                                        <span class="F-float F-count">{{arrange.realCount}}</span>\r\n                                        <input type="hidden" name="realCount" value="{{arrange.realCount}}">\r\n                                    {{else}}\r\n                                        <input  type="text" class="F-float F-count w-50" name="realCount" value="{{arrange.realCount}}" readOnly="readOnly"/>\r\n                                    {{/if}}\r\n                                {{/if}}\r\n                            </td><!-- 数量 -->\r\n\r\n                            <td>\r\n                                {{if arrange.badStatus == 1}}\r\n                                    <span class="F-float F-money">{{arrange.realReduceMoney}}</span>\r\n                                    <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}">\r\n                                {{else}}\r\n                                    {{if editStatus == 2}}\r\n                                        <span class="F-float F-money ">{{arrange.realReduceMoney}}</span>\r\n                                        <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}">\r\n                                    {{else}}\r\n                                        <input type="text" name="realReduceMoney" class="F-float F-money w-80" value="{{arrange.realReduceMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                                    {{/if}}\r\n                                {{/if}}\r\n                            </td><!-- 优惠 -->\r\n\r\n                            <td>\r\n                                <span class="realNeedPayMoney F-float F-money">{{arrange.realNeedPayMoney}}</span>\r\n                                <input type="hidden" name="realNeedPayMoney" value="{{arrange.realNeedPayMoney}}">\r\n                            </td><!-- 应付 -->\r\n\r\n                            <td><span class="F-float F-money">{{arrange.payedMoney}}</span></td><!-- 已付 -->\r\n\r\n                            <td name="guideName">\r\n                            <div class="div-h-30">\r\n                                {{if editStatus != 2}}\r\n                                    <button class="btn btn-success btn-sm btn-white T-addGuide pull-right"> \r\n                                        <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                    </button>\r\n                                    <!-- <a href="#" class="T-addGuide pull-right">增加</a> --><!-- 增加导游 -->\r\n                                {{/if}}\r\n                            </div>\r\n                            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                                {{each arrange.guideDetails as rs index}}\r\n                                    <div class="div-h-30 mar-t-5" index="{{index+1}}" guideId = "{{rs.id}}">\r\n                                        {{if editStatus == 2}}\r\n                                            <span class="guideName">{{rs.guideName}}</span>\r\n                                        {{else}}\r\n                                            <span class="guideName">{{rs.guideName}}</span>\r\n                                            <input name="guideId" value="{{rs.id}}" type="hidden" />\r\n                                            <input name="guideName" value="{{rs.guideName}}" type="hidden" />\r\n                                            <input name="guideArrangeId" value="{{rs.guideArrangeId}}" type="hidden" />\r\n                                            <button class="btn btn-danger btn-sm btn-white T-delGuide pull-right"> \r\n                                                <i class="ace-icon fa fa-minus bigger-110 icon-only"></i>\r\n                                            </button>\r\n                                            <!-- 删除导游 -->\r\n                                        {{/if}}\r\n                                    </div>\r\n                                {{/each}}\r\n                                {{else}}\r\n                                    <div class="div-h-30 mar-t-5" index="1">\r\n                                        {{if editStatus == 2}}\r\n                                            -\r\n                                        {{else}}\r\n                                            <input name="guideArrangeId" type="hidden" />\r\n                                            <input name="guideName"  type="text" class="w-80" {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                                            <button class="btn btn-danger btn-sm btn-white T-delGuide pull-right"> \r\n                                                <i class="ace-icon fa fa-minus bigger-110 icon-only"></i>\r\n                                            </button>\r\n                                            <!-- <a href="#" class="T-delGuide pull-right">删除</a> -->\r\n                                            <!-- 删除导游 -->\r\n                                        {{/if}}\r\n                                    </div>\r\n                            {{/if}}\r\n                            \r\n                        </td><!-- 导游 -->\r\n\r\n                        <td name="guideRealCount">\r\n                            <div class="div-h-30"></div>\r\n                            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                                {{each arrange.guideDetails as rs index}}\r\n                                    <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                                        {{if editStatus == 2}}\r\n                                            <span class="F-float F-money">{{rs.realCount}}</span>\r\n                                            <input type="hidden" name="guideRealCount" value="{{rs.realCount}}"/>\r\n                                        {{else}}\r\n                                            <input type="text" name="guideRealCount" value="{{rs.realCount}}" \r\n                                            class="F-float F-money w-50" \r\n                                            {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                                        {{/if}}\r\n                                    </div>\r\n                                {{/each}}\r\n                                {{else}}\r\n                                <div class="div-h-30 mar-t-5" index="1">\r\n                                    {{if editStatus == 2}}\r\n                                        -\r\n                                    {{else}}\r\n                                        <input name="guideRealCount" type="text" class="w-50" {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                                    {{/if}}\r\n                                    \r\n                                </div>\r\n                            {{/if}}\r\n                        </td><!-- 数量 -->\r\n                        \r\n                        <td name="payType">\r\n                            <div class="div-h-30"></div>\r\n                            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                                {{each arrange.guideDetails as rs index}}\r\n                                    <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                                        {{if editStatus == 2}}\r\n                                            {{if rs.realPayType == 0}}\r\n                                                现金\r\n                                            {{else if rs.realPayType == 1}}\r\n                                                刷卡\r\n                                            {{else if rs.realPayType == 2}}\r\n                                                签单\r\n                                            {{/if}}\r\n                                        {{else}}\r\n                                            <select name="payType" {{if arrange.isConfirmAccount == 1}}disabled="disabled"{{/if}}>\r\n                                                <option value="0" {{if rs.realPayType == 0}}{{/if}}>现金</option>\r\n                                                <option value="1" {{if rs.realPayType == 1}}selected=true{{/if}}>刷卡</option>\r\n                                                <option value="2" {{if rs.realPayType == 2}}selected=true{{/if}}>签单</option>\r\n                                            </select>\r\n                                        {{/if}}\r\n                                    </div>\r\n                                {{/each}}\r\n                            {{else}}\r\n                                <div class="div-h-30 mar-t-5" index="1" {{if arrange.isConfirmAccount == 1}}disabled="disabled"{{/if}}>\r\n                                    {{if editStatus == 2}}\r\n                                        -\r\n                                    {{else}}\r\n                                        <select name="payType">\r\n                                            <option value="0" >现金</option>\r\n                                            <option value="1" >刷卡</option>\r\n                                            <option value="2" >签单</option>\r\n                                        </select>\r\n                                    {{/if}}\r\n                                </div>\r\n                            {{/if}}\r\n                        </td><!-- 付款方式 -->\r\n                        \r\n                        <td name="guidePayedMoney">\r\n                            <div class="div-h-30"></div>\r\n                            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                                {{each arrange.guideDetails as rs index}}\r\n                                    <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                                        {{if editStatus == 2}}\r\n                                            <span class="F-float F-money">{{rs.guidePayedMoney}}</span>\r\n                                            <input type="hidden" name="guidePayedMoney" value="{{rs.guidePayedMoney}}"/>\r\n                                        {{else}}\r\n                                            <input type="text" name="guidePayedMoney" value="{{rs.guidePayedMoney}}" \r\n                                            class="F-float F-money w-80" \r\n                                            {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                                        {{/if}}\r\n                                    </div>\r\n                                {{/each}}\r\n                            {{else}}\r\n                                {{if editStatus == 2}}\r\n                                   0\r\n                                {{else}}\r\n                                    <input name="guidePayedMoney" type="text" class="w-80" {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                                {{/if}}\r\n                                <div class="div-h-30 mar-t-5" index="1">\r\n                                    \r\n                                </div>\r\n                            {{/if}}\r\n                        </td><!-- 金额 -->\r\n                        \r\n                        <td name="billImage">\r\n                            <div class="div-h-30"></div>\r\n                            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                                {{each arrange.guideDetails as rs index}}\r\n                                    <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                                       {{if rs.billImage != null && rs.billImage != ""}}\r\n                                        <a href="javascript:void(0);" url="{{rs.billImage}}" class="btn-view">查看</a>\r\n                                    {{else}}\r\n                                        <span style="color:#bbb;">查看</span>\r\n                                    {{/if}}\r\n                                    </div>\r\n                                {{/each}}\r\n                            {{else}}\r\n\r\n                                <div class="div-h-30 mar-t-5" index="1">\r\n                                    {{if editStatus == 2}}\r\n                                        -\r\n                                    {{else}}\r\n                                        <span style="color:#bbb;">查看</span>\r\n                                    {{/if}}\r\n                                </div>\r\n                                \r\n                            {{/if}}\r\n                        </td><!-- 单据 -->\r\n                        \r\n                        <td name="billRemark">\r\n                            <div class="div-h-30"></div>\r\n                            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                                {{each arrange.guideDetails as rs index}}\r\n                                    <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                                        {{if editStatus == 2}}\r\n                                            <span>{{rs.billRemark}}</span>\r\n                                        {{else}}\r\n                                            <input name="billRemark" value="{{rs.billRemark}}"\r\n                                            {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                                        {{/if}}\r\n                                    </div>\r\n                                {{/each}}\r\n                            {{else}}\r\n                                <div class="div-h-30 mar-t-5" index="1">\r\n                                    {{if editStatus == 2}}\r\n                                        -\r\n                                    {{else}}\r\n                                        <input name="billRemark" {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                                    {{/if}}\r\n                                </div>\r\n                            {{/if}}\r\n                        </td><!-- 备注 -->\r\n\r\n                        <td>\r\n                            {{if arrange.isConfirmAccount == 0}}\r\n                                未对账\r\n                            {{else}}\r\n                                已对账\r\n                            {{/if}}\r\n                            {{if editStatus != 2}}\r\n                                &nbsp;&nbsp;\r\n                                {{if arrange.payedMoney == 0 &&　arrange.isConfirmAccount == 0}}\r\n                                    <a href="javascript:void(0)" class="T-otherOutArrDel">删除</a>\r\n                                {{else}}\r\n                                    <span style="color:#bbb;">删除</span>\r\n                                {{/if}}\r\n                            {{/if}}\r\n                        </td>\r\n                        </tr>\r\n                    {{/each}}\r\n                {{/if}}\r\n            {{/if}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n{{if tripPlan.billStatus > -1}}\r\n<div style="width:60%;">\r\n    <div>\r\n        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n        <input name="accountFinancialCheckComment" {{if !isFinance}}readonly="readonly" {{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.scenicRemark.length>0}}{{remarkArrangeList.scenicRemark[0].opCheckRemark}}{{/if}}" />\r\n        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus==0 && isOp)) }}readonly="readonly" {{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.scenicRemark.length>0}}{{remarkArrangeList.scenicRemark[0].financeCheckRemark}}{{/if}}" />\r\n    </div>\r\n</div>{{/if}}\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});