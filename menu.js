
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-mb')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-mb')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-mb')
})