document.addEventListener("change", function (event) {
    // Protanopia Switch
    if (event.target && event.target.matches('input[type="checkbox"][id^="protanopiaSwitch"]')) {
        const protanopiaSwitch = event.target;

        if (protanopiaSwitch.checked) {
            document.body.classList.add("protanopia");
            document.body.classList.remove("deuteranopia", "tritanopia"); // Asegura que no haya otras clases activas
            localStorage.setItem("protanopia", "true");
            localStorage.setItem("deuteranopia", "false");
            localStorage.setItem("tritanopia", "false");
        } else {
            document.body.classList.remove("protanopia");
            localStorage.setItem("protanopia", "false");
        }
    }

    // Deuteranopia Switch
    if (event.target && event.target.matches('input[type="checkbox"][id^="deuteranopiaSwitch"]')) {
        const deuteranopiaSwitch = event.target;

        if (deuteranopiaSwitch.checked) {
            document.body.classList.add("deuteranopia");
            document.body.classList.remove("protanopia", "tritanopia"); // Asegura que no haya otras clases activas
            localStorage.setItem("deuteranopia", "true");
            localStorage.setItem("protanopia", "false");
            localStorage.setItem("tritanopia", "false");
        } else {
            document.body.classList.remove("deuteranopia");
            localStorage.setItem("deuteranopia", "false");
        }
    }

    // Tritanopia Switch
    if (event.target && event.target.matches('input[type="checkbox"][id^="tritanopiaSwitch"]')) {
        const tritanopiaSwitch = event.target;

        if (tritanopiaSwitch.checked) {
            document.body.classList.add("tritanopia");
            document.body.classList.remove("protanopia", "deuteranopia"); // Asegura que no haya otras clases activas
            localStorage.setItem("tritanopia", "true");
            localStorage.setItem("protanopia", "false");
            localStorage.setItem("deuteranopia", "false");
        } else {
            document.body.classList.remove("tritanopia");
            localStorage.setItem("tritanopia", "false");
        }
    }
});

// Aplica el estado guardado de cada tipo de daltonismo al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    const isProtanopia = localStorage.getItem("protanopia") === "true";
    const isDeuteranopia = localStorage.getItem("deuteranopia") === "true";
    const isTritanopia = localStorage.getItem("tritanopia") === "true";

    if (isProtanopia) {
        document.body.classList.add("protanopia");
    }

    if (isDeuteranopia) {
        document.body.classList.add("deuteranopia");
    }

    if (isTritanopia) {
        document.body.classList.add("tritanopia");
    }
});
