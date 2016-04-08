/*TMODJS:{"debug":true,"version":2,"md5":"2c184b75d97d42e0d7438bf8f9d75ecd"}*/
define(function(require) {
    return require("/js/template/template")("arrange/arrangeCenter/groupView/arrangeSelf", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, basicInfo = $data.basicInfo, $escape = $utils.$escape, $each = $utils.$each, selfPayList = $data.selfPayList, $string = ($data.selfPay, 
            $data.$index, $utils.$string), $out = "";
            return $out += '<div class=" ui-sortable-handle"> <h5 class="title-size"> <i class="ace-icon fa fa-credit-card"></i> 自费安排 <button class="btn btn-sm btn-success mar-l-15 T-addResource T-addSelfPay"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </h5> ', 
            $line = 8, basicInfo.oldSelfPayRequire && ($out += ' <p class="requirementsPlan">原自费计划要求：', 
            $line = 9, $out += $escape(basicInfo.oldSelfPayRequire), $out += "</p>", $line = 9), 
            $out += " ", $line = 9, basicInfo.nowSelfPayRequire && ($out += ' <p class="requirementsPlan">现自费计划要求：', 
            $line = 10, $out += $escape(basicInfo.nowSelfPayRequire), $out += "</p>", $line = 10), 
            $out += ' <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover table-tripPlan-container w-1400"> <colgroup> <col style="width:110px"> <col style="width:150px;"> <col style="width:150px;"> <col style="width:160px;"> <col style="width:80px"> <col style="width:80px"> <col style="width:80px"> <col style="width:80px"> <col style="width:80px"> <col style="width:80px"> <col style="width:150px"> <col> <col style="width:60px;"> </colgroup> <thead> <tr> <th style="width:100px;"><span class="necessary">*</span>日期</th> <th><span class="necessary">*</span>自费商家</th> <th>自费项目</th> <th>联系方式</th> <th style="width: 77px;">单价</th> <th style="width: 77px;">底价</th> <th style="width: 77px;">数量</th> <th style="width: 77px;">优惠</th> <th style="width: 77px;">应付</th> <th style="width: 77px;">预付款</th> <th style="width: 77px;">计划导付</th> <th>备注</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 46, $each(selfPayList, function(selfPay) {
                $out += " ", $line = 46, ("[]" != selfPay || null != selfPay) && ($out += ' <tr data-entity-arrangeid="', 
                $line = 47, 1 == basicInfo.isArranged && ($line = 47, $out += $escape(selfPay.id), 
                $line = 47), $out += '"> <td class="T-whichDaysContainer" value="', $line = 48, 
                $out += $escape(selfPay.whichDay), $out += '"></td> <td> <div class="col-sm-12"> <input type="hidden" name="id" value="', 
                $line = 51, 1 == basicInfo.isArranged && ($line = 51, $out += $escape(selfPay.id), 
                $line = 51), $out += '" /> <input type="text" name="name" class="col-sm-12 T-chooseSelfPay" value="', 
                $line = 52, null != selfPay.selfPay && ($line = 52, $out += $escape(selfPay.selfPay.name), 
                $line = 52), $out += '" /> <input type="hidden" name="selfPayId" value="', $line = 53, 
                null != selfPay.selfPay && ($line = 53, $out += $escape(selfPay.selfPay.id), $line = 53), 
                $out += '" /> <span class="addResourceBtn T-addSelfPayResource R-right" data-right="1090002" title="添加自费商家"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </td> <td> <input type="hidden" name="selfPayItemId" value="', 
                $line = 60, null != selfPay.selfPayItem && ($line = 60, $out += $escape(selfPay.selfPayItem.id), 
                $line = 60), $out += '" /> <input type="text" name="selfitem" class="col-sm-12 T-chooseSelfitem" value="', 
                $line = 61, null != selfPay.selfPayItem && ($line = 61, $out += $escape(selfPay.selfPayItem.name), 
                $line = 61), $out += '" /> </td> <td> <input type="text" name="managerName" readonly="readonly" class="col-sm-12" value="', 
                $line = 64, null != selfPay.selfPay && ($line = 64, $out += $escape(selfPay.selfPay.managerName), 
                $out += " ", $line = 64, $out += $escape(selfPay.selfPay.mobileNumber), $line = 64), 
                $out += '" /> </td> <td> <input type="text" name="price" class="col-sm-12 price F-float F-money" maxlength="8" value="', 
                $line = 67, selfPay.marketPrice ? ($line = 67, $out += $escape(selfPay.marketPrice), 
                $line = 67) : ($line = 67, $out += $escape(selfPay.quotePrice), $line = 67), $out += '" style="width: 60px;" /> </td> <td> <input type="text" name="lowestPrice" class="col-sm-12 price F-float F-money" maxlength="8" value="', 
                $line = 70, $out += $escape(selfPay.price), $out += '" style="width: 60px;" /> </td> <td> <input type="text" name="memberCount" class="col-sm-12 F-float F-count" value="', 
                $line = 73, $out += $escape(selfPay.memberCount), $out += '" maxlength="8" style="width: 60px;" /> </td> <td> <input type="text" name="reduceMoney" class="col-sm-12 price F-float F-money" value="', 
                $line = 76, $out += $escape(selfPay.reduceMoney), $out += '" maxlength="9" style="width: 60px;" /> </td> <td> <input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12 F-float F-money" value="', 
                $line = 79, $out += $escape(selfPay.needPayMoney), $out += '" style="width: 60px;" /> </td> <td> <input type="text" name="prePayMoney" class="col-sm-12 price F-float F-money" value="', 
                $line = 82, $out += $escape(selfPay.prePayMoney), $out += '" style="width: 60px;" maxlength="9" /> </td> <td class="inline-flex">', 
                $line = 84, $out += $string($helpers.getPlanPayTypeOption(selfPay.payType)), $out += ' <input type="text" name="guidePayMoney" class="F-float F-money w-80" value="', 
                $line = 85, 2 == selfPay.payType ? ($line = 85, $out += $escape(selfPay.signMoney), 
                $line = 85) : ($line = 85, $out += $escape(selfPay.guidePayMoney), $line = 85), 
                $out += '" maxlength="9" /> </td> <td> <input type="text" name="remark" class="col-sm-12" value="', 
                $line = 88, $out += $escape(selfPay.remark), $out += '" maxlength="500" /> </td> <td> <a class="cursor T-btn-deleteTripPlanList" data-entity-ispayed="', 
                $line = 91, $out += $escape(selfPay.financialMoney), $out += '" data-entity-name="selfpay" title="删除"> 删除 </a> </td> </tr> ', 
                $line = 96), $out += " ", $line = 96;
            }), $out += " </tbody> </table> </div> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class=" ui-sortable-handle">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa-credit-card"></i> 自费安排\r\n        <button class="btn btn-sm btn-success mar-l-15 T-addResource T-addSelfPay">\r\n            <i class="ace-icon fa fa-plus"></i>\r\n            新增\r\n        </button>\r\n    </h5> {{if basicInfo.oldSelfPayRequire}}\r\n    <p class="requirementsPlan">原自费计划要求：{{basicInfo.oldSelfPayRequire}}</p>{{/if}} {{if basicInfo.nowSelfPayRequire}}\r\n    <p class="requirementsPlan">现自费计划要求：{{basicInfo.nowSelfPayRequire}}</p>{{/if}}\r\n    <div class="overflow-x min-w-1050">\r\n        <table class="table table-striped table-bordered table-hover table-tripPlan-container w-1400">\r\n            <colgroup>\r\n                <col style="width:110px">\r\n                <col style="width:150px;">\r\n                <col style="width:150px;">\r\n                <col style="width:160px;">\r\n                <col style="width:80px">\r\n                <col style="width:80px">\r\n                <col style="width:80px">\r\n                <col style="width:80px">\r\n                <col style="width:80px">\r\n                <col style="width:80px">\r\n                <col style="width:150px">\r\n                <col>\r\n                <col style="width:60px;">\r\n            </colgroup>\r\n            <thead>\r\n                <tr>\r\n                    <th style="width:100px;"><span class="necessary">*</span>日期</th>\r\n                    <th><span class="necessary">*</span>自费商家</th>\r\n                    <th>自费项目</th>\r\n                    <th>联系方式</th>\r\n                    <th style="width: 77px;">单价</th>\r\n                    <th style="width: 77px;">底价</th>\r\n                    <th style="width: 77px;">数量</th>\r\n                    <th style="width: 77px;">优惠</th>\r\n                    <th style="width: 77px;">应付</th>\r\n                    <th style="width: 77px;">预付款</th>\r\n                    <th style="width: 77px;">计划导付</th>\r\n                    <th>备注</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                {{each selfPayList as selfPay}} {{if selfPay != "[]" || selfPay != null}}\r\n                <tr data-entity-arrangeid="{{if basicInfo.isArranged == 1}}{{selfPay.id}}{{/if}}">\r\n                    <td class="T-whichDaysContainer" value="{{selfPay.whichDay}}"></td>\r\n                    <td>\r\n                        <div class="col-sm-12">\r\n                            <input type="hidden" name="id" value="{{if basicInfo.isArranged == 1}}{{selfPay.id}}{{/if}}" />\r\n                            <input type="text" name="name" class="col-sm-12 T-chooseSelfPay" value="{{if selfPay.selfPay != null}}{{selfPay.selfPay.name}}{{/if}}" />\r\n                            <input type="hidden" name="selfPayId" value="{{if selfPay.selfPay != null}}{{selfPay.selfPay.id}}{{/if}}" />\r\n                            <span class="addResourceBtn T-addSelfPayResource R-right" data-right="1090002" title="添加自费商家">\r\n                                    <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                </span>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <input type="hidden" name="selfPayItemId" value="{{if selfPay.selfPayItem !=null}}{{selfPay.selfPayItem.id}}{{/if}}" />\r\n                        <input type="text" name="selfitem" class="col-sm-12 T-chooseSelfitem" value="{{if selfPay.selfPayItem !=null}}{{selfPay.selfPayItem.name}}{{/if}}" />\r\n                    </td>\r\n                    <td>\r\n                        <input type="text" name="managerName" readonly="readonly" class="col-sm-12" value="{{if selfPay.selfPay != null}}{{selfPay.selfPay.managerName}} {{selfPay.selfPay.mobileNumber}}{{/if}}" />\r\n                    </td>\r\n                    <td>\r\n                        <input type="text" name="price" class="col-sm-12 price F-float F-money" maxlength="8" value="{{if !!selfPay.marketPrice}}{{selfPay.marketPrice}}{{else}}{{selfPay.quotePrice}}{{/if}}" style="width: 60px;" />\r\n                    </td>\r\n                    <td>\r\n                        <input type="text" name="lowestPrice" class="col-sm-12 price F-float F-money" maxlength="8" value="{{selfPay.price}}" style="width: 60px;" />\r\n                    </td>\r\n                    <td>\r\n                        <input type="text" name="memberCount" class="col-sm-12 F-float F-count" value="{{selfPay.memberCount}}" maxlength="8" style="width: 60px;" />\r\n                    </td>\r\n                    <td>\r\n                        <input type="text" name="reduceMoney" class="col-sm-12 price F-float F-money" value="{{selfPay.reduceMoney}}" maxlength="9" style="width: 60px;" />\r\n                    </td>\r\n                    <td>\r\n                        <input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12 F-float F-money" value="{{selfPay.needPayMoney}}" style="width: 60px;" />\r\n                    </td>\r\n                    <td>\r\n                        <input type="text" name="prePayMoney" class="col-sm-12 price F-float F-money" value="{{selfPay.prePayMoney}}" style="width: 60px;" maxlength="9" />\r\n                    </td>\r\n                    <td class="inline-flex">{{#selfPay.payType | getPlanPayTypeOption}}\r\n                        <input type="text" name="guidePayMoney" class="F-float F-money w-80" value="{{if selfPay.payType == 2}}{{selfPay.signMoney}}{{else}}{{selfPay.guidePayMoney}}{{/if}}" maxlength="9" />\r\n                    </td>\r\n                    <td>\r\n                        <input type="text" name="remark" class="col-sm-12" value="{{selfPay.remark}}" maxlength="500" />\r\n                    </td>\r\n                    <td>\r\n                        <a class="cursor T-btn-deleteTripPlanList" data-entity-ispayed="{{selfPay.financialMoney}}" data-entity-name="selfpay" title="删除">\r\n                                删除\r\n                            </a>\r\n                    </td>\r\n                </tr>\r\n                {{/if}} {{/each}}\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});