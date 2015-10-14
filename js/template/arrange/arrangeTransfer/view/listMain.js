/*TMODJS:{"debug":true,"version":14,"md5":"15e6d2e01de10b09649c68e112c8ad85"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/listMain", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, partnerAgency = $data.partnerAgency, $escape = ($data.partner, 
            $data.$index, $utils.$escape), partnerAgencyId = $data.partnerAgencyId, user1 = $data.user1, creator = ($data.user, 
            $data.creator), startDay = $data.startDay, lineProduct2 = $data.lineProduct2, pager = ($data.lineProduct, 
            $data.pager), travelAgency = ($data.pa, $data.travelAgency), managerId = $data.managerId, user2 = $data.user2, $out = "";
            return $out += '<div class="row col-xs-12 transferTouristMain"> <div class="col-xs-12"> <div class="tabbable"> <ul class="nav nav-tabs" id="myTab"> <li class="active"> <a data-toggle="tab" href="#transferOut" class="transferOut" aria-expanded="true" data-value="2"> <i class="fa fa-paper-plane fa-2"></i> 我社转出 </a> </li> <li> <a data-toggle="tab" href="#transferIn" class="transferIn" aria-expanded="false" data-value="1" > <i class="fa fa-hourglass"></i> 同行转入 </a> </li> </ul> <div class="tab-content">  <div id="transferOut" class="tab-pane fade active in clearfix" > <div class="col-xs-12"> <div class="page-header"> <h1> <small class="transferOut-Header-Cost"> <i class="ace-icon fa fa-angle-double-right"></i> <lable style="min-width:10%; display:inline-block; ">人数合计：<span class="totalAdultCount">0</span>大<span class="totalChildCount">0</span>小</lable> <lable style="min-width:10%; display:inline-block; ">应付款合计：<span class="totalNeedPay">0 </span>元</lable> <lable style="min-width:10%; display:inline-block; ">已付款合计:<span class="totalPayed">0</span>元</lable> </small> </h1> </div> </div> <div class="form-group form-horizontal"> <div class="search-area"> <label class="pull-left control-label no-padding-right">同行地接：</label> <div class="col-sm-2"> <select name="transferPartnerAgencyId" class="col-xs-12"> <option value="">全部</option> ', 
            $line = 43, $each(partnerAgency, function(partner) {
                $out += " ", $line = 44, null != partner && ($out += " ", $line = 45, null != partner.id && ($out += ' <option value="', 
                $line = 46, $out += $escape(partner.id), $out += '" ', $line = 46, partnerAgencyId == partner.id && ($out += 'selected="selected"', 
                $line = 46), $out += " > ", $line = 47, $out += $escape(partner.travelAgencyName), 
                $out += " </option> ", $line = 49), $out += " ", $line = 50), $out += " ", $line = 51;
            }), $out += ' </select> </div> <label class="control-label no-padding-right pull-left">转客人：</label> <div class="col-sm-2"> <select name="creator" class="col-xs-12"> <option value="">全部</option> ', 
            $line = 59, $each(user1, function(user) {
                $out += " ", $line = 60, null != user && ($out += " ", $line = 61, null != user.id && ($out += ' <option value="', 
                $line = 62, $out += $escape(user.id), $out += '" ', $line = 62, creator == user.id && ($out += 'selected="selected"', 
                $line = 62), $out += " > ", $line = 63, $out += $escape(user.realName), $out += " </option> ", 
                $line = 65), $out += " ", $line = 66), $out += " ", $line = 67;
            }), $out += ' </select> </div> <div class="form-group"> <div class="search-area"> <div class="col-xs-2"> <div class="col-xs-12"> <div class="input-group"> <input class="col-xs-12 date-picker" name="createTime" placeholder="转客起始日期" value="', 
            $line = 77, $out += $escape(startDay), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-2"> <div class="col-xs-12"> <div class="input-group"> <input class="col-xs-12 date-picker" name="createTime" placeholder="转客结束日期" value="" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <label class="control-label no-padding-right pull-left" style="display: inline-block; padding-left: 12px; ">状态：</label> <div class="col-sm-1"> <select name="status" class="col-xs-12"> <option value="">全部</option> <option value="0" >未确认</option> <option value="1">已接收</option> <option value="3">未使用</option> </select> </div> <button class="btn-sm btn-transferOut-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <button class="btn btn-sm btn-success btn-transfer-export">导出名单</button> </div> </div> </div> </div>   <div class="col-xs-12 transferList" ></div> </div>  <div id="transferIn" class="tab-pane fade clearfix" > <div class="col-xs-12"> <div class="page-header"> <h1> <small> <i class="ace-icon fa fa-angle-double-right"></i> <lable style="min-width:10%; display:inline-block; ">人数合计：<span class="totalAdultCount">0</span>大<span class="totalChildCount">0</span>小</lable> <lable style="min-width:10%; display:inline-block; ">应付款合计：<span class="totalNeedPay">0</span>元</lable> <lable style="min-width:10%; display:inline-block; ">已付款合计:<span class="totalPayed">0</span>元</lable> </small> </h1> </div> </div> <div class="form-group" style="margin-bottom:30px; "> <div class="search-area"> <label class="pull-left control-label no-padding-right">同行线路产品：</label> <div class="col-sm-1"> <select name="lineProductId" class="col-xs-12"> <option value="">全部</option> ', 
            $line = 152, $each(lineProduct2, function(lineProduct) {
                $out += " ", $line = 153, null != lineProduct && ($out += " ", $line = 154, null != lineProduct.name && ($out += ' <option value="', 
                $line = 155, $out += $escape(lineProduct.id), $out += '" ', $line = 155, pager.eqMap.lineProductId == lineProduct.id && ($out += 'selected="selected"', 
                $line = 155), $out += "> ", $line = 156, $out += $escape(lineProduct.name), $out += " </option> ", 
                $line = 158), $out += " ", $line = 159), $out += " ", $line = 161;
            }), $out += ' </select> </div> <div class="form-group"> <div class="search-area"> <div class="col-xs-2 no-padding-right"> <div class="col-xs-12"> <div class="input-group"> <input class="col-xs-12 date-picker" name="createTime" placeholder="出游起始日期" value="', 
            $line = 172, $out += $escape(startDay), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-2 no-padding-right"> <div class="col-xs-12"> <div class="input-group"> <input class="col-xs-12 date-picker" name="endTime" placeholder="出游结束日期" value="" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> </div> </div>     <!-- ', 
            $line = 201, $each(partnerAgency, function(pa) {
                $out += " --> <!-- ", $line = 202, null != pa && ($out += " --> <!-- ", $line = 203, 
                null != pa.id && ($out += ' --> <!-- <option value="', $line = 204, $out += $escape(pa.id), 
                $out += '" ', $line = 204, partnerAgencyId == pa.id && ($out += 'selected="selected"', 
                $line = 204), $out += " > --> <!-- ", $line = 205, $out += $escape(pa.travelAgencyName), 
                $out += " -->  <!-- ", $line = 207), $out += " --> <!-- ", $line = 208), $out += " --> <!-- ", 
                $line = 209;
            }), $out += ' -->   <label class="control-label no-padding-right pull-left">同行地接：</label> <div class="col-sm-1"> <select name="transferPartnerAgencyId" class="col-xs-12"> <option value="">全部</option> ', 
            $line = 217, $each(travelAgency, function(pa) {
                $out += " ", $line = 218, null != pa && ($out += " ", $line = 219, null != pa.id && ($out += ' <option value="', 
                $line = 220, $out += $escape(pa.id), $out += '" ', $line = 220, partnerAgencyId == pa.id && ($out += 'selected="selected"', 
                $line = 220), $out += " > ", $line = 221, $out += $escape(pa.name), $out += " </option> ", 
                $line = 223), $out += " ", $line = 224), $out += " ", $line = 225;
            }), $out += " </select> </div>     <!-- ", $line = 234, $each(partnerAgency, function(pa) {
                $out += " --> <!-- ", $line = 235, null != pa && ($out += " --> <!-- ", $line = 236, 
                null != pa.id && ($out += ' --> <!-- <option value="', $line = 237, $out += $escape(pa.id), 
                $out += '" ', $line = 237, managerId == pa.id && ($out += 'selected="selected"', 
                $line = 237), $out += " > --> <!-- ", $line = 238, $out += $escape(pa.managerName), 
                $out += " -->  <!-- ", $line = 240), $out += " --> <!-- ", $line = 241), $out += " --> <!-- ", 
                $line = 242;
            }), $out += ' -->   <label class="control-label no-padding-right pull-left">转客人：</label> <div class="col-sm-2"> <select name="creator" class="col-xs-12"> <option value="">全部</option> ', 
            $line = 253, $each(user2, function(user) {
                $out += " ", $line = 254, null != user && ($out += " ", $line = 255, null != user.id && ($out += ' <option value="', 
                $line = 256, $out += $escape(user.id), $out += '" ', $line = 256, creator == user.id && ($out += 'selected="selected"', 
                $line = 256), $out += " > ", $line = 257, $out += $escape(user.realName), $out += " </option> ", 
                $line = 259), $out += " ", $line = 260), $out += " ", $line = 261;
            }), $out += ' </select> </div> <label class="control-label no-padding-right pull-left">状态：</label> <div class="col-sm-1"> <select name="status" class="col-xs-12"> <option value="" >全部</option> <option value="0" >未确认</option> <option value="1">已接收</option> </select> </div> <button class="btn-sm btn-transferIn-search pull-right search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button>&nbsp; </div> </div>   <div class="col-xs-12 transferInList" ></div>  </div> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row col-xs-12 transferTouristMain">\r\n		<div class="col-xs-12">    \r\n			<div class="tabbable">\r\n				<ul class="nav nav-tabs" id="myTab">\r\n					<li class="active">\r\n						<a data-toggle="tab" href="#transferOut" class="transferOut" aria-expanded="true" data-value="2">\r\n						<i class="fa fa-paper-plane fa-2"></i>\r\n							我社转出	\r\n						</a>\r\n					</li> \r\n		\r\n					<li>\r\n						<a data-toggle="tab" href="#transferIn" class="transferIn"  aria-expanded="false" data-value="1" >\r\n						<i class="fa fa-hourglass"></i>\r\n							同行转入\r\n						</a>\r\n					</li>\r\n				</ul>\r\n				\r\n						\r\n			    <div class="tab-content">\r\n			    <!--我社转出start -1-->\r\n					<div id="transferOut" class="tab-pane fade active in clearfix" >							\r\n						<div class="col-xs-12"> \r\n						    <div class="page-header">    \r\n								<h1>\r\n									<small class="transferOut-Header-Cost">\r\n										<i class="ace-icon fa fa-angle-double-right"></i>                    \r\n										<lable style="min-width:10%; display:inline-block;  ">人数合计：<span class="totalAdultCount">0</span>大<span class="totalChildCount">0</span>小</lable>  \r\n									    <lable style="min-width:10%; display:inline-block;  ">应付款合计：<span class="totalNeedPay">0 </span>元</lable>    \r\n									    <lable style="min-width:10%; display:inline-block;  ">已付款合计:<span class="totalPayed">0</span>元</lable>          \r\n									</small>                 \r\n								  </h1>\r\n							 </div>\r\n					    </div>\r\n					        \r\n						<div class="form-group form-horizontal">\r\n					  		<div class="search-area">\r\n							  <label class="pull-left control-label no-padding-right">同行地接：</label> \r\n							  <div class="col-sm-2"> \r\n								  <select name="transferPartnerAgencyId" class="col-xs-12"> \r\n								  	 <option value="">全部</option>\r\n						              {{each partnerAgency as partner}} \r\n						              {{if partner!=null}} \r\n						              {{if partner.id!=null}}     \r\n										<option value="{{partner.id}}" {{if partnerAgencyId==partner.id}}selected="selected"{{/if}} >\r\n										    {{partner.travelAgencyName}}  \r\n										</option>\r\n									   {{/if}}  \r\n									   {{/if}}\r\n						             {{/each}}       \r\n								  </select> \r\n						      </div>\r\n\r\n						      <label class="control-label no-padding-right pull-left">转客人：</label> \r\n							  <div class="col-sm-2"> \r\n								  <select name="creator" class="col-xs-12">    \r\n								  		<option value="">全部</option>\r\n									     {{each user1 as user}}\r\n									     		{{if user!=null}}\r\n									     			{{if user.id!=null}}\r\n														<option value="{{user.id}}" {{if creator==user.id}}selected="selected"{{/if}} >\r\n														    {{user.realName}}\r\n														</option>\r\n												    {{/if}}\r\n												{{/if}}\r\n							             {{/each}}\r\n								  </select> \r\n						      </div>\r\n						      \r\n				       \r\n						       	<div class="form-group">\r\n									<div class="search-area">\r\n										<div class="col-xs-2">\r\n											<div class="col-xs-12">\r\n												<div class="input-group">\r\n													<input class="col-xs-12 date-picker" name="createTime" placeholder="转客起始日期" value="{{startDay}}" type="text" />	\r\n													<span class="input-group-addon">\r\n														<i class="fa fa-calendar"></i>\r\n													</span>\r\n												</div>\r\n											</div>\r\n										</div>\r\n							\r\n										<div class="col-xs-2">\r\n											<div class="col-xs-12">\r\n												<div class="input-group">\r\n													<input class="col-xs-12 date-picker" name="createTime" placeholder="转客结束日期" value="" type="text" />	\r\n													<span class="input-group-addon">\r\n														<i class="fa fa-calendar"></i>\r\n													</span>\r\n												</div>\r\n											</div>\r\n										</div>\r\n										\r\n										\r\n										\r\n									   	\r\n								      <label class="control-label no-padding-right pull-left" style="display: inline-block; padding-left: 12px;  ">状态：</label> \r\n									  <div class="col-sm-1"> \r\n										  <select name="status" class="col-xs-12"> \r\n										  	  <option value="">全部</option>\r\n											  <option value="0" >未确认</option>\r\n											  <option value="1">已接收</option>\r\n											  <option value="3">未使用</option>  \r\n										  </select> \r\n								      </div>    \r\n										          \r\n									   <button class="btn-sm btn-transferOut-search search-btn">\r\n									   <i class="ace-icon fa fa-search"></i>\r\n											搜索\r\n									   </button>\r\n									   <button class="btn btn-sm btn-success btn-transfer-export">导出名单</button>\r\n								   \r\n									</div>\r\n									\r\n								</div>\r\n				              </div>\r\n		                  </div>\r\n		                  <!--我社转出end -->\r\n		                     \r\n		                  <!--分页&&数据List-->\r\n		                  <div class="col-xs-12 transferList" ></div>\r\n	                 </div>   \r\n\r\n					<!-- 同行转入搜索start2 -->		\r\n					<div id="transferIn" class="tab-pane fade clearfix" >  \r\n						\r\n					  <div class="col-xs-12"> \r\n						    <div class="page-header">\r\n								<h1>\r\n									<small>\r\n										<i class="ace-icon fa fa-angle-double-right"></i>\r\n								        <lable style="min-width:10%; display:inline-block;  ">人数合计：<span class="totalAdultCount">0</span>大<span class="totalChildCount">0</span>小</lable>  \r\n									    <lable style="min-width:10%; display:inline-block;  ">应付款合计：<span class="totalNeedPay">0</span>元</lable>       \r\n									    <lable style="min-width:10%; display:inline-block;  ">已付款合计:<span class="totalPayed">0</span>元</lable>        \r\n									</small>\r\n								  </h1>\r\n							 </div>\r\n					    </div>\r\n						\r\n					    \r\n					\r\n					\r\n						<div class="form-group" style="margin-bottom:30px; ">\r\n						  	<div class="search-area">\r\n								  <label class="pull-left control-label no-padding-right">同行线路产品：</label> \r\n								  <div class="col-sm-1"> \r\n								  \r\n										 <select name="lineProductId" class="col-xs-12"> \r\n										  	<option value="">全部</option>\r\n								             {{each lineProduct2 as lineProduct}}\r\n								             	{{if lineProduct!=null}}\r\n									             	{{if lineProduct.name!=null}}   \r\n										                <option value="{{lineProduct.id}}" {{if pager.eqMap.lineProductId==lineProduct.id}}selected="selected"{{/if}}>\r\n										                    {{lineProduct.name}}\r\n										                </option>\r\n									                {{/if}}\r\n								                {{/if}}\r\n								                \r\n								             {{/each}}\r\n										  </select> \r\n							      </div> \r\n							      \r\n							      \r\n							      \r\n							    <div class="form-group">\r\n									<div class="search-area">\r\n										<div class="col-xs-2 no-padding-right">\r\n											<div class="col-xs-12">\r\n												<div class="input-group">\r\n													<input class="col-xs-12 date-picker" name="createTime" placeholder="出游起始日期" value="{{startDay}}" type="text" />	\r\n													<span class="input-group-addon">\r\n														<i class="fa fa-calendar"></i>\r\n													</span>\r\n												</div>\r\n											</div>\r\n										</div>\r\n										\r\n										\r\n										<div class="col-xs-2 no-padding-right">\r\n											<div class="col-xs-12">\r\n												<div class="input-group">\r\n													<input class="col-xs-12 date-picker" name="endTime" placeholder="出游结束日期" value="" type="text" />	\r\n													<span class="input-group-addon">\r\n														<i class="fa fa-calendar"></i>\r\n													</span>\r\n												</div>\r\n											</div>\r\n										</div>\r\n										\r\n									</div>\r\n								</div>\r\n						\r\n							      \r\n\r\n<!-- 								  <label class="control-label no-padding-right pull-left">同行地接：</label>  -->\r\n<!-- 								  <div class="col-sm-1">  -->\r\n<!-- 									  <select name="transferPartnerAgencyId" class="col-xs-12">  -->\r\n<!-- 									  		<option value="">全部</option> -->\r\n<!-- 							              {{each partnerAgency as pa}}  -->\r\n<!-- 							               {{if pa!=null}}  -->\r\n<!-- 						                   {{if pa.id!=null}}     -->\r\n<!-- 											<option value="{{pa.id}}" {{if partnerAgencyId==pa.id}}selected="selected"{{/if}} > -->\r\n<!-- 											    {{pa.travelAgencyName}} -->\r\n<!-- 											</option> -->\r\n<!-- 											{{/if}} -->\r\n<!-- 											{{/if}} -->\r\n<!-- 							             {{/each}}        -->\r\n<!-- 									  </select>  -->\r\n<!-- 							      </div> -->\r\n							      \r\n							       <label class="control-label no-padding-right pull-left">同行地接：</label> \r\n								  <div class="col-sm-1"> \r\n									  <select name="transferPartnerAgencyId" class="col-xs-12"> \r\n									  		<option value="">全部</option>\r\n							              {{each travelAgency as pa}} \r\n							               {{if pa!=null}} \r\n						                   {{if pa.id!=null}}    \r\n											<option value="{{pa.id}}" {{if partnerAgencyId==pa.id}}selected="selected"{{/if}} >\r\n											    {{pa.name}}\r\n											</option>\r\n											{{/if}}\r\n											{{/if}}\r\n							             {{/each}}       \r\n									  </select> \r\n							      </div>\r\n							      \r\n							      \r\n<!-- 								  <label class="control-label pull-left no-padding-right">同行联系人：</label> -->\r\n<!-- 								  <div class="col-sm-1"> -->\r\n<!-- 									  <select name="touristGroupId" > -->\r\n<!-- 									  		<option value="">全部</option>      -->\r\n<!-- 									     {{each partnerAgency as pa}} -->\r\n<!-- 									      {{if pa!=null}}  -->\r\n<!-- 						                  {{if pa.id!=null}}  -->\r\n<!-- 											<option value="{{pa.id}}" {{if managerId==pa.id}}selected="selected"{{/if}} > -->\r\n<!-- 											{{pa.managerName}} -->\r\n<!-- 											</option> -->\r\n<!-- 										   {{/if}} -->\r\n<!-- 										   {{/if}} -->\r\n<!-- 							             {{/each}} -->\r\n<!-- 									  </select>  -->\r\n<!-- 							      </div> -->\r\n							      \r\n							      \r\n							           \r\n							      \r\n						      <label class="control-label no-padding-right pull-left">转客人：</label> \r\n							  <div class="col-sm-2"> \r\n								  <select name="creator" class="col-xs-12">    \r\n								  		<option value="">全部</option>\r\n									     {{each user2 as user}}\r\n									     		{{if user!=null}}\r\n									     			{{if user.id!=null}}\r\n														<option value="{{user.id}}" {{if creator==user.id}}selected="selected"{{/if}} >\r\n														    {{user.realName}}\r\n														</option>\r\n												    {{/if}}\r\n												{{/if}}\r\n							             {{/each}}\r\n								  </select> \r\n						      </div>\r\n							      \r\n			      \r\n							      <label class="control-label no-padding-right pull-left">状态：</label>\r\n								  <div class="col-sm-1"> \r\n									  <select name="status" class="col-xs-12"> \r\n									  	  <option value="" >全部</option>\r\n										  <option value="0" >未确认</option>\r\n										  <option value="1">已接收</option> \r\n									  </select> \r\n							      </div>    \r\n							   <button class="btn-sm btn-transferIn-search pull-right search-btn">\r\n							   <i class="ace-icon fa fa-search"></i>\r\n									搜索\r\n							   </button>&nbsp;\r\n						  </div>\r\n					    </div>\r\n						  <!-- 同行转入搜索end -->  \r\n				      <!--分页&&数据List-->\r\n	                  <div class="col-xs-12 transferInList" ></div>\r\n	                  <!--我社转出end -->\r\n					</div>				 \r\n		   		</div>	 \r\n			</div>\r\n	  	</div>\r\n  	</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});