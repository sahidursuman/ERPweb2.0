/*TMODJS:{"debug":true,"version":270,"md5":"2b7841f1c99aa896f60ff8f4359637aa"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/listMain", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, partnerAgency = $data.partnerAgency, $escape = ($data.partner, 
            $data.$index, $utils.$escape), partnerAgencyId = $data.partnerAgencyId, user1 = $data.user1, creator = ($data.user, 
            $data.creator), startDay = $data.startDay, status = $data.status, totalAdultCount = $data.totalAdultCount, totalChildCount = $data.totalChildCount, totalNeedPay = $data.totalNeedPay, totalPayed = $data.totalPayed, lineProduct2 = $data.lineProduct2, pager = ($data.lineProduct, 
            $data.pager), travelAgency = ($data.pa, $data.travelAgency), $out = "";
            return $out += '<div class="row col-xs-12 transferTouristMain globalAdd"> <div class="col-xs-12"> <div class="tabbable"> <ul class="nav nav-tabs" id="myTab"> <li class="active"> <a data-toggle="tab" href="#transferOut" class="transferOut" aria-expanded="true" data-value="2"> 我社转出 </a> </li> <li> <a data-toggle="tab" href="#transferIn" class="transferIn" aria-expanded="false" data-value="1" > 同行转入 </a> </li> </ul> <div class="tab-content" style="position: relative;top: -2px">  <div id="transferOut" class="tab-pane fade active in clearfix" > <div class="form-group form-horizontal"> <div class="search-area"> <label class="pull-left control-label no-padding-right" style="margin-left: 20px!important;">同行地接：</label> <div class="col-sm-2 marginLeft-Right7"> <input type="text" class="col-sm-12 choosePartnerAgency" placeholder="来源" name="" /> <input type="hidden" name="transferPartnerAgencyId" value=""> <!-- <select name="transferPartnerAgencyId" class="col-xs-12" style="width: 220px"> <option value="">全部</option> ', 
            $line = 28, $each(partnerAgency, function(partner) {
                $out += " ", $line = 29, null != partner && ($out += " ", $line = 30, null != partner.id && ($out += ' <option value="', 
                $line = 31, $out += $escape(partner.id), $out += '" ', $line = 31, partnerAgencyId == partner.id && ($out += 'selected="selected"', 
                $line = 31), $out += " > ", $line = 32, $out += $escape(partner.travelAgencyName), 
                $out += " </option> ", $line = 34), $out += " ", $line = 35), $out += " ", $line = 36;
            }), $out += ' </select> --> </div> <label class="control-label no-padding-right pull-left">转客人：</label> <div class="col-sm-1 marginLeft-Right7"> <select name="creator" class="col-xs-12"> <option value="">全部</option> ', 
            $line = 43, $each(user1, function(user) {
                $out += " ", $line = 44, null != user && ($out += " ", $line = 45, null != user.id && ($out += ' <option value="', 
                $line = 46, $out += $escape(user.id), $out += '" ', $line = 46, creator == user.id && ($out += 'selected="selected"', 
                $line = 46), $out += " > ", $line = 47, $out += $escape(user.realName), $out += " </option> ", 
                $line = 49), $out += " ", $line = 50), $out += " ", $line = 51;
            }), $out += ' </select> </div> <div class="form-group"> <div class="search-area"> <div class="col-xs-2"> <div class="col-xs-9"> <div class="input-group"> <input class="col-xs-12 date-picker" name="createTime" placeholder="转客起始日期" value="', 
            $line = 59, $out += $escape(startDay), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-2"> <div class="col-xs-9" style="margin-left: -92px;"> <div class="input-group"> <input class="col-xs-12 date-picker" name="createTime" placeholder="转客结束日期" value="" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-3" style="left: -175px;"> <label class="control-label no-padding-right pull-left" style="display: inline-block;">状态：</label> <div class="btn-group btn-status" style="margin-left: 7px"> <button data-value="', 
            $line = 81, $out += $escape(status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 83, null == status ? ($out += " 全部 ", $line = 85) : 1 == status ? ($out += " 已接收 ", 
            $line = 87) : 3 == status ? ($out += " 未使用 ", $line = 89) : ($out += " 未确认 ", $line = 91), 
            $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="0" href="javascript:void(0)">未确认</a> </li> <li> <a data-value="1" href="javascript:void(0)">已接收</a> </li> <li> <a data-value="3" href="javascript:void(0)">未使用</a> </li> </ul> </div> <button class="btn-sm btn-transferOut-search search-btn" style="margin-left: 20px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <button class="btn btn-sm btn-success btn-transfer-export R-right" data-right="1180005" style="margin-left: 20px;">导出名单</button> </div> </div> <div class="col-xs-12"> <div class="page-header"> <div class="transferOut-Header-Cost" style="padding-left:20px;"> <lable style="min-width:10%; display:inline-block; ">人数合计：<span class="totalAdultCount">', 
            $line = 125, $out += $escape(totalAdultCount), $out += '</span>大<span class="totalChildCount">', 
            $line = 125, $out += $escape(totalChildCount), $out += '</span>小</lable> <lable style="min-width:10%; display:inline-block; ">应付款合计：<span class="totalNeedPay">', 
            $line = 126, $out += $escape(totalNeedPay), $out += ' </span>元</lable> <lable style="min-width:10%; display:inline-block; ">已付款合计:<span class="totalPayed">', 
            $line = 127, $out += $escape(totalPayed), $out += '</span>元</lable> </div> </div> </div> </div> </div> </div>   <div class="col-xs-12 transferList" ></div> </div>  <div id="transferIn" class="tab-pane fade clearfix" > <div class="form-group" style="margin-bottom:30px; "> <div class="search-area"> <label class="pull-left control-label no-padding-right" style="margin-left: 20px!important;">同行线路产品：</label> <div class="col-sm-2 marginLeft-Right7"> <input type="text" class="col-sm-12 chooseLineProductId" placeholder="来源" name="" /> <input type="hidden" name="lineProductId" value=""> <!-- <select name="lineProductId" class="col-xs-12"> <option value="">全部</option> ', 
            $line = 150, $each(lineProduct2, function(lineProduct) {
                $out += " ", $line = 151, null != lineProduct && ($out += " ", $line = 152, null != lineProduct.name && ($out += ' <option value="', 
                $line = 153, $out += $escape(lineProduct.id), $out += '" ', $line = 153, pager.eqMap.lineProductId == lineProduct.id && ($out += 'selected="selected"', 
                $line = 153), $out += "> ", $line = 154, $out += $escape(lineProduct.name), $out += " </option> ", 
                $line = 156), $out += " ", $line = 157), $out += " ", $line = 159;
            }), $out += ' </select> --> </div> <div class="form-group"> <div class="search-area"> <div class="col-sm-2" style="width:180px"> <div class="input-group"> <input class="col-xs-12 date-picker" name="createTime" placeholder="出游起始日期" value="', 
            $line = 166, $out += $escape(startDay), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <div class="col-xs-2"> <div class="col-xs-9"> <div class="input-group"> <input class="col-xs-12 date-picker" name="endTime" placeholder="出游结束日期" value="" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> </div>     <!-- ', 
            $line = 190, $each(partnerAgency, function(pa) {
                $out += " --> <!-- ", $line = 191, null != pa && ($out += " --> <!-- ", $line = 192, 
                null != pa.id && ($out += ' --> <!-- <option value="', $line = 193, $out += $escape(pa.id), 
                $out += '" ', $line = 193, partnerAgencyId == pa.id && ($out += 'selected="selected"', 
                $line = 193), $out += " > --> <!-- ", $line = 194, $out += $escape(pa.travelAgencyName), 
                $out += " -->  <!-- ", $line = 196), $out += " --> <!-- ", $line = 197), $out += " --> <!-- ", 
                $line = 198;
            }), $out += ' -->   <label class="control-label no-padding-right pull-left timeStartMore">同行地接：</label> <div class="col-sm-1 marginLeft-Right7"> <input type="text" class="col-sm-12 chooseTravelAgency" placeholder="来源" name="" /> <input type="hidden" name="travelAgencyId" value=""> <!-- <select name="transferPartnerAgencyId" class="col-xs-12"> <option value="">全部</option> ', 
            $line = 209, $each(travelAgency, function(pa) {
                $out += " ", $line = 210, null != pa && ($out += " ", $line = 211, null != pa.id && ($out += ' <option value="', 
                $line = 212, $out += $escape(pa.id), $out += '" ', $line = 212, partnerAgencyId == pa.id && ($out += 'selected="selected"', 
                $line = 212), $out += " > ", $line = 213, $out += $escape(pa.name), $out += " </option> ", 
                $line = 215), $out += " ", $line = 216), $out += " ", $line = 217;
            }), $out += ' </select> --> </div> <label class="control-label no-padding-right pull-left" style="margin-left: 20px">状态：</label> <div class="btn-group btn-status" style="margin-left: 7px" > <button data-value="', 
            $line = 225, $out += $escape(status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 227, null == status ? ($out += " 全部 ", $line = 229) : 1 == status ? ($out += " 已接收 ", 
            $line = 231) : ($out += " 未确认 ", $line = 233), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="0" href="javascript:void(0)">未确认</a> </li> <li> <a data-value="1" href="javascript:void(0)">已接收</a> </li> </ul> </div> <button class="btn-sm btn-transferIn-search search-btn" style="margin-left:20px"> <i class="ace-icon fa fa-search"></i> 搜索 </button>&nbsp; </div> </div>   <div class="col-xs-12" > <div class="col-xs-12"> <div class="page-header"> <div id="transferIn-Header-Cost" class="form-horizontal"> <lable style="min-width:10%; display:inline-block; ">人数合计：<span class="totalAdultCount">0</span>大<span class="totalChildCount">0</span>小</lable> <lable style="min-width:10%; display:inline-block; ">应收款合计：<span class="totalNeedPay">0 </span>元</lable> <lable style="min-width:10%; display:inline-block; ">已收款合计:<span class="totalPayed">0</span>元</lable> </div> </div> </div> <div class="col-xs-12 transferInList"> </div> </div>  </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row col-xs-12 transferTouristMain globalAdd">\r\n	<div class="col-xs-12">\r\n		<div class="tabbable">\r\n			<ul class="nav nav-tabs" id="myTab">\r\n				<li class="active">\r\n					<a data-toggle="tab" href="#transferOut" class="transferOut" aria-expanded="true" data-value="2">\r\n						我社转出\r\n					</a>\r\n				</li>\r\n				<li>\r\n					<a data-toggle="tab" href="#transferIn" class="transferIn"  aria-expanded="false" data-value="1" >\r\n						同行转入\r\n					</a>\r\n				</li>\r\n			</ul>\r\n			<div class="tab-content" style="position: relative;top: -2px">\r\n				<!--我社转出start -1-->\r\n				<div id="transferOut" class="tab-pane fade active in clearfix" >\r\n				\r\n					<div class="form-group form-horizontal">\r\n						<div class="search-area">\r\n							<label class="pull-left control-label no-padding-right" style="margin-left: 20px!important;">同行地接：</label>\r\n							<div class="col-sm-2 marginLeft-Right7">\r\n								<input type="text" class="col-sm-12 choosePartnerAgency" placeholder="来源" name="" />\r\n								<input type="hidden" name="transferPartnerAgencyId" value="">\r\n								<!-- <select name="transferPartnerAgencyId" class="col-xs-12" style="width: 220px">\r\n									<option value="">全部</option>\r\n									{{each partnerAgency as partner}}\r\n									{{if partner!=null}}\r\n									{{if partner.id!=null}}\r\n									<option value="{{partner.id}}" {{if partnerAgencyId==partner.id}}selected="selected"{{/if}} >\r\n										{{partner.travelAgencyName}}\r\n									</option>\r\n									{{/if}}\r\n									{{/if}}\r\n									{{/each}}\r\n								</select> -->\r\n							</div>\r\n							<label class="control-label no-padding-right pull-left">转客人：</label>\r\n							<div class="col-sm-1 marginLeft-Right7">\r\n								<select name="creator" class="col-xs-12">\r\n									<option value="">全部</option>\r\n									{{each user1 as user}}\r\n									{{if user!=null}}\r\n									{{if user.id!=null}}\r\n									<option value="{{user.id}}" {{if creator==user.id}}selected="selected"{{/if}} >\r\n										{{user.realName}}\r\n									</option>\r\n									{{/if}}\r\n									{{/if}}\r\n									{{/each}}\r\n								</select>\r\n							</div>\r\n							<div class="form-group">\r\n								<div class="search-area">\r\n									<div class="col-xs-2">\r\n										<div class="col-xs-9">\r\n											<div class="input-group">\r\n												<input class="col-xs-12 date-picker" name="createTime" placeholder="转客起始日期" value="{{startDay}}" type="text" />\r\n													<span class="input-group-addon">\r\n														<i class="fa fa-calendar"></i>  \r\n													</span>\r\n											</div>\r\n										</div>\r\n									</div>\r\n\r\n									<div class="col-xs-2">\r\n										<div class="col-xs-9" style="margin-left: -92px;">\r\n											<div class="input-group">\r\n												<input class="col-xs-12 date-picker" name="createTime" placeholder="转客结束日期" value="" type="text" />\r\n													<span class="input-group-addon">\r\n														<i class="fa fa-calendar"></i>\r\n													</span>\r\n											</div>\r\n										</div>\r\n									</div>\r\n\r\n									<div class="col-xs-3" style="left: -175px;">\r\n									<label class="control-label no-padding-right pull-left" style="display: inline-block;">状态：</label>\r\n									<div class="btn-group btn-status" style="margin-left: 7px">\r\n										<button data-value="{{status}}" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n  											<span>\r\n  											   {{if status == null}}\r\n  													全部\r\n  												{{else if status == 1}}\r\n  													已接收\r\n  												{{else if status == 3}}\r\n  													未使用\r\n  												{{else}}\r\n  													未确认\r\n  												{{/if}}\r\n  											</span>\r\n											<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n										</button>\r\n										<ul class="dropdown-menu">\r\n											<li>\r\n												<a data-value="" href="javascript:void(0)">全部</a>\r\n											</li>\r\n											<li>\r\n												<a data-value="0" href="javascript:void(0)">未确认</a>\r\n											</li>\r\n											<li>\r\n												<a data-value="1" href="javascript:void(0)">已接收</a>\r\n											</li>\r\n											<li>\r\n												<a data-value="3" href="javascript:void(0)">未使用</a>\r\n											</li>\r\n										</ul>\r\n									</div>\r\n\r\n                                    \r\n									<button class="btn-sm btn-transferOut-search search-btn" style="margin-left: 20px;">\r\n										<i class="ace-icon fa fa-search"></i>\r\n										搜索\r\n									</button>\r\n									<button class="btn btn-sm btn-success btn-transfer-export R-right" data-right="1180005" style="margin-left: 20px;">导出名单</button>\r\n\r\n								</div>\r\n\r\n								  </div>\r\n\r\n								<div class="col-xs-12">\r\n									<div class="page-header">\r\n									      <div class="transferOut-Header-Cost" style="padding-left:20px;">\r\n												<lable style="min-width:10%; display:inline-block;  ">人数合计：<span class="totalAdultCount">{{totalAdultCount}}</span>大<span class="totalChildCount">{{totalChildCount}}</span>小</lable>\r\n												<lable style="min-width:10%; display:inline-block;  ">应付款合计：<span class="totalNeedPay">{{totalNeedPay}} </span>元</lable>\r\n												<lable style="min-width:10%; display:inline-block;  ">已付款合计:<span class="totalPayed">{{totalPayed}}</span>元</lable>\r\n											</div>\r\n									</div>\r\n								</div>\r\n\r\n							</div>\r\n						</div>\r\n					</div>\r\n					<!--我社转出end -->\r\n\r\n					<!--分页&&数据List-->\r\n					<div class="col-xs-12 transferList" ></div>\r\n				</div>\r\n				<!-- 同行转入搜索start2 -->\r\n				<div id="transferIn" class="tab-pane fade clearfix" >\r\n					<div class="form-group" style="margin-bottom:30px; ">\r\n						<div class="search-area">\r\n							<label class="pull-left control-label no-padding-right" style="margin-left: 20px!important;">同行线路产品：</label>\r\n							<div class="col-sm-2 marginLeft-Right7">\r\n								<input type="text" class="col-sm-12 chooseLineProductId" placeholder="来源" name="" />\r\n								<input type="hidden" name="lineProductId" value="">\r\n								<!-- <select name="lineProductId" class="col-xs-12">\r\n									<option value="">全部</option>\r\n									{{each lineProduct2 as lineProduct}}\r\n									{{if lineProduct!=null}}\r\n									{{if lineProduct.name!=null}}\r\n									<option value="{{lineProduct.id}}" {{if pager.eqMap.lineProductId==lineProduct.id}}selected="selected"{{/if}}>\r\n										{{lineProduct.name}}\r\n									</option>\r\n									{{/if}}\r\n									{{/if}}\r\n\r\n									{{/each}}\r\n								</select> -->\r\n							</div>\r\n							<div class="form-group">\r\n								<div class="search-area">\r\n										<div class="col-sm-2" style="width:180px">\r\n											<div class="input-group">\r\n												<input class="col-xs-12 date-picker" name="createTime" placeholder="出游起始日期" value="{{startDay}}" type="text" />	\r\n												<span class="input-group-addon">\r\n													<i class="fa fa-calendar"></i>\r\n												</span>\r\n											</div>\r\n										</div>\r\n									<div class="col-xs-2">\r\n										<div class="col-xs-9">\r\n											<div class="input-group">\r\n												<input class="col-xs-12 date-picker" name="endTime" placeholder="出游结束日期" value="" type="text" />\r\n													<span class="input-group-addon">\r\n														<i class="fa fa-calendar"></i>\r\n													</span>\r\n											</div>\r\n										</div>\r\n									</div>\r\n								</div>\r\n\r\n\r\n\r\n								<!-- 								  <label class="control-label no-padding-right pull-left">同行地接：</label>  -->\r\n								<!-- 								  <div class="col-sm-1">  -->\r\n								<!-- 									  <select name="transferPartnerAgencyId" class="col-xs-12">  -->\r\n								<!-- 									  		<option value="">全部</option> -->\r\n								<!-- 							              {{each partnerAgency as pa}}  -->\r\n								<!-- 							               {{if pa!=null}}  -->\r\n								<!-- 						                   {{if pa.id!=null}}     -->\r\n								<!-- 											<option value="{{pa.id}}" {{if partnerAgencyId==pa.id}}selected="selected"{{/if}} > -->\r\n								<!-- 											    {{pa.travelAgencyName}} -->\r\n								<!-- 											</option> -->\r\n								<!-- 											{{/if}} -->\r\n								<!-- 											{{/if}} -->\r\n								<!-- 							             {{/each}}        -->\r\n								<!-- 									  </select>  -->\r\n								<!-- 							      </div> -->\r\n\r\n                            \r\n								<label class="control-label no-padding-right pull-left timeStartMore">同行地接：</label>\r\n								<div class="col-sm-1 marginLeft-Right7">\r\n									<input type="text" class="col-sm-12 chooseTravelAgency" placeholder="来源" name="" /> \r\n									<input type="hidden" name="travelAgencyId" value="">  \r\n									<!-- <select name="transferPartnerAgencyId" class="col-xs-12">\r\n										<option value="">全部</option>\r\n										{{each travelAgency as pa}}\r\n										{{if pa!=null}}\r\n										{{if pa.id!=null}}\r\n										<option value="{{pa.id}}" {{if partnerAgencyId==pa.id}}selected="selected"{{/if}} >\r\n											{{pa.name}}\r\n										</option>\r\n										{{/if}}\r\n										{{/if}}\r\n										{{/each}}\r\n									</select> -->\r\n								</div>\r\n                                \r\n\r\n\r\n								<label class="control-label no-padding-right pull-left" style="margin-left: 20px">状态：</label>\r\n								<div class="btn-group btn-status" style="margin-left: 7px" >\r\n									<button data-value="{{status}}" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n									<span>\r\n									   {{if status == null}}\r\n											全部\r\n										{{else if status == 1}}\r\n											已接收\r\n										{{else}}\r\n											未确认\r\n										{{/if}}\r\n									</span>\r\n										<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n									</button>\r\n									<ul class="dropdown-menu">\r\n										<li>\r\n											<a data-value="" href="javascript:void(0)">全部</a>\r\n										</li>\r\n										<li>\r\n											<a data-value="0" href="javascript:void(0)">未确认</a> \r\n										</li>\r\n										<li>\r\n											<a data-value="1" href="javascript:void(0)">已接收</a>\r\n										</li>\r\n									</ul>\r\n								</div>\r\n								<button class="btn-sm btn-transferIn-search search-btn" style="margin-left:20px">\r\n									<i class="ace-icon fa fa-search"></i>\r\n									搜索\r\n								</button>&nbsp;\r\n							</div>\r\n						</div>\r\n						<!-- 同行转入搜索end -->\r\n						<!--分页&&数据List-->\r\n						<div class="col-xs-12" >\r\n							<div class="col-xs-12">\r\n								<div class="page-header">\r\n								      <div id="transferIn-Header-Cost" class="form-horizontal">\r\n											<lable style="min-width:10%; display:inline-block;  ">人数合计：<span class="totalAdultCount">0</span>大<span class="totalChildCount">0</span>小</lable>\r\n											<lable style="min-width:10%; display:inline-block;  ">应收款合计：<span class="totalNeedPay">0 </span>元</lable>\r\n											<lable style="min-width:10%; display:inline-block;  ">已收款合计:<span class="totalPayed">0</span>元</lable>\r\n										</div>\r\n								</div>\r\n							</div>\r\n							<div class="col-xs-12 transferInList">\r\n							</div>\r\n						</div>\r\n						<!--我社转出end -->\r\n					</div>\r\n				</div>    \r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});