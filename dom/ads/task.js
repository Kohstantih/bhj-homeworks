const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));

rotatorCase.forEach(el => {
    const color = el.dataset.color;
    el.style.color = color;    
});

let i = 0;

function rotator() {
    const intervalId = setInterval(() => {
        rotatorCase[i].classList.remove('rotator__case_active');
        i++;
        if(i === rotatorCase.length) i = 0;    
        rotatorCase[i].classList.add('rotator__case_active');        
        clearInterval(intervalId);
        rotator();
    }, rotatorCase[i].dataset.speed);
};

rotator();