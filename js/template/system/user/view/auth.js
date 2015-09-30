/*TMODJS:{"debug":true,"version":109,"md5":"00220ab6c0bca2a72b011b149fa31a1a"}*/
define(function(require) {
    return require("../../../template")("system/user/view/auth", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, user = $data.user, $each = $utils.$each, menuList = $data.menuList, $out = ($data.menu, 
            $data.$index, $data.menu2, $data.index, "");
            return $out += '<div class="col-xs-12" id="userSetAuth"> <div class="page-header" style="font-weight: bold;font-size:14px;"> 【当前用户：', 
            $line = 3, $out += $escape(user.group.name), $out += "&gt;", $line = 3, $out += $escape(user.realName), 
            $out += '】 </div> <form class="form-horizontal userMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <input type="hidden" value="', 
            $line = 6, $out += $escape(user.id), $out += '" id="userId" /> <div style="margin:10px 0px 20px 0px;display: none;"><button id="btn_groul_all">全选</button><button id="btn_groul_no" style="margin-left:10px;">全不选</button><button id="btn_groul_bak" style="margin-left:10px;">反选</button></div> <table class="table table-striped table-bordered table-hover" style="font-size:15px;"> <thead> <th>功能模块</th> <th colspan="7">权限</th> </thead> <tbody> ', 
            $line = 15, $each(menuList, function(menu) {
                $out += " ", $line = 16, 0 == menu.pid && ($out += ' <tr> <td><div style="margin-left:-50px;"><input type="checkbox" name="pmodule', 
                $line = 18, $out += $escape(menu.id), $out += '" value="', $line = 18, $out += $escape(menu.id), 
                $out += '" class="pmodule ace" /><span class="lbl"></span>', $line = 18, $out += $escape(menu.name), 
                $out += '</div></td> <td colspan="3">操作权限</td> <td colspan="4">权限范围</td> </tr> ', 
                $line = 23, $each(menuList, function(menu2, index) {
                    $out += " ", $line = 24, 0 == index && ($out += ' <tr> <td><input style="display: none;" class="sAll" td="0" data-id="', 
                    $line = 26, $out += $escape(menu.id), $out += '" type="button" value="全选" /></td> <td><input style="display: none;" class="sAll" td="1" data-id="', 
                    $line = 27, $out += $escape(menu.id), $out += '" type="button" value="全选" /></td> <td><input style="display: none;" class="sAll" td="2" data-id="', 
                    $line = 28, $out += $escape(menu.id), $out += '" type="button" value="全选" /></td> <td><input style="display: none;" class="sAll" td="3" data-id="', 
                    $line = 29, $out += $escape(menu.id), $out += '" type="button" value="全选" /></td> <td><a style="font-size:12px;" href="javascript:;" class="sAll" td="4" data-id="', 
                    $line = 30, $out += $escape(menu.id), $out += '">全选</a></td> <td><a style="font-size:12px;" href="javascript:;" class="sAll" td="5" data-id="', 
                    $line = 31, $out += $escape(menu.id), $out += '">全选</a></td> <td><a style="font-size:12px;" href="javascript:;" class="sAll" td="6" data-id="', 
                    $line = 32, $out += $escape(menu.id), $out += '">全选</a></td> <td><a style="font-size:12px;" href="javascript:;" class="sAll" td="7" data-id="', 
                    $line = 33, $out += $escape(menu.id), $out += '">全选</a></td> </tr> ', $line = 35), 
                    $out += " ", $line = 36, menu2.pid == menu.id && ($out += ' <tr class="authId checkibox', 
                    $line = 37, $out += $escape(menu2.id), $out += " pmodule", $line = 37, $out += $escape(menu.id), 
                    $out += '" data-id="', $line = 37, $out += $escape(menu2.id), $out += '"> <td><input type="checkbox" class="ace" name="" value="', 
                    $line = 38, $out += $escape(menu2.id), $out += '|s" class="smodule" /><span class="lbl"></span>', 
                    $line = 38, $out += $escape(menu2.name), $out += '</td> <td><input type="checkbox" class="ace" name="" value="', 
                    $line = 39, $out += $escape(menu2.id), $out += '|a" /><span class="lbl"></span>添加</td> <td><input type="checkbox" class="ace" name="" value="', 
                    $line = 40, $out += $escape(menu2.id), $out += '|e" /><span class="lbl"></span>修改</td> <td><input type="checkbox" class="ace" name="" value="', 
                    $line = 41, $out += $escape(menu2.id), $out += '|d" /><span class="lbl"></span>删除</td> <td><input type="radio" class="ace" name="auTy', 
                    $line = 42, $out += $escape(menu2.id), $out += '" value="auTy1"><span class="lbl"></span>个人</td> <td><input type="radio" class="ace" name="auTy', 
                    $line = 43, $out += $escape(menu2.id), $out += '" value="auTy2"><span class="lbl"></span>子部门</td> <td><input type="radio" class="ace" name="auTy', 
                    $line = 44, $out += $escape(menu2.id), $out += '" value="auTy3"><span class="lbl"></span>业务部门</td> <td><input type="radio" class="ace" name="auTy', 
                    $line = 45, $out += $escape(menu2.id), $out += '" value="auTy4"><span class="lbl"></span>公司</td> </tr> ', 
                    $line = 47), $out += " ", $line = 48;
                }), $out += " ", $line = 49), $out += " ", $line = 50;
            }), $out += ' </tbody> </table> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-group" style="margin-bottom:10px;"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12" id="userSetAuth">\r\n	<div class="page-header" style="font-weight: bold;font-size:14px;">\r\n		【当前用户：{{user.group.name}}&gt;{{user.realName}}】\r\n	</div>\r\n	<form class="form-horizontal userMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<input type="hidden" value="{{user.id}}" id="userId" />\r\n		\r\n		<div style="margin:10px 0px 20px 0px;display: none;"><button id="btn_groul_all">全选</button><button id="btn_groul_no" style="margin-left:10px;">全不选</button><button id="btn_groul_bak" style="margin-left:10px;">反选</button></div>\r\n		<table class="table table-striped table-bordered table-hover" style="font-size:15px;">\r\n			<thead>\r\n				<th>功能模块</th>\r\n				<th colspan="7">权限</th>\r\n			</thead>\r\n			<tbody>\r\n				{{each menuList as menu}}\r\n					{{if menu.pid == 0}}\r\n						<tr>\r\n							<td><div style="margin-left:-50px;"><input type="checkbox" name="pmodule{{menu.id}}" value="{{menu.id}}" class="pmodule ace" /><span class="lbl"></span>{{menu.name}}</div></td>\r\n							<td colspan="3">操作权限</td>\r\n							<td colspan="4">权限范围</td>\r\n						</tr> \r\n						\r\n						{{each menuList as menu2 index}}\r\n							{{if index == 0}}\r\n							<tr>\r\n								<td><input style="display: none;" class="sAll" td="0" data-id="{{menu.id}}" type="button" value="全选" /></td>\r\n								<td><input style="display: none;" class="sAll" td="1" data-id="{{menu.id}}" type="button" value="全选" /></td>\r\n								<td><input style="display: none;" class="sAll" td="2" data-id="{{menu.id}}" type="button" value="全选" /></td>\r\n								<td><input style="display: none;" class="sAll" td="3" data-id="{{menu.id}}" type="button" value="全选" /></td>\r\n								<td><a style="font-size:12px;" href="javascript:;" class="sAll" td="4" data-id="{{menu.id}}">全选</a></td>\r\n								<td><a style="font-size:12px;" href="javascript:;" class="sAll" td="5" data-id="{{menu.id}}">全选</a></td>\r\n								<td><a style="font-size:12px;" href="javascript:;" class="sAll" td="6" data-id="{{menu.id}}">全选</a></td>\r\n								<td><a style="font-size:12px;" href="javascript:;" class="sAll" td="7" data-id="{{menu.id}}">全选</a></td>\r\n							</tr>\r\n							{{/if}}\r\n							{{if menu2.pid == menu.id}}\r\n							<tr class="authId checkibox{{menu2.id}} pmodule{{menu.id}}" data-id="{{menu2.id}}">\r\n								<td><input type="checkbox" class="ace" name="" value="{{menu2.id}}|s" class="smodule" /><span class="lbl"></span>{{menu2.name}}</td>\r\n								<td><input type="checkbox" class="ace" name="" value="{{menu2.id}}|a" /><span class="lbl"></span>添加</td>\r\n								<td><input type="checkbox" class="ace" name="" value="{{menu2.id}}|e" /><span class="lbl"></span>修改</td>\r\n								<td><input type="checkbox" class="ace" name="" value="{{menu2.id}}|d" /><span class="lbl"></span>删除</td>\r\n								<td><input type="radio" class="ace" name="auTy{{menu2.id}}" value="auTy1"><span class="lbl"></span>个人</td>\r\n								<td><input type="radio" class="ace" name="auTy{{menu2.id}}" value="auTy2"><span class="lbl"></span>子部门</td>\r\n								<td><input type="radio" class="ace" name="auTy{{menu2.id}}" value="auTy3"><span class="lbl"></span>业务部门</td>\r\n								<td><input type="radio" class="ace" name="auTy{{menu2.id}}" value="auTy4"><span class="lbl"></span>公司</td>\r\n							</tr>\r\n							{{/if}}\r\n						{{/each}}\r\n					{{/if}}\r\n				{{/each}}\r\n			</tbody>\r\n		</table>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-group" style="margin-bottom:10px;">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n	</form>\r\n</div>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});