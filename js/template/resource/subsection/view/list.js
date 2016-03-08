/*TMODJS:{"debug":true,"version":614,"md5":"174a520ca07384169dfcad8d32be607f"}*/
define(function(require) {
    return require("../../../template")("resource/subsection/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, transitSubTgroupList = $data.transitSubTgroupList, $escape = ($data.subList, 
            $data.indexA, $utils.$escape), recordSize = ($data.subDetails, $data.index, $data.recordSize), $out = "";
            return $out += '<div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur T-tr-fixed"> <th>收客信息</th> <th>线路产品</th> <th>针对客源</th> <th>出游日期</th> <th>天数</th> <th>现收</th> <th>操作人</th> <th class="col-sm-1">操作时间</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 18, $each(transitSubTgroupList, function(subList, indexA) {
                $out += ' <tr data-entity-id="', $line = 19, $out += $escape(subList.id), $out += '"> <td class="h-touristGroupInfo"> <p> <span class="h-orderNumber">收客单号：', 
                $line = 22, $out += $escape(subList.orderNumber), $out += '</span> <span class="h-memberName">', 
                $line = 23, null != subList.contactMember && ($line = 23, $out += $escape(subList.contactMember.name), 
                $line = 23), $out += '</span> <label class="h-peopleCount">(<span class="F-float F-count">', 
                $line = 24, $out += $escape(subList.adultCount), $out += '</span>大<span class="F-float F-count">', 
                $line = 24, $out += $escape(subList.childCount), $out += '</span>小)</label> </p> <p class="h-agencyName">', 
                $line = 26, subList.partnerAgency && ($line = 26, $out += $escape(subList.partnerAgency.travelAgencyName), 
                $line = 26), $out += "</p> </td> <td>", $line = 28, $out += $escape(subList.lineProduct.name), 
                $out += " ", $line = 28, null != subList.subTouristGroupDetails && ($out += ' <label class="lineProductArea" style="float: right;"> <button class="btn btn-success btn-sm btn-white show" index="', 
                $line = 30, $out += $escape(indexA), $out += '"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>  </button> </label> ', 
                $line = 35), $out += " </td> <td>", $line = 37, 0 == subList.customerType ? ($out += "散客", 
                $line = 37) : ($out += "团体", $line = 37), $out += "</td> <td>", $line = 38, $out += $escape($helpers.dateFormat(subList.startTime, "yyyy-MM-dd")), 
                $out += '</td> <td><span class="F-float F-count">', $line = 39, $out += $escape(subList.lineProduct.days), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 40, $out += $escape(subList.currentNeedPayMoney), 
                $out += "</span></td> <td>", $line = 41, null != subList.subOperatorUser ? ($line = 41, 
                $out += $escape(subList.subOperatorUser.realName), $line = 41) : ($out += "-", $line = 41), 
                $out += "</td> <td>", $line = 43, null != subList.subOperateTime ? ($line = 43, 
                $out += $escape(subList.subOperateTime), $line = 43) : ($out += "-", $line = 43), 
                $out += "</td> <td>", $line = 44, 1 == subList.status ? ($out += "未分团", $line = 44) : 5 == subList.status && ($out += "已分段", 
                $line = 44), $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entity-id="', 
                $line = 47, $out += $escape(subList.id), $out += '" class="', $line = 47, 1 == subList.isEdit ? ($out += "gray", 
                $line = 47) : ($out += "T-btn-subsection", $line = 47), $out += ' cursor R-right" data-right="1350001" title="', 
                $line = 47, 1 == subList.isEdit && ($out += "财务审核后已设置不可修改数据，请联系财务", $line = 47), 
                $out += '"> 分段 </a> <a data-entity-id="', $line = 50, $out += $escape(subList.id), 
                $out += '" class="', $line = 50, 5 == subList.status && ($out += "T-btn-subsection-revoke", 
                $line = 50), $out += ' cursor R-right" data-right="1350002" ', $line = 50, 5 != subList.status && ($out += 'style="color:#bbb;" ', 
                $line = 50), $out += '> <label class="padding-right20">|</label> 撤销 </a> </div> </td> </tr> ', 
                $line = 57, null != subList.subTouristGroupDetails && ($out += " ", $line = 57, 
                $each(subList.subTouristGroupDetails, function(subDetails, index) {
                    $out += " ", $line = 57, 0 == index ? ($out += ' <tr class="T-tr_', $line = 58, 
                    $out += $escape(indexA), $out += '" style="display: none;"> <td rowspan="', $line = 59, 
                    $out += $escape(subList.subTouristGroupDetails.length), $out += '"></td> <td>', 
                    $line = 60, $out += $escape(subDetails.lineProductName), $out += "</td> <td>", $line = 61, 
                    0 == subDetails.customerType ? ($out += "散客", $line = 61) : ($out += "团体", $line = 61), 
                    $out += "</td> <td>", $line = 62, $out += $escape($helpers.dateFormat(subDetails.startTime, "yyyy-MM-dd")), 
                    $out += '</td> <td><span class="F-float F-count">', $line = 63, $out += $escape(subDetails.days), 
                    $out += "</span></td> <td>", $line = 64, 0 == subDetails.operateCurrentNeedPayMoney ? ($out += "-", 
                    $line = 64) : ($out += "本段现收", $line = 64), $out += '</td> <td colspan="2"></td> <td>', 
                    $line = 66, 1 == subDetails.status ? ($out += " 未分团 ", $line = 66) : 2 == subDetails.status ? ($out += " 已分团 ", 
                    $line = 66) : 3 == subDetails.status ? ($out += " 已外转 ", $line = 66) : 4 == subDetails.status ? ($out += " 已取消 ", 
                    $line = 66) : 5 == subDetails.status ? ($out += " 已拆分 ", $line = 66) : 6 == subDetails.status ? ($out += " 已内转 ", 
                    $line = 66) : ($out += " 已发团 ", $line = 66), $out += ' </td> <td rowspan="', $line = 68, 
                    $out += $escape(subList.subTouristGroupDetails.length), $out += '" ></td> </tr> ', 
                    $line = 70) : ($out += ' <tr class="T-tr_', $line = 71, $out += $escape(indexA), 
                    $out += '" style="display: none;"> <td>', $line = 72, $out += $escape(subDetails.lineProductName), 
                    $out += "</td> <td>", $line = 73, 0 == subDetails.customerType ? ($out += "散客", 
                    $line = 73) : ($out += "团体", $line = 73), $out += "</td> <td>", $line = 74, $out += $escape($helpers.dateFormat(subDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 75, $out += $escape(subDetails.days), $out += "</td> <td>", 
                    $line = 76, 0 == subDetails.operateCurrentNeedPayMoney ? ($out += "-", $line = 76) : ($out += "本段现收", 
                    $line = 76), $out += '</td> <td colspan="2"></td> <td>', $line = 78, 1 == subDetails.status ? ($out += " 未分团 ", 
                    $line = 78) : 2 == subDetails.status ? ($out += " 已分团 ", $line = 78) : 3 == subDetails.status ? ($out += " 已转客 ", 
                    $line = 78) : 4 == subDetails.status ? ($out += " 已取消 ", $line = 78) : 5 == subDetails.status ? ($out += " 已拆分 ", 
                    $line = 78) : 6 == subDetails.status ? ($out += " 已内转 ", $line = 78) : ($out += " 已发团 ", 
                    $line = 78), $out += " </td> </tr> ", $line = 81), $out += " ", $line = 81;
                }), $out += " ", $line = 81), $out += " ", $line = 81;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 86, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur T-tr-fixed">\r\n                <th>收客信息</th>\r\n                <th>线路产品</th>\r\n                <th>针对客源</th>\r\n                <th>出游日期</th>\r\n                <th>天数</th>\r\n                <th>现收</th>\r\n                <th>操作人</th>\r\n                <th class="col-sm-1">操作时间</th>\r\n                <th>状态</th>\r\n                <th>操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n        {{each transitSubTgroupList as subList indexA}}\r\n            <tr data-entity-id="{{subList.id}}">\r\n                <td class="h-touristGroupInfo">\r\n                    <p>\r\n                        <span class="h-orderNumber">收客单号：{{subList.orderNumber}}</span>\r\n                        <span class="h-memberName">{{if subList.contactMember!=null}}{{subList.contactMember.name}}{{/if}}</span>\r\n                        <label class="h-peopleCount">(<span class="F-float F-count">{{subList.adultCount}}</span>大<span class="F-float F-count">{{subList.childCount}}</span>小)</label>\r\n                    </p>\r\n                    <p class="h-agencyName">{{if !!subList.partnerAgency}}{{subList.partnerAgency.travelAgencyName}}{{/if}}</p>\r\n                </td>\r\n                <td>{{subList.lineProduct.name}} {{if subList.subTouristGroupDetails != null}}\r\n                    <label class="lineProductArea" style="float: right;">\r\n                        <button class="btn btn-success btn-sm btn-white show" index="{{indexA}}">\r\n                            <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                            <!-- fa-minus -->\r\n                        </button>\r\n                    </label>\r\n                    {{/if}}\r\n                </td>\r\n                <td>{{if subList.customerType == 0}}散客{{else}}团体{{/if}}</td>\r\n                <td>{{subList.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td><span class="F-float F-count">{{subList.lineProduct.days}}</span></td>\r\n                <td><span class="F-float F-money">{{subList.currentNeedPayMoney}}</span></td>\r\n                <td>{{if subList.subOperatorUser != null}}{{subList.subOperatorUser.realName}}{{else}}-{{/if}}</td>\r\n\r\n                <td>{{if subList.subOperateTime != null}}{{subList.subOperateTime}}{{else}}-{{/if}}</td>\r\n                <td>{{if subList.status == 1}}未分团{{else if subList.status == 5}}已分段{{/if}}</td>\r\n                <td>\r\n                    <div class="hidden-sm hidden-xs btn-group">\r\n                        <a data-entity-id="{{subList.id}}" class="{{if subList.isEdit == 1}}gray{{else}}T-btn-subsection{{/if}} cursor R-right" data-right="1350001" title="{{if subList.isEdit == 1}}财务审核后已设置不可修改数据，请联系财务{{/if}}">\r\n							分段\r\n						</a>\r\n                        <a data-entity-id="{{subList.id}}" class="{{if subList.status == 5}}T-btn-subsection-revoke{{/if}} cursor R-right" data-right="1350002" {{if subList.status !=5 }}style="color:#bbb;" {{/if}}>\r\n                            <label class="padding-right20">|</label>\r\n                            撤销\r\n                        </a>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            {{if subList.subTouristGroupDetails != null}} {{each subList.subTouristGroupDetails as subDetails index}} {{if index == 0}}\r\n            <tr class="T-tr_{{indexA}}" style="display: none;">\r\n                <td rowspan="{{subList.subTouristGroupDetails.length}}"></td>\r\n                <td>{{subDetails.lineProductName}}</td>\r\n                <td>{{if subDetails.customerType == 0}}散客{{else}}团体{{/if}}</td>\r\n                <td>{{subDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td><span class="F-float F-count">{{subDetails.days}}</span></td>\r\n                <td>{{if subDetails.operateCurrentNeedPayMoney == 0}}-{{else}}本段现收{{/if}}</td>\r\n                <td colspan="2"></td>\r\n                <td>{{if subDetails.status == 1}} 未分团 {{else if subDetails.status == 2}} 已分团 {{else if subDetails.status == 3}} 已外转 {{else if subDetails.status == 4}} 已取消 {{else if subDetails.status == 5}} 已拆分 {{else if subDetails.status == 6}} 已内转 {{else}} 已发团 {{/if}}\r\n                </td>\r\n                <td rowspan="{{subList.subTouristGroupDetails.length}}" ></td>  \r\n            </tr>\r\n            {{else}}\r\n            <tr class="T-tr_{{indexA}}" style="display: none;">\r\n                <td>{{subDetails.lineProductName}}</td>\r\n                <td>{{if subDetails.customerType == 0}}散客{{else}}团体{{/if}}</td>\r\n                <td>{{subDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{subDetails.days}}</td>\r\n                <td>{{if subDetails.operateCurrentNeedPayMoney == 0}}-{{else}}本段现收{{/if}}</td>\r\n                <td colspan="2"></td>\r\n                <td>{{if subDetails.status == 1}} 未分团 {{else if subDetails.status == 2}} 已分团 {{else if subDetails.status == 3}} 已转客 {{else if subDetails.status == 4}} 已取消 {{else if subDetails.status == 5}} 已拆分 {{else if subDetails.status == 6}} 已内转 {{else}} 已发团 {{/if}}\r\n                </td>\r\n            </tr>\r\n            {{/if}} {{/each}} {{/if}} {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});