/*const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
} {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
        
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const swiper = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like
swiper.slideNext();*/

const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: false,
    },
    loop: true,
    });

