$(function(){let loadFlag=!1;const openSearch=function(){var path;$("body").css({width:"100%",overflow:"hidden"}),$("#local-search").css("display","block"),$("#local-search-input input").focus(),$("#search-mask").fadeIn(),loadFlag||(path=GLOBAL_CONFIG.localSearch.path,$.ajax({url:GLOBAL_CONFIG.root+path,dataType:"xml",success:function(xmlResponse){const datas=$("entry",xmlResponse).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get(),$input=$("#local-search-input input")[0],$resultContent=$("#local-hits")[0];$input.addEventListener("input",function(){let str='<div class="search-result-list">';const keywords=this.value.trim().toLowerCase().split(/[\s]+/);if($resultContent.innerHTML="",this.value.trim().length<=0)return void $(".local-search-stats__hr").hide();let count=0;datas.forEach(function(data){let isMatch=!0;data.title&&""!==data.title.trim()||(data.title="Untitled");let dataTitle=data.title.trim().toLowerCase();const dataContent=data.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),dataUrl=data.url;let indexTitle=-1,indexContent=-1,firstOccur=-1;if(""!==dataTitle||""!==dataContent?keywords.forEach(function(keyword,i){indexTitle=dataTitle.indexOf(keyword),indexContent=dataContent.indexOf(keyword),indexTitle<0&&indexContent<0?isMatch=!1:(indexContent<0&&(indexContent=0),0===i&&(firstOccur=indexContent))}):isMatch=!1,isMatch){const content=data.content.trim().replace(/<[^>]+>/g,"");if(firstOccur>=0){let start=firstOccur-30,end=firstOccur+100;start<0&&(start=0),0===start&&(end=100),end>content.length&&(end=content.length);let matchContent=content.substring(start,end);keywords.forEach(function(keyword){const regS=new RegExp(keyword,"gi");matchContent=matchContent.replace(regS,'<span class="search-keyword">'+keyword+"</span>"),dataTitle=dataTitle.replace(regS,'<span class="search-keyword">'+keyword+"</span>")}),str+='<div class="local-search__hit-item"><a href="'+dataUrl+'" class="search-result-title">'+dataTitle+"</a>",count+=1,$(".local-search-stats__hr").show(),""!==dataContent&&(str+='<p class="search-result">'+matchContent+"...</p>")}str+="</div>"}}),0===count&&(str+='<div id="local-search__hits-empty">'+GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/,this.value.trim())+"</div>"),str+="</div>",$resultContent.innerHTML=str,window.pjax&&window.pjax.refresh($resultContent)})}}),loadFlag=!0),document.addEventListener("keydown",function f(event){"Escape"===event.code&&(closeSearch(),document.removeEventListener("keydown",f))})},closeSearch=function(){$("body").css({width:"",overflow:""}),$("#local-search").css({animation:"search_close .5s"}),setTimeout(function(){$("#local-search").css({animation:"",display:"none"})},500),$("#search-mask").fadeOut()},searchClickFn=()=>{$("a.social-icon.search").on("click",openSearch),$("#search-mask, .search-close-button").on("click",closeSearch)};searchClickFn(),window.addEventListener("pjax:success",function(){$("#local-search").is(":visible")&&closeSearch(),searchClickFn()})});