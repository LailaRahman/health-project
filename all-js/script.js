// Toggle the navigation menu on smaller screens
const menuButton = document.getElementById('show-menue-btn');
const navItems = document.querySelector('.nav-items');

menuButton.addEventListener('click', () => {
    navItems.classList.toggle('active');
});

// JavaScript for toggling FAQ answers
document.querySelectorAll('.faq').forEach(faq => {
    faq.addEventListener('click', () => {
      const answer = faq.querySelector('.answer');
      const toggle = faq.querySelector('.toggle');

      // Toggle display of the answer
      if (answer.style.display === 'none') {
        answer.style.display = 'block';
        toggle.textContent = '-';
      } else {
        answer.style.display = 'none';
        toggle.textContent = '+';
      }
    });
  });