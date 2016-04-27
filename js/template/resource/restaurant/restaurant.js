define(function(require, exports) {
    var menuKey = "resource_restaurant",
        listTemplate = require("./view/list"),
        rule = require("./restaurantRule"),
        addTemplate = require("./view/add"),
        updateTemplate = require("./view/update"),
        viewTemplate = require("./view/view"),
        tabId = "tab-" + menuKey + "-content";

    var restaurant = {
        searchData: false,
        $tab: false,
        $searchArea: false,
        $addLayer : "",
        $updateLayer : ""
    };

    restaurant.initModule = function() {
        restaurant.listRestaurant(0, "", 1);
    };

    restaurant.listRestaurant = function(page, name, status) {
        if (restaurant.$searchArea && arguments.length === 1) {
            // 初始化页面后，可以获取页面的参数
            name = restaurant.$searchArea.find("input[name=restaurant_name]").val(),
                status = restaurant.$searchArea.find('.T-status').find("button").data('value')
        }
        // 修正页码
        page = page || 0;

        $.ajax({
        	url:restaurant.url("listRestaurant","view"),
            type: "POST",
            data: {
                pageNo: page,
                name: name,
                status: status,
                sortType: 'auto'
            },
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    restaurant.searchData = {
                        pageNo: page
                    };
                    var restaurantList = data.restaurantList;
                    restaurantList = JSON.parse(restaurantList);
                    data.restaurantList = restaurantList;
                    var html = listTemplate(data);
                    Tools.addTab(menuKey, "餐厅管理", html);

                    restaurant.initList();
                    // 绑定翻页组件
                    laypage({
                        cont: restaurant.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                        pages: data.totalPage, //总页数
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                restaurant.listRestaurant(obj.curr - 1);
                            }
                        }
                    });
                }
            }
        });
    };

    //列表初始化
    restaurant.initList = function(data) {
        // 初始化jQuery 对象
        restaurant.$tab = $('#' + tabId);
        restaurant.$searchArea = restaurant.$tab.find('.T-search-area');

        //搜索栏状态button下拉事件
        restaurant.$tab.find('.T-status').on('click', 'a', function(event) {
            event.preventDefault();
            var $this = $(this);
            $this.closest('ul').prev().data('value', $this.data('value')).children('span').text($this.text());
            restaurant.listRestaurant(0);
        });

        //搜索按钮事件
        restaurant.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            restaurant.listRestaurant(0);
        });

        // 回车搜索
        restaurant.$tab.find('input[name=restaurant_name]').keyup(function(e) {
            if (e.which == 13 && !window.forbiddenError) { //e.which == 13键盘回车事件，
                restaurant.listRestaurant(0);
            }
        });

        //添加餐厅
        restaurant.$tab.find('.T-add').on('click', function(event) {
            event.preventDefault();
            restaurant.addRestaurant();
        });

        // 报表内的操作
        restaurant.$tab.find('.T-list').on('click', '.T-option', function(event) {
            event.preventDefault();
            var $that = $(this),id = $that.closest('tr').data('id');

            if ($that.hasClass('T-view')) {
                // 查看
                restaurant.viewRestaurant(id);
            } else if ($that.hasClass('T-update')) {
                // 编辑
                restaurant.updateRestaurant(id);
            } else if ($that.hasClass('T-delete')) {
                // 删除
                restaurant.deleteRestaurant(id);
            }
        });
    };

    //查看餐厅
    restaurant.viewRestaurant = function(id) {
        $.ajax({
        	url:restaurant.url("getRestaurantById","view"),
            type: "POST",
            data: {
                id: id
            },
            success: function(data) {
                var restaurantInfo = JSON.parse(data.restaurant);
                data.restaurant = restaurantInfo;
                var html = viewTemplate(data);
                viewRestaurantLayer = layer.open({
                    type: 1,
                    title: "查看餐厅",
                    skin: 'layui-layer-rim', //加上边框
                    area: '1190px', //宽高
                    zIndex: 1028,
                    content: html,
                    scrollbar: false, // 推荐禁用浏览器外部滚动条
                    success: function() {

                    }
                });
            }
        });
    };

    // 添加餐厅
    restaurant.addRestaurant = function(fn) {
        var html = addTemplate();
        restaurant.$addLayer = layer.open({
            type: 1,
            title: "新增餐厅",
            skin: 'layui-layer-rim', //加上边框
            area: '1190px', //宽高
            zIndex: 1028,
            content: html,
            scrollbar: false,
            success: function() {
                var $container = $(".T-add-container");
                //餐厅表单校验
                var validator = rule.check($container);
                var mealValidator;
                //初始化地区
				KingServices.provinceCity($container);
                restaurant.initStandard($container);

                //给提交按钮绑定事件 mealValidator validator
                $container.find(".T-saveAdd").click(function() {
                    restaurant.savaData("add",fn);
                });
            }
        });
    };

    //编辑餐厅
    restaurant.updateRestaurant = function(id) {
        $.ajax({
        	url:restaurant.url("getRestaurantById","view"),
            type: "POST",
            data: {
                id: id + ""
            },
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var restaurantInfo = JSON.parse(data.restaurant);
                    data.restaurant = restaurantInfo;
                    var html = updateTemplate(data);
                    restaurant.$updateLayer = layer.open({
                        type: 1,
                        title: "修改餐厅",
                        skin: 'layui-layer-rim', //加上边框
                        area: '1190px', //宽高
                        zIndex: 1028,
                        content: html,
                        scrollbar: false, // 推荐禁用浏览器外部滚动条
                        success: function() {
                            var $container = $(".T-update-container");

                            //初始化地区
                            if(data.restaurant.province != null){var provinceId = data.restaurant.province.id};
                            if(data.restaurant.city != null){var cityId = data.restaurant.city.id};
                            if(data.restaurant.district != null){var districtId = data.restaurant.district.id};
							KingServices.provinceCity($container,provinceId,cityId,districtId);
                            restaurant.initStandard($container);

                            //给提交按钮绑定事件 mealValidator validator
                            $container.find(".T-saveUpdate").click(function() {
                            	restaurant.savaData("update");
                            });
                        }
                    });
                }
            }
        });
    };

    //删除
    restaurant.deleteRestaurant = function(id) {
        showConfirmMsg($("#confirm-dialog-message"), "你确定要删除该条记录?", function() {
            $.ajax({
            	url:restaurant.url("deleteRestaurant","delete"),
                type: "POST",
                data: {
                    id: id + ""
                },
                success: function(data) {
                    var result = showDialog(data);
                    if (result) {
                        $(".restaurantList .restaurant-" + id + "").fadeOut(function() {
                            restaurant.listRestaurant(restaurant.searchData.pageNo);
                        });
                    }
                }
            });
        },function(){},"放弃","删除");
    };

    restaurant.savaData = function(option,fn){
    	var $container = $(".T-" + option + "-container");
    	var validator = rule.check($container);
    	if (!validator.form()) { return; }
       var mealValidator = rule.checkMeal($container.find(".restaurantStandardList"));
        if (mealValidator != undefined && !mealValidator.form()) { return; }

        var status = 0;
        if ($container.find(".restaurant-status").is(":checked") == true) {
            status = 1;
        }
        var form = $container.find('form').serialize() + "&status=" + status + "",
            formData = $container.find('form').serializeJson();

        var $this = $(this),
            restaurantStandardJsonAdd = [];
        var priceJsonTr = $container.find(".restaurantStandardList tbody tr:not(.deleted)");
        priceJsonTr.each(function(j) {
        	var id = priceJsonTr.eq(j).data("id");
        	if(id == undefined && id == null){
        		id = "";
        	}
            var restaurantJson = {
            	id : id + "",
                type: priceJsonTr.eq(j).find("select[name=type]").val(),
                price: priceJsonTr.eq(j).find("input[name=price]").val(),
                menuList: priceJsonTr.eq(j).find("input[name=menuList]").val(),
                remark: priceJsonTr.eq(j).find("input[name=remark]").val()
            };
            restaurantStandardJsonAdd.push(restaurantJson);
        })
        restaurantStandardJsonAdd = JSON.stringify(restaurantStandardJsonAdd);

        var method = "addRestaurant";
        var operation = "add";
        var data = form + "&restaurantStandardJsonAdd=" + encodeURIComponent(restaurantStandardJsonAdd) + "";
        var page = 0; 
        if(option == "update"){
        	var restaurantStandardJsonDel = [];
        	restaurantStandardJsonDelTr = $container.find(".restaurantStandardList tbody tr.deleted");
        	restaurantStandardJsonDelTr.each(function(i) {
	            var id = restaurantStandardJsonDelTr.eq(i).data("id");
	            var restaurantStandardJson = {
	                id: id + ""
	            };
	            if (id) {
	                restaurantStandardJsonDel.push(restaurantStandardJson);
	            }
	        });
	        restaurantStandardJsonDel = JSON.stringify(restaurantStandardJsonDel);
	        method = "updateRestaurant";
	         operation = "update"
	        data = form + "&restaurantStandardJsonAdd=" + encodeURIComponent(restaurantStandardJsonAdd) + "&restaurantStandardJsonDel=" + encodeURIComponent(restaurantStandardJsonDel);
	        page = restaurant.searchData.pageNo;
        }

        $.ajax({
            url:restaurant.url(method,operation),
            type: "POST",
            data: data,
            dataType: "json",
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    console.log(formData)
                	if(option == "add") {
                		layer.close(restaurant.$addLayer);
                	} else if(option == "update"){
                		layer.close(restaurant.$updateLayer);
                	}
                    showMessageDialog($("#confirm-dialog-message"), data.message,function(){
                        if (typeof fn === "function") {
                            data.restaurant = JSON.parse(data.restaurant);
                            formData.id = data.restaurant.id;
                            fn(formData);
                        }else{
                            restaurant.listRestaurant(page);
                        }
                    });
                }
            }
        });
    };

    //给餐标列表新增按钮绑定事件
    restaurant.initStandard = function($obj) {
        $obj.find(".T-standard-add").click(function() {
            var html = "<tr>" +
                "<td><select name=\"type\"><option value=\"早餐\">早餐</option><option value=\"午餐\">午餐</option><option value=\"晚餐\">晚餐</option></select></td>" +
                "<td class=\"price\"><div data-index=\"1\" class=\"clearfix div-1\" style=\"margin-top:2px\"><input name=\"price\" maxlength=\"9\" type=\"text\" class=\"col-sm-12 F-float F-money\" style=\"margin-right:10px;\" /></div></td>" +
                "<td><div data-index=\"1\" class=\"clearfix div-1\" style=\"margin-top:2px\"><input name=\"menuList\" type=\"text\" maxlength=\"1000\" class=\"col-sm-12\" /></div></td>" +
                "<td><div data-index=\"1\" class=\"clearfix div-1\" style=\"margin-top:2px\"><input name=\"remark\" type=\"text\" class=\"col-sm-12\" maxlength=\"1000\"/></div></td>" +
                "<td style=\"width:90px\"><a class=\"T-standard-delete\">删除</a></td>" +
                "</tr>";
            $obj.find(".restaurantStandardList tbody").append(html);
            $(window).trigger('resize');

            //给餐标列表删除按钮绑定事件
            $obj.find(".T-standard-delete").click(function() {
                var tr = $(this).parent().parent();
                tr.fadeOut(function() {
                    $(this).remove();
                });
            });
        });

        //给餐标列表删除按钮绑定事件
        $obj.find(".T-standard-delete").click(function() {
            console.log("delete");
            var tr = $(this).parent().parent();
            var standardId = $(this).closest('tr').data("id");
            if (standardId != null && standardId != "") {
                tr.addClass("deleted");
                tr.fadeOut(function() {
                    $(this).hide();
                });
            } else {
                tr.fadeOut(function() {
                    $(this).remove();
                });
            }
        });
    };

    restaurant.url = function(method,operation){
		var url = ''+APP_ROOT+'back/restaurant.do?method='+method+'&token='+$.cookie('token')+'&menuKey='+menuKey+'&operation='+operation+'';
		return url;
	};

    exports.init = restaurant.initModule;
    exports.addRestaurant = restaurant.addRestaurant;
});
