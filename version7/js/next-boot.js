NexT.boot={},NexT.boot.registerEvents=function(){NexT.utils.registerScrollPercent(),NexT.utils.registerCanIUseTag(),document.querySelector(".site-nav-toggle .toggle").addEventListener("click",event=>{event.currentTarget.classList.toggle("toggle-close");const siteNav=document.querySelector(".site-nav");if(!siteNav)return;const animateAction=document.body.classList.contains("site-nav-on"),height=NexT.utils.getComputedStyle(siteNav);siteNav.style.height=animateAction?height:0;const toggle=()=>document.body.classList.toggle("site-nav-on"),begin=()=>{siteNav.style.overflow="hidden"},complete=()=>{siteNav.style.overflow="",siteNav.style.height=""};window.anime(Object.assign({targets:siteNav,duration:200,height:animateAction?[height,0]:[0,height],easing:"linear"},animateAction?{begin:begin,complete:()=>{complete(),toggle()}}:{begin:()=>{begin(),toggle()},complete:complete}))});document.querySelectorAll(".sidebar-nav li").forEach((element,index)=>{element.addEventListener("click",()=>{if(element.matches(".sidebar-toc-active .sidebar-nav-toc, .sidebar-overview-active .sidebar-nav-overview"))return;const sidebar=document.querySelector(".sidebar-inner"),panel=document.querySelectorAll(".sidebar-panel"),activeClassName=["sidebar-toc-active","sidebar-overview-active"];window.anime({duration:200,targets:panel[1-index],easing:"linear",opacity:0,translateY:[0,-20],complete:()=>{sidebar.classList.replace(activeClassName[1-index],activeClassName[index]),window.anime({duration:200,targets:panel[index],easing:"linear",opacity:[0,1],translateY:[-20,0]})}})})}),window.addEventListener("resize",NexT.utils.initSidebarDimension),window.addEventListener("hashchange",()=>{const tHash=location.hash;if(""!==tHash&&!tHash.match(/%\S{2}/)){const target=document.querySelector(`.tabs ul.nav-tabs li a[href="${tHash}"]`);target&&target.click()}})},NexT.boot.refresh=function(){CONFIG.prism&&window.Prism.highlightAll(),CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox(),CONFIG.mediumzoom&&window.mediumZoom(".post-body :not(a) > img, .post-body > img",{background:"var(--content-bg-color)"}),CONFIG.lazyload&&window.lozad(".post-body img").observe(),CONFIG.pangu&&window.pangu.spacingPage(),CONFIG.exturl&&NexT.utils.registerExtURL(),NexT.utils.registerCopyCode(),NexT.utils.registerTabsTag(),NexT.utils.registerActiveMenuItem(),NexT.utils.registerLangSelect(),NexT.utils.registerSidebarTOC(),NexT.utils.wrapTableWithBox(),NexT.utils.registerVideoIframe()},NexT.boot.motion=function(){CONFIG.motion.enable&&NexT.motion.integrator.add(NexT.motion.middleWares.header).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar).add(NexT.motion.middleWares.footer).bootstrap(),NexT.utils.updateSidebarPosition()},document.addEventListener("DOMContentLoaded",()=>{NexT.boot.registerEvents(),NexT.boot.refresh(),NexT.boot.motion()});