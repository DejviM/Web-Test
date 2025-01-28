document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
        type: 'carousel',
        perView: 3,
        focusAt: 'center',
        breakpoints: {
            992: {
                perView: 2
            },
            768: {
                perView: 1
            }
        }
    }).mount();
});