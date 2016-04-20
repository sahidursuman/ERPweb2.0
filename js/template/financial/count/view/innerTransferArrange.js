/*TMODJS:{"debug":true,"version":29,"md5":"b4bfef9a00bf96436a8b639df748ff67"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/innerTransferArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), transfer = $data.transfer, $each = $utils.$each, $escape = ($data.index, 
            $utils.$escape), touristGroup = $data.touristGroup, tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>序号</th> <th>客户</th> <th>中转单号</th> <th>小组联系人</th> <th>联系电话</th> <th>人数</th> <th>接团</th> <th>送团</th> <th>明细</th> </tr> </thead> <tbody> ', 
            $line = 17, null != transfer && ($out += " ", $line = 18, $each(transfer.transferList, function(transfer, index) {
                $out += " <tr> <td>", $line = 20, $out += $escape(index + 1), $out += "</td> <td>", 
                $line = 21, $out += $escape(transfer.partnerAgencyName), $out += "</td> <td>", $line = 22, 
                $out += $escape(transfer.orderNumber), $out += "</td> <td>", $line = 23, $out += $escape(transfer.contactNme), 
                $out += "</td> <td>", $line = 24, $out += $escape(transfer.mobileNumber), $out += "</td> <td>", 
                $line = 25, $out += $escape(transfer.adultCount), $out += "大", $line = 25, $out += $escape(touristGroup.childCount), 
                $out += "小</td> <td>", $line = 26, $out += $escape(transfer.arriveService), $out += "</td> <td>", 
                $line = 27, $out += $escape(transfer.leaveService), $out += '</td> <td><a href="javascript:void(0);" data-entity-id="', 
                $line = 28, $out += $escape(transfer.id), $out += '" class="T-viewTripTransit">查看</a></td> </tr> ', 
                $line = 30;
            }), $out += " ", $line = 31), $out += " </tbody> </table> </div> ", $line = 35, 
            tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div arrangeType="insure"> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 39, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 39), $out += ' type="text" style="width:30%;" value="', $line = 39, remarkArrangeList.transferRemark.length > 0 && ($line = 39, 
            $out += $escape(remarkArrangeList.transferRemark[0].opCheckRemark), $line = 39), 
            $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 41, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 41), $out += ' type="text" style="width:30%;" value="', $line = 41, remarkArrangeList.transferRemark.length > 0 && ($line = 41, 
            $out += $escape(remarkArrangeList.transferRemark[0].financeCheckRemark), $line = 41), 
            $out += '" /> </div> </div> ', $line = 44), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="overflow-x min-w-1050">\r\n    <table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr class="bg-blur">\r\n            <th>序号</th>\r\n            <th>客户</th>\r\n            <th>中转单号</th>\r\n            <th>小组联系人</th>\r\n            <th>联系电话</th>\r\n            <th>人数</th>\r\n            <th>接团</th>\r\n            <th>送团</th>\r\n            <th>明细</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n        {{if transfer != null}}\r\n            {{each transfer.transferList as transfer index}}\r\n             <tr>\r\n                <td>{{index+1}}</td>\r\n                <td>{{transfer.partnerAgencyName}}</td>\r\n                <td>{{transfer.orderNumber}}</td>\r\n                <td>{{transfer.contactNme}}</td>\r\n                <td>{{transfer.mobileNumber}}</td>\r\n                <td>{{transfer.adultCount}}大{{touristGroup.childCount}}小</td>\r\n                <td>{{transfer.arriveService}}</td>\r\n                <td>{{transfer.leaveService}}</td>\r\n                <td><a href="javascript:void(0);" data-entity-id="{{transfer.id}}" class="T-viewTripTransit">查看</a></td>\r\n             </tr>\r\n            {{/each}}\r\n        {{/if}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n    <div arrangeType="insure">\r\n        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.transferRemark.length>0}}{{remarkArrangeList.transferRemark[0].opCheckRemark}}{{/if}}" />\r\n        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.transferRemark.length>0}}{{remarkArrangeList.transferRemark[0].financeCheckRemark}}{{/if}}" />\r\n    </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});