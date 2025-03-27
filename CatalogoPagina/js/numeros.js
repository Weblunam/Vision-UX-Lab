document.addEventListener("DOMContentLoaded", function () {
    function animateNumber(numberElement, target) {
        let current = 0;
        const duration = 2500; 
        const increment = target / (duration / 50); 

        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(interval);
            }
            numberElement.textContent = Math.round(current) + '%'; 
        }, 50);
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numberElements = entry.target.querySelectorAll('.numero h1');
                numberElements.forEach(numberElement => {
                    const target = parseInt(numberElement.textContent);
                    animateNumber(numberElement, target); 
                    numberElement.classList.add('active'); 
                });
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.9 }); 
    observer.observe(document.querySelector('#numeros'));
});