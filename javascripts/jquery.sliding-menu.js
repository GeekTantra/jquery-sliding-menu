(function(jQuery){
  jQuery.fn.slidingMenu = function(options) {
    options = jQuery.extend({
      backgroundClass: "Background", initialOpacity: 1, slideSpeed: 1, easing: 'linear', callback: function(){}, backgroundContent: '<div></div>'
    }, options);
    var slideTime = 200 * (1/options.slideSpeed);
    var initial_height = jQuery(this).find("li:eq(0)").find("a:eq(0)").outerHeight();
    var initial_width = jQuery(this).find("li:eq(0)").find("a:eq(0)").outerWidth();
    jQuery(this).prepend('<li class="'+options.backgroundClass+'" style="top:0px; left:0px; position: absolute; z-index: 0; display: none; width:'+initial_width+'px; height:'+initial_height+'px; ">'+options.backgroundContent+'</li>');
    jQuery(this).find("li a").hover(function(){
      var t = jQuery(this).position().top;
      var l = jQuery(this).position().left;
      var w = jQuery(this).outerWidth();
      var h = jQuery(this).outerHeight();
      jQuery(this).parents("ul:first").find("."+options.backgroundClass).stop().animate({
        opacity: options.initialOpacity, top: t, left: l, width: w, height: h
      }, slideTime, options.easing, options.callback );
    }, function(){
      jQuery(this).parents("ul:first").find("."+options.backgroundClass).stop().animate({
        opacity: "0"
      }, 500);
    });
    jQuery(this).find("li a").click(function(){
      jQuery(this).parents("ul:first").find("."+options.backgroundClass).stop().animate({
        opacity: "1"
      }, 100).animate({
        opacity: options.initialOpacity
      }, 300);
    });
  }
})(jQuery);
