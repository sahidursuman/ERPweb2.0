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

		// 公共事件
		$tab.on('click', '.T-more', function(event) {  // 高级搜
			event.preventDefault();
			$(this).closest('.form-inline').next().toggleClass('hidden');
		});		

		// 初始化中转页面的事件
		FrameFun.initTransferEvent($tab.find('#transfer-arrange'));
	};

	/**
	 * 中转安排的事件绑定
	 * @param  {object} $tab 所在的顶层容器
	 * @return {[type]}      [description]
	 */
	FrameFun.initTransferEvent = function($tab) {		
		$tab.on('click', '.T-search', function(event) {
			event.preventDefault();
			TransferFun.getList($(this).closest('form'));
		})	
		// table内操作
		.on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this);

			if ($that.hasClass('T-inform'))  {
				// 通知
				FrameFun.inform($that);
			} else if ($that.hasClass('T-arrange-item'))  {
				// 安排
				TransferFun.arrange($that);
			} else if ($that.hasClass('T-view'))  {
				// 查看
				TransferFun.view($that);
			}
		})	
		.find('.nav').on('click', 'a', function(event) {
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

	FrameFun.inform = function($inform) {
		if (!$inform.length) {
			console.info('通知主体为空，无法查询主体信息');
			return;
		}
		var args = {
			id: $inform.closest('tr').data('id'),			
		}

		args[$inform.data('target')] = 1;

		$.ajax({
		    url: KingServices.build_url(service_name,"noticeTransferArrange"),     
		    type: 'POST',
		    data: {
		        noticeItems: JSON.stringify(args)
		    },
		    success: function(data) {
		        if (showDialog(data)) {
		            showMessageDialog($( "#confirm-dialog-message" ),data.message, function() {
		                layer.close(noticeLayer);
		            })
		        }
		    }
		})
	}

	exports.init = FrameFun.initMain;
});