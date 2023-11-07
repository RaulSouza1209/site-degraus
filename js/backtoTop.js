export function backtoTop() {

    const page = document.querySelector('html')
    const button = document.getElementById('button')

    window.addEventListener('scroll', (e) => {

        let top = page.getBoundingClientRect().top

        if (top < -300) {
            button.classList.add('show')
        } else {
            button.classList.remove('show')
        }

    })

}

backtoTop()