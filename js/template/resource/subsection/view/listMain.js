<<<<<<< HEAD
/*TMODJS:{"debug":true,"version":193,"md5":"d6de28a38f7895c85ffcdb42280630d8"}*/
=======
/*TMODJS:{"debug":true,"version":200,"md5":"d6de28a38f7895c85ffcdb42280630d8"}*/
>>>>>>> 744a5aa9082ae55eacebf7462c3fd21fea08a1da
define(function(require) {
    return require("../../../template")("resource/subsection/view/listMain", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, fromPartnerAgencyList = $data.fromPartnerAgencyList, $escape = ($data.partnerAgency, 
            $data.$index, $utils.$escape), lineProductList = $data.lineProductList, creatorList = ($data.lineProduct, 
            $data.creatorList), $out = ($data.creator, "");
            return $out += '<div class="search-area subsectionSearchForm"> <div class="form-horizontal"> <label class="pull-left text-right control-label no-padding-right">来源:</label> <div class="col-sm-1"> <select name="partnerAgencyId" class="col-sm-12"> <option value=\'\'>全部</option> ', 
            $line = 7, $each(fromPartnerAgencyList, function(partnerAgency) {
                $out += ' <option value="', $line = 8, $out += $escape(partnerAgency.id), $out += '">', 
                $line = 8, $out += $escape(partnerAgency.travelAgencyName), $out += "</option> ", 
                $line = 9;
            }), $out += ' </select> </div> <label class="pull-left text-right control-label no-padding-right">线路:</label> <div class="col-sm-1"> <select name="lineProductId" class="col-sm-12"> <option value=\'\'>全部</option> ', 
            $line = 16, $each(lineProductList, function(lineProduct) {
                $out += ' <option value="', $line = 17, $out += $escape(lineProduct.id), $out += '">', 
                $line = 17, $out += $escape(lineProduct.name), $out += "</option> ", $line = 18;
            }), $out += ' </select> </div> <label class="pull-left text-right control-label no-padding-right">出游时间:</label> <div class="col-sm-1"> <div class="input-group"> <input class="col-xs-12 datepicker" name="travelDate" value="" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <label class="pull-left text-right control-label no-padding-right">操作人:</label> <div class="col-sm-1"> <select name="creatorId" class="col-sm-12"> <option value=\'\'>全部</option> ', 
            $line = 34, $each(creatorList, function(creator) {
                $out += ' <option value="', $line = 35, $out += $escape(creator.id), $out += '">', 
                $line = 35, $out += $escape(creator.realName), $out += "</option> ", $line = 36;
            }), $out += ' </select> </div> <label class="pull-left text-right control-label no-padding-right">操作日期:</label> <div class="col-sm-1"> <div class="input-group col-sm-12"> <input class="col-sm-12 datepicker" name="operationStartDate" value="" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <label class="pull-left text-right control-label no-padding-right">--</label> <div class="col-sm-1"> <div class="input-group col-sm-12"> <input class="col-sm-12 datepicker" name="operationEndDate" value="" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <div class="col-sm-1" style="width:100px;"> <button class=" btn-sm btn-subsection-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div style="clear: both;height: 0px;line-height: 0px;"></div> <div class="form-horizontal col-sm-12 clearfix" style="margin-top:20px;"> <label class="control-label search-memberCount">人数合计：0大0小</label> <label class="control-label search-currentNeedPayMoney" style="padding-left: 30px">现收款合计：0元</label> </div> <div style="clear: both;height: 1px;line-height: 1px;"></div> </div> </div> <div class="row subsectionList"> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area subsectionSearchForm">\r\n	 <div class="form-horizontal">\r\n		<label class="pull-left text-right control-label no-padding-right">来源:</label>\r\n		<div class="col-sm-1">\r\n			<select name="partnerAgencyId" class="col-sm-12">\r\n				<option value=\'\'>全部</option>\r\n				{{each fromPartnerAgencyList as partnerAgency}}\r\n				<option value="{{partnerAgency.id}}">{{partnerAgency.travelAgencyName}}</option>\r\n				{{/each}}\r\n			</select>\r\n		</div>\r\n		<label class="pull-left text-right control-label no-padding-right">线路:</label>\r\n		<div class="col-sm-1">\r\n			<select name="lineProductId" class="col-sm-12">\r\n				<option value=\'\'>全部</option>\r\n				{{each lineProductList as lineProduct}}\r\n				<option value="{{lineProduct.id}}">{{lineProduct.name}}</option>\r\n				{{/each}}\r\n			</select>\r\n		</div>\r\n		<label class="pull-left text-right control-label no-padding-right">出游时间:</label>\r\n		<div class="col-sm-1">\r\n			<div class="input-group">\r\n				<input class="col-xs-12 datepicker" name="travelDate" value="" type="text" />	\r\n				<span class="input-group-addon">\r\n					<i class="fa fa-calendar"></i>\r\n				</span>\r\n			</div>\r\n		</div>\r\n		<label class="pull-left text-right control-label no-padding-right">操作人:</label>\r\n		<div class="col-sm-1">\r\n			<select name="creatorId" class="col-sm-12">\r\n				<option value=\'\'>全部</option>\r\n				{{each creatorList as creator}}\r\n				<option value="{{creator.id}}">{{creator.realName}}</option>\r\n				{{/each}}\r\n			</select>\r\n		</div>\r\n		<label class="pull-left text-right control-label no-padding-right">操作日期:</label>\r\n		<div class="col-sm-1">\r\n			<div class="input-group col-sm-12">\r\n				<input class="col-sm-12 datepicker" name="operationStartDate" value="" type="text" />	\r\n				<span class="input-group-addon">\r\n					<i class="fa fa-calendar"></i>\r\n				</span>\r\n			</div>\r\n		</div>\r\n		<label class="pull-left text-right control-label no-padding-right">--</label>\r\n		<div class="col-sm-1">\r\n			<div class="input-group col-sm-12">\r\n				<input class="col-sm-12 datepicker" name="operationEndDate" value="" type="text" />	\r\n				<span class="input-group-addon">\r\n					<i class="fa fa-calendar"></i>\r\n				</span>\r\n			</div>\r\n		</div>\r\n		<div class="col-sm-1" style="width:100px;">\r\n			<button class=" btn-sm  btn-subsection-search search-btn">\r\n				<i class="ace-icon fa fa-search"></i>\r\n				 搜索\r\n			</button>\r\n		</div>\r\n\r\n		<div style="clear: both;height: 0px;line-height: 0px;"></div>\r\n		<div class="form-horizontal col-sm-12 clearfix" style="margin-top:20px;">\r\n			<label class="control-label search-memberCount">人数合计：0大0小</label>\r\n			<label class="control-label search-currentNeedPayMoney" style="padding-left: 30px">现收款合计：0元</label>\r\n		</div>\r\n		<div style="clear: both;height: 1px;line-height: 1px;"></div>\r\n	</div>\r\n</div>\r\n\r\n<div class="row subsectionList">	\r\n\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});