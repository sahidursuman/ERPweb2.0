define(function(require, exports) {
	var MainTemplate = require('./view/listMain'),
		ListTemplate = require('./view/list'),
		menuKey = 'guide_arrange_table';


	 // 定义业务对象
	 var GuideArrange = {};

	 // 初始化首页页面
	 GuideArrange.initMain = function() {
	 	Tools.addTab(menuKey, '导游排班表', MainTemplate());

	 	GuideArrange.init_event();
	 };

	 // 绑定首页事件
	 GuideArrange.init_event = function() {
	 	var $tab = $('#tab-'+ menuKey + '-content'),
	 		$searchArea = $tab.find('.T-search-area'),
	 		$form = $searchArea.find('form');

 		GuideArrange.initSelect($tab);

 		Tools.setDatePicker($searchArea.find('.datepicker'), true);

 		// search
 		$searchArea.find('.T-search').on('click', function(event) {
 			event.preventDefault();
 			GuideArrange.initGuideList($form);
 		}).trigger('click');

 		GuideArrange.$tab = $tab;
	 };

	 /**
	  * 初始化安排表
	  * @return {[type]}      [description]
	  */
	 GuideArrange.initGuideList = function($form, page) {
	 	var args = $form.serializeJson();

	 	args.pageNo = page || 0;
	 	$.ajax({
	 		url: KingServices.build_url('guideDate', 'findPager'),
	 		type: 'get',
	 		data: args,
	 	})
	 	.done(function(data) {	 		
	 		if (showDialog(data)) {
	 			// 加载表格框架
	 			$form.parent().next().html(ListTemplate(data.searchParam.totalCount));

 				GuideArrange.loadList(data.guideList);

		 		laypage({
		 		    cont: GuideArrange.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
		 		    pages: data.searchParam.totalPage, //总页数
		 		    curr: (args.pageNo + 1),
		 		    jump: function(obj, first) {
		 		        if (!first) {  // 避免死循环，第一次进入，不调用页面方法
		 		            GuideArrange.initGuideList($form, obj.curr -1);
		 		        };
		 		    }
		 		});
	 		}
	 	});
	 };

	 var list, $table, tbl_start, tbl_end;
	 GuideArrange.loadList = function(guides) {
	 	// 初始化数据
	 	$table = GuideArrange.$tab.find('table'),
	 	tbl_start = tbl_end = 0;

 		for (var i = 0, len = guides.length; i < len; i ++) {
 			var str = [], innerTd = [];

 			for (var j = 0, jLen = guides[i].guideArrangeList.length, tmp; j < jLen; j ++ ) {
 				guides[i].guideArrangeList.sort(function(x, y) {
 					if (!tbl_start || tbl_start > x.startTime) {
 						tbl_start = x.startTime;
 					}

 					if (!tbl_end || tbl_end < x.endTime) {
 						tbl_end = x.endTime;
 					}

 					if (!tbl_start || tbl_start > y.startTime) {
 						tbl_start = y.startTime;
 					}

 					if (!tbl_end || tbl_end < y.endTime) {
 						tbl_end = y.endTime;
 					}
 					return (x.startTime > y.startTime)? 1: -1;
 				});
 			}

 			console.info(tbl_start)
 			console.info(tbl_end)
			// innerTd.push('<td class="T-tranplan" data-id="'+ tmp.tripPlanId +'">'+ tmp.lineProductName +'</td>')
 			// str.push('<tr><td>'+ guides[i].name +'</td>');

 			// str.push('</tr>');
 		}
	 }
	 // function pendTab() {
	 // 	var $table = $('')
	 // }
	 // var $table = $('#guide-arrange'),
	 // 	tbl_start = 0, tbl_end = 0,
	 // 	// 储存已经添加的名称
	 // 	nameList = [];

	 // function pushItem(info) {
	 // 	appendTable(info);
	 // 	addLine(info);
	 // }

	 // function appendTable(info) {
	 // 	var start = info.startTime,
	 // 		end = info.endTime,
	 // 		left = 0,
	 // 		right = 0,
	 // 		dayList = [start, end, tbl_start, tbl_end].sort(),
	 // 		right_start = tbl_end;

	 // 	if (tbl_start === 0)  {
	 // 		tbl_start = start;
	 // 		tbl_end = end;
	 // 		left = Tools.getDateDiff(start, end) +1;
	 // 	} else {
	 // 		switch(dayList.indexOf(end))  {
	 // 			// 最后一个的位置
	 // 			case 1: 		// 全部左侧
	 // 				left = Tools.getDateDiff(start, tbl_start);
	 // 				tbl_start = start;
	 // 				break;
	 // 			case 2: 		// 左侧在左
	 // 				if (start < tbl_start) {
	 // 					left = Tools.getDateDiff(start, tbl_start);
	 // 					tbl_start = start;
	 // 				}
	 // 				break;
	 // 			case 3:
	 // 				if (start < tbl_start) {  // 左右侧
	 // 					left = Tools.getDateDiff(start, tbl_start);
	 // 					tbl_start = start;
	 // 					rgith = Tools.getDateDiff(tbl_end, end);
	 // 				} else if (start > tbl_end) { // 左侧在内部
	 // 					right = Tools.getDateDiff(tbl_end, end);
	 // 					tbl_end = end;
	 // 				} else if (start <= tbl_end) {  // 左侧在外部
	 // 					right = Tools.getDateDiff(start, end);
	 // 					tbl_end = end;
	 // 					tbl_start = start;							
	 // 				}
	 // 				break;
	 // 			default:
	 // 				return;
	 // 		}
	 // 	}

	 // 	if (left) {
	 // 		var str = [], tds = [];
	 // 		for (var i = 0, day; i < left; i ++) {
	 // 			day = addDay(tbl_start, i);
	 // 			str.push('<th class="'+ day + '">'+ day.split('-')[2] +'</th>');
	 // 			tds.push('<td></td>');
	 // 		}
	 // 		$(str.join('')).insertAfter($table.find('.name-header'));

	 // 		tds = tds.join('');
	 // 		$table.find('#arrange-list').children('tr').each(function() {
	 // 			$(tds).insertAfter($(this).find('.name'));
	 // 		})
	 // 	}

	 // 	if (right++) {
	 // 		var str = [], tds = [];
	 // 		for (var i = 1, day; i < right; i ++) {
	 // 			day = addDay(right_start, i);
	 // 			str.push('<th class="'+ day + '">'+ day.split('-')[2] +'</th>');
	 // 			tds.push('<td></td>');
	 // 		}
	 // 		$table.find('thead>tr').append(str.join(''));

	 // 		tds = tds.join('');
	 // 		$table.find('#arrange-list').children('tr').each(function() {
	 // 			$(this).append(tds);
	 // 		})
	 // 	}
	 // }

	 // function addLine(info) {
	 // 	var index = nameList.indexOf(info.name),
	 // 		start = info.startTime,
	 // 		end = info.endTime,
	 // 		days = Tools.getDateDiff(start, end) + 1;

	 // 	if (index >= 0) {
	 // 		var $tr = $table.find('#arrange-list').children('tr').eq(index), 
	 // 			$th = $table.find('thead').find('.' + start);

	 // 		if ($th.length) {
	 // 			var i = $th.index(), $tds = $tr.children('td'), 
	 // 				len = $tds.length -1,
	 // 				$td,
	 // 				left = $th.position().left;

	 // 			if (len < i) {
	 // 				i = len;
	 // 			}
	 // 			while(i >= 0) {
	 // 				$td = $tds.eq(i);
	 // 				if (left === $td.position().left) {
	 // 					break;
	 // 				}
	 // 				i --;
	 // 			}

	 // 			if (i >= 0) {
	 // 				// days ++;
	 // 				var $next = $td.next();
	 // 				$td[0].colSpan = days;
	 // 				$td.text(info.lineProduct).addClass('bg-blue');

	 // 				for (var i = 1, $next, $tmp; i < days && $next.length; i ++ ) {
	 // 					$tmp = $next;
	 // 					$next = $next.next();
	 // 					$tmp.remove();
	 // 				}
	 // 			}
	 // 		}
	 // 	} else {
	 // 		var str = [], len;

	 // 		// name
	 // 		str.push('<tr><td class="name">'+ info.name + '</td>');

	 // 		// start 
	 // 		len = Tools.getDateDiff(tbl_start, start);
	 // 		if (len) {
	 // 			str.push(new Array(len + 1).join('<td></td>'));
	 // 		}

	 // 		str.push('<td class="bg-blue" colspan="'+ days +'">'+ info.lineProduct +'</td>');

	 // 		// end
	 // 		len = Tools.getDateDiff(end, tbl_end);
	 // 		if (len) {
	 // 			str.push(new Array(len + 1).join('<td></td>'));
	 // 		}
	 // 		str.push('</tr>');

	 // 		nameList.push(info.name);
	 // 		$('#arrange-list').append(str.join(''));
	 // 	}
	 // }

	 /**
	  * 绑定下拉菜单
	  * @param  {object} $tab 顶层元素
	  * @return {[type]}      [description]
	  */
	 GuideArrange.initSelect = function($tab) {
	 	$tab.find('.T-guideName').autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).closest('div').find('input[name="guideId"]').val('');
				}
			},
			select:function(event,ui){
				$(this).blur();
				$(this).closest('div').find('input[name="guideId"]').val(ui.item.id);
			}
		}).off("click").on("click", function(){
			var obj = this;
			$.ajax({
				url:KingServices.build_url("guide","findAll"),
				type:'POST',
				data:{
					menuKey:"resource_guide"
				},
                showLoading:false,
                success: function(data) {
					var result = showDialog(data);
					if(result){
						var guideList = JSON.parse(data.guideList);
						if(guideList != null && guideList.length > 0){
							for(var i=0;i<guideList.length;i++){
								guideList[i].value = guideList[i].realname;
							}
						}
						$(obj).autocomplete('option','source', guideList);
						$(obj).autocomplete('search', '');
					}
                }
            });
		});
	 }
	 exports.init = GuideArrange.initMain;
});