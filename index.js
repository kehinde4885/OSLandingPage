const bg = document.getElementById('bg')

const element = document.getElementById('layout-2')

const projects = Array.from(element.children)

let backgrounds = Array.from(bg.children)

let landing = document.querySelector('.landing')

let index = 1;

let slidePosition = 0


let carUp = document.getElementById('caro-up')

let carDown = document.getElementById('caro-down')

const colorGroup = Array.from(document.querySelectorAll('.white'))



const navigate = Array.from(document.getElementsByClassName('navigate'))

let pages = Array.from(document.getElementsByClassName('layer'))

let indicator = []

let grpOfIndicator = []

let groupOfHoles = document.querySelector('.holes')

let hamburger = document.querySelector('.hamburger')

let close = document.querySelector('.close')

let menu = document.querySelector('.menu')


carDown.addEventListener('click', moveToNextSlide)

carUp.addEventListener('click', moveToPrevSlide)

document.addEventListener('keydown', hot)

hamburger.addEventListener('click', viewMenu)

close.addEventListener('click', hideMenu)

setInterval(landingSwitch , 10000)


for(page of pages){

    let li = document.createElement('li')

    let span = document.createElement('span')

    span.setAttribute('class', 'hole')

    li.append(span)

    grpOfIndicator.push(li)

    indicator.push(span)
}



for(let i=0 ; i< grpOfIndicator.length; i++){
   
    groupOfHoles.append(grpOfIndicator[i])
}


function landingSwitch(){

if(landing.className.includes('hidden')){

}else{

    if(index < 5){
        index++
    }else if(index >= 5){
        index = 1
    }
    console.log(index)
}
    landing.style.backgroundImage = `url('images/ld${index}.jpg')`


}


projects.forEach(element => {
    element.addEventListener('mouseenter', go)
});

function go(e){
    let index = projects.indexOf(e.target)

    for (i = 0; i < projects.length; i++) {
        backgrounds[i].classList.remove('active')
    }

    if(backgrounds[index].classList.contains('active')){

    }else{
        backgrounds[index].classList.add('active')
    }

}


//Okay
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


function indicate(){
    indicator.forEach(element => {
        element.classList.remove('indicate')
    });
    indicator[slidePosition].classList.add('indicate')
}


//Okay

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

    if (slidePosition === 1 || slidePosition === 2 || slidePosition === 5) {
        changeLogo()
        for (let i = 0; i < colorGroup.length; i++) {
            colorGroup[i].classList.add('black')
        }
        indicator.forEach(element => {
            element.classList.add('newbg')
        });
    }
    else if(slidePosition === 0 || slidePosition === 3 || slidePosition === 4) {
        changeLogoWhite()
        for (let i = 0; i < colorGroup.length; i++) {
            colorGroup[i].classList.remove('black')
        }
        indicator.forEach(element => {
            element.classList.remove('newbg')
        });


}
}



indicator.forEach(element => {

    element.addEventListener('click', naviga)
    
});

navigate.forEach(element => {
    element.addEventListener('click', naviga2)
})


function naviga(e){
    
    console.log(e)

    let index = indicator.indexOf(e.target)

    let index2 = navigate.indexOf(e.target)

    console.log(index)

    while(slidePosition > index){
        moveToPrevSlide()
    }
    while (slidePosition < index){
         moveToNextSlide()
     }

    hideMenu()

}

function naviga2(e){
    
    console.log(e)

    let index = navigate.indexOf(e.target)

    console.log(index)

    while(slidePosition > index){
        moveToPrevSlide()
    }
    while (slidePosition < index){
         moveToNextSlide()
     }

    hideMenu()

}


function hot(e){
    let x = e.code
    console.log(x)

    if(e.code === 'ArrowUp'){
        moveToPrevSlide()
    }else if (e.code === 'ArrowDown'){
        moveToNextSlide()
    }
}

function viewMenu(){
    menu.classList.add('view')
}

function hideMenu(){
    menu.classList.remove('view')
}

