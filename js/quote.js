define(function(require, exports) {
	var quoteTemplate = require("./template/arrange/quote/view/quoteDetail");
	var href = window.location.href;
	var key = href.split("?")[1].split("=")[1];
	$.ajax({
		url: '/huochaitou/base.do?method=getSharedQuote',
		type: 'POST',
		data: "key="+key+"",
		success: function(data){
			if(data.success == 1){
				data.quoteDetailJson = JSON.parse(data.quoteDetailJson);
				data.daysList = JSON.parse(data.daysList);
				data.busCompanyArrange = JSON.parse(data.busCompanyArrange);
				//var shareQuoteHtml = template("shareQuoteTemplate",data);
				var startTime = data.quoteDetailJson.startTime;
				for (var i = 0, len = data.daysList.length; i < len; i++) {
					data.daysList[i].times = checkInTime(i,startTime);
				}
				var shareQuoteHtml = quoteTemplate(data);
				$("body").html(shareQuoteHtml);
			}
			else{
				alert(data.message);
			}
			document.title = '报价单—来自'+data.quoteDetailJson.travelAgency.name;
			function checkInTime(i,startTime) {
				var	date = new Date(startTime.replace("-", "/").replace("-", "/"));
				var timer = date.getTime()+(i)*24*60*60*1000;
				date.setTime(timer);
				var checkInTime = date.getFullYear()+ "-"+ (date.getMonth() + 1) + "-"+ (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
				return checkInTime;
			}

		}
	})
});