/*TMODJS:{"debug":true,"version":56,"md5":"0cd9f5c60f0957a020a07152f3abca7a"}*/
define(function(require){return require('../../../../../template')('resource/touristGroupN/view/tourists/update/updateOther', function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,isTransfer=$data.isTransfer,$escape=$utils.$escape,dutyDepartmentName=$data.dutyDepartmentName,dutyDepartmentId=$data.dutyDepartmentId,dutySubDepartmentName=$data.dutySubDepartmentName,dutySubDepartmentId=$data.dutySubDepartmentId,dutyUserName=$data.dutyUserName,dutyUserId=$data.dutyUserId,isRestaurantRequired=$data.isRestaurantRequired,restaurantClearFlag=$data.restaurantClearFlag,isTicketRequired=$data.isTicketRequired,ticketClearFlag=$data.ticketClearFlag,isOtherRequired=$data.isOtherRequired,otherClearFlag=$data.otherClearFlag,consumeTime=$data.consumeTime,restaurantRequired=$data.restaurantRequired,ticketRequired=$data.ticketRequired,otherRequired=$data.otherRequired,needPayAllMoney=$data.needPayAllMoney,otherFeeDel=$data.otherFeeDel,otherFee=$data.otherFee,$each=$utils.$each,rs=$data.rs,$index=$data.$index,$out='';$out+='<div class="container-fluid mar-t-20"> <div class="row"> <div class="col-xs-12"> <div class="col-xs-2 col-xs-offset-1"> <select class="col-xs-12 T-abversion"> <option value="0">本部操作</option> <option value="1" ';
$line=7;if(isTransfer == 1){
$out+='selected';
$line=7;}
$out+='>他部操作</option> </select> </div> <div class="col-xs-9';
$line=10;if(isTransfer != 1){
$out+=' hidden';
$line=10;}
$out+=' T-internal"> <div class="col-xs-1 text-right no-padding-right control-label no-padding-left">部门</div> <div class="col-xs-2"> <input type="text" class="col-xs-12" name="businessName"';
$line=13;if(isTransfer == 1){
$out+=' value="';
$line=13;$out+=$escape(dutyDepartmentName);
$out+='" data-id="';
$line=13;$out+=$escape(dutyDepartmentId);
$out+='"';
$line=13;}
$out+='> </div> <div class="col-xs-1 text-right no-padding-right control-label no-padding-left">子部门</div> <div class="col-xs-2"> <input type="text" class="col-xs-12" name="groupName"';
$line=17;if(isTransfer == 1){
$out+=' value="';
$line=17;$out+=$escape(dutySubDepartmentName);
$out+='" data-id="';
$line=17;$out+=$escape(dutySubDepartmentId);
$out+='"';
$line=17;}
$out+=' data-type="1"> </div> <div class="col-xs-2 text-right no-padding-right control-label">责任计调</div> <div class="col-xs-4"> <input type="text" class="col-xs-12" name="dutyUserName"';
$line=21;if(isTransfer == 1){
$out+=' value="';
$line=21;$out+=$escape(dutyUserName);
$out+='" data-id="';
$line=21;$out+=$escape(dutyUserId);
$out+='"';
$line=21;}
$out+=' data-type="1"> </div> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-10 T-action-plan"> <label class="control-label" data-type="restaurant"> <input type="checkbox" name="isRestaurantRequired" class="ace" ';
$line=28;if(isRestaurantRequired){
$out+='checked';
$line=28;}
$line=28;if(restaurantClearFlag == 1){
$out+=' disabled';
$line=28;}
$out+='> <span class="lbl"> 餐厅</span> </label> <label class="control-label" data-type="ticket"> <input type="checkbox" name="isTicketRequired" class="ace" ';
$line=32;if(isTicketRequired){
$out+='checked';
$line=32;}
$line=32;if(ticketClearFlag == 1){
$out+=' disabled';
$line=32;}
$out+='> <span class="lbl"> 票务</span> </label> <label class="control-label" data-type="other"> <input type="checkbox" name="isOtherRequired" class="ace" ';
$line=36;if(isOtherRequired){
$out+='checked';
$line=36;}
$line=36;if(otherClearFlag == 1){
$out+=' disabled';
$line=36;}
$out+='> <span class="lbl"> 其它</span> </label> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary">*</span>消费日期</div> <div class="col-xs-3"> <input type="text" class="col-xs-12 datepicker" name="consumeTime" value="';
$line=45;$out+=$escape($helpers. dateFormat(consumeTime ,  'yyyy-MM-dd'));
$out+='"> </div> </div> <div class="col-xs-12 mar-t-10 ';
$line=48;if(!isRestaurantRequired){
$out+='hidden ';
$line=48;}
$out+='T-ask-restaurant"> <div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary">*</span>餐厅要求</div> <div class="col-xs-11"> <input type="text" class="col-xs-12" name="restaurantRequired" value="';
$line=51;$out+=$escape(restaurantRequired);
$out+='"> </div> </div> <div class="col-xs-12 mar-t-10';
$line=54;if(!isTicketRequired){
$out+=' hidden';
$line=54;}
$out+=' T-ask-ticket"> <div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary">*</span>票务要求</div> <div class="col-xs-11"> <input type="text" class="col-xs-12" name="ticketRequired" value="';
$line=57;$out+=$escape(ticketRequired);
$out+='"> </div> </div> <div class="col-xs-12 mar-t-10 ';
$line=60;if(!isOtherRequired){
$out+='hidden ';
$line=60;}
$out+='T-ask-other"> <div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary">*</span>其它要求</div> <div class="col-xs-11"> <input type="text" class="col-xs-12" name="otherRequired" value="';
$line=63;$out+=$escape(otherRequired);
$out+='"> </div> </div> <div class="col-xs-12 mar-t-20"> <div class="col-xs-2" style="padding-left: 20px;"> <button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> <div class="col-xs-8" style="padding-top: 4px;"> <label class="control-label pull-left" style="width: 35px;">应付</label> <input type="text" readonly class="pull-left F-float F-money" name="needPayAllMoney" value="';
$line=72;$out+=$escape(needPayAllMoney);
$out+='"> </div> </div> <div class="col-xs-12 mar-t-20"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>费用项</th> <th>数量</th> <th>单价</th> <th>金额</th> <th>说明</th> <th>操作</th> </tr> </thead> <tbody class="T-fee-list" data-type="3" data-del-json="';
$line=87;$out+=$escape(otherFeeDel);
$out+='"> ';
$line=88;if(otherFee && otherFee.length > 0){
$out+=' ';
$line=89;$each(otherFee,function(rs,$index){
$out+=' <tr data-id="';
$line=90;$out+=$escape(rs.id);
$out+='"> <td> <select class="col-xs-12" name="type"> <option value="5" ';
$line=93;if(rs.type == "5"){
$out+='selected';
$line=93;}
$out+='>餐厅费用</option> <option value="11" ';
$line=94;if(rs.type == "11"){
$out+='selected';
$line=94;}
$out+='>票务费用</option> <option value="12" ';
$line=95;if(rs.type == "12"){
$out+='selected';
$line=95;}
$out+='>其他费用</option> </select> </td> <td><input type="text" class="col-xs-12 T-option F-float F-count" name="count" value="';
$line=98;$out+=$escape(rs.count);
$out+='"></td> <td><input type="text" class="col-xs-12 T-option F-float F-money" name="price" value="';
$line=99;$out+=$escape(rs.price);
$out+='"></td> <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="';
$line=100;$out+=$escape(rs.price*rs.count);
$out+='"></td> <td><input type="text" class="col-xs-12" name="remark" value="';
$line=101;$out+=$escape(rs.remark);
$out+='"></td> <td><a class="cursor T-action T-delete">删除</a></td> </tr> ';
$line=104;});
$out+=' ';
$line=105;}
$out+=' </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div>';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'<div class="container-fluid mar-t-20">\r\n	<div class="row">\r\n		<div class="col-xs-12">\r\n			<div class="col-xs-2 col-xs-offset-1">\r\n				<select class="col-xs-12 T-abversion">\r\n					<option value="0">本部操作</option>\r\n					<option value="1" {{if isTransfer == 1}}selected{{/if}}>他部操作</option>\r\n				</select> \r\n			</div>\r\n			<div class="col-xs-9{{if isTransfer != 1}} hidden{{/if}} T-internal">\r\n				<div class="col-xs-1 text-right no-padding-right control-label no-padding-left">部门</div>\r\n				<div class="col-xs-2">\r\n					<input type="text" class="col-xs-12" name="businessName"{{if isTransfer == 1}} value="{{dutyDepartmentName}}" data-id="{{dutyDepartmentId}}"{{/if}}>\r\n				</div>\r\n				<div class="col-xs-1 text-right no-padding-right control-label no-padding-left">子部门</div>\r\n				<div class="col-xs-2">\r\n					<input type="text" class="col-xs-12" name="groupName"{{if isTransfer == 1}} value="{{dutySubDepartmentName}}" data-id="{{dutySubDepartmentId}}"{{/if}} data-type="1">\r\n				</div>\r\n				<div class="col-xs-2 text-right no-padding-right control-label">责任计调</div>\r\n				<div class="col-xs-4">\r\n					<input type="text" class="col-xs-12" name="dutyUserName"{{if isTransfer == 1}} value="{{dutyUserName}}" data-id="{{dutyUserId}}"{{/if}} data-type="1">\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-10 T-action-plan">\r\n				<label class="control-label" data-type="restaurant">\r\n					<input type="checkbox" name="isRestaurantRequired" class="ace" {{if isRestaurantRequired}}checked{{/if}}{{if restaurantClearFlag == 1}} disabled{{/if}}>\r\n					<span class="lbl"> 餐厅</span>\r\n				</label>\r\n				<label class="control-label" data-type="ticket">\r\n					<input type="checkbox" name="isTicketRequired" class="ace" {{if isTicketRequired}}checked{{/if}}{{if ticketClearFlag == 1}} disabled{{/if}}>\r\n					<span class="lbl"> 票务</span>\r\n				</label>\r\n				<label class="control-label" data-type="other">\r\n					<input type="checkbox" name="isOtherRequired" class="ace" {{if isOtherRequired}}checked{{/if}}{{if otherClearFlag == 1}} disabled{{/if}}>\r\n					<span class="lbl"> 其它</span>\r\n				</label>\r\n			</div>\r\n		</div>\r\n		\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary">*</span>消费日期</div>\r\n			<div class="col-xs-3">\r\n				<input type="text" class="col-xs-12 datepicker" name="consumeTime" value="{{consumeTime | dateFormat: \'yyyy-MM-dd\'}}">\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10 {{if !isRestaurantRequired}}hidden {{/if}}T-ask-restaurant">\r\n			<div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary">*</span>餐厅要求</div>\r\n			<div class="col-xs-11">\r\n				<input type="text" class="col-xs-12" name="restaurantRequired" value="{{restaurantRequired}}">\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10{{if !isTicketRequired}} hidden{{/if}} T-ask-ticket">\r\n			<div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary">*</span>票务要求</div>\r\n			<div class="col-xs-11">\r\n				<input type="text" class="col-xs-12" name="ticketRequired" value="{{ticketRequired}}">\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10 {{if !isOtherRequired}}hidden {{/if}}T-ask-other">\r\n			<div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary">*</span>其它要求</div>\r\n			<div class="col-xs-11">\r\n				<input type="text" class="col-xs-12" name="otherRequired" value="{{otherRequired}}">\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			<div class="col-xs-2" style="padding-left: 20px;">\r\n				<button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button>				\r\n			</div>\r\n			<div class="col-xs-8" style="padding-top: 4px;">\r\n				<label class="control-label pull-left" style="width: 35px;">应付</label>\r\n				<input type="text" readonly class="pull-left F-float F-money" name="needPayAllMoney" value="{{needPayAllMoney}}">\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			<table class="table table-striped table-new table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th>费用项</th>\r\n						<th>数量</th>\r\n						<th>单价</th>\r\n						<th>金额</th>\r\n						<th>说明</th>\r\n						<th>操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-fee-list" data-type="3" data-del-json="{{otherFeeDel}}">\r\n				{{if otherFee && otherFee.length > 0}}\r\n					{{each otherFee as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td>\r\n							<select class="col-xs-12" name="type">\r\n								<option value="5" {{if rs.type == "5"}}selected{{/if}}>餐厅费用</option>\r\n								<option value="11" {{if rs.type == "11"}}selected{{/if}}>票务费用</option>\r\n								<option value="12" {{if rs.type == "12"}}selected{{/if}}>其他费用</option>\r\n							</select>\r\n						</td>\r\n						<td><input type="text" class="col-xs-12 T-option F-float F-count" name="count" value="{{rs.count}}"></td>\r\n						<td><input type="text" class="col-xs-12 T-option F-float F-money" name="price" value="{{rs.price}}"></td>\r\n						<td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="{{rs.price*rs.count}}"></td>\r\n						<td><input type="text" class="col-xs-12" name="remark" value="{{rs.remark}}"></td>\r\n						<td><a class="cursor T-action T-delete">删除</a></td>\r\n					</tr>\r\n					{{/each}}\r\n				{{/if}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n			<button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});});