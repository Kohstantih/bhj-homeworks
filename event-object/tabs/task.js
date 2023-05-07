const menuItems = document.querySelectorAll('.tab');
const itemContent = document.querySelectorAll('.tab__content');

menuItems.forEach((element, index) => {
    element.addEventListener('click', () => {
        menuItems.forEach((el, i) => {
            el.classList.remove('tab_active');
            itemContent[i].classList.remove('tab__content_active')
        });
        element.classList.add('tab_active');
        itemContent[index].classList.add('tab__content_active')
    });    
});