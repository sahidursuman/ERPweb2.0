/**
 * 游客管理验证  
 *
 */
define(function(require, exports) {	
var rule = {
		
		//游客管理验证 
		checktouristGroup:function($obj){  
			this.$touristGroupContainer = $obj;

			var validator = $obj.formValidate(this.gettTouristGroupSettings());  
			return validator;
		},

		updateTouristGroupCheckor : function(validator)  {
			validator.update(this.gettTouristGroupSettings());

			return validator;
		},

		gettTouristGroupSettings: function()  {
			var $obj = this.$touristGroupContainer,
				settings = [
				 {
					$ele: $obj.find('input[name="lineProductIdName"]'),
					$valObj: $obj.find('input[name="lineProductId"]'),
					rules: [{
						type: 'null',
						errMsg: '线路产品不能为空'
					}]
				},

			     {	//出游日期   
					$ele: $obj.find('input[name="startTime"]'),
					rules: [
				        {
				        	type: 'null', 
				        	errMsg: '出游日期不能为空'
				        }
				    ]
				},{
					$ele: $obj.find('input[name="fromPartnerAgency"]'),
					$valObj: $obj.find('input[name="fromPartnerAgencyId"]'),
					rules: [{
						type: 'null',
						errMsg: '客户来源不能为空'
					}]
				},  

				{	//联系人
					$ele: $obj.find('input[name="partnerAgencyNameList"]'),
					$valObj: $obj.find('input[name="partnerAgencyContactId"]'),  // 默认是undefined，用于autocomplete之类的插件
					rules: [
				        {
				        	type: 'null',    
				        	errMsg: '同行联系人不能为空'       
				        }
				    ]
				},{//已收  
	    	      
	    	  		$ele: $obj.find('input[name="payedMoney"]'), 
    		  		rules: [
    		  			{
	    		  			type:'float',
	    		  			errMsg: '已收数字不合法'
    		  			}  
    		 		]
	    	      },{//现收
	    	  		$ele: $obj.find('input[name="currentNeedPayMoney"]'),   
    		  		rules: [
    		  			{
	    		  			type:'float',
	    		  			errMsg: '现收数字不合法'
    		  			}
    		 		]
	    	      },{//大人--//新增费用项目验证
						$ele: $obj.find('input[name="adultCount"]'),   
						rules: [
							{
				  			type:'positive-float',
				  			errMsg: '大人数量必须为正数'
							},{
					  			type:'null',
					  			errMsg: '大人数量不能为空'
							}
						]
					 },{//大人--//新增费用项目验证
							$ele: $obj.find('input[name="adultPrice"]'),   
							rules: [
								{
					  			type:'positive-float',
					  			errMsg: '大人单价不合法'  
								},{
						  			type:'null',
						  			errMsg: '大人单价不能为空'  
								}
							]
						 },{//小孩
							$ele: $obj.find('input[name="childCount"]'),   
							rules: [
								{
					  			type:'positive-float',
					  			errMsg: '小孩数量必须为正数'
								}
							]   
				    },{//小孩
						$ele: $obj.find('input[name="childPrice"]'),   
						rules: [
							{
				  			type:'positive-float',
				  			errMsg: '小孩单价不合法'
							}
						]
			        },{//小孩
						$ele: $obj.find('input[name="count"]'),   
						rules: [
							{
				  				type:'float',
			  					errMsg: '其他费用的数量的格式不正确'
							}
						]
			         },{//小孩
							$ele: $obj.find('input[name="price"]'),   
							rules: [
								{
					  			type:'float',
					  			errMsg: '其他费用单价不合法'
								}
							]
				    },{//姓名
						$ele: $obj.find('input[name="name"]'),   
						rules: [
							{
					  			type:'null',
					  			errMsg: '添加成员姓名不能为空'
							}
						]
			        },{//手机号   
						$ele: $obj.find('input[name="mobileNumber"]'),   
						rules: [
							{
					  			type:'mobile-phone',
					  			errMsg: '手机号码或证件号码必填一项'
							},{
					  			type:'null',
					  			errMsg: '手机号码不能为空'
							}
						]
			         },{//接待日期
						$ele: $obj.find('input[name="receptionTime"]'),   
						rules: [
							{
					  			type:'null',
					  			errMsg: '接待日期不能为空'
							}
						]
			         },{//地点
							$ele: $obj.find('input[name="receptionAddress"]'),   
							rules: [
								{
					  			type:'null',
					  			errMsg: '地点不能为空'
								}
							]
				    },{//送离日期
						$ele: $obj.find('input[name="sendTime"]'),   
						rules: [
							{
					  			type:'null',
					  			errMsg: '送离日期不能为空'
							}
						]
			         },{//地点
							$ele: $obj.find('input[name="sendAddress"]'),   
							rules: [  
								{
					  			type:'null',
					  			errMsg: '地点不能为空'  
								}
							]
				    }    
			];

			$obj.find('.addTouristTbody').children().each(function() {
				var $that = $(this);

				if ($that.find('select[name="idCardType"]').val() === '0')  {
					settings.push({//证件号
						$ele: $that.find('input[name="idCardNumber"]'),   
						rules: [
							{
				  			type:'id',
				  			errMsg: '手机号码或证件号码必填一项'
							}
						]
				    });
				}
			});
			
			return settings;
		},
	    //新增同行客户联系人验证
		checkdPartnerManager:function($checkdPartnerManagerObj){
			var validatorManager=$checkdPartnerManagerObj.formValidate([  
  	    	       {//联系人姓名
	  	    	    	$ele: $checkdPartnerManagerObj.find('input[name="managerName"]'),
	  	    	    	rules: [
	      	    	        {
	      	    	        	type: 'null', 
	      	    	        	errMsg: '联系人姓名不能为空'
	      	    	        }
	  	    	        ]
	    	       },{//联系人电话
	  	    	    	$ele: $checkdPartnerManagerObj.find('input[name="managerMobile"]'),  
	  	    	    	rules: [
	      	    	        {
	      	    	        	type: 'null', 
	      	    	        	errMsg: '联系人电话不能为空'
	      	    	        }, {
	      	    	        	type: 'mobile-phone', 
	      	    	        	errMsg: '联系人电话格式不正确'
	      	    	        }
	  	    	        ]
	    	      },{//所属部门
	  	    	    	$ele: $checkdPartnerManagerObj.find('input[name="departmentName"]'),  
	  	    	    	rules: [
	      	    	        {
	      	    	        	type: 'null', 
	      	    	        	errMsg: '所属部门不能为空'
	      	    	        }
	  	    	        ]
	    	      },{//所属职位
	  	    	    	$ele: $checkdPartnerManagerObj.find('input[name="dutyName"]'),  
	  	    	    	rules: [
	      	    	        {
	      	    	        	type: 'null', 
	      	    	        	errMsg: '所属职位不能为空'  
	      	    	        }
	  	    	        ]
	    	      }
 
  	    	  ]);
			return validatorManager;
		}
	}  
	return rule;
});
