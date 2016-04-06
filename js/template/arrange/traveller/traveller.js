define(function(require, exports) {
    var menuKey = "arrange_traveller",
        listTemplate = require("./view/list"),
        addGroup = require("./view/addGroup"),
        lookGroup = require("./view/lookGroup"),
        notGroup = require("./view/notGroup"),
        tabId = "tab-"+menuKey+"-content";


    var Traveller = {
        listTraveller:function(page,name,status){
            $.ajax({
                url:""+APP_ROOT+"back/ticket.do?method=listTicket&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:"pageNo="+page+"&name="+encodeURIComponent(name)+"&status="+status+"&sortType=auto",
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                    layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                        var ticketList = data.ticketList;
                        ticketList = JSON.parse(ticketList);
                        data.ticketList = ticketList;
                        var html = listTemplate(data);
                        Tools.addTab(menuKey,"旅客管理",html);

                        $("#"+tabId+".date-picker").datepicker({
                            autoclose: true,
                            todayHighlight: true,
                            format: 'yyyy-mm-dd',
                            language: 'zh-CN'
                        });


                        //搜索按钮事件
                        $("#"+tabId+" .btn-ticket-search").click(function(){
                            var name = $(".main-content .page-content input[name=ticket_name]").val();
                            var status = $(".main-content .page-content .btn-status").find("button").attr("data-value");
                            ticket.listTicket(0,name,status);
                        });

                        //分页--首页按钮事件
                        $("#"+tabId+" .pageMode a.first").click(function(){
                            var name = $(".main-content .page-content input[name=ticket_name]").val();
                            var status = $(".main-content .page-content .btn-status").find("button").attr("data-value");
                            ticket.listTicket(0,name,status);
                        });
                        //分页--上一页事件
                        $("#"+tabId+".pageMode a.previous").click(function(){
                            var name = $(".main-content .page-content input[name=ticket_name]").val();
                            var status = $(".main-content .page-content .btn-status").find("button").attr("data-value");
                            var previous = data.pageNo - 1;
                            if(data.pageNo == 0){
                                previous = 0;
                            }
                            ticket.listTicket(previous,name,status);
                        });
                        //分页--下一页事件
                        $("#"+tabId+" .pageMode a.next").click(function(){
                            var name = $(".main-content .page-content input[name=ticket_name]").val();
                            var status = $(".main-content .page-content .btn-status").find("button").attr("data-value");
                            var next =  data.pageNo + 1;
                            if(data.pageNo == data.totalPage-1){
                                next = data.pageNo ;
                            }
                            ticket.listTicket(next,name,status);
                        });
                        //分页--尾页事件
                        $("#"+tabId+" .pageMode a.last").click(function(){
                            var name = $(".main-content .page-content input[name=ticket_name]").val();
                            var status = $(".main-content .page-content .btn-status").find("button").attr("data-value");
                            ticket.listTicket(data.totalPage-1,name,status);
                        });
                        //给添加小组绑定事件
                        $("#"+tabId+" .traveller .btn-addGroup").click(function(){
                            var add = addGroup();
                            Tools.addTab(menuKey+"-addGroup","添加小组",add);
                        });
                        //给查看小组绑定事件
                        $("#"+tabId+" .traveller .look-Group").click(function(){
                            alert();
                            var add = lookGroup();
                            Tools.addTab(menuKey+"-lookGroup","查看小组",add);
                        });

                        //给查看小组绑定事件
                        $("#"+tabId+" .notGroup .btn-not").click(function(){
                            alert();
                            var not = notGroup();
                            Tools.addTab(menuKey+"-notGroup","未分团",not);
                        });

                    }

                }

            });
        },



    }
    exports.listTraveller = Traveller.listTraveller;



});
