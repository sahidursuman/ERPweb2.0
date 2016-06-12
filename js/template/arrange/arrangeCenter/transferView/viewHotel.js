/*TMODJS:{"debug":true,"version":1,"md5":"4a3d78249f880225f21e3554a2461f58"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/transferView/viewHotel", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, outRemarkList = $data.outRemarkList, $escape = ($data.viewmian, 
            $data.$index, $utils.$escape), outHotelList = $data.outHotelList, $out = ($data.view, 
            "");
            return $out += '<div class="T-planbus globalAdd "> <h5 class="base-title">基本信息</h5> ', 
            $line = 3, $each(outRemarkList, function(viewmian) {
                $out += ' <table class="table table-striped table-bordered mar-b-20"> <tbody class="T-task-list T-arrange"> <tr> <td style="text-align: center;" rowspan="2" class="transit-startTime"> 中转单号：', 
                $line = 8, $out += $escape(viewmian.orderNumber), $out += " <br> ( 收客单号：", $line = 9, 
                $out += $escape(viewmian.tgOrderNumber), $out += ' ) </td> <td style="text-align: left;"> <input type="hidden" name="outRemarkId" value="', 
                $line = 12, $out += $escape(viewmian.outRemarkId), $out += '"> <label class="control-label mar-r-20">客户：', 
                $line = 13, $out += $escape(viewmian.partnerAgencyName), $out += ' </label> <label class="control-label">外联销售：', 
                $line = 14, $out += $escape(viewmian.outOPUserName), $out += '</label> <label class="control-label mar-r-20">线路名称：', 
                $line = 15, $out += $escape(viewmian.lineProductName), $out += '</label> <label class="control-label mar-r-20">出游日期：', 
                $line = 16, $out += $escape(viewmian.startTime), $out += '</label> <label class="control-label mar-r-20">人数：', 
                $line = 17, $out += $escape(viewmian.adultCount), $out += " 大 ", $line = 17, $out += $escape(viewmian.childCount), 
                $out += '小</label> <label class="control-label mar-r-20" data-contact="', $line = 18, 
                $out += $escape($helpers.stringify(viewmian.contactMemberList)), $out += '">游客联系人： ', 
                $line = 19, viewmian.contactMemberList && viewmian.contactMemberList.length && ($out += " <span>", 
                $line = 20, $out += $escape(viewmian.contactMemberList[0].contactMemberName), $out += '</span> <span class="mar-r-10">(', 
                $line = 21, $out += $escape(viewmian.contactMemberList[0].contactMemberPhoneNumber), 
                $out += ")</span> ", $line = 22, viewmian.contactMemberList.length > 1 && ($out += ' <a class="T-view-contact">查看更多</a> ', 
                $line = 24), $out += " ", $line = 25), $out += ' </label> </td> </tr> <tr> <td style="text-align: left;"> <label class="control-label mar-r-20">类型：', 
                $line = 31, 1 == viewmian.shuttleType ? ($out += "接团", $line = 31) : 2 == viewmian.shuttleType && ($out += "送团 ", 
                $line = 31), $out += '</label> <label class="control-label mar-r-20">班次：', $line = 32, 
                $out += $escape(viewmian.shift), $out += '</label> <label class="control-label mar-r-20">抵达时间：', 
                $line = 33, $out += $escape(viewmian.arriveTime), $out += '</label> <label class="control-label mar-r-20"> <b> 要求：', 
                $line = 34, $out += $escape(viewmian.require), $out += " </b></label> </td> </tr> </tbody> </table> ", 
                $line = 39;
            }), $out += ' <h5 class="base-title"><i class="fa fa-bed" aria-hidden="true"></i> 酒店安排</h5> <table class="table table-striped table-bordered table-hover "> <thead> <tr> <th class="th-border"><span class="necessary">*</span>入住日期</th> <th class="th-border"><span class="necessary">*</span>离店日期</th> <th class="th-border">星级</th> <th class="th-border"><span class="necessary">*</span>酒店</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border"><span class="necessary">*</span>房型</th> <th class="th-border">单价</th> <th class="th-border"><span class="necessary">*</span>数量</th> <th class="th-border">优惠</th> <th class="th-border">应付款</th> <th class="th-border">预付款</th> <th class="th-border">计划代收</th> <th class="th-border">备注</th> </tr> </thead> <tbody class="T-hotel-plan"> ', 
            $line = 61, $each(outHotelList, function(view) {
                $out += ' <tr data-entity-id="', $line = 62, $out += $escape(view.outHotelId), $out += '"> <td> ', 
                $line = 64, $out += $escape(view.checkInTime), $out += " </td> <td> ", $line = 67, 
                $out += $escape(view.checkOutTime), $out += " </td> <td> ", $line = 70, $out += $escape($helpers.getHotelLevelDesc(view.hotelLevel)), 
                $out += " </td> <td> ", $line = 73, $out += $escape(view.hotelName), $out += " </td> <td> ", 
                $line = 76, $out += $escape(view.hotelManagerName), $out += " </td> <td> ", $line = 79, 
                $out += $escape(view.hotelMobileNumber), $out += " </td> <td> ", $line = 82, $out += $escape(view.hotelRoomType), 
                $out += " </td> <td> ", $line = 85, $out += $escape(view.price), $out += " </td> <td> ", 
                $line = 88, $out += $escape(view.memberCount), $out += " </td> <td> ", $line = 91, 
                $out += $escape(view.reduceMoney), $out += " </td> <td> ", $line = 94, $out += $escape(view.needPayMoney), 
                $out += " </td> <td> ", $line = 97, $out += $escape(view.prePayMoney), $out += ' </td> <td> <a class="cursor T-collection" data-type="hotel">', 
                $line = 100, $out += $escape(view.collection), $out += "</a> </td> <td>", $line = 102, 
                $out += $escape(view.remark), $out += "</td> </tr>", $line = 103;
            }), $out += " </tbody> </table> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-planbus globalAdd ">\r\n<h5 class="base-title">基本信息</h5>\r\n{{each outRemarkList as viewmian}}\r\n<table class="table table-striped table-bordered mar-b-20">\r\n        <tbody class="T-task-list T-arrange">\r\n            <tr>\r\n                <td style="text-align: center;" rowspan="2" class="transit-startTime">\r\n                    中转单号：{{viewmian.orderNumber}} <br>\r\n                    ( 收客单号：{{viewmian.tgOrderNumber}} )\r\n                </td>\r\n                <td style="text-align: left;">\r\n                    <input type="hidden" name="outRemarkId" value="{{viewmian.outRemarkId}}">\r\n                    <label class="control-label mar-r-20">客户：{{viewmian.partnerAgencyName}} </label>\r\n                    <label class="control-label">外联销售：{{viewmian.outOPUserName}}</label>\r\n                    <label class="control-label mar-r-20">线路名称：{{viewmian.lineProductName}}</label>\r\n                    <label class="control-label mar-r-20">出游日期：{{viewmian.startTime}}</label>\r\n                    <label class="control-label mar-r-20">人数：{{viewmian.adultCount}} 大 {{viewmian.childCount}}小</label>\r\n                    <label class="control-label mar-r-20" data-contact="{{viewmian.contactMemberList | stringify}}">游客联系人： \r\n                    {{if !!viewmian.contactMemberList && viewmian.contactMemberList.length}}\r\n                        <span>{{viewmian.contactMemberList[0].contactMemberName}}</span>\r\n                        <span class="mar-r-10">({{viewmian.contactMemberList[0].contactMemberPhoneNumber}})</span> \r\n                        {{ if viewmian.contactMemberList.length > 1}}\r\n                            <a class="T-view-contact">查看更多</a> \r\n                        {{/if}}\r\n                    {{/if}}\r\n                    </label>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td style="text-align: left;">\r\n                    <label class="control-label mar-r-20">类型：{{if viewmian.shuttleType == 1}}接团{{else if viewmian.shuttleType == 2}}送团 {{/if}}</label>\r\n                    <label class="control-label mar-r-20">班次：{{viewmian.shift}}</label>\r\n                    <label class="control-label mar-r-20">抵达时间：{{viewmian.arriveTime}}</label>\r\n                    <label class="control-label mar-r-20"> <b> 要求：{{viewmian.require}} </b></label>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n{{/each}}\r\n<h5 class="base-title"><i class="fa fa-bed" aria-hidden="true"></i> 酒店安排</h5>\r\n    <table class="table table-striped table-bordered table-hover ">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border"><span class="necessary">*</span>入住日期</th>\r\n                <th class="th-border"><span class="necessary">*</span>离店日期</th>\r\n                <th class="th-border">星级</th>\r\n                <th class="th-border"><span class="necessary">*</span>酒店</th>\r\n                <th class="th-border">联系人</th>\r\n                <th class="th-border">联系电话</th>\r\n                <th class="th-border"><span class="necessary">*</span>房型</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border"><span class="necessary">*</span>数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">应付款</th>\r\n                <th class="th-border">预付款</th>\r\n                <th class="th-border">计划代收</th>\r\n                <th class="th-border">备注</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-hotel-plan">\r\n            {{each outHotelList as view}}\r\n            <tr data-entity-id="{{view.outHotelId}}">\r\n                <td>\r\n                    {{view.checkInTime}}\r\n                </td>\r\n                 <td>\r\n                    {{view.checkOutTime}}\r\n                </td>\r\n                <td>\r\n                   {{view.hotelLevel  | getHotelLevelDesc}}\r\n                </td>\r\n                <td>\r\n                    {{view.hotelName}}\r\n                </td>\r\n                <td>\r\n                    {{view.hotelManagerName}}\r\n                </td>\r\n                <td>\r\n                    {{view.hotelMobileNumber}}\r\n                </td>\r\n                <td>\r\n                    {{view.hotelRoomType}}\r\n                </td>\r\n                <td>\r\n                    {{view.price}}\r\n                </td>\r\n                <td>\r\n                    {{view.memberCount}}\r\n                </td>\r\n                <td>\r\n                    {{view.reduceMoney}}\r\n                </td>\r\n                <td>\r\n                    {{view.needPayMoney}}\r\n                </td>\r\n                <td>\r\n                    {{view.prePayMoney}}\r\n                </td>\r\n                <td>\r\n                    <a class="cursor T-collection" data-type="hotel">{{view.collection}}</a>\r\n                </td>\r\n                <td>{{view.remark}}</td>\r\n            </tr>{{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});