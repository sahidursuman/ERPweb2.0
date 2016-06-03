/*TMODJS:{"debug":true,"version":27,"md5":"0b8fa0c3d370c4ae5b4ff780f4611f2a"}*/
define(function(require) {
    return require("/js/template/template")("arrange/transitPlan/view/hotelview", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, outRemark = $data.outRemark, $each = $utils.$each, outHotelList = $data.outHotelList, $out = ($data.view, 
            $data.$index, "");
            return $out += '<div class="T-planbus globalAdd "> <div class="form-group"> <label class="control-label mar-r-20">中转单号：', 
            $line = 3, $out += $escape(outRemark.orderNumber), $out += '</label> <label class="control-label mar-r-20">人数：', 
            $line = 4, $out += $escape(outRemark.adultCount), $out += " 大 ", $line = 4, $out += $escape(outRemark.childCount), 
            $out += '小</label> <label class="control-label mar-r-20">抵达时间：', $line = 5, $out += $escape(outRemark.arriveTime), 
            $out += '</label> <label class="control-label mar-r-20">游客联系人：', $line = 6, $out += $escape(outRemark.contactMemberName), 
            $out += '</label> <label class="control-label mar-r-20">线路名称：', $line = 7, $out += $escape(outRemark.lineProductName), 
            $out += '</label> <label class="control-label">外联销售：', $line = 8, $out += $escape(outRemark.outOPUserName), 
            $out += '</label> </div> <div class="form-group"> <label class="control-label mar-r-20">客户名：', 
            $line = 11, $out += $escape(outRemark.partnerAgencyName), $out += ' </label> <label class="control-label mar-r-20">要求：', 
            $line = 12, $out += $escape(outRemark.require), $out += '</label> <label class="control-label mar-r-20">班次：', 
            $line = 13, $out += $escape(outRemark.shift), $out += '</label> <label class="control-label mar-r-20">类型：', 
            $line = 14, 1 == outRemark.shuttleType ? ($out += "接团", $line = 14) : 2 == outRemark.shuttleType && ($out += "送团 ", 
            $line = 14), $out += '</label> <label class="control-label mar-r-20">出游日期：', $line = 15, 
            $out += $escape(outRemark.startTime), $out += '</label> <label class="control-label">收客单号：', 
            $line = 16, $out += $escape(outRemark.tgOrderNumber), $out += '</label> </div> <table class="table table-striped table-bordered table-hover "> <thead> <tr> <th class="th-border"><span class="necessary">*</span>入住日期</th> <th class="th-border"><span class="necessary">*</span>离店日期</th> <th class="th-border">星级</th> <th class="th-border"><span class="necessary">*</span>酒店</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border"><span class="necessary">*</span>房型</th> <th class="th-border">单价</th> <th class="th-border"><span class="necessary">*</span>数量</th> <th class="th-border">优惠</th> <th class="th-border">应付款</th> <th class="th-border">预付款</th> <th class="th-border">备注</th> </tr> </thead> <tbody class="T-hotel-plan"> ', 
            $line = 37, $each(outHotelList, function(view) {
                $out += ' <tr data-entity-id="', $line = 38, $out += $escape(view.id), $out += '"> <td> ', 
                $line = 40, $out += $escape(view.checkInTime), $out += " </td> <td> ", $line = 43, 
                $out += $escape(view.checkOutTime), $out += ' </td> <td> <select class="tripPlanHotelStar" name="hotelLevel" readonly="readonly"> <option value="1" ', 
                $line = 47, 1 == view.hotelLevel && ($out += 'selected="selected"', $line = 47), 
                $out += '>三星以下</option> <option value="2" ', $line = 48, 2 == view.hotelLevel && ($out += 'selected="selected"', 
                $line = 48), $out += '>三星</option> <option value="3" ', $line = 49, 3 == view.hotelLevel && ($out += 'selected="selected"', 
                $line = 49), $out += '>准四星</option> <option value="4" ', $line = 50, 4 == view.hotelLevel && ($out += 'selected="selected"', 
                $line = 50), $out += '>四星</option> <option value="5" ', $line = 51, 5 == view.hotelLevel && ($out += 'selected="selected"', 
                $line = 51), $out += '>准五星</option> <option value="6" ', $line = 52, 6 == view.hotelLevel && ($out += 'selected="selected"', 
                $line = 52), $out += '>五星</option> <option value="7" ', $line = 53, 7 == view.hotelLevel && ($out += 'selected="selected"', 
                $line = 53), $out += ">五星以上</option> </select> </td> <td> ", $line = 57, $out += $escape(view.hotelName), 
                $out += " </td> <td> ", $line = 60, $out += $escape(view.hotelManagerName), $out += " </td> <td> ", 
                $line = 63, $out += $escape(view.hotelMobileNumber), $out += " </td> <td> ", $line = 66, 
                $out += $escape(view.hotelRoomType), $out += " </td> <td> ", $line = 69, $out += $escape(view.price), 
                $out += " </td> <td> ", $line = 72, $out += $escape(view.memberCount), $out += " </td> <td> ", 
                $line = 75, $out += $escape(view.reduceMoney), $out += " </td> <td> ", $line = 78, 
                $out += $escape(view.needPayMoney), $out += " </td> <td> ", $line = 81, $out += $escape(view.prePayMoney), 
                $out += " </td> <td>", $line = 83, $out += $escape(view.remark), $out += "</td> </tr>", 
                $line = 84;
            }), $out += " </tbody> </table> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-planbus globalAdd ">\r\n    <div class="form-group"> \r\n        <label class="control-label mar-r-20">中转单号：{{outRemark.orderNumber}}</label>\r\n        <label class="control-label mar-r-20">人数：{{outRemark.adultCount}} 大 {{outRemark.childCount}}小</label>\r\n        <label class="control-label mar-r-20">抵达时间：{{outRemark.arriveTime}}</label> \r\n        <label class="control-label mar-r-20">游客联系人：{{outRemark.contactMemberName}}</label> \r\n        <label class="control-label mar-r-20">线路名称：{{outRemark.lineProductName}}</label>\r\n        <label class="control-label">外联销售：{{outRemark.outOPUserName}}</label> \r\n    </div>\r\n    <div class="form-group"> \r\n        <label class="control-label mar-r-20">客户名：{{outRemark.partnerAgencyName}} </label>\r\n        <label class="control-label mar-r-20">要求：{{outRemark.require}}</label> \r\n        <label class="control-label mar-r-20">班次：{{outRemark.shift}}</label> \r\n        <label class="control-label mar-r-20">类型：{{if outRemark.shuttleType == 1}}接团{{else if outRemark.shuttleType == 2}}送团 {{/if}}</label>\r\n        <label class="control-label mar-r-20">出游日期：{{outRemark.startTime}}</label>\r\n        <label class="control-label">收客单号：{{outRemark.tgOrderNumber}}</label> \r\n    </div>\r\n    <table class="table table-striped table-bordered table-hover ">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border"><span class="necessary">*</span>入住日期</th>\r\n                <th class="th-border"><span class="necessary">*</span>离店日期</th>\r\n                <th class="th-border">星级</th>\r\n                <th class="th-border"><span class="necessary">*</span>酒店</th>\r\n                <th class="th-border">联系人</th>\r\n                <th class="th-border">联系电话</th>\r\n                <th class="th-border"><span class="necessary">*</span>房型</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border"><span class="necessary">*</span>数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">应付款</th>\r\n                <th class="th-border">预付款</th>\r\n                <th class="th-border">备注</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-hotel-plan">\r\n            {{each outHotelList as view}}\r\n            <tr data-entity-id="{{view.id}}">\r\n                <td>\r\n                    {{view.checkInTime}}\r\n                </td>\r\n                 <td>\r\n                    {{view.checkOutTime}}\r\n                </td>\r\n                <td>\r\n                    <select class="tripPlanHotelStar" name="hotelLevel" readonly="readonly">\r\n                        <option value="1" {{if view.hotelLevel == 1}}selected="selected"{{/if}}>三星以下</option>\r\n                        <option value="2" {{if view.hotelLevel == 2}}selected="selected"{{/if}}>三星</option>\r\n                        <option value="3" {{if view.hotelLevel == 3}}selected="selected"{{/if}}>准四星</option>\r\n                        <option value="4" {{if view.hotelLevel == 4}}selected="selected"{{/if}}>四星</option>\r\n                        <option value="5" {{if view.hotelLevel == 5}}selected="selected"{{/if}}>准五星</option>\r\n                        <option value="6" {{if view.hotelLevel == 6}}selected="selected"{{/if}}>五星</option>\r\n                        <option value="7" {{if view.hotelLevel == 7}}selected="selected"{{/if}}>五星以上</option>\r\n                    </select>\r\n                </td>\r\n                <td>\r\n                    {{view.hotelName}}\r\n                </td>\r\n                <td>\r\n                    {{view.hotelManagerName}}\r\n                </td>\r\n                <td>\r\n                    {{view.hotelMobileNumber}}\r\n                </td>\r\n                <td>\r\n                    {{view.hotelRoomType}}\r\n                </td>\r\n                <td>\r\n                    {{view.price}}\r\n                </td>\r\n                <td>\r\n                    {{view.memberCount}}\r\n                </td>\r\n                <td>\r\n                    {{view.reduceMoney}}\r\n                </td>\r\n                <td>\r\n                    {{view.needPayMoney}}\r\n                </td>\r\n                <td>\r\n                    {{view.prePayMoney}}\r\n                </td>\r\n                <td>{{view.remark}}</td>\r\n            </tr>{{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});