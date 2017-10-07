(function ($) {
    "use strict";

    $(document).ready(function () {
        var $IntroAnimation = $("#IntroAnimation");

        var canvas = {
            w: $IntroAnimation.outerWidth(),
            h: $IntroAnimation.outerHeight()
        };

        var pos = {
            x: 0,
            y: 0
        };

        var getOptions = function (pos, level) {
            return {
                "top": "calc(50% + " + pos.y * 0.2 * (level / 3) + "px)",
                "left": "calc(50% + " + pos.x * 0.3 * (level / 3) + "px)"
            }
        };

        $(window).on("resize", function () {
            canvas.w = $IntroAnimation.outerWidth();
            canvas.h = $IntroAnimation.outerHeight();
        });

        // var animationTimeout = null;
        //
        // $IntroAnimation.mousemove(function (ev) {
        //     if (animationTimeout) {
        //         return;
        //     }
        //
        //     animationTimeout = setTimeout(function () {
        //         pos.x = ev.pageX - (canvas.w / 2);
        //         pos.y = ev.pageY - (canvas.h / 2);
        //
        //         $(".intro-frame").css(getOptions(pos, 1));
        //         $(".intro-frame-accent").css(getOptions(pos, 1.2));
        //         $(".intro-title").css(getOptions(pos, 1.1));
        //
        //         $(".intro-portrait-back").css(getOptions(pos, 1.05));
        //         $(".intro-portrait-face").css(getOptions(pos, 1.1));
        //         $(".intro-portrait-accent-left").css(getOptions(pos, 1.2));
        //         $(".intro-portrait-accent-right").css(getOptions(pos, 1.2));
        //
        //         $(".intro-sub-accent-left").css(getOptions(pos, 1.2));
        //         $(".intro-sub-accent-right").css(getOptions(pos, 1.2));
        //         $(".intro-sub-title").css(getOptions(pos, 1.1));
        //         $(".intro-sub-quote").css(getOptions(pos, 1.15));
        //         $(".intro-sub-accent").css(getOptions(pos, 1.2));
        //
        //         clearTimeout(animationTimeout);
        //         animationTimeout=null;
        //     }, 1000/60);
        // });
    });

})(jQuery);
