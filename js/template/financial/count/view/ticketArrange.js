/*TMODJS:{"debug":true,"version":343,"md5":"411ceb810c3d3c43e759984fde26230b"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/ticketArrange", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, editStatus = $data.editStatus, ticketArrange = $data.ticketArrange, $each = $utils.$each, $escape = ($data.arrange, 
            $data.index, $utils.$escape), tripPlan = $data.tripPlan, guideCount = $data.guideCount, guideArrange = ($data.rs, 
            $data.guideArrange), isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $line = 1, 2 != editStatus && ($out += ' <div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i>票务 <a href="javascript:void(0)" class="T-ticket-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> ', 
            $line = 13), $out += ' <div class="overflow-x min-w-1050"> <table class="table overflow-table table-striped table-bordered table-hover w-1500"> <thead> <tr> <th class="th-border" rowspan="2"><span class="necessary">*</span>票务商家</th> <th class="th-border" rowspan="2"><span class="necessary">*</span>类型</th> <th class="th-border" rowspan="2"><span class="necessary">*</span>日期</th> <th class="th-border" rowspan="2">出发地</th> <th class="th-border" rowspan="2">目的地</th> <th class="th-border" rowspan="2">班次</th> <th class="th-border" rowspan="2"><span class="necessary">*</span>座位级别</th> <th class="th-border" rowspan="2"><span class="necessary">*</span>单价</th> <th class="th-border" rowspan="2"><span class="necessary">*</span>数量合计</th> <th class="th-border" rowspan="2">优惠</th> <th class="th-border" rowspan="2">应付</th> <th class="th-border" rowspan="2">已付</th> <th class="th-border" colspan="6">导游实销</th> <th class="th-border" rowspan="2">是否对账</th> </tr> <tr> <th class="th-border">导游</th> <th class="th-border">数量</th> <th class="th-border">金额</th> <th class="th-border">付款方式</th> <th class="th-border">单据</th> <th class="th-border">备注</th> </tr> </thead> <tbody class="T-count-ticket"> ', 
            $line = 43, ticketArrange.listMap && ticketArrange.listMap.length && ($out += " ", 
            $line = 44, $each(ticketArrange.listMap, function(arrange) {
                $out += ' <tr badStatus = "', $line = 45, $out += $escape(arrange.badStatus), $out += '" ticketArrangeId="', 
                $line = 45, $out += $escape(arrange.id), $out += '" isConfirmAccount="', $line = 46, 
                $out += $escape(arrange.isConfirmAccount), $out += '" arrangeType="ticketArrange"> <td> <div class="div-h-30"></div> <span class="ticketName">', 
                $line = 50, $out += $escape(arrange.ticketName), $out += '</span> </td> <td> <div class="div-h-30"></div> ', 
                $line = 55, 1 == arrange.type ? ($out += " 机票 ", $line = 57) : 2 == arrange.type ? ($out += " 汽车票 ", 
                $line = 59) : 3 == arrange.type ? ($out += " 火车票 ", $line = 61) : 4 == arrange.type && ($out += " 轮船票 ", 
                $line = 63), $out += ' </td> <td > <div class="div-h-30"></div> ', $line = 68, $out += $escape($helpers.dateFormat(arrange.dateTime, "yyyy-MM-dd")), 
                $out += ' </td> <td> <div class="div-h-30"></div> ', $line = 73, $out += $escape(arrange.startingCity), 
                $out += ' </td> <td ><div class="div-h-30"></div>', $line = 76, $out += $escape(arrange.arriveCity), 
                $out += '</td> <td><div class="div-h-30"></div>', $line = 78, $out += $escape(arrange.shift), 
                $out += '</td> <td><div class="div-h-30"></div>', $line = 80, $out += $escape(arrange.seatLevel), 
                $out += '</td> <td> <div class="div-h-30"></div> ', $line = 84, -1 == tripPlan.billStatus ? ($out += " ", 
                $line = 85, 1 == arrange.badStatus ? ($out += ' <span class="F-float F-money">', 
                $line = 86, $out += $escape(arrange.realPrice), $out += "</span> ", $line = 87) : ($out += ' <span class="F-float F-money">', 
                $line = 88, $out += $escape(arrange.realPrice), $out += "</span> ", $line = 89), 
                $out += ' <input type="hidden" name="price" value="', $line = 90, $out += $escape(arrange.realPrice), 
                $out += '" /> ', $line = 91) : ($out += " ", $line = 92, 1 == arrange.badStatus ? ($out += ' <input type="text" name="price" value="', 
                $line = 93, $out += $escape(arrange.realPrice), $out += '" class="w-80" readOnly="readOnly"/> ', 
                $line = 94) : ($out += " ", $line = 95, 2 == editStatus ? ($out += ' <span class="F-float F-money">', 
                $line = 96, $out += $escape(arrange.realPrice), $out += '</span> <input type="hidden" name="price" value="', 
                $line = 97, $out += $escape(arrange.realPrice), $out += '" /> ', $line = 98) : ($out += ' <input type="text" name="price" value="', 
                $line = 99, $out += $escape(arrange.realPrice), $out += '" class="w-80" ', $line = 100, 
                1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 100), $out += "/> ", 
                $line = 101), $out += " ", $line = 102), $out += " ", $line = 103), $out += ' </td> <td> <div class="div-h-30"></div> ', 
                $line = 108, 1 == arrange.badStatus ? ($out += ' <span class="F-float F-count">', 
                $line = 109, $out += $escape(arrange.realCount), $out += '</span> <input type="hidden" value="', 
                $line = 110, $out += $escape(arrange.realCount), $out += '" name="realCount"> ', 
                $line = 111) : ($out += " ", $line = 112, 2 == editStatus ? ($out += ' <span class="F-float F-count">', 
                $line = 113, $out += $escape(arrange.realCount), $out += '</span> <input type="hidden" value="', 
                $line = 114, $out += $escape(arrange.realCount), $out += '" name="realCount"> ', 
                $line = 115) : ($out += ' <span class="F-float F-count realCount">', $line = 116, 
                $out += $escape(arrange.realCount), $out += '</span> <input type="hidden" name="realCount" value="', 
                $line = 117, $out += $escape(arrange.realCount), $out += '"/> ', $line = 118), $out += " ", 
                $line = 119), $out += ' </td> <td> <div class="div-h-30"></div> ', $line = 124, 
                1 == arrange.badStatus ? ($out += ' <span class="F-float F-money ">', $line = 125, 
                $out += $escape(arrange.realReduceMoney), $out += '</span> <input type="hidden" name="realReduceMoney" value="', 
                $line = 126, $out += $escape(arrange.realReduceMoney), $out += '"> ', $line = 127) : ($out += " ", 
                $line = 128, 2 == editStatus ? ($out += ' <span class="F-float F-money ">', $line = 129, 
                $out += $escape(arrange.realReduceMoney), $out += '</span> <input type="hidden" name="realReduceMoney" value="', 
                $line = 130, $out += $escape(arrange.realReduceMoney), $out += '"> ', $line = 131) : ($out += ' <input type="text" name="realReduceMoney" class="F-float F-money w-80" value="', 
                $line = 132, $out += $escape(arrange.realReduceMoney), $out += '" ', $line = 133, 
                1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 133), $out += "/> ", 
                $line = 134), $out += " ", $line = 135), $out += ' </td> <td> <div class="div-h-30"></div> <span class="realNeedPayMoney F-float F-money">', 
                $line = 141, $out += $escape(arrange.realNeedPayMoney), $out += '</span> <input type="hidden" name="realNeedPayMoney" value="', 
                $line = 142, $out += $escape(arrange.realNeedPayMoney), $out += '"> </td> <td><div class="div-h-30"></div><span class="F-float F-money">', 
                $line = 145, $out += $escape(arrange.payedMoney), $out += '</span></td> <td name="guideName"> <div class="div-h-30"> ', 
                $line = 149, 2 != editStatus && guideCount > 1 && 1 != arrange.isConfirmAccount && ($out += ' <button class="btn btn-success btn-sm btn-white T-addGuide pull-right"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </button>  ', 
                $line = 154), $out += " </div> ", $line = 156, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 157, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 158, $out += $escape(index + 1), 
                    $out += '" guideId = "', $line = 158, $out += $escape(rs.id), $out += '"> ', $line = 159, 
                    2 == editStatus ? ($out += ' <span class="guideName">', $line = 160, $out += $escape(rs.guideName), 
                    $out += "</span> ", $line = 161) : ($out += ' <span class="guideName">', $line = 162, 
                    $out += $escape(rs.guideName), $out += '</span> <input name="guideId" value="', 
                    $line = 163, $out += $escape(rs.id), $out += '" type="hidden" /> <input name="guideName" value="', 
                    $line = 164, $out += $escape(rs.guideName), $out += '" type="hidden" /> <input name="guideArrangeId" value="', 
                    $line = 165, $out += $escape(rs.guideArrangeId), $out += '" type="hidden" /> ', 
                    $line = 166, guideCount > 1 && 1 != arrange.isConfirmAccount && ($out += ' <button class="btn btn-danger btn-sm btn-white T-delGuide pull-right"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i> </button> ', 
                    $line = 170), $out += "  ", $line = 172), $out += " </div> ", $line = 174;
                }), $out += " ", $line = 175) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> ', 
                $line = 177, 2 == editStatus ? ($out += " - ", $line = 179) : ($out += " ", $line = 180, 
                guideCount > 1 ? ($out += " ", $line = 181, 1 != arrange.isConfirmAccount && ($out += ' <button class="btn btn-danger btn-sm btn-white T-delGuide pull-right"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i> </button> ', 
                $line = 185), $out += ' <input name="guideArrangeId" type="hidden" /> <input name="guideName" type="text" class="w-80" ', 
                $line = 188, 1 == arrange.isConfirmAccount && ($out += 'disabled="disabled" ', $line = 188), 
                $out += "/> ", $line = 189) : ($out += " <span>", $line = 190, $out += $escape(guideArrange.listMap[0].guideName), 
                $out += '</span> <input name="guideArrangeId" type="hidden" value="', $line = 191, 
                $out += $escape(guideArrange.listMap[0].id), $out += '"/> ', $line = 192), $out += "   ", 
                $line = 195), $out += " </div> ", $line = 197), $out += ' </td> <td name="guideRealCount"> <div class="div-h-30"></div> ', 
                $line = 203, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 204, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 205, $out += $escape(index + 1), 
                    $out += '"> ', $line = 206, 2 == editStatus ? ($out += ' <span class="F-float F-money">', 
                    $line = 207, $out += $escape(rs.realCount), $out += '</span> <input type="hidden" name="guideRealCount" value="', 
                    $line = 208, $out += $escape(rs.realCount), $out += '"/> ', $line = 209) : ($out += ' <input type="text" name="guideRealCount" value="', 
                    $line = 210, $out += $escape(rs.realCount), $out += '" class="F-float F-money w-50" ', 
                    $line = 212, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 212), 
                    $out += "/> ", $line = 213), $out += " </div> ", $line = 215;
                }), $out += " ", $line = 216) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> ', 
                $line = 218, 2 == editStatus ? ($out += " - ", $line = 220) : ($out += ' <input name="guideRealCount" type="text" class="w-50" ', 
                $line = 221, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 221), 
                $out += "/> ", $line = 222), $out += " </div> ", $line = 225), $out += ' </td> <td name="guidePayedMoney"> <div class="div-h-30"></div> ', 
                $line = 232, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 233, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 234, $out += $escape(index + 1), 
                    $out += '"> ', $line = 235, 2 == editStatus ? ($out += ' <span class="F-float F-money">', 
                    $line = 236, $out += $escape(rs.guidePayedMoney), $out += '</span> <input type="hidden" name="guidePayedMoney" value="', 
                    $line = 237, $out += $escape(rs.guidePayedMoney), $out += '"/> ', $line = 238) : ($out += ' <input type="text" name="guidePayedMoney" value="', 
                    $line = 239, $out += $escape(rs.guidePayedMoney), $out += '" class="F-float F-money w-80" ', 
                    $line = 241, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 241), 
                    $out += "/> ", $line = 242), $out += " </div> ", $line = 244;
                }), $out += " ", $line = 245) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> ', 
                $line = 248, 2 == editStatus ? ($out += " 0 ", $line = 250) : ($out += ' <input name="guidePayedMoney" type="text" class="w-80" ', 
                $line = 251, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 251), 
                $out += "/> ", $line = 252), $out += " </div> ", $line = 254), $out += ' </td> <td name="payType"> <div class="div-h-30"></div> ', 
                $line = 259, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 260, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 261, $out += $escape(index + 1), 
                    $out += '"> ', $line = 262, 2 == editStatus ? ($out += " ", $line = 263, 0 == rs.realPayType ? ($out += " 现金 ", 
                    $line = 265) : 1 == rs.realPayType ? ($out += " 刷卡 ", $line = 267) : 2 == rs.realPayType && ($out += " 签单 ", 
                    $line = 269), $out += " ", $line = 270) : ($out += ' <select name="payType" ', $line = 271, 
                    1 == arrange.isConfirmAccount && ($out += 'disabled="disabled"', $line = 271), $out += '> <option value="0" ', 
                    $line = 272, 0 == rs.realPayType && ($line = 272), $out += '>现金</option> <option value="1" ', 
                    $line = 273, 1 == rs.realPayType && ($out += "selected=true", $line = 273), $out += '>刷卡</option> <option value="2" ', 
                    $line = 274, 2 == rs.realPayType && ($out += "selected=true", $line = 274), $out += ">签单</option> </select> ", 
                    $line = 276), $out += " </div> ", $line = 278;
                }), $out += " ", $line = 279) : ($out += ' <div class="div-h-30 mar-t-5" index="1" ', 
                $line = 280, 1 == arrange.isConfirmAccount && ($out += 'disabled="disabled"', $line = 280), 
                $out += "> ", $line = 281, 2 == editStatus ? ($out += " - ", $line = 283) : ($out += ' <select name="payType"> <option value="0" >现金</option> <option value="1" >刷卡</option> <option value="2" >签单</option> </select> ', 
                $line = 289), $out += " </div> ", $line = 291), $out += ' </td> <td name="billImage"> <div class="div-h-30"></div> ', 
                $line = 296, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 297, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 298, $out += $escape(index + 1), 
                    $out += '"> ', $line = 299, null != rs.billImage && "" != rs.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                    $line = 300, $out += $escape(rs.billImage), $out += '" class="btn-view">查看</a> ', 
                    $line = 301) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 303), $out += " </div> ", 
                    $line = 305;
                }), $out += " ", $line = 306) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> ', 
                $line = 309, 2 == editStatus ? ($out += " - ", $line = 311) : ($out += ' <span style="color:#bbb;">查看</span> ', 
                $line = 313), $out += " </div> ", $line = 316), $out += ' </td> <td name="billRemark"> <div class="div-h-30"></div> ', 
                $line = 321, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 322, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 323, $out += $escape(index + 1), 
                    $out += '"> ', $line = 324, 2 == editStatus ? ($out += " <span>", $line = 325, $out += $escape(rs.billRemark), 
                    $out += "</span> ", $line = 326) : ($out += ' <input name="billRemark" value="', 
                    $line = 327, $out += $escape(rs.billRemark), $out += '" ', $line = 328, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', 
                    $line = 328), $out += "/> ", $line = 329), $out += " </div> ", $line = 331;
                }), $out += " ", $line = 332) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> ', 
                $line = 334, 2 == editStatus ? ($out += " - ", $line = 336) : ($out += ' <input name="billRemark" ', 
                $line = 337, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 337), 
                $out += "/> ", $line = 338), $out += " </div> ", $line = 340), $out += ' </td> <td> <div class="div-h-30"></div> ', 
                $line = 345, 0 == arrange.isConfirmAccount ? ($out += " 未对账 ", $line = 347) : ($out += " 已对账 ", 
                $line = 349), $out += " ", $line = 350, 2 != editStatus && ($out += " &nbsp;&nbsp; ", 
                $line = 352, 0 == arrange.payedMoney && 0 == arrange.isConfirmAccount ? ($out += ' <a href="javascript:void(0)" class="T-otherOutArrDel">删除</a> ', 
                $line = 354) : ($out += ' <span style="color:#bbb;">删除</span> ', $line = 356), $out += " ", 
                $line = 357), $out += " </td> </tr> ", $line = 360;
            }), $out += " ", $line = 361), $out += " </tbody> </table> </div> ", $line = 365, 
            tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 369, isFinance || ($out += 'readonly="readonly"', $line = 369), $out += ' type="text" style="width:30%;" value="', 
            $line = 369, remarkArrangeList.ticketRemark.length > 0 && ($line = 369, $out += $escape(remarkArrangeList.ticketRemark[0].opCheckRemark), 
            $line = 369), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 372, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 372), $out += ' type="text" style="width:30%;" value="', $line = 372, remarkArrangeList.ticketRemark.length > 0 && ($line = 372, 
            $out += $escape(remarkArrangeList.ticketRemark[0].financeCheckRemark), $line = 372), 
            $out += '" /> </div> </div> ', $line = 375), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{if editStatus != 2}}\r\n<div class="ui-sortable-handle widget-container-col">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa-medkit"></i>票务\r\n        <a href="javascript:void(0)" class="T-ticket-add">\r\n            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-plus"></i>\r\n                新增\r\n            </button>\r\n        </a>\r\n    </h5>\r\n</div>\r\n{{/if}}\r\n<div class="overflow-x min-w-1050">\r\n<table class="table overflow-table table-striped table-bordered table-hover w-1500">\r\n    <thead>\r\n    <tr>\r\n        <th class="th-border" rowspan="2"><span class="necessary">*</span>票务商家</th>\r\n        <th class="th-border" rowspan="2"><span class="necessary">*</span>类型</th>\r\n        <th class="th-border" rowspan="2"><span class="necessary">*</span>日期</th>\r\n        <th class="th-border" rowspan="2">出发地</th>\r\n        <th class="th-border" rowspan="2">目的地</th>\r\n        <th class="th-border" rowspan="2">班次</th>\r\n        <th class="th-border" rowspan="2"><span class="necessary">*</span>座位级别</th>\r\n        <th class="th-border" rowspan="2"><span class="necessary">*</span>单价</th>\r\n        <th class="th-border" rowspan="2"><span class="necessary">*</span>数量合计</th>\r\n        <th class="th-border" rowspan="2">优惠</th>\r\n        <th class="th-border" rowspan="2">应付</th>\r\n        <th class="th-border" rowspan="2">已付</th>\r\n       <th class="th-border" colspan="6">导游实销</th>\r\n        <th class="th-border" rowspan="2">是否对账</th>\r\n    </tr>\r\n    <tr>\r\n        <th class="th-border">导游</th>\r\n        <th class="th-border">数量</th>\r\n        <th class="th-border">金额</th>\r\n        <th class="th-border">付款方式</th>\r\n        <th class="th-border">单据</th>\r\n        <th class="th-border">备注</th>   \r\n    </tr>\r\n    </thead>\r\n    <tbody class="T-count-ticket">\r\n    {{if !!ticketArrange.listMap && ticketArrange.listMap.length}}\r\n    {{each ticketArrange.listMap as arrange index}}\r\n    <tr badStatus = "{{arrange.badStatus}}" ticketArrangeId="{{arrange.id}}"\r\n    isConfirmAccount="{{arrange.isConfirmAccount}}" arrangeType="ticketArrange">\r\n\r\n        <td>\r\n        <div class="div-h-30"></div>\r\n        <span class="ticketName">{{arrange.ticketName}}</span>\r\n        </td><!-- 票务公司 -->\r\n\r\n        <td>\r\n            <div class="div-h-30"></div>\r\n            {{if arrange.type == 1}}\r\n                机票\r\n            {{else if arrange.type== 2}}\r\n                汽车票\r\n            {{else if arrange.type == 3}}\r\n                火车票\r\n            {{else if arrange.type == 4}}\r\n                轮船票\r\n            {{/if}}\r\n        </td><!-- 类型 -->\r\n\r\n        <td >\r\n            <div class="div-h-30"></div>\r\n            {{arrange.dateTime | dateFormat: \'yyyy-MM-dd\'}}\r\n        </td><!-- 日期 -->\r\n\r\n        <td>\r\n            <div class="div-h-30"></div> \r\n            {{arrange.startingCity}}\r\n        </td><!-- 出发地 -->\r\n\r\n        <td ><div class="div-h-30"></div>{{arrange.arriveCity}}</td><!-- 目的地 -->\r\n\r\n        <td><div class="div-h-30"></div>{{arrange.shift}}</td><!-- 班次 -->\r\n\r\n        <td><div class="div-h-30"></div>{{arrange.seatLevel}}</td><!-- 座位级别 -->\r\n\r\n        <td>\r\n            <div class="div-h-30"></div>\r\n            {{if tripPlan.billStatus == -1}}\r\n                {{if arrange.badStatus == 1}}\r\n                    <span class="F-float F-money">{{arrange.realPrice}}</span>\r\n                {{else}}\r\n                    <span class="F-float F-money">{{arrange.realPrice}}</span>\r\n                {{/if}}\r\n                    <input type="hidden" name="price" value="{{arrange.realPrice}}" />\r\n            {{else}}\r\n                {{if arrange.badStatus == 1}}\r\n                    <input type="text" name="price" value="{{arrange.realPrice}}" class="w-80" readOnly="readOnly"/>\r\n                {{else}}\r\n                    {{if editStatus == 2}}\r\n                        <span class="F-float F-money">{{arrange.realPrice}}</span>\r\n                        <input type="hidden" name="price" value="{{arrange.realPrice}}" />\r\n                    {{else}}\r\n                        <input type="text" name="price" value="{{arrange.realPrice}}" class="w-80" \r\n                            {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                    {{/if}}\r\n                {{/if}}\r\n            {{/if}}\r\n        </td><!-- 单价 -->\r\n\r\n        <td>\r\n            <div class="div-h-30"></div>\r\n            {{if arrange.badStatus == 1}}\r\n                <span class="F-float F-count">{{arrange.realCount}}</span>\r\n                <input type="hidden" value="{{arrange.realCount}}" name="realCount">\r\n            {{else}}\r\n                {{if editStatus == 2}}\r\n                    <span class="F-float F-count">{{arrange.realCount}}</span>\r\n                    <input type="hidden" value="{{arrange.realCount}}" name="realCount">\r\n                {{else}}\r\n                    <span class="F-float F-count realCount">{{arrange.realCount}}</span>\r\n                    <input  type="hidden" name="realCount" value="{{arrange.realCount}}"/>\r\n                {{/if}}\r\n            {{/if}}\r\n        </td><!-- 数量 -->\r\n\r\n        <td>\r\n            <div class="div-h-30"></div>\r\n            {{if arrange.badStatus == 1}}\r\n                <span class="F-float F-money ">{{arrange.realReduceMoney}}</span>\r\n                <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}">\r\n            {{else}}\r\n                {{if editStatus == 2}}\r\n                    <span class="F-float F-money ">{{arrange.realReduceMoney}}</span>\r\n                    <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}">\r\n                {{else}}\r\n                    <input type="text" name="realReduceMoney" class="F-float F-money w-80" value="{{arrange.realReduceMoney}}" \r\n                    {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                {{/if}}\r\n            {{/if}}\r\n            \r\n        </td><!-- 优惠 -->\r\n\r\n        <td>\r\n            <div class="div-h-30"></div>\r\n            <span class="realNeedPayMoney F-float F-money">{{arrange.realNeedPayMoney}}</span>\r\n            <input type="hidden" name="realNeedPayMoney" value="{{arrange.realNeedPayMoney}}">\r\n        </td><!-- 应付 -->\r\n\r\n        <td><div class="div-h-30"></div><span class="F-float F-money">{{arrange.payedMoney}}</span></td><!-- 已付 -->\r\n        \r\n        <td name="guideName">\r\n                            <div class="div-h-30">\r\n                                {{if editStatus != 2 && guideCount > 1 && arrange.isConfirmAccount != 1 }}\r\n                                    <button class="btn btn-success btn-sm btn-white T-addGuide pull-right"> \r\n                                        <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                    </button>\r\n                                    <!-- <a href="#" class="T-addGuide pull-right">增加</a> --><!-- 增加导游 -->\r\n                                {{/if}}\r\n                            </div>\r\n                            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                                {{each arrange.guideDetails as rs index}}\r\n                                    <div class="div-h-30 mar-t-5" index="{{index+1}}" guideId = "{{rs.id}}">\r\n                                        {{if editStatus == 2}}\r\n                                            <span class="guideName">{{rs.guideName}}</span>\r\n                                        {{else}}\r\n                                            <span class="guideName">{{rs.guideName}}</span>\r\n                                            <input name="guideId" value="{{rs.id}}" type="hidden" />\r\n                                            <input name="guideName" value="{{rs.guideName}}" type="hidden" />\r\n                                            <input name="guideArrangeId" value="{{rs.guideArrangeId}}" type="hidden" />\r\n                                            {{if guideCount > 1 && arrange.isConfirmAccount != 1 }}\r\n                                                <button class="btn btn-danger btn-sm btn-white T-delGuide pull-right"> \r\n                                                    <i class="ace-icon fa fa-minus bigger-110 icon-only"></i>\r\n                                                </button>\r\n                                            {{/if}}\r\n                                            <!-- 删除导游 -->\r\n                                        {{/if}}\r\n                                    </div>\r\n                                {{/each}}\r\n                                {{else}}\r\n                                    <div class="div-h-30 mar-t-5" index="1">\r\n                                        {{if editStatus == 2}}\r\n                                            -\r\n                                        {{else}}\r\n                                            {{if guideCount > 1}}\r\n                                                {{if arrange.isConfirmAccount !=1}}\r\n                                                    <button class="btn btn-danger btn-sm btn-white T-delGuide pull-right"> \r\n                                                        <i class="ace-icon fa fa-minus bigger-110 icon-only"></i>\r\n                                                    </button>\r\n                                                {{/if}}\r\n                                                <input name="guideArrangeId" type="hidden" />\r\n                                                <input name="guideName"  type="text" class="w-80" \r\n                                                {{if arrange.isConfirmAccount==1 }}disabled="disabled" {{/if}}/>\r\n                                            {{else}}\r\n                                                <span>{{guideArrange.listMap[0].guideName}}</span>\r\n                                                <input name="guideArrangeId" type="hidden" value="{{guideArrange.listMap[0].id}}"/>\r\n                                            {{/if}}\r\n                                            <!-- <a href="#" class="T-delGuide pull-right">删除</a> -->\r\n                                            <!-- 删除导游 -->\r\n                                        {{/if}}\r\n                                    </div>\r\n                            {{/if}}\r\n                            \r\n                        </td><!-- 导游 -->\r\n\r\n            <td name="guideRealCount">\r\n                <div class="div-h-30"></div>\r\n                {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                    {{each arrange.guideDetails as rs index}}\r\n                        <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                            {{if editStatus == 2}}\r\n                                <span class="F-float F-money">{{rs.realCount}}</span>\r\n                                <input type="hidden" name="guideRealCount" value="{{rs.realCount}}"/>\r\n                            {{else}}\r\n                                <input type="text" name="guideRealCount" value="{{rs.realCount}}" \r\n                                class="F-float F-money w-50" \r\n                                {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                            {{/if}}\r\n                        </div>\r\n                    {{/each}}\r\n                    {{else}}\r\n                    <div class="div-h-30 mar-t-5" index="1">\r\n                        {{if editStatus == 2}}\r\n                            -\r\n                        {{else}}\r\n                            <input name="guideRealCount" type="text" class="w-50" {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                        {{/if}}\r\n                        \r\n                    </div>\r\n                {{/if}}\r\n            </td><!-- 数量 -->\r\n            \r\n            \r\n            \r\n            <td name="guidePayedMoney">\r\n                <div class="div-h-30"></div>\r\n                {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                    {{each arrange.guideDetails as rs index}}\r\n                        <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                            {{if editStatus == 2}}\r\n                                <span class="F-float F-money">{{rs.guidePayedMoney}}</span>\r\n                                <input type="hidden" name="guidePayedMoney" value="{{rs.guidePayedMoney}}"/>\r\n                            {{else}}\r\n                                <input type="text" name="guidePayedMoney" value="{{rs.guidePayedMoney}}" \r\n                                class="F-float F-money w-80" \r\n                                {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                            {{/if}}\r\n                        </div>\r\n                    {{/each}}\r\n                {{else}}\r\n                    \r\n                    <div class="div-h-30 mar-t-5" index="1">\r\n                        {{if editStatus == 2}}\r\n                           0\r\n                        {{else}}\r\n                            <input name="guidePayedMoney" type="text" class="w-80" {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                        {{/if}}\r\n                    </div>\r\n                {{/if}}\r\n            </td><!-- 金额 -->\r\n\r\n            <td name="payType">\r\n                <div class="div-h-30"></div>\r\n                {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                    {{each arrange.guideDetails as rs index}}\r\n                        <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                            {{if editStatus == 2}}\r\n                                {{if rs.realPayType == 0}}\r\n                                    现金\r\n                                {{else if rs.realPayType == 1}}\r\n                                    刷卡\r\n                                {{else if rs.realPayType == 2}}\r\n                                    签单\r\n                                {{/if}}\r\n                            {{else}}\r\n                                <select name="payType" {{if arrange.isConfirmAccount == 1}}disabled="disabled"{{/if}}>\r\n                                    <option value="0" {{if rs.realPayType == 0}}{{/if}}>现金</option>\r\n                                    <option value="1" {{if rs.realPayType == 1}}selected=true{{/if}}>刷卡</option>\r\n                                    <option value="2" {{if rs.realPayType == 2}}selected=true{{/if}}>签单</option>\r\n                                </select>\r\n                            {{/if}}\r\n                        </div>\r\n                    {{/each}}\r\n                {{else}}\r\n                    <div class="div-h-30 mar-t-5" index="1" {{if arrange.isConfirmAccount == 1}}disabled="disabled"{{/if}}>\r\n                        {{if editStatus == 2}}\r\n                            -\r\n                        {{else}}\r\n                            <select name="payType">\r\n                                <option value="0" >现金</option>\r\n                                <option value="1" >刷卡</option>\r\n                                <option value="2" >签单</option>\r\n                            </select>\r\n                        {{/if}}\r\n                    </div>\r\n                {{/if}}\r\n            </td><!-- 付款方式 -->\r\n            \r\n            <td name="billImage">\r\n                <div class="div-h-30"></div>\r\n                {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                    {{each arrange.guideDetails as rs index}}\r\n                        <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                           {{if rs.billImage != null && rs.billImage != ""}}\r\n                            <a href="javascript:void(0);" url="{{rs.billImage}}" class="btn-view">查看</a>\r\n                        {{else}}\r\n                            <span style="color:#bbb;">查看</span>\r\n                        {{/if}}\r\n                        </div>\r\n                    {{/each}}\r\n                {{else}}\r\n\r\n                    <div class="div-h-30 mar-t-5" index="1">\r\n                        {{if editStatus == 2}}\r\n                            -\r\n                        {{else}}\r\n                            <span style="color:#bbb;">查看</span>\r\n                        {{/if}}\r\n                    </div>\r\n                    \r\n                {{/if}}\r\n            </td><!-- 单据 -->\r\n            \r\n            <td name="billRemark">\r\n                <div class="div-h-30"></div>\r\n                {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                    {{each arrange.guideDetails as rs index}}\r\n                        <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                            {{if editStatus == 2}}\r\n                                <span>{{rs.billRemark}}</span>\r\n                            {{else}}\r\n                                <input name="billRemark" value="{{rs.billRemark}}"\r\n                                {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                            {{/if}}\r\n                        </div>\r\n                    {{/each}}\r\n                {{else}}\r\n                    <div class="div-h-30 mar-t-5" index="1">\r\n                        {{if editStatus == 2}}\r\n                            -\r\n                        {{else}}\r\n                            <input name="billRemark" {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                        {{/if}}\r\n                    </div>\r\n                {{/if}}\r\n            </td><!-- 备注 -->\r\n\r\n            <td>\r\n                <div class="div-h-30"></div>\r\n                {{if arrange.isConfirmAccount == 0}}\r\n                    未对账\r\n                {{else}}\r\n                    已对账\r\n                {{/if}}\r\n                {{if editStatus != 2}}\r\n                    &nbsp;&nbsp;\r\n                    {{if arrange.payedMoney == 0 &&　arrange.isConfirmAccount == 0}}\r\n                        <a href="javascript:void(0)" class="T-otherOutArrDel">删除</a>\r\n                    {{else}}\r\n                        <span style="color:#bbb;">删除</span>\r\n                    {{/if}}\r\n                {{/if}}\r\n            </td>\r\n        </tr>\r\n        {{/each}}\r\n        {{/if}}\r\n    </tbody>\r\n</table>\r\n</div>\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if !isFinance}}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.ticketRemark.length>0}}{{remarkArrangeList.ticketRemark[0].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.ticketRemark.length>0}}{{remarkArrangeList.ticketRemark[0].financeCheckRemark}}{{/if}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});