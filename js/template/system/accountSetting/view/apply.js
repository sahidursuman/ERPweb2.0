/*TMODJS:{"debug":true,"version":108,"md5":"965db69e5d582a9f12a8539b0e458b8c"}*/
define(function(require) {
    return require("../../../template")("system/accountSetting/view/apply", '<div id="fuelux-wizard T-fuelux-wizard" class="fuelux-apply" data-target="#step-container" style="width: 80%;margin: auto;border: 2px solid #eee;height: 720px;"> <ul class="wizard-steps"> <li data-target="#step1"> <span class="step" style="font-weight: bolder;color: #fff;background-color: #5293c4">T</span> <span class="title">申请流程</span> </li> <li data-target="#step2"class="active"> <span class="step">1</span> <span class="title">免费在线申请</span> </li> <li data-target="#step3"> <span class="step">2</span> <span class="title">资料审核</span> </li> <li data-target="#step4"> <span class="step">3</span> <span class="title">线下签订协议</span> </li> <li data-target="#step4"> <span class="step">4</span> <span class="title">账户拨款</span> </li> </ul> <div class=\'apply-qualification\'> <p>1、借款人：夫妻双方身份证、户口簿、婚姻证明、财产资料（房产证明、土地使用证明或者购房合同）、个人征信报告、近三个月银行流水、旅行社相关资料（营业执照、税务登记证、机构代码、股东章程等企业一套资料）。</p> <p>2、担保人：身份证、户口簿、婚姻证明、财产资料（房产证明、土地使用证明或者购房合同）。</p> <p>3、还款来源资料：借款人需提供相应详细的还款来源证明。如：订单、应收账款、收入证明等。</p> </div> <div class="mar-l-15 pad-b-30"> <form class="T-form" role="form" onsubmit="return false"> <div class="apply-information mar-t-15"> <label><span class="necessary">*</span>借款人姓名：</label> <input type="text" name="name" class=""> <label class="mar-l-90"><span class="necessary">*</span>联系电话：</label> <input type="text" name="mobileNumber" class="r"> </div> <div class="apply-information" style="margin-top:12px;"> <label style="margin-left: 20px;"><span class="necessary">*</span>婚姻状况:</label> <select name="maritalStatus" id="" class="accountApply-status" > <option value="0">未婚</option> <option value="1">已婚</option> <option value="2">离异</option> <option value="3">丧偶</option> </select> <label class="mar-l-90"><span class="necessary">*</span>身份证号：</label> <input type="text" name="idCard"> </div> <div class="apply-information mar-t-15"> <label class="mar-l-10"><span class="necessary">*</span>营业执照：</label> <input type="text" name="businessNumber"> <label class="mar-l-90"><span class="necessary">*</span>机构代码：</label> <input type="text" name="code"> </div> <div class="col-xs-12 mar-t-20"> <label class="col-sm-1 control-label no-padding-right mar-l-f5">收入来源：</label> <input type="text" name="incomeStream" class="col-xs-10 apply-details"> </div> <div class="col-xs-12 mar-t-20"> <label class="col-sm-1 control-label no-padding-right mar-l-f5">借款用途：</label> <input type="text" name="purpose" class="col-xs-10 apply-details"> </div> <div class="col-xs-12 mar-t-20"> <label class="col-sm-1 control-label no-padding-right mar-l-f5">还款来源：</label> <input type="text" name="paymentStream" class="col-xs-10 apply-details"> </div> <div class="col-xs-12 mar-t-20"> <label style="margin-left: -18px;" class="col-sm-1 control-label no-padding-right">抵押物情况：</label> <input type="text" name="collateral" class="col-xs-10 apply-baseInfo"> </div> <div class="col-xs-12 mar-t-20"> <label style="width: 60px;" class="col-sm-1 control-label no-padding-right mar-l-15">备注：</label> <input type="text" name="remark" class="col-xs-10 apply-remark"> </div> <div class="col-xs-12 mar-t-20" style="margin-left: -15px;"> <label><span class="necessary">*</span>申请借款金额：</label> <input type="text" class="T-applyMoney" name="applyMoney" style="width: 120px !important;"><span style="margin-left: 5px;">元</span> </div> </form> <div class="form-inline col-xs-12" style="text-align: center;margin-top: 30px;"> <button class="btn btn-sm btn-danger T-btn-cancel"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-sm btn-primary T-btn-saveApply" style="margin-left: 30px"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div> ');
});