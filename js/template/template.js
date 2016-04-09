/*TMODJS:{}*/
!function() {
    function template(filename, content) {
        return (/string|function/.test(typeof content) ? compile : renderFile)(filename, content);
    }
    function toString(value, type) {
        return "string" != typeof value && (type = typeof value, "number" === type ? value += "" : value = "function" === type ? toString(value.call(value)) : ""), 
        value;
    }
    function escapeFn(s) {
        return escapeMap[s];
    }
    function escapeHTML(content) {
        return toString(content).replace(/&(?![\w#]+;)|[<>"']/g, escapeFn);
    }
    function each(data, callback) {
        if (isArray(data)) for (var i = 0, len = data.length; len > i; i++) callback.call(data, data[i], i, data); else for (i in data) callback.call(data, data[i], i);
    }
    function resolve(from, to) {
        var DOUBLE_DOT_RE = /(\/)[^/]+\1\.\.\1/, dirname = ("./" + from).replace(/[^/]+$/, ""), filename = dirname + to;
        for (filename = filename.replace(/\/\.\//g, "/"); filename.match(DOUBLE_DOT_RE); ) filename = filename.replace(DOUBLE_DOT_RE, "/");
        return filename;
    }
    function renderFile(filename, data) {
        var fn = template.get(filename) || showDebugInfo({
            filename: filename,
            name: "Render Error",
            message: "Template not found"
        });
        return data ? fn(data) : fn;
    }
    function compile(filename, fn) {
        if ("string" == typeof fn) {
            var string = fn;
            fn = function() {
                return new String(string);
            };
        }
        var render = cache[filename] = function(data) {
            try {
                return new fn(data, filename) + "";
            } catch (e) {
                return showDebugInfo(e)();
            }
        };
        return render.prototype = fn.prototype = utils, render.toString = function() {
            return fn + "";
        }, render;
    }
    function showDebugInfo(e) {
        var type = "{Template Error}", message = e.stack || "";
        if (message) message = message.split("\n").slice(0, 2).join("\n"); else for (var name in e) message += "<" + name + ">\n" + e[name] + "\n\n";
        return function() {
            return "object" == typeof console && console.error(type + "\n\n" + message), type;
        };
    }
    var cache = template.cache = {}, String = this.String, escapeMap = {
        "<": "&#60;",
        ">": "&#62;",
        '"': "&#34;",
        "'": "&#39;",
        "&": "&#38;"
    }, isArray = Array.isArray || function(obj) {
        return "[object Array]" === {}.toString.call(obj);
    }, utils = template.utils = {
        $helpers: {},
        $include: function(filename, data, from) {
            return filename = resolve(from, filename), renderFile(filename, data);
        },
        $string: toString,
        $escape: escapeHTML,
        $each: each
    }, helpers = template.helpers = utils.$helpers;
    template.get = function(filename) {
        return cache[filename.replace(/^\.\//, "")];
    }, template.helper = function(name, helper) {
        helpers[name] = helper;
    }, define(function() {
        return template;
    }), template.helper("dateFormat", function(date, fmt) {
        if (!date) return "";
        date = date.split("-").join("/"), date = new Date(date);
        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            S: date.getMilliseconds()
        };
        /(y+)/.test(fmt) && (fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var k in o) new RegExp("(" + k + ")").test(fmt) && (fmt = fmt.replace(RegExp.$1, 1 == RegExp.$1.length ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }), template.helper("getDateText", function(startTime, whichDay) {
        return Tools.addDay(startTime, whichDay - 1);
    }), template.helper("encode", function(data) {
        return encodeURIComponent(data);
    }), template.helper("decode", function(data) {
        try {
            data = decodeURIComponent(data);
        } catch (e) {}
        return data;
    }), template.helper("parseInt", function(data) {
        return parseInt(data);
    }), template.helper("interceptStr", function(data) {
        return data && (data = data.substring(0, 39) + "..."), data;
    }), template.helper("toFixed", function(data) {
        return data.toFixed(2);
    }), template.helper("stringify", function(data) {
        return JSON.stringify(data);
    }), template.helper("getCardText", function(idCardType) {
        switch (1 * idCardType) {
          case 0:
            return "身份证";

          case 1:
            return "护照";

          default:
            return "其他";
        }
    }), template.helper("getCustomerType", function(status, isSel) {
        var res = "";
        return res += '<option value="" ' + ("" == status || null == status ? "selected" : "") + ">全部</option>", 
        res += '<option value="0" ' + ("0" == status ? "selected" : "") + ">散客</option>", 
        res += '<option value="1" ' + ("1" == status ? "selected" : "") + ">团体</option>", 
        isSel && (res = "1" == status ? "团体" : "散客"), res;
    }), template.helper("getWayType", function(status) {
        var res = "";
        return status = status || 1, res += '<option value="1" ' + (1 == status ? "selected" : "") + ">旅行社系统</option>", 
        res += '<option value="2" ' + (2 == status ? "selected" : "") + ">传真</option>", 
        res += '<option value="3" ' + (3 == status ? "selected" : "") + ">短信</option>", 
        res += '<option value="4" ' + (4 == status ? "selected" : "") + ">电话</option>", 
        res += '<option value="5" ' + (5 == status ? "selected" : "") + ">QQ </option>", 
        res += '<option value="6" ' + (6 == status ? "selected" : "") + ">微信</option>", 
        res += '<option value="7" ' + (7 == status ? "selected" : "") + ">线上渠道</option>";
    }), template.helper("getFeeItemType", function(type, isTransfer) {
        var res = "";
        return type = type || 1, res += '<option value="1" ' + (1 == type ? "selected" : "") + ">大人结算价</option>", 
        res += '<option value="2" ' + (2 == type ? "selected" : "") + ">小孩结算价</option>", 
        isTransfer && (res += '<option value="3" ' + (3 == type ? "selected" : "") + ">中转结算价</option>"), 
        res += '<option value="4" ' + (4 == type ? "selected" : "") + ">车辆费用</option>", 
        res += '<option value="5" ' + (5 == type ? "selected" : "") + ">餐厅费用</option>", 
        res += '<option value="6" ' + (6 == type ? "selected" : "") + ">保险费用</option>", 
        res += '<option value="7" ' + (7 == type ? "selected" : "") + ">导服费</option>", res += '<option value="8" ' + (8 == type ? "selected" : "") + ">酒店费用</option>", 
        res += '<option value="9" ' + (9 == type ? "selected" : "") + ">景区费用</option>", 
        res += '<option value="10" ' + (10 == type ? "selected" : "") + ">自费费用</option>", 
        res += '<option value="11" ' + (11 == type ? "selected" : "") + ">票务费用</option>", 
        res += '<option value="12" ' + (12 == type ? "selected" : "") + ">其他费用</option>";
    }), template.helper("getFeeItemText", function(type) {
        switch (1 * type) {
          case 1:
            return "大人结算价";

          case 2:
            return "小孩结算价";

          case 3:
            return "中转结算价";

          case 4:
            return "车辆费用";

          case 5:
            return "餐厅费用";

          case 6:
            return "保险费用";

          case 7:
            return "导服费";

          case 8:
            return "酒店费用";

          case 9:
            return "景区费用";

          case 10:
            return "自费费用";

          case 11:
            return "票务费用";

          case 12:
            return "其他费用";

          default:
            return "大人结算价";
        }
    }), template.helper("getWayTypeText", function(status) {
        var res = [ "", "旅行社系统", "传真", "短信", "电话", "QQ", "微信", "线上渠道" ];
        return status = status || 1, res[status];
    }), template.helper("checked", function(status) {
        return status = status || 0, 1 == status ? "checked" : "";
    }), template.helper("getCardOption", function(status) {
        var res = "";
        return status = status || 0, res += '<option value="0" ' + (0 == status ? "selected" : "") + ">身份证</option>", 
        res += '<option value="1" ' + (1 == status ? "selected" : "") + ">护照</option>", 
        res += '<option value="2" ' + (2 == status ? "selected" : "") + ">其它</option>";
    }), template.helper("getTicketText", function(ticketType) {
        switch (1 * ticketType) {
          case 1:
            return "机票";

          case 2:
            return "汽车票";

          case 3:
            return "火车票";

          case 4:
            return "轮船票";

          default:
            return "其他";
        }
    }), template.helper("getPlanPayTypeText", function(payType) {
        switch (1 * payType) {
          case 0:
            return "现金";

          case 1:
            return "刷卡";

          case 2:
            return "签单";

          default:
            return "其他";
        }
    }), template.helper("getTravelAgencyType", function(payType) {
        switch (1 * payType) {
          case 0:
            return "地接社";

          case 1:
            return "组团社";

          case 2:
            return "地接社和组团社";

          default:
            return "组团社";
        }
    }), template.helper("getTravelAgencyLevel", function(payType) {
        switch (1 * payType) {
          case 1:
            return "金牌";

          case 2:
            return "银牌";

          case 3:
            return "铜牌";

          default:
            return "金牌";
        }
    }), template.helper("getPlanPayTypeOption", function(status) {
        var res = "";
        return status = status || 0, res += '<select name="payType"><option value="0" ' + (0 == status ? "selected" : "") + ">现金</option>", 
        res += '<option value="1" ' + (1 == status ? "selected" : "") + ">刷卡</option>", 
        res += '<option value="2" ' + (2 == status ? "selected" : "") + ">签单</option></select>";
    }), template.helper("getPayTypeText", function(payType) {
        switch (1 * payType) {
          case 0:
            return "现金";

          case 1:
            return "银行转账";

          case 2:
            return "网上支付";

          case 3:
            return "支票";

          case 4:
            return "其他";

          default:
            return "网付";
        }
    }), template.helper("getBillStatusText", function(billStatus, tripPlanStatus) {
        switch (1 * billStatus) {
          case -1:
            return -1 == tripPlanStatus ? "该发团计划已经被取消" : "编辑计划";

          case 0:
            return "导游已经报账，若需编辑，需要计调退回";

          case 1:
            return "计调已审核，若需编辑，需要财务和计调退回";

          case 2:
            return "财务已审核，若需编辑，需要管理员、财务和计调同时操作退回";

          default:
            return "";
        }
    }), template.helper("getPayTypeOptions", function(payType) {
        var options = "", start = 0;
        return options += '<option value="0" ' + (start++ == payType ? "selected" : "") + ">现金</option>", 
        options += '<option value="1" ' + (start++ == payType ? "selected" : "") + ">银行转账</option>", 
        start++, options += '<option value="3" ' + (start++ == payType ? "selected" : "") + ">支票</option>", 
        options += '<option value="4" ' + (start++ == payType ? "selected" : "") + ">其他</option>";
    }), template.helper("getArrangeIcon", function(status) {
        switch (1 * status) {
          case 1:
            return "fa-question";

          case 2:
            return "fa-exclamation";

          case 3:
            return "fa-check";

          case 4:
            return "fa-times";

          default:
            return "fa-minus";
        }
    }), template.helper("getRestaurantDesc", function(status, canEdit) {
        var res = "", i = 0, txt = [ "早餐", "中餐", "晚餐" ];
        status = status || "0,0,0", status = status.split(","), 3 != status.length && (status = [ 0, 0, 0 ]);
        for (var i = 0; 3 > i; i++) res += '<label><input type="checkbox" class="ace" disabled="disabled" ' + (1 == status[i] ? "checked" : "") + '><span class="lbl"> ' + txt[i] + "</span></label>&nbsp;&nbsp;&nbsp;";
        return canEdit && (res = res.split('disabled="disabled"').join("")), res;
    }), template.helper("getTaskDesc", function(status) {
        switch (1 * status) {
          case 1:
            return "接机";

          case 2:
            return "送机";

          case 3:
            return "前段";

          case 4:
            return "中段";

          case 5:
            return "后段";

          default:
            return "全程";
        }
    }), template.helper("getTaskSelect", function(status, isCar) {
        var str = [ '<select name="taskType">' ], desc = [ "全程", "接机", "送机", "前段", "中段", "后段" ];
        isCar && desc.push("小车接客");
        for (var i = 0, len = desc.length; len > i; i++) str.push('<option value="' + i + '" ' + (status == i ? "selected" : "") + ">" + desc[i] + "</option>");
        return str.push("</select>"), str.join("");
    }), template.helper("getHotelLevelDesc", function(level) {
        switch (1 * level) {
          case 1:
            return "三星以下";

          case 2:
            return "三星";

          case 3:
            return "准四星";

          case 4:
            return "四星";

          case 5:
            return "准五星";

          case 6:
            return "五星";

          case 7:
            return "五星以上";

          default:
            return "";
        }
    }), template.helper("getHotelLevelOptions", function(level) {
        var res = "";
        return level = level || 1, res += '<option value="1" ' + (1 == level ? "selected" : "") + ">三星以下</option>", 
        res += '<option value="2" ' + (2 == level ? "selected" : "") + ">三星</option>", res += '<option value="3" ' + (3 == level ? "selected" : "") + ">准四星</option>", 
        res += '<option value="4" ' + (4 == level ? "selected" : "") + ">四星</option>", res += '<option value="5" ' + (5 == level ? "selected" : "") + ">准五星</option>", 
        res += '<option value="6" ' + (6 == level ? "selected" : "") + ">五星</option>", res += '<option value="7" ' + (7 == level ? "selected" : "") + ">五星以上</option>";
    }), template.helper("getOrderStatusDesc", function(status) {
        switch (1 * status) {
          case 1:
            return "未预定";

          case 2:
            return "预定中";

          case 3:
            return "已预订";

          default:
            return "无需预订";
        }
    }), template.helper("getRepastDetail", function(repastDetail) {
        var res = [];
        return 1 == repastDetail.breakfast && res.push("早餐"), 1 == repastDetail.lunch && res.push("午餐"), 
        1 == repastDetail.dinner && res.push("晚餐"), res.join("、");
    }), template.helper("getScoreStar", function(str, scoreType) {
        var res = "", star = [ "fa-star-o", "fa-star-o", "fa-star-o", "fa-star-o", "fa-star-o" ];
        if (str > 4 && 15 > str ? star[0] = "fa-star-half-o" : str >= 15 && 25 > str ? star[0] = "fa-star" : str >= 25 && 35 > str ? (star[0] = "fa-star", 
        star[1] = "fa-star-half-o") : str >= 35 && 45 > str ? (star[0] = "fa-star", star[1] = "fa-star") : str >= 45 && 55 > str ? (star[0] = "fa-star", 
        star[1] = "fa-star", star[2] = "fa-star-half-o") : str >= 55 && 65 > str ? (star[0] = "fa-star", 
        star[1] = "fa-star", star[2] = "fa-star") : str >= 65 && 75 > str ? (star[0] = "fa-star", 
        star[1] = "fa-star", star[2] = "fa-star", star[3] = "fa-star-half-o") : str >= 75 && 85 > str ? (star[0] = "fa-star", 
        star[1] = "fa-star", star[2] = "fa-star", star[3] = "fa-star") : str >= 85 && 95 > str ? (star[0] = "fa-star", 
        star[1] = "fa-star", star[2] = "fa-star", star[3] = "fa-star", star[4] = "fa-star-half-o") : str >= 95 && (star[0] = "fa-star", 
        star[1] = "fa-star", star[2] = "fa-star", star[3] = "fa-star", star[4] = "fa-star"), 
        "1" == scoreType) for (var j = 0; 1 * str > j; j++) star[j] = "fa-star";
        for (var i = 0; i < star.length; i++) res += '<i class="fa ' + star[i] + '"></i>';
        return res;
    }), template.helper("getNoteItemText", function(status) {
        var res = "交通";
        return "trafic" == status ? res = "交通" : "hotel" == status ? res = "住宿" : "play" == status ? res = "游玩" : "note" == status ? res = "笔记" : "line" == status && (res = "线路简介"), 
        res;
    }), template.helper("getPartGroupStatusText", function(status) {
        switch (1 * status) {
          case 0:
            return "已发团";

          case 1:
            return "未分团";

          case 2:
            return "已分团";

          case 3:
            return "已外转";

          case 4:
            return "已取消";

          case 5:
            return "已分段";

          case 6:
            return "已内转";

          default:
            return "-";
        }
    }), template.helper("getBusinessTypeText", function(businessType) {
        switch (businessType) {
          case "guide":
            return "导游";

          case "busCompany":
            return "车队";

          case "hotel":
            return "酒店";

          default:
            return "-";
        }
    }), template.helper("getLogTypeText", function(type) {
        switch (1 * type) {
          case 1:
            return "保存";

          case 2:
            return "财务";

          case 3:
            return "计调";

          case 4:
            return "退回计调";

          case 5:
            return "退回导游";

          case 6:
            return "Web报账";

          case 7:
            return "导游提交报账";

          default:
            return console.info("Other Type:type"), "其他类型";
        }
    });
}();