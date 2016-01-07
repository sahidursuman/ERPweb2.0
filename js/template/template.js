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
    }), template.helper("getWayType", function(status) {
        var res = "";
        return status = status || 1, res += '<option value="1" ' + (1 == status ? "selected" : "") + ">旅行社系统</option>", 
        res += '<option value="2" ' + (2 == status ? "selected" : "") + ">传真</option>", 
        res += '<option value="3" ' + (3 == status ? "selected" : "") + ">短信</option>", 
        res += '<option value="4" ' + (4 == status ? "selected" : "") + ">电话</option>", 
        res += '<option value="5" ' + (5 == status ? "selected" : "") + ">QQ </option>", 
        res += '<option value="6" ' + (6 == status ? "selected" : "") + ">微信</option>", 
        res += '<option value="7" ' + (7 == status ? "selected" : "") + ">线上渠道</option>";
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

          default:
            return "其他";
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
    }), template.helper("getRestaurantDesc", function(status) {
        var res = "", i = 0, txt = [ "早餐", "中餐", "晚餐" ];
        if (status) {
            status = status.split(",");
            for (var i = 0; 3 > i; i++) res += '<label>&nbsp;&nbsp;&nbsp;<input type="checkbox" class="ace" disabled="disabled" ' + (1 == status[i] ? "checked" : "") + '><span class="lbl"> ' + txt[i] + "</span></label>";
        }
        return res;
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
    }), template.helper("getTaskSelect", function(status) {
        for (var str = [ '<select name="taskType">' ], desc = [ "全程", "接机", "送机", "前段", "中段", "后段" ], i = 0, len = desc.length; len > i; i++) str.push('<option value="' + i + '" ' + (status == i ? "selected" : "") + ">" + desc[i] + "</option>");
        return str.push("</select>"), str.join("");
    }), template.helper("getHotelLevelDesc", function(level) {
        switch (1 * level) {
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
            return "三星以下";
        }
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
    });
}();