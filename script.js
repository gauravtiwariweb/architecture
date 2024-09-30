const leftButton = document.querySelector('.carousel-button.left');
const rightButton = document.querySelector('.carousel-button.right');
const carouselInner = document.querySelector('.profile');

leftButton.addEventListener('click', () => {
    carouselInner.scrollBy({ left: -300, behavior: 'smooth' });
});

rightButton.addEventListener('click', () => {
    carouselInner.scrollBy({ left: 300, behavior: 'smooth' });
});
