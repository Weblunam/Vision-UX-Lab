var barraNav = document.querySelectorAll('nav');
var nav2 = document.querySelector('#nav-responsiva');
var txtNavResponsiva = document.querySelectorAll('#nav-responsiva ul li a');
var menu = document.querySelector('#menu-icon');
var close = document.querySelector('#close-icon');

barraNav.forEach(barra => {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            barra.style.backgroundColor = 'rgba(255, 255, 255, 0.65)';
            barra.style.backdropFilter = 'blur(9px)';
        } else {
            barra.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            barra.style.backdropFilter = 'none';
        }
    });
});

//nav responsiva

function abrirNavResponsiva() {
    nav2.classList.add("estilo-nav-responsiva");
    txtNavResponsiva.forEach(texto => {
        texto.style.display = "block";
        setTimeout(() => {
            texto.style.opacity = "1";
        }, 250);
    });
    close.style.display = "block";
    menu.style.display = "none";
}

function cerrarNavResponsiva() {
    nav2.classList.remove("estilo-nav-responsiva");
    close.style.display = "none";
    txtNavResponsiva.forEach(texto => {
        texto.style.opacity = "0";
        setTimeout(() => {
            texto.style.display = "none";
        }, 250);
    });
    menu.style.display = "block";
}





