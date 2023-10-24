((d) => {
    const $botonesRadio = d.querySelectorAll("input[name='rowColumn']");
    const $cRowColumn = d.getElementById('rowColumn');
    const seleccion = () => {
        let botonSeleccionado = d.querySelector('input[name="rowColumn"]:checked');
        if (botonSeleccionado.value === "c-row") {
            $cRowColumn.classList.add("c-row");
            $cRowColumn.classList.remove("c-row-reverse", "c-column", "c-column-reverse");
        } else if (botonSeleccionado.value === "c-row-reverse") {
            $cRowColumn.classList.add("c-row-reverse");
            $cRowColumn.classList.remove("c-row", "c-column", "c-column-reverse");
        } else if (botonSeleccionado.value === "c-column") {
            $cRowColumn.classList.add("c-column");
            $cRowColumn.classList.remove("c-row", "c-row-reverse", "c-column-reverse");
        } else if (botonSeleccionado.value === "c-column-reverse") {
            $cRowColumn.classList.add("c-column-reverse");
            $cRowColumn.classList.remove("c-row", "c-row-reverse", "c-column");
        }
    }
    $botonesRadio.forEach(boton => {
        boton.addEventListener("change", seleccion)
    })
    seleccion();
})(document);