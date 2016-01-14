/*TMODJS:{"debug":true,"version":2515,"md5":"b956af04c8a11195decfbb2cdf2f95c7"}*/
define(function(require) {
    return require("../../../template")("resource/touristGroup/view/add", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $string = $utils.$string, getPayType = $data.getPayType, $out = "";
            return $out += '<div class="group-info-area"> <h5 class="form-inline"> <span class="badge badge-primary">1</span> <label class="middle title-size">小组信息</label> </h5> </div> <form class="group-info globalAdd T-touristGroupMainForm" onsubmit="return false"> <div class="form-inline"> <div class="form-group fixed-width"> <label for="qouteNumber">报价单号：</label> <input type="text" id="qouteNumber" name="quoteNumber" class="form-control bind-change T-quoteNumber" readonly="readonly" /> <input type="hidden" name="quoteNumberId" class="T-quoteNumberId" /> <button class="search-btn btn-sm T-ChosenQuoteNumber" onsubmit="return false"> <i class="ace-icon fa fa-search "></i>搜索 </button> </div> <div class="form-group fixed-width"> <label for="qouteNumber"><span class="necessary">*</span> 线路产品：</label> <input type="text" name="lineProductIdName" class="form-control bind-change T-lineProductIdName" readonly="readonly" /> <input type="hidden" name="lineProductId" class="T-lineProductId" /> <input type="hidden" name="quoteId" class="T-quoteId" /> <button class="search-btn btn-sm T-travelLine-search" onsubmit="return false"> <i class="ace-icon fa fa-search "></i>搜索 </button> </div> <div class="form-group fixed-width-1" style="text-align:left;"> <label><span class="necessary">*</span>人数：</label> 大人 <label><span class="necessary">*</span> <input type="text" name="adultCount" value="" class="form-control T-adultCount" style="width:35px" /> 小孩 <input type="text" name="childCount" value="" class="form-control T-childCount" style="width:35px"/> </div> <div class="form-group"> <label>针对客源： </label> <select name="customerType" style="width:133px;"> <option value="0">散客</option> <option value="1">团体</option> </select> </div> </div> <div class="form-inline"> <div class="form-group fixed-width"> <label><span class="necessary">*</span>出游日期：</label> <input type="text" name="startTime" class="form-control date-picker datepicker T-startTime" /> </div> <div class="form-group fixed-width"> <label><span class="necessary">*</span>完团日期：</label> <input type="text" name="endTime" class="form-control date-picker datepicker T-endTime" /> </div> <div class="form-group"> <label><span class="necessary">*</span>客户：</label> <input type="text" name="fromPartnerAgency" class="form-control bind-change T-fromPartnerAgencyName" placeholder="请输入客户来源" style="width:133px;"> <input type="hidden" name="fromPartnerAgencyId" class="T-fromPartnerAgencyId"> <input type="hidden" name="type" value=""> <span class="T-addPartner R-right" data-right="1150002" title="添加客户"> <i class="ace-icon fa fa-plus bigger-110 icon-only" ></i> </span> </div> <div class="form-group"> <label><span class="necessary">*</span>客户联系人：</label> <input class="form-control bind-change T-partnerAgencyNameList" name="partnerAgencyNameList" type="text" style="width:133px;"/> <input type="hidden" style=\'width:120px\' name="partnerAgencyContactId" class="T-partnerAgencyContactId" /> <span class="T-addPartnerManager" title="为客户来源添加联系人"> <i class="ace-icon fa fa-plus bigger-110 icon-only" ></i> </span> </div> </div> <div class="form-inline"> <div class="form-group fixed-width"> <label >全陪：</label> <input type="text" name="accompanyGuideName" value="" maxlength="100"> </div> <div class="form-group fixed-width"> <label class="control-label no-padding-right" >全陪电话：</label> <input type="text" name="accompanyGuideMobile" value="" maxlength="11"> </div> <div class="form-group fixed-width-1"> <label>获得方式： </label> <select name="getType" style="width:133px;"> <option selected="selected" value="1">旅行社系统</option> <option value="2">传真</option> <option value="3">短信</option> <option value="4">电话</option> <option value="5">QQ</option> </select> </div> <div class="form-group"> <label>组团单号： <input type="text" name="otaOrderNumber" value="" maxlength="9" style="width: 87px;"> </label> </div> </div> <div class="form-inline"> <div class="form-group fixed-width"> <label>外联销售：</label> <input type="text" name="realName" class="T-choose-opUserList"> <input type="hidden" name="outOPUserId"> </div> <div class="form-group fixed-width"> <label>客源类型： </label> <select name="memberType" style="width:220px;"> <option selected="selected" value="0">内宾</option> <option value="1">外宾</option> </select> </div> <div class="form-group fixed-width-1"> <label>接站牌：</label> <input type="text" name="welcomeBoard" value="" maxlength="20" > </div> <div class="form-group"> <label class="control-label no-padding-right">是否购买保险： <input checked="checked" type="checkbox" class="ace buyInsurance-status" value="1" name="buyInsurance"> <span class="lbl"></span> </label> </div> </div> <div class="form-group clearfix"> <label class="pull-left control-label no-padding-right" style="margin-left:42px;">备注:</label> <div class="col-sm-10"> <textarea class="form-control col-sm-12" name="remark" value="" maxlength="1000"></textarea> </div> </div> <div class="group-info-area"> <h5> <span class="badge badge-primary">2</span> <label class="middle title-size">账单</label> </h5> </div> <div class="form-inline"> <div class="form-group fixed-width-1"> <label>应收：</label> <input readonly="readonly" type="text" name="needPayAllMoney" maxlength="9" value="" class="F-float F-money"> </div> <div class="form-group fixed-width-1"> <label class="control-label no-padding-right">预收款：</label> <input type="text" name="preIncomeMoney" maxlength="9" value="" class="T-prePayMoney F-float F-money"> </div> <div class="form-group fixed-width-1"> <label>计划现收：</label> <input type="text" name="currentNeedPayMoney" maxlength="9" value="" class="T-planCurrPayMoney F-float F-money"> </div> </div> <div class="form-inline col-sm-12"> <button class="btn pull-left btn-sm btn-success T-touristGroup-addOtherCost"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> <div class="form-inline"> <div class="col-sm-10 tourist-contenWidth" style="margin: auto;"> <table class="table table-striped table-bordered table-hover addCostList"> <thead> <tr> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-addCostTbody"> <tr> <td> <select name="type" class="col-sm-10 col-sm-offset-1"> ', 
            $line = 195, $out += $string($helpers.getFeeItemType(getPayType, !0)), $out += ' </select> </td> <td> <input name="count" value="" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right T-Fee-adultCount T-count T-calc F-float F-count" /> </td> <td> <input name="price" value="" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right T-costPrice T-adultPrice T-price T-calc F-float F-money" /> </td> <td> <input name="" value="" readonly="readonly" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right T-payMoney F-float F-money" /> </td> <td> <input name="remark" value="" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right" /> </td> <td><a class="cursor T-delete">删除</a></td> </tr> <tr> <td> <select name="type" class="col-sm-10 col-sm-offset-1"> ', 
            $line = 219, $out += $string($helpers.getFeeItemType(getPayType, !0)), $out += ' </select> </td> <td> <input name="count" value="" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right T-Fee-childCount T-count T-calc F-float F-count" /> </td> <td> <input name="price" value="" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right T-costPrice T-childPrice T-price T-calc F-float F-money" /> </td> <td> <input name="" value="" readonly="readonly" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right T-payMoney F-float F-money" /> </td> <td> <input name="remark" value="" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right" /> </td> <td><a class="cursor T-delete">删除</a></td> </tr> </tbody> </table> </div> </div> </form> <div class="col-xs-12 globalAdd"> <form class="form-horizontal touristGroupMainFormMember T-touristGroupMainFormMember" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-sm-8 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class="widget-title"> <span class="badge badge-primary">3</span> <label class="middle title-size">游客名单</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">住宿标准：</label> <div class="col-sm-2"> <select name="level" class="col-sm-12"> <option selected="selected" value="0">未选择</option> <option value="1">三星以下</option> <option value="2">三星</option> <option value="3">准四星</option> <option value="4">四星</option> <option value="5">准五星</option> <option value="6">五星</option> <option value="7">五星以上</option> </select> </div> <label class="col-sm-1 control-label no-padding-right">包含自费：</label> <div class="col-sm-8"> <input name="includeOwnExpense" type="text" class="col-sm-12" maxlength="1000" /> </div> </div> <div class="form-group margin-top15"> <div class="col-sm-8"> <button class="btn btn-sm btn-success T-add-tourist" style="float:left;"> <i class="ace-icon fa fa-plus"></i> 添加成员 </button> <div style="height:5px;width:25px;float:left;"></div> <button class="btn btn-sm btn-success T-add-tourist-more" style="float:left;"> <i class="ace-icon fa fa-plus"></i> 批量添加 </button> </div> </div> <div class="form-group"> <div class="col-sm-12 tourist-contenWidth"> <table class="table table-striped table-bordered table-hover T-addTouristList"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border"> <span class="necessary">*</span>姓名</th> <th class="th-border">手机号码</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">设为联系人</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-addTouristTbody"> </tbody> </table> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal touristGroupMainFormRS T-touristGroupMainFormRS" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">4</span> <label class="middle title-size">中转</label> </h5> <div class="form-inline col-sm-12"> <div class="form-group fixed-width T-recive col-sm-6" style="margin-left:25px;"> <div class="col-sm-12 T-recive-title" style="padding-bottom:10px;">接团</div> <label data-type="receiveBus" class="control-label T-add-action" style="margin-left:25px;"> <input type="checkbox" class="ace"> <span class="lbl">车辆</span> </label> <label data-type="receiveHotel" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">酒店</span> </label> <label data-type="receiveRestaurant" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">餐饮</span> </label> <label data-type="receiveTicket" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">票务</span> </label> <label data-type="receiveOther" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">其他</span> </label> <div class="col-xs-12 T-action-require-list T-receive-list"> </div> </div> <div class="form-group fixed-width T-send col-sm-6"> <div class="col-sm-12 T-send-title" style="padding-bottom:10px;">送团</div> <label data-type="sendBus" class="control-label T-add-action" style="margin-left:25px;"> <input type="checkbox" class="ace"> <span class="lbl">车辆</span> </label> <label data-type="sendHotel" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">酒店</span> </label> <label data-type="sendRestaurant" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">餐饮</span> </label> <label data-type="sendTicket" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">票务</span> </label> <label data-type="sendOther" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">其他</span> </label> <div class="col-xs-12 T-action-require-list T-leave-list"> </div> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary T-submit-addTouristGroup guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="group-info-area">\r\n	<h5   class="form-inline">\r\n		<span class="badge badge-primary">1</span>\r\n		<label class="middle title-size">小组信息</label>\r\n	</h5>\r\n</div>\r\n<form class="group-info globalAdd T-touristGroupMainForm"  onsubmit="return false">\r\n	<div class="form-inline">\r\n		<div class="form-group fixed-width">\r\n		    <label for="qouteNumber">报价单号：</label>\r\n            <input type="text" id="qouteNumber" name="quoteNumber" class="form-control bind-change T-quoteNumber" readonly="readonly" />\r\n            <input type="hidden" name="quoteNumberId" class="T-quoteNumberId" />\r\n	        <button class="search-btn btn-sm T-ChosenQuoteNumber" onsubmit="return false">\r\n	                <i class="ace-icon fa fa-search "></i>搜索\r\n	        </button>\r\n		</div>\r\n\r\n		<div class="form-group fixed-width">\r\n		    <label for="qouteNumber"><span class="necessary">*</span> 线路产品：</label>\r\n	        <input type="text" name="lineProductIdName" class="form-control bind-change T-lineProductIdName" readonly="readonly" />\r\n	        <input type="hidden" name="lineProductId" class="T-lineProductId" />\r\n	        <input type="hidden" name="quoteId" class="T-quoteId" />\r\n	    	<button class="search-btn btn-sm T-travelLine-search" onsubmit="return false">\r\n	        	<i class="ace-icon fa fa-search "></i>搜索\r\n        	</button>\r\n		</div>\r\n\r\n		<div class="form-group fixed-width-1" style="text-align:left;">\r\n			<label><span class="necessary">*</span>人数：</label>\r\n            大人\r\n            <label><span class="necessary">*</span>   \r\n			<input type="text" name="adultCount" value="" class="form-control T-adultCount" style="width:35px" />\r\n            小孩\r\n            <input type="text" name="childCount" value="" class="form-control T-childCount"  style="width:35px"/>\r\n		</div>\r\n\r\n		<div class="form-group">\r\n			<label>针对客源： </label>\r\n            <select name="customerType" style="width:133px;">\r\n                <option value="0">散客</option>\r\n                <option value="1">团体</option>\r\n            </select>\r\n		</div>\r\n	</div>\r\n\r\n	<div class="form-inline">\r\n    	<div class="form-group fixed-width">\r\n    		<label><span class="necessary">*</span>出游日期：</label>\r\n            <input type="text" name="startTime" class="form-control date-picker datepicker T-startTime" />\r\n    	</div>\r\n\r\n        <div class="form-group fixed-width">\r\n            <label><span class="necessary">*</span>完团日期：</label>\r\n            <input type="text" name="endTime" class="form-control date-picker datepicker T-endTime" />\r\n        </div>\r\n\r\n        <div class="form-group">\r\n            <label><span class="necessary">*</span>客户：</label>\r\n            <input type="text" name="fromPartnerAgency" class="form-control bind-change T-fromPartnerAgencyName" placeholder="请输入客户来源" style="width:133px;">\r\n            <input type="hidden" name="fromPartnerAgencyId" class="T-fromPartnerAgencyId">\r\n            <input type="hidden" name="type" value="">\r\n            <span class="T-addPartner R-right" data-right="1150002" title="添加客户">\r\n                <i class="ace-icon fa fa-plus bigger-110 icon-only" ></i>\r\n            </span>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n            <label><span class="necessary">*</span>客户联系人：</label>\r\n            <input class="form-control bind-change T-partnerAgencyNameList" name="partnerAgencyNameList" type="text"  style="width:133px;"/>\r\n            <input type="hidden" style=\'width:120px\' name="partnerAgencyContactId" class="T-partnerAgencyContactId" />\r\n            <span class="T-addPartnerManager" title="为客户来源添加联系人">\r\n                <i class="ace-icon fa fa-plus bigger-110 icon-only" ></i>\r\n            </span>\r\n        </div>\r\n\r\n	</div>\r\n\r\n\r\n    <div class="form-inline">\r\n        <div class="form-group fixed-width">\r\n            <label >全陪：</label>\r\n            <input type="text" name="accompanyGuideName" value="" maxlength="100"> \r\n        </div>\r\n        <div class="form-group fixed-width">\r\n            <label class="control-label no-padding-right" >全陪电话：</label>\r\n            <input type="text" name="accompanyGuideMobile" value="" maxlength="11">\r\n        </div>\r\n       <div class="form-group fixed-width-1">\r\n            <label>获得方式： </label>\r\n            <select name="getType" style="width:133px;">\r\n                <option selected="selected" value="1">旅行社系统</option>\r\n                <option value="2">传真</option>\r\n                <option value="3">短信</option>\r\n                <option value="4">电话</option>\r\n                <option value="5">QQ</option>\r\n            </select>\r\n        </div>\r\n        <div class="form-group"> \r\n            <label>组团单号：\r\n                <input type="text" name="otaOrderNumber" value="" maxlength="9" style="width: 87px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class="form-inline">\r\n        <div class="form-group fixed-width">\r\n            <label>外联销售：</label>\r\n            <input type="text" name="realName" class="T-choose-opUserList">\r\n            <input type="hidden" name="outOPUserId">\r\n        </div>\r\n\r\n        <div class="form-group fixed-width">\r\n            <label>客源类型： </label>\r\n            <select name="memberType" style="width:220px;">\r\n                <option selected="selected" value="0">内宾</option>\r\n                <option value="1">外宾</option>\r\n            </select>\r\n        </div>\r\n    \r\n        <div class="form-group fixed-width-1">\r\n            <label>接站牌：</label>\r\n            <input type="text" name="welcomeBoard" value="" maxlength="20" >\r\n        </div>\r\n\r\n        <div class="form-group">\r\n            <label class="control-label no-padding-right">是否购买保险：\r\n                <input checked="checked" type="checkbox" class="ace buyInsurance-status" value="1" name="buyInsurance">\r\n                <span class="lbl"></span>\r\n            </label>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div class="form-group clearfix">\r\n        <label class="pull-left control-label no-padding-right" style="margin-left:42px;">备注:</label>\r\n        <div class="col-sm-10">\r\n         <textarea class="form-control col-sm-12" name="remark" value=""  maxlength="1000"></textarea>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class="group-info-area">\r\n        <h5>\r\n            <span class="badge badge-primary">2</span>\r\n            <label class="middle title-size">账单</label>\r\n        </h5>\r\n    </div>\r\n\r\n    <div class="form-inline">\r\n        <div class="form-group fixed-width-1">\r\n            <label>应收：</label>\r\n            <input readonly="readonly" type="text" name="needPayAllMoney" maxlength="9" value="" class="F-float F-money"> \r\n        </div>\r\n\r\n        <div class="form-group fixed-width-1">\r\n            <label class="control-label no-padding-right">预收款：</label>\r\n            <input type="text" name="preIncomeMoney" maxlength="9" value="" class="T-prePayMoney F-float F-money">\r\n        </div>\r\n\r\n        <div class="form-group fixed-width-1">\r\n            <label>计划现收：</label>\r\n            <input type="text" name="currentNeedPayMoney" maxlength="9" value=""  class="T-planCurrPayMoney F-float F-money">\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class="form-inline col-sm-12">\r\n        <button class="btn pull-left btn-sm btn-success T-touristGroup-addOtherCost">\r\n            <i class="ace-icon fa fa-plus"></i> 新增费用项\r\n        </button>\r\n    </div>\r\n    <div class="form-inline">\r\n        <div class="col-sm-10 tourist-contenWidth" style="margin: auto;">\r\n            <table class="table table-striped table-bordered table-hover addCostList">\r\n                <thead>\r\n                    <tr>\r\n                        <th class="th-border">费用项</th>\r\n                        <th class="th-border">数量</th>  \r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">金额</th>\r\n                        <th class="th-border">说明</th>\r\n                        <th class="th-border">操作</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-addCostTbody">\r\n                    <tr>\r\n                        <td>\r\n                            <select name="type" class="col-sm-10 col-sm-offset-1">\r\n                                {{#getPayType |  getFeeItemType: true}}\r\n                            </select>\r\n                        </td>\r\n                        <td>\r\n                            <input name="count" value="" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right T-Fee-adultCount T-count T-calc F-float F-count" />\r\n                        </td>\r\n\r\n                        <td>\r\n                            <input name="price" value="" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right T-costPrice T-adultPrice T-price T-calc F-float F-money" />\r\n                        </td>\r\n\r\n                        <td>\r\n                            <input name="" value="" readonly="readonly" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right T-payMoney F-float F-money" />\r\n                        </td>\r\n                       <td>\r\n                            <input name="remark" value="" type="text" class="col-sm-10  col-sm-offset-1 no-padding-right" />\r\n                        </td>\r\n                        \r\n                        <td><a class="cursor T-delete">删除</a></td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td>\r\n                            <select name="type" class="col-sm-10 col-sm-offset-1">\r\n                                {{#getPayType | getFeeItemType: true}}\r\n                            </select>\r\n                        </td>\r\n                        <td>\r\n                            <input name="count" value="" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right T-Fee-childCount T-count T-calc F-float F-count" />\r\n                        </td>\r\n\r\n                        <td>\r\n                            <input name="price" value="" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right T-costPrice T-childPrice T-price T-calc F-float F-money" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="" value="" readonly="readonly" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right T-payMoney  F-float F-money" />\r\n                        </td>\r\n                       <td>\r\n                            <input name="remark" value="" type="text" class="col-sm-10  col-sm-offset-1 no-padding-right" />\r\n                        </td>\r\n                        <td><a class="cursor T-delete">删除</a></td>\r\n                    </tr>\r\n\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</form>\r\n<div class="col-xs-12 globalAdd">\r\n    <form class="form-horizontal touristGroupMainFormMember T-touristGroupMainFormMember" role="form" style="margin-top:10px" onsubmit="return false">\r\n        <div class="form-group">\r\n            <div class="col-sm-8 widget-container-col">\r\n                <div class=" ui-sortable-handle">\r\n                    <h5 class="widget-title">\r\n							<span class="badge badge-primary">3</span>\r\n							<label class="middle title-size">游客名单</label>\r\n						</h5>\r\n                    <div class="widget-body">\r\n                        <div class="widget-main">\r\n                            <div class="form-group">\r\n                                <label class="col-sm-1 control-label no-padding-right">住宿标准：</label>\r\n                                <div class="col-sm-2">\r\n                                    <select name="level" class="col-sm-12">\r\n                                        <option selected="selected" value="0">未选择</option>\r\n                                        <option value="1">三星以下</option>\r\n                                        <option value="2">三星</option>\r\n                                        <option value="3">准四星</option>\r\n                                        <option value="4">四星</option>\r\n                                        <option value="5">准五星</option>\r\n                                        <option value="6">五星</option>\r\n                                        <option value="7">五星以上</option>\r\n                                    </select>\r\n                                </div>\r\n                                <label class="col-sm-1 control-label no-padding-right">包含自费：</label>\r\n                                <div class="col-sm-8">\r\n                                    <input name="includeOwnExpense" type="text" class="col-sm-12" maxlength="1000" />\r\n                                </div>\r\n                            </div>\r\n                \r\n                            <div class="form-group margin-top15">\r\n                                <div class="col-sm-8">\r\n                                    <button class="btn btn-sm btn-success T-add-tourist" style="float:left;">\r\n                                        <i class="ace-icon fa fa-plus"></i> 添加成员\r\n                                    </button>\r\n                                    <div style="height:5px;width:25px;float:left;"></div>\r\n                                    <button class="btn btn-sm btn-success T-add-tourist-more" style="float:left;">\r\n                                        <i class="ace-icon fa fa-plus"></i> 批量添加\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class="form-group">\r\n                                <div class="col-sm-12  tourist-contenWidth">\r\n                                    <table class="table table-striped table-bordered table-hover T-addTouristList">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th class="th-border">序号</th>\r\n                                                <th class="th-border"> <span class="necessary">*</span>姓名</th>\r\n                                                <th class="th-border">手机号码</th>\r\n                                                <th class="th-border">证件类型</th>\r\n                                                <th class="th-border">证件号</th>\r\n                                                <th class="th-border">设为联系人</th>\r\n                                                <th class="th-border">操作</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody class="T-addTouristTbody">\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <form class="form-horizontal touristGroupMainFormRS T-touristGroupMainFormRS" role="form" style="margin-top:10px" onsubmit="return false">\r\n        <div class="form-group">\r\n            <div class="col-xs-12 col-sm-12 widget-container-col">\r\n                <div class=" ui-sortable-handle">\r\n                    <h5 class="">\r\n						<span class="badge badge-primary">4</span>\r\n						<label class="middle title-size">中转</label>\r\n					</h5>\r\n\r\n                    <div class="form-inline col-sm-12"> \r\n                        <div class="form-group fixed-width T-recive col-sm-6" style="margin-left:25px;">\r\n                            <div class="col-sm-12 T-recive-title" style="padding-bottom:10px;">接团</div>\r\n                            <label data-type="receiveBus" class="control-label T-add-action" style="margin-left:25px;">\r\n                                <input type="checkbox" class="ace">\r\n                                <span class="lbl">车辆</span>\r\n                            </label>\r\n                            <label data-type="receiveHotel" class="control-label T-add-action mar-l-10">\r\n                                <input type="checkbox" class="ace">\r\n                                <span class="lbl">酒店</span>\r\n                            </label>\r\n                            <label data-type="receiveRestaurant" class="control-label T-add-action mar-l-10">\r\n                                <input type="checkbox" class="ace">\r\n                                <span class="lbl">餐饮</span>\r\n                            </label>\r\n                            <label data-type="receiveTicket" class="control-label T-add-action mar-l-10">\r\n                                <input type="checkbox" class="ace">\r\n                                <span class="lbl">票务</span>\r\n                            </label>\r\n                            <label data-type="receiveOther" class="control-label T-add-action mar-l-10">\r\n                                <input type="checkbox" class="ace">\r\n                                <span class="lbl">其他</span>\r\n                            </label>\r\n\r\n                            <div class="col-xs-12 T-action-require-list T-receive-list">\r\n                              \r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class="form-group fixed-width T-send col-sm-6">\r\n                            <div class="col-sm-12 T-send-title" style="padding-bottom:10px;">送团</div>\r\n                            <label data-type="sendBus" class="control-label T-add-action" style="margin-left:25px;">\r\n                                <input type="checkbox" class="ace">\r\n                                <span class="lbl">车辆</span>\r\n                            </label>\r\n                            <label data-type="sendHotel" class="control-label T-add-action mar-l-10">\r\n                                <input type="checkbox" class="ace">\r\n                                <span class="lbl">酒店</span>\r\n                            </label>\r\n                            <label data-type="sendRestaurant" class="control-label T-add-action mar-l-10">\r\n                                <input type="checkbox" class="ace">\r\n                                <span class="lbl">餐饮</span>\r\n                            </label>\r\n                            <label data-type="sendTicket" class="control-label T-add-action mar-l-10">\r\n                                <input type="checkbox" class="ace">\r\n                                <span class="lbl">票务</span>\r\n                            </label>\r\n                            <label data-type="sendOther" class="control-label T-add-action mar-l-10">\r\n                                <input type="checkbox" class="ace">\r\n                                <span class="lbl">其他</span>\r\n                            </label>\r\n\r\n                            <div class="col-xs-12 T-action-require-list T-leave-list">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="space-10"></div>\r\n        <button class="btn btn-block btn-primary T-submit-addTouristGroup guideSubmit">\r\n            <i class="ace-icon fa fa-check"></i> 提交信息\r\n        </button>\r\n        <div class="space-20"></div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});