function formatUserlistItem(a){var e=a.data("name")||"",b=a.data("rank"),f=a.data("profile")||{image:"",text:""},k=a.data("leader")||!1,g=a.data("icon")||!1,h=a.data("afk")||!1,c=$(a.children()[1]);c.removeClass();c.css("font-style","");c.addClass(getNameColor(b));b=e.replace(/[^\w-]/g,"\\$");c.addClass("userlist-"+b);a.find(".profile-box").remove();h?a.addClass("userlist_afk"):a.removeClass("userlist_afk");a.data("meta")&&a.data("meta").muted?a.addClass("userlist_muted"):a.removeClass("userlist_muted");
a.data("meta")&&a.data("meta").smuted?a.addClass("userlist_smuted"):a.removeClass("userlist_smuted");var d=null;c.unbind("mouseenter");c.unbind("mousemove");c.unbind("mouseleave");c.mouseenter(function(b){d&&d.remove();var c=b.clientY+5;b=b.clientX;d=$("<div/>").addClass("profile-box linewrap").css("top",c+"px").appendTo(a);f.image&&$("<img/>").addClass("profile-image").attr("src",f.image).appendTo(d);$("<strong/>").text(e).appendTo(d);c=a.data("meta")||{};c.ip&&($("<br/>").appendTo(d),$("<em/>").text(c.ip).appendTo(d));
c.aliases&&($("<br/>").appendTo(d),$("<em/>").text("aliases: "+c.aliases.join(", ")).appendTo(d));$("<hr/>").css("margin-top","5px").css("margin-bottom","5px").appendTo(d);$("<p/>").text(f.text).appendTo(d);$("body").hasClass("synchtube")&&(b-=d.outerWidth());d.css("left",b+"px")});c.mousemove(function(a){var b=a.clientY+5;a=a.clientX;$("body").hasClass("synchtube")&&(a-=d.outerWidth());d.css("left",a+"px").css("top",b+"px")});c.mouseleave(function(){d.remove()});b=a.children()[0];b.innerHTML="";
k&&$("<span/>").addClass("glyphicon glyphicon-star-empty").appendTo(b);h&&(c.css("font-style","italic"),$("<span/>").addClass("glyphicon glyphicon-time").appendTo(b));g&&$("<span/>").addClass("glyphicon "+g).prependTo(b)}function userlist(a){var e=Array.prototype.slice.call($("#userlist").children()).map(function(a){return a.children[1].innerHTML});if(a)return e;a={};for(var b=e.length-1;0<=b;b--)a[e[b]]=findUserlistItem(e[b]).data();return a}
(function(){for(var a=userlist(!0),e=a.length-1;0<=e;e--)findUserlistItem(a[e]).find("span:contains("+a[e]+")").addClass("userlist-"+a[e])})();