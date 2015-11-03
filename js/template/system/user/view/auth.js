/*TMODJS:{"debug":true,"version":281,"md5":"7d4450f0f9f31e2625d6d4e2174451ed"}*/
define(function(require) {
    return require("../../../template")("system/user/view/auth", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, user = $data.user, $each = $utils.$each, listMenu = $data.listMenu, $out = ($data.menu, 
            $data.menuIndex, $data.submenu, $data.index, $data.func, $data.$index, "");
            return $out += '<div class="col-xs-12" id="userSetAuth"> <div class="page-header" style="font-weight: bold;font-size:14px;"> 【当前用户：', 
            $line = 3, $out += $escape(user.group.name), $out += "&gt;", $line = 3, $out += $escape(user.realName), 
            $out += '】 </div> <form class="form-horizontal userMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <input type="hidden" value="', 
            $line = 6, $out += $escape(user.id), $out += '" id="userId" /> <div style="margin:10px 0px 20px 0px;display: none;"><button id="btn_groul_all">全选</button><button id="btn_groul_no" style="margin-left:10px;">全不选</button><button id="btn_groul_bak" style="margin-left:10px;">反选</button></div> <table class="table table-striped table-bordered table-hover" style="font-size:15px;"> ', 
            $line = 9, $each(listMenu, function(menu, menuIndex) {
                $out += " ", $line = 10, "工作台" != menu.name && "消息中心" != menu.name && ($out += ' <tr><td> <table class="table table-striped table-bordered table-hover"> ', 
                $line = 13, 0 == menuIndex && ($out += ' <thead> <th class="th-border">功能模块</th> <th class="th-border" colspan="5">权限</th> </thead> ', 
                $line = 18), $out += ' <tr> <td width="120"> <div> <input type="checkbox" name="menu" value="', 
                $line = 22, $out += $escape(menu.id), $out += '" class="ace T-menu-check" /> <span class="lbl"></span>', 
                $line = 23, $out += $escape(menu.name), $out += " </div> </td> <td ", $line = 26, 
                menu.childMenuList.length && ($out += 'colspan="4"', $line = 26), $out += ' width="330">权限范围</td> <td>操作权限</td> </tr> ', 
                $line = 29, $each(menu.childMenuList, function(submenu, index) {
                    $out += " ", $line = 30, 0 == index && ($out += ' <tr data-id="', $line = 31, $out += $escape(menu.id), 
                    $out += '"> <td></td> ', $line = 33, 63 == menu.id ? ($out += ' <td><a class="T-selectAll" href="javascript:;"></a></td> <td><a class="T-selectAll" href="javascript:;"></a></td> <td><a class="T-selectAll" href="javascript:;"></a></td> ', 
                    $line = 37) : ($out += ' <td><a class="T-selectAll" href="javascript:;">全选</a></td> <td><a class="T-selectAll" href="javascript:;">全选</a></td> <td><a class="T-selectAll" href="javascript:;">全选</a></td> ', 
                    $line = 41), $out += ' <td><a class="T-selectAll" href="javascript:;">全选</a></td> <td style="text-align:left;padding-left:20px;"> <a class="T-selectAll-function" href="javascript:;">全选</a> </td> </tr> ', 
                    $line = 48), $out += ' <tr class="T-submenu" data-id="', $line = 49, $out += $escape(submenu.id), 
                    $out += '"> <td><input type="checkbox" class="ace T-submenu-check T-submenu-id', 
                    $line = 50, $out += $escape(submenu.id), $out += '"/><span class="lbl"></span>', 
                    $line = 50, $out += $escape(submenu.name), $out += "</td> ", $line = 51, 63 == menu.id ? ($out += " ", 
                    $line = 52, 80 == submenu.id ? ($out += ' <td width="80"><input type="radio" class="ace T-function-area1" value="1" name="', 
                    $line = 53, $out += $escape(submenu.id), $out += '"><span class="lbl"></span>个人</td> <td width="80"><input type="radio" class="ace T-function-area2" value="2" name="', 
                    $line = 54, $out += $escape(submenu.id), $out += '"><span class="lbl"></span>子部门</td> <td width="90"><input type="radio" class="ace T-function-area3" value="3" name="', 
                    $line = 55, $out += $escape(submenu.id), $out += '"><span class="lbl"></span>业务部门</td> ', 
                    $line = 56) : ($out += ' <td width="80">-</td> <td width="80">-</td> <td width="90">-</td> ', 
                    $line = 60), $out += ' <td width="80"><input type="radio" class="ace T-function-area4" value="4" name="', 
                    $line = 61, $out += $escape(submenu.id), $out += '"><span class="lbl"></span>公司</td> ', 
                    $line = 62) : ($out += " ", $line = 63, 95 == submenu.id ? ($out += ' <td width="80">-</td> <td width="80">-</td> ', 
                    $line = 66) : ($out += ' <td width="80"><input type="radio" class="ace T-function-area1" value="1" name="', 
                    $line = 67, $out += $escape(submenu.id), $out += '"><span class="lbl"></span>个人</td> <td width="80"><input type="radio" class="ace T-function-area2" value="2" name="', 
                    $line = 68, $out += $escape(submenu.id), $out += '"><span class="lbl"></span>子部门</td> ', 
                    $line = 69), $out += ' <td width="90"><input type="radio" class="ace T-function-area3" value="3" name="', 
                    $line = 70, $out += $escape(submenu.id), $out += '"><span class="lbl"></span>业务部门</td> <td width="80"><input type="radio" class="ace T-function-area4" value="4" name="', 
                    $line = 71, $out += $escape(submenu.id), $out += '"><span class="lbl"></span>公司</td> ', 
                    $line = 72), $out += " <td> ", $line = 74, $each(submenu.menuFunctionShipList, function(func) {
                        $out += ' <div class="pull-left" style="width:100px;margin-left:10px;text-align:left;"> <input type="checkbox" class="ace T-function T-function-id', 
                        $line = 76, $out += $escape(func.id), $out += '" value="', $line = 76, $out += $escape(func.id), 
                        $out += '" /><span class="lbl"></span> ', $line = 77, $out += $escape(func.functionName), 
                        $out += " </div> ", $line = 79;
                    }), $out += " </td> </tr> ", $line = 82;
                }), $out += " </table> </td></tr> ", $line = 85), $out += " ", $line = 86;
            }), $out += ' </table> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-group" style="margin-bottom:10px;"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12" id="userSetAuth">\r\n	<div class="page-header" style="font-weight: bold;font-size:14px;">\r\n		【当前用户：{{user.group.name}}&gt;{{user.realName}}】\r\n	</div>\r\n	<form class="form-horizontal userMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<input type="hidden" value="{{user.id}}" id="userId" />\r\n		<div style="margin:10px 0px 20px 0px;display: none;"><button id="btn_groul_all">全选</button><button id="btn_groul_no" style="margin-left:10px;">全不选</button><button id="btn_groul_bak" style="margin-left:10px;">反选</button></div>\r\n		<table class="table table-striped table-bordered table-hover" style="font-size:15px;">\r\n			{{each listMenu as menu menuIndex}}\r\n				{{if menu.name != "工作台" && menu.name != "消息中心"}}\r\n					<tr><td>\r\n						<table class="table table-striped table-bordered table-hover">\r\n							{{if menuIndex == 0}}\r\n								<thead>\r\n									<th class="th-border">功能模块</th>\r\n									<th class="th-border" colspan="5">权限</th>\r\n								</thead>\r\n							{{/if}}\r\n							<tr>\r\n								<td width="120">\r\n									<div>\r\n										<input type="checkbox" name="menu" value="{{menu.id}}" class="ace T-menu-check" />\r\n										<span class="lbl"></span>{{menu.name}}\r\n									</div>\r\n								</td>\r\n								<td {{if menu.childMenuList.length}}colspan="4"{{/if}} width="330">权限范围</td>\r\n								<td>操作权限</td>\r\n							</tr>\r\n							{{each menu.childMenuList as submenu index}}\r\n								{{if index == 0}}\r\n									<tr data-id="{{menu.id}}">\r\n										<td></td>\r\n										{{if menu.id == 63}}<!-- 财务全选按钮屏蔽 -->\r\n											<td><a class="T-selectAll" href="javascript:;"></a></td>\r\n											<td><a class="T-selectAll" href="javascript:;"></a></td>\r\n											<td><a class="T-selectAll" href="javascript:;"></a></td>\r\n										{{else}}\r\n											<td><a class="T-selectAll" href="javascript:;">全选</a></td>\r\n											<td><a class="T-selectAll" href="javascript:;">全选</a></td>\r\n											<td><a class="T-selectAll" href="javascript:;">全选</a></td>\r\n										{{/if}}\r\n										\r\n										<td><a class="T-selectAll" href="javascript:;">全选</a></td>\r\n										<td style="text-align:left;padding-left:20px;">\r\n											<a class="T-selectAll-function" href="javascript:;">全选</a>\r\n										</td>\r\n									</tr>\r\n								{{/if}}\r\n								<tr class="T-submenu" data-id="{{submenu.id}}">\r\n									<td><input type="checkbox" class="ace T-submenu-check T-submenu-id{{submenu.id}}"/><span class="lbl"></span>{{submenu.name}}</td>\r\n									{{if menu.id == 63}}\r\n										{{if submenu.id == 80}}<!-- 财务按团统计 -->\r\n											<td width="80"><input type="radio" class="ace T-function-area1" value="1" name="{{submenu.id}}"><span class="lbl"></span>个人</td>\r\n											<td width="80"><input type="radio" class="ace T-function-area2" value="2" name="{{submenu.id}}"><span class="lbl"></span>子部门</td>\r\n											<td width="90"><input type="radio" class="ace T-function-area3" value="3" name="{{submenu.id}}"><span class="lbl"></span>业务部门</td>\r\n										{{else}}<!-- 财务权限范围屏蔽 -->\r\n											<td width="80">-</td>\r\n											<td width="80">-</td>\r\n											<td width="90">-</td>\r\n										{{/if}}\r\n										<td width="80"><input type="radio" class="ace T-function-area4" value="4" name="{{submenu.id}}"><span class="lbl"></span>公司</td>\r\n									{{else}}\r\n										{{if submenu.id == 95}}<!-- 内转管理权限范围屏蔽 -->\r\n											<td width="80">-</td>\r\n											<td width="80">-</td>\r\n										{{else}}\r\n											<td width="80"><input type="radio" class="ace T-function-area1" value="1" name="{{submenu.id}}"><span class="lbl"></span>个人</td>\r\n											<td width="80"><input type="radio" class="ace T-function-area2" value="2" name="{{submenu.id}}"><span class="lbl"></span>子部门</td>\r\n										{{/if}}\r\n										<td width="90"><input type="radio" class="ace T-function-area3" value="3" name="{{submenu.id}}"><span class="lbl"></span>业务部门</td>\r\n										<td width="80"><input type="radio" class="ace T-function-area4" value="4" name="{{submenu.id}}"><span class="lbl"></span>公司</td>\r\n									{{/if}}\r\n									<td>\r\n										{{each submenu.menuFunctionShipList as func}}\r\n											<div class="pull-left" style="width:100px;margin-left:10px;text-align:left;">\r\n												<input type="checkbox" class="ace T-function T-function-id{{func.id}}" value="{{func.id}}" /><span class="lbl"></span>\r\n												{{func.functionName}}\r\n											</div>\r\n										{{/each}}\r\n									</td>\r\n								</tr>\r\n							{{/each}}\r\n						</table>\r\n					</td></tr>\r\n				{{/if}}\r\n			{{/each}}\r\n			\r\n		</table>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-group" style="margin-bottom:10px;">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n	</form>\r\n</div>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});