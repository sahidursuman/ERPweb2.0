/**
 * 发团安排模块——主页框架
 * Auhtor：roger wei
 * 2016-03-31
 */

define(function(require, exports) {
	var TransferFun = require('./transfer'),

		// 模板
		MainFrameTemplate = require('./mainFrame');

	var FrameFun = {},
		tabKey = 'arrange_center';

	/**
	 * 初始化首页框架
	 * @return {[type]} [description]
	 */
	FrameFun.initMain = function() {
		if (Tools.addTab(tabKey, '中转安排', MainFrameTemplate())) {
			FrameFun.initMainEvent();
		}
	};

	/**
	 * 绑定事件
	 * @return {[type]} [description]
	 */
	FrameFun.initMainEvent = function() {
		var $tab = $('#tab-'+ tabKey + '-content');

		$tab.on('click', '.T-more', function(event) {
			event.preventDefault();
			$(this).closest('.form-inline').next().toggleClass('hidden');
		})
		.on('click', '.T-search', function(event) {
			event.preventDefault();
			var $form = $(this).closest('form'),
				target = $form.data('target');

			switch(target) {
				// 中转部分
				case 'transfer-bus':
					TransferFun.getBusList($form);
					break;
				case 'transfer-hotel':
					TransferFun.getHotelList($form);
					break;
				case 'transfer-other':
					TransferFun.getOtherList($form);
					break;

				default: break;
			}
		})
		// table内操作
		.on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this);

			if ($that.hasClass('T-inform'))  {
				// 通知
				
			} else if ($that.hasClass('T-arrange-item'))  {
				// 安排
				
			} else if ($that.hasClass('T-view'))  {
				// 查看
				
			}
		});
		.find('#transfer-arrange').find('.nav').on('click', 'a', function(event) {
			event.preventDefault();
			
			var $that = $(this);

			if (!$that.hasClass('ajax')) {
				$($that.attr('href')).find('.T-search').trigger('click');
			}

			$that.addClass('ajax');
		});

		// 初始化数据
		$tab.find('.T-search').eq(0).trigger('click');
	};
	exports.init = FrameFun.initMain;
});