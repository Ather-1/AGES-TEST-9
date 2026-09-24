// const track   = document.querySelector('.GP-slider');
// const slides  = document.querySelectorAll('.GP-slide');
// const nextBtn = document.querySelector('.GP-prv-btn');  // right arrow
// const prevBtn = document.querySelector('.GP-nxt-btn');  // left arrow

// let index = 0;   // card 1 shows first

// function updateSlider() {
//     track.style.transform = `translateX(${-index * 100}%)`;
// }

// // nextBtn.addEventListener('click', () => {
// //     index = (index + 1) % slides.length;   // loops back to card 1 after last
// //     updateSlider();
// // });

// // prevBtn.addEventListener('click', () => {
// //     index = (index - 1 + slides.length) % slides.length;
// //     updateSlider();
// // });


// nextBtn.addEventListener('click', () => {
//     if (index < slides.length - 1) { index++; updateSlider(); }
// });

// prevBtn.addEventListener('click', () => {
//     if (index > 0) { index--; updateSlider(); }
// });



const track   = document.querySelector('.Global-Projects');
const slides  = document.querySelectorAll('.GP-slide');
const nextBtn = document.querySelector('.GP-prv-btn');  // right arrow
const prevBtn = document.querySelector('.GP-nxt-btn');  // left arrow

let index = 0;

function updateSlider() {
    track.style.transform = `translateX(${-index * 100}%)`;   // NOT 100/slides.length
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;        // loops: last → first
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
});