window.addEventListener('scroll', function () {
    let parallax = document.querySelector('#parallax');
    let scrollY = window.scrollY;
    parallax.style.right = scrollY * 0.4 + "px";
});