//карусель-слайдер на странице услуги

$(document).ready(function() {
    if ($('.services').length) {
        let owl = $('.services .owl-carousel');
        if (owl.length) {
            owl.owlCarousel({
                items: 3,
                margin: 15,
                loop: true,
                mouseDrag: false,
                swipe: true,
                nav: false,
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    680: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    },
                }
            });

            $('.services .services__next').click(function () {
                owl.trigger('next.owl.carousel');
            });

            $('.services .services__prev').click(function () {
                owl.trigger('prev.owl.carousel', [300]);
            });
            let items = $('.services .services__item');

            for (let i = 0; i < items.length; i++) {
                items[i].addEventListener('click', function () {
                    document.querySelector('.services').querySelectorAll('.services__item-active').forEach(activeItem => activeItem.classList.remove('services__item-active'));
                    items[i].classList.add('services__item-active');
                    owl.trigger('to.owl.carousel', [i+4]);
                });
            }
        }
    }
    if ($('.faq').length && document.documentElement.clientWidth <= 767) {
        let owl = $('.faq .owl-carousel');
        if (owl.length) {
            owl.owlCarousel({
                margin: 15,
                loop: true,
                swipe: true,
                nav: false,
                dots: false,
                stagePadding: 30,
                responsive: {
                    0: {
                        items: 1
                    },
                    450: {
                        items: 2
                    },
                }
            });
            let items = $('.faq .faq__item');

            for (let i = 0; i < items.length; i++) {
                items[i].addEventListener('click', function () {
                    owl.trigger('to.owl.carousel', [i+4]);
                });
            }
        }
    }
});
