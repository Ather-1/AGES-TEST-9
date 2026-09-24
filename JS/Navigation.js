
// const navigation = document.querySelector("nav");
// const openMenu = document.querySelector(".Open-Menu");
// const closeMenu = document.querySelector(".Close-Menu");

// openMenu.addEventListener('click', () => {
//     navigation.classList.add("active");
//     openMenu.style.display = 'none';
//     closeMenu.style.display = 'block';
// });
// closeMenu.addEventListener('click', () => {
//     navigation.classList.remove("active");
//     openMenu.style.display = 'block';
//     closeMenu.style.display = 'none';
// });

// navigation.querySelectorAll('a').forEach(link => 
//     link.addEventListener('click', () => closeMenu.click())
// );



let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  // Prevent trigger on rubber-band bouncing at top of page
  if (currentScrollY <= 0) {
    header.classList.remove('nav-hidden');
    return;
  }

  // Scrolling Down -> Hide
  if (currentScrollY > lastScrollY && !header.classList.contains('nav-hidden')) {
    header.classList.add('nav-hidden');
  } 
  // Scrolling Up -> Show
  else if (currentScrollY < lastScrollY && header.classList.contains('nav-hidden')) {
    header.classList.remove('nav-hidden');
  }

  lastScrollY = currentScrollY;
});