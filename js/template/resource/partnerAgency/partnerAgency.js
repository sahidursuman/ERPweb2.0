/**
 * 发团管理--客户管理
 * 
 */
define(function(require,exports){
    var menuKey = 'resource_partnerAgency',
    	rule = require('./rule'),
    	listTempLate = require('./view/list'),
    	addTempLate = require('./view/add'),
    	addPartnerAgencyTempLate = require('./view/addHeaderAgency'),
    	updatePartnerAgencyTempLate = require('./view/update'),
    	viewDetialPartnerAgencyTempLate = require('./view/view'),
    	tabId = "tab-"+menuKey+"-content"
	
	//定义资源对象
	var PartnerAgency = {
		searcData:false,
		$tab:false,
		$searchArea:false
	};
	/**
	 * 客户管理的初始化
	 */
	 PartnerAgency.initModule = function(){
	 	PartnerAgency.listPartnerAgency(0,"",1);
	 };
	//客户管理的list页面
	PartnerAgency.listPartnerAgency = function(pageNo,partnerAgencyName,status){
		if(PartnerAgency.$searchArea && arguments.length === 1){
			partnerAgencyName = PartnerAgency.$searchArea.find('input[name=partnerAgency_travelAgencyName]').val();
			status = PartnerAgency.$searchArea.find(".T-select-status").find("button").data("value");
		}
		//修正页码
		pageNo = pageNo || 0;
		$.ajax({
			url:PartnerAgency.url("listPartnerAgency","view"),
			type:'POST',
			
			data:{
				pageNo:pageNo,
				travelAgencyName:partnerAgencyName,
				status:status,
				sortType:"auto"
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					data.partnerAgencyList = JSON.parse(data.partnerAgencyList);
					PartnerAgency.searcData = data.searchParam;
					var html = listTempLate(data);
					Tools.addTab(menuKey,'客户管理',html);
					//初始化客户管理资源对象
					PartnerAgency.$tab = $("#"+tabId);
					PartnerAgency.$searchArea = PartnerAgency.$tab.find(".search-area");
					PartnerAgency.init_event();
					//绑定分页插件
					laypage({
						cont:PartnerAgency.$tab.find(".T-pagenation"),
						pages:data.totalPage,
						curr:(pageNo+1),
						jump:function(obj,first){
							if(!first){
								PartnerAgency.listPartnerAgency(obj.curr - 1);
							}
						}
					});
				}
			}
		});
	};
	//list页面的事件处理
	PartnerAgency.init_event = function(){
		//搜索栏事件
		PartnerAgency.$tab.find(".T-select-status").on('click','a',function(event){
			event.preventDefault();
			var $that = $(this);
			$that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
			PartnerAgency.listPartnerAgency(0);
		});
		//搜索按钮事件
		PartnerAgency.$tab.find(".T-partnerAgency-search").on('click',function(event){
			event.preventDefault();
			PartnerAgency.listPartnerAgency(0);
		});
		//回车搜索事件
		PartnerAgency.$tab.find('.T-partnerAgencyName').on('click',function(event){
			if(event.which == 13 && !window.forbiddenError){
				PartnerAgency.listPartnerAgency(0);
			}
		});
		//新增同行
		PartnerAgency.$tab.find(".T-partnerAgency-add").on('click',function(event){
			event.preventDefault();
			PartnerAgency.addPartnerAgency();
		});
		//列表内的操作
		PartnerAgency.$tab.find(".T-partnerAgencyList").on('click','.T-action',function(event){
			//alert('123');
			event.preventDefault();
			var $that = $(this),id = $that.closest('tr').attr('id');
			//修改同行
			if($that.hasClass('T-partnerAgency-edit')){
				PartnerAgency.updatePartnerAgency(id);
			}else if($that.hasClass('T-partnerAgency-view')){
				//查看同行
				PartnerAgency.viewPartnerAgency(id);
			}else if($that.hasClass('T-partnerAgency-delete')){
				//删除同行
				showConfirmDialog($( "#confirm-dialog-message" ), "确定删除该条数据?",function(){
	        		PartnerAgency.deletePartnerAgency(id);
	        	});
				
			}
		});
	};
	//新增同行
	PartnerAgency.addPartnerAgency = function(fn){
		var addHtml = addTempLate();
		var addPartnerAgencyLayer = layer.open({
			type:1,
			title:'新增客户旅行社',
			skin:'layui-layer-rim',
			area:'1190px',
			zIndex:1028,
			content:addHtml,
			scrollbar: false, // 推荐禁用浏览器外部滚动条
			success:function(){
				var $obj = $(".T-addPartnerAgencyContainer");
				var $mainObj = $obj.find('.T-form-main');
				var validator = rule.partnerAgencyCheckor($mainObj);
				var $contactList = $obj.find('.T-contactList');
				//绑定省市区选择事件
				KingServices.provinceCity($obj);
				//获取总社的下拉列表
				var $selectObj = $mainObj.find('select[name=headPartnerAgency]');
				PartnerAgency.getHeaderPartnerAgency($selectObj,null);
				//实时增加总社
				$mainObj.find('.T-addheaderPartnerAgency').on('click',function(){
					PartnerAgency.addHeaderAgency($mainObj,validator);
				});
				//新增联系人
				$contactList.find('.T-contact-add').on('click',function(){
					PartnerAgency.addContact($contactList);
					validator = rule.partnerAgencyCheckor($contactList);
				});
				//保存数据
				$obj.find('.T-submit-data').on('click',function(){
					if (!validator.form()) { return;}
					PartnerAgency.savePartnerAgency($mainObj,addPartnerAgencyLayer,1,fn);
				});
			}
		});
	};
	//修改同行
	PartnerAgency.updatePartnerAgency = function(id){
		$.ajax({
			url:PartnerAgency.url("getPartnerAgencyById",'view'),
			type:'POST',
			data:"id="+id,
			success:function(data){
				var result = showDialog(data);
				if(result){
					var partnerAgencyInfo = JSON.parse(data.partnerAgencyJson);
					data.partnerAgencyJson = partnerAgencyInfo
					var html = updatePartnerAgencyTempLate(data);
					var updatePartnerAgencyLayer = layer.open({
						type:1,
						title:"修改同行旅行社",
						skin:'layui-layer-rim',
						area:'1190px',
						zIndex:1028,
						content:html,
						scrollbar: false, // 推荐禁用浏览器外部滚动条
						success:function(){
							var $obj = $('.T-updatePartnerAgencyContainer');
							var $mainObj = $obj.find('.T-partnerAgencyMainForm');
							var validator = rule.partnerAgencyCheckor($mainObj);
							var $contactList = $obj.find(".T-contactList");
							var partnerAgencyJson = data.partnerAgencyJson;
							//省市区选择事件
							if(partnerAgencyJson.provinceId != null )var provinceId = partnerAgencyJson.provinceId;
							if(partnerAgencyJson.cityId != null )var cityId = partnerAgencyJson.cityId;
							if(partnerAgencyJson.districtId != null ) var districtId = partnerAgencyJson.districtId;
							KingServices.provinceCity($obj,provinceId,cityId,districtId);
							//总社数据获取
							var headerAgengyId = "";
							var $selectObj = $obj.find('select[name=headPartnerAgency]');
							if(partnerAgencyJson.partnerHeaderAgency != null){
								headerAgengyId = partnerAgencyJson.partnerHeaderAgency.id;
							}
							PartnerAgency.getHeaderPartnerAgency($selectObj,headerAgengyId);
							//实时添加总社
							$mainObj.find('.T-addheaderPartnerAgency').on('click',function(){
								PartnerAgency.addHeaderAgency($mainObj);
							});
							//修改页面的新增联系人
							$contactList.find('.T-partnerAgency-add').on('click',function(){
								PartnerAgency.addContact($contactList);
								validator = rule.partnerAgencyCheckor($contactList);
							});
							//删除原有联系人
							$contactList.find('tbody .needConfirm').on('click',function(){
								var $obj = $(this);
								var id = $obj.attr("data-entity-id");
								showConfirmDialog($( "#confirm-dialog-message" ), "确定删除该条数据?",function(){
				            		PartnerAgency.deleteContact($obj,id);
				            	});
							});
							//组装数据
							$obj.find('.T-submit-data').on('click',function(){
								if (!validator.form()) { return;}
								PartnerAgency.savePartnerAgency($mainObj,updatePartnerAgencyLayer,2);
							});
						}
					});
				}
			}
		});
	};
	//查看同行
	PartnerAgency.viewPartnerAgency = function(id){
		$.ajax({
			url:PartnerAgency.url("getPartnerAgencyById","view"),
			type:"POST",
			data:"id="+id,
			success:function(data){
				var result = showDialog(data);
				if(result){
					var partnerAgencyInfo = JSON.parse(data.partnerAgencyJson);
					data.partnerAgency = partnerAgencyInfo;
					var html = viewDetialPartnerAgencyTempLate(data);
					layer.open({
						type:1,
						title:'查看客户旅行社信息',
						skin:'layui-layer-rim',
						area:'60%',
						zIndex:1028,
						content:html,
						scrollbar: false, // 推荐禁用浏览器外部滚动条
					});
				}
			}
		});
	};
	//删除同行
	PartnerAgency.deletePartnerAgency = function(id){
		$.ajax({
			url:PartnerAgency.url("deletePartnerAgency","delete"),
			type:"POST",
			data:"id="+id,
			success:function(data){
				var result = showDialog(data);
				if(result){
					showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
						PartnerAgency.listPartnerAgency(0);	
					});
				}
			}
		});
	};
	//数据组装
	PartnerAgency.savePartnerAgency = function($obj,layerType,typeFlag,fn){
		//先获取表单数据
		var status = 0,
		    checkStatus = $obj.find('.T-partnerAgency-status').is(':checked'),
			form,
			contactList = [];
		if(checkStatus == true){
			status = 1;
		}
		form = $obj.serialize()+"&status="+status;
		//通过typeFlag来判断组装数据
		//1--通过新增页面的数据组装；2--修改页面的数据组装；
		var $tr = $obj.find('.T-contactList tbody tr');
		if(typeFlag == 1){
			$tr.each(function(){
				var contactRealname = $(this).find("input[name=contactRealname]").val();
    			var contactMobileNumber = $(this).find("input[name=contactMobileNumber]").val();
    			if(contactRealname != '' && contactMobileNumber != ''){
    				var contact = {
    					contactRealname : contactRealname,
	    				contactMobileNumber : contactMobileNumber,
	    				departmentName : $(this).find("input[name=departmentName]").val(),
	    				dutyName : $(this).find("input[name=dutyName]").val()
    				};
    				contactList.push(contact);
    			}
			});
			var contactAddJson = JSON.stringify(contactList);
			var url = PartnerAgency.url("savePartnerAgency","add");
			var data = form+"&contactListJsonAdd="+encodeURIComponent(contactAddJson);
			PartnerAgency.submitData(url,data,layerType,fn);
		};
		if(typeFlag == 2){
			$tr.each(function(){
				var contactRealname = $(this).find("input[name=contactRealname]").val();
				var contactMobileNumber = $(this).find("input[name=contactMobileNumber]").val();
				if(contactRealname != "" && contactMobileNumber != ""){
					var id = $(this).attr("data-entity-id");
					if(id != null && id != ""){
						var contact = {
							id : id,
		    				contactRealname : contactRealname,
		    				contactMobileNumber : contactMobileNumber,
		    				departmentName : $(this).find("input[name=departmentName]").val(),
		    				dutyName : $(this).find("input[name=dutyName]").val()
		    			};
					}
					else{
						var contact = {
		    				contactRealname : contactRealname,
		    				contactMobileNumber : contactMobileNumber,
		    				departmentName : $(this).find("input[name=departmentName]").val(),
		    				dutyName : $(this).find("input[name=dutyName]").val()
		    			};
					}
	    			contactList.push(contact);
				};
			})
			
			var contactUpdateJson = JSON.stringify(contactList);
			var url = PartnerAgency.url("updatePartnerAgency","update");
			var data = form+"&contactListJsonAdd="+encodeURIComponent(contactUpdateJson);
			PartnerAgency.submitData(url,data,layerType,fn);
		}
	};
	//提交数据
	PartnerAgency.submitData = function(url,data,$obj,fn){
		$.ajax({
			url:url,
			type:'POST',
			data:data,
			success:function(data){
				var result = showDialog(data);
				if(result){
					layer.close($obj);
					showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
						var formData = {};
						console.log(data);
                        if (typeof fn === "function") {
                            data.partnerAgency = JSON.parse(data.partnerAgency);
                            formData.id = data.partnerAgency.id;
                            formData.name = data.partnerAgency.travelAgencyName;
                            formData.type = data.partnerAgency.type;
                            fn(formData);
                        }else{
							PartnerAgency.listPartnerAgency(0);
                        }
					});
				}
			}
		});
	};
	//添加联系人
	PartnerAgency.addContact = function($obj){
		var html = 
				'<tr>'+
				'<td><input class="col-sm-12" type="text" name="contactRealname" maxlength="32"/></td>'+
				'<td><input class="col-sm-12" type="text" name="contactMobileNumber" maxlength="20"/></td>'+
				'<td><input class="col-sm-12" type="text" name="departmentName" maxlength="45"/></td>'+
				'<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>'+
				'<td><a class="T-contact-delete">删除</a></td>'+
				'</tr>';
				var $tbody = $obj.find('tbody');
				$tbody.append(html);
				$tbody.find('.T-contact-delete').off('click').on('click',function(){
					var $tr = $(this).closest('tr');
					$tr.remove();
				});
	};
	//删除联系人
	PartnerAgency.deleteContact = function($obj,id){
		$.ajax({
			url:PartnerAgency.url('deleteContact','delete'),
			type:'POST',
			data:'id='+id,
			success:function(data){
				var result = showDialog(data);
				if(result){
					showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
							$obj.closest('tr').remove();
					});
				}
			}
		});
	}
	//获取总社数据
	PartnerAgency.getHeaderPartnerAgency = function($obj,partnerAgencyId){
		$.ajax({
			url:PartnerAgency.url("getHeaderPartnerAgency","view"),
			type:'POST',
			success:function(data){
				
				var headerAgengy = data.dataList
				var html = '<option value="-1">请选择</option>';
				for(var i = 0;i<headerAgengy.length;i++){
					if(headerAgengy[i].id == partnerAgencyId){
						html +='<option selected="selected" value=\"'+headerAgengy[i].id+'\">'+headerAgengy[i].name+'</option>'
					}else{
						html += '<option value=\"'+headerAgengy[i].id+'\">'+headerAgengy[i].name+'</option>'
					}
				};
				$obj.append(html);
			}
		});
	};
	//实时添加总社
	PartnerAgency.addHeaderAgency = function($obj){
		var html = addPartnerAgencyTempLate();
		var addHeaderAgencyLayer = layer.open({
			type:1,
			title:'新增同行总社',
			skin:'layui-layer-rim',
			area:'35%',
			zIndex:1028,
			content:html,
			scrollbar: false, // 推荐禁用浏览器外部滚动条
			success:function(){
				var $mainContainer = $('.T-addHeaderAgencyContainer');
				$mainContainer.find('.T-addHeaderAgency').on('click',function(){
					var headerAgencyName = $mainContainer.find('input[name=headerAgencyName]').val();
					$.ajax({
						url:PartnerAgency.url('addHeaderPartnerAgency','add'),
						type:'POST',
						data:"headerAgencyName="+headerAgencyName,
						dataType:'json',
						success:function(data){
							
							if(data.success == 1){
								var agency = data.headerAgency;
								var option = '<option value=\"'+agency.id+'\" selected="selected">'+agency.name+'</option>';
									$obj.find("select[name=headPartnerAgency]").append(option);
								layer.close(addHeaderAgencyLayer);
							}
							showMessageDialog($( "#confirm-dialog-message" ),data.message);
						}
					});
				});
			}
		});
	};
	//拼接url
	PartnerAgency.url = function(method,operation){
		var url = APP_ROOT + "back/partnerAgency.do?method="+method+"&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation="+operation;
		return url
	};
	exports.init = PartnerAgency.initModule;
	exports.addPartnerAgency = PartnerAgency.addPartnerAgency;
});