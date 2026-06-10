console.log('JS 연결됨');
const navLinks = document.querySelectorAll('nav a');
const cards = document.querySelectorAll('.card');

navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const selected = this.getAttribute('data-category');

    cards.forEach(function(card) {
      if (selected === 'all') {
        card.style.display = 'block';
      } else {
        const tag = card.querySelector('.tag');
        if (tag && tag.textContent === selected) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      }
    });
  });
});