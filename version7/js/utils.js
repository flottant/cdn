HTMLElement.prototype.wrap=function(wrapper){this.parentNode.insertBefore(wrapper,this),this.parentNode.removeChild(this),wrapper.appendChild(this)},"function"!=typeof DOMTokenList.prototype.replace&&(DOMTokenList.prototype.replace=function(remove,add){this.remove(remove),this.add(add)}),NexT.utils={wrapImageWithFancyBox:function(){document.querySelectorAll(".post-body :not(a) > img, .post-body > img").forEach(element=>{const $image=$(element),imageLink=$image.attr("data-src")||$image.attr("src"),$imageWrapLink=$image.wrap(`<a class="fancybox fancybox.image" href="${imageLink}" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>`).parent("a");$image.is(".post-gallery img")?$imageWrapLink.attr("data-fancybox","gallery").attr("rel","gallery"):$image.is(".group-picture img")?$imageWrapLink.attr("data-fancybox","group").attr("rel","group"):$imageWrapLink.attr("data-fancybox","default").attr("rel","default");const imageTitle=$image.attr("title")||$image.attr("alt");imageTitle&&($imageWrapLink.append(`<p class="image-caption">${imageTitle}</p>`),$imageWrapLink.attr("title",imageTitle).attr("data-caption",imageTitle))}),$.fancybox.defaults.hash=!1,$(".fancybox").fancybox({loop:!0,helpers:{overlay:{locked:!1}}})},registerExtURL:function(){document.querySelectorAll("span.exturl").forEach(element=>{const link=document.createElement("a");link.href=decodeURIComponent(atob(element.dataset.url).split("").map(c=>"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)).join("")),link.rel="noopener external nofollow noreferrer",link.target="_blank",link.className=element.className,link.title=element.title,link.innerHTML=element.innerHTML,element.parentNode.replaceChild(link,element)})},registerCopyCode:function(){let figure=document.querySelectorAll("figure.highlight");0===figure.length&&(figure=document.querySelectorAll("pre")),figure.forEach(element=>{if(element.querySelectorAll(".code .line span").forEach(span=>{span.classList.forEach(name=>{span.classList.replace(name,`hljs-${name}`)})}),!CONFIG.copycode)return;element.insertAdjacentHTML("beforeend",'<div class="copy-btn"><i class="fa fa-copy fa-fw"></i></div>');const button=element.querySelector(".copy-btn");button.addEventListener("click",()=>{const code=(element.querySelector(".code")||element.querySelector("code")).innerText,ta=document.createElement("textarea");ta.style.top=window.scrollY+"px",ta.style.position="absolute",ta.style.opacity="0",ta.readOnly=!0,ta.value=code,document.body.append(ta),ta.select(),ta.setSelectionRange(0,code.length),ta.readOnly=!1;const result=document.execCommand("copy");button.querySelector("i").className=result?"fa fa-check-circle fa-fw":"fa fa-times-circle fa-fw",ta.blur(),button.blur(),document.body.removeChild(ta)}),element.addEventListener("mouseleave",()=>{setTimeout(()=>{button.querySelector("i").className="fa fa-copy fa-fw"},300)})})},wrapTableWithBox:function(){document.querySelectorAll("table").forEach(element=>{const box=document.createElement("div");box.className="table-container",element.wrap(box)})},registerVideoIframe:function(){document.querySelectorAll("iframe").forEach(element=>{if(["www.youtube.com","player.vimeo.com","player.youku.com","player.bilibili.com","www.tudou.com"].some(host=>element.src.includes(host))&&!element.parentNode.matches(".video-container")){const box=document.createElement("div");box.className="video-container",element.wrap(box);const width=Number(element.width),height=Number(element.height);width&&height&&(box.style.paddingTop=height/width*100+"%")}})},registerScrollPercent:function(){const backToTop=document.querySelector(".back-to-top"),readingProgressBar=document.querySelector(".reading-progress-bar");window.addEventListener("scroll",()=>{if(backToTop||readingProgressBar){const contentHeight=document.body.scrollHeight-window.innerHeight,scrollPercent=contentHeight>0?Math.min(100*window.scrollY/contentHeight,100):0;backToTop&&(backToTop.classList.toggle("back-to-top-on",Math.round(scrollPercent)>=5),backToTop.querySelector("span").innerText=Math.round(scrollPercent)+"%"),readingProgressBar&&(readingProgressBar.style.width=scrollPercent.toFixed(2)+"%")}if(!Array.isArray(NexT.utils.sections))return;let index=NexT.utils.sections.findIndex(element=>element&&element.getBoundingClientRect().top>0);-1===index?index=NexT.utils.sections.length-1:index>0&&index--,this.activateNavByIndex(index)}),backToTop&&backToTop.addEventListener("click",()=>{window.anime({targets:document.scrollingElement,duration:500,easing:"linear",scrollTop:0})})},registerTabsTag:function(){document.querySelectorAll(".tabs ul.nav-tabs .tab").forEach(element=>{element.addEventListener("click",event=>{if(event.preventDefault(),element.classList.contains("active"))return;[...element.parentNode.children].forEach(target=>{target.classList.toggle("active",target===element)});const tActive=document.getElementById(element.querySelector("a").getAttribute("href").replace("#",""));[...tActive.parentNode.children].forEach(target=>{target.classList.toggle("active",target===tActive)}),tActive.dispatchEvent(new Event("tabs:click",{bubbles:!0}))})}),window.dispatchEvent(new Event("tabs:register"))},registerCanIUseTag:function(){window.addEventListener("message",({data:data})=>{if("string"==typeof data&&data.includes("ciu_embed")){const featureID=data.split(":")[1],height=data.split(":")[2];document.querySelector(`iframe[data-feature=${featureID}]`).style.height=parseInt(height,10)+5+"px"}},!1)},registerActiveMenuItem:function(){document.querySelectorAll(".menu-item a[href]").forEach(target=>{const isSamePath=target.pathname===location.pathname||target.pathname===location.pathname.replace("index.html",""),isSubPath=!CONFIG.root.startsWith(target.pathname)&&location.pathname.startsWith(target.pathname);target.classList.toggle("menu-item-active",target.hostname===location.hostname&&(isSamePath||isSubPath))})},registerLangSelect:function(){document.querySelectorAll(".lang-select").forEach(sel=>{sel.value=CONFIG.page.lang,sel.addEventListener("change",()=>{const target=sel.options[sel.selectedIndex];document.querySelectorAll(".lang-select-label span").forEach(span=>{span.innerText=target.text}),window.location.href=target.dataset.href})})},registerSidebarTOC:function(){this.sections=[...document.querySelectorAll(".post-toc li a.nav-link")].map(element=>{const target=document.getElementById(decodeURI(element.getAttribute("href")).replace("#",""));return element.addEventListener("click",event=>{event.preventDefault();const offset=target.getBoundingClientRect().top+window.scrollY;window.anime({targets:document.scrollingElement,duration:500,easing:"linear",scrollTop:offset+10})}),target})},activateNavByIndex:function(index){const target=document.querySelectorAll(".post-toc li a.nav-link")[index];if(!target||target.classList.contains("active-current"))return;document.querySelectorAll(".post-toc .active").forEach(element=>{element.classList.remove("active","active-current")}),target.classList.add("active","active-current");let parent=target.parentNode;for(;!parent.matches(".post-toc");)parent.matches("li")&&parent.classList.add("active"),parent=parent.parentNode;const tocElement=document.querySelector(".post-toc-wrap");window.anime({targets:tocElement,duration:200,easing:"linear",scrollTop:tocElement.scrollTop-tocElement.offsetHeight/2+target.getBoundingClientRect().top-tocElement.getBoundingClientRect().top})},supportsPDFs:function(){const ua=navigator.userAgent,isFirefoxWithPDFJS=ua.includes("irefox")&&parseInt(ua.split("rv:")[1].split(".")[0],10)>18,supportsPdfMimeType=void 0!==navigator.mimeTypes["application/pdf"],isIOS=/iphone|ipad|ipod/i.test(ua.toLowerCase());return isFirefoxWithPDFJS||supportsPdfMimeType&&!isIOS},getComputedStyle:function(element){const clone=element.cloneNode(!0);clone.style.position="absolute",clone.style.visibility="hidden",clone.style.display="block",element.parentNode.appendChild(clone);const height=clone.clientHeight;return element.parentNode.removeChild(clone),height},initSidebarDimension:function(){const sidebarNav=document.querySelector(".sidebar-nav"),sidebarb2t=document.querySelector(".sidebar-inner .back-to-top"),sidebarNavHeight=sidebarNav?sidebarNav.offsetHeight:0,sidebarb2tHeight=sidebarb2t?sidebarb2t.offsetHeight:0,sidebarOffset=CONFIG.sidebar.offset||12;let sidebarSchemePadding=2*CONFIG.sidebar.padding+sidebarNavHeight+sidebarb2tHeight;"Pisces"!==CONFIG.scheme&&"Gemini"!==CONFIG.scheme||(sidebarSchemePadding+=2*sidebarOffset);const sidebarWrapperHeight=document.body.offsetHeight-sidebarSchemePadding+"px";document.documentElement.style.setProperty("--sidebar-wrapper-height",sidebarWrapperHeight)},updateSidebarPosition:function(){if(NexT.utils.initSidebarDimension(),window.screen.width<992||"Pisces"===CONFIG.scheme||"Gemini"===CONFIG.scheme)return;const hasTOC=document.querySelector(".post-toc");let display=CONFIG.page.sidebar;"boolean"!=typeof display&&(display="always"===CONFIG.sidebar.display||"post"===CONFIG.sidebar.display&&hasTOC),display&&window.dispatchEvent(new Event("sidebar:show"))},getScript:function(url,callback,condition){if(condition)callback();else{let script=document.createElement("script");script.onload=script.onreadystatechange=function(_,isAbort){(isAbort||!script.readyState||/loaded|complete/.test(script.readyState))&&(script.onload=script.onreadystatechange=null,script=void 0,!isAbort&&callback&&setTimeout(callback,0))},script.src=url,document.head.appendChild(script)}},loadComments:function(selector,callback){const element=document.querySelector(selector);if(!CONFIG.comments.lazyload||!element)return void callback();const intersectionObserver=new IntersectionObserver((entries,observer)=>{entries[0].isIntersecting&&(callback(),observer.disconnect())});return intersectionObserver.observe(element),intersectionObserver}};