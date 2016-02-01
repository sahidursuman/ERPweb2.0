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
	    lineproductSearchList = require("./view/lineproductSearchList"),
	    searchListTemplate = require("./view/searchList"),
	    tabId = "tab-"+menuKey+"-content",
		validator;
	/**
	 * 定义中转分段对象
	 * @type {Object}
	 */
	var subsection = {
		$tab: false,
		$tabSub: false,
		$searchArea: false,
		$tbody:false,
		searchTravelLinelayer:false
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
		//subsection.getLineProductList();
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
				subsection.$tab.find(".T-search-memberCount").html("人数合计：<span class='F-float F-count'>"+data.adultCount+"</span>大<span class='F-float F-count'>"+data.childCount+"</span>小");
				subsection.$tab.find(".T-search-currentNeedPayMoney").html("现收款合计：<span class='F-float F-money'>"+data.currentNeedPayMoney+"</span>元");
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
					subsection.$tbody = subsection.$tabSub.find('.T-subsectionOperationTbody');
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


		 //删除费用项
		subsection.$tbody.find('.T-del').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			var $this = $(this);
			subsection.delFeeItem($this);
		});

		subsection.$tbody.find('.T-calc').trigger('change',subsection.feeItemChange());
		subsection.$tabSub.find(".T-btn-operation-add").click(function(){
			//新增中转分段
		     subsection.addOperation($(this));
		});
        

		//新增费用项目
		subsection.$tabSub.find('.T-subsectionOperationTbody').find('.T-add').on('click', function(event) {
			event.preventDefault();
			var $that = $(this),$tbody =subsection.$tbody;
			/* Act on the event */
			subsection.addFeeItem($that, $tbody);
		});

		/**
		 * [addFeeItem 新增费用项目
		 * @param {[type]} $that  [description]
		 * @param {[type]} $tbody [description]
		 */
		subsection.addFeeItem = function($that, $tbody,nameText,countText,priceText,type){
		   var $td = $that.closest('td'),name = '',count = '',price = '',payMoney = '',
		       index  = $td.find('div').length;
		       name = '<div class="clearfix" style="margin-top:1px"><select data-index="'+ index +'" disabled="" name="type" class="T-type pull-left"><option value="1">大人结算价</option><option value="2">小孩结算价</option>'
					  +'<option value="4">车辆费用</option><option value="5">餐厅费用</option><option value="6">保险费用</option><option value="7">导服费</option><option value="8">酒店费用</option><option value="9">景区费用</option>'
                      +'<option value="10">自费费用</option><option value="11">票务费用</option><option value="12">其他费用</option></select><label style="float:right;padding-top:0px;"><button class="btn btn-success btn-sm btn-white T-del"><i class="ace-icon fa fa-minus bigger-110 icon-only"></i></button></label></div>',
               count = '<div class="clearfix" style="margin-top:6px"><input data-index="'+ index +'"  type="text" name="count" value="'+$.trim(countText)+'"  class="F-float F-count T-count T-calc T-count-' + index + '"></div>',
           	   price = '<div class="clearfix" style="margin-top:6px"><input data-index="'+ index +'"  type="text" name="price" value="'+$.trim(priceText)+'"  class="F-float F-money  T-price T-calc T-price-' + index + '"></div>';
		       if(!!type){
		       		name = '<div class="clearfix" style="margin-top:1px"><select data-index="'+ index +'" data-type="'+ type +'"  name="type" class="T-type pull-left" disabled><option value="'+ type +'">中转结算价</option></select><label style="float:right;padding-top:0px;" class=" T-label-' + index + '"><button class="btn btn-success btn-sm btn-white T-del" disabled="disabled"><i class="ace-icon fa fa-minus bigger-110 icon-only"></i></button></label></div>',
                    count = '<div class="clearfix" style="margin-top:6px"><input data-index="'+ index +'" data-type="'+ type +'"  type="text" name="count" value="'+$.trim(countText)+'" readonly class="F-float F-count T-count T-calc T-count-' + index + '"></div>',
           	        price = '<div class="clearfix" style="margin-top:6px"><input data-index="'+ index +'" data-type="'+ type +'"  type="text" name="price" value="'+$.trim(priceText)+'" readonly class="F-float F-money  T-price T-calc T-price-' + index + '"></div>';
		        }
               $td.append(name); 
    	       $td.next().append(count); 
    	       $td.next().next().append(price); 
    	    //删除时间区间
			$tbody.find(".T-del").off().click(function(){
				var $this = $(this);
				subsection.delFeeItem($this);
			});

			//初始化页面disabled--false
			$tbody.find('.T-type').prop('disabled',false);
		    $tbody.find('[data-type=3]').prop('disabled',true).css('backgroundColor','#EFEBEB');
		    

			$tbody.find('.T-type').on('change', function(event) {
				event.preventDefault();
				/* Act on the event */
				var $that = $(this);
				    $that.attr("disabled",true);$that.css('backgroundColor','#EFEBEB');
			});
		};

	    //若本段核算中转选中将重装费用项带到新增分段的费用项目中
	    subsection.checkedTransitFee(subsection.$tbody);



	    //搜索线路
	    subsection.$tabSub.find('.T-subsectionOperationTbody').on('click', '.T-option', function(event) {
	    	event.preventDefault();
	    	/* Act on the event */
	    	var $that=$(this),$parents = $that.closest("tr"), id = $parents.data("entity-id");
	    	if ($that.hasClass('T-searchLine')) {//搜搜线路
	    		subsection.getLayerProductList($parents);
	    	}else if($that.hasClass('T-btn-operation-delete')){//删除
				subsection.deleteOperation(id,$that);
				subsection.$tabSub.data('isEdited', true);
	    	};
	    });


		/**
		 * [startIntime 中转分段初日期
		 * @param  {[type]} whichDay  [description]
		 * @param  {[type]} startTime [description]
		 * @return {[type]}           [description]
		 */
		subsection.startIntime = function(whichDay,startTime){
			var	date = new Date(startTime.replace("-", "/").replace("-", "/"));
			var timer = date.getTime()+(whichDay)*24*60*60*1000;
			date.setTime(timer);
			var startIntime = date.getFullYear()+ "-"+ (date.getMonth() + 1) + "-"+ (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
			return startIntime;
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
	 * addOperation 新增中转费用线路
	 * @param {[type]} $tab [description]
	 */
	subsection.addOperation =function($this){
			var $tbody = subsection.$tabSub.find('.T-subsectionOperationTbody'),
			     isHasTr = 0,
			     days = $tbody.find('tr:last-child').find('input[name=days]').val(),
			     startTimeS = $tbody.find('tr:last-child').find('input[name=startTime]').val();

			if ($tbody.find('tr').length > 0) {
				isHasTr = 1;
			}
			var radio = '<input type="radio" name="operateCurrentNeedPayMoney" />';
			if ($this.data('mark') != 0) {
					radio = '-';
			}
			var html = ''
			+ '<tr data-entity-id="">'
			+ '<td><div class="hct-input-group col-xs-12 T-search-line"><input type="text" name="lineProductName" readonly="" class="bind-change col-xs-12" value=""><span class="hct-group-search T-searchLine T-option cursor">[搜索]</span><input type="hidden" name="lineProductId" value=""></div></td>'
			+ '<td><input type="text" name="customerType" class="col-sm-12" readonly="readonly" /></td>'
			+ '<td><input type="text" name="days" class="col-sm-10 F-float F-count" readonly="readonly" /><span class="col-sm-2" style="line-height: 30px">天</span></td>'
			+ '<td><input class="datepicker T-startTime col-sm-12" name="startTime" type="text" value="" /></td>'
			+ '<td><div class="clearfix" style="margin-top:1px"><select data-index="0" name="type" class="T-type pull-left"><option value="1">大人结算价</option><option value="2">小孩结算价</option>'
            +'<option value="4">车辆费用</option><option value="5">餐厅费用</option><option value="6">保险费用</option><option value="7">导服费</option><option value="8">酒店费用</option><option value="9">景区费用</option>'
            +'<option value="10">自费费用</option><option value="11">票务费用</option><option value="12">其他费用</option></select><label style="float:right;padding-top:0px;"><button class="btn btn-success btn-sm btn-white T-add"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button></label></div></td>'
			+ '<td><div class="clearfix" style="margin-top:6px"><input data-index="0" type="text" name="count" class="F-float F-money T-count T-count-0 T-calc"></div></td>'
			+ '<td><div class="clearfix" style="margin-top:6px"><input data-index="0" type="text" name="price" class="F-float F-money T-price T-price-0 T-calc"></div></td>'
			+ '<td><div class="clearfix" style="margin-top:6px"><input type="text" name="needPayAllMoney" class="F-float F-money T-payedMoney T-calc " readonly></div></td>'
			+ '<td>' + radio + '</td>'
			+ '<td><input type="radio" name="operateCalculteOut" class="T-operateCalculteOut" /></td>'
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
			/*subsection.lineProductChoose();*/
			validator = rule.checkdSaveSubsection($tbody);

			$tbody.find('.T-type').on('change', function(event) {
				event.preventDefault();
				/* Act on the event */
				var $that = $(this);
				    $that.attr("disabled",true);$that.css('backgroundColor','#EFEBEB');
		    });

			$tbody.data('isEdited', true);
	};

	/**
	 * delFeeItem 删除中转费用项目
	 * @param  {[type]} $this 当前对象
	 * @return {[type]}      [description]
	 */
	subsection.delFeeItem = function($this){
			if (!$this.data('deleted')) {
				$this.data('deleted', true);
				var $div = $this.closest('div'),
					divIndex = $div.index(),
					index = $div.length,
					entityId = $this.closest('div').find('.T-type').data("id");
				$div.closest('tr').find('div:not(.delete)').find('.T-count').eq(divIndex).fadeOut(function(){
					$(this).closest('div').remove();
				});
				$div.closest('tr').find('div:not(.delete)').find('.T-price').eq(divIndex).fadeOut(function(){
					$(this).closest('div').remove();
				});

				//及时删除
				if (entityId != null && entityId != "") {
					showNndoConfirmDialog($("#confirm-dialog-message"),"你确定要删除费用项吗？",function(){
						$.ajax({
								url:KingServices.build_url("innerTransferOperation","deleteTouristGroupFee"),
		 						type:"POST",
			 					data:"id="+entityId + "",
						})
						.done(function(data) {
							if(showDialog(data)){
								showMessageDialog($( "#confirm-dialog-message" ), data.message, function() {
									$div.fadeOut(function(){
										$(this).remove();
									});
								})	
							}
						})
				});
				}else{
					$div.fadeOut(function(){
						var payMoney = subsection.totalPayMoney($this.closest('tr'),index);
						$div.closest('tr').find('.T-payedMoney').val(payMoney);
						$(this).remove();
					});
				}
			}
	};



	/**
	 * [checkedTransitFee 将中转结算接待到费用项目中
	 * @param  {[type]} $tbody [description]
	 * @return {[type]}        [description]
	 */
	subsection.checkedTransitFee = function($tbody){
		 $tbody.on('change', '.T-operateCalculteOut', function(event) {
	    	event.preventDefault();

	    	var $FeeItems = subsection.$tabSub.find('.T-innerOutEditFeeTbody').find('[data-type=3]'),  // 中转费用的tr
	    		$fistItem = $(this).closest('tr').find('.T-type').first(),			// 分段费用项的第一个费用名称
	    		$FeeSubItems = subsection.$tabSub.find('.T-subsectionOperationTbody').find('[data-type="3"]'),  // 分段中的中转费用项的input
	    		FeeSubItemLength = $FeeSubItems.length,  // 中转费用项input的数量
	    		sum = 0; 								 // 金额统计

	    	if ($FeeItems.length) {					// 存在中转费用项时
				$FeeItems.each(function() {
					var $tr = $(this);
					if (!FeeSubItemLength) {		// 没有添加过中转费用时
	    		     	subsection.addFeeItem($fistItem,subsection.$tbody,
	    		     							$tr.find('.T-name').text(), 
	    		     							$tr.find('.T-count').text(), 
	    		     							$tr.find('.T-price').text(), 3);						
					}
					// 统计费用
    		     	sum += $tr.find('.T-price').next().text()*1;
				});	 

				if (FeeSubItemLength)  {		// 处理中转费用的转移效果
					var $money = $FeeSubItems.closest('tr').find('.T-payedMoney'),
						money = ($money.val() || 0) * 1,
						$tr = $(this).closest('tr'), 
						$typeTd = $tr.find('.T-type').closest('td'),
						$countTd = $typeTd.next(),
						$priceTd = $countTd.next();
					// 移走前先计算	
					$money.val(money - sum);
					// 移走中转费用项
					$typeTd.append($FeeSubItems.filter('.T-type').closest('div'));
					$countTd.append($FeeSubItems.filter('.T-count').closest('div'));
					$priceTd.append($FeeSubItems.filter('.T-price').closest('div'));
				}	

				var $money = $(this).closest('tr').find('.T-payedMoney'),
					money = ($money.val() || 0) * 1;
				$money.val(money + sum);
	    	}
	    	
	    });

	};





    /**
     * 费用项目监听change
     * @return {[type]} [description]
     */
	subsection.feeItemChange = function(){
		subsection.$tbody.on('change', '.T-calc', function(event) {
            /* Act on the event */
           var $that=$(this),divIndex = $that.closest('td').children('div').length, $tr = $that.closest('tr');
	            if ($that.hasClass('T-count')) {  //若数量改变
	                var payMoney = subsection.totalPayMoney($tr,divIndex);
	                 console.log('count....');
	                $tr.find('.T-payedMoney').eq(0).val(payMoney);
	            }else if($that.hasClass('T-price')){ //若价格改变
	                var payMoney = subsection.totalPayMoney($tr,divIndex);
	                console.log('price....');
	                $tr.find('.T-payedMoney').eq(0).val(payMoney);
	        };
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
				$parents.addClass("del");
				$parents.fadeOut(function(){
					$parents.hide();
				})
				$(this).dialog( "close" );
			})
			//deleteSubTGroup
		}else{
			$parents.fadeOut(function(){
				$parents.remove();
			})
		}
	};


	/**
     * [totalPayMoney 金额的计算
     * @param  {[type]} $tr  当前改变Tr
     * @param  {[type]} tdIndex 当前修改后的index
     * @return {[type]} 
     */
    subsection.totalPayMoney =function($tr,tdIndex){
    	var totalPayMoney = 0;
	    	$tr.each(function() {
	    		var $_that = $(this),$countTr = $_that.find('.T-count'),payMoney=0;
	    		$countTr.each(function(index) {
	    			if(index <= tdIndex ){
	    				var count = $(this).closest('tr').find(".T-count-" + index).val(),
					        price = $(this).closest('tr').find(".T-price-" + index).val();
					    totalPayMoney +=count*price;
	    			}
				    
			    });
	    	});
    	return totalPayMoney;
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
				delSubTouristGroupIdList : [],
				touristGroupSubFeeList : []
			},
			$tbody = subsection.$tabSub.find(".T-subsectionOperationTbody"),
			receivables = 0, tmp;

		// get table data
		$tbody.children('tr').each(function() {
			var $tr = $(this), id = $tr.data('entity-id'),$feeItemTr = $tr.find('.T-type');

			if ($tr.hasClass('del')) {
				subTouristGroup.delSubTouristGroupIdList.push({id: id});
			} else {
				tmp = 0;
				if ($tr.find("input[name=operateCurrentNeedPayMoney]").is(":checked")) {
					tmp = 1;
					isCheckNeedPayMoney = true;
				}
				var subTouristGroupJson = {
					id : id,
					lineProductId : getValue($tr,"lineProductId"),
					startTime : getValue($tr,"startTime"),
					operateCurrentNeedPayMoney : tmp,
					operateCalculteOut : $tr.find("input[name=operateCalculteOut]").is(":checked") ? 1 : 0 ,
					needPayAllMoney: getValue($tr,"needPayAllMoney"),
					days : getValue($tr,"days"),
					touristGroupSubFeeList : []
				}

				//费用项目$feeItemTr
				$feeItemTr.each(function() {
						var $that = $(this),divIndex = $(this).data('index');
						var touristGroupFeeJson = {
							id : $(this).data("id") || '',
							type :   $(this).val(),     
							count : $(this).closest('tr').find(".T-count-" + divIndex).val(),
						    price : $(this).closest('tr').find(".T-price-" + divIndex).val()
						};
					subTouristGroupJson.touristGroupSubFeeList.push(touristGroupFeeJson);
				});

				subTouristGroup.subTouristGroupList.push(subTouristGroupJson);
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
			url:KingServices.build_url('innerTransferOperation', "saveSubTouristGroup"),
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

	//初始化线路Layer层
	subsection.getLayerProductList = function($that){
		var html=searchListTemplate({});  
		subsection.searchTravelLinelayer = layer.open({
			type: 1,
			title: '请选择线路产品',
			skin: 'layui-layer-rim', //加上边框
			area: '85%', //宽高
			zIndex:1029,
			content: html,
			scrollbar: false,
		});
		var $dialog = $('.T-subsection-lineproduct-search');
		//初始化线路产品数据
		subsection.getLineProductList($that,$dialog, 0, '');
	};

	/**
	 * 获取线路产品数据，并填入选择线路产品的对话框
	 * @param  {object} $dialog dialog的Jquery对象
	 * @param  {int} type    0：新增 1：更新
	 * @param  {int} page    页码
	 * @param  {string} name    搜索关键字
	 * @return {[type]}         [description]
	 */
	subsection.getLineProductList = function($that, $dialog, page, name) {
		page = page || 0;
		$.ajax({
			url:KingServices.build_url('innerTransferOperation', "getLineProductList"),
			type: 'POST',
            showLoading: false,
			data: "name=" + name + "&pageNo=" + page
		})
		.done(function(data) {
			if (showDialog(data)) {
				data.lineProductList = data.lineProductList;
				var listHtml = lineproductSearchList(data);
				$tbody=$dialog.find('.T-normal-list');
				$tbody.html(listHtml);
				$tbody.closest('.tab-pane').find('.T-total').text(data.totalCount);

				//线路产品搜索
				$dialog.find('.T-btn-search').off().on('click', function(event) {
					/* Act on the event */
					var $that=$(this),$searchLine=$that.closest('.form-inline');
					var name=$searchLine.find('.T-name').val();
					subsection.getLineProductList($dialog, 0, name);
				});

				//提交选中线路
				$dialog.find('.T-btn-submit').on('click', function(event) {
					/* Act on the event */
					var $lineProTr=$dialog.find('.T-normal-list').children('tr'),lineProductJson={};
					$lineProTr.each(function(index) {
						if ($lineProTr.eq(index).find('.T-choice-ProLine').is(':checked')) {
							lineProductJson = {
								lineProductId : $lineProTr.eq(index).data('id'),
							　　name : $lineProTr.eq(index).data('name'),
							    customerType : $lineProTr.eq(index).attr('data-customerType'),
							    days : $lineProTr.eq(index).data('days')
							};
						};
					});
					//若没有选中线路
					if (!lineProductJson.lineProductId) {
						showMessageDialog($( "#confirm-dialog-message" ),"请选择选择线路产品");
			            return;
					}else{
						layer.close(subsection.searchTravelLinelayer);
						$that.find('input[name=lineProductName]').val(lineProductJson.name);
						$that.find('input[name=lineProductId]').val(lineProductJson.lineProductId);
						$that.find('input[name=customerType]').val(lineProductJson.customerType);
						$that.find('input[name=days]').val(lineProductJson.days);
						
					};
				});

				// 绑定翻页组件
				laypage({
				    cont: $tbody.closest('.tab-pane').find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
				    pages: data.totalPage, //总页数
				    curr: (data.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
							subsection.getLineProductList($that, $dialog, obj.curr -1, name);
				    	}
				    }
				});	
				// 让对话框居中
				$(window).trigger('resize');
			}
		});			
	};

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