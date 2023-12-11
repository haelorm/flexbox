((d) => {
    const $botonesRadio = d.querySelectorAll("input[name='flex-direction']");
    const $cflexDirection = d.getElementById('flex-direction');
    const seleccion = () => {
        let botonSeleccionado = d.querySelector('input[name="flex-direction"]:checked');
        if (botonSeleccionado.value === "row") {
            $cflexDirection.classList.add("row");
            $cflexDirection.classList.remove("row-reverse", "column", "column-reverse");
        } else if (botonSeleccionado.value === "row-reverse") {
            $cflexDirection.classList.add("row-reverse");
            $cflexDirection.classList.remove("row", "column", "column-reverse");
        } else if (botonSeleccionado.value === "column") {
            $cflexDirection.classList.add("column");
            $cflexDirection.classList.remove("row", "row-reverse", "column-reverse");
        } else if (botonSeleccionado.value === "column-reverse") {
            $cflexDirection.classList.add("column-reverse");
            $cflexDirection.classList.remove("row", "row-reverse", "column");
        }
    }
    $botonesRadio.forEach(boton => {
        boton.addEventListener("change", seleccion)
    })
    seleccion();
})(document);

((d) => {
    const $botonesRadio = d.querySelectorAll("input[name='flex-wrap']");
    const $cflexWrap = d.getElementById('flex-wrap');
    const seleccion = () => {
        let botonSeleccionado = d.querySelector('input[name="flex-wrap"]:checked');
        if (botonSeleccionado.value === "nowrap") {
            $cflexWrap.classList.add("nowrap");
            $cflexWrap.classList.remove("wrap", "wrap-reverse");
        } else if (botonSeleccionado.value === "wrap") {
            $cflexWrap.classList.add("wrap");
            $cflexWrap.classList.remove("nowrap", "wrap-reverse");
        } else if (botonSeleccionado.value === "wrap-reverse") {
            $cflexWrap.classList.add("wrap-reverse");
            $cflexWrap.classList.remove("nowrap", "wrap");
        }
    }
    $botonesRadio.forEach(boton => {
        boton.addEventListener("change", seleccion)
    })
    seleccion();
})(document);

((d) => {
    const $botonesRadio = d.querySelectorAll("input[name='flex-wrap-column']");
    const $cflexWrapColumn = d.getElementById('flex-wrap-column');
    const seleccion = () => {
        let botonSeleccionado = d.querySelector('input[name="flex-wrap-column"]:checked');
        if (botonSeleccionado.value === "nowrap") {
            $cflexWrapColumn.classList.add("nowrap");
            $cflexWrapColumn.classList.remove("wrap", "wrap-reverse");
        } else if (botonSeleccionado.value === "wrap") {
            $cflexWrapColumn.classList.add("wrap");
            $cflexWrapColumn.classList.remove("nowrap", "wrap-reverse");
        } else if (botonSeleccionado.value === "wrap-reverse") {
            $cflexWrapColumn.classList.add("wrap-reverse");
            $cflexWrapColumn.classList.remove("nowrap", "wrap");
        }
    }
    $botonesRadio.forEach(boton => {
        boton.addEventListener("change", seleccion)
    })
    seleccion();
})(document);