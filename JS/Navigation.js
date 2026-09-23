const navigation = document.querySelector("nav");
const openMenu = document.querySelector(".Open-Menu");
const closeMenu = document.querySelector(".Close-Menu");

openMenu.addEventListener('click', () => {
    navigation.classList.add("active");
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
});
closeMenu.addEventListener('click', () => {
    navigation.classList.remove("active");
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
});

navigation.querySelectorAll('a').forEach(link => 
    link.addEventListener('click', () => closeMenu.click())
);
