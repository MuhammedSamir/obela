$(document).ready(function(){
//scrolling navebar
$(window).scroll(function(){
    if($(document).scrollTop() > 100){
        $('nav').addClass('black');
        
    }
    else{
        $('nav').removeClass('black');
    }
});
//add class active
$(document).on('click','.navbar-nav .nav-item',function(){
    $(this).addClass('active').siblings().removeClass('active');
});

//snooth scroll
$('a').smoothScroll();
  
});
//stratr swiper
 var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
