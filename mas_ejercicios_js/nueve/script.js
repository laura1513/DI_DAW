document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("apellido").focus();
});

function validarFormulario1() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var dni = document.getElementById("dni").value;
    var namePattern = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ]+$/;
    var dniPattern = /^\d{8}[a-zA-Z]$/;
    var tlfPattern = /^\d{9}$/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!namePattern.test(nombre) || nombre === "") {
        alert("Por favor, introduce un nombre válido");
        return false;
    }
    if (!namePattern.test(apellido) || apellido === "") {
        alert("Por favor, introduce un apellido válido");
        return false;
    }
    if (!dniPattern.test(dni)) {
        alert("Por favor, introduce un DNI válido (8 dígitos + letra)");
        return false;
    }
    if (!tlfPattern.test(telefono)) {
        alert("Por favor, introduce un número de teléfono válido (9 dígitos)");
        return false;
    }
    if (!emailPattern.test(correo)) {
        alert("Por favor, introduce un correo electrónico válido");
        return false;
    }
    return true;
}
function validarFormulario2() {
    var direccion = document.getElementById("direccion").value;
    var codigoPostal = document.getElementById("codigoPostal").value;
    var localidad = document.getElementById("localidad").value;
    var provincia = document.getElementById("provincia").value;
    var direccionRegex = /.+/;
    var codigoPostalRegex = /^\d{5}$/;
    var localidadProvinciaRegex = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s]+$/;
    if (!direccionRegex.test(direccion) || direccion === "") {
        alert("Por favor, introduce una dirección válida");
        return false;
    }
    if (!codigoPostalRegex.test(codigoPostal)) {
        alert("Por favor, introduce un código postal válido (5 dígitos)");
        return false;
    }
    if (!localidadProvinciaRegex.test(localidad) || localidad === "") {
        alert("Por favor, introduce una localidad válida");
        return false;
    }
    if (!localidadProvinciaRegex.test(provincia) || provincia === "") {
        alert("Por favor, introduce una provincia válida");
        return false;
    }
    return true;
}