/*
 * 
 * 表单验证使用
 * By weiguiyun 2015-9-23
 *
 * 依赖jquery-ui
 * 
 * Copyright (c) 2015 
 * Licensed under the MIT license.
 */

/**
 * 举例：
 * // 设置表单验证
 * var check = $('.busCompanyMainForm').formValidate(
 * [
 * 	{
 * 		$ele: $('input[name="licenseNumber"]'), 
 * 		$valObj: $('input[name="realvalue"]'),  // 默认是undefined，用于autocomplete之类的插件
 * 		rules: [
 * 			{type:'int', errMsg: '不是数字'}
 * 		]
 * 	}
 * ]);
 *
 * // 提交时校验表单
 * check.form();
 */

+function($) {
	'use strict';

	var Validate = function(settings) {
		this.settings = settings;
		this.setStyle();
	}, errorLabel = '<label class="feild-label feild-error-tip"><i class="fa fa-exclamation"></i></label>';
 
	var FOCUS_OUT_EVENT = 'focusout.form-validation.api';

	Validate.prototype.setStyle = function() {
		var $formStyle = $('#form-style');

		if (!$formStyle.length)  {
			$('body').append('<style id="form-style">'
				+ '.feild-error-tip {position:absolute;  color: #d25b47; cursor:pointer; z-index: +1;}'
				+ '.input-error {    padding-right: 20px; border-color: #d25b47 !important; }'
				+ '.input-success {    padding-right: 4px;}'
				+ ' #form-validation-tip-area > .tooltip > .tooltip-inner { background-color: #d25b47;}   #form-validation-tip-area > .tooltip > .tooltip-arrow{border-top-color: #d25b47;}'
				+ '.feild-relative { position: relative !important; }'
				+ '</style>')
			.append('<div id="form-validation-tip-area"></div>');     
		}
	};

	Validate.prototype.update = function(settings) {
		if (this.settings) {
			this.inActive(this.settings);
		}

		this.settings = settings;
		this.active();
	};

	Validate.prototype.active = function() {
		for (var i = 0, len = this.settings.length;i < len; i++)  {
			this.activeOnEle(this.settings[i]);
		}
	};

	Validate.prototype.inActive = function() {
		for (var i = 0, len = this.settings.length;i < len; i++)  {
			this.inActiveOnEle(this.settings[i]);
		}
	};

	// 日期校验回调，用于触发校验效果
	function changeDateCallBack(event) {
		$(this).trigger(FOCUS_OUT_EVENT);
	}

	Validate.prototype.activeOnEle = function(setting)  {
		var that = this;
		if (setting.$ele)  {
			$(setting.$ele).unbind(FOCUS_OUT_EVENT)
				.bind(FOCUS_OUT_EVENT, '', function(event) {
					var $that = $(this), data = $that.val(), res;
					if (!!setting.$valObj && setting.$valObj.length)  {
						setTimeout(function() {
							// 为了让设置值之后再读取
							data = $that.nextAll('input').eq(0).val();
							dataTask();
						}, 0);
					} else {
						setTimeout(function(){
							data = $that.val();
							dataTask();
						}, 0);
					}
					
					function dataTask() {						
						var res = that.task(data, setting.rules, $that);

						if (res !== true)  {
							that.setMessage($that, res);
						} else {
							that.setMessage($that, false);
						}
					}
				});
 
			if (setting.$ele.hasClass('datepicker'))  {
				// 时间插件触发处理
				setting.$ele
				.off('changeDate', changeDateCallBack)
				.on('changeDate', changeDateCallBack);
			} else if (setting.$ele.hasClass('ui-autocomplete-input') || setting.$ele.hasClass('bind-change'))  {
				// 自动填充处理
				setting.$ele
				.off('change.form-validation.api')
				.on('change.form-validation.api', function(){ 
						setTimeout(function() {
							$(this).trigger(FOCUS_OUT_EVENT);
						}, 0);
					}
				);
			}

			if (setting.$valObj && setting.$valObj.length)  {
				setting.$valObj.each(function() {
					var $that = $(this);
					
					if ($that.prevAll('.bind-change').length) {
						$that.on('change', function(event) {
							event.preventDefault();
							$(this).prevAll('.bind-change').trigger('change.form-validation.api');
						});
					}
				});
			}

		}
		
	};

	Validate.prototype.inActiveOnEle = function(setting) {
		if (setting.$ele)  {
			var $label = $(setting.$ele).unbind(FOCUS_OUT_EVENT)
						.removeClass('input-error').next();
			if ($label && $label.hasClass('feild-error-tip'))  {
				$label.remove();
			}
		}
	}

	Validate.prototype.task = function(data, rules, $elem) {
		var len = rules.length;

		if (len) {
			for (var i = 0, canNull, res, cmpVal; i < len; i ++)  {
				res = false;
				canNull = true;  //暂无意义

				// 清理
				data = data.trim();
				/**
				 * 规则分为两类：是否为空，数据类型
				 * @param  {[string]} rules[i].type 规则类型
				 * @return {string}               校验失败的提示信息
				 */
				switch(rules[i].type) { 
			
			       case 'KongGe': 	//不能为空格  
					if (!!data && !/^\s*$/g.test( data )) {
						res = rules[i].errMsg;
					}
				    break;
				
				    case 'NoNumber': 	//非负数   
						if (!!data && !/^\d+(\.{0,1}\d+){0,1}$/.test( data )) {
							res = rules[i].errMsg;
						}
					    break;

					case 'null': // 不能为空
						if (data === '' || data === undefined || data === null)  {
							res = rules[i].errMsg;
						}
						canNull = false;	//不能为空
						break;
					case 'int': 	// 整数
						if (!!data && !/^-?\d+$/.test( data )) {
							res = rules[i].errMsg;
						}
						break;
					case 'positive-int': 	// 正整数
						if (!!data && !/^[1-9]\d*$/.test( data )) {
							res = rules[i].errMsg;
						}
						break;
					case 'nonnegative-int': 	// 非负整数
						if (!!data && !/^\d+$/.test( data )) {
							res = rules[i].errMsg;
						}
						break;
					case 'float':	// 浮点型
						if (!!data && !/^-?(\d*\.)?\d+$/.test( data )) {
							res = rules[i].errMsg;
						}
						break;
					case 'positive-float2':	// 正浮点型
					case 'nonnegative-float': 	// 非负数
						if (!!data && (isNaN( data ) || data < 0)) {
							res = rules[i].errMsg;
						}
						break;
					case 'positive-float':	// 正浮点型
						if (!!data && (isNaN( data ) || data <= 0)) {
							res = rules[i].errMsg;
						}
						break;

					case 'eq': 			// 等于
						cmpVal = $elem.data('eq');

						if (!!data && data !== cmpVal) {
							res = rules[i].errMsg;
						}
						break;
					case 'ne': 			// 不等于
						cmpVal = $elem.data('ne');

						if (!!data && data === cmpVal) {
							res = rules[i].errMsg;
						}
						break;
					case 'gt': 			// 大于（仅数字）
						cmpVal = $elem.data('gt');

						if (!!data && (isNaN(cmpVal) || isNaN(data) || data <= cmpVal)) {
							res = rules[i].errMsg;
						}
						break;

					case 'ge': 			// 大于等于（仅数字）
						cmpVal = $elem.data('ge');

						if (!!data && (isNaN(cmpVal) || isNaN(data) || data < cmpVal)) {
							res = rules[i].errMsg;
						}
						break;
					case 'lt': 			// 小于（仅数字）
						cmpVal = $elem.data('lt');

						if (!!data && (isNaN(cmpVal) || isNaN(data) || data >= cmpVal)) {
							res = rules[i].errMsg;
						}
						break;

					case 'le': 			// 小于等于（仅数字）
						cmpVal = $elem.data('le');

						if (!!data && (isNaN(cmpVal) || isNaN(data) || data > cmpVal)) {
							res = rules[i].errMsg;
						}
						break;
					case 'mobile-phone': // 手机号码
						if (!!data && !/^1[34587]\d{9}$/.test( data )) {
							res = rules[i].errMsg;
						}
						break;
					case 'landline':	// 固定电话
						if (!!data && !/^0[1-9]\d{1,2}-?\d{7,8}(-\d+)?$/.test(data)) {
							res = rules[i].errMsg;
						}
						break;
					case 'phone-num':	// 固定电话或者手机号码
						if (!!data && !/^(1[34587]\d{9})|(0[1-9]\d{1,2}-?\d{7,8})$/.test(data)) {
							res = rules[i].errMsg;
						}
						break;
					case 'id': 	//身份证
						if (!!data && !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(data))  {
							res = rules[i].errMsg;
						}
						break;
					case 'passport-id':  //护照
						if (!!data && !/^(P\d{7})|(G\d{8})$/.test( data )) {
							res = rules[i].errMsg;
						}
						break;
					case 'plate-num': 	// 车牌号
						if (!!data && !/^[\u4e00-\u9fa5|WJ]{1}[A-Z0-9]{6}$/.test( data )) {
							res = rules[i].errMsg;
						}
						break;
					case 'guide-id': 	// 导游证
						if (!!data && !/^(D|d)-?\d{4}-?\d{6}$/.test( data ))  {
							res = rules[i].errMsg;
						}
						break;
					case 'email': 		// 邮箱地址
						if (!!data && !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( data )) {
							res = rules[i].errMsg;
						}
						break;
					default:
						break;
				}

				if (!!res)  {		//校验到错误
					return res;
				}
			}
		}

		return true;
	};

	Validate.prototype.setMessage = function($feild, msg)  {
		var $label;
		if (msg)  {
			// get error message
			$label = $feild.addClass('input-error').removeClass('input-success').next();
			if ($label.hasClass('feild-label'))  {
				// label is exist
				$label.data('original-title', '').prop('title', msg).tooltip('fixTitle');
			} else {
				// append error tip
				var $parent = $feild.parent().addClass('feild-relative'),
					$errorLabel = $(errorLabel).attr('title', msg).tooltip({ container: "#form-validation-tip-area"}).insertAfter($feild),
					top = $feild.position().top + ($feild.outerHeight() - $errorLabel.height()) / 2,
					right = $parent.outerWidth() - $feild.position().left - $feild.outerWidth() + 5;

				$errorLabel.css(
					{
						'top' : (top +'px'),   //2.5 is for margin-bottom in label
						'right': (right + 'px')
					});
			}
		} else {
			$label = $feild.removeClass('input-error').addClass('input-success').next();
			if ($label.hasClass('feild-label'))  {
				$label.remove();
			}
		}
	};

	Validate.prototype.form = function() {
		var res = true;

		for (var i = 0, len = this.settings.length, tmp;i < len; i++)  {
			tmp = this.settings[i];

			for (var j = 0, jLen = tmp.$ele.length, $jTmp, data; j < jLen; j++)  {
				$jTmp = tmp.$ele.eq(j);

				data = $jTmp.val();
				
				if (!!tmp.$valObj && tmp.$valObj.length > j)  {
					data = tmp.$valObj.eq(j).val();
				}
				
				if (((this.validateHiddenObject && $jTmp.closest('body').length) || (!this.validateHiddenObject && $jTmp.is(':visible')))
				  && this.task(data, tmp.rules, $jTmp) !== true) {
					/**
					 * visible,用于排除被删除或者被隐藏的元素
					 */
					
					if (this.validateHiddenObject && typeof this.hiddenFun === 'function')  {
						this.hiddenFun($jTmp);
					}

					setTimeout(function() {
						$jTmp.trigger(FOCUS_OUT_EVENT).focus();
					}, 200);
					res = false;
					break;
				}
			}

			if (!res) {	//验证失败，退出外层循环
				break;
			}
		}

		return res;
	};

	/**
	 * 设置校验隐藏元素及校验后调用的方法
	 * @param  {Boolean} enable    true: 要校验隐藏的元素，false：不校验
	 * @param  {function} hiddenFun 校验失败之后需要调用的方法
	 * @return {object}           校验对象
	 */
	Validate.prototype.validateHidden = function(enable, hiddenFun) {
		this.validateHiddenObject = !!enable;
		this.hiddenFun = hiddenFun;
		return this;
	};

	$.fn.formValidate = function(settings)  {
		var validate = new Validate(settings);
		validate.validateHiddenObject = false;
		validate.active();

		return validate;
	};

	$.fn.toggleTip = function(msg)  {
		return this.each(function() {
			var $that = $(this),
				validate = new Validate();
				
			validate.setStyle();
			validate.setMessage($that, msg);
		});
	}

}(window.jQuery);