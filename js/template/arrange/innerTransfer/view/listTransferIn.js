/*TMODJS:{"debug":true,"version":76,"md5":"8743a633587984933525b827a0953ab9"}*/
define(function(require) {
    return require("../../../template")("arrange/innerTransfer/view/listTransferIn", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, total = $data.total, $each = $utils.$each, lineProduct = $data.lineProduct, searchParam = ($data.rs, 
            $data.$index, $data.searchParam), startDay = $data.startDay, businessGroup = $data.businessGroup, user = $data.user, resultList = $data.resultList, parseInt = $helpers.parseInt, $out = "";
            return $out += '<div class="col-xs-12"> <div class="page-header"> <h1> <small class="transferIn-Header-Cost"> <i class="ace-icon fa fa-angle-double-right"></i> <lable style="min-width:10%; display:inline-block;">人数合计 : <span class="adultCount">', 
            $line = 6, $out += $escape(total.adultCount), $out += '</span>大<span class="childCount">', 
            $line = 6, $out += $escape(total.childCount), $out += '</span>小</lable> <lable style="min-width:10%; display:inline-block;">应付款合计:<span class="transNeedPayMoney">', 
            $line = 7, $out += $escape(total.transNeedPayMoney), $out += ' </span>元</lable> <lable style="min-width:10%; display:inline-block;">已付款合计:<span class="transPayedMoney">', 
            $line = 8, $out += $escape(total.transPayedMoney), $out += '</span>元</lable> </small> </h1> </div> <div class="form-group form-horizontal"> <div class="search-area"> <label class="pull-left control-label no-padding-right">线路产品：</label> <div class="col-sm-2"> <select name="lineProductId" class="col-xs-12"> <option value="">全部</option> ', 
            $line = 20, $each(lineProduct, function(rs) {
                $out += ' <option value="', $line = 21, $out += $escape(rs.id), $out += '" ', $line = 21, 
                null != searchParam && ($line = 21, searchParam.lineProductId == rs.id && ($out += 'selected="selected" ', 
                $line = 21), $line = 21), $out += "> ", $line = 22, $out += $escape(rs.name), $out += " </option> ", 
                $line = 24;
            }), $out += ' </select> </div> <div class="form-group"> <div class="search-area"> <div class="col-xs-2"> <div class="col-xs-12"> <div class="input-group"> <input class="col-xs-12 datepicker" name="startTime" placeholder="出游起始日期" value="', 
            $line = 32, $out += $escape(startDay), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-2"> <div class="col-xs-12"> <div class="input-group"> <input class="col-xs-12 datepicker" name="endTime" placeholder="出游结束日期" value="" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <label class="control-label no-padding-right pull-left">部门：</label> <div class="col-sm-1"> <select name="businessGroupId" class="col-xs-12"> <option value="">全部</option> ', 
            $line = 55, $each(businessGroup, function(rs) {
                $out += ' <option value="', $line = 56, $out += $escape(rs.id), $out += '" ', $line = 56, 
                null != searchParam && ($line = 56, searchParam.businessGroupId == rs.id && ($out += 'selected="selected" ', 
                $line = 56), $line = 56), $out += "> ", $line = 57, $out += $escape(rs.name), $out += " </option> ", 
                $line = 59;
            }), $out += ' </select> </div> <label class="control-label no-padding-right pull-left">联系人：</label> <div class="col-sm-1"> <select name="creator" class="col-xs-12"> <option value="">全部</option> ', 
            $line = 66, $each(user, function(rs) {
                $out += ' <option value="', $line = 67, $out += $escape(rs.id), $out += '" ', $line = 67, 
                null != searchParam && ($line = 67, searchParam.creator == rs.id && ($out += 'selected="selected" ', 
                $line = 67), $line = 67), $out += "> ", $line = 68, $out += $escape(rs.realName), 
                $out += " </option> ", $line = 70;
            }), $out += ' </select> </div> <label class="control-label no-padding-right pull-left">状态：</label> <div class="col-sm-1"> <select name="status" class="col-xs-12"> <option value="全部">全部</option> <option value="0" ', 
            $line = 78, null != searchParam && ($line = 78, 0 == searchParam.status && ($out += 'selected="selected" ', 
            $line = 78), $line = 78), $out += '>未确认</option> <option value="1" ', $line = 79, 
            null != searchParam && ($line = 79, 1 == searchParam.status && ($out += 'selected="selected" ', 
            $line = 79), $line = 79), $out += '>已接收</option> <option value="2" ', $line = 80, 
            null != searchParam && ($line = 80, 2 == searchParam.status && ($out += 'selected="selected" ', 
            $line = 80), $line = 80), $out += '>已拒收</option> </select> </div> <button class="btn-sm btn-transferIn-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div>  <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>线路产品</th> <th>天数</th> <th>出游日期</th> <th>游客</th> <th>人数</th> <th>部门</th> <th>联系人</th> <th>联系电话</th> <th>应收</th> <th>已收</th> <th>对方状态</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 108, $each(resultList, function(rs) {
                $out += " ", $line = 108, null != rs && ($out += ' <tr data-entity-id="', $line = 109, 
                $out += $escape(rs.id), $out += '"> ', $line = 110, null != rs.lineProduct ? ($out += " <td>", 
                $line = 111, $out += $escape(rs.lineProduct.name), $out += "</td> <td>", $line = 112, 
                $out += $escape(rs.lineProduct.days), $out += "</td> ", $line = 113) : ($out += " <td></td> <td></td> ", 
                $line = 116), $out += " ", $line = 116, null != rs.touristGroup ? ($out += " <td>", 
                $line = 117, $out += $escape(rs.touristGroup.startTime), $out += "</td> <td>", $line = 118, 
                null != rs.touristGroup.contactMember && ($line = 118, $out += $escape(rs.touristGroup.contactMember.name), 
                $line = 118), $out += "</td> <td>", $line = 119, $out += $escape(rs.touristGroup.adultCount), 
                $out += "大", $line = 119, $out += $escape(rs.touristGroup.childCount), $out += "小</td> ", 
                $line = 120) : ($out += " <td></td> <td></td> <td></td> ", $line = 124), $out += " ", 
                $line = 124, null != searchParam && ($out += " ", $line = 124, 1 == searchParam.type ? ($out += " <td>", 
                $line = 125, rs.toBusinessGroup && ($line = 125, $out += $escape(rs.toBusinessGroup.name), 
                $line = 125), $out += "</td> ", $line = 126) : ($out += " <td>", $line = 127, rs.fromBusinessGroup && ($line = 127, 
                $out += $escape(rs.fromBusinessGroup.name), $line = 127), $out += "</td> ", $line = 128), 
                $out += " ", $line = 128), $out += " ", $line = 129, null != rs.user ? ($out += " <td>", 
                $line = 130, $out += $escape(rs.user.realName), $out += "</td> <td>", $line = 131, 
                $out += $escape(rs.user.mobileNumber), $out += "</td> ", $line = 132) : ($out += " <td></td> <td></td> ", 
                $line = 135), $out += " <td>", $line = 136, $out += $escape(rs.transNeedPayMoney), 
                $out += "</td> <td>", $line = 137, $out += $escape(rs.transPayedMoney), $out += "</td> <td>", 
                $line = 138, 0 == rs.status ? ($out += '<span style="color:#D2691E;">未确认</span>', 
                $line = 138) : 1 == rs.status ? ($out += '<span style="color: green;">已接收</span>', 
                $line = 138) : 2 == rs.status ? ($out += '<span style="color: red;">已拒收</span>', 
                $line = 138) : ($out += '<span style="">未使用</span>', $line = 138), $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entity-id="', 
                $line = 141, $out += $escape(rs.id), $out += '" class="cursor btn-transfer-view"> 查看 </a> ', 
                $line = 144, null != searchParam && ($out += ' <a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 146, $out += $escape(rs.id), $out += '" class="cursor btn-transfer-save"> 确认 </a> <a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 150, $out += $escape(rs.id), $out += '" class="cursor btn-transfer-refuse"> 拒绝 </a> ', 
                $line = 153), $out += ' </div> <div class="hidden-md hidden-lg"> <div class="inline pos-rel"> <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto"> <i class="ace-icon fa fa-cog icon-only bigger-110"></i> </button> <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"> <li> <a data-entity-id="', 
                $line = 165, $out += $escape(rs.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-TransferIn-view" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 173, $out += $escape(rs.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-TransferIn-edit" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 181, $out += $escape(rs.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-transfer-delete" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </span> </a> </li> </ul> </div> </div> </td> </tr> ', 
                $line = 192), $out += " ", $line = 192;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <input type="hidden" name="pageNo" value="', 
            $line = 197, $out += $escape(searchParam.pageNo), $out += '" /> <input type="hidden" name="totalPage2" value="', 
            $line = 198, $out += $escape(searchParam.totalPage), $out += '" /> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计', 
            $line = 199, $out += $escape(searchParam.totalCount), $out += '条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous" href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 208, $out += $escape(parseInt(searchParam.pageNo) + 1), $out += "/", $line = 208, 
            $out += $escape(searchParam.totalPage), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<div class="page-header">\r\n		<h1>\r\n			<small class="transferIn-Header-Cost">\r\n				<i class="ace-icon fa fa-angle-double-right"></i>                    \r\n				<lable style="min-width:10%; display:inline-block;">人数合计 : <span class="adultCount">{{total.adultCount}}</span>大<span class="childCount">{{total.childCount}}</span>小</lable>  \r\n			    <lable style="min-width:10%; display:inline-block;">应付款合计:<span class="transNeedPayMoney">{{total.transNeedPayMoney}} </span>元</lable>    \r\n			    <lable style="min-width:10%; display:inline-block;">已付款合计:<span class="transPayedMoney">{{total.transPayedMoney}}</span>元</lable>          \r\n			</small>                \r\n		</h1>\r\n	</div>\r\n\r\n\r\n	<div class="form-group form-horizontal">\r\n		<div class="search-area">\r\n			<label class="pull-left control-label no-padding-right">线路产品：</label>\r\n			<div class="col-sm-2">\r\n				<select name="lineProductId" class="col-xs-12">\r\n					<option value="">全部</option>\r\n					{{each lineProduct as rs}}\r\n					<option value="{{rs.id}}" {{if searchParam!=null}}{{if searchParam.lineProductId==rs.id}}selected="selected" {{/if}}{{/if}}>\r\n						{{rs.name}}\r\n					</option>\r\n					{{/each}}\r\n				</select>\r\n			</div>\r\n			<div class="form-group">\r\n				<div class="search-area">\r\n					<div class="col-xs-2">\r\n						<div class="col-xs-12">\r\n							<div class="input-group">\r\n								<input class="col-xs-12 datepicker" name="startTime" placeholder="出游起始日期" value="{{startDay}}" type="text" />\r\n								<span class="input-group-addon">\r\n										<i class="fa fa-calendar"></i>\r\n									</span>\r\n							</div>\r\n						</div>\r\n					</div>\r\n\r\n					<div class="col-xs-2">\r\n						<div class="col-xs-12">\r\n							<div class="input-group">\r\n								<input class="col-xs-12 datepicker" name="endTime" placeholder="出游结束日期" value="" type="text" />\r\n								<span class="input-group-addon">\r\n										<i class="fa fa-calendar"></i>\r\n									</span>\r\n							</div>\r\n						</div>\r\n					</div>\r\n\r\n					<label class="control-label no-padding-right pull-left">部门：</label>\r\n					<div class="col-sm-1">\r\n						<select name="businessGroupId" class="col-xs-12">\r\n							<option value="">全部</option>\r\n							{{each businessGroup as rs}}\r\n							<option value="{{rs.id}}" {{if searchParam!=null}}{{if searchParam.businessGroupId==rs.id}}selected="selected" {{/if}}{{/if}}>\r\n								{{rs.name}}\r\n							</option>\r\n							{{/each}}\r\n						</select>\r\n					</div>\r\n					<label class="control-label no-padding-right pull-left">联系人：</label>\r\n					<div class="col-sm-1">\r\n						<select name="creator" class="col-xs-12">\r\n							<option value="">全部</option>\r\n							{{each user as rs}}\r\n							<option value="{{rs.id}}" {{if searchParam!=null}}{{if searchParam.creator==rs.id}}selected="selected" {{/if}}{{/if}}>\r\n								{{rs.realName}}\r\n							</option>\r\n							{{/each}}\r\n						</select>\r\n					</div>\r\n\r\n					<label class="control-label no-padding-right pull-left">状态：</label>\r\n					<div class="col-sm-1">\r\n						<select name="status" class="col-xs-12">\r\n							<option value="全部">全部</option>\r\n							<option value="0" {{if searchParam!=null}}{{if searchParam.status==0}}selected="selected" {{/if}}{{/if}}>未确认</option>\r\n							<option value="1" {{if searchParam!=null}}{{if searchParam.status==1}}selected="selected" {{/if}}{{/if}}>已接收</option>\r\n							<option value="2" {{if searchParam!=null}}{{if searchParam.status==2}}selected="selected" {{/if}}{{/if}}>已拒收</option>\r\n						</select>\r\n					</div>\r\n\r\n					<button class="btn-sm btn-transferIn-search search-btn">\r\n						<i class="ace-icon fa fa-search"></i> 搜索\r\n					</button>\r\n				</div>\r\n			</div>\r\n			<!-- 分页查询数据 -->\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n					<tr class="bg-blur">\r\n						<th>线路产品</th>\r\n						<th>天数</th>\r\n						<th>出游日期</th>\r\n						<th>游客</th>\r\n						<th>人数</th>\r\n						<th>部门</th>\r\n						<th>联系人</th>\r\n						<th>联系电话</th>\r\n						<th>应收</th>\r\n						<th>已收</th>\r\n						<th>对方状态</th>\r\n						<th>操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody>\r\n					{{each resultList as rs}} {{if rs!=null}}\r\n					<tr data-entity-id="{{rs.id}}">\r\n						{{if rs.lineProduct!=null}}\r\n						<td>{{rs.lineProduct.name}}</td>\r\n						<td>{{rs.lineProduct.days}}</td>\r\n						{{else}}\r\n						<td></td>\r\n						<td></td>\r\n						{{/if}} {{if rs.touristGroup != null}}\r\n						<td>{{rs.touristGroup.startTime}}</td>\r\n						<td>{{if rs.touristGroup.contactMember!=null}}{{rs.touristGroup.contactMember.name}}{{/if}}</td>\r\n						<td>{{rs.touristGroup.adultCount}}大{{rs.touristGroup.childCount}}小</td>\r\n						{{else}}\r\n						<td></td>\r\n						<td></td> \r\n						<td></td>\r\n						{{/if}} {{if searchParam!=null}} {{if searchParam.type==1}}\r\n						<td>{{if rs.toBusinessGroup}}{{rs.toBusinessGroup.name}}{{/if}}</td>\r\n						{{else}}\r\n						<td>{{if rs.fromBusinessGroup}}{{rs.fromBusinessGroup.name}}{{/if}}</td>\r\n						{{/if}} {{/if}} \r\n						{{if rs.user!=null}}\r\n						<td>{{rs.user.realName}}</td>\r\n						<td>{{rs.user.mobileNumber}}</td>\r\n						{{else}}\r\n						<td></td>\r\n						<td></td>\r\n						{{/if}}\r\n						<td>{{rs.transNeedPayMoney}}</td>\r\n						<td>{{rs.transPayedMoney}}</td>\r\n						<td>{{if rs.status == 0}}<span style="color:#D2691E;">未确认</span>{{else if rs.status == 1}}<span style="color: green;">已接收</span>{{else if rs.status == 2}}<span style="color: red;">已拒收</span>{{else}}<span style="">未使用</span>{{/if}}</td>\r\n						<td>\r\n							<div class="hidden-sm hidden-xs btn-group">\r\n							<a data-entity-id="{{rs.id}}" class="cursor  btn-transfer-view">\r\n								查看\r\n							</a>\r\n							{{if searchParam!=null}}\r\n							<a href="" class="cursor"> |</a>\r\n								<a data-entity-id="{{rs.id}}" class="cursor btn-transfer-save">\r\n								确认\r\n							</a>\r\n							<a href="" class="cursor"> |</a>\r\n								<a data-entity-id="{{rs.id}}" class="cursor btn-transfer-refuse">\r\n								拒绝\r\n							</a>\r\n						    {{/if}}\r\n							</div>\r\n\r\n							<div class="hidden-md hidden-lg">\r\n								<div class="inline pos-rel">\r\n									<button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">\r\n										<i class="ace-icon fa fa-cog icon-only bigger-110"></i>\r\n									</button>\r\n\r\n									<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">\r\n\r\n										<li>\r\n											<a data-entity-id="{{rs.id}}" href="javascript:void(0)" class="tooltip-error btn-TransferIn-view" data-rel="tooltip">\r\n												<span class="red">\r\n												<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n											</span>\r\n											</a>\r\n										</li>\r\n\r\n										<li>\r\n											<a data-entity-id="{{rs.id}}" href="javascript:void(0)" class="tooltip-success btn-TransferIn-edit" data-rel="tooltip">\r\n												<span class="green">\r\n												<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>\r\n											</span>\r\n											</a>\r\n										</li>\r\n\r\n										<li>\r\n											<a data-entity-id="{{rs.id}}" href="javascript:void(0)" class="tooltip-error btn-transfer-delete" data-rel="tooltip">\r\n												<span class="red">\r\n												<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n											</span>\r\n											</a>\r\n										</li>\r\n									</ul>\r\n								</div>\r\n							</div>\r\n						</td>\r\n					</tr>\r\n					{{/if}} {{/each}}\r\n				</tbody>\r\n			</table>\r\n			<div class="row pageMode">\r\n				<div class="col-xs-6">\r\n					<input type="hidden" name="pageNo" value="{{searchParam.pageNo}}" />\r\n					<input type="hidden" name="totalPage2" value="{{searchParam.totalPage}}" />\r\n					<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计{{searchParam.totalCount}}条记录</div>\r\n				</div>\r\n				<div class="col-xs-6">\r\n					<div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n						<ul class="pagination">\r\n							<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n							<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous" href="javascript:void(0)">上一页</a></li>\r\n							<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n								<a href="javascript:void(0)">\r\n						{{parseInt(searchParam.pageNo)+1}}/{{searchParam.totalPage}}\r\n						</a>\r\n							</li>\r\n							<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li>\r\n							<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n						</ul>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});