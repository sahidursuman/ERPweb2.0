/*TMODJS:{"debug":true,"version":18,"md5":"c3629385497ac8c16836af678663b236"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTravels/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, lineProductName = $data.lineProductName, $string = $utils.$string, customerType = $data.customerType, $each = $utils.$each, lineProductList = $data.lineProductList, recordSize = ($data.rs, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="container-fluid globalAdd"> <form class="row" role="form" onsubmit="return false"> <div class="form-inline hct-search-area"> <div class="form-group"> <input type="text" name="lineProductName" class="form-control T-lineProductName" value="', 
            $line = 5, $out += $escape(lineProductName), $out += '" placeholder="请输入线路产品名称关键词" style="width: 200px;"> </div> <div class="form-group mar-l-15"> <label>针对客源</label> <select name="customerType" class="form-control"> ', 
            $line = 10, $out += $string($helpers.getCustomerType(customerType)), $out += ' </select> </div> <div class="form-group mar-l-15"> <button class="btn-sm search-btn T-btn-search" data-type="1"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </form> <div class="row"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>线路产品名称</th> <th>线路类型</th> <th>针对客源</th> <th>行程天数</th> <th>游记数</th> <th>出游人数</th> <th>点赞次数</th> <th>评论次数</th> <th>分享次数</th> <th>浏览次数</th> <th>创建时间</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 39, $each(lineProductList, function(rs) {
                $out += ' <tr data-id="', $line = 40, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 41, $out += $escape(rs.name), $out += "</td> <td>", $line = 42, $out += $escape(rs.type), 
                $out += "</td> <td>", $line = 43, $out += $escape($helpers.getCustomerType(rs.customerType, !0)), 
                $out += "</td> <td>", $line = 44, $out += $escape(rs.days), $out += "</td> <td>", 
                $line = 45, $out += $escape(rs.sumNoteCount), $out += "</td> <td>", $line = 46, 
                $out += $escape(rs.sumTouristAdultCount), $out += "大", $line = 46, $out += $escape(rs.sumTouristChildCount), 
                $out += "小</td> <td>", $line = 47, $out += $escape(rs.sumLikeCount), $out += "</td> <td>", 
                $line = 48, $out += $escape(rs.sumCommentCount), $out += "</td> <td>", $line = 49, 
                $out += $escape(rs.sumShareCount), $out += "</td> <td>", $line = 50, $out += $escape(rs.sumViewCount), 
                $out += "</td> <td>", $line = 51, $out += $escape(rs.createTime), $out += '</td> <td> <a class="cursor T-action T-view" title="查看">查看</a> <label style="padding-left:10px;">|</label> <a class="cursor T-action T-share" title="分享">分享</a> </td> </tr> ', 
                $line = 58;
            }), $out += ' </tbody> </table> </div> <div class="row pageMode"> <div class="col-xs-4"> <small>共计 ', 
            $line = 64, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-8"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid globalAdd">\r\n    <form class="row" role="form" onsubmit="return false">\r\n        <div class="form-inline hct-search-area">\r\n            <div class="form-group">\r\n                <input type="text" name="lineProductName" class="form-control T-lineProductName" value="{{lineProductName}}" placeholder="请输入线路产品名称关键词" style="width: 200px;">\r\n            </div>\r\n            <div class="form-group mar-l-15">\r\n                <label>针对客源</label>\r\n                <select name="customerType" class="form-control">\r\n                    {{#customerType | getCustomerType}}\r\n                </select>\r\n            </div>\r\n            <div class="form-group mar-l-15">\r\n                <button class="btn-sm search-btn T-btn-search" data-type="1">\r\n                    <i class="ace-icon fa fa-search"></i> 搜索\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class="row">\r\n        <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n            <thead>\r\n                <tr class="bg-blur">\r\n                    <th>线路产品名称</th>\r\n                    <th>线路类型</th>\r\n                    <th>针对客源</th>\r\n                    <th>行程天数</th>\r\n                    <th>游记数</th>\r\n                    <th>出游人数</th>\r\n                    <th>点赞次数</th>\r\n                    <th>评论次数</th>\r\n                    <th>分享次数</th>\r\n                    <th>浏览次数</th>\r\n                    <th>创建时间</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody class="T-list">\r\n                {{each lineProductList as rs}}\r\n                <tr data-id="{{rs.id}}">\r\n                    <td>{{rs.name}}</td>\r\n                    <td>{{rs.type}}</td>\r\n                    <td>{{rs.customerType | getCustomerType : true}}</td>\r\n                    <td>{{rs.days}}</td>\r\n                    <td>{{rs.sumNoteCount}}</td>\r\n                    <td>{{rs.sumTouristAdultCount}}大{{rs.sumTouristChildCount}}小</td>\r\n                    <td>{{rs.sumLikeCount}}</td>\r\n                    <td>{{rs.sumCommentCount}}</td>\r\n                    <td>{{rs.sumShareCount}}</td>\r\n                    <td>{{rs.sumViewCount}}</td>\r\n                    <td>{{rs.createTime}}</td>\r\n                    <td>\r\n                        <a class="cursor T-action T-view" title="查看">查看</a>\r\n                        <label style="padding-left:10px;">|</label>\r\n                        <a class="cursor T-action T-share" title="分享">分享</a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-4">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-8">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});