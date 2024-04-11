const blogCards = document.querySelectorAll('.blog-card');

blogCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});
