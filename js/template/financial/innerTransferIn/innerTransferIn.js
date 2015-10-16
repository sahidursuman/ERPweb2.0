define(function(require,exports){
	var menuKey = "financial_innerTransfer_in",
	    listTemplate = require("./view/list"),
		tabId = "tab-"+menuKey+"-content",
	    checkTabId = menuKey+"-checking",
	    blanceTabId = menuKey+"-blance",
	    yearList=[],
	    monthList = []
	    for(var i=2013;i<=new Date().getFullYear();i++){
	    	var yeardata={"value":i}
	    	yearList.push(yeardata)
	    };
	    for(var j = 1;j<=12;j++){
	    	var monthData = {"value":j}
	    	monthList.push(monthData);
	    };
	var InnerTransferIn = {
			searchData:{
		    	"fromBusinessGroupId":"",
		    	"year":"",
		    	"month":""
		    },
		    searchCheckData:{
		    	"fromBusinessGroupId":"",
		    	"fromBusinessGroupName":"",
		    	"year":"",
		    	"month":""
		    },
		    searchBalanceData:{
		    	"fromBusinessGroupId":"",
		        "fromBusinessGroupName":"",
		    	"year":"",
		    	"startMonth":"",
		    	"endMonth":""
		    },//back/financial/financialHotel.do
		    edited:false,
	        blanceEdited:false,
	        oldBlanceFromBusinessGroupId:0,
			listInnerTransferIn:function(pageNo,fromBusinessGroupId,year,month){
				InnerTransferIn.searchData={
			    	"fromBusinessGroupId":fromBusinessGroupId,
			    	"year":year,
			    	"month":month
			    }
			}
	}
	exports.listInnerTransferIn = InnerTransferIn.listInnerTransferIn;
})