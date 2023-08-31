const buttonMenu = document.querySelector('.button__menu')


const menuMobile = document.querySelector('.menuMobile')
let isMenuOpen = false

buttonMenu.addEventListener('click', function (){
    menuMobile.classList.remove('invisible')
    isMenuOpen ? menuMobile.classList.add('invisible') : menuMobile.classList.remove ('invisible')
    
    isMenuOpen ? buttonMenu.children[0].setAttribute('src','assets/hamburguer.png') : buttonMenu.children[0].setAttribute('src', 'assets/close.png')


    isMenuOpen = !isMenuOpen
    console.log(isMenuOpen)
})
