const bg = document.getElementById('bg')

const element = document.getElementById('layout-2')

const projects = Array.from(element.children)

let backgrounds = Array.from(bg.children)


let landing = document.querySelector('.landingbg')

let landContainer = document.querySelector('.landing')

let index = 0;

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
//create carousel Dots
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
toggleColor()



//Animate Landing BackGround

function landingSwitch(){

if(landContainer.className.includes('hidden')){}
else{
    if(index <= 3){
        landing.children[index].classList.remove('active')
        index++
        landing.children[index].classList.add('active')
    }else if(index > 3){
        landing.children[index].classList.remove('active')
        index = 0
         landing.children[index].classList.add('active') 
    }
    
    }
}

//Animate PRojects BG

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


//Change Logo during Page Transition
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

//Indicate page user is on

function indicate(){
    indicator.forEach(element => {
        element.classList.remove('indicate')
    });
    indicator[slidePosition].classList.add('indicate')
}


//Animate Sections

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

    if (slidePosition === 0 ||slidePosition === 1 || slidePosition === 2 || slidePosition === 5) {
        changeLogo()
        for (let i = 0; i < colorGroup.length; i++) {
            colorGroup[i].classList.add('black')
        }
        indicator.forEach(element => {
            element.classList.add('newbg')
        });
    }
    else if( slidePosition === 3 || slidePosition === 4) {
        changeLogoWhite()
        for (let i = 0; i < colorGroup.length; i++) {
            colorGroup[i].classList.remove('black')
        }
        indicator.forEach(element => {
            element.classList.remove('newbg')
        });


}
}


//Turn indicators to buttons to nav sections
indicator.forEach(element => {
    element.addEventListener('click', naviga)
    
});

//Menu Buttons
navigate.forEach(element => {
    element.addEventListener('click', naviga2)
})

//Dot Buttons
function naviga(e){
    

    let index = indicator.indexOf(e.target)


    while(slidePosition > index){
        moveToPrevSlide()
    }
    while (slidePosition < index){
         moveToNextSlide()
     }

    hideMenu()

}


//Menu Buttons
function naviga2(e){
    

    let index = navigate.indexOf(e.target)


    while(slidePosition > index){
        moveToPrevSlide()
    }
    while (slidePosition < index){
         moveToNextSlide()
     }

    hideMenu()

}

//Navigate with Keyboard
function hot(e){
    let x = e.code

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



const toggle = document.querySelector('.toggle').children

const testimonies = document.querySelectorAll('.testimony')

toggle[1].addEventListener('click', nextTest)

toggle[0].addEventListener('click', prevTest)


//Testimony Carousel

let tPosition = 0

function prevTest(){
    if(tPosition === 0){

    }else{

    testimonies[tPosition].classList.remove('active')

    testimonies[tPosition - 1].classList.add('active')

    tPosition--

    }

}

function nextTest(){
    if(tPosition < testimonies.length - 1){

    testimonies[tPosition].classList.remove('active')

    testimonies[tPosition + 1].classList.add('active')


    tPosition++


    }else{}


}

// Mobile Only
const navigateMob = Array.from(document.getElementsByClassName('navigate-mob'))

let closeMobile = document.querySelector('.close-mob')

let hamburgerMob = document.querySelector('.hamburger-mob')

let mobileMenu = document.querySelector('.mobile-menu')

closeMobile.addEventListener('click',hideMenuMobile)

hamburgerMob.addEventListener('click', viewMenuMobile)


function viewMenuMobile(){
    mobileMenu.classList.add('view')
}

function hideMenuMobile(){
    mobileMenu.classList.remove('view')
}

console.log(navigateMob)
navigateMob.forEach(element => {
    element.addEventListener('click', naviga3)
})

function naviga3(e){

    hideMenuMobile()

}