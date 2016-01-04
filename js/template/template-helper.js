template.helper("dateFormat", function(date, fmt) {
    if (!date) return '';

    date = date.split('-').join('/');
    date = new Date(date);
    var o = {
        "M+": date.getMonth() + 1, //月份   
        "d+": date.getDate(), //日   
        "h+": date.getHours(), //小时   
        "m+": date.getMinutes(), //分   
        "s+": date.getSeconds(), //秒   
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
        "S": date.getMilliseconds() //毫秒   
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    return fmt;
});
template.helper("encode", function(data) {
    return encodeURIComponent(data);
});
template.helper("parseInt", function(data) {
    return parseInt(data);
});
template.helper("interceptStr", function(data) {
    return data.substring(0, 39) + "...";
});
template.helper("toFixed", function(data) {
    return (data).toFixed(2);
});
template.helper("stringify", function(data) {
    return JSON.stringify(data);
});
template.helper("getCardText", function(idCardType) {
    switch (idCardType * 1) {
        case 0:
            return '身份证';
        case 1:
            return '护照';
        default:
            return '其他';
    }
});

template.helper("getTicketText", function(ticketType) {
    switch (ticketType * 1) {
        case 1:
            return '机票';
        case 2:
            return '汽车票';
        case 3:
            return '火车票';
        case 4:
            return '轮船票';
        default:
            return '其他';
    }
});
template.helper("getPayTypeText", function(payType) {
    switch (payType * 1) {
        case 0:
            return '现金';
        case 1:
            return '银行转账';
        case 2:
            return '网上支付';
        case 3:
            return '支票';
        default:
            return '其他';
    }
});    
template.helper("getBillStatusText", function(billStatus, tripPlanStatus) {
    switch (billStatus * 1) {
        case -1:
            if (tripPlanStatus == -1) {
                return '该发团计划已经被取消';
            } else {
                return '编辑计划';
            }
        case 0:
            return '导游已经报账，若需编辑，需要计调退回';
        case 1:
            return '计调已审核，若需编辑，需要财务和计调退回';
        case 2:
            return '财务已审核，若需编辑，需要管理员、财务和计调同时操作退回';
        default:
            return '';
    }
});
template.helper("getPayTypeOptions", function(payType) {
    var options = '', start = 0;

    options += '<option value="0" '+ (start++ == payType?'selected':'') +'>现金</option>';
    options += '<option value="1" '+ (start++ == payType?'selected':'') +'>银行转账</option>';
    start++;
    // options += '<option value="1" '+ (start++ == payType?'selected':'') +'>网上支付</option>';
    options += '<option value="3" '+ (start++ == payType?'selected':'') +'>支票</option>';
    options += '<option value="4" '+ (start++ == payType?'selected':'') +'>其他</option>';
   
    return options;
});

template.helper("getArrangeIcon", function(status) {
    switch (status * 1) {
        case 1:
            return 'fa-question';
        case 2:
            return 'fa-exclamation';
        case 3:
            return 'fa-check';
        case 4:
            return 'fa-times';
        default:
            return 'fa-minus';
    }
});
template.helper("getRestaurantDesc", function(status) {
    var res = '', i = 0;

    if (!!status) {
        status = status.split(',');
        res += '<input type="radio" readonly '+ (status[i++] == 0?'checked': '') +'/>早餐&nbsp;';
        res += '<input type="radio" readonly '+ (status[i++] == 0?'checked': '') +'/>中餐&nbsp;';
        res += '<input type="radio" readonly '+ (status[i++] == 0?'checked': '') +'/>晚餐&nbsp;';
    }
    
    return res;
});
template.helper("getTaskDesc", function(status) {
    switch (status * 1) {
        case 1:     return '接机';
        case 2:     return '送机';
        case 3:     return '前段';
        case 4:     return '中段';
        case 5:     return '后段';
        default:     return '全程';
    }
});
template.helper("getTaskSelect", function(status) {
    var str = ['<select name="taskType">'],
        desc = ['全程', '接机', '送机', '前段', '中段', '后段'];
   
    for (var i = 0, len = desc.length;i < len; i ++) {
        str.push('<option value="'+ i + '" '+ (status == i?'selected': '')+'>'+ desc[i] +'</option>');
    }
    str.push('</select>');

    return str.join('');
});
