/**
 * 财务公共页面
 * 
 * by 廖佳玲 2016-06-24
 */
define(function(require, exports) {
	var payedDetailTempLate = require("./view/payedDetails");

	var Fin = {};

	//已付金额明细
    Fin.payedDetail = function(id,url) {
        $.ajax({
            url: url,
            type: "POST",
            data: {
                id: id
            },
            success: function(data) {
                if (showDialog(data)) {
                    if(data.result.length == 0){
                        showMessageDialog("暂无已付明细记录！");
                    } else {
                        var html = payedDetailTempLate(data);
                        layer.open({
                            type: 1,
                            title: "已付金额明细",
                            skin: 'layui-layer-rim',
                            area: '1000px',
                            zIndex: 1028,
                            content: html,
                            scrollbar: false
                        });
                    }
                }
            }
        });
    };

    exports.payedDetail = Fin.payedDetail;
});