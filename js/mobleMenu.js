export function mobleMenu() {

    const menuButton = document.querySelector('.menu-hamb')
    const menuMoble = document.querySelector('.nav-bar-ham')
    
    menuButton.onclick = () => {
        menuMoble.classList.toggle('active')
    }

}

mobleMenu()