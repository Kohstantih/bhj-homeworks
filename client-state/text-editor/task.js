const editor = document.getElementById('editor');

const card = document.querySelector('.card')
const button = document.createElement('button');
button.textContent = 'Очистить содержимое';
button.style.marginLeft = 'auto';
button.style.display = 'block'
card.appendChild(button);

if(sessionStorage.editor) editor.value = JSON.parse(sessionStorage.editor)

editor.addEventListener('input', (e) => {
    sessionStorage.setItem('editor', JSON.stringify(editor.value));    
});

button.addEventListener('click', (e) => {
    e.preventDefault();
    editor.value = '';
    sessionStorage.clear();
});