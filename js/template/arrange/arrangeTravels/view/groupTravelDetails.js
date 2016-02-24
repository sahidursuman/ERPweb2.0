/*TMODJS:{"debug":true,"version":60,"md5":"d868553d4ac48ce11ca3daf4d15c0c8f"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTravels/view/groupTravelDetails", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, note = $data.note, imgUrl = $data.imgUrl, $string = $utils.$string, $each = $utils.$each, tripPLanDayList = $data.tripPLanDayList, $out = ($data.rs, 
            $data.$index, $data.play, $data.bus, $data.hotel, $data.noteList, $data.line, "");
            return $out += '<div class="container-fluid globalAdd hct-min-width hct-mar-auto"> <div class="row hct-top-header"> <div class="col-xs-12 yj-title"> <span class="fa fa-ellipsis-v" style="color: #e2b058;"></span> <label class="control-label mar-l-10">', 
            $line = 5, $out += $escape(note.title), $out += '</label> <a class="hct-top-share T-action T-share" data-title="', 
            $line = 6, $out += $escape(note.title), $out += '" data-id="', $line = 6, $out += $escape(note.id), 
            $out += '" data-type="groupTravel"><i class="fa fa-share-alt"></i>分享</a> </div> </div> <div class="row hct-note"> <div class="col-xs-12"> <div class="pull-left cursor T-action T-view-user" data-id="', 
            $line = 11, $out += $escape(note.id), $out += '"> <div class="caption-user-header pull-left', 
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
            $line = 42, $out += $escape(note.viewCount), $out += '</label> </p> </div> </div> </div> <div class="row note-days-list"> ', 
            $line = 48, $each(tripPLanDayList, function(rs) {
                $out += ' <div class="note-days-item"> <div class="note-days-header"> <div class="pull-left note-days">D', 
                $line = 51, $out += $escape(rs.whichDay), $out += '</div> <div class="pull-left note-address">', 
                $line = 52, $out += $escape(rs.title), $out += '</div> <div class="pull-left note-date">', 
                $line = 53, $out += $escape(rs.time), $out += '</div> </div> <div class="note-details-container"> ', 
                $line = 56, rs.playItemList.length > 0 && ($out += ' <div class="note-details-item"> <div class="note-details-header"> <h3>游玩</h3> </div> ', 
                $line = 61, $each(rs.playItemList, function(play) {
                    $out += ' <div class="note-details-list"> <div class="note-details-body"> <div class="note-db-img"> ', 
                    $line = 65, play.itemImage && ($out += '<img src="', $line = 65, $out += $escape(imgUrl + play.itemImage), 
                    $out += '">', $line = 65), $out += ' </div> <div class="note-db-itemText"> ', $line = 68, 
                    $out += $string(play.itemText), $out += ' </div> </div> <div class="note-details-footer"> <div class="pull-left note-df-dateTime">', 
                    $line = 72, $out += $escape(play.createTime), $out += '</div> <div class="pull-right comment-info"> <label class="control-label"><i class="fa fa-heart"></i>', 
                    $line = 74, $out += $escape(play.likeCount), $out += '</label> <label class="control-label mar-l-10 cursor T-action T-single-comment" data-id="', 
                    $line = 75, $out += $escape(play.id), $out += '"><i class="fa fa-comment"></i>', 
                    $line = 75, $out += $escape(play.commentCount), $out += "</label> </div> </div> </div> ", 
                    $line = 79;
                }), $out += " </div> ", $line = 81), $out += " ", $line = 83, rs.traficItemList.length > 0 && ($out += ' <div class="note-details-item"> <div class="note-details-header"> <h3>交通</h3> </div> ', 
                $line = 88, $each(rs.traficItemList, function(bus) {
                    $out += ' <div class="note-details-list"> <div class="note-details-body"> <div class="note-db-img"> ', 
                    $line = 92, bus.itemImage && ($out += '<img src="', $line = 92, $out += $escape(imgUrl + bus.itemImage), 
                    $out += '">', $line = 92), $out += ' </div> <div class="note-db-itemText"> ', $line = 95, 
                    $out += $string(bus.itemText), $out += ' </div> </div> <div class="note-details-footer"> <div class="pull-left note-df-dateTime">', 
                    $line = 99, $out += $escape(bus.createTime), $out += '</div> <div class="pull-right comment-info"> <label class="control-label"><i class="fa fa-heart"></i>', 
                    $line = 101, $out += $escape(bus.likeCount), $out += '</label> <label class="control-label mar-l-10 cursor T-action T-single-comment" data-id="', 
                    $line = 102, $out += $escape(bus.id), $out += '"><i class="fa fa-comment"></i>', 
                    $line = 102, $out += $escape(bus.commentCount), $out += "</label> </div> </div> </div> ", 
                    $line = 106;
                }), $out += " </div> ", $line = 108), $out += " ", $line = 110, rs.hotelItemList.length > 0 && ($out += ' <div class="note-details-item"> <div class="note-details-header"> <h3>住宿</h3> </div> ', 
                $line = 115, $each(rs.hotelItemList, function(hotel) {
                    $out += ' <div class="note-details-list"> <div class="note-details-body"> <div class="note-db-img"> ', 
                    $line = 119, hotel.itemImage && ($out += '<img src="', $line = 119, $out += $escape(imgUrl + hotel.itemImage), 
                    $out += '">', $line = 119), $out += ' </div> <div class="note-db-itemText"> ', $line = 122, 
                    $out += $string(hotel.itemText), $out += ' </div> </div> <div class="note-details-footer"> <div class="pull-left note-df-dateTime">', 
                    $line = 126, $out += $escape(hotel.createTime), $out += '</div> <div class="pull-right comment-info"> <label class="control-label"><i class="fa fa-heart"></i>', 
                    $line = 128, $out += $escape(hotel.likeCount), $out += '</label> <label class="control-label mar-l-10 cursor T-action T-single-comment" data-id="', 
                    $line = 129, $out += $escape(hotel.id), $out += '"><i class="fa fa-comment"></i>', 
                    $line = 129, $out += $escape(hotel.commentCount), $out += "</label> </div> </div> </div> ", 
                    $line = 133;
                }), $out += " </div> ", $line = 135), $out += " ", $line = 137, rs.noteItemList.length > 0 && ($out += ' <div class="note-details-item"> <div class="note-details-header"> <h3>笔记</h3> </div> ', 
                $line = 142, $each(rs.noteItemList, function(noteList) {
                    $out += ' <div class="note-details-list"> <div class="note-details-body"> <div class="note-db-img"> ', 
                    $line = 146, noteList.itemImage && ($out += '<img src="', $line = 146, $out += $escape(imgUrl + noteList.itemImage), 
                    $out += '">', $line = 146), $out += ' </div> <div class="note-db-itemText"> ', $line = 149, 
                    $out += $string(noteList.itemText), $out += ' </div> </div> <div class="note-details-footer"> <div class="pull-left note-df-dateTime">', 
                    $line = 153, $out += $escape(noteList.createTime), $out += '</div> <div class="pull-right comment-info"> <label class="control-label"><i class="fa fa-heart"></i>', 
                    $line = 155, $out += $escape(noteList.likeCount), $out += '</label> <label class="control-label mar-l-10 cursor T-action T-single-comment" data-id="', 
                    $line = 156, $out += $escape(noteList.id), $out += '"><i class="fa fa-comment"></i>', 
                    $line = 156, $out += $escape(noteList.commentCount), $out += "</label> </div> </div> </div> ", 
                    $line = 160;
                }), $out += " </div> ", $line = 162), $out += " ", $line = 164, rs.lineItemList.length > 0 && ($out += ' <div class="note-details-item"> <div class="note-details-header"> <h3>线路简介</h3> </div> ', 
                $line = 169, $each(rs.lineItemList, function(line) {
                    $out += ' <div class="note-details-list"> <div class="note-details-body"> <div class="note-db-img"> ', 
                    $line = 173, line.itemImage && ($out += '<img src="', $line = 173, $out += $escape(imgUrl + line.itemImage), 
                    $out += '">', $line = 173), $out += ' </div> <div class="note-db-itemText"> ', $line = 176, 
                    $out += $string(line.itemText), $out += ' </div> </div> <div class="note-details-footer"> <div class="pull-left note-df-dateTime">', 
                    $line = 180, $out += $escape(line.createTime), $out += '</div> <div class="pull-right comment-info"> <label class="control-label"><i class="fa fa-heart"></i>', 
                    $line = 182, $out += $escape(line.likeCount), $out += '</label> <label class="control-label mar-l-10 cursor T-action T-single-comment" data-id="', 
                    $line = 183, $out += $escape(line.id), $out += '"><i class="fa fa-comment"></i>', 
                    $line = 183, $out += $escape(line.commentCount), $out += "</label> </div> </div> </div> ", 
                    $line = 187;
                }), $out += " </div> ", $line = 189), $out += " </div> </div> ", $line = 192;
            }), $out += " </div> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid globalAdd hct-min-width hct-mar-auto">\r\n	<div class="row hct-top-header">\r\n		<div class="col-xs-12 yj-title">\r\n			<span class="fa fa-ellipsis-v" style="color: #e2b058;"></span>\r\n			<label class="control-label mar-l-10">{{note.title}}</label>\r\n			<a class="hct-top-share T-action T-share" data-title="{{note.title}}" data-id="{{note.id}}" data-type="groupTravel"><i class="fa fa-share-alt"></i>分享</a>\r\n		</div>\r\n	</div>\r\n	<div class="row hct-note">\r\n		<div class="col-xs-12">\r\n			<div class="pull-left cursor T-action T-view-user" data-id="{{note.id}}">\r\n				<div class="caption-user-header pull-left{{if !note.guideInfo.photo}} default-img{{/if}}">\r\n					{{if note.guideInfo.photo}}<img src="{{imgUrl + note.guideInfo.photo}}">{{/if}}\r\n				</div>\r\n				<div class="note-guide-info pull-left">\r\n					<p>{{note.guideInfo.name}}</p>\r\n					<p class="starLevel">{{#note.guideInfo.guideSatisfaction | getScoreStar}}</p>\r\n				</div>\r\n			</div>\r\n			<div class="pull-right note-date">\r\n				<p>\r\n					<label class="control-label">出行日期：{{note.startTime}}</label>\r\n	        		<label class="control-label mar-l-10">出游天数：{{note.days}}天</label>\r\n	        	</p>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 score-body">\r\n			<div class="pull-left note-score">\r\n				<p class="scoreCount">{{note.tripSatisfaction}}%</p>\r\n				<p class="starLevel">{{#note.tripSatisfaction | getScoreStar}}</p>\r\n			</div>\r\n			<div class="pull-left note-line-score">\r\n				<p>此线路产品跟团游客满意度为{{note.tripSatisfaction}}%</p>\r\n				<p>已有{{note.scoreCount}}人评分</p>\r\n			</div>\r\n			<div class="pull-right p-no-mar">\r\n				<p>&nbsp;</p>\r\n				<p class="comment-info">\r\n					<label class="control-label"><i class="fa fa-heart"></i>{{note.likeCount}}</label>\r\n	        		<label class="control-label mar-l-15"><i class="fa fa-comment"></i>{{note.commentCount}}</label>\r\n	        		<label class="control-label mar-l-15"><i class="fa fa-share-alt"></i>{{note.shareCount}}</label>\r\n	        		<label class="control-label mar-l-15"><i class="fa fa-eye"></i>{{note.viewCount}}</label>\r\n				</p>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class="row note-days-list">\r\n		{{each tripPLanDayList as rs}}\r\n		<div class="note-days-item">\r\n			<div class="note-days-header">\r\n				<div class="pull-left note-days">D{{rs.whichDay}}</div>\r\n				<div class="pull-left note-address">{{rs.title}}</div>\r\n				<div class="pull-left note-date">{{rs.time}}</div>\r\n			</div>\r\n			<div class="note-details-container">\r\n				{{if rs.playItemList.length > 0}}\r\n				<div class="note-details-item">\r\n					<div class="note-details-header">\r\n						<h3>游玩</h3>\r\n					</div>\r\n					{{each rs.playItemList as play}}\r\n					<div class="note-details-list">\r\n						<div class="note-details-body">\r\n							<div class="note-db-img">\r\n								{{if !!play.itemImage}}<img src="{{imgUrl + play.itemImage}}">{{/if}}\r\n							</div>\r\n							<div class="note-db-itemText">\r\n								{{#play.itemText}}\r\n							</div>\r\n						</div>\r\n						<div class="note-details-footer">\r\n							<div class="pull-left note-df-dateTime">{{play.createTime}}</div>\r\n							<div class="pull-right comment-info">\r\n								<label class="control-label"><i class="fa fa-heart"></i>{{play.likeCount}}</label>\r\n		        				<label class="control-label mar-l-10 cursor T-action T-single-comment" data-id="{{play.id}}"><i class="fa fa-comment"></i>{{play.commentCount}}</label>\r\n							</div>\r\n						</div>\r\n					</div>\r\n					{{/each}}\r\n				</div>\r\n				{{/if}}\r\n\r\n				{{if rs.traficItemList.length > 0}}\r\n				<div class="note-details-item">\r\n					<div class="note-details-header">\r\n						<h3>交通</h3>\r\n					</div>\r\n					{{each rs.traficItemList as bus}}\r\n					<div class="note-details-list">\r\n						<div class="note-details-body">\r\n							<div class="note-db-img">\r\n								{{if !!bus.itemImage}}<img src="{{imgUrl + bus.itemImage}}">{{/if}}\r\n							</div>\r\n							<div class="note-db-itemText">\r\n								{{#bus.itemText}}\r\n							</div>\r\n						</div>\r\n						<div class="note-details-footer">\r\n							<div class="pull-left note-df-dateTime">{{bus.createTime}}</div>\r\n							<div class="pull-right comment-info">\r\n								<label class="control-label"><i class="fa fa-heart"></i>{{bus.likeCount}}</label>\r\n		        				<label class="control-label mar-l-10 cursor T-action T-single-comment" data-id="{{bus.id}}"><i class="fa fa-comment"></i>{{bus.commentCount}}</label>\r\n							</div>\r\n						</div>\r\n					</div>\r\n					{{/each}}\r\n				</div>\r\n				{{/if}}\r\n				\r\n				{{if rs.hotelItemList.length > 0}}\r\n				<div class="note-details-item">\r\n					<div class="note-details-header">\r\n						<h3>住宿</h3>\r\n					</div>\r\n					{{each rs.hotelItemList as hotel}}\r\n					<div class="note-details-list">\r\n						<div class="note-details-body">\r\n							<div class="note-db-img">\r\n								{{if !!hotel.itemImage}}<img src="{{imgUrl + hotel.itemImage}}">{{/if}}\r\n							</div>\r\n							<div class="note-db-itemText">\r\n								{{#hotel.itemText}}\r\n							</div>\r\n						</div>\r\n						<div class="note-details-footer">\r\n							<div class="pull-left note-df-dateTime">{{hotel.createTime}}</div>\r\n							<div class="pull-right comment-info">\r\n								<label class="control-label"><i class="fa fa-heart"></i>{{hotel.likeCount}}</label>\r\n		        				<label class="control-label mar-l-10 cursor T-action T-single-comment" data-id="{{hotel.id}}"><i class="fa fa-comment"></i>{{hotel.commentCount}}</label>\r\n							</div>\r\n						</div>\r\n					</div>\r\n					{{/each}}\r\n				</div>\r\n				{{/if}}\r\n\r\n				{{if rs.noteItemList.length > 0}}\r\n				<div class="note-details-item">\r\n					<div class="note-details-header">\r\n						<h3>笔记</h3>\r\n					</div>\r\n					{{each rs.noteItemList as noteList}}\r\n					<div class="note-details-list">\r\n						<div class="note-details-body">\r\n							<div class="note-db-img">\r\n								{{if !!noteList.itemImage}}<img src="{{imgUrl + noteList.itemImage}}">{{/if}}\r\n							</div>\r\n							<div class="note-db-itemText">\r\n								{{#noteList.itemText}}\r\n							</div>\r\n						</div>\r\n						<div class="note-details-footer">\r\n							<div class="pull-left note-df-dateTime">{{noteList.createTime}}</div>\r\n							<div class="pull-right comment-info">\r\n								<label class="control-label"><i class="fa fa-heart"></i>{{noteList.likeCount}}</label>\r\n		        				<label class="control-label mar-l-10 cursor T-action T-single-comment" data-id="{{noteList.id}}"><i class="fa fa-comment"></i>{{noteList.commentCount}}</label>\r\n							</div>\r\n						</div>\r\n					</div>\r\n					{{/each}}\r\n				</div>\r\n				{{/if}}\r\n\r\n				{{if rs.lineItemList.length > 0}}\r\n				<div class="note-details-item">\r\n					<div class="note-details-header">\r\n						<h3>线路简介</h3>\r\n					</div>\r\n					{{each rs.lineItemList as line}}\r\n					<div class="note-details-list">\r\n						<div class="note-details-body">\r\n							<div class="note-db-img">\r\n								{{if !!line.itemImage}}<img src="{{imgUrl + line.itemImage}}">{{/if}}\r\n							</div>\r\n							<div class="note-db-itemText">\r\n								{{#line.itemText}}\r\n							</div>\r\n						</div>\r\n						<div class="note-details-footer">\r\n							<div class="pull-left note-df-dateTime">{{line.createTime}}</div>\r\n							<div class="pull-right comment-info">\r\n								<label class="control-label"><i class="fa fa-heart"></i>{{line.likeCount}}</label>\r\n		        				<label class="control-label mar-l-10 cursor T-action T-single-comment" data-id="{{line.id}}"><i class="fa fa-comment"></i>{{line.commentCount}}</label>\r\n							</div>\r\n						</div>\r\n					</div>\r\n					{{/each}}\r\n				</div>\r\n				{{/if}}\r\n			</div>\r\n		</div>\r\n		{{/each}}\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});