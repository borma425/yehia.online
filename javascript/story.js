(function(l){var r=function(){var r=function(w,r){var v=document,d=this;"string"===typeof w&&(w=v.getElementById(w));var f=function(a){return v.querySelectorAll(a)[0]},e=function(a,b){return a?a[b]||"":""},t=function(a,b){if(a)for(var c=a.length,d=0;d<c;d++)b(d,a[d])},y=function(a,b,c){b=[b.toLowerCase(),"webkit".concat(b),"MS".concat(b),"o".concat(b)];t(b,function(b,d){a[d]=c})},B=function(a,b,c){c=[c.toLowerCase(),"webkit".concat(c),"MS".concat(c),"o".concat(c)];t(c,function(c,d){a.addEventListener(d,b,!1)})},M=function(a,b){B(a,b,"AnimationEnd")},S=function(a,b){a.transitionEndEvent||(a.transitionEndEvent=!0,B(a,b,"TransitionEnd"))},E=function(a,b){a.firstChild?a.insertBefore(b,a.firstChild):a.appendChild(b)},N=function(a,b){try{if(b){if(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)document.exitFullscreen?document.exitFullscreen()["catch"](function(){}):document.mozCancelFullScreen?document.mozCancelFullScreen()["catch"](function(){}):document.webkitExitFullscreen&&document.webkitExitFullscreen()["catch"](function(){})}else if(a.requestFullScreen)a.requestFullScreen();else if(a["ms".concat("RequestFullScreen")])a["ms".concat("RequestFullScreen")]();else if(a["moz".concat("RequestFullScreen")])a["moz".concat("RequestFullScreen")]();else if(a["webkit".concat("RequestFullScreen")])a["webkit".concat("RequestFullScreen")]()}catch(c){console.warn("[Zuck.js] Can't access fullscreen")}},C=function(a,b,c,d){var m=0<b?1:-1;m*=Math.abs(b)/f("#zuck-modal").offsetWidth*90;if(h("cubeEffect")){var g=0===m?"scale(0.95)":"scale(0.930,0.930)";y(f("#zuck-modal-content").style,"Transform",g);if(-90>m||90<m)return!1}b=h("cubeEffect")?"rotateY(".concat(m,"deg)"):"translate3d(".concat(b,"px, 0, 0)");a&&(y(a.style,"TransitionTimingFunction",d),y(a.style,"TransitionDuration","".concat(c,"ms")),y(a.style,"Transform",b))},F=function(a,b,c,d){var m=0,g=0;if(a){if(a.offsetParent){do if(m+=a.offsetLeft,g+=a.offsetTop,a===d)break;while(a=a.offsetParent)}b&&(g-=b);c&&(m-=c)}return[m,g]},G=function(a){a=1E3*Number(a);a=new Date(a);var b=a.getTime();b=((new Date).getTime()-b)/1E3;var c=h("language","time");c=[[60," ".concat(c.seconds),1],[120,"1 ".concat(c.minute),""],[3600," ".concat(c.minutes),60],[7200,"1 ".concat(c.hour),""],[86400," ".concat(c.hours),3600],[172800," ".concat(c.yesterday),""],[604800," ".concat(c.days),86400]];var d=1;0>b&&(b=Math.abs(b),d=2);for(var f=0,g;g=c[f++];)if(b<g[0])return"string"===typeof g[2]?g[d]:Math.floor(b/g[2])+g[1];b=a.getDate();c=a.getMonth();a=a.getFullYear();return"".concat(b,"/").concat(c+1,"/").concat(a)},p=w.id,H={skin:"snapgram",avatars:!0,stories:[],backButton:!0,backNative:!1,previousTap:!0,autoFullScreen:!1,openEffect:!0,cubeEffect:!1,list:!1,localStorage:!0,callbacks:{onRender:function(a,b){return b},onOpen:function(a,b){b()},onView:function(a){},onEnd:function(a,b){b()},onClose:function(a,b){b()},onNextItem:function(a,b,c){c()},onNavigateItem:function(a,b,c){c()}},language:{unmute:"أضغط لتفعيل الصوت",keyboardTip:"Press space to see next",visitLink:"زياره الرابط",time:{ago:"ago",hour:"hour ago",hours:"hours ago",minute:"minute ago",minutes:"minutes ago",fromnow:"from now",seconds:"seconds ago",yesterday:"yesterday",tomorrow:"tomorrow",days:"days ago"}}},h=function(a,b){var c=function(a){return"undefined"!==typeof a};return b?c(r[a])?c(r[a][b])?r[a][b]:H[a][b]:H[a][b]:c(r[a])?r[a]:H[a]},z=new function(){var a=f("#zuck-modal");a||l.Zuck.hasModal||(l.Zuck.hasModal=!0,a=v.createElement("div"),a.id="zuck-modal",h("cubeEffect")&&(a.className="with-cube"),a.innerHTML='<div id="zuck-modal-content"></div>',a.style.display="none",a.setAttribute("tabIndex","1"),a.onkeyup=function(a){a=a.keyCode;27===a?z.close():(13===a||32===a)&&z.next()},h("openEffect")&&a.classList.add("with-effects"),S(a,function(){a.classList.contains("closed")&&(b.innerHTML="",a.style.display="none",a.classList.remove("closed"),a.classList.remove("animated"))}),v.body.appendChild(a));var b=f("#zuck-modal-content"),c=function(a){var b=f("#zuck-modal"),c="",g="",e="0",k=f("#zuck-modal-slider-".concat(p)),n={previous:f("#zuck-modal .story-viewer.previous"),next:f("#zuck-modal .story-viewer.next"),viewing:f("#zuck-modal .story-viewer.viewing")};if(!n.previous&&!a||!n.next&&a)return!1;a?(c="next",g="previous"):(c="previous",g="next");h("cubeEffect")?"previous"===c?e=b.slideWidth:"next"===c&&(e=-1*b.slideWidth):(e=F(n[c]),e=-1*e[0]);C(k,e,600,null);setTimeout(function(){if(""!==c&&n[c]&&""!==g){var a=n[c].getAttribute("data-story-id");d.internalData.currentStory=a;(a=f("#zuck-modal .story-viewer.".concat(g)))&&a.parentNode.removeChild(a);n.viewing&&(n.viewing.classList.add("stopped"),n.viewing.classList.add(g),n.viewing.classList.remove("viewing"));n[c]&&(n[c].classList.remove("stopped"),n[c].classList.remove(c),n[c].classList.add("viewing"));(a=I(c))&&m(a,c);a=d.internalData.currentStory;var b=f('#zuck-modal [data-story-id="'.concat(a,'"]'));if(b){b=b.querySelectorAll("[data-index].active");var e=b[0].firstElementChild;d.data[a].currentItem=parseInt(b[0].getAttribute("data-index"),10);b[0].innerHTML='<b style="'.concat(e.style.cssText,'"></b>');M(b[0].firstElementChild,function(){d.nextItem(!1)})}C(k,"0",0,null);b&&D([b[0],b[1]],!0);h("callbacks","onView")(d.internalData.currentStory)}},650)},m=function(a,b,c){var g=f("#zuck-modal-slider-".concat(p)),m="",A="",n=e(a,"id"),k=v.createElement("div"),x=e(a,"currentItem")||0,l="";if(f('#zuck-modal .story-viewer[data-story-id="'.concat(n,'"]')))return!1;k.className="slides";t(e(a,"items"),function(b,c){x>b&&(a.items[b].seen=!0,c.seen=!0);var d=e(c,"id"),g=e(c,"length"),f=e(c,"linkText"),k=!0===e(c,"seen")?"seen":"";d='data-index="'.concat(b,'" data-item-id="').concat(d,'"');var n=h("callbacks","onRender");x===b&&(l=G(e(c,"time")));A+="\n                            <span ".concat(d,' class="').concat(x===b?"active":""," ").concat(k,'">\n                                <b style="animation-duration:').concat(""===g?"3":g,'s"></b>\n                            </span>');m+='\n            <div data-time="'.concat(e(c,"time"),'" data-type="').concat(e(c,"type"),'"').concat(d,' class="item ').concat(k," ").concat(x===b?"active":"",'">\n              ').concat(n(c,"\n                ".concat("video"===e(c,"type")?'\n                      <video class="media" muted webkit-playsinline playsinline preload="auto" src="'.concat(e(c,"src"),'" ').concat(e(c,"type"),'></video>\n                      <b class="tip muted">').concat(h("language","unmute"),"</b>\n                "):'\n                      <img class="media" src="'.concat(e(c,"src"),'" ').concat(e(c,"type"),">\n                "),"\n\n                ").concat(e(c,"link")?'\n                      <a class="tip link" href="'.concat(e(c,"link"),'" rel="noopener" target="_blank">\n                        ').concat(f&&""!==f?f:h("language","visitLink"),"\n                      </a>\n                "):"\n                ","\n              ")),"\n            </div>")});k.innerHTML=m;var q=k.querySelector("video"),K=function(a){a.muted?u.classList.add("muted"):u.classList.remove("muted")};q&&(q.onwaiting=function(a){q.paused&&(u.classList.add("paused"),u.classList.add("loading"))},q.onplay=function(){K(q);u.classList.remove("stopped");u.classList.remove("paused");u.classList.remove("loading")},q.onready=q.onload=q.onplaying=q.oncanplay=function(){K(q);u.classList.remove("loading")},q.onvolumechange=function(){K(q)});var u=v.createElement("div");u.className="story-viewer muted ".concat(b," ").concat(c?"":"stopped"," ").concat(h("backButton")?"with-back-button":"");u.setAttribute("data-story-id",n);c='<div class="head"><div class="left">'.concat(h("backButton")?'<a class="back">&lsaquo;</a>':"",'<u class="img" style="background-image:url(').concat(e(a,"photo"),');"></u><div><strong>').concat(e(a,"name"),'</strong><span class="time">').concat(l,'</span></div></div><div class="right"><span class="time">').concat(l,'</span><span class="loading"></span><a class="close" tabIndex="2">&times;</a></div></div><div class="slides-pointers"><div>').concat(A,"</div></div>");u.innerHTML=c;t(u.querySelectorAll(".close, .back"),function(a,b){b.onclick=function(a){a.preventDefault();z.close()}});u.appendChild(k);"viewing"===b&&D(u.querySelectorAll('[data-index="'.concat(x,'"].active')),!1);t(u.querySelectorAll(".slides-pointers [data-index] > b"),function(a,b){M(b,function(){d.nextItem(!1)})});"previous"===b?E(g,u):g.appendChild(u)},k=function(a){var b=f("#zuck-modal"),g,e=void 0,m=void 0,k=void 0,n=void 0,p=void 0,t=function(c){var d=f("#zuck-modal .viewing");if("A"===c.target.nodeName)return!0;c.preventDefault();c=c.touches?c.touches[0]:c;var h=F(f("#zuck-modal .story-viewer.viewing"));b.slideWidth=f("#zuck-modal .story-viewer").offsetWidth;g=h[0];e={x:c.pageX,y:c.pageY,time:Date.now()};m=void 0;k={};a.addEventListener("mousemove",r);a.addEventListener("mouseup",q);a.addEventListener("mouseleave",q);a.addEventListener("touchmove",r);a.addEventListener("touchend",q);d&&d.classList.add("paused");T();n=setTimeout(function(){d.classList.add("longPress")},600);p=setTimeout(function(){clearInterval(p);p=!1},250)},r=function(b){var c=b.touches?b.touches[0]:b,d=c.pageX;c=c.pageY;e&&(k={x:d-e.x,y:c-e.y},"undefined"===typeof m&&(m=!!(m||Math.abs(k.x)<Math.abs(k.y))),!m&&e&&(b.preventDefault(),C(a,g+k.x,0,null)))},q=function J(A){var x=f("#zuck-modal .viewing"),u=e;if(k){var t=e?Date.now()-e.time:void 0;t=300>Number(t)&&25<Math.abs(k.x)||Math.abs(k.x)>b.slideWidth/3;var q=0>k.x,O=q?f("#zuck-modal .story-viewer.next"):f("#zuck-modal .story-viewer.previous");m||(!t||q&&!O||!q&&!O?C(a,g,300):c(q,!0));e=void 0;a.removeEventListener("mousemove",r);a.removeEventListener("mouseup",J);a.removeEventListener("mouseleave",J);a.removeEventListener("touchmove",r);a.removeEventListener("touchend",J)}t=d.internalData.currentVideoElement;n&&clearInterval(n);x&&(D(x.querySelectorAll(".active"),!1),x.classList.remove("longPress"),x.classList.remove("paused"));if(p)if(clearInterval(p),p=!1,x=function(){u.x>l.screen.width/3||!h("previousTap")?d.navigateItem("next",A):d.navigateItem("previous",A)},(q=f("#zuck-modal .viewing"))&&t)q.classList.contains("muted")?P(t,q):x();else return x(),!1};a.addEventListener("touchstart",t);a.addEventListener("mousedown",t)};return{show:function(a,c){var e=f("#zuck-modal");h("callbacks","onOpen")(a,function(){b.innerHTML='<div id="zuck-modal-slider-'.concat(p,'" class="slider"></div>');var c=d.data[a],g=c.currentItem||0,A=f("#zuck-modal-slider-".concat(p));k(A);d.internalData.currentStory=a;c.currentItem=g;h("backNative")&&(l.location.hash="#!".concat(p));(g=I("previous"))&&m(g,"previous");m(c,"viewing",!0);(c=I("next"))&&m(c,"next");h("autoFullScreen")&&e.classList.add("fullscreen");var n=function(){e.classList.contains("fullscreen")&&h("autoFullScreen")&&1024>=l.screen.width&&N(e);e.focus()};h("openEffect")?(c=f("#".concat(p,' [data-id="').concat(a,'"] .img')),g=F(c),e.style.marginLeft="".concat(g[0]+c.offsetWidth/2,"px"),e.style.marginTop="".concat(g[1]+c.offsetHeight/2,"px"),e.style.display="block",e.slideWidth=f("#zuck-modal .story-viewer").offsetWidth,setTimeout(function(){e.classList.add("animated")},10),setTimeout(function(){n()},300)):(e.style.display="block",e.slideWidth=f("#zuck-modal .story-viewer").offsetWidth,n());h("callbacks","onView")(a)})},next:function(a){h("callbacks","onEnd")(d.internalData.currentStory,function(){var a=d.internalData.currentStory,b=f("#".concat(p,' [data-id="').concat(a,'"]'));b&&(b.classList.add("seen"),d.data[a].seen=!0,d.internalData.seenItems[a]=!0,Q("seenItems",d.internalData.seenItems),L());f("#zuck-modal .story-viewer.next")?c(!0):z.close()})},close:function(){var a=f("#zuck-modal");h("callbacks","onClose")(d.internalData.currentStory,function(){h("backNative")&&(l.location.hash="");N(a,!0);h("openEffect")?a.classList.add("closed"):(b.innerHTML="",a.style.display="none")})}}},U=function(a){a=a.getAttribute("data-id");var b=v.querySelectorAll("#".concat(p,' [data-id="').concat(a,'"] .items > li')),c=[];t(b,function(a,b){var d=b.firstElementChild,e=d.firstElementChild;c.push({src:d.getAttribute("href"),length:d.getAttribute("data-length"),type:d.getAttribute("data-type"),time:d.getAttribute("data-time"),link:d.getAttribute("data-link"),linkText:d.getAttribute("data-linkText"),preview:e.getAttribute("src")})});d.data[a].items=c},R=function(a){var b=a.getAttribute("data-id"),c=!1;d.internalData.seenItems[b]&&(c=!0);c?a.classList.add("seen"):a.classList.remove("seen");try{d.data[b]={id:b,photo:a.getAttribute("data-photo"),name:a.firstElementChild.lastElementChild.firstChild.innerText,link:a.firstElementChild.getAttribute("href"),lastUpdated:a.getAttribute("data-last-updated"),seen:c,items:[]}}catch(m){d.data[b]={items:[]}}a.onclick=function(a){a.preventDefault();z.show(b)}},I=function(a){var b=d.internalData.currentStory;a="".concat(a,"ElementSibling");return b&&(b=f("#".concat(p,' [data-id="').concat(b,'"]'))[a])?(b=b.getAttribute("data-id"),d.data[b]||!1):!1},L=function(){t(v.querySelectorAll("#".concat(p," .story.seen")),function(a,b){var c=d.data[b.getAttribute("data-id")];b.parentNode.removeChild(b);d.add(c,!0)})},D=function(a,b){var c=a[1],e=a[0],f=e.parentNode.parentNode.parentNode;if(!c||!e)return!1;var g=d.internalData.currentVideoElement;g&&g.pause();if("video"===c.getAttribute("data-type")){var h=c.getElementsByTagName("video")[0];if(!h)return d.internalData.currentVideoElement=!1;c=function(){h.duration&&y(e.getElementsByTagName("b")[0].style,"AnimationDuration","".concat(h.duration,"s"))};c();h.addEventListener("loadedmetadata",c);d.internalData.currentVideoElement=h;h.play();b.target&&P(h,f)}else d.internalData.currentVideoElement=!1},T=function(){var a=d.internalData.currentVideoElement;if(a)try{a.pause()}catch(b){}},P=function(a,b){a.muted=!1;a.volume=1;a.removeAttribute("muted");a.play();a.paused&&(a.muted=!0,a.play());b&&b.classList.remove("paused")},Q=function(a,b){try{if(h("localStorage")){var c="zuck-".concat(p,"-").concat(a);l.localStorage[c]=JSON.stringify(b)}}catch(m){}};d.data={};d.internalData={};d.internalData.seenItems=function(a){return h("localStorage")?(a="zuck-".concat(p,"-").concat(a),l.localStorage[a]?JSON.parse(l.localStorage[a]):!1):!1}("seenItems")||{};d.add=d.update=function(a,b){var c=e(a,"id"),m=f("#".concat(p,' [data-id="').concat(c,'"]')),k="",g=e(a,"items"),l=!1;d.data[c]={};m?l=m:(l=v.createElement("div"),l.className="story");!1===a.seen&&(d.internalData.seenItems[c]=!1,Q("seenItems",d.internalData.seenItems));l.setAttribute("data-id",c);l.setAttribute("data-photo",e(a,"photo"));l.setAttribute("data-last-updated",e(a,"lastUpdated"));k=!1;g[0]&&(k=g[0].preview||"");k='<a href="'.concat(e(a,"link"),'"><span class="img"><u style="background-image:url(').concat(h("avatars")||!k||""===k?e(a,"photo"):k,')"></u></span><span class="info"><strong>').concat(e(a,"name"),'</strong><span class="time">').concat(G(e(a,"lastUpdated")),'</span></span></a><ul class="items"></ul>');l.innerHTML=k;R(l);m||(b?w.appendChild(l):E(w,l));t(g,function(a,e){d.addItem(c,e,b)});b||L()};d.next=function(){z.next()};d.remove=function(a){a=f("#".concat(p,' > [data-id="').concat(a,'"]'));a.parentNode.removeChild(a)};d.addItem=function(a,b,c){a=f("#".concat(p,' > [data-id="').concat(a,'"]'));var d=v.createElement("li");d.className=e(b,"seen")?"seen":"";d.setAttribute("data-id",e(b,"id"));d.innerHTML='<a href="'.concat(e(b,"src"),'" data-link="').concat(e(b,"link"),'" data-linkText="').concat(e(b,"linkText"),'" data-time="').concat(e(b,"time"),'" data-type="').concat(e(b,"type"),'" data-length="').concat(e(b,"length"),'"><img src="').concat(e(b,"preview"),'"></a>');b=a.querySelectorAll(".items")[0];c?b.appendChild(d):E(b,d);U(a)};d.removeItem=function(a,b){var c=f("#".concat(p,' > [data-id="').concat(a,'"] [data-id="').concat(b,'"]'));w.parentNode.removeChild(c)};d.navigateItem=d.nextItem=function(a,b){var c=d.internalData.currentStory,e=d.data[c].currentItem,k=f('#zuck-modal .story-viewer[data-story-id="'.concat(c,'"]')),g="previous"===a?-1:1;if(!k||1===k.touchMove)return!1;var l=k.querySelectorAll('[data-index="'.concat(e,'"]')),p=l[0],r=l[1],v=k.querySelectorAll('[data-index="'.concat(e+g,'"]')),w=v[0],n=v[1];k&&w&&n?(e=(e=h("callbacks","onNavigateItem"))?h("callbacks","onNavigateItem"):h("callbacks","onNextItem"),e(c,n.getAttribute("data-story-id"),function(){"previous"===a?(p.classList.remove("seen"),r.classList.remove("seen")):(p.classList.add("seen"),r.classList.add("seen"));p.classList.remove("active");r.classList.remove("active");w.classList.remove("seen");w.classList.add("active");n.classList.remove("seen");n.classList.add("active");t(k.querySelectorAll(".time"),function(a,b){b.innerText=G(n.getAttribute("data-time"))});d.data[c].currentItem+=g;D(v,b)})):k&&"previous"!==a&&z.next(b)};return function(){f("#".concat(p," .story"))&&t(w.querySelectorAll(".story"),function(a,b){R(b,!0)});h("backNative")&&(l.location.hash==="#!".concat(p)&&(l.location.hash=""),l.addEventListener("popstate",function(a){l.location.hash!=="#!".concat(p)&&(l.location.hash="")},!1));t(h("stories"),function(a,b){d.add(b,!0)});L();var a=h("avatars")?"user-icon":"story-preview",b=h("list")?"list":"carousel";w.className="stories ".concat(a," ").concat(b," ").concat("".concat(h("skin")).toLowerCase());return d}()};r.buildItem=function(l,r,v,d,f,e,t,y,B){return{id:l,type:r,length:v,src:d,preview:f,link:e,linkText:t,seen:y,time:B}};return l.ZuckitaDaGalera=l.Zuck=r}();"function"===typeof define&&define.amd?define(function(){return r}):"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=r),exports.ZuckJS=r):l.ZuckJS=r})(window)
