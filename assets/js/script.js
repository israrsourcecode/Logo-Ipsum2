var swiper = new Swiper(".myWriterSwiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,



    cardsEffect: {
        slideShadows: false,
        rotate: false,
        perSlideOffset: 10,
        perSlideRotate: 0,
    },
});


/////////////////////////////
//// Our Essay Slider //////
///////////////////////////
var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 5,
    grabCursor: true,
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        // when window width is >= 1024px (large screens)
        1024: {
            slidesPerView: 2,
            spaceBetween: 20
        }
        // tablet and mobile will use the default slidesPerView: 1
    }
});



////////////////////////////////
//// Google Review Slider /////
//////////////////////////////
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    breakpoints: {
        // small phones
        320: {
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 8
        },
        // large phones / small tablets
        640: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 12
        },
        // tablets / small laptops
        768: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 16
        },
        // desktops
        1024: {
            slidesPerView: 4,
            centeredSlides: true,
            spaceBetween: 20
        },
        // large desktops
        1440: {
            slidesPerView: 4,
            centeredSlides: true,
            spaceBetween: 24
        }
    }
});


////////////////////////////////
//// Top Review Slider /////
//////////////////////////////
var swiper = new Swiper(".Top-rating", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    breakpoints: {
        // small phones
        320: {
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 8
        },
        // large phones / small tablets
        640: {
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 18
        },
        // tablets / small laptops
        768: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 7
        },
        // desktops
        1024: {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 20
        },
        // large desktops
        1440: {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 10
        }
    }
});








//////////////////////////////
//// Sample Work Slider /////
////////////////////////////
var swiper = new Swiper(".Sample-work", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    breakpoints: {
        // small phones
        320: {
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 8
        },
        // large phones / small tablets
        640: {
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 18
        },
        // tablets / small laptops
        768: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 7
        },
        // desktops
        1024: {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 20
        },
        // large desktops
        1440: {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 10
        }
    }
});


//IT WORK DATA BOX
function itWorkBox(el) {
    // Get all boxes (both active and common)
    const boxes = document.querySelectorAll('.It-work-data-box, .It-work-data-common-box');

    boxes.forEach(box => {
        // Remove active class from all boxes
        box.classList.remove('It-work-data-box');
        box.classList.add('It-work-data-common-box');
    });

    // Add active class to clicked box
    el.classList.remove('It-work-data-common-box');
    el.classList.add('It-work-data-box');
}
