// js/script.js

// Shopify Integration
const shopifyDomain = "your-shopify-shop.myshopify.com";
const productEndpoint = `/products.json`;

async function loadProducts() {
    const response = await fetch(`https://${shopifyDomain}${productEndpoint}`);
    const data = await response.json();
    return data.products;
}

// Cart Functionality
let cart = [];

function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

function updateCartDisplay() {
    // Code to update cart display
}

// Smooth Scrolling
const menuLinks = document.querySelectorAll('nav a');
menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Navigation Menu
document.querySelector('nav').innerHTML = `
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
`;

// Initial product loading
loadProducts().then(products => {
    console.log(products);  // Handle products as needed
});
