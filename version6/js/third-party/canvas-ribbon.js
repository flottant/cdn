!function(){var script=document.getElementById("ribbon");if("false"!=script.getAttribute("mobile")||!/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){var q,t,config={z:attr(script,"zIndex",-1),a:attr(script,"alpha",.6),s:attr(script,"size",90),c:attr(script,"data-click",!0)},canvas=document.createElement("canvas"),g2d=canvas.getContext("2d"),pr=window.devicePixelRatio||1,width=window.innerWidth,height=window.innerHeight,f=config.s,m=Math,r=0,pi=2*m.PI,cos=m.cos,random=m.random;canvas.id="ribbon-canvas",canvas.width=width*pr,canvas.height=height*pr,g2d.scale(pr,pr),g2d.globalAlpha=config.a,canvas.style.cssText="opacity: "+config.a+";position:fixed;top:0;left:0;z-index: "+config.z+";width:100%;height:100%;pointer-events:none;",document.getElementsByTagName("body")[0].appendChild(canvas),"false"!==config.c&&(document.onclick=redraw,document.ontouchstart=redraw),redraw()}function attr(node,attr,default_value){return!0===default_value?node.getAttribute(attr)||default_value:Number(node.getAttribute(attr))||default_value}function redraw(){for(g2d.clearRect(0,0,width,height),q=[{x:0,y:.7*height+f},{x:0,y:.7*height-f}];q[1].x<width+f;)draw(q[0],q[1])}function draw(i,j){g2d.beginPath(),g2d.moveTo(i.x,i.y),g2d.lineTo(j.x,j.y);var k=j.x+(2*random()-.25)*f,n=function line(p){t=p+(2*random()-1.1)*f;return t>height||t<0?line(p):t}(j.y);g2d.lineTo(k,n),g2d.closePath(),r-=pi/-50,g2d.fillStyle="#"+(127*cos(r)+128<<16|127*cos(r+pi/3)+128<<8|127*cos(r+pi/3*2)+128).toString(16),g2d.fill(),q[0]=q[1],q[1]={x:k,y:n}}}();