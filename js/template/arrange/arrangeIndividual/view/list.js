/*TMODJS:{"debug":true,"version":212,"md5":"034c01f8d258af31f4b13b2a7e1948d8"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeIndividual/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, touristGroupList = $data.touristGroupList, $escape = ($data.touristGroupL, 
            $data.$index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover globalAdd T-showHighLight table-fixed"> <colgroup> <col style="width:75px;"> <col style="width: 300px;"> <col style="width:50px"> <col style="width:90px"> <col style="width:60px"> <col style="width:100px"> <col style="width:120px;"> <col style="width:100px;"> <col style="width:50px;"> <col style="width:100px;"> <col style="width:60px;"> <col style="width:60px;"> <col style="width:50px;"> </colgroup> <thead> <tr class="bg-blur T-tr-fixed"> <th><label class="pos-rel"> <input type="checkbox" class="ace T-checkedAll"> <span class="lbl"></span> 选择</label></th> <th>收客信息</th> <th>天数</th> <th>出游日期</th> <th>联系人</th> <th>联系电话</th> <th>人数</th> <th>客源地</th> <th>年龄</th> <th>备注</th> <th>接团班次</th> <th>接团住宿</th> <th>操作</th> </tr> </thead> <tbody class="T-arrageVisitor-list"> ', 
            $line = 35, $each(touristGroupList, function(touristGroupL) {
                $out += ' <tr data-value="', $line = 36, $out += $escape(touristGroupL.id), $out += '" data-entity-id="', 
                $line = 36, touristGroupL.lineProduct && ($line = 36, $out += $escape(touristGroupL.lineProduct.id), 
                $line = 36), $out += '" data-entity-partnerAgency="', $line = 36, touristGroupL.partnerAgency && ($out += " ", 
                $line = 36, $out += $escape(touristGroupL.partnerAgency.travelAgencyName), $line = 36), 
                $out += '" data-entity-name="', $line = 36, touristGroupL.lineProduct && ($line = 36, 
                $out += $escape(touristGroupL.lineProduct.name), $line = 36), $out += '" data-entity-type="', 
                $line = 36, touristGroupL.lineProduct && ($line = 36, $out += $escape(touristGroupL.lineProduct.type), 
                $line = 36), $out += '" data-entity-days="', $line = 36, touristGroupL.lineProduct && ($line = 36, 
                $out += $escape(touristGroupL.lineProduct.days), $line = 36), $out += '" data-entity-startTime="', 
                $line = 36, $out += $escape(touristGroupL.startTime), $out += '" data-entity-memberCount="', 
                $line = 36, $out += $escape(touristGroupL.adultCount + touristGroupL.childCount), 
                $out += '" class="tr-', $line = 36, touristGroupL.lineProduct && ($line = 36, $out += $escape(touristGroupL.lineProduct.id), 
                $line = 36), $out += "-", $line = 36, $out += $escape(touristGroupL.startTime), 
                $out += '" data-entity-adultCount="', $line = 36, $out += $escape(touristGroupL.adultCount), 
                $out += '" data-entity-childCount="', $line = 36, $out += $escape(touristGroupL.childCount), 
                $out += '"> <td style="vertical-align:middle;padding: 5px;"> <label class="pos-rel"> <input type="checkbox" class="ace T-touristGroupMergeCheckBox T-cheked"> <span class="lbl"></span> </label> </td> <td class="h-touristGroupInfo"> <p class="h-orderNumber">收客单号：', 
                $line = 42, $out += $escape(touristGroupL.orderNumber), $out += "</p> ", $line = 44, 
                touristGroupL.lineProduct && ($out += ' <p class="h-lineName" title="', $line = 45, 
                touristGroupL.lineProduct && ($line = 45, $out += $escape(touristGroupL.lineProduct.name), 
                $line = 45), $out += '"> <span>', $line = 46, $out += $escape(touristGroupL.lineProduct.name), 
                $out += "</span> <span>(", $line = 47, $out += $escape(touristGroupL.lineProduct.type), 
                $out += ")</span> </p> ", $line = 49), $out += ' <p class="h-orderNumber">', $line = 50, 
                touristGroupL.partnerAgency && ($line = 50, $out += $escape(touristGroupL.partnerAgency.travelAgencyName), 
                $line = 50), $out += '</p> </td> <td class="F-float F-count" style="vertical-align:middle">', 
                $line = 52, touristGroupL.lineProduct && ($line = 52, $out += $escape(touristGroupL.lineProduct.days), 
                $line = 52), $out += '</td> <td style="vertical-align:middle">', $line = 53, $out += $escape($helpers.dateFormat(touristGroupL.startTime, "yyyy-MM-dd")), 
                $out += "</td> ", $line = 54, touristGroupL.contactMember ? ($out += ' <td style="vertical-align:middle">', 
                $line = 55, $out += $escape(touristGroupL.contactMember.name), $out += '</td> <td style="vertical-align:middle">', 
                $line = 56, $out += $escape(touristGroupL.contactMember.mobileNumber), $out += "</td> ", 
                $line = 57) : ($out += " <td></td> <td></td> ", $line = 60), $out += ' <td class="F-float F-count" style="vertical-align:middle">', 
                $line = 61, $out += $escape(touristGroupL.adultCount), $out += " 大 ", $line = 61, 
                $out += $escape(touristGroupL.childCount), $out += '小</td> <td style="vertical-align:middle">', 
                $line = 62, $out += $escape(touristGroupL.areaData), $out += '</td> <td style="vertical-align:middle">', 
                $line = 63, $out += $escape(touristGroupL.ageData), $out += '</td> <td class="T-ctrl-tip" title="', 
                $line = 64, $out += $escape(touristGroupL.remark), $out += '" style="vertical-align:middle"><span style="height: 35px">', 
                $line = 64, $out += $escape(touristGroupL.remark), $out += '</span></td> <td></td> <td></td> <td style="vertical-align:middle"><a class="cursor T-arrageVisitor-view T-action"> 查看 </a></td> </tr> ', 
                $line = 69;
            }), $out += ' </tbody> </table> <div class="row"> <div class="col-xs-12"> </div> </div> <div class="T-arrangeTouristMergeList"> <div> <button class="btn btn-sm btn-success T-start-touristGroup-merge R-right" data-right="1130004"> <i class="ace-icon fa fa-user-plus"></i> 开始并团 </button> <label class=" mar-r-10" style="color:#D2691E; ">已选人数 <span class="T-chosenAdultAndChildCount" style="color:#D2691E;">大人 0 小孩 0 </span></label> </div> </div> <div class="row pageMode"> <div class="col-xs-5"> <small>共计 ', 
            $line = 87, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-7"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover globalAdd T-showHighLight table-fixed">\r\n    <colgroup>\r\n        <col style="width:75px;">\r\n        <col style="width: 300px;">\r\n        <col style="width:50px">\r\n        <col style="width:90px">\r\n        <col style="width:60px">\r\n        <col style="width:100px">\r\n        <col style="width:120px;">\r\n        <col style="width:100px;">\r\n        <col style="width:50px;">\r\n        <col style="width:100px;">\r\n        <col style="width:60px;">\r\n        <col style="width:60px;">\r\n        <col style="width:50px;">\r\n    </colgroup>\r\n    <thead>\r\n        <tr class="bg-blur T-tr-fixed">\r\n            <th><label class="pos-rel"> <input type="checkbox" class="ace T-checkedAll"> <span class="lbl"></span> 选择</label></th>\r\n            <th>收客信息</th>\r\n            <th>天数</th>\r\n            <th>出游日期</th>\r\n            <th>联系人</th>\r\n            <th>联系电话</th>\r\n            <th>人数</th>\r\n            <th>客源地</th>\r\n            <th>年龄</th>\r\n            <th>备注</th>\r\n            <th>接团班次</th>\r\n            <th>接团住宿</th>\r\n            <th>操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-arrageVisitor-list">\r\n        {{each touristGroupList as touristGroupL}}\r\n        <tr data-value="{{touristGroupL.id}}" data-entity-id="{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.id}}{{/if}}" data-entity-partnerAgency="{{if !!touristGroupL.partnerAgency}} {{touristGroupL.partnerAgency.travelAgencyName}}{{/if}}" data-entity-name="{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.name}}{{/if}}" data-entity-type="{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.type}}{{/if}}" data-entity-days="{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.days}}{{/if}}" data-entity-startTime="{{touristGroupL.startTime}}" data-entity-memberCount="{{touristGroupL.adultCount +touristGroupL.childCount}}" class="tr-{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.id}}{{/if}}-{{touristGroupL.startTime}}" data-entity-adultCount="{{touristGroupL.adultCount}}" data-entity-childCount="{{touristGroupL.childCount}}">\r\n            <td style="vertical-align:middle;padding: 5px;">\r\n                <label class="pos-rel">\r\n                    <input type="checkbox" class="ace T-touristGroupMergeCheckBox T-cheked"> <span class="lbl"></span> </label>\r\n            </td>\r\n            <td class="h-touristGroupInfo">\r\n                <p class="h-orderNumber">收客单号：{{touristGroupL.orderNumber}}</p>\r\n               \r\n                {{if !!touristGroupL.lineProduct}}\r\n                <p class="h-lineName" title="{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.name}}{{/if}}">\r\n                    <span>{{touristGroupL.lineProduct.name}}</span>\r\n                    <span>({{touristGroupL.lineProduct.type}})</span>\r\n                </p>\r\n                {{/if}}\r\n                <p class="h-orderNumber">{{if !!touristGroupL.partnerAgency}}{{touristGroupL.partnerAgency.travelAgencyName}}{{/if}}</p>\r\n            </td>\r\n            <td class="F-float F-count" style="vertical-align:middle">{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.days}}{{/if}}</td>\r\n            <td style="vertical-align:middle">{{touristGroupL.startTime | dateFormat: \'yyyy-MM-dd\' }}</td>\r\n            {{if !!touristGroupL.contactMember}}\r\n            <td style="vertical-align:middle">{{touristGroupL.contactMember.name}}</td>\r\n            <td style="vertical-align:middle">{{touristGroupL.contactMember.mobileNumber}}</td>\r\n            {{else}}\r\n            <td></td>\r\n            <td></td>\r\n            {{/if}}\r\n            <td class="F-float F-count" style="vertical-align:middle">{{touristGroupL.adultCount}} 大 {{touristGroupL.childCount}}小</td>\r\n            <td style="vertical-align:middle">{{touristGroupL.areaData}}</td>\r\n            <td style="vertical-align:middle">{{touristGroupL.ageData}}</td>\r\n            <td class="T-ctrl-tip" title="{{touristGroupL.remark}}" style="vertical-align:middle"><span style="height: 35px">{{touristGroupL.remark}}</span></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td style="vertical-align:middle"><a class="cursor T-arrageVisitor-view T-action"> 查看 </a></td>\r\n        </tr>\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="row">\r\n    <div class="col-xs-12">\r\n    </div>\r\n</div>\r\n<div class="T-arrangeTouristMergeList">\r\n    <div>\r\n        <button class="btn btn-sm btn-success T-start-touristGroup-merge R-right" data-right="1130004">\r\n            <i class="ace-icon fa fa-user-plus"></i> 开始并团\r\n        </button>\r\n\r\n        <label class=" mar-r-10" style="color:#D2691E; ">已选人数 <span class="T-chosenAdultAndChildCount" style="color:#D2691E;">大人 0 小孩 0 </span></label>\r\n    </div>\r\n</div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-5">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-7">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});