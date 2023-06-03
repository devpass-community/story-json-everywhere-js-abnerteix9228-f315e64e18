const getProduct = require('./productService');

(async() => {
    const productId = 10;
    const product = await getProduct(productId);
    console.log(product.title);
})();
