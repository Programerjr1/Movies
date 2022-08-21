document.querySelector('#menu-btn').onclick=()=>{
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('#menu-btn').classList.toggle('bx-x');
}
// window.addEventListener('scroll',function(){
//   document.querySelector('#menu-btn').classList.toggle('navigation',window.scrollY>0);
// });
var swiper = new Swiper(".box-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });

$(window).scroll(function(){
  if($(document).scrollTop()>20){
    $('nav').addClass('fix-icon');
  }
  else{
    $('nav').removeClass('fix-icon');
  }
})
