/*TMODJS:{"debug":true,"version":43,"md5":"ed2e20c7d1c23ecb538f448edd1215fd"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTravels/view/guideEvaluate", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, note = $data.note, imgUrl = $data.imgUrl, $string = $utils.$string, guideServiceStandardCommentList = $data.guideServiceStandardCommentList, $each = $utils.$each, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="container-fluid globalAdd hct-min-width hct-mar-auto"> <div class="row hct-top-header"> <div class="col-xs-12 yj-title"> <span class="fa fa-ellipsis-v" style="color: #e2b058;"></span> <label class="control-label mar-l-10">', 
            $line = 5, $out += $escape(note.title), $out += '</label> <a class="hct-top-share T-action T-share" data-title="', 
            $line = 6, $out += $escape(note.title), $out += '" data-id="', $line = 6, $out += $escape(note.id), 
            $out += '" data-type="guideEvaluate"><i class="fa fa-share-alt"></i>分享</a> </div> </div> <div class="row hct-note"> <div class="col-xs-12"> <div class="pull-left"> <div class="caption-user-header pull-left', 
            $line = 12, note.guideInfo.photo || ($out += " default-img", $line = 12), $out += '"> ', 
            $line = 13, note.guideInfo.photo && ($out += '<img src="', $line = 13, $out += $escape(imgUrl + note.guideInfo.photo), 
            $out += '">', $line = 13), $out += ' </div> <div class="note-guide-info pull-left"> <p>', 
            $line = 16, $out += $escape(note.guideInfo.name), $out += '</p> <p class="starLevel">', 
            $line = 17, $out += $string($helpers.getScoreStar(note.guideInfo.guideSatisfaction)), 
            $out += '</p> </div> </div> <div class="pull-right note-date"> <p> <label class="control-label">出行日期：', 
            $line = 22, $out += $escape(note.startTime), $out += '</label> <label class="control-label mar-l-10">出游天数：', 
            $line = 23, $out += $escape(note.days), $out += '天</label> </p> </div> </div> <div class="col-xs-12 score-body"> <div class="pull-left note-score"> <p class="scoreCount">', 
            $line = 29, $out += $escape(note.tripSatisfaction), $out += '%</p> <p class="starLevel">', 
            $line = 30, $out += $string($helpers.getScoreStar(note.tripSatisfaction)), $out += '</p> </div> <div class="pull-left note-line-score"> <p>此线路产品跟团游客满意度为', 
            $line = 33, $out += $escape(note.tripSatisfaction), $out += "%</p> <p>已有", $line = 34, 
            $out += $escape(note.scoreCount), $out += '人评分</p> </div> <div class="pull-right p-no-mar"> <p>&nbsp;</p> <p class="comment-info"> <label class="control-label"><i class="fa fa-heart"></i>', 
            $line = 39, $out += $escape(note.likeCount), $out += '</label> <label class="control-label mar-l-15"><i class="fa fa-comment"></i>', 
            $line = 40, $out += $escape(note.commentCount), $out += '</label> <label class="control-label mar-l-15"><i class="fa fa-share-alt"></i>', 
            $line = 41, $out += $escape(note.shareCount), $out += '</label> <label class="control-label mar-l-15"><i class="fa fa-eye"></i>', 
            $line = 42, $out += $escape(note.viewCount), $out += '</label> </p> </div> </div> </div> <div class="comment-container"> <div class="note-db-img"> ', 
            $line = 49, note.coverImage && ($out += '<img src="', $line = 49, $out += $escape(imgUrl + note.coverImage), 
            $out += '" alt="', $line = 49, $out += $escape(note.title), $out += '">', $line = 49), 
            $out += ' </div> </div> <div class="comment-content"> <div class="comment-cont-head"> 收到的评论 ', 
            $line = 54, guideServiceStandardCommentList ? ($line = 54, $out += $escape(guideServiceStandardCommentList.length), 
            $line = 54) : ($out += "0", $line = 54), $out += ' </div> <div class="comment-cont-body"> ', 
            $line = 57, $each(guideServiceStandardCommentList, function(rs) {
                $out += ' <div class="comment-cont-item"> <div class="comment-user"> <div class="caption-user-header pull-left', 
                $line = 60, rs.photo || ($out += " default-img", $line = 60), $out += '"> ', $line = 61, 
                rs.photo && ($out += '<img src="', $line = 61, $out += $escape(imgUrl + rs.photo), 
                $out += '">', $line = 61), $out += ' </div> <div class="pull-left comment-cont-name"> ', 
                $line = 64, $out += $escape(rs.name), $out += " </div> ", $line = 66, "1" == rs.hasStandard ? ($out += ' <div class="pull-left comment-cont-score"> <label class="control-label">', 
                $line = 68, $out += $escape(rs.standardTitle), $out += '</label> <label class="control-label starLevel">', 
                $line = 69, $out += $string($helpers.getScoreStar(rs.standardScore, "1")), $out += "</label> </div> ", 
                $line = 71) : ($out += ' <div class="pull-left comment-cont-score"> <label class="control-label">服务意识</label> <label class="control-label starLevel">', 
                $line = 74, $out += $string($helpers.getScoreStar(rs.serviceAbilityScore, "1")), 
                $out += '</label> </div> <div class="pull-left comment-cont-score"> <label class="control-label">语言能力</label> <label class="control-label starLevel">', 
                $line = 78, $out += $string($helpers.getScoreStar(rs.talkAbilityScore, "1")), $out += '</label> </div> <div class="pull-left comment-cont-score"> <label class="control-label">业务水平</label> <label class="control-label starLevel">', 
                $line = 82, $out += $string($helpers.getScoreStar(rs.businessAbilityScore, "1")), 
                $out += "</label> </div> ", $line = 84), $out += ' <div class="pull-right comment-cont-date">', 
                $line = 85, $out += $escape(rs.createTime), $out += '</div> </div> <div class="comment-cont-text"> <p>', 
                $line = 88, $out += $escape(rs.commentContent), $out += "</p> </div> </div> ", $line = 91;
            }), $out += " </div> </div> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid globalAdd hct-min-width hct-mar-auto">\r\n	<div class="row hct-top-header">\r\n		<div class="col-xs-12 yj-title">\r\n			<span class="fa fa-ellipsis-v" style="color: #e2b058;"></span>\r\n			<label class="control-label mar-l-10">{{note.title}}</label>\r\n			<a class="hct-top-share T-action T-share" data-title="{{note.title}}" data-id="{{note.id}}" data-type="guideEvaluate"><i class="fa fa-share-alt"></i>分享</a>\r\n		</div>\r\n	</div>\r\n	<div class="row hct-note">\r\n		<div class="col-xs-12">\r\n			<div class="pull-left">\r\n				<div class="caption-user-header pull-left{{if !note.guideInfo.photo}} default-img{{/if}}">\r\n					{{if note.guideInfo.photo}}<img src="{{imgUrl + note.guideInfo.photo}}">{{/if}}\r\n				</div>\r\n				<div class="note-guide-info pull-left">\r\n					<p>{{note.guideInfo.name}}</p>\r\n					<p class="starLevel">{{#note.guideInfo.guideSatisfaction | getScoreStar}}</p>\r\n				</div>\r\n			</div>\r\n			<div class="pull-right note-date">\r\n				<p>\r\n					<label class="control-label">出行日期：{{note.startTime}}</label>\r\n	        		<label class="control-label mar-l-10">出游天数：{{note.days}}天</label>\r\n	        	</p>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 score-body">\r\n			<div class="pull-left note-score">\r\n				<p class="scoreCount">{{note.tripSatisfaction}}%</p>\r\n				<p class="starLevel">{{#note.tripSatisfaction | getScoreStar}}</p>\r\n			</div>\r\n			<div class="pull-left note-line-score">\r\n				<p>此线路产品跟团游客满意度为{{note.tripSatisfaction}}%</p>\r\n				<p>已有{{note.scoreCount}}人评分</p>\r\n			</div>\r\n			<div class="pull-right p-no-mar">\r\n				<p>&nbsp;</p>\r\n				<p class="comment-info">\r\n					<label class="control-label"><i class="fa fa-heart"></i>{{note.likeCount}}</label>\r\n	        		<label class="control-label mar-l-15"><i class="fa fa-comment"></i>{{note.commentCount}}</label>\r\n	        		<label class="control-label mar-l-15"><i class="fa fa-share-alt"></i>{{note.shareCount}}</label>\r\n	        		<label class="control-label mar-l-15"><i class="fa fa-eye"></i>{{note.viewCount}}</label>\r\n				</p>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class="comment-container">\r\n		<div class="note-db-img">\r\n			{{if !!note.coverImage}}<img src="{{imgUrl + note.coverImage}}" alt="{{note.title}}">{{/if}}\r\n		</div>\r\n	</div>\r\n	<div class="comment-content">\r\n		<div class="comment-cont-head">\r\n			收到的评论 {{if !!guideServiceStandardCommentList}}{{guideServiceStandardCommentList.length}}{{else}}0{{/if}}\r\n		</div>\r\n		<div class="comment-cont-body">\r\n			{{each guideServiceStandardCommentList as rs}}\r\n			<div class="comment-cont-item">\r\n				<div class="comment-user">\r\n					<div class="caption-user-header pull-left{{if !rs.photo}} default-img{{/if}}">\r\n						{{if rs.photo}}<img src="{{imgUrl + rs.photo}}">{{/if}}\r\n					</div>\r\n					<div class="pull-left comment-cont-name">\r\n						{{rs.name}}\r\n					</div>\r\n					{{if rs.hasStandard == "1"}}\r\n					<div class="pull-left comment-cont-score">\r\n						<label class="control-label">{{rs.standardTitle}}</label>\r\n						<label class="control-label starLevel">{{#rs.standardScore | getScoreStar : "1"}}</label>\r\n					</div>\r\n					{{else}}\r\n					<div class="pull-left comment-cont-score">\r\n						<label class="control-label">服务意识</label>\r\n						<label class="control-label starLevel">{{#rs.serviceAbilityScore | getScoreStar : "1"}}</label>\r\n					</div>\r\n					<div class="pull-left comment-cont-score">\r\n						<label class="control-label">语言能力</label>\r\n						<label class="control-label starLevel">{{#rs.talkAbilityScore | getScoreStar : "1"}}</label>\r\n					</div>\r\n					<div class="pull-left comment-cont-score">\r\n						<label class="control-label">业务水平</label>\r\n						<label class="control-label starLevel">{{#rs.businessAbilityScore | getScoreStar : "1"}}</label>\r\n					</div>\r\n					{{/if}}\r\n					<div class="pull-right comment-cont-date">{{rs.createTime}}</div>\r\n				</div>\r\n				<div class="comment-cont-text">\r\n					<p>{{rs.commentContent}}</p>\r\n				</div>\r\n			</div>\r\n			{{/each}}\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});