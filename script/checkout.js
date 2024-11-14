// Array of product objects
const products = [
  { id: 1, name: 'Product 1', price: 10.0 },
  { id: 2, name: 'Product 2', price: 20.0 },
  { id: 3, name: 'Product 3', price: 15.0 },
];

// Object to store cart items
let cart = {};

// Function to display products
function displayProducts() {
  const productList = document.getElementById('product-list');
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <span>${product.name} - $${product.price.toFixed(2)}</span>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });
}

// Function to add product to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  // If product is already in the cart, increase quantity
  if (cart[productId]) {
    cart[productId].quantity += 1;
  } else {
    cart[productId] = { ...product, quantity: 1 };
  }
  updateCart();
}

// Function to remove product from cart
function removeFromCart(productId) {
  delete cart[productId];
  updateCart();
}

// Function to update cart display and calculate total
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  let total = 0;

  Object.values(cart).forEach(item => {
    total += item.price * item.quantity;
    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');
    cartItemDiv.innerHTML = `
      <span>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</span>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartItems.appendChild(cartItemDiv);
  });

  document.getElementById('total-amount').textContent = total.toFixed(2);
}

// Initialize the page with products
displayProducts();
