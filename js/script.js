// ===== AKB Football Academy - Main JS =====

document.addEventListener('DOMContentLoaded', () => {
  console.log('AKB Football Academy site loaded');

  // ===== Gallery Filter =====
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {

      // Update active button
      filterButtons.forEach(btn => {
        btn.classList.remove('active', 'btn-success');
        btn.classList.add('btn-outline-success');
      });
      button.classList.add('active', 'btn-success');
      button.classList.remove('btn-outline-success');

      // Filter items
      const filter = button.getAttribute('data-filter');
      galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

    });
  });

// ===== Contact Form Validation =====
  const submitBtn = document.getElementById('submitBtn');

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {

      const fullName = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const playerAge = document.getElementById('playerAge').value.trim();
      const program = document.getElementById('program').value;

      const successMsg = document.getElementById('formSuccess');
      const errorMsg = document.getElementById('formError');

      // Hide both messages first
      successMsg.classList.add('d-none');
      errorMsg.classList.add('d-none');

      // Basic email format check
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Validation checks
      if (!fullName || !email || !phone || !playerAge || !program) {
        errorMsg.classList.remove('d-none');
        return;
      }

      if (!emailPattern.test(email)) {
        errorMsg.classList.remove('d-none');
        return;
      }

      if (playerAge < 5 || playerAge > 18) {
        errorMsg.classList.remove('d-none');
        return;
      }

      // All good
      successMsg.classList.remove('d-none');

      // Clear form
      document.getElementById('fullName').value = '';
      document.getElementById('email').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('playerAge').value = '';
      document.getElementById('program').value = '';
      document.getElementById('message').value = '';

    });
  }

// ===== Dark/Light Mode Toggle =====
  const darkModeToggle = document.getElementById('darkModeToggle');

  if (darkModeToggle) {
    // Check if dark mode was previously enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      darkModeToggle.textContent = '☀️ Light Mode';
    }

    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');

      if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️ Light Mode';
        localStorage.setItem('darkMode', 'enabled');
      } else {
        darkModeToggle.textContent = '🌙 Dark Mode';
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  }

// ===== Back to Top Button =====
  const backToTop = document.getElementById('backToTop');

  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});