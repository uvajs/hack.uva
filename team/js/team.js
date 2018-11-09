/**
 * @Author: rahulbatra
 * @Date:   2018-10-31T11:09:42-04:00
 * @Filename: main.js
 * @Last modified by:   rahulbatra
 * @Last modified time: 2018-10-31T11:10:06-04:00
 */

// Timeline Stuff

"use strict";
! function(o) {
  var e = function(i) {
    var t = o(window).scrollTop(),
      e = o(window).scrollLeft(),
      n = o(window).scrollLeft() + o(window).width(),
      a = o(window).scrollTop() + o(window).height(),
      s = i.offset();
    return s.right = s.left + i.outerWidth(), s.bottom = s.top + i.outerHeight(), !(n < s.left || e > s.right || a < s.top || t > s.bottom)
  };
  o.fn.verticalTimeline = function(i) {
    var t = o.extend({
      startLeft: !0,
      alternate: !0,
      animate: !1,
      arrows: !0
    }, i);
    return this.each(function() {
      var i = o(this).children("div");
      o(this).addClass("vtimeline"), i.each(function() {
        var i = '<div class="vtimeline-point ' + o(this).attr("class") + '"><div class="vtimeline-block"></div></div>';
        o(this).addClass("vtimeline-content").wrap(i)
      }), o(this).find(".vtimeline-point").each(function() {
        if (o(this).prepend('<div class="vtimeline-icon"></div>'), o(this).find("[data-vticon=true]").length) {
          var i = o(this).find("[data-vticon=true]").html();
          o(this).find(".vtimeline-icon").append(i), o(this).find("[data-vticon=true]").remove()
        }
      }), t.alternate ? t.startLeft ? o(this).find(".vtimeline-point:odd").each(function() {
        o(this).find(".vtimeline-block").addClass("vtimeline-right")
      }) : o(this).find(".vtimeline-point:even").each(function() {
        o(this).find(".vtimeline-block").addClass("vtimeline-right")
      }) : o(this).find(".vtimeline-block").addClass("vtimeline-" + t.startSide), t.animate && o(this).find(".vtimeline-block").each(function() {
        var i = this;
        o(this).addClass("vt-animate-" + t.animate), e(o(this)) && o(this).removeClass("vt-animate-" + t.animate), o(window).on("scroll", function() {
          e(o(i)) ? o(i).removeClass("vt-animate-" + t.animate) : o(i).addClass("vt-animate-" + t.animate)
        })
      }), t.arrows || o(this).find(".vtimeline-block").addClass("vt-noarrows")
    })
  }
}(jQuery);

$('#timeline').verticalTimeline({
  startLeft: true,
  alternate: true,
  animate: "slide",
  arrows: false
});
