const fontSize = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');
const color = document.querySelector('.book__control_color').querySelectorAll('a');
const background = document.querySelector('.book__control_background').querySelectorAll('a');

let size = '';

fontSize.forEach(element => {
    element.addEventListener('click', (e) => {
        fontSize.forEach(el => {
            el.classList.remove('font-size_active');
            e.preventDefault();
        });
        element.classList.add('font-size_active');

        book.classList.remove(`book_fs-${size}`);
             
        if(element.dataset.size === undefined) return;              
        
        book.classList.add(`book_fs-${element.dataset.size}`);
        size = element.dataset.size;
    });
});

let colorActive = '';

color.forEach(element => {
    element.addEventListener('click', (e) => {
        color.forEach(el => {
            el.classList.remove('color_active');
            e.preventDefault();
        });
        element.classList.add('color_active');
             
        book.classList.remove(`book_color-${colorActive}`);
        book.classList.add(`book_color-${element.dataset.textColor}`);
        colorActive = element.dataset.textColor;
    });
});

let backgroundActive = '';

background.forEach(element => {
    element.addEventListener('click', (e) => {
        background.forEach(el => {
            el.classList.remove('color_active');
            e.preventDefault();
        });
        element.classList.add('color_active');
             
        book.classList.remove(`book_bg-${backgroundActive}`);
        book.classList.add(`book_bg-${element.dataset.bgColor}`);
        backgroundActive = element.dataset.bgColor;
    });
});