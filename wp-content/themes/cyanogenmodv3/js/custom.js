$(document).ready(function(){$.featureList($("#tabs li a"),$("#output li"),{start_item:0,});$(".device").tipTip({maxWidth:"auto",edgeOffset:10,defaultPosition:"top",delay:"200"});$(".blogpost").tipTip({maxWidth:"auto",edgeOffset:5,defaultPosition:"left",delay:"100"});$("#populace").easySlider({auto:true,continuous:true,vertical:true,pause:6000});});(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);$(document).ready(function(){function megaHoverOver(){$(this).find(".sub").stop().fadeTo('fast',1).show();(function($){jQuery.fn.calcSubWidth=function(){rowWidth=0;$(this).find("ul").each(function(){rowWidth+=$(this).width();});};})(jQuery);if($(this).find(".row").length>0){var biggestRow=0;$(this).find(".row").each(function(){$(this).calcSubWidth();if(rowWidth>biggestRow){biggestRow=rowWidth;}});$(this).find(".sub").css({'width':biggestRow});$(this).find(".row:last").css({'margin':'0'});}else{$(this).calcSubWidth();$(this).find(".sub").css({'width':rowWidth});}}
function megaHoverOut(){$(this).find(".sub").stop().fadeTo('fast',0,function(){$(this).hide();});}
var config={sensitivity:1,interval:10,over:megaHoverOver,timeout:10,out:megaHoverOut};$("ul#glavno li .sub").css({'opacity':'0'});$("ul#glavno li").hoverIntent(config);});