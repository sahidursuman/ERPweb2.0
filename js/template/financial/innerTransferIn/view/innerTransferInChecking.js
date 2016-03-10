/*TMODJS:{"debug":true,"version":621,"md5":"006e21467c8cd86d06fb6824bdd73f48"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferIn/view/innerTransferInChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, innerTransferIncomeDetailsList = $data.innerTransferIncomeDetailsList, recordSize = ($data.checking, 
            $data.index, $data.tf, $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="row innerTransferChecking globalAdd"> <div> <div class="T-search"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-10"> <label class="control-label pull-left" style="margin-left: 0px;">部门：</label> <span>', 
            $line = 7, $out += $escape(searchParam.businessGroupName), $out += '</span> <input type="hidden" value="', 
            $line = 8, $out += $escape(searchParam.businessGroupId), $out += '" name="businessGroupId"> <input type="hidden" value="', 
            $line = 9, $out += $escape(searchParam.businessGroupName), $out += '" name="businessGroupName"> </div> <div class="form-group mar-r-10"> <label class="control-label">账期：</label> <input type="text" style="width:100px;" class="date-picker" name="startDate" value="', 
            $line = 13, $out += $escape(searchParam.startAccountTime), $out += '"/> <span>&nbsp;至&nbsp;</span> <input type="text" style="width:100px;" class="date-picker" name="endDate" value="', 
            $line = 15, $out += $escape(searchParam.endAccountTime), $out += '"/> </div> <div class="form-group mar-r-10"> <label class="control-label">线路名称：</label> <input type="text" name="lineProductName" value="', 
            $line = 19, $out += $escape(searchParam.lineProductName), $out += '"/> <input type="hidden" name="lineProductId" value="', 
            $line = 20, $out += $escape(searchParam.lineProductId), $out += '" /> </div> <div class="form-group mar-r-10"> <label class="control-label">接收人： <input type="text" name="receiveUserName" value="', 
            $line = 24, $out += $escape(searchParam.receiveUserName), $out += '" /> <input type="hidden" name="receiveUserId" value="', 
            $line = 25, $out += $escape(searchParam.receiveUserId), $out += '"/> </div> <div class="form-group mar-r-10"> <label class="control-label">收客单号：</label> <input type="text" name="orderNumber" value="', 
            $line = 29, $out += $escape(searchParam.orderNumber), $out += '" /> </div> <div class="form-group mar-r-10"> <button class="btn-sm search-btn T-checking-search" > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="form-group mar-r-10"> <button class="btn-sm search-btn T-btn-export ">导出报表</button> </div> </form> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group T-count"> <label class=" control-label pull-left" style="margin-left: 15px">人数合计：<span class="sumTransCount F-float F-count"></span><label> <label class=" control-label " style="margin-left:30px;">内转转入金额合计：<span class="sumTransNeedPayMoney F-float F-money"></span></label> <label class=" control-label " style="margin-left:30px;">已收金额合计：<span class="sumPayedMoney F-float F-money"></span></label> <label class=" control-label " style="margin-left:30px;">返款金额合计：<span class="T-sumBackMoney F-float F-money"></span></label> <label class=" control-label " style="margin-left:30px;">结算金额合计：<span class="T-sumSettlementMoney F-float F-money"></span></label> <label class=" control-label " style="margin-left:30px;">未收金额合计：<span class="T-sumUnReceivedMoney F-float F-money"></span></label> <label class=" control-label " style="margin-left:30px;">未收金额合计(已对账)：<span class="sumUnPayedMoney F-float F-money"></span></label> </div> </form> </div> <div class="clearfix"></div> <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover all hct_align_middle w-1500"> <thead> <tr class="T-tr-fixed bg-blur"> <th>收客单号</th> <th>线路产品</th> <th>出游日期(账期)</th> <th>联系人</th> <th>人数</th> <th>接收人</th> <th>接收时间</th> <th>内转转入</th> <th>明细</th> <th>已收金额</th> <th>返款金额</th> <th>结算金额</th> <th>未收金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th style="width:100px">对账</th> </tr> </thead> <tbody class="T-checkList" data-right="1360005"> ', 
            $line = 79, $each(innerTransferIncomeDetailsList, function(checking) {
                $out += ' <tr class="T-checkTr" data-entity-id="', $line = 80, $out += $escape(checking.id), 
                $out += '" data-entity-createTime="', $line = 80, $out += $escape(checking.createTime), 
                $out += '" data-confirm ="', $line = 80, $out += $escape(checking.isConfirmAccount), 
                $out += '" data-entity-UnIncomeMoney="', $line = 80, $out += $escape(checking.checkUnIncomeMoney), 
                $out += '" data-entity-backMoney="', $line = 80, $out += $escape(checking.backMoney), 
                $out += '" data-entity-remark="', $line = 80, $out += $escape(checking.checkRemark), 
                $out += '"> <td>', $line = 81, $out += $escape(checking.orderNumber), $out += "</td> <td>", 
                $line = 82, $out += $escape(checking.lineProductName), $out += '</td> <td name="startTime">', 
                $line = 83, $out += $escape($helpers.dateFormat(checking.accountTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 84, $out += $escape(checking.contactUserName), $out += '</td> <td><a href="#" class="T-seeGroup" data-list="', 
                $line = 85, $out += $escape(checking.tgMemberList), $out += '" title="查看小组"> <span class="F-float F-count">', 
                $line = 86, $out += $escape(checking.adultCount), $out += '</span>大 <span class="F-float F-count">', 
                $line = 87, $out += $escape(checking.childCount), $out += "</span>小 </a> </td> <td>", 
                $line = 90, $out += $escape(checking.receiveUserName), $out += "</td> <td>", $line = 91, 
                null != checking.receiveTime ? ($line = 91, $out += $escape($helpers.dateFormat(checking.receiveTime, "yyyy-MM-dd")), 
                $line = 91) : ($out += "-", $line = 91), $out += '</td> <td><span class="transInMoney F-float F-money">', 
                $line = 92, $out += $escape(checking.transInMoney), $out += "</span></td> <td>", 
                $line = 93, checking.transferFeeList.length > 0 ? ($out += " ", $line = 94, $each(checking.transferFeeList, function(tf) {
                    $out += " ", $line = 95, $out += $escape(tf.discribe), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                    $line = 96, $out += $escape(tf.touristGroupId), $out += '" data-status="3">', $line = 96, 
                    $out += $escape(tf.price), $out += '</span> x <span class="F-float F-count">', $line = 97, 
                    $out += $escape(tf.count), $out += '</span> = <span class="F-float F-money">', $line = 98, 
                    $out += $escape(tf.price * tf.count), $out += "</span><br> ", $line = 99;
                }), $out += " ", $line = 100) : ($out += "- ", $line = 101), $out += ' </td> <td><a href="javascript:void(0)" class="T-viewDetail"><span>社收：<span class="transGetedMoney F-float F-money">', 
                $line = 103, $out += $escape(checking.transGetedMoney), $out += '</span>，导游现收：<span class="F-float F-money">', 
                $line = 103, $out += $escape(checking.currentNeedPayMoney), $out += '</span></span></a></td> <td><input type="text" class="col-sm-12 T-refund money F-float F-money" value="', 
                $line = 104, $out += $escape(checking.backMoney), $out += '" name="settlementMoney" ', 
                $line = 104, checking.isConfirmAccount && ($out += ' disabled="disabled"', $line = 104), 
                $out += '></td> <td class="T-settlementMoney F-float F-money">', $line = 105, $out += $escape(checking.settlementMoney), 
                $out += '</td> <td><span class="T-unReceivedMoney F-float F-money">', $line = 106, 
                $out += $escape(checking.unIncomeMoney), $out += "</span></td> <td>", $line = 107, 
                1 == checking.isConfirmAccount ? ($line = 107, $out += $escape(checking.checkRemark), 
                $line = 107) : ($out += ' <textarea class="col-sm-12 hct-textarea" maxlength="1000" name="checkRemark">', 
                $line = 108, $out += $escape(checking.checkRemark), $out += "</textarea>", $line = 108), 
                $out += " </td> <td>", $line = 110, null == checking.checkTime || "" == checking.checkTime ? ($out += "-", 
                $line = 110) : ($line = 110, $out += $escape($helpers.dateFormat(checking.checkTime, "yyyy-MM-dd hh:mm:ss")), 
                $line = 110), $out += "</td> <td>", $line = 111, null == checking.checkUserName || "" == checking.checkUserName ? ($out += "-", 
                $line = 111) : ($line = 111, $out += $escape(checking.checkUserName), $line = 111), 
                $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" data-entity-checkStatus="', 
                $line = 114, $out += $escape(checking.isConfirmAccount), $out += '" class="ace T-checkbox" ', 
                $line = 115, 1 == checking.isConfirmAccount && ($out += 'checked="checked"', $line = 115), 
                $out += '/> <span class="lbl">对账</span> </label> <label>|</label> <label> <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a> </label> </td> </tr> ', 
                $line = 124;
            }), $out += ' </tbody> </table> </div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 130, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> <label class="pos-rel pull-right" style="line-height:2.2em"> <input type="checkbox" class="ace T-selectAll"/> <span class="lbl">全选</span> </label> </div> </div> <div class="clearfix"></div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary btn-createTripPlan T-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-checking"> <i class="ace-icon fa fa-check-circle"></i> 确认对账 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row innerTransferChecking globalAdd">\r\n    <div>\r\n        <div class="T-search">\r\n            <form class="form-inline" role="form" onsubmit="return false">\r\n                <div class="form-group mar-r-10">\r\n                    <label  class="control-label pull-left" style="margin-left: 0px;">部门：</label>\r\n                    <span>{{searchParam.businessGroupName}}</span>\r\n                    <input type="hidden" value="{{searchParam.businessGroupId}}" name="businessGroupId">\r\n                    <input type="hidden" value="{{searchParam.businessGroupName}}" name="businessGroupName"> \r\n                </div>\r\n                <div class="form-group mar-r-10">\r\n                    <label class="control-label">账期：</label>\r\n                      <input type="text" style="width:100px;" class="date-picker" name="startDate" value="{{searchParam.startAccountTime}}"/>\r\n                      <span>&nbsp;至&nbsp;</span>\r\n                      <input type="text" style="width:100px;" class="date-picker" name="endDate" value="{{searchParam.endAccountTime}}"/>\r\n                </div>\r\n                <div class="form-group mar-r-10">\r\n                    <label class="control-label">线路名称：</label>\r\n                    <input type="text" name="lineProductName" value="{{searchParam.lineProductName}}"/>\r\n                    <input type="hidden" name="lineProductId" value="{{searchParam.lineProductId}}" />\r\n                </div>\r\n                <div class="form-group mar-r-10">\r\n                    <label class="control-label">接收人：\r\n                    <input type="text" name="receiveUserName" value="{{searchParam.receiveUserName}}" />\r\n                    <input type="hidden" name="receiveUserId" value="{{searchParam.receiveUserId}}"/>\r\n                </div>\r\n                <div class="form-group mar-r-10">\r\n                    <label class="control-label">收客单号：</label>\r\n                    <input type="text" name="orderNumber" value="{{searchParam.orderNumber}}" />\r\n                </div>\r\n                <div class="form-group mar-r-10">\r\n                    <button class="btn-sm search-btn T-checking-search" >\r\n                         <i class="ace-icon fa fa-search"></i>\r\n                             搜索\r\n                    </button>\r\n                </div>\r\n                <div class="form-group mar-r-10">\r\n                    <button class="btn-sm search-btn T-btn-export ">导出报表</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group T-count">\r\n                <label class=" control-label pull-left" style="margin-left: 15px">人数合计：<span class="sumTransCount F-float F-count"></span><label>\r\n                <label class=" control-label " style="margin-left:30px;">内转转入金额合计：<span class="sumTransNeedPayMoney F-float F-money"></span></label>\r\n                <label class=" control-label " style="margin-left:30px;">已收金额合计：<span class="sumPayedMoney F-float F-money"></span></label>\r\n                <label class=" control-label " style="margin-left:30px;">返款金额合计：<span class="T-sumBackMoney F-float F-money"></span></label>\r\n                <label class=" control-label " style="margin-left:30px;">结算金额合计：<span class="T-sumSettlementMoney F-float F-money"></span></label>\r\n                <label class=" control-label " style="margin-left:30px;">未收金额合计：<span class="T-sumUnReceivedMoney F-float F-money"></span></label>\r\n                <label class=" control-label " style="margin-left:30px;">未收金额合计(已对账)：<span class="sumUnPayedMoney F-float F-money"></span></label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n    <div class="overflow-x min-w-1050">\r\n        <table class="table table-striped table-bordered table-hover all hct_align_middle w-1500">\r\n            <thead>\r\n            <tr class="T-tr-fixed bg-blur">\r\n                 <th>收客单号</th>\r\n                 <th>线路产品</th>\r\n                 <th>出游日期(账期)</th>\r\n                 <th>联系人</th>\r\n                 <th>人数</th>\r\n                 <th>接收人</th>\r\n                 <th>接收时间</th>\r\n                 <th>内转转入</th>\r\n                 <th>明细</th>\r\n                 <th>已收金额</th>\r\n                 <th>返款金额</th>\r\n                 <th>结算金额</th>\r\n                 <th>未收金额</th>\r\n                 <th>备注</th>\r\n                 <th>对账时间</th>\r\n                 <th>对账人</th>\r\n                 <th style="width:100px">对账</th>  \r\n            </tr>\r\n            </thead>   \r\n            <tbody class="T-checkList" data-right="1360005">\r\n            {{each innerTransferIncomeDetailsList as checking index}}\r\n            <tr class="T-checkTr" data-entity-id="{{checking.id}}" data-entity-createTime="{{checking.createTime}}" data-confirm ="{{checking.isConfirmAccount}}" data-entity-UnIncomeMoney="{{checking.checkUnIncomeMoney}}" data-entity-backMoney="{{checking.backMoney}}" data-entity-remark="{{checking.checkRemark}}">\r\n                <td>{{checking.orderNumber}}</td>\r\n                <td>{{checking.lineProductName}}</td>\r\n                <td name="startTime">{{checking.accountTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{checking.contactUserName}}</td>\r\n                <td><a href="#" class="T-seeGroup" data-list="{{checking.tgMemberList}}" title="查看小组">\r\n                        <span class="F-float F-count">{{checking.adultCount}}</span>大\r\n                        <span class="F-float F-count">{{checking.childCount}}</span>小\r\n                    </a>\r\n                </td>\r\n                <td>{{checking.receiveUserName}}</td>\r\n                <td>{{if checking.receiveTime != null}}{{checking.receiveTime | dateFormat: \'yyyy-MM-dd\'}}{{else}}-{{/if}}</td>\r\n                <td><span class="transInMoney F-float F-money">{{checking.transInMoney}}</span></td>\r\n                <td>{{if checking.transferFeeList.length > 0}}\r\n                        {{each checking.transferFeeList as tf}}\r\n                            {{tf.discribe}}：\r\n                            <span class="F-float F-money T-touristGroupId" data-id="{{tf.touristGroupId}}" data-status="3">{{tf.price}}</span> x\r\n                            <span class="F-float F-count">{{tf.count}}</span> =\r\n                            <span class="F-float F-money">{{tf.price * tf.count}}</span><br>\r\n                        {{/each}}\r\n                    {{else}}-\r\n                    {{/if}}\r\n                </td>\r\n                <td><a href="javascript:void(0)" class="T-viewDetail"><span>社收：<span class="transGetedMoney F-float F-money">{{checking.transGetedMoney}}</span>，导游现收：<span class="F-float F-money">{{checking.currentNeedPayMoney}}</span></span></a></td>\r\n                <td><input type="text" class="col-sm-12 T-refund money F-float F-money" value="{{checking.backMoney}}" name="settlementMoney" {{if checking.isConfirmAccount}} disabled="disabled"{{/if}}></td>\r\n                <td class="T-settlementMoney F-float F-money">{{checking.settlementMoney}}</td>\r\n                <td><span class="T-unReceivedMoney F-float F-money">{{checking.unIncomeMoney}}</span></td>\r\n                <td>{{if checking.isConfirmAccount == 1}}{{checking.checkRemark}}{{else}}\r\n                    <textarea class="col-sm-12 hct-textarea" maxlength="1000" name="checkRemark">{{checking.checkRemark}}</textarea>{{/if}}\r\n                </td>\r\n                <td>{{if checking.checkTime == null || checking.checkTime == ""}}-{{else}}{{checking.checkTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if checking.checkUserName == null || checking.checkUserName == ""}}-{{else}}{{checking.checkUserName}}{{/if}}</td>\r\n                <td>\r\n                    <label class="pos-rel">\r\n                        <input type="checkbox" data-entity-checkStatus="{{checking.isConfirmAccount}}" class="ace T-checkbox" \r\n                        {{if checking.isConfirmAccount == 1}}checked="checked"{{/if}}/>\r\n                        <span class="lbl">对账</span>\r\n                    </label>\r\n                    <label>|</label>\r\n                        <label>\r\n                            <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a>\r\n                        </label>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n         </tbody>\r\n        </table>\r\n    </div>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n            <label class="pos-rel pull-right" style="line-height:2.2em">\r\n            <input type="checkbox" class="ace T-selectAll"/> \r\n            <span class="lbl">全选</span>\r\n        </label>\r\n        </div>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group" style="text-align: center;">\r\n                <button class="btn btn-xs btn-primary btn-createTripPlan T-close">\r\n                    <i class="ace-icon fa fa-times-circle"></i>\r\n                    关闭\r\n                </button>\r\n                <button class="btn btn-xs btn-primary T-checking">\r\n                    <i class="ace-icon fa fa-check-circle"></i>\r\n                     确认对账\r\n                </button>\r\n            </div>\r\n        </form>\r\n\r\n\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});