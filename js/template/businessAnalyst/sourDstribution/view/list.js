/*TMODJS:{"debug":true,"version":590,"md5":"fd4971d602b300aadc38d34d74b22b7a"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/sourDstribution/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, areaGroupList = $data.areaGroupList, $out = ($data.areaGrL, 
            $data.$index, "");
            return $out += '<div class="search-tripPlanContainer"> <div class="row form-horizontal T-search-area search-area" style="padding-left:5px; "> <label class="pull-left text-right control-label no-padding-right">开始日期 </label> <div class="col-xs-1"> <input type="text" name="startDate" class="col-xs-12 datepicker" placeholder="开始日期" value="', 
            $line = 5, $out += $escape(searchParam.startDate), $out += '" /> </div> <label class="pull-left text-right control-label no-padding-right">结束日期 </label> <div class="col-xs-1"> <input type="text" name="endDate" class="col-xs-12 datepicker" placeholder="结束日期" value="', 
            $line = 9, $out += $escape(searchParam.endDate), $out += '" /> </div> <label class="pull-left text-right control-label no-padding-right">线路产品 </label> <div class="col-xs-2"> <input type="text" name="lineProductName" class="col-xs-12 T-sourDstri-linPro" placeholder="线路产品" value="', 
            $line = 13, $out += $escape(searchParam.lineProductName), $out += '" /> <input type="hidden" name="lineProductId" value="', 
            $line = 14, $out += $escape(searchParam.lineProductId), $out += '" /> </div> <div class="col-xs-2"> <button class=" btn-sm T-saleProduct-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="T-saleProductPager-list"> <div class="form-horizontal row"> <div class="col-xs-6"> <table class="table table-striped table-bordered table-hover table-fixed" width="100%"> <colgroup> <col style="width:10%;"></col> <col style="width:10%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th width="22.5%">年龄段</th> <th width="22.5%">数量</th> </tr> </thead> <tbody> <tr> <td>3岁以下</td> <td>', 
            $line = 39, $out += $escape(searchParam.later_than_3), $out += "</td> </tr> <tr> <td>3-12</td> <td>", 
            $line = 43, $out += $escape(searchParam.between_3_and_12), $out += "</td> </tr> <tr> <td>12-22</td> <td>", 
            $line = 47, $out += $escape(searchParam.between_12_and_22), $out += "</td> </tr> <tr> <td>22-30</td> <td>", 
            $line = 51, $out += $escape(searchParam.between_22_and_30), $out += "</td> </tr> <tr> <td>30-40</td> <td>", 
            $line = 55, $out += $escape(searchParam.between_30_and_40), $out += "</td> </tr> <tr> <td>40-50</td> <td>", 
            $line = 59, $out += $escape(searchParam.between_40_and_50), $out += "</td> </tr> <tr> <td>50-60</td> <td>", 
            $line = 63, $out += $escape(searchParam.between_50_and_60), $out += "</td> </tr> <tr> <td>60以上</td> <td>", 
            $line = 67, $out += $escape(searchParam.greater_than_60), $out += "</td> </tr> </tr> <tr> <td>未知</td> <td>", 
            $line = 72, $out += $escape(searchParam.unknow), $out += '</td> </tr> </tbody> </table> </div> <div class="col-xs-6 pull-left"> <table class="table table-striped table-bordered table-hover table-fixed" width="100%"> <colgroup> <col style="width:10%;"></col> <col style="width:10%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th width="22.5%">客源地</th> <th width="22.5%">数量</th> </tr> </thead> <tbody class="T-scenic-list"> ', 
            $line = 90, $each(areaGroupList, function(areaGrL) {
                $out += " <tr> <td>", $line = 92, $out += $escape(areaGrL.area), $out += "</td> <td>", 
                $line = 93, $out += $escape(areaGrL.count), $out += "</td> </tr> ", $line = 95;
            }), $out += " </tbody> </table> </div> </div> <div> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-tripPlanContainer">\r\n    <div class="row form-horizontal T-search-area search-area" style="padding-left:5px; ">\r\n        <label class="pull-left text-right control-label no-padding-right">开始日期 </label>\r\n        <div class="col-xs-1">\r\n            <input type="text" name="startDate" class="col-xs-12 datepicker" placeholder="开始日期" value="{{searchParam.startDate}}" />\r\n        </div>\r\n        <label class="pull-left text-right control-label no-padding-right">结束日期 </label>\r\n        <div class="col-xs-1">\r\n            <input type="text" name="endDate" class="col-xs-12 datepicker" placeholder="结束日期" value="{{searchParam.endDate}}" />\r\n        </div>\r\n        <label class="pull-left text-right control-label no-padding-right">线路产品 </label>\r\n        <div class="col-xs-2">\r\n            <input type="text" name="lineProductName" class="col-xs-12 T-sourDstri-linPro" placeholder="线路产品" value="{{searchParam.lineProductName}}" />\r\n            <input type="hidden" name="lineProductId" value="{{searchParam.lineProductId}}" />\r\n        </div>\r\n        <div class="col-xs-2">\r\n            <button class=" btn-sm  T-saleProduct-search search-btn">\r\n                <i class="ace-icon fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class="T-saleProductPager-list">\r\n        <div class="form-horizontal row">\r\n            <div class="col-xs-6">\r\n                <table class="table table-striped table-bordered table-hover table-fixed" width="100%">\r\n                    <colgroup>\r\n                        <col style="width:10%;"></col>\r\n                        <col style="width:10%;"></col>\r\n                    </colgroup>\r\n                    <thead>\r\n                        <tr class="bg-blur">\r\n                            <th width="22.5%">年龄段</th>\r\n                            <th width="22.5%">数量</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>3岁以下</td>\r\n                            <td>{{searchParam.later_than_3}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>3-12</td>\r\n                            <td>{{searchParam.between_3_and_12}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>12-22</td>\r\n                            <td>{{searchParam.between_12_and_22}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>22-30</td>\r\n                            <td>{{searchParam.between_22_and_30}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>30-40</td>\r\n                            <td>{{searchParam.between_30_and_40}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>40-50</td>\r\n                            <td>{{searchParam.between_40_and_50}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>50-60</td>\r\n                            <td>{{searchParam.between_50_and_60}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>60以上</td>\r\n                            <td>{{searchParam.greater_than_60}}</td>\r\n                        </tr>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>未知</td>\r\n                            <td>{{searchParam. unknow}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class="col-xs-6 pull-left">\r\n                <table class="table table-striped table-bordered table-hover table-fixed" width="100%">\r\n                    <colgroup>\r\n                        <col style="width:10%;"></col>\r\n                        <col style="width:10%;"></col>\r\n                    </colgroup>\r\n                    <thead>\r\n                        <tr class="bg-blur">\r\n                            <th width="22.5%">客源地</th>\r\n                            <th width="22.5%">数量</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody class="T-scenic-list">\r\n                        {{each areaGroupList as areaGrL}}\r\n                        <tr>\r\n                            <td>{{areaGrL.area}}</td>\r\n                            <td>{{areaGrL.count}}</td>\r\n                        </tr>\r\n                        {{/each}}\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div>\r\n        </div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});