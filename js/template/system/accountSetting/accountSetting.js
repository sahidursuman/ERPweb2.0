define(function(require, exports) {
	var rule = require("./rule"),
		menuKey = "accountSetting",
		listTemplate = require("./view/list"), 
		borrowinglate = require("./view/borrowing"),
		applicationplate = require("./view/application"),
		newPhonelate = require("./view/newPhone"),
		applylate = require("./view/apply"),
		solutionlate = require("./view/solution"),
		addPhonelate = require("./view/addPhone"),
		updateApplylate = require("./view/updateApply"),
		tabId = "tab-" + menuKey + "-content";
	var sKey = menuKey+"-loanApplication";
	var cKey = menuKey+"-updatelication";
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
				var $tab = $('#tab-'+menuKey+'-content');
				accountSetting.initList();

				// 绑定翻页组件
				laypage({
					cont: $tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
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
		/**
		 * [BorrowingRecord 借款拨款记录]
		 * @param {[type]} pageNo [description]
		 */
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
					verifyCode:'verifyCode',
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
				accountSetting.updateBindPhoneNum(mobile);
			});
			//添加绑定的新号码
			accountSetting.$tab.find(".T-btn-addPhone").click(function(){
				accountSetting.addPhone();
			});
			//借款申请
			var $objAccount = $('.T-accountSetList');
				$objAccount.find(".T-btn-apply").click(function(){
				accountSetting.loanApplication(0);
			});
			//编辑借款申请
			var $objMainSet = $('#basicSet-accountObj');
				$objMainSet.find(".T-update").click(function(){
				var $that=$(this),$tr=$that.closest('tr');
				var id = $tr.attr('data-applyId'),
					applyStatus=$tr.attr('data-applyStatus');
					accountSetting.updatelication(id, applyStatus);
			});

			//借款拨款申请list数据
			accountSetting.BorrowingRecord(0);
		};

		//绑定手机号
		/**
		 * [updateBindPhoneNum 绑定手机号]
		 * @param  {[type]} mobile     [号码]
		 * @param  {[type]} verifyCode [验证码]
		 * @return {[type]}            [description]
		 */
		accountSetting.updateBindPhoneNum = function(mobile,verifyCode){
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
					var $objApplic = $('#T-applicationMain');
						//收不到验证的解决方法
						$objApplic.find('.T-solution').click(function() {
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
									var $objSolution = $("#T-account-solutionMain");
										$objSolution.find('.T-closeSolution').click(function() {
										layer.close(solutionLayer);
									});
								}
							});
						});
						$objApplic.find('#send').click(function() {
							var searchData = {};
							searchData.mobile = $objApplic.find("[name=mobile]").val();
						$.ajax({
							url:KingServices.build_url("accountSetting/applyLoan","sendMessage"),
							type: "GET",
							showLoading:false,
							data: {
								searchParam:JSON.stringify(searchData)
							},
							success:function(){
								$objApplic.find('.T-newPhone').off('click').on('click',function(){
								var searchData = {};
								searchData.mobile = $objApplic.find("[name=mobile]").val();
								searchData.verifyCode = $objApplic.find("[name=verifyCode]").val();
								$.ajax({
									url:KingServices.build_url("accountSetting/applyLoan","checkMobile"),
									type: "GET",
									data: {
										searchParam:JSON.stringify(searchData)
									},
									success:function(data){
										var result = showDialog(data);
											if (result) {
											showMessageDialog(data.message, function() {
											accountSetting.newPhoneChange();
											layer.close(newPhoneLayer);
											});
										}
									}
								})
							});	
							}
						});
						var times=60;
						var timer=null;
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

		//新添默认新号码
		/**
		 * [addPhone 新添默认新号码]
		 */
		accountSetting.addPhone = function(){
			$.ajax({
				url:KingServices.build_url("accountSetting/applyLoan","findMobile"),
				type: "POST",
			})
			.done(function(data) {
				var addPhoneLayer = layer.open({
					type: 1,
					title:"绑定新手机",
					skin: 'layui-layer-rim',
					area: '450px', 
					zIndex:1028,
					content: addPhonelate(data),
					scrollbar: false
					});
				var $objOther = $(".applicationMain-other");
					$objOther.find('#sended').click(function() {
						var searchData = {};
							searchData.mobile = $objOther.find("[name=mobile]").val();
							$.ajax({
								url:KingServices.build_url("accountSetting/applyLoan","sendMessage"),
								type: "GET",
								showLoading:false,
								data: {
								searchParam:JSON.stringify(searchData)
								},
								success:function(){
									$objOther.find('.T-newChangePhone').off('click').on('click',function(){
									var searchData = {};
									searchData.mobile = $objOther.find("[name=mobile]").val();
									searchData.verifyCode = $objOther.find("[name=verifyCode]").val();
									$.ajax({
										url:KingServices.build_url("accountSetting/applyLoan","saveMobile"),
										type: "GET",
										data: {
											searchParam:JSON.stringify(searchData)
										},
										success:function(data){
											var result = showDialog(data);
											if (result) {
												showMessageDialog(data.message, function() {
												layer.close(addPhoneLayer);
												accountSetting.accountSeList();
											});
											}
										}
									})
								});
								}
							});
							var times=60;
							var timer=null;
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
			})
		}

		// 更换新手机号
		/**
		 * [newPhoneChange 更换新手机号]
		 * @return {[type]}[description]
		 */
		accountSetting.newPhoneChange = function(){
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
					var $objNewP = $('#applicationMainNewP');
					var searchData = {};
						searchData.mobile = $objNewP.find("[name=mobile]").val();
						searchData.verifyCode = $objNewP.find("[name=verifyCode]").val()
						$objNewP.find('#sended').click(function() {
							var searchData = {};
								searchData.mobile = $objNewP.find("[name=mobile]").val();
								$.ajax({
								url:KingServices.build_url("accountSetting/applyLoan","sendMessage"),
								type: "GET",
								showLoading:false,
								data: {
									searchParam:JSON.stringify(searchData)
								},
								success:function(){
									$objNewP.find('.T-newChangePhone').click(function() {
										var searchData = {};
										searchData.mobile = $objNewP.find("[name=mobile]").val();
										searchData.verifyCode = $objNewP.find("[name=verifyCode]").val();
										$.ajax({
											url:KingServices.build_url("accountSetting/applyLoan","saveMobile"),
											type: "GET",
											data: {
												searchParam:JSON.stringify(searchData)
											},
											success:function(data){
												var result = showDialog(data);
												if (result) {
													showMessageDialog(data.message, function() {
													layer.close(changePhoneLayer);
													accountSetting.accountSeList();
													});
												}
											}
										})
									});
									}
								});
								var times=60;
								var timer=null;
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

		
		/**
		 * [loanApplication 申请借款]
		 * @return {[type]} [description]
		 */
		accountSetting.loanApplication = function(){
			var html = applylate();
				Tools.addTab(sKey, "申请借款", html);
				var $objApply = $('.fuelux-apply');
				//表单验证
				var $form = $(".T-form");
				var validator=rule.check($form);

				var $price=$objApply.find('[name=applyMoney]');
					Tools.inputCtrolFloat($price);
					$objApply.find(".T-btn-cancel").click(function(){
						Tools.closeTab(sKey);
						});
					$objApply.find(".T-btn-saveApply").click(function(){
						if (!validator.form()) { return; }
						accountSetting.saveApplication($objApply);
					});
			};

		/**
		 * [updatelication 编辑申请借款]
		 * @param  {[type]} id [description]
		 * @return {[type]}    [description]
		 */
		accountSetting.updatelication = function(id,applyStatus){
				$.ajax({
					url:KingServices.build_url("accountSetting/applyLoan","edit"),
					type: "POST",
					data: {
						id:id
					},
					success:function(data){
						var result = showDialog(data);
						if(result){
							data.applyStatus=applyStatus;
							Tools.addTab(cKey, "编辑申请借款",  updateApplylate(data));
							//表单验证
						var $form = $(".T-form");
						var validator=rule.check($form);			
						var $objUpdate = $('#updateApplyMain');
						var $price=$objUpdate.find('[name=applyMoney]');
							Tools.inputCtrolFloat($price);
						$objUpdate.find(".T-btn-cancel").click(function(){
						 	 Tools.closeTab(cKey);
							});
						$objUpdate.find(".T-btn-UpdateSaveApply").click(function(){
							if (!validator.form()) { return; }
							accountSetting.saveApplication($objUpdate);
						});
						}
					}
				});
			};

		/**
		 * [saveApplication 保存申请借款信息]
		 * @param  {[type]} $obj [父容器对象]
		 * @return {[type]}      [description]
		 */
		accountSetting.saveApplication=function($obj){
			var searchData = {};
			searchData.id = $obj.find("[name=id]").val();
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
						showMessageDialog(data.message, function() {
							Tools.closeTab(sKey);
							accountSetting.accountSeList();
							});
					}
				}
			})
		};
	exports.init = accountSetting.initModule;
}); 