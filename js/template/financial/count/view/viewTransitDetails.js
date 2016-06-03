/*TMODJS:{"debug":true,"version":25,"md5":"13c3cf58c83e5609878778d1936754a4"}*/
define(function(require){return require('../../../template')('financial/count/view/viewTransitDetails', function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,$escape=$utils.$escape,touristGroup=$data.touristGroup,$each=$utils.$each,rs=$data.rs,index=$data.index,arrangeList=$data.arrangeList,$index=$data.$index,$out='';$out+='<div class="container-fluid"> <div class="hct-view-container"> <table class="table table-bordered"> <tbody> <tr> <td class="hct-view-group col-xs-4"> <div class="hct-view-title">线路产品</div> <div class="hct-view-content">';
$line=8;$out+=$escape(touristGroup.lineProductName);
$out+='</div> </td> <td class="hct-view-group col-xs-4"> <div class="hct-view-title">出游日期</div> <div class="hct-view-content">';
$line=12;$out+=$escape(touristGroup.startTime);
$out+='</div> </td> <td class="hct-view-group col-xs-4"> <div class="hct-view-title">人数合计</div> <div class="hct-view-content">';
$line=16;$out+=$escape(touristGroup.adultCount);
$out+='大';
$line=16;$out+=$escape(touristGroup.childCount);
$out+='小</div> </td> </tr> <tr> <td colspan="3" class="hct-view-group col-xs-12"> <div class="hct-view-title">小组联系人</div> <div class="hct-view-content"> ';
$line=23;if(touristGroup.contactUserList && touristGroup.contactUserList.length > 0){
$out+=' ';
$line=24;$each(touristGroup.contactUserList,function(rs,index){
$out+=' ';
$line=25;$out+=$escape(rs.name);
$out+='（';
$line=25;$out+=$escape(rs.mobileNumber);
$out+='）';
$line=25;if(index != touristGroup.contactUserList.length-1){
$out+='、';
$line=25;}
$out+=' ';
$line=26;});
$out+=' ';
$line=27;}
$out+=' </div> </td> </tr> </tbody> </table> </div> ';
$line=34;if(arrangeList.outBusList && arrangeList.outBusList.length > 0){
$out+=' <div class="row"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point">车辆安排</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th>车队</th> <th>车座数</th> <th>车辆品牌</th> <th>车牌</th> <th>司机</th> <th>司机电话</th> <th>用车时间</th> <th>上车地点</th> <th>目的地</th> <th>车费</th> <th>优惠</th> <th>应付款</th> <th>预付款</th> <th>备注</th> </tr> </thead> <tbody> ';
$line=60;$each(arrangeList.outBusList,function(rs,$index){
$out+=' <tr> <td>';
$line=62;$out+=$escape(rs.busCompanyName);
$out+='</td> <td>';
$line=63;$out+=$escape(rs.seatCount);
$out+='</td> <td>';
$line=64;$out+=$escape(rs.brand);
$out+='</td> <td>';
$line=65;$out+=$escape(rs.licenseNumber);
$out+='</td> <td>';
$line=66;$out+=$escape(rs.driverName);
$out+='</td> <td>';
$line=67;$out+=$escape(rs.driverMobileNumber);
$out+='</td> <td>';
$line=68;$out+=$escape(rs.useTime);
$out+='</td> <td>';
$line=69;$out+=$escape(rs.boardLocation);
$out+='</td> <td>';
$line=70;$out+=$escape(rs.destination);
$out+='</td> <td class="F-float F-money">';
$line=71;$out+=$escape(rs.fee);
$out+='</td> <td class="F-float F-money">';
$line=72;$out+=$escape(rs.reduceMoney);
$out+='</td> <td class="F-float F-money">';
$line=73;$out+=$escape(rs.needPayMoney);
$out+='</td> <td class="F-float F-money">';
$line=74;$out+=$escape(rs.prePayMoney);
$out+='</td> <td>';
$line=75;$out+=$escape(rs.remark);
$out+='</td> </tr> ';
$line=77;});
$out+=' </tbody> </table> </div> </div> ';
$line=82;}
$out+=' ';
$line=83;if(arrangeList.outHotelList && arrangeList.outHotelList.length > 0){
$out+=' <div class="row"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point">酒店安排</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th>入住日期</th> <th>离店日期</th> <th>星级</th> <th>酒店</th> <th>联系人</th> <th>联系电话</th> <th>房型</th> <th>单价</th> <th>数量</th> <th>优惠</th> <th>应付款</th> <th>预付款</th> <th>备注</th> </tr> </thead> <tbody> ';
$line=108;$each(arrangeList.outHotelList,function(rs,$index){
$out+=' <tr> <td>';
$line=110;$out+=$escape(rs.checkInTime);
$out+='</td> <td>';
$line=111;$out+=$escape(rs.checkOutTime);
$out+='</td> <td>';
$line=112;$out+=$escape($helpers. getHotelLevelDesc(rs.hotelLevel ));
$out+='</td> <td>';
$line=113;$out+=$escape(rs.hotelName);
$out+='</td> <td>';
$line=114;$out+=$escape(rs.hotelManagerName);
$out+='</td> <td>';
$line=115;$out+=$escape(rs.hotelMobileNumber);
$out+='</td> <td>';
$line=116;$out+=$escape(rs.hotelRoomType);
$out+='</td> <td class="F-float F-money">';
$line=117;$out+=$escape(rs.price);
$out+='</td> <td class="F-float F-count">';
$line=118;$out+=$escape(rs.memberCount);
$out+='</td> <td class="F-float F-money">';
$line=119;$out+=$escape(rs.reduceMoney);
$out+='</td> <td class="F-float F-money">';
$line=120;$out+=$escape(rs.needPayMoney);
$out+='</td> <td class="F-float F-money">';
$line=121;$out+=$escape(rs.prePayMoney);
$out+='</td> <td>';
$line=122;$out+=$escape(rs.remark);
$out+='</td> </tr> ';
$line=124;});
$out+=' </tbody> </table> </div> </div> ';
$line=129;}
$out+=' ';
$line=130;if(arrangeList.outTicketList && arrangeList.outTicketList.length > 0){
$out+=' <div class="row"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point">票务安排</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th>票务公司</th> <th>类型</th> <th>出发城市</th> <th>到达城市</th> <th>日期</th> <th>班次</th> <th>座位级别</th> <th>单价</th> <th>数量</th> <th>优惠</th> <th>应付款</th> <th>预付款</th> <th>备注</th> </tr> </thead> <tbody> ';
$line=155;$each(arrangeList.outTicketList,function(rs,$index){
$out+=' <tr> <td>';
$line=157;$out+=$escape(rs.ticketName);
$out+='</td> <td>';
$line=158;$out+=$escape($helpers. getTicketText(rs.type ));
$out+='</td> <td>';
$line=159;$out+=$escape(rs.startingCity);
$out+='</td> <td>';
$line=160;$out+=$escape(rs.arriveCity);
$out+='</td> <td>';
$line=161;$out+=$escape($helpers. dateFormat(rs.startTime ,  'yyyy-MM-dd hh:mm'));
$out+='</td> <td>';
$line=162;$out+=$escape(rs.shift);
$out+='</td> <td>';
$line=163;$out+=$escape(rs.seatLevel);
$out+='</td> <td class="F-float F-money">';
$line=164;$out+=$escape(rs.price);
$out+='</td> <td class="F-float F-count">';
$line=165;$out+=$escape(rs.memberCount);
$out+='</td> <td class="F-float F-money">';
$line=166;$out+=$escape(rs.reduceMoney);
$out+='</td> <td class="F-float F-money">';
$line=167;$out+=$escape(rs.needPayMoney);
$out+='</td> <td class="F-float F-money">';
$line=168;$out+=$escape(rs.prePayMoney);
$out+='</td> <td>';
$line=169;$out+=$escape(rs.remark);
$out+='</td> </tr> ';
$line=171;});
$out+=' </tbody> </table> </div> </div> ';
$line=176;}
$out+=' ';
$line=177;if(arrangeList.outRestaurantList && arrangeList.outRestaurantList.length > 0){
$out+=' <div class="row"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point">餐厅安排</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th>日期</th> <th>餐厅</th> <th>联系人</th> <th>联系电话</th> <th>类型</th> <th>餐标(元/人)</th> <th>人数</th> <th>优惠</th> <th>应付款</th> <th>预付款</th> <th>备注</th> </tr> </thead> <tbody> ';
$line=200;$each(arrangeList.outRestaurantList,function(rs,$index){
$out+=' <tr> <td>';
$line=202;$out+=$escape($helpers. dateFormat(rs.startTime ,  'yyyy-MM-dd'));
$out+='</td> <td>';
$line=203;$out+=$escape(rs.restaurantName);
$out+='</td> <td>';
$line=204;$out+=$escape(rs.restaurantManagerName);
$out+='</td> <td>';
$line=205;$out+=$escape(rs.restaurantMobileNumber);
$out+='</td> <td>';
$line=206;$out+=$escape(rs.standardType);
$out+='</td> <td class="F-float F-money">';
$line=207;$out+=$escape(rs.price);
$out+='</td> <td class="F-float F-count">';
$line=208;$out+=$escape(rs.memberCount);
$out+='</td> <td class="F-float F-money">';
$line=209;$out+=$escape(rs.reduceMoney);
$out+='</td> <td class="F-float F-money">';
$line=210;$out+=$escape(rs.needPayMoney);
$out+='</td> <td class="F-float F-money">';
$line=211;$out+=$escape(rs.prePayMoney);
$out+='</td> <td>';
$line=212;$out+=$escape(rs.remark);
$out+='</td> </tr> ';
$line=214;});
$out+=' </tbody> </table> </div> </div> ';
$line=219;}
$out+=' ';
$line=220;if(arrangeList.outOtherList && arrangeList.outOtherList.length > 0){
$out+=' <div class="row"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point">其它安排</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th>日期</th> <th>项目</th> <th>联系人</th> <th>联系电话</th> <th>单价</th> <th>数量</th> <th>优惠</th> <th>应付款</th> <th>预付款</th> <th>备注</th> </tr> </thead> <tbody> ';
$line=242;$each(arrangeList.outOtherList,function(rs,$index){
$out+=' <tr> <td>';
$line=244;$out+=$escape($helpers. dateFormat(rs.startTime ,  'yyyy-MM-dd'));
$out+='</td> <td>';
$line=245;$out+=$escape(rs.name);
$out+='</td> <td>';
$line=246;$out+=$escape(rs.managerName);
$out+='</td> <td>';
$line=247;$out+=$escape(rs.mobileNumber);
$out+='</td> <td class="F-float F-money">';
$line=248;$out+=$escape(rs.price);
$out+='</td> <td class="F-float F-count">';
$line=249;$out+=$escape(rs.memberCount);
$out+='</td> <td class="F-float F-money">';
$line=250;$out+=$escape(rs.reduceMoney);
$out+='</td> <td class="F-float F-money">';
$line=251;$out+=$escape(rs.needPayMoney);
$out+='</td> <td class="F-float F-money">';
$line=252;$out+=$escape(rs.prePayMoney);
$out+='</td> <td>';
$line=253;$out+=$escape(rs.remark);
$out+='</td> </tr> ';
$line=255;});
$out+=' </tbody> </table> </div> </div> ';
$line=260;}
$out+=' <div class="row"> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button> </div> </div> </div>';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'<div class="container-fluid">\r\n    <div class="hct-view-container">\r\n        <table class="table table-bordered">\r\n            <tbody>\r\n                <tr>\r\n                    <td class="hct-view-group col-xs-4">\r\n                        <div class="hct-view-title">线路产品</div>\r\n                        <div class="hct-view-content">{{touristGroup.lineProductName}}</div>\r\n                    </td>\r\n                    <td class="hct-view-group col-xs-4">\r\n                        <div class="hct-view-title">出游日期</div>\r\n                        <div class="hct-view-content">{{touristGroup.startTime}}</div>\r\n                    </td>\r\n                    <td class="hct-view-group col-xs-4">\r\n                        <div class="hct-view-title">人数合计</div>\r\n                        <div class="hct-view-content">{{touristGroup.adultCount}}大{{touristGroup.childCount}}小</div>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan="3" class="hct-view-group col-xs-12">\r\n                        <div class="hct-view-title">小组联系人</div>\r\n                        <div class="hct-view-content">\r\n                            {{if touristGroup.contactUserList && touristGroup.contactUserList.length > 0}}\r\n                            {{each touristGroup.contactUserList as rs index}}\r\n                                {{rs.name}}（{{rs.mobileNumber}}）{{if index != touristGroup.contactUserList.length-1}}、{{/if}}\r\n                            {{/each}}\r\n                            {{/if}}\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    {{if arrangeList.outBusList && arrangeList.outBusList.length > 0}}\r\n    <div class="row">\r\n        <div class="col-xs-12">\r\n            <h3 class="hct-update-list-title hct-title-point">车辆安排</h3>\r\n        </div>\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover hct-table-update">\r\n                <thead>\r\n                    <tr>\r\n                        <th>车队</th>\r\n                        <th>车座数</th>\r\n                        <th>车辆品牌</th>\r\n                        <th>车牌</th>\r\n                        <th>司机</th>\r\n                        <th>司机电话</th>\r\n                        <th>用车时间</th>\r\n                        <th>上车地点</th>\r\n                        <th>目的地</th>\r\n                        <th>车费</th>\r\n                        <th>优惠</th>\r\n                        <th>应付款</th>\r\n                        <th>预付款</th>\r\n                        <th>备注</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                {{each arrangeList.outBusList as rs}}\r\n                    <tr>\r\n                        <td>{{rs.busCompanyName}}</td>\r\n                        <td>{{rs.seatCount}}</td>\r\n                        <td>{{rs.brand}}</td>\r\n                        <td>{{rs.licenseNumber}}</td>\r\n                        <td>{{rs.driverName}}</td>\r\n                        <td>{{rs.driverMobileNumber}}</td>\r\n                        <td>{{rs.useTime}}</td>\r\n                        <td>{{rs.boardLocation}}</td>\r\n                        <td>{{rs.destination}}</td>\r\n                        <td class="F-float F-money">{{rs.fee}}</td>\r\n                        <td class="F-float F-money">{{rs.reduceMoney}}</td>\r\n                        <td class="F-float F-money">{{rs.needPayMoney}}</td>\r\n                        <td class="F-float F-money">{{rs.prePayMoney}}</td>\r\n                        <td>{{rs.remark}}</td>\r\n                    </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    {{/if}}\r\n    {{if arrangeList.outHotelList && arrangeList.outHotelList.length > 0}}\r\n    <div class="row">\r\n        <div class="col-xs-12">\r\n            <h3 class="hct-update-list-title hct-title-point">酒店安排</h3>\r\n        </div>\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover hct-table-update">\r\n                <thead>\r\n                    <tr>\r\n                        <th>入住日期</th>\r\n                        <th>离店日期</th>\r\n                        <th>星级</th>\r\n                        <th>酒店</th>\r\n                        <th>联系人</th>\r\n                        <th>联系电话</th>\r\n                        <th>房型</th>\r\n                        <th>单价</th>\r\n                        <th>数量</th>\r\n                        <th>优惠</th>\r\n                        <th>应付款</th>\r\n                        <th>预付款</th>\r\n                        <th>备注</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                {{each arrangeList.outHotelList as rs}}\r\n                    <tr>\r\n                        <td>{{rs.checkInTime}}</td>\r\n                        <td>{{rs.checkOutTime}}</td>\r\n                        <td>{{rs.hotelLevel | getHotelLevelDesc}}</td>\r\n                        <td>{{rs.hotelName}}</td>\r\n                        <td>{{rs.hotelManagerName}}</td>\r\n                        <td>{{rs.hotelMobileNumber}}</td>\r\n                        <td>{{rs.hotelRoomType}}</td>\r\n                        <td class="F-float F-money">{{rs.price}}</td>\r\n                        <td class="F-float F-count">{{rs.memberCount}}</td>\r\n                        <td class="F-float F-money">{{rs.reduceMoney}}</td>\r\n                        <td class="F-float F-money">{{rs.needPayMoney}}</td>\r\n                        <td class="F-float F-money">{{rs.prePayMoney}}</td>\r\n                        <td>{{rs.remark}}</td>\r\n                    </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    {{/if}}\r\n    {{if arrangeList.outTicketList && arrangeList.outTicketList.length > 0}}\r\n    <div class="row">\r\n        <div class="col-xs-12">\r\n            <h3 class="hct-update-list-title hct-title-point">票务安排</h3>\r\n        </div>\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover hct-table-update">\r\n                <thead>\r\n                    <tr>\r\n                        <th>票务公司</th>\r\n                        <th>类型</th>\r\n                        <th>出发城市</th>\r\n                        <th>到达城市</th>\r\n                        <th>日期</th>\r\n                        <th>班次</th>\r\n                        <th>座位级别</th>\r\n                        <th>单价</th>\r\n                        <th>数量</th>\r\n                        <th>优惠</th>\r\n                        <th>应付款</th>\r\n                        <th>预付款</th>\r\n                        <th>备注</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                {{each arrangeList.outTicketList as rs}}\r\n                    <tr>\r\n                        <td>{{rs.ticketName}}</td>\r\n                        <td>{{rs.type | getTicketText}}</td>\r\n                        <td>{{rs.startingCity}}</td>\r\n                        <td>{{rs.arriveCity}}</td>\r\n                        <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd hh:mm\'}}</td>\r\n                        <td>{{rs.shift}}</td>\r\n                        <td>{{rs.seatLevel}}</td>\r\n                        <td class="F-float F-money">{{rs.price}}</td>\r\n                        <td class="F-float F-count">{{rs.memberCount}}</td>\r\n                        <td class="F-float F-money">{{rs.reduceMoney}}</td>\r\n                        <td class="F-float F-money">{{rs.needPayMoney}}</td>\r\n                        <td class="F-float F-money">{{rs.prePayMoney}}</td>\r\n                        <td>{{rs.remark}}</td>\r\n                    </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    {{/if}}\r\n    {{if arrangeList.outRestaurantList && arrangeList.outRestaurantList.length > 0}}\r\n    <div class="row">\r\n        <div class="col-xs-12">\r\n            <h3 class="hct-update-list-title hct-title-point">餐厅安排</h3>\r\n        </div>\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover hct-table-update">\r\n                <thead>\r\n                    <tr>\r\n                        <th>日期</th>\r\n                        <th>餐厅</th>\r\n                        <th>联系人</th>\r\n                        <th>联系电话</th>\r\n                        <th>类型</th>\r\n                        <th>餐标(元/人)</th>\r\n                        <th>人数</th>\r\n                        <th>优惠</th>\r\n                        <th>应付款</th>\r\n                        <th>预付款</th>\r\n                        <th>备注</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                {{each arrangeList.outRestaurantList as rs}}\r\n                    <tr>\r\n                        <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                        <td>{{rs.restaurantName}}</td>\r\n                        <td>{{rs.restaurantManagerName}}</td>\r\n                        <td>{{rs.restaurantMobileNumber}}</td>\r\n                        <td>{{rs.standardType}}</td>\r\n                        <td class="F-float F-money">{{rs.price}}</td>\r\n                        <td class="F-float F-count">{{rs.memberCount}}</td>\r\n                        <td class="F-float F-money">{{rs.reduceMoney}}</td>\r\n                        <td class="F-float F-money">{{rs.needPayMoney}}</td>\r\n                        <td class="F-float F-money">{{rs.prePayMoney}}</td>\r\n                        <td>{{rs.remark}}</td>\r\n                    </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    {{/if}}\r\n    {{if arrangeList.outOtherList && arrangeList.outOtherList.length > 0}}\r\n    <div class="row">\r\n        <div class="col-xs-12">\r\n            <h3 class="hct-update-list-title hct-title-point">其它安排</h3>\r\n        </div>\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover hct-table-update">\r\n                <thead>\r\n                    <tr>\r\n                        <th>日期</th>\r\n                        <th>项目</th>\r\n                        <th>联系人</th>\r\n                        <th>联系电话</th>\r\n                        <th>单价</th>\r\n                        <th>数量</th>\r\n                        <th>优惠</th>\r\n                        <th>应付款</th>\r\n                        <th>预付款</th>\r\n                        <th>备注</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                {{each arrangeList.outOtherList as rs}}\r\n                    <tr>\r\n                        <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                        <td>{{rs.name}}</td>\r\n                        <td>{{rs.managerName}}</td>\r\n                        <td>{{rs.mobileNumber}}</td>\r\n                        <td class="F-float F-money">{{rs.price}}</td>\r\n                        <td class="F-float F-count">{{rs.memberCount}}</td>\r\n                        <td class="F-float F-money">{{rs.reduceMoney}}</td>\r\n                        <td class="F-float F-money">{{rs.needPayMoney}}</td>\r\n                        <td class="F-float F-money">{{rs.prePayMoney}}</td>\r\n                        <td>{{rs.remark}}</td>\r\n                    </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    {{/if}}\r\n    <div class="row">\r\n        <div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n            <button class="btn btn-xs btn-default T-btn-close btn-primary w100"> \r\n                <i class="ace-icon fa fa-times"></i> 关闭 \r\n            </button> \r\n        </div> \r\n    </div>\r\n</div>'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});});