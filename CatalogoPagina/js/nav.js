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

//slider

function slide(){
    let slideValue = document.getElementById("slider").value;
    document.getElementById("my-img").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
}
