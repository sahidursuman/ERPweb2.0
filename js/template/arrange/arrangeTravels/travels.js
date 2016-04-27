/**
 * 发团管理——跟团游记模块
 * 
 * 查看跟团游记信息
 * by David Bear
 */
define(function(require, exports) {
	
	var menuKey = "arrange_travels",
        //模板
        T = {
    		list                  : require("./view/list"),
            viewTravelShowList    : require("./view/viewTravelShowList"),
            groupTravelDetails    : require("./view/groupTravelDetails"),
            guideEvaluate         : require("./view/guideEvaluate"),
            groupEvaluate         : require("./view/groupEvaluation"),
            singleEvaluate        : require("./view/singleEvaluation"),
            travelShare           : require("./view/travelShare")
    	},
        //定义跟团游记对象
    	travels = {};
    /**
     * 页面初始化方法
     */
	travels.initModule = function() {
        travels.list();
    };
    /**
     * 跟团游记列表
     * @param  {int}    page 页码
     * @param  {object} $tab tab对象
     */
    travels.list = function(page, $tab){
    	var args = {
    		pageNo : page || 0
    	};

        if(!!$tab){
            args.lineProductName = $tab.find('[name="lineProductName"]').val();
            args.customerType = $tab.find('[name="customerType"]').val();
        }

    	$.ajax({
    		url : KingServices.build_url('note','listLineProduct'),
    		type : "POST",
			data : args
    	}).done(function(data){
            if(showDialog(data)){
                if(Tools.addTab(menuKey, "跟团游记", T.list(data))){
                    $tab = $tab || $('#tab-'+menuKey+'-content');
                    travels.init_event($tab);
                    // 绑定翻页组件
                    laypage({
                        cont: $tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                        pages: data.totalPage, //总页数
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) {  // 避免死循环，第一次进入，不调用页面方法
                                travels.list(obj.curr -1, $tab);
                            };
                        }
                    });
                }
            }
    	});
    };
    /**
     * 绑定列表页内事件
     * @param  {object} $tab tab对象
     */
    travels.init_event = function($tab){
        $tab.find('.T-btn-search').on('click', function(){
            travels.list(0, $tab);
        });
        $tab.find('.T-list').on('click', '.T-action', function(event){
            event.preventDefault();
            var $that = $(this), id = $that.closest('tr').data('id');
            if($that.hasClass('T-view')){
                travels.viewTravelShowList(0, id);
            }
        });

        travels.share($tab.find('.T-list').find('.T-share'));

        $tab.find('.T-list').find('.T-share').hover(function() {
            var $that = $(this),
                url = location.origin + '/share/groupTravelList.html?lineProductId='+$that.closest('tr').data('id'),
                bdText = $that.closest('tr').find('td').eq(0).text();

            window._bd_share_config = {
                common : {
                    bdText : bdText, 
                    bdDesc : bdText, 
                    bdUrl : url,
                    bdPic : 'http://djs.huochaitou.com/images/default_youji.png'
                },
                share : [{
                    "bdSize" : 16
                }]
            };
        });
    };
    /**
     * 游记展示列表页
     * @param  {int}    page 页码
     * @param  {int}    id   线路产品ID 
     */
    travels.viewTravelShowList = function(page, id){
        var args = {
            pageNo : page || 0,
            lineProductId : id
        };
        $.ajax({
            url : KingServices.build_url('note', 'listNote'),
            type : "POST",
            data : args
        }).done(function(data){
            if(showDialog(data)){
                data.imgUrl = imgUrl;
                if(Tools.addTab(menuKey + "_view_list", "游记展示", T.viewTravelShowList(data))){
                    var $tab = $('#tab-'+menuKey+'_view_list-content');
                    travels.init_travel($tab);
                }
            }
        });
    };
    /**
     * 初始化游记展示列表事件
     * @param  {object} $tab tab对象
     */
    travels.init_travel = function($tab){
        $tab.find('.T-thumbnail').on('click', '.T-action', function(event){
            event.preventDefault();
            var $that = $(this), id = $that.closest('.thumbnail').data('id');
            if($that.hasClass('T-view-group')){
                travels.groupTravelDetails(id)
            }else if($that.hasClass('T-view-user')){
                travels.guideEvaluate(id)
            }else if($that.hasClass('T-view-comment')){
                travels.groupEvaluate(id)
            }
        });
    };
    /**
     * 跟团游记详情
     * @param  {int} id 游记ID
     */
    travels.groupTravelDetails = function(id){
        $.ajax({
            url : KingServices.build_url("note", "findNoteById"),
            type : "POST",
            data : {noteId : id}
        }).done(function(data){
            if(showDialog(data)){
                data.imgUrl = imgUrl;
                var theMenuKey = menuKey+"_group_travel_details";
                if(Tools.addTab(theMenuKey, "游记详情", T.groupTravelDetails(data))){
                    travels.init_comment($('#tab-'+theMenuKey+'-content'));
                }
            }
        });
    };

    /**
     * 导游评价页
     * @param  {int} id 游记ID
     */
    travels.guideEvaluate = function(id){
        $.ajax({
            url : KingServices.build_url("note", "findGuideServiceCommentByNoteId"),
            type : "POST",
            data : {noteId : id}
        }).done(function(data){
            if(showDialog(data)){
                data.imgUrl = imgUrl;
                var theMenuKey = menuKey+"_guide_evaluate";
                if(Tools.addTab(theMenuKey, "导游评价", T.guideEvaluate(data))){
                    travels.init_comment($('#tab-'+theMenuKey+'-content'));
                }
            }
        });
    };

    /**
     * 跟团评价
     * @param  {int} id 游记ID
     */
    travels.groupEvaluate = function(id){
        $.ajax({
            url : KingServices.build_url("note", "findNoteCommentById"),
            type : "POST",
            data : {noteId : id}
        }).done(function(data){
            if(showDialog(data)){
                data.imgUrl = imgUrl;
                var commentList = data.note.noteCommentList;
                for(var i=0; i<commentList.length; i++){
                    if(!!commentList[i].commentImages){
                        commentList[i].images = commentList[i].commentImages.split(",");
                    }else{
                        commentList[i].images = [];
                    }
                }
                data.note.noteCommentList = commentList;
                var theMenuKey = menuKey+"_group_evaluate";
                if(Tools.addTab(theMenuKey, "跟团评价", T.groupEvaluate(data))){
                    travels.init_comment($('#tab-'+theMenuKey+'-content'));
                }
            }
        });
    };

    /**
     * 单项评价
     * @param  {int} id 游记ID
     */
    travels.singleEvaluate = function(id){
        $.ajax({
            url : KingServices.build_url("note", "findNoteItemCommentById"),
            type : "POST",
            data : {noteItemId : id}
        }).done(function(data){
            if(showDialog(data)){
                data.imgUrl = imgUrl;   
                var commentList = data.noteItem.noteItemCommentList;
                for(var i=0; i<commentList.length; i++){
                    if(!!commentList[i].commentImages){
                        commentList[i].images = commentList[i].commentImages.split(",");
                    }else{
                        commentList[i].images = [];
                    }
                }     
                data.noteItem.noteItemCommentList = commentList;
                var theMenuKey = menuKey+"_single_evaluate";
                if(Tools.addTab(theMenuKey, "单项评价", T.singleEvaluate(data))){
                    travels.init_comment($('#tab-'+theMenuKey+'-content'));
                }
            }
        });
    };

    /**
     * 初始化评价页事件
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    travels.init_comment = function($tab){
        $tab.on('click', '.T-action', function(event){
            event.preventDefault();
            var $that = $(this), id = $that.data('id');
            if($that.hasClass('T-view-group')){
                travels.groupTravelDetails(id)
            }else if($that.hasClass('T-view-user')){
                travels.guideEvaluate(id)
            }else if($that.hasClass('T-view-comment')){
                travels.groupEvaluate(id)
            }else if($that.hasClass('T-single-comment')){
                travels.singleEvaluate(id)
            }
        });
        travels.share($tab.find('.T-share'), 'right');
        $tab.find('.T-share').hover(function() {
            var $that = $(this),
                type = $that.data('type'),
                parem = type == 'singleEvaluation' ? 'noteItemId' : 'noteId',
                url = location.origin + '/share/'+type+'.html?'+parem+'='+$that.data('id');

            window._bd_share_config = {
                common : {
                    bdText : $that.data('title'), 
                    bdDesc : $that.data('title'), 
                    bdUrl : url,
                    bdPic : 'http://djs.huochaitou.com/images/default_youji.png'
                },
                share : [{
                    "bdSize" : 16
                }]
            };
        });
       
        $tab.find('.T-photos').colorbox(Tools.colorbox_params);
    };

    /**
     * 
     * 分享
     * @param  {int}     id   游记ID
     * @param  {string}  type 分享类型
     * @param  {Boolean} isShow 是否显示分享
     */
    travels.share = function($elements, type){
        if(!$('body').data('isShareUrl')){
            with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
            $('body').data('isShareUrl', true);
        }

        var html = T.travelShare();

        Tools.descToolTip($elements, 2, type || 'left', html, function(){
            _bd_share_main.init(window._bd_share_config);
        });
        /*var url = location.origin + '/share/'+type+'.html';
        if(type == "singleEvaluation"){
            url += '?noteItemId='+id;
        }else if(type == "groupTravelList"){
            url += '?lineProductId='+id;
        }
        else{
            url += '?noteId='+id;
        }
        $( "#confirm-dialog-message" ).removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
            title_html: true,
            draggable:false,
            buttons: [
                {
                    text: "取消",
                    "class" : "btn btn-minier btn-heightMall",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                },
                {
                    text: "复制",
                    "class" : "btn btn-primary btn-minier T-copy-clip-btn-share btn-heightMall",
                    'data-clipboard-text': url,
                    click: function() {
                        $( this ).dialog( "close" );
                        showMessageDialog($("#confirm-dialog-message" ),"复制成功！",function(){});
                    }
                }
            ],
            open:function(event,ui){
                $(this).find("p").html("分享链接:&nbsp;"+ url);
            }
        });
        new ZeroClipboard($('.T-copy-clip-btn-share'));*/
    };

    exports.init = travels.initModule;
});