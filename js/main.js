
document.querySelector('.wrapper').classList.add('loaded');

// анимация svg под формой

let svgs = document.querySelectorAll('.svg-animation__back');
let width = document.documentElement.offsetWidth;

svgs.forEach(svg => {

    let paths = svg.querySelectorAll('path');
    let pathsWidth = paths[0].getBoundingClientRect().width;
    let columns = Math.ceil(width/pathsWidth) / 2;
    let pathsX = [];

    for(let i = 0; i < paths.length; i++) {
        pathsX.push({})
        pathsX[i].id = i;
        pathsX[i].x = paths[i].getBoundingClientRect().x;
    }

    pathsX.sort(function(a,b) {
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
    * поочередно слева направо меняет цвет кружкам

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

// горизонтально едущие машины

let carsBlock = document.querySelector('.about__cars');
let carsToRight = carsBlock.querySelectorAll('.toRight');
let carsToLeft = carsBlock.querySelectorAll('.toLeft');

for (let i = 0; i < carsToRight.length; i++) {
    let left = Math.random() * 50 - 75;
    carsToRight[i].style.left = `${left}%`;
    setInterval(() => {
        if (left >= 125) {
            left = Math.random() * 50 - 75;
            carsToRight[i].style.transition = 'left 0s linear';
            carsToRight[i].style.left = `${left}%`;
            setTimeout(() => {
                carsToRight[i].style.transition = '';
            }, 40)
        } else {
            left += 150;
            carsToRight[i].style.left = `${left}%`;
        }
    }, 10000)
}

for (let i = carsToLeft.length - 1; i >= 0; i--) {
    let right = Math.random() * 50 - 75;
    carsToLeft[i].style.right = `${right}%`;
    setInterval(() => {
        if (right >= 125) {
            right = Math.random() * 50 - 75;
            carsToLeft[i].style.transition = 'right 0s linear';
            carsToLeft[i].style.right = `${right}%`;
            setTimeout(() => {
                carsToLeft[i].style.transition = '';
            }, 40)
        } else {
            right += 150;
            carsToLeft[i].style.right = `${right}%`;
        }
    }, 10000)
}

//кнопка развернуть в блоке о компании

let aboutContent = document.querySelector('.about__content');
let aboutBtn = document.querySelector('.about__more');

aboutBtn.addEventListener('click', () => {
    if (aboutContent.classList.contains('opened')) {
        aboutContent.style.maxHeight = '';
        aboutBtn.textContent = 'Развернуть';
        aboutContent.classList.remove('opened');
    } else {
        aboutContent.style.maxHeight = `${aboutContent.scrollHeight + 20}px`;
        aboutBtn.textContent = 'Свернуть';
        aboutContent.classList.add('opened');
    }
})
//карусель-слайдер на странице услуги

$(document).ready(function() {
    if ($('.services').length) {
        let owl = $('.services .owl-carousel');
        if (owl.length) {
            owl.owlCarousel({
                items: 3,
                margin: 15,
                mouseDrag: true,
                nav: false,
                dots: false,
            });

            $('.services .services__next').click(function () {
                owl.trigger('next.owl.carousel');
            });

            $('.services .services__prev').click(function () {
                owl.trigger('prev.owl.carousel', [300]);
            });
        }
    }
});