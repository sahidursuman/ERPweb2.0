/*TMODJS:{"debug":true,"version":153,"md5":"a97a18856f8976525c404142c578697f"}*/
define(function(require) {
    return require("../../../template")("arrange/innerTransfer/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, total = $data.total, $each = $utils.$each, lineProduct = $data.lineProduct, searchParam = ($data.rs, 
            $data.$index, $data.searchParam), startDay = $data.startDay, businessGroup = $data.businessGroup, user = $data.user, resultList = $data.resultList, parseInt = $helpers.parseInt, $out = "";
            return $out += '<div class="row col-xs-12 innerTransfer_list"> <div class="col-xs-12"> <div class="tabbable"> <ul class="nav nav-tabs" id="myTab"> <li class="active"> <a data-toggle="tab" href="#transferOut" class="transferOut" aria-expanded="false" data-value="1"> <i class="fa fa-paper-plane fa-2"></i> 我部转出 </a> </li> <li> <a data-toggle="tab" href="#transferIn" class="transferIn" aria-expanded="true" data-value="2"> <i class="fa fa-hourglass"></i> 他部转入 </a> </li> </ul> <div class="tab-content">  <div id="transferOut" class="tab-pane fade active in clearfix"> <div class="col-xs-12 transferOut-content"> <div class="page-header"> <h1> <small class="transferOut-Header-Cost"> <i class="ace-icon fa fa-angle-double-right"></i> <lable style="min-width:10%; display:inline-block;">人数合计 : <span class="adultCount">', 
            $line = 27, $out += $escape(total.adultCount), $out += '</span>大<span class="childCount">', 
            $line = 27, $out += $escape(total.childCount), $out += '</span>小</lable> <lable style="min-width:10%; display:inline-block;">应付款合计:<span class="transNeedPayMoney">', 
            $line = 28, $out += $escape(total.transNeedPayMoney), $out += ' </span>元</lable> <lable style="min-width:10%; display:inline-block;">已付款合计:<span class="transPayedMoney">', 
            $line = 29, $out += $escape(total.transPayedMoney), $out += '</span>元</lable> </small> </h1> </div> </div> <div class="form-group form-horizontal"> <div class="search-area"> <label class="pull-left control-label no-padding-right">线路产品：</label> <div class="col-sm-2"> <select name="lineProductId" class="col-xs-12"> <option value="">全部</option> ', 
            $line = 41, $each(lineProduct, function(rs) {
                $out += ' <option value="', $line = 42, $out += $escape(rs.id), $out += '" ', $line = 42, 
                null != searchParam && ($line = 42, searchParam.lineProductId == rs.id && ($out += 'selected="selected" ', 
                $line = 42), $line = 42), $out += "> ", $line = 43, $out += $escape(rs.name), $out += " </option> ", 
                $line = 45;
            }), $out += ' </select> </div> <div class="form-group"> <div class="search-area"> <div class="col-xs-2"> <div class="col-xs-12"> <div class="input-group"> <input class="col-xs-12 datetimepicker" name="startTime" placeholder="出游起始日期" value="', 
            $line = 53, $out += $escape(startDay), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-2"> <div class="col-xs-12"> <div class="input-group"> <input class="col-xs-12 datetimepicker" name="endTime" placeholder="出游结束日期" value="" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <label class="control-label no-padding-right pull-left">部门：</label> <div class="col-sm-1"> <select name="businessGroupId" class="col-xs-12"> <option value="">全部</option> ', 
            $line = 77, $each(businessGroup, function(rs) {
                $out += ' <option value="', $line = 78, $out += $escape(rs.id), $out += '" ', $line = 78, 
                null != searchParam && ($line = 78, searchParam.businessGroupId == rs.id && ($out += 'selected="selected" ', 
                $line = 78), $line = 78), $out += "> ", $line = 79, $out += $escape(rs.name), $out += " </option> ", 
                $line = 81;
            }), $out += ' </select> </div> <label class="control-label no-padding-right pull-left">联系人：</label> <div class="col-sm-1"> <select name="creator" class="col-xs-12"> <option value="">全部</option> ', 
            $line = 89, $each(user, function(rs) {
                $out += ' <option value="', $line = 90, $out += $escape(rs.id), $out += '" ', $line = 90, 
                null != searchParam && ($line = 90, searchParam.creator == rs.id && ($out += 'selected="selected" ', 
                $line = 90), $line = 90), $out += "> ", $line = 91, $out += $escape(rs.realName), 
                $out += " </option> ", $line = 93;
            }), $out += ' </select> </div> <label class="control-label no-padding-right pull-left">状态：</label> <div class="col-sm-1 btn-group btn-status"> <button data-value="', 
            $line = 100, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 102, "" == searchParam.status ? ($out += " 全部 ", $line = 104) : 1 == searchParam.status ? ($out += " 已接收 ", 
            $line = 106) : 2 == searchParam.status ? ($out += " 已拒收 ", $line = 108) : ($out += " 未确认 ", 
            $line = 110), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="0" href="javascript:void(0)">未确认</a> </li> <li> <a data-value="1" href="javascript:void(0)">已接收</a> </li> <li> <a data-value="2" href="javascript:void(0)">已拒收</a> </li> </ul> </div> <button class="btn-sm btn-transferOut-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <button class="btn btn-sm btn-success btn-transfer-export">导出名单</button> </div> </div>  <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>线路产品</th> <th>天数</th> <th>出游日期</th> <th>游客</th> <th>人数</th> <th>部门</th> <th>联系人</th> <th>联系电话</th> <th>应收</th> <th>已收</th> <th>对方状态</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 156, $each(resultList, function(rs) {
                $out += " ", $line = 156, null != rs && ($out += ' <tr data-entity-id="', $line = 157, 
                $out += $escape(rs.id), $out += '"> ', $line = 158, null != rs.lineProduct ? ($out += " <td>", 
                $line = 159, $out += $escape(rs.lineProduct.name), $out += "</td> <td>", $line = 160, 
                $out += $escape(rs.lineProduct.days), $out += "</td> ", $line = 161) : ($out += " <td></td> <td></td> ", 
                $line = 164), $out += " ", $line = 164, null != rs.touristGroup ? ($out += " <td>", 
                $line = 165, $out += $escape(rs.touristGroup.startTime), $out += "</td> <td>", $line = 166, 
                null != rs.touristGroup.contactMember && ($line = 166, $out += $escape(rs.touristGroup.contactMember.name), 
                $line = 166), $out += "</td> <td>", $line = 167, $out += $escape(rs.touristGroup.adultCount), 
                $out += "大", $line = 167, $out += $escape(rs.touristGroup.childCount), $out += "小</td> ", 
                $line = 168) : ($out += " <td></td> <td></td> <td></td> ", $line = 172), $out += " ", 
                $line = 172, null != searchParam && ($out += " ", $line = 172, 1 == searchParam.type ? ($out += " <td>", 
                $line = 173, rs.toBusinessGroup && ($line = 173, $out += $escape(rs.toBusinessGroup.name), 
                $line = 173), $out += "</td> ", $line = 174) : ($out += " <td>", $line = 175, rs.fromBusinessGroup && ($line = 175, 
                $out += $escape(rs.fromBusinessGroup.name), $line = 175), $out += "</td> ", $line = 176), 
                $out += " ", $line = 176), $out += " ", $line = 177, null != rs.user ? ($out += " <td>", 
                $line = 178, $out += $escape(rs.user.realName), $out += "</td> <td>", $line = 179, 
                $out += $escape(rs.user.mobileNumber), $out += "</td> ", $line = 180) : ($out += " <td></td> <td></td> ", 
                $line = 183), $out += " <td>", $line = 184, $out += $escape(rs.transNeedPayMoney), 
                $out += "</td> <td>", $line = 185, $out += $escape(rs.transPayedMoney), $out += "</td> <td>", 
                $line = 186, 0 == rs.status ? ($out += '<span style="color:#D2691E;">未确认</span>', 
                $line = 186) : 1 == rs.status ? ($out += '<span style="color: green;">已接收</span>', 
                $line = 186) : 2 == rs.status ? ($out += '<span style="color: red;">已拒收</span>', 
                $line = 186) : ($out += '<span style="">未使用</span>', $line = 186), $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entity-id="', 
                $line = 189, $out += $escape(rs.id), $out += '" class="cursor btn-TransferOut-view"> 查看 </a> <a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 193, $out += $escape(rs.id), $out += '" class="cursor btn-TransferOut-edit"> 编辑 </a> <a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 197, $out += $escape(rs.id), $out += '" class="cursor btn-TransferOut-delete"> 撤销 </a> </div> <div class="hidden-md hidden-lg"> <div class="inline pos-rel"> <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto"> <i class="ace-icon fa fa-cog icon-only bigger-110"></i> </button> <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"> <li> <a data-entity-id="', 
                $line = 211, $out += $escape(rs.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-TransferOut-view" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 219, $out += $escape(rs.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-TransferOut-edit" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 227, $out += $escape(rs.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-TransferOut-delete" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </span> </a> </li> </ul> </div> </div> </td> </tr> ', 
                $line = 238), $out += " ", $line = 238;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <input type="hidden" name="pageNo" value="', 
            $line = 243, $out += $escape(searchParam.pageNo), $out += '" /> <input type="hidden" name="totalPage" value="', 
            $line = 244, $out += $escape(searchParam.totalPage), $out += '" /> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计', 
            $line = 245, $out += $escape(searchParam.totalCount), $out += '条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous" href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 254, $out += $escape(parseInt(searchParam.pageNo) + 1), $out += "/", $line = 254, 
            $out += $escape(searchParam.totalPage), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div> </div>   <div id="transferIn" class="tab-pane fade clearfix"> <div class="col-sm-12 transferIn-content"> </div> </div>  </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row col-xs-12 innerTransfer_list">\r\n	<div class="col-xs-12">\r\n		<div class="tabbable">\r\n			<ul class="nav nav-tabs" id="myTab">\r\n				<li class="active">\r\n					<a data-toggle="tab" href="#transferOut" class="transferOut" aria-expanded="false" data-value="1">\r\n						<i class="fa fa-paper-plane fa-2"></i> 我部转出\r\n					</a>\r\n				</li>\r\n\r\n				<li>\r\n					<a data-toggle="tab" href="#transferIn" class="transferIn" aria-expanded="true" data-value="2">\r\n						<i class="fa fa-hourglass"></i> 他部转入\r\n					</a>\r\n				</li>\r\n			</ul>\r\n\r\n\r\n			<div class="tab-content">\r\n				<!--我部转出start-->\r\n				<div id="transferOut" class="tab-pane fade active in clearfix">\r\n					<div class="col-xs-12 transferOut-content">\r\n						<div class="page-header">\r\n							<h1>\r\n								<small class="transferOut-Header-Cost">\r\n									<i class="ace-icon fa fa-angle-double-right"></i>                    \r\n									<lable style="min-width:10%; display:inline-block;">人数合计 : <span class="adultCount">{{total.adultCount}}</span>大<span class="childCount">{{total.childCount}}</span>小</lable>  \r\n								    <lable style="min-width:10%; display:inline-block;">应付款合计:<span class="transNeedPayMoney">{{total.transNeedPayMoney}} </span>元</lable>    \r\n								    <lable style="min-width:10%; display:inline-block;">已付款合计:<span class="transPayedMoney">{{total.transPayedMoney}}</span>元</lable>          \r\n								</small>                \r\n							</h1>\r\n						</div>\r\n					</div>\r\n\r\n					<div class="form-group form-horizontal">\r\n						<div class="search-area">\r\n							<label class="pull-left control-label no-padding-right">线路产品：</label>\r\n							<div class="col-sm-2">\r\n								<select name="lineProductId" class="col-xs-12">\r\n									<option value="">全部</option>\r\n									{{each lineProduct as rs}}\r\n									<option value="{{rs.id}}" {{if searchParam!=null}}{{if searchParam.lineProductId==rs.id}}selected="selected" {{/if}}{{/if}}>\r\n										{{rs.name}}\r\n									</option>\r\n									{{/each}}\r\n								</select>\r\n							</div>\r\n							<div class="form-group">\r\n								<div class="search-area">\r\n									<div class="col-xs-2">\r\n										<div class="col-xs-12">\r\n											<div class="input-group">\r\n												<input class="col-xs-12 datetimepicker" name="startTime" placeholder="出游起始日期" value="{{startDay}}" type="text" />\r\n												<span class="input-group-addon">\r\n														<i class="fa fa-calendar"></i>\r\n													</span>\r\n											</div>\r\n										</div>\r\n									</div>\r\n\r\n									<div class="col-xs-2">\r\n										<div class="col-xs-12">\r\n											<div class="input-group">\r\n												<input class="col-xs-12 datetimepicker" name="endTime" placeholder="出游结束日期" value="" type="text" />\r\n												<span class="input-group-addon">\r\n														<i class="fa fa-calendar"></i>\r\n													</span>\r\n											</div>\r\n										</div>\r\n									</div>\r\n\r\n\r\n									<label class="control-label no-padding-right pull-left">部门：</label>\r\n									<div class="col-sm-1">\r\n										<select name="businessGroupId" class="col-xs-12">\r\n											<option value="">全部</option>\r\n											{{each businessGroup as rs}}\r\n											<option value="{{rs.id}}" {{if searchParam!=null}}{{if searchParam.businessGroupId==rs.id}}selected="selected" {{/if}}{{/if}}>\r\n												{{rs.name}}\r\n											</option>\r\n											{{/each}}\r\n										</select>\r\n									</div>\r\n\r\n									<label class="control-label no-padding-right pull-left">联系人：</label>\r\n									<div class="col-sm-1">    \r\n										<select name="creator" class="col-xs-12">\r\n											<option value="">全部</option>\r\n											{{each user as rs}}\r\n											<option value="{{rs.id}}" {{if searchParam!=null}}{{if searchParam.creator==rs.id}}selected="selected" {{/if}}{{/if}}>\r\n												{{rs.realName}}\r\n											</option>\r\n											{{/each}}\r\n										</select>\r\n									</div>\r\n\r\n\r\n									<label class="control-label no-padding-right pull-left">状态：</label>\r\n									<div class="col-sm-1 btn-group btn-status">\r\n										<button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n											<span>\r\n											   {{if searchParam.status == ""}}\r\n													全部\r\n												{{else if searchParam.status == 1}}\r\n													已接收\r\n												{{else if searchParam.status == 2}}\r\n													已拒收\r\n												{{else}}\r\n													未确认\r\n												{{/if}}\r\n											</span>\r\n											<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n										</button>\r\n										<ul class="dropdown-menu">\r\n											<li>\r\n												<a data-value="" href="javascript:void(0)">全部</a>\r\n											</li>\r\n											<li>\r\n												<a data-value="0" href="javascript:void(0)">未确认</a>\r\n											</li>\r\n											<li>\r\n												<a data-value="1" href="javascript:void(0)">已接收</a>\r\n											</li>\r\n											<li>\r\n												<a data-value="2" href="javascript:void(0)">已拒收</a>\r\n											</li>\r\n										</ul>\r\n									</div>\r\n\r\n									<button class="btn-sm btn-transferOut-search search-btn">\r\n										<i class="ace-icon fa fa-search"></i> 搜索\r\n									</button>\r\n									<button class="btn btn-sm btn-success btn-transfer-export">导出名单</button>\r\n\r\n								</div>\r\n							</div>\r\n							<!-- 分页查询数据 -->\r\n							<table class="table table-striped table-bordered table-hover">\r\n								<thead>\r\n									<tr class="bg-blur">\r\n										<th>线路产品</th>\r\n										<th>天数</th>\r\n										<th>出游日期</th>\r\n										<th>游客</th>\r\n										<th>人数</th>\r\n										<th>部门</th>\r\n										<th>联系人</th>\r\n										<th>联系电话</th>\r\n										<th>应收</th>\r\n										<th>已收</th>\r\n										<th>对方状态</th>\r\n										<th>操作</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									{{each resultList as rs}} {{if rs!=null}}\r\n									<tr data-entity-id="{{rs.id}}">\r\n										{{if rs.lineProduct!=null}}\r\n										   <td>{{rs.lineProduct.name}}</td>\r\n										   <td>{{rs.lineProduct.days}}</td>\r\n										{{else}}\r\n										   <td></td>\r\n										   <td></td>\r\n										{{/if}} {{if rs.touristGroup != null}}\r\n										<td>{{rs.touristGroup.startTime}}</td>\r\n										<td>{{if rs.touristGroup.contactMember!=null}}{{rs.touristGroup.contactMember.name}}{{/if}}</td>\r\n										<td>{{rs.touristGroup.adultCount}}大{{rs.touristGroup.childCount}}小</td>\r\n										{{else}}\r\n										<td></td>\r\n										<td></td> \r\n										<td></td>\r\n										{{/if}} {{if searchParam!=null}} {{if searchParam.type==1}}\r\n										<td>{{if rs.toBusinessGroup}}{{rs.toBusinessGroup.name}}{{/if}}</td>\r\n										{{else}}\r\n										<td>{{if rs.fromBusinessGroup}}{{rs.fromBusinessGroup.name}}{{/if}}</td>\r\n										{{/if}} {{/if}} \r\n										{{if rs.user!=null}}\r\n										<td>{{rs.user.realName}}</td>\r\n										<td>{{rs.user.mobileNumber}}</td>\r\n										{{else}}\r\n										<td></td>\r\n										<td></td>\r\n										{{/if}}\r\n										<td>{{rs.transNeedPayMoney}}</td>\r\n										<td>{{rs.transPayedMoney}}</td>\r\n										<td>{{if rs.status == 0}}<span style="color:#D2691E;">未确认</span>{{else if rs.status == 1}}<span style="color: green;">已接收</span>{{else if rs.status == 2}}<span style="color: red;">已拒收</span>{{else}}<span style="">未使用</span>{{/if}}</td>\r\n										<td>\r\n											<div class="hidden-sm hidden-xs btn-group">\r\n												<a data-entity-id="{{rs.id}}" class="cursor  btn-TransferOut-view">\r\n													查看\r\n												</a>\r\n							                    <a href="" class="cursor"> |</a>\r\n												<a data-entity-id="{{rs.id}}" class="cursor btn-TransferOut-edit">\r\n													编辑\r\n												</a>\r\n												<a href="" class="cursor"> |</a>\r\n												<a data-entity-id="{{rs.id}}" class="cursor btn-TransferOut-delete">\r\n													撤销\r\n												</a>\r\n											</div>  \r\n\r\n											<div class="hidden-md hidden-lg">\r\n												<div class="inline pos-rel">\r\n													<button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">\r\n														<i class="ace-icon fa fa-cog icon-only bigger-110"></i>\r\n													</button>\r\n\r\n													<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">\r\n\r\n														<li>\r\n															<a data-entity-id="{{rs.id}}" href="javascript:void(0)" class="tooltip-error btn-TransferOut-view" data-rel="tooltip">\r\n																<span class="red">\r\n																<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n															</span>\r\n															</a>\r\n														</li>\r\n\r\n														<li>\r\n															<a data-entity-id="{{rs.id}}" href="javascript:void(0)" class="tooltip-success btn-TransferOut-edit" data-rel="tooltip">\r\n																<span class="green">\r\n																<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>\r\n															</span>\r\n															</a>\r\n														</li>\r\n\r\n														<li>\r\n															<a data-entity-id="{{rs.id}}" href="javascript:void(0)" class="tooltip-error btn-TransferOut-delete" data-rel="tooltip">\r\n																<span class="red">\r\n																<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n															</span>\r\n															</a>\r\n														</li>\r\n													</ul>\r\n												</div>\r\n											</div>\r\n										</td>\r\n									</tr>\r\n									{{/if}} {{/each}}\r\n								</tbody>\r\n							</table>\r\n							<div class="row pageMode">\r\n								<div class="col-xs-6">\r\n									<input type="hidden" name="pageNo" value="{{searchParam.pageNo}}" />\r\n									<input type="hidden" name="totalPage" value="{{searchParam.totalPage}}" />\r\n									<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计{{searchParam.totalCount}}条记录</div>\r\n								</div>\r\n								<div class="col-xs-6">\r\n									<div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n										<ul class="pagination">\r\n											<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n											<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous" href="javascript:void(0)">上一页</a></li>\r\n											<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n												<a href="javascript:void(0)">\r\n										{{parseInt(searchParam.pageNo)+1}}/{{searchParam.totalPage}}\r\n										</a>\r\n											</li>\r\n											<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li>\r\n											<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n										</ul>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n				<!--我部转出end-->\r\n\r\n				<!--他部转入start-->\r\n				<div id="transferIn" class="tab-pane fade clearfix">\r\n					<div class="col-sm-12 transferIn-content">	\r\n					</div>\r\n				</div>\r\n				<!--他部转入end-->\r\n\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});