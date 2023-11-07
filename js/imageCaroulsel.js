export function imageCaroulsel() {

    const slider = document.querySelector('.slider .list')
    const items = document.querySelectorAll('.slider .list .item')
    const next = document.getElementById('next')
    const prev = document.getElementById('prev')

    let lengthItems = items.length - 1;
    let active = 0;
    next.onclick = function(){
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : lengthItems;
        reloadSlider();
    }

    let refreshInterval = setInterval(()=> {next.click()}, 3000);
    function reloadSlider(){

        slider.style.left = -items[active].offsetLeft + 'px';
        console.log(slider.style.left)
        //
    
        clearInterval(refreshInterval);
        refreshInterval = setInterval(()=> {next.click()}, 3000);
    
        
    }

}