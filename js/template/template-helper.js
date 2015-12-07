template.helper("dateFormat",function(date, fmt){
	date = date.split('-').join('/');
	date = new Date(date);
	var o = {   
	    "M+" : date.getMonth()+1,                 //月份   
	    "d+" : date.getDate(),                    //日   
	    "h+" : date.getHours(),                   //小时   
	    "m+" : date.getMinutes(),                 //分   
	    "s+" : date.getSeconds(),                 //秒   
	    "q+" : Math.floor((date.getMonth()+3)/3), //季度   
	    "S"  : date.getMilliseconds()             //毫秒   
	  };
	  if(/(y+)/.test(fmt))   
	    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
	  for(var k in o)   
	    if(new RegExp("("+ k +")").test(fmt))   {
	  		fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
	    }
	  return fmt;
});
template.helper("encode",function(data){
	return encodeURIComponent(data);
});
template.helper("parseInt",function(data){
	return parseInt(data);
});
template.helper("interceptStr",function(data){
	return data.substring(0,39)+"...";
});
template.helper("toFixed", function(data) {
    return (data).toFixed(2);
});
template.helper("stringify", function(data) {
    return JSON.stringify(data);
});
template.helper("getCardText", function(idCardType) {
    switch(idCardType*1) {
    	case 0: 
    		return '身份证';
		case 1:
			return '护照';
		default:
			return '其他';
    }
});

template.helper("getTicketText", function(ticketType) {
    switch(ticketType*1) {
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