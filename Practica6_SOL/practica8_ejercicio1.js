'use strict'

document.getElementById("enviar").addEventListener("click", function () {

    var nombre = document.getElementById("nombre").value;
    var color = document.getElementById("color").value;

    var radios = document.getElementsByName("fuente");

    // Buscar el radio button seleccionado
    var fuenteSeleccionada;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            fuenteSeleccionada = radios[i].value;
            break; // Salir del bucle una vez que se encuentra el radio button seleccionado
        }
    }
    //Checkbox
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    // Crear un array para almacenar los valores seleccionados
    var efectosSeleccionados = [];

    // Iterar sobre los elementos checkbox seleccionados
    checkboxes.forEach(function (checkbox) {
        efectosSeleccionados.push(checkbox.name);
    });

    let span = document.getElementById("resultado");
    let parrafo = document.createElement("p");
    parrafo.innerHTML = nombre;
    span.appendChild(parrafo);

    var efectos = efectosSeleccionados.join(" ");

    var estilos = "color: " + color + "; font-family: " + fuenteSeleccionada +
        "; text-decoration: " + efectos + "; font-weight: " + efectos + "; font-style: " + efectos + "; font-variant " + efectos +
        "; text-transform: capitalize; font-size: 50px;";

    parrafo.setAttribute('style', estilos);


    var nuevaVentana = window.open('', '', 'width=800,height=400');

    // Construir el contenido de la ventana
    var contenido = `
        <html>
        <head>
            <title>Ventana del Usuario</title>
            <style>
                p {
                    ${estilos}
                }
            </style>
        </head>
        <body>
            <h1>${nombre}</h1>
            <p>${nombre}</p>
            <button id='cerrar'>Cerrar</button>
        </body>
        </html>
    `;

    // Escribir el contenido en la nueva ventana
    nuevaVentana.document.write(contenido);

    nuevaVentana.document.getElementById('cerrar').addEventListener('click', function () {
        nuevaVentana.close();
    });
});
