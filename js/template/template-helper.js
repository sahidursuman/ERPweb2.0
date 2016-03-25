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
template.helper("decode", function(data) {
    try {
        data = decodeURIComponent(data);
    } catch(e) {

    }

    return data;
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
template.helper("getCustomerType", function(status, isSel) {
    var res = '';
    res += '<option value="" '+(status == ''|| status == null?'selected':'')+'>全部</option>';
    res += '<option value="0" '+(status == '0'?'selected':'')+'>散客</option>';
    res += '<option value="1" '+(status == '1'?'selected':'')+'>团体</option>';
    if(isSel){
        res = status == "1" ? "团体" : "散客";
    }
    return res;
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

template.helper("getFeeItemType", function(type,isTransfer) {
    var res = '';
    type = type || 1;
    res += '<option value="1" '+(type == 1?'selected':'')+'>大人结算价</option>';
    res += '<option value="2" '+(type == 2?'selected':'')+'>小孩结算价</option>';
    if(isTransfer){
      res += '<option value="3" '+(type == 3?'selected':'')+'>中转结算价</option>';  
    }
    res += '<option value="4" '+(type == 4?'selected':'')+'>车辆费用</option>';
    res += '<option value="5" '+(type == 5?'selected':'')+'>餐厅费用</option>';
    res += '<option value="6" '+(type == 6?'selected':'')+'>保险费用</option>';
    res += '<option value="7" '+(type == 7?'selected':'')+'>导服费</option>';
    res += '<option value="8" '+(type == 8?'selected':'')+'>酒店费用</option>';
    res += '<option value="9" '+(type == 9?'selected':'')+'>景区费用</option>';
    res += '<option value="10" '+(type == 10?'selected':'')+'>自费费用</option>';
    res += '<option value="11" '+(type == 11?'selected':'')+'>票务费用</option>';
    res += '<option value="12" '+(type == 12?'selected':'')+'>其他费用</option>';
    return res;
});
template.helper("getFeeItemText", function(type) {
    switch(type * 1){
        case 1: return "大人结算价";
        case 2: return "小孩结算价";
        case 3: return "中转结算价";
        case 4: return "车辆费用";
        case 5: return "餐厅费用";
        case 6: return "保险费用";
        case 7: return "导服费";
        case 8: return "酒店费用";
        case 9: return "景区费用";
        case 10: return "自费费用";
        case 11: return "票务费用";
        case 12: return "其他费用";
        default: return "大人结算价";
    }
});
template.helper("getWayTypeText", function(status) {
    var res = ['', '旅行社系统', '传真', '短信', '电话', 'QQ', '微信', '线上渠道'];
    status = status || 1;
    return res[status];
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
template.helper("getPlanPayTypeText", function(payType) {
    switch (payType * 1) {
        case 0:
            return '现金';
        case 1:
            return '刷卡';
        case 2:
            return '签单';
        default:
            return '其他';
    }
});
template.helper("getTravelAgencyType", function(payType) {
    switch (payType * 1) {
        case 0:
            return '地接社';
        case 1:
            return '组团社';
        case 2:
            return '地接社和组团社';
        default:
            return '组团社';
    }
});
template.helper("getTravelAgencyLevel", function(payType) {
    switch (payType * 1) {
        case 1:
            return '金牌';
        case 2:
            return '银牌';
        case 3:
            return '铜牌';
        default:
            return '金牌';
    }
});
template.helper("getPlanPayTypeOption", function(status) {
    var res = '';
    status = status || 0;
    res += '<select name="payType"><option value="0" '+(status == 0?'selected':'')+'>现金</option>';
    res += '<option value="1" '+(status == 1?'selected':'')+'>刷卡</option>';
    res += '<option value="2" '+(status == 2?'selected':'')+'>签单</option></select>';
    return res;
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
        case 4:
            return '其他';
        default:
            return '网付';
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
template.helper("getRestaurantDesc", function(status, canEdit) {
    var res = '', i = 0, txt = ['早餐', '中餐', '晚餐'];

    status = status || '0,0,0';

    status = status.split(',');
    if (status.length != 3) {
        status = [0, 0, 0];
    }
    
    for (var i = 0; i < 3; i ++) {
        res += '<label><input type="checkbox" class="ace" disabled="disabled" '+ (status[i] == 1?'checked': '') +'><span class="lbl"> '+ txt[i] +'</span></label>&nbsp;&nbsp;&nbsp;';
    }

    if (canEdit) {
        res = res.split('disabled="disabled"').join('');
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
template.helper("getTaskSelect", function(status, isCar) {
    var str = ['<select name="taskType">'],
        desc = ['全程', '接机', '送机', '前段', '中段', '后段'];
    if (isCar) {
        desc.push('小车接客');
    }
   
    for (var i = 0, len = desc.length;i < len; i ++) {
        str.push('<option value="'+ i + '" '+ (status == i?'selected': '')+'>'+ desc[i] +'</option>');
    }
    str.push('</select>');

    return str.join('');
});
template.helper("getHotelLevelDesc", function(level) {
    switch (level * 1) {
        case 1:     return '三星以下';
        case 2:     return '三星';
        case 3:     return '准四星';
        case 4:     return '四星';
        case 5:     return '准五星';
        case 6:     return '五星';
        case 7:     return '五星以上';
        default:     return '';
    }
});
template.helper("getHotelLevelOptions", function(level) {
    var res = '';
    level = level || 1;
    res += '<option value="1" '+(level == 1?'selected':'')+'>三星以下</option>';
    res += '<option value="2" '+(level == 2?'selected':'')+'>三星</option>';
    res += '<option value="3" '+(level == 3?'selected':'')+'>准四星</option>';
    res += '<option value="4" '+(level == 4?'selected':'')+'>四星</option>';
    res += '<option value="5" '+(level == 5?'selected':'')+'>准五星</option>';
    res += '<option value="6" '+(level == 6?'selected':'')+'>五星</option>';
    res += '<option value="7" '+(level == 7?'selected':'')+'>五星以上</option>';
    return res;
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
template.helper("getScoreStar", function(str, scoreType){
    var res = "", star = ['fa-star-o', 'fa-star-o', 'fa-star-o', 'fa-star-o', 'fa-star-o'];
    if(str > 4 && str < 15){
        star[0] = "fa-star-half-o";
    }else if(str >= 15  &&  str < 25){
        star[0] = "fa-star";
    }else if(str >= 25 &&  str < 35){
        star[0] = "fa-star";
        star[1] = "fa-star-half-o";
    }else if(str >= 35 &&  str < 45){
        star[0] = "fa-star";
        star[1] = "fa-star";
    }else if(str >= 45 &&  str < 55){
        star[0] = "fa-star";
        star[1] = "fa-star";
        star[2] = "fa-star-half-o";
    }else if(str >= 55 &&  str < 65){
        star[0] = "fa-star";
        star[1] = "fa-star";
        star[2] = "fa-star";
    }else if(str >= 65 &&  str < 75){
        star[0] = "fa-star";
        star[1] = "fa-star";
        star[2] = "fa-star";
        star[3] = "fa-star-half-o";
    }else if(str >= 75 &&  str < 85){
        star[0] = "fa-star";
        star[1] = "fa-star";
        star[2] = "fa-star";
        star[3] = "fa-star";
    }else if(str >= 85 &&  str < 95){
        star[0] = "fa-star";
        star[1] = "fa-star";
        star[2] = "fa-star";
        star[3] = "fa-star";
        star[4] = "fa-star-half-o";
    }else if(str >= 95){
        star[0] = "fa-star";
        star[1] = "fa-star";
        star[2] = "fa-star";
        star[3] = "fa-star";
        star[4] = "fa-star";
    }
    if(scoreType == "1"){
        for(var j=0; j<str * 1;j++){
            star[j] = "fa-star";
        }
    }
    for(var i=0; i<star.length; i++){
        res += '<i class="fa '+star[i]+'"></i>';
    }
    return res;
});
template.helper("getNoteItemText", function(status){
    var res = "交通";
    if(status == "trafic"){
        res = "交通";
    }else if(status == "hotel"){
        res = "住宿";
    }else if(status == "play"){
        res = "游玩";
    }else if(status == "note"){
        res = "笔记";
    }else if(status == "line"){
        res = "线路简介";
    }
    return res;
});

template.helper("getPartGroupStatusText", function(status){
    switch (status * 1){
        case 0:     return '已发团';
        case 1:     return '未分团';
        case 2:     return '已分团';
        case 3:     return '已转客';
        case 4:     return '已取消';
        case 5:     return '已拆分';
        case 6:     return '已内转';
        default:     return '-';
    }
});

template.helper("getBusinessTypeText", function(businessType) {
    switch (businessType) {
        case "guide":
            return '导游';
        case "busCompany":
            return '车队';
        case "hotel":
            return '酒店';
        default:
            return '-';
    }
});
