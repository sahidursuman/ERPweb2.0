/*TMODJS:{"debug":true,"version":28,"md5":"afe08cd8517211e0da6b846e9ca6b7f9"}*/
define(function(require) {
    return require("../../../template")("busOrder/binding/view/listMain", '<div class="search-area globalAdd"> <label class="control-label">车队名称：</label> <input name="companyName" class="searchMain mar-r-20" value="" placeholder="请输入车队名称"/> <label class="control-label">绑定状态：</label> <select name="isBind"> <option value="">全部</option> <option value="0">未绑定</option> <option value="1">已绑定</option> </select> <button class="btn-sm search-btn T-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="T-busCompanyList row"> </div>');
});