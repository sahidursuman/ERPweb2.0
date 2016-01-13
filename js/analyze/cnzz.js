
var Analyze = Analyze || {}
Analyze.utility = {
	getEvent: function(event) { 
	        return event ? event :window.event; 
	}, 
	getTarget: function(event) { 
		var event = this.getEvent(event);
	    return event.target  || event.srcElement; 
	}	
}

Analyze.push_cnzz = function(target, page, siteId) {
	var id = target.id,

		data = Analyze.cnzz.data[page][id];

	data.push(siteId);

	return data;
}

Analyze.cnzz = {}

Analyze.cnzz.data = {
	'/login.html': {
		'baseEvent': [["_trackEvent", "登录", "访问登录页面", "", 3]],

		'id-btn-login': ["_trackEvent", "登录", "点击登录", "", 1]
	}

};


(function($) {
	//声明_czc对象:
	var _czc = _czc || [],
	// site id
	siteId = "1257163552",

	pathname = location.pathname;

	if (pathname === '/') {
		pathname = '/login.html'
	}

	//绑定siteid，请用您的siteid替换下方"XXXXXXXX"部分
	_czc.push(["_setAccount", siteId]);

	$('body').on('click', function(event) {
		event.preventDefault();
		target = Analyze.utility.getTarget(event);

		_czc.push(Analyze.push_cnzz(target, pathname, siteId));
	});


	var baseEvent = Analyze.cnzz.data[pathname]['baseEvent'];
	for (var i = 0, len = baseEvent.length; i < len ; i ++ ) {
		baseEvent[i].push(siteId);
		_czc.push(baseEvent[i]);
	}
})(jQuery);
