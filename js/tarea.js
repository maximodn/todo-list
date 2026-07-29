function agregar() {
        const input = document.getElementById("n-tarea");
        const valor = input.value;
        const tarea = cargarTarea();

        if (valor.length !== 0) {
            tarea.push({
            id: valor,
            completada: false
            });
        } else {
            alert("No se permiten tareas vacias")
        }
        guardarTarea(tarea);

        mostarLT();
        mostrarT();
}

function eliminar(id) {
    let tarea = cargarTarea();
    tarea = tarea.filter(tarea => tarea.id !== id);
    guardarTarea(tarea);

    mostarLT();
}

function marca(id, estaCompleta) {  
    let tareas = cargarTarea();
    tareas = tareas.map(tarea => {
    if (tarea.id === id) {
        tarea.completada = estaCompleta;
    }
    return tarea;
    });

    guardarTarea(tareas)
    mostarLT();
}

