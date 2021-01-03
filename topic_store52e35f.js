define("pages_new/common_share/video/like_and_share/constants.js",[],function(){
"use strict";
var E={
SET_PRAISE_STATUS:"SET_PRAISE_STATUS",
SET_RECOMMEND_STATUS:"SET_RECOMMEND_STATUS",
REPORT_SHARE_CLICK:"REPORT_SHARE_CLICK",
REPORT_JUMP_TO_WOW:"REPORT_JUMP_TO_WOW",
REPORT_OPEN_RECOMMEND_COMMENT:"REPORT_OPEN_RECOMMEND_COMMENT",
REPORT_RECOMMEND_EXPOSE:"REPORT_RECOMMEND_EXPOSE",
REPORT_EDUCATE_EXPOSE:"REPORT_EDUCATE_EXPOSE"
},_={
SET_PRAISE_NUM:"SET_PRAISE_NUM",
SET_RECOMMEND_NUM:"SET_RECOMMEND_NUM"
};
return{
ACTIONS:E,
MUTATIONS:_
};
});define("pages_new/common_share/video/like_and_share/mutations.js",[],function(){
"use strict";
return{};
});function _defineProperty(e,a,i){
return a in e?Object.defineProperty(e,a,{
value:i,
enumerable:!0,
configurable:!0,
writable:!0
}):e[a]=i,e;
}
define("pages_new/common_share/video/like_and_share/actions.js",["pages_new/common_share/video/like_and_share/constants.js","appmsg/retry_ajax.js","biz_wap/utils/ajax.js","common/comm_report.js","appmsg/log.js"],function(e){
"use strict";
var a,i=e("pages_new/common_share/video/like_and_share/constants.js"),t=e("appmsg/retry_ajax.js"),s=e("biz_wap/utils/ajax.js"),p=e("common/comm_report.js"),c=e("appmsg/log.js");
return a={},_defineProperty(a,i.ACTIONS.SET_PRAISE_STATUS,function(e,a){
var i=e.rootState,s=e.commit,p=void 0,c=void 0;
p=-1===a.hasPraised?!i.extRes.appmsgstat.old_liked:a.hasPraised,c=p?i.extRes.appmsgstat.old_like_num+1:i.extRes.appmsgstat.old_like_num-1,
s("SET_PRAISE_STATUS",{
hasPraised:p
},{
root:!0
}),s("SET_PRAISE_NUM",{
praiseNum:c
},{
root:!0
}),t({
url:"/mp/appmsg_like?__biz="+i.cgiData.biz+"&mid="+i.cgiData.appmsgid+"&idx="+i.cgiData.idx+"&like="+(p?1:0)+"&f=json&appmsgid="+i.cgiData.appmsgid+"&itemidx="+i.cgiData.idx,
data:{
scene:i.cgiData.source,
appmsg_like_type:1,
item_show_type:parseInt(i.cgiData.item_show_type,10),
client_version:i.cgiData.clientversion,
is_temp_url:i.cgiData.is_temp_url||0,
style:0,
exptype:i.cgiData.exptype||"",
expsessionid:i.cgiData.expsessionid||""
},
type:"POST"
});
}),_defineProperty(a,i.ACTIONS.SET_RECOMMEND_STATUS,function(e,a){
var i=e.rootState;
return new Promise(function(e,t){
var p=void 0;
p=a.hasRecommended?a.type:2,s({
url:"/mp/appmsg_like?__biz="+i.cgiData.biz+"&mid="+i.cgiData.appmsgid+"&idx="+i.cgiData.idx+"&like="+(a.hasRecommended?1:0)+"&f=json&appmsgid="+i.cgiData.appmsgid+"&itemidx="+i.cgiData.idx,
data:{
is_temp_url:i.cgiData.is_temp_url||0,
scene:i.cgiData.source,
subscene:i.cgiData.subscene,
appmsg_like_type:i.cgiData.appmsg_like_type,
item_show_type:parseInt(i.cgiData.item_show_type,10),
client_version:i.cgiData.clientversion,
comment:a.comment?a.comment:"",
prompted:1,
action_type:p,
style:a.styleType,
passparam:i.cgiData.passparam,
request_id:(new Date).getTime(),
device_type:i.cgiData.devicetype,
exptype:i.cgiData.exptype||"",
expsessionid:i.cgiData.expsessionid||""
},
type:"POST",
success:function(i){
var t=JSON.parse(i);
c("[Appmsg] success send appmsglike like "+a.hasRecommended+" return value is "+JSON.stringify(t)),
e(t);
},
error:function(e){
t(e);
}
});
});
}),_defineProperty(a,i.ACTIONS.REPORT_SHARE_CLICK,function(e){
var a=e.rootState,i=0;
try{
i=1*window.atob(a.cgiData.biz);
}catch(t){}
var s={
BizUin:i,
BizUinStr:a.cgiData.biz||"",
AppMsgId:window.parseInt(a.cgiData.appmsgid,10)||0,
ItemIdx:window.parseInt(a.cgiData.idx,10)||0,
ItemShowType:window.parseInt(a.cgiData.item_show_type,10)||0,
SessionIdStr:a.cgiData.sessionid||"",
EnterId:window.parseInt(a.cgiData.enterid,10)||0,
Scene:window.parseInt(a.cgiData.source,10)||0,
SubScene:window.parseInt(a.cgiData.subscene,10)||0,
EventType:4
};
p.report(19048,s);
}),_defineProperty(a,i.ACTIONS.REPORT_JUMP_TO_WOW,function(e){
var a=e.rootState,i=a.cgiData.appmsgid,t=a.cgiData.idx,p=a.cgiData.enterid;
s({
url:"/mp/webcommreport?action=report&report_useruin=1&__biz="+a.cgiData.biz,
type:"POST",
data:{
logid:18266,
buffer:["",window.atob(a.cgiData.biz),i,t,a.cgiData.source,a.cgiData.subscene,2,a.cgiData.item_show_type,a.cgiData.sessionid,p]
},
async:!1,
timeout:2e3
});
}),_defineProperty(a,i.ACTIONS.REPORT_OPEN_RECOMMEND_COMMENT,function(e){
var a=e.rootState;
s({
url:"/mp/appmsgreport?action=appmsglikeclickcomment&__biz="+a.cgiData.biz+"&mid="+a.cgiData.appmsgid+"&idx="+a.cgiData.idx+"&f=json&appmsgid="+a.cgiData.appmsgid+"&itemidx="+a.cgiData.idx,
data:{
is_temp_url:a.cgiData.is_temp_url||0,
scene:a.cgiData.source,
subscene:a.cgiData.subscene,
appmsg_like_type:a.cgiData.appmsg_like_type,
item_show_type:parseInt(a.cgiData.item_show_type,10),
client_version:a.cgiData.clientversion,
device_type:a.cgiData.devicetype
},
type:"POST"
});
}),_defineProperty(a,i.ACTIONS.REPORT_RECOMMEND_EXPOSE,function(e){
var a=e.rootState;
s({
url:"/mp/appmsgreport?action=appmsglikeexposure&__biz="+a.cgiData.biz+"&mid="+a.cgiData.appmsgid+"&idx="+a.cgiData.idx+"&f=json&appmsgid="+a.cgiData.appmsgid+"&itemidx="+a.cgiData.idx,
data:{
is_temp_url:a.cgiData.is_temp_url||0,
scene:a.cgiData.source,
subscene:a.cgiData.subscene,
appmsg_like_type:a.cgiData.appmsg_like_type,
item_show_type:parseInt(a.cgiData.item_show_type,10),
client_version:a.cgiData.clientversion,
device_type:a.cgiData.devicetype
},
type:"POST"
});
}),_defineProperty(a,i.ACTIONS.REPORT_EDUCATE_EXPOSE,function(e){
var a=e.rootState;
s({
url:"/mp/webcommreport?action=report&report_useruin=1&__biz="+a.cgiData.biz,
type:"POST",
data:{
logid:18266,
buffer:["",window.atob(a.cgiData.biz),a.cgiData.appmsgid,a.cgiData.itemidx,a.cgiData.source,a.cgiData.subscene,1,a.cgiData.itemShowType,a.cgiData.sessionid,a.cgiData.enterid]
},
async:!1,
timeout:2e3
});
}),a;
});define("appmsg/emotion/caret.js",[],function(e,t){
"use strict";
var t={};
return t.get=function(e){
var t=0;
if(document.selection){
e.focus();
var a=document.selection.createRange();
a.moveStart("character",-e.value.length),t=Sel.text.length;
}else(e.selectionStart||"0"==e.selectionStart)&&(t=e.selectionStart);
return t;
},t.set=function(e,t){
if(e.setSelectionRange)e.focus(),e.setSelectionRange(t,t);else if(e.createTextRange){
var a=e.createTextRange();
a.collapse(!0),a.moveEnd("character",t),a.moveStart("character",t),a.select();
}
},t;
});var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var o=arguments[t];
for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);
}
return e;
};
define("pages_new/common_share/video/player/plugins/auto_next/auto_next_store.js",["biz_wap/jsapi/log.js","pages/utils.js","common/comm_report.js","biz_wap/utils/jsmonitor_report.js"],function(e){
"use strict";
var t=e("biz_wap/jsapi/log.js"),o=e("pages/utils.js"),n=e("common/comm_report.js"),s=e("biz_wap/utils/jsmonitor_report.js");
return{
name:"auto-next-plugin",
namespaced:!0,
state:function(){
return{
autoNextStatus:0
};
},
getters:{
nextVideo:function(e,t,o){
var n=o.extRes;
if(n.related_tag_video&&n.related_tag_video.length)for(var s=0;s<n.related_tag_video.length;s++){
var a=n.related_tag_video[s];
if(1!==a.user_read_status)return{
source:1,
vid:a.vid,
url:a.url,
recInfo:a.rec_info,
title:a.title||"更多精彩视频",
cover:a.cover||"",
headImg:a.head_img_url||"",
bizNickName:a.srcDisplayName||""
};
}
return null;
},
report17149Data:function(e,t,n){
var s=n.cgiData,a=n.extRes;
return{
BizUserName:s.biz,
MsgId:1*s.mid,
Idx:1*s.idx,
EnterId:s.enterid,
VideoId:s.vid,
Scene:s.scene,
Subscene:1*s.subscene,
SessionIdStr:s.sessionid,
ChannelSessionId:s.channel_session_id,
ContinueId:s.continueid+"",
ReloadId:s.reloadid+"",
Device:s.devicetype,
ContinueSource:t.nextVideo&&t.nextVideo.source||0,
MoreVideosInfo:t.nextVideo&&o.getMoreVideoInfo(t.nextVideo.url,t.nextVideo.vid)||"",
VideoRecommendType:a.video_recommend_type||0,
MoreVideoSortId:a.more_video_sort_id||0,
MoreVideosSeq:s.continueseq,
MoreVideoRecInfo:t.nextVideo&&t.nextVideo.recInfo||""
};
}
},
mutations:{
setAutoNextStatus:function(e,t){
e.autoNextStatus=t.value;
}
},
actions:{
cancelAutoNext:function(e,o){
var n=e.commit,s=e.state,a=e.dispatch;
0===s.autoNextStatus?(n("setAutoNextStatus",{
value:4
}),console.log("[AutoNext Plugin] Cancel autonext for reason "+o+" before tips show"),
t.info("cancel autonext for reason "+o+" before tips show")):a("cancelAutoNextWhenTipsShowed",o);
},
resumeAutoNext:function(e){
var o=e.commit,n=e.state;
4===n.autoNextStatus&&(o("setAutoNextStatus",{
value:0
}),console.log("[AutoNext Plugin] Resume autonext"),t.info("resume autonext"));
},
cancelAutoNextWhenTipsShowed:function(e,o){
var n=e.dispatch,a=e.state;
if(1===a.autoNextStatus){
n("hideTips");
var i=function(){
s.setSum(221764,28,1),n("report17149",{
EventType:87,
ContinueBreakReason:o
});
};
3===o?setTimeout(i):i(),console.log("[AutoNext Plugin] Cancel autonext for reason "+o+" when tips showed"),
t.info("cancel autonext for reason "+o+" when tips showed");
}
},
showTips:function(e){
var t=e.dispatch,o=e.commit,n=e.state;
0===n.autoNextStatus&&(o("setAutoNextStatus",{
value:1
}),s.setSum(221764,25,1),t("report17149",{
EventType:86
}));
},
hideTips:function(e){
var t=e.commit,o=e.state;
1===o.autoNextStatus&&t("setAutoNextStatus",{
value:3
});
},
report17149:function(e,t){
var o=e.getters,s=_extends({},o.report17149Data,t);
n.report(17149,s);
}
}
};
});define("pages_new/common_share/video/player/plugins/mid_ad/mid_ad_store.js",[],function(){
"use strict";
return{
name:"mid-ad-plugin",
namespaced:!0,
state:function(){
return{
midAdStatus:0
};
},
mutations:{
setMidAdStatus:function(t,e){
t.midAdStatus=e.value;
}
}
};
});define("pages_new/common_share/video/player/plugins/popup/popup_store.js",[],function(){
"use strict";
function t(t){
var p=Math.floor(t),u=Math.ceil(t);
return t>p&&p+.5>t?p+.5:t>p+.5&&u>t?u:t;
}
return{
name:"popup-plugin",
namespaced:!0,
state:function(){
return{
currentPopupIdx:-1,
popupData:null
};
},
getters:{
currentPopup:function(t){
var p=t.popupData&&t.popupData[t.currentPopupIdx];
return p&&2!==p.status?p:null;
}
},
mutations:{
setCurrentPopupIdx:function(t,p){
t.currentPopupIdx=p.value;
},
setPopupStatus:function(t,p){
var u=p.index||t.currentPopupIdx,e=t.popupData&&t.popupData[u];
e&&(e.status=p.value);
},
setPopupData:function(p,u){
p.popupData=u.value.dots.map(function(p){
var u={},e={};
try{
u=JSON.parse(p.dot);
}catch(n){}
try{
e=JSON.parse(p.position);
}catch(n){}
return{
status:0,
info:u,
id:p.id,
type:p.type,
position:e,
startTime:t(1*p.begin_time),
endTime:t(1*p.end_time)
};
});
}
}
};
});define("pages_new/common_share/video/player/plugins/danmu/danmu_store.js",[],function(){
"use strict";
return{
name:"danmu-plugin",
namespaced:!0,
state:function(){
return{
inputStatus:0,
danmuInfo:null
};
},
mutations:{
setInputStatus:function(n,t){
n.inputStatus=t.value;
},
setDanmuInfo:function(n,t){
n.danmuInfo=t;
}
}
};
});define("pages_new/common_share/video/player/plugins/tail/tail_store.js",[],function(){
"use strict";
return{
name:"tail-plugin",
namespaced:!0,
state:function(){
return{
tailStatus:0
};
},
mutations:{
setTailStatus:function(t,a){
t.tailStatus=a.value;
}
},
actions:{
setLikeStatus:function(t,a){
var e=t.rootState,s=t.commit;
s("SET_PRAISE_STATUS",{
hasPraised:a.hasPraised
},{
root:!0
}),s("SET_PRAISE_NUM",{
praiseNum:e.extRes.appmsgstat.old_like_num+(a.hasPraised?1:-1)
},{
root:!0
});
}
}
};
});define("pages_new/common_share/video/topic/topic_store.js",[],function(){
"use strict";
return{
name:"mp-topic",
namespaced:!0,
state:function(){
return{
reportStatus:[]
};
},
getters:{
list:function(t,e,n){
var r=n.cgiData.topics||[];
return r;
},
reportStatus:function(t){
return t.reportStatus;
},
hasDesc:function(t,e,n){
return!!n.cgiData.msg_desc;
},
canReward:function(t,e,n){
return n.cgiData.is_need_reward;
}
},
mutations:{
REPORT_ITEM:function(t,e){
t.reportStatus[e]=!0;
}
},
actions:{
reportItem:function(t,e){
t.commit("REPORT_ITEM",e);
}
}
};
});