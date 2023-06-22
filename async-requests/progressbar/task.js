const progress = document.getElementById( 'progress' );
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest;
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');    
    xhr.upload.addEventListener('progress', (e) => {
        progress.value = (e.loaded / e.total).toFixed(1);
        console.log(progress.value);
    });

    xhr.send(new FormData(form));
});