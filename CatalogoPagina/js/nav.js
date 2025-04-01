window.addEventListener('scroll', function () {
    var barraNav = document.querySelector('nav');
    var txtNav = document.querySelectorAll('nav ul li a');
    if (window.scrollY > 100) {
        barraNav.style.backgroundColor = 'rgba(255, 255, 255, 0.65)';
        barraNav.style.backdropFilter = 'blur(9px)';
        txtNav.forEach(texto => {
            texto.style.fontWeight = "500";
        });
    } else {
        barraNav.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        barraNav.style.backdropFilter = 'none';
        txtNav.forEach(texto => {
            texto.style.fontWeight = "400";
        });
    }
});



