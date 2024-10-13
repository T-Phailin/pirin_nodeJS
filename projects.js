document.addEventListener('DOMContentLoaded', () => {
    // เลือกองค์ประกอบสไลด์ที่อยู่ในชุด
    let sliderSets = document.querySelectorAll('.slider-set');
    
    sliderSets.forEach(sliderSet => {
        let slider = sliderSet.querySelector('.slider .list');
        let items = sliderSet.querySelectorAll('.slider .list .item');
        let dots = sliderSet.querySelectorAll('.slider .dots li');
    
        let lengthItems = items.length - 1;
        let active = 0;
    
        let refreshInterval = setInterval(() => { nextSlide(); }, 3000);
    
        function nextSlide() {
            active = active + 1 <= lengthItems ? active + 1 : 0;
            reloadSlider();
        }
    
        function reloadSlider() {
            slider.style.left = -items[active].offsetLeft + 'px';
            let lastActiveDot = sliderSet.querySelector('.slider .dots li.active');
            if (lastActiveDot) {
                lastActiveDot.classList.remove('active');
            }
            dots[active].classList.add('active');
    
            clearInterval(refreshInterval);
            refreshInterval = setInterval(() => { nextSlide(); }, 3000);
        }
    
        dots.forEach((li, key) => {
            li.addEventListener('click', () => {
                active = key;
                reloadSlider();
            });
        });
    
        window.onresize = function() {
            reloadSlider();
        };
    
        
        reloadSlider();
    });
});
