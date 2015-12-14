define(function(require, exports) {
    var menuKey = "financial_vertical";
    var listTemplate = require("./view/list");
    var VerticalChecking = require("./view/VerticalChecking");
    var VerticalClearing = require("./view/VerticalClearing");

    var Vertical = {
        listVertical:function(page,name,status){
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
                        addTab(menuKey,"地接账务",html);

                        $(".date-picker").datepicker({
                            autoclose: true,
                            todayHighlight: true,
                            format: 'yyyy-mm-dd',
                            language: 'zh-CN'
                        });


                        //搜索按钮事件
                        $(".main-content .page-content .btn-ticket-search").click(function(){
                            var name = $(".main-content .page-content input[name=ticket_name]").val();
                            var status = $(".main-content .page-content .btn-status").find("button").attr("data-value");
                            ticket.listTicket(0,name,status);
                        });
                        //分页--首页按钮事件
                        $(".main-content .page-content .pageMode a.first").click(function(){
                            var name = $(".main-content .page-content input[name=ticket_name]").val();
                            var status = $(".main-content .page-content .btn-status").find("button").attr("data-value");
                            ticket.listTicket(0,name,status);
                        });
                        //分页--上一页事件
                        $(".main-content .page-content .pageMode a.previous").click(function(){
                            var name = $(".main-content .page-content input[name=ticket_name]").val();
                            var status = $(".main-content .page-content .btn-status").find("button").attr("data-value");
                            var previous = data.pageNo - 1;
                            if(data.pageNo == 0){
                                previous = 0;
                            }
                            ticket.listTicket(previous,name,status);
                        });
                        //分页--下一页事件
                        $(".main-content .page-content .pageMode a.next").click(function(){
                            var name = $(".main-content .page-content input[name=ticket_name]").val();
                            var status = $(".main-content .page-content .btn-status").find("button").attr("data-value");
                            var next =  data.pageNo + 1;
                            if(data.pageNo == data.totalPage-1){
                                next = data.pageNo ;
                            }
                            ticket.listTicket(next,name,status);
                        });
                        //分页--尾页事件
                        $(".main-content .page-content .pageMode a.last").click(function(){
                            var name = $(".main-content .page-content input[name=ticket_name]").val();
                            var status = $(".main-content .page-content .btn-status").find("button").attr("data-value");
                            ticket.listTicket(data.totalPage-1,name,status);
                        });

                        //给对账按钮绑定事件
                        $("#tab-"+menuKey+"-content  .btn-divide").click(function(){
                            var Checking = VerticalChecking();
                            addTab(menuKey+"-VerticalChecking","地接对账",Checking);
                        
                        });
                        ////给结算按钮绑定事件
                        $("#tab-"+menuKey+"-content  .btn-transfter").click(function(){
                            var Clearing = VerticalClearing();
                            addTab(menuKey+"-VerticalClearing","地接付款",Clearing);

                        });

                    }
                }
            });
        },





    }
    exports.listVertical = Vertical.listVertical;
});
