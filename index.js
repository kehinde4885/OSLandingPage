const bg = document.getElementById('bg')

const element = document.getElementById('layout-2')

const elements = Array.from(element.children)

let backgrounds = Array.from(bg.children)

todo = 55


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
        changeLogo()
        for (let i = 0; i < colorGroup.length; i++) {
            colorGroup[i].classList.add('black')
        }
        indicator.forEach(element => {
            element.classList.add('newbg')
        });
    }
    else if(slidePosition === 2 || slidePosition === 0 || slidePosition === 3) {
        changeLogoWhite()
        for (let i = 0; i < colorGroup.length; i++) {
            colorGroup[i].classList.remove('black')
        }
        indicator.forEach(element => {
            element.classList.remove('newbg')
        });


}
}



function indicate(){
    indicator.forEach(element => {
        element.classList.remove('indicate')
    });
    indicator[slidePosition].classList.add('indicate')
}




function changeLogo(){

    let blackLogo = `images/brand.png`
    let logo = Array.from(document.getElementsByClassName('logo'))
    logo[0].src = blackLogo

}

function changeLogoWhite(){
    let whiteLogo = `images/brand-white.png`
    let logo = Array.from(document.getElementsByClassName('logo'))
    logo[0].src = whiteLogo

}


const navigate = Array.from(document.getElementsByClassName('navigate'))

navigate[0].addEventListener('click', nav0)

indicator[0].addEventListener('click', nav0)


function nav0(){

    while(slidePosition > 0){
        moveToPrevSlide()
    }

    hideMenu()
}

navigate[1].addEventListener('click', nav1)

indicator[1].addEventListener('click', nav1)

function nav1(){
    while(slidePosition > 1){
        moveToPrevSlide()
    }

    while(slidePosition < 1){
        moveToNextSlide()
    }
    hideMenu()
}

navigate[2].addEventListener('click', nav2)

indicator[2].addEventListener('click', nav2)

function nav2(){
    while(slidePosition > 2){
        moveToPrevSlide()
    }

    while(slidePosition < 2){
        moveToNextSlide()
    }

    hideMenu()
}

navigate[3].addEventListener('click', nav3)

indicator[3].addEventListener('click', nav3)

function nav3(){
    while(slidePosition > 3){
        moveToPrevSlide()
    }

    while(slidePosition < 3){
        moveToNextSlide()
    }

    hideMenu()
}

navigate[4].addEventListener('click', nav4)

indicator[4].addEventListener('click', nav4)

function nav4(){
    while(slidePosition > 4){
        moveToPrevSlide()
    }

    while(slidePosition < 4){
        moveToNextSlide()
    }

    hideMenu()
}


document.addEventListener('keydown', hot)

function hot(e){
    let x = e.code
    console.log(x)

    if(e.code === 'ArrowUp'){
        moveToPrevSlide()
    }else if(e.code === 'ArrowDown'){
        moveToNextSlide()
    }else{

    }

}

let hamburger = document.querySelector('.hamburger')

let close = document.querySelector('.close')

let menu = document.querySelector('.menu')

console.log(menu)

hamburger.addEventListener('click', viewMenu)

function viewMenu(){
    menu.classList.add('view')
}

function hideMenu(){
    menu.classList.remove('view')
}

close.addEventListener('click',hideMenu)