"use strict";function addPhotoFigcaption(){$("#article-container img").not(".justified-gallery img").each(function(t,e){var i=$(e);if(i.attr("alt")){var n=$('<div class="img-alt is-center">'+i.attr("alt")+"</div>");i.after(n)}})}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},blogNameWidth=$("#blog_name").width(),menusWidth=$(".menus").width(),sidebarWidth=$("#sidebar").width(),adjustMenu=function(t){var e=$("#nav"),i=void 0;i=0===t||(1===t?blogNameWidth+menusWidth>e.width()-sidebarWidth-30:blogNameWidth+menusWidth>e.width()-30),i?(e.find(".toggle-menu").addClass("is-visible-inline"),e.find(".menus_items").addClass("is-invisible"),e.find("#search_button span").addClass("is-invisible")):(e.find(".toggle-menu").removeClass("is-visible-inline"),e.find(".menus_items").removeClass("is-invisible"),e.find("#search_button span").removeClass("is-invisible"))},initAdjust=function(){adjustMenu(window.innerWidth<768?0:2),$("#nav").css({opacity:"1",animation:"headerNoOpacity 1s"})},OpenSidebarAuto=function(){window.innerWidth>1024&&$("#toggle-sidebar").hasClass("on")&&setTimeout(function(){openSidebar()},400)},closeSidebar=function(){$("#sidebar").removeClass("tocOpenPc").animate({left:"-300px"},400),$(".menus").animate({paddingRight:0},400),$("#body-wrap").animate({paddingLeft:0},400),$("#toggle-sidebar").css({transform:"rotateZ(0deg)",color:"#1F2D3D",opacity:"1"}),setTimeout(function(){adjustMenu(2)},400)},openSidebar=function(){adjustMenu(1),$("#sidebar").addClass("tocOpenPc").animate({left:0},400),$(".menus").animate({paddingRight:300},400),$("#body-wrap").animate({paddingLeft:300},400),$("#toggle-sidebar").css({transform:"rotateZ(180deg)",color:"#99a9bf",opacity:"1"})},toggleSidebar=function(){$("#toggle-sidebar").on("click",function(){var t=$(this).hasClass("on");t?$(this).removeClass("on"):$(this).addClass("on"),t?closeSidebar():openSidebar()})},sidebarFn=function(){function t(t){sidebarPaddingR(),s.css("overflow","hidden"),a.fadeIn(),"menu"===t&&(i.removeClass("close").addClass("open"),n.addClass("open")),"toc"===t&&(o.removeClass("close").addClass("open"),c.addClass("tocOpenMobile").css({transform:"translate3d(-100%,0,0)",left:""}))}function e(t){s.css({overflow:"","padding-right":""}),a.fadeOut(),"menu"===t&&(i.removeClass("open").addClass("close"),n.removeClass("open")),"toc"===t&&(o.removeClass("open").addClass("close"),c.removeClass("tocOpenMobile").css({transform:""}))}var i=$(".toggle-menu"),n=$("#mobile-sidebar-menus"),o=$("#mobile-toc-button"),a=$("#menu_mask"),s=$("body"),c=$("#sidebar");i.on("click",function(){t("menu")}),o.on("click",function(){t("toc")}),a.on("click touchstart",function(t){i.hasClass("open")&&e("menu"),o.hasClass("open")&&e("toc")}),$(window).on("resize",function(t){i.is(":visible")||i.hasClass("open")&&e("menu")}),window.matchMedia("(max-width: 1024px)").addListener(function(t){t.matches?c.hasClass("tocOpenPc")&&closeSidebar():($("#toggle-sidebar").hasClass("on")&&openSidebar(),o.hasClass("open")&&e("toc"))}),c.find(".toc-link").on("click",function(t){window.innerWidth<=1024?e("toc"):(t.preventDefault(),scrollToDest(decodeURI($(this).attr("href"))))})},scrollDownInIndex=function(){$("#scroll_down").on("click",function(){scrollToDest("#content-inner")})},addHighlightTool=function(){var t=$("figure.highlight"),e=GLOBAL_CONFIG.highlightCopy,i=GLOBAL_CONFIG.highlightLang,n=GLOBAL_CONFIG_SITE.isHighlightShrink;if(t.length&&(e||i||void 0!==n)){var o="",a="",s=!0===n?"closed":"";if(void 0!==n&&(o='<i class="fas fa-angle-down expand '+s+'"></i>'),e&&(a='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),i){var c=void 0;t.each(function(){var t=$(this);"plain"!==(c=t.attr("class").split(" ")[1])&&void 0!==c||(c="Code");var e='<div class="code-lang">'+c+"</div>";t.prepend('<div class="highlight-tools '+s+'">'+(o+e+a)+"</div>")})}else t.prepend('<div class="highlight-tools '+s+'">'+(o+a)+"</div>");if(void 0!==n&&t.find(".highlight-tools >.expand").on("click",function(){var t=$(this),e=t.parent().nextAll();t.toggleClass("closed"),e.is(":visible")?e.css("display","none"):e.css("display","block")}),e){var d=function(t,e){document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?snackbarShow(GLOBAL_CONFIG.copy.success):$(e).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).animate({opacity:1},450,function(){setTimeout(function(){$(e).prev(".copy-notice").animate({opacity:0},650)},400)})):void 0!==GLOBAL_CONFIG.Snackbar?snackbarShow(GLOBAL_CONFIG.copy.noSupport):$(e).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport)};t.find(".highlight-tools >.copy-button").on("click",function(){var t=$(this).parents("figure.highlight");t.addClass("copy-true");var e=window.getSelection(),i=document.createRange();i.selectNodeContents(t.find("table .code pre")[0]),e.removeAllRanges(),e.addRange(i);e.toString();d(0,this),e.removeAllRanges(),t.removeClass("copy-true")})}}},detectJgJsLoad=!1,runJustifiedGallery=function(){var t=$(".justified-gallery");if(t.length){var e=t.find("img");e.unwrap(),e.length&&e.each(function(t,e){$(e).attr("data-lazy-src")&&$(e).attr("src",$(e).attr("data-lazy-src")),$(e).wrap("<div></div>")}),detectJgJsLoad?initJustifiedGallery(t):($("head").append('<link rel="stylesheet" type="text/css" href="'+GLOBAL_CONFIG.justifiedGallery.css+'">'),$.getScript(""+GLOBAL_CONFIG.justifiedGallery.js,function(){initJustifiedGallery(t)}),detectJgJsLoad=!0)}},addLightBox=function(){var t=GLOBAL_CONFIG.medium_zoom;if(GLOBAL_CONFIG.fancybox)$("#article-container img:not(.gallery-group-img)").not($("a>img")).each(function(t,e){var i=$(e).attr("data-lazy-src")?$(e).attr("data-lazy-src"):$(e).attr("src"),n=$(e).attr("alt")?$(e).attr("alt"):"";$(e).wrap('<a href="'+i+'" data-fancybox="group" data-caption="'+n+'" class="fancybox"></a>')}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1});else if(t){var e=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"));e.on("open",function(t){var i="dark"===$(document.documentElement).attr("data-theme")?"#121212":"#fff";e.update({background:i})})}},scrollFn=function(){function t(t){var i=t>e;return e=t,i}var e=0,i=!0,n=$("#rightside"),o=$("#nav"),a="function"==typeof chatBtnHide,s="function"==typeof chatBtnShow;$(window).scroll(throttle(function(e){var c=$(this).scrollTop(),d=t(c);c>56?(d?(o.hasClass("visible")&&o.removeClass("visible"),s&&!0===i&&(chatBtnHide(),i=!1)):(o.hasClass("visible")||o.addClass("visible"),a&&!1===i&&(window.chatBtnShow(),i=!0)),o.addClass("fixed"),"0"===n.css("opacity")&&n.css({opacity:"1",transform:"translateX(-38px)"})):(0===c&&o.removeClass("fixed").removeClass("visible"),n.css({opacity:"",transform:""}))},200))},tocFn=function(){$(".toc-child").hide(),$(window).scroll(throttle(function(t){var i=$(this).scrollTop();e(i),o(i),a(i)},100));var t=function(t){t.is(":visible")||t.fadeIn(400)},e=function(t){var e=$("#article-container").height(),i=$(window).height(),n=e>i?e-i:$(document).height()-i,o=t/n,a=Math.round(100*o),s=a>100?100:a<=0?0:a;$(".progress-num").text(s),$(".sidebar-toc__progress-bar").animate({width:s+"%"},100)},i=GLOBAL_CONFIG.isanchor,n=function(t){window.history.replaceState&&t!==window.location.hash&&window.history.replaceState(void 0,void 0,t)},o=function(e){if(0===$(".toc-link").length)return!1;var o=$("#article-container").find("h1,h2,h3,h4,h5,h6"),a="";o.each(function(){var t=$(this);e>t.offset().top-25&&(a="#"+encodeURI($(this).attr("id")))}),""===a&&($(".toc-link").removeClass("active"),$(".toc-child").hide());var s=$(".toc-link.active");if(a&&s.attr("href")!==a){i&&n(a),$(".toc-link").removeClass("active");var c=$('.toc-link[href="'+a+'"]');c.addClass("active");var d=c.parents(".toc-child"),r=d.length>0?d.last():c;t(r.closest(".toc-item").find(".toc-child")),r.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide()}},a=function(t){if($(".toc-link").hasClass("active")){var e=$(".active").offset().top,i=$("#sidebar .sidebar-toc__content").scrollTop();e>t+$(window).height()-100&&$("#sidebar .sidebar-toc__content").scrollTop(i+100),e<t+100&&$("#sidebar .sidebar-toc__content").scrollTop(i-100)}}},$rightsideEle=$("#rightside");$rightsideEle.on("click","#readmode",function(){$("body").toggleClass("read-mode")});var originFontSize=$("body").css("font-size");if($rightsideEle.on("click","#font_plus",function(){var t=parseFloat($("body").css("font-size"));t<20&&$("body").css("font-size",t+1)}),$rightsideEle.on("click","#font_minus",function(){var t=parseFloat($("body").css("font-size"));t>10&&$("body").css("font-size",t-1)}),$("#darkmode").length){var switchReadMode=function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),Cookies.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),Cookies.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day))};$rightsideEle.on("click","#darkmode",function(){switchReadMode(),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&$("#disqus_thread").children().length&&setTimeout(function(){return window.disqusReset()},200)})}$rightsideEle.on("click","#rightside_config",function(){return $("#rightside-config-hide").toggleClass("show")}),$rightsideEle.on("click","#go-up",function(){return scrollToDest("body")});var clickFnOfSubMenu=function(){$("#mobile-sidebar-menus .expand").on("click",function(){$(this).parents(".menus_item").find("> .menus_item_child").slideToggle(),$(this).toggleClass("closed")}),$(window).on("touchmove",function(t){var e=$("#nav .menus_item_child");e.is(":visible")&&e.css("display","none")})},addCopyright=function(){var t=GLOBAL_CONFIG.copyright;document.body.oncopy=function(e){e.preventDefault();var i=void 0,n=window.getSelection(0).toString();return i=n.length>t.limitCount?n+"\n\n\n"+t.languages.author+"\n"+t.languages.link+window.location.href+"\n"+t.languages.source+"\n"+t.languages.info:n,e.clipboardData?e.clipboardData.setData("text",i):window.clipboardData.setData("text",i)}},addRuntime=function(){var t=$("#webinfo-runtime-count");if(t.length){var e=t.attr("publish_date");t.text(diffDate(e)+" "+GLOBAL_CONFIG.runtime_unit)}},addTableWrap=function(){$("#article-container table").not($("figure.highlight > table")).each(function(){$(this).wrap('<div class="table-wrap"></div>')})},pushToBaidu=function(){var t=document.createElement("script"),e=window.location.protocol.split(":")[0];t.src="https"===e?"https://zz.bdstatic.com/linksubmit/push.js":"http://push.zhanzhang.baidu.com/push.js",t.dataset.pjax="";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i)},clickFnOfTagHide=function(){var t=$(".hide-button");t.length&&t.on("click",function(t){var e=$(this),i=$(this).next(".hide-content");e.toggleClass("open"),i.toggle(),e.hasClass("open")&&i.find(".justified-gallery").length>0&&initJustifiedGallery(i.find(".justified-gallery"))})},clickFnOfTabs=function(){$("#article-container .tabs").find(".tab > button").on("click",function(t){var e=$(this),i=e.parent();if(!i.hasClass("active")){var n=e.parents(".nav-tabs").next();i.siblings(".active").removeClass("active"),i.addClass("active");var o=e.attr("data-href");n.find("> .tab-item-content").removeClass("active"),n.find("> "+o).addClass("active");var a=n.find(o).find(".justified-gallery");a.length>0&&initJustifiedGallery(a)}})},toggleCardCategory=function(){$(".card-category-list-item.parent i").on("click",function(t){t.preventDefault();var e=$(this);e.toggleClass("expand"),e.parents(".parent").next().toggle()})},switchComments=function(){var t=!1;$("#switch-comments-btn").on("click",function(){$("#post-comment > .comment-wrap > div").each(function(){$(this).is(":visible")?$(this).hide():$(this).css({display:"block",animation:"tabshow .5s"})}),t||"function"!=typeof loadOtherComment||(t=!0,loadOtherComment())})},addPostOutdateNotice=function(){var t=GLOBAL_CONFIG.noticeOutdate,e=diffDate(GLOBAL_CONFIG_SITE.postUpdate);if(e>=t.limitDay){var i='<div class="post-outdate-notice">'+t.messagePrev+" "+e+" "+t.messageNext+"</div>";"top"===t.position?$("#article-container").prepend(i):$("#article-container").append(i)}};GLOBAL_CONFIG.islazyload&&(window.lazyLoadOptions={elements_selector:"img",threshold:0,data_src:"lazy-src"},window.addEventListener("LazyLoad::Initialized",function(t){window.lazyLoadInstance=t.detail.instance},!1));var unRefreshFn=function(){$(window).on("resize",function(){adjustMenu(window.innerWidth<768?0:$("#sidebar").hasClass("tocOpenPc")&&$("#nav").hasClass("fixed")?1:2)}),clickFnOfSubMenu(),void 0!==GLOBAL_CONFIG.copyright&&addCopyright(),GLOBAL_CONFIG.baiduPush&&pushToBaidu()},refreshFn=function(){initAdjust(),GLOBAL_CONFIG_SITE.isPost&&(OpenSidebarAuto(),toggleSidebar(),GLOBAL_CONFIG_SITE.isSidebar&&tocFn(),void 0!==GLOBAL_CONFIG.noticeOutdate&&addPostOutdateNotice()),sidebarFn(),GLOBAL_CONFIG_SITE.isHome&&scrollDownInIndex(),addHighlightTool(),GLOBAL_CONFIG.isPhotoFigcaption&&addPhotoFigcaption(),runJustifiedGallery(),addLightBox(),scrollFn(),GLOBAL_CONFIG.runtime&&addRuntime(),addTableWrap(),clickFnOfTagHide(),clickFnOfTabs(),toggleCardCategory(),switchComments()};$(function(){refreshFn(),unRefreshFn()});