/*TMODJS:{"debug":true,"version":5,"md5":"baf1b4e574b3f14d4c1f4069091358c5"}*/
define(function(require) {
    return require("../../../template")("financial/Vertical/view/VerticalClearing", '<div class= "row Cleaning"> <div class="col-sm-12 border" > <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area editable editable-click" style="margin-top: 10px"> <div class="form-group"> <label style="float: left;margin: 5px auto auto 15px" class=" control-label "> 导游：国际大酒店</label> <label class="col-sm-1 control-label no-padding-right">日期：</label> <select class="col-sm-1"> <option>2015</option> <option>2014</option> </select> <label class="col-sm-1 control-label no-padding-right">起始月：</label> <select class="col-sm-1"> <option>2015</option> <option>2014</option> </select> <label class="col-sm-1 control-label no-padding-right">结束月：</label> <select style="margin-left: 20px" class="col-sm-1"> <option>5月</option> <option>4月</option> </select> <button class="search-btn btn-sm btn-height btn-arrangeTourist-search" > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group col-sm-12" > <label class="col-sm-2" >总账面退补：1200 </label> <label class="col-sm-2 ">总实际退补：222</label> <label class="col-sm-2 ">总已结账：500</label> <label class="col-sm-2 ">总未结账：500</label> </div> </form> </div> <button class="btn btn-sm btn-success btn-guide-add" style="float: right;margin-top: 10px"> <i class="ace-icon fa fa-wrench icon-animated-wrench bigger-125"></i> 操作记录 </button> <table class="table table-striped table-bordered table-hover all"> <thead> <tr> <th>账期</th> <th>账面应付</th> <th>实际应付</th> <th>实际已付</th> <th>账面未付</th> <th>实际未付</th> <th>付款金额</th> <th>付款方式</th> <th>备注</th> <th>对账进度</th> <th>操作</th> </tr> </thead> <tbody> <tr> <td>11</td> <td>11</td> <td>11</td> <td>11</td> <td>11</td> <td>11</td> <td class="col-sm-1"><input type="text" class="col-sm-12" ></td> <td> <label class=" control-label no-padding-right col-sm-12" >付款方式： <select > <option>转账</option> <option>在线支付</option> <option>线下付款</option> </select> </label> </td> <td>11</td> <td>11</td> <td> <button data-entity-id="" title="保存" data-entity-startTime="" class="btn btn-primary btn-sm btn-divide"> <i class="ace-icon fa fa-floppy-o"></i> </button> <button data-entity-id="" title="对账明细" data-entity-startTime="" class="btn btn-primary btn-sm btn-transfter"> <i class="ace-icon fa fa-tags"></i> </button> </td> </tr> </tbody> </table> </div>');
});