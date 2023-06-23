const modal = document.querySelector('.modal');

let answer = true;

if(document.cookie !== '') answer = JSON.parse(getCookie('answer'));

if(answer) {
    modal.classList.add('modal_active');

    const modalClose = document.querySelector('.modal__close')
    modalClose.addEventListener('click', (e) => {
        modal.classList.remove('modal_active');
        document.cookie = 'answer=false; expires=Tue, 12 Jan 2025 02:32:09 GMT'
    });
};

function getCookie(name) {
        const value = "; " + document.cookie;
        let parts = value.split("; " + name + "=");
        if (parts.length === 2) {
            return parts
            .pop()
            .split(";")
            .shift();
        };
};