/*TMODJS:{"debug":true,"version":782,"md5":"54a31705dbef482a065d9a99b81e724b"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferIn/view/innerTransferInChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, businessGroupName = $data.businessGroupName, searchParam = $data.searchParam, $each = $utils.$each, innerTransferIncomeDetailsList = $data.innerTransferIncomeDetailsList, recordSize = ($data.checking, 
            $data.index, $data.tf, $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="row innerTransferChecking globalAdd"> <div> <div class="T-search"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-10"> <label class="control-label pull-left" style="margin-left: 0px;">部门：</label> <input type="text" name="businessGroupName" value="', 
            $line = 7, $out += $escape(businessGroupName), $out += '" /> <input type="hidden" value="', 
            $line = 8, $out += $escape(searchParam.businessGroupId), $out += '" name="businessGroupId"> <input type="hidden" value="', 
            $line = 9, $out += $escape(searchParam.accountStatus), $out += '" name="accountStatus"> </div> <div class="form-group mar-r-10"> <label class="control-label">账期：</label> <input type="text" style="width:100px;" class="date-picker" name="startDate" value="', 
            $line = 13, $out += $escape(searchParam.startAccountTime), $out += '"/> <span>&nbsp;至&nbsp;</span> <input type="text" style="width:100px;" class="date-picker" name="endDate" value="', 
            $line = 15, $out += $escape(searchParam.endAccountTime), $out += '"/> </div> <div class="form-group mar-r-10"> <label class="control-label">线路名称：</label> <input type="text" name="lineProductName" value="', 
            $line = 19, $out += $escape(searchParam.lineProductName), $out += '"/> <input type="hidden" name="lineProductId" value="', 
            $line = 20, $out += $escape(searchParam.lineProductId), $out += '" /> </div> <div class="form-group mar-r-10"> <label class="control-label">接收人： <input type="text" name="receiveUserName" value="', 
            $line = 24, $out += $escape(searchParam.receiveUserName), $out += '" /> <input type="hidden" name="receiveUserId" value="', 
            $line = 25, $out += $escape(searchParam.receiveUserId), $out += '"/> </div> <div class="form-group mar-r-10"> <label class="control-label">收客单号：</label> <input type="text" name="orderNumber" value="', 
            $line = 29, $out += $escape(searchParam.orderNumber), $out += '" /> </div> <label class="form-group control-label">对账状态：</label> <div class="form-group btn-group T-check-status mar-r-10"> <button data-value="', 
            $line = 33, $out += $escape(searchParam.isConfirmAccount), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 35, searchParam.isConfirmAccount && "" != searchParam.isConfirmAccount ? 1 == searchParam.isConfirmAccount ? ($out += " 已对账 ", 
            $line = 39) : ($out += " 未对账 ", $line = 41) : ($out += " 全部 ", $line = 37), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="1" href="javascript:void(0)">已对账</a></li> <li><a data-value="0" href="javascript:void(0)">未对账</a></li> </ul> </div> <div class="form-group mar-r-10"> <button class="btn-sm search-btn T-btn-search" > <i class="ace-icon fa fa-search"></i>搜索 </button> </div> <div class="form-group"> <button class="btn-sm search-btn T-btn-export ">导出报表</button> </div> </form> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group T-count"> <label class=" control-label pull-left" style="margin-left: 15px">人数合计：<span class="T-sumTransCount F-float F-count"></span><label> <label class=" control-label " style="margin-left:30px;">内转转入金额合计：<span class="T-sumTransNeedPayMoney F-float F-money"></span></label> <label class=" control-label " style="margin-left:30px;">已收金额合计：<span class="T-sumPayedMoney F-float F-money"></span></label> <label class=" control-label " style="margin-left:30px;">返款金额合计：<span class="T-sumBackMoney F-float F-money"></span></label> <label class=" control-label " style="margin-left:30px;">结算金额合计：<span class="T-sumSettlementMoney F-float F-money"></span></label> <label class=" control-label " style="margin-left:30px;">未收金额合计：<span class="T-sumUnReceivedMoney F-float F-money"></span></label> <label class=" control-label " style="margin-left:30px;">未收金额合计(已对账)：<span class="T-sumUnPayedMoney F-float F-money"></span></label> </div> </form> </div> <div class="clearfix"></div> <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover all hct_align_middle w-1500"> <thead> <tr class="T-tr-fixed bg-blur"> <th>收客单号</th> <th>线路产品</th> <th>出游日期(账期)</th> <th>联系人</th> <th>人数</th> <th>接收人</th> <th>接收时间</th> <th>内转转入</th> <th>明细</th> <th>已收金额</th> <th>返款金额</th> <th>结算金额</th> <th>未收金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th style="width:105px">对账</th> </tr> </thead> <tbody class="T-checkList" data-right="1360005"> ', 
            $line = 98, $each(innerTransferIncomeDetailsList, function(checking) {
                $out += ' <tr class="T-checkTr ', $line = 99, checking.change && ($out += "success", 
                $line = 99), $out += '" data-id="', $line = 99, $out += $escape(checking.id), $out += '" data-confirm ="', 
                $line = 99, $out += $escape(checking.isConfirmAccount), $out += '" ', $line = 99, 
                checking.change && ($out += 'data-change="true"', $line = 99), $out += "> <td>", 
                $line = 100, $out += $escape(checking.orderNumber), $out += "</td> <td>", $line = 101, 
                $out += $escape(checking.lineProductName), $out += '</td> <td name="startTime">', 
                $line = 102, $out += $escape($helpers.dateFormat(checking.accountTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 103, $out += $escape(checking.contactUserName), $out += '</td> <td><a href="#" class="T-action T-seeGroup" data-list="', 
                $line = 104, $out += $escape(checking.tgMemberList), $out += '" title="查看小组"> <span class="F-float F-count">', 
                $line = 105, $out += $escape(checking.adultCount), $out += '</span>大 <span class="F-float F-count">', 
                $line = 106, $out += $escape(checking.childCount), $out += "</span>小 </a> </td> <td>", 
                $line = 109, $out += $escape(checking.receiveUserName), $out += "</td> <td>", $line = 110, 
                null != checking.receiveTime ? ($line = 110, $out += $escape($helpers.dateFormat(checking.receiveTime, "yyyy-MM-dd")), 
                $line = 110) : ($out += "-", $line = 110), $out += '</td> <td><span class="transInMoney F-float F-money">', 
                $line = 111, $out += $escape(checking.transInMoney), $out += "</span></td> <td>", 
                $line = 112, checking.transferFeeList.length > 0 ? ($out += " ", $line = 113, $each(checking.transferFeeList, function(tf) {
                    $out += " ", $line = 114, $out += $escape(tf.discribe), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                    $line = 115, $out += $escape(tf.touristGroupId), $out += '" data-status="3">', $line = 115, 
                    $out += $escape(tf.price), $out += '</span> x <span class="F-float F-count">', $line = 116, 
                    $out += $escape(tf.count), $out += '</span> = <span class="F-float F-money">', $line = 117, 
                    $out += $escape(tf.price * tf.count), $out += "</span><br> ", $line = 118;
                }), $out += " ", $line = 119) : ($out += "- ", $line = 120), $out += ' </td> <td class="align-left"> <a href="javascript:void(0)" class="T-action T-payedDetail"> <span class="in-block">社收：<span class="transGetedMoney F-float F-money">', 
                $line = 124, $out += $escape(checking.transGetedMoney), $out += '</span></span> <span class="in-block">导游现收：<span class="F-float F-money">', 
                $line = 125, $out += $escape(checking.currentNeedPayMoney), $out += '</span></span> </a> </td> <td><input type="text" class="col-sm-12 T-refund money F-float F-money" value="', 
                $line = 128, $out += $escape(checking.backMoney), $out += '" name="settlementMoney" ', 
                $line = 128, checking.isConfirmAccount && ($out += ' disabled="disabled"', $line = 128), 
                $out += '></td> <td class="T-settlementMoney F-float F-money">', $line = 129, $out += $escape(checking.settlementMoney), 
                $out += '</td> <td class="T-unReceivedMoney F-float F-money" name="unPayedMoney">', 
                $line = 130, checking.unPayedMoney ? ($line = 130, $out += $escape(checking.unPayedMoney), 
                $line = 130) : ($line = 130, $out += $escape(checking.unIncomeMoney), $line = 130), 
                $out += '</td> <td><textarea class="col-sm-12 hct-textarea T-remark" maxlength="1000" name="checkRemark" ', 
                $line = 131, checking.isConfirmAccount && ($out += ' disabled="disabled"', $line = 131), 
                $out += ">", $line = 131, $out += $escape(checking.checkRemark), $out += "</textarea> </td> <td>", 
                $line = 133, null == checking.checkTime || "" == checking.checkTime ? ($out += "-", 
                $line = 133) : ($line = 133, $out += $escape($helpers.dateFormat(checking.checkTime, "yyyy-MM-dd hh:mm:ss")), 
                $line = 133), $out += "</td> <td>", $line = 134, null == checking.checkUserName || "" == checking.checkUserName ? ($out += "-", 
                $line = 134) : ($line = 134, $out += $escape(checking.checkUserName), $line = 134), 
                $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" data-entity-checkStatus="', 
                $line = 137, $out += $escape(checking.isConfirmAccount), $out += '" class="ace T-checkbox" ', 
                $line = 138, (checking.change && 1 == checking.isChecked || !checking.change && 1 == checking.isConfirmAccount) && ($out += 'checked="checked"', 
                $line = 138), $out += '/> <span class="lbl">对账</span> </label> <label>|</label> <label> <a href="#" class="T-action T-needPayDetail" style="margin-left:5px">查看</a> </label> </td> </tr> ', 
                $line = 147;
            }), $out += ' </tbody> </table> </div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 153, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> <label class="pos-rel pull-right" style="line-height:2.2em"> <input type="checkbox" class="ace T-selectAll"/> <span class="lbl">全选</span> </label> </div> </div> <div class="clearfix"></div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-checking"> <i class="ace-icon fa fa-check-circle"></i> 确认对账 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row innerTransferChecking globalAdd">\r\n    <div>\r\n        <div class="T-search">\r\n            <form class="form-inline" role="form" onsubmit="return false">\r\n                <div class="form-group mar-r-10">\r\n                    <label  class="control-label pull-left" style="margin-left: 0px;">部门：</label>\r\n                    <input type="text" name="businessGroupName" value="{{businessGroupName}}" />\r\n                    <input type="hidden" value="{{searchParam.businessGroupId}}" name="businessGroupId">\r\n                    <input type="hidden" value="{{searchParam.accountStatus}}" name="accountStatus">  \r\n                </div>\r\n                <div class="form-group mar-r-10">\r\n                    <label class="control-label">账期：</label>\r\n                      <input type="text" style="width:100px;" class="date-picker" name="startDate" value="{{searchParam.startAccountTime}}"/>\r\n                      <span>&nbsp;至&nbsp;</span>\r\n                      <input type="text" style="width:100px;" class="date-picker" name="endDate" value="{{searchParam.endAccountTime}}"/>\r\n                </div>\r\n                <div class="form-group mar-r-10">\r\n                    <label class="control-label">线路名称：</label>\r\n                    <input type="text" name="lineProductName" value="{{searchParam.lineProductName}}"/>\r\n                    <input type="hidden" name="lineProductId" value="{{searchParam.lineProductId}}" />\r\n                </div>\r\n                <div class="form-group mar-r-10">\r\n                    <label class="control-label">接收人：\r\n                    <input type="text" name="receiveUserName" value="{{searchParam.receiveUserName}}" />\r\n                    <input type="hidden" name="receiveUserId" value="{{searchParam.receiveUserId}}"/>\r\n                </div>\r\n                <div class="form-group mar-r-10">\r\n                    <label class="control-label">收客单号：</label>\r\n                    <input type="text" name="orderNumber" value="{{searchParam.orderNumber}}" />\r\n                </div>\r\n                <label class="form-group control-label">对账状态：</label>\r\n                <div class="form-group btn-group T-check-status mar-r-10">\r\n                    <button data-value="{{searchParam.isConfirmAccount}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n                        <span>\r\n                            {{if !searchParam.isConfirmAccount || searchParam.isConfirmAccount == ""}}\r\n                                全部\r\n                            {{else if searchParam.isConfirmAccount == 1}}\r\n                                已对账\r\n                            {{else}}\r\n                                未对账\r\n                            {{/if}}\r\n                        </span>\r\n                        <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n                    </button>\r\n                    <ul class="dropdown-menu">\r\n                        <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                        <li><a data-value="1" href="javascript:void(0)">已对账</a></li>\r\n                        <li><a data-value="0" href="javascript:void(0)">未对账</a></li>\r\n                    </ul>\r\n                </div>\r\n                <div class="form-group mar-r-10">\r\n                    <button class="btn-sm search-btn T-btn-search" >\r\n                        <i class="ace-icon fa fa-search"></i>搜索\r\n                    </button>\r\n                </div>\r\n                <div class="form-group">\r\n                    <button class="btn-sm search-btn T-btn-export ">导出报表</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group T-count">\r\n                <label class=" control-label pull-left" style="margin-left: 15px">人数合计：<span class="T-sumTransCount F-float F-count"></span><label>\r\n                <label class=" control-label " style="margin-left:30px;">内转转入金额合计：<span class="T-sumTransNeedPayMoney F-float F-money"></span></label>\r\n                <label class=" control-label " style="margin-left:30px;">已收金额合计：<span class="T-sumPayedMoney F-float F-money"></span></label>\r\n                <label class=" control-label " style="margin-left:30px;">返款金额合计：<span class="T-sumBackMoney F-float F-money"></span></label>\r\n                <label class=" control-label " style="margin-left:30px;">结算金额合计：<span class="T-sumSettlementMoney F-float F-money"></span></label>\r\n                <label class=" control-label " style="margin-left:30px;">未收金额合计：<span class="T-sumUnReceivedMoney F-float F-money"></span></label>\r\n                <label class=" control-label " style="margin-left:30px;">未收金额合计(已对账)：<span class="T-sumUnPayedMoney F-float F-money"></span></label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n    <div class="overflow-x min-w-1050">\r\n        <table class="table table-striped table-bordered table-hover all hct_align_middle w-1500">\r\n            <thead>\r\n            <tr class="T-tr-fixed bg-blur">\r\n                 <th>收客单号</th>\r\n                 <th>线路产品</th>\r\n                 <th>出游日期(账期)</th>\r\n                 <th>联系人</th>\r\n                 <th>人数</th>\r\n                 <th>接收人</th>\r\n                 <th>接收时间</th>\r\n                 <th>内转转入</th>\r\n                 <th>明细</th>\r\n                 <th>已收金额</th>\r\n                 <th>返款金额</th>\r\n                 <th>结算金额</th>\r\n                 <th>未收金额</th>\r\n                 <th>备注</th>\r\n                 <th>对账时间</th>\r\n                 <th>对账人</th>\r\n                 <th style="width:105px">对账</th>  \r\n            </tr>\r\n            </thead>   \r\n            <tbody class="T-checkList" data-right="1360005">\r\n            {{each innerTransferIncomeDetailsList as checking index}}\r\n            <tr class="T-checkTr {{if checking.change}}success{{/if}}" data-id="{{checking.id}}" data-confirm ="{{checking.isConfirmAccount}}" {{if checking.change}}data-change="true"{{/if}}>\r\n                <td>{{checking.orderNumber}}</td>\r\n                <td>{{checking.lineProductName}}</td>\r\n                <td name="startTime">{{checking.accountTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{checking.contactUserName}}</td>\r\n                <td><a href="#" class="T-action T-seeGroup" data-list="{{checking.tgMemberList}}" title="查看小组">\r\n                        <span class="F-float F-count">{{checking.adultCount}}</span>大\r\n                        <span class="F-float F-count">{{checking.childCount}}</span>小\r\n                    </a>\r\n                </td>\r\n                <td>{{checking.receiveUserName}}</td>\r\n                <td>{{if checking.receiveTime != null}}{{checking.receiveTime | dateFormat: \'yyyy-MM-dd\'}}{{else}}-{{/if}}</td>\r\n                <td><span class="transInMoney F-float F-money">{{checking.transInMoney}}</span></td>\r\n                <td>{{if checking.transferFeeList.length > 0}}\r\n                        {{each checking.transferFeeList as tf}}\r\n                            {{tf.discribe}}：\r\n                            <span class="F-float F-money T-touristGroupId" data-id="{{tf.touristGroupId}}" data-status="3">{{tf.price}}</span> x\r\n                            <span class="F-float F-count">{{tf.count}}</span> =\r\n                            <span class="F-float F-money">{{tf.price * tf.count}}</span><br>\r\n                        {{/each}}\r\n                    {{else}}-\r\n                    {{/if}}\r\n                </td>\r\n                <td class="align-left">\r\n                    <a href="javascript:void(0)" class="T-action T-payedDetail">\r\n                        <span class="in-block">社收：<span class="transGetedMoney F-float F-money">{{checking.transGetedMoney}}</span></span>\r\n                        <span class="in-block">导游现收：<span class="F-float F-money">{{checking.currentNeedPayMoney}}</span></span>\r\n                    </a>\r\n                </td>\r\n                <td><input type="text" class="col-sm-12 T-refund money F-float F-money" value="{{checking.backMoney}}" name="settlementMoney" {{if checking.isConfirmAccount}} disabled="disabled"{{/if}}></td>\r\n                <td class="T-settlementMoney F-float F-money">{{checking.settlementMoney}}</td>\r\n                <td class="T-unReceivedMoney F-float F-money" name="unPayedMoney">{{if checking.unPayedMoney}}{{checking.unPayedMoney}}{{else}}{{checking.unIncomeMoney}}{{/if}}</td>\r\n                <td><textarea class="col-sm-12 hct-textarea T-remark" maxlength="1000" name="checkRemark" {{if checking.isConfirmAccount}} disabled="disabled"{{/if}}>{{checking.checkRemark}}</textarea>\r\n                </td>\r\n                <td>{{if checking.checkTime == null || checking.checkTime == ""}}-{{else}}{{checking.checkTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if checking.checkUserName == null || checking.checkUserName == ""}}-{{else}}{{checking.checkUserName}}{{/if}}</td>\r\n                <td>\r\n                    <label class="pos-rel">\r\n                        <input type="checkbox" data-entity-checkStatus="{{checking.isConfirmAccount}}" class="ace T-checkbox" \r\n                        {{if (checking.change && checking.isChecked == 1) || (!checking.change && checking.isConfirmAccount == 1)}}checked="checked"{{/if}}/>\r\n                        <span class="lbl">对账</span>\r\n                    </label>\r\n                    <label>|</label>\r\n                        <label>\r\n                            <a href="#" class="T-action T-needPayDetail" style="margin-left:5px">查看</a>\r\n                        </label>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n         </tbody>\r\n        </table>\r\n    </div>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n            <label class="pos-rel pull-right" style="line-height:2.2em">\r\n            <input type="checkbox" class="ace T-selectAll"/> \r\n            <span class="lbl">全选</span>\r\n        </label>\r\n        </div>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group" style="text-align: center;">\r\n                <button class="btn btn-xs btn-primary T-btn-close">\r\n                    <i class="ace-icon fa fa-times-circle"></i>\r\n                    关闭\r\n                </button>\r\n                <button class="btn btn-xs btn-primary T-checking">\r\n                    <i class="ace-icon fa fa-check-circle"></i>\r\n                     确认对账\r\n                </button>\r\n            </div>\r\n        </form>\r\n\r\n\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});