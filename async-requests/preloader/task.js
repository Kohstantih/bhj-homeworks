let list = [];

if(sessionStorage['list']) {
    loader.classList.remove('loader_active');
    list.push(...JSON.parse(sessionStorage.getItem('list')));    
    list.forEach(el => {
        const code = el.charCode;
        const value = el.value;
        addItemText(code, value);   
    });
};

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.responseType = 'text';

xhr.addEventListener('readystatechange', (e) => {
    if(xhr.DONE) {
       loader.classList.remove('loader_active');

       const response = JSON.parse(xhr.responseText).response.Valute;

       list.splice(0, list.length);

       for (key in response) {
            list.push({charCode: response[key].CharCode, value: response[key].Value});
       };      
       
       list.forEach(el => {
           const code = el.charCode;
           const value = el.value;
           addItemText(code, value);   
       });
        
       sessionStorage.clear();                     
       sessionStorage.setItem('list', JSON.stringify(list));

       xhr.abort();
    };
});

function addItemText(code, value) {
    const item = document.createElement('div');
    item.classList.add('item');
    items.appendChild(item);

    const  itemCode = document.createElement('div');
    itemCode.classList.add('item__code');
    itemCode.textContent = code;
    item.appendChild(itemCode);
    
    const itemValue = document.createElement('div');
    itemValue.classList.add('item__value');
    itemValue.textContent = value;
    item.appendChild(itemValue);

    const itemCurrency = document.createElement('div');
    itemCurrency.classList.add('item__currency');
    itemCurrency.textContent = 'руб.';
    item.appendChild(itemCurrency);
};

xhr.send();