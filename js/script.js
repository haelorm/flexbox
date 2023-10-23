((d) => {
    const $botonesRadio = d.querySelectorAll("input[name='row']");
    const $cRow = d.getElementById('row');
    const seleccion = () => {
        let botonSeleccionado = d.querySelector('input[name="row"]:checked');
        if (botonSeleccionado.value === "c-row") {
            $cRow.classList.remove("c-row-reverse");
            $cRow.classList.add("c-row");
        } else if (botonSeleccionado.value === "c-row-reverse") {
            $cRow.classList.remove("c-row");
            $cRow.classList.add("c-row-reverse");
        }
    }
    $botonesRadio.forEach(boton => {
        boton.addEventListener("change", seleccion)
    })
    seleccion();
})(document);

((d) => {
    const $botonesRadio = d.querySelectorAll("input[name='column']");
    const $cColumn = d.getElementById('column');
    const seleccion = () => {
        let botonSeleccionado = d.querySelector('input[name="column"]:checked');
        if (botonSeleccionado.value === "c-column") {
            $cColumn.classList.remove("c-column-reverse");
            $cColumn.classList.add("c-column");
        } else if (botonSeleccionado.value === "c-column-reverse") {
            $cColumn.classList.remove("c-column");
            $cColumn.classList.add("c-column-reverse");
        }
    }
    $botonesRadio.forEach(boton => {
        boton.addEventListener("change", seleccion)
    })
    seleccion();
})(document)