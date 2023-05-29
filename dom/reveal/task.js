const reveal = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {
    reveal.forEach(el => {
        const {top, bottom} = el.getBoundingClientRect();        

        if (top < window.innerHeight) {
            el.classList.add('reveal_active');                       
        };

        if (bottom < 0 || top > window.innerHeight) {
           el.classList.remove('reveal_active');            
        };
    })
});