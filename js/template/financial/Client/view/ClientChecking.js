/*TMODJS:{"debug":true,"version":311,"md5":"0aa9e2af7b8440db87d9c580720e09d9"}*/
define(function(require) {
    return require("../../../template")("financial/Client/view/ClientChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, travelAgencyName = $data.travelAgencyName, year = $data.year, pager = $data.pager, fromPartnerAgencyId = $data.fromPartnerAgencyId, month = $data.month, allPerson = $data.allPerson, allNeedPayBook = $data.allNeedPayBook, allPayedActual = $data.allPayedActual, allNoPay = $data.allNoPay, allNoPayActual = $data.allNoPayActual, allBackMoney = $data.allBackMoney, $each = $utils.$each, role = ($data.rs, 
            $data.index, $data.fee, $data.$index, $data.role), $out = ($data.visitor, "");
            return $out += '<div class="row check clientCheckingMain"> <div class="col-xs-12 border"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area editable editable-click" style="margin-top: 10px"> <div class="form-group"> <label class=" control-label pull-left" style="margin-left: 15px">客户：', 
            $line = 7, $out += $escape(travelAgencyName), $out += '</label> <label class="col-sm-1 control-label no-padding-right">账期：</label> <select class="col-sm-1" name="ClientCheck_searchYear"> <option value="2015" ', 
            $line = 9, 2015 == year && ($out += 'selected="selected"', $line = 9), $out += '>2015</option> <option value="2014" ', 
            $line = 10, 2014 == year && ($out += 'selected="selected"', $line = 10), $out += '>2014</option> </select> <label class="col-sm-1 control-label no-padding-right"></label> <input type="hidden" id="ClientCheck_pager_pagerNo" value="', 
            $line = 12, $out += $escape(pager.pageNo), $out += '" /> <input type="hidden" value="', 
            $line = 13, $out += $escape(fromPartnerAgencyId), $out += '" name="ClientCheck_fromPartnerAgencyId" /> <select class="col-sm-1" name="ClientCheck_searchMonth"> <option value="">全部</option> <option value="1" ', 
            $line = 16, 1 == month && ($out += 'selected="selected"', $line = 16), $out += '>1月</option> <option value="2" ', 
            $line = 17, 2 == month && ($out += 'selected="selected"', $line = 17), $out += '>2月</option> <option value="3" ', 
            $line = 18, 3 == month && ($out += 'selected="selected"', $line = 18), $out += '>3月</option> <option value="4" ', 
            $line = 19, 4 == month && ($out += 'selected="selected"', $line = 19), $out += '>4月</option> <option value="5" ', 
            $line = 20, 5 == month && ($out += 'selected="selected"', $line = 20), $out += '>5月</option> <option value="6" ', 
            $line = 21, 6 == month && ($out += 'selected="selected"', $line = 21), $out += '>6月</option> <option value="7" ', 
            $line = 22, 7 == month && ($out += 'selected="selected"', $line = 22), $out += '>7月</option> <option value="8" ', 
            $line = 23, 8 == month && ($out += 'selected="selected"', $line = 23), $out += '>8月</option> <option value="9" ', 
            $line = 24, 9 == month && ($out += 'selected="selected"', $line = 24), $out += '>9月</option> <option value="10" ', 
            $line = 25, 10 == month && ($out += 'selected="selected"', $line = 25), $out += '>10月</option> <option value="11" ', 
            $line = 26, 11 == month && ($out += 'selected="selected"', $line = 26), $out += '>11月</option> <option value="12" ', 
            $line = 27, 12 == month && ($out += 'selected="selected"', $line = 27), $out += '>12月</option> </select> <button name="ClientCheck_searchButton" class="btn btn-sm btn-primary btn-financial-check-search" style="margin-left: 60px"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <button type="button" class="btn btn-sm btn-primary btn-success btn-clientExport" style="margin-left: 25px"> <span>导出报表</span> <i class="ace-icon fa fa-arrow-right icon-on-right"></i> </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group col-sm-12"> <label class="col-sm-2 ">总人数：', 
            $line = 42, $out += $escape(allPerson), $out += '</label> <label class="col-sm-2 ">总应收：', 
            $line = 43, $out += $escape(allNeedPayBook), $out += '</label> <label class="col-sm-2 ">总已收：', 
            $line = 44, $out += $escape(allPayedActual), $out += '</label> <label class="col-sm-2 ">总未收：', 
            $line = 45, $out += $escape(allNoPay), $out += '</label> <label class="col-sm-2 ">总实际未收：', 
            $line = 46, $out += $escape(allNoPayActual), $out += '</label> <label class="col-sm-2 ">总返款：', 
            $line = 47, $out += $escape(allBackMoney), $out += '</label> </div> </form> </div> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">线路产品</th> <th class="th-border">出游日期</th> <th class="th-border">联系人</th> <th class="th-border" style="width: 60px;">人数 </th> <th class="th-border">录入人</th> <th class="th-border">录入时间</th> <th class="th-border">应收</th> <th class="th-border" style="width: 120px;">明细</th> <th class="th-border">已收</th> <th class="th-border">未收</th> <th class="th-border" style="width: 100px">未收对账</th> <th class="th-border" style="width: 100px">返款</th> <th class="th-border">实际未收</th> <th class="th-border" style="width: 100px">说明</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border" style="width: 54px;">对账</th> </tr> </thead> <tbody class="checkingTbody"> ', 
            $line = 77, $each(pager.resultList, function(rs, index) {
                $out += ' <tr data-entity-id="', $line = 78, $out += $escape(rs.id), $out += '" name="eachTr"> <td>', 
                $line = 79, $out += $escape(index + 1), $out += "</td> <td>", $line = 80, $out += $escape(rs.lineProduct.name), 
                $out += "</td> <td>", $line = 81, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 82, null != rs.contactMember && ($line = 82, $out += $escape(rs.contactMember.name), 
                $line = 82), $out += "</td> <td>", $line = 83, $out += $escape(rs.adultCount), $out += "大", 
                $line = 83, $out += $escape(rs.childCount), $out += '小<a class="btn-show-group" href="#">展开</a></td> <td>', 
                $line = 84, null != rs.user && ($line = 84, $out += $escape(rs.user.realName), $line = 84), 
                $out += "</td> <td>", $line = 85, $out += $escape(rs.createTime), $out += "</td> <td>", 
                $line = 86, $out += $escape(rs.needPayAllMoney), $out += "</td> <td>大人：", $line = 87, 
                $out += $escape(rs.adultPrice), $out += " * ", $line = 87, $out += $escape(rs.adultCount), 
                $out += " = ", $line = 87, $out += $escape(rs.adultPrice * rs.adultCount), $out += "<br> 小孩：", 
                $line = 87, $out += $escape(rs.childPrice), $out += " * ", $line = 87, $out += $escape(rs.childCount), 
                $out += " = ", $line = 87, $out += $escape(rs.childPrice * rs.childCount), $out += "<br> ", 
                $line = 88, $each(rs.touristGroupFeeList, function(fee) {
                    $out += " ", $line = 88, $out += $escape(fee.describeInfo), $out += ":", $line = 88, 
                    $out += $escape(fee.price), $out += " * ", $line = 88, $out += $escape(fee.count), 
                    $out += " = ", $line = 88, $out += $escape(fee.count * fee.price), $out += "<br> ", 
                    $line = 88;
                }), $out += " </td> <td>社收", $line = 90, $out += $escape(rs.payedMoney), $out += ",导游现收", 
                $line = 90, $out += $escape(rs.currentNeedPayMoney), $out += '</td>  <td><label name="ClientCheck_notGet">', 
                $line = 92, $out += $escape(rs.needPayAllMoney - rs.payedMoney - rs.currentNeedPayMoney), 
                $out += '</label></td>  <td><input style="width: 100px" type="text" name="ClientCheck_checkUnIncomeMoney" value="', 
                $line = 94, $out += $escape(rs.checkUnIncomeMoney), $out += '" data-entity-id="', 
                $line = 94, $out += $escape(rs.checkUnIncomeMoney), $out += '" ', $line = 94, 1 == rs.isConfirmAccount && 1 != role && ($out += ' disabled = "true" ', 
                $line = 94), $out += ' maxlength="8" /></td>  <td><input style="width: 100px" type="text" name="ClientCheck_backMoney" value="', 
                $line = 96, $out += $escape(rs.backMoney), $out += '" data-entity-id="', $line = 96, 
                $out += $escape(rs.backMoney), $out += '" ', $line = 96, 1 == rs.isConfirmAccount && 1 != role && ($out += ' disabled = "true" ', 
                $line = 96), $out += ' maxlength="8" /></td>  <td>', $line = 98, 1 == rs.isConfirmAccount ? ($out += '<label name="ClientCheck_actualNotGet">', 
                $line = 98, $out += $escape(rs.realUnPayedMoney), $out += "</label>", $line = 98) : ($out += '<label name="ClientCheck_actualNotGet">', 
                $line = 98, $out += $escape(rs.checkUnIncomeMoney - rs.backMoney), $out += "</label>", 
                $line = 98), $out += " </td>  <td>", $line = 101, 1 == rs.isConfirmAccount ? ($out += '<input type="text" style="width: 100px" name="ClientCheck_remark" value="', 
                $line = 101, $out += $escape(rs.checkRemark), $out += '" data-entity-id="', $line = 101, 
                $out += $escape(rs.checkRemark), $out += '" ', $line = 101, 1 == rs.isConfirmAccount && 1 != role && ($out += ' disabled = "true" ', 
                $line = 101), $out += ' maxlength="200" />', $line = 101) : ($out += '<input style="width: 100px" type="text" name="ClientCheck_remark" value="" data-entity-id="" ', 
                $line = 101, 1 == rs.isConfirmAccount && 1 != role && ($out += ' disabled = "true" ', 
                $line = 101), $out += ' maxlength="200" />', $line = 101), $out += " </td> <td>", 
                $line = 103, null != rs.checkTime ? ($line = 103, $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd")), 
                $line = 103) : ($out += "-", $line = 103), $out += "</td> <td>", $line = 104, $out += $escape(rs.checkUserRealName), 
                $out += '</td> <td><input type="checkbox" class="ace" name="ClientCheck_checkBox" data-entity-id="', 
                $line = 105, $out += $escape(rs.isConfirmAccount), $out += '" ', $line = 105, 1 == rs.isConfirmAccount && ($out += 'checked="true"', 
                $line = 105), $out += " ", $line = 105, 1 == rs.isConfirmAccount && 1 != role && ($out += ' disabled = "true" ', 
                $line = 105), $out += ' > <span class="lbl"></span> </td> </tr> <tr class="hide" name="member"> <td colspan="17"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">是否联系人</th> </tr> </thead> <tbody> ', 
                $line = 123, $each(rs.touristGroupMemberList, function(visitor, index) {
                    $out += " <tr> <td>", $line = 125, $out += $escape(index + 1), $out += "</td> <td>", 
                    $line = 126, $out += $escape(visitor.name), $out += "</td> <td>", $line = 127, $out += $escape(visitor.mobileNumber), 
                    $out += "</td> <td>", $line = 128, 0 == visitor.idCardType && ($out += "身份证", $line = 128), 
                    $line = 128, 1 == visitor.idCardType && ($out += "护照", $line = 128), $line = 128, 
                    2 == visitor.idCardType && ($out += "其他", $line = 128), $out += "</td> <td>", $line = 129, 
                    $out += $escape(visitor.idCardNumber), $out += "</td> <td>", $line = 130, 1 == visitor.isContactUser && ($out += "是", 
                    $line = 130), $out += "</td> </tr> ", $line = 132;
                }), $out += " </tbody> </table> </td> </tr> ", $line = 137;
            }), $out += ' </tbody> </table> <div class="row pageMode" style="margin-top: 40px"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计', 
            $line = 144, $out += $escape(pager.totalCount), $out += '条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous" href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a href="javascript:void(0)"> ', 
            $line = 153, 0 == pager.totalPage ? ($out += " 0/0 ", $line = 153) : ($out += " ", 
            $line = 153, $out += $escape(pager.pageNo + 1), $out += "/", $line = 153, $out += $escape(pager.totalPage), 
            $out += " ", $line = 153), $out += ' </a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> <div class="form-group col-sm-12 " style="padding-right: 20px; margin-top: 20px"> <label class="control-label pull-right"><input type="checkbox" name="ClientCheck_checkAllBox"> 全选</label> </div> <div class="clearfix"></div> <br> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary btn-close-tab"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary" name="ClientCheck_checkButton" style="margin-left: 20px"> <i class="ace-icon fa fa-check-circle"></i> 确认 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row check clientCheckingMain">\r\n	<div class="col-xs-12 border">\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="search-area  editable editable-click"\r\n				style="margin-top: 10px">\r\n				<div class="form-group">\r\n					<label class=" control-label pull-left" style="margin-left: 15px">客户：{{travelAgencyName}}</label> <label class="col-sm-1 control-label no-padding-right">账期：</label> \r\n					<select class="col-sm-1" name="ClientCheck_searchYear">\r\n						<option value="2015" {{if year==2015}}selected="selected"{{/if}}>2015</option>\r\n						<option value="2014" {{if year==2014}}selected="selected"{{/if}}>2014</option>\r\n					</select> <label class="col-sm-1 control-label no-padding-right"></label> \r\n					<input type="hidden" id="ClientCheck_pager_pagerNo" value="{{pager.pageNo}}" /> \r\n					<input type="hidden" value="{{fromPartnerAgencyId}}" name="ClientCheck_fromPartnerAgencyId" />\r\n					<select class="col-sm-1" name="ClientCheck_searchMonth">\r\n						<option value="">全部</option>\r\n						<option value="1" {{if month==1}}selected="selected"{{/if}}>1月</option>\r\n						<option value="2" {{if month==2}}selected="selected"{{/if}}>2月</option>\r\n						<option value="3" {{if month==3}}selected="selected"{{/if}}>3月</option>\r\n						<option value="4" {{if month==4}}selected="selected"{{/if}}>4月</option>\r\n						<option value="5" {{if month==5}}selected="selected"{{/if}}>5月</option>\r\n						<option value="6" {{if month==6}}selected="selected"{{/if}}>6月</option>\r\n						<option value="7" {{if month==7}}selected="selected"{{/if}}>7月</option>\r\n						<option value="8" {{if month==8}}selected="selected"{{/if}}>8月</option>\r\n						<option value="9" {{if month==9}}selected="selected"{{/if}}>9月</option>\r\n						<option value="10" {{if month==10}}selected="selected"{{/if}}>10月</option>\r\n						<option value="11" {{if month==11}}selected="selected"{{/if}}>11月</option>\r\n						<option value="12" {{if month==12}}selected="selected"{{/if}}>12月</option>\r\n					</select>\r\n					<button name="ClientCheck_searchButton" class="btn btn-sm btn-primary btn-financial-check-search" style="margin-left: 60px">\r\n						<i class="ace-icon fa fa-search"></i> 搜索\r\n					</button>\r\n					<button type="button" class="btn btn-sm btn-primary btn-success btn-clientExport" style="margin-left: 25px">\r\n							<span>导出报表</span>\r\n							<i class="ace-icon fa fa-arrow-right icon-on-right"></i>\r\n					</button>\r\n				</div>\r\n\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group col-sm-12">\r\n				<label class="col-sm-2  ">总人数：{{allPerson}}</label> \r\n				<label class="col-sm-2 ">总应收：{{allNeedPayBook}}</label> \r\n				<label class="col-sm-2 ">总已收：{{allPayedActual}}</label> \r\n				<label class="col-sm-2 ">总未收：{{allNoPay}}</label> \r\n				<label class="col-sm-2 ">总实际未收：{{allNoPayActual}}</label> \r\n				<label class="col-sm-2 ">总返款：{{allBackMoney}}</label>\r\n			</div>\r\n		</form>\r\n	</div>\r\n	<div class="clearfix"></div>\r\n	<table class="table table-striped table-bordered table-hover all"\r\n		style="margin-top: 30px">\r\n		<thead>\r\n			<tr>\r\n				<th class="th-border">序号</th>\r\n				<th class="th-border">线路产品</th>\r\n				<th class="th-border">出游日期</th>\r\n				<th class="th-border">联系人</th>\r\n				<th class="th-border" style="width: 60px;">人数 </th>\r\n				<th class="th-border">录入人</th>\r\n				<th class="th-border">录入时间</th>\r\n				<th class="th-border">应收</th>\r\n				<th class="th-border" style="width: 120px;">明细</th>\r\n				<th class="th-border">已收</th>\r\n				<th class="th-border">未收</th>\r\n				<th class="th-border" style="width: 100px">未收对账</th>\r\n				<th class="th-border" style="width: 100px">返款</th>\r\n				<th class="th-border">实际未收</th>\r\n				<th class="th-border" style="width: 100px">说明</th>\r\n				<th class="th-border">对账时间</th>\r\n				<th class="th-border">对账人</th>\r\n				<th class="th-border" style="width: 54px;">对账</th>\r\n			</tr>\r\n		</thead>\r\n		<tbody class="checkingTbody">\r\n			{{each pager.resultList as rs index}}  \r\n			<tr data-entity-id="{{rs.id}}" name="eachTr">\r\n				<td>{{index+1}}</td>\r\n				<td>{{rs.lineProduct.name}}</td>\r\n				<td>{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n				<td>{{if rs.contactMember != null}}{{rs.contactMember.name}}{{/if}}</td>\r\n				<td>{{rs.adultCount}}大{{rs.childCount}}小<a class="btn-show-group" href="#">展开</a></td>\r\n				<td>{{if rs.user != null}}{{rs.user.realName}}{{/if}}</td>\r\n				<td>{{rs.createTime}}</td>\r\n				<td>{{rs.needPayAllMoney}}</td>\r\n				<td>大人：{{rs.adultPrice}} * {{rs.adultCount}} = {{rs.adultPrice * rs.adultCount}}<br> 小孩：{{rs.childPrice}} * {{rs.childCount}} = {{rs.childPrice * rs.childCount}}<br> \r\n					{{each rs.touristGroupFeeList as fee}} {{fee.describeInfo}}:{{fee.price}} * {{fee.count}} = {{fee.count * fee.price}}<br> {{/each}}\r\n				</td>\r\n				<td>社收{{rs.payedMoney}},导游现收{{rs.currentNeedPayMoney}}</td>\r\n				<!-- 未收 -->\r\n				<td><label name="ClientCheck_notGet">{{rs.needPayAllMoney-rs.payedMoney-rs.currentNeedPayMoney}}</label></td>\r\n				<!--未收对账 -->\r\n				<td><input style="width: 100px" type="text" name="ClientCheck_checkUnIncomeMoney" value="{{rs.checkUnIncomeMoney}}" data-entity-id="{{rs.checkUnIncomeMoney}}" {{if rs.isConfirmAccount == 1 && role != 1 }} disabled = "true" {{/if}} maxlength="8" /></td>\r\n				<!-- 返款 -->\r\n				<td><input style="width: 100px" type="text" name="ClientCheck_backMoney" value="{{rs.backMoney}}" data-entity-id="{{rs.backMoney}}" {{if rs.isConfirmAccount == 1 && role != 1 }} disabled = "true" {{/if}} maxlength="8" /></td>\r\n				<!-- 实际未收 -->\r\n				<td>{{if rs.isConfirmAccount == 1}}<label name="ClientCheck_actualNotGet">{{rs.realUnPayedMoney}}</label>{{else}}<label name="ClientCheck_actualNotGet">{{rs.checkUnIncomeMoney-rs.backMoney}}</label>{{/if}}\r\n				</td>\r\n				<!--说明 -->  \r\n				<td>{{if rs.isConfirmAccount == 1}}<input type="text" style="width: 100px" name="ClientCheck_remark" value="{{rs.checkRemark}}"  data-entity-id="{{rs.checkRemark}}" {{if rs.isConfirmAccount == 1 && role != 1 }} disabled = "true" {{/if}} maxlength="200" />{{else}}<input style="width: 100px" type="text" name="ClientCheck_remark" value="" data-entity-id="" {{if rs.isConfirmAccount == 1 && role != 1 }} disabled = "true" {{/if}} maxlength="200" />{{/if}}\r\n				</td>\r\n				<td>{{if rs.checkTime != null}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd\'}}{{else}}-{{/if}}</td>\r\n				<td>{{rs.checkUserRealName}}</td>\r\n				<td><input type="checkbox" class="ace" name="ClientCheck_checkBox" data-entity-id="{{rs.isConfirmAccount}}" {{if rs.isConfirmAccount== 1}}checked="true"{{/if}}  {{if rs.isConfirmAccount == 1 && role != 1 }} disabled = "true" {{/if}} >\r\n				    <span class="lbl"></span>\r\n				</td>\r\n			</tr>\r\n			<tr class="hide" name="member">\r\n				<td colspan="17">\r\n					<table class="table table-striped table-bordered table-hover">\r\n						<thead>\r\n							<tr>\r\n								<th class="th-border">序号</th>\r\n								<th class="th-border">姓名</th>\r\n								<th class="th-border">联系电话</th>\r\n								<th class="th-border">证件类型</th>\r\n								<th class="th-border">证件号</th>\r\n								<th class="th-border">是否联系人</th>\r\n							</tr>\r\n						</thead>\r\n						<tbody>\r\n							{{each rs.touristGroupMemberList as visitor index}}\r\n							<tr>\r\n								<td>{{index+1}}</td>\r\n								<td>{{visitor.name}}</td>\r\n								<td>{{visitor.mobileNumber}}</td>\r\n								<td>{{if visitor.idCardType == 0}}身份证{{/if}}{{if visitor.idCardType == 1}}护照{{/if}}{{if visitor.idCardType == 2}}其他{{/if}}</td>\r\n								<td>{{visitor.idCardNumber}}</td>\r\n								<td>{{if visitor.isContactUser == 1}}是{{/if}}</td>\r\n							</tr>\r\n							{{/each}}\r\n						</tbody>\r\n					</table>\r\n				</td>\r\n			</tr>\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n\r\n	<div class="row pageMode" style="margin-top: 40px">\r\n		<div class="col-xs-6">\r\n			<div class="dataTables_info" id="dynamic-table_info" role="status"\r\n				aria-live="polite">共计{{pager.totalCount}}条记录</div>\r\n		</div>\r\n		<div class="col-xs-6">\r\n			<div class="dataTables_paginate paging_simple_numbers"\r\n				id="dynamic-table_paginate">\r\n				<ul class="pagination">\r\n					<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n					<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous" href="javascript:void(0)">上一页</a></li>\r\n					<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a href="javascript:void(0)"> \r\n						{{if pager.totalPage == 0}} 0/0 {{else}} {{pager.pageNo+1}}/{{pager.totalPage}} {{/if}} </a></li>\r\n					<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li>\r\n					<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n				</ul>\r\n			</div>\r\n		</div>\r\n	</div>\r\n\r\n	<div class="form-group col-sm-12 "\r\n		style="padding-right: 20px; margin-top: 20px">\r\n\r\n		<label class="control-label pull-right"><input type="checkbox"\r\n			name="ClientCheck_checkAllBox"> 全选</label>\r\n	</div>\r\n	<div class="clearfix"></div>\r\n\r\n\r\n	<br>\r\n\r\n\r\n	<form class="form-horizontal" role="form" onsubmit="return false">\r\n		<div class="form-group" style="text-align: center;">\r\n			<button class="btn btn-xs btn-primary btn-close-tab">\r\n				<i class="ace-icon fa fa-times-circle"></i> 关闭\r\n			</button>\r\n			<button class="btn btn-xs btn-primary" name="ClientCheck_checkButton" style="margin-left: 20px">\r\n				<i class="ace-icon fa fa-check-circle"></i> 确认\r\n			</button>\r\n		</div>\r\n	</form>\r\n\r\n\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});