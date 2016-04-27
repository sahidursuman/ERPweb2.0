/*TMODJS:{"debug":true,"version":51,"md5":"e9db77342f4074b9fe36a1fb7b6d0bd8"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTravels/view/viewTravelShowList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, lineProduct = $data.lineProduct, $each = $utils.$each, noteList = $data.noteList, imgUrl = ($data.rs, 
            $data.$index, $data.imgUrl), $string = $utils.$string, recordSize = $data.recordSize, $out = "";
            return $out += '<div class="container-fluid globalAdd"> <div class="row hct-top-header"> <div class="col-xs-12"> <span class="fa fa-ellipsis-v" style="color: #e2b058;"></span> <label class="control-label mar-l-10">', 
            $line = 5, $out += $escape(lineProduct.name), $out += '</label> <label class="control-label mar-l-15">游记数：', 
            $line = 6, $out += $escape(lineProduct.sumNoteCount), $out += '</label> <label class="control-label mar-l-15">出游人数：', 
            $line = 7, $out += $escape(lineProduct.sumTouristAdultCount), $out += "大", $line = 7, 
            $out += $escape(lineProduct.sumTouristChildCount), $out += '小</label> <label class="control-label marginLeft-30">点赞：', 
            $line = 8, $out += $escape(lineProduct.sumLikeCount), $out += '</label> <label class="control-label mar-l-10">评论：', 
            $line = 9, $out += $escape(lineProduct.sumCommentCount), $out += '</label> <label class="control-label mar-l-10">分享：', 
            $line = 10, $out += $escape(lineProduct.sumShareCount), $out += '</label> <label class="control-label mar-l-10">浏览：', 
            $line = 11, $out += $escape(lineProduct.sumViewCount), $out += '</label> </div> </div> <div class="row hct-thumbnail-list T-thumbnail"> ', 
            $line = 15, $each(noteList, function(rs) {
                $out += ' <div class="col-xs-3"> <div class="thumbnail hct-thumbnail" data-id="', 
                $line = 17, $out += $escape(rs.id), $out += '"> <div class="thumbnail-img cursor T-action T-view-group" style="background-image: url(', 
                $line = 18, $out += $escape(rs.coverImage ? imgUrl + rs.coverImage : "/images/default_youji.png"), 
                $out += ')" title="', $line = 18, $out += $escape(rs.title), $out += '"> <img class="error-img" src="/images/loading-error.png"> </div> <div class="caption"> <h3 class="cursor T-action T-view-group">', 
                $line = 22, $out += $escape(rs.title), $out += '</h3> <div class="caption-info"> <div class="caption-user pull-left cursor T-action T-view-user"> <div class="caption-user-header pull-left', 
                $line = 25, rs.guideInfo.photo || ($out += " default-img", $line = 25), $out += '"> ', 
                $line = 26, rs.guideInfo.photo && ($out += '<img src="', $line = 26, $out += $escape(imgUrl + rs.guideInfo.photo), 
                $out += '">', $line = 26), $out += ' </div> <div class="caption-user-info pull-left"> <p>', 
                $line = 29, $out += $escape(rs.guideInfo.name), $out += '</p> <p class="starLevel">', 
                $line = 30, $out += $string($helpers.getScoreStar(rs.guideInfo.guideSatisfaction)), 
                $out += '</p> </div> </div> <div class="caption-comment pull-right"> <p class="caption-comment-info"> <label class="control-label"><i class="fa fa-heart"></i>', 
                $line = 35, $out += $escape(rs.likeCount), $out += '</label> <label class="control-label mar-l-10 cursor T-action T-view-comment"><i class="fa fa-comment"></i>', 
                $line = 36, $out += $escape(rs.commentCount), $out += '</label> </p> <p class="text-right caption-date">', 
                $line = 38, $out += $escape(rs.startTime), $out += "</p> </div> </div> </div> </div> </div> ", 
                $line = 44;
            }), $out += ' </div> <div class="row pageMode"> <div class="col-xs-4"> <small>共计 ', 
            $line = 49, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-8"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid globalAdd">\r\n	<div class="row hct-top-header">\r\n		<div class="col-xs-12">\r\n			<span class="fa fa-ellipsis-v" style="color: #e2b058;"></span>\r\n			<label class="control-label mar-l-10">{{lineProduct.name}}</label>\r\n			<label class="control-label mar-l-15">游记数：{{lineProduct.sumNoteCount}}</label>\r\n			<label class="control-label mar-l-15">出游人数：{{lineProduct.sumTouristAdultCount}}大{{lineProduct.sumTouristChildCount}}小</label>\r\n			<label class="control-label marginLeft-30">点赞：{{lineProduct.sumLikeCount}}</label>\r\n			<label class="control-label mar-l-10">评论：{{lineProduct.sumCommentCount}}</label>\r\n			<label class="control-label mar-l-10">分享：{{lineProduct.sumShareCount}}</label>\r\n			<label class="control-label mar-l-10">浏览：{{lineProduct.sumViewCount}}</label>\r\n		</div>\r\n	</div>\r\n	<div class="row hct-thumbnail-list T-thumbnail">\r\n	{{each noteList as rs}}\r\n  		<div class="col-xs-3">\r\n    		<div class="thumbnail hct-thumbnail" data-id="{{rs.id}}">\r\n      			<div class="thumbnail-img cursor T-action T-view-group" style="background-image: url({{rs.coverImage ? imgUrl + rs.coverImage : \'/images/default_youji.png\'}})" title="{{rs.title}}">\r\n                    <img class="error-img" src="/images/loading-error.png">\r\n                </div>\r\n      			<div class="caption">\r\n        			<h3 class="cursor T-action T-view-group">{{rs.title}}</h3>\r\n        			<div class="caption-info">\r\n        				<div class="caption-user pull-left cursor T-action T-view-user">\r\n        					<div class="caption-user-header pull-left{{if !rs.guideInfo.photo}} default-img{{/if}}">\r\n        						{{if rs.guideInfo.photo}}<img src="{{imgUrl + rs.guideInfo.photo}}">{{/if}}\r\n        					</div>\r\n        					<div class="caption-user-info pull-left">\r\n        						<p>{{rs.guideInfo.name}}</p>\r\n        						<p class="starLevel">{{#rs.guideInfo.guideSatisfaction | getScoreStar}}</p>\r\n        					</div>\r\n        				</div>\r\n        				<div class="caption-comment pull-right">\r\n        					<p class="caption-comment-info">\r\n	        					<label class="control-label"><i class="fa fa-heart"></i>{{rs.likeCount}}</label>\r\n	        					<label class="control-label mar-l-10 cursor T-action T-view-comment"><i class="fa fa-comment"></i>{{rs.commentCount}}</label>\r\n        					</p>\r\n							<p class="text-right caption-date">{{rs.startTime}}</p>\r\n        				</div>\r\n        			</div>\r\n      			</div>\r\n    		</div>\r\n  		</div>\r\n  	{{/each}}\r\n	</div>\r\n\r\n	<div class="row pageMode">\r\n        <div class="col-xs-4">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-8">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});