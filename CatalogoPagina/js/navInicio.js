document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function isSectionInView(section) {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight * 0.3; 
    }

    function updateActiveLink() {
        navLinks.forEach(link => {
            link.parentElement.classList.remove('active-li');
        });

        sections.forEach(section => {
            if (isSectionInView(section)) {
                const activeLink = document.querySelector(`nav ul li a[href="#${section.id}"]`);
                if (activeLink) {
                    activeLink.parentElement.classList.add('active-li');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
});