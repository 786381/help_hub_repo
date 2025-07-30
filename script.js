document.getElementById("helpForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Simulate saving the data (you can later use localStorage or a backend)
  const helpRequest = {
    name: name,
    email: email,
    message: message,
    timestamp: new Date().toLocaleString(),
  };

  // Store in localStorage
  let requests = JSON.parse(localStorage.getItem("helpRequests")) || [];
  requests.push(helpRequest);
  localStorage.setItem("helpRequests", JSON.stringify(requests));

  document.getElementById("formResponse").innerText = "Your help request has been submitted!";
  document.getElementById("helpForm").reset();
});


console.log(JSON.parse(localStorage.getItem("helpRequests")));

    // Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved user preference or use system preference
const savedTheme = localStorage.getItem('theme') || 
                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Apply the saved theme
if (savedTheme === 'dark') {
  html.classList.add('dark');
} else {
  html.classList.remove('dark');
}

// Update button icon based on current theme
updateThemeIcon();

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  const theme = html.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  updateThemeIcon();
});

function updateThemeIcon() {
  const isDark = html.classList.contains('dark');
  const moonIcon = themeToggle.querySelector('.fa-moon');
  const sunIcon = themeToggle.querySelector('.fa-sun');
  
  if (isDark) {
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
  } else {
    moonIcon.classList.remove('hidden');
    sunIcon.classList.add('hidden');
  }
}

// Responsive images - we're using the picture element which handles this natively
// No additional JS needed for basic responsive images

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile menu toggle would go here if we add a mobile menu
// Currently using responsive flexbox for navigation