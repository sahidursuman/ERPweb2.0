define(function(require, exports) {
	var rule = require("./rule"),
		menuKey = "accountSetting",
		listTemplate = require("./view/list"), 
		borrowinglate = require("./view/borrowing"),
		applicationplate = require("./view/application"),
		newPhonelate = require("./view/newPhone"),
		applylate = require("./view/apply"),
		solutionlate = require("./view/solution"),
		tabId = "tab-" + menuKey + "-content";
	var sKey = menuKey+"-loanApplication";
	var accountSetting = {
		$tab : false
	};
	accountSetting.initModule = function() {
		accountSetting.accountSeList(0);
	};
	accountSetting.accountSeList = function(pageNo) {
		// 修正页码
        pageNo = pageNo || 0;
		$.ajax({
			url:KingServices.build_url("accountSetting/applyLoan","findApplys"),
            type: "GET",
            data: {
                pageNo: pageNo,
                sortType: 'auto'
        	},
			success: function(data) {
			var result = showDialog(data);
			if(result){
				var html = listTemplate(data);
				Tools.addTab(menuKey, "账户设置", html);
				var $tad = $('#tab-'+menuKey+'-content');
				accountSetting.initList();

				// 绑定翻页组件
				laypage({
				    cont: $tad.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
				    pages: data.searchParam.totalPage, //总页数
				    curr: (data.searchParam.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		accountSetting.accountSeList(obj.curr -1);
						}
				    }
				});
			}
	        }

		})
	
	};

		// 借款拨款记录
		accountSetting.BorrowingRecord = function(pageNo) {
		$.ajax({
			url:KingServices.build_url("accountSetting/applyLoan","findApprovedRecord"),
            type: "GET",
            data: {
	                pageNo: pageNo,
	                sortType: 'auto'
            	},
				success: function(data) {
				var result = showDialog(data);
					if(result){
						var html = borrowinglate(data);
						var $obj = $('.T-bankAccount-content');
						$obj.html(html);

						// 绑定翻页组件
						laypage({
						    cont: $('#' + tabId).find('.T-borrowing-bank').children('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.searchParam.totalPage, //总页数
						    curr: (data.searchParam.pageNo + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		accountSetting.BorrowingRecord(obj.curr -1);
								}
						    }
						});	
					}
		    	}

			})
		};
		
		accountSetting.initList = function(){
				var searchParam = {
					pageNo:0,
					mobile:'mobile',
					verifyCode:'verifyCode'
				};
				var searchParam = {
					pageNo:0,
					name:'name',
					mobileNumber:'mobileNumber',
					maritalStatu:'maritalStatu',
					idCard:'idCard',
					businessNumb:'businessNumb',
					code:'code',
					incomeStream:'incomeStream',
					purpose:'purpose',
					paymentStrea:'paymentStrea',
					collateral:'collateral',
					remark:'remark',
					applyMoney:'applyMoney'
				};

			accountSetting.$tab = $('#' + tabId);
			//绑定新号码
			accountSetting.$tab.find(".T-btn-accountSet").click(function(){
				var mobile = accountSetting.$tab.find('.phoneNumber').text();
				accountSetting.newPhone(mobile);
			});

			//借款申请
			var $obj = $('.T-accountSetList');
				$obj.find(".T-btn-apply").click(function(){
				accountSetting.loanApplication(0);
			});

			//借款拨款申请list数据
			var $obj = $('#tab-accountSetting-content');
			$obj.find(".T-account-bankAccount").click(function(){
				accountSetting.BorrowingRecord(0);
			});

		};

		//绑定手机号
		accountSetting.newPhone = function(mobile,verifyCode){
			var data = {};
				data.oldMobile = mobile;
			var html = applicationplate(data);
			var newPhoneLayer = layer.open({
			    type: 1,
			    title:"更换绑定手机",
			    skin: 'layui-layer-rim',
			    area: '450px', 
			    zIndex:1028,
			    content: html,
			    scrollbar: false,
			    success:function(){
					//更换新手机
					var $obj = $('.applicationMain');
						//收不到验证的解决方法
						$obj.find('.T-solution').click(function() {
							var html = solutionlate();
							var solutionLayer = layer.open({
							    type: 1,
							    title:"收不到验证码",
							    skin: 'layui-layer-rim',
							    area: '350px', 
							    zIndex:1028,
							    content: html,
							    scrollbar: false,
							    success:function(){
							    	var $obj = $(".account-solutionMain");
							    	$obj.find('.T-closeSolution').click(function() {
							    		layer.close(solutionLayer);
							    	});
							    }
							});
							});

						$obj.find('#send').click(function() {
						var searchData = {};
							searchData.mobile = $obj.find("[name=mobile]").val();
						$.ajax({
							url:KingServices.build_url("accountSetting/applyLoan","sendMessage"),
				            type: "GET",
				            data: {
				            	searchParam:JSON.stringify(searchData)
			            	},
							success:function(){
								$obj.find('.T-newPhone').click(function() {
								var searchData = {};
								searchData.mobile = $obj.find("[name=mobile]").val();
								searchData.verifyCode = $obj.find("[name=verifyCode]").val();
								$.ajax({
									url:KingServices.build_url("accountSetting/applyLoan","checkMobile"),
						            type: "GET",
						            data: {
						            	searchParam:JSON.stringify(searchData)
					            	},
									success:function(){
										accountSetting.newPhoneChange();
										layer.close(newPhoneLayer);
									}
								})
										
							});	
							}
						});
					      	times=60,
					      	timer=null;
						     // 计时开始
						    var that = this;
						    this.disabled=true;
						    timer = setInterval(function(){
						    times --;
						    that.value = times + "秒后重试";
						    if(times <= 0){
					        that.disabled =false;
					        that.value = "发送验证码";
					        clearInterval(timer);
					        times = 60;
				        		}
					      },1000);  
					});
				}
			});	
		};

		// 更换新手机号
		accountSetting.newPhoneChange = function(newMobile,verifyCode){
    		var html = newPhonelate();
			var changePhoneLayer = layer.open({
			    type: 1,
			    title:"更换绑定手机",
			    skin: 'layui-layer-rim',
			    area: '450px', 
			    zIndex:1028,
			    content: html,
			    scrollbar: false,
			    success:function(){
			    	var $obj = $('.applicationMain-other');
					var searchData = {};
						searchData.mobile = $obj.find("[name=mobile]").val();
						searchData.verifyCode = $obj.find("[name=verifyCode]").val()
			    	$obj.find('#sended').click(function() {
				    	var searchData = {};
							searchData.mobile = $obj.find("[name=mobile]").val();
							$.ajax({
								url:KingServices.build_url("accountSetting/applyLoan","sendMessage"),
					            type: "GET",
					            data: {
					            	searchParam:JSON.stringify(searchData)
				            	},
				            	success:function(){
				            		$obj.find('.T-newChangePhone').click(function() {
									var searchData = {};
									searchData.mobile = $obj.find("[name=mobile]").val();
									searchData.verifyCode = $obj.find("[name=verifyCode]").val();
									$.ajax({
										url:KingServices.build_url("accountSetting/applyLoan","saveMobile"),
							            type: "GET",
							            data: {
							            	searchParam:JSON.stringify(searchData)
						            	},
										success:function(){
											layer.close(changePhoneLayer);
											accountSetting.accountSeList();
										}
									})
								});
				            	}
							});
					      	times=60,
					      	timer=null;
						     // 计时开始
						    var that = this;
						    this.disabled=true;
						    timer = setInterval(function(){
						    times --;
						    that.value = times + "秒后重试";
						    if(times <= 0){
					        that.disabled =false;
					        that.value = "发送验证码";
					        clearInterval(timer);
					        times = 60;
        					}
	     			},1000);  
				});	
		    	}
			});
            	// }
			// })
		};

		//申请借款
		accountSetting.loanApplication = function(){
			var html = applylate();
				Tools.addTab(sKey, "申请借款", html);
				//表单验证
				//
				var $form = $(".T-form");
				var validator=rule.check($form);			
				var $obj = $('.fuelux-apply');
				$obj.find(".T-btn-cancel").click(function(){
				 	 Tools.closeTab(sKey);
					});
				$obj.find(".T-btn-saveApply").click(function(){
					if (!validator.form()) { return; }
					var searchData = {};
					searchData.name = $obj.find("[name=name]").val();
					searchData.mobileNumber = $obj.find("[name=mobileNumber]").val();
					searchData.maritalStatus = $obj.find("[name=maritalStatus]").val();
					searchData.idCard = $obj.find("[name=idCard]").val();
					searchData.businessNumber = $obj.find("[name=businessNumber]").val();
					searchData.code = $obj.find("[name=code]").val();
					searchData.incomeStream = $obj.find("[name=incomeStream]").val();
					searchData.purpose = $obj.find("[name=purpose]").val();
					searchData.paymentStream = $obj.find("[name=paymentStream]").val();
					searchData.collateral = $obj.find("[name=collateral]").val();
					searchData.remark = $obj.find("[name=remark]").val();
					searchData.applyMoney = $obj.find("[name=applyMoney]").val();
					$.ajax({
						url:KingServices.build_url("accountSetting/applyLoan","saveApplys"),
			            type: "GET",
			            data: {
			            	searchParam:JSON.stringify(searchData)
		            	},
						success:function(data){
							var result = showDialog(data);
							if(result){
								showMessageDialog($("#confirm-dialog-message"),data.message, function() {
									Tools.closeTab(sKey);
									accountSetting.accountSeList();
									});
							}
						}
					})
				});
			};
	exports.init = accountSetting.initModule;
}); 