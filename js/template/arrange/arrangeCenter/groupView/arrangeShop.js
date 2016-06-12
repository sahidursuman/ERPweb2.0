/*TMODJS:{"debug":true,"version":2,"md5":"5bed27288151da7c0a4323cbe83bd7d0"}*/
define(function(require) {
    return require("/js/template/template")("arrange/arrangeCenter/groupView/arrangeShop", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), basicInfo = $data.basicInfo, $escape = $utils.$escape, $each = $utils.$each, shopList = $data.shopList, $out = ($data.shop, 
            $data.$index, $data.rs, $data.index, "");
            return $out += '<div class=" ui-sortable-handle"> <h5 class="title-size"> <i class="ace-icon fa fa-shopping-cart"></i> 购物安排 <button class="btn btn-sm btn-success mar-l-15 T-addResource T-addShop"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </h5> ', 
            $line = 8, basicInfo.oldShopRequire && ($out += ' <p class="requirementsPlan">原购物计划要求：', 
            $line = 9, $out += $escape(basicInfo.oldShopRequire), $out += "</p>", $line = 9), 
            $out += " ", $line = 9, basicInfo.nowShopRequire && ($out += ' <p class="requirementsPlan">现购物计划要求：', 
            $line = 10, $out += $escape(basicInfo.nowShopRequire), $out += "</p>", $line = 10), 
            $out += ' <table class="table table-striped table-bordered table-hover table-tripPlan-container"> <colgroup> <col style="width:110px"> <col style="width:150px;"> <col style="width:90px;"> <col style="width:110px;"> <col style="width:160px;"> <col> <col style="width:60px;"> </colgroup> <thead> <tr> <th class="th-border" style="width:100px;"><span class="necessary">*</span>日期</th> <th class="th-border"><span class="necessary">*</span>购物店</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">商品名</th> <th class="th-border">备注</th> <th class="th-border">操作</th> </tr> </thead> <tbody> ', 
            $line = 33, $each(shopList, function(shop) {
                $out += " ", $line = 33, ("[]" != shop || null != shop) && ($out += ' <tr data-entity-arrangeid="', 
                $line = 34, 1 == basicInfo.isArranged && ($line = 34, $out += $escape(shop.id), 
                $line = 34), $out += '"> <td class="T-whichDaysContainer" value="', $line = 35, 
                $out += $escape(shop.whichDay), $out += '"></td> <td> <div class="col-sm-12"> <input type="hidden" name="id" value="', 
                $line = 38, 1 == basicInfo.isArranged && ($line = 38, $out += $escape(shop.id), 
                $line = 38), $out += '" /> <input type="text" name="name" class="col-sm-12 T-chooseShop" value="', 
                $line = 39, null != shop.shop && ($line = 39, $out += $escape(shop.shop.name), $line = 39), 
                $out += '" /> <input type="hidden" name="shopId" value="', $line = 40, null != shop.shop && ($line = 40, 
                $out += $escape(shop.shop.id), $line = 40), $out += '" /> <span class="addResourceBtn T-addShopResource R-right" data-right="1050002" title="添加购物店"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </td> <td> <input type="text" name="managerName" readonly="readonly" class="col-sm-12" value="', 
                $line = 47, null != shop.shop && ($line = 47, $out += $escape(shop.shop.managerName), 
                $line = 47), $out += '" /> </td> <td> <input type="text" name="mobileNumber" readonly="readonly" class="col-sm-12" value="', 
                $line = 50, null != shop.shop && ($line = 50, $out += $escape(shop.shop.mobileNumber), 
                $line = 50), $out += '" /> </td> <td> ', $line = 53, shop.shopArrangeItemSet ? ($out += " ", 
                $line = 53, shop.shopArrangeItemSet.length > 0 ? ($out += " ", $line = 53, $each(shop.shopArrangeItemSet, function(rs, index) {
                    $out += ' <div data-entity-id="', $line = 54, $out += $escape(rs.id), $out += '" ', 
                    $line = 54, index > 0 && ($out += 'class="mar-t-10"', $line = 54), $out += '> <input type="text" name="goodsPolicy" class="col-sm-9 T-chooseGoodsPolicy" value="', 
                    $line = 55, null != rs.shopPolicy && ($line = 55, $out += $escape(rs.shopPolicy.name), 
                    $line = 55), $out += '" /> <input type="hidden" name="shopPolicyId" value="', $line = 56, 
                    null != rs.shopPolicy && ($line = 56, $out += $escape(rs.shopPolicy.id), $line = 56), 
                    $out += '" /> <button class="btn ', $line = 57, 0 == index ? ($out += "btn-success", 
                    $line = 57) : ($out += "btn-danger", $line = 57), $out += " btn-sm btn-white T-shopPolicy ", 
                    $line = 57, 0 == index ? ($out += "T-add", $line = 57) : ($out += "T-del", $line = 57), 
                    $out += '"> <i class="ace-icon fa ', $line = 57, 0 == index ? ($out += "fa-plus", 
                    $line = 57) : ($out += "fa-minus", $line = 57), $out += ' bigger-110 icon-only"></i></button> </div> ', 
                    $line = 59;
                }), $out += " ", $line = 59) : ($out += ' <div data-entity-id=""> <input type="text" name="goodsPolicy" class="col-sm-9 T-chooseGoodsPolicy" value="" /> <input type="hidden" name="shopPolicyId" value="" /> <button class="btn btn-success btn-sm btn-white T-shopPolicy T-add"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button> </div> ', 
                $line = 65), $out += " ", $line = 65) : ($out += ' <div data-entity-id=""> <input type="text" name="goodsPolicy" class="col-sm-9 T-chooseGoodsPolicy" value="" /> <input type="hidden" name="shopPolicyId" value="" /> <button class="btn btn-success btn-sm btn-white T-shopPolicy T-add"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button> </div> ', 
                $line = 71), $out += ' </td> <td> <input type="text" name="remark" class="col-sm-12" value="', 
                $line = 74, $out += $escape(shop.remark), $out += '" maxlength="500" /> </td> <td> <a class="cursor T-btn-deleteTripPlanList" data-entity-name="shop" data-entity-ispayed="', 
                $line = 77, $out += $escape(shop.financialMoney), $out += '" title="删除"> 删除 </a> </td> </tr> ', 
                $line = 82), $out += " ", $line = 82;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class=" ui-sortable-handle">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa-shopping-cart"></i> 购物安排\r\n        <button class="btn btn-sm btn-success mar-l-15 T-addResource T-addShop">\r\n            <i class="ace-icon fa fa-plus"></i>\r\n            新增\r\n        </button>\r\n    </h5> {{if basicInfo.oldShopRequire}}\r\n    <p class="requirementsPlan">原购物计划要求：{{basicInfo.oldShopRequire}}</p>{{/if}} {{if basicInfo.nowShopRequire}}\r\n    <p class="requirementsPlan">现购物计划要求：{{basicInfo.nowShopRequire}}</p>{{/if}}\r\n    <table class="table table-striped table-bordered table-hover table-tripPlan-container">\r\n        <colgroup>\r\n            <col style="width:110px">\r\n            <col style="width:150px;">\r\n            <col style="width:90px;">\r\n            <col style="width:110px;">\r\n            <col style="width:160px;">\r\n            <col>\r\n            <col style="width:60px;">\r\n        </colgroup>\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border" style="width:100px;"><span class="necessary">*</span>日期</th>\r\n                <th class="th-border"><span class="necessary">*</span>购物店</th>\r\n                <th class="th-border">联系人</th>\r\n                <th class="th-border">联系电话</th>\r\n                <th class="th-border">商品名</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{each shopList as shop}} {{if shop != "[]" || shop != null}}\r\n            <tr data-entity-arrangeid="{{if basicInfo.isArranged == 1}}{{shop.id}}{{/if}}">\r\n                <td class="T-whichDaysContainer" value="{{shop.whichDay}}"></td>\r\n                <td>\r\n                    <div class="col-sm-12">\r\n                        <input type="hidden" name="id" value="{{if basicInfo.isArranged == 1}}{{shop.id}}{{/if}}" />\r\n                        <input type="text" name="name" class="col-sm-12 T-chooseShop" value="{{if shop.shop != null}}{{shop.shop.name}}{{/if}}" />\r\n                        <input type="hidden" name="shopId" value="{{if shop.shop != null}}{{shop.shop.id}}{{/if}}" />\r\n                        <span class="addResourceBtn T-addShopResource R-right" data-right="1050002" title="添加购物店">\r\n                                <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                            </span>\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <input type="text" name="managerName" readonly="readonly" class="col-sm-12" value="{{if shop.shop != null}}{{shop.shop.managerName}}{{/if}}" />\r\n                </td>\r\n                <td>\r\n                    <input type="text" name="mobileNumber" readonly="readonly" class="col-sm-12" value="{{if shop.shop != null}}{{shop.shop.mobileNumber}}{{/if}}" />\r\n                </td>\r\n                <td>\r\n                    {{if !!shop.shopArrangeItemSet}} {{if shop.shopArrangeItemSet.length > 0}} {{each shop.shopArrangeItemSet as rs index}}\r\n                    <div data-entity-id="{{rs.id}}" {{if index> 0}}class="mar-t-10"{{/if}}>\r\n                        <input type="text" name="goodsPolicy" class="col-sm-9 T-chooseGoodsPolicy" value="{{if rs.shopPolicy != null}}{{rs.shopPolicy.name}}{{/if}}" />\r\n                        <input type="hidden" name="shopPolicyId" value="{{if rs.shopPolicy != null}}{{rs.shopPolicy.id}}{{/if}}" />\r\n                        <button class="btn {{if  index == 0}}btn-success{{else}}btn-danger{{/if}} btn-sm btn-white T-shopPolicy {{if  index == 0}}T-add{{else}}T-del{{/if}}"> <i class="ace-icon fa {{if  index == 0}}fa-plus{{else}}fa-minus{{/if}} bigger-110 icon-only"></i></button>\r\n                    </div>\r\n                    {{/each}} {{else}}\r\n                    <div data-entity-id="">\r\n                        <input type="text" name="goodsPolicy" class="col-sm-9 T-chooseGoodsPolicy" value="" />\r\n                        <input type="hidden" name="shopPolicyId" value="" />\r\n                        <button class="btn btn-success btn-sm btn-white T-shopPolicy T-add"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button>\r\n                    </div>\r\n                    {{/if}} {{else}}\r\n                    <div data-entity-id="">\r\n                        <input type="text" name="goodsPolicy" class="col-sm-9 T-chooseGoodsPolicy" value="" />\r\n                        <input type="hidden" name="shopPolicyId" value="" />\r\n                        <button class="btn btn-success btn-sm btn-white T-shopPolicy T-add"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button>\r\n                    </div>\r\n                    {{/if}}\r\n                </td>\r\n                <td>\r\n                    <input type="text" name="remark" class="col-sm-12" value="{{shop.remark}}" maxlength="500" />\r\n                </td>\r\n                <td>\r\n                    <a class="cursor T-btn-deleteTripPlanList" data-entity-name="shop" data-entity-ispayed="{{shop.financialMoney}}" title="删除">\r\n                            删除\r\n                        </a>\r\n                </td>\r\n            </tr>\r\n            {{/if}} {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});