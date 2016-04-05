var template = template || {};
template.helper = template.helper || function(){};
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

/**
 * 获取浏览器参数
 * @param  {string} name 参数名
 */
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); 
    return null;
}
var imgUrl = function () {
	var host = window.location.host, url = '';
	if(host.indexOf("192.168.0.") > -1
		|| host.indexOf("localhost") > -1){
		url = "http://7xlw2q.com2.z0.glb.qiniucdn.com/"; //测试或开发的图片地址
	}else{
		url = "http://7xlg3o.com2.z0.glb.qiniucdn.com/";//正式的图片地址
	}
	return url;
}();