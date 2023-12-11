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
    const $botonesRadio = d.querySelectorAll("input[name='flex-w-column']");
    const $cflexWrapColumn = d.getElementById('flex-w-column');
    const seleccion = () => {
        let botonSeleccionado = d.querySelector('input[name="flex-w-column"]:checked');
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

((d) => {
    const $botonesRadio = d.querySelectorAll("input[name='justify-content']");
    const $cJustifyContent = d.getElementById('justify-content');
    const seleccion = () => {
        let botonSeleccionado = d.querySelector('input[name="justify-content"]:checked');
        if (botonSeleccionado.value === "flex-start") {
            $cJustifyContent.classList.add("flex-start");
            $cJustifyContent.classList.remove("flex-end", "center", "space-between", "space-around", "space-evenly");
        } else if (botonSeleccionado.value === "flex-end") {
            $cJustifyContent.classList.add("flex-end");
            $cJustifyContent.classList.remove("flex-start", "center", "space-between", "space-around", "space-evenly");
        } else if (botonSeleccionado.value === "center") {
            $cJustifyContent.classList.add("center");
            $cJustifyContent.classList.remove("flex-start", "flex-end", "space-between", "space-around", "space-evenly");
        } else if (botonSeleccionado.value === "space-between") {
            $cJustifyContent.classList.add("space-between");
            $cJustifyContent.classList.remove("flex-start", "center", "flex-end", "space-around", "space-evenly");
        } else if (botonSeleccionado.value === "space-around") {
            $cJustifyContent.classList.add("space-around");
            $cJustifyContent.classList.remove("flex-start", "center", "space-between", "flex-end", "space-evenly");
        } else if (botonSeleccionado.value === "space-evenly") {
            $cJustifyContent.classList.add("space-evenly");
            $cJustifyContent.classList.remove("flex-start", "center", "space-between", "space-around", "flex-end");
        }
    }
    $botonesRadio.forEach(boton => {
        boton.addEventListener("change", seleccion)
    })
    seleccion();
})(document);

((d) => {
    const $botonesRadio = d.querySelectorAll("input[name='justify-c-column']");
    const $cJustifyContentColumn = d.getElementById('justify-c-column');
    const seleccion = () => {
        let botonSeleccionado = d.querySelector('input[name="justify-c-column"]:checked');
        if (botonSeleccionado.value === "flex-start") {
            $cJustifyContentColumn.classList.add("flex-start");
            $cJustifyContentColumn.classList.remove("flex-end", "center", "space-between", "space-around", "space-evenly");
        } else if (botonSeleccionado.value === "flex-end") {
            $cJustifyContentColumn.classList.add("flex-end");
            $cJustifyContentColumn.classList.remove("flex-start", "center", "space-between", "space-around", "space-evenly");
        } else if (botonSeleccionado.value === "center") {
            $cJustifyContentColumn.classList.add("center");
            $cJustifyContentColumn.classList.remove("flex-start", "flex-end", "space-between", "space-around", "space-evenly");
        } else if (botonSeleccionado.value === "space-between") {
            $cJustifyContentColumn.classList.add("space-between");
            $cJustifyContentColumn.classList.remove("flex-start", "center", "flex-end", "space-around", "space-evenly");
        } else if (botonSeleccionado.value === "space-around") {
            $cJustifyContentColumn.classList.add("space-around");
            $cJustifyContentColumn.classList.remove("flex-start", "center", "space-between", "flex-end", "space-evenly");
        } else if (botonSeleccionado.value === "space-evenly") {
            $cJustifyContentColumn.classList.add("space-evenly");
            $cJustifyContentColumn.classList.remove("flex-start", "center", "space-between", "space-around", "flex-end");
        }
    }
    $botonesRadio.forEach(boton => {
        boton.addEventListener("change", seleccion)
    })
    seleccion();
})(document);