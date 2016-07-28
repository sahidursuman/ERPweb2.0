define(function(require, exports) {
    var listTemplate = require('./view/list'),
        listMainTemplate = require('./view/listMain'),
        bindCompanyTemplate = require('./view/bindCompany');

    var $tab = '';
    var binding = {
        shortName: IndexData.userInfo.travelAgencyShortName
    };

    binding.initModule = function () {
        binding.listMain();
    };

    binding.listMain = function () {
        Tools.addTab('binding','绑定车队',listMainTemplate());
        $tab = $('#tab-binding-content');
        binding.listMain_event();
        binding.list();
    };

    binding.listMain_event = function () {
        $tab.find('.T-search').on('click', function () {
            binding.list();
        });
        $tab.find('.T-busCompanyList').on('click', '.T-binding', function () {
            var $this = $(this),
                $tr = $this.closest('tr'),
                id = $tr.data('id'),
                name = $tr.data('name');
            binding.bindCompany(id, name);
        });
    };

    binding.list = function (page) {
        var searchData = binding.getSearchData();
        searchData.pageNo = page || 0;
        $.ajax({
            url: KingServices.build_url_bus('bindAccount','findCompanyList'),
            type: 'POST',
            data: {
                travelAgency: IndexData.userInfo.travelAgencyShortName,
                BUS_API_SECRECT_KEY: IndexData.userInfo.BUS_API_SECRECT_KEY,
                searchData: JSON.stringify(searchData)
            },
            success: function (data) {
                $tab.find('.T-busCompanyList').html(listTemplate(data));

                // 绑定翻页组件
                laypage({
                    cont: $tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                    pages: data.totalPage, //总页数
                    curr: (page + 1),
                    jump: function(obj, first) {
                        if (!first) {  // 避免死循环，第一次进入，不调用页面方法
                            binding.list(obj.curr -1);
                        }
                    }
                });
            }
        });
    };

    binding.bindCompany = function (id, name) {
        var data = {
            name: name
        };
        var publicLayer = layer.open({
            type: 1,
            title: '绑定车队',
            skin: 'layui-layer-rim', //加上边框
            area: '780px', //宽高
            zIndex: 1028,
            content: bindCompanyTemplate(data),
            scrollbar: false,
            success: function(){
                var $layer = $('.T-bindCompanyContent');
                $layer.find('.T-save').on('click', function () {
                    var json = {
                        travelAgency: binding.shortName,
                        companyId: id,
                        userName: binding.getValue($layer, 'userName'),
                        password: binding.getValue($layer, 'passWord')
                    };
                    $.ajax({
                        url: KingServices.build_url_bus('bindAccount','bind'),
                        type: 'POST',
                        data: json,
                        success: function (data) {
                            showLayerMessage(data.message);
                            layer.close(publicLayer);
                            binding.list();
                        }
                    });
                });
            }
        });
    };

    binding.getSearchData = function () {
        var json = {
            name: binding.getValue($tab, 'companyName'),
            isBind: binding.getValue($tab, 'isBind')
        };
        return json;
    };

    binding.getValue = function ($object, name) {
        return $object.find('[name='+name+']').val();
    };

    exports.init = binding.initModule;
});