define(function(require,exports){
	var menuKey = 'system_infrastructure',
		rule = require('./rule'),
		listTemplate = require('./view/list'),
		bankAccTemplate = require('./view/bankAccTable'),
		addTemolate = require('./view/addBankAccount'),
		updateTemplate = require('./view/updateBanlAccount'),
		viewTemplate = require('./view/viewBankAccount'),
		addAccountTemplate = require('./view/addAccountant'),
		listTabId = menuKey 
	var Infrastructure = {
		$listTab:false,
		$listBankhObj:false,
		updateLayer:false,
		addLayer:false,
		addAccLayer:false
	};
	//暴露方法
	Infrastructure.initModule = function(){
		var args = {
			pageNo:0,
			subjectName:'',
			status:1,
			sortType:'auto'
		};
		Infrastructure.listInfrastructure(args);
	};
	//初始化列表
	Infrastructure.listInfrastructure = function(args){
		$.ajax({
			url:KingServices.build_url('subject','listSubject'),
			type:'POST',
			data:args,
			success:function(data){
				var result = showDialog(data);
				if(result){
					
					data.newSubjectAccountList = JSON.parse(data.newSubjectAccountList);
					var html = listTemplate(data);
					Tools.addTab(menuKey,'基础设置',html);
					var $tabObj = $("#tab-"+listTabId+"-content");
					Infrastructure.$listTab = $tabObj;

					//绑定事件
					Infrastructure.initEvents($tabObj,args);
				}
			}
		});
		
	};
	//列表事件
	Infrastructure.initEvents = function($obj,args){
		//绑定会计科目设置事件
		var $divObj = $obj.find("#basicSet-accountObj"),
		$teamTab = $obj.find('#basicSet-teamNumber');
		Infrastructure.listAccountant($divObj,args);
		//银行账户列表初始化
		$obj.find('.tabbable').on('click','.T-basicSet-bankAccount',function(){
			var $bankAccObj = $obj.find('.T-bankAccount-content');
			var BankArgs = {
				pageNo:0,
				accountName:'',
				sortType:'atuo',
				bankAccountNumber:'',
				status:1
			};
			Infrastructure.$listBankhObj = $obj;
			Infrastructure.listBankAcc(BankArgs,$bankAccObj);
		});

		//自定义团号
		$teamTab.off('click').on('click', '.T-save', function(event) {
			event.preventDefault();
			/* Act on the event */
			var $that=$(this),$div=$that.closest('.form-inline');
			    tripNumber = $div.find('[name=tripNumber]').val();
            $.ajax({
                url: KingServices.buildTrave_url('travelAgency','updateTripNumberPrefix'),
                type: 'POST',
                showLoading: false,
                data: {
                    tripNumberPrefix: tripNumber
                }
            })
            .done(function(data) {
                var result = showDialog(data);
				if(result){
					showMessageDialog(data.message,function(){});
				}
            })
		});


		$obj.find('.tabbable').on('click','.T-basicSet-teamNumber',function(event){
			event.preventDefault();
			/* Act on the event */
			 $.ajax({
                url: KingServices.buildTrave_url('travelAgency','findTravelAgency'),
                type: 'POST',
                showLoading: false
            })
            .done(function(data) {
            	var tripNumber='';
            	data.travelAgency=JSON.parse(data.travelAgency);
            	if(!!data.travelAgency.tripNumberPrefix){
            		tripNumber=data.travelAgency.tripNumberPrefix;
            	}else{
            		tripNumber=data.travelAgency.shortName;
            	}
            	$teamTab.find('[name=tripNumber]').val(tripNumber);
            })

		});



	};
	//初始化会计科目设置列表
	Infrastructure.listAccountant = function($obj,args){
		//新增会计科目
		$obj.find('.add-search').on('click','.T-add-AccObj',function(){
			var $tbObj = $obj.find('.T-accObjList');
			var trLen = $tbObj.find('tr').length;
			Infrastructure.addAccountant($obj,args,trLen);
		});
		//修改科目名称
		$obj.find('.T-accObjList').on('click','.T-edit',function(){
			var $tr = $(this).closest('tr');
			Infrastructure.editAccountant($tr,args);
		});
	};
	//新增会计科目
	Infrastructure.addAccountant = function($obj,args,trLen){
		var html = addAccountTemplate();
		var addAccLayer = layer.open({
			type: 1,
			title:"新增会计科目",
			skin: 'layui-layer-rim', //加上边框
			area: ['400px'], //宽高
			zIndex:1028,
			content: html,
			scrollbar: false,
			success:function(){
				var $addTabObj = $('.T-add-form');
				var validator = rule.check($addTabObj);
				$addTabObj.find('.T-submit').on('click',function(){
					if(!validator.form()){return};
					Infrastructure.accountEvent($addTabObj,args,trLen);
				});
				
			}
		});
		Infrastructure.addAccLayer = addAccLayer;
	};
	//处理添加会计科目
	Infrastructure.accountEvent = function($obj,args,trLen){
		var subjectName = $obj.find('input[name=subjectName]').val();
		var number = trLen+1;
		$.ajax({
			url:KingServices.build_url('subject','addSubject'),
			type:'POST',
			data:{
				number:number,
				subjectName:subjectName,
				type : $obj.find('select[name=selectType]').val(),
				status:1
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					layer.close(Infrastructure.addAccLayer);
					showMessageDialog(data.message,function(){
						Infrastructure.listInfrastructure(args);
					});
				}
			}
		});
	};
	//修改会计科目
	Infrastructure.editAccountant = function($obj,args){
		var oldTitle = $obj.attr('title'),
			oldStatus = $obj.attr('status'),
			oldType = $obj.attr('type');
		var html = '<input type="text" name="subjectName" value='+oldTitle+'>';
		$obj.find('.title').html(html);
		var selected = '';
		if (oldStatus == 0) {
			selected = 'selected="selected"'
		};
		var selectHtml = '<select name="selectStatus">'+
		'<option value="1">已启用</option>'+
		'<option value="0" '+selected+'>已停用</option>'+
		'</select>';
		$obj.find('.status').html(selectHtml);

		var selected2 = 'selected="selected"';
		var typeHtml = '<select name="selectType">'+'<option value="0">收入</option>'+'<option value="1" ';
		if(oldType == 1){ typeHtml += selected2; }
		typeHtml += '>支出</option><option value="2"';
		if(oldType == 2){ typeHtml += selected2; }
		typeHtml += '>转账</option></select>';
		$obj.find('.T-type').html(typeHtml);
		$obj.find('input').off('change').on('change',function(){
			Infrastructure.installAccData($obj,args);
		});
		$obj.find('select').off('blur').on('blur',function(){
			Infrastructure.installAccData($obj,args);
		});
	};
	//组装会计科目数据
	Infrastructure.installAccData = function($obj,args){
		var updateData={
			id:$obj.attr('id'),
			subjectName:$obj.find('input[name=subjectName]').val(),
			status:$obj.find('select[name=selectStatus]').val(),
			type:$obj.find('select[name=selectType]').val()
		};
		$.ajax({
			url:KingServices.build_url('subject','updateSubject'),
			type:'POST',
			data:updateData,
			success:function(data){
				var result = showDialog(data);
				if(result){
					showMessageDialog(data.message,function(){
						Infrastructure.listInfrastructure(args);
					});
				}
			}
		});
	};
	//初始化银行账户设置列表
	Infrastructure.listBankAcc = function(args,$obj){
		if(arguments.length == 3){
			var $searchArea = Infrastructure.$listBankhObj.find('.T-search-area');
			//args.accountName = $searchArea.find('input[name=bankAccountNumber]').val();
			args.bankAccountNumber = $searchArea.find('input[name=bankAccountNumber]').val();
			args.status = $searchArea.find(".T-status").find("button").data("value");
		};
		args.pageNo = args.pageNo || 0;
		$.ajax({
			url:Infrastructure.Url('listSumBankAccount'),
			type:'POST',
			data:args,
			showLoading:false,
			success:function(data){
				var result = showDialog(data);
				if(result){
					data.newBankAccountList = JSON.parse(data.newBankAccountList);
					for(var i = 0;i<data.newBankAccountList.length;i++){
						var bankNumber = data.newBankAccountList[i].bankAccountNumber || "";
						bankNumber = bankNumber.replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1 ");
						data.newBankAccountList[i].bankAccountNumber = bankNumber;
					}
					var html = bankAccTemplate(data);
					$obj.html(html);
					//绑定事件
					Infrastructure.listBankAccEvent(args,$obj);
					//设置记录条数
					var recordSize = Tools.getRecordSizeDesc(data.recordSize);
					$obj.find('.recordSize').text(recordSize);
					// 绑定翻页组件
					laypage({
					    cont: $obj.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (args.pageNo + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		args.pageNo = obj.curr -1
					    		Infrastructure.listBankAcc(args,$obj,'page');
					    	}
					    }
					});
				}
				
			}
		});
	};
	//银行账户设置页面事件
	Infrastructure.listBankAccEvent = function(args,$obj){
		//新增银行账户
		$obj.find('.T-search-area').on('click','.T-add',function(){
			Infrastructure.addBankAccount(args,$obj);
		});
		//搜索事件
		$obj.find('.T-search-area').on('click','.T-search',function(){
			Infrastructure.listBankAcc(args,$obj,'search');
		});
		//状态栏事件
		$obj.find(".T-sleect-ul").on('click','a',function(){
			$(this).closest('div').find(".T-select-status").attr("data-value",$(this).attr("data-value"));
			$(this).closest('div').find("span").text($(this).text());
			Infrastructure.listBankAcc(args,$obj,'search');
		});
		// 报表内的操作
		$obj.find('.T-bankAcc-list').on('click', '.T-action', function(event) {
			//event.preventDefault();
			var $that = $(this), id = $that.closest('tr').attr('bankNumId');
			if ($that.hasClass('T-view'))  {
				// 查看账户信息
				Infrastructure.viewBankAcc(id);
			} else if ($that.hasClass('T-edit'))  {
				// 编辑账户信息
				Infrastructure.updateBankAccount(id,args,$obj);
			} else if ($that.hasClass('T-delete'))  {
				// 删除账户
				showConfirmDialog("你确定要删除该条记录？", function() {
					Infrastructure.deleteBnakAccount(id,args,$obj);
				});
				
			}
		});
	};
	//添加账户事件
	Infrastructure.addBankAccount = function(args,$obj){
		var html = addTemolate();
		var addBankAccLayer = layer.open({
			type: 1,
			title:"新增资金账户",
			skin: 'layui-layer-rim', //加上边框
			area: '800px', //宽高
			zIndex:1028,
			content: html,
			scrollbar: false,
			success:function(){
				var $addTabObj = $('.T-bankAcc-container');
				//给添加页面绑定事件
				Infrastructure.bankAccEvent($addTabObj,args,$obj,1);

				$addTabObj.find('.T-btn-close').on("click",function(){
					layer.close(addBankAccLayer);
				});
			}
		});
		Infrastructure.addLayer = addBankAccLayer;
	};
	Infrastructure.updateBankAccount = function  (id,args,$obj) {
		$.ajax({
			url:Infrastructure.Url('getBankAccountById'),
			type:'POST',
			data:{
				id:id
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					data.bankAccount = JSON.parse(data.bankAccount);
					var bankNumber = data.bankAccount.bankAccountNumber || "";
					bankNumber = bankNumber.replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1 ");
					data.bankAccount.bankAccountNumber = bankNumber;
					var typeTitle = "";
					if(data.bankAccount.type == 0){
						typeTitle = '修改资金账户'
					}else{
						typeTitle = '修改银行账户'
					};				
					var html = updateTemplate(data);
					var updateBankAccLayer = layer.open({
						type: 1,
						title:typeTitle,
						skin: 'layui-layer-rim', //加上边框
						area: ['800px'], //宽高
						zIndex:1028,
						content: html,
						scrollbar: false,
						success:function(){
							var $updateTabObj = $('.T-bankAcc-container');
							
							//给添加页面绑定事件
							Infrastructure.bankAccEvent($updateTabObj,args,$obj,2);
						}
					});
					Infrastructure.updateLayer = updateBankAccLayer;
			}
			}
		});
	};
	//添加/修改银行账户页面事件
	Infrastructure.bankAccEvent = function($obj,args,$parentObj,typeFlag){
		//格式化日期格式
		Infrastructure.formatDate($obj);
		//格式化银行账号
		var $inputObj = $obj.find('input[name=bankNumber]');
		Infrastructure.formatBank($inputObj);
		//表单验证
		var validator = rule.check($obj);
		if(typeFlag == 2){
			var incomeMoney = $obj.find('input[name=incomeMoney]').val();
			var payMoney = $obj.find('input[name=payMoney]').val();
			if(incomeMoney != 0 || payMoney != 0){
				//提示
				$obj.find('input[type=text]').each(function(index, el) {
					var $that = $(this);

					if ($that.hasClass('T-edit-feild')) {
						$that.prop('disabled',true);
					}
				});
			};
		}
		if($obj.find(".T-mainForm").data('type') != "1"){
			$obj.find(".T-cashHidden").addClass('hidden');
		}
		$obj.find('.T-accountType').on("change",function(){
			if($(this).val() == 0){
				$obj.find(".T-cashHidden").addClass('hidden');
			} else {
				$obj.find(".T-cashHidden").removeClass('hidden');
			}
		});

		//提交事件
		$obj.find('.T-submit').on('click',function(){
			if(!validator.form()){return;};
			var subData = Infrastructure.installData($obj,typeFlag);
			var method = typeFlag == 2 ? 'updateBank':'addBank'
			$.ajax({
				url:Infrastructure.Url(method),
				type:'POST',
				data:subData,
				success:function(data){
					var result = showDialog(data);
					if(result){
						var closeLayer = typeFlag == 2?Infrastructure.updateLayer:Infrastructure.addLayer;
						layer.close(closeLayer);
						showMessageDialog(data.message,function(){
							Infrastructure.listBankAcc(args,$parentObj,'search');
						});
					}
				}
			});		
		});
	};
	//查看账户事件
	Infrastructure.viewBankAcc = function(id){
		$.ajax({
			url:Infrastructure.Url('getBankAccountById'),
			type:'POST',
			data:{
				id:id
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					data.bankAccount = JSON.parse(data.bankAccount);
					var bankNumber = data.bankAccount.bankAccountNumber || "";
					bankNumber = bankNumber.replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1 ");
					data.bankAccount.bankAccountNumber = bankNumber;
					var typeTitle = "";
					if(data.bankAccount.type == 0){
						typeTitle = '查看资金账户'
					}else{
						typeTitle = '查看银行账户'
					};
					var html = viewTemplate(data);
					var viewBankAccTemplate = layer.open({
						type: 1,
						title:typeTitle,
						skin: 'layui-layer-rim', //加上边框
						area: ['800px'], //宽高
						zIndex:1028,
						content: html,
						scrollbar: false,
						success:function(){}
					});
				}
			}
		});
	};
	//删除银行账户
	Infrastructure.deleteBnakAccount = function(id,args,$obj){
		$.ajax({
			url:Infrastructure.Url('deleteBank'),
			type:'POST',
			data:{
				id:id
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					showMessageDialog(data.message,function(){
						Infrastructure.listBankAcc(args,$obj,'search');
					});
				};
			}
		});
	};
	//格式化日期
	Infrastructure.formatDate = function($obj){
		$obj.find('.datepicker').datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		});
	};
	//格式化银行账户
	Infrastructure.formatBank = function($obj){
		$obj.keyup(function(){  
	        var value=$(this).val().replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1 ");    
	        $(this).val(value); 
        }) 
	};
	//组装url
	Infrastructure.Url = function(method){
		var url = KingServices.build_url('bank',method);
		return url;
	};
	//组装数据
	Infrastructure.installData = function($obj,typeFlag){
		var status = 0,
		    checkStatus = $obj.find('.T-checkStatus').is(':checked'),
		    type;
		if(checkStatus){
			status = 1;
		};
		
		if ($obj.find('.T-accountType').length) {
			type = $obj.find('.T-accountType').val();
		} else {
			type = $obj.find(".T-mainForm").data('type');
		}

		if(type == 0){
			var subData = {
				type : type,
				aliasName:$obj.find('input[name=aliasName]').val(),
				beginningBalance:$obj.find('input[name=balanceMoney]').val(),
				beginningTime:$obj.find('input[name=startTime]').val(),
				remark:$obj.find('textarea[name=remark]').val(),
				status:status,
				id:typeFlag == 2 ? $obj.find('input[name=bankNumberId]').val():'',
			};
		}else{
			var bankNumber = $obj.find('input[name=bankNumber]').val().replace(/\s+/g, "");
			var subData = {
				type : type,
				aliasName:$obj.find('input[name=aliasName]').val(),
				accountName:$obj.find('input[name=accountName]').val(),
				bankAccountNumber:bankNumber,
				beginningBalance:$obj.find('input[name=balanceMoney]').val(),
				beginningTime:$obj.find('input[name=startTime]').val(),
				openingBank:$obj.find('input[name=bankName]').val(),
				remark:$obj.find('textarea[name=remark]').val(),
				status:status,
				id:typeFlag == 2 ? $obj.find('input[name=bankNumberId]').val():'',
			};
		}
		
		return subData;
	};
	exports.init = Infrastructure.initModule;
});