const nav = document.getElementById('nav');

window.addEventListener('scroll', function() {
    scrollpostion = window.scrollY;

    if (scrollpostion >= 60) {
        nav.classList.add('nav-dark');
    } else if (scrollpostion <= 60) {
        nav.classList.remove('nav-dark');
    }
});