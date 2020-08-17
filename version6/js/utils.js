function debounce(func,wait,immediate){let timeout;return function(){const context=this,args=arguments,callNow=immediate&&!timeout;clearTimeout(timeout),timeout=setTimeout(function(){timeout=null,immediate||func.apply(context,args)},wait),callNow&&func.apply(context,args)}}function throttle(func,wait,options){let timeout,context,args,previous=0;options||(options={});const later=function(){previous=!1===options.leading?0:(new Date).getTime(),timeout=null,func.apply(context,args),timeout||(context=args=null)};return function(){const now=(new Date).getTime();previous||!1!==options.leading||(previous=now);const remaining=wait-(now-previous);context=this,args=arguments,remaining<=0||remaining>wait?(timeout&&(clearTimeout(timeout),timeout=null),previous=now,func.apply(context,args),timeout||(context=args=null)):timeout||!1===options.trailing||(timeout=setTimeout(later,remaining))}}function sidebarPaddingR(){const innerWidth=window.innerWidth,clientWidth=document.body.clientWidth,paddingRight=innerWidth-clientWidth;innerWidth!==clientWidth&&$("body").css("padding-right",paddingRight)}function scrollToDest(name,offset=0){const scrollOffset=$(name).offset();$("body,html").animate({scrollTop:scrollOffset.top-offset})}function snackbarShow(text,showAction,duration){const sa=void 0!==showAction&&showAction,dur=void 0!==duration?duration:2e3,position=GLOBAL_CONFIG.Snackbar.position,bg="light"===document.documentElement.getAttribute("data-theme")?GLOBAL_CONFIG.Snackbar.bgLight:GLOBAL_CONFIG.Snackbar.bgDark;Snackbar.show({text:text,backgroundColor:bg,showAction:sa,duration:dur,pos:position})}const Cookies={get:function(name){const parts=`; ${document.cookie}`.split(`; ${name}=`);if(2===parts.length)return parts.pop().split(";").shift()},set:function(name,value,days){let expires="";if(days){const date=new Date;date.setTime(date.getTime()+24*days*60*60*1e3),expires="; expires="+date.toUTCString()}document.cookie=name+"="+(value||"")+expires+"; path=/"}},initJustifiedGallery=function(selector){selector.each(function(i,o){$(this).is(":visible")&&$(this).justifiedGallery({rowHeight:220,margins:4})})},diffDate=d=>{const dateNow=new Date,datePost=new Date(d.replace(/-/g,"/")),dateDiff=dateNow.getTime()-datePost.getTime();return Math.floor(dateDiff/864e5)},loadComment=(dom,callback)=>{if("IntersectionObserver"in window){const observerItem=new IntersectionObserver(entries=>{entries[0].isIntersecting&&(callback(),observerItem.disconnect())},{threshold:[0]});observerItem.observe(dom)}else callback()};