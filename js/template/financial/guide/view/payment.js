/*TMODJS:{"debug":true,"version":318,"md5":"dce9a9248f2fbd11dc45d9ed77a52fca"}*/
define(function(require) {
    return require("../../../template")("financial/guide/view/payment", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, type = $data.type, $escape = $utils.$escape, orderNumber = $data.orderNumber, createTime = $data.createTime, args = $data.args, resourceName = $data.resourceName, guideInfo = $data.guideInfo, imgUrl = $data.imgUrl, payMoney = $data.payMoney, $out = "";
            return $out += '<div class="T-payment-container hct-pay-wrap"> <div class="row"> ', 
            $line = 3, 0 != type && ($out += ' <div class="col-sm-12"> <span class="col-sm-6 hct-pay-payee" style="padding-left:0;">支付单号：', 
            $line = 5, $out += $escape(orderNumber), $out += '</span> <span class="col-sm-6 hct-pay-payee">创建时间：', 
            $line = 6, $out += $escape($helpers.dateFormat(createTime, "yyyy-MM-dd hh:mm:ss")), 
            $out += "</span> </div> ", $line = 8), $out += ' <div class="col-xs-12"> <span class="hct-pay-payee">收款方：<strong>', 
            $line = 10, 0 == type ? ($line = 10, $out += $escape(args.resourceName), $line = 10) : ($line = 10, 
            $out += $escape(resourceName), $line = 10), $out += '</strong></span> </div> <div class="col-xs-3"> <a class="hct-pay-item fa fa-check T-option T-pay-item pay-action" data-value="1"> <img src="/images/underline.png"> </a> </div> <div class="col-xs-3"> <a class="hct-pay-item fa fa-check T-option T-pay-item T-showGuide" data-value="2"> <img src="/images/alipay.png"> </a> </div> <div class="col-xs-12 hide T-guideInfo"> <div class="hct-pay-info"> <div class="hct-pi-header pull-left"><img class="T-guideImg" src="', 
            $line = 24, 0 == type || "" == guideInfo.photo || null == guideInfo.photo ? ($out += "/images/logo_24x24.png", 
            $line = 24) : ($line = 24, $out += $escape(imgUrl + guideInfo.photo), $line = 24), 
            $out += '"></div> <div class="hct-pi-name pull-left T-guideName">', $line = 25, 
            (1 == type || 2 == type) && ($line = 25, $out += $escape(guideInfo.name), $line = 25), 
            $out += '</div> <div class="hct-pi-guideNum pull-left">导游证：<span class="T-guideNumber">', 
            $line = 26, (1 == type || 2 == type) && ($line = 26, $out += $escape(guideInfo.guideCardNumber), 
            $line = 26), $out += '</span></div> <div class="hct-pi-hotel pull-left">联系电话：<span class="T-guideMobile">', 
            $line = 27, (1 == type || 2 == type) && ($line = 27, $out += $escape(guideInfo.mobileNumber), 
            $line = 27), $out += '</span></div> </div> </div> <div class="col-xs-12"> ', $line = 31, 
            0 != type && ($out += '<a class="pull-left T-option T-detail" style="line-height:34px; font-size: 16px;">明细</a>', 
            $line = 31), $out += ' <a href="javascript:;" class="btn btn-warning pull-right T-option T-toPay" style="height: 34px; font-size: 18px; padding: 0px 26px;border-radius: 8px;">确定</a> <div class="pull-right" style="padding-right:20px; line-height:34px;"> <span>付款金额：</span> <span style="font-size:32px; color: #ff8922;"><em style="color:#c0c1c0; font-style:normal;">￥</em>', 
            $line = 35, 0 == type ? ($line = 35, $out += $escape(args.payMoney), $line = 35) : ($line = 35, 
            $out += $escape(payMoney), $line = 35), $out += "</span> </div> </div> </div> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-payment-container hct-pay-wrap">\r\n	<div class="row">\r\n		{{if type != 0}}\r\n		<div class="col-sm-12">\r\n			<span class="col-sm-6 hct-pay-payee" style="padding-left:0;">支付单号：{{orderNumber}}</span>\r\n			<span class="col-sm-6 hct-pay-payee">创建时间：{{createTime | dateFormat:"yyyy-MM-dd hh:mm:ss"}}</span>\r\n		</div>\r\n		{{/if}}\r\n		<div class="col-xs-12">\r\n			<span class="hct-pay-payee">收款方：<strong>{{if type == 0}}{{args.resourceName}}{{else}}{{resourceName}}{{/if}}</strong></span>\r\n		</div>\r\n		<div class="col-xs-3">\r\n			<a class="hct-pay-item fa fa-check T-option T-pay-item pay-action" data-value="1">\r\n				<img src="/images/underline.png">\r\n			</a>\r\n		</div>\r\n		<div class="col-xs-3">\r\n			<a class="hct-pay-item fa fa-check T-option T-pay-item T-showGuide" data-value="2">\r\n				<img src="/images/alipay.png">\r\n			</a>\r\n		</div>\r\n		<div class="col-xs-12 hide T-guideInfo">\r\n			<div class="hct-pay-info">\r\n				<div class="hct-pi-header pull-left"><img class="T-guideImg" src="{{if type == 0 || guideInfo.photo == "" || guideInfo.photo == null}}/images/logo_24x24.png{{else}}{{imgUrl + guideInfo.photo}}{{/if}}"></div>\r\n				<div class="hct-pi-name pull-left T-guideName">{{if type == 1 || type == 2}}{{guideInfo.name}}{{/if}}</div>\r\n				<div class="hct-pi-guideNum pull-left">导游证：<span class="T-guideNumber">{{if type == 1 || type == 2}}{{guideInfo.guideCardNumber}}{{/if}}</span></div>\r\n				<div class="hct-pi-hotel pull-left">联系电话：<span class="T-guideMobile">{{if type == 1 || type == 2}}{{guideInfo.mobileNumber}}{{/if}}</span></div>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12">\r\n			{{if type != 0}}<a class="pull-left T-option T-detail" style="line-height:34px; font-size: 16px;">明细</a>{{/if}}\r\n			<a href="javascript:;" class="btn btn-warning pull-right T-option T-toPay" style="height: 34px; font-size: 18px; padding: 0px 26px;border-radius: 8px;">确定</a>\r\n			<div class="pull-right" style="padding-right:20px; line-height:34px;">\r\n				<span>付款金额：</span>\r\n				<span style="font-size:32px; color: #ff8922;"><em style="color:#c0c1c0; font-style:normal;">￥</em>{{if type == 0}}{{args.payMoney}}{{else}}{{payMoney}}{{/if}}</span>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});