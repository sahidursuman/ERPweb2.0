/**
 * 资源——酒店管理模块
 *
 * 添加、编辑、查看、删除酒店信息
 * 显示导游列表
 */
define(function(require, exports) {
	var menuKey = "resource_hotel",
	 	rule = require("./hotelRule"),
		listTemplate = require("./view/list"),
		addTemplate = require("./view/add"),
		updateTemplate = require("./view/update"),
		viewTemplate = require("./view/view"),
		authenticationTemplate = require('./view/accreditation'),
		auditTemplate = require('./view/audit'),
		editAuditTemplate = require('./view/editAudit');
	
	var hotel = {
		$tab : false,
		$searchArea : false,
		$addLayer : "",
		$updateLayer : "",
		imgCount: 0,
	};
	var ruleData = {};
	hotel.initModule = function(){
		hotel.listHotel(0,"",1);
	};

	hotel.listHotel = function(page,name,status){
		if (hotel.$searchArea && arguments.length === 1) {
			// 初始化页面后，可以获取页面的参数
			name = hotel.$searchArea.find("input[name=hotel_name]").val(),
			status = hotel.$searchArea.find('.T-select-status').find("button").data('value')
		}
		$.ajax({
			url:hotel.url("listHotel","view"),
			type:"POST",
			data:{
				pageNo : page,
				name : name,
				status : status,
				sortType : "auto"
			},
			success:function(data){
				data.hotelList = JSON.parse(data.hotelList);
				//data.searchParam.name = decodeURI(data.searchParam.name);
				var result = showDialog(data);
				if(result){
					var html = listTemplate(data);
					Tools.addTab(menuKey,"酒店管理",html);

					hotel.$tab = $("#tab-resource_hotel-content");
					hotel.$searchArea = hotel.$tab.find(".T-search-area");
					hotel.init_event();

					// 绑定翻页组件
					laypage({
					    cont: hotel.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		hotel.listHotel(obj.curr -1);
					    	}
					    }
					});
				}
			}
		})
	};
	hotel.init_event = function(){
		//搜索栏状态button下拉事件
		hotel.$tab.find('.T-select-status').on('click', 'a', function(event) {
			event.preventDefault();
			var $this = $(this);
			// 设置选择状态的效果
			$this.closest('ul').prev().data('value', $this.data('value')).children('span').text($this.text());
			hotel.listHotel(0);
		});
		//搜索栏焦点回车事件
		hotel.$tab.find("input[name=hotel_name]").keyup(function(event){
			if(event.which == 13 && !window.forbiddenError){
				hotel.listHotel(0);
			}
		});
		//搜索按钮事件绑定
		hotel.$tab.find(".T-btn-hotel-search").on("click",function(){
			hotel.listHotel(0);
		});
		//新增酒店事件绑定
		hotel.$searchArea.find(".T-btn-hotel-add").on("click",function(event){
			event.preventDefault();
			hotel.addHotel();
		});
		// 报表内的操作
		hotel.$tab.find('.T-hotelList').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $this = $(this), $tr = $this.closest('tr'),id = $tr.data('entity-id'),
				name = $tr.data('hotel'),isAuth = $tr.data('isauth');
			if ($this.hasClass('T-view')){
				// 查看酒店信息
				hotel.viewHotel(id);
			} else if ($this.hasClass('T-edit')){
				// 编辑酒店信息
				hotel.updateHotel(id);
			} else if ($this.hasClass('T-delete')){
				var $this = $(this);
				// 删除酒店
				hotel.deleteHotel(id,$this);
			} else if ($this.hasClass('T-authentication')){
				//认证酒店
				if(isAuth == 0) {
					hotel.authenticationHotel($this,id,name);
				} else {
					hotel.getHotel(id, name, isAuth);
				}
				
			}
		});
	};
	hotel.viewHotel = function(id){
		$.ajax({
			url : hotel.url("getHotelById","view"),
			type : "POST",
			data : "id="+id+"",
			success : function(data){
				var result = showDialog(data);
				if(result){
					data.hotel =data.hotel;
					var html = viewTemplate(data);
					var updateHotel = layer.open({
					    type: 1,
					    title:"查看酒店信息",
					    skin: 'layui-layer-rim', //加上边框
					    area: '1190px', //宽高
					    zIndex:1028,
					    content: html,
						scrollbar: false,    // 推荐禁用浏览器外部滚动条
					    success:function(){
					    }
				    });
				}
			}
		});
	};
	hotel.updateHotel = function(id){
		$.ajax({
			url:hotel.url("getHotelById","view"),
			type:"POST",
			data:"id="+id+"",
			success:function(data){
				var result = showDialog(data);
				if(result){
					data.hotel = data.hotel;
					if(data.hotel.province != null )var provinceId = data.hotel.province.id;
					if(data.hotel.city != null )var cityId = data.hotel.city.id;
					if(data.hotel.district != null ) var districtId = data.hotel.district.id;
					var	html = updateTemplate(data);
					hotel.$updateLayer = layer.open({
					    type: 1,
					    title:"编辑酒店信息",
					    skin: 'layui-layer-rim', //加上边框
					    area:'1190px', //宽高
					    zIndex:1028,
					    content: html,
						scrollbar: false,    // 推荐禁用浏览器外部滚动条
					    success:function(data){
					    	$container = $(".updateHotelContainer"),$tbody = $container.find(".T-roomListTbody");
					    	ruleData.Uvalidator = rule.check($container);
					    	ruleData.UhotelRoomStandardList = rule.checkRoom($tbody);
							ruleData.UtimeAreavalidator = rule.checkTimeArea($tbody);
							/**/
							//初始化地区
							KingServices.provinceCity($container,provinceId,cityId,districtId);
							//新增房间列表
							$container.find(".T-btn-hotel-standard-add").click(function(){
								hotel.addRoomList($container);
							});
							//时间控件
							hotel.datepicker($tbody);
							var $normalMPrice=$tbody.find('input[name=normalMarketPrice]'),
						   		$normalInPrice=$tbody.find('input[name=normalInnerPrice]');
								Tools.inputCtrolFloat($normalMPrice);
								Tools.inputCtrolFloat($normalInPrice);

							//提交事件绑定
							$container.find(".T-btn-submit-hotel").on("click",function(){
								hotel.saveHotel($container);
							});
							//删除房间列表
							$tbody.find(".T-btn-hotel-standard-delete").on("click",function(){
								var $this = $(this);
									id = $this.closest('tr').data("entity-id");
								hotel.delRoomList(id,$this);
								ruleData.UroomTd = $tbody.find('tr');
							});
							//新增时间区间
							$tbody.find(".T-add").off("click").on("click",function(){
								var $this = $(this);
								hotel.addTimeArea($this,$tbody);
								ruleData.UtimeAreavalidator = rule.checkTimeArea($tbody);
							})
							
							//获取酒店最低价
							$tbody.find('.T-minPrice').on('change',function(event) {
								event.preventDefault();
								/* Act on the event */
								var minHotelPrice = hotel.minHotelPrice($container);
								$container.find('.T-lowestPrice').val(minHotelPrice);
							});
                           
                            //获取酒店最低价
							$tbody.find('.T-minPrice').trigger('change');
							$tbody.find('[name="normalMarketPrice"]').trigger('change');

							//删除时间区间
							$tbody.find(".T-del").on("click",function(){
								var $this = $(this);
								hotel.delTimeArea($this);
								ruleData.UtimeAreatd = $tbody.find('tr');
							});
					    	//提交事件绑定
					    	$container.find(".T-btn-submit-hotel").off("click").on("click",function(){
					    		hotel.saveHotel($container,2);
					    	});
					    }
					})
				}
			}
		})
	};
    //删除酒店消息 
	hotel.deleteHotel = function(id,$this){
		if (!!id) {
			showConfirmDialog("你确定要删除该酒店？", function() {
				$.ajax({
					url:hotel.url("deleteHotel","delete"),
					type: 'post',
					data: {id: id},
				})
				.done(function(data) {
					if (showDialog(data)) {
						hotel.listHotel(0);
					}
				});
			})
		}
	}

	//请求数据 
	hotel.getHotel = function(id, name, isAuth) {
		$.ajax({
			url: hotel.url('findCertification','view'),
			type: 'POST',
			data: {
				id: id
			}
		}).done(function(data) {
			if(showDialog(data)){
				
				if (data.hotelAudit == "null"){
					showMessageDialog('数据异常');
				} else {
					var imgUrl = data.ERP_IMG_URL,html = '';
					data.hotelAudit = JSON.parse(data.hotelAudit);
					//图片路径设置
					var businessLicensePic = data.hotelAudit.businessLicensePic,
						taxesCardPic = data.hotelAudit.taxesCardPic;
					if(businessLicensePic != null && businessLicensePic != "") {
						data.hotelAudit.businessLicensePic = imgUrl + businessLicensePic;
					};
					if(taxesCardPic != null && taxesCardPic != "") {
						data.hotelAudit.taxesCardPic = imgUrl + taxesCardPic;
					};
					data.hotelId = id;
					data.businessLicensePic = businessLicensePic;
					data.taxesCardPic = taxesCardPic;
					if(isAuth == 1 || isAuth == 2){
						html = auditTemplate(data);
					} else {
						html = editAuditTemplate(data);
					}
					
					hotel.$auditLayer = layer.open({
						type: 1,
						title: '酒店认证',
						skin: 'layui-layer-rim',
						area: '650px',
						zIndex: 1028,
						content: html,
						scrollbar: false,
						success: function(layObj,index) {

							var $layObj = $(layObj);
							if(isAuth == 3) {
								hotel.initialization($layObj,data,isAuth);
							} else {

								//倒计时特效
								var time = 10,$timeNum = $layObj.find('.T-timeNum'),timeShow = setInterval(timeOut,1000);
								 	
						        function timeOut() {
						        	time--;
						        	$timeNum.text(time);
						        	if(time == 0){
						        		clearInterval(timeShow);
						        		layer.close(hotel.$auditLayer);
						        	}
						        }

								$layObj.find('.btn-view').off('click').on('click',function(){

									//查看图片
									var url = $(this).attr('url'),WEB_IMG_URL_BIG = url+imgUrl;
									$layObj.viewer({
							            url: WEB_IMG_URL_BIG,
							        });


								});
							}
							
						}
					});
				}
				

			}
		});
	};

	//认证酒店
	hotel.authenticationHotel = function($obj,id,name) {

		var $tr = $obj.closest('tr'),street = $tr.data('street'),level = $tr.data('level'),
			provinceId = $tr.find('input[name="provinceId"]').val(),
			cityId = $tr.find('input[name="cityId"]').val(),
			districtId = $tr.find('input[name="districtId"]').val(),
			data = {};
			data.hotelId = id;
			data.hotelName = name;
			data.street = street;
			data.level = level;
			data.provinceId = provinceId;
			data.cityId = cityId;
			data.districtId = districtId;
		var html = authenticationTemplate(data);
		hotel.$authenticationLayer = layer.open({
			type: 1,
			title: '酒店认证',
			skin: 'layui-layer-rim',
			area: '650px',
			zIndex: 1028,
			content: html,
			scrollbar: false,
			success: function(layObj,index){
				//初始化图片上传事件
				var $layObj = $(layObj);
				hotel.initialization($layObj);
			}

		});
	}


	//事件初始化
	hotel.initialization = function($obj,data,isAuth) {
		console.log(hotel.imgCount);
		//表单验证
		var auditValidator = rule.checkHotelAudit($obj),provinceId = 0,cityId = 0,districtId = 0;

		//省市区事件
		if(!!data) {
			if(data.hotelAudit.province != null ) provinceId = data.hotelAudit.province.id;
			if(data.hotelAudit.city != null ) cityId = data.hotelAudit.city.id;
			if(data.hotelAudit.district != null ) districtId = data.hotelAudit.district.id;
		} else {
			if(!!$obj.find('input[name=province]').val()){provinceId = $obj.find('input[name=province]').val();}
			if(!!$obj.find('input[name=city]').val()){cityId = $obj.find('input[name=city]').val();}
			if(!!$obj.find('input[name=district]').val()){districtId = $obj.find('input[name=district]').val();}
		};
		
		KingServices.provinceCity($obj,provinceId,cityId,districtId);

		//图片初始化
		$obj.find('.T-upimg').ace_file_input({
			style:'well',
			btn_choose:'选择图片',
			btn_change:null,
			droppable:true,
			thumbnail:'large'
		}).on("change",function(){
			var $div = $(this).closest('div');
			if(!$div.data("needSubmit")){
				$div.data("needSubmit",true);
			}
			if($div.find(".T-original").length) {
				$div.find(".T-original").addClass('hidden');
			}
			hotel.imgCount += 1;
		});

		
		$obj.off('click').on('click','.T-isAgree',function() {

			//勾选框的控制
			var isAgree = $(this).is(':checked');
			if(isAgree) {
				$obj.find('.T-btn-save').prop('disabled',false);
			} else {
				$obj.find('.T-btn-save').prop('disabled',true);
			};
		}).on('click','.T-btn-save',function() {

			if (!auditValidator.form()) {return}
			//保存事件
			if(hotel.imgCount > 0) {
				hotel.upload($obj);
			} else {
				hotel.saveFormData($obj);
			} 
		});
		if($obj.find('.ace-file-container').length){
			$obj.find('.T-imgContainer').find('.remove').click(function() {
				$obj.find(".T-original").removeClass('hidden');
				$obj.find(".T-original").data("needSubmit",false);
				hotel.imgCount -= 1;
			});
		}
	};

	//上传图片
	hotel.uploadImg = function($obj,$tab) {

		//上传图片
		var eleId = $obj.data("id");
		console.log(eleId);
	    $.ajaxFileUpload({
	        url:'huochaitou/base.do?method=uploadImage',//处理图片脚本
	        secureuri :false,
	        fileElementId : eleId,//file控件id
	        dataType : 'json',
	        async: false,
	        success : function(data){
	        	console.log(data);
	        	$obj.data("needSubmit",false);
	        	$obj.data("url",data.url);
	        	if($obj.find(".T-original").length) {
	        		$obj.find(".T-original").addClass('hidden');
	        	}
	        	hotel.imgCount -= 1;
	        	if(hotel.imgCount == 0){
					hotel.saveFormData($tab);
				}
	        },
	        error: function(data, status, e){
	            alert(e);
	        }
		});
	};

	//循环上传
	hotel.upload = function($tab) {
		var $imgContainer = $tab.find('.T-imgContainer');
		for(var i = 0,len = $imgContainer.length; i<len; i++){
			var $that = $imgContainer.eq(i);
			if($that.data('needSubmit')){
				hotel.uploadImg($that,$tab);
			}
		};
	}

	//保存数据
	hotel.saveFormData = function($tab) {
		var form = $tab.find(".T-form").serialize(),
			isAuth = $tab.find('input[name="isAuth"]').val(),
			$imgContainer = $tab.find('.T-imgContainer');
		var businessLicensePic = $imgContainer.eq(0).data("url"),
		 	taxesCardPic = $imgContainer.eq(1).data("url");
		if(businessLicensePic){
			form += "&businessLicensePic=" + businessLicensePic;
		}
		if(taxesCardPic){
			form += "&taxesCardPic=" + taxesCardPic;
		}
		console.log(form);
		$.ajax({
			url: hotel.url('upCerLication','view'),
			type: 'POST',
			data: form,
			success: function(data) {
				if(showDialog(data)){
					showMessageDialog(data.message,function(){
						if(!!isAuth) {
							layer.close(hotel.$auditLayer);
						}else{
							layer.close(hotel.$authenticationLayer);
						}
						
						hotel.listHotel(0);
						console.log(hotel.imgCount);
					});
				}
			}

		});

	};
	hotel.addHotel = function(fn){
		var html = addTemplate();
		hotel.$addLayer = layer.open({
		    type: 1,
		    title:"新增酒店",
		    skin: 'layui-layer-rim', //加上边框
		    area: '1190px', //宽高
		    zIndex:1028,
		    content: html,
		    scrollbar: false,
		    success:function(){
		    	var $container = $(".T-addHotelContainer");
		    	// 设置表单验证
		    	ruleData.validator = rule.check($container);
		    	//normalMarketPrice====normalInnerPrice
		    	var $normalMPrice=$container.find('input[name=normalMarketPrice]'),
				    $normalInPrice=$container.find('input[name=normalInnerPrice]');
				Tools.inputCtrolFloat($normalMPrice);
				Tools.inputCtrolFloat($normalInPrice);


		    	//初始化地区
		    	KingServices.provinceCity($container);
		    	//新增房间列表
		    	$container.find(".T-btn-hotel-standard-add").click(function(){
		    		hotel.addRoomList($container);
		    	})
		    	//提交事件绑定
		    	$container.find(".T-btn-submit-hotel").on("click",function(){
		    		hotel.saveHotel($container,1,fn);
		    	});
		    }
		})
	};
	hotel.addRoomList = function($container){
		var $tbody = $container.find(".T-roomListTbody"),
			html = '<tr>' +
			'<td><input name="type" type="text" class="col-sm-12"  maxlength="32" /></td>' + 
			'<td class="T-time"><div class="clearfix" style="margin-top:1px;">日常价格<label class="timeArea" style="float:right; padding-top:0px;"><button class="btn btn-success btn-sm btn-white T-add"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button></label></div></td>' +
			'<td><div class="clearfix" style="margin-top:1px"><input name="normalMarketPrice" class="col-sm-12 F-float F-money" maxlength="9" type="text"/></div></td>' +
			'<td><div class="clearfix T-Min-hotelPrice" style="margin-top:1px"><input name="normalInnerPrice" class="col-sm-12 F-float F-money normalInnerPrice T-minPrice" maxlength="9" type="text"/></div></td>' +
			'<td><select name="containBreakfast" class="no-padding foodsAll"><option value="0">不含</option><option value="1">包含</option></select></td>' +
			'<td><select name="containLunch" class="no-padding foodsAll"><option value="0">不含</option><option value="1">包含</option></select></td>' +
			'<td><select name="containDinner" class="no-padding foodsAll"><option value="0">不含</option><option value="1">包含</option></select></td>' +
			'<td><input name="broadband" class="col-sm-12" type="text"  maxlength="100" /></td>' + 
			'<td><input name="areaSize" class="col-sm-12 F-float F-count" type="text"  maxlength="3" /></td>' +
			'<td><input name="guestNumber" class="col-sm-12" type="text"  maxlength="4" /></td>' +
			'<td><input name="remark" class="col-sm-12" type="text"  maxlength="1000" /></td>' +
			'<td style="width:70px"><a data-entity-id="" href="#" class=" btn-xs  T-btn-hotel-standard-delete">删除</a></td>' +
			'</tr>';
		$tbody.append(html);
		hotel.datepicker($tbody);
		ruleData.roomTd = $tbody.find('tr');
		ruleData.UroomTd = $tbody.find('tr');
	   var $normalMPrice=$tbody.find('input[name=normalMarketPrice]'),
		   $normalInPrice=$tbody.find('input[name=normalInnerPrice]');
		Tools.inputCtrolFloat($normalMPrice);
		Tools.inputCtrolFloat($normalInPrice);

		//获取酒店最低价
		$tbody.find('.T-minPrice').on('change',function(event) {
			event.preventDefault();
			/* Act on the event */
			var minHotelPrice = hotel.minHotelPrice($('.T-addHotelContainer'));
			$('.T-addHotelContainer').find('.T-lowestPrice').val(minHotelPrice);
		});

		// 再调整对话框的高度
		$(window).trigger('resize');
		// 对酒店房型设置表单验证
	    ruleData.hotelRoomStandardList = rule.checkRoom($tbody);
	    ruleData.UhotelRoomStandardList = rule.checkRoom($tbody);
	    //删除房间列表
	    $tbody.find(".T-btn-hotel-standard-delete").on("click",function(){
	    	var $this = $(this);
	    		id = $this.closest('tr').data("entity-id");
	    	hotel.delRoomList(id,$this);
	    });
	    //新增时间区间
	    $tbody.find(".T-add").off("click").on("click",function(){
	    	var $this = $(this);
	    	hotel.addTimeArea($this,$tbody);
	    })
	};
	//删除房间列表
	hotel.delRoomList = function(id,$this){
		if(!!id){
			var tr = $this.closest('tr');
			tr.addClass('delete');
			tr.fadeOut(function(){
				$(this).hide();
			});
		}else{
			$this.closest('tr').fadeOut(function(){
				$(this).remove();
				ruleData.roomTd = $container.find(".T-roomListTbody").find('tr');
			});
		}
	};
	hotel.addTimeArea = function($this,$tbody){
		var td = $this.closest('td'),
    		index = td.find("div").length,
    		timeLimitDiv = '<div data-index="'+(index)+'" class="clearfix T-appendDiv div-'+(index)+'" style="margin-top:1px"><input name="startTime" type="text" class="datepicker" style="width:100px"/><label>&nbsp;至&nbsp;</label><input name="endTime" type="text" class="datepicker" style="width:100px"/><label class="timeArea" style="float:right; padding-top:3px;">' + 
			'<button class="btn btn-danger btn-sm btn-white T-del" style="margin-top: -3px;"><i class="ace-icon fa fa-minus bigger-110 icon-only"></i></button>'+
			'</label></div>',
			marketPriceInput = '<div data-index="'+(index)+'" class="clearfix appendDiv T-marketPrice marketPrice-'+(index)+'" style="margin-top:6px"><input name="marketPrice" type="text" class="col-sm-12 F-float F-money marketPrice" maxlength="9"/></div>',
			contractPriceInput = '<div data-index="'+(index)+'" class="clearfix appendDiv T-contractPrice T-Min-hotelPrice contractPrice-'+(index)+'" style="margin-top:6px"><input name="contractPrice" type="text" class="col-sm-12 F-float F-money price T-minPrice" maxlength="9"/></div>';
    	ruleData.timeAreaTd = td;
    	ruleData.UtimeAreaTd = td;
    	td.append(timeLimitDiv);
    	td.next().append(marketPriceInput);
    	td.next().next().append(contractPriceInput);
    	//添加前端校验
		ruleData.timeAreavalidator = rule.checkTimeArea(td);
		ruleData.marketPricevalidator = rule.checkTimeArea(td.next());
		ruleData.pricevalidator = rule.checkTimeArea(td.next().next());
		ruleData.UtimeAreavalidator = rule.checkTimeArea(td);
		ruleData.UmarketPricevalidator = rule.checkTimeArea(td.next());
		ruleData.Upricevalidator = rule.checkTimeArea(td.next().next());
		hotel.datepicker($tbody);
		//删除时间区间
		$tbody.find(".T-del").off().click(function(){
			var $this = $(this);
			hotel.delTimeArea($this);
		});

		//获取酒店最低价
		$tbody.find('.T-minPrice').on('change',function(event) {
			event.preventDefault();
			/* Act on the event */
			var minHotelPrice = hotel.minHotelPrice($('.T-addHotelContainer'));
			$('.T-addHotelContainer').find('.T-lowestPrice').val(minHotelPrice);
		});
	};


   /**
    * 获取酒店最低价
    * @param  {[type]} $tab [description]
    * @return {[type]}      [description]
    */
   hotel.minHotelPrice = function($tab){
   	    var minHotelPrice=0,$hotelPriceArr=$tab.find('input.T-minPrice'),temp=[];
   	    for(var i=0;i<$hotelPriceArr.length;i++){
   	    	temp.push($hotelPriceArr.eq(i).val());
   	    };
   	    return Math.min.apply(Math,temp); 
	}

	hotel.delTimeArea = function($this){
		if (!$this.data('deleted')) {
			$this.data('deleted', true);
			var $timeArea = $this.closest('div'),
				divIndex = $timeArea.data("index"),
				entityId = $timeArea.data("entity-id"),
				index = $this.closest('td').find('div:not(.delete)').index($timeArea)-1;
			$timeArea.closest('tr').find('.T-marketPrice').eq(index).fadeOut(function(){
				$(this).remove();
			});
			$timeArea.closest('tr').find('.T-contractPrice').eq(index).fadeOut(function(){
				$(this).remove();
			});
			if (entityId != null && entityId != "") {
				$timeArea.addClass("delete");
				$timeArea.fadeOut(function(){
					$(this).hide();
				});
			}else{
				$timeArea.fadeOut(function(){
					$(this).remove();
				});
			}
		}
	};
	/**
	 * 保存酒店
	 * @param  {[type]} $container [容器]
	 * @param  {[type]} type       [type：1 新增   type：2 修改]
	 */
	hotel.saveHotel = function($container,type,fn){
		// 表单校验
		if (type == 1) {
			if (!ruleData.validator.form()) {return}
			if(!!ruleData.roomTd) {
				if (!ruleData.hotelRoomStandardList.form()) {return}
			}
			if(!!ruleData.timeAreaTd){
				if(!ruleData.timeAreavalidator.form() || !ruleData.marketPricevalidator.form() || !ruleData.pricevalidator.form()){return}
			}
		}else if(type == 2){
			if (!ruleData.Uvalidator.form()) {return}
			if(!!ruleData.UroomTd) {
				if (!ruleData.UhotelRoomStandardList.form()) {return}
			}
			if(!!ruleData.UtimeAreaTd){
				if(!ruleData.UtimeAreavalidator.form() || !ruleData.UmarketPricevalidator.form() || !ruleData.Upricevalidator.form()){return}
			}
		}
		//数据组装
		var status = 0,
			hotelRoomJsonAdd = [],hotelRoomJsonDel = [],//新增和删除的房间列表数组
			hotelRoomJsonAddTr = $container.find(".T-roomListTbody tr:not(.delete)"),
			hotelRoomJsonDelTr = $container.find(".T-roomListTbody tr.delete"),
			hotelRoomJson = {};
		if($container.find(".T-hotel-status").prop("checked")){
			status = 1;
		}
		var form = $container.find(".hotelMainForm").serialize()+"&status="+status,
			formData = $container.find(".hotelMainForm").serializeJson();
		hotelRoomJsonAddTr.each(function(){
			var $this = $(this),
				priceJsonTr = $this.find(".T-time .T-appendDiv"),
				hotelRoomJson = {
					id : $this.data("entity-id"),
					normalMarketPrice : hotel.getValue($this ,"normalMarketPrice"),
					normalInnerPrice : hotel.getValue($this ,"normalInnerPrice"),
					type : hotel.getValue($this ,"type"),
					containBreakfast : hotel.getValue($this ,"containBreakfast"),
					containLunch : hotel.getValue($this ,"containLunch"),
					containDinner : hotel.getValue($this ,"containDinner"),
					broadband : hotel.getValue($this ,"broadband"),
					areaSize : hotel.getValue($this ,"areaSize"),
					guestNumber : hotel.getValue($this ,"guestNumber"),
					remark : hotel.getValue($this ,"remark"),
					lowestPrice : hotel.getValue($this ,"lowestPrice"),
					priceJsonAddList : [],//时间区间新增和删除的数组
					priceJsonDelList : []
				};
			priceJsonTr.each(function(){
				if($(this).hasClass('delete')){
					var $the = $(this),
						priceJsonDel = {
							id : $the.data("entity-id")
						};
					hotelRoomJson.priceJsonDelList.push(priceJsonDel);
				} else {
					var $that = $(this),
						divIndex = $that.data("index"),
						priceJsonAdd = {
							id : $that.data("entity-id"),
							divIndex : divIndex,
							startTime : $that.find("input[name=startTime]").val(),
							endTime : $that.find("input[name=endTime]").val(),
							marketPrice : $that.closest('tr').find(".marketPrice-" + divIndex + " input[name=marketPrice]").val(),
							contractPrice : $that.closest('tr').find(".contractPrice-" + divIndex + " input[name=contractPrice]").val()
						}
					hotelRoomJson.priceJsonAddList.push(priceJsonAdd);
				}
			});
			hotelRoomJsonAdd.push(hotelRoomJson);
		})
		hotelRoomJsonDelTr.each(function(){
			var $thi = $(this),
				hotelRoomJson = {
				id : $thi.data("entity-id")
			};
			hotelRoomJsonDel.push(hotelRoomJson);
		});
		hotelRoomJsonAdd = JSON.stringify(hotelRoomJsonAdd);
		hotelRoomJsonDel = JSON.stringify(hotelRoomJsonDel);
		var method = "",operation = "";
		if (type == 1) {
			method = "addHotel";
			operation = "add";
		}else if(type == 2){
			method = "updateHotel";
			operation = "update";
		}
		$.ajax({
			url:hotel.url(method,operation),
			type:"POST",
			data:form+"&hotelRoomJsonAdd="+encodeURIComponent(hotelRoomJsonAdd)+"&hotelRoomJsonDel="+encodeURIComponent(hotelRoomJsonDel),
			success:function(data){
				var result = showDialog(data);
				if(result){
					layer.close(hotel.$addLayer);
					layer.close(hotel.$updateLayer);
					showMessageDialog(data.message,function(){
						if (typeof fn === "function") {
							data.hotel = JSON.parse(data.hotel);
							formData.id = data.hotel.id;
							fn(formData);
						}else{
							hotel.listHotel(0);
						}
					});
				}
			}
		});
	};
	hotel.datepicker = function($obj){
		$obj.find(".datepicker").datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		})
	};
	hotel.getValue = function($obj,name){
		var value = $obj.find("[name="+name+"]").val();
		return value;
	};
	hotel.url = function(method,operation){
		var url = ''+APP_ROOT+'back/hotel.do?method='+method+'&token='+$.cookie('token')+'&menuKey='+menuKey+'&operation='+operation+'';
		return url;
	}
	exports.init = hotel.initModule;
	exports.addHotel = hotel.addHotel;
});