const swiper = new Swiper('.players__slider', {
    loop: true,
    slidesPerView: "3",
    spaceBetween: 20,  
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
          },
        480: {
            slidesPerView: 1,
        },
        375: {
            slidesPerView: 1,
        },
        240: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
      },
});

var init = false;
var swiperTwo;
function swiperCard() {
  if (window.innerWidth < 376) {
    if (!init) {
      init = true;
      swiperTwo = new Swiper('.stages__slider', {
        loop: false,
        slidesPerView: "1", 
        pagination: {
            el: '.swiper-pagination',
          },  
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },      
      });
    }
  } else if (init) {
    swiperTwo.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener('resize', swiperCard);