/**
 * 景区资源管理
 * 添加、编辑、查看景区信息
 * 景区信息的列表显示
 */
define(function(require,exports){
	var menuKey="resource_scenic",
	    listTemplate = require("./view/list"),
	    rule = require('./scenicRule'),
	    addTemplate=require("./view/add"),
	    viewTemplate=require("./view/view"),
	    updateTemplate=require("./view/update"),
	    tabId = "tab-"+menuKey+"-content";


	/**
	 * 定义景区资源管理对象
	 * @type {Object}
	 */
	var ScenicResource={
		searchData:false,
		$searchArea:false,
		$tab:false
	};

	/**
	 * 景区页面初始化的方法
	 * @return {[type]} [description]
	 */
	ScenicResource.initModule=function(){
		ScenicResource.listScenic(0,"",1);
	};

	/**
	 * 景区页面列表
	 * @return {[type]} [description]
	 */
	ScenicResource.listScenic=function(page,name,status){
		//初始化页面后,获取页面参数
		if (ScenicResource.$searchArea && arguments.length===1) {
		    name=ScenicResource.$searchArea.find("input[name=scenic_name]").val();
			status=ScenicResource.$searchArea.find(".T-select-status").find('button').data('value');
		};

		// 修正页码
		page = page || 0;

		//请求列表
		$.ajax({
			url: ""+APP_ROOT+"back/scenic.do?method=listScenic&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
			type: 'POST',
			dataType: 'json',
			data: {
				    pageNo: page,
				    name: name,
				    status: status,
				    sortType: 'auto'
				 },
			success:function(data){
				var result=showDialog(data);
				if (result) {
					ScenicResource.searchData={
						pageNo:page
					};
				    //返回一个json字符串 的数据
					var scenicList = data.scenicList;
					//实例化对象
					scenicList = JSON.parse(scenicList);
					//讲字符串改为对象
					data.scenicList = scenicList;

					var html=listTemplate(data);
	                Tools.addTab(menuKey,"景区管理",html);
	                //初始化JQuery对象
	                ScenicResource.$tab = $('#'+tabId);
	                ScenicResource.$searchArea = ScenicResource.$tab.find('.T-search-area'); //搜索模块区域
	                //绑定页面事件
	                ScenicResource.init_event();
	                //绑定翻页组件
	                laypage({
	                	cont: ScenicResource.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		ScenicResource.listScenic(obj.curr -1);
					        }
					    }
	                });

				}
			}
		});
	};

	/**
	 * 绑定页面事件
	 * @return {[type]} [description]
	 */
	ScenicResource.init_event=function(){
		//添加景区
		ScenicResource.$tab.find('.T-scenic-add').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			ScenicResource.addScenic(0);
	    });	

		//报表内的操作
		ScenicResource.$tab.find('.T-scenic-list').on('click', '.T-action', function(event) {
			var $that = $(this), id = $that.closest('tr').data('id');
			if ($that.hasClass('T-scenic-view'))  {
				// 查看景区信息
				ScenicResource.viewScenic(id);
			} else if ($that.hasClass('T-scenic-edit'))  {
				// 编辑景区信息
				ScenicResource.updateScenic(id);
			} else if ($that.hasClass('T-scenic-delete'))  {
				// 删除景区
				ScenicResource.deleteScenic(id);
			}
		});	


		//条件搜索
		ScenicResource.$tab.find('.T-scenic-search').on('click',  function(event) {
			event.preventDefault();
			/* Act on the event */
			ScenicResource.listScenic(0);	
		});	

		//回车搜索
		ScenicResource.$tab.find('.T-scenic-name').keyup(function(e){
			if(e.which == 13 && !window.forbiddenError){
				ScenicResource.listScenic(0);
			}
		});

		//下拉搜索
		ScenicResource.$tab.find('.T-select-status').on('click', 'a', function(event) {
			event.preventDefault();
			/* Act on the event */
			var $that=$(this);
			$that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
			ScenicResource.listScenic(0);
		});


		Tools.descToolTip($(".T-ctrl-tip"));
	};

	//添加景区管理
	ScenicResource.addScenic=function(fn){
		var html = addTemplate(),
		    addScenicLayer = layer.open({
	 		type: 1,
		    title:"新增景区信息",
		    skin: 'layui-layer-rim', //加上边框
		    area: '1190px', //宽高
		    zIndex:1028,
		    content: html,
			scrollbar: false,    // 推荐禁用浏览器外部滚动条
		    success:function(){
		    		var $container=$(".T-addScenicContainer"),
		    		    $mainFormObj = $(".T-addScenicContainer .T-scenicMainForm"),
			    		$project = $(".T-addScenicContainer .T-scenicProjectForm");
			    	    validator = rule.check($container);
			    	var itemValidator;
			    	//初始化地区
		    	    KingServices.provinceCity($container);

		    	    //景区Input控件输入
	    	    	var $normalMPrice=$container.find('input[name=contractPrice]'),
					   	$normalInPrice=$container.find('input[name=normalInnerPrice]');
						Tools.inputCtrolFloat($normalMPrice);
						Tools.inputCtrolFloat($normalInPrice);
			    	//给项目列表新增按钮绑定事件
			    	var $scenicItemObj=$project.find(".T-scenicItemStandardList");
			    	$project.find(".T-scenic-standard-add").click(function(){
			    		var html = "<tr>" +
			    				"<td><input name=\"name\" class='col-sm-12' type=\"text\" maxlength=\"100\"/></td>" +
			    				"<td class=\"time\"><div class=\"clearfix\" style=\"margin-top:1px\">日常价格<label class=\"timeArea\" style=\"float:right;padding-top:3px;\"><button class=\"btn btn-success btn-sm btn-white T-add addScenice\"><i class=\"ace-icon fa fa-plus bigger-110 icon-only\"></i></button></label></div></td>" +
			    				"<td><div class=\"clearfix\" style=\"margin-top:0px\"><input name=\"normalInnerPrice\" style='margin-top: 2px' class='col-sm-12  F-float F-money ' type=\"text\" maxlength=\"7\"/></div></td>" +
			    				"<td><input name=\"remark\" class='col-sm-12' type=\"text\" maxlength=\"1000\"/></td>" +
			    				"<td style=\"width:70px\"><a data-entity-id=\"\" class=\"T-scenic-standard-delete\">删除</a></td>" +
			    				"</tr>";
			    		$scenicItemObj.find("tbody").append(html);

			    	   var $normalMPrice=$scenicItemObj.find('input[name=contractPrice]'),
					   	   $normalInPrice=$scenicItemObj.find('input[name=normalInnerPrice]');
						   Tools.inputCtrolFloat($normalMPrice);
						   Tools.inputCtrolFloat($normalInPrice);
						// 再调整对话框的高度
						$(window).trigger('resize');
			    		//对景区管理的项目列表校验
			    		itemValidator = rule.checkItems($project);
			    		//给对景区管理的项目列表绑定事件
			    		$scenicItemObj.find("tbody .T-scenic-standard-delete").click(function(){
				    		$(this).parent().parent().fadeOut(function(){
				    			$(this).remove();
				    		});
				    	});
				    	
				    	$scenicItemObj.find(".datepicker").datepicker({
							autoclose: true,
							todayHighlight: true,
							format: 'yyyy-mm-dd',
							language: 'zh-CN'
						});

						// button按钮动态添加时限区间 
				    	$scenicItemObj.find(".timeArea button.T-add").unbind().click(function(){
				    		var $that=$(this),$td=$that.closest('td'),
							    index =$td.find("div").length;
							var timeLimitDiv = "<div data-index=\""+(index)+"\" class=\"clearfix T-appendDiv div-"+(index)+"\" style=\"margin-top:1px\"><input name=\"startTime\" type=\"text\" class=\"datepicker\" style=\"width:100px;\"/><label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label class=\"timeArea\" style=\"float:right;padding-top:3px;\"><button class=\"btn btn-danger btn-sm btn-white T-del\" style='margin-top: -3px;'><i class=\"ace-icon fa fa-minus bigger-110 icon-only delSelf\"></i></button></label></div>";
							var contractPriceInput = "<div data-index=\""+(index)+"\" class=\"clearfix appendDiv div-"+(index)+"\" style=\"margin-top:6px\"><input name=\"contractPrice\" class='col-sm-12 F-float F-money' type=\"text\" maxlength=\"7\"/></div>";
							$td.next().append(contractPriceInput);
							$td.append(timeLimitDiv);
							itemValidator = rule.checkItems($project);
							$scenicItemObj.find(".datepicker").datepicker({
								autoclose: true,
								todayHighlight: true,
								format: 'yyyy-mm-dd',
								language: 'zh-CN'
							});
							$scenicItemObj.find(".timeArea button.T-del").click(function(){
								ScenicResource.deleteTimeArea($(this));
							});
						});
				    })

				//提交按钮绑定事件
				$project.find('.T-submit-scenic').click(function(event) {
					/* Act on the event */
					ScenicResource.addScenicSubmit($mainFormObj,$project,addScenicLayer,validator,itemValidator,fn);
				});
		    }
		})
	};

	//修改景区信息
	ScenicResource.updateScenic=function(id){
			$.ajax({
				url:""+APP_ROOT+"back/scenic.do?method=getScenicById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"id="+id+"",
				dataType:"json",
				success:function(data){
					var result=showDialog(data);
					if (result) {
						var scenicInfo = JSON.parse(data.scenic);
						data.scenic = scenicInfo;
						var html = updateTemplate(data);
						if(data.scenic.province != null )var provinceId =data.scenic.province.id;
					    if(data.scenic.city != null )var cityId = data.scenic.city.id;
					    if(data.scenic.district != null ) var districtId = data.scenic.district.id;

						updateScenicLayer=layer.open({
							type: 1,
						    title:"编辑景区信息",
						    skin: 'layui-layer-rim', //加上边框
						    area:'1190px', //宽高
						    zIndex:1028,
						    content: html,
							scrollbar: false,    // 推荐禁用浏览器外部滚动条
						    success:function(){
						    	var $container=$(".T-updateScenicContainer"),
					    		    $mainFormObj = $(".T-updateScenicContainer .T-scenicMainForm"),
			    		            $project = $(".T-updateScenicContainer .T-scenicProjectForm");
				    		 	var validator = rule.check($container);
						    	var itemsValidator;
						    	var $normalMPrice=$container.find('input[name=contractPrice]'),
								   	$normalInPrice=$container.find('input[name=normalInnerPrice]');
									Tools.inputCtrolFloat($normalMPrice);
									Tools.inputCtrolFloat($normalInPrice);

						    	//初始化地区
							    KingServices.provinceCity($container,provinceId,cityId,districtId);						    	
						    	var $scenicItemObj=$project.find(".T-scenicItemStandardList");
						    	//修改时修改原来的standard，
						    	$scenicItemObj.find(".timeArea button.T-add").click(function(){
						    		ScenicResource.modifyOriginalRecord($(this),$scenicItemObj);
						    		itemsValidator = rule.checkItems($scenicItemObj);
						    	});
						    	
						    	// 修改时删除原来的standard，
						    	$scenicItemObj.find(".timeArea button.T-del").click(function(){
						    		ScenicResource.deleteTimeArea($(this));
								});
						    	
						    	$scenicItemObj.find(".T-scenic-standard-delete").click(function(){
						    		var $tr = $(this).closest('tr'),
						    		    standardId = $tr.attr("data-entity-id");
						    		if(standardId != null && standardId != ""){
						    			$tr.addClass("deleted");
										$tr.fadeOut(function(){
											$(this).hide();
										});
						    		}
								});
						    	
						    	$scenicItemObj.find(".datepicker").datepicker({
									autoclose: true,
									todayHighlight: true,
									format: 'yyyy-mm-dd',
									language: 'zh-CN'
								});

						    	
						    	//给项目列表新增按钮绑定事件
						    	$project.find(".T-scenic-standard-add").click(function(){
						    		var html = "<tr>" +
						    				"<td><input name=\"name\" class='col-sm-12' type=\"text\" maxlength=\"100\"/></td>" +
						    				"<td class=\"time\"><div class=\"clearfix\" style=\"margin-top:1px\">日常价格<label class=\"timeArea\" style=\"float:right\"><button class=\"btn btn-success btn-sm btn-white T-add\"><i class=\"ace-icon fa fa-plus bigger-110 icon-only\"></i></button></label></div></td>" +
						    				"<td><div class=\"clearfix\" style=\"margin-top:2px\"><input name=\"normalInnerPrice\" class='col-sm-12 F-float F-money' type=\"text\" maxlength=\"7\"/></div></td>" +
						    				"<td><input name=\"remark\"  class='col-sm-12' type=\"text\" maxlength=\"1000\"/></td>" +
						    				"<td style=\"width:70px\"><a data-entity-id=\"\" class=\"T-scenic-standard-delete\">删除</a></td>" +
						    				"</tr>";
						    		$scenicItemObj.find("tbody").append(html);

						    		var $normalMPrice=$scenicItemObj.find('input[name=contractPrice]'),
									   	$normalInPrice=$scenicItemObj.find('input[name=normalInnerPrice]');
										Tools.inputCtrolFloat($normalMPrice);
										Tools.inputCtrolFloat($normalInPrice);
									// 再调整对话框的高度
									$(window).trigger('resize');
						    		//项目列表表单验证
						    	    itemsValidator = rule.checkItems($scenicItemObj);
							    	//删除按钮绑定事件
						    		$scenicItemObj.find("tbody .T-scenic-standard-delete").click(function(){
								    		var tr = $(this).parent().parent();
								    		var scenicStandardId = tr.data("entity-id");
								    		if (!(scenicStandardId != null && scenicStandardId != "")) {
									    		$(this).parent().parent().fadeOut(function(){
									    			$(this).remove();
									    		});
								    		}
								    });
								    	
						    		$scenicItemObj.find(".datepicker").datepicker({
											autoclose: true,
											todayHighlight: true,
											format: 'yyyy-mm-dd',
											language: 'zh-CN'
									});
								    	
								    // button按钮动态修改包车时限区间
						    		$scenicItemObj.find(".timeArea button.T-add").unbind().click(function(){
											ScenicResource.modifyOriginalRecord($(this),$scenicItemObj);
											itemsValidator = rule.checkItems($scenicItemObj);
									});
							    });		
						    	//给项目列表删除按钮绑定事件
						    	$scenicItemObj.find("tbody .T-scenic-standard-delete").click(function(){
						    		var tr = $(this).parent().parent();
						    		var scenicStandardId = tr.attr("data-entity-id");
						    		//console.debug(scenicStandardId);
						    		if (scenicStandardId != null && scenicStandardId != "") {
						    			tr.addClass("deleted");
						    			tr.fadeOut(function(){
							    			$(this).hide();
							    		});
						    		}
						    	});
						    	//编辑后的保存操作
						    	$project.find(".T-submit-updateScenic").click(function(){
						    		ScenicResource.updateSaveScenic($mainFormObj,$project,updateScenicLayer,$scenicItemObj,validator,itemsValidator);
						    	})
					
						    }
						});
					};
				}
			});

	};

	//提交新增景区信息
	ScenicResource.addScenicSubmit=function($mainFormObj,$project,addScenicLayer,validator,itemValidator,fn){
		//表单验证
		if(!validator.form()){return;}
		if(itemValidator !=undefined){
			if(!itemValidator.form()){return}
		}
		//是否启用
		var status = 0;
		if($mainFormObj.find(".T-scenic-status").is(":checked") == true){
			status = 1;
		}
		var form = $mainFormObj.eq(0).serialize()+"&status="+status+"",
			formData = $mainFormObj.eq(0).serializeJson();
		var scenicItemJsonAdd = [];
		var scenicItemJsonAddTr = $project.find(".T-scenicItemStandardList tbody tr");
		scenicItemJsonAddTr.each(function(i){
			var scenicItemJson = {
				name : scenicItemJsonAddTr.eq(i).find("input[name=name]").val(),
				normalInnerPrice : scenicItemJsonAddTr.eq(i).find("input[name=normalInnerPrice]").val(),
				remark : scenicItemJsonAddTr.eq(i).find("input[name=remark]").val(),
				priceJsonAddList : []
			};
			var priceJsonAddTr = scenicItemJsonAddTr.eq(i).find("td.time .T-appendDiv");
			priceJsonAddTr.each(function(j){
				var divIndex = priceJsonAddTr.eq(j).attr("data-index");
				var priceJson = {
					divIndex : divIndex,
					startTime : priceJsonAddTr.eq(j).find("input[name=startTime]").val(),
					endTime : priceJsonAddTr.eq(j).find("input[name=endTime]").val(),
					contractPrice : priceJsonAddTr.eq(j).parent().next().find(".div-" + divIndex + "").find("input[name=contractPrice]").val()
				};
				scenicItemJson.priceJsonAddList.push(priceJson);
			});
			scenicItemJsonAdd.push(scenicItemJson);
		});

	    scenicItemJsonAdd = JSON.stringify(scenicItemJsonAdd);
		//console.log(scenicItemJsonAdd);
		$.ajax({
			url:""+APP_ROOT+"back/scenic.do?method=addScenic&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
			type:"POST",
			data:form+"&scenicItemJsonAdd="+encodeURIComponent(scenicItemJsonAdd)+"",
			dataType:"json",
			beforeSend:function(){
				globalLoadingLayer = openLoadingLayer();
			},
			success:function(data){
				layer.close(globalLoadingLayer);
				var result = showDialog(data);
				if(result){
					layer.close(addScenicLayer);
					showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
						if (typeof fn === "function") {
							data.scenic = JSON.parse(data.scenic);
							formData.id = data.scenic.id;
							fn(formData);
						}else{
							ScenicResource.listScenic(0);
						}
					});
			    }
		    }
        });
	};


	//编辑后的保存操作
	ScenicResource.updateSaveScenic=function($mainFormObj,$project,updateScenicLayer,$scenicItemObj,validator,itemsValidator){
		if(!validator.form()){return}
		if(itemsValidator !=undefined){
			if(!itemsValidator.form()){return}
		}
				    		
			var status = 0;
			if($mainFormObj.find(".T-scenic-status").is(":checked") == true){
				status = 1;
			}		
			var form = $mainFormObj.eq(0).serialize()+"&status="+status+"";
			//console.log(form + "-------------------");
			var scenicItemJsonAdd = [];
			var scenicItemJsonAddTr = $scenicItemObj.find("tbody tr:not(.deleted)");
			scenicItemJsonAddTr.each(function(i){
				var scenicItemJson = {
					id : scenicItemJsonAddTr.eq(i).attr("data-entity-id"),
					normalInnerPrice : scenicItemJsonAddTr.eq(i).find("input[name=normalInnerPrice]").val(),
					name : scenicItemJsonAddTr.eq(i).find("input[name=name]").val(),
					remark : scenicItemJsonAddTr.eq(i).find("input[name=remark]").val(),
					priceJsonAddList : [],
					priceJsonDelList : []
				};
				//添加、修改
				var priceJsonTr = scenicItemJsonAddTr.eq(i).find("td.time .T-appendDiv");
				priceJsonTr.each(function(j){
					if($(this).hasClass('deleted')){
						var id = $(this).data("entity-id");
						var priceJsonDel = {
							id : id
						};
						if(id){
							scenicItemJson.priceJsonDelList.push(priceJsonDel);
						}
					} else{
						var divIndex = $(this).attr("data-index");
						var priceJsonAdd = {
							id : $(this).data("entity-id"),
							divIndex : divIndex,
							startTime : $(this).find("input[name=startTime]").val(),
							endTime : $(this).find("input[name=endTime]").val(),
							contractPrice : $(this).parent().next().find(".div-"+divIndex+"").find("input[name=contractPrice]").val()
						};
						scenicItemJson.priceJsonAddList.push(priceJsonAdd);
					}
				});
				scenicItemJsonAdd.push(scenicItemJson);
			});
			
			var scenicItemJsonDel = [];
			var scenicItemJsonDelTr =$scenicItemObj.find("tbody tr.deleted");
			scenicItemJsonDelTr.each(function(i){
				var id = scenicItemJsonDelTr.eq(i).attr("data-entity-id");
				var scenicItemJson = {
					id : id	
				};
				if(id){
					scenicItemJsonDel.push(scenicItemJson);
				}
			});
			scenicItemJsonAdd = JSON.stringify(scenicItemJsonAdd);
			//console.log(scenicItemJsonAdd);
			scenicItemJsonDel = JSON.stringify(scenicItemJsonDel);
			//console.log(scenicItemJsonDel);
			$.ajax({
				url:""+APP_ROOT+"back/scenic.do?method=updateScenic&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
				type:"POST",
				data:form+"&scenicItemJsonAdd="+encodeURIComponent(scenicItemJsonAdd)+"&scenicItemJsonDel="+encodeURIComponent(scenicItemJsonDel),
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					//console.log(data);
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						layer.close(updateScenicLayer);
						showMessageDialog($( "#confirm-dialog-message" ),data.message);
						ScenicResource.listScenic(0);
					}
				}
			});
	},

	//查看景区信息
	ScenicResource.viewScenic=function(id){
		$.ajax({
			url: ""+APP_ROOT+"back/scenic.do?method=getScenicById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
			type: 'POST',
			dataType: "json",
			data: "id="+id+"",
			success:function(data){
				//console.info(data);
				//对象实例化
				var scenic=JSON.parse(data.scenic);
				data.scenic=scenic;
				var html=viewTemplate(data);
				layer.open({
				    type: 1,
				    title:"查看景区公司",
				    skin: 'layui-layer-rim', //加上边框
				    area: '1024px', //宽高
				    zIndex:1028,
				    content: html,
					scrollbar: false   // 推荐禁用浏览器外部滚动条
				});

			}
		})
	};

	//删除景区信息
	
	ScenicResource.deleteScenic=function(id){
			if(!!id){
				showConfirmDialog($("#confirm-dialog-message"),"你确定要删除该条记录？",function(){
					$.ajax({
						url:""+APP_ROOT+"back/scenic.do?method=deleteScenic&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
						type:"POST",
	 					data:"id="+id+"",	
					}).done(function(data){
						if(showDialog(data)){
							ScenicResource.listScenic(0);
						}
					});
				});
			}

	}	

	//添加时间区间
	ScenicResource.modifyOriginalRecord=function(obj,$scenicItemObj){
    	var $td = obj.closest('td'), 
			index = $td.find("div").length,
			timeLimitDiv = "<div data-index=\""+(index+1)+"\" data-entity-id=\"\" class=\"clearfix T-appendDiv div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"startTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label class=\"timeArea\" style=\"float:right\"><button class=\"btn btn-danger btn-sm btn-white T-del\"><i class=\"ace-icon fa fa-minus bigger-110 icon-only\"></i></button></label></div>",
			contractPriceInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix div-"+(index+1)+"\" style=\"margin-top:7px\"><input name=\"contractPrice\" class='col-sm-12' type=\"text\" maxlength=\"7\"/></div>";
		$td.append(timeLimitDiv);
		$td.next().append(contractPriceInput);
		$scenicItemObj.find(".datepicker").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
		});
		$scenicItemObj.find(".timeArea button.T-del").click(function(){
			ScenicResource.deleteTimeArea($(this));
		});
	};
	ScenicResource.deleteTimeArea = function($obj){
		if (!$obj.data('deleted')) {
			$obj.data('deleted', true);
			var $div = $obj.closest('div'),
			    entityId = $div.attr("data-entity-id"),
			    divIndex = $div.attr("data-index"),
			    index = $obj.closest('td').find('div:not(.deleted)').index($div);
			$div.parent().next().children('div').eq(index).fadeOut(function(){
				$(this).remove();
			});
			if (entityId != null && entityId != "") {
				$div.addClass("deleted");
				$div.fadeOut(function(){
					$(this).hide();
				});
			}else{
				$div.fadeOut(function(){
					$(this).remove();
				});
			}
		}
	};
	exports.init=ScenicResource.initModule;
	exports.addScenic = ScenicResource.addScenic;

});
