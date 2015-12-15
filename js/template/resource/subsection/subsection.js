/**
 * 发团管理——中转分段模块
 *
 * 分段操作、撤销分段操作
 * 显示分段列表
 */
define(function(require, exports) {
	var menuKey = "resource_subsection",
	    listMainTemplate = require("./view/listMain"),
	    listTemplate = require("./view/list"),
	    rule = require("./rule"),
	    operationTemplate = require("./view/operation"),
	    tabId = "tab-"+menuKey+"-content",
		validator;
	/**
	 * 定义中转分段对象
	 * @type {Object}
	 */
	var subsection = {
		$tab: false,
		$tabSub: false,
		$searchArea: false
	};
	var autocompleteData = {};

	/**
	 * 初始化页面方法
	 * @type {[type]}
	 */
	subsection.initModule = function() {
		subsection.listMainSubsection();
	};

	subsection.listMainSubsection = function() {
		$.ajax({
			url: KingServices.build_url('innerTransferOperation', "getSearchCondition"),
			type: 'POST',
			success:function(data){
				var result = showDialog(data);
				if (result) {
					autocompleteData.creatorList = data.creatorList;
					autocompleteData.fromPartnerAgencyList = data.fromPartnerAgencyList;
					autocompleteData.lineProductList = data.lineProductList;

					var html = listMainTemplate(data);
					Tools.addTab(menuKey,"中转分段",html);

					subsection.$tab = $("#tab-resource_subsection-content");
					subsection.$searchArea = subsection.$tab.find(".T-subsectionSearchForm");
					subsection.initMain_event();
				}
			}
		})
	};

	subsection.initMain_event = function() {
		//时间控件
		subsection.datePicker("T-subsectionStartTime");
		//搜索按钮事件
		subsection.$searchArea.find('.T-btn-subsection-search').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			subsection.subsectionList(0);
		});
		//模糊查询
		subsection.getPartnerAgencyList();
		subsection.getLineProductList();
		subsection.getCreatorList();
		//初始化列表
		subsection.subsectionList(0);
	};

	/**
	 * 中转分段列表初始化
	 * @param  {[type]} page                [页数]
	 * @param  {[type]} lineProduct         [线路产品]
	 * @param  {[type]} lineProductId       [线路产品ID]
	 * @param  {[type]} fromPartnerAgency   [来源]
	 * @param  {[type]} fromPartnerAgencyId [来源ID]
	 * @param  {[type]} creator             [操作人]
	 * @param  {[type]} creatorId           [操作人ID]
	 * @param  {[type]} travelDate          [出游时间]
	 * @param  {[type]} operationStartDate  [操作日期-开始]
	 * @param  {[type]} operationEndDate    [操作日期-结束]
	 * @return {[type]}                     [description]
	 */
	subsection.subsectionList = function(page,lineProduct,lineProductId,fromPartnerAgency,fromPartnerAgencyId,creator,creatorId,travelDate,operationStartDate,operationEndDate) {
		if (subsection.$searchArea && arguments.length == 1) {
			lineProduct = subsection.$searchArea.find("input[name=lineProduct]").val();
			lineProductId = subsection.$searchArea.find("input[name=lineProductId]").val();
			fromPartnerAgency = subsection.$searchArea.find("input[name=fromPartnerAgency]").val();
			fromPartnerAgencyId = subsection.$searchArea.find("input[name=fromPartnerAgencyId]").val();
			creator = subsection.$searchArea.find("input[name=creator]").val();
			creatorId = subsection.$searchArea.find("input[name=creatorId]").val();
			travelDate = subsection.$searchArea.find("input[name=travelDate]").val();
			operationStartDate = subsection.$searchArea.find("input[name=operationStartDate]").val();
			operationEndDate = subsection.$searchArea.find("input[name=operationEndDate]").val();
		}
		// 修正页码
		page = page || 0;

		$.ajax({
			url: KingServices.build_url('innerTransferOperation', "listTransitSubTgroup"),
			type: 'POST',
			data: {
				pageNo: page,
				lineProduct: lineProduct,
				lineProductId: lineProductId,
				fromPartnerAgency: fromPartnerAgency,
				fromPartnerAgencyId: fromPartnerAgencyId,
				creator: creator,
				creatorId: creatorId,
				travelDate: travelDate,
				operationStartDate: operationStartDate,
				operationEndDate: operationEndDate
			},
			success: function(data){
				data.transitSubTgroupList = JSON.parse(data.transitSubTgroupList);
				var result = showDialog(data);
				if (result) {
					var html = listTemplate(data);
					html = filterUnAuth(html);
					subsection.$tab.find(".T-subsectionList").html(html);

					subsection.init_event();

					// 绑定翻页组件
					laypage({
					    cont: subsection.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		subsection.subsectionList(obj.curr -1);
					    	}
					    }
					});
				}
			}
		});

		//计算人数合计 和 现收款合计
		$.ajax({
			url: KingServices.build_url('innerTransferOperation', "getTransitSubCount"),
			type: 'POST',
			data: {
				lineProduct: lineProduct,
				lineProductId: lineProductId,
				fromPartnerAgency: fromPartnerAgency,
				fromPartnerAgencyId: fromPartnerAgencyId,
				creator: creator,
				creatorId: creatorId,
				travelDate: travelDate,
				operationStartDate: operationStartDate,
				operationEndDate: operationEndDate
			},
			success: function(data){
				subsection.$tab.find(".T-search-memberCount").text("人数合计："+data.adultCount+"大"+data.childCount+"小");
				subsection.$tab.find(".T-search-currentNeedPayMoney").text("现收款合计："+data.currentNeedPayMoney+"元");
			}
		})
	};
	/**
	 * 列表中事件绑定
	 * @return {[type]} [description]
	 */
	subsection.init_event = function() {
		function show(){
			subsection.$tab.find("button.show").unbind().click(function(){
				var $this = $(this),
					index = $this.attr("index"),
					parents = $this.closest("tbody");
				parents.find(".T-tr_"+index).css("display","table-row");
				$this.find("i").removeClass("fa-plus");
				$this.find("i").addClass("fa-minus");
				$this.addClass("hid");
				$this.removeClass("show");
				hid();
			})
		}
		function hid(){
			subsection.$tab.find("button.hid").unbind().click(function(){
				var $this = $(this),
					index = $this.attr("index"),
					parents = $this.closest("tbody");
				parents.find(".T-tr_"+index).css("display","none");
				$this.find("i").removeClass("fa-minus");
				$this.find("i").addClass("fa-plus");
				$this.addClass("show");
				$this.removeClass("hid");
				show();
			})
		}
		show();
		hid();

		//分段分段
		subsection.$tab.find(".T-btn-subsection").on('click', function() {
			var $this = $(this), $parents = $this.closest("tr");
			var id = $parents.data("entity-id")+"";
			subsection.subsection(id);
		});
		//撤销操作
		subsection.$tab.find(".T-btn-subsection-revoke").on('click', function() {
			var $this = $(this), $parents = $this.closest("tr");
			var id = $parents.data("entity-id")+"";
			subsection.subsectionRevoke(id);
		});
	};
	/**
	 * 分段操作
	 * @param  {[type]} id [id]
	 * @return {[type]}    [description]
	 */
	subsection.subsection = function(id) {
		$.ajax({
			url: KingServices.build_url('innerTransferOperation', "getTouristGroup"),
			type: "POST",
			data:{id: id},
			success:function(data){
				data.ptGroup = JSON.parse(data.ptGroup);
				data.subtGroupList = JSON.parse(data.subtGroupList);
				if(showDialog(data)){
					var html = operationTemplate(data);
					Tools.addTab(menuKey+"-operation","分段操作",html);

					subsection.$tabSub = $("#tab-resource_subsection-operation-content");
					subsection.init_section_event();
				}
			}
		})
	};

	/**
	 * 分段操作事件绑定
	 */
	subsection.init_section_event = function() {
		subsection.$tabSub.off('change').off(SWITCH_TAB_SAVE).off(CLOSE_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT)
		.on('change', function(event) {
			subsection.$tabSub.data('isEdited', true);
		})
		.on(SWITCH_TAB_SAVE, function(event, tab_id, tab_name, html) {  // 选择保存
			event.preventDefault();
			subsection.operationSave([tab_id, tab_name, html]);
		})
		.on(SWITCH_TAB_BIND_EVENT, function(event) {
			subsection.init_section_event();
		})
		.on(CLOSE_TAB_SAVE, function(event) {
			subsection.operationSave();
		})
		validator = rule.checkdSaveSubsection(subsection.$tabSub);

		subsection.datePicker("T-startTime");

		subsection.lineProductChoose();

		// 删除
		subsection.$tabSub.find(".T-btn-operation-delete").on("click",function(){
			var $this = $(this), $parents = $this.closest("tr"), id = $parents.data("entity-id");
			subsection.deleteOperation(id,$this);
			subsection.$tabSub.data('isEdited', true);
		});

		// 新增
		subsection.$tabSub.find(".T-btn-operation-add").click(function(){
			var $tbody = subsection.$tabSub.find('.T-subsectionOperationTbody'),
			     isHasTr = 0,
			     days = $tbody.find('tr:last-child').find('input[name=days]').val(),
			     startTimeS = $tbody.find('tr:last-child').find('input[name=startTime]').val();

			if ($tbody.find('tr').length > 0) {
				isHasTr = 1;
			}
			var radio = '<input type="radio" name="operateCurrentNeedPayMoney" />';
			if ($(this).data('mark') != 0) {
					radio = '-';
			}
			var html = ''
			+ '<tr data-entity-id="">'
			+ '<td><input type="hidden" name="lineProductId" value="" /><input class="T-chooseLineProduct col-sm-12" name="lineProduct" type="text" value="" /></td>'
			+ '<td><input type="text" name="customerType" class="col-sm-12" readonly="readonly" /></td>'
			+ '<td><input type="text" name="days" class="col-sm-10" readonly="readonly" /><span class="col-sm-2" style="line-height: 30px">天</span></td>'
			+ '<td><input class="datepicker T-startTime col-sm-12" name="startTime" type="text" value="" /></td>'
			+ '<td><input type="text" name="needPayAllMoney"></td>'
			+ '<td>' + radio + '</td>'
			+ '<td>-</td>'
			+ '<td><div class="hidden-sm hidden-xs btn-group"><a data-entity-id="" class=" T-btn-operation-delete cursor">删除</a></div></td>'
			+ '</tr>';
			$tbody.append(html);

            //获取新增tr后前一个TR
			var preDays = $tbody.find('tr:last-child').prev('tr').find('input[name=days]').val();

			// 判断是不是第一个tr
			 if(isHasTr == 0){
				startTime = subsection.$tabSub.find('.T-startTime').text();
				$tbody.find('tr:last-child').find('.T-startTime').val(startTime)
		     }else{
				if(preDays!=""){
					$tbody.find('tr:last-child').find('.T-startTime').val(subsection.startIntime(days,startTimeS));
				}
			}
			subsection.$tabSub.find(".T-btn-operation-delete").off("click").on("click",function(){
				var $this = $(this), $parents = $this.closest("tr"), id = $parents.data("entity-id");
				subsection.deleteOperation(id,$this);
			})
			subsection.datePicker("T-startTime");
			subsection.lineProductChoose();
			validator = rule.checkdSaveSubsection($tbody);
			$tbody.data('isEdited', true);
		});
		subsection.startIntime = function(whichDay,startTime){
			var	date = new Date(startTime.replace("-", "/").replace("-", "/"));
			var timer = date.getTime()+(whichDay)*24*60*60*1000;
			date.setTime(timer);
			var startIntime = date.getFullYear()+ "-"+ (date.getMonth() + 1) + "-"+ (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
			return startIntime;
			// $container.find('input[name=startTime]').val(subsection.startIntime("2","5012-55-08"))
		}


		// 取消
		subsection.$tabSub.find(".T-btn-operation-close").click(function(){
			Tools.closeTab(menuKey+"-operation");
		});

		// 保存
		subsection.$tabSub.find(".T-btn-operation-save").on("click", function(event) {
			subsection.operationSave();
		});
	};
	/**
	 * 删除分段
	 * @param  {[type]} id    [id]
	 * @param  {[type]} $this [对象]
	 * @return {[type]}       [description]
	 */
	subsection.deleteOperation = function(id,$this) {
		var $parents = $this.closest("tr");
		if (!!id) {
			showConfirmDialog($( "#confirm-dialog-message" ),"你确定要删除该分段？",function(){
				$(this).dialog( "close" );
				$parents.addClass("del");
				$parents.fadeOut(function(){
					$parents.hide();
				})
			})
			//deleteSubTGroup
		}else{
			$parents.fadeOut(function(){
				$parents.remove();
			})
		}
	};
	/**
	 * 保存分段操作
	 * @param  {[type]} e [description]
	 * @return {[type]}   [description]
	 */
	subsection.operationSave = function(tabArgs) {
		if(!validator.form()){return;}

		var $btn = subsection.$tabSub.find(".T-btn-operation-save"),
			days = $btn.data('days'),
			currentNeedPayMoney = $btn.data('currentNeedPayMoney'),
			isCheckNeedPayMoney = false,
			subTouristGroup = {
				id : getValue(subsection.$tabSub, "touristGroupId")+"",
				startTime : getValue(subsection.$tabSub, "touristGroupStartTime"),
				days : getValue(subsection.$tabSub, "touristGroupDays"),
				subTouristGroupList : [],
				delSubTouristGroupIdList : []
			}, 
			$tbody = subsection.$tabSub.find(".T-subsectionOperationTbody"),
			receivables = 0, tmp;

		// get table data
		$tbody.children('tr').each(function() {
			var $tr = $(this), id = $tr.data('entity-id');

			if ($tr.hasClass('del')) {
				subTouristGroup.delSubTouristGroupIdList.push({id: id});
			} else {
				tmp = 0;
				if ($tr.find("input[name=operateCurrentNeedPayMoney]").is(":checked")) {
					tmp = 1;
					isCheckNeedPayMoney = true;
				}

				subTouristGroup.subTouristGroupList.push(
					{
						id : id,
						lineProductId : getValue($tr,"lineProductId"),
						startTime : getValue($tr,"startTime"),
						operateCurrentNeedPayMoney : tmp,
						needPayAllMoney: getValue($tr,"needPayAllMoney"),
						days : getValue($tr,"days")
					}
				);

				receivables += getValue($tr,"needPayAllMoney")*1;
			}
		});

		if (subsection.$tabSub.find(".T-btn-operation-save").data("entity-mark")) {
			isCheckNeedPayMoney = 1;
		}
		if(isCheckNeedPayMoney == 0 && currentNeedPayMoney > 0){
			showMessageDialog($( "#confirm-dialog-message" ),"请选择在哪一分段现收团款");
			return;
		}

		if ($tbody.data('neepayallmoney') != receivables) {
			showMessageDialog($( "#confirm-dialog-message" ),"分段后的应收金额与总应收金额不相等", false, true);
			return;
		}

		subTouristGroup = JSON.stringify(subTouristGroup);

		$.ajax({
			url:KingServices.build_url('innerTransferOperation', "saveSubTgroup"),
			type:"POST",
			data:"subTouristGroup="+encodeURIComponent(subTouristGroup)+"",
			success:function(data){
				var result = showDialog(data);
				if(result){
					subsection.$tabSub.data('isEdited', false);
					showMessageDialog($( "#confirm-dialog-message" ), data.message,function(){
						if (!!tabArgs) {
							Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
							subsection.init_section_event();
							subsection.$tab.find('.T-btn-subsection-search').trigger('click');
						} else {
							Tools.closeTab(menuKey+"-operation");
							subsection.subsectionList(0);
						}
					});
				}
			}
		});

		function getValue(obj,name){
			var value = $(obj).find("[name="+name+"]").val();
			return value;
		}
	};
	/**
	 * 线路产品选择
	 * @param  {[type]}  [description]
	 */
	subsection.lineProductChoose = function() {
		var chooseLineProduct = subsection.$tabSub.find(".T-chooseLineProduct");
		chooseLineProduct.autocomplete({
			minLength:0,
			change :function(event,ui){
				if(ui.item == null){
					var $this = $(this),$parents = $this.closest('tr');
					$this.val("");
					$parents.find("input[name=lineProductId]").val("");
					$parents.find("input[name=days]").val("");
					$parents.find("input[name=customerType]").val("");
				}
			},
			select :function(event,ui){
				var $this = $(this),$parents = $this.closest('tr');
				$this.val(ui.item.name);
				$parents.find("input[name=lineProductId]").val(ui.item.id).trigger('change');
				if(ui.item.customerType == 0){
					$parents.find("input[name=customerType]").val("散客");
				}else{
					$parents.find("input[name=customerType]").val("团体");
				}
				$parents.find("input[name=days]").val(ui.item.days);
				var currentDays = ui.item.days;
				    currentTime = $parents.find('.T-startTime').val();
				if ($parents.next('tr').length > 0) {
					$parents.next('tr').find('.T-startTime').val(subsection.startIntime(currentDays,currentTime));
				};
				validator = rule.updateCheckdSaveSubsection(validator);

				var sum = 0;
				$parents.siblings('tr').each(function() {
					sum += ($(this).find('[name="needPayAllMoney"]').val() || 0)*1;
				})

				$parents.find('[name="needPayAllMoney"]')
						.prop('placeholder', '最多可输入：'+ (subsection.$tabSub.find(".T-subsectionOperationTbody").data('neepayallmoney')*1 - sum));
				return false;
			}
		}).unbind("click").click(function(){
			var obj =this;
			$.ajax({
				url:KingServices.build_url('innerTransferOperation', "getLineProductList"),
				type: 'POST',
                showLoading: false,
                success: function(data) {
					var result = showDialog(data);
					if(result){
						var lineProductList = data.lineProductList;
						if(lineProductList && lineProductList.length > 0){
							for(var i=0; i < lineProductList.length; i++){
								lineProductList[i].value = "("+lineProductList[i].days+"天)"+lineProductList[i].name;
							}
							$(obj).autocomplete('option','source', lineProductList);
							$(obj).autocomplete('search', '');
						}else{
							layer.tips('没有线路信息', obj, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
                }
			})
		})
	}
	/**
	 * 撤销分段操作
	 * @return {[type]} id [id]
	 */

     subsection.subsectionRevoke = function(id) {
		if(!!id){
			showConfirmDialog($( "#confirm-dialog-message" ),"你确定要撤销该分段？",function(){
					$.ajax({
							url: KingServices.build_url('innerTransferOperation', "revokeSubTouristGroup"),
							type:"POST",
							data:"id="+id+"",
						}).done(function(data){
							if (showDialog(data)) {
								subsection.listMainSubsection(0);
							}
						})	
						});
		}
	}

	//来源
	subsection.getPartnerAgencyList = function(){
		var getPartnerAgencyList = subsection.$tab.find(".T-choosePartnerAgency");
		getPartnerAgencyList.autocomplete({
			minLength: 0,
			change: function(event, ui) {
				if(ui.item == null){
					$(this).closest("div").find("input[name=fromPartnerAgencyId]").val("");
				}
			},
			select: function(event, ui) {
				$(this).blur();
				var obj = this;
				$(obj).closest("div").find("input[name=fromPartnerAgencyId]").val(ui.item.id).trigger('change');
			}
		}).click(function(){
		var obj = this;
		var fromGuideObj = autocompleteData.fromPartnerAgencyList;
		if(fromGuideObj !=null && fromGuideObj.length>0){
			for(var i=0;i<fromGuideObj.length;i++){
				fromGuideObj[i].value = fromGuideObj[i].travelAgencyName;
			}
		}
			$(obj).autocomplete('option','source',fromGuideObj);
			$(obj).autocomplete('search', '');
		});
	},

	//线路产品模糊查询
	subsection.getLineProductList = function(){
		var getPartnerAgencyList = subsection.$tab.find(".T-chooseLineProduct");
		getPartnerAgencyList.autocomplete({
			minLength: 0,
			change: function(event, ui) {
				if (ui.item == null)  {
					$(this).closest("div").find("input[name=lineProductId]").val("");
				}
			},
			select: function(event, ui) {
				$(this).blur();
				var obj = this;
				$(obj).closest("div").find("input[name=lineProductId]").val(ui.item.id).trigger('change');
			}
		}).click(function(){
		var obj = this;
		var lineProductObj = autocompleteData.lineProductList;
		if(lineProductObj !=null && lineProductObj.length>0){
			for(var i=0;i<lineProductObj.length;i++){
				lineProductObj[i].value = lineProductObj[i].name;
			}
		}
			$(obj).autocomplete('option','source',lineProductObj);
			$(obj).autocomplete('search', '');
		});
	},

    //操作人模糊查询
	subsection.getCreatorList = function(){
		var getCreatorList = subsection.$tab.find(".T-creatorUserChoose");
		getCreatorList.autocomplete({
			minLength: 0,
			change: function(event, ui) {
				if (ui.item == null)  {
					$(this).closest("div").find("input[name=creatorId]").val("");
				}
			},
			select: function(event, ui) {
				$(this).blur();
				var obj = this;
				$(obj).closest("div").find("input[name=creatorId]").val(ui.item.id).trigger('change');
			}
		}).click(function(){
			var obj = this;
			var creatorObj = autocompleteData.creatorList;
			if(creatorObj !=null && creatorObj.length>0){
				for(var i=0;i<creatorObj.length;i++){
					creatorObj[i].value = creatorObj[i].realName;
				}
			}
			$(obj).autocomplete('option','source',creatorObj);
			$(obj).autocomplete('search', '');
		});
	}

	//时间控件 datePicker
	subsection.datePicker = function(name){
		$("." + name).datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		})
	},
	exports.init = subsection.initModule;
})