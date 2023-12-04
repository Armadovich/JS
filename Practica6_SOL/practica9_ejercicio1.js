document.addEventListener("DOMContentLoaded", function () {
    // Function to create a box with the specified color
    function createBox(color) {
        var newBox = document.createElement("div");
        newBox.className = "caja " + color;
        newBox.textContent = document.getElementById("seccion").children.length + 1;
        document.getElementById("seccion").appendChild(newBox);
    }

    // Event listener for the "Crear" button
    document.getElementById("crear").addEventListener("click", function () {
        var cantidad = document.getElementById("cantidad").value;
        for (var i = 0; i < cantidad; i++) {
            createBox("violeta");
        }
    });

    seccion.addEventListener('mouseover', function (event) {
        var target = event.target;
    
        if (target.classList.contains('caja')) {
            target.setAttribute('class', 'caja naranja');
        }
    });
    
    seccion.addEventListener('mouseout', function (event) {
        var target = event.target;
    
        if (target.classList.contains('caja')) {
            target.setAttribute('class', 'caja');
        }
    });
    

    // Event listener for the "Antes" button
    document.getElementById("antes").addEventListener("click", function () {
        var numeroAnterior = document.getElementById("numeroAnterior").value;
        var posicion = parseInt(numeroAnterior);
        if (!isNaN(posicion) && posicion >= 1 && posicion <= document.getElementById("seccion").children.length + 1) {
            var color = "amarillo";
            createBox(color);
            var boxes = document.getElementById("seccion").children;
            document.getElementById("seccion").insertBefore(boxes[boxes.length - 1], boxes[posicion - 1]);
        } else {
            alert("La posición indicada no es válida");
        }
    });

    // Event listener for the "Despues" button
    document.getElementById("despues").addEventListener("click", function () {
        var numeroPosterior = document.getElementById("numeroPosterior").value;
        var posicion = parseInt(numeroPosterior);
        if (!isNaN(posicion) && posicion >= 1 && posicion <= document.getElementById("seccion").children.length) {
            var color = "oro";
            createBox(color);
            var boxes = document.getElementById("seccion").children;
            document.getElementById("seccion").insertBefore(boxes[boxes.length - 1], boxes[posicion]);
            console.log(boxes[boxes.length]);
            console.log(boxes[posicion]);
        } else {
            alert("La posición indicada no es válida");
        }
    });
});
