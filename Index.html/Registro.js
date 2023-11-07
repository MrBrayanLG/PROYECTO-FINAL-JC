// Registro.js

// Función para registrar y almacenar el usuario en el localStorage
function guardarUsuario() {
    // Captura los datos del formulario
    var nombre = document.getElementById("nombres").value;
    var apellido = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("password").value;
    var genero = document.getElementById("genero").value;

    // Crea un objeto con los datos del usuario
    var usuario = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        contraseña: contraseña,
        genero: genero
    };

    // Convierte el objeto en una cadena JSON
    var usuarioJSON = JSON.stringify(usuario);

    // Guarda los datos del usuario en el localStorage
    localStorage.setItem('usuario', usuarioJSON);

    // Redirige al usuario a la página de inicio de sesión
    window.location.href = 'Disfruta-Síon-Login.html';
}


// Función para iniciar sesión
function iniciarSesion() {
    // Captura el correo y la contraseña ingresados
    var correo = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Recupera los datos del usuario registrado del localStorage
    var usuarioJSON = localStorage.getItem('usuario');

    if (usuarioJSON) {
        // Convierte los datos del usuario almacenados en localStorage a un objeto
        var usuario = JSON.parse(usuarioJSON);

        // Comprueba si el correo y la contraseña coinciden con los datos almacenados
        if (correo === usuario.correo && password === usuario.contraseña) {
            // Los datos coinciden, redirige al usuario a la página de inicio
            window.location.href = 'Disfruta-Sión-Inicio.html';
        } else {
            // Los datos no coinciden, muestra un mensaje de error
            alert('Cuenta no registrada o datos incorrectos.');
        }
    } else {
        // No se encontró ningún usuario registrado, muestra un mensaje de error
        alert('Cuenta no registrada o datos incorrectos.');
    }
}









