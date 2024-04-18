import productsFunc from "./script.js"



(async function () { 
    const products = await fetch('../../src/js/data.json')
    const data = await products.json()
    
    data ? localStorage.setItem('products', JSON.stringify(data)) : []
    productsFunc(data)
})()