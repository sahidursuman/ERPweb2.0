define(function(require, exports) {
	var menuKey = "system_company",
		infoTemplate = require("./view/info"),
		rule = require("./rule");
	
	var company = {
		imgCount : 0 //需要上传的图片数量
	};	

	company.initModule = function() {
		company.edit();
	};
	company.edit = function(){
		$.ajax({
			url:APP_ROOT+'travelAgency.do?method=findTravelAgency&token='+$.cookie('token'),
			type:"POST",
			data:"",
			success:function(data){
				var result = showDialog(data);
				if (result) {
					var imgUrl = data.ERP_IMG_URL;
					data = JSON.parse(data.travelAgency);
					//图片路径设置
					var companyLogo = data.companyLogo,
						companySeal = data.companySeal,
						financialSeal = data.financialSeal;
					if(companyLogo != null && companyLogo != "") {
						data.companyLogo = imgUrl + companyLogo;
					}
					if(companySeal != null && companySeal != "") {
						data.companySeal = imgUrl + companySeal;
					}
					if(financialSeal != null && financialSeal != "") {
						data.financialSeal = imgUrl + financialSeal;
					}
					var html = infoTemplate(data);
					Tools.addTab(menuKey,"公司资料",html);

					$tab = $("#tab-" + menuKey + "-content");
					$tab.find(".form-group").css("height","40px");
					var validator = rule.check($tab);
					company.initUpload($tab);
					//省市区事件
					if(data.province != null )var provinceId = data.province.id;
					if(data.city != null )var cityId = data.city.id;
					if(data.district != null ) var districtId = data.district.id;
					KingServices.provinceCity($tab,provinceId,cityId,districtId);
					
					//移除选择图片
					$tab.find(".remove").on("click",function(){
						var $container = $(this).closest('.T-imgContainer'),
							$originalImg = $container.find(".T-original");
						$container.data("url","");
						if($originalImg){
							$originalImg.removeClass('hidden');
						}
						company.imgCount -= 1;
					});

					//关闭tab
					$tab.find(".T-close-company").click(function(){
		                Tools.closeTab(menuKey);
			        });

					//保存
					$tab.find(".T-save-company").on("click",function(){
						if(!validator.form()){return false;}
						if(company.imgCount == 0){
							company.submitForm($tab);
						} else {
							company.upload($tab);
						}
						
					});
				}
			}
		});
	};

	//初始化图片选择
	company.initUpload = function($tab){
		$tab.find('.T-upimg').ace_file_input({
			style:'well',
			btn_choose:'选择图片',
			btn_change:null,
			droppable:true,
			thumbnail:'large'
		}).on("change",function(){
			var $div = $(this).closest('div');
			if(!$div.data("needSubmit")){
				company.imgCount += 1;
				$div.data("needSubmit",true);
			}
			$div.find(".T-original").addClass('hidden');
		});
	};

	//单个图片上传
	company.uploadImg = function($obj){
		var eleId = $obj.data("id");
	    $.ajaxFileUpload({
	        url:'huochaitou/base.do?method=uploadImage',//处理图片脚本
	        secureuri :false,
	        fileElementId : eleId,//file控件id
	        dataType : 'json',
	        async: false,
	        success : function(data){
	        	$obj.data("needSubmit",false);
	        	$obj.data("url",data.url);
	        	$obj.closest('div').find(".T-original").addClass('hidden');
	        	company.imgCount -= 1;
	        	if(company.imgCount == 0){
					company.submitForm($("#tab-" + menuKey + "-content"));
				}
	        },
	        error: function(data, status, e){
	            alert(e);
	        }
		});
	};

	company.upload = function($tab){
		var $imgContainer = $tab.find('.T-imgContainer');
		for(var i = 0; i < $imgContainer.length; i++){
			var $obj = $imgContainer.eq(i);
			if($obj.data("needSubmit")){
				company.uploadImg($obj);
			}
		}
	};

	//保存数据
	company.submitForm = function($tab){
		var form = $tab.find(".T-form").serialize(),
			$imgContainer = $tab.find('.T-imgContainer');
		var companyLogo = $imgContainer.eq(0).data("url"),
		 	companySeal = $imgContainer.eq(1).data("url"),
		 	financialSeal = $imgContainer.eq(2).data("url");
		if(companyLogo){
			form += "&companyLogo=" + companyLogo;
		}
		if(companySeal){
			form += "&companySeal=" + companySeal;
		}
		if(financialSeal){
			form += "&financialSeal=" + financialSeal;
		}
		$.ajax({
			url:APP_ROOT+'travelAgency.do?method=updateTravelAgency&token='+$.cookie('token'),
			type:"POST",
			data:form,
			success:function(data){
				var result = showDialog(data);
				if(result){
					showMessageDialog(data.message,function(){
						company.edit();
					});
				}
			}
		});
	};

	exports.init = company.initModule;
})