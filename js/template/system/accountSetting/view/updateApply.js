/*TMODJS:{"debug":true,"version":25,"md5":"7eee47319d104820c8cc14644f9e0b10"}*/
define(function(require) {
    return require("../../../template")("system/accountSetting/view/updateApply", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, baseInfo = $data.baseInfo, $out = "";
            return $out += '<div id="updateApplyMain" class="T-updateApply" data-target="#step-container" style="width: 80%;margin: auto;border: 2px solid #eee;height: 720px;"> <ul class="wizard-steps"> <li data-target="#step1"> <span class="step" style="font-weight: bolder;color: #fff;background-color: #5293c4">T</span> <span class="title">申请流程</span> </li> <li data-target="#step2"class="active"> <span class="step">1</span> <span class="title">免费在线申请</span> </li> <li data-target="#step3"> <span class="step">2</span> <span class="title">资料审核</span> </li> <li data-target="#step4"> <span class="step">3</span> <span class="title">线下签订协议</span> </li> <li data-target="#step4"> <span class="step">4</span> <span class="title">账户拨款</span> </li> </ul> <div style="margin-top: 25px;width: 90%;margin-left: 10px;"> <p>1、借款人：夫妻双方身份证、户口簿、婚姻证明、财产资料（房产证明、土地使用证明或者购房合同）、个人征信报告、近三个月银行流水、旅行社相关资料（营业执照、税务登记证、机构代码、股东章程等企业一套资料）。</p> <p>2、担保人：身份证、户口簿、婚姻证明、财产资料（房产证明、土地使用证明或者购房合同）。</p> <p>3、还款来源资料：借款人需提供相应详细的还款来源证明。如：订单、应收账款、收入证明等。</p> </div> <div style="margin-left: 15px;padding-bottom: 30px;"> <form class="T-form" role="form" onsubmit="return false"> <div class="apply-information" style="margin-top:15px;"> <label><span class="necessary">*</span>借款人姓名：</label> <input type="text" name="name" value="', 
            $line = 39, $out += $escape(baseInfo.name), $out += '" class=""> <input type="hidden" name="id" value="', 
            $line = 40, $out += $escape(baseInfo.applyId), $out += '"> <label style="margin-left: 90px;"><span class="necessary">*</span>联系电话：</label> <input type="text" value="', 
            $line = 41, $out += $escape(baseInfo.mobileNumber), $out += '" name="mobileNumber" class="r"> </div> <div class="apply-information" style="margin-top:12px;"> <label style="margin-left: 20px;"><span class="necessary">*</span>婚姻状况:</label> <select name="maritalStatus" id="" style="height: 30px !important;width: 250px !important;margin-top: 5px;"> <option value="0" ', 
            $line = 46, 0 == baseInfo.maritalStatus && ($out += "selected", $line = 46), $out += '>未婚</option> <option value="1" ', 
            $line = 47, 1 == baseInfo.maritalStatus && ($out += "selected", $line = 47), $out += '>已婚</option> <option value="2" ', 
            $line = 48, 2 == baseInfo.maritalStatus && ($out += "selected", $line = 48), $out += '>离异</option> <option value="3" ', 
            $line = 49, 3 == baseInfo.maritalStatus && ($out += "selected", $line = 49), $out += '>丧偶</option> </select> <label style="margin-left: 90px;"><span class="necessary">*</span>身份证号：</label> <input type="text" value="', 
            $line = 52, $out += $escape(baseInfo.idCard), $out += '" name="idCard" class=""> </div> <div class="apply-information" style="margin-top:15px;"> <label style="margin-left: 10px;"><span class="necessary">*</span>营业执照：</label> <input type="text" name="businessNumber" value="', 
            $line = 55, $out += $escape(baseInfo.businessNumber), $out += '" class=""> <label style="margin-left: 90px;"><span class="necessary">*</span>机构代码：</label> <input type="text" name="code" value="', 
            $line = 56, $out += $escape(baseInfo.code), $out += '" class=""> </div> <div class="col-xs-12" style="margin-top: 20px;"> <label style="margin-left:-5px;" class="col-sm-1 control-label no-padding-right">收入来源：</label> <input type="text" value="', 
            $line = 60, $out += $escape(baseInfo.incomeStream), $out += '" name="incomeStream" class="col-xs-10" style="margin-left: -32px;height: 30px !important;"> </div> <div class="col-xs-12" style="margin-top: 20px;"> <label style="margin-left: -5px;" class="col-sm-1 control-label no-padding-right">借款用途：</label> <input type="text" value="', 
            $line = 63, $out += $escape(baseInfo.purpose), $out += '" name="purpose" class="col-xs-10" style="margin-left: -32px;height: 30px !important;"> </div> <div class="col-xs-12" style="margin-top: 20px;"> <label style="margin-left: -5px;" class="col-sm-1 control-label no-padding-right">还款来源：</label> <input type="text" value="', 
            $line = 66, $out += $escape(baseInfo.paymentStream), $out += '" name="paymentStream" class="col-xs-10" style="margin-left: -32px;height: 30px !important;"> </div> <div class="col-xs-12" style="margin-top: 20px;"> <label style="margin-left: -18px;" class="col-sm-1 control-label no-padding-right">抵押物情况：</label> <input type="text" value="', 
            $line = 69, $out += $escape(baseInfo.collateral), $out += '" name="collateral" class="col-xs-10" style="margin-left: -20px;height: 30px !important;"> </div> <div class="col-xs-12" style="margin-top: 20px;"> <label style="margin-left: 15px;width: 60px;" class="col-sm-1 control-label no-padding-right">备注：</label> <input type="text" value="', 
            $line = 72, $out += $escape(baseInfo.remark), $out += '"name="remark" class="col-xs-10" style="margin-left: -5px;height: 30px !important;"> </div> <div class="col-xs-12" style="margin-top: 20px;margin-left: -15px;"> <label><span class="necessary">*</span>申请借款金额：</label> <input type="text" name="applyMoney" value="', 
            $line = 75, $out += $escape(baseInfo.applyMoney), $out += '" style="width: 120px !important;"><span style="margin-left: 5px;">元</span> </div> </form> <div class="form-inline col-xs-12" style="text-align: center;margin-top: 30px;"> <button class="btn btn-sm btn-danger T-btn-cancel"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-sm btn-primary T-btn-UpdateSaveApply" style="margin-left: 30px"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div id="updateApplyMain" class="T-updateApply" data-target="#step-container" style="width: 80%;margin: auto;border: 2px solid #eee;height: 720px;">\r\n	<ul class="wizard-steps">\r\n		<li data-target="#step1">\r\n		<span class="step" style="font-weight: bolder;color: #fff;background-color: #5293c4">T</span>\r\n		<span class="title">申请流程</span>\r\n		</li>\r\n\r\n		<li data-target="#step2"class="active">\r\n		<span class="step">1</span>\r\n		<span class="title">免费在线申请</span>\r\n		</li>\r\n\r\n		<li data-target="#step3">\r\n		<span class="step">2</span>\r\n		<span class="title">资料审核</span>\r\n		</li>\r\n\r\n		<li data-target="#step4">\r\n		<span class="step">3</span>\r\n		<span class="title">线下签订协议</span>\r\n		</li>\r\n		<li data-target="#step4">\r\n		<span class="step">4</span>\r\n		<span class="title">账户拨款</span>\r\n		</li>\r\n	</ul>\r\n\r\n\r\n	<div style="margin-top: 25px;width: 90%;margin-left: 10px;">\r\n		<p>1、借款人：夫妻双方身份证、户口簿、婚姻证明、财产资料（房产证明、土地使用证明或者购房合同）、个人征信报告、近三个月银行流水、旅行社相关资料（营业执照、税务登记证、机构代码、股东章程等企业一套资料）。</p>\r\n		<p>2、担保人：身份证、户口簿、婚姻证明、财产资料（房产证明、土地使用证明或者购房合同）。</p>\r\n		<p>3、还款来源资料：借款人需提供相应详细的还款来源证明。如：订单、应收账款、收入证明等。</p>\r\n	</div>\r\n	\r\n	<div style="margin-left: 15px;padding-bottom: 30px;">\r\n	<form class="T-form" role="form" onsubmit="return false">\r\n		<div class="apply-information" style="margin-top:15px;"> \r\n			<label><span class="necessary">*</span>借款人姓名：</label> \r\n			<input type="text" name="name" value="{{baseInfo.name}}" class="">\r\n			<input type="hidden" name="id" value="{{baseInfo.applyId}}">\r\n			<label style="margin-left: 90px;"><span class="necessary">*</span>联系电话：</label> <input type="text" value="{{baseInfo.mobileNumber}}" name="mobileNumber" class="r">\r\n		</div>\r\n		<div class="apply-information" style="margin-top:12px;"> \r\n		<label style="margin-left: 20px;"><span class="necessary">*</span>婚姻状况:</label>\r\n			<select name="maritalStatus" id="" style="height: 30px !important;width: 250px !important;margin-top: 5px;">\r\n				<option value="0" {{if baseInfo.maritalStatus==0}}selected{{/if}}>未婚</option>\r\n				<option value="1" {{if baseInfo.maritalStatus==1}}selected{{/if}}>已婚</option>\r\n				<option value="2" {{if baseInfo.maritalStatus==2}}selected{{/if}}>离异</option>\r\n				<option value="3" {{if baseInfo.maritalStatus==3}}selected{{/if}}>丧偶</option>\r\n				\r\n			</select>\r\n			<label style="margin-left: 90px;"><span class="necessary">*</span>身份证号：</label> <input type="text" value="{{baseInfo.idCard}}" name="idCard" class="">\r\n		</div>\r\n		<div class="apply-information" style="margin-top:15px;"> \r\n			<label style="margin-left: 10px;"><span class="necessary">*</span>营业执照：</label> <input type="text" name="businessNumber" value="{{baseInfo.businessNumber}}" class="">\r\n			<label style="margin-left: 90px;"><span class="necessary">*</span>机构代码：</label> <input type="text" name="code" value="{{baseInfo.code}}" class="">\r\n		</div>\r\n	\r\n		<div class="col-xs-12" style="margin-top: 20px;"> \r\n			<label style="margin-left:-5px;" class="col-sm-1 control-label no-padding-right">收入来源：</label> <input type="text" value="{{baseInfo.incomeStream}}" name="incomeStream" class="col-xs-10" style="margin-left: -32px;height: 30px !important;">\r\n		</div>\r\n		<div class="col-xs-12" style="margin-top: 20px;"> \r\n			<label style="margin-left: -5px;" class="col-sm-1 control-label no-padding-right">借款用途：</label> <input type="text"  value="{{baseInfo.purpose}}" name="purpose" class="col-xs-10" style="margin-left: -32px;height: 30px !important;">\r\n		</div>\r\n		<div class="col-xs-12" style="margin-top: 20px;"> \r\n			<label style="margin-left: -5px;" class="col-sm-1 control-label no-padding-right">还款来源：</label> <input type="text"  value="{{baseInfo.paymentStream}}" name="paymentStream" class="col-xs-10" style="margin-left: -32px;height: 30px !important;">\r\n		</div>\r\n		<div class="col-xs-12" style="margin-top: 20px;"> \r\n			<label style="margin-left: -18px;" class="col-sm-1 control-label no-padding-right">抵押物情况：</label> <input type="text"  value="{{baseInfo.collateral}}" name="collateral" class="col-xs-10" style="margin-left: -20px;height: 30px !important;">\r\n		</div>\r\n		<div class="col-xs-12" style="margin-top: 20px;"> \r\n			<label style="margin-left: 15px;width: 60px;" class="col-sm-1 control-label no-padding-right">备注：</label> <input type="text" value="{{baseInfo.remark}}"name="remark" class="col-xs-10" style="margin-left: -5px;height: 30px !important;">\r\n		</div>\r\n		<div class="col-xs-12" style="margin-top: 20px;margin-left: -15px;"> \r\n		<label><span class="necessary">*</span>申请借款金额：</label> <input type="text" name="applyMoney" value="{{baseInfo.applyMoney}}" style="width: 120px !important;"><span style="margin-left: 5px;">元</span>\r\n		</div>\r\n\r\n		</form>\r\n		<div class="form-inline col-xs-12" style="text-align: center;margin-top: 30px;"> <button class="btn btn-sm btn-danger T-btn-cancel"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-sm btn-primary T-btn-UpdateSaveApply" style="margin-left: 30px"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div>\r\n	</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});