/*TMODJS:{"debug":true,"version":70,"md5":"7c05af3ea7e5a54d1fa4cadc0d78f325"}*/
define(function(require) {
    return require("../../../template")("system/department/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, businessList = $data.businessList, $escape = ($data.business, 
            $data.$index, $utils.$escape), $out = "";
            return $out += "                     <!--", $line = 22, $each(businessList, function(business) {
                $out += '--> <!--<tr class="business-', $line = 23, $out += $escape(business.id), 
                $out += '">--> <!--<td>', $line = 24, $out += $escape(business.name), $out += "</td>--> <!--<td>", 
                $line = 25, $out += $escape($helpers.dateFormat(business.createTime, "yyyy-MM-dd")), 
                $out += '</td>-->   <!--<button data-entity-id="', $line = 28, $out += $escape(business.id), 
                $out += '" class="btn btn-xs btn-info btn-group-list">-->    <!--<button data-entity-id="', 
                $line = 32, $out += $escape(business.id), $out += '" class="btn btn-xs btn-info btn-business-edit">-->            <!--<a data-entity-id="', 
                $line = 44, $out += $escape(business.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-group-list" data-rel="tooltip">-->       <!--<a data-entity-id="', 
                $line = 51, $out += $escape(business.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-business-edit" data-rel="tooltip">-->           <!--', 
                $line = 62;
            }), $out += " -->    ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--<div class="search-area">-->\r\n	<!--<div style="float: right;">-->\r\n		<!--<button class="btn btn-sm btn-success btn-business-add" >-->\r\n			<!--<i class="ace-icon fa fa-plus"></i>-->\r\n			<!--新增部门-->\r\n		<!--</button>-->\r\n	<!--</div>-->\r\n	<!--<div style="clear: both;"></div>-->\r\n<!--</div>-->\r\n<!--<div class="space-20"></div>-->\r\n<!--<div class="row businessList">	-->\r\n	<!--<div class="col-xs-12">-->\r\n		<!--<table class="table table-striped table-bordered table-hover">-->\r\n			<!--<thead>-->\r\n				<!--<tr>-->\r\n					<!--<th class="th-border">部门名称</th>-->\r\n					<!--<th class="th-border">创建时间</th>-->\r\n					<!--<th class="th-border">操作</th>-->\r\n				<!--</tr>-->\r\n			<!--</thead>-->\r\n			<!--<tbody>-->\r\n				<!--{{each businessList as business}}-->\r\n					<!--<tr class="business-{{business.id}}">-->\r\n						<!--<td>{{business.name}}</td>-->\r\n						<!--<td>{{business.createTime | dateFormat: \'yyyy-MM-dd\'}}</td>-->\r\n						<!--<td>-->\r\n							<!--<div class="hidden-sm hidden-xs btn-group">-->\r\n								<!--<button data-entity-id="{{business.id}}" class="btn btn-xs btn-info btn-group-list">-->\r\n									<!--<i class="ace-icon fa fa-list-alt bigger-120"></i>-->\r\n								<!--</button> -->\r\n								<!-- -->\r\n								<!--<button data-entity-id="{{business.id}}" class="btn btn-xs btn-info btn-business-edit">-->\r\n									<!--<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>-->\r\n								<!--</button>-->\r\n							<!--</div>-->\r\n							<!--<div class="hidden-md hidden-lg">-->\r\n								<!--<div class="inline pos-rel">-->\r\n									<!--<button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">-->\r\n										<!--<i class="ace-icon fa fa-cog icon-only bigger-110"></i>-->\r\n									<!--</button>-->\r\n			<!-- -->\r\n									<!--<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">-->\r\n										<!--<li>-->\r\n											<!--<a data-entity-id="{{business.id}}" href="javascript:void(0)" class="tooltip-success btn-group-list" data-rel="tooltip">-->\r\n												<!--<span class="green">-->\r\n													<!--<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>-->\r\n												<!--</span>-->\r\n											<!--</a>-->\r\n										<!--</li>-->\r\n										<!--<li>-->\r\n											<!--<a data-entity-id="{{business.id}}" href="javascript:void(0)" class="tooltip-success btn-business-edit" data-rel="tooltip">-->\r\n												<!--<span class="green">-->\r\n													<!--<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>-->\r\n												<!--</span>-->\r\n											<!--</a>-->\r\n										<!--</li>-->\r\n									<!--</ul>-->\r\n								<!--</div>-->\r\n							<!--</div>-->\r\n						<!--</td>-->\r\n					<!--</tr>-->\r\n				<!--{{/each}} -->\r\n			<!--</tbody>-->\r\n		<!--</table>-->\r\n	<!--</div>-->\r\n<!--</div>-->'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});