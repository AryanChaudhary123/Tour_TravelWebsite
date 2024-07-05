const swiper = new Swiper('.swiper', {
    slidesPerView: 1, // Corrected typo in "slidesPerView"
    effect: "creative",
    creativeEffect: {
        prev: {
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },       
    },
    loop: true,
    direction: "horizontal", // Corrected typo in "direction"
    autoplay: {
        delay: 5000,
    },
    speed: 400,
    spaceBetween: 100,
});
    
const swiper3 = new Swiper(".swiper3", {
    slidesPerView:1, 
    spaceBetween: 95,
    slidesPerGroup: 1,
    fade: true,
    loop: true,
    centeredSlides: true, // Corrected option name
    grabCursor: true,
    loopFillGroupWithBlank: true, // Corrected option name
    autoplay: {
        delay: 5000,
    },
    speed: 400,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 2,
        },
    },
});
const swiper4 = new Swiper(".swiper4", {
    slidesPerView:0, 
    spaceBetween: 95,
    slidesPerGroup: 1,
    fade: true,
    loop: true,
    centeredSlides: true, // Corrected option name
    grabCursor: true,
    loopFillGroupWithBlank: true, // Corrected option name
    autoplay: {
        delay: 5000,
    },
    speed: 400,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        968: {
            slidesPerView: 1,
        },
    },
});




