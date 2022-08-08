$(document).scroll(function(){
if($(document).width()< 1024)
return false;

if($(document).scrollTop()> $('.full-page').height() / 2)
$("header").addClass("fixed");
else
$("header").removeClass("fixed");
});

$('.up-button').on('click',function(){
    $('html, body').animate({
        scrollTop: 0
    }, "slow");
});