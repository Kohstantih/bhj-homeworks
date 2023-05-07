const list = document.querySelector('.dropdown__list');
const value = document.querySelector('.dropdown__value');
const collection = document.querySelectorAll('.dropdown__item')

value.addEventListener('click', openList);

function openList() {
    list.classList.toggle('dropdown__list_active');
};

collection.forEach((el) => {
    el.addEventListener('click', () => {
    event.preventDefault();    
    list.classList.remove('dropdown__list_active');             
    value.textContent = el.querySelector('.dropdown__link').textContent;
    })
});