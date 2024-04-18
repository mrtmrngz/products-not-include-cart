import { swiperSlide1 } from "./swiper.js";

function productsFunc(products) {
    const sliderProductContainer = document.querySelector('.products-slider .products-list')
    const productPageProductsContainer = document.querySelector('.products-page-products .products-list')
    const filters = document.querySelectorAll('.filters .filter')

    filters.forEach(filterBtn => {
        filterBtn.addEventListener('click', (e) => {
            document.querySelector('.filters .filter.active').classList.remove('active')
            filterBtn.classList.add('active')
            const filterId = e.target.dataset.id
            displayProducts(filterId)
        })
    })
    

    
    function displayProducts(filter) {
        let result = ""
        products.forEach(item => {
            if((filter === item.category || filter === "all") || !filter) {
                result += `
                    <li class="product-item ${sliderProductContainer ? "swiper-slide": ""}">
                        <div class="card-image">
                            <img src="${item.img}" alt="" class="img-fluid">
                        </div>
                        <div class="card-body">
                            <div class="review-and-stock">
                                <strong class="stock ${item.stock ? "yes-stock" : "no-stock"}">${item.stock ? "Stock" : "No Stock"}</strong>
                                <div class="reviews">
                                    <i class="bi bi-heart-fill"></i>
                                    <i class="bi bi-heart-fill"></i>
                                    <i class="bi bi-heart-fill"></i>
                                    <i class="bi bi-heart-fill"></i>
                                    <i class="bi bi-heart-half"></i>
                                </div>
                            </div>
                            <h4 class="product-brand">Asus</h4>
                            <h3 class="product-model">${item.name}</h3>
                            <div class="prices">
                                <span class="old-price">$${item.price.oldPrice.toFixed(2)}</span>
                                <span class="new-price">$${item.price.newPrice.toFixed(2)}</span>
                            </div>
                            <button class="product-button">Add To Cart</button>
                        </div>
                    </li>
                `
            }
        })

        sliderProductContainer ? sliderProductContainer.innerHTML = result : ""
        productPageProductsContainer ? productPageProductsContainer.innerHTML = result : ""
        swiperSlide1()
    }

    if(sliderProductContainer) {
        displayProducts()
    }else if(productPageProductsContainer) {
        displayProducts(document.querySelector('.filters .filter').dataset.id)
    }

}


export default productsFunc