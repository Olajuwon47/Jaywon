function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    const menuButton = document.getElementById("mobile-menu-button");
    const openIcon = menuButton.querySelector(".menu-open-icon");
    const closeIcon = menuButton.querySelector(".menu-close-icon");

    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    
    // Toggle aria-expanded attribute
    menuButton.setAttribute("aria-expanded", !isExpanded);

    // Toggle menu visibility
    menu.classList.toggle("hidden");

    // Toggle icons
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  }

  function toggleSearch() {
    const searchContainer = document.getElementById('search-container');
    searchContainer.classList.toggle('hidden');
  }

  function searchFunction(event) {
    if (event.key === 'Enter') {
      const query = document.getElementById('search-input').value;
      if (query) {
        // Redirect to a search results page or perform a search action
        window.location.href = `/search?query=${encodeURIComponent(query)}`;
      }
    }
  }

  function toggleNotifications() {
    const panel = document.getElementById('notificationPanel');
    panel.classList.toggle('hidden');
  }

  const menuButton = document.getElementById("user-menu-button");
  const dropdownMenu = document.getElementById("dropdown-menu");

  // Toggle dropdown menu visibility
  menuButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", (event) => {
    if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.add("hidden");
    }
  });

 // Toggle switch functionality
 document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.querySelector('button[role="switch"]');
  const switchSpan = toggleSwitch.querySelector('span[aria-hidden="true"]');
  let isAgreed = false;
  
  toggleSwitch.addEventListener('click', () => {
    isAgreed = !isAgreed;
    toggleSwitch.setAttribute('aria-checked', isAgreed);
    switchSpan.classList.toggle('translate-x-3.5', isAgreed);
    toggleSwitch.classList.toggle('bg-indigo-600', isAgreed);
    toggleSwitch.classList.toggle('bg-gray-200', !isAgreed);
  });

  // Form submission
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (!firstName || !lastName || !email || !message || !isAgreed) {
      alert('Please fill all fields and agree to the privacy policy.');
      return;
    }

    // Simulate form processing
    alert('Form submitted successfully!');

    // Reset form if needed
    this.reset();
    isAgreed = false;
    toggleSwitch.setAttribute('aria-checked', 'false');
    switchSpan.classList.remove('translate-x-3.5');
    toggleSwitch.classList.add('bg-gray-200');
    toggleSwitch.classList.remove('bg-indigo-600');
  });
});

function subscribe(event) {
  event.preventDefault();
  const email = document.getElementById("email-address").value;
  alert(`Subscribed with: ${email}`);
  // Here you would send the email data to your server
  document.getElementById("newsletter-form").reset();
}

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