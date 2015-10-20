/*TMODJS:{"debug":true,"version":44,"md5":"b223bae0fee12a80ea14151bd7f43295"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/listMain", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, partnerAgency = $data.partnerAgency, $escape = ($data.partner, 
            $data.$index, $utils.$escape), partnerAgencyId = $data.partnerAgencyId, user1 = $data.user1, creator = ($data.user, 
            $data.creator), startDay = $data.startDay, status = $data.status, lineProduct2 = $data.lineProduct2, pager = ($data.lineProduct, 
            $data.pager), travelAgency = ($data.pa, $data.travelAgency), $out = "";
            return $out += '<div class="row col-xs-12 transferTouristMain globalAdd"> <div class="col-xs-12"> <div class="tabbable"> <ul class="nav nav-tabs" id="myTab"> <li class="active"> <a data-toggle="tab" href="#transferOut" class="transferOut" aria-expanded="true" data-value="2"> <i class="fa fa-paper-plane fa-2"></i> 我社转出 </a> </li> <li> <a data-toggle="tab" href="#transferIn" class="transferIn" aria-expanded="false" data-value="1" > <i class="fa fa-hourglass"></i> 同行转入 </a> </li> </ul> <div class="tab-content" style="position: relative;top: -2px">  <div id="transferOut" class="tab-pane fade active in clearfix" > <div class="col-xs-12"> <div class="page-header"> <h1> <small class="transferOut-Header-Cost"> <i class="ace-icon fa fa-angle-double-right"></i> <lable style="min-width:10%; display:inline-block; ">人数合计：<span class="totalAdultCount">0</span>大<span class="totalChildCount">0</span>小</lable> <lable style="min-width:10%; display:inline-block; ">应付款合计：<span class="totalNeedPay">0 </span>元</lable> <lable style="min-width:10%; display:inline-block; ">已付款合计:<span class="totalPayed">0</span>元</lable> </small> </h1> </div> </div> <div class="form-group form-horizontal"> <div class="search-area"> <label class="pull-left control-label no-padding-right" style="margin-left: 20px!important;">同行地接：</label> <div class="col-sm-2"> <select name="transferPartnerAgencyId" class="col-xs-12" style="width: 220px"> <option value="">全部</option> ', 
            $line = 39, $each(partnerAgency, function(partner) {
                $out += " ", $line = 40, null != partner && ($out += " ", $line = 41, null != partner.id && ($out += ' <option value="', 
                $line = 42, $out += $escape(partner.id), $out += '" ', $line = 42, partnerAgencyId == partner.id && ($out += 'selected="selected"', 
                $line = 42), $out += " > ", $line = 43, $out += $escape(partner.travelAgencyName), 
                $out += " </option> ", $line = 45), $out += " ", $line = 46), $out += " ", $line = 47;
            }), $out += ' </select> </div> <label class="control-label no-padding-right pull-left">转客人：</label> <div class="col-sm-2"> <select name="creator" class="col-xs-12" style="width: 220px"> <option value="">全部</option> ', 
            $line = 54, $each(user1, function(user) {
                $out += " ", $line = 55, null != user && ($out += " ", $line = 56, null != user.id && ($out += ' <option value="', 
                $line = 57, $out += $escape(user.id), $out += '" ', $line = 57, creator == user.id && ($out += 'selected="selected"', 
                $line = 57), $out += " > ", $line = 58, $out += $escape(user.realName), $out += " </option> ", 
                $line = 60), $out += " ", $line = 61), $out += " ", $line = 62;
            }), $out += ' </select> </div> <div class="form-group"> <div class="search-area"> <div class="col-xs-2"> <div class="col-xs-12"> <div class="input-group"> <input class="col-xs-12 date-picker" name="createTime" placeholder="转客起始日期" value="', 
            $line = 70, $out += $escape(startDay), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-2"> <div class="col-xs-12"> <div class="input-group"> <input class="col-xs-12 date-picker" name="createTime" placeholder="转客结束日期" value="" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <label class="control-label no-padding-right pull-left" style="display: inline-block; padding-left: 12px;">状态：</label> <div class="btn-group btn-status" style="margin-left: 20px"> <button data-value="', 
            $line = 90, $out += $escape(status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 92, null == status ? ($out += " 全部 ", $line = 94) : 1 == status ? ($out += " 已接收 ", 
            $line = 96) : 3 == status ? ($out += " 未使用 ", $line = 98) : ($out += " 未确认 ", $line = 100), 
            $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="0" href="javascript:void(0)">未确认</a> </li> <li> <a data-value="1" href="javascript:void(0)">已接收</a> </li> <li> <a data-value="3" href="javascript:void(0)">未使用</a> </li> </ul> </div> <button class="btn-sm btn-transferOut-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <button class="btn btn-sm btn-success btn-transfer-export">导出名单</button> </div> </div> </div> </div>   <div class="col-xs-12 transferList" ></div> </div>  <div id="transferIn" class="tab-pane fade clearfix" > <div class="col-xs-12"> <div class="page-header"> <h1> <small> <i class="ace-icon fa fa-angle-double-right"></i> <lable style="min-width:10%; display:inline-block; ">人数合计：<span class="totalAdultCount">0</span>大<span class="totalChildCount">0</span>小</lable> <lable style="min-width:10%; display:inline-block; ">应付款合计：<span class="totalNeedPay">0</span>元</lable> <lable style="min-width:10%; display:inline-block; ">已付款合计:<span class="totalPayed">0</span>元</lable> </small> </h1> </div> </div> <div class="form-group" style="margin-bottom:30px; "> <div class="search-area"> <label class="pull-left control-label no-padding-right" style="margin-left: 20px!important;">同行线路产品：</label> <div class="col-sm-1"> <select name="lineProductId" class="col-xs-12"> <option value="">全部</option> ', 
            $line = 156, $each(lineProduct2, function(lineProduct) {
                $out += " ", $line = 157, null != lineProduct && ($out += " ", $line = 158, null != lineProduct.name && ($out += ' <option value="', 
                $line = 159, $out += $escape(lineProduct.id), $out += '" ', $line = 159, pager.eqMap.lineProductId == lineProduct.id && ($out += 'selected="selected"', 
                $line = 159), $out += "> ", $line = 160, $out += $escape(lineProduct.name), $out += " </option> ", 
                $line = 162), $out += " ", $line = 163), $out += " ", $line = 165;
            }), $out += ' </select> </div> <div class="form-group"> <div class="search-area"> <div class="col-xs-2"> <div class="col-xs-12"> <div class="input-group"> <input class="col-xs-12 date-picker" name="createTime" placeholder="出游起始日期" value="', 
            $line = 173, $out += $escape(startDay), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-2"> <div class="col-xs-12"> <div class="input-group"> <input class="col-xs-12 date-picker" name="endTime" placeholder="出游结束日期" value="" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> </div>     <!-- ', 
            $line = 199, $each(partnerAgency, function(pa) {
                $out += " --> <!-- ", $line = 200, null != pa && ($out += " --> <!-- ", $line = 201, 
                null != pa.id && ($out += ' --> <!-- <option value="', $line = 202, $out += $escape(pa.id), 
                $out += '" ', $line = 202, partnerAgencyId == pa.id && ($out += 'selected="selected"', 
                $line = 202), $out += " > --> <!-- ", $line = 203, $out += $escape(pa.travelAgencyName), 
                $out += " -->  <!-- ", $line = 205), $out += " --> <!-- ", $line = 206), $out += " --> <!-- ", 
                $line = 207;
            }), $out += ' -->   <label class="control-label no-padding-right pull-left">同行地接：</label> <div class="col-sm-1"> <select name="transferPartnerAgencyId" class="col-xs-12"> <option value="">全部</option> ', 
            $line = 215, $each(travelAgency, function(pa) {
                $out += " ", $line = 216, null != pa && ($out += " ", $line = 217, null != pa.id && ($out += ' <option value="', 
                $line = 218, $out += $escape(pa.id), $out += '" ', $line = 218, partnerAgencyId == pa.id && ($out += 'selected="selected"', 
                $line = 218), $out += " > ", $line = 219, $out += $escape(pa.name), $out += " </option> ", 
                $line = 221), $out += " ", $line = 222), $out += " ", $line = 223;
            }), $out += ' </select> </div> <label class="control-label no-padding-right pull-left">状态：</label> <div class="btn-group btn-status" style="margin-left: 20px"> <button data-value="', 
            $line = 229, $out += $escape(status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 231, null == status ? ($out += " 全部 ", $line = 233) : 1 == status ? ($out += " 已接收 ", 
            $line = 235) : ($out += " 未确认 ", $line = 237), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="0" href="javascript:void(0)">未确认</a> </li> <li> <a data-value="1" href="javascript:void(0)">已接收</a> </li> </ul> </div> <button class="btn-sm btn-transferIn-search pull-right search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button>&nbsp; </div> </div>   <div class="col-xs-12 transferInList" ></div>  </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row col-xs-12 transferTouristMain globalAdd">\r\n	<div class="col-xs-12">\r\n		<div class="tabbable">\r\n			<ul class="nav nav-tabs" id="myTab">\r\n				<li class="active">\r\n					<a data-toggle="tab" href="#transferOut" class="transferOut" aria-expanded="true" data-value="2">\r\n						<i class="fa fa-paper-plane fa-2"></i>\r\n						我社转出\r\n					</a>\r\n				</li>\r\n				<li>\r\n					<a data-toggle="tab" href="#transferIn" class="transferIn"  aria-expanded="false" data-value="1" >\r\n						<i class="fa fa-hourglass"></i>\r\n						同行转入\r\n					</a>\r\n				</li>\r\n			</ul>\r\n			<div class="tab-content" style="position: relative;top: -2px">\r\n				<!--我社转出start -1-->\r\n				<div id="transferOut" class="tab-pane fade active in clearfix" >\r\n					<div class="col-xs-12">\r\n						<div class="page-header">\r\n							<h1>\r\n								<small class="transferOut-Header-Cost">\r\n									<i class="ace-icon fa fa-angle-double-right"></i>\r\n									<lable style="min-width:10%; display:inline-block;  ">人数合计：<span class="totalAdultCount">0</span>大<span class="totalChildCount">0</span>小</lable>\r\n									<lable style="min-width:10%; display:inline-block;  ">应付款合计：<span class="totalNeedPay">0 </span>元</lable>\r\n									<lable style="min-width:10%; display:inline-block;  ">已付款合计:<span class="totalPayed">0</span>元</lable>\r\n								</small>\r\n							</h1>\r\n						</div>\r\n					</div>\r\n					<div class="form-group form-horizontal">\r\n						<div class="search-area">\r\n							<label class="pull-left control-label no-padding-right" style="margin-left: 20px!important;">同行地接：</label>\r\n							<div class="col-sm-2">\r\n								<select name="transferPartnerAgencyId" class="col-xs-12" style="width: 220px">\r\n									<option value="">全部</option>\r\n									{{each partnerAgency as partner}}\r\n									{{if partner!=null}}\r\n									{{if partner.id!=null}}\r\n									<option value="{{partner.id}}" {{if partnerAgencyId==partner.id}}selected="selected"{{/if}} >\r\n										{{partner.travelAgencyName}}\r\n									</option>\r\n									{{/if}}\r\n									{{/if}}\r\n									{{/each}}\r\n								</select>\r\n							</div>\r\n							<label class="control-label no-padding-right pull-left">转客人：</label>\r\n							<div class="col-sm-2">\r\n								<select name="creator" class="col-xs-12" style="width: 220px">\r\n									<option value="">全部</option>\r\n									{{each user1 as user}}\r\n									{{if user!=null}}\r\n									{{if user.id!=null}}\r\n									<option value="{{user.id}}" {{if creator==user.id}}selected="selected"{{/if}} >\r\n										{{user.realName}}\r\n									</option>\r\n									{{/if}}\r\n									{{/if}}\r\n									{{/each}}\r\n								</select>\r\n							</div>\r\n							<div class="form-group">\r\n								<div class="search-area">\r\n									<div class="col-xs-2">\r\n										<div class="col-xs-12">\r\n											<div class="input-group">\r\n												<input class="col-xs-12 date-picker" name="createTime" placeholder="转客起始日期" value="{{startDay}}" type="text" />\r\n													<span class="input-group-addon">\r\n														<i class="fa fa-calendar"></i>\r\n													</span>\r\n											</div>\r\n										</div>\r\n									</div>\r\n\r\n									<div class="col-xs-2">\r\n										<div class="col-xs-12">\r\n											<div class="input-group">\r\n												<input class="col-xs-12 date-picker" name="createTime" placeholder="转客结束日期" value="" type="text" />\r\n													<span class="input-group-addon">\r\n														<i class="fa fa-calendar"></i>\r\n													</span>\r\n											</div>\r\n										</div>\r\n									</div>\r\n									<label class="control-label no-padding-right pull-left" style="display: inline-block; padding-left: 12px;">状态：</label>\r\n									<div class="btn-group btn-status" style="margin-left: 20px">\r\n										<button data-value="{{status}}" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n  											<span>\r\n  											   {{if status == null}}\r\n  													全部\r\n  												{{else if status == 1}}\r\n  													已接收\r\n  												{{else if status == 3}}\r\n  													未使用\r\n  												{{else}}\r\n  													未确认\r\n  												{{/if}}\r\n  											</span>\r\n											<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n										</button>\r\n										<ul class="dropdown-menu">\r\n											<li>\r\n												<a data-value="" href="javascript:void(0)">全部</a>\r\n											</li>\r\n											<li>\r\n												<a data-value="0" href="javascript:void(0)">未确认</a>\r\n											</li>\r\n											<li>\r\n												<a data-value="1" href="javascript:void(0)">已接收</a>\r\n											</li>\r\n											<li>\r\n												<a data-value="3" href="javascript:void(0)">未使用</a>\r\n											</li>\r\n										</ul>\r\n									</div>\r\n									<button class="btn-sm btn-transferOut-search search-btn">\r\n										<i class="ace-icon fa fa-search"></i>\r\n										搜索\r\n									</button>\r\n									<button class="btn btn-sm btn-success btn-transfer-export">导出名单</button>\r\n\r\n								</div>\r\n\r\n							</div>\r\n						</div>\r\n					</div>\r\n					<!--我社转出end -->\r\n\r\n					<!--分页&&数据List-->\r\n					<div class="col-xs-12 transferList" ></div>\r\n				</div>\r\n\r\n				<!-- 同行转入搜索start2 -->\r\n				<div id="transferIn" class="tab-pane fade clearfix" >\r\n					<div class="col-xs-12">\r\n						<div class="page-header">\r\n							<h1>\r\n								<small>\r\n									<i class="ace-icon fa fa-angle-double-right"></i>\r\n									<lable style="min-width:10%; display:inline-block;  ">人数合计：<span class="totalAdultCount">0</span>大<span class="totalChildCount">0</span>小</lable>\r\n									<lable style="min-width:10%; display:inline-block;  ">应付款合计：<span class="totalNeedPay">0</span>元</lable>\r\n									<lable style="min-width:10%; display:inline-block;  ">已付款合计:<span class="totalPayed">0</span>元</lable>\r\n								</small>\r\n							</h1>\r\n						</div>\r\n					</div>\r\n					<div class="form-group" style="margin-bottom:30px; ">\r\n						<div class="search-area">\r\n							<label class="pull-left control-label no-padding-right" style="margin-left: 20px!important;">同行线路产品：</label>\r\n							<div class="col-sm-1">\r\n								<select name="lineProductId" class="col-xs-12">\r\n									<option value="">全部</option>\r\n									{{each lineProduct2 as lineProduct}}\r\n									{{if lineProduct!=null}}\r\n									{{if lineProduct.name!=null}}\r\n									<option value="{{lineProduct.id}}" {{if pager.eqMap.lineProductId==lineProduct.id}}selected="selected"{{/if}}>\r\n										{{lineProduct.name}}\r\n									</option>\r\n									{{/if}}\r\n									{{/if}}\r\n\r\n									{{/each}}\r\n								</select>\r\n							</div>\r\n							<div class="form-group">\r\n								<div class="search-area">\r\n									<div class="col-xs-2">\r\n										<div class="col-xs-12">\r\n											<div class="input-group">\r\n												<input class="col-xs-12 date-picker" name="createTime" placeholder="出游起始日期" value="{{startDay}}" type="text" />	\r\n												<span class="input-group-addon">\r\n													<i class="fa fa-calendar"></i>\r\n												</span>\r\n											</div>\r\n										</div>\r\n									</div>\r\n\r\n									<div class="col-xs-2">\r\n										<div class="col-xs-12">\r\n											<div class="input-group">\r\n												<input class="col-xs-12 date-picker" name="endTime" placeholder="出游结束日期" value="" type="text" />\r\n													<span class="input-group-addon">\r\n														<i class="fa fa-calendar"></i>\r\n													</span>\r\n											</div>\r\n										</div>\r\n									</div>\r\n								</div>\r\n\r\n\r\n\r\n								<!-- 								  <label class="control-label no-padding-right pull-left">同行地接：</label>  -->\r\n								<!-- 								  <div class="col-sm-1">  -->\r\n								<!-- 									  <select name="transferPartnerAgencyId" class="col-xs-12">  -->\r\n								<!-- 									  		<option value="">全部</option> -->\r\n								<!-- 							              {{each partnerAgency as pa}}  -->\r\n								<!-- 							               {{if pa!=null}}  -->\r\n								<!-- 						                   {{if pa.id!=null}}     -->\r\n								<!-- 											<option value="{{pa.id}}" {{if partnerAgencyId==pa.id}}selected="selected"{{/if}} > -->\r\n								<!-- 											    {{pa.travelAgencyName}} -->\r\n								<!-- 											</option> -->\r\n								<!-- 											{{/if}} -->\r\n								<!-- 											{{/if}} -->\r\n								<!-- 							             {{/each}}        -->\r\n								<!-- 									  </select>  -->\r\n								<!-- 							      </div> -->\r\n\r\n								<label class="control-label no-padding-right pull-left">同行地接：</label>\r\n								<div class="col-sm-1">\r\n									<select name="transferPartnerAgencyId" class="col-xs-12">\r\n										<option value="">全部</option>\r\n										{{each travelAgency as pa}}\r\n										{{if pa!=null}}\r\n										{{if pa.id!=null}}\r\n										<option value="{{pa.id}}" {{if partnerAgencyId==pa.id}}selected="selected"{{/if}} >\r\n											{{pa.name}}\r\n										</option>\r\n										{{/if}}\r\n										{{/if}}\r\n										{{/each}}\r\n									</select>\r\n								</div>\r\n\r\n								<label class="control-label no-padding-right pull-left">状态：</label>\r\n								<div class="btn-group btn-status" style="margin-left: 20px">\r\n									<button data-value="{{status}}" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n									<span>\r\n									   {{if status == null}}\r\n											全部\r\n										{{else if status == 1}}\r\n											已接收\r\n										{{else}}\r\n											未确认\r\n										{{/if}}\r\n									</span>\r\n										<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n									</button>\r\n									<ul class="dropdown-menu">\r\n										<li>\r\n											<a data-value="" href="javascript:void(0)">全部</a>\r\n										</li>\r\n										<li>\r\n											<a data-value="0" href="javascript:void(0)">未确认</a>\r\n										</li>\r\n										<li>\r\n											<a data-value="1" href="javascript:void(0)">已接收</a>\r\n										</li>\r\n									</ul>\r\n								</div>\r\n								<button class="btn-sm btn-transferIn-search pull-right search-btn">\r\n									<i class="ace-icon fa fa-search"></i>\r\n									搜索\r\n								</button>&nbsp;\r\n							</div>\r\n						</div>\r\n						<!-- 同行转入搜索end -->\r\n						<!--分页&&数据List-->\r\n						<div class="col-xs-12 transferInList" ></div>\r\n						<!--我社转出end -->\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});