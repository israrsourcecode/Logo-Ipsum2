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






// ----- PRICING RULES -----
const servicePrice = {
    1: 10,   // Assignment
    2: 12,   // Coursework
    3: 8     // Homework
};

const subjectPrice = {
    1: 5,   // Economics
    2: 7,   // HR
    3: 6    // Communication
};

const pagesPrice = {
    1: 1 * 5,     // 1 page option
    2: 2 * 10,     // 2 pages
    3: 3 * 15      // 3 pages
};

const urgencyMultiplier = {
    1: 2.0,   // 4 hours
    2: 1.5,   // 8 hours
    3: 1.2    // 16 hours
};

// ---- MAIN CALCULATION FUNCTION ----
function calculatePrice() {
    const service = document.getElementById("service").value;
    const subject = document.getElementById("subject").value;
    const pages = document.getElementById("pages").value;
    const urgency = document.getElementById("urgency").value;

    // Check if all fields selected
    if (service === "Select Services" || subject === "Select Subjects" || pages === "Select Subjects" || urgency === "Select Urgency") {
        return; // do nothing
    }

    // Base calculation
    let price =
        servicePrice[service] +
        subjectPrice[subject] +
        pagesPrice[pages];
console.log(price);

    // Apply urgency multiplier
    price = price * urgencyMultiplier[urgency];

    // Show price in final-price h2
    document.querySelector(".final-price h2").innerHTML =
        `<span>USD</span> ${price.toFixed(2)}`;
}

// ---- Auto-update when any select changes ----
document.getElementById("service").addEventListener("change", calculatePrice);
document.getElementById("subject").addEventListener("change", calculatePrice);
document.getElementById("pages").addEventListener("change", calculatePrice);
document.getElementById("urgency").addEventListener("change", calculatePrice);