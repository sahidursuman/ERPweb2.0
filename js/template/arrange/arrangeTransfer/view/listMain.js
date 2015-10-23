/*TMODJS:{"debug":true,"version":162,"md5":"989f98d891dec223f5bba3f5b3b20d13"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/listMain", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, partnerAgency = $data.partnerAgency, $escape = ($data.partner, 
            $data.$index, $utils.$escape), partnerAgencyId = $data.partnerAgencyId, user1 = $data.user1, creator = ($data.user, 
            $data.creator), startDay = $data.startDay, status = $data.status, totalAdultCount = $data.totalAdultCount, totalChildCount = $data.totalChildCount, totalNeedPay = $data.totalNeedPay, totalPayed = $data.totalPayed, lineProduct2 = $data.lineProduct2, pager = ($data.lineProduct, 
            $data.pager), travelAgency = ($data.pa, $data.travelAgency), $out = "";
            return $out += '<div class="row col-xs-12 transferTouristMain globalAdd"> <div class="col-xs-12"> <div class="tabbable"> <ul class="nav nav-tabs" id="myTab"> <li class="active"> <a data-toggle="tab" href="#transferOut" class="transferOut" aria-expanded="true" data-value="2"> <i class="fa fa-paper-plane fa-2"></i> 我社转出 </a> </li> <li> <a data-toggle="tab" href="#transferIn" class="transferIn" aria-expanded="false" data-value="1" > <i class="fa fa-hourglass"></i> 同行转入 </a> </li> </ul> <div class="tab-content" style="position: relative;top: -2px">  <div id="transferOut" class="tab-pane fade active in clearfix" > <div class="form-group form-horizontal"> <div class="search-area"> <label class="pull-left control-label no-padding-right" style="margin-left: 20px!important;">同行地接：</label> <div class="col-sm-2"> <input type="text" class="col-sm-12 choosePartnerAgency" placeholder="来源" name="" /> <input type="hidden" name="transferPartnerAgencyId" value=""> <!-- <select name="transferPartnerAgencyId" class="col-xs-12" style="width: 220px"> <option value="">全部</option> ', 
            $line = 30, $each(partnerAgency, function(partner) {
                $out += " ", $line = 31, null != partner && ($out += " ", $line = 32, null != partner.id && ($out += ' <option value="', 
                $line = 33, $out += $escape(partner.id), $out += '" ', $line = 33, partnerAgencyId == partner.id && ($out += 'selected="selected"', 
                $line = 33), $out += " > ", $line = 34, $out += $escape(partner.travelAgencyName), 
                $out += " </option> ", $line = 36), $out += " ", $line = 37), $out += " ", $line = 38;
            }), $out += ' </select> --> </div> <label class="control-label no-padding-right pull-left">转客人：</label> <div class="col-sm-2"> <select name="creator" class="col-xs-12" style="width: 220px"> <option value="">全部</option> ', 
            $line = 45, $each(user1, function(user) {
                $out += " ", $line = 46, null != user && ($out += " ", $line = 47, null != user.id && ($out += ' <option value="', 
                $line = 48, $out += $escape(user.id), $out += '" ', $line = 48, creator == user.id && ($out += 'selected="selected"', 
                $line = 48), $out += " > ", $line = 49, $out += $escape(user.realName), $out += " </option> ", 
                $line = 51), $out += " ", $line = 52), $out += " ", $line = 53;
            }), $out += ' </select> </div> <div class="form-group"> <div class="search-area"> <div class="col-xs-2"> <div class="col-xs-12"> <div class="input-group"> <input class="col-xs-12 date-picker" name="createTime" placeholder="转客起始日期" value="', 
            $line = 61, $out += $escape(startDay), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-2"> <div class="col-xs-12"> <div class="input-group"> <input class="col-xs-12 date-picker" name="createTime" placeholder="转客结束日期" value="" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <label class="control-label no-padding-right pull-left" style="display: inline-block; padding-left: 12px;">状态：</label> <div class="btn-group btn-status" style="margin-left: 20px"> <button data-value="', 
            $line = 81, $out += $escape(status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 83, null == status ? ($out += " 全部 ", $line = 85) : 1 == status ? ($out += " 已接收 ", 
            $line = 87) : 3 == status ? ($out += " 未使用 ", $line = 89) : ($out += " 未确认 ", $line = 91), 
            $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="0" href="javascript:void(0)">未确认</a> </li> <li> <a data-value="1" href="javascript:void(0)">已接收</a> </li> <li> <a data-value="3" href="javascript:void(0)">未使用</a> </li> </ul> </div> <button class="btn-sm btn-transferOut-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <button class="btn btn-sm btn-success btn-transfer-export">导出名单</button> </div> <div class="col-xs-12"> <div class="page-header"> <div class="transferOut-Header-Cost" style="padding-left:20px;"> <lable style="min-width:10%; display:inline-block; ">人数合计：<span class="totalAdultCount">', 
            $line = 121, $out += $escape(totalAdultCount), $out += '</span>大<span class="totalChildCount">', 
            $line = 121, $out += $escape(totalChildCount), $out += '</span>小</lable> <lable style="min-width:10%; display:inline-block; ">应付款合计：<span class="totalNeedPay">', 
            $line = 122, $out += $escape(totalNeedPay), $out += ' </span>元</lable> <lable style="min-width:10%; display:inline-block; ">已付款合计:<span class="totalPayed">', 
            $line = 123, $out += $escape(totalPayed), $out += '</span>元</lable> </div> </div> </div> </div> </div> </div>   <div class="col-xs-12 transferList" ></div> </div>  <div id="transferIn" class="tab-pane fade clearfix" > <div class="form-group" style="margin-bottom:30px; "> <div class="search-area"> <label class="pull-left control-label no-padding-right" style="margin-left: 20px!important;">同行线路产品：</label> <div class="col-sm-2"> <input type="text" class="col-sm-12 chooseLineProductId" placeholder="来源" name="" /> <input type="hidden" name="lineProductId" value=""> <!-- <select name="lineProductId" class="col-xs-12"> <option value="">全部</option> ', 
            $line = 146, $each(lineProduct2, function(lineProduct) {
                $out += " ", $line = 147, null != lineProduct && ($out += " ", $line = 148, null != lineProduct.name && ($out += ' <option value="', 
                $line = 149, $out += $escape(lineProduct.id), $out += '" ', $line = 149, pager.eqMap.lineProductId == lineProduct.id && ($out += 'selected="selected"', 
                $line = 149), $out += "> ", $line = 150, $out += $escape(lineProduct.name), $out += " </option> ", 
                $line = 152), $out += " ", $line = 153), $out += " ", $line = 155;
            }), $out += ' </select> --> </div> <div class="form-group"> <div class="search-area"> <div class="col-xs-2"> <div class="col-xs-12"> <div class="input-group"> <input class="col-xs-12 date-picker" name="createTime" placeholder="出游起始日期" value="', 
            $line = 163, $out += $escape(startDay), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-2"> <div class="col-xs-12"> <div class="input-group"> <input class="col-xs-12 date-picker" name="endTime" placeholder="出游结束日期" value="" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> </div>     <!-- ', 
            $line = 189, $each(partnerAgency, function(pa) {
                $out += " --> <!-- ", $line = 190, null != pa && ($out += " --> <!-- ", $line = 191, 
                null != pa.id && ($out += ' --> <!-- <option value="', $line = 192, $out += $escape(pa.id), 
                $out += '" ', $line = 192, partnerAgencyId == pa.id && ($out += 'selected="selected"', 
                $line = 192), $out += " > --> <!-- ", $line = 193, $out += $escape(pa.travelAgencyName), 
                $out += " -->  <!-- ", $line = 195), $out += " --> <!-- ", $line = 196), $out += " --> <!-- ", 
                $line = 197;
            }), $out += ' -->   <label class="control-label no-padding-right pull-left">同行地接：</label> <div class="col-sm-1"> <input type="text" class="col-sm-12 chooseTravelAgency" placeholder="来源" name="" /> <input type="hidden" name="travelAgencyId" value=""> <!-- <select name="transferPartnerAgencyId" class="col-xs-12"> <option value="">全部</option> ', 
            $line = 207, $each(travelAgency, function(pa) {
                $out += " ", $line = 208, null != pa && ($out += " ", $line = 209, null != pa.id && ($out += ' <option value="', 
                $line = 210, $out += $escape(pa.id), $out += '" ', $line = 210, partnerAgencyId == pa.id && ($out += 'selected="selected"', 
                $line = 210), $out += " > ", $line = 211, $out += $escape(pa.name), $out += " </option> ", 
                $line = 213), $out += " ", $line = 214), $out += " ", $line = 215;
            }), $out += ' </select> --> </div> <label class="control-label no-padding-right pull-left">状态：</label> <div class="btn-group btn-status" style="margin-left: 20px"> <button data-value="', 
            $line = 221, $out += $escape(status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 223, null == status ? ($out += " 全部 ", $line = 225) : 1 == status ? ($out += " 已接收 ", 
            $line = 227) : ($out += " 未确认 ", $line = 229), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="0" href="javascript:void(0)">未确认</a> </li> <li> <a data-value="1" href="javascript:void(0)">已接收</a> </li> </ul> </div> <button class="btn-sm btn-transferIn-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button>&nbsp; </div> </div>   <div class="col-xs-12" > <div class="col-xs-12"> <div class="page-header"> <div id="transferIn-Header-Cost" class="form-horizontal"> <lable style="min-width:10%; display:inline-block; ">人数合计：<span class="totalAdultCount">0</span>大<span class="totalChildCount">0</span>小</lable> <lable style="min-width:10%; display:inline-block; ">应收款合计：<span class="totalNeedPay">0 </span>元</lable> <lable style="min-width:10%; display:inline-block; ">已收款合计:<span class="totalPayed">0</span>元</lable> </div> </div> </div> <div class="col-xs-12 transferInList"> </div> </div>  </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row col-xs-12 transferTouristMain globalAdd">\r\n	<div class="col-xs-12">\r\n		<div class="tabbable">\r\n			<ul class="nav nav-tabs" id="myTab">\r\n				<li class="active">\r\n					<a data-toggle="tab" href="#transferOut" class="transferOut" aria-expanded="true" data-value="2">\r\n						<i class="fa fa-paper-plane fa-2"></i>\r\n						我社转出\r\n					</a>\r\n				</li>\r\n				<li>\r\n					<a data-toggle="tab" href="#transferIn" class="transferIn"  aria-expanded="false" data-value="1" >\r\n						<i class="fa fa-hourglass"></i>\r\n						同行转入\r\n					</a>\r\n				</li>\r\n			</ul>\r\n			<div class="tab-content" style="position: relative;top: -2px">\r\n				<!--我社转出start -1-->\r\n				<div id="transferOut" class="tab-pane fade active in clearfix" >\r\n				\r\n					<div class="form-group form-horizontal">\r\n						<div class="search-area">\r\n							<label class="pull-left control-label no-padding-right" style="margin-left: 20px!important;">同行地接：</label>\r\n							<div class="col-sm-2">\r\n								<input type="text" class="col-sm-12 choosePartnerAgency" placeholder="来源" name="" />\r\n								<input type="hidden" name="transferPartnerAgencyId" value="">\r\n								<!-- <select name="transferPartnerAgencyId" class="col-xs-12" style="width: 220px">\r\n									<option value="">全部</option>\r\n									{{each partnerAgency as partner}}\r\n									{{if partner!=null}}\r\n									{{if partner.id!=null}}\r\n									<option value="{{partner.id}}" {{if partnerAgencyId==partner.id}}selected="selected"{{/if}} >\r\n										{{partner.travelAgencyName}}\r\n									</option>\r\n									{{/if}}\r\n									{{/if}}\r\n									{{/each}}\r\n								</select> -->\r\n							</div>\r\n							<label class="control-label no-padding-right pull-left">转客人：</label>\r\n							<div class="col-sm-2">\r\n								<select name="creator" class="col-xs-12" style="width: 220px">\r\n									<option value="">全部</option>\r\n									{{each user1 as user}}\r\n									{{if user!=null}}\r\n									{{if user.id!=null}}\r\n									<option value="{{user.id}}" {{if creator==user.id}}selected="selected"{{/if}} >\r\n										{{user.realName}}\r\n									</option>\r\n									{{/if}}\r\n									{{/if}}\r\n									{{/each}}\r\n								</select>\r\n							</div>\r\n							<div class="form-group">\r\n								<div class="search-area">\r\n									<div class="col-xs-2">\r\n										<div class="col-xs-12">\r\n											<div class="input-group">\r\n												<input class="col-xs-12 date-picker" name="createTime" placeholder="转客起始日期" value="{{startDay}}" type="text" />\r\n													<span class="input-group-addon">\r\n														<i class="fa fa-calendar"></i>\r\n													</span>\r\n											</div>\r\n										</div>\r\n									</div>\r\n\r\n									<div class="col-xs-2">\r\n										<div class="col-xs-12">\r\n											<div class="input-group">\r\n												<input class="col-xs-12 date-picker" name="createTime" placeholder="转客结束日期" value="" type="text" />\r\n													<span class="input-group-addon">\r\n														<i class="fa fa-calendar"></i>\r\n													</span>\r\n											</div>\r\n										</div>\r\n									</div>\r\n									<label class="control-label no-padding-right pull-left" style="display: inline-block; padding-left: 12px;">状态：</label>\r\n									<div class="btn-group btn-status" style="margin-left: 20px">\r\n										<button data-value="{{status}}" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n  											<span>\r\n  											   {{if status == null}}\r\n  													全部\r\n  												{{else if status == 1}}\r\n  													已接收\r\n  												{{else if status == 3}}\r\n  													未使用\r\n  												{{else}}\r\n  													未确认\r\n  												{{/if}}\r\n  											</span>\r\n											<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n										</button>\r\n										<ul class="dropdown-menu">\r\n											<li>\r\n												<a data-value="" href="javascript:void(0)">全部</a>\r\n											</li>\r\n											<li>\r\n												<a data-value="0" href="javascript:void(0)">未确认</a>\r\n											</li>\r\n											<li>\r\n												<a data-value="1" href="javascript:void(0)">已接收</a>\r\n											</li>\r\n											<li>\r\n												<a data-value="3" href="javascript:void(0)">未使用</a>\r\n											</li>\r\n										</ul>\r\n									</div>\r\n									<button class="btn-sm btn-transferOut-search search-btn">\r\n										<i class="ace-icon fa fa-search"></i>\r\n										搜索\r\n									</button>\r\n									<button class="btn btn-sm btn-success btn-transfer-export">导出名单</button>\r\n\r\n								</div>\r\n\r\n								<div class="col-xs-12">\r\n									<div class="page-header">\r\n									      <div class="transferOut-Header-Cost" style="padding-left:20px;">\r\n												<lable style="min-width:10%; display:inline-block;  ">人数合计：<span class="totalAdultCount">{{totalAdultCount}}</span>大<span class="totalChildCount">{{totalChildCount}}</span>小</lable>\r\n												<lable style="min-width:10%; display:inline-block;  ">应付款合计：<span class="totalNeedPay">{{totalNeedPay}} </span>元</lable>\r\n												<lable style="min-width:10%; display:inline-block;  ">已付款合计:<span class="totalPayed">{{totalPayed}}</span>元</lable>\r\n											</div>\r\n									</div>\r\n								</div>\r\n\r\n							</div>\r\n						</div>\r\n					</div>\r\n					<!--我社转出end -->\r\n\r\n					<!--分页&&数据List-->\r\n					<div class="col-xs-12 transferList" ></div>\r\n				</div>\r\n				<!-- 同行转入搜索start2 -->\r\n				<div id="transferIn" class="tab-pane fade clearfix" >\r\n					<div class="form-group" style="margin-bottom:30px; ">\r\n						<div class="search-area">\r\n							<label class="pull-left control-label no-padding-right" style="margin-left: 20px!important;">同行线路产品：</label>\r\n							<div class="col-sm-2">\r\n								<input type="text" class="col-sm-12 chooseLineProductId" placeholder="来源" name="" />\r\n								<input type="hidden" name="lineProductId" value="">\r\n								<!-- <select name="lineProductId" class="col-xs-12">\r\n									<option value="">全部</option>\r\n									{{each lineProduct2 as lineProduct}}\r\n									{{if lineProduct!=null}}\r\n									{{if lineProduct.name!=null}}\r\n									<option value="{{lineProduct.id}}" {{if pager.eqMap.lineProductId==lineProduct.id}}selected="selected"{{/if}}>\r\n										{{lineProduct.name}}\r\n									</option>\r\n									{{/if}}\r\n									{{/if}}\r\n\r\n									{{/each}}\r\n								</select> -->\r\n							</div>\r\n							<div class="form-group">\r\n								<div class="search-area">\r\n									<div class="col-xs-2">\r\n										<div class="col-xs-12">\r\n											<div class="input-group">\r\n												<input class="col-xs-12 date-picker" name="createTime" placeholder="出游起始日期" value="{{startDay}}" type="text" />	\r\n												<span class="input-group-addon">\r\n													<i class="fa fa-calendar"></i>\r\n												</span>\r\n											</div>\r\n										</div>\r\n									</div>\r\n\r\n									<div class="col-xs-2">\r\n										<div class="col-xs-12">\r\n											<div class="input-group">\r\n												<input class="col-xs-12 date-picker" name="endTime" placeholder="出游结束日期" value="" type="text" />\r\n													<span class="input-group-addon">\r\n														<i class="fa fa-calendar"></i>\r\n													</span>\r\n											</div>\r\n										</div>\r\n									</div>\r\n								</div>\r\n\r\n\r\n\r\n								<!-- 								  <label class="control-label no-padding-right pull-left">同行地接：</label>  -->\r\n								<!-- 								  <div class="col-sm-1">  -->\r\n								<!-- 									  <select name="transferPartnerAgencyId" class="col-xs-12">  -->\r\n								<!-- 									  		<option value="">全部</option> -->\r\n								<!-- 							              {{each partnerAgency as pa}}  -->\r\n								<!-- 							               {{if pa!=null}}  -->\r\n								<!-- 						                   {{if pa.id!=null}}     -->\r\n								<!-- 											<option value="{{pa.id}}" {{if partnerAgencyId==pa.id}}selected="selected"{{/if}} > -->\r\n								<!-- 											    {{pa.travelAgencyName}} -->\r\n								<!-- 											</option> -->\r\n								<!-- 											{{/if}} -->\r\n								<!-- 											{{/if}} -->\r\n								<!-- 							             {{/each}}        -->\r\n								<!-- 									  </select>  -->\r\n								<!-- 							      </div> -->\r\n\r\n								<label class="control-label no-padding-right pull-left">同行地接：</label>\r\n								<div class="col-sm-1">\r\n									<input type="text" class="col-sm-12 chooseTravelAgency" placeholder="来源" name="" />\r\n									<input type="hidden" name="travelAgencyId" value="">\r\n									<!-- <select name="transferPartnerAgencyId" class="col-xs-12">\r\n										<option value="">全部</option>\r\n										{{each travelAgency as pa}}\r\n										{{if pa!=null}}\r\n										{{if pa.id!=null}}\r\n										<option value="{{pa.id}}" {{if partnerAgencyId==pa.id}}selected="selected"{{/if}} >\r\n											{{pa.name}}\r\n										</option>\r\n										{{/if}}\r\n										{{/if}}\r\n										{{/each}}\r\n									</select> -->\r\n								</div>\r\n\r\n								<label class="control-label no-padding-right pull-left">状态：</label>\r\n								<div class="btn-group btn-status" style="margin-left: 20px">\r\n									<button data-value="{{status}}" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n									<span>\r\n									   {{if status == null}}\r\n											全部\r\n										{{else if status == 1}}\r\n											已接收\r\n										{{else}}\r\n											未确认\r\n										{{/if}}\r\n									</span>\r\n										<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n									</button>\r\n									<ul class="dropdown-menu">\r\n										<li>\r\n											<a data-value="" href="javascript:void(0)">全部</a>\r\n										</li>\r\n										<li>\r\n											<a data-value="0" href="javascript:void(0)">未确认</a>\r\n										</li>\r\n										<li>\r\n											<a data-value="1" href="javascript:void(0)">已接收</a>\r\n										</li>\r\n									</ul>\r\n								</div>\r\n								<button class="btn-sm btn-transferIn-search search-btn">\r\n									<i class="ace-icon fa fa-search"></i>\r\n									搜索\r\n								</button>&nbsp;\r\n							</div>\r\n						</div>\r\n						<!-- 同行转入搜索end -->\r\n						<!--分页&&数据List-->\r\n						<div class="col-xs-12" >\r\n							<div class="col-xs-12">\r\n								<div class="page-header">\r\n								      <div id="transferIn-Header-Cost" class="form-horizontal">\r\n											<lable style="min-width:10%; display:inline-block;  ">人数合计：<span class="totalAdultCount">0</span>大<span class="totalChildCount">0</span>小</lable>\r\n											<lable style="min-width:10%; display:inline-block;  ">应收款合计：<span class="totalNeedPay">0 </span>元</lable>\r\n											<lable style="min-width:10%; display:inline-block;  ">已收款合计:<span class="totalPayed">0</span>元</lable>\r\n										</div>\r\n								</div>\r\n							</div>\r\n							<div class="col-xs-12 transferInList">\r\n							</div>\r\n						</div>\r\n						<!--我社转出end -->\r\n					</div>\r\n				</div>    \r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});