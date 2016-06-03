/*TMODJS:{"debug":true,"version":251,"md5":"6b5470c15805753f176b13b225fcbd25"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/shopStat/view/listMain", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, startDate = $data.startDate, endDate = $data.endDate, $out = "";
            return $out += '<div class="T-search-shopStatArea col-xs-12"> <div class="form-inline clearfix T-search-area T-noprint"> <div class="form-group mar-r-10"> <label>客户 </label> <input type="text" name="fromPartnerAgency" class="form-control T-Choose-partnerAgency" placeholder="客户" value="" /> <input type="hidden" name="fromPartnerAgencyId" value="" /> </div> <div class="form-group mar-r-10"> <label>团号 </label> <input type="text" name="tripNumber" class="form-control T-Choose-tripNumber" placeholder="团号" value="" /> </div> <div class="form-group mar-r-10"> <label>购物店 </label> <input type="text" name="shop" class="form-control T-Choose-shop" placeholder="购物店" value="" /> <input type="hidden" name="shopId" value="" /> </div> <div class="form-group mar-r-10"> <label>商品 </label> <input type="text" name="shopItem" class="form-control T-Choose-goods" placeholder="商品搜索" value="" /> </div> <div class="form-group mar-r-10"> <label>线路产品</label> <input type="text" name="lineProduct" class="hct-cursor T-Choose-product" placeholder="线路产品" value="" readonly /> <i class="ace-icon fa fa-times hct-cursor T-clear-line hidden" style="margin-left: -17px;color:#333;"></i> <input type="hidden" name="lineProductId"/> </div> <div class="form-group mar-r-10"> <button class=" btn-sm T-shopStat-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button>  </div> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-15 T-tripTime"> <label>出团日期 </label> <input type="text" name="startTime" class="form-control datepicker" placeholder="开始日期" value="', 
            $line = 43, $out += $escape(startDate), $out += '" /> <input type="text" name="endTime" class="form-control datepicker" placeholder="结束日期" value="', 
            $line = 44, $out += $escape(endDate), $out += '" /> </div> <div class="form-group mar-r-15 T-shopTime"> <label>进店日期 </label> <input type="text" name="startShopTime" class="form-control datepicker" placeholder="开始日期" value="" /> <input type="text" name="endShopTime" class="form-control datepicker" placeholder="结束日期" value="" /> </div> <div class="form-group mar-l-23"> <label>是否进店 </label> <select name="isShopping"> <option value="">全部</option> <option value="1">已进店</option> <option value="0">未进店</option> </select> </div> <div class="form-group mar-l-20"> <label>针对客源 </label> <select name="customerType"> <option value="">全部</option> <option value="0">散客</option> <option value="1">团体</option> </select> </div> </form> </div> <div class="form-group T-totalAccount"> <label class="control-label mar-r-20">总人数：<span class="F-float F-money T-person">0</span></label> <label class="control-label mar-r-20">总打单：<span class="F-float F-money T-consumeMoney">0</span></label> <label class="control-label mar-r-20">人均打单：<span class="F-float F-money T-avgConsumeMoney">0</span></label> <label class="control-label mar-r-20">导佣：<span class="F-float F-money T-guideRebateMoney">0</span></label> <label class="control-label mar-r-20">社佣：<span class="F-float F-money T-travelAgencyRebateMoney">0</span></label> <label class="control-label mar-r-20">总佣金：<span class="F-float F-money T-sumRebateMoney">0</span></label> <label class="control-label mar-r-20">人均返佣：<span class="F-float F-money T-avgRebateMoney">0</span></label> <label class="control-label">团数：<span class="F-float F-count T-tripCount">0</span></label> </div> <div class="T-shopStatPager-list T-print"> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-search-shopStatArea col-xs-12">\r\n    <div class="form-inline clearfix T-search-area T-noprint">\r\n            <div class="form-group mar-r-10">\r\n                <label>客户 </label>\r\n                <input type="text" name="fromPartnerAgency" class="form-control T-Choose-partnerAgency" placeholder="客户" value="" />\r\n                <input type="hidden" name="fromPartnerAgencyId" value="" />\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label>团号 </label>\r\n                <input type="text" name="tripNumber" class="form-control T-Choose-tripNumber" placeholder="团号" value="" />\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label>购物店 </label>\r\n                <input type="text" name="shop" class="form-control T-Choose-shop" placeholder="购物店" value="" />\r\n                <input type="hidden" name="shopId" value="" />\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label>商品 </label>\r\n                <input type="text" name="shopItem" class="form-control T-Choose-goods" placeholder="商品搜索" value="" />\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label>线路产品</label>\r\n                <input type="text" name="lineProduct" class="hct-cursor T-Choose-product" placeholder="线路产品" value="" readonly />\r\n                <i class="ace-icon fa fa-times hct-cursor T-clear-line hidden" style="margin-left: -17px;color:#333;"></i>\r\n                <input type="hidden" name="lineProductId"/>\r\n                \r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                \r\n                <button class=" btn-sm  T-shopStat-search search-btn">\r\n                    <i class="ace-icon fa fa-search"></i> 搜索\r\n                </button>\r\n               <!--  <button class=" btn-sm  T-shopStat-export search-btn">\r\n                   打印\r\n               </button>\r\n               <button class=" btn-sm  T-shopStat-outToexcel search-btn">\r\n                   导出\r\n               </button> -->\r\n            </div>\r\n        <form class="form-inline" role="form" onsubmit="return false">\r\n            <div class="form-group mar-r-15 T-tripTime">\r\n                <label>出团日期 </label>\r\n                <input type="text" name="startTime" class="form-control datepicker" placeholder="开始日期" value="{{startDate}}" />\r\n                <input type="text" name="endTime" class="form-control datepicker" placeholder="结束日期" value="{{endDate}}" />\r\n            </div>\r\n            <div class="form-group mar-r-15 T-shopTime">\r\n                <label>进店日期 </label>\r\n                <input type="text" name="startShopTime" class="form-control datepicker" placeholder="开始日期" value="" />\r\n                <input type="text" name="endShopTime" class="form-control datepicker" placeholder="结束日期" value="" />\r\n            </div>\r\n            <div class="form-group mar-l-23">\r\n                <label>是否进店 </label>\r\n                <select name="isShopping">\r\n                    <option value="">全部</option>\r\n                    <option value="1">已进店</option>\r\n                    <option value="0">未进店</option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class="form-group mar-l-20">\r\n                <label>针对客源 </label>\r\n                <select name="customerType">\r\n                    <option value="">全部</option>\r\n                    <option value="0">散客</option>\r\n                    <option value="1">团体</option>\r\n                </select>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="form-group T-totalAccount">\r\n        <label class="control-label mar-r-20">总人数：<span class="F-float F-money T-person">0</span></label>\r\n        <label class="control-label mar-r-20">总打单：<span class="F-float F-money T-consumeMoney">0</span></label>\r\n        <label class="control-label mar-r-20">人均打单：<span class="F-float F-money T-avgConsumeMoney">0</span></label>\r\n        <label class="control-label mar-r-20">导佣：<span class="F-float F-money T-guideRebateMoney">0</span></label>\r\n        <label class="control-label mar-r-20">社佣：<span class="F-float F-money T-travelAgencyRebateMoney">0</span></label>\r\n        <label class="control-label mar-r-20">总佣金：<span class="F-float F-money T-sumRebateMoney">0</span></label>\r\n        <label class="control-label mar-r-20">人均返佣：<span class="F-float F-money T-avgRebateMoney">0</span></label>\r\n        <label class="control-label">团数：<span class="F-float F-count T-tripCount">0</span></label>\r\n    </div>\r\n    <div class="T-shopStatPager-list T-print">\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});