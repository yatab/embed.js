"use strict";hljs.initHighlightingOnLoad();var data=[];$("h5").each(function(){data.push($(this).html())});var str="";$.each(data,function(){str+='<a href="#'+this+'"><li>'+this+"</li></a>"}),$(".left-nav ul").html(str),$(".left-nav a").click(function(a){a.preventDefault();var b=$(this).attr("href");$("html,body").animate({scrollTop:$(b).offset().top-70},"slow")});