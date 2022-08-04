if (!localStorage.nombre) {
    function guardarDatos() {
        localStorage.nombre = document.getElementById("nombre").value;
        document.getElementById("datos").innerHTML = "Hola " + localStorage.nombre;
        document.querySelector("#intro").className = "";
        document.querySelector("#start").className = "";
        document.querySelector('#hola').className = 'oculto'
    }
} else {
    document.getElementById("datos").innerHTML = "Hola otra vez " + localStorage.nombre;
    document.querySelector("#intro").className = "";
    document.querySelector("#start").className = "";
    document.querySelector('#hola').className = 'oculto'

}



