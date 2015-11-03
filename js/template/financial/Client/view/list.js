/*TMODJS:{"debug":true,"version":275,"md5":"23a9cae894f7412639494c68e98f68e0"}*/
define(function(require) {
    return require("../../../template")("financial/Client/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, year = $data.year, month = $data.month, $each = $utils.$each, pager = $data.pager, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="row listMain"> <div class="form-group guideMainForm"> <label class=" control-label pull-left" >总社：</label> <input type="text" class="col-xs-12 chooseTravelAgency" style="width: 220px" placeholder="来源" name="travelAgencyName" value="', 
            $line = 4, $out += $escape(searchParam.travelName), $out += '" /> <input type="hidden" name="travelAgencyId" value="', 
            $line = 5, $out += $escape(searchParam.travelId), $out += '" /> <label class=" control-label pull-left marginLeft-30" style="margin-top:3px">客户：</label> <input type="text" class="col-xs-12 choosePartnerAgency" style="width: 220px" placeholder="来源" name="partnerAgencyName" value="', 
            $line = 7, $out += $escape(searchParam.fromPartnerAgencyName), $out += '" /> <input type="hidden" name="partnerAgencyId" value="', 
            $line = 8, $out += $escape(searchParam.fromPartnerAgencyId), $out += '" /> <input type="hidden" id="listClient_pager_pagerNo" value="', 
            $line = 9, $out += $escape(searchParam.pageNo), $out += '" /> <label class=" control-label no-padding-right pull-left marginLeft-30" style="margin-top:3px">账期：</label> <select class="col-sm-1" name="ClientCheck_searchYear"> <option value="2015" ', 
            $line = 12, 2015 == year && ($out += 'selected="selected" ', $line = 12), $out += '>2015</option> <option value="2014" ', 
            $line = 13, 2014 == year && ($out += 'selected="selected" ', $line = 13), $out += '>2014</option> </select> <select class="col-sm-1 marginLeft-30" name="ClientCheck_searchMonth"> <option value="">全部</option> <option value="1" ', 
            $line = 17, 1 == month && ($out += 'selected="selected" ', $line = 17), $out += '>1</option> <option value="2" ', 
            $line = 18, 2 == month && ($out += 'selected="selected" ', $line = 18), $out += '>2</option> <option value="3" ', 
            $line = 19, 3 == month && ($out += 'selected="selected" ', $line = 19), $out += '>3</option> <option value="4" ', 
            $line = 20, 4 == month && ($out += 'selected="selected" ', $line = 20), $out += '>4</option> <option value="5" ', 
            $line = 21, 5 == month && ($out += 'selected="selected" ', $line = 21), $out += '>5</option> <option value="6" ', 
            $line = 22, 6 == month && ($out += 'selected="selected" ', $line = 22), $out += '>6</option> <option value="7" ', 
            $line = 23, 7 == month && ($out += 'selected="selected" ', $line = 23), $out += '>7</option> <option value="8" ', 
            $line = 24, 8 == month && ($out += 'selected="selected" ', $line = 24), $out += '>8</option> <option value="9" ', 
            $line = 25, 9 == month && ($out += 'selected="selected" ', $line = 25), $out += '>9</option> <option value="10" ', 
            $line = 26, 10 == month && ($out += 'selected="selected" ', $line = 26), $out += '>10</option> <option value="11" ', 
            $line = 27, 11 == month && ($out += 'selected="selected" ', $line = 27), $out += '>11</option> <option value="12" ', 
            $line = 28, 12 == month && ($out += 'selected="selected" ', $line = 28), $out += '>12</option> </select> <button class=" btn-sm btn-arrangeTourist-search search-btn marginLeft-30"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="row guideList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>总社</th> <th>客户</th> <th>总人数</th> <th>总账面应收</th> <th>总实际应收</th> <th>总实际已收</th> <th>总账面未收</th> <th>总实际未收</th> <th>总返款</th> <th>对账进度</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 53, $each(pager.resultList, function(rs) {
                $out += " <tr> <td>", $line = 55, $out += $escape(rs.name), $out += "</td> <td>", 
                $line = 56, $out += $escape(rs.travelAgencyName), $out += "</td> <td>", $line = 57, 
                $out += $escape(rs.adutCount), $out += "大", $line = 57, $out += $escape(rs.childCount), 
                $out += "小</td> <td>", $line = 58, $out += $escape(rs.needPayMoney), $out += "</td> <td>", 
                $line = 59, $out += $escape(rs.realNeedPayMoney), $out += "</td> <td>", $line = 60, 
                $out += $escape(rs.realPayedMoney), $out += "</td> <td>", $line = 61, $out += $escape(rs.unPayedMoney), 
                $out += '</td> <td><span style="color:red">', $line = 62, $out += $escape(rs.realUnPayedMoney), 
                $out += "</span></td> <td>", $line = 63, $out += $escape(rs.backMoney), $out += "</td> <td> ", 
                $line = 65, rs.isConfirmAccount != rs.isConfirmAccounts ? ($out += ' <span style="color:#ff9900">', 
                $line = 66, $out += $escape(rs.isConfirmAccount), $out += "/", $line = 66, $out += $escape(rs.isConfirmAccounts), 
                $out += "</span> ", $line = 66) : ($out += ' <span style="color:green">', $line = 67, 
                $out += $escape(rs.isConfirmAccount), $out += "/", $line = 67, $out += $escape(rs.isConfirmAccounts), 
                $out += "</span> ", $line = 67), $out += ' </td> <td> <a data-entity-id="', $line = 70, 
                $out += $escape(rs.id), $out += '" class="cursor R-right btn-divide" data-right="1280002"> 对账 </a> <label class="cursor R-right" data-right="1280002"><a class="R-right" data-right="1280003"> |</a></label> <a data-entity-id="', 
                $line = 74, $out += $escape(rs.id), $out += '" class="btn-guide-view cursor R-right btn-transfter" data-right="1280003"> 结算 </a> </td> </tr> ', 
                $line = 79;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 84, $out += $escape(pager.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row listMain">\r\n    <div class="form-group guideMainForm">\r\n        <label class=" control-label pull-left" >总社：</label>\r\n        <input type="text" class="col-xs-12  chooseTravelAgency" style="width: 220px" placeholder="来源" name="travelAgencyName" value="{{searchParam.travelName}}" />\r\n        <input type="hidden" name="travelAgencyId" value="{{searchParam.travelId}}" />\r\n        <label class=" control-label pull-left marginLeft-30" style="margin-top:3px">客户：</label>\r\n        <input type="text" class="col-xs-12 choosePartnerAgency" style="width: 220px" placeholder="来源" name="partnerAgencyName" value="{{searchParam.fromPartnerAgencyName}}" />\r\n        <input type="hidden" name="partnerAgencyId" value="{{searchParam.fromPartnerAgencyId}}" />\r\n        <input type="hidden" id="listClient_pager_pagerNo" value="{{searchParam.pageNo}}" />\r\n        <label class=" control-label no-padding-right pull-left marginLeft-30" style="margin-top:3px">账期：</label>\r\n        <select class="col-sm-1" name="ClientCheck_searchYear">\r\n            <option value="2015" {{if year==2015}}selected="selected" {{/if}}>2015</option>\r\n            <option value="2014" {{if year==2014}}selected="selected" {{/if}}>2014</option>\r\n        </select>\r\n        <select class="col-sm-1 marginLeft-30" name="ClientCheck_searchMonth">\r\n            <option value="">全部</option>\r\n            <option value="1" {{if month==1}}selected="selected" {{/if}}>1</option>\r\n            <option value="2" {{if month==2}}selected="selected" {{/if}}>2</option>\r\n            <option value="3" {{if month==3}}selected="selected" {{/if}}>3</option>\r\n            <option value="4" {{if month==4}}selected="selected" {{/if}}>4</option>\r\n            <option value="5" {{if month==5}}selected="selected" {{/if}}>5</option>\r\n            <option value="6" {{if month==6}}selected="selected" {{/if}}>6</option>\r\n            <option value="7" {{if month==7}}selected="selected" {{/if}}>7</option>\r\n            <option value="8" {{if month==8}}selected="selected" {{/if}}>8</option>\r\n            <option value="9" {{if month==9}}selected="selected" {{/if}}>9</option>\r\n            <option value="10" {{if month==10}}selected="selected" {{/if}}>10</option>\r\n            <option value="11" {{if month==11}}selected="selected" {{/if}}>11</option>\r\n            <option value="12" {{if month==12}}selected="selected" {{/if}}>12</option>\r\n        </select>\r\n        <button class=" btn-sm  btn-arrangeTourist-search search-btn marginLeft-30">\r\n            <i class="ace-icon fa fa-search"></i> 搜索\r\n        </button>\r\n    </div>\r\n    <div class="row guideList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover">\r\n                <thead>\r\n                    <tr class="bg-blur">\r\n                        <th>总社</th>\r\n                        <th>客户</th>\r\n                        <th>总人数</th>\r\n                        <th>总账面应收</th>\r\n                        <th>总实际应收</th>\r\n                        <th>总实际已收</th>\r\n                        <th>总账面未收</th>\r\n                        <th>总实际未收</th>\r\n                        <th>总返款</th>\r\n                        <th>对账进度</th>\r\n                        <th>操作</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    {{each pager.resultList as rs}}\r\n                    <tr>\r\n                        <td>{{rs.name}}</td>\r\n                        <td>{{rs.travelAgencyName}}</td>\r\n                        <td>{{rs.adutCount}}大{{rs.childCount}}小</td>\r\n                        <td>{{rs.needPayMoney}}</td>\r\n                        <td>{{rs.realNeedPayMoney}}</td>\r\n                        <td>{{rs.realPayedMoney}}</td>\r\n                        <td>{{rs.unPayedMoney}}</td>\r\n                        <td><span style="color:red">{{rs.realUnPayedMoney}}</span></td>\r\n                        <td>{{rs.backMoney}}</td>\r\n                        <td>\r\n                            {{if rs.isConfirmAccount!=rs.isConfirmAccounts}}\r\n                            <span style="color:#ff9900">{{rs.isConfirmAccount}}/{{rs.isConfirmAccounts}}</span> {{else}}\r\n                            <span style="color:green">{{rs.isConfirmAccount}}/{{rs.isConfirmAccounts}}</span> {{/if}}\r\n                        </td>\r\n                        <td>\r\n                            <a data-entity-id="{{rs.id}}" class="cursor R-right btn-divide" data-right="1280002">\r\n						      对账\r\n					       </a>\r\n                           <label class="cursor R-right" data-right="1280002"><a class="R-right" data-right="1280003"> |</a></label>\r\n                            <a data-entity-id="{{rs.id}}" class="btn-guide-view cursor R-right   btn-transfter" data-right="1280003">\r\n        						结算\r\n        					</a>\r\n                        </td>\r\n                    </tr>\r\n                    {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <small>共计 {{pager.totalCount}} 条记录</small>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});