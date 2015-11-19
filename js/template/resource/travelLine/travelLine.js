/**
 * 发团管理--线路模板
 *
 * by weiguiyun  2015-11-14	
 */

define(function(require, exports) {
	var rule = require("./rule"),
		menuKey = "resource_travelLine",
		listTemplate = require("./view/list"),
		addTravelLineTemplate = require("./view/add"),  // 添加、修改、复制共用改模板
		addScheduleTemplate = require("./view/addLineDay"),
		scanDetailTemplate = require("./view/scanDetail"),
		viewLineDayTemplate = require("./view/viewDetail"),
		updateTemplate = require("./view/update"),
		scheduleDialogWidth = '950px',
		EDITOR_HEIGHT = 200;

	var ResTravelLine = {
		$tab: false
	};

	/**
	 * 初始化模块
	 * @return {[type]} [description]
	 */
	ResTravelLine.initModule = function() {
		ResTravelLine.getList();
	};

	/**
	 * 获取线路模板列表，初始化列表页面
	 * @param  {int} page 页码
	 * @return {[type]}      [description]
	 */
	ResTravelLine.getList = function(page) {
		var args = {
			pageNo: (page || 0),
			status: 1
		}
		if (!!ResTravelLine.$tab) {
			args = {
				pageNo: (page || 0),
				name: ResTravelLine.$tab.find('.T-search-template-name').val(),
				status: ResTravelLine.$tab.find('.T-select-status').children('button').data('value')
			}
		}

		$.ajax({
			url: KingServices.build_url('travelLine', 'listTravelLine'),
			type: 'post',
			data: args,
		})
		.done(function(data) {
			if (showDialog(data)) {
				// 转换数据格式
				data.travelLineList = JSON.parse(data.travelLineList || false);
				Tools.addTab(menuKey,"线路模板管理",listTemplate(data));

				// 绑定事件
				ResTravelLine.init_event();
				// 缓存页面
				ResTravelLine.listPageNo = args.pageNo;

				// 绑定翻页组件
				laypage({
				    cont: ResTravelLine.$tab.find('.T-pagenation'), 
				    pages: data.totalPage, //总页数
				    curr: (data.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		ResTravelLine.getList(obj.curr -1);
				    	}
				    }
				});	
			}
		});
	};

	/**
	 * 初始化列表页面的事件绑定
	 * @return {[type]} [description]
	 */
	ResTravelLine.init_event = function() {
		ResTravelLine.$tab = $('#tab-' + menuKey + '-content');

		/**
		 * 搜索顶部的事件绑定
		 */
		var $searchArea = ResTravelLine.$tab.find('.T-search-area');

		// 搜索
		$searchArea.find('.T-search-template-name').keyup(function(e){
			if(e.which == 13 && !window.forbiddenError){
				ResTravelLine.getList();
			}
		});
		$searchArea.find('.T-btn-search').on('click', function(event) {
			event.preventDefault();
			ResTravelLine.getList();
		});
		//搜索栏状态button下拉事件
		$searchArea.find('.T-select-status').on('click', 'a', function(event) {
			event.preventDefault();
			/* Act on the event */
			var $that = $(this);

			// 设置选择状态的效果
			$that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());

			ResTravelLine.getList();
		});

		/**
		 * 操作内容
		 */
		// 添加
		$searchArea.find('.T-btn-add').on('click', function(event) {
			event.preventDefault();
			ResTravelLine.add();
		});
		
		// 报表内的操作
		ResTravelLine.$tab.find('.T-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id');

			if ($that.hasClass('T-add-lineproduct'))  {
				// 预览
				ResTravelLine.addLineProduct(id);
			} else if ($that.hasClass('T-preview'))  {
				// 预览
				ResTravelLine.preview(id);
			} else if ($that.hasClass('T-view'))  {
				// 查看
				ResTravelLine.view(id);
			} else if ($that.hasClass('T-update'))  {
				// 编辑
				ResTravelLine.update(id);
			} else if ($that.hasClass('T-copy'))  {
				// 编辑
				ResTravelLine.copy(id);
			} else if ($that.hasClass('T-delete'))  {
				// 删除
				ResTravelLine.delete(id);
			}
		});
	};

	/**
	 * 添加线路模板
	 */
	ResTravelLine.add = function() {
		if (Tools.addTab(menuKey + '-add', '新增线路模板', addTravelLineTemplate())) {
			ResTravelLine.CU_event($('#tab-' + menuKey + '-add-content'));
		}
	};

	/**
	 * 修改线路模板
	 * @param  {int} id 线路模板数据的索引
	 * @return {[type]}    [description]
	 */
	ResTravelLine.update = function(id) {
		if (!!id) {
			var $tabItem = $('.tab-' + menuKey + '-update');
			if ($tabItem.length && ResTravelLine.update_id === id)  {
				$('.tab-' + menuKey + '-update').children('a').trigger('click');
				return;
			}

			$.ajax({
				url: KingServices.build_url('travelLine', 'getTravelLineById'),
				type: 'post',
				data: {id: id},
			})
			.done(function(data) {
				if (showDialog(data)) {
					ResTravelLine.update_id = id;
					data.id = id;
					data.travelLine = JSON.parse(data.travelLine);
					if (Tools.addTab(menuKey + '-update', '修改线路模板', updateTemplate(data))) {
						ResTravelLine.CU_event($('#tab-' + menuKey + '-update-content'));
					}
				}
			});
		}
	};

	/**
	 * 复制线路模板
	 * @param  {int} id 线路模板数据的索引
	 * @return {[type]}    [description]
	 */
	ResTravelLine.copy = function(id) {
		if (!!id) {
			var $tabItem = $('.tab-' + menuKey + '-copy');
			if ($tabItem.length && ResTravelLine.copy_id === id)  {
				$tabItem.children('a').trigger('click');
				return;
			}

			$.ajax({
				url: KingServices.build_url('travelLine', 'getTravelLineById'),
				type: 'post',
				data: {id: id},
			})
			.done(function(data) {
				if (showDialog(data)) {
					ResTravelLine.copy_id = id;
					data.travelLine = JSON.parse(data.travelLine);
					if (Tools.addTab(menuKey + '-copy', '复制线路模板', updateTemplate(data))) {
						ResTravelLine.CU_event($('#tab-' + menuKey + '-copy-content'));
					}
				}
			});
		}
	};

	/**
	 * 查看线路模板信息
	 * @param  {int} id 线路模板的索引
	 * @return {[type]}    [description]
	 */
	ResTravelLine.preview = function(id) {
		if (!!id) {
			layer.open({
				type:2,
				title:"线路日程详情",
				area: ['360px', '720px'],
				scrollbar:true,
				content: KingServices.build_url('travelLine', 'getLineProductDayDetail') + '&travelLineId='+id,
			});
		}
	};

	/**
	 * 查看线路模板信息
	 * @param  {int} id 线路模板的索引
	 * @return {[type]}    [description]
	 */
	ResTravelLine.view = function(id) {
		if (!!id) {
			$.ajax({
				url: KingServices.build_url('travelLine', 'getTravelLineById'),
				type:"POST",
				data:{ id: id},
				success:function(data){
					if(showDialog(data)){
						data.travelLine = JSON.parse(data.travelLine);
						Tools.addTab(menuKey + '-view',"查看线路模板", scanDetailTemplate(data));

						$('#tab-' + menuKey + '-view-content').find('.T-view').on('click', function(event) {
							event.preventDefault();
							var scheduleId = $(this).data('id');

					    	$.ajax({
					    		url: KingServices.build_url('travelLine', 'getTravelLineDayById'),
								type:"POST",
								data: {id : scheduleId},
								success:function(data){
									if(showDialog(data)){
										data.lineDay = JSON.parse(data.lineDay);
										layer.open({
											type: 1,
											title:"日程安排",
											skin: 'layui-layer-rim', //加上边框
											area: scheduleDialogWidth, //宽高
											zIndex:1030,
											content: viewLineDayTemplate(data),
											scrollbar: false,    // 推荐禁用浏览器外部滚动条
										});
									}
								}
							})
						});
					}
				}
			});
		}
	};

	/**
	 * 删除线路模板
	 * @param  {int} id 线路模板的索引
	 * @return {[type]}    [description]
	 */
	ResTravelLine.delete = function(id) {
		if (!!id)  {
			if (!!id)  {
				showConfirmDialog($( "#confirm-dialog-message" ), '你确定要删除该条记录？', function() {
					$.ajax({
						url: KingServices.build_url('travelLine', 'deleteTravelLine'),
						type:"POST",
						data: { id: id},
						success:function(data){
							if(showDialog(data)){
								ResTravelLine.getList(ResTravelLine.listPageNo);
							}
						}
					});
				});
			}
		}
	};

	/**
	 * 根据线路模板添加线路产品
	 * @param {int} template_id 线路模板的索引
	 */
	ResTravelLine.addLineProduct = function(template_id) {
		if (!!template_id)  {
			seajs.use("" + ASSETS_ROOT + modalScripts.resource_lineProduct,function(module){
				module.addLineProduct(template_id);
			});
		}
	};

	/**
	 * 绑定事件：添加、修改、复制界面
	 * @param {object} $tab 界面的父元素
	 */
	ResTravelLine.CU_event = function($tab) {
		var validator = rule.traveLineCheckor($tab);

		$tab.off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE)
		.on('change', function(event) {
			event.preventDefault();
			$tab.data('isEdited', true);
		})
		// 监听保存，并切换tab
		.on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
			event.preventDefault();
			ResTravelLine.save($tab, validator, [tab_id, title, html]);
		})
		.on(SWITCH_TAB_BIND_EVENT, function(event) {
			event.preventDefault();
			ResTravelLine.CU_event($tab);
		})
		// 保存后关闭
		.on(CLOSE_TAB_SAVE, function(event) {
			event.preventDefault();
			ResTravelLine.save($tab, validator);
		});

		// 添加日程
		$tab.find('.T-add-schedule').on('click', function(event) {
			event.preventDefault();
			ResTravelLine.CU_Schedule($tab);
		});

		// 表内操作
		$tab.find('.T-schedule-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), $tr = $that.closest('tr');

			if ($that.hasClass('T-update')) {
				ResTravelLine.CU_Schedule($tab, $tr);
			} else if ($that.hasClass('T-delete')) {
				ResTravelLine.deleteSchedule($tr);
			}
		});
		// 保存
		$tab.find('.T-btn-save').on('click', function(event) {
			event.preventDefault();
			ResTravelLine.save($tab, validator);
		});
	};

	/**
	 * 添加或者修改日程
	 * @param {object} $tab 父元素
	 * @param {object} $tr 现有记录的行元素
	 */
	ResTravelLine.CU_Schedule = function($tab, $tr) {
		var title = '新增日程' , data = {}, $tbody = $tab.find('.T-schedule-list'), time = (new Date()).getTime();

		if (!!$tr) {
			title = '修改日程';

			data = {
				whichDay: $tr.data('id') + 1,
				hotelLevel: $tr.find('input[name="hotelLevel"]').val(),
				title: $tr.children('td').eq(4).text(),
				hotelAddr: $tr.children('td').eq(2).text(),
				roadScenic: $tr.find('input[name="roadScenic"]').val(),
				repastDetail: $tr.children('td').eq(1).text(),
				description:  $tr.find('input[name="description"]').val()
			}
		} else {  // 新增
			for (var i = 0, $rows = $tbody.children('tr'), len = $rows.length, next = len; i < len ; i ++ )  {
				if ($rows.eq(i).data('id') != i)  {
					next = i;   // 第几天
					break;
				}
			}

			data.whichDay = next + 1;
			data.hotelLevel = 0;
		}

		data.time = time;

		var addScheduleLayer = layer.open({
			type: 1,
			title: title,
			skin: 'layui-layer-rim', //加上边框
			area: scheduleDialogWidth, //宽高
			zIndex:1029,
			content: addScheduleTemplate(data),
			success:function(){
				var $form = $('.T-schedule-form'), dayCheckor = rule.travelLineDayCheckor($form),
					ue = init_editor("schedule-detail-editor-" + time,{zIndex:99999999}, EDITOR_HEIGHT);

				if (!! data.description) {
					ue.ready(function(){
						ue.setContent(decodeURIComponent(data.description));
					});
				}

				$form.find(".T-btn-submit").click(function(){
					// 数据校验
					if (!dayCheckor.form()) return;

					
					var schedule = [], tmp, description = encodeURIComponent(ue.getContent());

					if (description.trim() == "") {
						showMessageDialog($( "#confirm-dialog-message" ), "请输入行程详情");
						return false;
					}
					schedule.push('<td>第' + data.whichDay + '天</td>');
					schedule.push('<td>' + $form.find('input[name="repastDetail"]').val() + '</td>');
					schedule.push('<td>'+ $form.find('input[name="restPosition"]').val()  +'</td>');
					tmp = $form.find("select[name=hotelLevel]").val();
					schedule.push('<td>'+ KingServices.getHotelDesc(tmp) +'</td>');
					schedule.push('<td>'+  $form.find("input[name=title]").val() +'</td>');
					schedule.push('<td style="width:120px"><div class="btn-group"><a class="cursor T-action T-update">修改|</a><a class="cursor T-action T-delete">删除</a></div>');
					schedule.push('<input type="hidden" name="hotelLevel" value="'+ tmp + '"/>');
					schedule.push('<input type="hidden" name="roadScenic" value="'+ $form.find("input[name=roadScenic]").val() + '"/>');
					schedule.push('<input type="hidden" name="description" value="'+ description + '"/>');
					schedule.push('</td>');

					// 添加或者更新日程
					schedule = schedule.join('');
					if (!!$tr) {
						$tr.html(schedule).removeClass('hidden');
					} else {
						var newTr = '<tr data-id="'+ (data.whichDay -1) +'">' + schedule + '</tr>';
						if (i < len) {
							$(newTr).insertBefore($rows.eq(i));
						} else {
							$tab.find('.T-schedule-list').append(newTr);
						}
					}

					layer.close(addScheduleLayer);
				});
			}
		})
	};

	/**
	 * 删除日程
	 * @param  {object} $tr 列对象
	 * @return {[type]}     [description]
	 */
	ResTravelLine.deleteSchedule = function($tr) {
		if (!!$tr && $tr.length)  {
			showConfirmDialog($( "#confirm-dialog-message" ), '你确定要删除该条记录？', function() {
				if (!!$tr.data('entity-id')) {
					$tr.addClass('deleted').fadeOut(function(){
						$tr.addClass('hidden');
					});
				} else {
					$tr.fadeOut(function(){
						$tr.remove();
					});
				}
			});
		}
	};


	/**
	 * 保存模板数据
	 * @param  {object} $tab      顶层容器
	 * @param  {object} validator 校验对象
	 * @param  {array} tab_array 切换tab的参数
	 * @return {[type]}           [description]
	 */
	ResTravelLine.save = function($tab, validator, tab_array) {
		if (!validator.form()) return;

		if (!ResTravelLine.isScheduleInOrder($tab)) {
			showMessageDialog($( "#confirm-dialog-message" ), '日程安排不连续，请您补充完整!');
			return;
		}
		var args = $tab.find('.T-main-form').serializeJson();

		// 启用标志
		args.status = 0;
		if ($tab.find('.T-status').prop('checked')) {
			args.status = 1;
		}

		// 获取日程数据
		var addJson = [], delJson = [];
		$tab.find('.T-schedule-list').children('tr').each(function(index, el) {
			var $tr = $(this), id = $tr.data('entity-id');			

			if ($tr.hasClass('deleted')) {  // 删除
				delJson.push({id: id});
			} else {
				var $feilds = $tr.children('td'),
					schedule = {
						whichDay: $tr.data('id') + 1,
						repastDetail: $feilds.eq(1).text(),
						restPosition: $feilds.eq(2).text(),
						title: $feilds.eq(4).text(),
						hotelLevel: $tr.find("input[name=hotelLevel]").val(),
						roadScenic: $tr.find("input[name=roadScenic]").val(),
						detail: $tr.find("input[name=description]").val(),
					};

				if (!!id)  {
					schedule.id = id;
				}
				addJson.push(schedule);
			}
		});

		if (addJson.length === 0) {
			showMessageDialog($( "#confirm-dialog-message" ), '至少录入一天的日程!');
			return;
		}

		args.travelLineJsonAdd = JSON.stringify(addJson);
		args.travelLineJsonDel = JSON.stringify(delJson);

		var id = $tab.find('.T-btn-save').data('id'), url = KingServices.build_url('travelLine', 'saveTravelLine');
		if (!!id) {
			args.id = id;
			url = KingServices.build_url('travelLine', 'updateTravelLine');
		}

		// 保存数据
		$.ajax({
			url: url,
			type: 'post',
			data: args,
		})
		.done(function(data) {
			if (showDialog(data))  {
				showMessageDialog($( "#confirm-dialog-message" ),data.message, function() {
					if (!!tab_array) {
						Tools.addTab(tab_array[0], tab_array[1], tab_array[2]);
						ResTravelLine.CU_event($tab);
					} else {
						Tools.closeTab(Tools.getTabKey($tab.prop('id')));
						ResTravelLine.getList(ResTravelLine.listPageNo);
					}

					$tab.data('isEdited', false);
				});
			}
		});
	}

	/**
	 * 判断日程是否连续
	 * @param  {object}  $tab 父容器
	 * @return {Boolean}      true: 连续，false: 不连续
	 */
	ResTravelLine.isScheduleInOrder = function($tab) {
		for (var i = 0, $row = $tab.find('.T-schedule-list').children('tr'), len = $row.length; i < len; i ++ ) {
			if ($row.eq(i).data('id') != i) {
				return false;
			}
		}

		return true;
	}

	// 暴露方法
	exports.init = ResTravelLine.initModule;
});