// Example of products list
const products = [
    { id: 1, name: 'Stylish Red Dress', price: 49.99, image: 'images/product1.jpg' },
    { id: 2, name: 'Casual White Shirt', price: 29.99, image: 'images/product2.jpg' },
    // Add more products as needed
];

document.addEventListener('DOMContentLoaded', function () {
    // Display products in shop.html
    if (document.getElementById('product-list')) {
        const productList = document.getElementById('product-list');
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;

            const productName = document.createElement('p');
            productName.textContent = product.name;

            const productPrice = document.createElement('p');
            productPrice.textContent = `$${product.price}`;

            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = 'Add to Cart';
            addToCartButton.addEventListener('click', () => addToCart(product));

            productCard.appendChild(productImage);
            productCard.appendChild(productName);
            productCard.appendChild(productPrice);
            productCard.appendChild(addToCartButton);

            productList.appendChild(productCard);
        });
    }

    // Handle cart functionality
    if (document.getElementById('cart-items')) {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const cartContainer = document.getElementById('cart-items');
        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.textContent = `${item.name} - $${item.price}`;
            cartContainer.appendChild(cartItem);
        });
    }

    // Checkout button
    document.getElementById('checkout')?.addEventListener('click', function() {
        alert('Proceed to checkout');
    });
});

// Add item to cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} has been added to your cart`);
}
