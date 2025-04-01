window.addEventListener('scroll', function () {
    var barraNav = document.querySelector('nav');
    if (window.scrollY > 100) {
        barraNav.style.backgroundColor = 'rgba(255, 255, 255, 0.65)';
        barraNav.style.backdropFilter = 'blur(9px)';
    } else {
        barraNav.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        barraNav.style.backdropFilter = 'none';
    }
});



