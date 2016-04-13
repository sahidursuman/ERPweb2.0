/*TMODJS:{"debug":true,"version":316,"md5":"715012424c9c59071e1e3319f880eb02"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/busArrange", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, editStatus = $data.editStatus, busCompanyArranges = $data.busCompanyArranges, $each = $utils.$each, $escape = ($data.arrange, 
            $data.index, $utils.$escape), guideCount = $data.guideCount, guideArrange = ($data.rs, 
            $data.guideArrange), tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $line = 1, 2 != editStatus && ($out += ' <div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 车费 <a href="javascript:void(0)" class="T-buspay-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> ', 
            $line = 13), $out += ' <div class="overflow-x min-w-1050"> <table class="table overflow-table table-striped table-bordered table-hover w-1500"> <thead> <tr> <th class="th-border" rowspan="2"><span class="necessary">*</span>开始时间</th> <th class="th-border" rowspan="2"><span class="necessary">*</span>结束时间</th> <th class="th-border" rowspan="2"><span class="necessary">*</span>任务</th> <th class="th-border" rowspan="2"><span class="necessary">*</span>所属车队</th> <th class="th-border" rowspan="2">车牌号</th> <th class="th-border" rowspan="2">座位数</th> <th class="th-border" rowspan="2"><span class="necessary">*</span>车费</th> <th class="th-border" rowspan="2">优惠</th> <th class="th-border" rowspan="2">应付</th> <th class="th-border" rowspan="2">已付</th> <th class="th-border" colspan="5">导游实销</th> <th class="th-border" rowspan="2">操作</th> </tr> <tr> <th class="th-border">导游</th> <th class="th-border">金额</th> <th class="th-border">付款方式</th> <th class="th-border">单据</th> <th class="th-border">导游报账备注</th> </tr> </thead> <tbody class="T-count-bus"> ', 
            $line = 40, null != busCompanyArranges && ($out += " ", $line = 41, busCompanyArranges.listMap.length && ($out += " ", 
            $line = 42, $each(busCompanyArranges.listMap, function(arrange) {
                $out += ' <tr busArrangeId="', $line = 43, $out += $escape(arrange.id), $out += '" badStatus = "', 
                $line = 43, $out += $escape(arrange.badStatus), $out += '" isConfirmAccount="', 
                $line = 44, $out += $escape(arrange.isConfirmAccount), $out += '" arrangeType="busArrange"> <td> <div class="div-h-30"></div> ', 
                $line = 47, $out += $escape($helpers.dateFormat(arrange.startTime, "yyyy-MM-dd")), 
                $out += ' </td> <td> <div class="div-h-30"></div> ', $line = 52, $out += $escape($helpers.dateFormat(arrange.endTime, "yyyy-MM-dd")), 
                $out += ' </td> <td> <div class="div-h-30"></div> ', $line = 57, 0 == arrange.taskType ? ($out += " 全程 ", 
                $line = 59) : 1 == arrange.taskType ? ($out += " 接机 ", $line = 61) : 2 == arrange.taskType ? ($out += " 送机 ", 
                $line = 63) : 3 == arrange.taskType ? ($out += " 前段 ", $line = 65) : 4 == arrange.taskType ? ($out += " 中段 ", 
                $line = 67) : 5 == arrange.taskType && ($out += " 后段 ", $line = 69), $out += ' </td> <td> <div class="div-h-30"></div> <span class="companyName">', 
                $line = 74, $out += $escape(arrange.companyName), $out += '</span> </td> <td> <div class="div-h-30"></div> ', 
                $line = 79, $out += $escape(arrange.licenseNumber), $out += ' </td> <td> <div class="div-h-30"></div> <span calss="F-float F-count">', 
                $line = 84, $out += $escape(arrange.seatCount), $out += '</span> </td> <td> <div class="div-h-30"></div> ', 
                $line = 89, 1 == arrange.badStatus ? ($out += ' <span class="F-float F-money">', 
                $line = 90, $out += $escape(arrange.realPrice), $out += "</span> ", $line = 91) : ($out += " ", 
                $line = 92, 2 == editStatus ? ($out += ' <span class="F-float F-money">', $line = 93, 
                $out += $escape(arrange.realPrice), $out += "</span> ", $line = 94) : ($out += ' <input type="text" name="price" value="', 
                $line = 95, $out += $escape(arrange.realPrice), $out += '" class="w-80 F-float F-money" ', 
                $line = 96, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 96), 
                $out += "/> ", $line = 97), $out += " ", $line = 98), $out += ' <input type="hidden" name="realCount" value="1" /> </td> <td> <div class="div-h-30"></div> ', 
                $line = 104, 1 == arrange.badStatus ? ($out += ' <span class="F-float F-money">', 
                $line = 105, $out += $escape(arrange.realReduceMoney), $out += "</span> ", $line = 106) : ($out += " ", 
                $line = 107, 2 == editStatus ? ($out += ' <span class="F-float F-money">', $line = 108, 
                $out += $escape(arrange.realReduceMoney), $out += '</span> <input type="hidden" name="realReduceMoney" value="', 
                $line = 109, $out += $escape(arrange.realReduceMoney), $out += '" /> ', $line = 110) : ($out += ' <input type="text" class="w-80 F-float F-money" name="realReduceMoney" value="', 
                $line = 111, $out += $escape(arrange.realReduceMoney), $out += '" ', $line = 111, 
                1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 111), $out += "/> ", 
                $line = 112), $out += " ", $line = 114), $out += ' </td> <td> <div class="div-h-30"></div> ', 
                $line = 119, 1 == arrange.badStatus ? ($out += ' <span class="BusneedPayMoney F-float F-money"> ', 
                $line = 121, $out += $escape(arrange.realNeedPayMoney), $out += " </span> ", $line = 123) : ($out += " ", 
                $line = 124, 1 == arrange.isConfirmAccount ? ($out += ' <span class="BusneedPayMoney F-float F-money">', 
                $line = 125, $out += $escape(arrange.realNeedPayMoney), $out += "</span> ", $line = 126) : ($out += ' <span class="BusneedPayMoney F-float F-money"></span> ', 
                $line = 128), $out += " ", $line = 129), $out += ' <input type="hidden" name="needPayMoney" value="', 
                $line = 130, $out += $escape(arrange.realNeedPayMoney), $out += '"/> </td> <td> <div class="div-h-30"></div> <span class="F-float F-money">', 
                $line = 135, $out += $escape(arrange.payedMoney), $out += '</span> </td> <td name="guideName"> <div class="div-h-30"> ', 
                $line = 140, 2 != editStatus && guideCount > 1 && 1 != arrange.isConfirmAccount && ($out += ' <button class="btn btn-success btn-sm btn-white T-addGuide pull-right"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </button>  ', 
                $line = 145), $out += " </div> ", $line = 147, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 148, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 149, $out += $escape(index + 1), 
                    $out += '" guideId = "', $line = 149, $out += $escape(rs.id), $out += '"> ', $line = 150, 
                    2 == editStatus ? ($out += ' <span class="guideName">', $line = 151, $out += $escape(rs.guideName), 
                    $out += "</span> ", $line = 152) : ($out += ' <span class="guideName">', $line = 153, 
                    $out += $escape(rs.guideName), $out += '</span> <input name="guideId" value="', 
                    $line = 154, $out += $escape(rs.id), $out += '" type="hidden" /> <input name="guideName" value="', 
                    $line = 155, $out += $escape(rs.guideName), $out += '" type="hidden" /> <input name="guideArrangeId" value="', 
                    $line = 156, $out += $escape(rs.guideArrangeId), $out += '" type="hidden" /> ', 
                    $line = 157, guideCount > 1 && 1 != arrange.isConfirmAccount && ($out += ' <button class="btn btn-danger btn-sm btn-white T-delGuide pull-right"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i> </button> ', 
                    $line = 161), $out += "  ", $line = 163), $out += " </div> ", $line = 165;
                }), $out += " ", $line = 166) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> ', 
                $line = 168, 2 == editStatus ? ($out += " - ", $line = 170) : ($out += " ", $line = 171, 
                guideCount > 1 ? ($out += " ", $line = 172, 1 != arrange.isConfirmAccount && ($out += ' <button class="btn btn-danger btn-sm btn-white T-delGuide pull-right"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i> </button> ', 
                $line = 176), $out += ' <input name="guideArrangeId" type="hidden" /> <input name="guideName" type="text" class="w-80" ', 
                $line = 179, 1 == arrange.isConfirmAccount && ($out += 'disabled="disabled" ', $line = 179), 
                $out += "/> ", $line = 180) : ($out += " <span>", $line = 181, $out += $escape(guideArrange.listMap[0].guideName), 
                $out += '</span> <input name="guideArrangeId" type="hidden" value="', $line = 182, 
                $out += $escape(guideArrange.listMap[0].id), $out += '"/> ', $line = 183), $out += "   ", 
                $line = 186), $out += " </div> ", $line = 188), $out += ' </td> <td name="guidePayedMoney"> <div class="div-h-30"></div> ', 
                $line = 196, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 197, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 198, $out += $escape(index + 1), 
                    $out += '"> ', $line = 199, 2 == editStatus ? ($out += ' <span class="F-float F-money">', 
                    $line = 200, $out += $escape(rs.guidePayedMoney), $out += '</span> <input type="hidden" name="guidePayedMoney" value="', 
                    $line = 201, $out += $escape(rs.guidePayedMoney), $out += '"/> ', $line = 202) : ($out += ' <input type="text" name="guidePayedMoney" value="', 
                    $line = 203, $out += $escape(rs.guidePayedMoney), $out += '" class="F-float F-money w-80" ', 
                    $line = 205, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 205), 
                    $out += "/> ", $line = 206), $out += " </div> ", $line = 208;
                }), $out += " ", $line = 209) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> ', 
                $line = 212, 2 == editStatus ? ($out += " 0 ", $line = 214) : ($out += ' <input name="guidePayedMoney" type="text" class="w-80" ', 
                $line = 215, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 215), 
                $out += "/> ", $line = 216), $out += " </div> ", $line = 218), $out += ' </td> <td name="payType"> <div class="div-h-30"></div> ', 
                $line = 223, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 224, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 225, $out += $escape(index + 1), 
                    $out += '"> ', $line = 226, 2 == editStatus ? ($out += " ", $line = 227, 0 == rs.realPayType ? ($out += " 现金 ", 
                    $line = 229) : 1 == rs.realPayType ? ($out += " 刷卡 ", $line = 231) : 2 == rs.realPayType && ($out += " 签单 ", 
                    $line = 233), $out += " ", $line = 234) : ($out += ' <select name="payType" ', $line = 235, 
                    1 == arrange.isConfirmAccount && ($out += 'disabled="disabled"', $line = 235), $out += '> <option value="0" ', 
                    $line = 236, 0 == rs.realPayType && ($line = 236), $out += '>现金</option> <option value="1" ', 
                    $line = 237, 1 == rs.realPayType && ($out += "selected=true", $line = 237), $out += '>刷卡</option> <option value="2" ', 
                    $line = 238, 2 == rs.realPayType && ($out += "selected=true", $line = 238), $out += ">签单</option> </select> ", 
                    $line = 240), $out += " </div> ", $line = 242;
                }), $out += " ", $line = 243) : ($out += ' <div class="div-h-30 mar-t-5" index="1" ', 
                $line = 244, 1 == arrange.isConfirmAccount && ($out += 'disabled="disabled"', $line = 244), 
                $out += "> ", $line = 245, 2 == editStatus ? ($out += " - ", $line = 247) : ($out += ' <select name="payType"> <option value="0" >现金</option> <option value="1" >刷卡</option> <option value="2" >签单</option> </select> ', 
                $line = 253), $out += " </div> ", $line = 255), $out += ' </td> <td name="billImage"> <div class="div-h-30"></div> ', 
                $line = 260, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 261, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 262, $out += $escape(index + 1), 
                    $out += '"> ', $line = 263, null != rs.billImage && "" != rs.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                    $line = 264, $out += $escape(rs.billImage), $out += '" class="btn-view">查看</a> ', 
                    $line = 265) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 267), $out += " </div> ", 
                    $line = 269;
                }), $out += " ", $line = 270) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> ', 
                $line = 273, 2 == editStatus ? ($out += " - ", $line = 275) : ($out += ' <span style="color:#bbb;">查看</span> ', 
                $line = 277), $out += " </div> ", $line = 280), $out += ' </td> <td name="billRemark"> <div class="div-h-30"></div> ', 
                $line = 285, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 286, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 287, $out += $escape(index + 1), 
                    $out += '"> ', $line = 288, 2 == editStatus ? ($out += " <span>", $line = 289, $out += $escape(rs.billRemark), 
                    $out += "</span> ", $line = 290) : ($out += ' <input name="billRemark" value="', 
                    $line = 291, $out += $escape(rs.billRemark), $out += '" ', $line = 292, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', 
                    $line = 292), $out += "/> ", $line = 293), $out += " </div> ", $line = 295;
                }), $out += " ", $line = 296) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> ', 
                $line = 298, 2 == editStatus ? ($out += " - ", $line = 300) : ($out += ' <input name="billRemark" ', 
                $line = 301, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 301), 
                $out += "/> ", $line = 302), $out += " </div> ", $line = 304), $out += " </td> <td> ", 
                $line = 308, 0 == arrange.isConfirmAccount ? ($out += " 未对账 ", $line = 310) : ($out += " 已对账 ", 
                $line = 312), $out += " ", $line = 313, 2 != editStatus && ($out += " &nbsp;&nbsp; ", 
                $line = 315, 0 == arrange.payedMoney && 0 == arrange.isConfirmAccount ? ($out += ' <a href="javascript:void(0)" class="T-otherOutArrDel">删除</a> ', 
                $line = 317) : ($out += ' <span style="color:#bbb;">删除</span> ', $line = 319), $out += " ", 
                $line = 320), $out += " </td> </tr> ", $line = 323;
            }), $out += " ", $line = 324), $out += " ", $line = 325), $out += " </tbody> </table> </div> ", 
            $line = 330, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 334, isFinance || ($out += 'readonly="readonly"', $line = 334), $out += ' type="text" style="width:30%;" value="', 
            $line = 334, remarkArrangeList.busRemark.length > 0 && ($line = 334, $out += $escape(remarkArrangeList.busRemark[0].opCheckRemark), 
            $line = 334), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 337, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 337), $out += ' type="text" style="width:30%;" value="', $line = 337, remarkArrangeList.busRemark.length > 0 && ($line = 337, 
            $out += $escape(remarkArrangeList.busRemark[0].financeCheckRemark), $line = 337), 
            $out += '" /> </div> </div> ', $line = 340), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{if editStatus != 2}}\r\n    <div class="ui-sortable-handle widget-container-col">\r\n        <h5 class="title-size">\r\n            <i class="ace-icon fa fa-medkit"></i> 车费\r\n            <a href="javascript:void(0)" class="T-buspay-add">\r\n                <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                    <i class="ace-icon fa fa-plus"></i>\r\n                    新增\r\n                </button>\r\n            </a>\r\n        </h5>\r\n    </div>\r\n{{/if}}\r\n<div class="overflow-x min-w-1050">\r\n    <table class="table overflow-table  table-striped table-bordered table-hover w-1500">\r\n        <thead>\r\n        <tr>\r\n            <th class="th-border" rowspan="2"><span class="necessary">*</span>开始时间</th>\r\n            <th class="th-border" rowspan="2"><span class="necessary">*</span>结束时间</th>\r\n            <th class="th-border" rowspan="2"><span class="necessary">*</span>任务</th>\r\n            <th class="th-border" rowspan="2"><span class="necessary">*</span>所属车队</th>\r\n            <th class="th-border" rowspan="2">车牌号</th>\r\n            <th class="th-border" rowspan="2">座位数</th>\r\n            <th class="th-border" rowspan="2"><span class="necessary">*</span>车费</th>\r\n            <th class="th-border" rowspan="2">优惠</th>\r\n            <th class="th-border" rowspan="2">应付</th>\r\n            <th class="th-border" rowspan="2">已付</th>\r\n            <th class="th-border" colspan="5">导游实销</th>\r\n            <th class="th-border" rowspan="2">操作</th>\r\n        </tr>\r\n        <tr>\r\n            <th class="th-border">导游</th>\r\n            <th class="th-border">金额</th>\r\n            <th class="th-border">付款方式</th>\r\n            <th class="th-border">单据</th>\r\n            <th class="th-border">导游报账备注</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody class="T-count-bus">\r\n        {{if busCompanyArranges != null}}\r\n            {{if busCompanyArranges.listMap.length}}\r\n                {{each busCompanyArranges.listMap as arrange index}}\r\n                    <tr busArrangeId="{{arrange.id}}" badStatus = "{{arrange.badStatus}}"\r\n                    isConfirmAccount="{{arrange.isConfirmAccount}}" arrangeType="busArrange">\r\n                        <td>\r\n                            <div class="div-h-30"></div>\r\n                            {{arrange.startTime | dateFormat: \'yyyy-MM-dd\'}}\r\n                        </td><!-- 开始时间 -->\r\n\r\n                        <td>\r\n                            <div class="div-h-30"></div>\r\n                            {{arrange.endTime | dateFormat: \'yyyy-MM-dd\'}}\r\n                        </td><!-- 结束时间 -->\r\n\r\n                        <td>\r\n                            <div class="div-h-30"></div>\r\n                            {{ if arrange.taskType == 0}}\r\n                                    全程\r\n                                {{else if arrange.taskType == 1}}\r\n                                    接机\r\n                                {{else if arrange.taskType == 2}}\r\n                                    送机\r\n                                {{else if arrange.taskType == 3}}\r\n                                    前段\r\n                                {{else if arrange.taskType == 4}}\r\n                                    中段\r\n                                {{else if arrange.taskType == 5}}\r\n                                    后段\r\n                            {{/if}}\r\n                        </td><!-- 任务 -->\r\n\r\n                        <td>\r\n                            <div class="div-h-30"></div>\r\n                            <span class="companyName">{{arrange.companyName}}</span>\r\n                        </td><!-- 车队 -->\r\n\r\n                        <td>\r\n                            <div class="div-h-30"></div>\r\n                            {{arrange.licenseNumber}}\r\n                        </td><!-- 车牌号 -->\r\n\r\n                        <td>\r\n                            <div class="div-h-30"></div>\r\n                            <span calss="F-float F-count">{{arrange.seatCount}}</span>\r\n                        </td>\r\n\r\n                        <td>\r\n                            <div class="div-h-30"></div>\r\n                            {{if arrange.badStatus == 1}}\r\n                                <span class="F-float F-money">{{arrange.realPrice}}</span>\r\n                            {{else}}\r\n                                {{if editStatus == 2}}\r\n                                    <span class="F-float F-money">{{arrange.realPrice}}</span>\r\n                                {{else}}\r\n                                    <input type="text" name="price" value="{{arrange.realPrice}}" class="w-80 F-float F-money" \r\n                                    {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                                {{/if}}\r\n                            {{/if}}\r\n                            <input type="hidden" name="realCount" value="1" />\r\n                        </td><!-- 车费 -->\r\n\r\n                        <td>\r\n                            <div class="div-h-30"></div>\r\n                            {{if arrange.badStatus == 1}}\r\n                                <span class="F-float F-money">{{arrange.realReduceMoney}}</span>\r\n                            {{else}}\r\n                                {{if editStatus == 2}}\r\n                                    <span class="F-float F-money">{{arrange.realReduceMoney}}</span>\r\n                                    <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" />\r\n                                {{else}}\r\n                                    <input type="text" class="w-80 F-float F-money" name="realReduceMoney" value="{{arrange.realReduceMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                                {{/if}}\r\n                                \r\n                            {{/if}}\r\n                        </td><!-- 优惠 -->\r\n\r\n                        <td>\r\n                            <div class="div-h-30"></div>\r\n                            {{if arrange.badStatus == 1}}\r\n                                <span class="BusneedPayMoney F-float F-money">\r\n                                    {{arrange.realNeedPayMoney}}\r\n                                </span>\r\n                            {{else}}\r\n                                {{if arrange.isConfirmAccount == 1}}\r\n                                    <span class="BusneedPayMoney F-float F-money">{{arrange.realNeedPayMoney}}</span>\r\n                                {{else}}\r\n                                    <span class="BusneedPayMoney F-float F-money"></span>\r\n                                {{/if}}\r\n                            {{/if}}\r\n                            <input type="hidden" name="needPayMoney" value="{{arrange.realNeedPayMoney}}"/>\r\n                        </td><!-- 应付 -->\r\n\r\n                        <td>\r\n                            <div class="div-h-30"></div>\r\n                            <span class="F-float F-money">{{arrange.payedMoney}}</span>\r\n                        </td><!-- 已付 -->\r\n                        \r\n                        <td name="guideName">\r\n                            <div class="div-h-30">\r\n                                {{if editStatus != 2 && guideCount > 1 && arrange.isConfirmAccount != 1 }}\r\n                                    <button class="btn btn-success btn-sm btn-white T-addGuide pull-right"> \r\n                                        <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                    </button>\r\n                                    <!-- <a href="#" class="T-addGuide pull-right">增加</a> --><!-- 增加导游 -->\r\n                                {{/if}}\r\n                            </div>\r\n                            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                                {{each arrange.guideDetails as rs index}}\r\n                                    <div class="div-h-30 mar-t-5" index="{{index+1}}" guideId = "{{rs.id}}">\r\n                                        {{if editStatus == 2}}\r\n                                            <span class="guideName">{{rs.guideName}}</span>\r\n                                        {{else}}\r\n                                            <span class="guideName">{{rs.guideName}}</span>\r\n                                            <input name="guideId" value="{{rs.id}}" type="hidden" />\r\n                                            <input name="guideName" value="{{rs.guideName}}" type="hidden" />\r\n                                            <input name="guideArrangeId" value="{{rs.guideArrangeId}}" type="hidden" />\r\n                                            {{if guideCount > 1 && arrange.isConfirmAccount != 1 }}\r\n                                                <button class="btn btn-danger btn-sm btn-white T-delGuide pull-right"> \r\n                                                    <i class="ace-icon fa fa-minus bigger-110 icon-only"></i>\r\n                                                </button>\r\n                                            {{/if}}\r\n                                            <!-- 删除导游 -->\r\n                                        {{/if}}\r\n                                    </div>\r\n                                {{/each}}\r\n                                {{else}}\r\n                                    <div class="div-h-30 mar-t-5" index="1">\r\n                                        {{if editStatus == 2}}\r\n                                            -\r\n                                        {{else}}\r\n                                            {{if guideCount > 1}}\r\n                                                {{if arrange.isConfirmAccount !=1}}\r\n                                                    <button class="btn btn-danger btn-sm btn-white T-delGuide pull-right"> \r\n                                                        <i class="ace-icon fa fa-minus bigger-110 icon-only"></i>\r\n                                                    </button>\r\n                                                {{/if}}\r\n                                                <input name="guideArrangeId" type="hidden" />\r\n                                                <input name="guideName"  type="text" class="w-80" \r\n                                                {{if arrange.isConfirmAccount==1 }}disabled="disabled" {{/if}}/>\r\n                                            {{else}}\r\n                                                <span>{{guideArrange.listMap[0].guideName}}</span>\r\n                                                <input name="guideArrangeId" type="hidden" value="{{guideArrange.listMap[0].id}}"/>\r\n                                            {{/if}}\r\n                                            <!-- <a href="#" class="T-delGuide pull-right">删除</a> -->\r\n                                            <!-- 删除导游 -->\r\n                                        {{/if}}\r\n                                    </div>\r\n                            {{/if}}\r\n                            \r\n                        </td><!-- 导游 -->\r\n                        \r\n                        \r\n                        \r\n                        <td name="guidePayedMoney">\r\n                            <div class="div-h-30"></div>\r\n                            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                                {{each arrange.guideDetails as rs index}}\r\n                                    <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                                        {{if editStatus == 2}}\r\n                                            <span class="F-float F-money">{{rs.guidePayedMoney}}</span>\r\n                                            <input type="hidden" name="guidePayedMoney" value="{{rs.guidePayedMoney}}"/>\r\n                                        {{else}}\r\n                                            <input type="text" name="guidePayedMoney" value="{{rs.guidePayedMoney}}" \r\n                                            class="F-float F-money w-80" \r\n                                            {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                                        {{/if}}\r\n                                    </div>\r\n                                {{/each}}\r\n                            {{else}}\r\n                                \r\n                                <div class="div-h-30 mar-t-5" index="1">\r\n                                    {{if editStatus == 2}}\r\n                                       0\r\n                                    {{else}}\r\n                                        <input name="guidePayedMoney" type="text" class="w-80" {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                                    {{/if}}\r\n                                </div>\r\n                            {{/if}}\r\n                        </td><!-- 金额 -->\r\n\r\n                        <td name="payType">\r\n                            <div class="div-h-30"></div>\r\n                            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                                {{each arrange.guideDetails as rs index}}\r\n                                    <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                                        {{if editStatus == 2}}\r\n                                            {{if rs.realPayType == 0}}\r\n                                                现金\r\n                                            {{else if rs.realPayType == 1}}\r\n                                                刷卡\r\n                                            {{else if rs.realPayType == 2}}\r\n                                                签单\r\n                                            {{/if}}\r\n                                        {{else}}\r\n                                            <select name="payType" {{if arrange.isConfirmAccount == 1}}disabled="disabled"{{/if}}>\r\n                                                <option value="0" {{if rs.realPayType == 0}}{{/if}}>现金</option>\r\n                                                <option value="1" {{if rs.realPayType == 1}}selected=true{{/if}}>刷卡</option>\r\n                                                <option value="2" {{if rs.realPayType == 2}}selected=true{{/if}}>签单</option>\r\n                                            </select>\r\n                                        {{/if}}\r\n                                    </div>\r\n                                {{/each}}\r\n                            {{else}}\r\n                                <div class="div-h-30 mar-t-5" index="1" {{if arrange.isConfirmAccount == 1}}disabled="disabled"{{/if}}>\r\n                                    {{if editStatus == 2}}\r\n                                        -\r\n                                    {{else}}\r\n                                        <select name="payType">\r\n                                            <option value="0" >现金</option>\r\n                                            <option value="1" >刷卡</option>\r\n                                            <option value="2" >签单</option>\r\n                                        </select>\r\n                                    {{/if}}\r\n                                </div>\r\n                            {{/if}}\r\n                        </td><!-- 付款方式 -->\r\n                        \r\n                        <td name="billImage">\r\n                            <div class="div-h-30"></div>\r\n                            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                                {{each arrange.guideDetails as rs index}}\r\n                                    <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                                       {{if rs.billImage != null && rs.billImage != ""}}\r\n                                        <a href="javascript:void(0);" url="{{rs.billImage}}" class="btn-view">查看</a>\r\n                                    {{else}}\r\n                                        <span style="color:#bbb;">查看</span>\r\n                                    {{/if}}\r\n                                    </div>\r\n                                {{/each}}\r\n                            {{else}}\r\n\r\n                                <div class="div-h-30 mar-t-5" index="1">\r\n                                    {{if editStatus == 2}}\r\n                                        -\r\n                                    {{else}}\r\n                                        <span style="color:#bbb;">查看</span>\r\n                                    {{/if}}\r\n                                </div>\r\n                                \r\n                            {{/if}}\r\n                        </td><!-- 单据 -->\r\n                        \r\n                        <td name="billRemark">\r\n                            <div class="div-h-30"></div>\r\n                            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                                {{each arrange.guideDetails as rs index}}\r\n                                    <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                                        {{if editStatus == 2}}\r\n                                            <span>{{rs.billRemark}}</span>\r\n                                        {{else}}\r\n                                            <input name="billRemark" value="{{rs.billRemark}}"\r\n                                            {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                                        {{/if}}\r\n                                    </div>\r\n                                {{/each}}\r\n                            {{else}}\r\n                                <div class="div-h-30 mar-t-5" index="1">\r\n                                    {{if editStatus == 2}}\r\n                                        -\r\n                                    {{else}}\r\n                                        <input name="billRemark" {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                                    {{/if}}\r\n                                </div>\r\n                            {{/if}}\r\n                        </td><!-- 备注 -->\r\n\r\n                        <td>\r\n                            {{if arrange.isConfirmAccount == 0}}\r\n                                未对账\r\n                            {{else}}\r\n                                已对账\r\n                            {{/if}}\r\n                            {{if editStatus != 2}}\r\n                                &nbsp;&nbsp;\r\n                                {{if arrange.payedMoney == 0 &&　arrange.isConfirmAccount == 0}}\r\n                                    <a href="javascript:void(0)" class="T-otherOutArrDel">删除</a>\r\n                                {{else}}\r\n                                    <span style="color:#bbb;">删除</span>\r\n                                {{/if}}\r\n                            {{/if}}\r\n                        </td>\r\n                    </tr>\r\n                {{/each}}\r\n            {{/if}}\r\n        {{/if}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if !isFinance }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.busRemark.length>0}}{{remarkArrangeList.busRemark[0].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.busRemark.length>0}}{{remarkArrangeList.busRemark[0].financeCheckRemark}}{{/if}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});