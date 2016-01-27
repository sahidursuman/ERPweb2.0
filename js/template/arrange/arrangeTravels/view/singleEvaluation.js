/*TMODJS:{"debug":true,"version":21,"md5":"b55c043eff8a95615290e827e2c4542a"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTravels/view/singleEvaluation", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, note = $data.note, noteItem = $data.noteItem, imgUrl = $data.imgUrl, $string = $utils.$string, $each = $utils.$each, $out = ($data.like, 
            $data.$index, $data.comment, $data.img, "");
            return $out += '<div class="container-fluid globalAdd hct-min-width hct-mar-auto"> <div class="row hct-top-header"> <div class="col-xs-12 yj-title"> <span class="fa fa-ellipsis-v" style="color: #e2b058;"></span> <label class="control-label mar-l-10">', 
            $line = 5, $out += $escape(note.title), $out += '</label> <a class="hct-top-share T-action T-share" data-title="', 
            $line = 6, $out += $escape(note.title), $out += '" data-id="', $line = 6, $out += $escape(noteItem.id), 
            $out += '" data-type="singleEvaluation"><i class="fa fa-share-alt"></i>分享</a> </div> </div> <div class="row hct-note"> <div class="col-xs-12"> <div class="pull-left cursor T-action T-view-user" data-id="', 
            $line = 11, $out += $escape(note.id), $out += '"> <div class="caption-user-header pull-left', 
            $line = 12, note.guideInfo.photo || ($out += " default-img", $line = 12), $out += '"> ', 
            $line = 13, note.guideInfo.photo && ($out += '<img src="', $line = 13, $out += $escape(imgUrl + note.guideInfo.photo), 
            $out += '">', $line = 13), $out += ' </div> <div class="note-guide-info pull-left"> <p class="pull-left">', 
            $line = 16, $out += $escape(note.guideInfo.name), $out += '</p> <p class="pull-left starLevel">', 
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
            $line = 42, $out += $escape(note.viewCount), $out += '</label> </p> </div> </div> </div> <div class="row note-days-list"> <div class="note-days-item"> <div class="note-days-header"> <div class="pull-left note-days">D', 
            $line = 50, $out += $escape(noteItem.tripPlanDay.whichDay), $out += '</div> <div class="pull-left note-address">', 
            $line = 51, $out += $escape(noteItem.tripPlanDay.title), $out += '</div> <div class="pull-left note-date">', 
            $line = 52, $out += $escape(noteItem.tripPlanDay.time), $out += '</div> </div> <div class="note-details-container"> <div class="note-details-item"> <div class="note-details-header"> <h3>', 
            $line = 57, $out += $escape($helpers.getNoteItemText(noteItem.itemType)), $out += '</h3> </div> <div class="note-details-list"> <div class="note-details-body"> <div class="note-db-img"> ', 
            $line = 62, noteItem.itemImage && ($out += '<img src="', $line = 62, $out += $escape(imgUrl + noteItem.itemImage), 
            $out += '">', $line = 62), $out += ' </div> <div class="note-db-itemText"> ', $line = 65, 
            $out += $string(noteItem.itemText), $out += ' </div> </div> <div class="note-details-footer"> <div class="pull-left note-df-dateTime">', 
            $line = 69, $out += $escape(noteItem.createTime), $out += '</div> <div class="pull-right comment-info"> <label class="control-label"><i class="fa fa-heart"></i>', 
            $line = 71, $out += $escape(noteItem.likeCount), $out += '</label> <label class="control-label mar-l-10"><i class="fa fa-comment"></i>', 
            $line = 72, $out += $escape(noteItem.commentCount), $out += '</label> </div> </div> </div> </div> </div> </div> </div> <div class="praise-content"> <div class="praise-cont-head"> 收到的赞 ', 
            $line = 82, $out += $escape(noteItem.likeCount), $out += ' </div> <ul class="praise-cont-body"> ', 
            $line = 85, $each(noteItem.noteItemLikeList, function(like) {
                $out += ' <li class="', $line = 86, like.photo || ($out += "default-img", $line = 86), 
                $out += '"> ', $line = 87, like.photo && ($out += ' <img src="', $line = 88, $out += $escape(like.photo), 
                $out += '" alt="', $line = 88, $out += $escape(like.name), $out += '"> ', $line = 89), 
                $out += " </li> ", $line = 91;
            }), $out += ' </ul> </div> <div class="comment-content"> <div class="comment-cont-head"> 收到的评论 ', 
            $line = 96, $out += $escape(noteItem.commentCount), $out += ' </div> <div class="comment-cont-body"> ', 
            $line = 99, $each(noteItem.noteItemCommentList, function(comment) {
                $out += ' <div class="comment-cont-item"> <div class="comment-user"> <div class="caption-user-header pull-left', 
                $line = 102, comment.photo || ($out += " default-img", $line = 102), $out += '"> ', 
                $line = 103, comment.photo && ($out += '<img src="', $line = 103, $out += $escape(imgUrl + comment.photo), 
                $out += '">', $line = 103), $out += ' </div> <div class="pull-left comment-cont-name"> ', 
                $line = 106, $out += $escape(comment.name), $out += ' </div> <div class="pull-right comment-cont-date">', 
                $line = 108, $out += $escape(comment.createTime), $out += '</div> </div> <div class="comment-cont-text"> <p>', 
                $line = 111, $out += $escape(comment.commentContent), $out += '</p> </div> <ul class="comment-cont-images"> ', 
                $line = 114, $each(comment.images, function(img) {
                    $out += ' <li> <a href="', $line = 116, $out += $escape(imgUrl + img), $out += '" class="T-photos"><img src="', 
                    $line = 116, $out += $escape(imgUrl + img), $out += '"></a> </li> ', $line = 118;
                }), $out += " </ul> </div> ", $line = 121;
            }), $out += " </div> </div> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid globalAdd hct-min-width hct-mar-auto">\r\n	<div class="row hct-top-header">\r\n		<div class="col-xs-12 yj-title">\r\n			<span class="fa fa-ellipsis-v" style="color: #e2b058;"></span>\r\n			<label class="control-label mar-l-10">{{note.title}}</label>\r\n			<a class="hct-top-share T-action T-share" data-title="{{note.title}}" data-id="{{noteItem.id}}" data-type="singleEvaluation"><i class="fa fa-share-alt"></i>分享</a>\r\n		</div>\r\n	</div>\r\n	<div class="row hct-note">\r\n		<div class="col-xs-12">\r\n			<div class="pull-left cursor T-action T-view-user" data-id="{{note.id}}">\r\n				<div class="caption-user-header pull-left{{if !note.guideInfo.photo}} default-img{{/if}}">\r\n					{{if note.guideInfo.photo}}<img src="{{imgUrl + note.guideInfo.photo}}">{{/if}}\r\n				</div>\r\n				<div class="note-guide-info pull-left">\r\n					<p class="pull-left">{{note.guideInfo.name}}</p>\r\n					<p class="pull-left starLevel">{{#note.guideInfo.guideSatisfaction | getScoreStar}}</p>\r\n				</div>\r\n			</div>\r\n			<div class="pull-right note-date">\r\n				<p>\r\n					<label class="control-label">出行日期：{{note.startTime}}</label>\r\n	        		<label class="control-label mar-l-10">出游天数：{{note.days}}天</label>\r\n	        	</p>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 score-body">\r\n			<div class="pull-left note-score">\r\n				<p class="scoreCount">{{note.tripSatisfaction}}%</p>\r\n				<p class="starLevel">{{#note.tripSatisfaction | getScoreStar}}</p>\r\n			</div>\r\n			<div class="pull-left note-line-score">\r\n				<p>此线路产品跟团游客满意度为{{note.tripSatisfaction}}%</p>\r\n				<p>已有{{note.scoreCount}}人评分</p>\r\n			</div>\r\n			<div class="pull-right p-no-mar">\r\n				<p>&nbsp;</p>\r\n				<p class="comment-info">\r\n					<label class="control-label"><i class="fa fa-heart"></i>{{note.likeCount}}</label>\r\n	        		<label class="control-label mar-l-15"><i class="fa fa-comment"></i>{{note.commentCount}}</label>\r\n	        		<label class="control-label mar-l-15"><i class="fa fa-share-alt"></i>{{note.shareCount}}</label>\r\n	        		<label class="control-label mar-l-15"><i class="fa fa-eye"></i>{{note.viewCount}}</label>\r\n				</p>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class="row note-days-list">\r\n		<div class="note-days-item">\r\n			<div class="note-days-header">\r\n				<div class="pull-left note-days">D{{noteItem.tripPlanDay.whichDay}}</div>\r\n				<div class="pull-left note-address">{{noteItem.tripPlanDay.title}}</div>\r\n				<div class="pull-left note-date">{{noteItem.tripPlanDay.time}}</div>\r\n			</div>\r\n			<div class="note-details-container">\r\n				<div class="note-details-item">\r\n					<div class="note-details-header">\r\n						<h3>{{noteItem.itemType | getNoteItemText}}</h3>\r\n					</div>\r\n					<div class="note-details-list">\r\n						<div class="note-details-body">\r\n							<div class="note-db-img">\r\n								{{if !!noteItem.itemImage}}<img src="{{imgUrl + noteItem.itemImage}}">{{/if}}\r\n							</div>\r\n							<div class="note-db-itemText">\r\n								{{#noteItem.itemText}}\r\n							</div>\r\n						</div>\r\n						<div class="note-details-footer">\r\n							<div class="pull-left note-df-dateTime">{{noteItem.createTime}}</div>\r\n							<div class="pull-right comment-info">\r\n								<label class="control-label"><i class="fa fa-heart"></i>{{noteItem.likeCount}}</label>\r\n		        				<label class="control-label mar-l-10"><i class="fa fa-comment"></i>{{noteItem.commentCount}}</label>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class="praise-content">\r\n		<div class="praise-cont-head">\r\n			收到的赞 {{noteItem.likeCount}}\r\n		</div>\r\n		<ul class="praise-cont-body">\r\n			{{each noteItem.noteItemLikeList as like}}\r\n			<li class="{{if !like.photo}}default-img{{/if}}">\r\n				{{if like.photo}}\r\n				<img src="{{like.photo}}" alt="{{like.name}}">\r\n				{{/if}}\r\n			</li>\r\n			{{/each}}\r\n		</ul>\r\n	</div>\r\n	<div class="comment-content">\r\n		<div class="comment-cont-head">\r\n			收到的评论 {{noteItem.commentCount}}\r\n		</div>\r\n		<div class="comment-cont-body">\r\n			{{each noteItem.noteItemCommentList as comment}}\r\n			<div class="comment-cont-item">\r\n				<div class="comment-user">\r\n					<div class="caption-user-header pull-left{{if !comment.photo}} default-img{{/if}}">\r\n						{{if comment.photo}}<img src="{{imgUrl + comment.photo}}">{{/if}}\r\n					</div>\r\n					<div class="pull-left comment-cont-name">\r\n						{{comment.name}}\r\n					</div>\r\n					<div class="pull-right comment-cont-date">{{comment.createTime}}</div>\r\n				</div>\r\n				<div class="comment-cont-text">\r\n					<p>{{comment.commentContent}}</p>\r\n				</div>\r\n				<ul class="comment-cont-images">\r\n					{{each comment.images as img}}\r\n					<li>\r\n						<a href="{{imgUrl + img}}" class="T-photos"><img src="{{imgUrl + img}}"></a>\r\n					</li>\r\n					{{/each}}\r\n				</ul>\r\n			</div>\r\n			{{/each}}\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});