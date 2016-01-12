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

				data.quote = JSON.parse(data.quote);
				data.daysList = JSON.parse(data.daysList);
				data.busCompanyQuote = JSON.parse(data.busCompanyQuote);
				data.guideQuote = JSON.parse(data.guideQuote);
				data.insuranceQuote = JSON.parse(data.insuranceQuote);
				//var shareQuoteHtml = template("shareQuoteTemplate",data);
				var startTime = data.quote.startTime;
				for (var i = 0, len = data.daysList.length; i < len; i++) {
					data.daysList[i].times = checkInTime(i,startTime);
				}
				var shareQuoteHtml = quoteTemplate(data);
				console.log(data);
				$("body").html(shareQuoteHtml);

				//首先将#back-top隐藏
				$("#back-top").hide();

				//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
				$(function () {
				    $(window).scroll(function(){
				        if ($(window).scrollTop()>100){
				            $("#back-top").fadeIn(200);
				        }
				        else
				        {
				            $("#back-top").fadeOut(50);
				        }
				    });
				//当点击跳转链接后，回到页面顶部位置
				    $("#back-top").click(function(){
				        $('body,html').animate({scrollTop:0},300);
				        return false;
				    });
				});

				$(function(){
				        $('a[href*=#],area[href*=#]').click(function() {
				            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				                var $target = $(this.hash);
				                $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
				                if ($target.length) {
				                    var targetOffset = $target.offset().top;
				                    $('html,body').animate({
				                              scrollTop: targetOffset
				                            },
				                            1000);
				                    return false;
				                }
				            }
				        });
    })

			}
			else{
				alert(data.message);
			}
			// document.title = '报价单—来自'+data.quote.travelAgency.name;
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