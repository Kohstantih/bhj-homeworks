const productsBox = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

const productList = [];

if(sessionStorage['list']) {    
    productList.push(...JSON.parse(sessionStorage.getItem('list')));    
    productList.forEach(el => {
        let div = document.createElement('div');
        cartProducts.appendChild(div);   
        div.outerHTML = el;      
    });

    const buttons = document.querySelectorAll('button')
    buttons.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.parentElement.remove();
            saveList();    
        });
    });
};

productsBox.forEach(el => {
    el.addEventListener('click', (e) => { 
        const productQuantityValue = e.currentTarget.querySelector('.product__quantity-value');
                
        let quantityValue = +productQuantityValue.textContent;

        if(e.target.classList.contains('product__quantity-control_dec')) quantityValue--;
        if(e.target.classList.contains('product__quantity-control_inc')) quantityValue++;
        if(quantityValue < 1) quantityValue = 1;

        productQuantityValue.textContent = `${quantityValue}`;        

        if(e.target.classList.contains('product__add')) {
            const cartProductBox = Array.from(cartProducts.querySelectorAll('.cart__product'));
            const imgProduct = e.currentTarget.querySelector('img')
            
            

            if(cartProductBox.some(el => el.dataset.id === e.currentTarget.dataset.id)) {
                const countElement = cartProductBox.find(el => el.dataset.id === e.currentTarget.dataset.id).querySelector('.cart__product-count');
                img = countElement.previousSibling; 

                fly(img);

                countElement.textContent = `${+countElement.textContent + quantityValue}`;
                                
                return saveList();
            };

            const cartProduct = document.createElement('div');
            cartProduct.classList.add('cart__product');
            cartProduct.dataset.id = e.currentTarget.dataset.id;
            cartProducts.appendChild(cartProduct); 
            
            const cartProductImage = document.createElement('img');
            cartProductImage.classList.add('cart__product-image');
            cartProductImage.src = imgProduct.src;
            cartProduct.appendChild(cartProductImage);

            const cartProductCount = document.createElement('div');
            cartProductCount.classList.add('cart__product-count');
            cartProductCount.textContent = `${quantityValue}`;           
            cartProduct.appendChild(cartProductCount);

            const buttonDeleteProduct = document.createElement('button');
            buttonDeleteProduct.textContent = 'Удалить товар';
            buttonDeleteProduct.style.display = 'block';
            buttonDeleteProduct.style.fontSize = '11px'
            cartProduct.appendChild(buttonDeleteProduct);

            buttonDeleteProduct.addEventListener('click', (e) => {
                e.preventDefault();
                cartProduct.remove();
                saveList();
            });
            
            saveList();

            fly();

            function fly(img) {
            if (!img) img = cartProductImage;
            const imgFly = imgProduct.cloneNode(true);
            const startFly = {top, left} = imgProduct.getBoundingClientRect();
            const finishFly = {top, left} = img.getBoundingClientRect();
            
            imgFly.style.top = `${startFly.top + window.pageYOffset}px`;
            imgFly.style.left = `${startFly.left}px`;

            document.body.appendChild(imgFly);

            imgFly.style.position = 'absolute';

            let countInterval = 0
            let intervalId = setInterval(() => { 
               countInterval++;

                if(countInterval === 5) {
                    clearInterval(intervalId);
                    imgFly.remove(); 
                };               
                                              
               imgFly.style.top = `${+imgFly.style.top.slice(0, -2) + (finishFly.top - startFly.top) / 5}px`;               
               imgFly.style.left = `${+imgFly.style.left.slice(0, -2) + (finishFly.left - startFly.left) / 5}px`;
               
               imgFly.replaceWith(imgFly);                             
            }, 100)};
        };
    });
});

function saveList() {
    sessionStorage.clear();
    productList.splice(0, productList.length);
    Array.from(document.querySelectorAll('.cart__product')).forEach(el => productList.push(el.outerHTML));        
    sessionStorage.setItem('list', JSON.stringify(productList));
};