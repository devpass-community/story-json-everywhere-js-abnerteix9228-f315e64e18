async function getProduct(productId) {

    try {
        const apiUrl = `https://fakestoreapi.com/products/${productId}`;
        const response = await fetch(apiUrl);

        if (response.ok) {
            const product = await response.json();
            return product;

        } else {
            console.error(`Erro requisição: ${response.status}`);
            return null;

        }
    }catch (error) {
        console.error(`Erro requisição: `, error);
        return null;
    }
}

module.exports = getProduct;
