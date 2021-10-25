var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 640px
        800: {
        slidesPerView: 4,
        spaceBetween: 30
        },
        500: {
        slidesPerView: 3,
        spaceBetween: 30
        },
        300: {
        slidesPerView: 2,
        spaceBetween: 30
        }
    }
});

let products = [];

let menProducts = [];
let jewelery = [];
let electronics = [];
let womenProducts = [];



fetch('https://fakestoreapi.com/products')
    .then(response => { return response.json() })
    .then(data => {
        products = data;
        products.forEach(product => {
            switch (product.category) {
                case "men's clothing":
                    menProducts.push(product)
                    
                    break;
                case "jewelery":
                    jewelery.push(product)
                    
                    break;
                case "electronics":
                    electronics.push(product)
                    
                    break;
                case "women's clothing":
                    womenProducts.push(product)
                    
                    break;
                default:
                    break;
            }
        })
        products.forEach(product => {
            document.querySelector('.cart__product').innerHTML+=
            `
            <div class="swiper-slide">
                <div class="box">
                    <div class="img">
                        <div class="caption">
                            <button>В корзину</button>
                            <div class="stars">
                                <img src="img/glavnaya/Star.svg" alt="">
                                <img src="img/glavnaya/Star.svg" alt="">
                                <img src="img/glavnaya/Star.svg" alt="">
                                <img src="img/glavnaya/Star.svg" alt="">
                                <img src="img/glavnaya/Star.svg" alt="">
                            </div>
                        </div>
                        <img src="${product.image}" alt="">
                    </div>
                    <div class="box__items">
                        <div class="box__item">
                            <div class="t">Размер</div>
                            <div class="v">M  L</div>
                        </div>
                        <div class="box__item">
                            <div class="t">Category</div>
                            <div class="v">${product.category}</div>
                        </div>
                        <div class="box__item color">
                            <div class="t">Цвета</div>
                            <div class="v">
                                <span class="green"></span>
                                <span class="blue"></span>
                            </div>
                        </div>
                    </div>
                    <div class="box__info">
                        <a href="#">${product.title}</a>
                        <div class="price">${product.price} $</div>
                    </div>
                </div>
            </div>
            `
        })
        products.forEach(product => {
            document.querySelector('.cart2__product').innerHTML+=
            `
            <div class="swiper-slide">
                        <div class="box">
                            <div class="img">
                                <div class="caption">
                                    <button>В корзину</button>
                                    <div class="stars">
                                        <img src="img/glavnaya/Star.svg" alt="">
                                        <img src="img/glavnaya/Star.svg" alt="">
                                        <img src="img/glavnaya/Star.svg" alt="">
                                        <img src="img/glavnaya/Star.svg" alt="">
                                        <img src="img/glavnaya/Star.svg" alt="">
                                    </div>
                                </div>
                                <img src="${product.image}" alt="">
                            </div>
                            <div class="box__items">
                                <div class="box__item">
                                    <div class="t">Размер</div>
                                    <div class="v">M  L</div>
                                </div>
                                <div class="box__item">
                                    <div class="t">Category</div>
                                    <div class="v">${product.category}</div>
                                </div>
                                <div class="box__item color">
                                    <div class="t">Цвета</div>
                                    <div class="v">
                                        <span class="green"></span>
                                        <span class="blue"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="box__info">
                                <a href="#">${product.title}</a>
                                <div class="price">${product.price} $</div>
                            </div>
                        </div>
                    </div>
            `
            
        })
    })








