/*TMODJS:{"debug":true,"version":281,"md5":"36a26223c9858044824881ba49b9f1ad"}*/
define(function(require){return require('../../../template')('financial/Client/view/list', function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,$escape=$utils.$escape,searchParam=$data.searchParam,$each=$utils.$each,customerAccountList=$data.customerAccountList,rs=$data.rs,$index=$data.$index,$out='';$out+='<div class="row T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-10"> <label>总社 </label> <input type="hidden" name="headerAgencyId" value="';
$line=5;$out+=$escape(searchParam.headerAgencyId);
$out+='"> <input type="text" name="headerAgencyName" class="form-control T-search-head-office" style="width: 110px;" value="';
$line=6;$out+=$escape(searchParam.headerAgencyName);
$out+='" maxlength="100" placeholder="所有总社"> </div> <div class="form-group mar-r-10"> <label>客户 </label> <input type="hidden" name="fromPartnerAgencyId" value="';
$line=10;$out+=$escape(searchParam.fromPartnerAgencyId);
$out+='"> <input type="text" name="fromPartnerAgencyName" class="form-control T-search-customer" style="width: 110px;" value="';
$line=11;$out+=$escape(searchParam.fromPartnerAgencyName);
$out+='" maxlength="100" placeholder="所有客户"> </div> <div class="form-group mar-r-10"> <label>账期 </label> <input type="text" name="startDate" class="form-control date-picker T-search-start-date" value="';
$line=15;$out+=$escape(searchParam.startDate);
$out+='"> <label>&nbsp;至&nbsp;</label> <input type="text" name="endDate" class="form-control date-picker T-search-end-date" value="';
$line=17;$out+=$escape(searchParam.endDate);
$out+='"> </div> <div class="form-group T-finance-status btn-group mar-r-10"> <label>客户类型</label> <select name="partnerAgencyType"> <option value="" ';
$line=22;if(searchParam.partnerAgencyType == ''){
$out+='selected';
$line=22;}
$out+='>全部</option> <option value="0" ';
$line=23;if(searchParam.partnerAgencyType == 0 && searchParam.partnerAgencyType.length > 0){
$out+='selected';
$line=23;}
$out+='>地接社</option> <option value="1" ';
$line=24;if(searchParam.partnerAgencyType == 1){
$out+='selected';
$line=24;}
$out+='>组团社</option> <option value="2" ';
$line=25;if(searchParam.partnerAgencyType == 2){
$out+='selected';
$line=25;}
$out+='>组团社和地接社</option> </select> </div> <div class="form-group T-finance-status btn-group mar-r-10"> <button data-value="';
$line=29;$out+=$escape(searchParam.accountStatus);
$out+='" data-toggle="dropdown" class="T-select-status btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ';
$line=31;if(searchParam.accountStatus == 0){
$out+=' 全部 ';
$line=33;}else if(searchParam.accountStatus == 1){
$out+=' 已结清 ';
$line=35;}else{
$out+=' 未结清 ';
$line=37;}
$out+=' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="0" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已结清</a> </li> <li> <a data-value="2" href="javascript:void(0)">未结清</a> </li> </ul> </div> <div class="form-group T-money-status btn-group mar-r-10"> <button data-value="';
$line=54;$out+=$escape(searchParam.unReceivedMoney);
$out+='" data-toggle="dropdown" class="T-select-status btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ';
$line=56;if(!searchParam.unReceivedMoney || searchParam.unReceivedMoney === ""){
$out+=' 全部 ';
$line=58;}else if(searchParam.unReceivedMoney == 1){
$out+=' 未收小于零 ';
$line=60;}else{
$out+=' 未收大于零 ';
$line=62;}
$out+=' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="0" href="javascript:void(0)">未收大于零</a></li> <li><a data-value="1" href="javascript:void(0)">未收小于零</a></li> </ul> </div> <div class="form-group mar-r-10"> <select name="orderBy"> <option value="asc" ';
$line=75;if(searchParam.sortType=='asc'){
$out+='selected';
$line=75;}
$out+='>升序</option> <option value="desc" ';
$line=76;if(searchParam.sortType=='desc'){
$out+='selected';
$line=76;}
$out+='>降序</option> </select> </div> <div class="form-group"> <button class="btn-sm mar-r-20 search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <button class="btn-sm search-btn T-client-export R-right" data-right="1340001">导出报表</button> </div> </form> <div class="form-inline T-sum-area"> <div class="form-group mar-r-20"> <label class="control-label">总人数合计：</label> <label class="control-label T-sumCount"></label> </div> <div class="form-group mar-r-20"> <label class="control-label">合同金额合计：</label> <label class="control-label F-float F-money T-sumContractMoney"></label> </div> <div class="form-group mar-r-20"> <label class="control-label">结算金额合计：</label> <label class="control-label F-float F-money T-sumStMoney"></label> </div> <div class="form-group mar-r-20"> <label class="control-label">已收金额合计：</label> <label class="control-label F-float F-money T-sumReceiveMoney"></label>&nbsp; <label class="control-label"> (社收：<span class="F-float F-money T-travelIncome"></span>&nbsp;&nbsp; 导收：<span class="F-float F-money T-guideIncome"></span>) </label> </div> <div class="form-group mar-r-20"> <label class="control-label">未收金额合计：</label> <label class="control-label F-float F-money T-sumUnReceivedMoney"></label> </div> <div class="form-group mar-r-20"> <label class="control-label">预收余额合计：</label> <label class="control-label F-float F-money T-sumBalance"></label> </div> <div class="form-group mar-r-20 hct-button-right"> <label> <input type="checkbox" class="ace T-sumUnIncome" value="1" /> <span class="lbl"> 未收是否减掉预收余额 </span> </label> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur T-tr-fixed"> <th>总社</th> <th>客户</th> <th>总人数</th> <th>合同金额</th> <th>结算金额</th> <th>已收</th> <th>预收余额</th> <th>未收金额</th> <th>对账进度</th> <th>收款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ';
$line=144;$each(customerAccountList,function(rs,$index){
$out+=' <tr data-id=\'';
$line=145;$out+=$escape(rs.fromPartnerAgencyId);
$out+='\' accountStatus=\'';
$line=145;$out+=$escape(searchParam.accountStatus);
$out+='\' data-unincome="';
$line=146;$out+=$escape(rs.unReceivedMoney);
$out+='"> <td>';
$line=147;$out+=$escape(rs.headerAgencyName);
$out+='</td> <td>';
$line=148;$out+=$escape(rs.fromPartnerAgencyName);
$out+='</td> <td><span class="F-float F-count">';
$line=149;$out+=$escape(rs.sumAdultCount);
$out+='</span>大 <span class="F-float F-count">';
$line=150;$out+=$escape(rs.sumChildCount);
$out+='</span>小 </td> <td><span class="F-float F-money">';
$line=152;$out+=$escape(rs.contractMoney);
$out+='</span></td> <td><span class="F-float F-money T-settlementMoney">';
$line=153;$out+=$escape(rs.settlementMoney);
$out+='</span></td> <td><span class="F-float F-money T-receiveMoney">';
$line=154;$out+=$escape(rs.receiveMoney);
$out+='</span></td> <td><span class="F-float F-money T-advance">';
$line=155;$out+=$escape(rs.balance);
$out+='</span></td> <td> ';
$line=157;if(rs.unReceivedMoney != 0){
$out+=' <span class="F-float F-money T-unReceivedMoney" style="color:#FF0000;"> ';
$line=159;$out+=$escape(rs.unReceivedMoney);
$out+=' </span> ';
$line=161;}else{
$out+=' <span class="F-float F-money T-unReceivedMoney"> ';
$line=163;$out+=$escape(rs.unReceivedMoney);
$out+=' </span> ';
$line=165;}
$out+=' </td> <td> ';
$line=168;if(rs.checkStep == rs.allRecord){
$out+=' <span style="color:#00CC00;"> ';
$line=170;$out+=$escape(rs.checkStep);
$out+='/';
$line=170;$out+=$escape(rs.allRecord);
$out+=' </span> ';
$line=172;}else{
$out+=' <span style="color:#FF9900;"> ';
$line=174;$out+=$escape(rs.checkStep);
$out+='/';
$line=174;$out+=$escape(rs.allRecord);
$out+=' </span> ';
$line=176;}
$out+=' </td> <td>';
$line=178;if(rs.reciveStep == rs.allRecord){
$out+='<span style="color:#00CC00;">';
$line=178;$out+=$escape(rs.reciveStep);
$out+='/';
$line=178;$out+=$escape(rs.allRecord);
$out+='</span>';
$line=178;}else{
$out+='<span style="color:#FF9900;">';
$line=178;$out+=$escape(rs.reciveStep);
$out+='/';
$line=178;$out+=$escape(rs.allRecord);
$out+='</span>';
$line=178;}
$out+='</td> <td> <a class="cursor T-action T-view">查看</a> <label class="cursor R-right" data-right="1280002|1280005"> | </label> <a class="cursor T-action T-checking R-right" data-right="1280002|1280005">对账</a> <label class="cursor R-right" data-right="1280003"> <a> | </a></label> <a class="cursor T-action T-balance R-right" data-right="1280003">收款</a> </td> </tr> ';
$line=187;});
$out+=' </tbody> </table> </div> </div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ';
$line=194;$out+=$escape(searchParam.recordSize);
$out+=' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'<div class="row T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group mar-r-10">\r\n            <label>总社 </label>\r\n            <input type="hidden" name="headerAgencyId" value="{{searchParam.headerAgencyId}}">\r\n            <input type="text" name="headerAgencyName" class="form-control T-search-head-office" style="width: 110px;" value="{{searchParam.headerAgencyName}}" maxlength="100" placeholder="所有总社">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>客户 </label>\r\n            <input type="hidden" name="fromPartnerAgencyId" value="{{searchParam.fromPartnerAgencyId}}">\r\n            <input type="text" name="fromPartnerAgencyName" class="form-control T-search-customer" style="width: 110px;" value="{{searchParam.fromPartnerAgencyName}}" maxlength="100" placeholder="所有客户">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>账期 </label>\r\n            <input type="text" name="startDate" class="form-control date-picker T-search-start-date" value="{{searchParam.startDate}}">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" name="endDate" class="form-control date-picker T-search-end-date" value="{{searchParam.endDate}}">\r\n        </div>\r\n        <div class="form-group T-finance-status btn-group mar-r-10">\r\n            <label>客户类型</label>\r\n            <select name="partnerAgencyType">\r\n                <option value="" {{if searchParam.partnerAgencyType == \'\'}}selected{{/if}}>全部</option>\r\n                <option value="0" {{if searchParam.partnerAgencyType == 0 && searchParam.partnerAgencyType.length > 0}}selected{{/if}}>地接社</option>\r\n                <option value="1" {{if searchParam.partnerAgencyType == 1}}selected{{/if}}>组团社</option>\r\n                <option value="2" {{if searchParam.partnerAgencyType == 2}}selected{{/if}}>组团社和地接社</option>\r\n            </select>\r\n        </div>\r\n        <div class="form-group T-finance-status btn-group mar-r-10">\r\n            <button data-value="{{searchParam.accountStatus}}" data-toggle="dropdown" class="T-select-status btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n                <span>\r\n                    {{if searchParam.accountStatus == 0}}\r\n                        全部\r\n                    {{else if searchParam.accountStatus == 1}}\r\n                        已结清\r\n                    {{else}}\r\n                        未结清\r\n                    {{/if}}\r\n                </span>\r\n                <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n            </button>\r\n            <ul class="dropdown-menu">\r\n                <li>\r\n                    <a data-value="0" href="javascript:void(0)">全部</a>\r\n                </li>\r\n                <li>\r\n                    <a data-value="1" href="javascript:void(0)">已结清</a>\r\n                </li>\r\n                <li>\r\n                    <a data-value="2" href="javascript:void(0)">未结清</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class="form-group T-money-status btn-group mar-r-10">\r\n            <button data-value="{{searchParam.unReceivedMoney}}" data-toggle="dropdown" class="T-select-status btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n                <span>\r\n                    {{if !searchParam.unReceivedMoney || searchParam.unReceivedMoney === ""}}\r\n                        全部\r\n                    {{else if searchParam.unReceivedMoney == 1}}\r\n                        未收小于零\r\n                    {{else}}\r\n                        未收大于零\r\n                    {{/if}}\r\n                </span>\r\n                <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n            </button>\r\n            <ul class="dropdown-menu">\r\n                <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                <li><a data-value="0" href="javascript:void(0)">未收大于零</a></li>\r\n                <li><a data-value="1" href="javascript:void(0)">未收小于零</a></li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div class="form-group mar-r-10">\r\n            <select name="orderBy">\r\n                <option value="asc" {{if searchParam.sortType==\'asc\'}}selected{{/if}}>升序</option> \r\n                <option value="desc" {{if searchParam.sortType==\'desc\'}}selected{{/if}}>降序</option> \r\n            </select>\r\n        </div>\r\n        <div class="form-group">\r\n            <button class="btn-sm mar-r-20 search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索\r\n            </button>\r\n            <button class="btn-sm search-btn  T-client-export R-right" data-right="1340001">导出报表</button>\r\n        </div>\r\n    </form>\r\n    <div class="form-inline T-sum-area">\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">总人数合计：</label>\r\n            <label class="control-label T-sumCount"></label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">合同金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumContractMoney"></label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">结算金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumStMoney"></label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">已收金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumReceiveMoney"></label>&nbsp;\r\n            <label class="control-label">\r\n            (社收：<span class="F-float F-money T-travelIncome"></span>&nbsp;&nbsp;\r\n            导收：<span class="F-float F-money T-guideIncome"></span>)\r\n            </label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">未收金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumUnReceivedMoney"></label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">预收余额合计：</label>\r\n            <label class="control-label F-float F-money T-sumBalance"></label>\r\n        </div>\r\n        <div class="form-group mar-r-20 hct-button-right">\r\n            <label>\r\n                <input type="checkbox" class="ace T-sumUnIncome" value="1" />\r\n                <span class="lbl">\r\n                    未收是否减掉预收余额\r\n                </span>\r\n            </label>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="row">\r\n    <div class="col-xs-12">\r\n        <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n            <thead>\r\n                <tr class="bg-blur T-tr-fixed">\r\n                    <th>总社</th>\r\n                    <th>客户</th>\r\n                    <th>总人数</th>\r\n                    <th>合同金额</th>\r\n                    <th>结算金额</th>\r\n                    <th>已收</th>\r\n                    <th>预收余额</th>\r\n                    <th>未收金额</th>\r\n                    <th>对账进度</th>\r\n                    <th>收款进度</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody class="T-list">\r\n                {{each customerAccountList as rs}}\r\n                <tr data-id=\'{{rs.fromPartnerAgencyId}}\' accountStatus=\'{{searchParam.accountStatus}}\' \r\n                data-unincome="{{rs.unReceivedMoney}}">\r\n                    <td>{{rs.headerAgencyName}}</td>\r\n                    <td>{{rs.fromPartnerAgencyName}}</td>\r\n                    <td><span class="F-float F-count">{{rs.sumAdultCount}}</span>大\r\n                        <span class="F-float F-count">{{rs.sumChildCount}}</span>小\r\n                    </td>\r\n                    <td><span class="F-float F-money">{{rs.contractMoney}}</span></td>\r\n                    <td><span class="F-float F-money T-settlementMoney">{{rs.settlementMoney}}</span></td>\r\n                    <td><span class="F-float F-money T-receiveMoney">{{rs.receiveMoney}}</span></td>\r\n                    <td><span class="F-float F-money T-advance">{{rs.balance}}</span></td>\r\n                    <td>\r\n                        {{if rs.unReceivedMoney != 0}}\r\n                            <span class="F-float F-money T-unReceivedMoney" style="color:#FF0000;">\r\n                                {{rs.unReceivedMoney}}\r\n                            </span>\r\n                        {{else}}\r\n                            <span class="F-float F-money T-unReceivedMoney">\r\n                                {{rs.unReceivedMoney}}\r\n                            </span>\r\n                        {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        {{if rs.checkStep == rs.allRecord}}\r\n                            <span style="color:#00CC00;">\r\n                                {{rs.checkStep}}/{{rs.allRecord}}\r\n                            </span>\r\n                        {{else}}\r\n                            <span style="color:#FF9900;">\r\n                                {{rs.checkStep}}/{{rs.allRecord}}\r\n                            </span>\r\n                        {{/if}}\r\n                    </td>\r\n                    <td>{{if rs.reciveStep == rs.allRecord}}<span style="color:#00CC00;">{{rs.reciveStep}}/{{rs.allRecord}}</span>{{else}}<span style="color:#FF9900;">{{rs.reciveStep}}/{{rs.allRecord}}</span>{{/if}}</td>\r\n                    <td>\r\n                        <a class="cursor T-action T-view">查看</a>\r\n                        <label class="cursor R-right" data-right="1280002|1280005"> | </label>\r\n                        <a class="cursor T-action T-checking R-right" data-right="1280002|1280005">对账</a>\r\n                        <label class="cursor R-right" data-right="1280003"> <a> | </a></label>\r\n                        <a class="cursor T-action T-balance R-right" data-right="1280003">收款</a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});});