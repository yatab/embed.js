"use strict";$(".left-nav a").click(function(a){a.preventDefault();var b=$(this).attr("href");$("html,body").animate({scrollTop:$(b).offset().top-70},"slow")});