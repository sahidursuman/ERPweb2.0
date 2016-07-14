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
		travelOPtionTemplate = require("./view/travelOPtion"),
		scenicItemTemplate = require("./view/scenicItem"),
		scheduleDialogWidth = '950px',
		viewTab = menuKey+'-view',
		EDITOR_HEIGHT = 200;

	var ResTravelLine = {
		$tab: false
	};

	/**
	 * 初始化模块
	 * @return {[type]} [description]
	 */
	ResTravelLine.initModule = function() {
		ResTravelLine.$tab = null;
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
		//取消新建模板
		// $searchArea.find('.T-btn-delete').on('click', function(event) {
		// 	event.preventDefault();
		// 	ResTravelLine.cancelBtn();
		// });

	

		// 报表内的操作
		ResTravelLine.$tab.find('.T-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id');

			if ($that.hasClass('T-add-lineproduct'))  {
				// 预览
				ResTravelLine.addLineProduct(id);
			} else if ($that.hasClass('T-view-lineproduct')) {
				//查看线路产品
				var name = $that.closest('tr').find('.T-travelLineName').text();
				KingServices.viewLineProductList(0, name, id);
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
			}else if($that.hasClass('T-btn-delete')){
				// 取消
				ResTravelLine.cancelBtn(id);
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
				area: ['600px', '90%'],
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
						Tools.addTab(viewTab,"查看线路模板", scanDetailTemplate(data));
						var $viewTab = $('#tab-'+viewTab+'-content');
						$viewTab.find(".T-btn-viewCancel").click(function() {
							Tools.closeTab(viewTab);
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
				showConfirmDialog('你确定要删除该条记录？', function() {
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
		//var validator = rule.lineProductCheckor($tab);

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
			ResTravelLine.CU_Schedule($tab,validator);
			validator = rule.update(validator);
		});

		//删除日程
		$tab.find('.T-schedule-list').on('click', '.T-action', function() {
			var $this = $(this),$tr=$this.closest('tr');
			if ($this.hasClass('T-delete')) {
				ResTravelLine.deleteSchedule($this);
			}else if ($this.hasClass('T-details')) {
				ResTravelLine.updateDetails($this,$tr);

			}	
		})

		//取消操作  T-btn-cancel
		$tab.find(".T-btn-cancel").on('click', function(event) {
			event.preventDefault();
			Tools.closeTab(Tools.getTabKey($tab.prop('id')));
		});

		//关闭查看页面  T-btn-cancel
		

		// $container.find(".T-btn-cancelOption").click(function() {
  //                   layer.close(multiselectLayer);
  //               });
		// 景点初始化
		$tab.find('.T-schedule-list').on('click', '.T-chooseScenic', function(event) {
			var $this = $(this);
			ResTravelLine.chooseScenic($this);
		});
		ResTravelLine.viewOptionalScenic($tab.find('.T-chooseScenic'))
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
	ResTravelLine.CU_Schedule = function($tab,validator) {
		var day = {}, $tbody = $tab.find('.T-schedule-list'),
			$tr = $tbody.find('tr:not(.deleted)');
		if ($tr.length == 0) {
			day.whichDay = 1
		} else {  // 新增
			for (var i = 0, len = $tr.length, next = len; i < len+1 ; i ++ )  {
				if ($tr.eq(i).data('day') != i)  {
					next = i+1;   // 第几天
					break;
				}
			}
			day.whichDay = next;
		}
		var dataId = day.whichDay-1
		var html =  '<tr data-day="'+ dataId +'"><td>第' + day.whichDay +'天</td>"'+
					'<td><input class="col-sm-12" name="BriefTrip" /></td>'+
					'<td style="width:205px;"><label><input type="checkbox" class="ace T-breakfast" value="1" name="breakfast" /><span class="lbl">&nbsp;早餐</span></label>'+
					'<label style="margin-left:10px;"><input type="checkbox" class="ace T-lunch" value="1" name="lunch" /><span class="lbl">&nbsp;午餐</span></label>'+
					'<label style="margin-left:10px;"><input type="checkbox" class="ace T-dinner" value="1" name="dinner" /><span class="lbl">&nbsp;晚餐</span></label></td>'+
					'<td><input class="col-sm-12" name="LodgingPlace" /></td>'+
					'<td><input class="col-sm-12 T-chooseScenic"placeholder="多选" readonly="readonly" name="chooseScenic" data-propover="" /></td>'+
					'<td style="width:150px"><div class="btn-group"><a class="cursor T-action T-details">编辑行程详情</a>'+
					'<a class="cursor"> |</a> <a class="cursor T-action T-delete">删除</a></div>'+
					'<input type="hidden" name="description" value=""/>'
					'</tr>';
		if ($tr.length == 0) {
			$tbody.append(html);
		}else if ($tr.eq(0).data('day') == 0){
			$tr.eq(day.whichDay-2).after(html);
		}else{
			$tbody.prepend(html)
		}
		//表单验证
		rule.lineProductUpdate(validator);
	};

	// 编辑行程详情
	ResTravelLine.updateDetails = function($this,$tr){
		var title = '编辑行程详情',data={},time = (new Date()).getTime();
		data.time = time;
		var updateDetailsLayer = layer.open({
			type: 1,
			title: title,
			skin: 'layui-layer-rim', //加上边框
			area: scheduleDialogWidth, //宽高
			zIndex:1029,
			content: addScheduleTemplate(data),
			success:function(){
				data.description = $this.data('entity-content');
				var $form = $('.T-schedule-form'), dayCheckor = rule.travelLineDayCheckor($form),
				ue = init_editor("schedule-detail-editor-" + time,{zIndex:99999999}, EDITOR_HEIGHT);
				if (!! data.description) {
					ue.ready(function(){
						ue.setContent(data.description);
					});
				}		
				
				var $container = $(".T-schedule-form");
				//给提交按钮绑定事件
                $container.find(".T-btn-submit").on('click' , function() {
                	var content = UE.getEditor($container.find('.T-editor').prop('id')).getContent()
                	$this.data('entity-content', content)
                   	layer.close(updateDetailsLayer);
                });
				// 取消按钮绑定事件
				$container.find(".T-btn-delete").off('click').on('click', function() {
                   layer.close(updateDetailsLayer);
                });
			}
		})
	};

	/**
	 * 线路模板景区多选
	 * @param  {[type]} $this [对象]
	 * @return {[type]}       [description]
	 */
	ResTravelLine.chooseScenic = function($this) {
		var html = travelOPtionTemplate(),$inputJson = $this.data("propover");
		if (!!$inputJson && typeof $inputJson === "string") {
			$inputJson = JSON.parse($inputJson);
		}
		var multiselectLayer = layer.open({
            type: 1,
            title: "景点选择",
            skin: 'layui-layer-rim', //加上边框
            area: '1190px', //宽高
            zIndex: 1028,
            content: html,
            scrollbar: false,
            success: function(data) {
				var $container = $(".T-scenic-multiselect"),
                	$list = $container.find('.T-Scenic-content'),
                	scenicArray = [];

            	//给提交按钮绑定事件
                $container.find(".T-btn-sureSubmit").on('click' , saveScenic);
                //给取消按钮绑定事件
                $container.find(".T-btn-cancelOption").click(function() {
                    layer.close(multiselectLayer);
                });

            	scenicArray = $inputJson || [];
            	listChooseScenic(0);

            	function listChooseScenic(page,itemName) {
	            	$.ajax({
	            		url: KingServices.build_url('scenic','findScenicAndItem'),
	            		type: 'POST',
	            		data: {
	            			pageNo: page,
	            			itemName: itemName,
	            			sortType: ''
	            		},
	            		success: function(data) {
	            			if (showDialog(data)) {
	            				data.scenicList = JSON.parse(data.scenicList);
	            				var content = scenicItemTemplate(data)
	            				$list.html(content);
	            				$(window).trigger("resize");

								// 绑定翻页组件
								laypage({
								    cont: $container.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
								    pages: data.totalPage, //总页数
								    curr: (page + 1),
								    jump: function(obj, first) {
								    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
								    		listChooseScenic(obj.curr -1);
								    	}
								    }
								});	

								//翻页自动勾选已选自费项目
								var $tr = $list.find('tr');
								if (!!scenicArray.length) {
									for (var i = 0, len = scenicArray.length; i < len; i++) {
										for (var k = 0, itemLen = scenicArray[i].item.length; k < itemLen; k++) {
											$tr.each(function(j) {
												var $id = $tr.eq(j).find('[name=itemId]').val();
												if (scenicArray[i].item[k].itemId == $id) {
													$tr.eq(j).find('.T-add').prop('checked',true);
												}
											});
										}
									}
								}

								//添加/删除自选
								$container.find(".T-add").off('click').on('click', addScenic);
	            			}
	            		}
	            	});
            	}
            	//添加自选函数
	        	function addScenic(){
	        		var $that = $(this),$parent = $that.closest('tr'),
						$scenicId = $parent.data("entity-id"),
						$name = $parent.data("entity-name"),
						$itemId = $parent.find('[name=itemId]').val(),
						$itemName = $parent.data("entity-itemname");
					if (scenicArray.length == 0) {
						var json = {
							scenicId: $scenicId,
							name: $name,
							item: [{
								itemId: $itemId,
								itemName: $itemName
							}]
						}
						scenicArray.push(json);
					}else{
						for (var i = 0,len = scenicArray.length; i < len; i++) {
		        			if (scenicArray[i].scenicId == $scenicId) {
		        				for (var j = 0, itemLen = scenicArray[i].item.length; j < itemLen; j++) {
		        					if (scenicArray[i].item[j].itemId == $itemId) {
		        						scenicArray[i].item.splice(j,1);
		        						if (scenicArray[i].item.length == 0) {
		        							scenicArray.splice(i,1)
    										return;
		        						}
    									return;
		        					}
		        				}
		        			}
		        		}
		        		var a = 0;
		        		for (var i = 0,len = scenicArray.length; i < len; i++) {
		        			if (scenicArray[i].scenicId == $scenicId) {
		        				a = i+1;
		        				break;
		        			}
		        		}
		        		if (a == 0) {
		        			var json = {
								scenicId: $scenicId,
								name: $name,
								item: [{
									itemId: $itemId,
									itemName: $itemName
								}]
							}
							scenicArray.push(json);
		        		} else {
		        			var itemJson = {
		        				itemId: $itemId,
		        				itemName: $itemName
		        			}
		        			scenicArray[a-1].item.push(itemJson);
		        		}
	        		}
	        	};
	        	//保存函数
	        	function saveScenic(type){
	        		var optionalJson = scenicArray;
	        		optionalJson = JSON.stringify(optionalJson);
	        		$this.data("propover" , optionalJson);
	        		if (type == 1) {}else{
	        			layer.close(multiselectLayer);
	        		}
					ResTravelLine.viewOptionalScenic($this);
	        	};
            }
        })
	}
	/**
	 * 浮动查看景点多选
	 * @param  {[type]} $objInput [对象]
	 * @return {[type]}           [description]
	 */
	ResTravelLine.viewOptionalScenic = function($objInput){
		$objInput.each(function(){
			var $this = $(this),$parents = $this.closest('.form-group'),$title = [],$value = $this.data("propover");
			if (!!$value && typeof $value === "string") {
				$value = JSON.parse($value);
			}
			var inputValue = '',
				html = '';

			if (!!$value && $value.length > 0) {
					html = '<table class="table table-striped table-hover"><thead><tr><th class="th-border">景点</th><th class="th-border">收费项目</th></tr><tbody>';
				for (var i = 0; i < $value.length; i++) {
					var itemName = '';
					for (var j = 0, len = $value[i].item.length; j < len; j++) {
						if (j == len - 1) {
							itemName += $value[i].item[j].itemName;
						}else{
							itemName += $value[i].item[j].itemName + '、';
						}
					}
					if (i == $value.length -1) {
						inputValue += $value[i].name + '(' + itemName + ')';
					}else{
						inputValue += $value[i].name + '(' + itemName + ')、  ';
					}
					html += '<tr><td>'+$value[i].name+'</td><td>'+itemName+'</td></tr>'
				};
				html += '</tbody></table>';
			}
			$this.data("html",html);
			$this.val(inputValue);
			Tools.descToolTip($this,2);
			$this.data('bs.popover').options.content = html;
		})
	}
  
	/**
	 * 删除日程
	 * @param  {object} $tr 列对象
	 * @return {[type]}     [description]
	 */
	ResTravelLine.deleteSchedule = function($this) {
		var $tr = $this.closest('tr'), id = $tr.data('entity-id');
		if (!!id)  {
			showConfirmDialog('你确定要删除该条记录？', function() {
				$tr.addClass('deleted').fadeOut(function(){
					$tr.addClass('hidden');
				});
			});
		}else{
			$tr.fadeOut(function(){
				$tr.remove();
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
			showMessageDialog('日程安排不连续，请您补充完整!');
			return;
		}
		var args = $tab.find('.T-main-form').serializeJson();

		// // 启用标志
		args.status = 0;
		if ($tab.find('.T-status').prop('checked')) {
			args.status = 1;
		}

		// 获取日程数据
		var addJson = [], delJson = [],scenicListJson;
		//景点
		var $tr = $tab.find('.T-schedule-list').find('tr');
		/*for (var i = 0; i < $tr.length; i++) {
			if (!!$tr.eq(i).find('[name=chooseScenic]').data('propover')) {
				scenicListJson = $tr.eq(i).find('[name=chooseScenic]').data('propover')
				if(typeof $tr.eq(i).find('[name=chooseScenic]').data('propover') === 'string'){
					scenicListJson = JSON.parse($tr.eq(i).find('[name=chooseScenic]').data('propover'))
				}
			}
		}*/

		$tab.find('.T-schedule-list').children('tr').each(function(index, el) {
			var $tr = $(this), id = $tr.data('entity-id');
			if ($tr.hasClass('deleted')) {  // 删除
				delJson.push({id: id});
			} else {
				var $feilds = $tr.children('td'),
					schedule = {
						id : $tr.attr('data-entity-id'),
					   	whichDay: $tr.data('day') + 1,
						BriefTrip: $tr.find("input[name=BriefTrip]").val(),
						LodgingPlace: $tr.find("input[name=LodgingPlace]").val(),
						detail: encodeURIComponent($tr.find(".T-details").data('entity-content')),
						roadScenic: $tr.find("input[name=chooseScenic]").val(),
						scenicItemIds: ResTravelLine.jsonToString($tr.find('input[name=chooseScenic]').data('propover'))
					}, repastDetail = [];
					
					$tr.find('input[type="checkbox"]').each(function(index) {
						repastDetail[index] = this.checked?1:0;
					})

					schedule.repastDetail = repastDetail.join(',');
					  
				if (!!id)  {
					schedule.id = id;
				}
				addJson.push(schedule);
			}
		});
		if (addJson.length === 0) {
			showMessageDialog('至少录入一天的日程!');
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
				showMessageDialog(data.message, function() {

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
		for (var i = 0, $row = $tab.find('.T-schedule-list').children('tr:not(.deleted)'), len = $row.length; i < len; i ++ ) {
			if ($row.eq(i).data('day') != i) {
				return false;
			}
		}

		return true;
	}

	ResTravelLine.jsonToString = function(jTs) {
		if (typeof jTs != 'string') {
			jTs = JSON.stringify(jTs);
		}
		return jTs;
	}

	// 暴露方法
	exports.init = ResTravelLine.initModule;
	exports.chooseScenic = ResTravelLine.chooseScenic;
	exports.viewOptionalScenic = ResTravelLine.viewOptionalScenic;
});