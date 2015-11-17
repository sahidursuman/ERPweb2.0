/*TMODJS:{"debug":true,"version":322,"md5":"b478b2b74e8ba92ee334ef945c07e5d9"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/quality", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, tripPlan = $data.tripPlan, $each = $utils.$each, serviceCount = ($data.detail, 
            $data.index, $data.serviceCount), adviceList = $data.adviceList, $out = ($data.advice, 
            $data.$index, "");
            return $out += '<div class="T-countQuality"> <table class="table table-striped table-bordered table-hover"> <tr> <td class="th-border">团号</td> <td class="th-border">出团日期</td> <td class="th-border">完团日期</td> <td class="th-border">线路产品</td> <td class="th-border">人数</td> <td class="th-border">团队人数</td> <td class="th-border">导游</td> <td class="th-border">车牌号</td> <td class="th-border">司机</td> <td class="th-border">创建人</td> <td class="th-border">创建日期</td> </tr> <tr data-entity-id="', 
            $line = 17, $out += $escape(tripPlan.id), $out += '"> <td style="vertical-align:middle" rowspan="', 
            $line = 18, $out += $escape(tripPlan.tripPlanDetails.length), $out += '">', $line = 18, 
            $out += $escape(tripPlan.tripNumber), $out += '</td> <td style="vertical-align:middle" rowspan="', 
            $line = 19, $out += $escape(tripPlan.tripPlanDetails.length), $out += '">', $line = 19, 
            $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), $out += '</td> <td style="vertical-align:middle" rowspan="', 
            $line = 20, $out += $escape(tripPlan.tripPlanDetails.length), $out += '">', $line = 20, 
            $out += $escape($helpers.dateFormat(tripPlan.endTime, "yyyy-MM-dd")), $out += "</td> ", 
            $line = 21, tripPlan.tripPlanDetails.length > 0 ? ($out += " ", $line = 22, $each(tripPlan.tripPlanDetails, function(detail, index) {
                $out += " ", $line = 23, 0 == index && ($out += " <td>", $line = 24, $out += $escape(detail.lineProductName), 
                $out += "</td> <td>", $line = 25, $out += $escape(detail.sumMemberCount), $out += "</td> ", 
                $line = 26), $out += " ", $line = 27;
            }), $out += " ", $line = 28) : ($out += " <td>", $line = 29, $out += $escape(tripPlan.lineProduct.name), 
            $out += "</td> <td>", $line = 30, $out += $escape(tripPlan.touristAdultCount + tripPlan.touristChildCount), 
            $out += "</td> ", $line = 31), $out += ' <td style="vertical-align:middle" rowspan="', 
            $line = 32, $out += $escape(tripPlan.tripPlanDetails.length), $out += '">', $line = 32, 
            $out += $escape(tripPlan.touristAdultCount + tripPlan.touristChildCount), $out += '</td> <td style="vertical-align:middle" rowspan="', 
            $line = 33, $out += $escape(tripPlan.tripPlanDetails.length), $out += '">', $line = 33, 
            null == tripPlan.guide ? ($out += "-", $line = 33) : ($line = 33, $out += $escape(tripPlan.guide.realname), 
            $line = 33), $out += '</td> <td style="vertical-align:middle" rowspan="', $line = 34, 
            $out += $escape(tripPlan.tripPlanDetails.length), $out += '">', $line = 34, null == tripPlan.bus ? ($out += "-", 
            $line = 34) : ($line = 34, $out += $escape(tripPlan.bus.licenseNumber), $line = 34), 
            $out += '</td> <td style="vertical-align:middle" rowspan="', $line = 35, $out += $escape(tripPlan.tripPlanDetails.length), 
            $out += '">', $line = 35, null == tripPlan.driver ? ($out += "-", $line = 35) : ($line = 35, 
            $out += $escape(tripPlan.driver.name), $line = 35), $out += '</td> <td style="vertical-align:middle" rowspan="', 
            $line = 36, $out += $escape(tripPlan.tripPlanDetails.length), $out += '">', $line = 36, 
            null == tripPlan.user ? ($out += "-", $line = 36) : ($line = 36, $out += $escape(tripPlan.user.realName), 
            $line = 36), $out += '</td> <td style="vertical-align:middle" rowspan="', $line = 37, 
            $out += $escape(tripPlan.tripPlanDetails.length), $out += '">', $line = 37, $out += $escape($helpers.dateFormat(tripPlan.createTime, "yyyy-MM-dd hh:mm:ss")), 
            $out += "</td> </tr> ", $line = 39, $each(tripPlan.tripPlanDetails, function(detail, index) {
                $out += " ", $line = 40, index > 0 && ($out += " <tr> <td>", $line = 42, $out += $escape(detail.lineProductName), 
                $out += "</td> <td>", $line = 43, $out += $escape(detail.sumMemberCount), $out += "</td> </tr> ", 
                $line = 45), $out += " ", $line = 46;
            }), $out += ' </table> <div class="pull-left col-sm-4" > <div class="title-size"><i class="fa fa-comments"></i> 游客评价</div> <table class="table table-striped table-hover margin-top"> <tr> <td></td> <td>非常满意</td> <td>满意</td> <td>一般满意</td> <td>不满意</td> </tr> <tr> <td>导游服务</td> <td>', 
            $line = 60, $out += $escape(serviceCount.guideService.veryGood), $out += "</td> <td>", 
            $line = 61, $out += $escape(serviceCount.guideService.good), $out += "</td> <td>", 
            $line = 62, $out += $escape(serviceCount.guideService.notBad), $out += "</td> <td>", 
            $line = 63, $out += $escape(serviceCount.guideService.bad), $out += "</td> </tr> <tr> <td>司机服务</td> <td>", 
            $line = 67, $out += $escape(serviceCount.driverService.veryGood), $out += "</td> <td>", 
            $line = 68, $out += $escape(serviceCount.driverService.good), $out += "</td> <td>", 
            $line = 69, $out += $escape(serviceCount.guideService.notBad), $out += "</td> <td>", 
            $line = 70, $out += $escape(serviceCount.driverService.bad), $out += "</td> </tr> <tr> <td>线路安排</td> <td>", 
            $line = 74, $out += $escape(serviceCount.lineService.veryGood), $out += "</td> <td>", 
            $line = 75, $out += $escape(serviceCount.lineService.good), $out += "</td> <td>", 
            $line = 76, $out += $escape(serviceCount.lineService.notBad), $out += "</td> <td>", 
            $line = 77, $out += $escape(serviceCount.lineService.bad), $out += "</td> </tr> <tr> <td>住宿安排</td> <td>", 
            $line = 81, $out += $escape(serviceCount.hotelService.veryGood), $out += "</td> <td>", 
            $line = 82, $out += $escape(serviceCount.hotelService.good), $out += "</td> <td>", 
            $line = 83, $out += $escape(serviceCount.hotelService.notBad), $out += "</td> <td>", 
            $line = 84, $out += $escape(serviceCount.hotelService.bad), $out += '</td> </tr> </table> </div> <div style="height: 25px"></div> <div class="col-sm-7 pull-right border margin-top" > <div class="col-sm-11 pull-left"> ', 
            $line = 91, $each(adviceList, function(advice) {
                $out += ' <p style="line-height: 20px"> ', $line = 93, $out += $escape(advice), 
                $out += " </p> ", $line = 95;
            }), $out += " </div> </div> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-countQuality">\r\n    <table class="table table-striped table-bordered table-hover">\r\n        <tr>\r\n            <td class="th-border">团号</td>\r\n            <td class="th-border">出团日期</td>\r\n            <td class="th-border">完团日期</td>\r\n            <td class="th-border">线路产品</td>\r\n            <td class="th-border">人数</td>\r\n            <td class="th-border">团队人数</td>\r\n            <td class="th-border">导游</td>\r\n            <td class="th-border">车牌号</td>\r\n            <td class="th-border">司机</td>\r\n            <td class="th-border">创建人</td>\r\n            <td class="th-border">创建日期</td>\r\n        </tr>\r\n        \r\n        <tr data-entity-id="{{tripPlan.id}}">\r\n            <td style="vertical-align:middle" rowspan="{{tripPlan.tripPlanDetails.length}}">{{tripPlan.tripNumber}}</td> \r\n            <td style="vertical-align:middle" rowspan="{{tripPlan.tripPlanDetails.length}}">{{tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n            <td style="vertical-align:middle" rowspan="{{tripPlan.tripPlanDetails.length}}">{{tripPlan.endTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n            {{if tripPlan.tripPlanDetails.length > 0}}\r\n            {{each tripPlan.tripPlanDetails as detail index}}\r\n            {{if index == 0}}\r\n            <td>{{detail.lineProductName}}</td>\r\n            <td>{{detail.sumMemberCount}}</td>\r\n            {{/if}}\r\n            {{/each}}\r\n            {{else}}\r\n            <td>{{tripPlan.lineProduct.name}}</td>\r\n            <td>{{tripPlan.touristAdultCount+tripPlan.touristChildCount}}</td>\r\n            {{/if}}\r\n            <td style="vertical-align:middle" rowspan="{{tripPlan.tripPlanDetails.length}}">{{tripPlan.touristAdultCount+tripPlan.touristChildCount}}</td>\r\n            <td style="vertical-align:middle" rowspan="{{tripPlan.tripPlanDetails.length}}">{{if tripPlan.guide == null}}-{{else}}{{tripPlan.guide.realname}}{{/if}}</td>\r\n            <td style="vertical-align:middle" rowspan="{{tripPlan.tripPlanDetails.length}}">{{if tripPlan.bus == null}}-{{else}}{{tripPlan.bus.licenseNumber}}{{/if}}</td>\r\n            <td style="vertical-align:middle" rowspan="{{tripPlan.tripPlanDetails.length}}">{{if tripPlan.driver == null}}-{{else}}{{tripPlan.driver.name}}{{/if}}</td>\r\n            <td style="vertical-align:middle" rowspan="{{tripPlan.tripPlanDetails.length}}">{{if tripPlan.user == null}}-{{else}}{{tripPlan.user.realName}}{{/if}}</td>\r\n            <td style="vertical-align:middle" rowspan="{{tripPlan.tripPlanDetails.length}}">{{tripPlan.createTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}</td>\r\n        </tr>\r\n        {{each tripPlan.tripPlanDetails as detail index}}\r\n        {{if index > 0}}\r\n        <tr>\r\n            <td>{{detail.lineProductName}}</td>\r\n            <td>{{detail.sumMemberCount}}</td>\r\n        </tr>\r\n        {{/if}}\r\n        {{/each}}\r\n    </table>\r\n    <div class="pull-left col-sm-4" >\r\n        <div class="title-size"><i class="fa fa-comments"></i> 游客评价</div>\r\n        <table class="table  table-striped table-hover margin-top">\r\n            <tr>\r\n                <td></td>\r\n                <td>非常满意</td>\r\n                <td>满意</td>\r\n                <td>一般满意</td>\r\n                <td>不满意</td>\r\n            </tr>\r\n            <tr>\r\n                <td>导游服务</td>\r\n                <td>{{serviceCount.guideService.veryGood}}</td>\r\n                <td>{{serviceCount.guideService.good}}</td>\r\n                <td>{{serviceCount.guideService.notBad}}</td>\r\n                <td>{{serviceCount.guideService.bad}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td>司机服务</td>\r\n                <td>{{serviceCount.driverService.veryGood}}</td>\r\n                <td>{{serviceCount.driverService.good}}</td>\r\n                <td>{{serviceCount.guideService.notBad}}</td>\r\n                <td>{{serviceCount.driverService.bad}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td>线路安排</td>\r\n                <td>{{serviceCount.lineService.veryGood}}</td>\r\n                <td>{{serviceCount.lineService.good}}</td>\r\n                <td>{{serviceCount.lineService.notBad}}</td>\r\n                <td>{{serviceCount.lineService.bad}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td>住宿安排</td>\r\n                <td>{{serviceCount.hotelService.veryGood}}</td>\r\n                <td>{{serviceCount.hotelService.good}}</td>\r\n                <td>{{serviceCount.hotelService.notBad}}</td>\r\n                <td>{{serviceCount.hotelService.bad}}</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div style="height: 25px"></div>\r\n    <div class="col-sm-7 pull-right border margin-top" >\r\n        <div class="col-sm-11 pull-left">\r\n            {{each adviceList as advice}}\r\n                <p style="line-height: 20px">\r\n                    {{advice}}\r\n                </p>\r\n            {{/each}}\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});