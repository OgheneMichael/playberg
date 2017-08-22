const video = document.getElementsByTagName("video");

function svgFill() {
    const tapTarget = document.querySelectorAll(".tap-target");
    
    for (var i = 0; i < tapTarget.length; i++) {
        tapTarget[i].addEventListener("click", function () {
            this.classList.toggle("active")
        })
    }
}

svgFill()


function swiperFunc() {
    const carousel = document.querySelectorAll(".carousel");
    const carousel2 = document.getElementsByClassName("carousel-2");
    if (carousel.length) {
        var swiper = new Swiper(carousel, {
            slidesPerView: 3,
            containerModifierClass: 'carousel-',
            //slideClass: 'col',
            //centeredSlides: true,
            spaceBetween: 5,
            freeMode: true
        });
    }

    if (carousel2.length) {
        var swiper = new Swiper(carousel2, {
            slidesPerView: 3,
            slidesPerColumn: 2,
            //centeredSlides: true,
            spaceBetween: 5
        });
    }
}
swiperFunc()

//Video Player 
if (video.length) {
    plyr.setup();
}