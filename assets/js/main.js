// MENU
const menuItems = document.querySelectorAll('.list-item');
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    });
})
// SLIDER
$('.slick-slider-content').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:"<button type='button' class='slick-prev button-controls'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next button-controls'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
    ],
});