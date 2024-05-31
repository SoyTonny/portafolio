let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    if (menuVisible) {
        nav.classList.remove("responsive");
    } else {
        nav.classList.add("responsive");
    }
    menuVisible = !menuVisible;
}

// Cierra el menú cuando se hace clic en una opción
function cerrarMenu() {
    const nav = document.getElementById("nav");
    if (menuVisible) {
        nav.classList.remove("responsive");
        menuVisible = false;
    }
}

// Asigna el evento de clic al botón del menú
document.getElementById("menuButton").addEventListener("click", mostrarOcultarMenu);

// Asigna el evento de clic a cada opción del menú
document.querySelectorAll("#nav ul li a").forEach((enlace) => {
    enlace.addEventListener("click", cerrarMenu);
});
