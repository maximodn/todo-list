function agregar() {
        const input = document.getElementById("n-tarea");
        const valor = input.value;
        console.log(valor);

        const tarea = cargarTarea();
        tarea.push({
            id: valor,
            completada: false
        });
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