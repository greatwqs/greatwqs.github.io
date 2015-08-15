/* 滚屏返回顶部、底部 */
jQuery(document).ready(function($){ //Begin jQuery
    // 滚屏返回顶部、底部
    $('.scroll_t').click(function () {
        $('html,body').animate({
            scrollTop: '0px'
        }, 800);
    });

    $('.scroll_b').click(function () {
        $('html,body').animate({
            scrollTop: $('.site-info').offset().top
        }, 800);
    });

})  //End jQuery