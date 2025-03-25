document.addEventListener("change", function (event) {
    // use localstorage para guardar el estado del switch
    if (event.target && event.target.matches('input[type="checkbox"][id^="contrastSwitch"]')) {
        const contrastSwitch = event.target;
        
        if (contrastSwitch.checked) {
            document.body.classList.add("high-contrast");
            localStorage.setItem("highContrast", "true");
        } else {
            document.body.classList.remove("high-contrast");
            localStorage.setItem("highContrast", "false");
        }
    }
});

// aplica el estado guardado al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    const isHighContrast = localStorage.getItem("highContrast") === "true";
    
    if (isHighContrast) {
        document.body.classList.add("high-contrast");
    }
});