// Example of dynamic product loading
document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById('product-list');

    const products = [
        { name: 'Stylish Red Dress', image: 'images/dress1.jpg' },
        { name: 'Casual White Shirt', image: 'images/shirt1.jpg' },
        // Add more products here
    ];

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement('p');
        productName.textContent = product.name;

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productList.appendChild(productCard);
    });
});
