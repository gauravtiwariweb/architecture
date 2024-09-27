const leftButton = document.querySelector('.carousel-button.left');
const rightButton = document.querySelector('.carousel-button.right');
const carouselInner = document.querySelector('.profile');

leftButton.addEventListener('click', () => {
    carouselInner.scrollBy({ left: -300, behavior: 'smooth' });
});

rightButton.addEventListener('click', () => {
    carouselInner.scrollBy({ left: 300, behavior: 'smooth' });
});
// const prevButton = document.getElementById('prev-button');
// const nextButton = document.getElementById('next-button');
// const profileCards = document.querySelector('.profile-cards');

// let scrollAmount = 0;

// prevButton.addEventListener('click', () => {
//     profileCards.scrollBy({
//         top: 0,
//         left: -220,
//         behavior: 'smooth'
//     });
// });

// nextButton.addEventListener('click', () => {
//     profileCards.scrollBy({
//         top: 0,
//         left: 220,
//         behavior: 'smooth'
//     });
// });
