/*TMODJS:{"debug":true,"version":90,"md5":"9db2c43676c8b078df481413ff7ad96d"}*/
define(function(require) {
    return require("../../../template")("financial/shop/view/shopChecking", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, name = $data.name, searchParam = $data.searchParam, totalList = $data.totalList, $each = $utils.$each, shopAccountList = $data.shopAccountList, $out = ($data.rs, 
            $data.index, $data.list, $data.i, "");
            return $out += '<div class="row check globalAdd T-search-area"> <form class="form-inline" role="form" onsubmit="return false" style="padding-top: 10px;"> <div class="form-group"> <label>购物店：</label> <label>', 
            $line = 5, $out += $escape(name), $out += '</label> <input value="', $line = 6, 
            $out += $escape(name), $out += '" name="shopName" type="hidden"> <input value="', 
            $line = 7, $out += $escape(searchParam.shopId), $out += '" name="shopId" type="hidden"> </div> <div class="form-group marginLeft-30"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" value="', 
            $line = 11, $out += $escape(searchParam.startDate), $out += '" style="width: 100px; text-align: center;"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" value="', 
            $line = 13, $out += $escape(searchParam.endDate), $out += '" style="width: 100px; text-align: center;"> </div> <div class="form-group marginLeft-30"> <label>团信息：</label> <input type="text" class="form-control T-search-trip" value="', 
            $line = 17, $out += $escape(searchParam.tripMessage), $out += '"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-export">导出报表</button> </div> <input name="accountStatus" type="hidden" value="', 
            $line = 27, $out += $escape(searchParam.accountStatus), $out += '"> </form> <div class="form-inline"> <div class="form-group"> <label>人数合计：</label> <label>', 
            $line = 32, $out += $escape(totalList.sumCount), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>打单金额合计：</label> <label class="F-float F-money">', 
            $line = 36, $out += $escape(totalList.sumConsumeMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>社佣合计：</label> <label class="F-float F-money">', 
            $line = 40, $out += $escape(totalList.sumTravelAgencyRebateMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>导佣合计：</label> <label class="F-float F-money">', 
            $line = 44, $out += $escape(totalList.sumGuideRebateMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>返佣金额合计：</label> <label class="F-float F-money">', 
            $line = 48, $out += $escape(totalList.sumBackMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>已收金额合计：</label> <label class="F-float F-money">', 
            $line = 52, $out += $escape(totalList.sumReceiveMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>未收金额合计：</label> <label class="T-unpayMoney F-float F-money">', 
            $line = 56, $out += $escape(totalList.sumUnReceiveMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>未付金额合计(已对账)：</label> <label class="F-float F-money">', 
            $line = 60, $out += $escape(totalList.checkedUnPayedMoney), $out += '</label> </div> </div> </div> <div class="row"> <table class="table table-striped table-bordered table-hover hct_align_middle"> <thead> <tr class="T-tr-fixed bg-blur"> <th>团信息</th> <th>进店日期（账期）</th> <th>人数</th> <th>商品</th> <th>打单金额</th> <th>社佣</th> <th>导佣</th> <th>单据</th> <th>返佣金额</th> <th>已收金额</th> <th>结算金额</th> <th>未收金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th style="min-width: 110px;">对账</th> </tr> </thead> <tbody class="T-list T-checkList"> ', 
            $line = 87, $each(shopAccountList, function(rs) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 88, $out += $escape(rs.id), 
                $out += '" data-confirm="', $line = 88, rs.isConfirmAccount ? ($out += "1", $line = 88) : ($out += "0", 
                $line = 88), $out += '"> <td>', $line = 89, $out += $escape(rs.tripMessage), $out += "</td> <td>", 
                $line = 90, $out += $escape(rs.accountTime), $out += "</td> <td><span>", $line = 91, 
                $out += $escape(rs.count), $out += "</span></td> <td>", $line = 92, rs.shopItem.length > 0 && ($line = 92, 
                $out += $escape(rs.shopItem[0].itemName), $line = 92, rs.shopItem.length > 1 && ($out += "...", 
                $line = 92), $out += '<a class="cursor T-action T-see-group">展开</a>', $line = 92), 
                $out += '</td> <td><span class="F-float F-money">', $line = 93, $out += $escape(rs.consumeMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 94, $out += $escape(rs.travelAgencyRebateMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 95, $out += $escape(rs.guideRebateMoney), 
                $out += '</span></td> <td style="white-space: nowrap;">', $line = 96, rs.billImage ? ($out += '<a class="cursor T-action T-view-receipts" data-billimage="', 
                $line = 96, $out += $escape(rs.billImage), $out += '">查看</a>', $line = 96) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 96), $out += '</td> <td><span class="F-float F-money">', $line = 97, $out += $escape(rs.backMoney), 
                $out += '</span></td> <td><a class="cursor T-action T-payDetails T-payedDetail F-float F-money" data-money="', 
                $line = 98, $out += $escape(rs.receiveMoney), $out += '">', $line = 98, $out += $escape(rs.receiveMoney), 
                $out += "</a> <td>", $line = 99, rs.isConfirmAccount ? ($out += '<span class="F-float F-money">', 
                $line = 99, $out += $escape(rs.settlementMoney), $out += "</span>", $line = 99) : ($out += '<input type="text" class="col-sm-12 F-float F-money" name="settlementMoney" value="', 
                $line = 99, $out += $escape(rs.settlementMoney), $out += '">', $line = 99), $out += '</td> <td name="unPayedMoney"><span class="F-float F-money">', 
                $line = 100, $out += $escape(rs.unReceiveMoney), $out += "</span></td> <td>", $line = 101, 
                rs.isConfirmAccount ? ($line = 101, $out += $escape(rs.checkRemark), $line = 101) : ($out += ' <textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000">', 
                $line = 102, $out += $escape(rs.checkRemark), $out += "</textarea> ", $line = 103), 
                $out += " </td> <td>", $line = 105, $out += $escape(rs.checkTime), $out += "</td> <td>", 
                $line = 106, $out += $escape(rs.checkName), $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" class="ace T-checkbox" ', 
                $line = 109, rs.isConfirmAccount && ($out += 'checked="checked"', $line = 109), 
                $out += ' /> <span class="lbl">对账</span> </label> <label class="cursor"> <a> |</a></label> <a class="cursor T-action T-view-details">查看</a> </td> </tr> ', 
                $line = 116, rs.shopItem.length > 0 && ($out += ' <tr class="hide"> <td colspan="19"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" style="min-width: 45px;">序号</th> <th class="th-border" style="min-width: 70px;">商品</th> <th class="th-border" style="min-width: 120px;">消费金额</th> <th class="th-border" style="min-width: 45px;">社佣</th> <th class="th-border" style="min-width: 45px;">导佣</th> </tr> </thead> <tbody> ', 
                $line = 130, $each(rs.shopItem, function(list, i) {
                    $out += " <tr> <td>", $line = 132, $out += $escape(i + 1), $out += "</td> <td>", 
                    $line = 133, $out += $escape(list.itemName), $out += '</td> <td><span class="F-float F-money">', 
                    $line = 134, $out += $escape(list.consumeMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 135, $out += $escape(list.travelAgencyRebateMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 136, $out += $escape(list.guideRebateMoney), $out += "</span></td> </tr> ", 
                    $line = 138;
                }), $out += " </tbody> </table> </td> </tr> ", $line = 144), $out += " ", $line = 145;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 150, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <label class="pos-rel pull-right" style="line-height: 2.2em;"> <input type="checkbox" class="ace T-checkAll"> <span class="lbl">全选</span> </label> <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right"></div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px"> <i class="ace-icon fa fa-check-circle"></i> 确认对账 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row check globalAdd T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false" style="padding-top: 10px;">\r\n        <div class="form-group">\r\n            <label>购物店：</label>\r\n            <label>{{name}}</label>\r\n            <input value="{{name}}" name="shopName" type="hidden">\r\n            <input value="{{searchParam.shopId}}" name="shopId" type="hidden">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>账期：</label>\r\n            <input type="text" class="form-control datepicker T-search-start-date" value="{{searchParam.startDate}}" style="width: 100px; text-align: center;">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control datepicker T-search-end-date" value="{{searchParam.endDate}}" style="width: 100px; text-align: center;">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>团信息：</label>\r\n            <input type="text" class="form-control T-search-trip" value="{{searchParam.tripMessage}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索 \r\n            </button>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn-sm search-btn T-btn-export">导出报表</button>\r\n        </div>\r\n        <input  name="accountStatus" type="hidden" value="{{searchParam.accountStatus}}">\r\n    </form>\r\n    <div class="form-inline">\r\n        <div class="form-group">\r\n            <label>人数合计：</label>\r\n            <label>{{totalList.sumCount}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>打单金额合计：</label>\r\n            <label class="F-float F-money">{{totalList.sumConsumeMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>社佣合计：</label>\r\n            <label class="F-float F-money">{{totalList.sumTravelAgencyRebateMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>导佣合计：</label>\r\n            <label class="F-float F-money">{{totalList.sumGuideRebateMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>返佣金额合计：</label>\r\n            <label class="F-float F-money">{{totalList.sumBackMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>已收金额合计：</label>\r\n            <label class="F-float F-money">{{totalList.sumReceiveMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>未收金额合计：</label>\r\n            <label class="T-unpayMoney F-float F-money">{{totalList.sumUnReceiveMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>未付金额合计(已对账)：</label>\r\n            <label class="F-float F-money">{{totalList.checkedUnPayedMoney}}</label>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="row">\r\n    <table class="table table-striped table-bordered table-hover hct_align_middle">\r\n        <thead>\r\n            <tr class="T-tr-fixed bg-blur">\r\n                <th>团信息</th>\r\n                <th>进店日期（账期）</th>\r\n                <th>人数</th>\r\n                <th>商品</th>\r\n                <th>打单金额</th>\r\n                <th>社佣</th>\r\n                <th>导佣</th>\r\n                <th>单据</th>\r\n                <th>返佣金额</th>\r\n                <th>已收金额</th>\r\n                <th>结算金额</th>\r\n                <th>未收金额</th>\r\n                <th>备注</th>\r\n                <th>对账时间</th>\r\n                <th>对账人</th>\r\n                <th style="min-width: 110px;">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list T-checkList">\r\n        {{each shopAccountList as rs index}}\r\n            <tr class="T-checkTr" data-id="{{rs.id}}" data-confirm="{{if !!rs.isConfirmAccount}}1{{else}}0{{/if}}">\r\n                <td>{{rs.tripMessage}}</td>\r\n                <td>{{rs.accountTime}}</td>\r\n                <td><span>{{rs.count}}</span></td>\r\n                <td>{{if rs.shopItem.length >0}}{{rs.shopItem[0].itemName}}{{if rs.shopItem.length >1}}...{{/if}}<a class="cursor T-action T-see-group">展开</a>{{/if}}</td>\r\n                <td><span class="F-float F-money">{{rs.consumeMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.travelAgencyRebateMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.guideRebateMoney}}</span></td>\r\n                <td style="white-space: nowrap;">{{if !rs.billImage}}<span style="color:#bbb">查看</span>{{else}}<a class="cursor T-action T-view-receipts" data-billimage="{{rs.billImage}}">查看</a>{{/if}}</td>\r\n                <td><span class="F-float F-money">{{rs.backMoney}}</span></td>\r\n                <td><a class="cursor T-action T-payDetails T-payedDetail F-float F-money" data-money="{{rs.receiveMoney}}">{{rs.receiveMoney}}</a>\r\n                <td>{{if !!rs.isConfirmAccount}}<span class="F-float F-money">{{rs.settlementMoney}}</span>{{else}}<input type="text" class="col-sm-12 F-float F-money" name="settlementMoney" value="{{rs.settlementMoney}}">{{/if}}</td>\r\n                <td name="unPayedMoney"><span class="F-float F-money">{{rs.unReceiveMoney}}</span></td>\r\n                <td>{{if !!rs.isConfirmAccount}}{{rs.checkRemark}}{{else}}\r\n                    <textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000">{{rs.checkRemark}}</textarea>\r\n                    {{/if}}\r\n                </td>\r\n                <td>{{rs.checkTime}}</td>\r\n                <td>{{rs.checkName}}</td>\r\n                <td>\r\n                    <label class="pos-rel">\r\n                        <input type="checkbox" class="ace T-checkbox" {{if !!rs.isConfirmAccount}}checked="checked"{{/if}} /> \r\n                        <span class="lbl">对账</span>\r\n                    </label>\r\n                    <label class="cursor"> <a> |</a></label>\r\n                    <a class="cursor T-action T-view-details">查看</a>\r\n                </td>\r\n            </tr>\r\n            {{if rs.shopItem.length > 0}}\r\n            <tr class="hide">\r\n                <td colspan="19">\r\n                    <table class="table table-striped table-bordered table-hover">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class="th-border" style="min-width: 45px;">序号</th>\r\n                                <th class="th-border" style="min-width: 70px;">商品</th>\r\n                                <th class="th-border" style="min-width: 120px;">消费金额</th>\r\n                                <th class="th-border" style="min-width: 45px;">社佣</th>\r\n                                <th class="th-border" style="min-width: 45px;">导佣</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            {{each rs.shopItem as list i}}\r\n                            <tr>\r\n                                <td>{{i + 1}}</td>\r\n                                <td>{{list.itemName}}</td>\r\n                                <td><span class="F-float F-money">{{list.consumeMoney}}</span></td>\r\n                                <td><span class="F-float F-money">{{list.travelAgencyRebateMoney}}</span></td>\r\n                                <td><span class="F-float F-money">{{list.guideRebateMoney}}</span></td>\r\n                            </tr>\r\n                            {{/each}}\r\n                        </tbody>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n\r\n            {{/if}}\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <label class="pos-rel pull-right" style="line-height: 2.2em;">\r\n                <input type="checkbox" class="ace T-checkAll"> <span class="lbl">全选</span> \r\n            </label>\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right"></div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认对账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});