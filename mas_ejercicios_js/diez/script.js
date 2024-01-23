document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("apellido").focus();
});
function limpiarErrores(formulario) {
    var elementos = formulario.elements;

    for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].classList.contains("error")) {
            elementos[i].classList.remove("error");
        }
    }
}
function validarFormulario1() {
    limpiarErrores(document.getElementById("formulario1"));
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var dni = document.getElementById("dni").value;
    var namePattern = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ]+$/;
    var dniPattern = /^\d{8}[a-zA-Z]$/;
    var tlfPattern = /^\d{9}$/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!namePattern.test(nombre.value) || nombre.value === "") {
        alert("Por favor, introduce un nombre válido");
        nombre.classList.add("error");
        return false;
    }
    if (!namePattern.test(apellido.value) || apellido.value === "") {
        alert("Por favor, introduce un apellido válido");
        apellido.classList.add("error");
        return false;
    }
    if (!dniPattern.test(dni.value)) {
        alert("Por favor, introduce un DNI válido (8 dígitos + letra)");
        dni.classList.add("error");
        return false;
    }
    if (!tlfPattern.test(telefono.value)) {
        alert("Por favor, introduce un número de teléfono válido (9 dígitos)");
        telefono.classList.add("error");
        return false;
    }
    if (!emailPattern.test(correo.value)) {
        alert("Por favor, introduce un correo electrónico válido");
        correo.classList.add("error");
        return false;
    }
    return true;
}
function validarFormulario2() {
    limpiarErrores(document.getElementById("formulario2"));
    var direccion = document.getElementById("direccion").value;
    var codigoPostal = document.getElementById("codigoPostal").value;
    var localidad = document.getElementById("localidad").value;
    var provincia = document.getElementById("provincia").value;
    var direccionPattern = /.+/;
    var postalPattern = /^\d{5}$/;
    var localidadPattern = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s]+$/;
    if (!direccionPattern.test(direccion.value) || direccion.value === "") {
        alert("Por favor, introduce una dirección válida");
        direccion.classList.add("error");
        return false;
    }
    if (!postalPattern.test(codigoPostal.value)) {
        alert("Por favor, introduce un código postal válido (5 dígitos)");
        codigoPostal.classList.add("error");
        return false;
    }
    if (!localidadPattern.test(localidad.value) || localidad.value === "") {
        alert("Por favor, introduce una localidad válida");
        localidad.classList.add("error");
        return false;
    }
    if (!localidadPattern.test(provincia.value) || provincia.value === "") {
        alert("Por favor, introduce una provincia válida");
        provincia.classList.add("error");
        return false;
    }
    return true;
}