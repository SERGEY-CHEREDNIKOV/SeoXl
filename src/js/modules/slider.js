import Swiper from 'swiper/swiper-bundle.min';

const slider = () => {
    new Swiper(".information__slider", {
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

export default slider;