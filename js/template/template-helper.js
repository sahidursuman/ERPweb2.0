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

template.helper("getDateText", function(startTime, whichDay) {
    return Tools.addDay(startTime, whichDay -1);
});


template.helper("encode", function(data) {
    return encodeURIComponent(data);
});
template.helper("parseInt", function(data) {
    return parseInt(data);
});
template.helper("interceptStr", function(data) {
    if (!!data) {
        data = data.substring(0, 39) + "...";
    }
    return data;
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
template.helper("getWayType", function(status) {
    var res = '';
    status = status || 1;
    res += '<option value="1" '+(status == 1?'selected':'')+'>旅行社系统</option>';
    res += '<option value="2" '+(status == 2?'selected':'')+'>传真</option>';
    res += '<option value="3" '+(status == 3?'selected':'')+'>短信</option>';
    res += '<option value="4" '+(status == 4?'selected':'')+'>电话</option>';
    res += '<option value="5" '+(status == 5?'selected':'')+'>QQ </option>';
    res += '<option value="6" '+(status == 6?'selected':'')+'>微信</option>';
    res += '<option value="7" '+(status == 7?'selected':'')+'>线上渠道</option>';
    return res;
});
template.helper("checked", function(status) {
    status = status || 0;    
    return status == 1 ? "checked" : "";
});
template.helper("getCardOption", function(status) {
    var res = '';
    status = status || 0;
    res += '<option value="0" '+(status == 0?'selected':'')+'>身份证</option>';
    res += '<option value="1" '+(status == 1?'selected':'')+'>护照</option>';
    res += '<option value="2" '+(status == 2?'selected':'')+'>其它</option>';
    return res;
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
template.helper("getHotelLevelDesc", function(level) {
    switch (level * 1) {
        case 2:     return '三星';
        case 3:     return '准四星';
        case 4:     return '四星';
        case 5:     return '准五星';
        case 6:     return '五星';
        case 7:     return '五星以上';
        default:     return '三星以下';
    }
});

template.helper("getOrderStatusDesc", function(status) {
    switch (status * 1) {
        case 1:     return '未预定';
        case 2:     return '预定中';
        case 3:     return '已预订';
        default:     return '无需预订';
    }
});
template.helper("getRepastDetail", function(repastDetail) {
    var res = [];

    if (repastDetail.breakfast ==1) {
        res.push('早餐');
    }

    if (repastDetail.lunch ==1) {
        res.push('午餐');
    }

    if (repastDetail.dinner ==1) {
        res.push('晚餐');
    }

    return res.join('、');
});
