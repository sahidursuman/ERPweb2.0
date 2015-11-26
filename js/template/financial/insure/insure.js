define(function(require, exports) {
	
	var rule = require("./rule");
		menuKey = "financial_insure",
	    listTemplate = require("./view/list"),
	    billImagesTemplate = require("./view/billImages"),
	    blanceRecords = require("./view/insuranceRecords"),
	    insuranceChecking = require("./view/insureChecking"),
	    insureClearing = require("./view/insureClearing"),
		tabId = "tab-"+menuKey+"-content",
	    checkTabId = menuKey+"-checking",
	    blanceTabId = menuKey+"-blance",
	    yearList=[],
	    monthList = [];

	  var  Insure = {
	  	listInsure:function(pageNo,scenicId,year,month){
	  	$.ajax({
            url:KingServices.build_url("financial/financialInsuranceSettlementList","insurance"),
            type: "POST",
            data: "pageNo="+pageNo+"&insuranceId="+insuranceId+"&year="+year+"&month="+month+"&sortType=auto",
            success: function(data){
                var result = showDialog(data);
                if (result) {
                    Insure.listInsure = JSON.parse(data.partnerAgencySet);
                    Insure.listInsure = JSON.parse(data.travelAgencySet);
                    var html = listTemplate(data);
                    addTab(menuKey,"保险账务",html);
                }
            }
        });

	  	}

}
	exports.init = Insure.listInsure;
});
