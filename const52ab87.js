var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var n=arguments[t];
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);
}
return e;
};
define("appmsg/comment.js",["biz_common/utils/string/html.js","biz_common/dom/class.js","appmsg/cmt_tpl.html.js","biz_common/utils/wxgspeedsdk.js","appmsg/comment_report.js","biz_wap/utils/device.js","appmsg/retry_ajax.js","biz_common/dom/offset.js","biz_common/utils/url/parse.js","biz_wap/jsapi/core.js","common/utils.js","appmsg/emotion/selection.js","appmsg/i18n.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/tmpl.js","biz_wap/utils/fakehash.js","appmsg/log.js","appmsg/my_comment_tpl.html.js","appmsg/emotion/dom.js","pages/utils.js","biz_wap/utils/mmversion.js","common/comm_report.js","appmsg/set_font_size.js","biz_wap/utils/jsmonitor_report.js","appmsg/emotion/emotion_pc.js","appmsg/emotion/emotion.js","pages_new/common_share/video/store.js","appmsg/comment_tpl.html.js","appmsg/comment_pc_tpl.html.js","appmsg/friend_comment_tpl.html.js"],function(e,t,n,o){
"use strict";
function i(e){
var t=document.getElementById(e);
t.parentNode.removeChild(t);
}
function d(e,t){
e&&(e.style.display=t||"block");
}
function m(e){
e&&(e.style.display="none");
}
function l(e,t){
for(;e&&e.tagName&&"BODY"!==e.tagName.toUpperCase();){
if(e===t)return!0;
e=e.parentNode;
}
return!1;
}
function a(e){
var t=Ct.getScrollTop(),n=e.offsetTop;
return t+Ct.getInnerHeight()>n&&n>=t?!0:!1;
}
function s(){
nn.mylist.children.length?(d(nn.mylist.parentNode),vn||"none"===nn.mine.style.display||ct.removeClass(document.body,In)):(m(nn.mylist.parentNode),
vn||"none"===nn.mine.style.display||ct.addClass(document.body,In));
}
function r(){
var e=0,t=nn.mylist.getElementsByClassName("js_comment_item");
if(t&&t.length)for(var n=0;n<t.length;n++){
var o=t[n];
e++,e>2?m(o):d(o);
for(var i=o.getElementsByClassName("js_reply_item"),l=0;l<i.length;l++){
var a=i[l];
e++,e>2?m(a):d(a);
}
var s=o.getElementsByClassName("js_reply_div").length>0?o.getElementsByClassName("js_reply_div")[0]:null;
s&&(e>2?m(s):d(s));
}
pn=!1;
}
function c(){
var e=nn.mylist.getElementsByClassName("js_comment_item");
if(e&&e.length)for(var t=0;t<e.length;t++){
var n=e[t];
d(n);
for(var o=n.getElementsByClassName("js_reply_item"),i=0;i<o.length;i++)d(o[i]);
var m=n.getElementsByClassName("js_reply_div").length>0?n.getElementsByClassName("js_reply_div")[0]:null;
m&&d(m);
}
pn=!0;
}
function _(e){
nn.el_alertContent.innerHTML=e,nn.el_alertPanel.style.display="";
}
function p(){
vn?(ct.removeClass(document.getElementById("js_success_panel_pc"),"weui-transition_opacity-hide"),
setTimeout(function(){
ct.addClass(document.getElementById("js_success_panel_pc"),"weui-transition_opacity-hide");
},750)):(setTimeout(function(){
d(nn.toast);
},750),setTimeout(function(){
m(nn.toast);
},1500));
}
function u(e){
var t=l(e,nn.mylist),n=t?750:2e3;
document.getElementById("js_reply_success_pc_content").innerHTML=t?"已回复":"已回复，被精选后可见",
ct.removeClass(document.getElementById("js_reply_success_pc"),"weui-transition_opacity-hide"),
setTimeout(function(){
ct.addClass(document.getElementById("js_reply_success_pc"),"weui-transition_opacity-hide");
},n);
}
function g(e){
return e.toString().replace(/^\s+|\s+$/g,"");
}
function y(e,t){
if(!(Math.random()<.999)){
var n=9;
"https:"===window.location.protocol&&(n=18),pt.saveSpeeds({
uin:window.uin,
pid:n,
speeds:[{
sid:29,
time:e
},{
sid:30,
time:t
}]
}),pt.send();
}
}
function f(e){
var t=arguments.length<=1||void 0===arguments[1]?"":arguments[1];
if("undefined"!=typeof e)if(Ot.idkey)Ht.setSum(Ot.idkey,e,1);else{
var n=new Image,o=Math.random();
n.src="/mp/jsreport?key="+e+"&content="+t+"&r="+o;
}
}
function w(e){
var t=e.actiontype,n=void 0===t?0:t,o=e.personalCommentId,i=void 0===o?0:o,d=e.num,m=void 0===d?0:d;
Lt.report(19462,_extends({
PersonalCommentId:parseInt(i,10)||0,
CommentId:parseInt(Qt,10)||0,
actiontype:n,
wording:"余下N条",
number:parseInt(m,10)||0,
devicetype:vn?1:2
},Ft));
}
function h(){
for(var e=document.getElementsByClassName("js_extend_comment"),t=0;t<e.length;t++){
var n=e[t],o=n.getAttribute("data-my-id");
a(n)&&yn.indexOf(o)<=-1&&(w({
actiontype:1,
personalCommentId:o,
num:n.getAttribute("data-num")
}),yn.push(o));
}
}
function C(){
Gt||(Gt=!0,new ut({
comment_id:Qt,
appmsgid:window.appmsgid,
idx:window.idx,
item_show_type:window.item_show_type||0,
biz:window.biz
}),h());
}
function j(){
try{
var e=nn.loading.getBoundingClientRect(),t=Math.random()<1;
e.top<Ct.getInnerHeight()&&Zt&&t&&(Ht.setLogs({
id:28307,
key:45,
value:1,
lc:1,
log0:""
}),bt.off(window,"scroll",j));
}catch(n){
console.error(n);
}
}
function v(e){
Lt.report(19462,_extends({
CommentId:parseInt(Qt,10)||0,
actiontype:e,
wording:pn?"收起我的留言":"展开我的留言",
number:_n,
devicetype:1
},Ft));
}
function b(){
a(nn.expandAndFoldPC)&&(v(1),bt.off(window,"scroll",b));
}
function I(e){
var t=(new Date).getTime(),n=new Date;
n.setDate(n.getDate()+1),n.setHours(0),n.setMinutes(0),n.setSeconds(0),n=n.getTime();
var o=t/1e3-e,i=n/1e3-e,d=new Date(n).getFullYear(),m=new Date(1e3*e);
return 3600>o?Math.ceil(o/60)+"分钟前":86400>i?Math.floor(o/60/60)+"小时前":172800>i?"昨天":604800>i?Math.floor(i/24/60/60)+"天前":m.getFullYear()===d?m.getMonth()+1+"月"+m.getDate()+"日":m.getFullYear()+"年"+(m.getMonth()+1)+"月"+m.getDate()+"日";
}
function B(e){
xt.each(e.querySelectorAll("div.discuss_message_content"),function(e){
e.innerHTML=Pn.encode(e.innerHTML);
});
}
function E(e){
return e.replace("‮","");
}
function k(e,t,n){
var o=void 0,i=void 0,d="",m="",l=!Vt&&!rn||Vt&&qt||rn&&cn,a=document.createElement("div");
"elected"===n?m=0:"friend"===n&&(m=1),an={};
for(var s=0,r=0;r<e.length;r++){
if(s=0,i=e[r],i.isWxWork=jn,i.type=n,i.time=I(i.create_time),i.status="",i.logo_url=i.logo_url||An,
i.logo_url=-1!==i.logo_url.indexOf("wx.qlogo.cn")?i.logo_url.replace(/\/132$/,"/96"):i.logo_url,
i.content=i.content.htmlDecodeLite().htmlEncodeLite(),i.nick_name=i.nick_name.htmlDecodeLite().htmlEncodeLite(),
i.nick_name=E(i.nick_name),i.like_num_format=parseInt(i.like_num,10)>=1e4?(i.like_num/1e4).toFixed(1)+"万":i.like_num,
"en"===window.LANG&&(i.like_num_format=vt.dealLikeReadShow_en(i.like_num)),i.is_from_friend="friend"===n?0:i.is_from_friend||0,
i.is_from_me="mine"===n?1:i.is_from_me||0,i.reply_new=i.reply_new||{
reply_list:[]
},i.is_mine=!n,i.is_elected="elected"===n||"friend"===n?1:i.is_elected,i.is_top="friend"===n?0:i.is_top,
i.report_elected=i.is_elected||0,i.report_friend=i.is_from_friend||0,i.scene=m,i.supportReply=Bn&&i.is_from_me&&l&&!jn,
i.reply_new.reply_list.length>0)for(var c=0;c<i.reply_new.reply_list.length;c++){
var _=i.reply_new.reply_list[c];
"elected"!==n&&"friend"!==n||_.reply_is_elected?(_.time=I(_.create_time),_.content=(_.content||"").htmlEncodeLite(),
_.reply_like_status=_.reply_like_status||0,_.reply_like_num=_.reply_like_num||0,
_.reply_like_num_format=parseInt(_.reply_like_num,10)>=1e4?(_.reply_like_num/1e4).toFixed(1)+"万":_.reply_like_num,
"en"===window.LANG&&(_.reply_like_num_format=vt.dealLikeReadShow_en(_.reply_like_num)),
_.reply_is_elected=_.reply_is_elected,_.is_from_me=""!==_.openid&&i.is_from_me?1:0,
_.is_from_author=""===_.openid?1:0,c>0&&_.openid===i.reply_new.reply_list[c-1].openid&&(_.is_same=1),
s++):(i.reply_new.reply_list.splice(c,1),c--);
}
i.replyListCount=s,i.new_appmsg=window.new_appmsg,d+=Bt.tmpl(_t,i,!1);
try{
var p=i.nick_name+i.content,u=!1,g=Ot.repeatContentID;
an[p]&&(u=!0,g=Ot.repeatContent),on.indexOf(i.content_id)>-1&&(u=!0,g=Ot.repeatContentID),
on.push(i.content_id),an[p]=!0,u&&f(g,encodeURIComponent(JSON.stringify({
comment_id:Qt,
content_id:i.content_id,
offset:Jt,
length:e.length,
url:Cn
})));
}catch(y){
console.error(y);
}
}
for(a.innerHTML=d,B(a);a.children.item(0);)o=a.children.item(0),t.appendChild(o);
}
function T(e){
var t=void 0,n=void 0,o=Date.now(),i=e.resp,l=e.loadTime,a=e.forceRefresh,s=document.createDocumentFragment(),r=document.createDocumentFragment();
if(Vt=i.only_fans_can_comment,f(Ot.handleList,encodeURIComponent(JSON.stringify({
comment_id:Qt,
offset:Jt,
url:Cn
}))),1!==i.enabled?(En&&(En.style.display="none"),kn&&m(kn),i.elected_comment=[],
i.friend_comment=[],i.elected_comment_total_cnt=0,i.friend_comment_total_cnt=0):(En&&(En.style.display="block"),
kn&&d(kn)),0===Jt){
if($t=i.logo_url,mn=i.nick_name,a&&(on=[]),t=i.elected_comment,t&&t.length){
if(k(t,s,"elected"),a&&(nn.list.innerHTML=""),nn.list.appendChild(s),d(nn.main),
jn||(rn&&0===cn?(document.getElementById("js_cmt_nofans1").innerHTML="作者已设置关注3天后才可留言",
d(document.getElementById("js_cmt_nofans1"),"block")):Vt&&0===i.is_fans?(document.getElementById("js_cmt_nofans1").innerHTML="作者已设置关注后才可以留言",
d(document.getElementById("js_cmt_nofans1"),"block")):St&&(vn?(d(nn.commentPC),d(nn.inputPC)):d(nn.addCmtBtn1))),
i.elected_comment_total_cnt<=10&&(d(document.getElementById("js_cmt_statement")),
d(document.getElementById("js_cmt_qa"))),!Yt&&"5"===window.item_show_type){
var c=Date.now()-window.logs.pagetime.page_begin;
Yt=!0,Math.random()<.1&&(pt.saveSpeeds({
uin:window.uin,
pid:675,
speeds:[{
sid:27,
time:c
}]
}),pt.send());
}
}else m(nn.main),rn&&0===cn?(document.getElementById("js_cmt_nofans2_inner").innerHTML="作者已设置关注3天后才可留言",
d(document.getElementById("js_cmt_nofans2"),"block")):Vt&&0===i.is_fans?(document.getElementById("js_cmt_nofans2_inner").innerHTML="作者已设置关注后才可以留言",
d(document.getElementById("js_cmt_nofans2"),"block")):St&&(vn?(d(nn.commentPC),d(nn.inputPC)):d(nn.addCmtBtn2));
n=i.friend_comment,k(n,r,"friend"),n&&0===n.length&&m(kn),a&&(nn.fdlist.innerHTML=""),
nn.fdlist&&nn.fdlist.appendChild(r),n&&n.length?(d(nn.fdmain),(!Vt||Vt&&1===i.is_fans)&&(vn||(m(nn.addCmtBtn1),
m(nn.addCmtBtn2),St&&d(nn.addCmtBtn3)))):m(nn.fdmain);
var _=document.getElementById("js_cmt_area"),p=_.getBoundingClientRect().y;
location.href.indexOf("scrolltodown")>-1&&p&&window.scrollTo(0,p-25);
}else t=i.elected_comment,t&&t.length&&(k(t,s,"elected"),nn.list.appendChild(s));
0===i.elected_comment_total_cnt?(Jt=-1,m(document.getElementById("js_cmt_loading")),
m(document.getElementById("js_cmt_statement")),m(document.getElementById("js_cmt_qa"))):Jt+hn>=i.elected_comment_total_cnt?(Jt=-1,
m(document.getElementById("js_cmt_loading")),d(document.getElementById("js_cmt_statement")),
d(document.getElementById("js_cmt_qa"))):Jt+=i.elected_comment.length,window.ipados13_font_scale&&Mt.setFontSize(nn.main,window.ipados13_font_scale/100),
C(),Pt.setTwoTabHeight("js_comment_content"),l&&y(l,Date.now()-o);
}
function x(e){
if(Qt=window.comment_id,0!==Number(Qt)){
var t=e.forceRefresh,n=e.cb;
t=t===!0,t&&(Jt=0);
var o=Ct.getScrollTop(),i=document.documentElement.scrollHeight;
if(!(Zt||-1===Jt||Jt>0&&i-o-Ct.getInnerHeight()>500)){
if("number"==typeof Ut&&0===Ut&&!t)return void T({
resp:{
enabled:1,
elected_comment:[],
friend_comment:[],
elected_comment_total_cnt:0,
my_comment:[],
only_fans_can_comment:Vt,
is_fans:qt,
logo_url:$t,
nick_name:mn
}
});
var l=wt.join("/mp/appmsg_comment",{
action:"getcomment",
scene:Ot.scene,
appmsgid:window.appmsgid,
idx:window.idx,
comment_id:Qt,
offset:Jt,
limit:hn,
send_time:window.send_time
},!0),a=+new Date;
Zt=!0,m(nn.tips),d(nn.loading);
try{
en++,t&&(tn=[]),en>1&&!t&&f(Ot.moreList,encodeURIComponent(l)),tn.indexOf(l)>-1&&f(Ot.repeatList,encodeURIComponent(l)),
tn.push(l);
}catch(s){
console.error(s);
}
xn&&console.info("[图文评论] 开始请求评论数据:",l),kt("[Appmsg comment] start get comment data, url:"+l),
It({
url:l,
dataType:"json",
success:function(e){
var o=e.base_resp&&e.base_resp.ret;
0===o?n&&n({
resp:e,
forceRefresh:t,
loadTime:Date.now()-a
}):f(Ot.errList,"type:resperr;url:"+encodeURIComponent(l)+";ret="+o),kt("[Appmsg comment] get comment success");
},
error:function(){
f(Ot.errList,"type:ajaxerr;url:"+encodeURIComponent(l)),kt("[Appmsg comment] get comment ajax error");
},
complete:function(){
Zt=!1,m(nn.loading),bt.off(window,"scroll",j);
}
});
}
}
}
function P(){
2>=_n?m(nn.expandAndFoldPC):(d(nn.expandAndFoldPC),pn?(ct.addClass(nn.expandAndFoldPC,"comment_primary_more_access_unfold"),
nn.expandAndFoldPC.innerHTML="收起我的留言"):(ct.removeClass(nn.expandAndFoldPC,"comment_primary_more_access_unfold"),
nn.expandAndFoldPC.innerHTML="展开我的留言"));
}
function A(){
nn.list.children.length?nn.fdlist.children.length?(St&&d(nn.addCmtBtn3),m(nn.addCmtBtn1),
m(nn.addCmtBtn2),m(nn.addCmtBtn4)):(St&&d(nn.addCmtBtn1),m(nn.addCmtBtn2),m(nn.addCmtBtn3),
m(nn.addCmtBtn4)):nn.fdlist.children.length?(St&&d(nn.addCmtBtn3),m(nn.addCmtBtn4),
m(nn.addCmtBtn1),m(nn.addCmtBtn2)):(St&&d(nn.addCmtBtn2),m(nn.addCmtBtn3),m(nn.addCmtBtn1),
m(nn.addCmtBtn4)),vn&&(m(nn.addCmtBtn1),m(nn.addCmtBtn2),m(nn.addCmtBtn3));
}
function L(e,t){
var n=document.createDocumentFragment(),o={
content:t,
nick_name:mn,
create_time:Date.now()/1e3|0,
is_elected:0,
logo_url:$t,
like_status:0,
like_num_format:0,
like_num:0,
is_from_friend:0,
is_from_me:1,
my_id:e.my_id,
content_id:e.content_id,
reply_new:{
reply_list:[]
}
};
p(),k([o],n,"mine"),nn.mylist.insertBefore(n,nn.mylist.firstChild),s(),vn?(nn.input.innerHTML="",
nn.inputHolder.style.display="",nn.containerPC.style.display="none",nn.inputPC.style.display="",
_n++,pn=!0,gn.unshift(o),c(),P()):nn.input.value="",A();
}
function M(e,t){
var n=t.filter(function(t){
return parseInt(t.my_id,10)===parseInt(e,10);
});
return n&&n.length>0?n[0]:null;
}
function H(e,t,n,o){
u(o),nn.input.innerHTML="",nn.inputHolder.style.display="",_n++;
var i=document.createDocumentFragment(),d=document.getElementById("cid"+t),a=d.nextSibling;
nn.mylist.removeChild(d);
var s=M(t,gn);
s&&(s.reply_new&&s.reply_new.reply_list&&0!==s.reply_new.reply_list.length||(s.reply_new={
reply_list:[]
}),s.reply_new.reply_list.push({
content:n,
nick_name:mn,
create_time:Date.now()/1e3|0,
reply_is_elected:0,
reply_del_flag:0,
reply_like_status:0,
reply_like_num:0,
uin:Dt,
reply_id:e.reply_id
}),l(o,nn.list)?(m(nn.containerPC),k([s],i,"mine"),nn.mylist.insertBefore(i,a),pn?c():r()):(k([s],i,"mine"),
nn.mylist.insertBefore(i,a),pn=!0,c())),P();
}
function S(e){
var t=nn.containerPC.getAttribute("data-my-id"),n=g(dn).replace(/<br\/>/g,"").replace(/\n/g,"")||"",o=document.getElementById("activity-name");
if(nn.submit.disabled!==!0){
if(n.length<1)return void _("留言不能为空");
if(n.length>600)return void _("字数不能多于600个");
nn.submit.disabled=!0;
var i=wt.join("/mp/appmsg_comment",{
action:"addcommentreply",
scene:Ot.scene,
appmsgid:window.appmsgid,
idx:window.idx,
comment_id:Qt,
sn:window.sn
},!0);
It({
url:i,
data:{
content:n,
title:o&&g(o.innerText),
head_img:$t,
nickname:mn,
client_id:sn,
my_id:t
},
type:"POST",
dataType:"json",
success:function(o){
switch(+o.ret){
case 0:
H(o,t,n,e);
break;

case-6:
_("你留言的太频繁了，休息一下吧");
break;

case-7:
_("你还未关注该公众号，不能参与留言");
break;

case-10:
_("字数不能多于600个");
break;

case-15:
_("留言已关闭");
break;

default:
_("系统错误，请重试");
}
},
error:function(){}
});
}
}
function N(e){
var t=e.delegatedTarget||e.srcElement;
if(vn&&un)return void S(t);
xt.log("tag1");
var n=void 0,o=wt.join("/mp/appmsg_comment",{
action:"addcomment",
scene:Ot.scene,
appmsgid:window.appmsgid,
idx:window.idx,
comment_id:Qt,
sn:window.sn
},!0);
if(n=vn?g(dn).replace(/<br\/>/g,"").replace(/\n/g,"")||"":g(nn.input.value),xt.log("tag2"),
!ct.hasClass(nn.submit,"btn_disabled")&&nn.submit.disabled!==!0){
if(xt.log("tag3"),n.length<1)return void _("留言不能为空");
if(xt.log("tag4"),n.length>600)return void _("字数不能多于600个");
vn&&(n=dn),xt.log("tag5"),vn?nn.submit.disabled=!0:ct.addClass(nn.submit,"btn_disabled"),
xt.log("tag6");
var i=document.getElementById("activity-name");
xt.log("tag7"),Wt!==n&&(sn=Date.now()),It({
url:o,
data:{
content:n,
title:i&&g(i.innerText),
head_img:$t,
nickname:mn,
client_id:sn
},
type:"POST",
dataType:"json",
success:function(e){
switch(xt.log("tag8"),vn||wn.hidePannel(),+e.ret){
case 0:
L(e,n);
break;

case-6:
_("你留言的太频繁了，休息一下吧");
break;

case-7:
_("你还未关注该公众号，不能参与留言");
break;

case-10:
_("字数不能多于600个");
break;

case-15:
_("留言已关闭");
break;

default:
Wt=n,_("系统错误，请重试");
}
0!==Number(e.ret)&&f(Ot.addCommentErr,"type:resperr;url:"+encodeURIComponent(o)+";ret="+e.ret);
},
error:function(e){
xt.log("shit;"+e.status+";"+e.statusText),f(Ot.addCommentErr,"type:ajaxerr;url:"+encodeURIComponent(o));
},
complete:function(){
""!==nn.input.value&&ct.removeClass(nn.submit,"btn_disabled");
}
});
}
}
function D(e){
if(e&&e.length>0)for(var t=0;t<e.length;t++){
var n=e[t];
_n++,n.reply_new&&n.reply_new.reply_list&&(_n+=n.reply_new.reply_list.length);
}
}
function R(e){
D(e),r(),_n>2&&(nn.expandAndFoldPC.innerHTML="展开我的留言",d(nn.expandAndFoldPC),pn=!1,
v(1));
}
function z(){
var e=document.getElementById("js_mycmt_loading"),t=wt.join("/mp/appmsg_comment",{
action:"getmycomment",
scene:Ot.scene,
appmsgid:window.appmsgid,
idx:window.idx,
comment_id:Qt
},!0);
s(),0===ln&&(ln=1,d(e),It({
url:t,
dataType:"json",
success:function(e){
var n=e.base_resp&&e.base_resp.ret;
if(0===n){
var o=e.my_comment;
gn=o;
var i=document.createDocumentFragment();
o&&o.length&&(vn&&(d(nn.myareaPC),d(nn.mylist)),k(o,i,"mine"),nn.mylist.appendChild(i),
vn&&R(o)),ln=2;
}else ln=0,f(Ot.errComment,"type:resperr;url:"+encodeURIComponent(t)+";ret="+n);
},
error:function(){
ln=0,f(Ot.errComment,"type:ajaxerr;url:"+encodeURIComponent(t));
},
complete:function(){
m(e),s();
}
}));
}
function F(){
return At.isWechat?gt.os.ipad?!1:At.isInMiniProgram?!1:At.isIOS&&At.gtVersion("7.0.8")?!0:At.isAndroid&&At.gtVersion("7.0.8")?!0:Ct.isNativePage()&&(At.isIOS||At.isAndroid)?!0:!1:!1;
}
function O(){
var e=document.getElementById("activity-name");
return F()?(ht.invoke("handleMPPageAction",{
action:"writeComment",
title:e&&g(e.innerText),
comment_id:Qt,
style:"white"
}),!0):!1;
}
function q(){
return At.isWechat?gt.os.ipad?!1:At.isInMiniProgram?!1:At.isIOS&&At.gtVersion("7.0.12",!0)?!0:At.isAndroid&&At.gtVersion("7.0.13",!0)?!0:Ct.isNativePage()&&(At.isIOS||At.isAndroid)?!0:!1:!1;
}
function U(e){
return Xt=Ct.getScrollTop(),F()&&e?void O():(vn||m(nn.article),d(nn.mine),nn.deletePanel=document.getElementById("js_delete_panel_mobile"),
nn.deleteConfirm=document.getElementById("js_delete_confirm_mobile"),nn.deleteCancel=document.getElementById("js_delete_cancel_mobile"),
window.__second_open__&&gt.os.ios&&d(nn.fakebar),window.scrollTo(0,0),z(),void(e||xt.later(function(){
nn.input.focus();
})));
}
function W(){
"1"===wt.getQuery("js_my_comment")&&U(!0);
}
function G(){
m(nn.mine),d(nn.article),nn.deletePanel=document.getElementById("js_delete_panel"),
nn.deleteConfirm=document.getElementById("js_delete_confirm"),nn.deleteCancel=document.getElementById("js_delete_cancel"),
window.scrollTo(0,Xt),nn.input.blur(),ct.removeClass(document.body,bn),ct.removeClass(document.body,In);
}
function V(e){
var t=ct.hasClass(e,"praised"),n=e.querySelector(".praise_num"),o=parseInt(n.getAttribute("data-num")||0,10),i=n.getAttribute("data-like");
t===("1"===i)&&(t?o--:o++),0===o&&(o=""),"en"===window.LANG?n.innerHTML=vt.dealLikeReadShow_en(o):-1===n.innerHTML.indexOf("万")&&(n.innerHTML=o),
t?(ct.removeClass(e,"praised"),e.dataset.status=0):(ct.addClass(e,"praised"),e.dataset.status=1);
}
function Y(e){
var t=e.delegatedTarget||e.srcElement,n=null;
if(ct.hasClass(t,"js_comment_praise")&&(n=t),n){
for(var o=parseInt(n.dataset.status,10),i=0===o?1:0,d=n.dataset.contentId,m=n.dataset.scene,l=document.querySelectorAll('.js_comment_praise[data-content-id="'+d+'"]'),a=0;a<l.length;a++)V(l[a]);
if(yt({
url:"/mp/appmsg_comment?action=likecomment",
type:"POST",
data:{
like:i,
appmsgid:window.appmsgid,
comment_id:Qt,
content_id:d,
item_show_type:window.item_show_type||0,
scene:m
}
}),vn){
var s=n.dataset.myId,r=M(s,gn);
r&&(r.like_status=i,r.like_num=i?r.like_num++:r.like_num--);
}
}
}
function Q(e){
for(var t=e.delegatedTarget,n=parseInt(t.dataset.status,10),o=n?0:1,i=t.dataset.contentId,d=t.dataset.replyId,m=t.dataset.scene,l=document.querySelectorAll('.js_reply_praise[data-content-id="'+i+'"][data-reply-id="'+d+'"]'),a=0;a<l.length;a++)V(l[a]);
if(It({
url:"/mp/appmsg_comment?action=like_reply",
type:"post",
data:{
comment_id:Qt,
content_id:i,
reply_id:d,
like:o,
scene:m,
item_show_type:window.item_show_type||0
}
}),vn){
var s=t.dataset.myId,r=M(s,gn);
r&&r.reply_new.reply_list.forEach(function(e){
e.reply_id===parseInt(d,10)&&(e.reply_like_status=o,e.reply_like_num=o?e.reply_like_num++:e.reply_like_num--);
});
}
}
function J(e,t){
e.parentNode.removeChild(e),ct.addClass(nn.deletePanel,"weui-transition_opacity-hide");
for(var n=document.querySelectorAll(".cid"+t),o=0;o<n.length;o++)n[o].parentNode.removeChild(n[o]);
if(nn.list.children.length?nn.fdlist.children.length||m(nn.fdmain):(m(nn.main),m(document.getElementById("js_cmt_statement")),
m(document.getElementById("js_cmt_qa")),nn.fdlist.children.length||m(nn.fdmain)),
s(),A(),vn){
var i=M(t,gn);
i&&(_n=_n-i.reply_new.reply_list.length-1),gn=gn.filter(function(e){
return e.my_id!==parseInt(t,10);
}),pn?c():r(),P();
}
}
function X(e){
var t=void 0,n=e.delegatedTarget,i=n.getAttribute("data-my-id"),d=wt.join("/mp/appmsg_comment",{
action:"delete",
scene:Ot.scene,
appmsgid:window.appmsgid,
my_id:i,
comment_id:Qt
},!0);
ct.removeClass(nn.deletePanel,"weui-transition_opacity-hide"),bt.on(nn.deleteConfirm,"click",function(){
t!==i&&(t=i,It({
url:d,
dataType:"json",
success:function(e){
var t=n;
if(0===e.ret){
for(;t&&(t.nodeType!==t.ELEMENT_NODE||"li"!==t.tagName.toLowerCase());)t=t.parentNode;
t&&J(t,i);
}else o("删除失败，请重试");
},
error:function(){
o("网络错误，请重试");
}
}));
}),bt.on(nn.deleteCancel,"click",function(){
t!==i&&(t=i,ct.addClass(nn.deletePanel,"weui-transition_opacity-hide"));
});
}
function Z(e,t,n){
m(nn.deleteReplyPanel);
var o=document.querySelectorAll('.discuss_message_content[data-my-id="'+t+'"][data-reply-id="'+n+'"]'),i=document.querySelectorAll('.js_reply_del[data-my-id="'+t+'"][data-reply-id="'+n+'"]'),d=document.querySelectorAll('.js_reply_praise[data-my-id="'+t+'"][data-reply-id="'+n+'"]'),l=document.querySelectorAll('.js_reply_elect_status[data-my-id="'+t+'"][data-reply-id="'+n+'"]');
if(o.length===i.length){
for(var a=0;a<o.length;a++)o[a].innerHTML="此回复已被删除",ct.addClass(o[a],"discuss_message_del"),
i[a].style.display="none";
if(d.forEach(function(e){
e.style.display="none";
}),l.forEach(function(e){
e.style.display="none";
}),vn){
var s=M(t,gn);
s&&s.reply_new.reply_list.forEach(function(e){
e.reply_id===parseInt(n,10)&&(e.reply_del_flag=1,e.reply_is_elected=0);
});
}
}
}
function $(e){
var t=void 0,n=e.delegatedTarget,i=n.getAttribute("data-my-id"),l=n.getAttribute("data-reply-id"),a=wt.join("/mp/appmsg_comment",{
action:"deletecommentreply",
scene:Ot.scene,
appmsgid:window.appmsgid,
my_id:i,
reply_id:l,
comment_id:Qt
},!0);
d(nn.deleteReplyPanel),bt.on(nn.deleteReplyConfirm,"click",function(){
t!==l&&(t=l,It({
url:a,
dataType:"json",
success:function(e){
var t=n;
if(0===e.ret){
for(;t&&(t.nodeType!==t.ELEMENT_NODE||"li"!==t.tagName.toLowerCase());)t=t.parentNode;
t&&Z(t,i,l);
}else o("删除失败，请重试");
},
error:function(){
o("网络错误，请重试");
}
}));
}),bt.on(nn.deleteReplyCancel,"click",function(){
t!==l&&(t=l,m(nn.deleteReplyPanel));
});
}
function K(){
nn.input.innerHTML="",nn.input.focus(),fn=null,nn.submit.disabled=!0;
}
function et(e){
var t=e.delegatedTarget||e.srcElement,n=t.getAttribute("data-my-id"),o=document.getElementById("activity-name"),i=t.parentNode.parentNode,l=void 0,a="";
if(i){
var s=i.getElementsByClassName("js_reply_content"),r=s.length;
if(r>0)for(var c=s.length-1;c>=0;c--){
var _=s[c];
if(!ct.hasClass(_,"discuss_message_del")){
l=_;
break;
}
}
l||(l=i.getElementsByClassName("js_comment_content").length>=1?i.getElementsByClassName("js_comment_content")[0]:null);
}
return a=l?l.getAttribute("data-content"):"",q()?(ht.invoke("handleMPPageAction",{
action:"writeCommentReply",
title:o&&g(o.innerText),
comment_id:Qt,
style:"white",
personal_comment_id:n,
reply_content:a
}),!0):(vn?(nn.containerPC.parentNode.removeChild(nn.containerPC),i.appendChild(nn.containerPC),
nn.containerPC.setAttribute("data-my-id",n),nn.inputHolder.innerHTML="留言的回复被公众号精选后，将对所有人可见",
nn.inputHolder.style.display="",nn.submit.innerText="回复",m(nn.emotionPanel),"none"===nn.inputPC.style.display&&d(nn.inputPC),
d(nn.containerPC),K(),un=!0):(d(nn.updateDialog),Ht.setSum(110809,51,1),bt.on(nn.updateCancel,"click",function(){
m(nn.updateDialog);
}),bt.on(nn.updateConfirm,"click",function(){
Ht.setSum(110809,52,1),At.isIOS?Pt.jumpUrl(Mn,!0):At.isAndroid&&Pt.jumpUrl(Hn,!0);
})),!1);
}
function tt(e){
for(var t=e.delegatedTarget||e.srcElement,n=t.getAttribute("data-my-id"),o=nn.list.querySelectorAll('.reply_result[data-my-id="'+n+'"]'),i=nn.list.querySelectorAll('.js_reply_div[data-my-id="'+n+'"]'),l=t.getAttribute("data-num"),a=0;a<o.length;a++)d(o[a]);
1===i.length&&d(i[0]),m(t),w({
actiontype:2,
personalCommentId:n,
num:l
});
}
function nt(e){
e&&e.preventDefault(),G(),m(nn.fakebar);
}
function ot(t,n){
if(1*window.item_show_type===5){
var o=e("pages_new/common_share/video/store.js");
o.dispatch("mp-video-player/auto-next-plugin/cancelAutoNextWhenTipsShowed",6);
}
return O()?void Lt.report(19048,_extends({
EventType:1,
IsFans:qt,
CommentPageType:2
},zt)):(Ct.isNativePage()||ct.addClass(document.body,bn),n?(xn&&console.log("FakeHash on comment"),
void U()):(t.preventDefault(),window.__second_open__&&gt.os.ios?U():(xn&&console.log("push comment"),
Et.push("comment")),void Lt.report(19048,_extends({
EventType:1,
IsFans:qt,
CommentPageType:1
},zt))));
}
function it(e){
window.scrollTo(0,window.scrollY+e.getBoundingClientRect().height);
}
function dt(e){
return e.getBoundingClientRect().top+e.getBoundingClientRect().height>=Ct.getInnerHeight()?!0:!1;
}
function mt(){
Et.on("comment",function(){
ot(null,!0);
}),Et.on("article",function(){
xn&&console.log("FakeHash on article"),G();
}),Et.on(function(e){
"comment"===e&&G();
});
}
function lt(){
bt.on(nn.input,"input",function(e){
if(vn){
var t=nn.input.innerHTML;
""===t||"<br>"===t?(nn.inputHolder.style.display="",nn.input.innerHTML=""):nn.inputHolder.style.display="none";
}
var n=g(nn.input.value||nn.input.innerHTML);
n.length<1?ct.addClass(nn.submit,"btn_disabled"):ct.removeClass(nn.submit,"btn_disabled"),
gt.os.ios&&e.data&&Ln.indexOf(e.data)>-1&&(Kt=!0);
}),bt.on(nn.input,"click",function(){
gt.os.ios&&Kt&&(nn.input.blur(),nn.input.focus(),Kt=!1);
}),bt.on(nn.el_alertConfirm,"click",function(){
nn.el_alertPanel.style.display="none";
}),vn&&bt.on(nn.input,"click",function(){
m(document.getElementById("js_emotion_panel_pc"));
}),bt.on(nn.list,"click",".js_comment_praise",Y),bt.on(nn.mylist,"click",".js_comment_praise",Y),
bt.on(nn.fdlist,"click",".js_comment_praise",Y),bt.on(nn.list,"click",".js_reply_praise",Q),
bt.on(nn.fdlist,"click",".js_reply_praise",Q),bt.on(nn.mylist,"click",".js_reply_praise",Q),
bt.on(nn.list,"click",".js_del",X),bt.on(nn.mylist,"click",".js_del",X),bt.on(nn.fdlist,"click",".js_del",X),
bt.on(nn.mylist,"click",".js_reply_del",$),bt.on(nn.list,"click",".js_reply_del",$),
bt.on(nn.list,"click",".js_comment_reply",et),bt.on(nn.mylist,"click",".js_comment_reply",et),
bt.on(nn.list,"click",".js_extend_comment",tt),Ct.listenMpPageAction(function(e){
if("deleteComment"===e.action&&J(document.getElementById("cid"+e.personal_comment_id),e.personal_comment_id),
"deleteCommentReply"===e.action&&(console.log("deleteCommentReply",e.personal_comment_id,e.replyId),
Z(document.getElementById("cid"+e.personal_comment_id),e.personal_comment_id,e.replyId)),
"praiseComment"===e.action){
console.log("praiseComment",e.personal_comment_id,e.reply_id,e.is_like);
var t=[];
t=document.querySelectorAll(e.reply_id&&0!==e.reply_id?'.js_reply_praise[data-my-id="'+e.personal_comment_id+'"][data-reply-id="'+e.reply_id+'"]':'.js_comment_praise[data-my-id="'+e.personal_comment_id+'"]');
var n=!0,o=!1,i=void 0;
try{
for(var d,m=t[Symbol.iterator]();!(n=(d=m.next()).done);n=!0){
var l=d.value;
ct.hasClass(l,"praised")===!e.is_like&&V(l);
}
}catch(a){
o=!0,i=a;
}finally{
try{
!n&&m.return&&m.return();
}finally{
if(o)throw i;
}
}
}
}),bt.on(nn.list,"click",".js_del",function(e){
e.preventDefault();
}),bt.on(nn.mylist,"click",".js_del",function(e){
e.preventDefault();
}),bt.on(nn.fdlist,"click",".js_del",function(e){
e.preventDefault();
}),bt.on(nn.submit,"click",N),bt.on(nn.submit,"click",function(e){
e.preventDefault();
}),nn.goback&&(bt.on(nn.goback,"click",nt),bt.on(nn.goback,"click",nt)),window.__second_open__&&gt.os.ios&&!function(){
bt.on(nn.input,"click",function(){
m(nn.fakebar);
}),bt.on(nn.input,"blur",function(){
"none"!==nn.mine.style.display&&d(nn.fakebar);
});
var e=null,t=null;
bt.on(window,"orientationchange",function(){
"none"!==nn.fakebar.style.display&&(clearTimeout(e),e=setTimeout(function(){
window.innerWidth!==parseFloat(getComputedStyle(nn.fakebar).width)&&(clearTimeout(t),
nn.mine.style.height=Ct.getInnerHeight()+"px",window.scrollBy&&window.scrollBy(0,1),
t=setTimeout(function(){
window.scrollBy&&window.scrollBy(0,-1),nn.mine.style.height="";
},100));
},50));
});
}(),bt.on(window,"scroll",j),vn&&bt.on(window,"scroll",b),bt.on(window,"scroll",h),
bt.on(document.getElementById("js_cmt_write1"),"click",function(e){
ot(e);
}),bt.on(document.getElementById("js_cmt_write2"),"click",function(e){
ot(e);
}),bt.on(document.getElementById("js_cmt_write3"),"click",function(e){
ot(e);
}),bt.on(document.getElementById("js_cmt_write4"),"click",function(e){
ot(e);
}),bt.on(nn.inputPC,"click",function(){
m(nn.inputPC),nn.containerPC.parentNode.removeChild(nn.containerPC),nn.inputHolder.style.display="",
nn.inputHolder.innerHTML="留言被公众号精选后，将对所有人可见",nn.submit.innerText="留言",document.getElementById("js_cmt_panel_pc").appendChild(nn.containerPC),
un=!1,d(nn.containerPC),dt(nn.containerPC)&&it(nn.containerPC),K();
}),bt.bindVisibilityChangeEvt(function(e){
e&&Ct.getScrollTop()<ft.getOffset(nn.cmtContainer).offsetTop-Ct.getInnerHeight()&&x({
forceRefresh:!0,
cb:T
});
});
}
function at(){
function e(){
var e=document.createElement("div"),t="";
e.innerHTML=nn.input.innerHTML;
for(var n=e.childNodes.length-1;n>=0;n--){
var o=e.childNodes[n];
switch(o.nodeType){
case 1:
if("BR"!==o.nodeName.toUpperCase()){
var i=void 0,d=!1;
if(i="IMG"===o.nodeName.toUpperCase()?o:"",i||(i=o.textContent||o.innerText||"",
d=!0),i){
var m=d?document.createTextNode(i):i;
e.replaceChild(m,o);
}else e.removeChild(o);
}
break;

case 3:
break;

default:
e.removeChild(o);
}
}
return t=e.innerHTML;
}
function t(){
fn=jt.getRange();
}
function n(){
if(fn){
var e=jt.getSelection();
if(e.addRange)e.removeAllRanges(),e.addRange(fn);else{
var t=jt.getRange();
t.setEndPoint&&(t.setEndPoint("EndToEnd",fn),t.setEndPoint("StartToStart",fn)),t.select();
}
}
}
function o(){
nn.input.focus(),nn.input.scrollTop=nn.input.scrollHeight,n();
}
function i(){
var e=g(dn).replace(/<br\/>/g,"").replace(/\n/g,"").length;
h.innerText=e,e>600?(w.style.display="",ct.addClass(w,"comment_primary_counter_warn"),
nn.submit.disabled=!0):1>e?(w.style.display="none",ct.removeClass(w,"comment_primary_counter_warn"),
nn.submit.disabled=!0):(w.style.display="none",ct.removeClass(w,"comment_primary_counter_warn"),
nn.submit.disabled=!1);
}
function a(e,t){
var n=["&#96;","`","&#39;","'","&quot;",'"',"&nbsp;"," ","&gt;",">","&lt;","<","&yen;","¥","&amp;","&"],o=["&","&amp;","¥","&yen;","<","&lt;",">","&gt;"," ","&nbsp;",'"',"&quot;","'","&#39;","`","&#96;"],i=void 0;
i=t?o:n;
for(var d=0;d<i.length;d+=2)e=e.replace(new RegExp(i[d],"g"),i[d+1]);
return e;
}
function s(){
document.execCommand("AutoUrlDetect",!1,!1);
var t=e();
t=a(t),dn=Pn.textFilter(t),i();
}
function _(e){
o();
var n=jt.getRange();
if(n){
if(n.createContextualFragment){
e+='<img style="width:1px;height:1px;"></img>';
var i=n.createContextualFragment(e),d=i.lastChild,m=jt.getSelection();
n.deleteContents(),n.insertNode(i),n.setStartBefore(d),n.setEndAfter(d),m.removeAllRanges(),
m.addRange(n),document.execCommand("Delete",!1,null);
}else n.pasteHTML&&e&&(n.pasteHTML(e),n.select(),n.collapse&&n.collapse(!1));
t(),s();
}
}
function p(e){
var t=e.currentTarget,n=t.getAttribute("data-index"),o=f[n].name,i='<img src="/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_blank.gif"\n      class="icon_emotion_single '+o+'" alt="mo-'+f[n].title+'"></img>';
_(i),Pn.emotionPanelMove();
}
function u(){
for(var e=nn.input,t=void 0,n=e.childNodes.length-1;n>=0;n--){
var o=e.childNodes[n];
switch(o.nodeType){
case 1:
if("BR"!==o.nodeName.toUpperCase()){
var i=void 0,d=!1;
if(i="IMG"===o.nodeName.toUpperCase()?o:"",i||(i=o.textContent||o.innerText||"",
d=!0),i){
var m=d?document.createTextNode(i):i;
t||(t=m),e.replaceChild(m,o);
}else e.removeChild(o);
}
break;

case 3:
break;

default:
e.removeChild(o);
}
}
jt.setCursorToEnd(t);
}
var y=void 0;
fn=jt.getRange();
var f=Pn.edata,w=document.getElementById("js_length_notice_pc"),h=document.getElementById("js_word_length_pc");
gt.os.Mac&&(window.onblur=function(){
nn.input&&"none"!==nn.input.display&&""!==nn.input.innerHTML&&nn.input.blur();
}),bt.on(nn.input,"keyup",function(){
t(),s();
}),bt.on(nn.input,"keydown",function(e){
return 13===e.keyCode?(t(),_("<br/>"),t(),!1):void 0;
}),bt.on(nn.input,"mouseup",function(){
t(),s();
}),bt.on(nn.input,"paste",function(){
y&&clearTimeout(y),y=setTimeout(function(){
return u(),t(),s(),!1;
},10);
}),bt.on(document,"click",function(e){
var t=e.srcElement||e.delegatedTarget,n=document.getElementById("js_emotion_panel_pc");
if((!un&&!l(t,nn.addbtnPC)||un&&!l(t,nn.containerPC))&&"none"!==nn.containerPC.style.display){
var o=nn.input.innerHTML;
""===g(o)&&(m(nn.containerPC),d(nn.inputPC),m(n));
}
l(t,n)||l(t,nn.emotionSwitchPC)||"none"===n.style.display||m(n);
},!1),bt.on(nn.expandAndFoldPC,"click",function(){
pn?(v(2),ct.removeClass(nn.expandAndFoldPC,"comment_primary_more_access_unfold"),
nn.expandAndFoldPC.innerHTML="展开我的留言",r(),pn=!1,v(1)):(v(2),ct.addClass(nn.expandAndFoldPC,"comment_primary_more_access_unfold"),
nn.expandAndFoldPC.innerHTML="收起我的留言",c(),pn=!0,v(1));
}),xt("li.js_emotion_item").on("click",p);
}
function st(t){
if(Vt=t.only_fans_can_comment,mn=t.nick_name,qt=t.is_fans,$t=t.logo_url,Ut=t.comment_count,
rn=t.only_fans_days_can_comment,cn=t.is_fans_days,window._has_comment=!0,console.log("inwechat",Bn,"commentid",Qt),
!Bn||0===Number(Qt))return void(window._has_comment=!1);
if(En){
var n=e("appmsg/comment_tpl.html.js"),o=e("appmsg/comment_pc_tpl.html.js");
En.innerHTML=Bt.tmpl(n,{
new_appmsg:window.new_appmsg,
isWxWork:jn
},!1),Tn.insertAdjacentHTML("afterbegin",Bt.tmpl(o,{
new_appmsg:window.new_appmsg
},!1));
}
if(kn){
var d=e("appmsg/friend_comment_tpl.html.js");
kn.innerHTML=Bt.tmpl(d,{
new_appmsg:window.new_appmsg
},!1);
}
var m="";
1*window.item_show_type===10&&(m=document.getElementById("js_text_content").innerHTML.replace(/<(\/?)(?=((a(\s|>))|(\/a))).*?>/g,""));
var l=document.createElement("div");
l.innerHTML=Bt.tmpl(Tt,{
new_appmsg:window.new_appmsg,
isIos:gt.os.ios,
textPageTitle:m
},!1),document.body.appendChild(l),vn?(i("js_cmt_mine"),document.getElementById("js_avatar_pc").src=$t,
ct.addClass(document.body,"pages_skin_pc")):i("js_cmt_addbtn_pc"),nn={
article:document.getElementById("js_article"),
mine:document.getElementById("js_cmt_mine"),
main:document.getElementById("js_cmt_main"),
input:document.getElementById("js_cmt_input"),
submit:document.getElementById("js_cmt_submit"),
goback:document.getElementById("js_cmt_goback"),
addbtn:document.getElementById("js_cmt_addbtn"),
list:document.getElementById("js_cmt_list"),
mylist:document.getElementById(vn?"js_cmt_mylist_pc":"js_cmt_mylist"),
morelist:document.getElementById("js_cmt_morelist"),
toast:document.getElementById("js_cmt_toast"),
tips:document.getElementById("js_cmt_tips"),
loading:document.getElementById("js_cmt_loading"),
fdmain:document.getElementById("js_friend_cmt_main"),
fdlist:document.getElementById("js_friend_cmt_list"),
fdlisthide:document.getElementById("js_friend_cmt_list_hide"),
morefdlist:document.getElementById("js_more_friend_cmt_area"),
morefd:document.getElementById("js_more_friend_cmt"),
fakebar:document.getElementById("js_fake_bar"),
cmtContainer:document.getElementById("js_cmt_container"),
inputPC:document.getElementById("js_cmt_input_pc"),
containerPC:document.getElementById("js_cmt_container_pc"),
commentPC:document.getElementById("js_comment_pc"),
addbtnPC:document.getElementById("js_cmt_addbtn_pc"),
myareaPC:document.getElementById("js_cmt_myarea_pc"),
emotionSwitchPC:document.getElementById("js_emotion_wrp_pc"),
expandAndFoldPC:document.getElementById("js_expand_and_fold_pc"),
deletePanel:document.getElementById("js_delete_panel"),
deleteConfirm:document.getElementById("js_delete_confirm"),
deleteCancel:document.getElementById("js_delete_cancel"),
inputHolder:document.getElementById("js_cmt_input_holder"),
emotionPanel:document.getElementById("js_emotion_panel_pc"),
el_alertPanel:document.getElementById("js_alert_panel"),
el_alertContent:document.getElementById("js_alert_content"),
el_alertConfirm:document.getElementById("js_alert_confirm"),
addCmtBtn1:document.getElementById("js_cmt_addbtn1"),
addCmtBtn2:document.getElementById("js_cmt_addbtn2"),
addCmtBtn3:document.getElementById("js_cmt_addbtn3"),
addCmtBtn4:document.getElementById("js_cmt_addbtn4"),
updateDialog:document.getElementById("js_update_dialog"),
updateCancel:document.getElementById("js_update_cancel"),
updateConfirm:document.getElementById("js_update_confirm"),
deleteReplyPanel:document.getElementById("js_delete_reply_panel"),
deleteReplyConfirm:document.getElementById("js_delete_reply_confirm"),
deleteReplyCancel:document.getElementById("js_delete_reply_cancel")
},window.__second_open__&&gt.os.ios&&(nn.mine.style.marginBottom=getComputedStyle(nn.fakebar).height),
!t.notAutoGetComment&&x({
forceRefresh:!0,
cb:T
}),W(),vn&&z(),lt(),vn?(Pn.init(),at()):wn=new Pn.Emotion({
emotionPanel:xt("#js_emotion_panel"),
inputArea:xt("#js_cmt_input"),
emotionPanelArrowWrp:xt("#js_emotion_panel_arrow_wrp"),
emotionSwitcher:xt("#js_emotion_switch"),
emotionSlideWrapper:xt("#js_slide_wrapper"),
emotionNavBar:xt("#js_navbar"),
submitBtn:xt("#js_cmt_submit")
});
}
function rt(){
mt();
}
e("biz_common/utils/string/html.js");
var ct=e("biz_common/dom/class.js"),_t=e("appmsg/cmt_tpl.html.js"),pt=e("biz_common/utils/wxgspeedsdk.js"),ut=e("appmsg/comment_report.js"),gt=e("biz_wap/utils/device.js"),yt=e("appmsg/retry_ajax.js"),ft=e("biz_common/dom/offset.js"),wt=e("biz_common/utils/url/parse.js"),ht=e("biz_wap/jsapi/core.js"),Ct=e("common/utils.js"),jt=e("appmsg/emotion/selection.js"),vt=e("appmsg/i18n.js"),bt=e("biz_common/dom/event.js"),It=e("biz_wap/utils/ajax.js"),Bt=e("biz_common/tmpl.js"),Et=e("biz_wap/utils/fakehash.js"),kt=e("appmsg/log.js"),Tt=e("appmsg/my_comment_tpl.html.js"),xt=e("appmsg/emotion/dom.js"),Pt=e("pages/utils.js"),At=e("biz_wap/utils/mmversion.js"),Lt=e("common/comm_report.js"),Mt=e("appmsg/set_font_size.js"),Ht=e("biz_wap/utils/jsmonitor_report.js"),St=!window.isPaySubscribe||window.isPaySubscribe&&window.isPaid,Nt=0,Dt=1*window.user_uin;
try{
Nt=1*window.atob(window.biz);
}catch(Rt){}
var zt={
BizUin:Nt,
BizUinStr:window.biz||"",
AppMsgId:window.parseInt(window.mid,10)||0,
ItemIdx:window.parseInt(window.idx,10)||0,
ItemShowType:window.parseInt(window.item_show_type,10)||0,
SessionIdStr:window.sessionid||"",
EnterId:window.parseInt(window.enterid,10)||0,
Scene:window.parseInt(window.source,10)||0,
SubScene:window.parseInt(window.subscene,10)||0
},Ft={
bizuin:Nt,
msgid:window.parseInt(window.mid,10)||0,
itemidx:window.parseInt(window.idx,10)||0,
scene:window.parseInt(window.source,10)||0
},Ot={
scene:0,
idkey:"",
moreList:27,
repeatList:25,
errList:18,
handleList:26,
addCommentErr:19,
errComment:18,
repeatContent:24,
repeatContentID:23
},qt=void 0,Ut=void 0,Wt=void 0,Gt=void 0,Vt=void 0,Yt=void 0,Qt=window.comment_id,Jt=0,Xt=void 0,Zt=!1,$t="",Kt=!1,en=0,tn=[],nn={},on=[],dn="",mn="我",ln=0,an={},sn=Date.now(),rn=void 0,cn=void 0,_n=0,pn=!1,un=!1,gn=[],yn=[],fn=void 0,wn=void 0,hn=100,Cn=location.href,jn=At.is_wxwork,vn=gt.os.pc&&!jn,bn="comment_editing",In="my_comment_empty_data",Bn=navigator.userAgent.indexOf("MicroMessenger")>-1,En=document.getElementById("js_cmt_area"),kn=document.getElementById("js_friend_cmt_area"),Tn=document.getElementById("js_cmt_container"),xn=Cn.indexOf("vconsole=1")>0||document.cookie&&document.cookie.indexOf("vconsole_open=1")>-1,Pn=e(vn?"appmsg/emotion/emotion_pc.js":"appmsg/emotion/emotion.js"),An="http://mmbiz.qpic.cn/mmbiz/ByCS3p9sHiak6fjSeA7cianwo25C0CIt5ib8nAcZjW7QT1ZEmUo4r5iazzAKhuQibEXOReDGmXzj8rNg/0",Ln=["“”","‘’","（）","《》","〈〉","「」","『』","〔〕","【】","［］","[]","｛｝","{}","()","<>"],Mn=window.location.protocol+"//itunes.apple.com/cn/app/id414478124?mt=8&ls=1",Hn=window.location.protocol+"//weixin.qq.com/d";
return window.pageCommentReportData&&window.pageCommentReportData.idkey&&(xn&&console.log("init reportData"),
Ot=window.pageCommentReportData),"undefined"!=typeof window.comment_id?Qt=window.comment_id:window.cgiData&&"undefined"!=typeof window.cgiData.comment_id&&(Qt=window.cgiData.comment_id),
Bn||(En&&(En.style.display="none"),kn&&(kn.style.display="none"),Qt=0),xn&&console.info("[图文评论] 评论ID:",Qt),
rt(),{
initComment:st,
getCommentData:x,
renderComment:T
};
});define("appmsg/like_and_share.js",["biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/jsapi/core.js","pages/utils.js","appmsg/retry_ajax.js","appmsg/set_font_size.js","common/comm_report.js","appmsg/related_article.js","common/utils.js","biz_wap/utils/device.js","biz_wap/utils/mmversion.js","appmsg/appmsg_report.js"],function(e,i,o,n){
"use strict";
var t=e("biz_common/dom/event.js"),s=e("biz_common/dom/class.js"),r=e("biz_wap/jsapi/core.js"),m=e("pages/utils.js"),a=m.formatReadNum,l=e("appmsg/retry_ajax.js"),d=e("appmsg/set_font_size.js"),p=e("common/comm_report.js"),w=e("appmsg/related_article.js"),c=e("common/utils.js"),_=e("biz_wap/utils/device.js"),u=e("biz_wap/utils/mmversion.js"),k=e("appmsg/appmsg_report.js"),g=function(e){
return document.getElementById(e);
},h=function(e){
e.style.display="block";
},j={
likeNum:0,
isLike:0,
likeDom:g("like_old"),
likeNumDom:g("likeNum_old"),
shareDom:g("js_bottom_share"),
collectDom:g("js_bottom_collect"),
oprRightDom:g("js_bottom_opr_right"),
shareBottomBtn:g("js_bottom_share_btn"),
likeBottomBtn:g("js_bottom_zan_btn"),
similarZanCard:g("js_similar_video_card"),
overflowFontScale:1
},f=function(){
var e=0;
try{
e=1*window.atob(window.biz);
}catch(i){}
var o={
BizUin:e,
BizUinStr:window.biz||"",
AppMsgId:window.parseInt(window.mid,10)||0,
ItemIdx:window.parseInt(window.idx,10)||0,
ItemShowType:window.parseInt(window.item_show_type,10)||0,
SessionIdStr:window.sessionid||"",
EnterId:window.parseInt(window.enterid,10)||0,
Scene:window.parseInt(window.source,10)||0,
SubScene:window.parseInt(window.subscene,10)||0,
EventType:4
};
p.report(19048,o);
},v=function(){
setTimeout(function(){
s.removeClass(j.oprRightDom,"sns_opr_overflow");
var e=j.oprRightDom.querySelectorAll(".js_media_tool_meta"),i=g("js_toobar3").getBoundingClientRect().width,o=0;
if(e&&e.length){
g("js_like_wording").textContent="在看",g("js_parise_wording").textContent="赞";
for(var n=0;n<e.length;n++)o+=e[n].getBoundingClientRect().width;
if(console.log("benchmarkWidth",i,o),e.length>1&&(i-o)/(e.length-1)<20){
g("js_like_wording").textContent="",g("js_parise_wording").textContent="";
for(var t=0,n=0;n<e.length;n++)t+=e[n].getBoundingClientRect().width;
(i-t)/(e.length-1)<20&&s.addClass(j.oprRightDom,"sns_opr_overflow");
}
}
},50);
},D=function(){
s.addClass(j.likeDom,"praised"),j.likeNum++;
var e=j.likeNumDom.innerHTML;
("10万+"!==e||"100k+"!==e)&&(j.likeNumDom.innerHTML=a(j.likeNum)),j.likeNumDom.style.display="",
w&&w.render&&w.render("praise");
},b=function(){
s.removeClass(j.likeDom,"praised"),j.likeNum--;
var e=j.likeNumDom.innerHTML;
j.likeNum>=0&&"10万+"!==e&&"100k+"!==e&&(j.likeNumDom.innerHTML=a(j.likeNum)),0===j.likeNum&&(j.likeNumDom.style.display="none");
},y=[],B=function(e){
"function"==typeof e&&y.push(e);
},N=function(e){
j.isLike=j.isLike?0:1,j.isLike?D():b(),l({
url:"/mp/appmsg_like?__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&like="+j.isLike+"&f=json&appmsgid="+window.appmsgid+"&itemidx="+window.itemidx,
data:{
scene:window.source,
appmsg_like_type:1,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
is_temp_url:window.is_temp_url||0,
style:e||0,
exptype:window.exptype||"",
expsessionid:window.expsessionid||""
},
type:"POST"
}),y.forEach(function(e){
e(j.isLike,j.likeNum);
});
},z=function(e){
return j.likeBottomBtn&&j.likeBottomBtn.disabled===!0?void 0:window.is_temp_url?void("5"!==window.item_show_type||!c.isNativePage()||_.os.pc?window.weui.alert("预览状态下无法操作"):n("预览状态下无法操作")):void N(e);
};
t.on(j.likeDom,"click",function(){
return z();
}),t.on(j.shareDom,"click",function(){
j.shareBottomBtn&&j.shareBottomBtn.disabled===!0||(f(),r.invoke("handleMPPageAction",{
action:"share"
}));
}),t.on(j.collectDom,"click",function(){
r.invoke("handleMPPageAction",{
action:"doFavorite"
}),w&&w.render&&w.render("favorite"),k.shareReport({
link:window.msg_link||window.cgiData&&window.cgiData.msg_link,
action_type:24,
share_source:2
});
});
var I=function(){
v(),d.onFontScaleChange(v),window.addEventListener("resize",v);
},L=function(e){
var i=e.shareShow,o=e.likeShow,n=e.likeNum,t=e.isLike,r=e.shareGray,m=e.likeGray;
j.likeNum=n,j.isLike=t,i&&j.shareDom&&(_.os.pc?_.os.windows&&u.getInner()>="63010000"&&h(j.shareDom):h(j.shareDom)),
r&&j.shareBottomBtn&&(j.shareBottomBtn.disabled=!0),o&&j.likeDom&&h(j.likeDom),m&&j.likeBottomBtn&&(j.likeBottomBtn.disabled=!0),
o&&j.likeNumDom&&0!==n&&(j.likeNumDom.innerHTML=a(j.likeNum),j.likeNumDom.style.display="",
t&&s.addClass(j.likeDom,"praised")),(u.isWechat&&(_.os.iphone&&u.getInner()>"17001000"||_.os.android&&u.getInner()>"27001300")||_.os.windows&&u.getInner()>="63010000")&&h(j.collectDom),
I(),y.forEach(function(e){
e(j.isLike,j.likeNum);
});
};
return{
initLikeShareDom:L,
triggerLike:z,
onLikeChange:B
};
});define("appmsg/like.js",["biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/utils/ajax.js","biz_common/base64.js","biz_wap/utils/jsmonitor_report.js","appmsg/log.js","complain/tips.js","appmsg/retry_ajax.js","biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js","common/utils.js","appmsg/loading.js","biz_wap/utils/device.js","appmsg/pay_report_utils.js","pages/utils.js","appmsg/related_article.js"],function(require,exports,module,alert){
"use strict";
function qs(e){
return document.getElementById(e);
}
function showAppToast(e,i){
JSAPI.invoke("handleMPPageAction",{
action:"showToast",
wording:e||"",
status:i||"success"
});
}
function initLikeEvent(opt){
function show(e){
e.style.display="";
}
function hide(e){
e.style.display="none";
}
function vShow(e){
e.style.visibility="visible";
}
function vHide(e){
e.style.visibility="hidden";
}
function clear(e){
e.value="";
}
function showLoading(){
commonUtils.isNativePage()?showAppToast("发送中","loading"):Loading.show("发送中");
}
function hideLoading(){
commonUtils.isNativePage()?showAppToast("","dismissloading"):Loading.hide();
}
function showToast(e){
commonUtils.isNativePage()?showAppToast(e):(el_toastMsg.innerHTML=e,show(el_likeToast),
setTimeout(function(){
hide(el_likeToast);
},1e3));
}
function alert2(e){
"5"!==window.item_show_type||!commonUtils.isNativePage()||Device.os.pc?window.weui.alert(e):alert(e);
}
function failAlert(e){
return e&&e.length>maxLikeCommentWord?void alert2("想法不可以超过%s字".replace("%s",maxLikeCommentWord)):void alert2("网络异常，请稍后重试");
}
function isAppCommentAvailable(){
return mmversion.isWechat?Device.os.ipad?!1:mmversion.isInMiniProgram?!1:mmversion.isIOS&&mmversion.gtVersion("7.0.8")?!0:mmversion.isAndroid&&mmversion.gtVersion("7.0.8")?!0:commonUtils.isNativePage()&&(mmversion.isIOS||mmversion.isAndroid)?!0:!1:!1;
}
var scrollTop,el_like=opt.likeAreaDom,el_likeNum=opt.likeNumDom,showType=opt.showType,prompted=opt.prompted,haokanLock=!1,startY,jumpWowLock=!1,el_likeToast=qs("js_like_toast"),el_likeBtn=qs("js_like_btn"),el_toastMsg=qs("js_toast_msg"),el_likeEducate=qs("js_like_educate"),el_friend_like=qs("js_friend_like_area"),el_go_wow=qs("js_go_wow"),el_likeComment=qs("js_like_comment"),el_bcommentPanel2=qs("js_comment_panel"),el_likeCommentShare=qs("js_like_comment_share"),el_likeCommentText=qs("js_comment_text"),el_commentCancel=qs("js_comment_cancel"),el_commentConfirm=qs("js_comment_confirm"),el_commentErrorMsg=qs("js_like_comment_msg"),el_commentCurrentCount=qs("js_like_current_cnt"),el_commentArea=qs("js_comment_area"),el_panelLikeTitle=qs("js_panel_like_title"),el_wowClosePanel=qs("wow_close_inform"),el_wowCloseAck=qs("wow_close_ack"),el_alertPanel=qs("js_alert_panel"),el_alertContent=qs("js_alert_content"),el_alertConfirm=qs("js_alert_confirm");
if(el_like&&el_likeNum){
window.appmsg_like_type&&2===window.appmsg_like_type?jsmonitorReport.setSum(114217,0,1):window.appmsg_like_type&&1===window.appmsg_like_type&&jsmonitorReport.setSum(114217,1,1);
var like_report=function(){
var e=el_like.getAttribute("like"),i=el_likeNum.innerHTML,t=parseInt(e)?parseInt(e):0,o=t?0:1,n=parseInt(i)?parseInt(i):0,s=opt.appmsgid||opt.mid,l=opt.itemidx||opt.idx;
if(t){
if(1!==appmsg_like_type)return void sendRecommendAjax(0);
Class.removeClass(el_like,opt.className),el_like.setAttribute("like",0),n>0&&"100000+"!==i&&(el_likeNum.innerHTML=n-1==0?"赞":n-1);
}else if(1===appmsg_like_type)el_like.setAttribute("like",1),Class.addClass(el_like,opt.className),
"100000+"!==i&&(el_likeNum.innerHTML=n+1);else if(2===appmsg_like_type)return void initRecommendPanel();
RetryAjax({
url:"/mp/appmsg_like?__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&like="+o+"&f=json&appmsgid="+s+"&itemidx="+l,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
action_type:o?1:2,
device_type:window.devicetype,
exptype:window.exptype||"",
expsessionid:window.expsessionid||""
},
type:"POST"
});
},initRecommendPanel=function(){
sendRecommendAjax(1,"",1);
},isBeenUnvisible=function(e){
function i(){
return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
}
return e.offsetTop+el_likeComment.offsetHeight-i()>=commonUtils.getInnerHeight()?!0:!1;
},disableMove=function(){
document.addEventListener("touchmove",preventMove,{
passive:!1
}),el_likeCommentText.addEventListener("touchstart",getTouchStart,{
passive:!1
}),el_likeCommentText.addEventListener("touchmove",preventText,!1);
},enableMove=function(){
document.removeEventListener("touchmove",preventMove,{
passive:!1
}),el_likeCommentText.removeEventListener("touchstart",getTouchStart,{
passive:!1
}),el_likeCommentText.removeEventListener("touchmove",preventText,!1);
},preventMove=function(e){
var i=e.target;
"TEXTAREA"!==i.tagName&&"BUTTON"!==i.tagName&&(e.preventDefault(),e.stopPropagation());
},getTouchStart=function(e){
var i=e.targetTouches||[];
if(i.length>0){
var t=i[0]||{};
startY=t.clientY;
}
},preventText=function(e){
var i=!1,t=e.changedTouches,o=this.scrollTop,n=this.offsetHeight,s=this.scrollHeight;
if(t.length>0){
var l=t[0]||{},a=l.clientY;
i=a>startY&&0>=o?!1:startY>a&&o+n>=s?!1:!0,i||e.preventDefault();
}
},isShow=function(e){
return"none"===e.style.display||"hidden"===e.style.visibility?!1:""===e.style.display||"block"===e.style.display||"visible"===e.style.visibility?!0:void 0;
},validataComment=function(e,i){
var t=e.value.replace(/^\s+|\s+$/g,"");
sendRecommendAjax(1,t,i);
},showEducatePanel=function(e,i,t){
show(el_likeComment);
var o=window.source||window.cgiData&&window.cgiData.source||0;
return o&&(o=parseInt(o,10),94===o)?void(e&&5===e&&hide(el_likeComment)):void(i||(show(el_likeEducate),
t&&t>0&&(el_friend_like.innerHTML="%s位朋友也在看,".replace("%s",t),document.getElementById("js_friend_like_word").innerText="前往“发现”-“看一看”浏览",
show(el_friend_like)),1===showType&&(hide(el_go_wow),hide(el_likeCommentShare)),
isBeenUnvisible(el_likeComment)&&scrollToShow(el_likeComment),educateExpose()));
},setBtnLike=function(){
el_like.setAttribute("like",1),Class.addClass(el_likeBtn,opt.className),realLikeNum+=1;
var e=el_likeNum.innerHTML;
"10万+"!==e&&(el_likeNum.innerHTML=formatReadNum(realLikeNum));
},setLike2Status=function(e,i,t){
var o="在看";
switch(showType){
case 1:
switch(prompted){
case 0:
showEducatePanel(e,i,t),show(el_likeComment),prompted=1;
break;

case 1:
hide(el_likeEducate),showToast(o);
}
setBtnLike();
break;

case 2:
switch(hide(el_bcommentPanel2),clear(el_likeCommentText),prompted){
case 0:
showEducatePanel(e,i,t),5===e&&hide(el_likeCommentShare);
break;

case 1:
(4===e||5===e)&&showToast(4===e?"已发送":o);
}
5!==e&&(4===e&&"none"!==el_likeEducate.style.display?hide(el_likeCommentShare):4===e?hide(el_likeComment):(show(el_commentArea),
show(el_likeCommentShare),1===prompted&&hide(el_likeEducate),show(el_likeComment),
isBeenUnvisible(el_likeComment)&&scrollToShow(el_likeComment))),4!==e&&setBtnLike(),
prompted=1;
}
enableMove(),commonUtils.isNativePage()&&JSAPI.invoke("handleHaokanAction",{
action:"closeComment"
}),log("[Appmsg] zaikan set like success");
},unsetLike2Status=function(e){
1===e?setTimeout(function(){
alert2(" 已取消，想法已同步删除");
},20):showToast("已取消"),2===showType&&isShow(el_likeComment)&&hide(el_likeComment);
var i=el_likeNum.innerHTML;
Class.removeClass(el_likeBtn,opt.className),el_like.setAttribute("like",0),el_likeComment&&hide(el_likeComment),
realLikeNum-=1,realLikeNum>=0&&"10万+"!==i&&(el_likeNum.innerHTML=formatReadNum(realLikeNum)),
log("[Appmsg] zaikan set unlike success");
},sendRecommendAjax=function sendRecommendAjax(like,comment,type,clientType){
if(!haokanLock){
log("[Appmsg] prepare to send appmsg like request"),showLoading();
var appmsgid=opt.appmsgid||opt.mid,itemidx=opt.itemidx||opt.idx;
haokanLock=!0;
var action_type;
like?(window.isPaySubscribe&&payReportUtils.reportPayAppmsg(12),action_type=type):(window.isPaySubscribe&&payReportUtils.reportPayAppmsg(13),
action_type=2),ajax({
url:"/mp/appmsg_like?__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&like="+like+"&f=json&appmsgid="+appmsgid+"&itemidx="+itemidx,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
comment:comment?comment:"",
prompted:1,
style:clientType||showType,
action_type:action_type,
passparam:window.passparam,
request_id:(new Date).getTime(),
device_type:window.devicetype,
exptype:window.exptype||"",
expsessionid:window.expsessionid||""
},
type:"POST",
success:function success(res){
haokanLock=!1;
var data=eval("("+res+")");
hideLoading(),log("[Appmsg] success send appmsglike like "+like+" return value is "+JSON.stringify(res)),
0==data.base_resp.ret?(like?(setLike2Status(type,data.is_eu_user,data.friend_like_num),
relatedArticles&&relatedArticles.render&&relatedArticles.render("like")):unsetLike2Status(data.has_comment),
connectWithApp(like,comment,clientType)):failAlert(comment);
},
error:function(){
hideLoading(),failAlert(),haokanLock=!1;
}
});
}
};
JSAPI.on("menu:haokan",function(e){
var i=0===parseInt(e.recommend)?0:1;
if(0===i)sendRecommendAjax(i,"",2,clientShowType);else{
var t="";
t=e.comment;
var o=1===e.scene?4:5;
sendRecommendAjax(i,t,o,clientShowType);
}
});
var connectWithApp=function(e,i){
var t={
origin:"mp",
isLike:e?1:0,
url:encodeURIComponent(msg_link.html(!1)),
content:i?i:""
};
JSAPI.invoke("handleHaokanAction",{
action:actionString,
recommend:e?1:0,
server_data:JSON.stringify(t)
},function(e){
console.log("handleHaokanAction",e);
}),JSAPI.invoke("handleHaokanAction",{
action:actionForClient,
permission:1,
recommend:e?1:0
},function(e){
console.log("handleHaokanAction for client",e);
});
},goWoW=function(){
jumpWowLock||(jumpToWowClickReport(),jumpWowLock=!0,JSAPI.invoke("handleHaokanAction",{
action:"jumpToWow",
extParams:JSON.stringify({
autoDropLoad:!0
})
},function(e){
jumpWowLock=!1,console.log("jumpToWow",e),e.err_msg&&"handleHaokanAction:fail_entrance_not_open"===e.err_msg?show(el_wowClosePanel):"handleHaokanAction:fail  action not support"===e.err_msg||"handleHaokanAction:fail, action not support"===e.err_msg?alert2("微信版本过低，暂不支持该操作"):"handleHaokanAction:ok"===e.err_msg&&hide(el_likeComment),
JSAPI.invoke("handleHaokanAction",{
action:actionString,
server_data:JSON.stringify({
origin:"mp",
autoDropLoad:!0
})
},function(e){
console.log("sendAutoDropLoad",e);
});
}));
},likeClickReport=function(){
ajax({
url:"/mp/appmsgreport?action=appmsglikeclickcomment&__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&f=json&appmsgid="+appmsgid+"&itemidx="+itemidx,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
device_type:window.devicetype
},
type:"POST"
});
},likeExpose=function e(){
var i=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,t=qs("like3").offsetTop,o=opt.appmsgid||opt.mid,n=opt.itemidx||opt.idx;
i+commonUtils.getInnerHeight()>t&&t>=i&&(ajax({
url:"/mp/appmsgreport?action=appmsglikeexposure&__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&f=json&appmsgid="+o+"&itemidx="+n,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
device_type:window.devicetype
},
type:"POST"
}),DomEvent.off(window,"scroll",e));
},educateExpose=function i(){
var e=(document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,
opt.appmsgid||opt.mid),t=opt.itemidx||opt.idx,o=window.item_show_type,n=window.enterid||window.cgiData&&window.cgiData.enterid||"";
el_likeEducate&&"none"!=el_likeEducate.style.display&&commonUtils.getInnerHeight()>el_likeEducate.getBoundingClientRect().top&&el_likeEducate.getBoundingClientRect().top+el_likeEducate.getBoundingClientRect().height>0&&(ajax({
url:"/mp/webcommreport?action=report&report_useruin=1&__biz="+window.biz,
type:"POST",
data:{
logid:18266,
buffer:["",Base64.decode(opt.biz),e,t,window.source,window.subscene,1,o,sessionid,n]
},
async:!1,
timeout:2e3
}),DomEvent.off(window,"scroll",i));
},jumpToWowClickReport=function(){
var e=opt.appmsgid||opt.mid,i=opt.itemidx||opt.idx,t=window.enterid||window.cgiData&&window.cgiData.enterid||"";
ajax({
url:"/mp/webcommreport?action=report&report_useruin=1&__biz="+window.biz,
type:"POST",
data:{
logid:18266,
buffer:["",Base64.decode(opt.biz),e,i,window.source,window.subscene,2,window.item_show_type,sessionid,t]
},
async:!1,
timeout:2e3
});
};
DomEvent.on(el_alertConfirm,"click",function(){
el_alertPanel.style.display="none";
}),DomEvent.on(el_like,"click",function(e){
if(el_likeBtn.disabled!==!0){
if(window.is_temp_url)return void alert2("预览状态下无法操作");
var i=el_like.getBoundingClientRect();
return log("[Appmsg zaikan location] top: "+i.top+" left: "+i.left+" bottom: "+i.bottom+" right: "+i.right),
log("[Appmsg zaikan click] clientX: "+e.clientX+" clientY: "+e.clientY),e.currentTarget.classList.contains("js_disabled")?!1:(like_report(e),
!1);
}
}),DomEvent.on(el_wowCloseAck,"click",function(){
hide(el_wowClosePanel);
}),DomEvent.on(qs("js_mask_2"),"mousedown",function(){
hide(el_bcommentPanel2),clear(el_likeCommentText),vHide(el_commentErrorMsg),enableMove();
}),DomEvent.on(el_commentConfirm,"mousedown",function(){
validataComment(el_likeCommentText,4);
}),DomEvent.on(el_commentCancel,"mousedown",function(){
hide(el_bcommentPanel2),clear(el_likeCommentText),vHide(el_commentErrorMsg),enableMove();
}),DomEvent.on(el_likeCommentShare,"click",function(){
return commonUtils.isNativePage()?void JSAPI.invoke("handleHaokanAction",{
action:"writeComment",
style:"white"
}):(scrollTop=document.body.scrollTop||document.documentElement.scrollTop,1*window.item_show_type===10&&(el_panelLikeTitle.innerHTML=window.msg_title.replace(/<(\/?)(?=((a(\s|>))|(\/a))).*?>/g,"")),
show(el_bcommentPanel2),el_likeCommentText.focus(),el_commentConfirm.setAttribute("disabled","disabled"),
disableMove(),void likeClickReport());
}),DomEvent.on(el_likeCommentText,"focus",function(){}),DomEvent.on(el_likeCommentText,"blur",function(){
window.scrollTo(0,scrollTop);
}),DomEvent.on(window,"scroll",likeExpose),DomEvent.on(window,"scroll",educateExpose),
DomEvent.on(el_go_wow,"click",goWoW);
var scrollToShow=function(e){
e.scrollIntoView(!1);
};
DomEvent.on(el_likeCommentText,"input",function(e){
var i=el_likeCommentText.value.replace(/^\s+|\s+$/g,"");
i.length>maxLikeCommentWord?(el_commentCurrentCount.innerHTML=i.length,vShow(el_commentErrorMsg)):vHide(el_commentErrorMsg),
i.length>0&&i.length<=maxLikeCommentWord?el_commentConfirm.removeAttribute("disabled"):el_commentConfirm.setAttribute("disabled","disabled"),
Device.os.ios&&e.data&&doubleInputChar.indexOf(e.data)>-1&&(focusTag=!0);
}),DomEvent.on(el_likeCommentText,"click",function(){
Device.os.ios&&focusTag&&(el_likeCommentText.blur(),el_likeCommentText.focus(),focusTag=!1);
});
}
}
function showLikeNum(e){
var i=e||{};
if(i.show){
var t=i.likeAreaDom,o=i.likeNumDom,n=document.getElementById("js_like_btn");
t&&(t.style.display=i.likeAreaDisplayValue,t.style.visibility="",i.liked&&(1===appmsg_like_type?Class.addClass(t,i.className):Class.addClass(n,i.className)),
t.setAttribute("like",i.liked?"1":"0"),i.likeGray&&(n.disabled=!0));
var s=1===appmsg_like_type?"赞":"";
realLikeNum=i.likeNum||s,1===appmsg_like_type?(parseInt(realLikeNum)>1e5?realLikeNum="100000+":"",
o&&(o.innerHTML=realLikeNum)):2===appmsg_like_type&&(o.innerHTML=formatReadNum(realLikeNum));
}
}
var DomEvent=require("biz_common/dom/event.js"),Class=require("biz_common/dom/class.js"),ajax=require("biz_wap/utils/ajax.js"),Base64=require("biz_common/base64.js"),jsmonitorReport=require("biz_wap/utils/jsmonitor_report.js"),log=require("appmsg/log.js"),Tips=require("complain/tips.js"),RetryAjax=require("appmsg/retry_ajax.js"),JSAPI=require("biz_wap/jsapi/core.js"),actionString="submitMsgToTL",actionForClient="update_recommend_status",mmversion=require("biz_wap/utils/mmversion.js"),commonUtils=require("common/utils.js"),Loading=require("appmsg/loading.js"),realLikeNum,clientShowType=5,Device=require("biz_wap/utils/device.js"),payReportUtils=require("appmsg/pay_report_utils.js"),_require=require("pages/utils.js"),formatReadNum=_require.formatReadNum,relatedArticles=require("appmsg/related_article.js"),maxLikeCommentWord=200,focusTag=!1,doubleInputChar=["“”","‘’","（）","《》","〈〉","「」","『』","〔〕","【】","［］","[]","｛｝","{}","()","<>"];
return{
initLikeEvent:initLikeEvent,
showLikeNum:showLikeNum
};
});define("appmsg/read.js",["pages/utils.js","biz_wap/utils/device.js"],function(e){
"use strict";
function i(e){
var i=e||{},n=1586325600,d="undefined"!=typeof window.ct?parseInt(window.ct,10):0;
if(i.show){
var s=i.readAreaDom,o=i.readNumDom;
s&&(s.style.display=i.readAreaDisplayValue);
var r=i.readNum||1,w=window.ori_send_time||window.cgiData&&window.cgiData.ori_send_time||0,p=/(WindowsNT)|(Windows NT)|(Macintosh)/i.test(navigator.userAgent),m=1566025200,u=1565971200,_=a.os.ios||p?m:u;
parseInt(w,10)>_&&window.item_show_type&&"5"===window.item_show_type&&(n>d?("en"!==window.LANG&&(document.getElementById("readTxt").innerText="播放"),
r=i.videouv||0):("en"!==window.LANG&&(document.getElementById("readTxt").innerText="观看"),
r=i.readNum||0)),1===window.appmsg_like_type?(parseInt(r,10)>1e5?r="100000+":"",
o&&(o.innerHTML=r)):2===window.appmsg_like_type&&(o.innerHTML=t(r),""===o.innerHTML&&(o.innerHTML="0"));
}
}
var n=e("pages/utils.js"),t=n.formatReadNum,a=e("biz_wap/utils/device.js");
return{
showReadNum:i
};
});define("appmsg/share_tpl.html.js",[],function(){
return'<div class="rich_media_extra">\n    <a href="<#= url #>" class="share_appmsg_container appmsg_card_context flex_context">\n        <div class="flex_hd">\n            <i class="share_appmsg_icon"> </i>\n        </div>\n        <div class="flex_bd">\n            <div class="share_appmsg_title">分享给订阅用户</div>\n            <p class="share_appmsg_desc">可快速分享原创文章给你的公众号订阅用户</p>\n        </div>\n    </a>\n</div>\n';
});define("appmsg/appmsgext.js",["appmsg/log.js","biz_wap/utils/ajax.js","rt/appmsg/getappmsgext.rt.js","biz_common/utils/wxgspeedsdk.js","biz_common/utils/url/parse.js"],function(e){
"use strict";
function i(e){
var i={
biz:"",
appmsg_type:"",
mid:"",
sn:"",
album_id:"",
idx:"",
scene:"",
title:"",
ct:"",
abtest_cookie:"",
devicetype:"",
version:"",
is_need_ticket:0,
is_need_ad:0,
comment_id:"",
is_need_reward:0,
both_ad:0,
reward_uin_count:0,
send_time:"",
msg_daily_idx:"",
is_original:0,
is_only_read:0,
req_id:"",
pass_ticket:"",
is_temp_url:0,
more_read_type:0,
rtId:"",
rtKey:"",
appmsg_like_type:1,
related_video_sn:"",
vid:"",
is_pay_subscribe:0,
pay_subscribe_uin_count:0,
has_red_packet_cover:0,
related_video_num:"1"===e.isPublicRelatedVideo?10:5,
album_video_num:5,
onSuccess:function(){},
onError:function(){}
};
for(var o in e)e.hasOwnProperty(o)&&(i[o]=e[o]);
console.info("[(评论、点赞、赞赏) 发送请求]: ",new Date),t({
url:"/mp/getappmsgext?f=json&mock="+n.getQuery("mock"),
data:{
r:Math.random(),
__biz:i.biz,
appmsg_type:i.appmsg_type,
mid:i.mid,
sn:i.sn,
idx:i.idx,
scene:i.scene,
title:encodeURIComponent(i.title.htmlDecode()),
ct:i.ct,
abtest_cookie:i.abtest_cookie,
devicetype:i.devicetype.htmlDecode(),
version:i.version.htmlDecode(),
is_need_ticket:i.is_need_ticket,
is_need_ad:i.is_need_ad,
comment_id:i.comment_id,
is_need_reward:i.is_need_reward,
both_ad:i.both_ad,
reward_uin_count:i.is_need_reward?i.reward_uin_count:0,
send_time:i.send_time,
msg_daily_idx:i.msg_daily_idx,
is_original:i.is_original,
is_only_read:i.is_only_read,
req_id:i.req_id,
pass_ticket:i.pass_ticket,
is_temp_url:i.is_temp_url,
item_show_type:i.item_show_type,
tmp_version:1,
more_read_type:i.more_read_type,
appmsg_like_type:i.appmsg_like_type,
related_video_sn:i.related_video_sn,
related_video_num:i.related_video_num,
vid:i.vid,
is_pay_subscribe:i.is_pay_subscribe,
pay_subscribe_uin_count:i.pay_subscribe_uin_count,
has_red_packet_cover:i.has_red_packet_cover,
album_id:0x11fd1c7c75070000,
album_video_num:i.album_video_num,
cur_album_id:window.appmsg_album_info?window.appmsg_album_info.id:"",
is_public_related_video:i.isPublicRelatedVideo
},
type:"POST",
dataType:"json",
rtId:i.rtId,
rtKey:i.rtKey,
rtDesc:_,
async:!0,
success:function(e){
if(console.info("[(评论、点赞、赞赏) 响应请求]: ",new Date,e),s("[Appmsg] success get async data"),
"function"==typeof i.onSuccess&&i.onSuccess(e),e)try{
s("[Appmsg] success get async data, async data is: "+JSON.stringify(e));
}catch(t){}else s("[Appmsg] success get async data, async data is empty");
if(!d&&"5"===window.item_show_type){
var _=Date.now()-window.logs.pagetime.page_begin;
if(d=!0,Math.random()>.1)return;
a.saveSpeeds({
uin:window.uin,
pid:675,
speeds:[{
sid:29,
time:_
}]
}),a.send();
}
},
error:function(){
s("[Appmsg] error get async data, biz="+i.biz+", mid="+i.mid),"function"==typeof i.onError&&i.onError();
},
complete:function(){
"function"==typeof i.onComplete&&i.onComplete();
}
});
}
var s=e("appmsg/log.js"),t=e("biz_wap/utils/ajax.js"),_=e("rt/appmsg/getappmsgext.rt.js"),a=e("biz_common/utils/wxgspeedsdk.js"),n=e("biz_common/utils/url/parse.js"),d=void 0;
return{
getData:i
};
});define("appmsg/img_copyright_tpl.html.js",[],function(){
return'<span class="original_img_wrp">            \n    <span class="tips_global">来自: <#=source_nickname#></span>\n</span>    ';
});define("pages/video_ctrl.js",[],function(){
"use strict";
function i(i){
i=i||window;
var n=i.cgiData;
return n&&2==n.ori_status&&1==n.is_mp_video&&(n.nick_name||n.hit_username)?!0:!1;
}
function n(i){
return i=i||window,!1;
}
function e(){
return!1;
}
function t(){
return-1!=r.indexOf("&dd=1")?!1:"54"==parent.window.appmsg_type?!1:!0;
}
function o(){
var i;
if(parent==window)i=window;else try{
{
parent.window.__videoDefaultRatio;
}
i=parent.window;
}catch(n){
i=window;
}
var e=i.__videoDefaultRatio||16/9;
return"54"==i.appmsg_type?e:e;
}
var r=window.location.href;
return{
showPauseTips:t,
showVideoLike:e,
showVideoDetail:n,
showReprint:i,
getRatio:o
};
});define("pages/create_txv.js",["biz_wap/utils/jsmonitor_report.js","biz_wap/utils/ajax_load_js.js","pages/loadscript.js"],function(e){
"use strict";
function o(){
"function"!=typeof window.__createTxVideo&&(window.__createTxVideo=function(e){
n(e);
});
}
function n(e){
var o=function(){},n=function(){};
"function"==typeof e.onSuccess&&(n=e.onSuccess),"function"==typeof e.onError&&(o=e.onError),
r.Load({
url:a.jsUrl,
version:a.jsVersion,
useCache:!0,
win:e.win,
onSuccess:function(s){
2!=s.code&&3!=s.code||0!=s.queueIndex||(i.setSum("64728","111",1),i.setSum("64728","112",1));
var u=e.win||window,c=!0;
if(u.Txp&&"function"==typeof u.Txp.Player?(c=!0,0==s.queueIndex&&(2==s.code?i.setSum("64728","116",1):3==s.code&&i.setSum("64728","117",1))):(c=!1,
0==s.queueIndex&&(2==s.code?i.setSum("64728","114",1):3==s.code&&i.setSum("64728","115",1))),
c){
var d=t({
win:u,
options:e
});
n({
player:d
});
}else r.ClearCache({
win:u,
version:a.jsVersion,
url:a.jsUrl
}),o();
},
onError:function(o){
0==o.queueIndex&&(i.setSum("64728","111",1),i.setSum("64728","118",1),51==o.code?i.setSum("64728","119",1):52==o.code?i.setSum("64728","120",1):53==o.code&&i.setSum("64728","121",1)),
s(e);
}
});
}
function t(e){
var o=e.win||window,n=e.options,t=new o.Txp.Player({
containerId:n.containerId,
vid:n.vid,
width:n.width,
height:n.height,
autoplay:n.autoplay===!0?!0:!1,
allowFullScreen:n.allowFullScreen===!0?!0:!1,
chid:17
});
return t;
}
function s(e){
var o=function(){},n=function(){};
"function"==typeof e.onSuccess&&(n=e.onSuccess),"function"==typeof e.onError&&(o=e.onError);
var s=a.jsUrl;
s+=-1==s.indexOf("?")?"?"+a.customerParam+"="+a.jsVersion:"&"+a.customerParam+"="+a.jsVersion,
u({
win:e.win,
url:s,
timeout:1e4,
type:"JS",
callback:function(){
i.setSum("64728","122",1);
var s=e.win||window;
if(s.Txp&&"function"==typeof s.Txp.Player){
i.setSum("64728","124",1);
var r=t({
win:e.win,
options:e
});
n({
player:r
});
}else i.setSum("64728","123",1),o();
},
onerror:function(e){
switch(i.setSum("64728","122",1),1*e){
case 400:
a.jsLoadState=4,i.setSum("64728","125",1);
break;

case 500:
a.jsLoadState=5,i.setSum("64728","126",1);
break;

default:
a.jsLoadState=6,i.setSum("64728","127",1);
}
o();
}
});
}
var i=e("biz_wap/utils/jsmonitor_report.js"),r=e("biz_wap/utils/ajax_load_js.js"),u=e("pages/loadscript.js"),a={
customerParam:"wxv",
jsUrl:"//vm.gtimg.cn/tencentvideo/txp/js/iframe/api.js?",
jsVersion:"v1"
};
return{
createTxVideo:n,
createGlobalFunc:o
};
});define("appmsg/pay_read_utils.js",["biz_wap/ui/weui.js","biz_wap/jsapi/core.js","biz_common/dom/event.js","biz_wap/utils/mmversion.js","biz_wap/utils/device.js","appmsg/pay_report_utils.js","common/utils.js"],function(e){
"use strict";
e("biz_wap/ui/weui.js");
var i=e("biz_wap/jsapi/core.js"),n=e("biz_common/dom/event.js"),r=e("biz_wap/utils/mmversion.js"),a=e("biz_wap/utils/device.js"),t=e("appmsg/pay_report_utils.js"),o=e("common/utils.js"),s=function(e){
var i=arguments.length<=1||void 0===arguments[1]?document:arguments[1];
return i.querySelector(e);
},d=window.payFreeGift,w=document.documentElement&&document.documentElement.clientWidth||window.innerWidth;
try{
var u=s("#img-content");
if(u){
var _=u.getBoundingClientRect();
_.width&&(w=_.width);
}
}catch(p){
console.error(p);
}
var c=32,l=8,m='<div class="pay__tag-reward js_reward"></div>',f={
dom:{
payFee:[s("#js_pay_panel .js_pay_fee"),s("#js_pay_panel_bottom .js_pay_fee")],
wrap:s("#js_pay_wall_wrap"),
payNum:s("#js_pay_num"),
rewardNumWrap:s("#js_pay_reward_num_wrap"),
rewardNum:s("#js_pay_reward_num"),
wall:s("#js_pay_wall"),
giftBar:s("#js_pay_gift_bar"),
sendGift:s("#js_send_pay_gift")
},
perLine:null,
data:{}
},y=function(e){
e&&(/^http/.test(e)||(e=location.protocol+"//"+location.host+e),e.indexOf("#")<0&&(e+="#wechat_redirect"),
-1!==navigator.userAgent.indexOf("MicroMessenger")&&(r.isIOS||r.isAndroid||r.isWp)?i.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(i){
-1===i.err_msg.indexOf("ok")&&(location.href=e);
}):location.href=e);
},g=function(){
var e=f.dom,i=f.data,n=parseInt(i.pay_cnt,10);
e.payNum.innerHTML=n>=1e4||i.is_pay_cnt_cut?"en"===window.LANG?"10k+":"1万+":n+"",
i.rewardTotal?(e.rewardNum.innerHTML=i.rewardTotal+(i.rewardTotalCut?"+":""),e.rewardNumWrap.style.display=""):e.rewardNumWrap.style.display="none";
for(var r=3*f.perLine,a="",t=0,o=i.pay_head_imgs.length;o>t;t++){
var s=i.reward_status_list?i.reward_status_list[t]:0;
if(a+='<div class="pay__avatar-wrp"><img src="'+i.pay_head_imgs[t]+'">'+(s?m:"")+"</div>",
t>=r-1)break;
}
e.wall.innerHTML=a;
},h=function(){
var e=f.dom;
n.tap(e.payNum,function(){
y("/mp/paysub?action=evaluate_show_page&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"&link="+encodeURIComponent(window.msg_link)+"&from_scene="+window.source+"&from_subscene="+window.subscene+"&is_fans="+window.isFans);
}),n.tap(e.rewardNum,function(){
var e=(Math.ceil((o.getInnerHeight()-188)/42)+1)*Math.floor((w-15)/42);
y("/mp/reward?act=getrewardheads&__biz="+window.biz+"&appmsgid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"&offset=0&count="+e+"&source=1");
}),n.tap(e.sendGift,function(){
if(a.os.iphone||a.os.ipad||a.os.android){
var e=f.data.gift_url.html(),i="",n=e.indexOf("#");
-1!==n&&(i=e.substring(n),e=e.substring(0,n)),y(e+"&sessionid="+window.sessionid+"&enterid="+window.enterid+"&scene="+window.source+"&subscene="+window.subscene+i);
}else window.weui.alert("请使用移动端微信打开");
});
},v=function(e,i,n){
if(window.isPaySubscribe){
var a=f.dom;
if(e=JSON.parse(JSON.stringify(e)),!e.fee||window.isPaid||window.IAPProductInfo||!function(){
var i=Math.floor(e.fee/100);
a.payFee.forEach(function(e){
!window.iapPriceInfo.currency_symbol&&(e.innerHTML="￥"+i+".00"),e.parentNode.dataset.ready=1;
});
}(),r.isIOS&&e.fee&&(window.IAPProductInfo?("CNY"!==window.IAPProductInfo.currencyCode&&t.report110809(40),
t.reportOverseaPay(window.IAPProductInfo.currencyCode,100*window.IAPProductInfo.price.toFixed(2),1,window.IAPProductInfo.invokeTime,window.IAPProductInfo.countryCode,0,window.IAPProductInfo.err_msg+(window.IAPProductInfo.err_desc?"__"+window.IAPProductInfo.err_desc:""))):window.oriProductFee=Math.floor(e.fee/100)),
e.pay_cnt){
if(e.is_paid&&!d){
e.pay_head_imgs.unshift(e.my_head_img),e.reward_status_list instanceof Array?e.reward_status_list.unshift(e.my_reward_status):e.reward_status_list=[e.my_reward_status];
var o=3*f.perLine;
e.pay_head_imgs.length>o&&(e.pay_head_imgs=e.pay_head_imgs.slice(0,o));
}
e.rewardTotal=i.rewardTotal,e.rewardTotalCut=i.rewardTotalCut,f.data=e,a.wrap.style.height="",
a.wrap.style.marginTop="",a.wrap.style.visibility="visible",g(),!n&&h();
}else a.wrap.style.display="none";
a.giftBar&&(a.giftBar.style.display=window.payGiftsCount-e.gifted_count>0&&!d?"":"none");
}
},b=function(){
if(!window.isPaySubscribe)return 0;
if(null===f.perLine){
var e=c+l;
f.perLine=Math.floor(.8*w/e),f.dom.wall.parentNode.style.width=f.perLine*e-l+"px";
}
return f.perLine;
};
return{
init:v,
getCountPerLine:b
};
});define("appmsg/reward_utils.js",["biz_wap/ui/weui.js","appmsg/reward_entry.js","biz_wap/utils/mmversion.js","biz_common/dom/class.js","biz_common/dom/event.js"],function(e){
"use strict";
e("biz_wap/ui/weui.js");
var r=e("appmsg/reward_entry.js"),n=e("biz_wap/utils/mmversion.js"),i=e("biz_common/dom/class.js"),a=e("biz_common/dom/event.js"),t=window.navigator.userAgent,d={
perLine:0,
hasBindResize:!1,
hasInit:!1,
pageContainerId:"img-content",
rewardInnerId:"js_reward_inner"
},s=function(e){
return document.getElementById(e);
},o=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=e.pageContainerId||d.pageContainerId,n=e.rewardInnerId||d.rewardInnerId,i=window.innerWidth||document.documentElement.clientWidth;
try{
var a=s(r).getBoundingClientRect();
a.width&&(i=a.width);
}catch(t){}
var o=36;
d.perLine=Math.floor(.8*i/o);
var w=s(n);
return w&&(w.style.width=d.perLine*o+"px"),d.perLine;
},w=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=e.pageContainerId||d.pageContainerId,i=e.rewardInnerId||d.rewardInnerId;
return e.can_reward&&s(n)&&s(i)?(d.hasBindResize||!function(){
d.hasBindResize=!0;
var n=window.innerWidth;
a.on(window,"resize",function(){
window.innerWidth!==n&&(n=window.innerWidth,o(e),d.hasInit&&r.render(d.perLine));
});
}(),d.perLine||o(e),d.perLine):0;
},_=function(e,o){
d.hasInit=!0;
var _=e.author_id||window.author_id;
e.reward_head_imgs=e.reward_head_imgs||[];
var m=s("js_author_name");
if(o.reward_entrance_enable_for_preview)if(n.isInMiniProgram)n.isInMiniProgram&&m&&i.removeClass(m,"rich_media_meta_link");else{
if(_||n.isAndroid){
var u=s("js_preview_reward_author");
u&&(u.style.display="block");
var p=s("js_preview_reward_author_wording");
o.reward_wording&&p&&(p.innerText=o.reward_wording,p.style.display="block");
var h=s("js_preview_reward_author_link");
h&&(window.item_show_type&&1*window.item_show_type===5||a.on(h,"tap",function(e){
e.preventDefault(),window.weui.alert("预览状态下无法操作");
}));
}
if(_){
var l=s("js_preview_reward_author_avatar"),c=s("js_preview_reward_author_head");
o.reward_author_head&&l&&c&&(c.setAttribute("src",o.reward_author_head),l.style.display="block");
var v=s("js_preview_reward_link_text");
v&&(v.innerText="喜欢作者");
}else n.isAndroid&&(s("js_preview_reward_author_name").style.display="none");
}else!n.isInMiniProgram&&(t.indexOf("WindowsWechat")>-1||n.isIOS||n.isAndroid)?(r.handle(e,w({
pageContainerId:o.pageContainerId,
rewardInnerId:o.rewardInnerId,
can_reward:1==e.can_reward?!0:!1
})),m&&e.rewardsn&&e.timestamp&&(m.setAttribute("data-rewardsn",e.rewardsn),m.setAttribute("data-timestamp",e.timestamp),
m.setAttribute("data-canreward",e.can_reward)),m&&!e.can_reward&&i.removeClass(m,"rich_media_meta_link")):m&&i.removeClass(m,"rich_media_meta_link");
};
return{
init:_,
getCountPerLine:w
};
});define("biz_common/ui/imgonepx.js",[],function(){
"use strict";
return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJDQzA1MTVGNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJDQzA1MTYwNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkNDMDUxNUQ2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkNDMDUxNUU2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6p+a6fAAAAD0lEQVR42mJ89/Y1QIABAAWXAsgVS/hWAAAAAElFTkSuQmCC";
});var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var i=arguments[t];
for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);
}
return e;
};
define("appmsg/related_article.js",["biz_common/utils/string/html.js","biz_common/tmpl.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","appmsg/related_article_tpl.html.js","appmsg/related_article_item.html.js","biz_wap/utils/openUrl.js","biz_common/dom/event.js","common/utils.js","biz_common/dom/class.js","biz_common/utils/url/parse.js","common/comm_report.js","appmsg/related_article_feedback.js","biz_wap/utils/mmversion.js","biz_wap/utils/device.js","appmsg/set_font_size.js","biz_wap/utils/jsmonitor_report.js","pages/utils.js"],function(e){
"use strict";
e("biz_common/utils/string/html.js");
var t=e("biz_common/tmpl.js"),i=e("biz_wap/utils/ajax.js"),n=e("biz_wap/jsapi/core.js"),o=e("appmsg/related_article_tpl.html.js"),r=e("appmsg/related_article_item.html.js"),a=e("biz_wap/utils/openUrl.js"),s=e("biz_common/dom/event.js"),l=e("common/utils.js"),d=e("biz_common/dom/class.js"),m=e("biz_common/utils/url/parse.js"),c=e("common/comm_report.js"),u=e("appmsg/related_article_feedback.js"),p=e("biz_wap/utils/mmversion.js"),_=e("biz_wap/utils/device.js"),w=e("appmsg/set_font_size.js").setFontSize,g=e("biz_wap/utils/jsmonitor_report.js"),f=e("pages/utils.js"),h=f.getId,b=f.getByClass,j=f.qs,v=f.formatReadNum,y=f.getScrollTop,z=l.getInnerHeight(),x={
bottomOpr:h("js_bottom_opr_right"),
container:h("js_related_container")
};
if(null===x.container)return null;
var T=0,R=!1,I=null,B=null,C=window.requestAnimationFrame,E=3,O=100*Math.random()<1;
O&&window.WX_BJ_REPORT.BadJs.report("relatedArticleFlag","value:"+window.relatedArticleFlag,{
mid:"mmbizwap:related_monitor",
uin:window.user_uin
});
var F=_.os.ipad||!p.isIOS&&!p.isAndroid,P=0;
p.isIOS?P=1:p.isAndroid&&(P=2);
var A={
Bizuin_from:window.biz,
Msgid_from:window.parseInt(window.mid,10)||0,
Itemidx_from:window.parseInt(window.idx,10)||0,
Scene:window.parseInt(window.source,10)||0,
Subscene:window.parseInt(window.subscene,10)||0,
Sessionid:window.sessionid||"",
Enterid:window.parseInt(window.enterid,10)||0
},M=[{
name:"内容质量低",
value:1
},{
name:"不看此公众号",
value:2
}];
O&&window.WX_BJ_REPORT.BadJs.report("RELATED_ARTICLE_COUNT","count:"+E,{
mid:"mmbizwap:related_monitor",
uin:window.user_uin
});
var S=function(e){
var t=document.createElement("div");
return t.innerHTML=e,t.childNodes;
},k=function(){
null!==I&&(s.off(x.area,"transitionend",I),I=null);
};
I=function(e){
e.target===x.area&&"height"===e.propertyName&&(x.area.style.overflow="visible",k());
};
var W=function(e,t){
var i=2.25,n=6.5,o=0;
return 0===e?(x.area.style.overflow="hidden",k()):o=e*n+i,x.area.style.height=o+"em",
t?(T||(T=x.placeholder?j("div",x.placeholder).getBoundingClientRect().height:j(".js_related_item",x.list).getBoundingClientRect().height),
e*T+j(".js_related_title",x.main).getBoundingClientRect().height):void 0;
},J=function(e){
null!==B?(clearTimeout(B),B=null,"function"==typeof e&&e(!0)):"function"==typeof e&&e(!1);
},L=function(e){
document.documentElement.scrollTop=e,document.body.scrollTop=e;
},H=function(){
var e=0;
["webkit","moz","ms","o"].some(function(e){
return C?!0:(C=C||window[e+"RequestAnimationFrame"],!1);
}),C||(C=function(t){
var i=(new Date).getTime(),n=Math.max(0,16-(i-e));
return e=i+n,window.setTimeout(function(){
return t(i+n);
},n);
});
},N=function(e){
return Math.sin(e*(Math.PI/2));
},U=function(e,t,i){
var n=y(),o=e+n,r=e/t,a=0,s=Math.max(.1,Math.min(Math.abs(n-o)/r,.8)),l=function d(){
a+=1/60;
var e=a/s,t=N(e);
1>e?(C(d),L(n+(o-n)*t)):(L(o),"function"==typeof i&&i());
};
l();
},Q=function(){
var e=!1,t=[],n=function o(n){
e=!0,i({
url:"/mp/relatedarticle?action=expose",
type:"POST",
dataType:"json",
data:n,
complete:function(){
t.length?o(t.shift()):e=!1;
}
});
};
return function(i){
e?t.push(i):n(i);
};
}(),X=function(){
for(var e=b("js_related_item"),t=y(),i=[],o=0;o<e.length;o++){
var r=e[o];
1*r.dataset.hasreport!==1&&r.clientHeight+r.offsetTop>=t+r.clientHeight/2&&r.clientHeight+r.offsetTop<=t+r.clientHeight/2+l.getInnerHeight()&&!function(e,t){
var n=e.dataset,o=n.url;
n.hasreport=1,g.setSum(110809,21,1),c.report(18832,_extends({
Actiontype:1,
Type:1,
Bizuin:m.getQuery("__biz",o),
Msgid:window.parseInt(m.getQuery("mid",o),10)||0,
Itemidx:window.parseInt(m.getQuery("idx",o),10)||0,
Sendtimestamp:window.parseInt(n.time)||0,
Pos:t+1,
Recalltype:1*n.recalltype,
Mmversion:P,
Isreaded:1*n.isreaded,
ExpType:n.exptype,
ExtInfo:n.ext_info
},A)),Q({
bizuin:n.bizuin,
mid:n.mid,
idx:n.idx
}),i.push({
item_show_type:n.item_show_type,
url:o
});
}(r,o);
}
i.length&&n.invoke("downloadPageDataForFastLoad",{
itemList:i
},function(e){
console.log("downloadPageDataForFastLoad",e);
});
},D=function(e){
return 1===window.show_related_article||e.indexOf(window.source)>-1||e.indexOf(window.subscene)>-1;
}(["157","169"]),q=function(e){
var n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],o=arguments.length<=2||void 0===arguments[2]?E:arguments[2],a=parseFloat(window.getComputedStyle(x.main).marginTop),s=function(t){
if(e)W(t);else{
var i=24,n=x.area.getBoundingClientRect().top,o=W(t,!0)+i+a,r=x.bottomOpr.getBoundingClientRect().top,s=n+o;
if(!(r>z||0>s)){
var l=n-i;
l>0&&z>s||(0>l?U(l,.5,X):U(s-z,.5,X));
}
}
B=null;
};
B=setTimeout(function(){
return s(3);
},500),i({
url:"/mp/relatedarticle?action=getlist&count="+o+"&begin="+n+"&article_url="+window.encodeURIComponent(location.href)+"&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&has_related_article_info="+window.hasRelatedArticleInfo+"&is_from_recommand="+(D?1:0),
type:"GET",
dataType:"json",
success:function(e){
e&&e.base_resp&&1*e.base_resp.ret===0&&e.list&&e.list.length?!function(){
var i=e.list.map(function(e){
return D&&(e.url=e.url.replace(/#wechat_redirect/,"&show_related_article=1$&")),
e.like_num_wording=e.old_like_num?v(e.old_like_num):"",e.read_num_wording=e.read_num?v(e.read_num):"",
e.pay_cnt_wording=e.pay_cnt?v(e.pay_cnt):"",e.ext_info=e.ext_info.html(!0),e;
});
O&&window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs.report("list.length","list.length:"+i.length,{
mid:"mmbizwap:related_monitor",
_info:{
relatedArticleFlag:window.relatedArticleFlag,
isPc:F
},
uin:window.user_uin
}),i.length!==o&&window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs.report("list is no match","list.length:"+i.length+"|count:"+o,{
mid:"mmbizwap:related_monitor",
_info:{
relatedArticleFlag:window.relatedArticleFlag,
list:i,
isPc:F
},
uin:window.user_uin
});
var a=document.createDocumentFragment();
Array.prototype.forEach.call(S(t.tmpl(r,{
list:i,
reason:M,
begin:n
},!1)),function(e){
a.appendChild(e.cloneNode(!0));
}),x.list.appendChild(a),T=j("div",x.placeholder).getBoundingClientRect().height,
x.placeholder.parentNode.removeChild(x.placeholder),x.placeholder=null,J(function(t){
t?s(e.list.length):W(e.list.length);
}),x.list.style.opacity=1,X(),window.ipados13_font_scale&&w(x.list,window.ipados13_font_scale/100);
}():J(function(e){
!e&&W(0);
});
}
});
},V=function(){
s.on(x.list,"click",".js_related_item",function(e){
var t=e.delegatedTarget,i=t.dataset,o=i.url;
g.setSum(110809,23,1),c.report(18832,_extends({
Actiontype:2,
Type:1,
Bizuin:m.getQuery("__biz",o),
Msgid:window.parseInt(m.getQuery("mid",o),10)||0,
Itemidx:window.parseInt(m.getQuery("idx",o),10)||0,
Sendtimestamp:window.parseInt(i.time)||0,
Pos:(1*i.index||0)+1,
Recalltype:1*i.recalltype,
Isreaded:1*i.isreaded,
Mmversion:P,
ExpType:i.exptype,
ExtInfo:i.ext_info
},A)),p.isWechat?n.invoke("openWebViewUseFastLoad",{
url:o,
item_show_type:i.item_show_type,
scene:132,
openType:0
},function(e){
console.log("openWebViewUseFastLoad res: ",e),e&&e.err_msg&&-1===e.err_msg.indexOf("ok")&&a.openUrlWithExtraWebview(o);
}):window.open(o);
}),s.on(x.list,"touchstart",".js_related_item",function(e){
e.stopPropagation(),d.addClass(e.delegatedTarget,"card_custom_active");
},!1),s.on(x.list,"touchend",".js_related_item",function(e){
e.stopPropagation(),d.removeClass(e.delegatedTarget,"card_custom_active");
},!1),s.on(window,"scroll",X),null!==I&&s.on(x.area,"transitionend",I),u.init({
container:x.list,
biz:window.biz,
mid:window.mid,
idx:window.idx,
dislikeCb:function(e){
e.parentNode.removeChild(e),W(x.list.children.length);
}
});
};
return H(),{
isFromRecommend:D,
render:function(e,i){
if(!R&&1*window.item_show_type===0&&""!==window.item_show_type){
if(!i){
var n=x.bottomOpr.getBoundingClientRect(),r=n.top,a=n.bottom;
if(r>z||0>a)return;
}
R=!0,x.container.innerHTML=t.tmpl(o,{
type:e
},!1),x.area=j(".js_related_area",x.container),x.main=j(".js_related_main",x.area),
x.list=j(".js_related_list",x.main),x.placeholder=j(".js_related_placeholder",x.main),
V(),q(i);
}
}
};
});define("appmsg/malicious_wording.js",[],function(){
"use strict";
var i={
0:{
90041:"此标题包含夸大误导信息",
20012:"此标题包含低俗恶俗内容"
},
1:{
90041:"",
20012:""
},
2:{
90041:"此文章包含夸大误导信息",
20012:"此文章包含低俗恶俗内容"
}
},s={
0:{
90041:"标题使用夸大、煽动、低俗等词语造成误导或引人不适",
20012:"标题使用低俗或恶俗词语造成不正当影响或引人不适"
},
1:{
90041:"摘要包含误导、煽动的信息引人不适或造成微信用户混淆",
20012:"摘要包含低俗或恶俗内容造成不正当影响或引人不适"
},
2:{
90041:"文章包含误导、煽动的信息引人不适或造成微信用户混淆",
20012:"文章包含低俗或恶俗内容造成不正当影响或引人不适"
}
};
return{
maliciousTitleMap:i,
maliciousDescMap:s
};
});!function(n){
"use strict";
function t(n,t){
var r=(65535&n)+(65535&t),u=(n>>16)+(t>>16)+(r>>16);
return u<<16|65535&r;
}
function r(n,t){
return n<<t|n>>>32-t;
}
function u(n,u,e,o,c,f){
return t(r(t(t(u,n),t(o,f)),c),e);
}
function e(n,t,r,e,o,c,f){
return u(t&r|~t&e,n,t,o,c,f);
}
function o(n,t,r,e,o,c,f){
return u(t&e|r&~e,n,t,o,c,f);
}
function c(n,t,r,e,o,c,f){
return u(t^r^e,n,t,o,c,f);
}
function f(n,t,r,e,o,c,f){
return u(r^(t|~e),n,t,o,c,f);
}
function i(n,r){
n[r>>5]|=128<<r%32,n[(r+64>>>9<<4)+14]=r;
var u,i,h,a,g,l=1732584193,d=-271733879,v=-1732584194,C=271733878;
for(u=0;u<n.length;u+=16)i=l,h=d,a=v,g=C,l=e(l,d,v,C,n[u],7,-680876936),C=e(C,l,d,v,n[u+1],12,-389564586),
v=e(v,C,l,d,n[u+2],17,606105819),d=e(d,v,C,l,n[u+3],22,-1044525330),l=e(l,d,v,C,n[u+4],7,-176418897),
C=e(C,l,d,v,n[u+5],12,1200080426),v=e(v,C,l,d,n[u+6],17,-1473231341),d=e(d,v,C,l,n[u+7],22,-45705983),
l=e(l,d,v,C,n[u+8],7,1770035416),C=e(C,l,d,v,n[u+9],12,-1958414417),v=e(v,C,l,d,n[u+10],17,-42063),
d=e(d,v,C,l,n[u+11],22,-1990404162),l=e(l,d,v,C,n[u+12],7,1804603682),C=e(C,l,d,v,n[u+13],12,-40341101),
v=e(v,C,l,d,n[u+14],17,-1502002290),d=e(d,v,C,l,n[u+15],22,1236535329),l=o(l,d,v,C,n[u+1],5,-165796510),
C=o(C,l,d,v,n[u+6],9,-1069501632),v=o(v,C,l,d,n[u+11],14,643717713),d=o(d,v,C,l,n[u],20,-373897302),
l=o(l,d,v,C,n[u+5],5,-701558691),C=o(C,l,d,v,n[u+10],9,38016083),v=o(v,C,l,d,n[u+15],14,-660478335),
d=o(d,v,C,l,n[u+4],20,-405537848),l=o(l,d,v,C,n[u+9],5,568446438),C=o(C,l,d,v,n[u+14],9,-1019803690),
v=o(v,C,l,d,n[u+3],14,-187363961),d=o(d,v,C,l,n[u+8],20,1163531501),l=o(l,d,v,C,n[u+13],5,-1444681467),
C=o(C,l,d,v,n[u+2],9,-51403784),v=o(v,C,l,d,n[u+7],14,1735328473),d=o(d,v,C,l,n[u+12],20,-1926607734),
l=c(l,d,v,C,n[u+5],4,-378558),C=c(C,l,d,v,n[u+8],11,-2022574463),v=c(v,C,l,d,n[u+11],16,1839030562),
d=c(d,v,C,l,n[u+14],23,-35309556),l=c(l,d,v,C,n[u+1],4,-1530992060),C=c(C,l,d,v,n[u+4],11,1272893353),
v=c(v,C,l,d,n[u+7],16,-155497632),d=c(d,v,C,l,n[u+10],23,-1094730640),l=c(l,d,v,C,n[u+13],4,681279174),
C=c(C,l,d,v,n[u],11,-358537222),v=c(v,C,l,d,n[u+3],16,-722521979),d=c(d,v,C,l,n[u+6],23,76029189),
l=c(l,d,v,C,n[u+9],4,-640364487),C=c(C,l,d,v,n[u+12],11,-421815835),v=c(v,C,l,d,n[u+15],16,530742520),
d=c(d,v,C,l,n[u+2],23,-995338651),l=f(l,d,v,C,n[u],6,-198630844),C=f(C,l,d,v,n[u+7],10,1126891415),
v=f(v,C,l,d,n[u+14],15,-1416354905),d=f(d,v,C,l,n[u+5],21,-57434055),l=f(l,d,v,C,n[u+12],6,1700485571),
C=f(C,l,d,v,n[u+3],10,-1894986606),v=f(v,C,l,d,n[u+10],15,-1051523),d=f(d,v,C,l,n[u+1],21,-2054922799),
l=f(l,d,v,C,n[u+8],6,1873313359),C=f(C,l,d,v,n[u+15],10,-30611744),v=f(v,C,l,d,n[u+6],15,-1560198380),
d=f(d,v,C,l,n[u+13],21,1309151649),l=f(l,d,v,C,n[u+4],6,-145523070),C=f(C,l,d,v,n[u+11],10,-1120210379),
v=f(v,C,l,d,n[u+2],15,718787259),d=f(d,v,C,l,n[u+9],21,-343485551),l=t(l,i),d=t(d,h),
v=t(v,a),C=t(C,g);
return[l,d,v,C];
}
function h(n){
var t,r="";
for(t=0;t<32*n.length;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);
return r;
}
function a(n){
var t,r=[];
for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;
for(t=0;t<8*n.length;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;
return r;
}
function g(n){
return h(i(a(n),8*n.length));
}
function l(n,t){
var r,u,e=a(n),o=[],c=[];
for(o[15]=c[15]=void 0,e.length>16&&(e=i(e,8*n.length)),r=0;16>r;r+=1)o[r]=909522486^e[r],
c[r]=1549556828^e[r];
return u=i(o.concat(a(t)),512+8*t.length),h(i(c.concat(u),640));
}
function d(n){
var t,r,u="0123456789abcdef",e="";
for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+=u.charAt(t>>>4&15)+u.charAt(15&t);
return e;
}
function v(n){
return unescape(encodeURIComponent(n));
}
function C(n){
return g(v(n));
}
function s(n){
return d(C(n));
}
function A(n,t){
return l(v(n),v(t));
}
function m(n,t){
return d(A(n,t));
}
n.md5=function(n,t,r){
return t?r?A(t,n):m(t,n):r?C(n):s(n);
};
}("function"==typeof jQuery?jQuery:this);define("complain/utils/const.js",[],function(A,i,g){
"use strict";
g.exports={
WRAP_TAG:"span",
IMG_TAG:"IMG",
HIGHLIGHT_ID:"highlight-id",
IMG_ID:"img-id",
CAMEL_HIGHLIGHT_ID:"highlightId",
CAMEL_IMG_ID:"imgId",
NODE_TYPE:{
text:1,
img:2
},
placeHolder:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="
};
});