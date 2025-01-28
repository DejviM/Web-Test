//This is the script for the navbar to hide when scrolling down and show when scrolling up
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = '-70px'; // Hide navbar 
    } else {
        // Scrolling up
        navbar.style.top = '0'; // Show navbar
    }

    lastScrollTop = scrollTop;
    });
