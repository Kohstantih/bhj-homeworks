const linkCollection = document.querySelectorAll('.has-tooltip');

const help = document.createElement('div');
help.classList.add('tooltip');
help.setAttribute('style', 'top: 0; left: 0');
help.setAttribute('data-position', 'bottom');
document.body.appendChild(help);

linkCollection.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        help.textContent = element.title;
        help.classList.add('tooltip_active');

        const elementSize = {x, y, width, height} = element.getBoundingClientRect();
        const helpSize = {width, height} = help.getBoundingClientRect();

        if(help.dataset.position == 'top') {            
            help.style.top = `${elementSize.y - helpSize.height}px`;        
            help.style.left = `${elementSize.x}px`;
            return;
        } else if(help.dataset.position =='left') {
            help.style.top = `${elementSize.y}px`;        
            help.style.left = `${elementSize.x - helpSize.width}px`;
            if(elementSize.x < helpSize.width)  help.style.left = `${elementSize.x + elementSize.width}px`;
            return;
        }  else if(help.dataset.position =='right') {
            help.style.top = `${elementSize.y}px`;        
            help.style.left = `${elementSize.x + elementSize.width}px`; 
            return;
        };

        help.style.top = `${elementSize.y + elementSize.height}px`;        
        help.style.left = `${elementSize.x}px`;
    })
});

let counter = 0;
const btn = document.createElement('button');
btn.textContent = 'data-position: bottom';
document.body.appendChild(btn);
btn.addEventListener('click', () => {
    counter = (counter + 1) % 4;
    if(counter === 0) {
        help.dataset.position = 'bottom';
        btn.textContent = 'data-position: bottom';
    } else if(counter === 1) {
        help.dataset.position = 'left';
        btn.textContent = 'data-position: left';
    } else if(counter === 2) {
        help.dataset.position = 'top';
        btn.textContent = 'data-position: top';
    } else if(counter === 3) {
        help.dataset.position = 'right';
        btn.textContent = 'data-position: right';
    };
});