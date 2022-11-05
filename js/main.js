const hamburger = document.querySelector('.hamburger')

const list = document.querySelector('.list')

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('active')
   list.classList.toggle('active')
})

// const menuToggleIcon = selectElement('#hamburger'); 

// const toggleMenu = ( ) => {
//     const navbar = selectElement('#list');
//     navbar.classList.toggle('activated');
//     menuToggleIcon.classList.toggle('activated');
// };

// menuToggleIcon.addEventListener('click', toggleMenu);

