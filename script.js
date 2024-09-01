// document.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.full-screen-menu');
//     const menuButton = document.querySelector('.navi_container');
//     const closeButton = document.querySelector('.full-screen-menu .close-menu');

    
//     menuButton.addEventListener('click', () => {
//         console.log("clicked")
//         menu.classList.add('show');
//     });

//     closeButton.addEventListener('click', () => {
//         menu.classList.remove('show');
//     });

//     // Optionally, hide the menu if clicking outside of it
//     document.addEventListener('click', (event) => {
//         if (menu.classList.contains('show') && !menu.contains(event.target) && !menuButton.contains(event.target)) {
//             menu.classList.remove('show');
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const Effect_button = document.querySelector('.circle-effect');
    const body = document.querySelector('body');

    Effect_button.addEventListener('click', () => {
        body.style.display = 'none';
    });
})