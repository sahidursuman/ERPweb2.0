/*TMODJS:{"debug":true,"version":336,"md5":"c6e96db9003c73723f56beb69102effc"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/busArrange", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, editStatus = $data.editStatus, busCompanyArranges = $data.busCompanyArranges, $each = $utils.$each, $escape = ($data.arrange, 
            $data.index, $utils.$escape), guideCount = $data.guideCount, guideArrange = ($data.rs, 
            $data.guideArrange), tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $line = 1, 2 != editStatus && ($out += ' <div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 车费 <a href="javascript:void(0)" class="T-buspay-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> ', 
            $line = 13), $out += ' <div class="overflow-x min-w-1050"> <table class="table overflow-table table-striped table-bordered table-hover w-1500"> <thead> <tr class="bg-blur"> <th rowspan="2"><span class="necessary">*</span>开始时间</th> <th rowspan="2"><span class="necessary">*</span>结束时间</th> <th rowspan="2"><span class="necessary">*</span>任务</th> <th rowspan="2"><span class="necessary">*</span>所属车队</th> <th rowspan="2">车牌号</th> <th rowspan="2">座位数</th> <th rowspan="2"><span class="necessary">*</span>车费</th> <th rowspan="2">优惠</th> <th rowspan="2">应付</th> <th rowspan="2">已付</th> <th colspan="5">导游实销</th> <th rowspan="2">操作</th> </tr> <tr class="bg-blur"> <th>导游</th> <th>金额</th> <th>付款方式</th> <th>单据</th> <th>导游报账备注</th> </tr> </thead> <tbody class="T-count-bus"> ', 
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
                $line = 89, 1 == arrange.badStatus ? ($out += ' <span class="F-float F-money realPrice">', 
                $line = 90, $out += $escape(arrange.realPrice), $out += '</span> <input type="hidden" name="price" value="', 
                $line = 91, $out += $escape(arrange.realPrice), $out += '" /> ', $line = 92) : ($out += " ", 
                $line = 93, 2 == editStatus ? ($out += ' <span class="F-float F-money realPrice">', 
                $line = 94, $out += $escape(arrange.realPrice), $out += '</span> <input type="hidden" name="price" value="', 
                $line = 95, $out += $escape(arrange.realPrice), $out += '" /> ', $line = 96) : ($out += ' <input type="text" name="price" value="', 
                $line = 97, $out += $escape(arrange.realPrice), $out += '" class="w-80 F-float F-money" ', 
                $line = 98, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 98), 
                $out += "/> ", $line = 99), $out += " ", $line = 100), $out += ' </td> <td> <div class="div-h-30"></div> ', 
                $line = 106, 1 == arrange.badStatus ? ($out += ' <span class="F-float F-money">', 
                $line = 107, $out += $escape(arrange.realReduceMoney), $out += "</span> ", $line = 108) : ($out += " ", 
                $line = 109, 2 == editStatus ? ($out += ' <span class="F-float F-money">', $line = 110, 
                $out += $escape(arrange.realReduceMoney), $out += '</span> <input type="hidden" name="realReduceMoney" value="', 
                $line = 111, $out += $escape(arrange.realReduceMoney), $out += '" /> ', $line = 112) : ($out += ' <input type="text" class="w-80 F-float F-money" name="realReduceMoney" value="', 
                $line = 113, $out += $escape(arrange.realReduceMoney), $out += '" ', $line = 113, 
                1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 113), $out += "/> ", 
                $line = 114), $out += " ", $line = 116), $out += ' </td> <td> <div class="div-h-30"></div> ', 
                $line = 121, 1 == arrange.badStatus ? ($out += ' <span class="BusneedPayMoney F-float F-money"> ', 
                $line = 123, $out += $escape(arrange.realNeedPayMoney), $out += " </span> ", $line = 125) : ($out += " ", 
                $line = 126, 1 == arrange.isConfirmAccount ? ($out += ' <span class="BusneedPayMoney F-float F-money">', 
                $line = 127, $out += $escape(arrange.realNeedPayMoney), $out += "</span> ", $line = 128) : ($out += ' <span class="BusneedPayMoney F-float F-money"></span> ', 
                $line = 130), $out += " ", $line = 131), $out += ' <input type="hidden" name="needPayMoney" value="', 
                $line = 132, $out += $escape(arrange.realNeedPayMoney), $out += '"/> </td> <td> <div class="div-h-30"></div> <span class="F-float F-money">', 
                $line = 137, $out += $escape(arrange.payedMoney), $out += '</span> </td> <td name="guideName"> <div class="div-h-30"> ', 
                $line = 142, 2 != editStatus && guideCount > 1 && 1 != arrange.isConfirmAccount && ($out += ' <button class="btn btn-success btn-sm btn-white T-addGuide pull-right"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </button>  ', 
                $line = 147), $out += " </div> ", $line = 149, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 150, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 151, $out += $escape(index + 1), 
                    $out += '" guideId = "', $line = 151, $out += $escape(rs.id), $out += '"> ', $line = 152, 
                    2 == editStatus ? ($out += ' <span class="guideName">', $line = 153, $out += $escape(rs.guideName), 
                    $out += "</span> ", $line = 154) : ($out += " ", $line = 155, "" == rs.guideName || null == rs.guideName ? ($out += " ", 
                    $line = 156, guideCount > 1 ? ($out += ' <input name="guideArrangeId" type="hidden" /> <input name="guideName" type="text" class="w-80" ', 
                    $line = 159, 1 == arrange.isConfirmAccount && ($out += 'disabled="disabled" ', $line = 159), 
                    $out += "/> ", $line = 160) : ($out += " <span>", $line = 161, $out += $escape(guideArrange.listMap[0].guideName), 
                    $out += '</span> <input name="guideArrangeId" type="hidden" value="', $line = 162, 
                    $out += $escape(guideArrange.listMap[0].id), $out += '"/> ', $line = 163), $out += " ", 
                    $line = 164) : ($out += ' <span class="guideName">', $line = 165, $out += $escape(rs.guideName), 
                    $out += '</span> <input name="guideId" value="', $line = 166, $out += $escape(rs.id), 
                    $out += '" type="hidden" /> <input name="guideName" value="', $line = 167, $out += $escape(rs.guideName), 
                    $out += '" type="hidden" /> <input name="guideArrangeId" value="', $line = 168, 
                    $out += $escape(rs.guideArrangeId), $out += '" type="hidden" /> ', $line = 169), 
                    $out += " ", $line = 170, guideCount > 1 && 1 != arrange.isConfirmAccount && ($out += ' <button class="btn btn-danger btn-sm btn-white T-delGuide pull-right"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i> </button> ', 
                    $line = 174), $out += "  ", $line = 176), $out += " </div> ", $line = 178;
                }), $out += " ", $line = 179) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> ', 
                $line = 181, 2 == editStatus ? ($out += " - ", $line = 183) : ($out += " ", $line = 184, 
                guideCount > 1 ? ($out += " ", $line = 185, 1 != arrange.isConfirmAccount && ($out += ' <button class="btn btn-danger btn-sm btn-white T-delGuide pull-right"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i> </button> ', 
                $line = 189), $out += ' <input name="guideArrangeId" type="hidden" /> <input name="guideName" type="text" class="w-80" ', 
                $line = 192, 1 == arrange.isConfirmAccount && ($out += 'disabled="disabled" ', $line = 192), 
                $out += "/> ", $line = 193) : ($out += " <span>", $line = 194, $out += $escape(guideArrange.listMap[0].guideName), 
                $out += '</span> <input name="guideArrangeId" type="hidden" value="', $line = 195, 
                $out += $escape(guideArrange.listMap[0].id), $out += '"/> ', $line = 196), $out += "   ", 
                $line = 199), $out += " </div> ", $line = 201), $out += ' </td> <td name="guidePayedMoney"> <div class="div-h-30"></div> ', 
                $line = 209, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 210, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 211, $out += $escape(index + 1), 
                    $out += '"> ', $line = 212, 2 == editStatus ? ($out += ' <span class="F-float F-money">', 
                    $line = 213, $out += $escape(rs.guidePayedMoney), $out += '</span> <input type="hidden" name="guidePayedMoney" value="', 
                    $line = 214, $out += $escape(rs.guidePayedMoney), $out += '"/> ', $line = 215) : ($out += ' <input type="text" name="guidePayedMoney" value="', 
                    $line = 216, $out += $escape(rs.guidePayedMoney), $out += '" class="F-float F-money w-80" ', 
                    $line = 218, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 218), 
                    $out += "/> ", $line = 219), $out += " </div> ", $line = 221;
                }), $out += " ", $line = 222) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> ', 
                $line = 225, 2 == editStatus ? ($out += " 0 ", $line = 227) : ($out += ' <input name="guidePayedMoney" type="text" class="w-80" ', 
                $line = 228, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 228), 
                $out += "/> ", $line = 229), $out += " </div> ", $line = 231), $out += ' </td> <td name="payType"> <div class="div-h-30"></div> ', 
                $line = 236, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 237, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 238, $out += $escape(index + 1), 
                    $out += '"> ', $line = 239, 2 == editStatus ? ($out += " ", $line = 240, 0 == rs.realPayType ? ($out += " 现金 ", 
                    $line = 242) : 1 == rs.realPayType ? ($out += " 刷卡 ", $line = 244) : 2 == rs.realPayType && ($out += " 签单 ", 
                    $line = 246), $out += " ", $line = 247) : ($out += ' <select name="payType" ', $line = 248, 
                    1 == arrange.isConfirmAccount && ($out += 'disabled="disabled"', $line = 248), $out += '> <option value="0" ', 
                    $line = 249, 0 == rs.realPayType && ($line = 249), $out += '>现金</option> <option value="1" ', 
                    $line = 250, 1 == rs.realPayType && ($out += "selected=true", $line = 250), $out += '>刷卡</option> <option value="2" ', 
                    $line = 251, 2 == rs.realPayType && ($out += "selected=true", $line = 251), $out += ">签单</option> </select> ", 
                    $line = 253), $out += " </div> ", $line = 255;
                }), $out += " ", $line = 256) : ($out += ' <div class="div-h-30 mar-t-5" index="1" ', 
                $line = 257, 1 == arrange.isConfirmAccount && ($out += 'disabled="disabled"', $line = 257), 
                $out += "> ", $line = 258, 2 == editStatus ? ($out += " - ", $line = 260) : ($out += ' <select name="payType"> <option value="0" >现金</option> <option value="1" >刷卡</option> <option value="2" >签单</option> </select> ', 
                $line = 266), $out += " </div> ", $line = 268), $out += ' </td> <td name="billImage"> <div class="div-h-30"></div> ', 
                $line = 273, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 274, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 275, $out += $escape(index + 1), 
                    $out += '"> ', $line = 276, null != rs.billImage && "" != rs.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                    $line = 277, $out += $escape(rs.billImage), $out += '" class="btn-view">查看</a> ', 
                    $line = 278) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 280), $out += " </div> ", 
                    $line = 282;
                }), $out += " ", $line = 283) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> ', 
                $line = 286, 2 == editStatus ? ($out += " - ", $line = 288) : ($out += ' <span style="color:#bbb;">查看</span> ', 
                $line = 290), $out += " </div> ", $line = 293), $out += ' </td> <td name="billRemark"> <div class="div-h-30"></div> ', 
                $line = 298, arrange.guideDetails && arrange.guideDetails.length ? ($out += " ", 
                $line = 299, $each(arrange.guideDetails, function(rs, index) {
                    $out += ' <div class="div-h-30 mar-t-5" index="', $line = 300, $out += $escape(index + 1), 
                    $out += '"> ', $line = 301, 2 == editStatus ? ($out += " <span>", $line = 302, $out += $escape(rs.billRemark), 
                    $out += "</span> ", $line = 303) : ($out += ' <input name="billRemark" value="', 
                    $line = 304, $out += $escape(rs.billRemark), $out += '" ', $line = 305, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', 
                    $line = 305), $out += "/> ", $line = 306), $out += " </div> ", $line = 308;
                }), $out += " ", $line = 309) : ($out += ' <div class="div-h-30 mar-t-5" index="1"> ', 
                $line = 311, 2 == editStatus ? ($out += " - ", $line = 313) : ($out += ' <input name="billRemark" ', 
                $line = 314, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 314), 
                $out += "/> ", $line = 315), $out += " </div> ", $line = 317), $out += " </td> <td> ", 
                $line = 321, 0 == arrange.isConfirmAccount ? ($out += " 未对账 ", $line = 323) : ($out += " 已对账 ", 
                $line = 325), $out += " ", $line = 326, 2 != editStatus && ($out += " &nbsp;&nbsp; ", 
                $line = 328, 0 == arrange.payedMoney && 0 == arrange.isConfirmAccount ? ($out += ' <a href="javascript:void(0)" class="T-busArrDel">删除</a> ', 
                $line = 330) : ($out += ' <span style="color:#bbb;">删除</span> ', $line = 332), $out += " ", 
                $line = 333), $out += " </td> </tr> ", $line = 336;
            }), $out += " ", $line = 337), $out += " ", $line = 338), $out += " </tbody> </table> </div> ", 
            $line = 343, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 347, isFinance || ($out += 'readonly="readonly"', $line = 347), $out += ' type="text" style="width:30%;" value="', 
            $line = 347, remarkArrangeList.busRemark.length > 0 && ($line = 347, $out += $escape(remarkArrangeList.busRemark[0].opCheckRemark), 
            $line = 347), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 350, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 350), $out += ' type="text" style="width:30%;" value="', $line = 350, remarkArrangeList.busRemark.length > 0 && ($line = 350, 
            $out += $escape(remarkArrangeList.busRemark[0].financeCheckRemark), $line = 350), 
            $out += '" /> </div> </div> ', $line = 353), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{if editStatus != 2}}\r\n    <div class="ui-sortable-handle widget-container-col">\r\n        <h5 class="title-size">\r\n            <i class="ace-icon fa fa-medkit"></i> 车费\r\n            <a href="javascript:void(0)" class="T-buspay-add">\r\n                <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                    <i class="ace-icon fa fa-plus"></i>\r\n                    新增\r\n                </button>\r\n            </a>\r\n        </h5>\r\n    </div>\r\n{{/if}}\r\n<div class="overflow-x min-w-1050">\r\n    <table class="table overflow-table  table-striped table-bordered table-hover w-1500">\r\n        <thead>\r\n        <tr class="bg-blur">\r\n            <th rowspan="2"><span class="necessary">*</span>开始时间</th>\r\n            <th rowspan="2"><span class="necessary">*</span>结束时间</th>\r\n            <th rowspan="2"><span class="necessary">*</span>任务</th>\r\n            <th rowspan="2"><span class="necessary">*</span>所属车队</th>\r\n            <th rowspan="2">车牌号</th>\r\n            <th rowspan="2">座位数</th>\r\n            <th rowspan="2"><span class="necessary">*</span>车费</th>\r\n            <th rowspan="2">优惠</th>\r\n            <th rowspan="2">应付</th>\r\n            <th rowspan="2">已付</th>\r\n            <th colspan="5">导游实销</th>\r\n            <th rowspan="2">操作</th>\r\n        </tr>\r\n        <tr class="bg-blur">\r\n            <th>导游</th>\r\n            <th>金额</th>\r\n            <th>付款方式</th>\r\n            <th>单据</th>\r\n            <th>导游报账备注</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody class="T-count-bus">\r\n        {{if busCompanyArranges != null}}\r\n            {{if busCompanyArranges.listMap.length}}\r\n                {{each busCompanyArranges.listMap as arrange index}}\r\n                    <tr busArrangeId="{{arrange.id}}" badStatus = "{{arrange.badStatus}}"\r\n                    isConfirmAccount="{{arrange.isConfirmAccount}}" arrangeType="busArrange">\r\n                        <td>\r\n                            <div class="div-h-30"></div>\r\n                            {{arrange.startTime | dateFormat: \'yyyy-MM-dd\'}}\r\n                        </td><!-- 开始时间 -->\r\n\r\n                        <td>\r\n                            <div class="div-h-30"></div>\r\n                            {{arrange.endTime | dateFormat: \'yyyy-MM-dd\'}}\r\n                        </td><!-- 结束时间 -->\r\n\r\n                        <td>\r\n                            <div class="div-h-30"></div>\r\n                            {{ if arrange.taskType == 0}}\r\n                                    全程\r\n                                {{else if arrange.taskType == 1}}\r\n                                    接机\r\n                                {{else if arrange.taskType == 2}}\r\n                                    送机\r\n                                {{else if arrange.taskType == 3}}\r\n                                    前段\r\n                                {{else if arrange.taskType == 4}}\r\n                                    中段\r\n                                {{else if arrange.taskType == 5}}\r\n                                    后段\r\n                            {{/if}}\r\n                        </td><!-- 任务 -->\r\n\r\n                        <td>\r\n                            <div class="div-h-30"></div>\r\n                            <span class="companyName">{{arrange.companyName}}</span>\r\n                        </td><!-- 车队 -->\r\n\r\n                        <td>\r\n                            <div class="div-h-30"></div>\r\n                            {{arrange.licenseNumber}}\r\n                        </td><!-- 车牌号 -->\r\n\r\n                        <td>\r\n                            <div class="div-h-30"></div>\r\n                            <span calss="F-float F-count">{{arrange.seatCount}}</span>\r\n                        </td>\r\n\r\n                        <td>\r\n                            <div class="div-h-30"></div>\r\n                            {{if arrange.badStatus == 1}}\r\n                                <span class="F-float F-money realPrice">{{arrange.realPrice}}</span>\r\n                                <input type="hidden" name="price" value="{{arrange.realPrice}}" />\r\n                            {{else}}\r\n                                {{if editStatus == 2}}\r\n                                    <span class="F-float F-money realPrice">{{arrange.realPrice}}</span>\r\n                                    <input type="hidden" name="price" value="{{arrange.realPrice}}" />\r\n                                {{else}}\r\n                                    <input type="text" name="price" value="{{arrange.realPrice}}" class="w-80 F-float F-money" \r\n                                    {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                                {{/if}}\r\n                            {{/if}}\r\n                            \r\n                        </td><!-- 车费 -->\r\n\r\n                        <td>\r\n                            <div class="div-h-30"></div>\r\n                            {{if arrange.badStatus == 1}}\r\n                                <span class="F-float F-money">{{arrange.realReduceMoney}}</span>\r\n                            {{else}}\r\n                                {{if editStatus == 2}}\r\n                                    <span class="F-float F-money">{{arrange.realReduceMoney}}</span>\r\n                                    <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" />\r\n                                {{else}}\r\n                                    <input type="text" class="w-80 F-float F-money" name="realReduceMoney" value="{{arrange.realReduceMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                                {{/if}}\r\n                                \r\n                            {{/if}}\r\n                        </td><!-- 优惠 -->\r\n\r\n                        <td>\r\n                            <div class="div-h-30"></div>\r\n                            {{if arrange.badStatus == 1}}\r\n                                <span class="BusneedPayMoney F-float F-money">\r\n                                    {{arrange.realNeedPayMoney}}\r\n                                </span>\r\n                            {{else}}\r\n                                {{if arrange.isConfirmAccount == 1}}\r\n                                    <span class="BusneedPayMoney F-float F-money">{{arrange.realNeedPayMoney}}</span>\r\n                                {{else}}\r\n                                    <span class="BusneedPayMoney F-float F-money"></span>\r\n                                {{/if}}\r\n                            {{/if}}\r\n                            <input type="hidden" name="needPayMoney" value="{{arrange.realNeedPayMoney}}"/>\r\n                        </td><!-- 应付 -->\r\n\r\n                        <td>\r\n                            <div class="div-h-30"></div>\r\n                            <span class="F-float F-money">{{arrange.payedMoney}}</span>\r\n                        </td><!-- 已付 -->\r\n                        \r\n                        <td name="guideName">\r\n                            <div class="div-h-30">\r\n                                {{if editStatus != 2 && guideCount > 1 && arrange.isConfirmAccount != 1 }}\r\n                                    <button class="btn btn-success btn-sm btn-white T-addGuide pull-right"> \r\n                                        <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                    </button>\r\n                                    <!-- <a href="#" class="T-addGuide pull-right">增加</a> --><!-- 增加导游 -->\r\n                                {{/if}}\r\n                            </div>\r\n                            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                                {{each arrange.guideDetails as rs index}}\r\n                                    <div class="div-h-30 mar-t-5" index="{{index+1}}" guideId = "{{rs.id}}">\r\n                                        {{if editStatus == 2}}\r\n                                            <span class="guideName">{{rs.guideName}}</span>\r\n                                        {{else}}\r\n                                            {{if rs.guideName == \'\' || rs.guideName == null}}\r\n                                                {{if guideCount > 1}}\r\n                                                    <input name="guideArrangeId" type="hidden" />\r\n                                                    <input name="guideName"  type="text" class="w-80" \r\n                                                    {{if arrange.isConfirmAccount==1 }}disabled="disabled" {{/if}}/>\r\n                                                {{else}}\r\n                                                    <span>{{guideArrange.listMap[0].guideName}}</span>\r\n                                                    <input name="guideArrangeId" type="hidden" value="{{guideArrange.listMap[0].id}}"/>\r\n                                                {{/if}}\r\n                                            {{else}}\r\n                                                <span class="guideName">{{rs.guideName}}</span>\r\n                                                <input name="guideId" value="{{rs.id}}" type="hidden" />\r\n                                                <input name="guideName" value="{{rs.guideName}}" type="hidden" />\r\n                                                <input name="guideArrangeId" value="{{rs.guideArrangeId}}" type="hidden" />\r\n                                            {{/if}}\r\n                                            {{if guideCount > 1 && arrange.isConfirmAccount != 1 }}\r\n                                                <button class="btn btn-danger btn-sm btn-white T-delGuide pull-right"> \r\n                                                    <i class="ace-icon fa fa-minus bigger-110 icon-only"></i>\r\n                                                </button>\r\n                                            {{/if}}\r\n                                            <!-- 删除导游 -->\r\n                                        {{/if}}\r\n                                    </div>\r\n                                {{/each}}\r\n                                {{else}}\r\n                                    <div class="div-h-30 mar-t-5" index="1">\r\n                                        {{if editStatus == 2}}\r\n                                            -\r\n                                        {{else}}\r\n                                            {{if guideCount > 1}}\r\n                                                {{if arrange.isConfirmAccount !=1}}\r\n                                                    <button class="btn btn-danger btn-sm btn-white T-delGuide pull-right"> \r\n                                                        <i class="ace-icon fa fa-minus bigger-110 icon-only"></i>\r\n                                                    </button>\r\n                                                {{/if}}\r\n                                                <input name="guideArrangeId" type="hidden" />\r\n                                                <input name="guideName"  type="text" class="w-80" \r\n                                                {{if arrange.isConfirmAccount==1 }}disabled="disabled" {{/if}}/>\r\n                                            {{else}}\r\n                                                <span>{{guideArrange.listMap[0].guideName}}</span>\r\n                                                <input name="guideArrangeId" type="hidden" value="{{guideArrange.listMap[0].id}}"/>\r\n                                            {{/if}}\r\n                                            <!-- <a href="#" class="T-delGuide pull-right">删除</a> -->\r\n                                            <!-- 删除导游 -->\r\n                                        {{/if}}\r\n                                    </div>\r\n                            {{/if}}\r\n                            \r\n                        </td><!-- 导游 -->\r\n                        \r\n                        \r\n                        \r\n                        <td name="guidePayedMoney">\r\n                            <div class="div-h-30"></div>\r\n                            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                                {{each arrange.guideDetails as rs index}}\r\n                                    <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                                        {{if editStatus == 2}}\r\n                                            <span class="F-float F-money">{{rs.guidePayedMoney}}</span>\r\n                                            <input type="hidden" name="guidePayedMoney" value="{{rs.guidePayedMoney}}"/>\r\n                                        {{else}}\r\n                                            <input type="text" name="guidePayedMoney" value="{{rs.guidePayedMoney}}" \r\n                                            class="F-float F-money w-80" \r\n                                            {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                                        {{/if}}\r\n                                    </div>\r\n                                {{/each}}\r\n                            {{else}}\r\n                                \r\n                                <div class="div-h-30 mar-t-5" index="1">\r\n                                    {{if editStatus == 2}}\r\n                                       0\r\n                                    {{else}}\r\n                                        <input name="guidePayedMoney" type="text" class="w-80" {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                                    {{/if}}\r\n                                </div>\r\n                            {{/if}}\r\n                        </td><!-- 金额 -->\r\n\r\n                        <td name="payType">\r\n                            <div class="div-h-30"></div>\r\n                            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                                {{each arrange.guideDetails as rs index}}\r\n                                    <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                                        {{if editStatus == 2}}\r\n                                            {{if rs.realPayType == 0}}\r\n                                                现金\r\n                                            {{else if rs.realPayType == 1}}\r\n                                                刷卡\r\n                                            {{else if rs.realPayType == 2}}\r\n                                                签单\r\n                                            {{/if}}\r\n                                        {{else}}\r\n                                            <select name="payType" {{if arrange.isConfirmAccount == 1}}disabled="disabled"{{/if}}>\r\n                                                <option value="0" {{if rs.realPayType == 0}}{{/if}}>现金</option>\r\n                                                <option value="1" {{if rs.realPayType == 1}}selected=true{{/if}}>刷卡</option>\r\n                                                <option value="2" {{if rs.realPayType == 2}}selected=true{{/if}}>签单</option>\r\n                                            </select>\r\n                                        {{/if}}\r\n                                    </div>\r\n                                {{/each}}\r\n                            {{else}}\r\n                                <div class="div-h-30 mar-t-5" index="1" {{if arrange.isConfirmAccount == 1}}disabled="disabled"{{/if}}>\r\n                                    {{if editStatus == 2}}\r\n                                        -\r\n                                    {{else}}\r\n                                        <select name="payType">\r\n                                            <option value="0" >现金</option>\r\n                                            <option value="1" >刷卡</option>\r\n                                            <option value="2" >签单</option>\r\n                                        </select>\r\n                                    {{/if}}\r\n                                </div>\r\n                            {{/if}}\r\n                        </td><!-- 付款方式 -->\r\n                        \r\n                        <td name="billImage">\r\n                            <div class="div-h-30"></div>\r\n                            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                                {{each arrange.guideDetails as rs index}}\r\n                                    <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                                       {{if rs.billImage != null && rs.billImage != ""}}\r\n                                        <a href="javascript:void(0);" url="{{rs.billImage}}" class="btn-view">查看</a>\r\n                                    {{else}}\r\n                                        <span style="color:#bbb;">查看</span>\r\n                                    {{/if}}\r\n                                    </div>\r\n                                {{/each}}\r\n                            {{else}}\r\n\r\n                                <div class="div-h-30 mar-t-5" index="1">\r\n                                    {{if editStatus == 2}}\r\n                                        -\r\n                                    {{else}}\r\n                                        <span style="color:#bbb;">查看</span>\r\n                                    {{/if}}\r\n                                </div>\r\n                                \r\n                            {{/if}}\r\n                        </td><!-- 单据 -->\r\n                        \r\n                        <td name="billRemark">\r\n                            <div class="div-h-30"></div>\r\n                            {{if !!arrange.guideDetails && arrange.guideDetails.length}}\r\n                                {{each arrange.guideDetails as rs index}}\r\n                                    <div class="div-h-30 mar-t-5" index="{{index+1}}">\r\n                                        {{if editStatus == 2}}\r\n                                            <span>{{rs.billRemark}}</span>\r\n                                        {{else}}\r\n                                            <input name="billRemark" value="{{rs.billRemark}}"\r\n                                            {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                                        {{/if}}\r\n                                    </div>\r\n                                {{/each}}\r\n                            {{else}}\r\n                                <div class="div-h-30 mar-t-5" index="1">\r\n                                    {{if editStatus == 2}}\r\n                                        -\r\n                                    {{else}}\r\n                                        <input name="billRemark" {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>\r\n                                    {{/if}}\r\n                                </div>\r\n                            {{/if}}\r\n                        </td><!-- 备注 -->\r\n\r\n                        <td>\r\n                            {{if arrange.isConfirmAccount == 0}}\r\n                                未对账\r\n                            {{else}}\r\n                                已对账\r\n                            {{/if}}\r\n                            {{if editStatus != 2}}\r\n                                &nbsp;&nbsp;\r\n                                {{if arrange.payedMoney == 0 &&　arrange.isConfirmAccount == 0}}\r\n                                    <a href="javascript:void(0)" class="T-busArrDel">删除</a>\r\n                                {{else}}\r\n                                    <span style="color:#bbb;">删除</span>\r\n                                {{/if}}\r\n                            {{/if}}\r\n                        </td>\r\n                    </tr>\r\n                {{/each}}\r\n            {{/if}}\r\n        {{/if}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if !isFinance }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.busRemark.length>0}}{{remarkArrangeList.busRemark[0].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.busRemark.length>0}}{{remarkArrangeList.busRemark[0].financeCheckRemark}}{{/if}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});