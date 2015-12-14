/*TMODJS:{"debug":true,"version":142,"md5":"6040db734ccfdcf720a29e1c46f4da58"}*/
define(function(require) {
    return require("../../../template")("financial/shop/view/shopClearing", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, name = $data.name, searchParam = $data.searchParam, totalList = $data.totalList, $each = $utils.$each, shopAccountList = $data.shopAccountList, $out = ($data.rs, 
            $data.index, "");
            return $out += '<div class="row check globalAdd T-search-area border" style="padding: 0 20px;"> <form class="form-inline" role="form" onsubmit="return false" style="padding-top:10px;"> <div class="form-group"> <label>购物店：</label> <label>', 
            $line = 5, $out += $escape(name), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" value="', 
            $line = 9, $out += $escape(searchParam.startTime), $out += '" style="width: 100px; text-align: center;"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" value="', 
            $line = 11, $out += $escape(searchParam.endTime), $out += '" style="width: 100px; text-align: center;"> </div> <div class="form-group marginLeft-30"> <label>团信息：</label> <input type="text" class="form-control T-search-trip" value="', 
            $line = 15, $out += $escape(searchParam.accountInfo), $out += '"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> <div class="form-inline" style="padding-top:10px;"> <div class="form-group"> <label>人数合计：</label> <label>', 
            $line = 26, $out += $escape(totalList.sumCount), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>购物金额合计：</label> <label>', 
            $line = 30, $out += $escape(totalList.sumConsumeMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>社佣合计：</label> <label>', 
            $line = 34, $out += $escape(totalList.sumTravelAgencyRebateMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>导佣合计：</label> <label class="T-stMoney">', 
            $line = 38, $out += $escape(totalList.sumGuideRebateMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>人数返佣合计：</label> <label class="T-unpayMoney">', 
            $line = 42, $out += $escape(totalList.sumCustomerRebateMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>停车返佣合计：</label> <label class="T-unpayMoney">', 
            $line = 46, $out += $escape(totalList.sumCustomerRebateMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>返佣金额合计：</label> <label class="T-unpayMoney">', 
            $line = 50, $out += $escape(totalList.sumBackMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>已收金额合计：</label> <label class="T-unpayMoney">', 
            $line = 54, $out += $escape(totalList.sumReceiveMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>未收金额合计：</label> <label class="T-unpayMoney">', 
            $line = 58, $out += $escape(totalList.sumUnReceiveMoney), $out += '</label> </div> </div> <div class="form-inline" style="padding-top: 10px;"> <div class="form-group"> <label>本次收款金额合计：</label> <input type="text" class="form-control T-sumReciveMoney" name="sumPayMoney" style="width:70px;"> </div> <div class="form-group marginLeft-30"> <label>收款方式：</label> <select class="form-control T-sumPayType" name="payType"> <option>现金</option> <option>银行转账</option> <option>网上支付</option> <option>支票</option> <option>其它</option> </select> </div> <div class="form-group marginLeft-30"> <label>备注：</label> <input type="text" class="form-control T-sumRemark"> </div> <div class="form-group marginLeft-30"> <button class="btn btn-xs btn-primary marginLeft-30 T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button> </div> </div> </div> <div class="row" style="margin-top: 20px;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" >序号</th> <th class="th-border" >团信息</th> <th class="th-border" >进店日期（账期）</th> <th class="th-border" >人数</th> <th class="th-border" >商品</th> <th class="th-border" >购物金额</th> <th class="th-border" >社佣</th> <th class="th-border" >导佣</th> <th class="th-border" >人数返佣</th> <th class="th-border" >停车返佣</th> <th class="th-border" >单据</th> <th class="th-border" >返佣金额</th> <th class="th-border" >已收金额</th> <th class="th-border" >结算金额</th> <th class="th-border" >未收金额</th> <th class="th-border" >本次收款金额</th> <th class="th-border" >备注</th> <th class="th-border" >对账时间</th> <th class="th-border" >对账人</th> <th class="th-border">对账</th> </tr> </thead> <tbody class="T-list T-checkList"> ', 
            $line = 112, $each(shopAccountList, function(rs, index) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 113, $out += $escape(rs.id), 
                $out += '" data-confirm="', $line = 113, rs.isConfirmAccount ? ($out += "1", $line = 113) : ($out += "0", 
                $line = 113), $out += '"> <td>', $line = 114, $out += $escape(index + 1), $out += "</td> <td>", 
                $line = 115, $out += $escape(rs.tripMessage), $out += "</td> <td>", $line = 116, 
                $out += $escape(rs.accountTime), $out += "</td> <td>", $line = 117, $out += $escape(rs.count), 
                $out += "</td> <td>", $line = 118, $out += $escape(rs.shopName), $line = 118, rs.shopName && ($out += '<a class="cursor T-action">展开</a>', 
                $line = 118), $out += "</td> <td>", $line = 119, $out += $escape(rs.consumeMoney), 
                $out += "</td> <td>", $line = 120, $out += $escape(rs.travelAgencyRebateMoney), 
                $out += "</td> <td>", $line = 121, $out += $escape(rs.guideRebateMoney), $out += "</td> <td>", 
                $line = 122, $out += $escape(rs.customerRebateMoney), $out += "</td> <td>", $line = 123, 
                $out += $escape(rs.parkingRebateMoney), $out += "</td> <td>", $line = 124, rs.billImage ? ($out += '<a class="cursor T-action T-view-receipts" data-billImage="', 
                $line = 124, $out += $escape(rs.billImage), $out += '">查看</a>', $line = 124) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 124), $out += "</td> <td>", $line = 125, $out += $escape(rs.backMoney), 
                $out += '</td> <td><a class="cursor T-action T-payDetails">', $line = 126, $out += $escape(rs.receiveMoney), 
                $out += "</a> <td>", $line = 127, $out += $escape(rs.settlementMoney), $out += '</td> <td name="unPayedMoney">', 
                $line = 128, $out += $escape(rs.unReceiveMoney), $out += '</td> <td><input type="text" class="col-sm-12 T-reciveMoney" name="payMoney" value="', 
                $line = 129, $out += $escape(rs.payMoney), $out += '"></td> <td><input type="text" class="col-sm-12 T-payRemark" name="payRemark" value="', 
                $line = 130, $out += $escape(rs.checkRemark), $out += '"></td> <td>', $line = 131, 
                $out += $escape(rs.checkTime), $out += "</td> <td>", $line = 132, $out += $escape(rs.checkName), 
                $out += '</td> <td> <label class="pos-rel"> <span class="lbl">', $line = 135, rs.isConfirmAccount ? ($out += "已", 
                $line = 135) : ($out += "未", $line = 135), $out += '对账</span> </label> <label class="cursor"> <a> |</a></label> <a class="cursor T-action T-view-details">查看</a> </td> </tr> ', 
                $line = 141;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small class="T-sumItem">共计 ', 
            $line = 146, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> <label class="pos-rel pull-right"> <input type="checkbox" class="ace T-checkAll"> <span class="lbl">全选</span> </label> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-btn-save" style="margin-left:20px"> <i class="ace-icon fa fa-check-circle"></i> 确认收款 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row check globalAdd T-search-area border" style="padding: 0 20px;">\r\n    <form class="form-inline" role="form" onsubmit="return false" style="padding-top:10px;">\r\n        <div class="form-group">\r\n            <label>购物店：</label>\r\n            <label>{{name}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>账期：</label>\r\n            <input type="text" class="form-control datepicker T-search-start-date" value="{{searchParam.startTime}}" style="width: 100px; text-align: center;">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control datepicker T-search-end-date" value="{{searchParam.endTime}}" style="width: 100px; text-align: center;">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>团信息：</label>\r\n            <input type="text" class="form-control T-search-trip" value="{{searchParam.accountInfo}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索 \r\n            </button>\r\n        </div>\r\n    </form>\r\n    <div class="form-inline" style="padding-top:10px;">\r\n        <div class="form-group">\r\n            <label>人数合计：</label>\r\n            <label>{{totalList.sumCount}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>购物金额合计：</label>\r\n            <label>{{totalList.sumConsumeMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>社佣合计：</label>\r\n            <label>{{totalList.sumTravelAgencyRebateMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>导佣合计：</label>\r\n            <label class="T-stMoney">{{totalList.sumGuideRebateMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>人数返佣合计：</label>\r\n            <label class="T-unpayMoney">{{totalList.sumCustomerRebateMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>停车返佣合计：</label>\r\n            <label class="T-unpayMoney">{{totalList.sumCustomerRebateMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>返佣金额合计：</label>\r\n            <label class="T-unpayMoney">{{totalList.sumBackMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>已收金额合计：</label>\r\n            <label class="T-unpayMoney">{{totalList.sumReceiveMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>未收金额合计：</label>\r\n            <label class="T-unpayMoney">{{totalList.sumUnReceiveMoney}}</label>\r\n        </div>\r\n    </div>\r\n    <div class="form-inline" style="padding-top: 10px;">\r\n        <div class="form-group">\r\n            <label>本次收款金额合计：</label>\r\n            <input type="text" class="form-control T-sumReciveMoney" name="sumPayMoney" style="width:70px;">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>收款方式：</label>\r\n            <select class="form-control T-sumPayType" name="payType">\r\n                <option>现金</option>\r\n                <option>银行转账</option>\r\n                <option>网上支付</option>\r\n                <option>支票</option>\r\n                <option>其它</option>\r\n            </select>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>备注：</label>\r\n            <input type="text" class="form-control T-sumRemark">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn btn-xs btn-primary marginLeft-30 T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="row" style="margin-top: 20px;">\r\n    <table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border" >序号</th>\r\n                <th class="th-border" >团信息</th>\r\n                <th class="th-border" >进店日期（账期）</th>\r\n                <th class="th-border" >人数</th>\r\n                <th class="th-border" >商品</th>\r\n                <th class="th-border" >购物金额</th>\r\n                <th class="th-border" >社佣</th>\r\n                <th class="th-border" >导佣</th>\r\n                <th class="th-border" >人数返佣</th>\r\n                <th class="th-border" >停车返佣</th>\r\n                <th class="th-border" >单据</th>\r\n                <th class="th-border" >返佣金额</th>\r\n                <th class="th-border" >已收金额</th>\r\n                <th class="th-border" >结算金额</th>\r\n                <th class="th-border" >未收金额</th>\r\n                <th class="th-border" >本次收款金额</th>\r\n                <th class="th-border" >备注</th>\r\n                <th class="th-border" >对账时间</th>\r\n                <th class="th-border" >对账人</th>\r\n                <th class="th-border">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list T-checkList">\r\n        {{each shopAccountList as rs index}}\r\n            <tr class="T-checkTr" data-id="{{rs.id}}" data-confirm="{{if !!rs.isConfirmAccount}}1{{else}}0{{/if}}">\r\n                <td>{{index + 1}}</td>\r\n                <td>{{rs.tripMessage}}</td>\r\n                <td>{{rs.accountTime}}</td>\r\n                <td>{{rs.count}}</td>\r\n                <td>{{rs.shopName}}{{if rs.shopName}}<a class="cursor T-action">展开</a>{{/if}}</td>\r\n                <td>{{rs.consumeMoney}}</td>\r\n                <td>{{rs.travelAgencyRebateMoney}}</td>\r\n                <td>{{rs.guideRebateMoney}}</td>\r\n                <td>{{rs.customerRebateMoney}}</td>\r\n                <td>{{rs.parkingRebateMoney}}</td>\r\n                <td>{{if !rs.billImage}}<span style="color:#bbb">查看</span>{{else}}<a class="cursor T-action T-view-receipts" data-billImage="{{rs.billImage}}">查看</a>{{/if}}</td>\r\n                <td>{{rs.backMoney}}</td>\r\n                <td><a class="cursor T-action T-payDetails">{{rs.receiveMoney}}</a>\r\n                <td>{{rs.settlementMoney}}</td>\r\n                <td name="unPayedMoney">{{rs.unReceiveMoney}}</td>\r\n                <td><input type="text" class="col-sm-12 T-reciveMoney" name="payMoney" value="{{rs.payMoney}}"></td>\r\n                <td><input type="text" class="col-sm-12 T-payRemark" name="payRemark" value="{{rs.checkRemark}}"></td>\r\n                <td>{{rs.checkTime}}</td>\r\n                <td>{{rs.checkName}}</td>\r\n                <td>\r\n                    <label class="pos-rel">\r\n                        <span class="lbl">{{if !!rs.isConfirmAccount}}已{{else}}未{{/if}}对账</span>\r\n                    </label>\r\n                    <label class="cursor"> <a> |</a></label>\r\n                    <a class="cursor T-action T-view-details">查看</a>\r\n                </td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small class="T-sumItem">共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div>\r\n            <label class="pos-rel pull-right">\r\n                <input type="checkbox" class="ace T-checkAll"> <span class="lbl">全选</span> \r\n            </label>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-btn-save" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认收款\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});