function toggleOptions() {
    var optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.style.display = (optionsContainer.style.display === "block") ? "none" : "block";
}

function goToProfile() {
    alert("Redirigiendo al perfil...");
}

function cerrarSesion() {
    window.location.href = 'Disfruta-Síon-Login.html';

}
document.addEventListener("DOMContentLoaded", function () {
    const nombreUsuario = localStorage.getItem('nombreUsuario');
    if (nombreUsuario) {
        const saludoUsuarioElement = document.getElementById('saludo-usuario');
        if (saludoUsuarioElement) {
            saludoUsuarioElement.textContent = `¡Bienvenido, ${nombreUsuario}!`;
        }
    }
});

