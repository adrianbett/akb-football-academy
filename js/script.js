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

});