$(function(){
    //shop slide
    $('.head_shop').hover(function(){
        $(this).find('.head_tip').slideDown('slow');
    },function(){
        $(this).find('.head_tip').hide('slow');
    });
    //menu slide
    $('.menu_m > ul > li').hover(
    function (){ 
        $(this).find('#menu_nav').slideDown(300);
    },function(){
        $(this).find('#menu_nav').hide();
    });
    //banner slide
    $('.banner_l_ul>li').hover(function () { 
        $(this).find('.banner_l_nav').fadeIn('fast');
    },
    function(){
        $(this).find('.banner_l_nav').css({'display':'none'});
    }
    );
    //elec review
    $('.elec_r>ul>li').mouseover(function () { 
        $(this).find('.elec_review').slideDown('fast');
    });
    $('.elec_r>ul>li').mouseleave(function(){
        $(this).find('.elec_review').slideUp('fast');
    })
})