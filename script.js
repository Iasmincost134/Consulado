new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //breakpoints responsivo 
    breakpoints: {
        0: {
            slidesPerview: 1
        },
        768: {
            slidesPerview: 2
        },
        1024: {
            slidesPerview: 3
        },
    }
  });