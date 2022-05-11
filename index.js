



const bg = document.getElementById('bg')

const element = document.getElementById('layout-2')

const elements = Array.from(element.children)

let backgrounds = Array.from(bg.children)


elements[0].addEventListener('mouseenter' ,function(){
    for(i=0; i < elements.length ; i++){
        backgrounds[i].classList.remove('active')
    }
    if(backgrounds[0].classList.contains('active')){
        
    }else{
        backgrounds[0].classList.add('active')
    }
    
})

elements[1].addEventListener('mouseenter' ,function(){
    for(i=0; i < elements.length ; i++){
        backgrounds[i].classList.remove('active')
    }
    if(backgrounds[1].classList.contains('active')){
        
    }else{
        backgrounds[1].classList.add('active')
    }
    
})

elements[2].addEventListener('mouseenter' ,function(){
    for(i=0; i < elements.length ; i++){
        backgrounds[i].classList.remove('active')
    }
    if(backgrounds[2].classList.contains('active')){
        
    }else{
        backgrounds[2].classList.add('active')
    }
    
})

elements[3].addEventListener('mouseenter' ,function(){
    for(i=0; i < elements.length ; i++){
        backgrounds[i].classList.remove('active')
    }
    if(backgrounds[3].classList.contains('active')){
        
    }else{
        backgrounds[3].classList.add('active')
    }
})

elements[4].addEventListener('mouseenter' ,function(){
    for(i=0; i < elements.length ; i++){
        backgrounds[i].classList.remove('active')
    }
    if(backgrounds[4].classList.contains('active')){
        
    }else{
        backgrounds[4].classList.add('active')
    }
    
})