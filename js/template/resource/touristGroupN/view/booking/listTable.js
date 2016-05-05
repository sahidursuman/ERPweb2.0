/*TMODJS:{"debug":true,"version":6,"md5":"dd2c1f56a0bb12f2b580ec9a263c6d10"}*/
define(function(require){return require('../../../../template')('resource/touristGroupN/view/booking/listTable', function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,$each=$utils.$each,bookingOrderList=$data.bookingOrderList,rs=$data.rs,$index=$data.$index,$escape=$utils.$escape,$out='';$line=1;$each(bookingOrderList,function(rs,$index){
$out+=' <tr data-id="';
$line=2;$out+=$escape(rs.id);
$out+='"> <td>';
$line=3;$out+=$escape(rs.orderNumber);
$out+='</td> <td>';
$line=4;$out+=$escape(rs.partnerAgencyName);
$out+='</td> <td><i class="ace-icon fa';
$line=5;if(rs.hotelOrderStatus == 1){
$out+=' fa-check green bigger-130';
$line=5;}else{
$out+=' fa-times red bigger-125';
$line=5;}
$out+='"></i></td> <td><i class="ace-icon fa';
$line=6;if(rs.ticketOrderStatus == 1){
$out+=' fa-check green bigger-130';
$line=6;}else{
$out+=' fa-times red bigger-125';
$line=6;}
$out+='"></i></td> <td><i class="ace-icon fa';
$line=7;if(rs.scenicOrderStatus == 1){
$out+=' fa-check green bigger-130';
$line=7;}else{
$out+=' fa-times red bigger-125';
$line=7;}
$out+='"></i></td> <td><i class="ace-icon fa';
$line=8;if(rs.busCompanyOrderStatus == 1){
$out+=' fa-check green bigger-130';
$line=8;}else{
$out+=' fa-times red bigger-125';
$line=8;}
$out+='"></i></td> <td><span class="F-float">';
$line=9;$out+=$escape(rs.sumNeedGetMoney);
$out+='</span></td> <td>';
$line=10;$out+=$escape(rs.outOPUserName);
$out+='</td> <td>';
$line=11;$out+=$escape(rs.status == "1" ? "已安排" : "未安排");
$out+=' </td> <td> <div class="btn-group" style="width:120px;"> <a class="T-action T-view cursor"> 查看 </a> <a class="T-action T-update cursor R-right" data-right="1470006"> <label class="padding-right20">|</label> <span>编辑</span> </a> <a class="T-action T-delete cursor R-right" data-right="1470005"> <label class="padding-right20">|</label> 删除 </a> </div> </td> </tr> ';
$line=28;});
$out+=' ';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'{{each bookingOrderList as rs}}\r\n<tr data-id="{{rs.id}}">\r\n    <td>{{rs.orderNumber}}</td>\r\n    <td>{{rs.partnerAgencyName}}</td>\r\n    <td><i class="ace-icon fa{{if rs.hotelOrderStatus == 1}} fa-check green bigger-130{{else}} fa-times red bigger-125{{/if}}"></i></td>\r\n    <td><i class="ace-icon fa{{if rs.ticketOrderStatus == 1}} fa-check green bigger-130{{else}} fa-times red bigger-125{{/if}}"></i></td>\r\n    <td><i class="ace-icon fa{{if rs.scenicOrderStatus == 1}} fa-check green bigger-130{{else}} fa-times red bigger-125{{/if}}"></i></td>\r\n    <td><i class="ace-icon fa{{if rs.busCompanyOrderStatus == 1}} fa-check green bigger-130{{else}} fa-times red bigger-125{{/if}}"></i></td>\r\n    <td><span class="F-float">{{rs.sumNeedGetMoney}}</span></td>\r\n    <td>{{rs.outOPUserName}}</td>\r\n    <td>{{rs.status == "1" ? "已安排" : "未安排"}} </td>\r\n    <td>\r\n        <div class="btn-group" style="width:120px;">\r\n            <a class="T-action T-view cursor">\r\n                查看\r\n            </a>\r\n            <a class="T-action T-update cursor R-right" data-right="1470006">\r\n                <label class="padding-right20">|</label>\r\n                <span>编辑</span>\r\n            </a>\r\n            <a class="T-action T-delete cursor R-right" data-right="1470005">\r\n                <label class="padding-right20">|</label>\r\n                删除\r\n            </a>\r\n        </div>\r\n    </td>\r\n</tr>\r\n{{/each}}\r\n\r\n'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});});