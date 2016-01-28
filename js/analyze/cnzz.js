
var Analyze = Analyze || {};
Analyze.utility = {
	getEvent: function(event) { 
	        return event ? event :window.event; 
	}, 
	getTarget: function(event) { 
		var event = this.getEvent(event);
	    return event.target  || event.srcElement; 
	}	
};

Analyze.push_cnzz = function(target, page) {
	var data = ["_trackEvent"];
	switch (page) {
		case '/login.html':
			_czc.push(["_trackEvent", '登陆页', '', '', 1, siteId]);
			if (target.id === 'id-btn-login') {
				_czc.push( ["_trackEvent", "登录", "点击登录", "", 1, siteId]);
			}
			break;
		case '/index.html':
			var tmp = Analyze.getType(target);

			if (tmp.length === 6) {
				_czc.push(tmp);
				// console.info(tmp)
			} else if (tmp.length === 3) {
				data = data.concat(tmp);
				data = data.concat([1, siteId]);
				// console.info(data)
				_czc.push(data);
			}
		default: break;
	}
};

Analyze.getType = function(target) {
	var data = [], $that = $(target), $parent = $that.parent();

	if ($that.closest('#sidebar').length) {
		if ($that.is('a')) {
			data.push('菜单操作');
			if ($that.find('.submenu').length) {
				data = data.concat([$that.text().trim(), '']);
			} else if ($that.closest('.submenu').length) {
				var mainMenu = $that.closest('.submenu').prevAll('a').text().trim();

				data = data.concat([mainMenu, $that.text().trim()])
			}
		}
	} else if ($that.closest('#tabContent').length) {
		if ($that.is('[class*=T-]') || $parent.is('[class*=T-]')) {
			// 1. get from data
			var id = $that.closest('.tab-pane-menu').prop('id');
			if (!!id) {
				var item = Analyze.data[id], targetItem = false;

				if (item) {
					for (var i = 0, len = item.length; i < len; i ++) {
						if ($that.is(item[i].key) || $parent.is(item[i].key)) {
							targetItem = item[i];
							data = targetItem.args;
							break;
						}
					}
				}

				if (!targetItem) {
					var $menuA = $('#sidebar').find('.active').children('a');

					if ($menuA.length === 2) {
						data.push($menuA.eq(0).text().trim());

						data.push($('#tabList').find('[href="#' + id + '"]').text().trim());
						data.push($that.text().trim());
					}
				}
			}
			// var $a = $('#sidebar').find('.active').children('a'),
			// 	len = $a.length, i = 1;
			// while (len-- > 0) {
			// 	data[i-1] = $a.eq(i-1).text().trim();
			// 	i++;
			// }

			// data.push($that.text().trim());
		}
	} else {
		var item = Analyze.data['other'], targetItem = false;

		if (item) {
			for (var i = 0, len = item.length; i < len; i ++) {
				if ($that.is(item[i].key) || $parent.is(item[i].key)) {
					targetItem = item[i];
					data = targetItem.args;
					break;
				}
			}
		}
	}

	return !data[2] ?[]:data;
};

(function($) {
	var pathname = location.pathname;

	if (pathname === '/') {
		pathname = '/login.html'
	}

	$('body').on('click', function(event) {
		target = Analyze.utility.getTarget(event);
		Analyze.push_cnzz(target, pathname);
	});

})(jQuery);