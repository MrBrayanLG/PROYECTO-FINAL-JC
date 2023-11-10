function toggleOptions() {
    var optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.style.display = (optionsContainer.style.display === "block") ? "none" : "block";
}

function goToProfile() {
    // Lógica para redirigir al perfil
    alert("Redirigiendo al perfil...");
}

// Función para cerrar sesión
function cerrarSesion() {
    // Redirige al usuario a la página de inicio de sesión
    window.location.href = 'Disfruta-Síon-Login.html';

}

