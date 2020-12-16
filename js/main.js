
document.querySelector('.wrapper').classList.add('loaded');

// анимация svg под формой

let svgs = document.querySelectorAll('.questions__back');
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

    setInterval(() => {
        for (let i = 0; i < pathsX.length; i++) {
            setTimeout(() => {
                paths[pathsX[i].id].style.fill = 'rgba(255,255,255,0.3)';
            }, 50 * pathsX[i].turn)
            setTimeout(() => {
                paths[pathsX[i].id].style.fill = '';
            }, 50 * pathsX[i].turn + 500)
        }
    }, 20 * columns + 1000)

    /*setInterval(() => {
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