const bg = document.getElementById('bg')

const element = document.getElementById('layout-2')

const elements = Array.from(element.children)

let backgrounds = Array.from(bg.children)


elements[0].addEventListener('mouseenter', function () {
    for (i = 0; i < elements.length; i++) {
        backgrounds[i].classList.remove('active')
    }
    if (backgrounds[0].classList.contains('active')) {

    } else {
        backgrounds[0].classList.add('active')
    }

})

elements[1].addEventListener('mouseenter', function () {
    for (i = 0; i < elements.length; i++) {
        backgrounds[i].classList.remove('active')
    }
    if (backgrounds[1].classList.contains('active')) {

    } else {
        backgrounds[1].classList.add('active')
    }

})

elements[2].addEventListener('mouseenter', function () {
    for (i = 0; i < elements.length; i++) {
        backgrounds[i].classList.remove('active')
    }
    if (backgrounds[2].classList.contains('active')) {

    } else {
        backgrounds[2].classList.add('active')
    }

})

elements[3].addEventListener('mouseenter', function () {
    for (i = 0; i < elements.length; i++) {
        backgrounds[i].classList.remove('active')
    }
    if (backgrounds[3].classList.contains('active')) {

    } else {
        backgrounds[3].classList.add('active')
    }
})

elements[4].addEventListener('mouseenter', function () {
    for (i = 0; i < elements.length; i++) {
        backgrounds[i].classList.remove('active')
    }
    if (backgrounds[4].classList.contains('active')) {

    } else {
        backgrounds[4].classList.add('active')
    }

})

let pages = Array.from(document.getElementsByClassName('layer'))

let slidePosition = 0


let carUp = document.getElementById('caro-up')

let carDown = document.getElementById('caro-down')

carDown.addEventListener('click', moveToNextSlide)

carUp.addEventListener('click', moveToPrevSlide)

const colorGroup = Array.from(document.querySelectorAll('.white'))

const indicator = Array.from(document.querySelectorAll('.hole'))






function moveToNextSlide() {
    if (slidePosition === pages.length - 1) {

    } else {
        pages[slidePosition].classList.add('hidden')
        pages[slidePosition + 1].classList.add('visible')
        slidePosition++

        indicate()

    }


    console.log(slidePosition)

    toggleColor()

}


function moveToPrevSlide() {
    if (slidePosition === 0) {

    } else {
        pages[slidePosition].classList.remove('visible')
        slidePosition -= 1
        pages[slidePosition].classList.remove('hidden')

        indicate()

    }
    console.log(slidePosition)

    toggleColor()
}



function toggleColor() {

    if (slidePosition === 1 || slidePosition === 4) {
        for (let i = 0; i < colorGroup.length; i++) {
            colorGroup[i].classList.add('black')
        }
    }
    else if(slidePosition === 2 || slidePosition === 0 || slidePosition === 3) {
        for (let i = 0; i < colorGroup.length; i++) {
            colorGroup[i].classList.remove('black')
        }

}
}

function indicate(){
    indicator.forEach(element => {
        element.classList.remove('indicate')
        element.classList.add('newbg')
    });
    indicator[slidePosition].classList.add('indicate')
}



function changeLogo(){

}