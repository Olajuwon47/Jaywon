  // JavaScript for Modal
  function openModal(name, price) {
    document.getElementById('modal').classList.remove('hidden');
    document.getElementById('product-name').textContent = name;
    document.getElementById('product-price').textContent = `$${price}`;
    }

    function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    }

    document.addEventListener('DOMContentLoaded', function () {
const form = document.getElementById('productForm');
let selectedColor = '';
let selectedSize = '';

// Handle color selection
document.querySelectorAll('.color-option input').forEach(input => {
input.addEventListener('change', function () {
selectedColor = this.value;
console.log('Selected color:', selectedColor);
});
});

// Handle size selection
document.querySelectorAll('.size-option input').forEach(input => {
input.addEventListener('change', function () {
selectedSize = this.value;
console.log('Selected size:', selectedSize);
});
});

// Form submit handler
form.addEventListener('submit', function (event) {
event.preventDefault();
if (!selectedColor || !selectedSize) {
alert('Please select both color and size.');
return;
}
console.log(`Adding to bag: Color - ${selectedColor}, Size - ${selectedSize}`);
// Handle add to bag logic here
});
});

// Show button on scroll
window.onscroll = function() {
  const backToTopButton = document.getElementById("backToTop");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Scroll to top on button click
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}