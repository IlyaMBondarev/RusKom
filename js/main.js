
document.querySelector('.wrapper').classList.add('loaded');

// анимация svg под формой

if ($('.svg-animation__back').length && document.documentElement.clientWidth > 767) {
    let svgs = document.querySelectorAll('.svg-animation__back');
    let width = document.documentElement.offsetWidth;

    svgs.forEach(svg => {

        let paths = svg.querySelectorAll('path');
        let pathsWidth = paths[0].getBoundingClientRect().width;
        let columns = Math.ceil(width / pathsWidth) / 2;
        let pathsX = [];

        for (let i = 0; i < paths.length; i++) {
            pathsX.push({})
            pathsX[i].id = i;
            pathsX[i].x = paths[i].getBoundingClientRect().x;
        }

        pathsX.sort(function (a, b) {
            return a.x - b.x;
        });

        pathsX.forEach(pathX => {
            for (let i = 0; i < columns; i++) {
                if (pathX.x >= (i * columns) && pathX.x < ((i + 1) * columns)) {
                    pathX.turn = i;
                }
            }
        })

        for (let i = 0; i < pathsX.length; i++) {
            setTimeout(() => {
                paths[pathsX[i].id].style.fill = 'rgba(255,255,255,0.3)';
            }, 100 * pathsX[i].turn)
            setTimeout(() => {
                paths[pathsX[i].id].style.fill = '';
            }, 100 * pathsX[i].turn + 1000)
        }

        setInterval(() => {
            for (let i = 0; i < pathsX.length; i++) {
                setTimeout(() => {
                    paths[pathsX[i].id].style.fill = 'rgba(255,255,255,0.3)';
                }, 100 * pathsX[i].turn)
                setTimeout(() => {
                    paths[pathsX[i].id].style.fill = '';
                }, 100 * pathsX[i].turn + 1000)
            }
        }, 50 * columns + 1000)

        /*
        * другая анимация - поочередно слева направо меняет цвет кружкам

        setInterval(() => {
            for (let i = 0; i < pathsX.length; i++) {
                setTimeout(() => {
                    paths[pathsX[i].id].style.fill = 'rgba(255,255,255,0.4)';
                }, i)
                setTimeout(() => {
                    paths[pathsX[i].id].style.fill = ''
                }, i + 1000)
            }
        }, paths.length)*/
    });
}

// горизонтально едущие машины

function carToMove(direction, styleElement, car) {
    if (direction >= 100) {
        direction = -230;
        car.style.transition = `${styleElement} 0s linear`;
        if (styleElement === 'left') {
            car.style.left = `${direction}px`;
        } else if (styleElement === 'right') {
            car.style.right = `${direction}px`;
        }
        setTimeout(() => {
            car.style.transition = '';
        }, 40)
    } else {
        direction = 610;
        if (styleElement === 'left') {
            car.style.left = `${direction}px`;
        } else if (styleElement === 'right') {
            car.style.right = `${direction}px`;
        }
    }
    return direction;
}

if ($('.about').length && document.documentElement.clientWidth > 1199.999) {
    let carsBlock = document.querySelector('.about__cars');
    let carsToRight = carsBlock.querySelectorAll('.toRight');
    let carsToLeft = carsBlock.querySelectorAll('.toLeft');

    for (let i = 0; i < carsToRight.length; i++) {
        let left = -230;
        carsToRight[i].style.left = `${left}px`;
        carsToRight[i].style.opacity = `1`;
        setTimeout(() => {
            left = carToMove(left, 'left', carsToRight[i]);
            setInterval(() => {
                left = carToMove(left, 'left', carsToRight[i]);
            }, 6000)
        }, Math.random() * 15000)
    }

    for (let i = carsToLeft.length - 1; i >= 0; i--) {
        let right = -230;
        carsToLeft[i].style.right = `${right}px`;
        carsToLeft[i].style.opacity = `1`;
        setTimeout(() => {
            right = carToMove(right, 'right', carsToLeft[i]);
            setInterval(() => {
                right = carToMove(right, 'right', carsToLeft[i]);
            }, 6000)
        }, Math.random() * 15000)
    }
}

// вертикально едущие машины


if ($('.rain-bg').length && document.documentElement.clientWidth > 1199.999) {
    let rainBlocks = document.querySelectorAll('.rain-bg');
    rainBlocks.forEach(rainBlock => {
        let rows = rainBlock.querySelectorAll('.rain__row');
        let cities = ['Смоленск', 'Москва', 'Казань', 'Екатеринбург'];

        for(let i = 0; i < rows.length; i++) {

            setTimeout(() => {
                let span = document.createElement('span');
                let emptySpan = document.createElement('span');

                let randomSpanContent = cities[Math.floor(Math.random() * cities.length)];

                span.classList.add('rain__text');
                emptySpan.classList.add('rain__empty');
                span.textContent = `Новороссийск - ${randomSpanContent}`;
                span.appendChild(emptySpan);

                rows[i].appendChild(span);

                span.style.transition = `right 10s linear`;

                setTimeout(() => span.style.right = '80%', 40);

                setTimeout(() => {
                    span.parentNode.removeChild(span);
                }, i * 1000 + 9999)
            }, i * 1000)

            setInterval(() => {
                let span = document.createElement('span');
                let emptySpan = document.createElement('span');

                let randomSpanContent = cities[Math.floor(Math.random() * cities.length)];

                span.classList.add('rain__text');
                emptySpan.classList.add('rain__empty');
                span.textContent = `Новороссийск - ${randomSpanContent}`;
                span.appendChild(emptySpan);

                rows[i].appendChild(span);

                span.style.transition = `right 10s linear`;

                setTimeout(() => span.style.right = '80%', 40);

                setTimeout(() => {
                    span.parentNode.removeChild(span);
                }, i * 1000 + 9999)
            }, i * 1000 + 10000)
        }

    })
}

//кнопка развернуть в блоке о компании

if ($('.about').length) {
    let aboutContent = document.querySelector('.about__content');
    let aboutBtn = document.querySelector('.about__more');

    aboutBtn.addEventListener('click', () => {
        if (aboutContent.classList.contains('opened')) {
            aboutContent.style.maxHeight = '';
            aboutBtn.textContent = 'Развернуть';
            aboutBtn.classList.remove('about__less');
            aboutContent.classList.remove('opened');
        } else {
            aboutContent.style.maxHeight = `${aboutContent.scrollHeight + 20}px`;
            aboutBtn.textContent = 'Свернуть';
            aboutBtn.classList.add('about__less');
            aboutContent.classList.add('opened');
        }
    })
}

//бургер

function openBurger(burger) {
    burger.classList.add('burger-opened');
}

function closeBurger(burger) {
    burger.classList.remove('burger-opened');
}

let headers = document.querySelectorAll('.header');

headers.forEach(header => {
    let openBtn = header.querySelector('.header__menu-btn');
    let closeBtn = header.querySelector('.burger__close');
    let burger = header.querySelector('.burger');
    let burgerMenu = burger.querySelector('.burger__menu');
    let burgerLists = burgerMenu.querySelectorAll('li');
    for (let i =0; i < burgerLists.length; i++) {
        burgerLists[i].addEventListener('click', () => {
            if (document.querySelector(`.to${i + 1}`)) {
                document.querySelector(`.to${i + 1}`).scrollIntoView({behavior: 'smooth'});
                closeBurger(burger);
            }
        })
    }
    openBtn.addEventListener('click', () => {
        openBurger(burger);
    });
    closeBtn.addEventListener('click', () => {
        closeBurger(burger);
    });
    document.addEventListener('click', (event) => {
        if (event.target !== burger && !(burger.contains(event.target)) && event.target !== openBtn && !(openBtn.contains(event.target))) {
            closeBurger(burger);
        }
    })
})

//заказать звонок

if ($('.popup-callback-bg').length) {

    let popupCallbackBackground = document.querySelector('.popup-callback-bg');
    let popupCallbackOpenBtns = document.querySelectorAll('.popup-callback-open-btn');
    let popupCallbackCloseBtn = popupCallbackBackground.querySelector('.popup-callback__close');
    const popupCallbackForm = document.getElementById('popupCallbackForm');

    popupCallbackForm.addEventListener('submit', event => {
        event.preventDefault();
        formSend(popupCallbackForm);
    });

    popupCallbackOpenBtns.forEach(button => {
        button.addEventListener('click', () => {
            popupCallbackBackground.classList.add('popup-callback-bg-visible');
        });
    })

    popupCallbackBackground.addEventListener('click', (event) => {
        if (event.target === popupCallbackBackground) {
            popupCallbackBackground.classList.remove('popup-callback-bg-visible');
        }
    });

    popupCallbackCloseBtn.addEventListener('click', () => {
        popupCallbackBackground.classList.remove('popup-callback-bg-visible');
    });
}

//карта

if ($('.popup-map-bg').length) {

    let popupMapBackground = document.querySelector('.popup-map-bg');
    let popupMapOpenBtns = document.querySelectorAll('.popup-map-open-btn');
    let popupMapCloseBtn = popupMapBackground.querySelector('.popup-map__close');

    popupMapOpenBtns.forEach(button => {
        button.addEventListener('click', () => {
            popupMapBackground.classList.add('popup-map-bg-visible');
        });
    })

    popupMapBackground.addEventListener('click', (event) => {
        if (event.target === popupMapBackground) {
            popupMapBackground.classList.remove('popup-map-bg-visible');
        }
    });

    popupMapCloseBtn.addEventListener('click', () => {
        popupMapBackground.classList.remove('popup-map-bg-visible');
    });
}

//подробнее об услуге

let mustBeClosed = false;

if ($('.services__types').length) {
    let serviceTypesBlock = document.querySelector('.services__types');
    let serviceTypes = serviceTypesBlock.querySelectorAll('.services__type');
    serviceTypes.forEach(type => {
        let popupServiceBackground = type.querySelector('.popup-service-bg');
        let popupServiceOpenBtn = type.querySelector('.popup-service-open-btn');
        let popupService = popupServiceBackground.querySelector('.popup-service');
        let popupServiceCloseBtn = popupServiceBackground.querySelector('.popup-service__close');
        const popupCallbackForm = popupService.querySelector('form');

        popupCallbackForm.addEventListener('submit', event => {
            event.preventDefault();
            formSend(popupCallbackForm);
        });

        popupServiceOpenBtn.addEventListener('click', () => {
            popupServiceBackground.classList.add('popup-service-bg-visible');
            document.querySelector('.header-sticky').style.top = '-100%';
            mustBeClosed = true;
        });

        popupServiceBackground.addEventListener('click', (event) => {
            if (event.target === popupServiceBackground) {
                popupServiceBackground.classList.remove('popup-service-bg-visible');
                _scroll('.header-sticky', 'slideDown', '-100%');
                mustBeClosed = false;
            }
        });

        popupServiceCloseBtn.addEventListener('click', () => {
            popupServiceBackground.classList.remove('popup-service-bg-visible');
            _scroll('.header-sticky', 'slideDown', '-100%');
            mustBeClosed = false;
        });
    })
}

// validation

async function formSend(form) {
    let error = formValidate(form);

    if (error === 0) {

    }
}

function formValidate(form) {
    let error = 0;
    let formReq = form.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        input.classList.remove('_error');

        if (input.classList.contains('_phone')) {
            if (input.value.length < 18) {
                input.classList.add('_error');
                error++;
            }
        } else {
            if (input.value.length < 3 || input.value.length > 32) {
                input.classList.add('_error');
                error++;
            }
        }
    }
    return error;
}

let questionForms = document.querySelectorAll('.questions__form');
questionForms.forEach(form => {
    form.addEventListener('submit', event => {
        event.preventDefault();
        formSend(form);
    });
})

//phone mask

function mask(event) {
    let matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type === "blur") {
        if (this.value.length === 2) this.value = ""
    }
}

let phones = document.querySelectorAll("._phone");
phones.forEach(phone => phone.addEventListener("input", mask, false));
phones.forEach(phone => phone.addEventListener("focus", mask, false));
phones.forEach(phone => phone.addEventListener("blur", mask, false));

//sticky-header

myScroll();

window.onscroll = function() {
    myScroll();
}

function _scroll(block, b, c){
    const d = document.querySelector(block);
    let e = document.body.scrollTop > 200 || document.documentElement.scrollTop > 200;
    if(b == 'slideDown'){
        if(e){
            d.style.top = '0';
        }
        else{
            d.style.top = c;

        }
    }
    else if(b == 'slideUp'){
        if(e){
            d.style.bottom = '0';
        }
        else{
            d.style.bottom = c;
        }
    }
    else if(b == 'slideLeft'){
        if(e){
            d.style.left = '0';
        }
        else{
            d.style.left = c;
        }
    }
    else{
        if(e){
            d.style.right = '0';
        }
        else{
            d.style.right = c;
        }
    }
}

function myScroll() {
    if (!mustBeClosed) {
        _scroll('.header-sticky', 'slideDown', '-100%');
    }
}

//faq block

if ($('.faq').length) {
    let faq = document.querySelector('.faq');
    let servicesBlock = faq.querySelector('.faq__items');
    let circles = faq.querySelectorAll('.faq__circle');
    let services = servicesBlock.querySelectorAll('.faq__item');
    let arrowUp = faq.querySelector('.faq__arrow-up');
    let arrowDown = faq.querySelector('.faq__arrow-down');
    let indexOfActiveService = 0;
    let indexOfTopVisibleService = 0;
    let indexOfActiveCircle = 0;
    let numberOfItems = services.length - 1;
    let servicesBlockMarginTop = 0;
    let countingStep = document.documentElement.clientWidth > 1100 ? 151 :
        document.documentElement.clientWidth > 767 ? 128 : 90;

    arrowUp.addEventListener('click', () => {
        if (indexOfTopVisibleService !== 0) {
            indexOfTopVisibleService--;
            servicesBlockMarginTop += countingStep;
            servicesBlock.style.marginTop = `${servicesBlockMarginTop}px`;
            if (circles[indexOfActiveCircle]) {
                circles[indexOfActiveCircle].classList.remove('faq__circle-active');
            }
            indexOfActiveCircle++;
            if (circles[indexOfActiveCircle]) {
                circles[indexOfActiveCircle].classList.add('faq__circle-active');
            }
        }
    })

    arrowDown.addEventListener('click', () => {
        if (indexOfTopVisibleService !== numberOfItems - 3) {
            indexOfTopVisibleService++;
            servicesBlockMarginTop -= countingStep;
            servicesBlock.style.marginTop = `${servicesBlockMarginTop}px`;
            if (circles[indexOfActiveCircle]) {
                circles[indexOfActiveCircle].classList.remove('faq__circle-active');
            }
            indexOfActiveCircle--;
            if (circles[indexOfActiveCircle]) {
                circles[indexOfActiveCircle].classList.add('faq__circle-active');
            }
        }
    })

    for (let i = 0; i < services.length; i++) {
        services[i].addEventListener('click', () => {
            indexOfActiveService = i;
            if (circles[indexOfActiveCircle]) {
                circles[indexOfActiveCircle].classList.remove('faq__circle-active');
            }
            indexOfActiveCircle = indexOfActiveService - indexOfTopVisibleService;
            if (circles[indexOfActiveCircle]) {
                circles[indexOfActiveCircle].classList.add('faq__circle-active');
            }
        })
    }

    let questionsBlock = faq.querySelector('.faq__right');
    let questions = questionsBlock.querySelectorAll('.faq__question');
    let indexOfActiveQuestion = 0;

    const ps = new PerfectScrollbar(questionsBlock, {
        wheelSpeed: 1,
        wheelPropagation: false,
        minScrollbarLength: 20,
        maxScrollbarLength: 20
    });

    for (let indexOfQuestion = 0; indexOfQuestion < questions.length; indexOfQuestion++) {
        let title = questions[indexOfQuestion].querySelector('.faq__question-title');
        let content = questions[indexOfQuestion].querySelector('.faq__question-content');
        let contentHeight = content.scrollHeight;
        if (indexOfQuestion === indexOfActiveQuestion) {
            questions[indexOfQuestion].classList.add('faq__question-active');
            content.style.maxHeight = `${contentHeight}px`;
            setTimeout(() => {ps.update();}, 450);
        }
        title.addEventListener('click', () => {
            if (indexOfQuestion !== indexOfActiveQuestion) {
                questions[indexOfQuestion].classList.add('faq__question-active');
                content.style.maxHeight = `${contentHeight}px`;
                if (indexOfActiveQuestion !== -1) {
                    questions[indexOfActiveQuestion].classList.remove('faq__question-active');
                    questions[indexOfActiveQuestion].querySelector('.faq__question-content').style.maxHeight = '';
                }
                indexOfActiveQuestion = indexOfQuestion;
            } else {
                questions[indexOfQuestion].classList.remove('faq__question-active');
                questions[indexOfQuestion].querySelector('.faq__question-content').style.maxHeight = '';
                indexOfActiveQuestion = -1;
            }
            setTimeout(() => {ps.update();}, 450);
        })
    }
}

//замена img-svg на svg

$('img.img-svg').each(function(){
    let $img = $(this);
    let imgClass = $img.attr('class');
    let imgURL = $img.attr('src');
    $.get(imgURL, function(data) {
        let $svg = $(data).find('svg');
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
    }, 'xml');
});
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
                    600: {
                        items: 3
                    },
                }
            });
            let items = $('.faq .faq__item');

            for (let i = 0; i < items.length; i++) {
                items[i].addEventListener('click', function () {
                    document.querySelector('.faq').querySelectorAll('.faq__item-active').forEach(activeItem => activeItem.classList.remove('faq__item-active'));
                    items[i].classList.add('faq__item-active');
                    owl.trigger('to.owl.carousel', [i+4]);
                });
            }
        }
    }
});